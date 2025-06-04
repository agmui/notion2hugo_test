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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IRA2XC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAn470QozWaseuFKJYmWWTwXqiw4V58Ax1%2FU21LEqXH5AiAgDrPtOGe4XhQlXl%2BWM1D%2BnoH34bOAJbqAQucdVIJrVCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM647AFYgrYi7LIngWKtwDra7LN3ywNLttILiOwTuGOWFZUE0qwZF%2FUvQCi3qDFRcon%2FLZJoF2AL2GQ22lhc0IONldA%2F4NNRcOwJR9HixPocVEID%2FP9NtBM4jXS2S1aMyJgaeSKWj8G2D99xcVI8wjxV72ZZ4OBSFnqR6eREfGBKpNx%2BgzRfPyKhfhekXKszh1N4aLL7iV2D0c6rAD9j5x2e96IzRw1GJn9oaYR89RqslC%2FTzO8FFyXNo0Ey1wF3rqZ4Sx8sdChbNBR4FMC80T%2BmKfmGiQgt4S188rJFpp4%2BqSZJNC%2F5BB3LyU%2FV%2FnSml%2B8Gci%2BQotbVNF0IYvm43Yl4Cq3SS%2BxnecqYDv3%2Fo3k1CclAteIiOWiaTVImpg5TNE5tV8NpSx%2BJ4yDkt6TtNVYJqMSM89VsFrKK1r%2Bot4InmMYd%2Fy1633CrLI9rbHyWPr%2B0Q79YCSnsHknxQ0%2F%2FdY2SgbunA4k%2BJzMyg%2FIXRAnsdZcNL5oL4KPwgXqLZSmh660WxO8oJsnzPiJHipXVsKEU7wqTj8g7JbHBsGFOt1a4YZ5dGYDFF6PDfZc9V%2BVvORXan0MgSzh%2Bq3jNiJnxAeHRfIfk4F25LB%2BDSHqMqfXrxv4IzYGrzewh3c4QOXYS4UygtsCWroxBnch4Uwk9CAwgY6pgF3SCkVxHomnfKrn3D92i4c7VR2hBKNb5COViaIZqqeLhp5ybnlSwo042YOlSFSKlSbJ6hVn2vGALnok7ZKD1eC4N4dGgkQr6BQYUvW9Pz01JJAdpn4ch8fbaj5FcpQxvM%2BySShjxuiyfGdMLuIwdU0qWrMCBfLDz%2B3qzmBBAcmrZGvMhUcpr7BqGfwmfB2ANmsn3ult2968EBkrlqn2b7h7Iey3b9E&X-Amz-Signature=8649a7cbabace4f8810ab19687961d0a5d6760d06c67b74c58fe048ef4c1a2bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IRA2XC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAn470QozWaseuFKJYmWWTwXqiw4V58Ax1%2FU21LEqXH5AiAgDrPtOGe4XhQlXl%2BWM1D%2BnoH34bOAJbqAQucdVIJrVCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM647AFYgrYi7LIngWKtwDra7LN3ywNLttILiOwTuGOWFZUE0qwZF%2FUvQCi3qDFRcon%2FLZJoF2AL2GQ22lhc0IONldA%2F4NNRcOwJR9HixPocVEID%2FP9NtBM4jXS2S1aMyJgaeSKWj8G2D99xcVI8wjxV72ZZ4OBSFnqR6eREfGBKpNx%2BgzRfPyKhfhekXKszh1N4aLL7iV2D0c6rAD9j5x2e96IzRw1GJn9oaYR89RqslC%2FTzO8FFyXNo0Ey1wF3rqZ4Sx8sdChbNBR4FMC80T%2BmKfmGiQgt4S188rJFpp4%2BqSZJNC%2F5BB3LyU%2FV%2FnSml%2B8Gci%2BQotbVNF0IYvm43Yl4Cq3SS%2BxnecqYDv3%2Fo3k1CclAteIiOWiaTVImpg5TNE5tV8NpSx%2BJ4yDkt6TtNVYJqMSM89VsFrKK1r%2Bot4InmMYd%2Fy1633CrLI9rbHyWPr%2B0Q79YCSnsHknxQ0%2F%2FdY2SgbunA4k%2BJzMyg%2FIXRAnsdZcNL5oL4KPwgXqLZSmh660WxO8oJsnzPiJHipXVsKEU7wqTj8g7JbHBsGFOt1a4YZ5dGYDFF6PDfZc9V%2BVvORXan0MgSzh%2Bq3jNiJnxAeHRfIfk4F25LB%2BDSHqMqfXrxv4IzYGrzewh3c4QOXYS4UygtsCWroxBnch4Uwk9CAwgY6pgF3SCkVxHomnfKrn3D92i4c7VR2hBKNb5COViaIZqqeLhp5ybnlSwo042YOlSFSKlSbJ6hVn2vGALnok7ZKD1eC4N4dGgkQr6BQYUvW9Pz01JJAdpn4ch8fbaj5FcpQxvM%2BySShjxuiyfGdMLuIwdU0qWrMCBfLDz%2B3qzmBBAcmrZGvMhUcpr7BqGfwmfB2ANmsn3ult2968EBkrlqn2b7h7Iey3b9E&X-Amz-Signature=9f64521a5c7582c0b673eda315eb699e67518b5845cbea5d2d6ed6d768ba7b26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
