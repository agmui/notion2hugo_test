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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746UTM3K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEErzrLFFvbKDqqc7yHz9aGiKLWRdhjpuD7nM%2FiIJ3oRAiEArv647XlywWM7npVpj7feUMyIcpqtzPxhztoWIv%2B1BWQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdtRmkslhMpMq1u2yrcA%2BrugcOozdoi8gXZSckQ7eG6FcgDNhgT6XGHAojpA887As%2BslBzJUpDyigc4xWQ19NT5sFRW%2BkGyHZ3%2BK3tVt%2F%2BoXVZSaOlCTKD23%2F8NM3AyK824pdUZrAr%2FJFIjiaXsAoyhmOXCRoJVjtCUJATLEdSZX6vqccfHoj8slA%2FNVzsCSlFjVT0nIzlb9VmGuHIbSuXbApgg7blEbqnhSk9y1P0xa%2Fc6W153AGvrsO85p%2BTq5Hb6f3vEoBfJGSNlYFv%2BZBNZLGuSp2kFd9MBijQdM7k%2F2ianaoc8HwvPP4j8Eo2gYmTLXiBfhAToUZYkyLOBZn9R0EX%2FMj887GVJ2VrZyXplyGemXXrXPaLUyzaLD%2FTz6lv%2F3NG87h1VcDN%2FFslYMBSpf5NPp5rsQDM%2FC%2FVrf6Nxir3ICRXo1dk1RFsCmY6PquCildS89kk1rXXZkEZoxGfYGPeRqb9e8wzeOy42qs27evLxxm9uT2%2BCQCSLjYWvK098Wo0AFey6xpiWXbem0zGy20dvu1XhOZ9WqMOvEtFHcGoNjcJS2Fc2pG9rIxQAt3J31FzWPQntiyEJyA1H1CfJp9g9WI%2B3FIouhx47mLr2wqw3r4v6soU40HszOrd8%2BVQKNVt6nt55KKjOMOqB5L8GOqUBBfaNUBf6e6CK6KM6QIYBL1%2BzesRrH%2BRPXzg0NtI%2Bk9oQuSKYiZvMEMJwKok5JvnQHQwwslg1Iy78T8mFyBDi6jJCHUKWfIdC0MBqZXRoD3hiQ0Y0yNB50JJt9qD8rO7hpfns2b%2BZTlIFBgZTcX2jr9Oba2dUkDFY6uRQE5%2FwsTrhkK0UhopTyUGUP9ubpkLqksietn1xZwEUS2qskeq4ThnsHiaB&X-Amz-Signature=1de9b70d4f9a3a90ade5e61e0475cac768cd0be47b3dc77fe4053ecca5d5389e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746UTM3K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEErzrLFFvbKDqqc7yHz9aGiKLWRdhjpuD7nM%2FiIJ3oRAiEArv647XlywWM7npVpj7feUMyIcpqtzPxhztoWIv%2B1BWQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdtRmkslhMpMq1u2yrcA%2BrugcOozdoi8gXZSckQ7eG6FcgDNhgT6XGHAojpA887As%2BslBzJUpDyigc4xWQ19NT5sFRW%2BkGyHZ3%2BK3tVt%2F%2BoXVZSaOlCTKD23%2F8NM3AyK824pdUZrAr%2FJFIjiaXsAoyhmOXCRoJVjtCUJATLEdSZX6vqccfHoj8slA%2FNVzsCSlFjVT0nIzlb9VmGuHIbSuXbApgg7blEbqnhSk9y1P0xa%2Fc6W153AGvrsO85p%2BTq5Hb6f3vEoBfJGSNlYFv%2BZBNZLGuSp2kFd9MBijQdM7k%2F2ianaoc8HwvPP4j8Eo2gYmTLXiBfhAToUZYkyLOBZn9R0EX%2FMj887GVJ2VrZyXplyGemXXrXPaLUyzaLD%2FTz6lv%2F3NG87h1VcDN%2FFslYMBSpf5NPp5rsQDM%2FC%2FVrf6Nxir3ICRXo1dk1RFsCmY6PquCildS89kk1rXXZkEZoxGfYGPeRqb9e8wzeOy42qs27evLxxm9uT2%2BCQCSLjYWvK098Wo0AFey6xpiWXbem0zGy20dvu1XhOZ9WqMOvEtFHcGoNjcJS2Fc2pG9rIxQAt3J31FzWPQntiyEJyA1H1CfJp9g9WI%2B3FIouhx47mLr2wqw3r4v6soU40HszOrd8%2BVQKNVt6nt55KKjOMOqB5L8GOqUBBfaNUBf6e6CK6KM6QIYBL1%2BzesRrH%2BRPXzg0NtI%2Bk9oQuSKYiZvMEMJwKok5JvnQHQwwslg1Iy78T8mFyBDi6jJCHUKWfIdC0MBqZXRoD3hiQ0Y0yNB50JJt9qD8rO7hpfns2b%2BZTlIFBgZTcX2jr9Oba2dUkDFY6uRQE5%2FwsTrhkK0UhopTyUGUP9ubpkLqksietn1xZwEUS2qskeq4ThnsHiaB&X-Amz-Signature=9268f1b678edf2ba7006cc97a73cbd59ef1036ced1f9d75ea57c68117c434f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
