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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LY55ASI%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIChod%2FDRBG%2BEiGVx1aGfxUfxznu4DtcQiE1B3xdSvq76AiB%2FrdxSHJtD67Ib9qi8pWcM0nM%2BYTdPktoY26PSt6Q0gyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgj8I%2F7TsUNinEIcTKtwDXGEH8Wob3ObWh8F2EaHC%2FU6EjOYRTT4w7qyouI2%2FiyIXS0%2FV7jT9VxL2iXM%2FoIuXftBq2TlvS8sR9XoTnihrU5FfUsER%2Bt4IBQXEa%2FZs2%2FrrnT%2Fytq8EYspfbjzmRJKKavsoUSSjRI8TwTkpT%2FBstlLC00kXsmQ%2B3vySWgB6j9KlvOLMs4dCcGntA09UAWZV8MZNH9PWF3k0wHJX7UNNjeczOKv7q8NGLUF%2BbQSXe4cLwLzp6BjsQcurlubl9%2Bz1ldOZjGuYtivG7En97OHJBBkDy70jqdqg0afBhXPtV8VQBOz3EZdIRV%2BXbJ%2Bd%2Bl4VNjUKzv%2BxW4I25BKGzSEL%2FkcVit6EjmPXFtj8LA3olwI1l3VZRbjSyT4MhlQqy6q8IYTHGka8wsTyWa1ekWDfHLNwpfO7hXwxMpgxbMNClREdyhSdJR3yl9CSKKgg01aFr0Sai51vtkYS%2Fc3mAJAP%2BTgYI4QMehsdOZonn7oyAmKi1iCJf5RRGxzIB9sAwP%2BL%2F4mKTlW271pa73cxfz4XcOfIEC3h9oZobvp%2BB07BAn1g0xcSIYK%2Fc7P8Abiq30PmYFzui1AtBs1JsHOxlHux%2BrqxEnpClrYpz3RPtY6JOVGERpDDdme7PxqQiW4w6JmnwAY6pgGIrE1Fkz5Bh5%2FQ9ImhxOzyQbpSiWcnUPdsMdwKeLuNfORt7l0OFWR6Q4LpH9EvOmtjJvjHQVYIEyVrmTWwQ8vzAeyRez2qnEyX8%2B6oH8cDK7gR1APO8MVwLxh5P0Xt62yvZL0yiw1%2FAnelAVhR9BM%2FWRQil9QIBVIP6ebEmxgl94ytF4A2YqVBhxV6SQNKjkwwA1VXK8wDLpYZXIMhtgwG3SnCDSh7&X-Amz-Signature=561df3068d4d6d0bf0c68e5cbc5e10022a4c0cfad8b2413a6ce1e738461e9e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LY55ASI%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIChod%2FDRBG%2BEiGVx1aGfxUfxznu4DtcQiE1B3xdSvq76AiB%2FrdxSHJtD67Ib9qi8pWcM0nM%2BYTdPktoY26PSt6Q0gyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgj8I%2F7TsUNinEIcTKtwDXGEH8Wob3ObWh8F2EaHC%2FU6EjOYRTT4w7qyouI2%2FiyIXS0%2FV7jT9VxL2iXM%2FoIuXftBq2TlvS8sR9XoTnihrU5FfUsER%2Bt4IBQXEa%2FZs2%2FrrnT%2Fytq8EYspfbjzmRJKKavsoUSSjRI8TwTkpT%2FBstlLC00kXsmQ%2B3vySWgB6j9KlvOLMs4dCcGntA09UAWZV8MZNH9PWF3k0wHJX7UNNjeczOKv7q8NGLUF%2BbQSXe4cLwLzp6BjsQcurlubl9%2Bz1ldOZjGuYtivG7En97OHJBBkDy70jqdqg0afBhXPtV8VQBOz3EZdIRV%2BXbJ%2Bd%2Bl4VNjUKzv%2BxW4I25BKGzSEL%2FkcVit6EjmPXFtj8LA3olwI1l3VZRbjSyT4MhlQqy6q8IYTHGka8wsTyWa1ekWDfHLNwpfO7hXwxMpgxbMNClREdyhSdJR3yl9CSKKgg01aFr0Sai51vtkYS%2Fc3mAJAP%2BTgYI4QMehsdOZonn7oyAmKi1iCJf5RRGxzIB9sAwP%2BL%2F4mKTlW271pa73cxfz4XcOfIEC3h9oZobvp%2BB07BAn1g0xcSIYK%2Fc7P8Abiq30PmYFzui1AtBs1JsHOxlHux%2BrqxEnpClrYpz3RPtY6JOVGERpDDdme7PxqQiW4w6JmnwAY6pgGIrE1Fkz5Bh5%2FQ9ImhxOzyQbpSiWcnUPdsMdwKeLuNfORt7l0OFWR6Q4LpH9EvOmtjJvjHQVYIEyVrmTWwQ8vzAeyRez2qnEyX8%2B6oH8cDK7gR1APO8MVwLxh5P0Xt62yvZL0yiw1%2FAnelAVhR9BM%2FWRQil9QIBVIP6ebEmxgl94ytF4A2YqVBhxV6SQNKjkwwA1VXK8wDLpYZXIMhtgwG3SnCDSh7&X-Amz-Signature=784e9de28a24b92f53b19b48a5c35c4f45f0c46183d45b82551bbdca4365af7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
