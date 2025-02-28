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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NBPZIZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCaHGg71xndgz9lSYM5dRGT9vAjyIxu55GmND1sOWF8ogIgcjAboWRb7R8HJzTN8%2BBZ4AiscmqLo3we7eeH5ceBdvkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaD4I6gdSidKwvVdyrcAyiH6tJRSrrYXJdsyFdo%2BnZpSLkeP5YPKLs20xOqBgIqquL6VMJhTKDoLwTJvOu1ZA8OnJqg4AHPqi9%2FzSLzDzaTL%2BKiEhYH65GoUa7bFf9KpCLgAykKkrHXf8bvyGZdxnaa%2FWoB4IvgnMYxRaZyFehGe%2BcD8d8shwpi5BOHSN1yZmvBpka24YOgdLJL0%2BiHIuIbB%2FJ1tTPSu9dCh1%2B5Zif%2B03E2QLOa42xvjOp%2FczldV7Y0%2Br7fRC4lbrujH9jRdJ3MEznLAFvfh4FOSWWcTdhKk2R7W%2Fmn%2BAJiFO7HFHkIhhd9GtHbRu8UHkfV%2F7fn6sl9plZvQjHmxpUOH%2FVlNugqAKoUlzC%2Bjry3DxMMYjK%2BdGLz4vXXTnp%2FUSsnu4jkx%2F%2FmKY9I5hzMnYR2hrg2F%2FCRWS2%2B5q2R8wcQUnqB93SeL3bWihq1Gr4O21C2MXtIPaKokbRKSRCgfIml1Qk1iO6opqdvWcoLgSz2pIUgM2C0NE382syQbqsVoNUO4wycgatf9tDcO%2FApxL5jrNBse4dEoTvtJ1fPsHQ6f7VbR5hon6Psw1aPf%2Bw1Fvdm1SqG24xn%2Ffy6XlrMP7sw2tZ0lNcwqW%2BuTKGkn8twf4qdjC3MYR3f8smcCcEc9DEsML6uh74GOqUBG%2FuRKPPV62Tie46ChnGRihMwX7QEr601Tt3nf8JZts4ElzhBTclHUE15R%2BafUl8SLcizxj8pNa%2FCD4ohIOMHL7WmneTQLkRu%2B7084ApszXCmI4g9xGE2XH1jMAzwQI55A8ySwUAoW0YqjVjo9z5Qepl2IixDTY9n8bRrwrBm7UxXlJ5SuqR6PeBgHr941pVrsCgGJd7lm1ola4woWIpQF4clln9D&X-Amz-Signature=162c95d45b899bdc2dad3030f0b307c716c4bc7e773eae19b1ded157465bef20&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NBPZIZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCaHGg71xndgz9lSYM5dRGT9vAjyIxu55GmND1sOWF8ogIgcjAboWRb7R8HJzTN8%2BBZ4AiscmqLo3we7eeH5ceBdvkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaD4I6gdSidKwvVdyrcAyiH6tJRSrrYXJdsyFdo%2BnZpSLkeP5YPKLs20xOqBgIqquL6VMJhTKDoLwTJvOu1ZA8OnJqg4AHPqi9%2FzSLzDzaTL%2BKiEhYH65GoUa7bFf9KpCLgAykKkrHXf8bvyGZdxnaa%2FWoB4IvgnMYxRaZyFehGe%2BcD8d8shwpi5BOHSN1yZmvBpka24YOgdLJL0%2BiHIuIbB%2FJ1tTPSu9dCh1%2B5Zif%2B03E2QLOa42xvjOp%2FczldV7Y0%2Br7fRC4lbrujH9jRdJ3MEznLAFvfh4FOSWWcTdhKk2R7W%2Fmn%2BAJiFO7HFHkIhhd9GtHbRu8UHkfV%2F7fn6sl9plZvQjHmxpUOH%2FVlNugqAKoUlzC%2Bjry3DxMMYjK%2BdGLz4vXXTnp%2FUSsnu4jkx%2F%2FmKY9I5hzMnYR2hrg2F%2FCRWS2%2B5q2R8wcQUnqB93SeL3bWihq1Gr4O21C2MXtIPaKokbRKSRCgfIml1Qk1iO6opqdvWcoLgSz2pIUgM2C0NE382syQbqsVoNUO4wycgatf9tDcO%2FApxL5jrNBse4dEoTvtJ1fPsHQ6f7VbR5hon6Psw1aPf%2Bw1Fvdm1SqG24xn%2Ffy6XlrMP7sw2tZ0lNcwqW%2BuTKGkn8twf4qdjC3MYR3f8smcCcEc9DEsML6uh74GOqUBG%2FuRKPPV62Tie46ChnGRihMwX7QEr601Tt3nf8JZts4ElzhBTclHUE15R%2BafUl8SLcizxj8pNa%2FCD4ohIOMHL7WmneTQLkRu%2B7084ApszXCmI4g9xGE2XH1jMAzwQI55A8ySwUAoW0YqjVjo9z5Qepl2IixDTY9n8bRrwrBm7UxXlJ5SuqR6PeBgHr941pVrsCgGJd7lm1ola4woWIpQF4clln9D&X-Amz-Signature=ccb61516bb6f9cd2d3727dcb6e900aa2e04bc96641566c18e93d6cf53171a5e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
