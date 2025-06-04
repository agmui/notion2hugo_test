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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56YMB3R%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDHaWD9FTvnI5UteiMHvSF2fwMNE0R8jaajiDq5a215pwIgRUbeOLniRXLHD4CMLUr%2B24Bc2VQAfPQ5fP3Kt%2FrL%2F2wq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCNTYV112A29lQqMbyrcA4Ne%2B%2Fu7tpKam1MiMVaBlD8P5btekfH6rwn8gv1mGfhMM0cXlhngy2JzocFR5wI57O7rqEyXE2hUuBMo%2B%2BQb4F9RGEzVA9p49ziYOao8UWGd41mcyNbGRIAQgvl4gaD%2FCwrX2tdNQsQFR5XNgiVrkr9MnYn43mWEfg1A2aiGo64HqTziHdK%2BjMJIx%2Fwzkq2ij03aGdz29Z2F09Uk%2Bc9W2GRbyy%2B3T%2FBcVqhZXjt%2FJY1N95sNfgQIet8CbL1O0KOiZwOSzh4uK6DSMPe3gu9ufeR%2FQB%2FQXO93rTyZdvzKl9E71wEG33pYD2ZMdmdW85rLVwepMvgabKmHHo3Pmk3jW9fDF0SgLPZfYLQ5fKOeBhQ1R3nxPL8qA0Bh471rgm2hKxgC04KStzZsJhbmmDta7NEYF0Hec53jwxMcSJHvLH46QqKMo4FIzZUvuRqu7zoJZRFLjM5fF2Z%2FL3eYDdPRzE7D4RJgaWQfonHPoLXC8mBQVTPJ%2FG65E35sKTWvJOi%2FDbL%2BZGuGnQsIprsFPLo9j2G4eYaTdnBx9KVKcy9StiuFsXq5ZgZWFgkInuKuOhpYXlTz3%2Bg6YYWsHtf69E5Lonn%2B2HG8gabq8tG4h3PoVHbyXsHR3L0NjT2%2F5mudMIvh%2FsEGOqUBMI8RM2FbR%2B6eaTf67uUnO%2BCEQTFddPMKaSsCdQ%2B0cHBNBo%2FBso3cxhkqMn9GEKXMMTenrpARoSIYJynGiTQEaa15SlYs362nx15mVeslDJY8tBp3%2FMvlEQgMgAQ%2Bit5rzmdAEPvv%2FYo8oKDgJ3xh%2FptNW7PayKZ0or77xms2Q4ADYJRZ6WAdzONlTXvV6F%2FPq7E1ZwNvLBYQCAMlj%2F%2FUCyJ9Z3Gd&X-Amz-Signature=dfebca46f0f208d160d04577790f21f7fdfc6c11fa50665c2682e5eee5cf2ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56YMB3R%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDHaWD9FTvnI5UteiMHvSF2fwMNE0R8jaajiDq5a215pwIgRUbeOLniRXLHD4CMLUr%2B24Bc2VQAfPQ5fP3Kt%2FrL%2F2wq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCNTYV112A29lQqMbyrcA4Ne%2B%2Fu7tpKam1MiMVaBlD8P5btekfH6rwn8gv1mGfhMM0cXlhngy2JzocFR5wI57O7rqEyXE2hUuBMo%2B%2BQb4F9RGEzVA9p49ziYOao8UWGd41mcyNbGRIAQgvl4gaD%2FCwrX2tdNQsQFR5XNgiVrkr9MnYn43mWEfg1A2aiGo64HqTziHdK%2BjMJIx%2Fwzkq2ij03aGdz29Z2F09Uk%2Bc9W2GRbyy%2B3T%2FBcVqhZXjt%2FJY1N95sNfgQIet8CbL1O0KOiZwOSzh4uK6DSMPe3gu9ufeR%2FQB%2FQXO93rTyZdvzKl9E71wEG33pYD2ZMdmdW85rLVwepMvgabKmHHo3Pmk3jW9fDF0SgLPZfYLQ5fKOeBhQ1R3nxPL8qA0Bh471rgm2hKxgC04KStzZsJhbmmDta7NEYF0Hec53jwxMcSJHvLH46QqKMo4FIzZUvuRqu7zoJZRFLjM5fF2Z%2FL3eYDdPRzE7D4RJgaWQfonHPoLXC8mBQVTPJ%2FG65E35sKTWvJOi%2FDbL%2BZGuGnQsIprsFPLo9j2G4eYaTdnBx9KVKcy9StiuFsXq5ZgZWFgkInuKuOhpYXlTz3%2Bg6YYWsHtf69E5Lonn%2B2HG8gabq8tG4h3PoVHbyXsHR3L0NjT2%2F5mudMIvh%2FsEGOqUBMI8RM2FbR%2B6eaTf67uUnO%2BCEQTFddPMKaSsCdQ%2B0cHBNBo%2FBso3cxhkqMn9GEKXMMTenrpARoSIYJynGiTQEaa15SlYs362nx15mVeslDJY8tBp3%2FMvlEQgMgAQ%2Bit5rzmdAEPvv%2FYo8oKDgJ3xh%2FptNW7PayKZ0or77xms2Q4ADYJRZ6WAdzONlTXvV6F%2FPq7E1ZwNvLBYQCAMlj%2F%2FUCyJ9Z3Gd&X-Amz-Signature=72dacc2420d188cd1b13a935f6debea8691477691a4c81e30e162e11b8462806&X-Amz-SignedHeaders=host&x-id=GetObject)

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
