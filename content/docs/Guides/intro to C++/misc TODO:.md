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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEK63MI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7fGZF%2BBGBhEEXVFQlawVK8pb9gBRkljvESDIAagYysQIhAJC06bPtALn5IcY8sogTyUs7TUO5RMjztBcc2TrKVX%2BZKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySOCnKVXiJunFRXdEq3AOXzA8OUFD%2FK48XQWoIUTNTDbRRqjJgYbOnIZcnJFAfsONtzR%2BXzvI%2B72J7%2FouhDvKqE9DDdpM6E2LwTedGJ9aCfjLrt1kGv%2BVkFcGZY0L%2Bz7ISANpBzeR4%2FpMSP8NGpvGODzVF0YRvl4fLSVX1SLlICdZL%2FXvStNkuvi0zo4BSYh76q5RNi%2FSqP0e7U9%2BEPL%2FK%2FQCOw1Yr6X0bA1Gs3AbGwQROyb2PSqwMQe5cIU5l6b3PAgeNDYNdtnds%2FNHC1lHQnRUI8Z6yRcU1qa46FpAzaodawI3%2FNDLPQpCRwoKJVw8R8aP6hQCDQR3%2BJkCzwbxmNzwIVdwMGEiIPAJq6VjQ4WnpPBk4j0xEJTcSg2%2FiZJ%2FZ%2FVV0a4x3fEEp7yEpmBxkk%2BWTvFIcmVZ3IvW5xx4HnN8u75N7vr1JxSprP%2BHXrEwVQ4txPyKhrOd4sJLbGWWsXuKg%2BWChdYmr5wVMhxKa4Rhch5vi3Hk%2B7PSsNUs6H8LdGZK5REwAUog%2BbI7KO8fdMbA3k4YMlpaTvyyJFhKn4jZ66DITtsTDlHR05%2BZfoBrtek2rz6oaaKkpWsrfwkR24HNvx4mrPby24oHVsrQCyXAcl%2F0l3ZjID9b3MpbGEJ%2FIF1C12V7ngabOkTCXvdPCBjqkAW2hOAGInJWo54WzgUYveqSfRIW5bfIGLGVrw5eIl5HwuSuzANy1Y1njp3HXK8TxC8EYkK%2FR4MujJ4oP7%2Bb1RDM3QI92z0yoZAuTAgwk2ilsmprTdlRLWxfpbZciLn7vXgaGysxV%2BIQJp8doLxvBOAnPfFoS8cXd4Px7ba5FiEsQWeocFPdYU7MUP1iSJgVxZmFMoXfgQeFiedMyR8KFc3LAP1Jo&X-Amz-Signature=3c3d34819d8478dd51f90f94616b300cfe3d64512426673864c2be823c653cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEK63MI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7fGZF%2BBGBhEEXVFQlawVK8pb9gBRkljvESDIAagYysQIhAJC06bPtALn5IcY8sogTyUs7TUO5RMjztBcc2TrKVX%2BZKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySOCnKVXiJunFRXdEq3AOXzA8OUFD%2FK48XQWoIUTNTDbRRqjJgYbOnIZcnJFAfsONtzR%2BXzvI%2B72J7%2FouhDvKqE9DDdpM6E2LwTedGJ9aCfjLrt1kGv%2BVkFcGZY0L%2Bz7ISANpBzeR4%2FpMSP8NGpvGODzVF0YRvl4fLSVX1SLlICdZL%2FXvStNkuvi0zo4BSYh76q5RNi%2FSqP0e7U9%2BEPL%2FK%2FQCOw1Yr6X0bA1Gs3AbGwQROyb2PSqwMQe5cIU5l6b3PAgeNDYNdtnds%2FNHC1lHQnRUI8Z6yRcU1qa46FpAzaodawI3%2FNDLPQpCRwoKJVw8R8aP6hQCDQR3%2BJkCzwbxmNzwIVdwMGEiIPAJq6VjQ4WnpPBk4j0xEJTcSg2%2FiZJ%2FZ%2FVV0a4x3fEEp7yEpmBxkk%2BWTvFIcmVZ3IvW5xx4HnN8u75N7vr1JxSprP%2BHXrEwVQ4txPyKhrOd4sJLbGWWsXuKg%2BWChdYmr5wVMhxKa4Rhch5vi3Hk%2B7PSsNUs6H8LdGZK5REwAUog%2BbI7KO8fdMbA3k4YMlpaTvyyJFhKn4jZ66DITtsTDlHR05%2BZfoBrtek2rz6oaaKkpWsrfwkR24HNvx4mrPby24oHVsrQCyXAcl%2F0l3ZjID9b3MpbGEJ%2FIF1C12V7ngabOkTCXvdPCBjqkAW2hOAGInJWo54WzgUYveqSfRIW5bfIGLGVrw5eIl5HwuSuzANy1Y1njp3HXK8TxC8EYkK%2FR4MujJ4oP7%2Bb1RDM3QI92z0yoZAuTAgwk2ilsmprTdlRLWxfpbZciLn7vXgaGysxV%2BIQJp8doLxvBOAnPfFoS8cXd4Px7ba5FiEsQWeocFPdYU7MUP1iSJgVxZmFMoXfgQeFiedMyR8KFc3LAP1Jo&X-Amz-Signature=0dad317ccf25db8dea2258a9f366c6a7068a1786b3317f14aa980ec6393398ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
