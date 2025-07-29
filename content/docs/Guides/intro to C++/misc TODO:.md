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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQKIEFB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGMY%2FLO%2FfeuD%2FGQefn8fdIY7yen5PsnxI28RljLpPyNiAiAGNmENEkHxU9Gb1ZfGdCaNNsDJ1%2BtrHYotJhW%2F2ZZOgyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZGnWN6uUN5sijAwKtwDluew7w%2FxLrT9tDoIqn9eV9ojp4ht3zSMxx6o0ugijbP0wCV1TP1bqXvoszE2zy%2Fn44xOGYarif7x7eYWEa4Kdd3fpKE2uNxZYZlp8Vwt1DEhxOZcGInrrY7zwGgijRqyno3Q0qi7Bn2qTc9yYl24lL3IqIs0sMTyfVCyX%2BlohGk3NbaQLAAZlTe5P7R4uSVd1ZoytYijvYF7tIii90FY%2BzVh2r3mNpdgMS0K8kadrX4erXM47z3bnxT92Q8FkfocBwE485OkhwJxYjENzunWkb6LBCPmCjIo87DyHGz17tsToraM2xS1rUx9voGp2m472R3Ms77rd09YjXBb484OLU5arb2Pj0lavSTRRuwfgXkKUjxf4ghj17srS%2BXpRdF4JCTvN1sBhYzPv8Cgua3KorEcRluL6HF7tnLD3qjBSCzC70BaPlwAdfqVTh6Rc%2Bf1U%2FPONY3TEF2ct%2BrEt3H9eRsiEIiWFgwEVj1WSJwzKymBpW7Lcn7IBBA1oZepYLaa9FEvubX%2Brb3BbMPnhRbCfXHkjTMG%2FAWC8BdKTJ530rJk2R03E1QP%2B7eYrGQnw8VWU77aijlKzbBMEGWTlwyHTY%2BSocgIt2kizXNQpCTUEJ3WIFVBmvNJmgbw5uowqLWhxAY6pgEcvJxzOj8NsnhdqF7ExGdO3hzi1MH4K0ZPKyKFobFzmbcWZjv%2BQMAlk6xf6p84dnyW25V9Y%2BWydEsXuyiYGyFyXyB%2FvoRg%2F0kd%2Fn1cWgq1ix7TMZh6IvU0DO%2FTKEXisPhOSMpf3NDOFzwtltbB89a%2FZykpYSo1VoAj9PiSFMMzkpaGCNY0X0uGUeBcDF2%2FD9i8TW2WRg7ZW3JZ6gILQCkVGIDKdGAd&X-Amz-Signature=25299235a1878dfb3948d56a392f9ecab7b8ae07b323df1d7f19fa5bd32043e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQKIEFB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGMY%2FLO%2FfeuD%2FGQefn8fdIY7yen5PsnxI28RljLpPyNiAiAGNmENEkHxU9Gb1ZfGdCaNNsDJ1%2BtrHYotJhW%2F2ZZOgyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZGnWN6uUN5sijAwKtwDluew7w%2FxLrT9tDoIqn9eV9ojp4ht3zSMxx6o0ugijbP0wCV1TP1bqXvoszE2zy%2Fn44xOGYarif7x7eYWEa4Kdd3fpKE2uNxZYZlp8Vwt1DEhxOZcGInrrY7zwGgijRqyno3Q0qi7Bn2qTc9yYl24lL3IqIs0sMTyfVCyX%2BlohGk3NbaQLAAZlTe5P7R4uSVd1ZoytYijvYF7tIii90FY%2BzVh2r3mNpdgMS0K8kadrX4erXM47z3bnxT92Q8FkfocBwE485OkhwJxYjENzunWkb6LBCPmCjIo87DyHGz17tsToraM2xS1rUx9voGp2m472R3Ms77rd09YjXBb484OLU5arb2Pj0lavSTRRuwfgXkKUjxf4ghj17srS%2BXpRdF4JCTvN1sBhYzPv8Cgua3KorEcRluL6HF7tnLD3qjBSCzC70BaPlwAdfqVTh6Rc%2Bf1U%2FPONY3TEF2ct%2BrEt3H9eRsiEIiWFgwEVj1WSJwzKymBpW7Lcn7IBBA1oZepYLaa9FEvubX%2Brb3BbMPnhRbCfXHkjTMG%2FAWC8BdKTJ530rJk2R03E1QP%2B7eYrGQnw8VWU77aijlKzbBMEGWTlwyHTY%2BSocgIt2kizXNQpCTUEJ3WIFVBmvNJmgbw5uowqLWhxAY6pgEcvJxzOj8NsnhdqF7ExGdO3hzi1MH4K0ZPKyKFobFzmbcWZjv%2BQMAlk6xf6p84dnyW25V9Y%2BWydEsXuyiYGyFyXyB%2FvoRg%2F0kd%2Fn1cWgq1ix7TMZh6IvU0DO%2FTKEXisPhOSMpf3NDOFzwtltbB89a%2FZykpYSo1VoAj9PiSFMMzkpaGCNY0X0uGUeBcDF2%2FD9i8TW2WRg7ZW3JZ6gILQCkVGIDKdGAd&X-Amz-Signature=7778feec5d5a49bd3c615c091921993bbc2c5682d03da8032702ad13b211ea26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
