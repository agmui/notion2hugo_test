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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISPK764%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFXXvWHiA73ILx9UIavYH85pKeC%2BcEa76Ch5miqrrcDkAiEAnpqElUgegTymuEg114Y5SNdYCh0SPLihwASjpCCXKvEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5hQtlVKjNjDuNi%2ByrcA8rUlD9EetZsB1z6GXjz10q210XMHjO1jfu8pnAgiu4k4L%2F7Sg3SlUHmmLAf2MKxOnub7lx7IZFwuSHSM9TUP2uU%2BEYxoEeFfdomuwG5m9JIIP19LtgzRcE0qmSfIoWifD3teZd8yff%2FacY8szZQtYw9%2FroNQUhbGrWC4skb%2BhvBhXBf1e1dJ%2FdJ4lRNKmZPdFOBW2pW34i8k9Mz5dvwdWaL73hFvedxGeGzFfB9lqB%2FLwLq5rmA5FXfrykKD0LcG4JjTBakOgqcDh4tLWtsoiubygt4XyZkoNs2ntMGIeKUZRaAoFdeAYY9k7C2lnfvHR%2FXLSC3HGBqxIHo6uMi87pZbICdMlrauxIaxDT3sdQ1Amjbf%2BX69CO6Tw22xDYta2lBW5RNjFj4UEgUrLSJa68O9TeCiAVCHAw6MpOy0ALOfhDuLKzZpiBuzDdwhWAr1KO6s2Te0nY844R1BicOgxgxUgnqdHrhhK7xx0cDV4X1zk3wTEP4hovzb%2Fk%2Fs4iA1xMAVV%2FkPsYa%2FknWGKKzIfJPVoGqwpUaW2O3TeAaDYY3CrD%2FEpYNHEe4RqdXUzfitEiQ3ypM7rJ%2BhHxsCmeVNbP0VRT4qi%2FUtx7cTWEicMGWzdkEfHViTlBjwHmOMIvOrckGOqUBcaC4uQcLcnmeBdBlAk8EMB6PcbMsQK1nE4PCGWdAfRshkzfDWJYkaacrxs7b8%2BtL0TnEBxIaEHeoHfzwRFH8nhfGkWcxRP8CwddteVqzJcCTFK5WstBR3p%2BHk4xWr0dZwKec21cVZPupJ1ffSIEuhVzNzVTNDX5OdHaRmWP59era9dvU1z2rbKJq8IdlphNhTptMtzyq%2Fs63Lbh%2BFxDVPNOZYiXj&X-Amz-Signature=7677a7fcd3ff9bca9a7fed1d78a50d620edc9ed55e4f70abefc54947aecd9be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISPK764%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFXXvWHiA73ILx9UIavYH85pKeC%2BcEa76Ch5miqrrcDkAiEAnpqElUgegTymuEg114Y5SNdYCh0SPLihwASjpCCXKvEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5hQtlVKjNjDuNi%2ByrcA8rUlD9EetZsB1z6GXjz10q210XMHjO1jfu8pnAgiu4k4L%2F7Sg3SlUHmmLAf2MKxOnub7lx7IZFwuSHSM9TUP2uU%2BEYxoEeFfdomuwG5m9JIIP19LtgzRcE0qmSfIoWifD3teZd8yff%2FacY8szZQtYw9%2FroNQUhbGrWC4skb%2BhvBhXBf1e1dJ%2FdJ4lRNKmZPdFOBW2pW34i8k9Mz5dvwdWaL73hFvedxGeGzFfB9lqB%2FLwLq5rmA5FXfrykKD0LcG4JjTBakOgqcDh4tLWtsoiubygt4XyZkoNs2ntMGIeKUZRaAoFdeAYY9k7C2lnfvHR%2FXLSC3HGBqxIHo6uMi87pZbICdMlrauxIaxDT3sdQ1Amjbf%2BX69CO6Tw22xDYta2lBW5RNjFj4UEgUrLSJa68O9TeCiAVCHAw6MpOy0ALOfhDuLKzZpiBuzDdwhWAr1KO6s2Te0nY844R1BicOgxgxUgnqdHrhhK7xx0cDV4X1zk3wTEP4hovzb%2Fk%2Fs4iA1xMAVV%2FkPsYa%2FknWGKKzIfJPVoGqwpUaW2O3TeAaDYY3CrD%2FEpYNHEe4RqdXUzfitEiQ3ypM7rJ%2BhHxsCmeVNbP0VRT4qi%2FUtx7cTWEicMGWzdkEfHViTlBjwHmOMIvOrckGOqUBcaC4uQcLcnmeBdBlAk8EMB6PcbMsQK1nE4PCGWdAfRshkzfDWJYkaacrxs7b8%2BtL0TnEBxIaEHeoHfzwRFH8nhfGkWcxRP8CwddteVqzJcCTFK5WstBR3p%2BHk4xWr0dZwKec21cVZPupJ1ffSIEuhVzNzVTNDX5OdHaRmWP59era9dvU1z2rbKJq8IdlphNhTptMtzyq%2Fs63Lbh%2BFxDVPNOZYiXj&X-Amz-Signature=d9aca902cdd6d479c85713d25ea2ce86df0a1efc1f9ae6a01e4b3419e6d711ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
