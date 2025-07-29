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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERTVYKD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnX%2FntDDPgH2Hxc3089UbT71pTzqo3%2Bdfaa4Vxwjn6YAiEAwbxXmL940hspkCIR2c%2BwKIO8qNLDbQa3seR%2B1db0vWYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjyksnsSw2eeen3VircA8rsU%2BA%2F0GIudl07vZcny7VtQoxRhlhyqvIMlkjqwrqdujxIEaE2Xc4VsTEaZy3wTEw5MlGk2%2FrPpfZSXLYNTIh%2FpXRH%2F8%2FQUXLwT77kcguDag87PjcIF4ByIenolyWzW1ow6c91CU7rnGEdcKSFrNIj%2BfEKWtwIpzk7DnmmGjlVkW8zq5OdY%2B10uhAP5VftWJKWppYIHXMh9d4CZkh3JzbAAftjjElLaMs3c%2B2FzmUO80sYqPd1iT7HjQIwmAG0%2BQ07Nbr0cIiWynhX%2FQVWSjYSOupgpOJLJLDa3%2BYhuFqMEazmOEFSqujKf9BgwJF745IaYalie5JCNChFhvKsraeS%2FSZzRw1cdODXqWHvZWFxvbIlti6aGpMS9ovhXwT9iEIGgO9dok7LOr2rUMxDKvBjdYwxfXjPlsO%2FAQa9jUPYX1fUxSS3fG3%2FascxwyoT%2BLh%2FO0MjHTVZJCgkwajF0U29Kighs8xjUYnDpSV8XLLZiC3V6%2B1%2BCEL19mLGJs%2Fm4HCQbz6TNqsXXjn1KkLbs2j1OVMRXbrCJYvyNrscX6o98XsubchsFbkgC9WDyDVYu7b23p2u3oh8c3L1izdBEEoc0Ok6tmK1AXET3iBkmleND8JuVuTOMroRGTYQMKCupMQGOqUBH5OI9jDR9mf0v%2BC1cT%2F1Kl6aZ6u%2Fj8SJsutnF4rq7WgcVOijGIqgjq7Ndu%2FhzNReYeUqWpXhsom8AF5I0bbTjzR0CWB0XPFVD7lnwvazByoXUtixn4hnwNxvv6mCCTAlmMkyfzvZkfpM62lVCHx6act83BJTUqv4nzNHWCiujJQ3Vrd34txuFch139KCeUlXa5xk%2B2pX%2Bt8VxusD9W8OGQzSaLT9&X-Amz-Signature=9cca524315ea41d8eac2ab72e7f94390b1a060fcddd24c1c2f111c9250b26a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERTVYKD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnX%2FntDDPgH2Hxc3089UbT71pTzqo3%2Bdfaa4Vxwjn6YAiEAwbxXmL940hspkCIR2c%2BwKIO8qNLDbQa3seR%2B1db0vWYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjyksnsSw2eeen3VircA8rsU%2BA%2F0GIudl07vZcny7VtQoxRhlhyqvIMlkjqwrqdujxIEaE2Xc4VsTEaZy3wTEw5MlGk2%2FrPpfZSXLYNTIh%2FpXRH%2F8%2FQUXLwT77kcguDag87PjcIF4ByIenolyWzW1ow6c91CU7rnGEdcKSFrNIj%2BfEKWtwIpzk7DnmmGjlVkW8zq5OdY%2B10uhAP5VftWJKWppYIHXMh9d4CZkh3JzbAAftjjElLaMs3c%2B2FzmUO80sYqPd1iT7HjQIwmAG0%2BQ07Nbr0cIiWynhX%2FQVWSjYSOupgpOJLJLDa3%2BYhuFqMEazmOEFSqujKf9BgwJF745IaYalie5JCNChFhvKsraeS%2FSZzRw1cdODXqWHvZWFxvbIlti6aGpMS9ovhXwT9iEIGgO9dok7LOr2rUMxDKvBjdYwxfXjPlsO%2FAQa9jUPYX1fUxSS3fG3%2FascxwyoT%2BLh%2FO0MjHTVZJCgkwajF0U29Kighs8xjUYnDpSV8XLLZiC3V6%2B1%2BCEL19mLGJs%2Fm4HCQbz6TNqsXXjn1KkLbs2j1OVMRXbrCJYvyNrscX6o98XsubchsFbkgC9WDyDVYu7b23p2u3oh8c3L1izdBEEoc0Ok6tmK1AXET3iBkmleND8JuVuTOMroRGTYQMKCupMQGOqUBH5OI9jDR9mf0v%2BC1cT%2F1Kl6aZ6u%2Fj8SJsutnF4rq7WgcVOijGIqgjq7Ndu%2FhzNReYeUqWpXhsom8AF5I0bbTjzR0CWB0XPFVD7lnwvazByoXUtixn4hnwNxvv6mCCTAlmMkyfzvZkfpM62lVCHx6act83BJTUqv4nzNHWCiujJQ3Vrd34txuFch139KCeUlXa5xk%2B2pX%2Bt8VxusD9W8OGQzSaLT9&X-Amz-Signature=08c6fba7e3aef0fb53c73dbbe785348a9404ed326d4d8595eff60adc5d44ed87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
