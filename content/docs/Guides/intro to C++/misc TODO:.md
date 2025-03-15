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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MBWU4F4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnkA6T79hrQKzz8QxdSY828HK0x0pqSoz67qCcB2lJNAiBkMtEhMT7t3LNxFQ%2F29siobf%2BKrf0dk9gp8cWb%2BFZqByqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEySSURnQsJRZOuR0KtwDChHvjnPFHexBCn1FxZ6Gk75DOUwfFgrdUflyrexeW9%2BzCzahe%2Faf4rmRUNPIqsPIps4Iiosxbo9SO3fNWt%2BarSFPplBIjoHJXqbUBIo8SglXVPoUI3HNoq2Wr3VWURld83k%2BwwHUIzmO6fLe%2BnHXaj78b65R4fmUECsB29cOaiXgkNlZUYMLKIoeNwK6wpO6OMbFu2HFwC%2FPqQQDxdgLWvbiT3jC9sJeDaT92NgHlNGiEYCVi6fD8dvxIR4jsmq%2BgsNu4qCLgqwQkW4QgKXM%2FSZk4Z4SxCsog2JOgcJepQSPJAPWT0J%2Bl1YwKjhjem%2FhA1cwSOyA4ZHtTOUQWibvtFhh2tjkRTj%2Bt%2BCK%2FvzrDpMaJw6nmniMc3JJnwncuR9ABt1OGE8G51%2Brl3DTXBMb2sr%2FO21LEXEmMmauOcDsRlbgdfn%2FuDCt2k%2F9034brKidam9LcwhgYSx99JotMGsUYTj5KyNvV6Uj5lZzEdN%2BvDvtpPfMBR8RLuE2leV5brKPBGWwqEOHCtc3sRWs1S1hPRwznkgFlJCGsRMeekaffJDqpokc5Ysv2uGJe9PKIYr5Ea9iuhtLdvlEqHLq%2BwAMhqimamT6faklIvf63HHaqHNBL5Vi3deMUjg7EwUw2KXUvgY6pgHHSit0vIHIMVQj%2B2xofR6Nu%2BE32kTapmrqx2tYzNdPmZ0MXWKgd%2FfkFcJe7C9%2Bycrx7%2BXpH7VgI0XoLKwcCdWIw%2BE%2FY0ZqTQ02LAqQco46HsFOA4mrdnb6HBKhUi7uTQi952trSE3Rvc2P31TYmVE7LPDrXqjbGVN8oKS9Bq2SkgLlMdDUJYEUXZX6%2FDvnLbdpROGU9XK3K1eY9MCMIIYBTZUgsyTh&X-Amz-Signature=ccec4675abe565d025b728b5ab3c127121d1c667f3bef931186037eac6bea2e2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MBWU4F4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnkA6T79hrQKzz8QxdSY828HK0x0pqSoz67qCcB2lJNAiBkMtEhMT7t3LNxFQ%2F29siobf%2BKrf0dk9gp8cWb%2BFZqByqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEySSURnQsJRZOuR0KtwDChHvjnPFHexBCn1FxZ6Gk75DOUwfFgrdUflyrexeW9%2BzCzahe%2Faf4rmRUNPIqsPIps4Iiosxbo9SO3fNWt%2BarSFPplBIjoHJXqbUBIo8SglXVPoUI3HNoq2Wr3VWURld83k%2BwwHUIzmO6fLe%2BnHXaj78b65R4fmUECsB29cOaiXgkNlZUYMLKIoeNwK6wpO6OMbFu2HFwC%2FPqQQDxdgLWvbiT3jC9sJeDaT92NgHlNGiEYCVi6fD8dvxIR4jsmq%2BgsNu4qCLgqwQkW4QgKXM%2FSZk4Z4SxCsog2JOgcJepQSPJAPWT0J%2Bl1YwKjhjem%2FhA1cwSOyA4ZHtTOUQWibvtFhh2tjkRTj%2Bt%2BCK%2FvzrDpMaJw6nmniMc3JJnwncuR9ABt1OGE8G51%2Brl3DTXBMb2sr%2FO21LEXEmMmauOcDsRlbgdfn%2FuDCt2k%2F9034brKidam9LcwhgYSx99JotMGsUYTj5KyNvV6Uj5lZzEdN%2BvDvtpPfMBR8RLuE2leV5brKPBGWwqEOHCtc3sRWs1S1hPRwznkgFlJCGsRMeekaffJDqpokc5Ysv2uGJe9PKIYr5Ea9iuhtLdvlEqHLq%2BwAMhqimamT6faklIvf63HHaqHNBL5Vi3deMUjg7EwUw2KXUvgY6pgHHSit0vIHIMVQj%2B2xofR6Nu%2BE32kTapmrqx2tYzNdPmZ0MXWKgd%2FfkFcJe7C9%2Bycrx7%2BXpH7VgI0XoLKwcCdWIw%2BE%2FY0ZqTQ02LAqQco46HsFOA4mrdnb6HBKhUi7uTQi952trSE3Rvc2P31TYmVE7LPDrXqjbGVN8oKS9Bq2SkgLlMdDUJYEUXZX6%2FDvnLbdpROGU9XK3K1eY9MCMIIYBTZUgsyTh&X-Amz-Signature=8800fe5e8e35cf0e5fedbab98388a584a19c3947224ced36c52e6f3e97e99bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
