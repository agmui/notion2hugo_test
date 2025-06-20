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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5OIEG7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzLBbgnuroyXWKsL5PX6AnUQ5vO85v6ZE8uZxTzYgLMAiEAzNyle79bS4R3HSnkvVgrvRsBnOz70pHtpBXUmiptECYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIatpD7CA2dyGg3CRCrcAwbkRqnxR2fK%2FXNA7Vta4ITrjOQxN%2BBOF4GfinivAv86%2FNyUs%2FuU5RVf%2BeRiPKt2KPsbGrktMp1yHasesrWWPHhZTWVQf4y6stZOVo53WPpslsT6AILlP7d4RsPdZ6Mnrlc604lsDE5NSsZG7FZEMyNVsUgNOWc5qQxxbKYDNF%2FA9Y6r9pDhMAEqeKsTqN7xHLYAitCdT0LwEMXzi5Uq1U33bN1yiTj7vHpXd4wsElBHqubrVlfNSwC%2BNMCGpDnMApX6c2EPoFnKw8h%2BK%2FSOHyPVf6UtHCpGZCnX8fmSOS8sBEFQ5U5d3zYfX57kVCXacYbjN4HnZsr3zONvCTqBbvCHzU8mCFU9BKOuPa5SOdjJ9MfG%2B9AZw715u8m8zIbHLZO0mZn9LpwxTLcdyP3e6f90RbTqhbWNFCgpep1ouyWmzfD056v1HsQJrTllJuWjPAp0lMV729HXRT8XhFbSl2tBL4UURq0dpYj1vbyV2xzodyY4k5sWtrKr%2BTIYAddQNJK5CpfSwwk5RpM4p6oZ7qpI4lx8r%2BtvKc6jt1%2FePPFi6KzjxMK17%2BelwqpRakB229uhc9ppbS%2F0QlUXqygoWWkRObPPjJUdinpUUngbP6l36oq5wk9Ob9UoTpW0MOmj1cIGOqUBAwwJ2QPB0Ok5%2FBNennITzuV%2FeM2shZ0WU%2F65DDDIkmB%2FCOpssUGQmMToaV9ZluGkeXuE8%2FiYDk2qIDGySfu9vftp9U7hvAXx76cXgsWqercPPJWWuSBiYt7zV88FakxdEoZrA%2Ftq8rOXXTBbcVimxS7lmi1BNzbQweEAfxfcfpY4GKn1EILb9wRBCbqPLD6Pig%2BxqIsLpBmAYA6GvnQ4ZjXV6Sbt&X-Amz-Signature=d7e69c357543231a1bcc16c334e9d2f5286d6d63a27d03625c44310add40ff78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5OIEG7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzLBbgnuroyXWKsL5PX6AnUQ5vO85v6ZE8uZxTzYgLMAiEAzNyle79bS4R3HSnkvVgrvRsBnOz70pHtpBXUmiptECYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIatpD7CA2dyGg3CRCrcAwbkRqnxR2fK%2FXNA7Vta4ITrjOQxN%2BBOF4GfinivAv86%2FNyUs%2FuU5RVf%2BeRiPKt2KPsbGrktMp1yHasesrWWPHhZTWVQf4y6stZOVo53WPpslsT6AILlP7d4RsPdZ6Mnrlc604lsDE5NSsZG7FZEMyNVsUgNOWc5qQxxbKYDNF%2FA9Y6r9pDhMAEqeKsTqN7xHLYAitCdT0LwEMXzi5Uq1U33bN1yiTj7vHpXd4wsElBHqubrVlfNSwC%2BNMCGpDnMApX6c2EPoFnKw8h%2BK%2FSOHyPVf6UtHCpGZCnX8fmSOS8sBEFQ5U5d3zYfX57kVCXacYbjN4HnZsr3zONvCTqBbvCHzU8mCFU9BKOuPa5SOdjJ9MfG%2B9AZw715u8m8zIbHLZO0mZn9LpwxTLcdyP3e6f90RbTqhbWNFCgpep1ouyWmzfD056v1HsQJrTllJuWjPAp0lMV729HXRT8XhFbSl2tBL4UURq0dpYj1vbyV2xzodyY4k5sWtrKr%2BTIYAddQNJK5CpfSwwk5RpM4p6oZ7qpI4lx8r%2BtvKc6jt1%2FePPFi6KzjxMK17%2BelwqpRakB229uhc9ppbS%2F0QlUXqygoWWkRObPPjJUdinpUUngbP6l36oq5wk9Ob9UoTpW0MOmj1cIGOqUBAwwJ2QPB0Ok5%2FBNennITzuV%2FeM2shZ0WU%2F65DDDIkmB%2FCOpssUGQmMToaV9ZluGkeXuE8%2FiYDk2qIDGySfu9vftp9U7hvAXx76cXgsWqercPPJWWuSBiYt7zV88FakxdEoZrA%2Ftq8rOXXTBbcVimxS7lmi1BNzbQweEAfxfcfpY4GKn1EILb9wRBCbqPLD6Pig%2BxqIsLpBmAYA6GvnQ4ZjXV6Sbt&X-Amz-Signature=2852d12c931cfa6676c6b9457d02e03defafd63fd5f51be41f0238c9164d9e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
