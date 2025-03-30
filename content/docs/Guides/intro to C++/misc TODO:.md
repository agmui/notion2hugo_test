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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDSKX5X%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDLnqXltxOL9Jdh8kEv1VLz35FB8TI9WWb9wz%2FWtCQZeAiEApVygV4IZK9Kg1i8ccGcYr0WZaMHKIQOgfBmFuTDQXBYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBppq9O7vpIAW1C2eircA%2BBGOE%2FVdVKPc4dZaC8eJ4TgjlHmLRe3%2Bzc%2F9vZKIqPURumFtaAGw6O%2F8GKPA2abF%2Fgv6j2FM0%2BzQNnrmftmf2SHPo4BPc5imMaYPrRreVMdZKyxXgYAvyGyRkYNLIlhRViTkb%2FNY5fdK0ZoOPIOVApeRFevWsxuI6c7WxU0EaaqVZrGtqEZ3FtT%2BOxQlqUCYZNsC6AVobI6fuh5UCGLVQcB5IDpSeykmCqN%2Btn%2FtwK4coWbgf05RAZCDLpCcZVMjkSQyiH566kNvzUfYc0VhhYMWUSwr%2BvD8hzAV8i4vvRgqlXw1tevy4Gkenn06XtZeE2ck5PkmULIga9eu9Z3V9EvRxBmqnaaVKsZlXs2zZbSzy6wwtWo1WNig47uTC%2FjvlwrsTR%2FEp%2F%2Blpo8sdKJmAqSRVp9zprqtUcJ7DWjeW9iiQ3K4X%2B9uwnV46ozIQi78C3OUQvAinTA6ocwAdznVZKS64DOQN7TuBfDmFARUNvNc2eo14YjLQ8GKaj%2BNVfYGBcvkKJlSH7e1CQbbvQs65ug2bfjAmroAsTIak3b0r7drV7hSdGVzEUy01nLZFOTRGJdMzjrcqqVr702qi0Tg5by%2Fdy6iViW1e977D1nI5K%2BFRuVNHk6Wy4AbWE0MIrqor8GOqUBw3Vib1Gpbargrwd0TUzkTZht0%2Bgyw6QIcRDx%2BX0xKngkkslGPgnBCvyx%2FfzCx%2BWrVhErG157XK%2BX48yEMUN1wNHyvuXOLZbLnuRBisnzDLlT6rYlFFEiVOduvn5mFJGwqr72dexKRhhesPQLryDAFpfLZ%2FqR4dW3OvZVSIZE3cKymy%2FJGadhLku9T3ehS3dcduEcOuHyz2UHxRDUhfOdrR%2BwtIpu&X-Amz-Signature=f25a0ee175048f8dca523b71ea61895cd425c9d5627a54c0f6b4bb4af728f253&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDSKX5X%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDLnqXltxOL9Jdh8kEv1VLz35FB8TI9WWb9wz%2FWtCQZeAiEApVygV4IZK9Kg1i8ccGcYr0WZaMHKIQOgfBmFuTDQXBYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBppq9O7vpIAW1C2eircA%2BBGOE%2FVdVKPc4dZaC8eJ4TgjlHmLRe3%2Bzc%2F9vZKIqPURumFtaAGw6O%2F8GKPA2abF%2Fgv6j2FM0%2BzQNnrmftmf2SHPo4BPc5imMaYPrRreVMdZKyxXgYAvyGyRkYNLIlhRViTkb%2FNY5fdK0ZoOPIOVApeRFevWsxuI6c7WxU0EaaqVZrGtqEZ3FtT%2BOxQlqUCYZNsC6AVobI6fuh5UCGLVQcB5IDpSeykmCqN%2Btn%2FtwK4coWbgf05RAZCDLpCcZVMjkSQyiH566kNvzUfYc0VhhYMWUSwr%2BvD8hzAV8i4vvRgqlXw1tevy4Gkenn06XtZeE2ck5PkmULIga9eu9Z3V9EvRxBmqnaaVKsZlXs2zZbSzy6wwtWo1WNig47uTC%2FjvlwrsTR%2FEp%2F%2Blpo8sdKJmAqSRVp9zprqtUcJ7DWjeW9iiQ3K4X%2B9uwnV46ozIQi78C3OUQvAinTA6ocwAdznVZKS64DOQN7TuBfDmFARUNvNc2eo14YjLQ8GKaj%2BNVfYGBcvkKJlSH7e1CQbbvQs65ug2bfjAmroAsTIak3b0r7drV7hSdGVzEUy01nLZFOTRGJdMzjrcqqVr702qi0Tg5by%2Fdy6iViW1e977D1nI5K%2BFRuVNHk6Wy4AbWE0MIrqor8GOqUBw3Vib1Gpbargrwd0TUzkTZht0%2Bgyw6QIcRDx%2BX0xKngkkslGPgnBCvyx%2FfzCx%2BWrVhErG157XK%2BX48yEMUN1wNHyvuXOLZbLnuRBisnzDLlT6rYlFFEiVOduvn5mFJGwqr72dexKRhhesPQLryDAFpfLZ%2FqR4dW3OvZVSIZE3cKymy%2FJGadhLku9T3ehS3dcduEcOuHyz2UHxRDUhfOdrR%2BwtIpu&X-Amz-Signature=5b6f7b05e9f113bf74fe70a6f88289e802004646e3899979e26036749a4bdb72&X-Amz-SignedHeaders=host&x-id=GetObject)

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
