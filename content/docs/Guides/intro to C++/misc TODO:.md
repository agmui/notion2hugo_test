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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZOQVHI%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC6oARrcugk93HO9xjm17cPPh1odErNX65Fj5YjLSLIsgIhAL5xW09EH03heU6kEl13MxXOtvNC6JPquo%2BSza%2F5kuX3Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwWiUsJiuM6sbZaKncq3APQT18bLRYWBxeQFLOSUuqOgLB3xZlmTOEiFdwdATXXpvbgwHy3Z2qOVKOzCH2cwv1%2FuEDhj9nvXjphwaLtWOU8DJjNKPcsIZI8d9AMCMjp%2FnIdJleaHVt%2B1gtYSW7eoqdzkDADhesiNNSj9LAMOxD3OvH7f3v1Y5H1CbjEM74Kag1qE7KZmuaERPG3fbHyAaU7sZpm0mAC8%2BSXM5dC7HQcvdEVThhOenPVfMF1L5jErEagY7YMVj1Bd5TrGLvLYEbFgOME6XwrCNC7HcjEAJC60iWHHqmCiAjyuD8QMxeqoTHJLogpH45gW%2Fhg2Lhu1nKZFErzUDD64JCqPpwM6pTEFYt30g1La7A9Q2G0W5t0CGrP7WcgfkaUY98Md2wrOtg3NLDUxp5vZcoSmN1stacRjGhBk%2B%2FoZW3Bwkn9YSBQiFyLQ%2B8QuUwkp4BWgRZdVOJq5Kq1V6aZ3Ig6JZD%2FZAFpFjZDAl%2FRYd%2FKS7i73Kk4h85%2F1My2W4IPP2hzhKhBdBS87zZ%2Ft%2B1Fqu6mYopgeainaq89qanIxLOZa2OwHxN%2BT0YK102t7FdXZGv8rNPXH3Fe%2Fb6YR4y%2FKUVZ5VbYwloF7u0VsxunJANWLe7IxPOYQDGZwOdo85rmIIGp3DDcys69BjqkAZUZaID%2BL57vyvFtadzvK7JGboErsM74TZ3%2FGoD02aI3NUFOBMYScEjB51gQnCmY16TH22lVHlE68%2BLrWa4X1K3%2BlBeLVRC7HdnoPFOuh%2BXi3fSATAQL%2B9WUGkwZbxlW%2ByCshxF7YHA1VXZJwzdSFZAecEDSC1WbeYE%2FREH1fGAjYeaMAdFJe%2BsGPRNTy0exSZzPJrMZav33Vn5DWNE0oS%2Bafiq%2B&X-Amz-Signature=bcaf0e6aabe73c5e71b51cff816d603ee92961ea51f911ad9f0523649c8ecc5d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZOQVHI%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC6oARrcugk93HO9xjm17cPPh1odErNX65Fj5YjLSLIsgIhAL5xW09EH03heU6kEl13MxXOtvNC6JPquo%2BSza%2F5kuX3Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwWiUsJiuM6sbZaKncq3APQT18bLRYWBxeQFLOSUuqOgLB3xZlmTOEiFdwdATXXpvbgwHy3Z2qOVKOzCH2cwv1%2FuEDhj9nvXjphwaLtWOU8DJjNKPcsIZI8d9AMCMjp%2FnIdJleaHVt%2B1gtYSW7eoqdzkDADhesiNNSj9LAMOxD3OvH7f3v1Y5H1CbjEM74Kag1qE7KZmuaERPG3fbHyAaU7sZpm0mAC8%2BSXM5dC7HQcvdEVThhOenPVfMF1L5jErEagY7YMVj1Bd5TrGLvLYEbFgOME6XwrCNC7HcjEAJC60iWHHqmCiAjyuD8QMxeqoTHJLogpH45gW%2Fhg2Lhu1nKZFErzUDD64JCqPpwM6pTEFYt30g1La7A9Q2G0W5t0CGrP7WcgfkaUY98Md2wrOtg3NLDUxp5vZcoSmN1stacRjGhBk%2B%2FoZW3Bwkn9YSBQiFyLQ%2B8QuUwkp4BWgRZdVOJq5Kq1V6aZ3Ig6JZD%2FZAFpFjZDAl%2FRYd%2FKS7i73Kk4h85%2F1My2W4IPP2hzhKhBdBS87zZ%2Ft%2B1Fqu6mYopgeainaq89qanIxLOZa2OwHxN%2BT0YK102t7FdXZGv8rNPXH3Fe%2Fb6YR4y%2FKUVZ5VbYwloF7u0VsxunJANWLe7IxPOYQDGZwOdo85rmIIGp3DDcys69BjqkAZUZaID%2BL57vyvFtadzvK7JGboErsM74TZ3%2FGoD02aI3NUFOBMYScEjB51gQnCmY16TH22lVHlE68%2BLrWa4X1K3%2BlBeLVRC7HdnoPFOuh%2BXi3fSATAQL%2B9WUGkwZbxlW%2ByCshxF7YHA1VXZJwzdSFZAecEDSC1WbeYE%2FREH1fGAjYeaMAdFJe%2BsGPRNTy0exSZzPJrMZav33Vn5DWNE0oS%2Bafiq%2B&X-Amz-Signature=f78e1725d7bd873f21dd6a0c409e119b473ab72dd87ea9f178202643e8d7ff76&X-Amz-SignedHeaders=host&x-id=GetObject)

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
