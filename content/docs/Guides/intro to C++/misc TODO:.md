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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNSDBPA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuMhXUUZsEtCdPNrxJLLe%2FMlbrQimNMk1rhhcJx7Ix5AiEAzI9NBLS4x2Vd%2BPonh4Sk2jrzuy2RQhq56okf0LrlSIoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGqeuirnp3HIkI%2FEUircA8XvFiM%2FIwPBllceeF1rdjAM%2FuaEsuOlfPWeEnLaaFE91FcCEqv%2FdhVGpNetemfM6xfqZsm6Q1vz3qAgWyo60A7NBFXpn4LuWsz4WmdJMgnI0hpva5mfBxRtVLhSVqnPtixsubcS%2FrkZzlxydMPXUB2J4wHMOOw%2FH4qx1wG4Cjty0CRj1bcjzKbeuXyKSpUjntNiuCTjQOX6T42FIKQHSeHhGl5V8R7Wa15IegZjz3a6SeNIQGNGIRRrpcnF8h2wsuireUxqEU41pDU3QIXMkUVDNegnftUmXntdNYtps0AVO3NrWHJ03nmx%2FxBPz4514CnaAe%2F86BTX5IxxK9MXiBdNEHTw1sg6dKJJHsYBlx28KKoIAi3a56YCuVERtUzxHxzATpInTCsGk5EsOUi15K41hQAHx7b8mmeW03MFhP7Y5V38XNIMqhrjPfU9e3rUt%2FJHxgBtl%2Fc10oqGaQ3EyWfT4HgIl%2FSyymzLkZiOtqPPffr2BD%2BFRypZzB%2BKCchxYQiTd0CUW7k%2FnoaP2INM%2BZfmR111jFMt618XeVCWZrwyZEGluK9yk8SKy7Xm3fRz%2Fkeo7Bf7sGEj6bAcrnAQzgeRGp4rBUhB%2BqfDfwU2iDPtGGn83OMRtLrnyhbqMOmUlb8GOqUBx0e9XpAB%2BJJ0w37a8ziIw3hUmQdTcOcw0yNmcpnbJlf%2FKg2hM6tfM8mg1Gp9enwkzmU3cg1BSkNxycIzazgXRd1th8beXbxQpfL4iExAaMhdT04%2FB004Iunpus%2FIu3kApsivzOWxX%2FZ3TuBXFrclHzQoUztRe5v1M%2BAOb1aN7nUVWWkujPPKjSjSH6a5u%2BrHoJSVydyesY7rxEF9Apa%2FdOzYikf2&X-Amz-Signature=760c4d055f7306a3ae82db29a3d6973413c7c5ee753b3332825cc6b8a7f0b926&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNSDBPA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuMhXUUZsEtCdPNrxJLLe%2FMlbrQimNMk1rhhcJx7Ix5AiEAzI9NBLS4x2Vd%2BPonh4Sk2jrzuy2RQhq56okf0LrlSIoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGqeuirnp3HIkI%2FEUircA8XvFiM%2FIwPBllceeF1rdjAM%2FuaEsuOlfPWeEnLaaFE91FcCEqv%2FdhVGpNetemfM6xfqZsm6Q1vz3qAgWyo60A7NBFXpn4LuWsz4WmdJMgnI0hpva5mfBxRtVLhSVqnPtixsubcS%2FrkZzlxydMPXUB2J4wHMOOw%2FH4qx1wG4Cjty0CRj1bcjzKbeuXyKSpUjntNiuCTjQOX6T42FIKQHSeHhGl5V8R7Wa15IegZjz3a6SeNIQGNGIRRrpcnF8h2wsuireUxqEU41pDU3QIXMkUVDNegnftUmXntdNYtps0AVO3NrWHJ03nmx%2FxBPz4514CnaAe%2F86BTX5IxxK9MXiBdNEHTw1sg6dKJJHsYBlx28KKoIAi3a56YCuVERtUzxHxzATpInTCsGk5EsOUi15K41hQAHx7b8mmeW03MFhP7Y5V38XNIMqhrjPfU9e3rUt%2FJHxgBtl%2Fc10oqGaQ3EyWfT4HgIl%2FSyymzLkZiOtqPPffr2BD%2BFRypZzB%2BKCchxYQiTd0CUW7k%2FnoaP2INM%2BZfmR111jFMt618XeVCWZrwyZEGluK9yk8SKy7Xm3fRz%2Fkeo7Bf7sGEj6bAcrnAQzgeRGp4rBUhB%2BqfDfwU2iDPtGGn83OMRtLrnyhbqMOmUlb8GOqUBx0e9XpAB%2BJJ0w37a8ziIw3hUmQdTcOcw0yNmcpnbJlf%2FKg2hM6tfM8mg1Gp9enwkzmU3cg1BSkNxycIzazgXRd1th8beXbxQpfL4iExAaMhdT04%2FB004Iunpus%2FIu3kApsivzOWxX%2FZ3TuBXFrclHzQoUztRe5v1M%2BAOb1aN7nUVWWkujPPKjSjSH6a5u%2BrHoJSVydyesY7rxEF9Apa%2FdOzYikf2&X-Amz-Signature=a8c2d10b2df12056bd170b26b4404c6a50d3f44084b1e5aafdfdea3d0f2a3a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
