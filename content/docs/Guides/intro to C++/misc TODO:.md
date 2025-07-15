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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5CYKG4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIApV4PAw9u1Z18HSFxQ%2BDQA0blpG7lKxoGeH0allDVnyAiBYBsslNpyeP9HbZc4B76pndBZQGVOJauXLh4Mx8Wba0Sr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQQsmCjtlKISxqekqKtwDmcIjJA5IHFx5kIhuog7J5%2FhXhYu6De61%2BED07mXZDTBzSFzRdQ4TxER6fWqo0CbpAxdkubfzzmFYnZygm8IhlzGjybD2VFjssCnqOwcKW6neoXRLe7RgYxpEulUb1goQv4mGPQnoxGaWzEufoS4ghuWf%2Fq%2B3%2BJ%2FS6NLzfKh85heaYWFS0%2Bb4pduCcSJCmzjjAsyaGgkDYPafI80wGCl3h4wEzxOItvFkVFRrWwg1SN33oLfKhgMq31iT2gNulE2pmeXK1%2BX09o6N8fQofaLoJ1qe47Pfb2gWO90YvxhIx5NcI2El%2FUi4%2BM4cf0GidBsQlhivkZJiojR1zTQlZMcwxNjw7tT%2Br2yE7TGhJfI5Kd1KTabMYMTSTpRlJ0vSbg22%2FqoztAt1BsH%2FFvOk%2FjeDYtGbJeDizuTLnM8Z0rc63QGEqbIHJ2ZQ8ExP9a8ziPE47OP08oannEMzsSSY6KDprPQbbGUlaagsaMBcJeQ1%2BvaCAZCI6VfDbpuB8yvnH4z1DlogfsXiZy8VcdZYa3MKvCw%2BhEZdQtUKwPqMT8JiLrNcIAf317tsglDx3W1MyKNT6gjDebDtZz%2B7MapkSx88B%2BDfkdJk7lURrKoiaaw3KpkdkIMapeRFxq62GZown4PZwwY6pgFphViYioLOLd%2BQErYCspU1ihfx674FDy0DcbKMXSPOwKvEWfIGGsVzXQerQ3HvhwKp12jnbK7SdGerjJ1hNOqrypPRrS7Hny49kIx8Y5A4Aakl2vhndQIVwsvsFm5pAvgCsvdkduAzgp6z%2FDVtq74iIV2bWDOsPeQkuWGm%2BS7uxBHrotKDE2ttwYBUCjNFNHVigonW22nW9ibvsB7uQPjeIF2BVyaq&X-Amz-Signature=e73baa3e53f1dd93e70dbafd023d1795a72b89d6da5893056aed4e043c7632fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5CYKG4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIApV4PAw9u1Z18HSFxQ%2BDQA0blpG7lKxoGeH0allDVnyAiBYBsslNpyeP9HbZc4B76pndBZQGVOJauXLh4Mx8Wba0Sr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMQQsmCjtlKISxqekqKtwDmcIjJA5IHFx5kIhuog7J5%2FhXhYu6De61%2BED07mXZDTBzSFzRdQ4TxER6fWqo0CbpAxdkubfzzmFYnZygm8IhlzGjybD2VFjssCnqOwcKW6neoXRLe7RgYxpEulUb1goQv4mGPQnoxGaWzEufoS4ghuWf%2Fq%2B3%2BJ%2FS6NLzfKh85heaYWFS0%2Bb4pduCcSJCmzjjAsyaGgkDYPafI80wGCl3h4wEzxOItvFkVFRrWwg1SN33oLfKhgMq31iT2gNulE2pmeXK1%2BX09o6N8fQofaLoJ1qe47Pfb2gWO90YvxhIx5NcI2El%2FUi4%2BM4cf0GidBsQlhivkZJiojR1zTQlZMcwxNjw7tT%2Br2yE7TGhJfI5Kd1KTabMYMTSTpRlJ0vSbg22%2FqoztAt1BsH%2FFvOk%2FjeDYtGbJeDizuTLnM8Z0rc63QGEqbIHJ2ZQ8ExP9a8ziPE47OP08oannEMzsSSY6KDprPQbbGUlaagsaMBcJeQ1%2BvaCAZCI6VfDbpuB8yvnH4z1DlogfsXiZy8VcdZYa3MKvCw%2BhEZdQtUKwPqMT8JiLrNcIAf317tsglDx3W1MyKNT6gjDebDtZz%2B7MapkSx88B%2BDfkdJk7lURrKoiaaw3KpkdkIMapeRFxq62GZown4PZwwY6pgFphViYioLOLd%2BQErYCspU1ihfx674FDy0DcbKMXSPOwKvEWfIGGsVzXQerQ3HvhwKp12jnbK7SdGerjJ1hNOqrypPRrS7Hny49kIx8Y5A4Aakl2vhndQIVwsvsFm5pAvgCsvdkduAzgp6z%2FDVtq74iIV2bWDOsPeQkuWGm%2BS7uxBHrotKDE2ttwYBUCjNFNHVigonW22nW9ibvsB7uQPjeIF2BVyaq&X-Amz-Signature=999937533de61518416b1dd232c94378de5c89e6afd4d9ee0ebfbd6fce3e0585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
