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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7HJMRRY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwf6VpW70NTOQV9dFeDZoWJlY8QY%2BpocyAZPvsfv9lOAIhAKhpK%2F1PwJczEAdQ7t%2FKAMuBhIZmOu7JXaRXrudmA%2Bk7KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ%2Ftsz3bS%2FnEGnXtMq3AOD6u2vCNr91uD5REvLnJk3GEnuTNPg7AIuUKiwbLYbFr9XB2k8FAFxB%2Fv1T4tV4qfHufMaXAp9D1HYKy%2BsT7zd70F%2FvTo7IgZHj9lcvFdcqvkRx5gMHMqA8kSEez9MVzLipKMnoFjO7aMbm3hwfubWqFe3YVRjR8%2BKl8S1NSSOzz0g%2FUouDkXHq2yB8WE%2BZTYsqwWpTqSXBx88dV0xmZ%2BBy4YBNfc7F7dJBD1w1vIYvoPK460EfjCgflohnxfcjnRKUbhFV5NjzhJogOta%2FyA1njL1WtojAJA2e8OYAH84tun81NuTTtNGN%2BNy5nS%2B0dTAET6tL%2BT0VRwzmeCeftA8qhfq%2FabnDtZVUVhEtoxPK2BkewrdrHkUQlE6DSaEt75L3L0qZGKpBuKdr5AR8qPuf7NoSq1sOyZhn28Qya%2FgrBfDGCcM8LIg26y2D9oMkrjQnAjDSWEsqoO0kN7HxVAr%2FVX6enVg3WsdRYW3SLCVd7FR%2BmipgdL3RDkIV9b8M%2FrCPWSbSVdtrdw%2B4mnAMBJAjXEur0OP5rzELlanVDq6mnQY7YC2tdGj5XSH8W2QGhoTD3hIYGebegzVaKyQT9Inq9K3FQRmIEXPPZTs71AvcwIyoLIMUTsmS5%2FaYDDjgL7DBjqkAa9be9fjC1RU1EzeTDUUDaToNAP%2FTzXhbt7c8X8mKcQSqnL4cbRlATmYJgH%2B3yb39GQFPyZbqNWdRVxWMSAGwk%2BeznH3xglkl4i1P%2BQmx8hsPDVXWThvroB6b67yNVKs%2BOaJk8dAlbmV7EvmBSpQE0rVpXhfd6aQxbVIVvYrb6UdpXOj2xmZGwuJ8Xz5nL5USv5mhH6OfnDQRAF5GAwImChVlodB&X-Amz-Signature=59f3d020351017a37b163bc932b872813f755209bb7d64646a64faa3817755d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7HJMRRY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwf6VpW70NTOQV9dFeDZoWJlY8QY%2BpocyAZPvsfv9lOAIhAKhpK%2F1PwJczEAdQ7t%2FKAMuBhIZmOu7JXaRXrudmA%2Bk7KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ%2Ftsz3bS%2FnEGnXtMq3AOD6u2vCNr91uD5REvLnJk3GEnuTNPg7AIuUKiwbLYbFr9XB2k8FAFxB%2Fv1T4tV4qfHufMaXAp9D1HYKy%2BsT7zd70F%2FvTo7IgZHj9lcvFdcqvkRx5gMHMqA8kSEez9MVzLipKMnoFjO7aMbm3hwfubWqFe3YVRjR8%2BKl8S1NSSOzz0g%2FUouDkXHq2yB8WE%2BZTYsqwWpTqSXBx88dV0xmZ%2BBy4YBNfc7F7dJBD1w1vIYvoPK460EfjCgflohnxfcjnRKUbhFV5NjzhJogOta%2FyA1njL1WtojAJA2e8OYAH84tun81NuTTtNGN%2BNy5nS%2B0dTAET6tL%2BT0VRwzmeCeftA8qhfq%2FabnDtZVUVhEtoxPK2BkewrdrHkUQlE6DSaEt75L3L0qZGKpBuKdr5AR8qPuf7NoSq1sOyZhn28Qya%2FgrBfDGCcM8LIg26y2D9oMkrjQnAjDSWEsqoO0kN7HxVAr%2FVX6enVg3WsdRYW3SLCVd7FR%2BmipgdL3RDkIV9b8M%2FrCPWSbSVdtrdw%2B4mnAMBJAjXEur0OP5rzELlanVDq6mnQY7YC2tdGj5XSH8W2QGhoTD3hIYGebegzVaKyQT9Inq9K3FQRmIEXPPZTs71AvcwIyoLIMUTsmS5%2FaYDDjgL7DBjqkAa9be9fjC1RU1EzeTDUUDaToNAP%2FTzXhbt7c8X8mKcQSqnL4cbRlATmYJgH%2B3yb39GQFPyZbqNWdRVxWMSAGwk%2BeznH3xglkl4i1P%2BQmx8hsPDVXWThvroB6b67yNVKs%2BOaJk8dAlbmV7EvmBSpQE0rVpXhfd6aQxbVIVvYrb6UdpXOj2xmZGwuJ8Xz5nL5USv5mhH6OfnDQRAF5GAwImChVlodB&X-Amz-Signature=8e4c61c358357838a25a2c2763099d4b2a6a45e0c6a7cbdc99af8bc5b1ab0363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
