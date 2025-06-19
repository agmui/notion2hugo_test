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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL3CJEX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmIvrZi7Fg828f9XbMOrO8v%2FAC6g1GgG6%2FsQu16p7NrAiBN5ZQKJN%2BHEopqF2euDG8oaRPSU%2B511argay0VMeKwcCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5dWhuLjm2jusFPnzKtwDow9%2F0AKgpsb7AAw2dpmHXHq2BA2ajMQ%2BDfIj1bmVcwVp7G4ogLWAtOScICu%2B3eoqfu2VW1HIb5gkNoaZAwEt2j0a0aOB1tmuOd8CC6C%2F0XPZhkClv4WBnqnpw4PqMaijXYtomZGFao7pFKvIzu1ocV0JcQdH5Ontr97wDnBsPnSPscql1%2Bw7vd%2FKN41x9eMPO8kDm2IXAE954b0ZQgwCstLt4o7%2FyDHO%2F75fsClOV9zZkWVoP4v2CNEd6kUHYq%2BsmISwWtPsB%2BNOh3lM5du0eWDKpZC4Q2FkWQ%2BlNI8QPC2GWWDJjoFqmpb9YOjlGyZlSEW7knQJ2v%2BAjE%2FDqZeu4voEumB%2FM5D%2Fa9IieS0Ta%2FJwUgpxIcMO8lRsar70nitjBwHDZJ%2FFvAOg%2BURR%2FeYG4%2FJHv%2FdDTMTMcCfMIUcSFQNzw%2BJCHZdHYdryeLe%2F7PgEq5ZzFPo7dPtn8XAilLJOGpSYOQxjKB74FARB64vMiQjVzMk13V2AGkOKpony8mM0uSD2j4v85OLzWkUxrSz5o9BYUmkK1v1xXFHE7m23gemONClUiFjy%2F2KI34i885EnMi5x7TS7IaKPHbnrW54hsJue7EKL%2F3xLqUG69b8Tq9Q1N2tWVQ%2BFKzamsiAwkbbRwgY6pgEsPIjhTJ0YC9u50tGQ5mgjKfBWp2%2BA5DGDJY3d3fcVvuxvNGVJ%2FwhNhhSAoU0zBYVFLBYeNt3volGYzZKyJo%2B79uevRpvjIAyLZ3IW3DnkJdl8wqrAfoQt682rSxPdfIpDBRbwk60dpfGHk%2F173YzbX%2FsjOeYfgfQQAyJX4DnPOlJgY%2FjGgkCmcsIRt%2B1Dcp9lpEgLyml5Ie%2B9%2FQjYVpe%2F5BhXR8%2BY&X-Amz-Signature=8fa208a85f8f33aecc1a8d568834e09ce93ca80e800c599e951da1d49f0b1be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOL3CJEX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmIvrZi7Fg828f9XbMOrO8v%2FAC6g1GgG6%2FsQu16p7NrAiBN5ZQKJN%2BHEopqF2euDG8oaRPSU%2B511argay0VMeKwcCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5dWhuLjm2jusFPnzKtwDow9%2F0AKgpsb7AAw2dpmHXHq2BA2ajMQ%2BDfIj1bmVcwVp7G4ogLWAtOScICu%2B3eoqfu2VW1HIb5gkNoaZAwEt2j0a0aOB1tmuOd8CC6C%2F0XPZhkClv4WBnqnpw4PqMaijXYtomZGFao7pFKvIzu1ocV0JcQdH5Ontr97wDnBsPnSPscql1%2Bw7vd%2FKN41x9eMPO8kDm2IXAE954b0ZQgwCstLt4o7%2FyDHO%2F75fsClOV9zZkWVoP4v2CNEd6kUHYq%2BsmISwWtPsB%2BNOh3lM5du0eWDKpZC4Q2FkWQ%2BlNI8QPC2GWWDJjoFqmpb9YOjlGyZlSEW7knQJ2v%2BAjE%2FDqZeu4voEumB%2FM5D%2Fa9IieS0Ta%2FJwUgpxIcMO8lRsar70nitjBwHDZJ%2FFvAOg%2BURR%2FeYG4%2FJHv%2FdDTMTMcCfMIUcSFQNzw%2BJCHZdHYdryeLe%2F7PgEq5ZzFPo7dPtn8XAilLJOGpSYOQxjKB74FARB64vMiQjVzMk13V2AGkOKpony8mM0uSD2j4v85OLzWkUxrSz5o9BYUmkK1v1xXFHE7m23gemONClUiFjy%2F2KI34i885EnMi5x7TS7IaKPHbnrW54hsJue7EKL%2F3xLqUG69b8Tq9Q1N2tWVQ%2BFKzamsiAwkbbRwgY6pgEsPIjhTJ0YC9u50tGQ5mgjKfBWp2%2BA5DGDJY3d3fcVvuxvNGVJ%2FwhNhhSAoU0zBYVFLBYeNt3volGYzZKyJo%2B79uevRpvjIAyLZ3IW3DnkJdl8wqrAfoQt682rSxPdfIpDBRbwk60dpfGHk%2F173YzbX%2FsjOeYfgfQQAyJX4DnPOlJgY%2FjGgkCmcsIRt%2B1Dcp9lpEgLyml5Ie%2B9%2FQjYVpe%2F5BhXR8%2BY&X-Amz-Signature=b1531d0d13fe2bf5222586657ab4bcd2dd34e6e8c0e6e7611c104d6b76263592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
