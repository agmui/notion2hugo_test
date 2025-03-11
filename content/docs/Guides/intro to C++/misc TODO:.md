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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OR6JCQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC0hQi99rWgvh5BGqXSHq%2BfLe5Evx2RhdHRYy9etBatewIgB00vFpjCb53jz9Kqrz68JXejRqkgt7jg%2FxllXXNj12wqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjDsFtOT6B496wF0yrcAwhXYI6AGwRMeyjVU8jkOMnS7gfYgBND2i%2FBxyu%2BgtdU2r43%2FGb1S8fE%2BPBnJkhf%2BKjHR%2BrPnvhjyWiQ9egvJs%2FwBN9ZhRmFEqNnuVBpTxki0%2BYBkpMaqXXgl%2FT4MRDodleHCacHDcGZM%2FZWWXLtm5OmhDisXxLmzgIfvqYEijUNYZ4Ll0mpnlF9EChmyOzGZ%2FXsCvHs2U%2FYSGY%2BtL2aSKTdaCqGlrhQ3%2B%2BqFAs5p2D8Eesb2fOWRYl4qMmbLRgFW9t5QVRE%2BS6Kvs1MLaeIhBcbbgm%2BbrRjjtNDcnEzZ8uzia9uzP0dPX3ldL7wofZXPSr%2BybWTq14%2B923EQXU8KtGMGMyM0VMASrfuktyKy2%2Bk4bHfe859wY2TLFuQKAu77z7YbDwjPMmK7okT3CVLZvOgmm0pG4HQpbMBEaNFV%2FtgWbXLixpPrn1MtHbjHOhnTMx%2BA3zaJTgB0QGGC0TNdthW4NHPJBsfS8DFQ3A362IWNf98tn4IPp2mNtH90xMKnxdoEJTpy8jJt%2B9Vvp4tQIL%2Bs5ngVT18ePwGAmkMXKUoUb2d%2BLbWxCLQarImgx5fsBLypmDOpV0bwNVbBNOk5JjphFXymGOTbZgDVpQLgCISxKZgLvu5nPRR7Z%2ByMNbtvb4GOqUBnsTs4Tci10Q8pa%2F3PjE0kR1G3HFhSuJF4am08KBcYjvGt%2FbrOTZdYhEgZE6J%2BgsowAnE5QBdOV9nAERdfBOMhtS3yTJdqmT5ZxMpRxFrF%2Fo5zUoJVu3KunBCJx9JDSLMceyEDQ3xWYsOOB8H9M1OErW6QAuGh6I0729ujRRIn770KRrpdbrT6gK%2BtrelLA1tfGCNFw7PDxfvEM2%2FcjtV42c6um%2FP&X-Amz-Signature=a4df983fb1eb2b50084dc7237b5a593e672ebe787fb4170ca5e0400bf255f278&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OR6JCQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC0hQi99rWgvh5BGqXSHq%2BfLe5Evx2RhdHRYy9etBatewIgB00vFpjCb53jz9Kqrz68JXejRqkgt7jg%2FxllXXNj12wqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjDsFtOT6B496wF0yrcAwhXYI6AGwRMeyjVU8jkOMnS7gfYgBND2i%2FBxyu%2BgtdU2r43%2FGb1S8fE%2BPBnJkhf%2BKjHR%2BrPnvhjyWiQ9egvJs%2FwBN9ZhRmFEqNnuVBpTxki0%2BYBkpMaqXXgl%2FT4MRDodleHCacHDcGZM%2FZWWXLtm5OmhDisXxLmzgIfvqYEijUNYZ4Ll0mpnlF9EChmyOzGZ%2FXsCvHs2U%2FYSGY%2BtL2aSKTdaCqGlrhQ3%2B%2BqFAs5p2D8Eesb2fOWRYl4qMmbLRgFW9t5QVRE%2BS6Kvs1MLaeIhBcbbgm%2BbrRjjtNDcnEzZ8uzia9uzP0dPX3ldL7wofZXPSr%2BybWTq14%2B923EQXU8KtGMGMyM0VMASrfuktyKy2%2Bk4bHfe859wY2TLFuQKAu77z7YbDwjPMmK7okT3CVLZvOgmm0pG4HQpbMBEaNFV%2FtgWbXLixpPrn1MtHbjHOhnTMx%2BA3zaJTgB0QGGC0TNdthW4NHPJBsfS8DFQ3A362IWNf98tn4IPp2mNtH90xMKnxdoEJTpy8jJt%2B9Vvp4tQIL%2Bs5ngVT18ePwGAmkMXKUoUb2d%2BLbWxCLQarImgx5fsBLypmDOpV0bwNVbBNOk5JjphFXymGOTbZgDVpQLgCISxKZgLvu5nPRR7Z%2ByMNbtvb4GOqUBnsTs4Tci10Q8pa%2F3PjE0kR1G3HFhSuJF4am08KBcYjvGt%2FbrOTZdYhEgZE6J%2BgsowAnE5QBdOV9nAERdfBOMhtS3yTJdqmT5ZxMpRxFrF%2Fo5zUoJVu3KunBCJx9JDSLMceyEDQ3xWYsOOB8H9M1OErW6QAuGh6I0729ujRRIn770KRrpdbrT6gK%2BtrelLA1tfGCNFw7PDxfvEM2%2FcjtV42c6um%2FP&X-Amz-Signature=f8e12ce27d85978af2c058923ef38266bacabbb7ba0d3441c246ceaaebfeb6bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
