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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2UDCUQ4%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYs3WG7TXqtw7aQgpjTc7obm3rNoOkmq7aZrBQbQWbCAIgG8YmqaLaTAPdQzTNhc3Anepm8969bm7Jl1T3XGhzFl8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNumRREuMmMpMEReKyrcA3MU21ztxWQK5fzuDB5kZYpNvlrQQ8N7xxHq3QM643%2FviG1OxLPsANjIJRkC8sq5%2FmsICTXc0CO2ZvCPelm6y9Tot9LquBhB0c%2FGAi0VUd3Uj5QlI03kTREnNp4E%2BVK%2BnPJXTCV675IddlCefp4V464HyI7ArX%2Fpj35QDVG3fyjl4U0nsBqY%2BMNXUElXQWph0%2BKK6TmxoaxJePrXB3kk0tqRzUu17%2BDGKoDwVY%2F7Swm8rRYkul5tIradD9PCIlzbYZdGB26dTwUFDvgng8D5G%2FoblGWk7Dy%2B9JoquOmxZtJatkMW0HTo%2Bd9qFKUhDzfyYhdU1vf8zplCTvO9tPLpTADrHROrZe%2FJvROGbvwLzDBl9H9ftHbH%2BYFNMy9mak5aUQF8LNsmMYLPbl9mFtJ6NUF1I%2B7k7tlAXTXGXjkYFonhgwAYP9a8C2cufJTKiPWB6CdIJ5Sxbac0MyEJ7%2FUxvXa9L4jgqItV2nrNOx1ubH2jcXgLUNSq1aG%2BmoJDJfh7sNCRJ1H8IA%2FVk5nqzfREWLs9G7Gr5tqLvdjy%2F7y9VRYwWgB0B9ioDpT4TXM69mvpPNuO8AOweZr%2F2LKWRysjTHZDhVlJd0CbuiM84lHPgNBD9ePLkaHe86pWReEuMMCP%2FMAGOqUBU8r82HCssJgvZJZboGwCRJHAmWs7XMpaJst7ZFLGqB%2BOFboQK%2Fffn6fBqHUoihs14O7Pufs5rD7yr0ZghkSLRrGLQEzdHo%2FxE%2BRuG4dbGzlGisw1k9hcxxpV1gzmxkBycKOlq%2B0fIwxzdJYoOFo05p%2BUN%2BKimvV%2FRU2wznKwpGiV5KXWooD7YgVFsYIGNODJWJZ6QboAKOGNE%2BMa8%2B2KLFPWJvwV&X-Amz-Signature=c178c02b5fd390ce0aab467d60063503fb6d6574d35026b9d5907a5e12b3c4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2UDCUQ4%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYs3WG7TXqtw7aQgpjTc7obm3rNoOkmq7aZrBQbQWbCAIgG8YmqaLaTAPdQzTNhc3Anepm8969bm7Jl1T3XGhzFl8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNumRREuMmMpMEReKyrcA3MU21ztxWQK5fzuDB5kZYpNvlrQQ8N7xxHq3QM643%2FviG1OxLPsANjIJRkC8sq5%2FmsICTXc0CO2ZvCPelm6y9Tot9LquBhB0c%2FGAi0VUd3Uj5QlI03kTREnNp4E%2BVK%2BnPJXTCV675IddlCefp4V464HyI7ArX%2Fpj35QDVG3fyjl4U0nsBqY%2BMNXUElXQWph0%2BKK6TmxoaxJePrXB3kk0tqRzUu17%2BDGKoDwVY%2F7Swm8rRYkul5tIradD9PCIlzbYZdGB26dTwUFDvgng8D5G%2FoblGWk7Dy%2B9JoquOmxZtJatkMW0HTo%2Bd9qFKUhDzfyYhdU1vf8zplCTvO9tPLpTADrHROrZe%2FJvROGbvwLzDBl9H9ftHbH%2BYFNMy9mak5aUQF8LNsmMYLPbl9mFtJ6NUF1I%2B7k7tlAXTXGXjkYFonhgwAYP9a8C2cufJTKiPWB6CdIJ5Sxbac0MyEJ7%2FUxvXa9L4jgqItV2nrNOx1ubH2jcXgLUNSq1aG%2BmoJDJfh7sNCRJ1H8IA%2FVk5nqzfREWLs9G7Gr5tqLvdjy%2F7y9VRYwWgB0B9ioDpT4TXM69mvpPNuO8AOweZr%2F2LKWRysjTHZDhVlJd0CbuiM84lHPgNBD9ePLkaHe86pWReEuMMCP%2FMAGOqUBU8r82HCssJgvZJZboGwCRJHAmWs7XMpaJst7ZFLGqB%2BOFboQK%2Fffn6fBqHUoihs14O7Pufs5rD7yr0ZghkSLRrGLQEzdHo%2FxE%2BRuG4dbGzlGisw1k9hcxxpV1gzmxkBycKOlq%2B0fIwxzdJYoOFo05p%2BUN%2BKimvV%2FRU2wznKwpGiV5KXWooD7YgVFsYIGNODJWJZ6QboAKOGNE%2BMa8%2B2KLFPWJvwV&X-Amz-Signature=6ab55c1c1f89ebe204326424689d6a5c59a76a7e9caf7f4d91996147c62cac8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
