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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FI75DTA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIy932ZhVzI2mRQggmAsbqjOj7ODAvQJGugTKoJkoNzwIgBS9jv0TlaybehqVQcDUDXw2DsAnsyskwhEFCnhFXEaAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBF2x1XFWMdLAHRbvircA5Xw8Jgr7WWuIKGSDb%2FTCHxcAbhGq3HEP5axesLl1cNexi%2FSijmzNB2GML5yeKE%2FXTc0oJUL0OwHatRBTdS4HZm2yR68%2FGmKu%2Bi8nDlqOzIFur4MF%2FwN2YObI0WpGNQOehX1ky6QAdLxExxZikpMDwz6ClDgKeKy%2FFyJuwr7Y4BJUgohQmlShMOUXnh6oi2WIxEVsvTmI5f3%2BiZR8%2FcoSmQmg%2BIhhFmg9T5RkuHp6NaHRaJ12BcHaC0mGtl8b%2Bm2rGwxWzfdXyzeWHuUZGuXyi6pHeDVQW%2FObw79o%2F0sGfsigMlAJ%2BJlF7THaWyxdwYIIl2YhlWokcZ3oxvud7x9iFmyLJiH9mZ4t2RXv7TAuQVDVyj6U3%2F%2BX5Yv1E1VxZc9dqDi3AR6mqh40QRRdZnFpy01RK6l7dlCKXfJ%2FToU1n83ZZEz2P6XhKLqbTUCE9es6p87trWECxLMoHcBTuwTynvjXcpuGdTpGbz%2BGdmM26L15B5AOr6JUOxvzcrJMU5bxRFu2pgxP2pSTcuXtq4Q3SMdDaVkUMySB5AWEvvQI9BV9i8ZdHVafvDOGytq9B8S7ohERdMNpfSMWsjODQll5g6Ev5fZzoCslyng6%2BBcXyFQxYFSKXs0HeGgzZxxMNK3pcIGOqUB45JAParXvXz9yAqaGPYo4BSf%2Bl1LrMiYd75QU%2FEVUSfcC2HvinRLFJGPpMJsGkRrbim5SeTqGodjB45cHA3MPj%2Bc7MX394wDTCsxf0mz%2FuN%2B2BXxko7SDAp4QIN8dP78zDp8oXnbl0yM%2F9mpDJyuNgyQWfwXu8XV6ZE3DLBni40Pgp%2BuARWjOEPdpfU3JxZYy8nFoc6dtcxAMyqp8Yw0DtGzfDob&X-Amz-Signature=b1519336f43e8b833e96ce3f3b242b7b16723524a81d2a9c5e0461efd2836997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FI75DTA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIy932ZhVzI2mRQggmAsbqjOj7ODAvQJGugTKoJkoNzwIgBS9jv0TlaybehqVQcDUDXw2DsAnsyskwhEFCnhFXEaAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBF2x1XFWMdLAHRbvircA5Xw8Jgr7WWuIKGSDb%2FTCHxcAbhGq3HEP5axesLl1cNexi%2FSijmzNB2GML5yeKE%2FXTc0oJUL0OwHatRBTdS4HZm2yR68%2FGmKu%2Bi8nDlqOzIFur4MF%2FwN2YObI0WpGNQOehX1ky6QAdLxExxZikpMDwz6ClDgKeKy%2FFyJuwr7Y4BJUgohQmlShMOUXnh6oi2WIxEVsvTmI5f3%2BiZR8%2FcoSmQmg%2BIhhFmg9T5RkuHp6NaHRaJ12BcHaC0mGtl8b%2Bm2rGwxWzfdXyzeWHuUZGuXyi6pHeDVQW%2FObw79o%2F0sGfsigMlAJ%2BJlF7THaWyxdwYIIl2YhlWokcZ3oxvud7x9iFmyLJiH9mZ4t2RXv7TAuQVDVyj6U3%2F%2BX5Yv1E1VxZc9dqDi3AR6mqh40QRRdZnFpy01RK6l7dlCKXfJ%2FToU1n83ZZEz2P6XhKLqbTUCE9es6p87trWECxLMoHcBTuwTynvjXcpuGdTpGbz%2BGdmM26L15B5AOr6JUOxvzcrJMU5bxRFu2pgxP2pSTcuXtq4Q3SMdDaVkUMySB5AWEvvQI9BV9i8ZdHVafvDOGytq9B8S7ohERdMNpfSMWsjODQll5g6Ev5fZzoCslyng6%2BBcXyFQxYFSKXs0HeGgzZxxMNK3pcIGOqUB45JAParXvXz9yAqaGPYo4BSf%2Bl1LrMiYd75QU%2FEVUSfcC2HvinRLFJGPpMJsGkRrbim5SeTqGodjB45cHA3MPj%2Bc7MX394wDTCsxf0mz%2FuN%2B2BXxko7SDAp4QIN8dP78zDp8oXnbl0yM%2F9mpDJyuNgyQWfwXu8XV6ZE3DLBni40Pgp%2BuARWjOEPdpfU3JxZYy8nFoc6dtcxAMyqp8Yw0DtGzfDob&X-Amz-Signature=ba4e66d13701e6234c27714f7e2adec2e1c6347f19659b446278129dfec0f1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
