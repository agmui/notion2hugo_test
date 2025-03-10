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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWEN7FJV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD5djcDeQQkJo13RUZ%2BM0TZMh7FtzMRnVwQZ1uNJIjA2wIgQlluKby5gocIB%2BN%2FEWnFmjanaqDf17BfNTNpUbK1QBEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaM4KiiGcgsaOKOUSrcA9bExHkwZzG5fPYeJN6PozljztXN7t43b5p1RmYLuAHwdSOAGVuFo5B2tavYm%2By7ap7P2qP5463O%2BJIZKLo0iQ0aq7bkDpW%2BNLdeuron5aCct55PeTVI9Ij9rR2Q%2F0KZwCDmxNPlNNJ7%2BARWNdKIvOiR%2FkEHA7XY7IEaCRBF31Egk6pj99dB3JHpYNiFgzQF2KKPKYNpUPjcm8hOsi%2FUFVS891aS5nZbKbKGVLbbbUEV2S5rIhtN3V2bt95f1rAMuK%2FzCGutZF%2FkBrVdnZJEuamjTrbkbkkDwtRMbzwydkIG%2Fnp6QT8RoEJeZ732nWp6Anx%2B0GHU7uTL%2BBpTVf53Ks5VuQtjGWusMd9hTFj6MLImjPez2QwPIUY%2FwEKyx%2FCcWZ74AN80HgkMSKRGSTkXZKlf%2FLO08zVGpzeJUVw%2BK%2B9hhhaUCadxHDYYUeyI1w%2FSPythcJXuWHIFpNovDCc4JMcgvpBXhR3C2QfASMwBGJqLvRvkKOS8bNx2Ce30A3sM2TbAeK3T%2FHZDRf1KZPjlugg%2F5eWVb4%2BVCSQSQQ70xfqc3S3JqdFiWQF4GfhxeVxZbDN1T0KcnzuSVj%2FuDggwD5vBdRr81yHqv8w%2FiL4CRezsizmPP6pDQKY0trePMPervb4GOqUBXAypdlN2wAEKmAaKfrdYrlMoBXatb1AzigTA6UZSw6CKGVle9FskdIF0Q1kpSNKKTRA%2FbQuscIjIvWNxrOFHlcqEuHtXbZW3%2BzPsafX9E%2FcEYvDn8YRAXeIvV1UK1qLgyZ3ZCs8oR3si5quQ9HG1oHhaowr8fTRXAw80UKvzSiKwKLgweqNnYBGOWB7CR%2BPVpuRUt7r5pvwwGKZWO8S0Jr5FzoxJ&X-Amz-Signature=55ef0679f4c367dc8ffcbdacb1f077166faf4ef7fb7de1267a87be1000cae445&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWEN7FJV%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQD5djcDeQQkJo13RUZ%2BM0TZMh7FtzMRnVwQZ1uNJIjA2wIgQlluKby5gocIB%2BN%2FEWnFmjanaqDf17BfNTNpUbK1QBEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaM4KiiGcgsaOKOUSrcA9bExHkwZzG5fPYeJN6PozljztXN7t43b5p1RmYLuAHwdSOAGVuFo5B2tavYm%2By7ap7P2qP5463O%2BJIZKLo0iQ0aq7bkDpW%2BNLdeuron5aCct55PeTVI9Ij9rR2Q%2F0KZwCDmxNPlNNJ7%2BARWNdKIvOiR%2FkEHA7XY7IEaCRBF31Egk6pj99dB3JHpYNiFgzQF2KKPKYNpUPjcm8hOsi%2FUFVS891aS5nZbKbKGVLbbbUEV2S5rIhtN3V2bt95f1rAMuK%2FzCGutZF%2FkBrVdnZJEuamjTrbkbkkDwtRMbzwydkIG%2Fnp6QT8RoEJeZ732nWp6Anx%2B0GHU7uTL%2BBpTVf53Ks5VuQtjGWusMd9hTFj6MLImjPez2QwPIUY%2FwEKyx%2FCcWZ74AN80HgkMSKRGSTkXZKlf%2FLO08zVGpzeJUVw%2BK%2B9hhhaUCadxHDYYUeyI1w%2FSPythcJXuWHIFpNovDCc4JMcgvpBXhR3C2QfASMwBGJqLvRvkKOS8bNx2Ce30A3sM2TbAeK3T%2FHZDRf1KZPjlugg%2F5eWVb4%2BVCSQSQQ70xfqc3S3JqdFiWQF4GfhxeVxZbDN1T0KcnzuSVj%2FuDggwD5vBdRr81yHqv8w%2FiL4CRezsizmPP6pDQKY0trePMPervb4GOqUBXAypdlN2wAEKmAaKfrdYrlMoBXatb1AzigTA6UZSw6CKGVle9FskdIF0Q1kpSNKKTRA%2FbQuscIjIvWNxrOFHlcqEuHtXbZW3%2BzPsafX9E%2FcEYvDn8YRAXeIvV1UK1qLgyZ3ZCs8oR3si5quQ9HG1oHhaowr8fTRXAw80UKvzSiKwKLgweqNnYBGOWB7CR%2BPVpuRUt7r5pvwwGKZWO8S0Jr5FzoxJ&X-Amz-Signature=64dbaca4bba8e083cb7403bbb7bbdbf318447949864f887b8a5fe41e17afe3c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
