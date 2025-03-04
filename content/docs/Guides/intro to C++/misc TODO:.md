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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3LOYX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuiT%2FHqG5szn4N0JSnj3nYCspZiDlE4i0s3i4jDgrklgIgN7y5XPqTjmThTNjc6tbSR6R1gb6Q6dxAcoXlRsWUOaYqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUiE1PWQ4DByx6pDCrcA2jYfPbUzDTAohkv1U99acSF9ffqL8vTAtHynSm82yL4EQ%2BmFmFSB6weEwyqGNgPtMBT6zNQxkD6GSOsyrmu8jzm45gJFSNz6mViOXmMx9KXvlvo0IdLhjI5%2F5zJUQWpzVvFLdx9No2gh8k2O5mJ6I%2BLp7V8Q9AEOjwL7ybvWWkQkAEboGfm1yVFG0zctpqouCO9FRauTbm7ym%2BSG50RYnA4fHsCBPO%2BAA0Yb%2BVkeLbxbMxLXaNI4JC%2Fzic1FrIrd0mifJX%2FIOlCvcDc87HfRLdifGqjnF6SWyEz4nbyO9dLUXII2oAhN2X8qtkm83J0qLhgqwT2UrJi3v93LUFXc%2FiwoO%2FTn%2FeaL%2FkDWFZ2WAQHB8PsTMbFYzBDgamuYyQ5zr3z4cPPik5e9qsWFoWbXB0EvsUuRWQN4bsRORg2Urfej8ll0jL%2FuJgaNjBfF8brB%2B7354tbmrwZI%2BDpiChkW%2BJsvwy%2FqIx9y1lf82qwVsdnGtvVKUAQs0VFdtzFIm4AxYyk3vhFp%2B9tP3cYL%2BMxBXZRSxzZgNuZNH5xYNph1f6Y5r3%2BFkKNLMDe31cXDKTBxhqITHPGZIwMo6jWghkQa4S3LqFISlIyZnpztyyRrnt79xJy2A83EmnpUY23MP33mL4GOqUBnU9Y%2BXKoAFR0gVVDJJGi1Rb0VkEbcHuEqlKzedZbjCUKi9lCLzTvfBTKr%2FFRxmp8ENgPwyF4Xgjvyuw%2FCJ6%2F5OPMWjrTKwOOKL%2FtTIdwO8A7lm8WX7C8nJVivKyOCbcCwmljWb8mV5fr9yDS9YZCaZjsF%2B3LQRkEW0HbOalEtvROYvEd4oo5AKrzeBFZmFl2%2BamZ%2BX2DDtoZQpu8ETdVzBmpkQgX&X-Amz-Signature=397addf5a51b782a199adc8568fe41b78d10a5336bd0b0b8dd517e0c8cb4c2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6P3LOYX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuiT%2FHqG5szn4N0JSnj3nYCspZiDlE4i0s3i4jDgrklgIgN7y5XPqTjmThTNjc6tbSR6R1gb6Q6dxAcoXlRsWUOaYqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUiE1PWQ4DByx6pDCrcA2jYfPbUzDTAohkv1U99acSF9ffqL8vTAtHynSm82yL4EQ%2BmFmFSB6weEwyqGNgPtMBT6zNQxkD6GSOsyrmu8jzm45gJFSNz6mViOXmMx9KXvlvo0IdLhjI5%2F5zJUQWpzVvFLdx9No2gh8k2O5mJ6I%2BLp7V8Q9AEOjwL7ybvWWkQkAEboGfm1yVFG0zctpqouCO9FRauTbm7ym%2BSG50RYnA4fHsCBPO%2BAA0Yb%2BVkeLbxbMxLXaNI4JC%2Fzic1FrIrd0mifJX%2FIOlCvcDc87HfRLdifGqjnF6SWyEz4nbyO9dLUXII2oAhN2X8qtkm83J0qLhgqwT2UrJi3v93LUFXc%2FiwoO%2FTn%2FeaL%2FkDWFZ2WAQHB8PsTMbFYzBDgamuYyQ5zr3z4cPPik5e9qsWFoWbXB0EvsUuRWQN4bsRORg2Urfej8ll0jL%2FuJgaNjBfF8brB%2B7354tbmrwZI%2BDpiChkW%2BJsvwy%2FqIx9y1lf82qwVsdnGtvVKUAQs0VFdtzFIm4AxYyk3vhFp%2B9tP3cYL%2BMxBXZRSxzZgNuZNH5xYNph1f6Y5r3%2BFkKNLMDe31cXDKTBxhqITHPGZIwMo6jWghkQa4S3LqFISlIyZnpztyyRrnt79xJy2A83EmnpUY23MP33mL4GOqUBnU9Y%2BXKoAFR0gVVDJJGi1Rb0VkEbcHuEqlKzedZbjCUKi9lCLzTvfBTKr%2FFRxmp8ENgPwyF4Xgjvyuw%2FCJ6%2F5OPMWjrTKwOOKL%2FtTIdwO8A7lm8WX7C8nJVivKyOCbcCwmljWb8mV5fr9yDS9YZCaZjsF%2B3LQRkEW0HbOalEtvROYvEd4oo5AKrzeBFZmFl2%2BamZ%2BX2DDtoZQpu8ETdVzBmpkQgX&X-Amz-Signature=46bbf8f50aaf8cda5b1e5fe90cb6edfa63bd23776e3ac42fcf2aaca8d0bc603b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
