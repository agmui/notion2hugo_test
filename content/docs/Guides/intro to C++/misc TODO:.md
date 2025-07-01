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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KI5XXV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBonB%2BfSfvpPa2cFrUwEFIKr1xqXre3nwJfEE6Iheh4qAiAgX9mbtNNsBpffgrYV9v2mGvtUZAwbXqiZgIUIvA0VISqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJNX4fJaQKwetmF6lKtwDgP0Fmm4uVYiScz4HkYYVH80Y6N3bu9HYhkVTSPYLbb%2BDBQ4oebKNvs1q2PUezwt7scdbDj0JZWegVWKxKgcEOuzifHAvGnSa1F9XRm8Baeo1oK1Xoowz1Yy4RbCWOobnL%2F9eAdMfivk2nA44ZRrqv%2FOCYVyN1DOYtEOaUQ9%2BAZ4w8AnPBfG4vRFZg2Oqw%2F97Rh7%2FQrRzzfaDBMlVc9wmxyVwNc6cuxA73CntIeZVKd%2B4CgEfAH8Dcdk4hb6Gr4ZxhzPVsp5h0iisEarbcRPTMttYlfaLPY%2FV2O3EqaaPtc352%2B3HjEWcbzxC3ezbYTFhcn%2Ft0xvpzuzwMRZNykSzcbBapnKUZtG4hTPBg6FzoteBt19UrSP6BfwRrO7%2F%2FaaC3slZmODJSEAuiVXQotYRLVK1pOhJJcaRuSG89eChXOKq1YAwzgf%2BEsTqt56S3oTI7acR8PKVCdkmJ22SEkcH%2F2Vg4d0PQT93%2F8dzEcVbXkznh9QVZ0xH%2FywiMWwSKj2x0sejYJruGtI8WMZ%2FikylfLg4qDbhiNoUol8osk9wQw739q8Pbw%2FjYytpoSK5JgWXqL9iBWMHTKR6rK%2BHgmcErFsiJkK3vjI1EDnPqUyQfOznCgQ7917di%2Bq3pN8whsiRwwY6pgGoQo3sbkCVxqXIIR9B1oAjPc7VS4qQsquMwLpqifuIEpVgNnmKQcuLl8N03eWvZ7C5%2FjJOalnJY8vqk%2BH3Vt%2BfuXf4qv1cPzIWrR0x%2Fd8hD34VnJPvDOPwdeXCaD6KoXOJK90gLs1Btptg25UpSLoi8ja3iLo%2FQes%2FUs9XcpZSydzR%2BBXhQlG8a63%2BRrJb%2BTwv2JfOD720rGaHnzKJ8MHRE26sJOva&X-Amz-Signature=f027a11937ccac954eca5728021e637419a4b10c4dc246e3d1e08857d901eb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KI5XXV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBonB%2BfSfvpPa2cFrUwEFIKr1xqXre3nwJfEE6Iheh4qAiAgX9mbtNNsBpffgrYV9v2mGvtUZAwbXqiZgIUIvA0VISqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJNX4fJaQKwetmF6lKtwDgP0Fmm4uVYiScz4HkYYVH80Y6N3bu9HYhkVTSPYLbb%2BDBQ4oebKNvs1q2PUezwt7scdbDj0JZWegVWKxKgcEOuzifHAvGnSa1F9XRm8Baeo1oK1Xoowz1Yy4RbCWOobnL%2F9eAdMfivk2nA44ZRrqv%2FOCYVyN1DOYtEOaUQ9%2BAZ4w8AnPBfG4vRFZg2Oqw%2F97Rh7%2FQrRzzfaDBMlVc9wmxyVwNc6cuxA73CntIeZVKd%2B4CgEfAH8Dcdk4hb6Gr4ZxhzPVsp5h0iisEarbcRPTMttYlfaLPY%2FV2O3EqaaPtc352%2B3HjEWcbzxC3ezbYTFhcn%2Ft0xvpzuzwMRZNykSzcbBapnKUZtG4hTPBg6FzoteBt19UrSP6BfwRrO7%2F%2FaaC3slZmODJSEAuiVXQotYRLVK1pOhJJcaRuSG89eChXOKq1YAwzgf%2BEsTqt56S3oTI7acR8PKVCdkmJ22SEkcH%2F2Vg4d0PQT93%2F8dzEcVbXkznh9QVZ0xH%2FywiMWwSKj2x0sejYJruGtI8WMZ%2FikylfLg4qDbhiNoUol8osk9wQw739q8Pbw%2FjYytpoSK5JgWXqL9iBWMHTKR6rK%2BHgmcErFsiJkK3vjI1EDnPqUyQfOznCgQ7917di%2Bq3pN8whsiRwwY6pgGoQo3sbkCVxqXIIR9B1oAjPc7VS4qQsquMwLpqifuIEpVgNnmKQcuLl8N03eWvZ7C5%2FjJOalnJY8vqk%2BH3Vt%2BfuXf4qv1cPzIWrR0x%2Fd8hD34VnJPvDOPwdeXCaD6KoXOJK90gLs1Btptg25UpSLoi8ja3iLo%2FQes%2FUs9XcpZSydzR%2BBXhQlG8a63%2BRrJb%2BTwv2JfOD720rGaHnzKJ8MHRE26sJOva&X-Amz-Signature=231743ede785a84cf5332e60fa18dfbffad23afb2fd1b9d8d06fbb95aa38d1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
