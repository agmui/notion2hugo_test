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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPKYHQW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDPDx2G6mkDoTL4nDttidOQYOsvG8cScH5zINGj8GDqVgIhAI9ohVqDw74JmLQIySdRKJBj60zk2umEfc7Mw07LMfedKv8DCGAQABoMNjM3NDIzMTgzODA1IgxnBK1%2BRvM37IktUnEq3ANJgLO4DTVO19DWHoCET%2FnCRXLKFYYn49JhJjTWO9S2UkDOjRnebEL3U5kj9vtr0jvXNsdAOU%2FePZ7fmqr7otZk6PnUXEhiU0G2JfzXsuMC3qHVlpR%2FiO1qJA4KoGmpLSFDbpW1xqGNcsbDUEDP1LoTb%2BGMAtpbLuP32bEYhWybzcEeE7MLoHElC%2BPuCnCGUjccU5P2anvS2xHyX4XvcQlrtEfMm4B%2Fd0a4NOEDHiWYwtA%2BL4bTwyN%2BY1pLxn1T2o3xVlfo3deBMIt0rH7FEWjp%2F02YTndfJzkyCx9Iqnpog%2BPmx1N0%2FRvqE1z5XrjgHJRaZfLkuvlwaFC9DIa0yy58FxExlq2yA3MvTGkXgfjXPOSR1ZQ5Ak6M%2BCR09NeVQDu9j7kKBvHjVQbljpi9VYPjzYhUghVuQl2193YncFO1N0xdKJU3sxcs6TwXxn%2FmD%2BHgPRZhE5E1aLDhft8XkJBGcd72sre4qk%2BFbsmGIa6mWrE%2FzGA1Ht1dXaqXmN0WFhRn6wtVgxY3Pj0N1crHS2dj3gEjDEJIusjNMJfA20W%2FVHWIee4WzvLHT2LyKi9FQM04Gz5bSTxjjmZc9USOpmGk%2BKem25kwMXEH8dMpu3ZtyalfEoHr8JBnlsWT7DD%2BsrG%2BBjqkAfKobPJuf8ucsoRXyARrsUqYRxp6Ka48mtcka043xIVt%2FWtern3OxgqmqI2YpwK2pKDFuJiPc4qeU4vn0eqx0hAl8hwJYuMiLHyKbBeZBexK0m8NFPiltjIz4beewfnIbeecb2LitBtq1i2A5Dsz4T%2BAgCKQ8GvoaoXCIE3iv6NdrN7W3l3j9%2Boqz8PnEy3MlDUH2WMBE%2BFiFlA3Q41fxoYl%2F87T&X-Amz-Signature=16eec901019b4dc18efeca5859fdc6dddc94a45d81fb46542d9296427dae0d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPKYHQW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDPDx2G6mkDoTL4nDttidOQYOsvG8cScH5zINGj8GDqVgIhAI9ohVqDw74JmLQIySdRKJBj60zk2umEfc7Mw07LMfedKv8DCGAQABoMNjM3NDIzMTgzODA1IgxnBK1%2BRvM37IktUnEq3ANJgLO4DTVO19DWHoCET%2FnCRXLKFYYn49JhJjTWO9S2UkDOjRnebEL3U5kj9vtr0jvXNsdAOU%2FePZ7fmqr7otZk6PnUXEhiU0G2JfzXsuMC3qHVlpR%2FiO1qJA4KoGmpLSFDbpW1xqGNcsbDUEDP1LoTb%2BGMAtpbLuP32bEYhWybzcEeE7MLoHElC%2BPuCnCGUjccU5P2anvS2xHyX4XvcQlrtEfMm4B%2Fd0a4NOEDHiWYwtA%2BL4bTwyN%2BY1pLxn1T2o3xVlfo3deBMIt0rH7FEWjp%2F02YTndfJzkyCx9Iqnpog%2BPmx1N0%2FRvqE1z5XrjgHJRaZfLkuvlwaFC9DIa0yy58FxExlq2yA3MvTGkXgfjXPOSR1ZQ5Ak6M%2BCR09NeVQDu9j7kKBvHjVQbljpi9VYPjzYhUghVuQl2193YncFO1N0xdKJU3sxcs6TwXxn%2FmD%2BHgPRZhE5E1aLDhft8XkJBGcd72sre4qk%2BFbsmGIa6mWrE%2FzGA1Ht1dXaqXmN0WFhRn6wtVgxY3Pj0N1crHS2dj3gEjDEJIusjNMJfA20W%2FVHWIee4WzvLHT2LyKi9FQM04Gz5bSTxjjmZc9USOpmGk%2BKem25kwMXEH8dMpu3ZtyalfEoHr8JBnlsWT7DD%2BsrG%2BBjqkAfKobPJuf8ucsoRXyARrsUqYRxp6Ka48mtcka043xIVt%2FWtern3OxgqmqI2YpwK2pKDFuJiPc4qeU4vn0eqx0hAl8hwJYuMiLHyKbBeZBexK0m8NFPiltjIz4beewfnIbeecb2LitBtq1i2A5Dsz4T%2BAgCKQ8GvoaoXCIE3iv6NdrN7W3l3j9%2Boqz8PnEy3MlDUH2WMBE%2BFiFlA3Q41fxoYl%2F87T&X-Amz-Signature=9dd0e510022d094082023bd47077b285dd7dde55a4d94499c8149e82bea69dee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
