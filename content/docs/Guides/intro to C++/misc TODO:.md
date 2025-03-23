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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GJ7UGEJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3VWVT%2BUHUJUJaUZV3fyBHzYFyhcjZHv1w29oJyleZEgIhAP9kz71%2Fq8mfHGaic2xYkAf6lpylJFr00LbCYLCtXrdvKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwexa4rvTnI61aAq90q3APex7n5CQhNXXWkvofufta3j6Gb4WAtVk0CZD1lITNiOs2kAAXXh60p4ViEH5gdc4Sf%2FymiM%2BolPtCtMsGBCd7xwJh7itJgSCnvgeO14S%2F6Wyo%2BfcbHr%2B3Re5xkbg97xqaBdQni%2FYzRMCIJ1nj0xlbgdtlJzP2lcg%2BOxqDL0NWRxdI2zlZJgFYhptKWuBIzWJTJpyXK41rGTe4GBZ2xFqYovEnXLJjFRJpO4DaUyAkmOaL3eQnnwzAW75l%2BVClt0yTkkUr0VPvJUasb3Q66spAjTbL5%2BGHsVf%2BjlEzRRBLCNcqH1wFMvLBv8C4PT40gbjEBYtG20nwflWwzUYqk%2BCZs1I7kjv756vfn0PFsuCVqrjhR2437ZbKjsM3tFihi2SdcBJ94u9XEZb%2FgH%2FNTYo8EVfiPc76AKkuwz%2BMebixfS2%2BMjvBMobxyCh4j0F498%2FRaEKP6Epuo92P1GgdXdlXq98RC9nKyEbA2AT5hVlOFBCjeVmYMngpFfY171%2BTqY4vCRgssT9ZnGB0fJfFL%2FHvz5hpnJ2Iph8cnlXa4kSTJcHXpuy8RAoXujk%2FsKBzASiyo9xNNyzNOshqGxPaIlxbk5DpExyuO0aOsjB4vzxtxF8CH9rk3m%2F6MBz8S3TCzzIG%2FBjqkAfCYvxpPrvgTqrw4kzOWmQwCfdmtAmnK0yxGb5lcnfEFa6CKP%2BRGsAmU9D6exUtJujnX4QSU8lOQxtYkhQ3%2BmtHyi6Posaaj0Ak%2FNVN7ZfRRtmmcfvomFAUB90w7AD2At8l3rFMlG8QcDcTC9k3y37BkPY49J8BQ6Og5gyuKU2GbdT%2FnYPSnou9mqJW9qhcYAFcHxQq1xOGw8vXss4T1NXd3qhz%2F&X-Amz-Signature=a7674dce2774fb9d40101543376557503d267c337e643af4def4cf47fb1849d5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GJ7UGEJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3VWVT%2BUHUJUJaUZV3fyBHzYFyhcjZHv1w29oJyleZEgIhAP9kz71%2Fq8mfHGaic2xYkAf6lpylJFr00LbCYLCtXrdvKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwexa4rvTnI61aAq90q3APex7n5CQhNXXWkvofufta3j6Gb4WAtVk0CZD1lITNiOs2kAAXXh60p4ViEH5gdc4Sf%2FymiM%2BolPtCtMsGBCd7xwJh7itJgSCnvgeO14S%2F6Wyo%2BfcbHr%2B3Re5xkbg97xqaBdQni%2FYzRMCIJ1nj0xlbgdtlJzP2lcg%2BOxqDL0NWRxdI2zlZJgFYhptKWuBIzWJTJpyXK41rGTe4GBZ2xFqYovEnXLJjFRJpO4DaUyAkmOaL3eQnnwzAW75l%2BVClt0yTkkUr0VPvJUasb3Q66spAjTbL5%2BGHsVf%2BjlEzRRBLCNcqH1wFMvLBv8C4PT40gbjEBYtG20nwflWwzUYqk%2BCZs1I7kjv756vfn0PFsuCVqrjhR2437ZbKjsM3tFihi2SdcBJ94u9XEZb%2FgH%2FNTYo8EVfiPc76AKkuwz%2BMebixfS2%2BMjvBMobxyCh4j0F498%2FRaEKP6Epuo92P1GgdXdlXq98RC9nKyEbA2AT5hVlOFBCjeVmYMngpFfY171%2BTqY4vCRgssT9ZnGB0fJfFL%2FHvz5hpnJ2Iph8cnlXa4kSTJcHXpuy8RAoXujk%2FsKBzASiyo9xNNyzNOshqGxPaIlxbk5DpExyuO0aOsjB4vzxtxF8CH9rk3m%2F6MBz8S3TCzzIG%2FBjqkAfCYvxpPrvgTqrw4kzOWmQwCfdmtAmnK0yxGb5lcnfEFa6CKP%2BRGsAmU9D6exUtJujnX4QSU8lOQxtYkhQ3%2BmtHyi6Posaaj0Ak%2FNVN7ZfRRtmmcfvomFAUB90w7AD2At8l3rFMlG8QcDcTC9k3y37BkPY49J8BQ6Og5gyuKU2GbdT%2FnYPSnou9mqJW9qhcYAFcHxQq1xOGw8vXss4T1NXd3qhz%2F&X-Amz-Signature=f922e1ed3d1990e0ef8e4b832fb48a64a62193e8deeda16cde1e23d768c9db97&X-Amz-SignedHeaders=host&x-id=GetObject)

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
