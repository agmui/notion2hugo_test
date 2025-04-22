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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567MP6MJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHaedWOL9t3KdKg94S%2BSLVzD3UahFg3nspQnBWWM85lOAiAF0x8zq6G1Q1KtHoIcmrZCU%2BqP4ncVYouNsWZBrzyg6CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcrsaq%2F2hWECDQPFWKtwDtESv6Gu4cbVb1imW%2FNMPYi8FeLAOQihozimqox7zjsQYcv52j%2BQR0OeX9q%2BSixlJGR9GDxrJmvjC%2BarvMD8ea%2FapnaXUhH3ZMofed2Ixr5oQ%2B1c%2F2Ef1SUebvkrw7F8RKPsh6CS0YVh2HOCWHCFZbaxlFOP3IN8Hw18aokV8078A4jWjHj2pLYjP4L%2FAhnbu3oGjWfhI5cPipMJzybZxqViKi9EL11cKbyMyAsFPHt5gZ8J2LNLYYD3Z%2B08pWLfWiRpAWutCv2w3jaqsU1VeYQv0SucwyO7odEdWH7ZXPycwrQIb8Qg6sHESeb49lDegoEq3ayKdKy674%2FZKO6dMMIyvFREaZwbVpPG%2FQTOGTUrYsVcQwMIDlw1JjBS4807BnrhhxN2raksNkq%2F6cycWMnas0obAGm5cFNYS%2ByaVrcuPSBnIQx%2F4HPHFlBF6PGqvxl1TxaWsJi5wRBBZ1Qg4ahuPXVN332AuRLAp6OE%2F46gA5OwENGXXQeNVJ%2BOIuUKEE2KNZp3lCZWxRQf%2FSCF%2Bf2Ci6xUw4E6B%2Ffq%2FYF1wUYrgSrV1yyKjP4AzgaRa06PHnV0tcpFjglkUnuBLtXw63DetIXOsNJCI01pX1IS1B6IncES8SdwuvNLkUlYw0vCcwAY6pgGcVEelH%2BGJMd%2BpSVOGdu5Nw6K%2FDccmMj%2F4GknaxpkkAMHYRygv3%2BoMok%2BtpygR9LsZfjzZoYwVB8qInRhGHNccmJ4fMlTjyjed4oCuNlOEuOySiCQWr1YMv7OLZMMgL0Pf3m%2B9mQviaDfMLcRcXktcJeL4bg16ZjgUp5h9y1gDDp38chYBTS8BIp8sDyxC9eALUWtptgZSJzPWi629t%2BWi0ILK7Ir2&X-Amz-Signature=7711574feef9bcf902d76b661c784767e7297b2f5b44eba64b57ec65fae708ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466567MP6MJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHaedWOL9t3KdKg94S%2BSLVzD3UahFg3nspQnBWWM85lOAiAF0x8zq6G1Q1KtHoIcmrZCU%2BqP4ncVYouNsWZBrzyg6CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcrsaq%2F2hWECDQPFWKtwDtESv6Gu4cbVb1imW%2FNMPYi8FeLAOQihozimqox7zjsQYcv52j%2BQR0OeX9q%2BSixlJGR9GDxrJmvjC%2BarvMD8ea%2FapnaXUhH3ZMofed2Ixr5oQ%2B1c%2F2Ef1SUebvkrw7F8RKPsh6CS0YVh2HOCWHCFZbaxlFOP3IN8Hw18aokV8078A4jWjHj2pLYjP4L%2FAhnbu3oGjWfhI5cPipMJzybZxqViKi9EL11cKbyMyAsFPHt5gZ8J2LNLYYD3Z%2B08pWLfWiRpAWutCv2w3jaqsU1VeYQv0SucwyO7odEdWH7ZXPycwrQIb8Qg6sHESeb49lDegoEq3ayKdKy674%2FZKO6dMMIyvFREaZwbVpPG%2FQTOGTUrYsVcQwMIDlw1JjBS4807BnrhhxN2raksNkq%2F6cycWMnas0obAGm5cFNYS%2ByaVrcuPSBnIQx%2F4HPHFlBF6PGqvxl1TxaWsJi5wRBBZ1Qg4ahuPXVN332AuRLAp6OE%2F46gA5OwENGXXQeNVJ%2BOIuUKEE2KNZp3lCZWxRQf%2FSCF%2Bf2Ci6xUw4E6B%2Ffq%2FYF1wUYrgSrV1yyKjP4AzgaRa06PHnV0tcpFjglkUnuBLtXw63DetIXOsNJCI01pX1IS1B6IncES8SdwuvNLkUlYw0vCcwAY6pgGcVEelH%2BGJMd%2BpSVOGdu5Nw6K%2FDccmMj%2F4GknaxpkkAMHYRygv3%2BoMok%2BtpygR9LsZfjzZoYwVB8qInRhGHNccmJ4fMlTjyjed4oCuNlOEuOySiCQWr1YMv7OLZMMgL0Pf3m%2B9mQviaDfMLcRcXktcJeL4bg16ZjgUp5h9y1gDDp38chYBTS8BIp8sDyxC9eALUWtptgZSJzPWi629t%2BWi0ILK7Ir2&X-Amz-Signature=e8a6c487bee250b5b6d7086d65d87a6dedfef8d5852273628f00c4912a129cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
