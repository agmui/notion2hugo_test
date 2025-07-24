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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCNLUEI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDzYGiQP%2FuPunkoR4lEIyIpQQ3Fb0Ir1y5b7WRzU6%2FqjwIgD1usG8xtDatz%2B4MXxmAors1YIzzLYRAWJtaYjTbZErwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOIRNJ02REujhL7cMyrcA%2BzJvV5EdU7BIePHgvYaFk788VwRKLIR4lWGRtfff2huuZfDzvj%2F4yHUDMmM5%2FkP4raUzMh9tVGV%2FtkOJcZjVrdiEA7Ijr3s%2BmswmvXWqjfz8aRs2NOEQpiIJe5PrD%2Fk1502%2FJKj6I%2FQV94PkhCyBcfgK6thjMMJsRrFZFC6n%2F4ogp9eBtDdLq0258GDUVVkMJ18ypYOnhyK10Fnm%2BHhzX%2FdqOAzyYkeuh9V%2Bxo1hp5ZAgbu8P252BUdLSw9cuOgv22X602jjxGamFWdIb7v9GV3FW8ko7GfcudJLASIKq%2FiVBjxU3nuY3q2smB6%2BkzWYCewgGICI560dkho8PHx7ifbCnjeEZnegFFRdbf5X2ZWSrtkjdVy1Lgyy5KqazUWxK4Bhno3z2XjnsxFcpSlNQhjXw1nwoFtT3J7LFzXQQC8LDdrv7cnJ9WndmhVtoHfqmMQdrtms6Yga8UcHu5rFoLDeEIrn6C8GgHD5NhDgopVo9W7QmG9s4YgwIHd8y%2BUnN0ldWmVRxVUXTM%2FsAv1%2F1fYmkj0TtPb8QynASfkhW20J5uYvR2BLeUAV8cQdX0Vt6s3DwAq%2BxT2KRDRqKT60i7NfJwsEojsZKSi2TlppOEOtjSVPxzznNKJabIHMI%2B2iMQGOqUBNtjlz5pvPL14h5MDxUZp6beNZAPauOfoPqI%2B1dJ3YucuXFyb1SNTLmcFTKC%2BHJCOw%2BrIKvlNGz2GwA%2BbvrPOXyZIAz2tpg3U1OJfr2goeNVAnZ63Yf%2FKSO3PMnvbTkUQU%2BrG4AJNfWkPPIp%2BFYVJbTEN6xJQjGeIzQ8K%2F3WlBhtDO9k9QqGxuK65NG9XDz9YM3pbAIw9awiMwDZzXW%2BoJ4pph%2BGX&X-Amz-Signature=b625ab965a09a23dd705275e0848b79a7b58f91b384dfee0664f7a05421e3a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCNLUEI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDzYGiQP%2FuPunkoR4lEIyIpQQ3Fb0Ir1y5b7WRzU6%2FqjwIgD1usG8xtDatz%2B4MXxmAors1YIzzLYRAWJtaYjTbZErwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOIRNJ02REujhL7cMyrcA%2BzJvV5EdU7BIePHgvYaFk788VwRKLIR4lWGRtfff2huuZfDzvj%2F4yHUDMmM5%2FkP4raUzMh9tVGV%2FtkOJcZjVrdiEA7Ijr3s%2BmswmvXWqjfz8aRs2NOEQpiIJe5PrD%2Fk1502%2FJKj6I%2FQV94PkhCyBcfgK6thjMMJsRrFZFC6n%2F4ogp9eBtDdLq0258GDUVVkMJ18ypYOnhyK10Fnm%2BHhzX%2FdqOAzyYkeuh9V%2Bxo1hp5ZAgbu8P252BUdLSw9cuOgv22X602jjxGamFWdIb7v9GV3FW8ko7GfcudJLASIKq%2FiVBjxU3nuY3q2smB6%2BkzWYCewgGICI560dkho8PHx7ifbCnjeEZnegFFRdbf5X2ZWSrtkjdVy1Lgyy5KqazUWxK4Bhno3z2XjnsxFcpSlNQhjXw1nwoFtT3J7LFzXQQC8LDdrv7cnJ9WndmhVtoHfqmMQdrtms6Yga8UcHu5rFoLDeEIrn6C8GgHD5NhDgopVo9W7QmG9s4YgwIHd8y%2BUnN0ldWmVRxVUXTM%2FsAv1%2F1fYmkj0TtPb8QynASfkhW20J5uYvR2BLeUAV8cQdX0Vt6s3DwAq%2BxT2KRDRqKT60i7NfJwsEojsZKSi2TlppOEOtjSVPxzznNKJabIHMI%2B2iMQGOqUBNtjlz5pvPL14h5MDxUZp6beNZAPauOfoPqI%2B1dJ3YucuXFyb1SNTLmcFTKC%2BHJCOw%2BrIKvlNGz2GwA%2BbvrPOXyZIAz2tpg3U1OJfr2goeNVAnZ63Yf%2FKSO3PMnvbTkUQU%2BrG4AJNfWkPPIp%2BFYVJbTEN6xJQjGeIzQ8K%2F3WlBhtDO9k9QqGxuK65NG9XDz9YM3pbAIw9awiMwDZzXW%2BoJ4pph%2BGX&X-Amz-Signature=73d6d3b56da06952db07a6c2279c59b70ea526a6ec308251d2cc440eadf95b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
