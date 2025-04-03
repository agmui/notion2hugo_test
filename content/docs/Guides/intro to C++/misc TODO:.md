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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNUDD54%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDRkocv%2FRPsW6KGIrjRVa47Hb9yuqLj3wdazDirOYQVkAiEA0TqgAWP44rW2JjBopz%2FhDcsZklY81dEA%2FwozL3%2Fzyo4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLswjsrB5f7wUooq3yrcA%2BCpKebnX99JsxQ8O4u3%2FVQCqe2ag2yNq6OaiypkqvU3kfmrhmZ8LQFRdJ23RQgLfcQWZW0nEiRK%2BopkP5058sBjH65cFTehAgEY31YeC4kZtMZRD2V3vXdbF2B7uAADYUSvFfZshpGFxs72KLGe7W2SIxXOKkrZ%2F3Uv1NT3fLXIwe5Z3tQx4lUZwDkP5vn%2BtUnFe5gOKlqwMTWDbFejTZcusaiZuixs2fZ4cHCcxY74tifxDi%2FvgU%2BYdPiQ5W01OwtRzD4ZUwJXUvkq2ZqvJ6bQLM00z16aCOxjqCa3M0FjRI82nUWAjze2O1aajl6Sb2A0PKJsuClGfk1HyZ3NO5grTqjqJ8veqZcaWzFGctlw4IaPuqQuH8sNc%2F2iI7piSuV0asF2dodEWa7VqVU8UndTD4o7j984ZZXvT35975c3UZLO1cuMbK8mQv9KvjTBiKZQcCcXowuyxvzHrafc8hLbPXjoCKrMsaIAGZ%2FStJbm%2BC1r0ieXFRp2YIfVmHzxXAsMGRODs%2BEcAEu2onx61HIBrE6nhLUZqNHV%2FGNby9Ex8MKx1Qt7tZAZQqtRacGqlT9m9tEZRY9FW4HmZWCEtankTjdhL5Udn1RZ6nr%2BkAf5UVchf%2FjIAldwAnkrMKL8t78GOqUBDGdsQTa5%2F4AEYrPzo42oiz8eF2HslRd9DeAaqR4c5ZVe%2B3Muf99Hr6LBKazxhLOKXNxUlPNyL1w5AHiKakE1Zg56Z1qLDvNlz%2B5QO0IQ5qwlYC%2FUwXkLd1hjxKgxmKjhO38Xi27o0xfVL1TCkhHzUbNtrKoeY0pfFR8Eg2hrJ3XRkJUtrBVxMG0QqnT27JL0VOxfvHMGB91gNUjjut7kq00mvp6l&X-Amz-Signature=419df90d20e00c856a718319a0d249fe410ad5d2ba4c6dcec8f8c67daea73d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNUDD54%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDRkocv%2FRPsW6KGIrjRVa47Hb9yuqLj3wdazDirOYQVkAiEA0TqgAWP44rW2JjBopz%2FhDcsZklY81dEA%2FwozL3%2Fzyo4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLswjsrB5f7wUooq3yrcA%2BCpKebnX99JsxQ8O4u3%2FVQCqe2ag2yNq6OaiypkqvU3kfmrhmZ8LQFRdJ23RQgLfcQWZW0nEiRK%2BopkP5058sBjH65cFTehAgEY31YeC4kZtMZRD2V3vXdbF2B7uAADYUSvFfZshpGFxs72KLGe7W2SIxXOKkrZ%2F3Uv1NT3fLXIwe5Z3tQx4lUZwDkP5vn%2BtUnFe5gOKlqwMTWDbFejTZcusaiZuixs2fZ4cHCcxY74tifxDi%2FvgU%2BYdPiQ5W01OwtRzD4ZUwJXUvkq2ZqvJ6bQLM00z16aCOxjqCa3M0FjRI82nUWAjze2O1aajl6Sb2A0PKJsuClGfk1HyZ3NO5grTqjqJ8veqZcaWzFGctlw4IaPuqQuH8sNc%2F2iI7piSuV0asF2dodEWa7VqVU8UndTD4o7j984ZZXvT35975c3UZLO1cuMbK8mQv9KvjTBiKZQcCcXowuyxvzHrafc8hLbPXjoCKrMsaIAGZ%2FStJbm%2BC1r0ieXFRp2YIfVmHzxXAsMGRODs%2BEcAEu2onx61HIBrE6nhLUZqNHV%2FGNby9Ex8MKx1Qt7tZAZQqtRacGqlT9m9tEZRY9FW4HmZWCEtankTjdhL5Udn1RZ6nr%2BkAf5UVchf%2FjIAldwAnkrMKL8t78GOqUBDGdsQTa5%2F4AEYrPzo42oiz8eF2HslRd9DeAaqR4c5ZVe%2B3Muf99Hr6LBKazxhLOKXNxUlPNyL1w5AHiKakE1Zg56Z1qLDvNlz%2B5QO0IQ5qwlYC%2FUwXkLd1hjxKgxmKjhO38Xi27o0xfVL1TCkhHzUbNtrKoeY0pfFR8Eg2hrJ3XRkJUtrBVxMG0QqnT27JL0VOxfvHMGB91gNUjjut7kq00mvp6l&X-Amz-Signature=7ff1f508b0ab3193bbbd57ad370bdf811e192b3d330d05aa4509846941cca924&X-Amz-SignedHeaders=host&x-id=GetObject)

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
