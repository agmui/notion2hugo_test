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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IYCVI7T%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDl573QRV1J%2FuXyar%2B4hRGByDb2xi6gqhus%2FAi1RSf9vAIgSEUkE9lxShK3K0BP0gDMuJqWNxzY94jzZ4umDfpWgGcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKtb3ciQiTDcp4gxSSrcA1KR74Nge4kP%2F94r9lkEEMXKUTJ7umMkOMW6nXmnagqdNUUthwUEKJAytpMwhtS7Q0hyNLkD53aFmgJZS3u2SZcF6%2B%2BQ0x7dJzTcgCdLQ3F4C8YhFC2uK4Hi1gjSSPQQd8qSK%2BKAJxWFgO2vHbEdCBNU695wOHLbuQzr1abTurM4LkQ1XcfWUFnkpSZ4jbQrIk7XkKG6Puo23LjVTxGlSIQOJzwTOKeMeKCL4y2sBD0DmgJ3RGZmMjRgXM2HCPOPxc8SEqdIOGP3%2FHo1GOSmZdDNkk6D01aUjbFgZMIzS9yKsQ88D9%2FzG0G%2F9lumMs9%2FzI3SGqORy0toJZ0U1q4S3j67wSkvp%2B6ThVyO17FzD3zWZK%2F6GMPARwK4u38MEjA9f2FOjyDDjJbxsaEviiIJRXd1eGMOM9tiGUF1vlecUHUXQKe1V0D6G3sop1xv6%2FWPeNoPMl8GWYDIB3CBPE%2FG7lVmja4nyctzWXWsKw7M9xmXd7h1C4cTlux55qqlgykl7MqO%2FK1OWoQIi9xbh6uu%2BinQRZF4BC%2BT8R1eGbK16T6lA3ssVq8XBykrxWPdJJa9X7snJ%2BLnEtuYAGCLIyjuX7Cx3QHakpTlqytCpmH7Se7Dyf%2BQuuWyfDUB0uABMLvSscIGOqUBSPpA%2FCTCFZLgRsXkqYWI3wHJ%2F7jHvXSjTkjRFVM%2BrfN551l7aBP0qAn%2F8T7IEzNqWHs36xupIDYZ6X%2FLM6lpqOO%2BAA1GgYzBo%2FAyvhZhQAjD8mRVmv5oXt2oNHTRDUuMpEexIC51S0BG1u7PAcsr9qZYqMvgXgMp9oxyAZdg6Jylj9duA0kiJ1iByR32Uy45Rfxre4eshFIl3vUz4AT7QqKeXEgL&X-Amz-Signature=a8b0767a50da7e17943e205c87367b9a8ae8e0aae26809a536953fe748ca954e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IYCVI7T%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDl573QRV1J%2FuXyar%2B4hRGByDb2xi6gqhus%2FAi1RSf9vAIgSEUkE9lxShK3K0BP0gDMuJqWNxzY94jzZ4umDfpWgGcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKtb3ciQiTDcp4gxSSrcA1KR74Nge4kP%2F94r9lkEEMXKUTJ7umMkOMW6nXmnagqdNUUthwUEKJAytpMwhtS7Q0hyNLkD53aFmgJZS3u2SZcF6%2B%2BQ0x7dJzTcgCdLQ3F4C8YhFC2uK4Hi1gjSSPQQd8qSK%2BKAJxWFgO2vHbEdCBNU695wOHLbuQzr1abTurM4LkQ1XcfWUFnkpSZ4jbQrIk7XkKG6Puo23LjVTxGlSIQOJzwTOKeMeKCL4y2sBD0DmgJ3RGZmMjRgXM2HCPOPxc8SEqdIOGP3%2FHo1GOSmZdDNkk6D01aUjbFgZMIzS9yKsQ88D9%2FzG0G%2F9lumMs9%2FzI3SGqORy0toJZ0U1q4S3j67wSkvp%2B6ThVyO17FzD3zWZK%2F6GMPARwK4u38MEjA9f2FOjyDDjJbxsaEviiIJRXd1eGMOM9tiGUF1vlecUHUXQKe1V0D6G3sop1xv6%2FWPeNoPMl8GWYDIB3CBPE%2FG7lVmja4nyctzWXWsKw7M9xmXd7h1C4cTlux55qqlgykl7MqO%2FK1OWoQIi9xbh6uu%2BinQRZF4BC%2BT8R1eGbK16T6lA3ssVq8XBykrxWPdJJa9X7snJ%2BLnEtuYAGCLIyjuX7Cx3QHakpTlqytCpmH7Se7Dyf%2BQuuWyfDUB0uABMLvSscIGOqUBSPpA%2FCTCFZLgRsXkqYWI3wHJ%2F7jHvXSjTkjRFVM%2BrfN551l7aBP0qAn%2F8T7IEzNqWHs36xupIDYZ6X%2FLM6lpqOO%2BAA1GgYzBo%2FAyvhZhQAjD8mRVmv5oXt2oNHTRDUuMpEexIC51S0BG1u7PAcsr9qZYqMvgXgMp9oxyAZdg6Jylj9duA0kiJ1iByR32Uy45Rfxre4eshFIl3vUz4AT7QqKeXEgL&X-Amz-Signature=d728ff7733f01be33a3210c123bec749ec8b777734f7f55b2bded2db5931981f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
