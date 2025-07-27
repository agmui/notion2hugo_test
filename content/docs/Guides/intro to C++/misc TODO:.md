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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQSMKBE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIEO64B3fW8InS%2BWxi6XvvTFNj%2BiMOPoqm1P03zgYwnKEAiEAx0djxBX%2Fp19U4OVCpWrd4Ag%2BZyLto319%2FUeaYruki%2Fcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAOdVrmh9hHcOaSHjyrcA2YjVDcFOgoZlXeH3TmM2U%2BX1djYYqLFR7r0VGIL0NerCXQH9bL0l8%2BYy5ygiVwo0F73Y1AMYwITdlFf7abjUT3T3fUeJ9tScFum1qo9gbk8UufKOtGVlWRy%2FEdnuNtmnqjAR0Mn4Z1Dq64oSbowDo6EW7QHlnHE8KkUsDg9%2FaUwIUsIvsKjb1RrvRY4qaSr5UEqnCqunvU2n6O3MqdNIf2%2Ficn2MrpBi4uT9sGxb89T1cPbVOdxQxiIEvCggg5vM2hnaBtAWSpy0V%2BBdxbzZJAvatqqtjKOMi6MGgK8RUtySyrvxj2cOmL%2Fgy%2FitOboevesyAJj%2BbXKYvu5OlDQiOr04V9t%2B3S0FjJM2EkGDjyNXW5kdklDg3jiBynFcC7%2BWK3bqhhx8901L6HEXRyjzY4EYtMdcNSrhZKlfoh3Ga%2BiXdmdUonEuUVmX73N3y0T8b2E2%2BbaycpeJX1PQyXeBqFRd%2FwUFUwNKujuo2Naw4IV1khG3FvBK%2Fz6rDx5A8XKjxbN1Rc35MYHz%2FP6w%2BDn8G%2BKYCreP1iIfgnECvJvpAdjzSKUPuKwfmu6l0FcwbcqIv%2F%2Ft%2FQ0k3VC3LJMUvS7WRIRnsUDxwq6tIQtwU0akXZSlkahVgnCfAaBgqV2MPDgl8QGOqUBRckmWl0U0PhBUL6uBp4mYA5lpflez1L3D7y%2BnxC6tnsPjUhj86bN1jd%2Bf59%2B2QAaWlcx0g7HVRVKM9G9Q2o6wUbWBGxCFasbkLJUV8GMX%2BaWOeq1ugMy%2BTG4np3LmPll8rywvsePxPF%2BX2yvm8kCNW7zcjOvVxDF5ZOqWDAzXrLn7o41Adqtu4Go4u7zWlvrEm6m4XhvFbCqj9HIGBAJ1rqfSUv1&X-Amz-Signature=7eaa3d4d3da69d3f5ef3dc156f49660a529645bac485e0b8aca37b37d250551b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQSMKBE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIEO64B3fW8InS%2BWxi6XvvTFNj%2BiMOPoqm1P03zgYwnKEAiEAx0djxBX%2Fp19U4OVCpWrd4Ag%2BZyLto319%2FUeaYruki%2Fcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAOdVrmh9hHcOaSHjyrcA2YjVDcFOgoZlXeH3TmM2U%2BX1djYYqLFR7r0VGIL0NerCXQH9bL0l8%2BYy5ygiVwo0F73Y1AMYwITdlFf7abjUT3T3fUeJ9tScFum1qo9gbk8UufKOtGVlWRy%2FEdnuNtmnqjAR0Mn4Z1Dq64oSbowDo6EW7QHlnHE8KkUsDg9%2FaUwIUsIvsKjb1RrvRY4qaSr5UEqnCqunvU2n6O3MqdNIf2%2Ficn2MrpBi4uT9sGxb89T1cPbVOdxQxiIEvCggg5vM2hnaBtAWSpy0V%2BBdxbzZJAvatqqtjKOMi6MGgK8RUtySyrvxj2cOmL%2Fgy%2FitOboevesyAJj%2BbXKYvu5OlDQiOr04V9t%2B3S0FjJM2EkGDjyNXW5kdklDg3jiBynFcC7%2BWK3bqhhx8901L6HEXRyjzY4EYtMdcNSrhZKlfoh3Ga%2BiXdmdUonEuUVmX73N3y0T8b2E2%2BbaycpeJX1PQyXeBqFRd%2FwUFUwNKujuo2Naw4IV1khG3FvBK%2Fz6rDx5A8XKjxbN1Rc35MYHz%2FP6w%2BDn8G%2BKYCreP1iIfgnECvJvpAdjzSKUPuKwfmu6l0FcwbcqIv%2F%2Ft%2FQ0k3VC3LJMUvS7WRIRnsUDxwq6tIQtwU0akXZSlkahVgnCfAaBgqV2MPDgl8QGOqUBRckmWl0U0PhBUL6uBp4mYA5lpflez1L3D7y%2BnxC6tnsPjUhj86bN1jd%2Bf59%2B2QAaWlcx0g7HVRVKM9G9Q2o6wUbWBGxCFasbkLJUV8GMX%2BaWOeq1ugMy%2BTG4np3LmPll8rywvsePxPF%2BX2yvm8kCNW7zcjOvVxDF5ZOqWDAzXrLn7o41Adqtu4Go4u7zWlvrEm6m4XhvFbCqj9HIGBAJ1rqfSUv1&X-Amz-Signature=571fd39b4bcd7388143e2ce9deb450aa8968cf8282edf3df912cc6daaf2b5655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
