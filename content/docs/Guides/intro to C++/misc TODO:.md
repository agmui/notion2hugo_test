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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXFJ5QL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHVwiMsJ7rmGX6zZwdhEDtjtSPSg0NVIm71MoKvOdM8AIgTSnSRPPQnfYfwnDMgEEuekKoAurZbDQ39mXi2LFwEnoq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDObtavOG%2FJ4OSpzWpSrcAys%2FWXzXbCRDvHeLvlE5IhVjTaZ29DDAsITKf%2FoZpgoKoZWoqHdS5gySyx5SBNOVQt793NoyMcKf2btJ2hWSIEIg85niwKBn1M%2B4ub6Sm1qd9uJ1SKBIfWIHRpv4NOpGibwamXiLo5LVFRPqBXxnN1jvscx%2B2xiex9k6smg5rl4F5T2SuRPIfnDteB7ieuWAPirAmpfGxCNzy0IoK6izFnly%2FasQjqYubJfNCXSJgIyPcaKhxJ40TB7kGGcRmF0U8N9HeNC2qf%2FDGvuL8uHazNQhCqfZGKm85QMrXScxD0jLwfvGV71JnBUghWR6sLkGK8KhMW3Bn6CrbeOpq6OPiIjiWokIjJE8CFv%2BD5bkISfWiceGZau4XKJMyvGuVVVKB%2FC3fPbkTACBzPpqA%2Bjah7dlOPY6QXCcM0Um%2F0FZjc4JSznzbk7EkZWfVqnPAZQQQZhY4XOVQe%2B6Bj%2BIEMQ5bUJNoncY4aGS910zRa1ETd8Inqz%2FyXIuhNdwXwZEosPUh6L%2FQ7iU0kF0pwwtLZ5ZLH6NEzzOjI72F7yIUTh1ddQNjV%2FP2DGYAJ6UhrdI2cIvI2B2bk6LQu7pkBKmbKJNCp399k95L2QGP0BghD1GzXGqLQwLq2CVHOvlOKevMMCGt70GOqUBjkITqa2%2FE5qv%2F1rGG83p1XSXAeIiHhqgCX4T45GVJgHG8JK9L2IULw88AKApC76Qtw4%2FKZtR3T%2BDY49m2hASv64b6j0HQi3dtMLG3FoZ5pVh1DmTuWkAZN6tDNR%2BZdbwZ0rYEFvfp%2BLW0x%2Bd5AhGakNp6UeEnVPzg1RGrex9b9I2Ojhs7fIt3sffoBdvjpFtQJw3X0LAfzWuYql4uGN9XETrhtD2&X-Amz-Signature=2ce91ed275cb1e068eaf7e2fbcecb28828d7bb9d6e89a940d26cbde862adc19a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXFJ5QL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHVwiMsJ7rmGX6zZwdhEDtjtSPSg0NVIm71MoKvOdM8AIgTSnSRPPQnfYfwnDMgEEuekKoAurZbDQ39mXi2LFwEnoq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDObtavOG%2FJ4OSpzWpSrcAys%2FWXzXbCRDvHeLvlE5IhVjTaZ29DDAsITKf%2FoZpgoKoZWoqHdS5gySyx5SBNOVQt793NoyMcKf2btJ2hWSIEIg85niwKBn1M%2B4ub6Sm1qd9uJ1SKBIfWIHRpv4NOpGibwamXiLo5LVFRPqBXxnN1jvscx%2B2xiex9k6smg5rl4F5T2SuRPIfnDteB7ieuWAPirAmpfGxCNzy0IoK6izFnly%2FasQjqYubJfNCXSJgIyPcaKhxJ40TB7kGGcRmF0U8N9HeNC2qf%2FDGvuL8uHazNQhCqfZGKm85QMrXScxD0jLwfvGV71JnBUghWR6sLkGK8KhMW3Bn6CrbeOpq6OPiIjiWokIjJE8CFv%2BD5bkISfWiceGZau4XKJMyvGuVVVKB%2FC3fPbkTACBzPpqA%2Bjah7dlOPY6QXCcM0Um%2F0FZjc4JSznzbk7EkZWfVqnPAZQQQZhY4XOVQe%2B6Bj%2BIEMQ5bUJNoncY4aGS910zRa1ETd8Inqz%2FyXIuhNdwXwZEosPUh6L%2FQ7iU0kF0pwwtLZ5ZLH6NEzzOjI72F7yIUTh1ddQNjV%2FP2DGYAJ6UhrdI2cIvI2B2bk6LQu7pkBKmbKJNCp399k95L2QGP0BghD1GzXGqLQwLq2CVHOvlOKevMMCGt70GOqUBjkITqa2%2FE5qv%2F1rGG83p1XSXAeIiHhqgCX4T45GVJgHG8JK9L2IULw88AKApC76Qtw4%2FKZtR3T%2BDY49m2hASv64b6j0HQi3dtMLG3FoZ5pVh1DmTuWkAZN6tDNR%2BZdbwZ0rYEFvfp%2BLW0x%2Bd5AhGakNp6UeEnVPzg1RGrex9b9I2Ojhs7fIt3sffoBdvjpFtQJw3X0LAfzWuYql4uGN9XETrhtD2&X-Amz-Signature=9a6231df83c0690a051dbc8e3eb919f404c00e7c958ad656524f67855aa942cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
