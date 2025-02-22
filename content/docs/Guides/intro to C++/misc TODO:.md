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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2SCQSZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOmLeNEyLhvwRZyqcjt0QYjcGGETUQ8dd86LXPyiNGkAIgdOFmykBm8y2q2BojQMW3QbpjHEbmb4dz48L92CLiXa8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhIF452ZYp%2FFutOPCrcA3JVZ9Cn3EW0kMZCk9GWkl4VmkXE%2BBDaa1yqWTvTmNh%2BHMYwCiqLb0qOhs%2F%2FJcCX3mjd36t7WZDrnFNCDP8S0IZ5eX8ZYt35hkhORzTdux9C9InifkutnETqCnC1%2FzWh5JQ3PMrawRlqvZhRhOyHASOmDZUWKfhBzDzofDeZKlcxQNnlBx6O3GkHhR08mAqVqnGzm9xbM2ZmHwn4sTJtghwQ7yIIYQZ2GTaHqtpP6CRpjabXkPIeU5OyWr%2FI36QUdH9vFVO07BdQb05bmsZBPWxzblNaIus55qG6nEaZl%2FCzFgg6n4ih4gxR8Ru%2FiivD9IR9psquatlcjCJ8EM6sRBohTc8LA6vf07F30LdgxochfY0p%2FFn0%2Fs0pLlb6n1Ubmkp%2B5UODgA19aaYRaCfUJ9t%2B8NyeCTIk0hQauzWb00RIaGoiwdm4y4oP%2BH20fqh2aR000Uk5q%2FUhxjkTjicWyLrNqxDoJo5ZNv8NFpaYilmiVJe5sFWsXCQrKmH%2F%2FD4WT3hfmtn%2BlmQRiLEtG%2B9P63vwCU7XHhQI4m896oFuAwdcM7JUDn4%2B0Q3EeEXy2KsLfiPIYJTCgyDg%2FDE6JrsrqY6jB6SR8tGABrx%2FWMrkK4xPkQPQEMrC%2F4yJfBfVMKXP5L0GOqUB8OdnBI7B445yhmMbstthQmZFrsyl0qmbTj05kD%2BWoqu%2FOhuzeI2Z1Nn8PsQRJWl8iAalMaNQlTHtCOR2P3dl0q7dzl4MJTf7SBAbPmUCmG9yi27cqdzlMGtnz%2B4Eyf8u%2FUCf7%2BKsdG%2Fv2Ear5LZGkIGLdb1DJHxIVSrex9hJPvDfpJXqFtGMgOah85HxPhQof9OZsg1ReIMJTvYpDqbCXrAOv0gO&X-Amz-Signature=002cb988bddc8aa68ccea87e07012a8e141ce23bb501132c90f8381d8a4a81d3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2SCQSZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOmLeNEyLhvwRZyqcjt0QYjcGGETUQ8dd86LXPyiNGkAIgdOFmykBm8y2q2BojQMW3QbpjHEbmb4dz48L92CLiXa8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhIF452ZYp%2FFutOPCrcA3JVZ9Cn3EW0kMZCk9GWkl4VmkXE%2BBDaa1yqWTvTmNh%2BHMYwCiqLb0qOhs%2F%2FJcCX3mjd36t7WZDrnFNCDP8S0IZ5eX8ZYt35hkhORzTdux9C9InifkutnETqCnC1%2FzWh5JQ3PMrawRlqvZhRhOyHASOmDZUWKfhBzDzofDeZKlcxQNnlBx6O3GkHhR08mAqVqnGzm9xbM2ZmHwn4sTJtghwQ7yIIYQZ2GTaHqtpP6CRpjabXkPIeU5OyWr%2FI36QUdH9vFVO07BdQb05bmsZBPWxzblNaIus55qG6nEaZl%2FCzFgg6n4ih4gxR8Ru%2FiivD9IR9psquatlcjCJ8EM6sRBohTc8LA6vf07F30LdgxochfY0p%2FFn0%2Fs0pLlb6n1Ubmkp%2B5UODgA19aaYRaCfUJ9t%2B8NyeCTIk0hQauzWb00RIaGoiwdm4y4oP%2BH20fqh2aR000Uk5q%2FUhxjkTjicWyLrNqxDoJo5ZNv8NFpaYilmiVJe5sFWsXCQrKmH%2F%2FD4WT3hfmtn%2BlmQRiLEtG%2B9P63vwCU7XHhQI4m896oFuAwdcM7JUDn4%2B0Q3EeEXy2KsLfiPIYJTCgyDg%2FDE6JrsrqY6jB6SR8tGABrx%2FWMrkK4xPkQPQEMrC%2F4yJfBfVMKXP5L0GOqUB8OdnBI7B445yhmMbstthQmZFrsyl0qmbTj05kD%2BWoqu%2FOhuzeI2Z1Nn8PsQRJWl8iAalMaNQlTHtCOR2P3dl0q7dzl4MJTf7SBAbPmUCmG9yi27cqdzlMGtnz%2B4Eyf8u%2FUCf7%2BKsdG%2Fv2Ear5LZGkIGLdb1DJHxIVSrex9hJPvDfpJXqFtGMgOah85HxPhQof9OZsg1ReIMJTvYpDqbCXrAOv0gO&X-Amz-Signature=f9cce507af785c55c26f4c0b7624799018440b9ec16d939e42ee583bb624a43d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
