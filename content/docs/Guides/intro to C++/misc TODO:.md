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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VACMBKGQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCwZ2vvb1Q6XzRucSIqREpcICvza830forbTX8yEnakigIgPR4weB5BBtvFkL1B9qUdw2nUq%2BlUKkR6dQznXlpI8RgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOQTCUSEOCtsuZWCrcA2O9Ena7zk2R7T8ldBht1khJtFrC0NdNAleRIZ7GhT0l2Bxt0vfc0P%2FS6i%2FkPP4ZkxqDZKmPxEmisUzn%2FBS9FlqaJsGIol7CxPaYR17VSh2Yc%2BLfHHPLLeetmlikrRvdXclCM0f0OevoO8hGp2Bb%2FPpkLxBkP28on%2B6z%2F8FotDRxQYnnEfDoXbt0AYgs%2FnuvjFSL2%2BrmOMXxRTUIvR47Gy1QerY32V%2FrzRvGGgVbn7dgfRd3DxVSGFle%2B8Vl6ChywuyCEGC8M5fvCNvWIoPykeOeMUneaZr44Yb6dXnNWSJK7BlpgrcCvsiS9FWM9V5993N1yapuIUEd5nk6QANzt8nLp4YDRuDsy9t6DpIq%2FvRa3UfJ%2BL0TKPWMSdEGkUvuR3RTkEQjSvXpZpBS7Sm1ln4h3XaFYcys1ktfdTssMzUoT1hyUx8VqRdE2fdIEigEuCoFspW6gA%2BqlQwyeMew4ehiKSvGMfMMEt7pm2FmaZaMaqmtzgCLRWRyM1Fqcn7MJq%2FeF6b1z7xiB31hcH4yEz%2FBuUfwsftvHzMPUXShYFX9rxmfTi2P5FMCam3ZBk8vTv9xCoQ%2FmNRO2fioIHB9qjMHFM4yOEFv5SZvTflh%2Bw72XUfG7iBfOFh4JiZ9MNCG1sAGOqUBzjFbd8U6wMkQ8lkYZk3Oo8QjP4h1%2B%2FO1J8rwFEAPQKCe7ASJ41cq4WZOkF4WGEzuz1TL4seSejD%2BCB0BZnt%2BjbQbaYtTjK8Zd19ZCxOhr3n%2FCCTXPY1c8mhr6LvK0CpQ07u%2FEQxOXwGhnMjsmaCYpsUNIcq1p8EIbYlCLLQFDzPBclfUa4D1fsmI4L24dCzm5UJ0qOZ5kOiUE%2B1LHaKZiTD3782J&X-Amz-Signature=f57767b7ee9b00088b29f2d8ec88a584013656250b894946fda56fa5a32f927c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VACMBKGQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCwZ2vvb1Q6XzRucSIqREpcICvza830forbTX8yEnakigIgPR4weB5BBtvFkL1B9qUdw2nUq%2BlUKkR6dQznXlpI8RgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOQTCUSEOCtsuZWCrcA2O9Ena7zk2R7T8ldBht1khJtFrC0NdNAleRIZ7GhT0l2Bxt0vfc0P%2FS6i%2FkPP4ZkxqDZKmPxEmisUzn%2FBS9FlqaJsGIol7CxPaYR17VSh2Yc%2BLfHHPLLeetmlikrRvdXclCM0f0OevoO8hGp2Bb%2FPpkLxBkP28on%2B6z%2F8FotDRxQYnnEfDoXbt0AYgs%2FnuvjFSL2%2BrmOMXxRTUIvR47Gy1QerY32V%2FrzRvGGgVbn7dgfRd3DxVSGFle%2B8Vl6ChywuyCEGC8M5fvCNvWIoPykeOeMUneaZr44Yb6dXnNWSJK7BlpgrcCvsiS9FWM9V5993N1yapuIUEd5nk6QANzt8nLp4YDRuDsy9t6DpIq%2FvRa3UfJ%2BL0TKPWMSdEGkUvuR3RTkEQjSvXpZpBS7Sm1ln4h3XaFYcys1ktfdTssMzUoT1hyUx8VqRdE2fdIEigEuCoFspW6gA%2BqlQwyeMew4ehiKSvGMfMMEt7pm2FmaZaMaqmtzgCLRWRyM1Fqcn7MJq%2FeF6b1z7xiB31hcH4yEz%2FBuUfwsftvHzMPUXShYFX9rxmfTi2P5FMCam3ZBk8vTv9xCoQ%2FmNRO2fioIHB9qjMHFM4yOEFv5SZvTflh%2Bw72XUfG7iBfOFh4JiZ9MNCG1sAGOqUBzjFbd8U6wMkQ8lkYZk3Oo8QjP4h1%2B%2FO1J8rwFEAPQKCe7ASJ41cq4WZOkF4WGEzuz1TL4seSejD%2BCB0BZnt%2BjbQbaYtTjK8Zd19ZCxOhr3n%2FCCTXPY1c8mhr6LvK0CpQ07u%2FEQxOXwGhnMjsmaCYpsUNIcq1p8EIbYlCLLQFDzPBclfUa4D1fsmI4L24dCzm5UJ0qOZ5kOiUE%2B1LHaKZiTD3782J&X-Amz-Signature=850be103018f2047e121b2257b8b2d89e8123c0f28406f0e99d164a96a9fd5b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
