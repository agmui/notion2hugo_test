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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXH6ZIT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNkkEb39iREALLtZKQjzOcaa1PRK29OadPCgmtHU3I5AiEAnr%2FUeWhPCVjgkmQXicduQiBsfDt2aV4yDUerfbeqwZoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx1WbrB9ICnk1EGDyrcA1SaAXeNzGJqFVWytflWZK%2B4UG3rZfK0qrYg8UsTVZ7D5z3yR97mGE4GWQKJFhmcpQZuitKECSOYbjKlzRa9fEGeoX92MLuwA%2BeTuY7SK2LMojYGjRkpzkQwPEayTnseyRJVX1HAT%2BQK2ud44ig0ogi6CdRkhoGMTcOduGocmRXC1FLoLFhDjqtbn76cDDIAwwcqQT%2Bd98937QFOO4lovF9MXPy0a3gzvx%2BHJ5Lf%2BIPbq8J%2BNnCNjmep26q3kAhcTJBdFNEaGRDQrGvcEgld3ySTRHONnqKAFwwLV%2FC7uSgdruQ1ECwZk3nNQKtznXPdcnyHz42UWtyB2C6vETgb1XQ18ZN57ZKITyCkfiknZOXxxhAIQ2HY6enVzmxNZmIpNnKdeif1Glh40D0jOQtbzYNeIVFEykdlOe%2FcyoP9K6gJcaXOOJd1Fm4MJTTtYN8GGJRHhtbSsbFd6vI03%2BeUz9beesmMcGcrkFNWAED%2Brbpt6cmb9sMqclAeLY3%2BbN89M1UuVq3Xh3CHomd7X3DyOB4kBvwmyt2zjsrjkhZ62P7YkiPJX0h5aN0uB6so3Mm5VWhIpGfvpfrjpinT%2Fq3a1R5%2BYhU9byij8%2BFYfPQME1j9VUkDYoQqX5E1ZfhNMLiJ0MIGOqUBI9s6zZWLxq8J%2FpNZ6dIIpRqTDWLhGrTr6m6dUVuFCGXmOdeNM%2B9K1%2Brwz3oXYAPcRwhxtl846kgCHNGRrJeO4EIQtL9i8obRd5ixntajE605dGqx3nj2tO1Sr1qkM3geDGyfutpNs4kDj3RvamkJjauCwkOCjsbIMcyDbF2tyE%2FF0QT0hAC4Du5oM%2BKCEf4jJFCoULI%2F4kPlABziTN%2BZSTW3WWTy&X-Amz-Signature=7d7361caf822a8d17c6e8b74a8d4661cdfb48e45af2fb81e8214fa9608d50205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXH6ZIT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNkkEb39iREALLtZKQjzOcaa1PRK29OadPCgmtHU3I5AiEAnr%2FUeWhPCVjgkmQXicduQiBsfDt2aV4yDUerfbeqwZoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx1WbrB9ICnk1EGDyrcA1SaAXeNzGJqFVWytflWZK%2B4UG3rZfK0qrYg8UsTVZ7D5z3yR97mGE4GWQKJFhmcpQZuitKECSOYbjKlzRa9fEGeoX92MLuwA%2BeTuY7SK2LMojYGjRkpzkQwPEayTnseyRJVX1HAT%2BQK2ud44ig0ogi6CdRkhoGMTcOduGocmRXC1FLoLFhDjqtbn76cDDIAwwcqQT%2Bd98937QFOO4lovF9MXPy0a3gzvx%2BHJ5Lf%2BIPbq8J%2BNnCNjmep26q3kAhcTJBdFNEaGRDQrGvcEgld3ySTRHONnqKAFwwLV%2FC7uSgdruQ1ECwZk3nNQKtznXPdcnyHz42UWtyB2C6vETgb1XQ18ZN57ZKITyCkfiknZOXxxhAIQ2HY6enVzmxNZmIpNnKdeif1Glh40D0jOQtbzYNeIVFEykdlOe%2FcyoP9K6gJcaXOOJd1Fm4MJTTtYN8GGJRHhtbSsbFd6vI03%2BeUz9beesmMcGcrkFNWAED%2Brbpt6cmb9sMqclAeLY3%2BbN89M1UuVq3Xh3CHomd7X3DyOB4kBvwmyt2zjsrjkhZ62P7YkiPJX0h5aN0uB6so3Mm5VWhIpGfvpfrjpinT%2Fq3a1R5%2BYhU9byij8%2BFYfPQME1j9VUkDYoQqX5E1ZfhNMLiJ0MIGOqUBI9s6zZWLxq8J%2FpNZ6dIIpRqTDWLhGrTr6m6dUVuFCGXmOdeNM%2B9K1%2Brwz3oXYAPcRwhxtl846kgCHNGRrJeO4EIQtL9i8obRd5ixntajE605dGqx3nj2tO1Sr1qkM3geDGyfutpNs4kDj3RvamkJjauCwkOCjsbIMcyDbF2tyE%2FF0QT0hAC4Du5oM%2BKCEf4jJFCoULI%2F4kPlABziTN%2BZSTW3WWTy&X-Amz-Signature=2215df4aaef4817962f696e95f90c3f0d1340d40fe9fbe578407f775e4b4a27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
