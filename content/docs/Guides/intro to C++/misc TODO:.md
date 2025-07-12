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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT2PFYM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEzhWl3Iesae3f%2BLv5M8B7rTfn6TAAHn4YwTrUSJ543AiAP9UQ4Gznmt0zvWpgNLf2won8g8jTwVO9EUyYIbj5gcCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktD1I3u34VQvsMRsKtwDWie0GVEv91nklb%2Be1AwjJOTHrpWWz%2FuAJPDwnBVYUhjLmimtN1XYN5oM4LtySJmOnDQyEGhsrQedgI7Rr%2Ft6bI%2Fkh9JF5d2d%2FYGJ9IUjbzwhEb%2FjtbOKKivWeJyxl9nAFXogPNa45kRWHFqKWHa8%2F7xWGbrFpQ1aZPzzcHYkDG%2BFFZQksReVUdGuaD8G%2BSBUbsswTZIEqUKHOgukXtTE2P%2BcibM53nqSPFnBsVpNyHt9fA5Gv4RYjCpKa9Xxc7k78evvclepQEqw2XlgI1vxJ7NQ%2BL9R8I2eKV7bUdWYfWOwQaAIFjpmQgIML0QZfRXEhyd0iNqBWOhqgpS45iDnellIhvo4N7jSvDfph7FkZgSMehSBOOMfZCzAcwX5sWeYihwc5MgAVrEGhVrtpYarexLeI4b0YxNsOG%2F%2BtpZPy5kD1T3jVrjtdx9thmWDgw1jLcdAwq1aj%2B48iOT7UA6zQzGPt5n%2Fa3t1jBNpRueGQSUFOUmIWjUzAJJ0qodrf2F%2BaRvF%2B4vzdXRobXcEifzwSyP%2FoKKpmct5g1a0CfCAM%2F8Sk0w5YJuZCL%2B4LizeFF6Xa6KrGGXrDz7Ay2Zn8GRCn0i1GpWnMzG9A8OnAFbBd%2ByJIJ%2FkXAY01doEnNswt%2FzIwwY6pgEE6N2SVcTy0Z55uPMLWHhWlWpD0%2FSjh8IX%2Fs0MUvaKrYN3Nt8NFYlUDH6i3CBVWRTGsUiFHGlcPJN0Tc%2BBJVTiF63z%2BsG2mgklDsugxfobOy3nzjygsi5xUXySxTXzPk3iAGaXVLJNKJLMjROXnRVxA2g6hiosfg8DmI7bIx9X8oUBdD0x2JRz7WLZufIlocOozMMuAV245sARkzMTbMahOziRN%2Fz9&X-Amz-Signature=084a36bdbb744fc1e73e9a5afb1554399e0802f536d50cdd596e1ad22dd9471a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT2PFYM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEzhWl3Iesae3f%2BLv5M8B7rTfn6TAAHn4YwTrUSJ543AiAP9UQ4Gznmt0zvWpgNLf2won8g8jTwVO9EUyYIbj5gcCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktD1I3u34VQvsMRsKtwDWie0GVEv91nklb%2Be1AwjJOTHrpWWz%2FuAJPDwnBVYUhjLmimtN1XYN5oM4LtySJmOnDQyEGhsrQedgI7Rr%2Ft6bI%2Fkh9JF5d2d%2FYGJ9IUjbzwhEb%2FjtbOKKivWeJyxl9nAFXogPNa45kRWHFqKWHa8%2F7xWGbrFpQ1aZPzzcHYkDG%2BFFZQksReVUdGuaD8G%2BSBUbsswTZIEqUKHOgukXtTE2P%2BcibM53nqSPFnBsVpNyHt9fA5Gv4RYjCpKa9Xxc7k78evvclepQEqw2XlgI1vxJ7NQ%2BL9R8I2eKV7bUdWYfWOwQaAIFjpmQgIML0QZfRXEhyd0iNqBWOhqgpS45iDnellIhvo4N7jSvDfph7FkZgSMehSBOOMfZCzAcwX5sWeYihwc5MgAVrEGhVrtpYarexLeI4b0YxNsOG%2F%2BtpZPy5kD1T3jVrjtdx9thmWDgw1jLcdAwq1aj%2B48iOT7UA6zQzGPt5n%2Fa3t1jBNpRueGQSUFOUmIWjUzAJJ0qodrf2F%2BaRvF%2B4vzdXRobXcEifzwSyP%2FoKKpmct5g1a0CfCAM%2F8Sk0w5YJuZCL%2B4LizeFF6Xa6KrGGXrDz7Ay2Zn8GRCn0i1GpWnMzG9A8OnAFbBd%2ByJIJ%2FkXAY01doEnNswt%2FzIwwY6pgEE6N2SVcTy0Z55uPMLWHhWlWpD0%2FSjh8IX%2Fs0MUvaKrYN3Nt8NFYlUDH6i3CBVWRTGsUiFHGlcPJN0Tc%2BBJVTiF63z%2BsG2mgklDsugxfobOy3nzjygsi5xUXySxTXzPk3iAGaXVLJNKJLMjROXnRVxA2g6hiosfg8DmI7bIx9X8oUBdD0x2JRz7WLZufIlocOozMMuAV245sARkzMTbMahOziRN%2Fz9&X-Amz-Signature=fbf7ba172506ce46019c30a4be0a3b238fd325025747eb62d0d095cf300975e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
