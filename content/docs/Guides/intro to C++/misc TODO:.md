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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55BB56Z%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFK7NM0w%2BRBNz8a2hFtfx1sb%2BUhyWrCllXcqUGkN7%2B3UAiEAu44blPGDGEucxdBKdSsVUk4s75lQwFs8UMSXJ6o2KiEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUpXZqSmb%2FacNBi9ircA519S6rfCFdWguXL7MUiIsYMV2B%2Bjc2Szp9vfLbpCDZ3YZVZx6s0pclm1hMvgK2grdsnT3O3eHUmh93fqEZA9Csbm%2BhP1DZ%2BYuMq8TZkgI1N0Edbj7C3aNOObw4XFfkiUHNbCdP5JYU46s8xn1MG7z2P267pzUelJhLJaW22mGb8zhCh2rV7rmylAQroio1XZmyNIqaTSAGwhNHL61iE4LfBCifpnx%2FyRbCnwyPpVF3B0hBJHX1xXke3%2F3QbfhVa9zjtjfmLIdgiZMI%2FjuPsQrxSImDRik7aXH5s8wYgQZkrNMJ0sZlsgOXjfIG1Q2ebBHxCQuTGDnEC8L1Zy1eFMylPGBBHBS97ZAr9dlqmqkCoImbENZbB5BTTDC6F2j9D7ZDrk0lr3R%2FIzII4sS%2FgIPv04KyoOhP0KRcnGt%2FVu51dyP7Tde2bzmXfcdPKT4LTOm2w8nZaJ7WY5hxMc%2FQT9%2FMaBKrnmuDiKfY02Jj9cz9jt%2Fes6RQgZMdxqRUj4bQhtdzXsy9%2FYmVSZJC63HD1gPuqoSr755AMAusHF%2BQWPAq%2B5i6%2BgzwS%2Bq8P9lHBmJqP3XYSIQfoYwceHxlGcUf56pCHWWnkVFuWZkDd0KQrUz6EWEIM9HnnEnKR%2FnXAMIC%2F6sMGOqUBov6Dq5kA7pWZplOcsIrAYchCa456S8j8K69VOnuWXpBVM0eLUtHPyj9%2BJItL9%2FlCTeR%2FqijQo8LB%2FdqaUHcaJ7xmKzVNR6xFWrysO7YayoE36f2saedRaj0MVWHm7xtwtfdqHiOSvhy3%2B0ww%2FqA%2F3UKhh3PqPqZG7%2BHEEyVUDtekNx4uGFvnP1jC%2F9oOsz0o5Waw9inX7oB6zH9YVUxC151XQUxi&X-Amz-Signature=94b8a2fe64fbb49e43fd19e6dc770ad4f38e688b6249a4542e37fb020076f403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55BB56Z%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFK7NM0w%2BRBNz8a2hFtfx1sb%2BUhyWrCllXcqUGkN7%2B3UAiEAu44blPGDGEucxdBKdSsVUk4s75lQwFs8UMSXJ6o2KiEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUpXZqSmb%2FacNBi9ircA519S6rfCFdWguXL7MUiIsYMV2B%2Bjc2Szp9vfLbpCDZ3YZVZx6s0pclm1hMvgK2grdsnT3O3eHUmh93fqEZA9Csbm%2BhP1DZ%2BYuMq8TZkgI1N0Edbj7C3aNOObw4XFfkiUHNbCdP5JYU46s8xn1MG7z2P267pzUelJhLJaW22mGb8zhCh2rV7rmylAQroio1XZmyNIqaTSAGwhNHL61iE4LfBCifpnx%2FyRbCnwyPpVF3B0hBJHX1xXke3%2F3QbfhVa9zjtjfmLIdgiZMI%2FjuPsQrxSImDRik7aXH5s8wYgQZkrNMJ0sZlsgOXjfIG1Q2ebBHxCQuTGDnEC8L1Zy1eFMylPGBBHBS97ZAr9dlqmqkCoImbENZbB5BTTDC6F2j9D7ZDrk0lr3R%2FIzII4sS%2FgIPv04KyoOhP0KRcnGt%2FVu51dyP7Tde2bzmXfcdPKT4LTOm2w8nZaJ7WY5hxMc%2FQT9%2FMaBKrnmuDiKfY02Jj9cz9jt%2Fes6RQgZMdxqRUj4bQhtdzXsy9%2FYmVSZJC63HD1gPuqoSr755AMAusHF%2BQWPAq%2B5i6%2BgzwS%2Bq8P9lHBmJqP3XYSIQfoYwceHxlGcUf56pCHWWnkVFuWZkDd0KQrUz6EWEIM9HnnEnKR%2FnXAMIC%2F6sMGOqUBov6Dq5kA7pWZplOcsIrAYchCa456S8j8K69VOnuWXpBVM0eLUtHPyj9%2BJItL9%2FlCTeR%2FqijQo8LB%2FdqaUHcaJ7xmKzVNR6xFWrysO7YayoE36f2saedRaj0MVWHm7xtwtfdqHiOSvhy3%2B0ww%2FqA%2F3UKhh3PqPqZG7%2BHEEyVUDtekNx4uGFvnP1jC%2F9oOsz0o5Waw9inX7oB6zH9YVUxC151XQUxi&X-Amz-Signature=aca7cddefc93b38651ebbfe4c47c42e7c6e94a6ef7d0d5841f08acfa389a2ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
