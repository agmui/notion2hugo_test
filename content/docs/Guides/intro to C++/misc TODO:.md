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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKW5RQ6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAfOr45iVGk8Xt%2FkVq2ztBWDZrqRvzX99Jfch8V%2FvyDzAiEA7MOd5xmHIW6vSQSqw6jZDLlkvY6XcNpmk7nRV3FhIE8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRwEZYRa%2BzvQqWTLyrcAxhmbGba2QUShHVNXJiFnsEwqZYJ%2BBJlogGY%2FIbhHKKvyuKkGhA60nkKE1bTasQxpvn6V3LpEK%2F3WHbXA5lR1LpXGRxsDUta6xsLU2B6ntIYiHdINyinCsjNWiYWxcH6WX8aPsiELZEOveeIxpCd%2Faj6B6yQ7%2BYMm2TxJqwGP4vaG0yNGzcWv6uXRoJdQCaUPEFL4XQyMj1ZXXxQj8hcYWChaDHG0hNQqGOH7rEw1UfT139gDSBgKHOHEiPQ4e%2Bkwkha%2BlMFu2Vq09Bt54EC8ggwSo5woZPEfFLaTbiXctWsXJHBVv%2F07LJXIzXfutdg0iUqzlEi8BTKviD36NCw1Uy5k1NyT5YY6Lkewsxcxui%2F33huKLosG1dbeM8XH0J7LNetTeVxkpAtNMTq6kZxrZp6RlckmADgqqO6%2BwUU4AfezQj3XQP1GnI4QMgNWbTADM8jemW9d%2Bzk9jhDRoX8wZcxjStmWVNXsY6fYSJIuouC7uK%2Fkz4MOHWtn7tkVkR4UfvELC%2FW8%2Fil790xB6mUB9sO2HsJqQa1QJDe56GGzX9hpjq4llK%2BO%2FaJVSpdwGdcP53NguVpYbagBYZgtQwQxmm34KlGS%2FVGPEYIctg%2B2b9vwWN9D3RUwX5AKC%2BBML7w%2F74GOqUBuw6lLlshimeekbHfNOtdVuhJ6K%2FpCb5E9PRTYk0gkHCdlU2%2Bw4d0ExO%2BjCHgRrKQUbKEGsfGNxS6mm7ru5BEuGxDh3fLmkENjpgesjbygGVwSuzuGM699kYj%2Botfgh%2Bi8q%2FuvPuu9OjSPuO99AXg8s8v5eioWqY7OyzxcVB1RtmRpglSRY3h%2FI7Bfkfsbh%2Fgph6DMX3XP1Vw8TPCMowqS17K3HDe&X-Amz-Signature=acd677f1bb11d99135854919adb65276b7d865cbc741d0e83d2cfbcb3dbb03fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKW5RQ6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAfOr45iVGk8Xt%2FkVq2ztBWDZrqRvzX99Jfch8V%2FvyDzAiEA7MOd5xmHIW6vSQSqw6jZDLlkvY6XcNpmk7nRV3FhIE8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRwEZYRa%2BzvQqWTLyrcAxhmbGba2QUShHVNXJiFnsEwqZYJ%2BBJlogGY%2FIbhHKKvyuKkGhA60nkKE1bTasQxpvn6V3LpEK%2F3WHbXA5lR1LpXGRxsDUta6xsLU2B6ntIYiHdINyinCsjNWiYWxcH6WX8aPsiELZEOveeIxpCd%2Faj6B6yQ7%2BYMm2TxJqwGP4vaG0yNGzcWv6uXRoJdQCaUPEFL4XQyMj1ZXXxQj8hcYWChaDHG0hNQqGOH7rEw1UfT139gDSBgKHOHEiPQ4e%2Bkwkha%2BlMFu2Vq09Bt54EC8ggwSo5woZPEfFLaTbiXctWsXJHBVv%2F07LJXIzXfutdg0iUqzlEi8BTKviD36NCw1Uy5k1NyT5YY6Lkewsxcxui%2F33huKLosG1dbeM8XH0J7LNetTeVxkpAtNMTq6kZxrZp6RlckmADgqqO6%2BwUU4AfezQj3XQP1GnI4QMgNWbTADM8jemW9d%2Bzk9jhDRoX8wZcxjStmWVNXsY6fYSJIuouC7uK%2Fkz4MOHWtn7tkVkR4UfvELC%2FW8%2Fil790xB6mUB9sO2HsJqQa1QJDe56GGzX9hpjq4llK%2BO%2FaJVSpdwGdcP53NguVpYbagBYZgtQwQxmm34KlGS%2FVGPEYIctg%2B2b9vwWN9D3RUwX5AKC%2BBML7w%2F74GOqUBuw6lLlshimeekbHfNOtdVuhJ6K%2FpCb5E9PRTYk0gkHCdlU2%2Bw4d0ExO%2BjCHgRrKQUbKEGsfGNxS6mm7ru5BEuGxDh3fLmkENjpgesjbygGVwSuzuGM699kYj%2Botfgh%2Bi8q%2FuvPuu9OjSPuO99AXg8s8v5eioWqY7OyzxcVB1RtmRpglSRY3h%2FI7Bfkfsbh%2Fgph6DMX3XP1Vw8TPCMowqS17K3HDe&X-Amz-Signature=9b8ebf8a401dd96518a6b03de6f257d94b7598aca1a63e2f691b17e5874c7ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
