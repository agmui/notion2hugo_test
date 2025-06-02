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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGM4BEG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHU1PBKaFnH%2Bz9Pl9S%2Bw7F4m6w4p0%2BBV5bcHzVLjZJ8kAiBsyv5EYrur6TTfY3SGBPoDG%2BElYJt%2F4LoA8PANkYC9xCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdbnGMUdUBIQU7L2CKtwDbSLDNfUFFOdSJDMy013u5AjN2XiQc2%2B1SuuoeEGU5m2WwXysD9Cn2Brx56qPwfXvrupINc5QiR5we5EXm78Jb6Lyiz7YkX9CGdxlOGwms7RqyLYrGHzIgryvwz15AfrQb1hfjg%2BiX3nHVcTZs0TkiMChWb3oqyMKaY2NKZILwcBOMYv2Vfqr4wP6%2FLk2AR2tAyl687Ju5RLB6ixs3hchTxc%2BcRPnd2KDIfPaOjBsg%2Bnad5uj6BRAQOCJxpa0ENi8JliUCNRLYR15c0THsEJ%2FsBD9BWMM5IVk2ySREAgIyJ3Knmk%2FbZUX2BWNM10vGJTD2GlUseFha660eKrFvqDCtECr15mTbcKFWDhKvIzccKLAfI1v7t95t2nym6R9Y1QFZEK5FD6ln%2F8nJorsTWvbVAVVaD6tUhTWV460yeInM%2FHBSl5JrbLaV6uWH350QIv86BVuZzK64oSLHNNCR45Hir7tyf9GoGy4upUEBgzCTF1tdpVPckpNBATfwbvmh5sNy2c0UhTsl1oKftEKLFOtcz4pprcVL5bHutwc6Ug%2BwI3y0nFkXqMkE4E8S5dQx1iegoxj0RMDQzT0TOA8tQRoOZPVbtP37pxqU%2FByRTzPMcM8XSQi75Q8mCjGD18w8Nf0wQY6pgGiRiXGjyk90S%2FR%2Fdvjfef74VDYsyBucafqqEJfuGPzy7ojwFar7cE2pAPyYtpkkZMu6vdmcNS9K3h1%2BO%2BfKCvcI8jYPO4QzLmY9fT2rfoCGcTevhKkPe3kDno4%2B7lifsWB96icdAHPtrmVPepvS3jrfhx0kVWcWccPhm6ghxE7Dx4XSQ%2FBnP8PgCC8auFIAKoaJyHgeJehWoS4Bv3j9VKYTTcIhvP3&X-Amz-Signature=751d3e18e35d74b2f5825ea5dc5dc754a33b10a1bc3e46cbf5f9ca53b2329e77&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGM4BEG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHU1PBKaFnH%2Bz9Pl9S%2Bw7F4m6w4p0%2BBV5bcHzVLjZJ8kAiBsyv5EYrur6TTfY3SGBPoDG%2BElYJt%2F4LoA8PANkYC9xCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdbnGMUdUBIQU7L2CKtwDbSLDNfUFFOdSJDMy013u5AjN2XiQc2%2B1SuuoeEGU5m2WwXysD9Cn2Brx56qPwfXvrupINc5QiR5we5EXm78Jb6Lyiz7YkX9CGdxlOGwms7RqyLYrGHzIgryvwz15AfrQb1hfjg%2BiX3nHVcTZs0TkiMChWb3oqyMKaY2NKZILwcBOMYv2Vfqr4wP6%2FLk2AR2tAyl687Ju5RLB6ixs3hchTxc%2BcRPnd2KDIfPaOjBsg%2Bnad5uj6BRAQOCJxpa0ENi8JliUCNRLYR15c0THsEJ%2FsBD9BWMM5IVk2ySREAgIyJ3Knmk%2FbZUX2BWNM10vGJTD2GlUseFha660eKrFvqDCtECr15mTbcKFWDhKvIzccKLAfI1v7t95t2nym6R9Y1QFZEK5FD6ln%2F8nJorsTWvbVAVVaD6tUhTWV460yeInM%2FHBSl5JrbLaV6uWH350QIv86BVuZzK64oSLHNNCR45Hir7tyf9GoGy4upUEBgzCTF1tdpVPckpNBATfwbvmh5sNy2c0UhTsl1oKftEKLFOtcz4pprcVL5bHutwc6Ug%2BwI3y0nFkXqMkE4E8S5dQx1iegoxj0RMDQzT0TOA8tQRoOZPVbtP37pxqU%2FByRTzPMcM8XSQi75Q8mCjGD18w8Nf0wQY6pgGiRiXGjyk90S%2FR%2Fdvjfef74VDYsyBucafqqEJfuGPzy7ojwFar7cE2pAPyYtpkkZMu6vdmcNS9K3h1%2BO%2BfKCvcI8jYPO4QzLmY9fT2rfoCGcTevhKkPe3kDno4%2B7lifsWB96icdAHPtrmVPepvS3jrfhx0kVWcWccPhm6ghxE7Dx4XSQ%2FBnP8PgCC8auFIAKoaJyHgeJehWoS4Bv3j9VKYTTcIhvP3&X-Amz-Signature=f32301105f6bfea00fe79fefa0ae7ad6c513c937de8079768b24ff555269908a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
