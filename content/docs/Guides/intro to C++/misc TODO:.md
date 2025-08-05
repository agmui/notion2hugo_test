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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2VIWBE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFSG7dy9UnjEGxZJp0%2Fzdk7aax2aI0HEuV%2FuWQHLRB9%2FAiEA4i3FgpXRYeIxrr%2Bwa1WTOGYUGM3v19kwxexUZHuTEawq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDG4SOL7CZmPVB%2BgH6CrcA72yKBHcdDnxT%2Fr%2Bd61T6caF0a1quFWSAoHQaGp139gz89IeoBcpiMmbR0zyzNtI3PCafkcikezMXlP4MZkzty4lwRHtfo7caMIE4QInecqOBWDR6rsBMRzGOiV0Gy6FZbQXjGq4X6yCHJM8vkrafRGwEd1AIrw4AZmdP7WGVSFzLft5zWSAGoEUkuhhLfrLVjwqTq3%2BVSPDBfj1XQveZzCQpzxVO4pkN%2F1meJaHhNjVaxJWY2nv7eBuhpwcpDPLHlC5VL0R7R5Gd7WWdVcWs%2FkvxkfjRvpPbBdd2cPnpSibm3qkzrcJj6lz%2F0IrBp5AhQ0pQNS2UfTAGcf%2BUh5igJa5khpwqjdfaSqknPBeAHukW16th%2BrbdC6x%2FAJSfFxLUlIHjJ7%2FiZA8qBtsz281mdAwq7k7Gll%2FRRSZGhvB%2BgT4MErFNcnBihhvbrl8%2BSdaRuXET6rG8TYOMb9F4irvEjYzQIJqKvAuq8jIICmJm9T6cg2cVKIlKNY2WXL%2BhcZX6t0frPj07ayTFh1kxta9bJXsKjRrQmxy%2B7z169ruNTSXHvGQQXzUz%2B79XHBAYjpQSHSsNRL7DPTjHxaEv%2BvX16nx%2F%2FfXHKLf%2FLvLJchspugGGYebiyp%2BEnu0X8QnMN6sx8QGOqUB3mIoyrGffoa3jRgBQBbdFePSx8Wgpe1DVo4OfQM6Lb85b6UlnnhmxQnrD%2FLw6Kz4K%2FjXf1hA9UNvN7lkoEzZJuVb23PS1EhBPY53kR37GXCCIa7rRVf7ciBfFYLvWhHs1nmDzBT7tl8i%2BJT9ogMoR3%2F2WQjXdP5352zxPOvCGdPINcSRFMeD8YTJV81flwBfapKi2VWhGSRMJH0zeZO1iGdEYsEx&X-Amz-Signature=4285f843878a4fc05c6a0a1f351364e5fa6111e146c2d988da56526dd35c10d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2VIWBE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFSG7dy9UnjEGxZJp0%2Fzdk7aax2aI0HEuV%2FuWQHLRB9%2FAiEA4i3FgpXRYeIxrr%2Bwa1WTOGYUGM3v19kwxexUZHuTEawq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDG4SOL7CZmPVB%2BgH6CrcA72yKBHcdDnxT%2Fr%2Bd61T6caF0a1quFWSAoHQaGp139gz89IeoBcpiMmbR0zyzNtI3PCafkcikezMXlP4MZkzty4lwRHtfo7caMIE4QInecqOBWDR6rsBMRzGOiV0Gy6FZbQXjGq4X6yCHJM8vkrafRGwEd1AIrw4AZmdP7WGVSFzLft5zWSAGoEUkuhhLfrLVjwqTq3%2BVSPDBfj1XQveZzCQpzxVO4pkN%2F1meJaHhNjVaxJWY2nv7eBuhpwcpDPLHlC5VL0R7R5Gd7WWdVcWs%2FkvxkfjRvpPbBdd2cPnpSibm3qkzrcJj6lz%2F0IrBp5AhQ0pQNS2UfTAGcf%2BUh5igJa5khpwqjdfaSqknPBeAHukW16th%2BrbdC6x%2FAJSfFxLUlIHjJ7%2FiZA8qBtsz281mdAwq7k7Gll%2FRRSZGhvB%2BgT4MErFNcnBihhvbrl8%2BSdaRuXET6rG8TYOMb9F4irvEjYzQIJqKvAuq8jIICmJm9T6cg2cVKIlKNY2WXL%2BhcZX6t0frPj07ayTFh1kxta9bJXsKjRrQmxy%2B7z169ruNTSXHvGQQXzUz%2B79XHBAYjpQSHSsNRL7DPTjHxaEv%2BvX16nx%2F%2FfXHKLf%2FLvLJchspugGGYebiyp%2BEnu0X8QnMN6sx8QGOqUB3mIoyrGffoa3jRgBQBbdFePSx8Wgpe1DVo4OfQM6Lb85b6UlnnhmxQnrD%2FLw6Kz4K%2FjXf1hA9UNvN7lkoEzZJuVb23PS1EhBPY53kR37GXCCIa7rRVf7ciBfFYLvWhHs1nmDzBT7tl8i%2BJT9ogMoR3%2F2WQjXdP5352zxPOvCGdPINcSRFMeD8YTJV81flwBfapKi2VWhGSRMJH0zeZO1iGdEYsEx&X-Amz-Signature=4f866adc71a63f4b652f47d2d32724ed9706e1d64bfee15bd67c86273f051fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
