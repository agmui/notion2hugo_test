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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLX3E2DD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBS4ZadCfo65OaF8l5dy9CNc%2Bu7QoDU3szvCK%2Fa5y4wMAiEA9%2BW%2Belrp3hhmPn1Vf7GCq7GDgPcjg1Klpv0%2BBVxnc58qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlDFuWCUpqcWbq30yrcA1ww8kt3Cy3ivU7ZM66hv1JcRakmwgBD2ttwaugcTHKgYvdQ7xSbacGOl%2BW5SpTV7DJU1lXk0cj8HC2XryuI4RqOJ8QhQGu45DYiUDITQ9pbzMouZY8JI9kiQJdCoCOC1UZN82xsqZC9BB8NBbxUiD1ydnuCBrwJ8aPNCT4c%2FxkrGUADZC%2F4uRNYUTi59eRneK%2ByhgDJblwVvxjbPm8%2Blfn13vOl%2BW9C0NHv59yAyVRVga76Y%2BtdIQnuOM16T5NvT8M%2B3NlcdbU260fZTMLLt6y3FB%2FMvMfeIBWUBB2ibHRLv2Por%2FcbCNQm331Wyw8lVju1GvwUyOC2D6AxidX2xqLZ6rIhXtReElFDWy5WOTPmkqSa%2BM5BDS3goh9kNjqs4ZNsZ3VSjARROH23GP7L54QEH2xYS6Uau%2BkS1Km%2Bb%2FmhoRN7AkxhM0KoOdOy37QIoW%2BNEa8%2FT7M51YEEa8VdLGVCVTZmVHdP4Kw6J7XF63XAqoSLRbndct%2F%2B5pBnJmvkEq%2BIlX4njB7wUnIBdh6b3Y7o%2FXv3%2FYEyr4DgQ8%2B%2FPI10b0KJC8yzV%2B0IPxHdnMBnjNCFKZXy6Z0kPNqaLKK%2FanwLn9AkVggr8ckBMP64btx1ALQpebR1FjlJcxGFMLCLwsAGOqUBviLu8y0%2FS2GFjV3ishRQ448ynF4ycIcApTAhss8GOWMBM8TuTgJ5XVlI4T47gA4zO4oF0HkO8Zq0p8zu8%2FVq6oaXDnGCuHwaqOm7N%2FPtM3HqOnAPTTWawFXuGnrz4Mz9Zofn1B0JhH3Zz4M2lQwk%2Bw9Tt9S74UYBnHHG8vBfSw1IhBWo1G7ADrixm%2F4MS%2BMW9o0QnSDo4RPwE1AJ2%2FaRH7DiS82X&X-Amz-Signature=a86b97bd3475db7ca2d1a54bc3fa894bf11096854648996bb79a405118d51ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLX3E2DD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBS4ZadCfo65OaF8l5dy9CNc%2Bu7QoDU3szvCK%2Fa5y4wMAiEA9%2BW%2Belrp3hhmPn1Vf7GCq7GDgPcjg1Klpv0%2BBVxnc58qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlDFuWCUpqcWbq30yrcA1ww8kt3Cy3ivU7ZM66hv1JcRakmwgBD2ttwaugcTHKgYvdQ7xSbacGOl%2BW5SpTV7DJU1lXk0cj8HC2XryuI4RqOJ8QhQGu45DYiUDITQ9pbzMouZY8JI9kiQJdCoCOC1UZN82xsqZC9BB8NBbxUiD1ydnuCBrwJ8aPNCT4c%2FxkrGUADZC%2F4uRNYUTi59eRneK%2ByhgDJblwVvxjbPm8%2Blfn13vOl%2BW9C0NHv59yAyVRVga76Y%2BtdIQnuOM16T5NvT8M%2B3NlcdbU260fZTMLLt6y3FB%2FMvMfeIBWUBB2ibHRLv2Por%2FcbCNQm331Wyw8lVju1GvwUyOC2D6AxidX2xqLZ6rIhXtReElFDWy5WOTPmkqSa%2BM5BDS3goh9kNjqs4ZNsZ3VSjARROH23GP7L54QEH2xYS6Uau%2BkS1Km%2Bb%2FmhoRN7AkxhM0KoOdOy37QIoW%2BNEa8%2FT7M51YEEa8VdLGVCVTZmVHdP4Kw6J7XF63XAqoSLRbndct%2F%2B5pBnJmvkEq%2BIlX4njB7wUnIBdh6b3Y7o%2FXv3%2FYEyr4DgQ8%2B%2FPI10b0KJC8yzV%2B0IPxHdnMBnjNCFKZXy6Z0kPNqaLKK%2FanwLn9AkVggr8ckBMP64btx1ALQpebR1FjlJcxGFMLCLwsAGOqUBviLu8y0%2FS2GFjV3ishRQ448ynF4ycIcApTAhss8GOWMBM8TuTgJ5XVlI4T47gA4zO4oF0HkO8Zq0p8zu8%2FVq6oaXDnGCuHwaqOm7N%2FPtM3HqOnAPTTWawFXuGnrz4Mz9Zofn1B0JhH3Zz4M2lQwk%2Bw9Tt9S74UYBnHHG8vBfSw1IhBWo1G7ADrixm%2F4MS%2BMW9o0QnSDo4RPwE1AJ2%2FaRH7DiS82X&X-Amz-Signature=14a35412ba64ab48b54a93f8d1738a4d04e496e0899141156636495b4ff66c00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
