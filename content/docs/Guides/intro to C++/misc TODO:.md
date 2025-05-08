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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBF3T7J%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnOmIeiK81IcyxLpsOsdUa%2FtF7v0aEfkSamQ8FUCoRWQIgaXps%2Bet7HJmJ%2BoC857xWONPJa9wNhBNwJ8TSwkP2Vx8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMC69ndM7yfHU1la1SrcAx%2FNFDJkYBouKI7YMl9tCK3bwERrrKEUAUd5%2F7LTgELL2002o%2BxHYKqpsQRCF3FkkGF4YYjGnqJH8MqC5oqeiPYXrzC9yfYx06VN%2B2nZvmFvRYD9llohpz5QrYmftxB9BpDE0OZp2iDnPcGJwlUSoMjv0YN8t1AkDeV3jU6cZeI6VzujxU55nJyk%2B2wA3Sc6QQ6AXnPAdXjc9eU5N%2BSqCx40W%2BY5n%2BEw1A9cb%2BUJyAHQl3dTHRGdCXpjbgnAb15S0ud9jBrhLe%2FpeNUSGwqM3jNoMXl%2BZhna7O3iqYaVptVT3zvw8ONm55N%2BKGLJp9I%2FcqWeeDLScDkbeuGXhfzM6mEyXXmFU7NrohqD5B8qM9pjOqLC7GWv4RaUPEPle9XHGXDxjFWqpVFLt%2BYdyYywyDm7oZPMeTfGklWxzLFtsnnjgSZZExxzQpURCHPU%2FdECESkL0YPjmpmPAvERPfiKwnb9KzOM5uEc2xHFR7J12iiosR3y1N5tG6KI%2FIqcWqWTacr0BVRDzipmT8SMa4vRVJnS2vsrQZsqRlSN0oKcC9MNiD%2BQ4QPkchRgio%2BI0R%2FNW5QZbessC0pDWGU9ShT8fp0RJ%2F%2FKHirWoXVEXaEEs6j7DTweZZxwweI4NtIJMPLE8cAGOqUBATmTkHCCIDbdlb09PQLHWAQAu9irM4Qi8BKR4B4TfJkChC1OQQOYNULOWDyT%2BGQX6PZ2C1ex7jpxPmvfoFNIspuOjW6bcbOEEHL8Z74rGS2oPloZSYPgDQGx67KjP9z7e7kDAr5P2qP3PhP%2FHiYBaCAzLaI9pFBhiqdyS%2Fts%2FUm29b1gr3G96QDISLDBRhOuVPLr%2BMPMAhOdafCPx14ZVyl6tdKg&X-Amz-Signature=e00484b8917cd1787da775d89b136e84387ef78d93db2b4e125fef8f35e8e045&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBF3T7J%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnOmIeiK81IcyxLpsOsdUa%2FtF7v0aEfkSamQ8FUCoRWQIgaXps%2Bet7HJmJ%2BoC857xWONPJa9wNhBNwJ8TSwkP2Vx8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMC69ndM7yfHU1la1SrcAx%2FNFDJkYBouKI7YMl9tCK3bwERrrKEUAUd5%2F7LTgELL2002o%2BxHYKqpsQRCF3FkkGF4YYjGnqJH8MqC5oqeiPYXrzC9yfYx06VN%2B2nZvmFvRYD9llohpz5QrYmftxB9BpDE0OZp2iDnPcGJwlUSoMjv0YN8t1AkDeV3jU6cZeI6VzujxU55nJyk%2B2wA3Sc6QQ6AXnPAdXjc9eU5N%2BSqCx40W%2BY5n%2BEw1A9cb%2BUJyAHQl3dTHRGdCXpjbgnAb15S0ud9jBrhLe%2FpeNUSGwqM3jNoMXl%2BZhna7O3iqYaVptVT3zvw8ONm55N%2BKGLJp9I%2FcqWeeDLScDkbeuGXhfzM6mEyXXmFU7NrohqD5B8qM9pjOqLC7GWv4RaUPEPle9XHGXDxjFWqpVFLt%2BYdyYywyDm7oZPMeTfGklWxzLFtsnnjgSZZExxzQpURCHPU%2FdECESkL0YPjmpmPAvERPfiKwnb9KzOM5uEc2xHFR7J12iiosR3y1N5tG6KI%2FIqcWqWTacr0BVRDzipmT8SMa4vRVJnS2vsrQZsqRlSN0oKcC9MNiD%2BQ4QPkchRgio%2BI0R%2FNW5QZbessC0pDWGU9ShT8fp0RJ%2F%2FKHirWoXVEXaEEs6j7DTweZZxwweI4NtIJMPLE8cAGOqUBATmTkHCCIDbdlb09PQLHWAQAu9irM4Qi8BKR4B4TfJkChC1OQQOYNULOWDyT%2BGQX6PZ2C1ex7jpxPmvfoFNIspuOjW6bcbOEEHL8Z74rGS2oPloZSYPgDQGx67KjP9z7e7kDAr5P2qP3PhP%2FHiYBaCAzLaI9pFBhiqdyS%2Fts%2FUm29b1gr3G96QDISLDBRhOuVPLr%2BMPMAhOdafCPx14ZVyl6tdKg&X-Amz-Signature=62a7ec712d7930cb28ebb4184af925bead0afa8f4b154b685662d1fe8389f231&X-Amz-SignedHeaders=host&x-id=GetObject)

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
