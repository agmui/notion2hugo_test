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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVIVW45X%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKizfidTDlYTLAPV6n471Juma28cIDfQFHNjwUTqDdXwIhAJ4mHl%2B0yPT2P9DYU6wf%2B7sPlbCvfdhyDZ3YhACxg5OTKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4qbgCQDIQckQP6RMq3ANY4Jj1d4Lzq7%2BD0wOfpbi%2BULjo1hdlr0WYFXHBzDGZSI327Rb68Wcuc8wvIQHg2%2BSQYUQILf4MWntFwPG4ahntwJzoDEFdo6OnxIpfm%2FZ2dwiZtQE0t%2BFZvnynQrMMXb%2BtjNEOHEVHOVmwbTKATZwo2MbldWqHCcMEgVPNHPej44ERCCfJKVxkDtqoBonQl%2FzIfIN%2BC6iCkKsSiYMDBMmW19DMfual%2FDcuZEaPfgGx0%2BQtnw6mFg%2BTNDV1D9rUuECZ1pAtrnLs5lQkeI0c9%2BeSsysShSMMiW8WeB1int6CWVNq%2BuuKHGy8LOkApPE3mF2dpuiUGXHFdgA4C4xDGuxGPiLceinKyHcV35VCorkjdc03Ixiu5elVG%2FM7zK%2Bir9gMZpfo4rpdjuTkziVZcjjzbicCF%2B7o88kqFa8oFoXoHjWdF4K1zjMwr2ka%2F4HRrUul%2FtuUsWbzsYs%2FdgjKEoUZ2O0QYNxxtszJO%2FjzsX3AXzHiiT7u1UErLisfnDFShQFp9iQbQg%2F9o7Q6tZZLQyoNxj4wG1jIBvjocScn1Y9o2wn%2Fz15I6bnF5cY948jbxsW62OPv5AKfuvu5%2F4awU3lxdmQ9vvRmKuQLbTYPw%2FhFyOHJWQJrJ%2FvZZJkXtTCG1efBBjqkAcUna79sFnCzV%2B0Acc%2FaS5sOYxC%2BGawJAODOBVpHYpFN2GNQQMKq5vbzUBxzT5YL%2B8tVYpY9eLbH5EiyubXGtjCy%2BjGvGyTcpXMV8Nm%2BVYRPLLnulTs%2Fq1N7W9xdT48pGTpxhW63DDBW18XrnkiTZGVRwidudG%2FBsFKmjNKYSJ1SkQLpPiEuDyFaKCiYyPGNgdaW6YLgbkKEUiwJyphOtWyLBkku&X-Amz-Signature=ded7b57a322bd0aecbeac711886128ed6c3969095f4563f85607a2e0429b83f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVIVW45X%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKizfidTDlYTLAPV6n471Juma28cIDfQFHNjwUTqDdXwIhAJ4mHl%2B0yPT2P9DYU6wf%2B7sPlbCvfdhyDZ3YhACxg5OTKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4qbgCQDIQckQP6RMq3ANY4Jj1d4Lzq7%2BD0wOfpbi%2BULjo1hdlr0WYFXHBzDGZSI327Rb68Wcuc8wvIQHg2%2BSQYUQILf4MWntFwPG4ahntwJzoDEFdo6OnxIpfm%2FZ2dwiZtQE0t%2BFZvnynQrMMXb%2BtjNEOHEVHOVmwbTKATZwo2MbldWqHCcMEgVPNHPej44ERCCfJKVxkDtqoBonQl%2FzIfIN%2BC6iCkKsSiYMDBMmW19DMfual%2FDcuZEaPfgGx0%2BQtnw6mFg%2BTNDV1D9rUuECZ1pAtrnLs5lQkeI0c9%2BeSsysShSMMiW8WeB1int6CWVNq%2BuuKHGy8LOkApPE3mF2dpuiUGXHFdgA4C4xDGuxGPiLceinKyHcV35VCorkjdc03Ixiu5elVG%2FM7zK%2Bir9gMZpfo4rpdjuTkziVZcjjzbicCF%2B7o88kqFa8oFoXoHjWdF4K1zjMwr2ka%2F4HRrUul%2FtuUsWbzsYs%2FdgjKEoUZ2O0QYNxxtszJO%2FjzsX3AXzHiiT7u1UErLisfnDFShQFp9iQbQg%2F9o7Q6tZZLQyoNxj4wG1jIBvjocScn1Y9o2wn%2Fz15I6bnF5cY948jbxsW62OPv5AKfuvu5%2F4awU3lxdmQ9vvRmKuQLbTYPw%2FhFyOHJWQJrJ%2FvZZJkXtTCG1efBBjqkAcUna79sFnCzV%2B0Acc%2FaS5sOYxC%2BGawJAODOBVpHYpFN2GNQQMKq5vbzUBxzT5YL%2B8tVYpY9eLbH5EiyubXGtjCy%2BjGvGyTcpXMV8Nm%2BVYRPLLnulTs%2Fq1N7W9xdT48pGTpxhW63DDBW18XrnkiTZGVRwidudG%2FBsFKmjNKYSJ1SkQLpPiEuDyFaKCiYyPGNgdaW6YLgbkKEUiwJyphOtWyLBkku&X-Amz-Signature=8ecf790a104c436b2cd7db52f3c9a3ba3f6be8a50655eb15e54e24760e070136&X-Amz-SignedHeaders=host&x-id=GetObject)

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
