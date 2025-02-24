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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDGGKO3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFCcUseFS6Ym6hSaUJeLVHu9%2FjO7m3WdFRBrJEq173awIgCafMQmfrAVbeCZB79mXuxz56jHH5mck7OTK%2Bu4lAtQgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFg9NyaxMKbQ%2BciYdyrcA4aggYU7DUVJ2sQSCtLb5ApbYlzeAOXEyhIEjLuBUPhfieNLNd07q5LRpXKh6TbXxNybRlNBbLNYmiX3F433Fm4MhrTHsCtgYfp6%2F%2Bx07k3UwfVVy86SqzBIwLGMyhC6FtKYCnlqAZkwIV9DwHGHRvlqq9Ufel6ZWBnJk%2F0IFD%2FtbKBNP14g04j5%2FeD5TGetI7POMAQ5dnX6Q5MMSbwSzo4IpCSyoeZ9k6Ra6kGPr4hSYcc1cSWiDZADHHvkBtWAWdkVAM0XaCCw41x7nJMDreVKt50E3ZLNf7WSKrEpcgNCihu%2Ft2qRFt3j7fbFrWecpV7N60w8cyCNzEFHEs%2B8mUBsiYm9QgtEByWDi5pEruz2Cksx6x4QTcQPf%2FcAyZDk3kICIfET2DJzOj6%2B654YPwvYo4%2Bcuxv6qeHrWw7Kflpx8Amt8ZC7zsfroFYgWeo6lrk2ENlvLUhnQBD%2Bldz3rl4znvTBrJMOZhQhTTtFZiziERRlUF688IxLq29N8z0OkgX6T6IGGlBHMFgwHEWiDckoXTCalR5Z71k75ppogoQsK2UHq8%2F806kOleov50yGAKCZyZ6j2RZZcbFWFBn3WTlI9JttMy0UkFtfj67X628a7I5SwF2ohQkdaiFFMPLh770GOqUBk%2FzrFEq0Kyass7pS5v36W6BtpV%2BU0%2B9U5lo744tmcNZOeyX%2FcbeWZKNj1mmoDygYRkKotB%2BScyFFNwYjNR2JMx3HnV5sw7rt5kIJTx0m0F3MiicFPhPVELeqZ4HL3drbSxtLH6otdFAvnkHiqO2iPlnxI%2BtU82D991OUIstTXHYvfjDqIPs%2F7nlVpF0tfdqGDevwRtFl3IMuR9b7DkED8vwx7SgE&X-Amz-Signature=a2be0e268a3f22cf51743753e06b5e51f170f04f020aa454fa8b84cae7ed6984&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDGGKO3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFCcUseFS6Ym6hSaUJeLVHu9%2FjO7m3WdFRBrJEq173awIgCafMQmfrAVbeCZB79mXuxz56jHH5mck7OTK%2Bu4lAtQgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFg9NyaxMKbQ%2BciYdyrcA4aggYU7DUVJ2sQSCtLb5ApbYlzeAOXEyhIEjLuBUPhfieNLNd07q5LRpXKh6TbXxNybRlNBbLNYmiX3F433Fm4MhrTHsCtgYfp6%2F%2Bx07k3UwfVVy86SqzBIwLGMyhC6FtKYCnlqAZkwIV9DwHGHRvlqq9Ufel6ZWBnJk%2F0IFD%2FtbKBNP14g04j5%2FeD5TGetI7POMAQ5dnX6Q5MMSbwSzo4IpCSyoeZ9k6Ra6kGPr4hSYcc1cSWiDZADHHvkBtWAWdkVAM0XaCCw41x7nJMDreVKt50E3ZLNf7WSKrEpcgNCihu%2Ft2qRFt3j7fbFrWecpV7N60w8cyCNzEFHEs%2B8mUBsiYm9QgtEByWDi5pEruz2Cksx6x4QTcQPf%2FcAyZDk3kICIfET2DJzOj6%2B654YPwvYo4%2Bcuxv6qeHrWw7Kflpx8Amt8ZC7zsfroFYgWeo6lrk2ENlvLUhnQBD%2Bldz3rl4znvTBrJMOZhQhTTtFZiziERRlUF688IxLq29N8z0OkgX6T6IGGlBHMFgwHEWiDckoXTCalR5Z71k75ppogoQsK2UHq8%2F806kOleov50yGAKCZyZ6j2RZZcbFWFBn3WTlI9JttMy0UkFtfj67X628a7I5SwF2ohQkdaiFFMPLh770GOqUBk%2FzrFEq0Kyass7pS5v36W6BtpV%2BU0%2B9U5lo744tmcNZOeyX%2FcbeWZKNj1mmoDygYRkKotB%2BScyFFNwYjNR2JMx3HnV5sw7rt5kIJTx0m0F3MiicFPhPVELeqZ4HL3drbSxtLH6otdFAvnkHiqO2iPlnxI%2BtU82D991OUIstTXHYvfjDqIPs%2F7nlVpF0tfdqGDevwRtFl3IMuR9b7DkED8vwx7SgE&X-Amz-Signature=d8fee93deb0051b5728430e4fe2575cde2c0cd8b184a8251c13c19b012f90945&X-Amz-SignedHeaders=host&x-id=GetObject)

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
