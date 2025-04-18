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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKRWYO6%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYSwxBJd1e%2FBJYJI8J9FY9id5Kdti5%2F7cg7QLjrv7iPAiAXADanymzaJ%2FAIuY45NSoPsoQw45zhtLFpi%2FruvfRJvir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMxxDaJ9gn%2B6yN0qHsKtwDKDPB45XNOqdtyI5Sp66v3Cd5aEIKxA0qZ780YoO47CWA6VyJq9bzV7%2BqcP%2FxEWmDeJDy75b3oO2N4ZjxmUOFmHNf54afpjReqkDBpOIoKKSRaJE4RvZwMQHbso48i276BOgp%2B0dilEFFS0FoiRB04bWOrtue%2FvHh6DKDh6M%2F330a2i4UQTjivzdgpQPDenuatUbI%2BU0seKaO2BbdRPbk4sN%2F0ffiimRzgCXyK%2BRUqgVTLBj3HCem2hcCQ26eYcBdbrgGvJ4yqmU0hnJEvL9D%2BxFm%2Fu%2BIzzGNEjrVKpq4yS50TjEnmhDDJWv%2FBDRL7UgYccTgOmH8rtBf0KwMOw1B9Cjlqgru05Uv8NWDZcaPBCIh1h0tn1rPtFaEf%2BwP0MMaPHwlxzqovUFWwY3xQ42fOCTcnGp8cR1syauGQw%2F9s38Oe11YGWjFvwYQAOz23jxsFmoeOUsBvpJbI7NcpYoo5ncCVnDn5aonYV0uj1v%2F0F2L4XgPSIgJs4EhCLGEEsoqCfY%2FsPNs7NbeVHU6zyv1tIgAh4q5DtRwNtw6cqYVAwx8e6TEeZVHsDUCRQ5UP%2FZN3DI0BbjRImMM9%2BbLtbq1s8OXxqsLq8Mm9VYGV%2BCM6YNMSqZ6Mw%2Bu2r05Y80wy96JwAY6pgGCcHesJvjRuzW9revaJI%2BiF2WFqoiF7Hods1Iunx7IH5Vg9Vcose3PLlrx3DXH8LKtj60%2FCRyM87qMdS6M2rZiTfCC1K7plLdE50nDucKH7vLQGDmxk1TBl90e3G9ViyYZpega5FVS2HVaIkigmENSgITPKxPqalux1dkfm2FVjRzYfIB2B7JoB3ONjEHbtLdYyyHoWz13gHauo%2BHSgfU%2FIEkM2tBN&X-Amz-Signature=2d5d47dc3a6663bea6b4a262611f25d399410809bff255da9e77c19aecdbd168&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKRWYO6%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYSwxBJd1e%2FBJYJI8J9FY9id5Kdti5%2F7cg7QLjrv7iPAiAXADanymzaJ%2FAIuY45NSoPsoQw45zhtLFpi%2FruvfRJvir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMxxDaJ9gn%2B6yN0qHsKtwDKDPB45XNOqdtyI5Sp66v3Cd5aEIKxA0qZ780YoO47CWA6VyJq9bzV7%2BqcP%2FxEWmDeJDy75b3oO2N4ZjxmUOFmHNf54afpjReqkDBpOIoKKSRaJE4RvZwMQHbso48i276BOgp%2B0dilEFFS0FoiRB04bWOrtue%2FvHh6DKDh6M%2F330a2i4UQTjivzdgpQPDenuatUbI%2BU0seKaO2BbdRPbk4sN%2F0ffiimRzgCXyK%2BRUqgVTLBj3HCem2hcCQ26eYcBdbrgGvJ4yqmU0hnJEvL9D%2BxFm%2Fu%2BIzzGNEjrVKpq4yS50TjEnmhDDJWv%2FBDRL7UgYccTgOmH8rtBf0KwMOw1B9Cjlqgru05Uv8NWDZcaPBCIh1h0tn1rPtFaEf%2BwP0MMaPHwlxzqovUFWwY3xQ42fOCTcnGp8cR1syauGQw%2F9s38Oe11YGWjFvwYQAOz23jxsFmoeOUsBvpJbI7NcpYoo5ncCVnDn5aonYV0uj1v%2F0F2L4XgPSIgJs4EhCLGEEsoqCfY%2FsPNs7NbeVHU6zyv1tIgAh4q5DtRwNtw6cqYVAwx8e6TEeZVHsDUCRQ5UP%2FZN3DI0BbjRImMM9%2BbLtbq1s8OXxqsLq8Mm9VYGV%2BCM6YNMSqZ6Mw%2Bu2r05Y80wy96JwAY6pgGCcHesJvjRuzW9revaJI%2BiF2WFqoiF7Hods1Iunx7IH5Vg9Vcose3PLlrx3DXH8LKtj60%2FCRyM87qMdS6M2rZiTfCC1K7plLdE50nDucKH7vLQGDmxk1TBl90e3G9ViyYZpega5FVS2HVaIkigmENSgITPKxPqalux1dkfm2FVjRzYfIB2B7JoB3ONjEHbtLdYyyHoWz13gHauo%2BHSgfU%2FIEkM2tBN&X-Amz-Signature=cab737d24b757fe1c5dbec7f0262d538f8b0050bd3852d1547a85474c23446b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
