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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUYFJDTW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2Z3x4TWICDT%2FesqybEVywdpP5AalUR%2FbohNvz6cToSAiAeSbsgK%2Fo%2FOBirtABVWwxz0xBoZw6j4EmIRoIO6oSEhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyNwYwdIwzjdcA%2FQnKtwDsa%2Fq8%2B67VSTE5ZhWilUXYIDYg6RaqgjabwW1Kj%2FAv6aMMiO10UHpyg2uiEp8pzd1Di5hT2m3O%2FI%2FvJx6WvUfLhL4PzwPO6a4IKuO80BEGpqgrwo5s1xKkQUqZ58ZAXDS2pvOrLyjkBdKWKD4GUtwiP218Nab3gpRo4awMopu3wE6pFZK9D2B%2BSunDLCpzNcZPpB%2BP8ZteyAwnCbdtIKJzwzWVCTGJkKN5L%2FoDj%2BjAMXEeNRjBSPgRr01jDxLdgsavF8D%2B2eBA6kC%2BqRtA2nw7hWjsOKpDg%2FJdZwz9T0SBPfkHnyfKAJ77%2BYPNkjZhSD2%2Fw5oqllvzp%2F3eTYIoKkznz8gPJfBBVs%2BfQ16JeWv%2BgIdNj405i3CoyH0f8NRYJ6qNSRCckNhlhkSd%2FhURMm7V3HttSqKRbB%2B8gr%2F4oiX28T5mcuIqNWtTWcKYy4KsgzNvj1ynEYbjrnE4cc6jUvkjsJwCQJnc1xK%2F7uWRuhTgCQfokvJYYY93%2FrR%2FQ5%2BVObhS9q90lNaP33f%2BaGi8CqmrnHaW%2FH2L%2BuxQsYqxV%2FlhZ1gV4SHCaCC5SgxZ7RL8V5vnH0lQ6%2FQcBD2ecj8owTaU7mJtjT22mwi1%2BpJ9Hc3f5lb4dRrzTOkkIiJ8swwtfCAvwY6pgFimWb1q3jbRea9L8eKx6GUN7j%2BEij%2BdYNqxyOO20U7zvaWeZT6vmSE9XwBVPgNu2jquzmrrL08CRpX%2BPf20aQb0p%2FB%2FYaNSrG7H0guTBiWM1mCNaqXN%2Bh0RTkxLlvav4tXhRrUuryZRyH7tGVwkTsUv%2B7rZGKlBL%2Fnwxx7%2Bk5%2F%2Bk0ljbqgj46WX%2BkxWXF0KEy%2BjkPRQsfmcES799l4majFN8YK%2BEut&X-Amz-Signature=c208556be2c5919b64a1f9ca725b7a16ff0ec284ff5634b991ac102a295e8dba&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUYFJDTW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2Z3x4TWICDT%2FesqybEVywdpP5AalUR%2FbohNvz6cToSAiAeSbsgK%2Fo%2FOBirtABVWwxz0xBoZw6j4EmIRoIO6oSEhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyNwYwdIwzjdcA%2FQnKtwDsa%2Fq8%2B67VSTE5ZhWilUXYIDYg6RaqgjabwW1Kj%2FAv6aMMiO10UHpyg2uiEp8pzd1Di5hT2m3O%2FI%2FvJx6WvUfLhL4PzwPO6a4IKuO80BEGpqgrwo5s1xKkQUqZ58ZAXDS2pvOrLyjkBdKWKD4GUtwiP218Nab3gpRo4awMopu3wE6pFZK9D2B%2BSunDLCpzNcZPpB%2BP8ZteyAwnCbdtIKJzwzWVCTGJkKN5L%2FoDj%2BjAMXEeNRjBSPgRr01jDxLdgsavF8D%2B2eBA6kC%2BqRtA2nw7hWjsOKpDg%2FJdZwz9T0SBPfkHnyfKAJ77%2BYPNkjZhSD2%2Fw5oqllvzp%2F3eTYIoKkznz8gPJfBBVs%2BfQ16JeWv%2BgIdNj405i3CoyH0f8NRYJ6qNSRCckNhlhkSd%2FhURMm7V3HttSqKRbB%2B8gr%2F4oiX28T5mcuIqNWtTWcKYy4KsgzNvj1ynEYbjrnE4cc6jUvkjsJwCQJnc1xK%2F7uWRuhTgCQfokvJYYY93%2FrR%2FQ5%2BVObhS9q90lNaP33f%2BaGi8CqmrnHaW%2FH2L%2BuxQsYqxV%2FlhZ1gV4SHCaCC5SgxZ7RL8V5vnH0lQ6%2FQcBD2ecj8owTaU7mJtjT22mwi1%2BpJ9Hc3f5lb4dRrzTOkkIiJ8swwtfCAvwY6pgFimWb1q3jbRea9L8eKx6GUN7j%2BEij%2BdYNqxyOO20U7zvaWeZT6vmSE9XwBVPgNu2jquzmrrL08CRpX%2BPf20aQb0p%2FB%2FYaNSrG7H0guTBiWM1mCNaqXN%2Bh0RTkxLlvav4tXhRrUuryZRyH7tGVwkTsUv%2B7rZGKlBL%2Fnwxx7%2Bk5%2F%2Bk0ljbqgj46WX%2BkxWXF0KEy%2BjkPRQsfmcES799l4majFN8YK%2BEut&X-Amz-Signature=7e23902dc466b1cb76fb2e3a9b59bec37d94a1019bd87efd04be8b0cdf346466&X-Amz-SignedHeaders=host&x-id=GetObject)

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
