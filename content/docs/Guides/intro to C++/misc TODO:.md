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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GWGW5Z%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzpofyB3G%2FyxlLatwf096vwTvTvWWSn1lja4DUCIXl0AiEAguTlpwNljdFboG8ZwmCtRVE4XK9GoLUdTUvIJbraocIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDIpCHJI4%2Fnux42D%2FTyrcA5dQFiSUZbcboISrlLgJphUYEoBH5ASb4nzncaFmWmiNuBxP4X%2FfumYtO9MZ1G%2BU%2F0%2B%2BGlaEKZ6ac1lHpTiyUw0XwqcMOgGth3lGKk9hOxajGNRcynPEuA%2FtA512RBk0%2BTKPqNzyHStgXuRowQYFNUSLbndFvM4a97Oc%2FLpTKXqaAAo3UmiJP%2FlUo%2FWEWxIP97uf2r9SFUON8d56in6M%2FYjZp9m6PyFwHeV8vmKyJSoT9Fopmlw9ErGBLF28WrzkFFrZgqwHkdmYA2dLE9rMym8TJAlKd1JnG45jZu9Vr6J%2B9hYnQN%2B%2BU4xVtSuH2vdDTvyk9ONJAysa2c342C30Mdli3Gl9N%2F%2FL2ozw653yKdcIBd%2FdkJYtj6LEH73r3YnUwUxg9m3F4T88WnPGqiFgkZr3%2B4TtbqMS1qfhgonYVNSnWsErsQsivRvDNtbx7RKpPvdWm%2BNlSpq9M32Y09Qh30aV%2BNEmYqI%2FgwGbB%2BrKmWXKNh9k8jAT74gdHn8noGVsQHzYCMFt8PRQhnc41ZCMsabOBSkLbUairoVo8BAxKYI7%2BKlYuK5Ii%2BrZbARn7IVIPPe7P6MLnV8Aaxwpj7UZdL6Yqa1VSd1No1HfC6tX28iFw38cw72J%2BcgyoQWFMKLXpMEGOqUBtTfFuK8KT9s5sXr0Awn41lAelUIwrhERqhrRs7DdIJ%2F0MjVk5jIkLVRwQddF0FA8SpMYkVz3yryQRORUEek946f77UvihEhIc6G2%2FX5wyrGx%2BfXDB%2FQ%2FAvHz1a22hn%2FmcFhpVKj7T7KsJKMXE2Fkhl5bn3LUEQ4P1sqMY6iLtt40zjrKUNoWFxCyuRFzjctNraE5YGKnABfxbbZZtxTOgUNXHTLn&X-Amz-Signature=eb070134f66c0134d66675f13237e68e2da69a7ce89461cfd3e930502739c3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GWGW5Z%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzpofyB3G%2FyxlLatwf096vwTvTvWWSn1lja4DUCIXl0AiEAguTlpwNljdFboG8ZwmCtRVE4XK9GoLUdTUvIJbraocIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDIpCHJI4%2Fnux42D%2FTyrcA5dQFiSUZbcboISrlLgJphUYEoBH5ASb4nzncaFmWmiNuBxP4X%2FfumYtO9MZ1G%2BU%2F0%2B%2BGlaEKZ6ac1lHpTiyUw0XwqcMOgGth3lGKk9hOxajGNRcynPEuA%2FtA512RBk0%2BTKPqNzyHStgXuRowQYFNUSLbndFvM4a97Oc%2FLpTKXqaAAo3UmiJP%2FlUo%2FWEWxIP97uf2r9SFUON8d56in6M%2FYjZp9m6PyFwHeV8vmKyJSoT9Fopmlw9ErGBLF28WrzkFFrZgqwHkdmYA2dLE9rMym8TJAlKd1JnG45jZu9Vr6J%2B9hYnQN%2B%2BU4xVtSuH2vdDTvyk9ONJAysa2c342C30Mdli3Gl9N%2F%2FL2ozw653yKdcIBd%2FdkJYtj6LEH73r3YnUwUxg9m3F4T88WnPGqiFgkZr3%2B4TtbqMS1qfhgonYVNSnWsErsQsivRvDNtbx7RKpPvdWm%2BNlSpq9M32Y09Qh30aV%2BNEmYqI%2FgwGbB%2BrKmWXKNh9k8jAT74gdHn8noGVsQHzYCMFt8PRQhnc41ZCMsabOBSkLbUairoVo8BAxKYI7%2BKlYuK5Ii%2BrZbARn7IVIPPe7P6MLnV8Aaxwpj7UZdL6Yqa1VSd1No1HfC6tX28iFw38cw72J%2BcgyoQWFMKLXpMEGOqUBtTfFuK8KT9s5sXr0Awn41lAelUIwrhERqhrRs7DdIJ%2F0MjVk5jIkLVRwQddF0FA8SpMYkVz3yryQRORUEek946f77UvihEhIc6G2%2FX5wyrGx%2BfXDB%2FQ%2FAvHz1a22hn%2FmcFhpVKj7T7KsJKMXE2Fkhl5bn3LUEQ4P1sqMY6iLtt40zjrKUNoWFxCyuRFzjctNraE5YGKnABfxbbZZtxTOgUNXHTLn&X-Amz-Signature=7ee723d7247fa4195016e9416db09d9ab1e1c8f70fabeb1ab5f88263dfcec471&X-Amz-SignedHeaders=host&x-id=GetObject)

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
