# v0.1.0
# { "Depends": "py-genlayer:latest" }

from genlayer import *
import typing


class WheelGame(gl.Contract):

    last_result: str
    total_spins: u256

    def __init__(self):
        self.last_result = ""
        self.total_spins = u256(0)

    @gl.public.write
    def record_spin(self, result: str) -> str:
        self.last_result = result
        self.total_spins += u256(1)
        return "Spin recorded"

    @gl.public.view
    def get_last_result(self) -> str:
        return self.last_result

    @gl.public.view
    def get_total_spins(self) -> u256:
        return self.total_spins
