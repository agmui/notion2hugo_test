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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQLFGQR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGiMMMP8VN6SD28epZu%2F6o6KxSQzTRMRGV1q4Kf1HAFHAiEAwnq95ls8NvusTKdwcFtvOiBwA4h3Q0l7KI1di6mzqR8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHvjkfMH6xQq3VNbaCrcA1AgrARANo%2BR4wHA5qdZIncQhPQYMrFSKJO1e%2BGQE18eBS%2FCsTxpAScdJ9%2Bzptew8H12SlcNxejixss55GFhAgojRdGXcucyz1myqzLx5rpanXAExO90VMSrnrDkGDR87p%2B5jHWfp92B3B8pk7ZZZgy0U38we9emOd5ph3ezlmmFIFcpJSpltUb7c8QivQ13eGoiUNnFm2eFoCFDLZSY647jDH8mLS0l09YCdeHtu%2BkSmULR%2FKNWMcrZBPzg7%2FKNzT34cSfc556lnHc1WCVy%2FGLirRvL63sL0tYkDaIq7bQdGL9085mawUMVL3JHllr1wtkm2ORVuTw0gjhmvj4Xw1iKjj7Jc70e6SGXjuJVkrLm7r669Y8EaO5%2FMQgzvWhU3X4aprb5%2B1daG9EE2sMelQj328H1owQnGGqO7TxFaoiYNEJRz2EVEhE7XVAPl%2FdDpm7VPNjdHvwpotrnrjRkOAK0de3f3FgsXWsg8NmU9KABHKk9okLEOG8kRDJ35HVSWPeXGV5eQOUQnUc2m4bKkDGHY0bGLH54auXdr2fdQGkBUdE69eGhwNROXbZRXDf6deCV0DS2w8bHWb7m7ojES%2FDToW6MXwabzva4v7TNXBjPG4kN%2B0YgFtwJOjTHMN28%2Bb0GOqUB12XYnurDFZtnsdn%2BwEI0efzNWi%2FvqfeUh9TZS1MOFAlupkQGUiWEDRIOFKwIApY1RQmmpUBfre%2FpJWv8Bp%2FDaZWOA4ihJ8F%2BPKoy%2FFC43rLEgQViPxct%2FFMXkPA1vFu6690aCnY4bn2Vx9ZuphSyw8IoG7KRGhnw1BrsS7zX1wmvtv1OR%2F7%2FqqVfNyvSlBDmrnJOwN2ZEr1ZXxoKjJ98WNLnZ5Cc&X-Amz-Signature=732a48d64edcf34586c5d4c4cab4482768c697a73349c778f23e1f60f87223fc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQLFGQR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGiMMMP8VN6SD28epZu%2F6o6KxSQzTRMRGV1q4Kf1HAFHAiEAwnq95ls8NvusTKdwcFtvOiBwA4h3Q0l7KI1di6mzqR8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHvjkfMH6xQq3VNbaCrcA1AgrARANo%2BR4wHA5qdZIncQhPQYMrFSKJO1e%2BGQE18eBS%2FCsTxpAScdJ9%2Bzptew8H12SlcNxejixss55GFhAgojRdGXcucyz1myqzLx5rpanXAExO90VMSrnrDkGDR87p%2B5jHWfp92B3B8pk7ZZZgy0U38we9emOd5ph3ezlmmFIFcpJSpltUb7c8QivQ13eGoiUNnFm2eFoCFDLZSY647jDH8mLS0l09YCdeHtu%2BkSmULR%2FKNWMcrZBPzg7%2FKNzT34cSfc556lnHc1WCVy%2FGLirRvL63sL0tYkDaIq7bQdGL9085mawUMVL3JHllr1wtkm2ORVuTw0gjhmvj4Xw1iKjj7Jc70e6SGXjuJVkrLm7r669Y8EaO5%2FMQgzvWhU3X4aprb5%2B1daG9EE2sMelQj328H1owQnGGqO7TxFaoiYNEJRz2EVEhE7XVAPl%2FdDpm7VPNjdHvwpotrnrjRkOAK0de3f3FgsXWsg8NmU9KABHKk9okLEOG8kRDJ35HVSWPeXGV5eQOUQnUc2m4bKkDGHY0bGLH54auXdr2fdQGkBUdE69eGhwNROXbZRXDf6deCV0DS2w8bHWb7m7ojES%2FDToW6MXwabzva4v7TNXBjPG4kN%2B0YgFtwJOjTHMN28%2Bb0GOqUB12XYnurDFZtnsdn%2BwEI0efzNWi%2FvqfeUh9TZS1MOFAlupkQGUiWEDRIOFKwIApY1RQmmpUBfre%2FpJWv8Bp%2FDaZWOA4ihJ8F%2BPKoy%2FFC43rLEgQViPxct%2FFMXkPA1vFu6690aCnY4bn2Vx9ZuphSyw8IoG7KRGhnw1BrsS7zX1wmvtv1OR%2F7%2FqqVfNyvSlBDmrnJOwN2ZEr1ZXxoKjJ98WNLnZ5Cc&X-Amz-Signature=4349552c0feba635b261ecb71b4cdc95bf884bb6acbaaeecf1fa93a3f277a3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
