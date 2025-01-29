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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RWWMT6H%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMAVWYXjv5Ts7Ku7pOfgxDkkiKG5rHccFJXdVbW9%2FOhAIgZzeLExJUEMXvMa%2B6mPgbSdztaOsQt9EMRLKXMtcY6fcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhHAI2SMLIjWwn%2FZCrcA2L7r4tjKyVEGMgq40iHIyPKJU0a%2FiDBIC0q6UzdNxNdt13%2FITiLfTveRisQJ7ABUJ1pklzcJ%2BcN0c%2F6s%2F3vy5B%2Fj8JTFKzk%2BxRhX5Hlh7IunR9Oa2VHSfYDMMKwVLnj0YfPnU3fcM3tAGnJbICok5nyOCERtrnr9AvxnOt4ZzqkHnFyvsqCH217vPNghXVgqiZ7tEMrCiSbuLnIW7uJvKBS4aHehyHfYgK5FrBJJ9iHMzLgf%2BbQfIHqTL5BoYMqPglSznSDThm0CblGXae6P4AzUWhkHd9D%2Ff3hzbgvSsL2%2FxBJGF%2Bd8OASJNajUciG38AO%2F7UwjpXVww8Qj6Wf%2FTYwmkIL4rzFDq2H0lDTM5rQoN5W65KD5BaeZlk97QC8FXzPgS7vouEWhzYh0st5S76OtH7ZhPveWwLN4uWvAeSp9IkQ%2FUqTeXArPrsOZ2NbFY4wl75W8fOSFqI8vZ1%2Bb8Ah4oAhXfwgBgdbL1zx%2FKXvP55cgnRevQN17Mk9e6dO4e%2BQPxhr2sFeXEI1zqGlLCABmWeGi%2BemPoWDZXpD7W159f0xr8iXmnUu1cpH1tK5dszPLXufIx87qjNYhpko99Js0RymnMJR0chOzswhP3kcEO1u7WqX1OwoHIYwMLj26bwGOqUBasnh%2B0dv5aF%2BKMZMkvLNQJOSgvx1%2BbLo3w9KQ%2Fv4AqBDYaAHu2x%2BnZGVrozxiqEnh8XdeO1tR%2F3OQZZ%2FXild%2FCb7d2xYckUuK4yPfF64nP6L2436zjft5M23OM0PKgWSOu9WptsBm0ZpNvSxNr8zJVyF4XHrZrSUiqhGB5pvbdZ4y2w%2FLg2G7rDcCjQ00Bj5ZJngvqPSz8ehZVjT9IrGn%2FN1%2FUOq&X-Amz-Signature=c71282a8fcf70eda4a2c010d73d4c8c0486324a769551ceed06e7ad5839cfddd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RWWMT6H%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMAVWYXjv5Ts7Ku7pOfgxDkkiKG5rHccFJXdVbW9%2FOhAIgZzeLExJUEMXvMa%2B6mPgbSdztaOsQt9EMRLKXMtcY6fcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhHAI2SMLIjWwn%2FZCrcA2L7r4tjKyVEGMgq40iHIyPKJU0a%2FiDBIC0q6UzdNxNdt13%2FITiLfTveRisQJ7ABUJ1pklzcJ%2BcN0c%2F6s%2F3vy5B%2Fj8JTFKzk%2BxRhX5Hlh7IunR9Oa2VHSfYDMMKwVLnj0YfPnU3fcM3tAGnJbICok5nyOCERtrnr9AvxnOt4ZzqkHnFyvsqCH217vPNghXVgqiZ7tEMrCiSbuLnIW7uJvKBS4aHehyHfYgK5FrBJJ9iHMzLgf%2BbQfIHqTL5BoYMqPglSznSDThm0CblGXae6P4AzUWhkHd9D%2Ff3hzbgvSsL2%2FxBJGF%2Bd8OASJNajUciG38AO%2F7UwjpXVww8Qj6Wf%2FTYwmkIL4rzFDq2H0lDTM5rQoN5W65KD5BaeZlk97QC8FXzPgS7vouEWhzYh0st5S76OtH7ZhPveWwLN4uWvAeSp9IkQ%2FUqTeXArPrsOZ2NbFY4wl75W8fOSFqI8vZ1%2Bb8Ah4oAhXfwgBgdbL1zx%2FKXvP55cgnRevQN17Mk9e6dO4e%2BQPxhr2sFeXEI1zqGlLCABmWeGi%2BemPoWDZXpD7W159f0xr8iXmnUu1cpH1tK5dszPLXufIx87qjNYhpko99Js0RymnMJR0chOzswhP3kcEO1u7WqX1OwoHIYwMLj26bwGOqUBasnh%2B0dv5aF%2BKMZMkvLNQJOSgvx1%2BbLo3w9KQ%2Fv4AqBDYaAHu2x%2BnZGVrozxiqEnh8XdeO1tR%2F3OQZZ%2FXild%2FCb7d2xYckUuK4yPfF64nP6L2436zjft5M23OM0PKgWSOu9WptsBm0ZpNvSxNr8zJVyF4XHrZrSUiqhGB5pvbdZ4y2w%2FLg2G7rDcCjQ00Bj5ZJngvqPSz8ehZVjT9IrGn%2FN1%2FUOq&X-Amz-Signature=e1d6666073edb6d0461b39a25cd34d32de9f9c4cc69c16a6bab42289515b4565&X-Amz-SignedHeaders=host&x-id=GetObject)

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
