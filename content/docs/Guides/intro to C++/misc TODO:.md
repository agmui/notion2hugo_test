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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOA2SHG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOAO0RXFS9R10%2B7QU9XJya1VG6A9vwbM43lsj1o9dg4AiA%2BbX%2F26G4rIDJQDFfOCJkuaZbYXi1XCRDETtMJ5w4l0SqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDx9fIv%2BpGZUWmB4EKtwD53YJUUmurI30f7od%2Firat4kGhDYtaM9lCH8fLMDKRIC6ejAZvz77mNW3nNVrVfFfyPPVGQ74glb8BdiXbeGQ7LIxic1ToFuWJoKu9vQ5Y%2FU0dM4Gxp%2FL1YPBqYD7iG0NTv0gA4avSTMIk0i5rtOnFL%2BpoLSjO51fYu4%2FhJBkswoFho4WXwM5bhmlUoEDY6WiO2L9PLq%2F61mBanQiQv1Au2CvUPmohnFcrvEPKQVoTXraRfIypfdaRmkuC4UO3cAUGxyFHEBUOrUr%2BwrUbWZUS6HwhtDVAcZ6BIH0k%2FXCkA%2FQYV7SuZunZw8yONCHUN0Tlf56FFPKxeicT7aTS9iH2t%2BqrVgdvE%2FdrCVIF2%2FH0GOmDVX252kMJxn%2FQJEFVPDGB7P%2BVkBTdmtr7pmnN7td3lP6s04KSPxe86rjwz4KFXP9TmUd2lFQgHnfk0WctgoRi577IJXuoyuafvT%2BidwVpdQDQoHV2HlOefwqUt7NxggyxjnYUGr4TvO8lERHhp%2BFOmyl3a01Rk5115wGFvNmILs3tiv%2Fto1ruuUQC5P%2BJYwlpqbaVSQde6EpqSLbGhbGwQGaKeJ54To2mchoWtS7dwt2KiKlBh2UX7kOfBO%2BCRonMARi6T6cRL5AiwQw0fHmwQY6pgF%2FZnGAoDXTupHGQMWzCisRL4kacDAk5WnMVWJ0sQRXxg4YuxTj%2Fe55%2Be1F7zd3mUqoi14rG9xNlopcAkPvpTjL1CpZnzd%2Bbs8BSK9J2tVp8VBYIMn2GzfnTXXgGH2NUjgDofbpNtxntC72%2Fw2S%2Bunjh1czVrql6GSIWN3vyuLliqX6qtq8d0egPtuRE2q9ZN6qe%2F99P2lRgTv3aXmvVioL1DuMRzeo&X-Amz-Signature=dc066d66a6baf7ed475fec955384aec418ff417d11d29c6be841ab2687922c34&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOA2SHG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOAO0RXFS9R10%2B7QU9XJya1VG6A9vwbM43lsj1o9dg4AiA%2BbX%2F26G4rIDJQDFfOCJkuaZbYXi1XCRDETtMJ5w4l0SqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDx9fIv%2BpGZUWmB4EKtwD53YJUUmurI30f7od%2Firat4kGhDYtaM9lCH8fLMDKRIC6ejAZvz77mNW3nNVrVfFfyPPVGQ74glb8BdiXbeGQ7LIxic1ToFuWJoKu9vQ5Y%2FU0dM4Gxp%2FL1YPBqYD7iG0NTv0gA4avSTMIk0i5rtOnFL%2BpoLSjO51fYu4%2FhJBkswoFho4WXwM5bhmlUoEDY6WiO2L9PLq%2F61mBanQiQv1Au2CvUPmohnFcrvEPKQVoTXraRfIypfdaRmkuC4UO3cAUGxyFHEBUOrUr%2BwrUbWZUS6HwhtDVAcZ6BIH0k%2FXCkA%2FQYV7SuZunZw8yONCHUN0Tlf56FFPKxeicT7aTS9iH2t%2BqrVgdvE%2FdrCVIF2%2FH0GOmDVX252kMJxn%2FQJEFVPDGB7P%2BVkBTdmtr7pmnN7td3lP6s04KSPxe86rjwz4KFXP9TmUd2lFQgHnfk0WctgoRi577IJXuoyuafvT%2BidwVpdQDQoHV2HlOefwqUt7NxggyxjnYUGr4TvO8lERHhp%2BFOmyl3a01Rk5115wGFvNmILs3tiv%2Fto1ruuUQC5P%2BJYwlpqbaVSQde6EpqSLbGhbGwQGaKeJ54To2mchoWtS7dwt2KiKlBh2UX7kOfBO%2BCRonMARi6T6cRL5AiwQw0fHmwQY6pgF%2FZnGAoDXTupHGQMWzCisRL4kacDAk5WnMVWJ0sQRXxg4YuxTj%2Fe55%2Be1F7zd3mUqoi14rG9xNlopcAkPvpTjL1CpZnzd%2Bbs8BSK9J2tVp8VBYIMn2GzfnTXXgGH2NUjgDofbpNtxntC72%2Fw2S%2Bunjh1czVrql6GSIWN3vyuLliqX6qtq8d0egPtuRE2q9ZN6qe%2F99P2lRgTv3aXmvVioL1DuMRzeo&X-Amz-Signature=e232153952e2883e87c948d95a7d386139e011631ffb995bb9f986f6738456f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
