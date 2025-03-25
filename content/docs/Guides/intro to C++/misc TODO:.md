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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKFDPAG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR5v32BmvBjswlzv44tumkEnZBX1o0c%2BJzpoNtwfr4CAiAMsjgbrebRkuvh%2BzQEuNauW6WYlBQMNlnhzmAsxa%2FmySr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMaTYC8BUjPsyU1jOlKtwDojkXj4ks2j%2FtL66D56UibBUZ7biExE4bg3Mh4pXwc%2F0z2dGiDlrHwd1%2FwhrxlQVjHDysTsxNecm1DO36M258Lt8vcnhu7oDNxSQ0ac9ljVcaZVhAZT4yZbyHV9JjT4J4nGf2gGfOpCYj3SKJt3LpsjnBXP67MVBzc5rC8NanV89F%2BABZWqS0c7c8D%2FC0n1FXHtKBJlAHAW4Ui8znBEWtyfgo5Oprhg9Y8CjZYzoDhFZwQEVAJkguH0Wt05ofCaJzF0HdG4Rcv8W2jkGd4%2Fq3v4gKrkiIZj7HGXiI7g2F%2Byj8WjWZvuQ8uiwTRkNk2XXD6pKL4bLAnOnIICdF0znums6sgg0%2FRKWv9IRCwiDOitmSgChXGFdNk2E49Or6B0N8UR%2F4v3V%2BT%2BkxeLAto9BR4xXcAVlRz0syY6rUWaZ9WHsAZU%2Bg6tCDJjNJGA3gMQ9KxZWmc%2FnOZgcfCG8NTP49W0NXj4ElhPb%2Fq05rV0tlN212tdopoRr0zDWAgxKWj4AUi72C7WXeL%2FzFaox%2BElEJCLTQp5Cvy3KlRn4%2BY2oYLYHCjJMWUeZQZ60uhP%2BtIW%2FxbYdxGBk%2FgA0h45URLUxQjEMR1cXJaBG3d%2BHgDQWOAqD4q%2BNLsyNwQ1Q%2FXBAw55eMvwY6pgF%2FH2UvWA4Sd5kxCvsSAUHoWn74aYrKDBBbSrzM3hceDgLb9ceEv8LbbZP1fwwjPjN9bIJQIVV3N45DhEA1J2AtWjBW7JuDW4Yg8wyUAyqQiZdCT8WGsD341Zp%2FiX5BlvBe6DaHT7PWrAFvRFo9V1CmJp%2FCGe02XHQJKLrNb8trDNChjKp0pgcUAD0F9AH1iks%2Fb18QbPCIuy6Ztr9t7o0No%2B6yOu2Z&X-Amz-Signature=9ff04feae907386a71b2ec351c22e5f84c8b776fa56e154d3aa33e52f78543f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKFDPAG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR5v32BmvBjswlzv44tumkEnZBX1o0c%2BJzpoNtwfr4CAiAMsjgbrebRkuvh%2BzQEuNauW6WYlBQMNlnhzmAsxa%2FmySr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMaTYC8BUjPsyU1jOlKtwDojkXj4ks2j%2FtL66D56UibBUZ7biExE4bg3Mh4pXwc%2F0z2dGiDlrHwd1%2FwhrxlQVjHDysTsxNecm1DO36M258Lt8vcnhu7oDNxSQ0ac9ljVcaZVhAZT4yZbyHV9JjT4J4nGf2gGfOpCYj3SKJt3LpsjnBXP67MVBzc5rC8NanV89F%2BABZWqS0c7c8D%2FC0n1FXHtKBJlAHAW4Ui8znBEWtyfgo5Oprhg9Y8CjZYzoDhFZwQEVAJkguH0Wt05ofCaJzF0HdG4Rcv8W2jkGd4%2Fq3v4gKrkiIZj7HGXiI7g2F%2Byj8WjWZvuQ8uiwTRkNk2XXD6pKL4bLAnOnIICdF0znums6sgg0%2FRKWv9IRCwiDOitmSgChXGFdNk2E49Or6B0N8UR%2F4v3V%2BT%2BkxeLAto9BR4xXcAVlRz0syY6rUWaZ9WHsAZU%2Bg6tCDJjNJGA3gMQ9KxZWmc%2FnOZgcfCG8NTP49W0NXj4ElhPb%2Fq05rV0tlN212tdopoRr0zDWAgxKWj4AUi72C7WXeL%2FzFaox%2BElEJCLTQp5Cvy3KlRn4%2BY2oYLYHCjJMWUeZQZ60uhP%2BtIW%2FxbYdxGBk%2FgA0h45URLUxQjEMR1cXJaBG3d%2BHgDQWOAqD4q%2BNLsyNwQ1Q%2FXBAw55eMvwY6pgF%2FH2UvWA4Sd5kxCvsSAUHoWn74aYrKDBBbSrzM3hceDgLb9ceEv8LbbZP1fwwjPjN9bIJQIVV3N45DhEA1J2AtWjBW7JuDW4Yg8wyUAyqQiZdCT8WGsD341Zp%2FiX5BlvBe6DaHT7PWrAFvRFo9V1CmJp%2FCGe02XHQJKLrNb8trDNChjKp0pgcUAD0F9AH1iks%2Fb18QbPCIuy6Ztr9t7o0No%2B6yOu2Z&X-Amz-Signature=5f9e945fe706d5132c6aba9e036faba77ae7526902122e3783fcd7a529588174&X-Amz-SignedHeaders=host&x-id=GetObject)

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
