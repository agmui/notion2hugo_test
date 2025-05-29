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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ63VLZP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP2S0tNk%2FhvTVDzarbsXZDm8DKzl85iqes62PZaZcY0AiEAv6gJqn3dd%2FiOzuQMj2cOFL3tGXtzP03QFUA5nt47s2oqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCY0TewPML26TEMyrcA2FFdpLe%2BJVFcnSjvfe7mVQwvIWmMYldrJ4JtANwaJ2s5wp5eEvMhDQlOsqMSqj%2BA97gq077JzLTbk2QoDI0JpGaGZgHDAF2T%2BOQSuOGUcQ2gtlGsI2sBUk78vKaczFYzDitSqiV8QmQQCV9ELfX1UnAHak3HHKg97iwz1mAww0Y6%2BhRTjgdsHk%2F4DrDSMZ75YqjtL6s%2FKJnIt%2FQwnnoroy36dnKEUBhEPMVwfHwjH1v6QAVADx24o9wzlblG882ZfgPZmrDlnvjYctt4%2FhvC1aBsmSqQx2WzI7cNurtkvqRTzapzjIupCXzrtL%2B6Fbe5%2FNdHOfNxvOq7hqsEncAqjiuw8JfeO6c%2Fr2UmSVjq4P1DjUhzn1S9ZJne8oNHxoPovsuA8s0EkOl9qUfP0pj31SRMAYV8REgI2zFLeRl5tQDuFGtXRf7cbKPQkExJOUndDaEf8YmCjri%2Ff8LseE16o65mtpu1k9GHHY%2BDBCHrcRPjmk6VIk1NeUfU9ljdpC2s%2B7VaxGYcaIGhTrS2XVchsWdI3SRCSe0WqykacNMk%2Fz7v5AvQnv4t%2BpWWyaq5f14XODgtxBncUHD%2FQXwXHiJiHI%2BKodmlVekMH1sCLALc69LiBCjd9pKDtGp%2B6MqMNOy4cEGOqUBQbug2Cdn5DFKsl358kAhHcQCbVQ%2FyFS2XtSZBBRTEKey%2Bz%2FmD6kc%2BJXlyjUollTN3KOeNRlB13u6wVeOCt1p%2Fa1hcbSOpD4%2F2P4V95ZE65RBIgYh58xS%2B7OZk1kF63urOPUfMKMzUuDmS6bukJwGWvFpUfEWe0H9%2F1VQZfvdaK2GZuH5TcIvE95eRwj9Z%2BuZW0OMiscxxCUevKBFJFSRp93O7GRV&X-Amz-Signature=997850f28d4ec23cfcb5d05142d637d341a651bb86586b7eb9143cd705519247&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ63VLZP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP2S0tNk%2FhvTVDzarbsXZDm8DKzl85iqes62PZaZcY0AiEAv6gJqn3dd%2FiOzuQMj2cOFL3tGXtzP03QFUA5nt47s2oqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCY0TewPML26TEMyrcA2FFdpLe%2BJVFcnSjvfe7mVQwvIWmMYldrJ4JtANwaJ2s5wp5eEvMhDQlOsqMSqj%2BA97gq077JzLTbk2QoDI0JpGaGZgHDAF2T%2BOQSuOGUcQ2gtlGsI2sBUk78vKaczFYzDitSqiV8QmQQCV9ELfX1UnAHak3HHKg97iwz1mAww0Y6%2BhRTjgdsHk%2F4DrDSMZ75YqjtL6s%2FKJnIt%2FQwnnoroy36dnKEUBhEPMVwfHwjH1v6QAVADx24o9wzlblG882ZfgPZmrDlnvjYctt4%2FhvC1aBsmSqQx2WzI7cNurtkvqRTzapzjIupCXzrtL%2B6Fbe5%2FNdHOfNxvOq7hqsEncAqjiuw8JfeO6c%2Fr2UmSVjq4P1DjUhzn1S9ZJne8oNHxoPovsuA8s0EkOl9qUfP0pj31SRMAYV8REgI2zFLeRl5tQDuFGtXRf7cbKPQkExJOUndDaEf8YmCjri%2Ff8LseE16o65mtpu1k9GHHY%2BDBCHrcRPjmk6VIk1NeUfU9ljdpC2s%2B7VaxGYcaIGhTrS2XVchsWdI3SRCSe0WqykacNMk%2Fz7v5AvQnv4t%2BpWWyaq5f14XODgtxBncUHD%2FQXwXHiJiHI%2BKodmlVekMH1sCLALc69LiBCjd9pKDtGp%2B6MqMNOy4cEGOqUBQbug2Cdn5DFKsl358kAhHcQCbVQ%2FyFS2XtSZBBRTEKey%2Bz%2FmD6kc%2BJXlyjUollTN3KOeNRlB13u6wVeOCt1p%2Fa1hcbSOpD4%2F2P4V95ZE65RBIgYh58xS%2B7OZk1kF63urOPUfMKMzUuDmS6bukJwGWvFpUfEWe0H9%2F1VQZfvdaK2GZuH5TcIvE95eRwj9Z%2BuZW0OMiscxxCUevKBFJFSRp93O7GRV&X-Amz-Signature=5dba89ab8d5061c3d84ae4b55676110fe50ee57fecb0ab5d906a67c7a5143469&X-Amz-SignedHeaders=host&x-id=GetObject)

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
