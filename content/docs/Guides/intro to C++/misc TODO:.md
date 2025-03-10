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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGRJVJJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIACxzKXf%2FP5ftz6mwzpwyybfQ5WvnnddSBCPwnsps3GNAiBfjbpZvvBeF9mDTI2Zne%2Fa6Vxd7hQyRku7pwxgnMx1ZiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2B%2FuvR4WmS31Yx6RKtwDhz4dF3GFgTSi%2FqPIgtD4MR0CuU03EfCR2ZLZP36fC1IdUtTs8MhiFOsUeNaL8sXIuvbgJX2gO6M9m%2FWgDC5dU7zgx1xIml1Qy4qvt1CQhnCTosM8goC%2BKAtwflc3mAwLnUaa1EcROdsow5Hd75h%2FqJkJQCvVEuK2%2B3jvCUhFSte3npyAs9qpN7c2GBxPjCCBa4CI5GlvvuEy2FiGulKIxcTuzgYk6iynno5NPsh6oSZ8eHZRe01dVbx3LgOMGPtTILLVhR6JfVVdx4dFBmjhOivEaG0i8K%2FCeX14C4HbR8pqikwH9MmDric0EB0w3cKMbniqlp1tarpclmKDFcbAGWhyeIjM0zOXcRf%2BOM9CVgAB%2FwtF8qoHW4Tu7Ywib%2FA6h%2FX02S%2FL4dIWJG4vH4%2BUVfl8pOSORfY01XsXM1MLmxEMykrBRTL0LjZAyYxSrCfLJrSKiMxEGnNcMtwPcYJO2XehU9gaUDi3x8BYEjbm%2B7iFKiop6g3si5vS9BWo%2BMzf0IpOdSoakFFl8HCdsgNl%2BNA4dS7hCXeW8sC04Jsisoh4JvHB%2FIx67L3RQxUoz%2FUlVlzgTzTNWVo7hA51qxFYii76GOz3%2BM%2FocJNG5cZPjK2wHvNppPGFMBiYrYowrIu8vgY6pgFmBAxpVDKkZmL98NnoLHkbNxY7um93WkdYQqUwQOwyrc%2BU26r2IqqRT7DlYUI2FkdURGH1ZkuqW90sII0BXF6WIst0hyV29G%2Bk%2BOUVQEb1BEtO1Sk9D66dog9xMbaGmkFcV%2FwsStv%2FQ8t%2FBShmEutXS%2Bre3f%2Ftjx4CsqeTM3DHpBlR2KFhV5av1JIqraMw%2FYr%2BmI30jNnVfrW2TKZfusXaRakD0hwV&X-Amz-Signature=d02c1a7d07c721622bfe21f71a2bd20f24ccad3ee77cec0cebbb063f07276538&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGRJVJJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIACxzKXf%2FP5ftz6mwzpwyybfQ5WvnnddSBCPwnsps3GNAiBfjbpZvvBeF9mDTI2Zne%2Fa6Vxd7hQyRku7pwxgnMx1ZiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2B%2FuvR4WmS31Yx6RKtwDhz4dF3GFgTSi%2FqPIgtD4MR0CuU03EfCR2ZLZP36fC1IdUtTs8MhiFOsUeNaL8sXIuvbgJX2gO6M9m%2FWgDC5dU7zgx1xIml1Qy4qvt1CQhnCTosM8goC%2BKAtwflc3mAwLnUaa1EcROdsow5Hd75h%2FqJkJQCvVEuK2%2B3jvCUhFSte3npyAs9qpN7c2GBxPjCCBa4CI5GlvvuEy2FiGulKIxcTuzgYk6iynno5NPsh6oSZ8eHZRe01dVbx3LgOMGPtTILLVhR6JfVVdx4dFBmjhOivEaG0i8K%2FCeX14C4HbR8pqikwH9MmDric0EB0w3cKMbniqlp1tarpclmKDFcbAGWhyeIjM0zOXcRf%2BOM9CVgAB%2FwtF8qoHW4Tu7Ywib%2FA6h%2FX02S%2FL4dIWJG4vH4%2BUVfl8pOSORfY01XsXM1MLmxEMykrBRTL0LjZAyYxSrCfLJrSKiMxEGnNcMtwPcYJO2XehU9gaUDi3x8BYEjbm%2B7iFKiop6g3si5vS9BWo%2BMzf0IpOdSoakFFl8HCdsgNl%2BNA4dS7hCXeW8sC04Jsisoh4JvHB%2FIx67L3RQxUoz%2FUlVlzgTzTNWVo7hA51qxFYii76GOz3%2BM%2FocJNG5cZPjK2wHvNppPGFMBiYrYowrIu8vgY6pgFmBAxpVDKkZmL98NnoLHkbNxY7um93WkdYQqUwQOwyrc%2BU26r2IqqRT7DlYUI2FkdURGH1ZkuqW90sII0BXF6WIst0hyV29G%2Bk%2BOUVQEb1BEtO1Sk9D66dog9xMbaGmkFcV%2FwsStv%2FQ8t%2FBShmEutXS%2Bre3f%2Ftjx4CsqeTM3DHpBlR2KFhV5av1JIqraMw%2FYr%2BmI30jNnVfrW2TKZfusXaRakD0hwV&X-Amz-Signature=e3117d30f5ac62a30d42396cdaf90ea88b73c33e2fe0dd37877d58bb242a06d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
