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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKTWMZF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKBxr677lUEPHoDdolPAksvq3OqVEqNORqhjRCUjTEaAIhAJZXg4wcbTr7INdk0f9h1Blhb2oQHd1kMptp6ypFShx%2BKv8DCG8QABoMNjM3NDIzMTgzODA1IgwK9SAvX2kogDn7C%2BAq3AMeaYoE%2FW%2F3lw%2Bi5fry2cGV0Xy4YO2zdizHfjSjCkBrLtE75SmJTgdGyVhQdTQFqGxfVKwSCkQRHvYDGvyNUD9OXUPaMiY%2BEgyfoOj5CVD2nLrDdZvKDPI7OADxvJs3I2JmQvpbTpJp%2FCqlDLGop1cOTtxuk2H7prQ1BmAVw0B3e0X4Rj1uBgY0xAeUkkNL4XKUcDDqqqR3dEZv8TYRyXtc9LE2V8IwgpeqMTV%2B0c6HX5r%2BZd9r8mnB7gqZuffIfdOaAak6N0Crkg3bbgtMB3n%2F7L8PFNi7zQufFFZfAwBmikzVKwlfkoclfnTePsde8kEDihG4CwawWp%2BM62mnw6jGTik5Pff9dIYUHIGrv0tX%2BFSCwrKWaFCoYyS5cnO1DheYOkVBlSug%2FZrriC7aNqo4qE2pyVgWQSGEHvCwdv7Yoby8KbiqbeumMPtfCJiaq%2BsOmI3ORSieTEh8Oajz1BvmOtLu0P9GQjCQkhCbfm%2FceGuR%2FWB0UjdD%2Fhgjxl18PxZoHrLQwqVJWd6ukGD4Xx7Q7ENAF3fbxK%2BkgTMze%2FssqbyZLVB7ze0RXHxZl7uPEz7bERAMGeAuDitRNIK4GAcTpD4OxONRnD9BAaMNyFS6%2F2P3ZMvYdsFMnzOo0DDMk8TCBjqkAUiDlgC28etnJ6c%2F70ppo%2BB2j3hcFeZAqiMdKTRKckvpaLlEfGV3shL7pxb8l5NXflj58xd3KTBLw%2B0cuqFVBR%2BXd3kSyAJAC7a1BFj9WQKOqIrz%2BOSUFh9Lq03bD3vsM1FYPEVazUbKSRJber6JhMR%2FsxZRccyG2%2F3riCeLn0vMeQJTrtL71d7097IVjocpzEquP%2FeAEPHeC5xllHWXCtmQlVxc&X-Amz-Signature=33e5244fd1576ba274a211cdf3ff08205d74178d26d1263635887a458caabc19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKTWMZF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKBxr677lUEPHoDdolPAksvq3OqVEqNORqhjRCUjTEaAIhAJZXg4wcbTr7INdk0f9h1Blhb2oQHd1kMptp6ypFShx%2BKv8DCG8QABoMNjM3NDIzMTgzODA1IgwK9SAvX2kogDn7C%2BAq3AMeaYoE%2FW%2F3lw%2Bi5fry2cGV0Xy4YO2zdizHfjSjCkBrLtE75SmJTgdGyVhQdTQFqGxfVKwSCkQRHvYDGvyNUD9OXUPaMiY%2BEgyfoOj5CVD2nLrDdZvKDPI7OADxvJs3I2JmQvpbTpJp%2FCqlDLGop1cOTtxuk2H7prQ1BmAVw0B3e0X4Rj1uBgY0xAeUkkNL4XKUcDDqqqR3dEZv8TYRyXtc9LE2V8IwgpeqMTV%2B0c6HX5r%2BZd9r8mnB7gqZuffIfdOaAak6N0Crkg3bbgtMB3n%2F7L8PFNi7zQufFFZfAwBmikzVKwlfkoclfnTePsde8kEDihG4CwawWp%2BM62mnw6jGTik5Pff9dIYUHIGrv0tX%2BFSCwrKWaFCoYyS5cnO1DheYOkVBlSug%2FZrriC7aNqo4qE2pyVgWQSGEHvCwdv7Yoby8KbiqbeumMPtfCJiaq%2BsOmI3ORSieTEh8Oajz1BvmOtLu0P9GQjCQkhCbfm%2FceGuR%2FWB0UjdD%2Fhgjxl18PxZoHrLQwqVJWd6ukGD4Xx7Q7ENAF3fbxK%2BkgTMze%2FssqbyZLVB7ze0RXHxZl7uPEz7bERAMGeAuDitRNIK4GAcTpD4OxONRnD9BAaMNyFS6%2F2P3ZMvYdsFMnzOo0DDMk8TCBjqkAUiDlgC28etnJ6c%2F70ppo%2BB2j3hcFeZAqiMdKTRKckvpaLlEfGV3shL7pxb8l5NXflj58xd3KTBLw%2B0cuqFVBR%2BXd3kSyAJAC7a1BFj9WQKOqIrz%2BOSUFh9Lq03bD3vsM1FYPEVazUbKSRJber6JhMR%2FsxZRccyG2%2F3riCeLn0vMeQJTrtL71d7097IVjocpzEquP%2FeAEPHeC5xllHWXCtmQlVxc&X-Amz-Signature=375de1a396c3045c637ba03326a786f0f2d207d50f9c67ae97640ee95ab0f365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
