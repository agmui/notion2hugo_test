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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4A52HG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCntUYGNgix8njxqSzt%2BtmF8bQoIGTg8BfrVS%2Br0y3XAwIgeIW2KMAibl7gwAC%2FfoAnKpbieRTPexnaYOgDB%2FpXyAwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlMVWb6aIzihrMSfyrcA%2FBNSIadoD70jnxMo1%2BuzHxsShf67RMHIvwbdG4PJvLGWxJfnvDMdqaSLhj%2FyCCdU2z49qIjXNTL6lJy56jzBDptbqj8PRK3W3X%2B7xjCTRhL2ERd7eYMfvWXkRAI%2Fs1bksFFv%2BLmOHJyB3dwjUV4Atyx591wc0JULl%2BVtS9nVBOxDpDLDi2JVjzv4Kg1J7qBCmGWAInzuRY1y1%2BLoLdKHRA%2BnY8kIX8gDna%2BCstxAJGKpd%2Flc1LEiJA8oiYTOCmVpJl1bJmGqeAGM8CpY9YY5U%2FhSm8vlAC5DtOHOX78QSkHwBwdGRixVDVGaz6h7Dks7irH6ddN%2F2GiXlL%2BmDDqPPI1NXZO3%2BVlmcNojoG7CBrmEafnF8fIvPYNkbhEizrsPrl6d1mdiVYrRLNPaVNfMcOu04DcvfWDhFdIehORySV7sp9Gep0VcCH1VAdeMFnJVd%2BazZEYA6TnivXpl1vQaEsXJAYY2wcq7bjUo3VC6TuYDA4jaMFlvciz0oNytMxIXpoH76ltsS%2Bb0%2B1baElafCxuFpLM%2BXmyis%2FPIQMGJ1qWl0rVs%2FfldcJ1%2FdJAw2fAM8qQG6SgKM28RBrkA1xCqaQcaaKXfvTa04QBVpW347poWfmxDoeJipVLYo3IMP3%2B0L0GOqUBO9jbwuU44yIegSwUq3MrtM%2BSrXW0iDVg7VURVg9dkl3oloJADhEZKur9iF0AaQjvhYuLvwiJXCorc9zv%2BLFh6yWGT%2FycNcCXI3amQ2MO%2FTe%2FfA%2Bq1yGtIwnxZQO3WdQ8BD2Pub9cTlWgK00JDCwDTqGaXHTRH3ZFV03R%2FWEilDu009TWayn8rJyH5VQYmvmX1LSvbwUuH%2FUGHlgnL7lDpNPxDqmD&X-Amz-Signature=2924cc5911130780ed04450e37fc2961ab43b30cbb615b6aff710c78334c0ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4A52HG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCntUYGNgix8njxqSzt%2BtmF8bQoIGTg8BfrVS%2Br0y3XAwIgeIW2KMAibl7gwAC%2FfoAnKpbieRTPexnaYOgDB%2FpXyAwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlMVWb6aIzihrMSfyrcA%2FBNSIadoD70jnxMo1%2BuzHxsShf67RMHIvwbdG4PJvLGWxJfnvDMdqaSLhj%2FyCCdU2z49qIjXNTL6lJy56jzBDptbqj8PRK3W3X%2B7xjCTRhL2ERd7eYMfvWXkRAI%2Fs1bksFFv%2BLmOHJyB3dwjUV4Atyx591wc0JULl%2BVtS9nVBOxDpDLDi2JVjzv4Kg1J7qBCmGWAInzuRY1y1%2BLoLdKHRA%2BnY8kIX8gDna%2BCstxAJGKpd%2Flc1LEiJA8oiYTOCmVpJl1bJmGqeAGM8CpY9YY5U%2FhSm8vlAC5DtOHOX78QSkHwBwdGRixVDVGaz6h7Dks7irH6ddN%2F2GiXlL%2BmDDqPPI1NXZO3%2BVlmcNojoG7CBrmEafnF8fIvPYNkbhEizrsPrl6d1mdiVYrRLNPaVNfMcOu04DcvfWDhFdIehORySV7sp9Gep0VcCH1VAdeMFnJVd%2BazZEYA6TnivXpl1vQaEsXJAYY2wcq7bjUo3VC6TuYDA4jaMFlvciz0oNytMxIXpoH76ltsS%2Bb0%2B1baElafCxuFpLM%2BXmyis%2FPIQMGJ1qWl0rVs%2FfldcJ1%2FdJAw2fAM8qQG6SgKM28RBrkA1xCqaQcaaKXfvTa04QBVpW347poWfmxDoeJipVLYo3IMP3%2B0L0GOqUBO9jbwuU44yIegSwUq3MrtM%2BSrXW0iDVg7VURVg9dkl3oloJADhEZKur9iF0AaQjvhYuLvwiJXCorc9zv%2BLFh6yWGT%2FycNcCXI3amQ2MO%2FTe%2FfA%2Bq1yGtIwnxZQO3WdQ8BD2Pub9cTlWgK00JDCwDTqGaXHTRH3ZFV03R%2FWEilDu009TWayn8rJyH5VQYmvmX1LSvbwUuH%2FUGHlgnL7lDpNPxDqmD&X-Amz-Signature=8321ca4c52aafe85e09bb65d849dffe56869e3b918eaf6b144e5cb0997e2a08d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
