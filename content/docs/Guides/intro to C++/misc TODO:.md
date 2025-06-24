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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JP3EDC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFNmUgRp4y%2B0Eb9WhzojsFrgwlEPQ9LBY%2FeWBkpgSfcBAiEA1FER2z8OiTPsOw8B8iDxqs1RjdSOZW9x3U0JGo89%2FaYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLaE7iD8K%2FUxiH3J4SrcA%2FRiT44WdjQDYshw0H3uKAZmgIsgV7wwo0QfMBQeZrR5i%2B7xyry9drLTdcNFeqdvO%2FcmLcN%2FxPD5BgosyXEgK1auSE8NBjIYe6KfOsECuMg8SgsZpTJCjhn3w9SRo11%2FqBHu%2BHbaRzbBEZe9elKF3tbSnEKNMV%2FynAa9hMB2RoQ98KwEVRHxZObHpCXX%2FLe3PQJ16CGwrUcz3221WhIbGcM9hHfltOr9V4YarGL4id7BXI%2BEKdx%2FGMQP0o%2BWxfbpmmCEAqhzQ0VfOiA5v4J517VcnITYO0V2t%2BriMdt48U6G2H1GXD8sHkrwCgnT6G9O8%2FOaEkZxFEfwIpciP6d9vcKpYQRcx1%2F%2BhTpGzMH7I0tNi08yxj%2BqdK%2BwhgaeLbVC4hruHK3CVAM9xth0uUsaVWvC6XKqY0Apx7OmuyvH8M%2F3SxUct8w13vFDHlHwuRNqlebUK7AvsvkjC0m0YE8Vv%2BZE%2Byr9ebXkXBR%2BMLdX6kEsOCDfYqmWqJeBIBTd6LOyefPcBVvlmTx%2BvuDwNmK0NrNqPaA1YBQiU%2BDXBFHL7JMUFpzYEzzrjxZnYDRuHwBL5%2BVtxNkP2NFCEBoxkd5TgDeObgutzqHpaniPkXgWkQW8JLzTNiWU9gXbddlBMOD46cIGOqUBWCnq3gJJGoCrudQI53eRwYsvxsvAYmabWGKd%2F%2B8myzN628Ki23ewsyjvraqrPY8uAyQ40Iu686vLsFRs29jDE4DuoBriQsE1y1%2Bk808Cp5Y7JCPjDSEHJDxQfY%2FPgltmLa%2FqYYbi1l4IaclDpsS1nVfZ2t6gNqKLm337Hm1Klsbl1qA88aXvFk4u%2Fmqf%2FYRyNfJHWX6j2kh9XBqpLbvrEUXsv8Mq&X-Amz-Signature=a09f15ea07fa90ef7393f2283dd270d236915800892b4baafd1fcdd2cba36f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JP3EDC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFNmUgRp4y%2B0Eb9WhzojsFrgwlEPQ9LBY%2FeWBkpgSfcBAiEA1FER2z8OiTPsOw8B8iDxqs1RjdSOZW9x3U0JGo89%2FaYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLaE7iD8K%2FUxiH3J4SrcA%2FRiT44WdjQDYshw0H3uKAZmgIsgV7wwo0QfMBQeZrR5i%2B7xyry9drLTdcNFeqdvO%2FcmLcN%2FxPD5BgosyXEgK1auSE8NBjIYe6KfOsECuMg8SgsZpTJCjhn3w9SRo11%2FqBHu%2BHbaRzbBEZe9elKF3tbSnEKNMV%2FynAa9hMB2RoQ98KwEVRHxZObHpCXX%2FLe3PQJ16CGwrUcz3221WhIbGcM9hHfltOr9V4YarGL4id7BXI%2BEKdx%2FGMQP0o%2BWxfbpmmCEAqhzQ0VfOiA5v4J517VcnITYO0V2t%2BriMdt48U6G2H1GXD8sHkrwCgnT6G9O8%2FOaEkZxFEfwIpciP6d9vcKpYQRcx1%2F%2BhTpGzMH7I0tNi08yxj%2BqdK%2BwhgaeLbVC4hruHK3CVAM9xth0uUsaVWvC6XKqY0Apx7OmuyvH8M%2F3SxUct8w13vFDHlHwuRNqlebUK7AvsvkjC0m0YE8Vv%2BZE%2Byr9ebXkXBR%2BMLdX6kEsOCDfYqmWqJeBIBTd6LOyefPcBVvlmTx%2BvuDwNmK0NrNqPaA1YBQiU%2BDXBFHL7JMUFpzYEzzrjxZnYDRuHwBL5%2BVtxNkP2NFCEBoxkd5TgDeObgutzqHpaniPkXgWkQW8JLzTNiWU9gXbddlBMOD46cIGOqUBWCnq3gJJGoCrudQI53eRwYsvxsvAYmabWGKd%2F%2B8myzN628Ki23ewsyjvraqrPY8uAyQ40Iu686vLsFRs29jDE4DuoBriQsE1y1%2Bk808Cp5Y7JCPjDSEHJDxQfY%2FPgltmLa%2FqYYbi1l4IaclDpsS1nVfZ2t6gNqKLm337Hm1Klsbl1qA88aXvFk4u%2Fmqf%2FYRyNfJHWX6j2kh9XBqpLbvrEUXsv8Mq&X-Amz-Signature=0362ec8aec9162234facfe53cee428c9b0dac49f0e7e46e23278802abc2f6653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
