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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756DI262%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUDQTCVtFBOYypjgfsQ0b48ta5129EkuPRtoNLUbyksQIhAK90F3hf0zscgk1jQqUNq4EjiRJYgk2RHJGZh%2Fc6cBTqKv8DCEYQABoMNjM3NDIzMTgzODA1IgyZRhwcMbty7nqv6DEq3AN6D8cuAGPLD6dHxIDU4zp%2BMXzUeA%2BpqGkMCMUwWIynmITQKq3tb7sA00Q5EEtjAK6sm%2BoG20r5oMvC9OXEAc8j7o2f3L%2BPMn6AMVDfGiYi7H9XpHZCMYwmbN6RfEUL%2BaaoN0l3yw%2Fu2HsPEskrmMhwIQPVeUhrfmMVMg%2Fc5u49F%2F%2FkLi5tjs8SBm6hzwJgbcsoMozAd1tTdPZu0fcJ3%2BuT%2BU2Y%2FETfWy6gL4RRDS%2F%2BKdyauwNDTBH%2BQ8PmQo9dJUN0WoUSI%2BWMgp68541tUGWe7rPA4cSozhCqLzH4Ik4uHT3bR1hdeazO4g%2Bfc9i82vFK5MPrsp5QM6q4G6O0I1JlrCenOX7HBixsbEBwmTpprq5wuFTY72FuHLXyRdSIrixO3CMI5bKOwS%2BdDGFmilgwTQb7cs8DvjGdhHzn5xi%2Bp%2B%2F9GTIs%2FU5bPKWt%2Bj4WaSgC8JHb3iR89U68mqAOZR2rJwzA5G%2B5oRe5WOJs3QqnllF2fgkwYyhO3%2Fbns6%2FsieaKPXFCX4yP4bTqmVYDqEx5o9oYgAktr%2BQHHyGWFD6rHhv8In926Wfs3%2FAmLPrBLWz3EMyENjQz3dzQPH7WyF1SvYJV%2F%2FNwWi%2FJvKQDlKDYFMOSCdI3L2NkPA%2BsazDOl%2BjABjqkARhLAANczAy8GC7QPna7azFpREUsXkiSOjwYBedPwIOewFKTdCkK1r25AHwzdVXD%2F5x2%2FlVwP4b2Vam6x%2BCBEZMRKXy7B6xhXausk1bjB90lEhFPG%2BhQ00QK8MARR0ndeMbIm8LkIkU88NsFsGFB8vJp83UEnr5qofpxpvE4NPEIrgR6reKVo8NBIhGS3o02Zn7740r%2FG2ClU%2FnGTqA4ga2D2WA3&X-Amz-Signature=28f6c02ce8aab43980687816e4d1440e0818f06c6c15dc8bc298f747e369a08e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466756DI262%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUDQTCVtFBOYypjgfsQ0b48ta5129EkuPRtoNLUbyksQIhAK90F3hf0zscgk1jQqUNq4EjiRJYgk2RHJGZh%2Fc6cBTqKv8DCEYQABoMNjM3NDIzMTgzODA1IgyZRhwcMbty7nqv6DEq3AN6D8cuAGPLD6dHxIDU4zp%2BMXzUeA%2BpqGkMCMUwWIynmITQKq3tb7sA00Q5EEtjAK6sm%2BoG20r5oMvC9OXEAc8j7o2f3L%2BPMn6AMVDfGiYi7H9XpHZCMYwmbN6RfEUL%2BaaoN0l3yw%2Fu2HsPEskrmMhwIQPVeUhrfmMVMg%2Fc5u49F%2F%2FkLi5tjs8SBm6hzwJgbcsoMozAd1tTdPZu0fcJ3%2BuT%2BU2Y%2FETfWy6gL4RRDS%2F%2BKdyauwNDTBH%2BQ8PmQo9dJUN0WoUSI%2BWMgp68541tUGWe7rPA4cSozhCqLzH4Ik4uHT3bR1hdeazO4g%2Bfc9i82vFK5MPrsp5QM6q4G6O0I1JlrCenOX7HBixsbEBwmTpprq5wuFTY72FuHLXyRdSIrixO3CMI5bKOwS%2BdDGFmilgwTQb7cs8DvjGdhHzn5xi%2Bp%2B%2F9GTIs%2FU5bPKWt%2Bj4WaSgC8JHb3iR89U68mqAOZR2rJwzA5G%2B5oRe5WOJs3QqnllF2fgkwYyhO3%2Fbns6%2FsieaKPXFCX4yP4bTqmVYDqEx5o9oYgAktr%2BQHHyGWFD6rHhv8In926Wfs3%2FAmLPrBLWz3EMyENjQz3dzQPH7WyF1SvYJV%2F%2FNwWi%2FJvKQDlKDYFMOSCdI3L2NkPA%2BsazDOl%2BjABjqkARhLAANczAy8GC7QPna7azFpREUsXkiSOjwYBedPwIOewFKTdCkK1r25AHwzdVXD%2F5x2%2FlVwP4b2Vam6x%2BCBEZMRKXy7B6xhXausk1bjB90lEhFPG%2BhQ00QK8MARR0ndeMbIm8LkIkU88NsFsGFB8vJp83UEnr5qofpxpvE4NPEIrgR6reKVo8NBIhGS3o02Zn7740r%2FG2ClU%2FnGTqA4ga2D2WA3&X-Amz-Signature=7b8ec1404a6a0f82ce735227e923aa886125dc97710e3798e421ea54070b5014&X-Amz-SignedHeaders=host&x-id=GetObject)

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
