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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJKJLMPV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD7w%2Fux4rqvLP4SsesTEkMhD9pxDwUX9VdACrsRHc1u9wIhAPURUMRJGqjMoMAL4BTiKw4sgJU13HEnRc3jUpx9ldbtKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytIFvedWXIgaGSC9Aq3APIE%2Fn1bs6RhAsU%2BZy8J9DhwDWbl7qv7Wgeb3dqBE0psbDyQKohvGC5ddJsk5OC61PDduyr8fo5tmsPypBU5zisEbXQ56NRpb7OBRb5lCEBIZmCY%2F3i%2FaFbGC2QrZgdK8i9s%2FwXxePzJ0Y%2FEuH6sGsHP8M7pwxbwXlwV7tuwnm9qN%2B76muMaauD7Ip49M7JS%2B1rQGHr%2FABhgbi6jLXz%2FM9yRum7dPbkEiMVliIFtRgec5dAjWFcsaDi5%2FybpbSXU1D77TTiXoTdVI%2F1ihUeL2873x1EUtzbN1%2FswktZMtaUvrx%2BvT6trJnP%2BaLoBO%2BgDqDSgT3bO01Ecqrr19C6CSjOzJqTejRJO9RXVYYalW67LdZJ3M3cDTi%2F632wVfKeDzeNNZJ8z1zkOnylqFloMTp8OVLf8t%2FGsa8U59IeJ2AM6SJu3aNwkhNkPhDCGEGqKDtMxUQSWwMgfYG9mLj8b8fuuhPBmnwcChxMpSq9qYwxYlOVl1J5ILMIrtqVCnFIUdONQdmUoTBNf4QqkhMkC2mpdCBO0X2jebKackeAicOJLb7g1LLOLUhbNFoiXRDUOPa6WBH2Bv%2F%2F4%2Bnc3xkPhrO80yOl0hufmCj9W0KzmWQvCbVZbSB9jgEFYrFIRDDI%2Fu7BBjqkAT0wWthfs%2BHSSFGmvHipyQc6dqa8sOipooq25uX6cIz9U%2FFdYntCqZUsO8ysEHhne3Lb4qoToqzHuqpbrgziE8nlUDEQ8c82xOU2jyUpblvOQw3xDmJ190lA6V2cIJFjrQd2NDZBKbe1pofIoaQ%2FRhSY4PbkhLtSZqnjscbjz8Yx5mzQONme8P90Vo0%2B2NkFI8SM1LPPIV4KlgXmwEJ8m%2FNGmZ0%2B&X-Amz-Signature=7f45721a15230ec24dde67b1c11c422389dd6c2d788867429d86be3074f4e997&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJKJLMPV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQD7w%2Fux4rqvLP4SsesTEkMhD9pxDwUX9VdACrsRHc1u9wIhAPURUMRJGqjMoMAL4BTiKw4sgJU13HEnRc3jUpx9ldbtKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytIFvedWXIgaGSC9Aq3APIE%2Fn1bs6RhAsU%2BZy8J9DhwDWbl7qv7Wgeb3dqBE0psbDyQKohvGC5ddJsk5OC61PDduyr8fo5tmsPypBU5zisEbXQ56NRpb7OBRb5lCEBIZmCY%2F3i%2FaFbGC2QrZgdK8i9s%2FwXxePzJ0Y%2FEuH6sGsHP8M7pwxbwXlwV7tuwnm9qN%2B76muMaauD7Ip49M7JS%2B1rQGHr%2FABhgbi6jLXz%2FM9yRum7dPbkEiMVliIFtRgec5dAjWFcsaDi5%2FybpbSXU1D77TTiXoTdVI%2F1ihUeL2873x1EUtzbN1%2FswktZMtaUvrx%2BvT6trJnP%2BaLoBO%2BgDqDSgT3bO01Ecqrr19C6CSjOzJqTejRJO9RXVYYalW67LdZJ3M3cDTi%2F632wVfKeDzeNNZJ8z1zkOnylqFloMTp8OVLf8t%2FGsa8U59IeJ2AM6SJu3aNwkhNkPhDCGEGqKDtMxUQSWwMgfYG9mLj8b8fuuhPBmnwcChxMpSq9qYwxYlOVl1J5ILMIrtqVCnFIUdONQdmUoTBNf4QqkhMkC2mpdCBO0X2jebKackeAicOJLb7g1LLOLUhbNFoiXRDUOPa6WBH2Bv%2F%2F4%2Bnc3xkPhrO80yOl0hufmCj9W0KzmWQvCbVZbSB9jgEFYrFIRDDI%2Fu7BBjqkAT0wWthfs%2BHSSFGmvHipyQc6dqa8sOipooq25uX6cIz9U%2FFdYntCqZUsO8ysEHhne3Lb4qoToqzHuqpbrgziE8nlUDEQ8c82xOU2jyUpblvOQw3xDmJ190lA6V2cIJFjrQd2NDZBKbe1pofIoaQ%2FRhSY4PbkhLtSZqnjscbjz8Yx5mzQONme8P90Vo0%2B2NkFI8SM1LPPIV4KlgXmwEJ8m%2FNGmZ0%2B&X-Amz-Signature=7982f72b6733579b48b0ed3bfd224d8f40b4c6a8d33fc016e79eec24acbfd045&X-Amz-SignedHeaders=host&x-id=GetObject)

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
