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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOS5ITBU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIE5HB18pmiu2AxMne%2BnLmfZhMKLNIIrao%2BQMdIqPdCqEAiACzO3rhDlgBMu4H64Khlvgy3OQGy2Tipz0Swy3GTkZUCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMhcs8I%2B9fteFaBeGQKtwD9ZOb4SK6DvSU67mNJ4%2F2%2F1Dtj6dsRi5BJPTE1QeDUdyUepIKZWyJPltjeQS%2F79%2F6%2BYVhncKo33DZoN5m6lJKf4z%2F6uyi0CRewra1oyb34kfJ8S43UNUE5I%2B1wWgHnqqks9OAqSJODkEbK9WtVHCzPLEKKIIRwB32AdejexkC7OgplG5Eju5HiqmWksNSIugz1otdhhQlA%2BaZEkP7r7ODUbCsGdBpJ1GN27JLzBJOvYtelIVUHARO6iR1v3AH7tVZ5SstHZeKjkvrV9mjAQMq5jIU1VeHEFD1KHiM3a%2BwYNXTdLHVw2YCVIXPpG49%2F4IWeC4efC0mnRFEC9Q94nIxdAn%2BxHYKLqeELV5tSyqM3kWqVyJK56A5JjKeeJCPQ8UZss6XhGUQ0MXpTDnc7PQ3GTgQb0UZg1UDHuzFTN42BGZ44PgSyGwp2J8i2BbJKazouTEwVpuKCc9s59JCuQXS4iHKAZY8JUEwb8E0gPcmB33LKpQkD8kDtaT7TS4QNJKFzmn269AMuzE2%2FSyTZcVudDmEMT1cxHhYNp%2BGrH8vmIYi82bEJzApfezHCOEeQi%2BrHlNaizxg6f3qMufPpXx5%2BmVZn2lxtxG6Y1%2Fkke%2F%2FPw6N7f97apnqEXs7x1Uw2rSCvgY6pgHuxfkDzA9zrCrPXFEbziHad5GWAA3O%2BLBGPvbCZz8t4RRL7%2Bd8wztw8MzcvicebzIBIYThiPYDsN6MROStAagBB940CzOrX8qCcPm2FGXolXzIxef%2BFE1ZCFNsAgo2dP%2BD0nZzoO%2Bp3219CaI3zGL%2BtxxsxICRYb0TUR%2FmR906JJp8PdtKXyiPgNgva9o2Yv5o8VG6ad6Sua5WBQQiugOQVoAyZg4g&X-Amz-Signature=6634ac6c6cf0bcd29e3690687bf1d10926a060465b36789b7ef6578ad714b7a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOS5ITBU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIE5HB18pmiu2AxMne%2BnLmfZhMKLNIIrao%2BQMdIqPdCqEAiACzO3rhDlgBMu4H64Khlvgy3OQGy2Tipz0Swy3GTkZUCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMhcs8I%2B9fteFaBeGQKtwD9ZOb4SK6DvSU67mNJ4%2F2%2F1Dtj6dsRi5BJPTE1QeDUdyUepIKZWyJPltjeQS%2F79%2F6%2BYVhncKo33DZoN5m6lJKf4z%2F6uyi0CRewra1oyb34kfJ8S43UNUE5I%2B1wWgHnqqks9OAqSJODkEbK9WtVHCzPLEKKIIRwB32AdejexkC7OgplG5Eju5HiqmWksNSIugz1otdhhQlA%2BaZEkP7r7ODUbCsGdBpJ1GN27JLzBJOvYtelIVUHARO6iR1v3AH7tVZ5SstHZeKjkvrV9mjAQMq5jIU1VeHEFD1KHiM3a%2BwYNXTdLHVw2YCVIXPpG49%2F4IWeC4efC0mnRFEC9Q94nIxdAn%2BxHYKLqeELV5tSyqM3kWqVyJK56A5JjKeeJCPQ8UZss6XhGUQ0MXpTDnc7PQ3GTgQb0UZg1UDHuzFTN42BGZ44PgSyGwp2J8i2BbJKazouTEwVpuKCc9s59JCuQXS4iHKAZY8JUEwb8E0gPcmB33LKpQkD8kDtaT7TS4QNJKFzmn269AMuzE2%2FSyTZcVudDmEMT1cxHhYNp%2BGrH8vmIYi82bEJzApfezHCOEeQi%2BrHlNaizxg6f3qMufPpXx5%2BmVZn2lxtxG6Y1%2Fkke%2F%2FPw6N7f97apnqEXs7x1Uw2rSCvgY6pgHuxfkDzA9zrCrPXFEbziHad5GWAA3O%2BLBGPvbCZz8t4RRL7%2Bd8wztw8MzcvicebzIBIYThiPYDsN6MROStAagBB940CzOrX8qCcPm2FGXolXzIxef%2BFE1ZCFNsAgo2dP%2BD0nZzoO%2Bp3219CaI3zGL%2BtxxsxICRYb0TUR%2FmR906JJp8PdtKXyiPgNgva9o2Yv5o8VG6ad6Sua5WBQQiugOQVoAyZg4g&X-Amz-Signature=1e0f7e366f63552dadbbfd62b35957ebedc3c71b526ce480a11b34b6945c8660&X-Amz-SignedHeaders=host&x-id=GetObject)

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
