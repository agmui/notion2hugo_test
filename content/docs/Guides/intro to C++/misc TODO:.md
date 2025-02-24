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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBVST2X%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdOh7zeAeKtnp23i01nnt4PMJq57uqoLTr49JDBUrYtgIgBQdMKHMVjRZukBqTdMMMxhW2vwvZ6BVrgXKx%2FaOy4Ygq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAHQ3J1wg5VV8vtFtSrcA0P1dt%2F2rMBqzrWpEn8TP7hYq1iAPyU3%2B4OYp5nRUQPn481UsjRBngvEq46QB%2FTQISxE%2FZrhkP9Eft4hayg5eOgMMIeJidIN3EC4PeiHhyKb1jj65o9uKsFm%2FpcsnmjYRG2H8njudU8Q0E1QtRGSh1ZS2PdfoGWbEOLBv1mq8DHDj2C1sQqYUH8xOIHZN%2FiGpRwiXLSdSoQfEg0PLMxIA98%2FNgJhj6rpSsaZj9dnxZFgde3%2FsYi0eULkF80%2FkSr3SIjH%2FlA1fqZGp2hM%2B3we8R591XUnKvL7gjbJv7%2Fp%2F5mZQZRmT%2F5uOTGm3gUeO75PzqUE4jFnrMXDSObuuLuXtj%2FrQcn0%2BsZCYJI1EYjTi5IZ9TcgbtY3RRgYmIp1V6PhAr4LLZY5ybjtnmjyyM3MLD7DONehsX7Be84uxyalixWub3a8umEKYTJZxOojM3Qtx%2F%2BGuWEuEUXsnB6rl0h1%2BZpt3cdy3ds6nL5s%2FAPgdjPalwKJM9TTdz5RLc2Wq3PDCX1iIXyg%2FZpB6%2B9%2BvGGi9bFhR%2BXj%2FHXkYinDdI2OBsfIM%2BdgHXIj%2FnzD7O7yojMJs7m%2B2QoqGNCF9ZKwvVK4MicGVaPKiBwbbUIToXZI2wqVdndDPnqdFdmuMEyLMIvi770GOqUBrH1qT8ypHAzVan3ynLYnIg9IxVD%2FnBC%2BohcFgGfsafiojWkZDjv6oQ7GmQehfmUjOKw5GBQqTGeyIUqbrNC0yp2WH5ioSEsnREALU23QSFdopHP1uUXT%2FUsXkzBOH7TR6cKggALF6g0vygoTXktk7D88NlzibM9Z%2BpGmDqG7jgQnca0BIg90G%2FUfKnM5MnDuDR80rYnIYfJH%2Bgm1lBogDWGuGdyZ&X-Amz-Signature=3bec58ee220f72e63bd9d7a5f27aa246599c110bbdcfff203aae3897424b295b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBVST2X%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdOh7zeAeKtnp23i01nnt4PMJq57uqoLTr49JDBUrYtgIgBQdMKHMVjRZukBqTdMMMxhW2vwvZ6BVrgXKx%2FaOy4Ygq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAHQ3J1wg5VV8vtFtSrcA0P1dt%2F2rMBqzrWpEn8TP7hYq1iAPyU3%2B4OYp5nRUQPn481UsjRBngvEq46QB%2FTQISxE%2FZrhkP9Eft4hayg5eOgMMIeJidIN3EC4PeiHhyKb1jj65o9uKsFm%2FpcsnmjYRG2H8njudU8Q0E1QtRGSh1ZS2PdfoGWbEOLBv1mq8DHDj2C1sQqYUH8xOIHZN%2FiGpRwiXLSdSoQfEg0PLMxIA98%2FNgJhj6rpSsaZj9dnxZFgde3%2FsYi0eULkF80%2FkSr3SIjH%2FlA1fqZGp2hM%2B3we8R591XUnKvL7gjbJv7%2Fp%2F5mZQZRmT%2F5uOTGm3gUeO75PzqUE4jFnrMXDSObuuLuXtj%2FrQcn0%2BsZCYJI1EYjTi5IZ9TcgbtY3RRgYmIp1V6PhAr4LLZY5ybjtnmjyyM3MLD7DONehsX7Be84uxyalixWub3a8umEKYTJZxOojM3Qtx%2F%2BGuWEuEUXsnB6rl0h1%2BZpt3cdy3ds6nL5s%2FAPgdjPalwKJM9TTdz5RLc2Wq3PDCX1iIXyg%2FZpB6%2B9%2BvGGi9bFhR%2BXj%2FHXkYinDdI2OBsfIM%2BdgHXIj%2FnzD7O7yojMJs7m%2B2QoqGNCF9ZKwvVK4MicGVaPKiBwbbUIToXZI2wqVdndDPnqdFdmuMEyLMIvi770GOqUBrH1qT8ypHAzVan3ynLYnIg9IxVD%2FnBC%2BohcFgGfsafiojWkZDjv6oQ7GmQehfmUjOKw5GBQqTGeyIUqbrNC0yp2WH5ioSEsnREALU23QSFdopHP1uUXT%2FUsXkzBOH7TR6cKggALF6g0vygoTXktk7D88NlzibM9Z%2BpGmDqG7jgQnca0BIg90G%2FUfKnM5MnDuDR80rYnIYfJH%2Bgm1lBogDWGuGdyZ&X-Amz-Signature=389c582006bf8db05efaa7f2b6a985ac1d1685c230617fe76df696fbc39c423a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
