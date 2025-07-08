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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEXTRSH3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD7CowrUC0gTySLcn1Z2%2Fzo84S%2B%2BPS2Buyh51rYX6I5TgIgALbCyJb%2F84FPfmHtNPj7Z%2FsqhqFFnR0zqbZ280x05xcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRERhaJ9304jvic9SrcA%2FgZZ37wd8eINvQ%2FUbEu32ugUC4Pu71GGZ2NZTw6YXIYLyZbN%2BKuaXLNLNxuVukBLOOcvlRNG4FWCbEfaHDezVv6iG4M2dBbdd22%2FfDCsLuUm2GCwOZp7ruqu6t0LeGRDpGofpBrnDkUw7wiOncsAYpuhowjtJ4cGQPn8EplwzBksvEpZ41MLtZNWrraRjIxHsChT9S8qWkUWKTV%2BBGDuvUzBOH5IA5hpJelJD603RLMHJpHA4HGykLSKv2rMd7PIRRfN6f4qr%2BJJD%2FNGhwFWnWmM877Ub88tjU%2FX%2BxddP8xOgQEHRv0cdh%2FZyHLGHot5Tcqq0IURJwvXGanWVQKXlI4Bh%2FMzZ7ahfOSrYLSKKOKzaoK%2B7h9RFj2L%2Br9spyuKIdrMgOdKbm7PyTrqEDTjdfC8L3xYBQwTbl8FuGSG0xSVKhXwnVIvSU4eESJGSZ8zLvBmsaRYIF8DmZm1r%2BrSsezn%2Fy86T6lJxI7Muq9VDpoa22lAAl6NPbhc8uT2%2FfsMGq5fcOzdEF3hrMXRQWjrYYq2cO6ERXxRmk4Bko%2BFB%2FBgd94beR4VAbKTlz3DAsek44ug7UdFkjLCaOa3fD%2FOX0ujekDtr4tBpKYdEOYNvK5iBfR4uQRld7iP%2B6IMISEssMGOqUByl2XbEgKRBpPreI2j6demadd16T2jYlRyM9RlvabaIYdtdcZTrkDM1Fxi5Ldw5ZktmNOGcPGtiKwd5uCcQyOxhRpJxosYK49SvdGesMYQ84XCHNAr76Eluv2L7%2BnmiMCb3UDfKCT5vtHY37DSinqzCJLD3u8Wy8x4o2z%2BQvnwGZ1Fp5HJAbl47Nc8TwX0%2BNktMdP6%2FP1QyHph%2Fq4PGhbjnVNEixb&X-Amz-Signature=6b06a6397038ea3de28c00a6a9a8687299a05012ded60552fc76382b28fc6624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEXTRSH3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD7CowrUC0gTySLcn1Z2%2Fzo84S%2B%2BPS2Buyh51rYX6I5TgIgALbCyJb%2F84FPfmHtNPj7Z%2FsqhqFFnR0zqbZ280x05xcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRERhaJ9304jvic9SrcA%2FgZZ37wd8eINvQ%2FUbEu32ugUC4Pu71GGZ2NZTw6YXIYLyZbN%2BKuaXLNLNxuVukBLOOcvlRNG4FWCbEfaHDezVv6iG4M2dBbdd22%2FfDCsLuUm2GCwOZp7ruqu6t0LeGRDpGofpBrnDkUw7wiOncsAYpuhowjtJ4cGQPn8EplwzBksvEpZ41MLtZNWrraRjIxHsChT9S8qWkUWKTV%2BBGDuvUzBOH5IA5hpJelJD603RLMHJpHA4HGykLSKv2rMd7PIRRfN6f4qr%2BJJD%2FNGhwFWnWmM877Ub88tjU%2FX%2BxddP8xOgQEHRv0cdh%2FZyHLGHot5Tcqq0IURJwvXGanWVQKXlI4Bh%2FMzZ7ahfOSrYLSKKOKzaoK%2B7h9RFj2L%2Br9spyuKIdrMgOdKbm7PyTrqEDTjdfC8L3xYBQwTbl8FuGSG0xSVKhXwnVIvSU4eESJGSZ8zLvBmsaRYIF8DmZm1r%2BrSsezn%2Fy86T6lJxI7Muq9VDpoa22lAAl6NPbhc8uT2%2FfsMGq5fcOzdEF3hrMXRQWjrYYq2cO6ERXxRmk4Bko%2BFB%2FBgd94beR4VAbKTlz3DAsek44ug7UdFkjLCaOa3fD%2FOX0ujekDtr4tBpKYdEOYNvK5iBfR4uQRld7iP%2B6IMISEssMGOqUByl2XbEgKRBpPreI2j6demadd16T2jYlRyM9RlvabaIYdtdcZTrkDM1Fxi5Ldw5ZktmNOGcPGtiKwd5uCcQyOxhRpJxosYK49SvdGesMYQ84XCHNAr76Eluv2L7%2BnmiMCb3UDfKCT5vtHY37DSinqzCJLD3u8Wy8x4o2z%2BQvnwGZ1Fp5HJAbl47Nc8TwX0%2BNktMdP6%2FP1QyHph%2Fq4PGhbjnVNEixb&X-Amz-Signature=36233231ce8bbc3404a7599577dac18e1f16199e55bc4367c96338d304ffb213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
