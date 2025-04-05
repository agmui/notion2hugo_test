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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOH2ZHT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkFnsEYy55ECBKGYoXmGHlHYWtxFwMrpIRg3AVlq3MiwIhAPP1X2Asi5uF3k2roEWuP40qQgwBovzP0r1zHSDLDNbNKv8DCCoQABoMNjM3NDIzMTgzODA1IgzlGQeFhKoIaZgykEgq3AMSLnYUYAtiEyMKDXbJtXBA2GxvASXaiQpxqxJaUfxh8FO3iOiKILYs50qKnFV%2Boh%2F4dEQ2ZQMEj8ph%2FZdG1NU6J0g01YeaYKwfEuzhLmr2c7bjmOcX9hOYLKLEsPkcmPlgcjRbx2BbH9tRihsk%2FcSD6aLpk3MV%2BYHb72dcpizlCUlOew7HCXXvjtfcUCek8Q1pQwMA%2BUBl5qgiPAF8ScsREB%2B7%2FEh6TDEZ6whjr%2BSOhFp75VdhMA5VKJH303U85IXc9shkxFY4Y%2FbA8uFpQ%2BKB8bYXuE3lpLbT2XUzzpBVwFdraTIpXhjOy0sbDVRDQ0xoojWESoiWE%2FiXgJCHOBkiwywEWwY1eJbElIA%2BWu3olsqNqA8%2B9FZKy9zKuqtR7J%2FsgbOeEIhfDU57enGpa9yvXZPuz6m9Y%2Fygkwb3McRjkPoFHbQ2DoVMLjYKUBJHJv3pW2lqRmdglPnUwPKQVSwAesqHUvoJSRotK0GCBM5GqjuC9eosnCixP1ajpP%2BhpsjlXGN1jZWpQT0bf8GM0i0lSD5XyIItN4pa6DTbIAaTC8Q9W6q6QAC4hdSR2ZNKFQDfNbUHxJ31vUQmnPQd4Go2XqwOUZGBy3wNOTzvTx4mDWlbjlnAufr4KETVZjDC5MO%2FBjqkAYSU6rm54zpdY9Pn1oYxrtQwgoxctKCuEH%2B6ByOSyQHMo03BeLI68h8nBk9xe4b57%2BRuTCg3hXr9o6j7FxCad1HjC%2F2xY9pGdnpwPmmCbuA1hZnAd7q7JQ2jlA8j8MY%2F3wlTmNohWlWYsG9uT7sU6GtaDU1w%2Fw0bjBtmH8XTE%2B8%2B%2FLUT27HPBSKsj%2B8KgEOz5l3cnesY30SrfZR3j7b7mkbDBz3Y&X-Amz-Signature=ed5f6828318f62dc5628b46605ed5d2113e9dbcc9976f154688fb8d46526a093&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOH2ZHT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkFnsEYy55ECBKGYoXmGHlHYWtxFwMrpIRg3AVlq3MiwIhAPP1X2Asi5uF3k2roEWuP40qQgwBovzP0r1zHSDLDNbNKv8DCCoQABoMNjM3NDIzMTgzODA1IgzlGQeFhKoIaZgykEgq3AMSLnYUYAtiEyMKDXbJtXBA2GxvASXaiQpxqxJaUfxh8FO3iOiKILYs50qKnFV%2Boh%2F4dEQ2ZQMEj8ph%2FZdG1NU6J0g01YeaYKwfEuzhLmr2c7bjmOcX9hOYLKLEsPkcmPlgcjRbx2BbH9tRihsk%2FcSD6aLpk3MV%2BYHb72dcpizlCUlOew7HCXXvjtfcUCek8Q1pQwMA%2BUBl5qgiPAF8ScsREB%2B7%2FEh6TDEZ6whjr%2BSOhFp75VdhMA5VKJH303U85IXc9shkxFY4Y%2FbA8uFpQ%2BKB8bYXuE3lpLbT2XUzzpBVwFdraTIpXhjOy0sbDVRDQ0xoojWESoiWE%2FiXgJCHOBkiwywEWwY1eJbElIA%2BWu3olsqNqA8%2B9FZKy9zKuqtR7J%2FsgbOeEIhfDU57enGpa9yvXZPuz6m9Y%2Fygkwb3McRjkPoFHbQ2DoVMLjYKUBJHJv3pW2lqRmdglPnUwPKQVSwAesqHUvoJSRotK0GCBM5GqjuC9eosnCixP1ajpP%2BhpsjlXGN1jZWpQT0bf8GM0i0lSD5XyIItN4pa6DTbIAaTC8Q9W6q6QAC4hdSR2ZNKFQDfNbUHxJ31vUQmnPQd4Go2XqwOUZGBy3wNOTzvTx4mDWlbjlnAufr4KETVZjDC5MO%2FBjqkAYSU6rm54zpdY9Pn1oYxrtQwgoxctKCuEH%2B6ByOSyQHMo03BeLI68h8nBk9xe4b57%2BRuTCg3hXr9o6j7FxCad1HjC%2F2xY9pGdnpwPmmCbuA1hZnAd7q7JQ2jlA8j8MY%2F3wlTmNohWlWYsG9uT7sU6GtaDU1w%2Fw0bjBtmH8XTE%2B8%2B%2FLUT27HPBSKsj%2B8KgEOz5l3cnesY30SrfZR3j7b7mkbDBz3Y&X-Amz-Signature=56a5932940a8837513da8ce9ee50b17b43cb4b2f29658d57d9b546dba96c674e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
