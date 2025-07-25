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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DP7HXKM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIA4o2Pj0HwBc6nkJ%2FjK%2FyaZiYFW3%2Bv59amSxMet7NzaFAiEAib%2Bv%2FyRHy3kBchbpXqnwIQUJXsGCkRVLo1cKs%2FNn4yoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNfyAm89ZDCcU2OLUSrcA9Hadznw5z1IevdNiddVyRHXqK1dvD6WjffPt3ypg3zISEVOS5z7b9H45oAxlOj5PnDKsHByPyZZ%2FKBrG6NueRbwEb1YCCvNU278i%2By73XQQAfLUjr1PmtVO6dLsetlRADdGLkx5HR%2BNBWVCF1VOTIU%2FEsHVHBSp%2FePZxkskMRlMx3jL4%2B%2FjVt9RM%2FeUYenviHpLZTfiOSUBFUvrnZYAzqmSo7x5FrHZ8%2F6swd%2BvgmgPwl7p1gYDxMu%2FTsLA7HxAnB6RIFsoB8Br0%2BWiC7QMPzrBaHbbP%2B9kdbsqnrG%2BOERW95fTh%2F0WI%2BXUfwQ%2FtiAiDD0zFaALYiIsogC1OXLnUTT7hX0YT5VJAJlLCNKuV%2FdXj2pq9mNbA9TWDB%2BL6ayl1ZxV99aWVaWjofD94na%2FuzDoCErQ6ra05tJvvvrp%2BZFTPwnlUJwZeWc%2Fj5jKblzXnJ2rcW8NvEep2kpi4nroml7Tg13Fpjo594xqpBSiP2gUgBgmp0gSUCOsKBA%2FAIkwukM7h6QQ74aIIWdteJ1PdTEm%2B3Gp1zxwfp6YOvhh32a5CG%2BOB0eNblpYjEYM0c4PCH0AJkMjYX2wQ8tlmKYlSPhi7YdHDAh9PdKJpaidRwYmtnQif%2Fm0juVwQZNZMIiHjsQGOqUBCLPcEmn7n7ErICI5nFstjiKUJorYQdb06XOJHScyon8xFqv%2BNG0lFNYwGImmiROYBXuqUjvm%2F50Za3qe2SEGXa2tKnOBsEvoYQoIylF4F6458snVHHkTOZxJyJ0fFByeepo3NNF7wBf561pvFm%2FPjk0j2QB1EYzWzxitwuOQdmfhAQvavmcI8pkMB6UPEfZlnwBIsS3VxarpraWGHDZ9r%2F%2FGADOu&X-Amz-Signature=122eb3a592d69e24ad285e0d52b4adfcc187ea5f2843ddbad6f363a7f14c28d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DP7HXKM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIA4o2Pj0HwBc6nkJ%2FjK%2FyaZiYFW3%2Bv59amSxMet7NzaFAiEAib%2Bv%2FyRHy3kBchbpXqnwIQUJXsGCkRVLo1cKs%2FNn4yoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNfyAm89ZDCcU2OLUSrcA9Hadznw5z1IevdNiddVyRHXqK1dvD6WjffPt3ypg3zISEVOS5z7b9H45oAxlOj5PnDKsHByPyZZ%2FKBrG6NueRbwEb1YCCvNU278i%2By73XQQAfLUjr1PmtVO6dLsetlRADdGLkx5HR%2BNBWVCF1VOTIU%2FEsHVHBSp%2FePZxkskMRlMx3jL4%2B%2FjVt9RM%2FeUYenviHpLZTfiOSUBFUvrnZYAzqmSo7x5FrHZ8%2F6swd%2BvgmgPwl7p1gYDxMu%2FTsLA7HxAnB6RIFsoB8Br0%2BWiC7QMPzrBaHbbP%2B9kdbsqnrG%2BOERW95fTh%2F0WI%2BXUfwQ%2FtiAiDD0zFaALYiIsogC1OXLnUTT7hX0YT5VJAJlLCNKuV%2FdXj2pq9mNbA9TWDB%2BL6ayl1ZxV99aWVaWjofD94na%2FuzDoCErQ6ra05tJvvvrp%2BZFTPwnlUJwZeWc%2Fj5jKblzXnJ2rcW8NvEep2kpi4nroml7Tg13Fpjo594xqpBSiP2gUgBgmp0gSUCOsKBA%2FAIkwukM7h6QQ74aIIWdteJ1PdTEm%2B3Gp1zxwfp6YOvhh32a5CG%2BOB0eNblpYjEYM0c4PCH0AJkMjYX2wQ8tlmKYlSPhi7YdHDAh9PdKJpaidRwYmtnQif%2Fm0juVwQZNZMIiHjsQGOqUBCLPcEmn7n7ErICI5nFstjiKUJorYQdb06XOJHScyon8xFqv%2BNG0lFNYwGImmiROYBXuqUjvm%2F50Za3qe2SEGXa2tKnOBsEvoYQoIylF4F6458snVHHkTOZxJyJ0fFByeepo3NNF7wBf561pvFm%2FPjk0j2QB1EYzWzxitwuOQdmfhAQvavmcI8pkMB6UPEfZlnwBIsS3VxarpraWGHDZ9r%2F%2FGADOu&X-Amz-Signature=577cc63025ceeac893d98a48204b46d3afdba3191dcc049e7c2e8873a79515a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
