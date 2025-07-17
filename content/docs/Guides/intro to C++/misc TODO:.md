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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYPT2F3B%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBEPJtcZpQEDAumdihH6HjFhd8PaflHDKt9HX42IwVqwAiEAh6oynK3TZI%2Bi4f1wlRB%2FeVRPFt9PdVWzaaRyA7xfzZoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAgfrJlcM12QiG0ZiSrcA8Cd0pyah6%2FcYXawAx%2Fay8p6o8vpw2QpXavA%2BiRnb1QNoybr4S1%2BfL%2BFSdMEQmtb%2FUu6GHtVxssTvq9HCyP2lcv%2BxHCed6%2FMTSIZ4V9sNhOaUtkTX3DA8py1M15sd%2FJB39RCrCzcSNNDtF7Q2ARdAmkV%2BJtR1SGMaOQklCvl21WVyJLqVCOcyoIHAu4dtWqnZxm%2BxOmI12%2F86Yjuj9Whw8jnctesqjw82KMPN04u6Ts0nLxNC3MOY3%2BRM%2Bab1Bn1X69dFi9p4c8QJuz1hFezDSeOcK945OQ6C3b49m3GpGK9CwxDWH4rJ6jYxaxDX42KUeofWK6V5cnRZlMLvK3dD1UfYh8zutUj9TiwpbfnXiQ1gnr%2Fb0zktmNE%2FXF0vMdA7A1DQZazJOYoMhveIkveQ%2B0GDQbGNwQ2Cp%2F1AWUtPr%2FCpPlL822Sp483P9X289BhEXvbMk781B7xDoRSpCAUE4B2V65r5u9Bux5I9A78n0oxQhSjd9d3gNXMxq5Sc%2BLaBo6HteCELwRd%2BLE0pZTuSIhCSqF6DobSEsI%2FmtKpKn8tvIBtwhEDdwK4A7WapP27BJ9KkvupWXepr8QPM4%2Ba5hP3QN5Bi5zE8E9tMEmURqgMtcBVcjEz%2FDkE1ehSMJzu4cMGOqUBZdN6jNDWrRzdhjvF6VLJrpRAOv5ZpPwfvEq759wV1sqo5ulAgPApLYgjbbU3KAcShMIgUXI5l3IRjPZHLZSakPus4GZmrKb7b9kZLiBFMfQDK3utyZYfJcbgcArnLUPAsMUQhf2uaht9QpsT2qBRXhVBD1lZoBDgBSygSAuAkzVjB4lUXkRBHtMjtEoFSf9O8HvJDcufSj94IVZcZIjGqyPk1DlD&X-Amz-Signature=1fa61a5f1cf4a2e7f1964fe091df3025368ba2ffccc108198ccf5576ec8c2da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYPT2F3B%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBEPJtcZpQEDAumdihH6HjFhd8PaflHDKt9HX42IwVqwAiEAh6oynK3TZI%2Bi4f1wlRB%2FeVRPFt9PdVWzaaRyA7xfzZoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAgfrJlcM12QiG0ZiSrcA8Cd0pyah6%2FcYXawAx%2Fay8p6o8vpw2QpXavA%2BiRnb1QNoybr4S1%2BfL%2BFSdMEQmtb%2FUu6GHtVxssTvq9HCyP2lcv%2BxHCed6%2FMTSIZ4V9sNhOaUtkTX3DA8py1M15sd%2FJB39RCrCzcSNNDtF7Q2ARdAmkV%2BJtR1SGMaOQklCvl21WVyJLqVCOcyoIHAu4dtWqnZxm%2BxOmI12%2F86Yjuj9Whw8jnctesqjw82KMPN04u6Ts0nLxNC3MOY3%2BRM%2Bab1Bn1X69dFi9p4c8QJuz1hFezDSeOcK945OQ6C3b49m3GpGK9CwxDWH4rJ6jYxaxDX42KUeofWK6V5cnRZlMLvK3dD1UfYh8zutUj9TiwpbfnXiQ1gnr%2Fb0zktmNE%2FXF0vMdA7A1DQZazJOYoMhveIkveQ%2B0GDQbGNwQ2Cp%2F1AWUtPr%2FCpPlL822Sp483P9X289BhEXvbMk781B7xDoRSpCAUE4B2V65r5u9Bux5I9A78n0oxQhSjd9d3gNXMxq5Sc%2BLaBo6HteCELwRd%2BLE0pZTuSIhCSqF6DobSEsI%2FmtKpKn8tvIBtwhEDdwK4A7WapP27BJ9KkvupWXepr8QPM4%2Ba5hP3QN5Bi5zE8E9tMEmURqgMtcBVcjEz%2FDkE1ehSMJzu4cMGOqUBZdN6jNDWrRzdhjvF6VLJrpRAOv5ZpPwfvEq759wV1sqo5ulAgPApLYgjbbU3KAcShMIgUXI5l3IRjPZHLZSakPus4GZmrKb7b9kZLiBFMfQDK3utyZYfJcbgcArnLUPAsMUQhf2uaht9QpsT2qBRXhVBD1lZoBDgBSygSAuAkzVjB4lUXkRBHtMjtEoFSf9O8HvJDcufSj94IVZcZIjGqyPk1DlD&X-Amz-Signature=8c174c0089b954bc97ea8856c293cde164dcbd98a7999118c55498e71ec5d220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
