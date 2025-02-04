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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72KU4C7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEAE1tcc3fdu0ZG14EQNxNil6fT9aDxDys3xN183hfbGAiEA5fmqpcd7wM%2BdVnxpiaHJx2GrPyK5kjbCk83yx84AbEQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAt%2Fh7CIOeZIOOFwdircA6LDQdu23kLQlk%2FsoyOmNU4RU%2BAjq9PiO9NQ1ihQETYmCF0VZSEAfiFMOBzUwLMCKeFEdDvEJIomlJ5ABae5Dw2B425j9mh9atXCJlLvSTHcEpUpPXt9HQ54l3v1nNsKH7ZxeOXrknjUT5Y5%2FoWwIUejjF4vPTRHiwoN%2B6KMvGVoywH%2Fip3M%2Fv6fWPi1ASGs%2FIw4MGOOqcFbtrBahWyoWO3zjvEmrTxxghwu4Oxh2%2B8I1%2Ftbb6%2FA0czQFN%2BC2rdJmVM0Q3TR2PwMkH7sZjIeyY6eOscIyd3C2zHJqOioHAehicxDRivfL6iUnYPu5Syq2buXx8E%2B9CKdnIy4x3%2FdMw%2BWtQbwa7%2BD8s0NGohfC6QO%2BFdh5FuzNnmt64NBhQpHU0MSr62Dmg4wza8CNjl8qAbLmB5WD4O3BjPCexlfsnCHxou7M6cvBwsLL1DXDJe%2Fpj3NhYZktV8ZUZQGtnjVydQEGOhXCj42Sl7pv83TmO017GfvxA%2BkfkCOXaR%2Be%2F%2FaiWQ6tHK%2FDT84w4KFdzOpiLFKjkgJmz8%2Fwam1SevfcpncuKcW9TLZcX4HpnRTlfrTLEPMdyycSp4algwXKtjc9Jw52adZC3kYFNX4JC2GXG2WFS%2BEbwb%2B%2F1qm1c%2FuMP6ihr0GOqUBCAN9cNK%2FlWZSKs%2F2Fxj2mNM4KKBLTJSkLeqos8RICM9Qr0cOn3ov9xpEUezJTMdszydreSCauSU6B4gqOZAjPeA8Gs2gaVZzFzhwNqiYhI92u7o7D2hEuKvP4hDcP3G602ZMIEF1mx2bWlPpWNkW6Ja9vNsJqa4XjkByATqLP3V%2B%2BORju7DOmt4LXbVXaBsaXTT9C%2BNkHzv2zmZltkg%2BFfIoDqKe&X-Amz-Signature=d78ac08739f57169860f88d4551be906398b00889a0f7ab8b14aa65a4780ffc8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72KU4C7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEAE1tcc3fdu0ZG14EQNxNil6fT9aDxDys3xN183hfbGAiEA5fmqpcd7wM%2BdVnxpiaHJx2GrPyK5kjbCk83yx84AbEQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAt%2Fh7CIOeZIOOFwdircA6LDQdu23kLQlk%2FsoyOmNU4RU%2BAjq9PiO9NQ1ihQETYmCF0VZSEAfiFMOBzUwLMCKeFEdDvEJIomlJ5ABae5Dw2B425j9mh9atXCJlLvSTHcEpUpPXt9HQ54l3v1nNsKH7ZxeOXrknjUT5Y5%2FoWwIUejjF4vPTRHiwoN%2B6KMvGVoywH%2Fip3M%2Fv6fWPi1ASGs%2FIw4MGOOqcFbtrBahWyoWO3zjvEmrTxxghwu4Oxh2%2B8I1%2Ftbb6%2FA0czQFN%2BC2rdJmVM0Q3TR2PwMkH7sZjIeyY6eOscIyd3C2zHJqOioHAehicxDRivfL6iUnYPu5Syq2buXx8E%2B9CKdnIy4x3%2FdMw%2BWtQbwa7%2BD8s0NGohfC6QO%2BFdh5FuzNnmt64NBhQpHU0MSr62Dmg4wza8CNjl8qAbLmB5WD4O3BjPCexlfsnCHxou7M6cvBwsLL1DXDJe%2Fpj3NhYZktV8ZUZQGtnjVydQEGOhXCj42Sl7pv83TmO017GfvxA%2BkfkCOXaR%2Be%2F%2FaiWQ6tHK%2FDT84w4KFdzOpiLFKjkgJmz8%2Fwam1SevfcpncuKcW9TLZcX4HpnRTlfrTLEPMdyycSp4algwXKtjc9Jw52adZC3kYFNX4JC2GXG2WFS%2BEbwb%2B%2F1qm1c%2FuMP6ihr0GOqUBCAN9cNK%2FlWZSKs%2F2Fxj2mNM4KKBLTJSkLeqos8RICM9Qr0cOn3ov9xpEUezJTMdszydreSCauSU6B4gqOZAjPeA8Gs2gaVZzFzhwNqiYhI92u7o7D2hEuKvP4hDcP3G602ZMIEF1mx2bWlPpWNkW6Ja9vNsJqa4XjkByATqLP3V%2B%2BORju7DOmt4LXbVXaBsaXTT9C%2BNkHzv2zmZltkg%2BFfIoDqKe&X-Amz-Signature=dbf0370cbb00ed3a130c8f11ed6484bc1f5dea62bffcffca265e5a16e6e9d1f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
