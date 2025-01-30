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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ME2BZ63%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlP6%2F%2F9%2B%2BBtJBVHOMEvG%2BxyPR3BagRtIgVuhoFtyrpJAIgRp8K8NtgzBC6yBTQszx2dAP%2B1kbhfKsLIvHmUNoZhA0qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHie8AboxVwNSIE8VCrcAxaMUnEK41I%2F7OpKkDKVgLy3n3kmHW3zli1k5EvHDyfSg0o5OzgnxpUcKJX%2FrGfONRfze2UsRRV7uRfpSdghygStN02G9tR0ZhhIqPtNuBhhUQO7yUWP94yOs1fi09dDiIzI9lRdNf2fxOwGmw4r5LqXOzsME8kwbtBCl%2BwiEI8HtCuE2d3Zt96xHdjQTnqJgmpraLYyZkuCAr%2FuXM1ZVFdJIZ9Su8eyE5r2cwneXV5Ukj%2FdW9zVlEVICZGwGqGKu%2B13EVginMrR2srsbmO3WL04648po9yHfzv%2BiH4cOJa3F3QxHXBoqadrU2pR3V07%2BlAqwk8yfoHc9wiAaOSbVn8xIqh9GdpegbHu0x798DWhjy%2BhiYumK31N8yXgODCM2AHQX3gH38oA2K0EHpHFmWmBg%2FvR471AYYCotUq9MPqDnIoPt3D9RwIoX4mTI%2FGejIv3vjy8BR5Gn0wHOp2AgAOpS4z2nhpmsoErY5rgQ8UEeZP1acCkgpVGTYHQfI0O7wkl1VrZ2cHJpZ%2F3O0qPCvg%2BefkLLW%2FdnCJNPSAM6krdItUOjmWQqRs2P2MWzzci4R1kWK4JhYFcQpBXIhJV8JxDTDI%2Fhr1Xd6pNchRPecllCopXQP%2F%2FXEfnP7b9MKvH77wGOqUBjJfFEdJe6bfPZHmCLAZxlVK6Vc3MSGpKs8XOGARmScgZkelDV%2FFtl9h%2FwRwSA4jm57JqVQW5NgYcQzLomE1%2F9lRqw02w7Fw6S4W7k4YGGagMetba8se3CovtOy8EWoOcip2a7x%2B6H57hSs6vIHFfXPiYY3krkvvNn9noNINqKQ7FKtwsFAipf7UT3tnMde%2FzQR6GArjGB6K3UHHy97xcHgz19rbp&X-Amz-Signature=24366573851e8f417432c73dc6729dbf48c162aae21657983cdbf93ae844ea56&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ME2BZ63%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlP6%2F%2F9%2B%2BBtJBVHOMEvG%2BxyPR3BagRtIgVuhoFtyrpJAIgRp8K8NtgzBC6yBTQszx2dAP%2B1kbhfKsLIvHmUNoZhA0qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHie8AboxVwNSIE8VCrcAxaMUnEK41I%2F7OpKkDKVgLy3n3kmHW3zli1k5EvHDyfSg0o5OzgnxpUcKJX%2FrGfONRfze2UsRRV7uRfpSdghygStN02G9tR0ZhhIqPtNuBhhUQO7yUWP94yOs1fi09dDiIzI9lRdNf2fxOwGmw4r5LqXOzsME8kwbtBCl%2BwiEI8HtCuE2d3Zt96xHdjQTnqJgmpraLYyZkuCAr%2FuXM1ZVFdJIZ9Su8eyE5r2cwneXV5Ukj%2FdW9zVlEVICZGwGqGKu%2B13EVginMrR2srsbmO3WL04648po9yHfzv%2BiH4cOJa3F3QxHXBoqadrU2pR3V07%2BlAqwk8yfoHc9wiAaOSbVn8xIqh9GdpegbHu0x798DWhjy%2BhiYumK31N8yXgODCM2AHQX3gH38oA2K0EHpHFmWmBg%2FvR471AYYCotUq9MPqDnIoPt3D9RwIoX4mTI%2FGejIv3vjy8BR5Gn0wHOp2AgAOpS4z2nhpmsoErY5rgQ8UEeZP1acCkgpVGTYHQfI0O7wkl1VrZ2cHJpZ%2F3O0qPCvg%2BefkLLW%2FdnCJNPSAM6krdItUOjmWQqRs2P2MWzzci4R1kWK4JhYFcQpBXIhJV8JxDTDI%2Fhr1Xd6pNchRPecllCopXQP%2F%2FXEfnP7b9MKvH77wGOqUBjJfFEdJe6bfPZHmCLAZxlVK6Vc3MSGpKs8XOGARmScgZkelDV%2FFtl9h%2FwRwSA4jm57JqVQW5NgYcQzLomE1%2F9lRqw02w7Fw6S4W7k4YGGagMetba8se3CovtOy8EWoOcip2a7x%2B6H57hSs6vIHFfXPiYY3krkvvNn9noNINqKQ7FKtwsFAipf7UT3tnMde%2FzQR6GArjGB6K3UHHy97xcHgz19rbp&X-Amz-Signature=05663439c6df2a47edae8b67c1e6649f82ad6df5087117b24fe378c54cd0e9d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
