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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JYG3PMC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F1YcHfGxDSucc8umzMxzIt%2Fbxt6ormtmvI6L3wn6voAiAiYdUu3s5YtjIUwcbLb1ObkBUhBJ6AiOHNC2IVK4xWDCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRRDcAGXgDZY%2FrtQ1KtwDFRFFqBQBCx%2FZOOkoF2d3nbgvviF%2FSglaFcSyQhsgvuX3xtdV2j%2BeLRq8SoOFUX5BSuxsCYURSyLOYLvHhOW8NcZtMJFeaePZO1qbFqAbn8pDp2exJBdO1KIJerMwvUdIUn%2FxFT7%2Fv01Zue6HM4bOUyEj2NFx3qo1paaewkk9H9uvcSfXnZGYwTeKfwc29yfgR2I6f4C9eutfMAPsVb0LgMURgDExKE58b%2B7ErHGqkoQbsO7GY5HZfk48Cpx9a%2BR%2BE1bAVj30Q8UIi6PxHg7YdkBN2eFdAfWGOGWcu%2FcN4mmn36HlOpqP08LVlmeHPmtlrOifiS3iyt3JgxcxkE69m2J0yC0Y%2Fr2LVR%2Flt6CV%2BD0XTDcldbNrnIVLBFGk00dtiN5vQfJ1tcouw7LIEqannuCgmcvUBymY0h9Hg8tV3lM2Ac9fbBHlKDWnhOyLVZub7A3hIrKmkZ%2BjgWNkubANwHEHmrCTVa7eGAe%2FQXgvKJTfJFFbxsUWTewhZHe9lR0me9UteOCE2u2miQdM4q3ZghjyREPHjnjhpKI2uLzHNzXhHxqxhT2J5IUGtRy6hkrHB5OcnA%2Bymyc0JS1MByFmVSNd1LiN3YNeAapKeZnro1nqvV9yNpU9cN5WFhMw2ef5wwY6pgFarcXdHW%2F5iJR0lb8X40uc%2Bdg1Ng9S%2BHG4zHTINGk0RyoCXm6rapKM0w8FrM7wjq9e1L0KHgOdkxpbG4nZ4hmjTxx3RapNUWDk38ouBHPHErHGKxfTNM8uyYC6n1UgWjDlScUksiNQxhx5xc2NqOP%2FoVroOfoCPiZOPaBZ4ZZEgW5x%2B4%2F0jRtrFyrIc6s8bP6uUy51gDjDfuAxf%2FgB6FEtiErMCrSX&X-Amz-Signature=6c0d6b432ff1a6d20efa64a7fadc4c3b023960dddd681781384525ce20c974fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JYG3PMC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F1YcHfGxDSucc8umzMxzIt%2Fbxt6ormtmvI6L3wn6voAiAiYdUu3s5YtjIUwcbLb1ObkBUhBJ6AiOHNC2IVK4xWDCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRRDcAGXgDZY%2FrtQ1KtwDFRFFqBQBCx%2FZOOkoF2d3nbgvviF%2FSglaFcSyQhsgvuX3xtdV2j%2BeLRq8SoOFUX5BSuxsCYURSyLOYLvHhOW8NcZtMJFeaePZO1qbFqAbn8pDp2exJBdO1KIJerMwvUdIUn%2FxFT7%2Fv01Zue6HM4bOUyEj2NFx3qo1paaewkk9H9uvcSfXnZGYwTeKfwc29yfgR2I6f4C9eutfMAPsVb0LgMURgDExKE58b%2B7ErHGqkoQbsO7GY5HZfk48Cpx9a%2BR%2BE1bAVj30Q8UIi6PxHg7YdkBN2eFdAfWGOGWcu%2FcN4mmn36HlOpqP08LVlmeHPmtlrOifiS3iyt3JgxcxkE69m2J0yC0Y%2Fr2LVR%2Flt6CV%2BD0XTDcldbNrnIVLBFGk00dtiN5vQfJ1tcouw7LIEqannuCgmcvUBymY0h9Hg8tV3lM2Ac9fbBHlKDWnhOyLVZub7A3hIrKmkZ%2BjgWNkubANwHEHmrCTVa7eGAe%2FQXgvKJTfJFFbxsUWTewhZHe9lR0me9UteOCE2u2miQdM4q3ZghjyREPHjnjhpKI2uLzHNzXhHxqxhT2J5IUGtRy6hkrHB5OcnA%2Bymyc0JS1MByFmVSNd1LiN3YNeAapKeZnro1nqvV9yNpU9cN5WFhMw2ef5wwY6pgFarcXdHW%2F5iJR0lb8X40uc%2Bdg1Ng9S%2BHG4zHTINGk0RyoCXm6rapKM0w8FrM7wjq9e1L0KHgOdkxpbG4nZ4hmjTxx3RapNUWDk38ouBHPHErHGKxfTNM8uyYC6n1UgWjDlScUksiNQxhx5xc2NqOP%2FoVroOfoCPiZOPaBZ4ZZEgW5x%2B4%2F0jRtrFyrIc6s8bP6uUy51gDjDfuAxf%2FgB6FEtiErMCrSX&X-Amz-Signature=4070d2e63d29fbdf3624666eaebb1fbf83b83c471a4f49ebbf3592a2c9f923a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
