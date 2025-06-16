---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G3V5HH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEOjvFaRIi6rI5Fa%2Bv3HFhPALjQxAbaf1MkCKJtt5%2BM9AiAS%2FFSCsJ5eYJetzVUlLcz8ji4B0ZcFHOkdVPZBORmh0yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMmTNaRKh0eGRQgLuqKtwDIqkXsFMA0%2BQ%2FM%2B01unH97LufkDsNGAMbQ33Ln5dIyINRVsCoIElQn2i0rEDiQpSfc8L%2B%2B94m27tZk%2BxCWIGiITAa9QZ2ybBFlr0O0ucyh9eVMCuF99t0j4Q11CAqD4xEJNiQTfHGrHvDRYIuWlL4O2X%2FJmi0ftIPj0j53fyUGEbhuMxurOQkeZjE1QkMH%2BtEjuYKYC9kxBY5Q8Hu%2BKlC50bDD7Qs5pWB0UzhYlEeSXrXBCARathRVRV0isjB9eOa49WmjZZQ8orM8QS20sxj%2BJo5Pw5gdp3V9hcrBt%2BYDBKMmkCsVGDG36u5MfpY05FVa2wtAFw5bN5ftCgzKgV6rAtoinROdMD417WVr82u5oGr2luEh3xxaFyN%2FPaj54PHCfgTgQ7BMfLZVmHMJe9dYLQ2UBPF%2B9%2FgbMtllTa0%2Fv%2FFdpmmm4%2FkuV3LT%2BfQKk4XER%2Fp45ChHoZ%2FrtdpShtEm8PqJZjDIT4zxDnT2FdO1LnjuTlT5d%2FbPj0J7ahEDlCjArYqdubelnuwSxLEhgJoigoQxwpA8loqH%2BypNmO%2FK7AAeJW%2Fbz3H3EPe2fTVuG1ujWsC3hK7ExMClO4d1tATRuajBuCwZ2yY5RsD04tJdcFzVAsUXAZgRhBfqQMws47CwgY6pgHAsGcOaPnTfU2YZHTDrwUGLjgp2zCot9a4rJO8SUjaOgxpu02Px85ieRbN14Ss3z%2BcLl%2FtbylSrzTM%2F%2B3WRze4uTuCZG%2BV0DRmHzQgQGM5g6%2FaKbxxc3zj23anvksw3DgPkAOwVFIlakrmE5neC2WGAH4M95knqvqcwnM1jkZ9RNSlnYp6T%2BXZOSCu4sjwVmcgSfC%2B3itVyO7JmhMH767EhXGF4wla&X-Amz-Signature=8f9af9ecbac05447b922ae8ba88779bb5da2ddc63773af85c66414e550569e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G3V5HH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEOjvFaRIi6rI5Fa%2Bv3HFhPALjQxAbaf1MkCKJtt5%2BM9AiAS%2FFSCsJ5eYJetzVUlLcz8ji4B0ZcFHOkdVPZBORmh0yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMmTNaRKh0eGRQgLuqKtwDIqkXsFMA0%2BQ%2FM%2B01unH97LufkDsNGAMbQ33Ln5dIyINRVsCoIElQn2i0rEDiQpSfc8L%2B%2B94m27tZk%2BxCWIGiITAa9QZ2ybBFlr0O0ucyh9eVMCuF99t0j4Q11CAqD4xEJNiQTfHGrHvDRYIuWlL4O2X%2FJmi0ftIPj0j53fyUGEbhuMxurOQkeZjE1QkMH%2BtEjuYKYC9kxBY5Q8Hu%2BKlC50bDD7Qs5pWB0UzhYlEeSXrXBCARathRVRV0isjB9eOa49WmjZZQ8orM8QS20sxj%2BJo5Pw5gdp3V9hcrBt%2BYDBKMmkCsVGDG36u5MfpY05FVa2wtAFw5bN5ftCgzKgV6rAtoinROdMD417WVr82u5oGr2luEh3xxaFyN%2FPaj54PHCfgTgQ7BMfLZVmHMJe9dYLQ2UBPF%2B9%2FgbMtllTa0%2Fv%2FFdpmmm4%2FkuV3LT%2BfQKk4XER%2Fp45ChHoZ%2FrtdpShtEm8PqJZjDIT4zxDnT2FdO1LnjuTlT5d%2FbPj0J7ahEDlCjArYqdubelnuwSxLEhgJoigoQxwpA8loqH%2BypNmO%2FK7AAeJW%2Fbz3H3EPe2fTVuG1ujWsC3hK7ExMClO4d1tATRuajBuCwZ2yY5RsD04tJdcFzVAsUXAZgRhBfqQMws47CwgY6pgHAsGcOaPnTfU2YZHTDrwUGLjgp2zCot9a4rJO8SUjaOgxpu02Px85ieRbN14Ss3z%2BcLl%2FtbylSrzTM%2F%2B3WRze4uTuCZG%2BV0DRmHzQgQGM5g6%2FaKbxxc3zj23anvksw3DgPkAOwVFIlakrmE5neC2WGAH4M95knqvqcwnM1jkZ9RNSlnYp6T%2BXZOSCu4sjwVmcgSfC%2B3itVyO7JmhMH767EhXGF4wla&X-Amz-Signature=8a554a844f885d6f64bc3e861d8322d15325f140b310e810fe8ec3a1d4495a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
