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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRSWUHT%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCkESGpXe3jRu1G%2BxEgCQRW5DusNouiCG38VyEIRBE1SwIgXeWKvr6PTKtOIRpV06OTUKoOPgmFQ8e%2F2ancS%2FNSOPUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXgctMxAqdOH5kabyrcAzW5k8gH%2BzpZSgpfdSk6hUnVdQm%2B5JUlwMC0Fcv8POrJ7Od9DbtnDNVbt7RPYlIf0R9ROBev%2FVENgwxVjHBYFhHKvT%2BpQt%2BBwMWH0KXYa%2BB%2F5HVmca2yb18CnSmNehveKNAoK403xtrS7XcTJo%2Bu7EEoZp%2F36G1gLcYyDEerimFH2WbESiJRMtnfW5wbcE%2FCPYJDWINQS85bUx5R%2FNKCCcXE%2BfMlKDilxG8Zqx12xWFGle5enSVqBq9hXR4VMGmUYRaGhamPpyQv%2BJBO%2BETLtQXwWGqT2rmdKZl3J%2B2dMWXWJ98woVGY88JJbaZbVn2e8voEGxFDggkiiYsI%2BhyzUKqw7koky%2Burwk6xI%2FE71V8%2FNqQqgn2UHY0mJ06%2FHQGruq4%2BG2qfOhmlmuAIDs4uvMdsNXnP0quh5hsA8NA8miGpmTeruldAyuNpnGd3GhH7CPtRqA%2Bap3%2B9rgi9wk3hq3ae1ngLJQ8sxSThglp4yr%2FpnO503HptCOPPt0EOaHAo3N%2F0Tl2YY%2FJO25Wq39erNaV%2FEoMFOUd2i7VV5X%2B%2BpQMg%2B7l9CqOXExEZcGVu5zOR7xfpreAIq6G2Dp77TIS9mimRVaPFas4eNVORsA0j5GgJAxxB07CHI0qm9RmtMN%2Bkrb8GOqUBjdUQrgrZMTH6K9Svq307xHm65i5WBK3pxsf%2BBCDhp2d3DlCyTjZ%2Bp%2F2GBh0CiyTBXmYJz%2FyZJvcmj8dKDa5lZvHTNJ9LRFHvaZFEDZLlzbEX1huZWg2vO8SFFSoNBFLarAnlEKgQA6afyC8FsJtAgO33dec9ucLdZ1Dh89UMRgPa8aa1%2BRNSM0tV5s3sTF2YUxKu74bGUei658uxGYv%2BV0hD1ZvP&X-Amz-Signature=e1a46cb8e1df187d0d64b7c2f9be5dfa4729e7e03c15654fcc5b6d6b433dde5b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRSWUHT%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCkESGpXe3jRu1G%2BxEgCQRW5DusNouiCG38VyEIRBE1SwIgXeWKvr6PTKtOIRpV06OTUKoOPgmFQ8e%2F2ancS%2FNSOPUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXgctMxAqdOH5kabyrcAzW5k8gH%2BzpZSgpfdSk6hUnVdQm%2B5JUlwMC0Fcv8POrJ7Od9DbtnDNVbt7RPYlIf0R9ROBev%2FVENgwxVjHBYFhHKvT%2BpQt%2BBwMWH0KXYa%2BB%2F5HVmca2yb18CnSmNehveKNAoK403xtrS7XcTJo%2Bu7EEoZp%2F36G1gLcYyDEerimFH2WbESiJRMtnfW5wbcE%2FCPYJDWINQS85bUx5R%2FNKCCcXE%2BfMlKDilxG8Zqx12xWFGle5enSVqBq9hXR4VMGmUYRaGhamPpyQv%2BJBO%2BETLtQXwWGqT2rmdKZl3J%2B2dMWXWJ98woVGY88JJbaZbVn2e8voEGxFDggkiiYsI%2BhyzUKqw7koky%2Burwk6xI%2FE71V8%2FNqQqgn2UHY0mJ06%2FHQGruq4%2BG2qfOhmlmuAIDs4uvMdsNXnP0quh5hsA8NA8miGpmTeruldAyuNpnGd3GhH7CPtRqA%2Bap3%2B9rgi9wk3hq3ae1ngLJQ8sxSThglp4yr%2FpnO503HptCOPPt0EOaHAo3N%2F0Tl2YY%2FJO25Wq39erNaV%2FEoMFOUd2i7VV5X%2B%2BpQMg%2B7l9CqOXExEZcGVu5zOR7xfpreAIq6G2Dp77TIS9mimRVaPFas4eNVORsA0j5GgJAxxB07CHI0qm9RmtMN%2Bkrb8GOqUBjdUQrgrZMTH6K9Svq307xHm65i5WBK3pxsf%2BBCDhp2d3DlCyTjZ%2Bp%2F2GBh0CiyTBXmYJz%2FyZJvcmj8dKDa5lZvHTNJ9LRFHvaZFEDZLlzbEX1huZWg2vO8SFFSoNBFLarAnlEKgQA6afyC8FsJtAgO33dec9ucLdZ1Dh89UMRgPa8aa1%2BRNSM0tV5s3sTF2YUxKu74bGUei658uxGYv%2BV0hD1ZvP&X-Amz-Signature=d0ad2ba5d94201184952abb6671991ac55c86d90322f83ab3042eca64a08a188&X-Amz-SignedHeaders=host&x-id=GetObject)

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
