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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAW3VSBD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDSh5aRHXokdSPZdo%2F6hPwTECNfCHyL6StxlO4yZzMJlAiB%2BOfq8PQTkbCN%2FGYTLs1qy7jlrds4r04pNEBQyioXSYiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeI%2BndIIx1cB05mrDKtwDnhYZYb4EstsVbvKX%2BeFZb3SiDC2xMHrdjLNrC8uJGX50tANGZJErJ2xFvT8c%2B50w%2FGGQ2pXnERocdXZGnrpN9EwoTWxzjRJpV1%2F74I73dDUWTlP%2FFc9FGhq8fCDUgJLUQi6bbRZ%2F%2FfTOKkaMuLaonhld6PnzAcpXyK5vMxy7zZKF3Uk598pazEFBlexMXN0le9ODWF9Zb9j4OuoN2Gun788QqX9CmUYs0r5zyO%2Bmy63BlKuPBaiIKFR7%2BC6aEI34NcOjiHANZix2ofQ28AqlZ7U8fWeuAt7qnIPgmFkuIJYDZIOC%2FHeIwMEyd3CwUjRTDsyWvdhKTOfrFwP%2B7GKVQs74aE6QQs6vh45tSmJe0fkHCIQcWsYCRdS6jf18Mbv7Nl%2BYFSyCjl4D2UDKhTeQAx2Mo6f%2FBNy2Nq3GpfUdJuYiYb8c8dN1BGUV4sFqLx7704meSSNjlCTEltcma4imUqjs1bNWmJS99BhvQXpufUWFFbP6DgPL2cKzfs7cvmAOO52PJTaOq3ysnM%2BpymTrEYf9V2UySoCshY2kZCyS1Kn78%2ByTG0hSXiGXG40GzWemWsjzE9T6Y1weQ69jhvA7RNIUMNLEvLSnYmRdOZQbCWf9lMwoTDezfUo%2FldAw4t%2FwwQY6pgGtpwl8lm9vdJpYQxyr%2BppgyLOmRvUA8peHuIA3%2FUUoFLVUQagRCwyILuDnhjBQ0a9nAvMLl1HNAnJb1BrvcTjS5JSL37vk8tO2rWlZ1UC9IHAh6H58Ky78jLyTwmPFTFHGwCrIg0nZs7Sj%2FA1%2B7O97bGs4oZtW5t4lcYZN%2B%2BjHgGHFsgF7P4UMx%2FtF6pPbogHy8xbByRQu418D1P3vUrZatEyFW3Th&X-Amz-Signature=afd25382196f44c5faa4282016eec355448e33e3cd5cf4cef9ddd0cf37c7b8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAW3VSBD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDSh5aRHXokdSPZdo%2F6hPwTECNfCHyL6StxlO4yZzMJlAiB%2BOfq8PQTkbCN%2FGYTLs1qy7jlrds4r04pNEBQyioXSYiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeI%2BndIIx1cB05mrDKtwDnhYZYb4EstsVbvKX%2BeFZb3SiDC2xMHrdjLNrC8uJGX50tANGZJErJ2xFvT8c%2B50w%2FGGQ2pXnERocdXZGnrpN9EwoTWxzjRJpV1%2F74I73dDUWTlP%2FFc9FGhq8fCDUgJLUQi6bbRZ%2F%2FfTOKkaMuLaonhld6PnzAcpXyK5vMxy7zZKF3Uk598pazEFBlexMXN0le9ODWF9Zb9j4OuoN2Gun788QqX9CmUYs0r5zyO%2Bmy63BlKuPBaiIKFR7%2BC6aEI34NcOjiHANZix2ofQ28AqlZ7U8fWeuAt7qnIPgmFkuIJYDZIOC%2FHeIwMEyd3CwUjRTDsyWvdhKTOfrFwP%2B7GKVQs74aE6QQs6vh45tSmJe0fkHCIQcWsYCRdS6jf18Mbv7Nl%2BYFSyCjl4D2UDKhTeQAx2Mo6f%2FBNy2Nq3GpfUdJuYiYb8c8dN1BGUV4sFqLx7704meSSNjlCTEltcma4imUqjs1bNWmJS99BhvQXpufUWFFbP6DgPL2cKzfs7cvmAOO52PJTaOq3ysnM%2BpymTrEYf9V2UySoCshY2kZCyS1Kn78%2ByTG0hSXiGXG40GzWemWsjzE9T6Y1weQ69jhvA7RNIUMNLEvLSnYmRdOZQbCWf9lMwoTDezfUo%2FldAw4t%2FwwQY6pgGtpwl8lm9vdJpYQxyr%2BppgyLOmRvUA8peHuIA3%2FUUoFLVUQagRCwyILuDnhjBQ0a9nAvMLl1HNAnJb1BrvcTjS5JSL37vk8tO2rWlZ1UC9IHAh6H58Ky78jLyTwmPFTFHGwCrIg0nZs7Sj%2FA1%2B7O97bGs4oZtW5t4lcYZN%2B%2BjHgGHFsgF7P4UMx%2FtF6pPbogHy8xbByRQu418D1P3vUrZatEyFW3Th&X-Amz-Signature=e638599a8aa24ba282a4b825f7abaa2827801bef7d3daa9e33b0320e873e1a15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
