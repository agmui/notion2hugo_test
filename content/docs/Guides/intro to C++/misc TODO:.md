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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7HKJ7S%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWpXrIGQt8ca7%2FmKPKZlzUr%2FzYXpaSLFRj%2F6ctcmI3tAiBvalOC9cFCyR4jC6UrmKZzRTj0L0bV%2BTeZ5wGUmy7JEyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMx7POEMifFR7OXUgKKtwDroLZvK1HGNYaIxYIKE5mjEhZ3OhaleIRwsDcXyE9eNY4O8h4SpAQKQ%2FnFuZ%2BxIg%2F8zE1LWw5WOZsA1Q73wXDSFtNX27dREHhMC0n4HJ3i668tnmnuSSVnwLi9MMPCRTEFLjAJU4llHaXmAwp9ryZ9RO55VNzV%2BDfZ0f45TKTd2vdOKE2j7tFXAgymleMbHEi61UhROO9yLiIQmS68vKdzzBHEZCgH9mxWIJlQjNQK26a%2Blu63%2Fwqr35BhyS805195t6owLTbwcPBeYkQhSyhrmOrwZ2IeiCRqyGj7vCNlTCWc1NVp7BDsPSuEUvg7S%2Bg3msUTrtIV69Xg0MEBeE%2FtdvYXXQA1pZj95uzAFevwlxHYBF8%2BW%2BvlXokoBIJJGKhFT4t%2BSfTgGurK4U%2F47vtEJPtCX5ULGHZnK5O1yCh3cweLEiUcOB%2FMqkpFFhJlB%2FQb34wTtSudWesoS9JKAoEjCT6rd9gddfKBG1pH5cammfcS8qEc861IEm4uOEncq8MrobRy9fVZy4TOqfDiaM%2BYEoPTLJ7a9boX30ZaMBxvtvbnUcTZki%2BNGBRtzIvew9pEMnt2rKPpsfQjlGUrqbch53iJQsUZhuqiX1Zd8PW90VriU8NX7B2JxvPq3Ewo8b%2FvwY6pgFpigBCU9ld%2BGnbV%2F9kWT1aM7wOF%2Btly559v32iKSHWKCqa1hpPKzlf%2Be5Eo24Ix469%2Fow1gtdkbrSbjElef9pd9gnSfw71Wtc8rR7myDVxlKJZlOeyPPc8tYpVNgT7PMhlVsh7oxIUbHXDK5bn9kMqaZhP6671IW2Cnt1NDM6nd18kQ%2B6LoWf0ReAJf7VMB9ql8AuKmS%2BZ7Paqn77OEx%2Bs7Hf4yLpm&X-Amz-Signature=edda4c3175670dae83f8300693eac7d9fe0b60c5998f0f1c1e5e9cdedf333bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7HKJ7S%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWpXrIGQt8ca7%2FmKPKZlzUr%2FzYXpaSLFRj%2F6ctcmI3tAiBvalOC9cFCyR4jC6UrmKZzRTj0L0bV%2BTeZ5wGUmy7JEyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMx7POEMifFR7OXUgKKtwDroLZvK1HGNYaIxYIKE5mjEhZ3OhaleIRwsDcXyE9eNY4O8h4SpAQKQ%2FnFuZ%2BxIg%2F8zE1LWw5WOZsA1Q73wXDSFtNX27dREHhMC0n4HJ3i668tnmnuSSVnwLi9MMPCRTEFLjAJU4llHaXmAwp9ryZ9RO55VNzV%2BDfZ0f45TKTd2vdOKE2j7tFXAgymleMbHEi61UhROO9yLiIQmS68vKdzzBHEZCgH9mxWIJlQjNQK26a%2Blu63%2Fwqr35BhyS805195t6owLTbwcPBeYkQhSyhrmOrwZ2IeiCRqyGj7vCNlTCWc1NVp7BDsPSuEUvg7S%2Bg3msUTrtIV69Xg0MEBeE%2FtdvYXXQA1pZj95uzAFevwlxHYBF8%2BW%2BvlXokoBIJJGKhFT4t%2BSfTgGurK4U%2F47vtEJPtCX5ULGHZnK5O1yCh3cweLEiUcOB%2FMqkpFFhJlB%2FQb34wTtSudWesoS9JKAoEjCT6rd9gddfKBG1pH5cammfcS8qEc861IEm4uOEncq8MrobRy9fVZy4TOqfDiaM%2BYEoPTLJ7a9boX30ZaMBxvtvbnUcTZki%2BNGBRtzIvew9pEMnt2rKPpsfQjlGUrqbch53iJQsUZhuqiX1Zd8PW90VriU8NX7B2JxvPq3Ewo8b%2FvwY6pgFpigBCU9ld%2BGnbV%2F9kWT1aM7wOF%2Btly559v32iKSHWKCqa1hpPKzlf%2Be5Eo24Ix469%2Fow1gtdkbrSbjElef9pd9gnSfw71Wtc8rR7myDVxlKJZlOeyPPc8tYpVNgT7PMhlVsh7oxIUbHXDK5bn9kMqaZhP6671IW2Cnt1NDM6nd18kQ%2B6LoWf0ReAJf7VMB9ql8AuKmS%2BZ7Paqn77OEx%2Bs7Hf4yLpm&X-Amz-Signature=eec6e78afcd32c7682c3fe79d5544856819917eb2cf817f4d7e925ec391c2be9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
