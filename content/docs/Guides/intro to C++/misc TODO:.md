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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BTJU7W7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUwEDbMoGPw%2BhaZOxOVh3BV6K6Dz0yRDkIdEVfWnbuxAiB3p45dp4IvoejQjswP4ttJ2ldCEqyPHEuXLf3TY0xzDiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvQfbgo7DJJOufkf8KtwDdR%2BKtke1OksJWIhN6e%2BRN233CjRrdfFSINfI9M0VesE4awYZdAeMmFjcxKonJ8Lm1VcPl14SwnbYRCk3%2Bso3OIaQRB6VBDCpkeO4kAZAMLJ9a1hdADke0Qtun91gH1xoO2DmWuXlgl7xhZICR4DWUYUNvT3vyCRtXHNCkqu67ZZHCPw%2FVuCuUHxZUuwKbQxuEjrreHB%2B1vZ7HqxIfCjEBWZtOiNP3lCMJRVppIztyt25yyszKyZLcUhz9uPXxshl9q%2FmAFGkqgLT5LTHnDQj0fDewIzP2C5dxgzRrquPUOS7BXUWPDtgmc9jU%2FythsqIpImAZ4T6yWphgCFr0DjoVOKxWVn%2FIpF3bR4qaE8S%2BcDF%2BCfzVLB5PNDshQWe%2B1V1y2mRAudA3ejLfjLN1yX0jvdq7cZALZvQhGqbfbTmjrntlrcQ4MPBWvp%2Fq2vv2wPsrN2anh%2FQcxyJZQgnnQBzhhxQhkaLMOE3roBTMsJiC7VkkbZsjJokMgE4aJtwt355x%2BQrhx1AX4f4bwPxMQBYAKDbd%2Be9uYMYHW6tTI1dEn1%2Borby2T1ynK4yFlz1DpchBWInEAAK8apJku2GKsd%2BqzWyVy6dhJRTN72uXL6c7DqpFNi%2F5m0zohq9VG4wsbrnwQY6pgHimUhMtfssNveVHprv773OlFf06m3f7yfIP3QIVa4kmYOp%2Fj%2B4Itzbg52NCdaH8SCwOQorrfjmzKWe8xUwzjCa2N6m3lA3qckek3gTexM4NqCCXMHN8z2%2BeIhcRaoTAEPFfwCZRdgv237KFidml%2FTJnhnAWNF1LbM1NX1Gkohc4mFZJrArJP8SXgmFR7fQTfiARilGxzHTEMMnhz2zCmEA24hs8lfj&X-Amz-Signature=96565e495a7531cc70ab8168d40cbc953f64986c5ae2357db24f8e7aced8c26c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BTJU7W7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUwEDbMoGPw%2BhaZOxOVh3BV6K6Dz0yRDkIdEVfWnbuxAiB3p45dp4IvoejQjswP4ttJ2ldCEqyPHEuXLf3TY0xzDiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvQfbgo7DJJOufkf8KtwDdR%2BKtke1OksJWIhN6e%2BRN233CjRrdfFSINfI9M0VesE4awYZdAeMmFjcxKonJ8Lm1VcPl14SwnbYRCk3%2Bso3OIaQRB6VBDCpkeO4kAZAMLJ9a1hdADke0Qtun91gH1xoO2DmWuXlgl7xhZICR4DWUYUNvT3vyCRtXHNCkqu67ZZHCPw%2FVuCuUHxZUuwKbQxuEjrreHB%2B1vZ7HqxIfCjEBWZtOiNP3lCMJRVppIztyt25yyszKyZLcUhz9uPXxshl9q%2FmAFGkqgLT5LTHnDQj0fDewIzP2C5dxgzRrquPUOS7BXUWPDtgmc9jU%2FythsqIpImAZ4T6yWphgCFr0DjoVOKxWVn%2FIpF3bR4qaE8S%2BcDF%2BCfzVLB5PNDshQWe%2B1V1y2mRAudA3ejLfjLN1yX0jvdq7cZALZvQhGqbfbTmjrntlrcQ4MPBWvp%2Fq2vv2wPsrN2anh%2FQcxyJZQgnnQBzhhxQhkaLMOE3roBTMsJiC7VkkbZsjJokMgE4aJtwt355x%2BQrhx1AX4f4bwPxMQBYAKDbd%2Be9uYMYHW6tTI1dEn1%2Borby2T1ynK4yFlz1DpchBWInEAAK8apJku2GKsd%2BqzWyVy6dhJRTN72uXL6c7DqpFNi%2F5m0zohq9VG4wsbrnwQY6pgHimUhMtfssNveVHprv773OlFf06m3f7yfIP3QIVa4kmYOp%2Fj%2B4Itzbg52NCdaH8SCwOQorrfjmzKWe8xUwzjCa2N6m3lA3qckek3gTexM4NqCCXMHN8z2%2BeIhcRaoTAEPFfwCZRdgv237KFidml%2FTJnhnAWNF1LbM1NX1Gkohc4mFZJrArJP8SXgmFR7fQTfiARilGxzHTEMMnhz2zCmEA24hs8lfj&X-Amz-Signature=a94b88109f02f6bdc717d76ceba9933ac589b6a653de9a0ee550e842e636577b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
