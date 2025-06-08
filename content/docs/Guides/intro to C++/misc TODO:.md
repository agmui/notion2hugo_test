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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634O4BP7Q%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5fGNh0RZ0s7KyUfzlyV1377NDNIS825mrE%2Be5IL80nAiAStga4eC9WLZr0zwOoxjdnyJivnw95AD%2BFDHpupYyAHiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7V4Yknx6pUu%2Fn1LKtwDSieGae5CAzs5DUNPi%2B36MSERyEkf%2F6Funr5ZUfkE69uT3VjsVbW%2BOerMDtPK73x3ivgoZI8jYsrvVRGiZwmRpJX592xmtdmSRW6PkvPKQlYU6ofajJDcfPM4rLnDYs8tnCQkq2L6rJnlbYBoFjW1DRsvESSPUgzZbUsnqcp39xaWYM2GbVQD86NUso%2BA1%2B%2FwvD%2BkgMQpiVmILRvdqmKDoKKZB%2BfEJjeUz97grPM1gUgrEn%2B%2FolGpgsaEoD%2B7RQy5bTYJ7ofpnDGWwwY8QzKTlDNEp42lgw2DvBW%2F%2FY8hYAJQUH4Yi5DTu6o%2FzR5CkAxfN%2Fy0Gtn6ykYSkCTwbe7eX3HqHghbt4J%2FbXMr5UmlBMSt1xfIU6XGlh4DTL9FOjkTJ0izA%2BAXwiczT07GmLIhxl5RHqq1EmS6VhLJKwUi6rJdhqUPFZSboU3auH2uaAUwXBBqa0F4bMOS8aI5tpMOP2lurM1WJjIMD6Z0jRvhnW%2Fz8H0Nbg6AuOUgbGPy5gyn8nQruNtffbcc3oz5OFgALEB5hlrmfa%2FfG%2F1nXNZG5hqN1aVnUwrUFS2uNwF%2FKn7vqiXrotvUz9YKCx%2BtCbAQE5Q9Ba5Be5AudKeKuMO%2F9L2X2lhSMxRL5APceqgwxLKWwgY6pgHC3UxlCSUoilz33rQLA0L1vrg%2BgZbEKj6NAAVseuryB7NOr3m2sYWdGP5ip2wiIaNHqbcIrTfxRiMoIH0IMAgYyXfrof8vtEuQhJu637DOY9E8hgDQQ9Edy1ilNlZtLOp%2Bhfh%2FJDXb6SyRo9373QTmzIANrtUamTr7Mwxgnomeoq%2FAvcBx9SFcpsFGcaJAJQCar3trHtVeiAjxkQTfmgfWK8QcrRMz&X-Amz-Signature=ff4710e3b71e1975c1a61b1447364afc19d50820cf177f923b7f0090bb389580&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634O4BP7Q%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5fGNh0RZ0s7KyUfzlyV1377NDNIS825mrE%2Be5IL80nAiAStga4eC9WLZr0zwOoxjdnyJivnw95AD%2BFDHpupYyAHiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe7V4Yknx6pUu%2Fn1LKtwDSieGae5CAzs5DUNPi%2B36MSERyEkf%2F6Funr5ZUfkE69uT3VjsVbW%2BOerMDtPK73x3ivgoZI8jYsrvVRGiZwmRpJX592xmtdmSRW6PkvPKQlYU6ofajJDcfPM4rLnDYs8tnCQkq2L6rJnlbYBoFjW1DRsvESSPUgzZbUsnqcp39xaWYM2GbVQD86NUso%2BA1%2B%2FwvD%2BkgMQpiVmILRvdqmKDoKKZB%2BfEJjeUz97grPM1gUgrEn%2B%2FolGpgsaEoD%2B7RQy5bTYJ7ofpnDGWwwY8QzKTlDNEp42lgw2DvBW%2F%2FY8hYAJQUH4Yi5DTu6o%2FzR5CkAxfN%2Fy0Gtn6ykYSkCTwbe7eX3HqHghbt4J%2FbXMr5UmlBMSt1xfIU6XGlh4DTL9FOjkTJ0izA%2BAXwiczT07GmLIhxl5RHqq1EmS6VhLJKwUi6rJdhqUPFZSboU3auH2uaAUwXBBqa0F4bMOS8aI5tpMOP2lurM1WJjIMD6Z0jRvhnW%2Fz8H0Nbg6AuOUgbGPy5gyn8nQruNtffbcc3oz5OFgALEB5hlrmfa%2FfG%2F1nXNZG5hqN1aVnUwrUFS2uNwF%2FKn7vqiXrotvUz9YKCx%2BtCbAQE5Q9Ba5Be5AudKeKuMO%2F9L2X2lhSMxRL5APceqgwxLKWwgY6pgHC3UxlCSUoilz33rQLA0L1vrg%2BgZbEKj6NAAVseuryB7NOr3m2sYWdGP5ip2wiIaNHqbcIrTfxRiMoIH0IMAgYyXfrof8vtEuQhJu637DOY9E8hgDQQ9Edy1ilNlZtLOp%2Bhfh%2FJDXb6SyRo9373QTmzIANrtUamTr7Mwxgnomeoq%2FAvcBx9SFcpsFGcaJAJQCar3trHtVeiAjxkQTfmgfWK8QcrRMz&X-Amz-Signature=54b5188679c1e6f00000d063f87ac822bc119691d01c9dd693eda74651094ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
