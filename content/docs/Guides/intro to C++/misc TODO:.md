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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCAYOKV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCyEdc1620o3TRM7LUoeyl0kq9CqlZUMRhJJ6lVAypIBwIgGRPoi387GKApkZbze5W0YjGf4zymOJkNGCOjx3P7nWMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLnsNsZJkkuS1KthASrcAybcKHvhBDq5w5Vt4ZFZJ%2FViSca6uZbwj%2BzSJaHabXOk1HFrwzogHH8I4t%2B0wMIe8Lqy8XlGrUB1%2B3%2BA120Me%2FASDXrgkiGjNauUGxYOEVlPFMmBWqanDDoZAvrALkLEvF41TP4ZEkdp%2B4%2F3dWyJPdub%2BbcFRyOtRSQSx%2FfnH1yn55rtX1OvShrxj%2BOc2PZVQDVIUGV2FwwgUClfVWEhtu97PQfTPAvQ51uhUNodyMO5saZ%2FSXayp9JN7CgUW4N%2B3JdSuktDtf2M2XaVrp3Keu43u172930Pnyo7eC9s6PUpNzMtTYLXjkSRmitWTeXE0Q6UOY%2FSNwnfkstk4eyUjmikf3leiyIxjhWvxETTym5q967xLkYdT1Kp3or7JSkxmmuysbhl2QVCSbLPlrnTv9RUueLz%2BoxriVxZww47eh8b%2F8NxD8nAuP%2Fcrn%2F3vEhS5XLvBpK3O%2FT%2B46p6oO%2BrbqCI7SWq7TlAh53pQq2VTy5YIcAbN4ydz5OgR820H5F7hKd%2BNuWUuyi3vbD%2BA8RnsrPW6tLOGEokMRrzahubqm6oRb3BQ4lOQvV4j6PzNs8uyvNlLl%2Fpi8rhU%2B5wOFMqNh3wVjQlaVqMVA%2BF%2FAlso4HOsZT%2BhtnQ9xJMmyP5MO2iib0GOqUBmG43oMf8ZCpXu7VU7UpWT8LUnHWMrmKOjssOf8i2duQ%2BwEv%2BbqyeYysMTpA%2B0UGUU%2FLKrlOsLFGLOZBLvE89dttXyIFMDb8TEPePFW%2FrAQJSiuJBqPMD0vVIkZtqaqyExvMWsNJ97sRTRvrCAQfeKbG7w5R8QnDIjr%2Br45Xax8INew57jP3SyjqoLDSoly4yM%2B%2FJD7fhr9UWKhl2uq6Zhqo6i5Lj&X-Amz-Signature=4276eaca8a95f33f3b13c1ad839126cb0f9fa65eebe1dd72afef02488db801bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCAYOKV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCyEdc1620o3TRM7LUoeyl0kq9CqlZUMRhJJ6lVAypIBwIgGRPoi387GKApkZbze5W0YjGf4zymOJkNGCOjx3P7nWMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLnsNsZJkkuS1KthASrcAybcKHvhBDq5w5Vt4ZFZJ%2FViSca6uZbwj%2BzSJaHabXOk1HFrwzogHH8I4t%2B0wMIe8Lqy8XlGrUB1%2B3%2BA120Me%2FASDXrgkiGjNauUGxYOEVlPFMmBWqanDDoZAvrALkLEvF41TP4ZEkdp%2B4%2F3dWyJPdub%2BbcFRyOtRSQSx%2FfnH1yn55rtX1OvShrxj%2BOc2PZVQDVIUGV2FwwgUClfVWEhtu97PQfTPAvQ51uhUNodyMO5saZ%2FSXayp9JN7CgUW4N%2B3JdSuktDtf2M2XaVrp3Keu43u172930Pnyo7eC9s6PUpNzMtTYLXjkSRmitWTeXE0Q6UOY%2FSNwnfkstk4eyUjmikf3leiyIxjhWvxETTym5q967xLkYdT1Kp3or7JSkxmmuysbhl2QVCSbLPlrnTv9RUueLz%2BoxriVxZww47eh8b%2F8NxD8nAuP%2Fcrn%2F3vEhS5XLvBpK3O%2FT%2B46p6oO%2BrbqCI7SWq7TlAh53pQq2VTy5YIcAbN4ydz5OgR820H5F7hKd%2BNuWUuyi3vbD%2BA8RnsrPW6tLOGEokMRrzahubqm6oRb3BQ4lOQvV4j6PzNs8uyvNlLl%2Fpi8rhU%2B5wOFMqNh3wVjQlaVqMVA%2BF%2FAlso4HOsZT%2BhtnQ9xJMmyP5MO2iib0GOqUBmG43oMf8ZCpXu7VU7UpWT8LUnHWMrmKOjssOf8i2duQ%2BwEv%2BbqyeYysMTpA%2B0UGUU%2FLKrlOsLFGLOZBLvE89dttXyIFMDb8TEPePFW%2FrAQJSiuJBqPMD0vVIkZtqaqyExvMWsNJ97sRTRvrCAQfeKbG7w5R8QnDIjr%2Br45Xax8INew57jP3SyjqoLDSoly4yM%2B%2FJD7fhr9UWKhl2uq6Zhqo6i5Lj&X-Amz-Signature=853a88b2215cf6e9290053f7ea7ffea28f6a4259a9b891b1c48e9936f730f348&X-Amz-SignedHeaders=host&x-id=GetObject)

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
