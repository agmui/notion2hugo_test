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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O3U5KDX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGFhl3nTUG8WgxF3nG%2BtIymdrKh%2Fiy%2Be9iSRsmeMlLg8AiEA3T2zYgTefPIaoCEFw%2BH9xipiBUCN5tOM1ENKfnlBPJwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB6A9C3hbA9ZkFh0gyrcA4tDpQZhy%2F8DrUMz7jYHMmK8MwDBjV7GXxxAIpWzPcuW7LjGn55m2B7xXuV2l7QkimogycV72hpazc03B1ioUG36sZLil92xHCN25I9RUrKx%2BYy9MsJuHHO3MyN1kGaIGwoYKgm257e7H6vE5ECw0nEeZuRnZXWlWRLEtJ3B%2Fs35hI6aBg2NEp8ZR%2FXsXXVekodYnd3QGRTnrfPrQ8FlIfOvPisYMv30UINTlj3VTj8ysWX%2FW9dWPCUwqXpg4nvu8gOdEEV2fMMjIjhlq4rmNdtnS8Vjsv1XKENEwGE0DGdDc2KIi9QIizvGMFce6BtRR2J0cjwnenxR0TuOQVevm7GFHcAKT4ZSMdiDKiPEKMAHSJOCj23doONtE1nRYJyALb5gYEkWgadYqOyErPWVKoDQOMZSLKlgpZxiOfEBjv%2FyLuU7yg%2FAL0tBUKQIh2AhE%2F5xwtctpct7FE7C3RWHKyNms3vJQS1biw1zHy7aD%2Be6ei%2FYcAVES48YIPtlF8IJyFewauSI0g6rycyNNIOy%2FTyhd0LRn151UVB8VuvzwRJYHlRQkcC4syQ3SI2V1%2FLweFhcN%2FFG1G6rYypijZa0nx8nMNJkZ9JrrJo5zhIkTdPQCj2l2yp5b4ddHrmCMLvoiL0GOqUBj3AR6Kp1lu4iC2yCKDL4GKe42u8Z%2F6AYA2CCFNVyCsurbRLp%2B6p%2Fblr8vXIOzB5ty2sSXjKxhGBgKqtvttIDXo%2B%2BJoFWM%2FUkbM7AqqBkQM3fK%2B9d9DMkFBR8hvCOYDHnoRSz8bz0%2B2MdHD3Uq%2BsJxl6HVVOf1%2Fv3lcFZ6sEEE%2F%2ByqT7ds3nGHWuYlz7bXP5eFyAQax6ZsMRHncnH8ofhEPpDFzS%2F&X-Amz-Signature=8ee507e7ebe1d4b0d6945ce8d01033d1b03ed5e25d900a4690a487541fb00263&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O3U5KDX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGFhl3nTUG8WgxF3nG%2BtIymdrKh%2Fiy%2Be9iSRsmeMlLg8AiEA3T2zYgTefPIaoCEFw%2BH9xipiBUCN5tOM1ENKfnlBPJwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB6A9C3hbA9ZkFh0gyrcA4tDpQZhy%2F8DrUMz7jYHMmK8MwDBjV7GXxxAIpWzPcuW7LjGn55m2B7xXuV2l7QkimogycV72hpazc03B1ioUG36sZLil92xHCN25I9RUrKx%2BYy9MsJuHHO3MyN1kGaIGwoYKgm257e7H6vE5ECw0nEeZuRnZXWlWRLEtJ3B%2Fs35hI6aBg2NEp8ZR%2FXsXXVekodYnd3QGRTnrfPrQ8FlIfOvPisYMv30UINTlj3VTj8ysWX%2FW9dWPCUwqXpg4nvu8gOdEEV2fMMjIjhlq4rmNdtnS8Vjsv1XKENEwGE0DGdDc2KIi9QIizvGMFce6BtRR2J0cjwnenxR0TuOQVevm7GFHcAKT4ZSMdiDKiPEKMAHSJOCj23doONtE1nRYJyALb5gYEkWgadYqOyErPWVKoDQOMZSLKlgpZxiOfEBjv%2FyLuU7yg%2FAL0tBUKQIh2AhE%2F5xwtctpct7FE7C3RWHKyNms3vJQS1biw1zHy7aD%2Be6ei%2FYcAVES48YIPtlF8IJyFewauSI0g6rycyNNIOy%2FTyhd0LRn151UVB8VuvzwRJYHlRQkcC4syQ3SI2V1%2FLweFhcN%2FFG1G6rYypijZa0nx8nMNJkZ9JrrJo5zhIkTdPQCj2l2yp5b4ddHrmCMLvoiL0GOqUBj3AR6Kp1lu4iC2yCKDL4GKe42u8Z%2F6AYA2CCFNVyCsurbRLp%2B6p%2Fblr8vXIOzB5ty2sSXjKxhGBgKqtvttIDXo%2B%2BJoFWM%2FUkbM7AqqBkQM3fK%2B9d9DMkFBR8hvCOYDHnoRSz8bz0%2B2MdHD3Uq%2BsJxl6HVVOf1%2Fv3lcFZ6sEEE%2F%2ByqT7ds3nGHWuYlz7bXP5eFyAQax6ZsMRHncnH8ofhEPpDFzS%2F&X-Amz-Signature=cf2df7e3f7af09d6e21534d3f7c87823e475a38fabf37fde7cc58b7730618b31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
