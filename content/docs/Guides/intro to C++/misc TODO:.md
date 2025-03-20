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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMSEXRT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFvUhWj66%2BFxbWi9itY0%2BN8CSyguUxMdic41de8qAdObAiAGYo0WMztKalgdye6IefGg0CKxSJLn71XMHvyq1NbzAyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk7cZUkDXhAAX7ZL1KtwDjsPzrianEt6JZkphoxuDMS9KmqXApxKZGqPjrKvk%2BPlyYJnIWe6ML7nIcYAHgTAebaSkWytviR4hYUYF4dOI6tDWQf%2FerCMgYLgaxuIDkSanI47C9RbTvJj53DzOL0U77fxhMGUwFDy5KZdVx6oIdO3uYiNJHS3OTRNIXL9UYHwLrLi3haaX%2Bw16qdbFYob%2BA5h0NM0AXSaupCD1xBNsxbiCiBCOBe86dZXx3ajNSFdSCIDC%2BOD%2FUPQ07Q8UFtNOyXGD67HA%2FOmni94wvga5PCjAph1pY6YMfIemSg1CYEZMg9mpxsq3N2cx9nhEfG5Hv9GWvwQ1C%2BvA%2F0qc%2FBncEXq1b6Nl8wNYp7o9Wx1QBzKFB5vIsirmVpJc61hK5RlMLx%2F%2Bv%2BikU4vs2QG7kv%2FUIOMdmPa9HC666sWnjo2tXe1vk7F%2FiRNSrkmy%2F%2B2jw%2F8jZqLtGjILQ%2B8AX5DgZBpI016UCJY8cGyVW0I%2BNzqXIGaNvoL9FK6sc28dFmxHHgF9JiUHs%2FSpLF4sCEjsjEDkj0fSB67YeYI4PFimk5ykHx07IVK92k6O1N4ReG7TTNhHHvsSltXIP%2F6NhuCQEFNRnGcus53bZL2RXvUiR5bYzrAHwyXwtwPEuq572GAwt8bvvgY6pgFhlyIqa0l6h9alq1o222NnlxR9M8%2FKCB0dKKnw0bxmkaq6x3c09wnlPlZvTcXzRQJOG7%2BK70logRxd5SaThgYc8hlNj7PagCYehZ%2B61rxG6MRYmv3iFERs3GPE5ojuvRHoZaZhJXKrcP1U3UVPty2y8DGdoaEB2Obr1DuBEYA1N0to8Oy6Sj%2BtfmjY1HQuauRyG2hMVhrDfOYzWo4ZEePvHgD%2FmSAO&X-Amz-Signature=aabfc9ed10214a4645390b237f7668b0b2dd91298af8f63f8a4b716b9d6f9bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMSEXRT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFvUhWj66%2BFxbWi9itY0%2BN8CSyguUxMdic41de8qAdObAiAGYo0WMztKalgdye6IefGg0CKxSJLn71XMHvyq1NbzAyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk7cZUkDXhAAX7ZL1KtwDjsPzrianEt6JZkphoxuDMS9KmqXApxKZGqPjrKvk%2BPlyYJnIWe6ML7nIcYAHgTAebaSkWytviR4hYUYF4dOI6tDWQf%2FerCMgYLgaxuIDkSanI47C9RbTvJj53DzOL0U77fxhMGUwFDy5KZdVx6oIdO3uYiNJHS3OTRNIXL9UYHwLrLi3haaX%2Bw16qdbFYob%2BA5h0NM0AXSaupCD1xBNsxbiCiBCOBe86dZXx3ajNSFdSCIDC%2BOD%2FUPQ07Q8UFtNOyXGD67HA%2FOmni94wvga5PCjAph1pY6YMfIemSg1CYEZMg9mpxsq3N2cx9nhEfG5Hv9GWvwQ1C%2BvA%2F0qc%2FBncEXq1b6Nl8wNYp7o9Wx1QBzKFB5vIsirmVpJc61hK5RlMLx%2F%2Bv%2BikU4vs2QG7kv%2FUIOMdmPa9HC666sWnjo2tXe1vk7F%2FiRNSrkmy%2F%2B2jw%2F8jZqLtGjILQ%2B8AX5DgZBpI016UCJY8cGyVW0I%2BNzqXIGaNvoL9FK6sc28dFmxHHgF9JiUHs%2FSpLF4sCEjsjEDkj0fSB67YeYI4PFimk5ykHx07IVK92k6O1N4ReG7TTNhHHvsSltXIP%2F6NhuCQEFNRnGcus53bZL2RXvUiR5bYzrAHwyXwtwPEuq572GAwt8bvvgY6pgFhlyIqa0l6h9alq1o222NnlxR9M8%2FKCB0dKKnw0bxmkaq6x3c09wnlPlZvTcXzRQJOG7%2BK70logRxd5SaThgYc8hlNj7PagCYehZ%2B61rxG6MRYmv3iFERs3GPE5ojuvRHoZaZhJXKrcP1U3UVPty2y8DGdoaEB2Obr1DuBEYA1N0to8Oy6Sj%2BtfmjY1HQuauRyG2hMVhrDfOYzWo4ZEePvHgD%2FmSAO&X-Amz-Signature=3281a5929a60a34c22c916a45620b3fdfa1807797185ad18ee42fa2db52b9476&X-Amz-SignedHeaders=host&x-id=GetObject)

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
