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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEHEYS5R%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtAUmxQ4fu4cstTRRAsorfJV1tABVTOs43ULy%2B4lQ7rwIhAK0wIp0msU4G2VuwkufmyZsuawbeie083kotzvuqmyWdKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7tqcq%2Ffk5WuRWA%2B0q3AMCql2xZ1XTB7PKRLuNw%2FBmfeC2uuEfocNirPUr9zqWPeM6B7LJS6jka0PjOPKKxLydLSRtx6P9lSyk7AOjTHGB%2FmIwRZEPWLhCH3kPOQ%2FGMGVyyNNOvd%2BAO5zo0keow4Z67lu1gS77p7d07WVZjw%2BX9DTedVE5RtiLOnB9wIehj0K8k2TathWauMgqGNkYgxXhejB9aiSwblBvi0OuUQLYfqhpoDQjfN3MSitq9xDsGsuNliO3ImaUum5mUiVj5b02IZ3%2BAiv0r84hffyrz7zKrVqJ%2BSAEU4B0j8H9ft1NXrATr6D8Ohl4hjyUmK80GlCAoK%2BrxXVVU4P2wxiyLjo1JdvFoxGHw9zIygTqcVE6abWvFWxVw%2FAmbOm2aPdpL%2FvAPHcQa716L984NrRT1Kj6yzO%2BTY3ZeuCfZ5iGQNBZIcUddqVAvJJzwjMRCpI%2FGQPB2Z3DHFPY7bG4iaWsEz1mOUTWPXiYQWn%2FMAJhpn2sjhuG1uXYHorDH72tiIjPeHf7JpqVfVRcvLo9JQfftcAPTDmpKquz4tn4DFEU6z%2Fk4%2FDLUifPaooJ3UtAWMMsPyFjnJE9cji3hPbXXxQRS8q371flIVnnwibPkSz3YEi84cp4uM6bW9RUvhmFTDDhgb2%2FBjqkAdbjB8Ehnaxioso8bo5z0wEwQKpmZ3ItrpGwYfNTYLoUe7o5HcQk1AmW273nhxkt71yg8uXncighdNQdqvHJcU1ajU0EUPVEb%2FZRoiHqaJLforKdumTxRqm3RNRt23J5VVvGfea%2BLQwQ%2B1CoSNSTAWesEe8PJ7xv9PScZHipLuSIhvIjm0s9zLGFQhHbCknhNDnARV%2FHzVIEMmvFG%2Bdf%2BOmJu8tE&X-Amz-Signature=5a469140f584cdb7c6e8227356b2ec744d64ab1db733433088879d01eb7fd3e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEHEYS5R%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtAUmxQ4fu4cstTRRAsorfJV1tABVTOs43ULy%2B4lQ7rwIhAK0wIp0msU4G2VuwkufmyZsuawbeie083kotzvuqmyWdKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7tqcq%2Ffk5WuRWA%2B0q3AMCql2xZ1XTB7PKRLuNw%2FBmfeC2uuEfocNirPUr9zqWPeM6B7LJS6jka0PjOPKKxLydLSRtx6P9lSyk7AOjTHGB%2FmIwRZEPWLhCH3kPOQ%2FGMGVyyNNOvd%2BAO5zo0keow4Z67lu1gS77p7d07WVZjw%2BX9DTedVE5RtiLOnB9wIehj0K8k2TathWauMgqGNkYgxXhejB9aiSwblBvi0OuUQLYfqhpoDQjfN3MSitq9xDsGsuNliO3ImaUum5mUiVj5b02IZ3%2BAiv0r84hffyrz7zKrVqJ%2BSAEU4B0j8H9ft1NXrATr6D8Ohl4hjyUmK80GlCAoK%2BrxXVVU4P2wxiyLjo1JdvFoxGHw9zIygTqcVE6abWvFWxVw%2FAmbOm2aPdpL%2FvAPHcQa716L984NrRT1Kj6yzO%2BTY3ZeuCfZ5iGQNBZIcUddqVAvJJzwjMRCpI%2FGQPB2Z3DHFPY7bG4iaWsEz1mOUTWPXiYQWn%2FMAJhpn2sjhuG1uXYHorDH72tiIjPeHf7JpqVfVRcvLo9JQfftcAPTDmpKquz4tn4DFEU6z%2Fk4%2FDLUifPaooJ3UtAWMMsPyFjnJE9cji3hPbXXxQRS8q371flIVnnwibPkSz3YEi84cp4uM6bW9RUvhmFTDDhgb2%2FBjqkAdbjB8Ehnaxioso8bo5z0wEwQKpmZ3ItrpGwYfNTYLoUe7o5HcQk1AmW273nhxkt71yg8uXncighdNQdqvHJcU1ajU0EUPVEb%2FZRoiHqaJLforKdumTxRqm3RNRt23J5VVvGfea%2BLQwQ%2B1CoSNSTAWesEe8PJ7xv9PScZHipLuSIhvIjm0s9zLGFQhHbCknhNDnARV%2FHzVIEMmvFG%2Bdf%2BOmJu8tE&X-Amz-Signature=6e8ea8381626f50f292cc1a3ce83484e88364c3e387f385bcb0400d5f610936f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
