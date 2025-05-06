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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EX7S2KB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB15koRY%2BoxfHnWYfM%2FEg9Y6Lb6XdGdnSRASIVaTrqkMAiB%2F%2BcKMclG4bunr9seEmsuF62JS5XnCyeJkxFGrC%2FLchSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMdjrs2ITPCXw9qfyaKtwDb95swveJmmhyzLi9OWPYrcKQhFuC2EXDmnFE1w1AG3oGpuih%2BId8LX8kzazJVOtqGZZ6GyhOPB1Y6EjCNWmx%2Bk7JYuapG6ogEMa1H4HkcwL%2FnwAK0FKSJpZvE8eSfZ4sC1mByrJ6LOELGznqAEwSsaHGEPVLLHnAo76n%2BA%2B%2BxaCGZjahO5OXAJG%2FUrHOG45mtnLd%2FwYRR0uQuA2UbN2BeeReJh8W4U7wpQMnBCIglPj8KwB6AqQ3Vf4TZoOTJL3lEzFRl3MovlnBqM3Zz9GAVzdgEuODeVWru8ilVmGut0XXORxwMWheRZ9MRyrYLurXbyx%2FNcFaJx%2FzyuL88NWatz%2BTe6X1HdHzvGIo0ykrTL6bkpnl083l69XRnlPjZ9%2B3%2FffrU8kgP8iKArY4b0ITraUL7Teyg4vQB6vdm8gPtA%2FdWiW5ubhdLMHhadY%2F0by%2F8vX3LND1Ig1sXD3yULlVPcLK8sg3OY5E9oooZPBOYOY7O17qaOayKrgbyaJB6BqlntkLd7y%2BdN7%2FEBS4AOR%2BtQ7SzV6kAEMrcHUhlEwH%2FU9NHFAhEA5dk0Sw4G5C9MylTSMMHsWv0BqeLbnx8CUC1KRyXb145r%2BvrWTr4JjfzIjkCQ2izXDzepYDlMswnLTpwAY6pgGILa%2FW%2B3C15EGhrB7bCrlnT3xco9CTJTJAdc6q17tfCtMVUSLuraRVeenMG3omoUcxPobfC7NmwYhTcSD64y95%2BXrI53EjVGiy%2BMNgOTsx%2F7wS%2FMMBVuxn9waMtqnqv1M5iBFmNPlBScVq9hJtvV58IE1Vs1FSHCAjeMnMjpAi%2FQ7ejvP3oq%2FvyugXk8qAI3Q6xY%2F7gMmO1S4ZI3Mq05KMAFTWZ0SM&X-Amz-Signature=8e7a9d63fb413bb629f25445f55383840f3b67013d890b0d2b58caeee697f3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EX7S2KB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB15koRY%2BoxfHnWYfM%2FEg9Y6Lb6XdGdnSRASIVaTrqkMAiB%2F%2BcKMclG4bunr9seEmsuF62JS5XnCyeJkxFGrC%2FLchSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMdjrs2ITPCXw9qfyaKtwDb95swveJmmhyzLi9OWPYrcKQhFuC2EXDmnFE1w1AG3oGpuih%2BId8LX8kzazJVOtqGZZ6GyhOPB1Y6EjCNWmx%2Bk7JYuapG6ogEMa1H4HkcwL%2FnwAK0FKSJpZvE8eSfZ4sC1mByrJ6LOELGznqAEwSsaHGEPVLLHnAo76n%2BA%2B%2BxaCGZjahO5OXAJG%2FUrHOG45mtnLd%2FwYRR0uQuA2UbN2BeeReJh8W4U7wpQMnBCIglPj8KwB6AqQ3Vf4TZoOTJL3lEzFRl3MovlnBqM3Zz9GAVzdgEuODeVWru8ilVmGut0XXORxwMWheRZ9MRyrYLurXbyx%2FNcFaJx%2FzyuL88NWatz%2BTe6X1HdHzvGIo0ykrTL6bkpnl083l69XRnlPjZ9%2B3%2FffrU8kgP8iKArY4b0ITraUL7Teyg4vQB6vdm8gPtA%2FdWiW5ubhdLMHhadY%2F0by%2F8vX3LND1Ig1sXD3yULlVPcLK8sg3OY5E9oooZPBOYOY7O17qaOayKrgbyaJB6BqlntkLd7y%2BdN7%2FEBS4AOR%2BtQ7SzV6kAEMrcHUhlEwH%2FU9NHFAhEA5dk0Sw4G5C9MylTSMMHsWv0BqeLbnx8CUC1KRyXb145r%2BvrWTr4JjfzIjkCQ2izXDzepYDlMswnLTpwAY6pgGILa%2FW%2B3C15EGhrB7bCrlnT3xco9CTJTJAdc6q17tfCtMVUSLuraRVeenMG3omoUcxPobfC7NmwYhTcSD64y95%2BXrI53EjVGiy%2BMNgOTsx%2F7wS%2FMMBVuxn9waMtqnqv1M5iBFmNPlBScVq9hJtvV58IE1Vs1FSHCAjeMnMjpAi%2FQ7ejvP3oq%2FvyugXk8qAI3Q6xY%2F7gMmO1S4ZI3Mq05KMAFTWZ0SM&X-Amz-Signature=d92f24c6eb632337669ab0b636a47ab0e342f989a36393f750264b50e97f80de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
