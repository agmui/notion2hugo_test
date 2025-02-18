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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ONSYIU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCY2%2BdP5DNF01bhqyVfhidakozEFKH9JDtJM%2F94gvto8QIgfCZZMwUU%2F0cAAbyIZYSnJyufx6GcVBaEplqMqIRXnNoqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO965gRiz6xmCh4G%2BCrcA0S5fq7Y%2FTJ%2Fg%2Fq7Jyi%2BOiLE81sOUaB5bK1l6qOOtAkqCSW4BMH7%2ByUdzxsdbpkwbG3x1FYkcMy4oDeuv4OhIw98Gk1o%2FpA165ZKLooLJqe76kn5T64H00qegpEjqjTpZ2MSu%2FP2gDLaCwCwck4djbDnbP7anl0UIVIWUtooMcPvTl5eM7RoWE7WLC4ad%2F3WO1NO8W6zzs54Bg2R9PXBm9R%2FcgyEF1LejBMrW41j2gia0w%2F0rRtcw5axg4%2FK4nfqhO1ooCxjdKRBRg01658KHOPnJPbFksE%2Fhha7C%2BoOfDNCe9sDdvYAMHbaAldmuw%2B9DXnd7Tq4NYHb%2FoXlU%2Bt%2FWQixGLfh5%2F9kr9hXHfil%2FtY4DH1JXaARtkEUtf5XBM68zvQ5Q9SXd7HMxODsxhcXdI5Hx6XI9QKQKIjxHpaXnIbZrN7THiJX%2BGd8agKPRi5nSx%2BuHZ%2F3NsKihGO5ZNUQPFxugeuEtSIhTwlTxjJdjOV2nS6QngkuSMXmukYTTbGTq1FzCS3tcQMK%2FZ3KHuVUmkF0LjJcfKHoJhJfWcjJne%2FusrPKqoimHsDa4%2BNAMP3%2BFvbfJtdQP0oizEO9szm9R6nMrvNx1yp1oJ3wHX9vcpwrs62%2B6TNsqSfnGRMsMICT1L0GOqUBNj0zuBGajJ1IU3FKVx6jUuO1m0c8nUsxq4FTy4HQTjZbzemgzRBvgVM9MDCyJXSLP1xBsRvFStHfzfbEzf%2F91ksl2yVmggJj6RA87sJOE%2FbGpYHWeK%2FnXce1397sNGJvQTCxfr4L3Q4estkcKmkhMb7KdCqeGOMFDFAEaWgzhKaulIuAlsIY5KlOMRQIWa1hgHBjSJEm%2Bn9glcuCl6t20gRuYOQF&X-Amz-Signature=e5a412867edf804ac8d0c8694150898915872445efc49074bbd2522f13f7d884&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ONSYIU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCY2%2BdP5DNF01bhqyVfhidakozEFKH9JDtJM%2F94gvto8QIgfCZZMwUU%2F0cAAbyIZYSnJyufx6GcVBaEplqMqIRXnNoqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO965gRiz6xmCh4G%2BCrcA0S5fq7Y%2FTJ%2Fg%2Fq7Jyi%2BOiLE81sOUaB5bK1l6qOOtAkqCSW4BMH7%2ByUdzxsdbpkwbG3x1FYkcMy4oDeuv4OhIw98Gk1o%2FpA165ZKLooLJqe76kn5T64H00qegpEjqjTpZ2MSu%2FP2gDLaCwCwck4djbDnbP7anl0UIVIWUtooMcPvTl5eM7RoWE7WLC4ad%2F3WO1NO8W6zzs54Bg2R9PXBm9R%2FcgyEF1LejBMrW41j2gia0w%2F0rRtcw5axg4%2FK4nfqhO1ooCxjdKRBRg01658KHOPnJPbFksE%2Fhha7C%2BoOfDNCe9sDdvYAMHbaAldmuw%2B9DXnd7Tq4NYHb%2FoXlU%2Bt%2FWQixGLfh5%2F9kr9hXHfil%2FtY4DH1JXaARtkEUtf5XBM68zvQ5Q9SXd7HMxODsxhcXdI5Hx6XI9QKQKIjxHpaXnIbZrN7THiJX%2BGd8agKPRi5nSx%2BuHZ%2F3NsKihGO5ZNUQPFxugeuEtSIhTwlTxjJdjOV2nS6QngkuSMXmukYTTbGTq1FzCS3tcQMK%2FZ3KHuVUmkF0LjJcfKHoJhJfWcjJne%2FusrPKqoimHsDa4%2BNAMP3%2BFvbfJtdQP0oizEO9szm9R6nMrvNx1yp1oJ3wHX9vcpwrs62%2B6TNsqSfnGRMsMICT1L0GOqUBNj0zuBGajJ1IU3FKVx6jUuO1m0c8nUsxq4FTy4HQTjZbzemgzRBvgVM9MDCyJXSLP1xBsRvFStHfzfbEzf%2F91ksl2yVmggJj6RA87sJOE%2FbGpYHWeK%2FnXce1397sNGJvQTCxfr4L3Q4estkcKmkhMb7KdCqeGOMFDFAEaWgzhKaulIuAlsIY5KlOMRQIWa1hgHBjSJEm%2Bn9glcuCl6t20gRuYOQF&X-Amz-Signature=a78f0722b831ef817f9e24c6b1d6352f46abb15e655fe6fad43db46cb3c3a597&X-Amz-SignedHeaders=host&x-id=GetObject)

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
