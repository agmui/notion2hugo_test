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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5LMJIZG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCGNLqLV9ClpxytPqVHT%2B1%2Bb7vbLxTuL0KMiPkZSW4uKwIhAOQwnuPJhyiRbvyjWwzMBBXAh9diqAj%2By4D7HMLzr9lRKv8DCHoQABoMNjM3NDIzMTgzODA1IgwKqg2R6XPrkbA5GVsq3AP2elq%2FmhQU4m1%2BEGQTMueg8IgHD6EkEpUf85Fs6noxNEjlVVvF7qEnwizHXQaHSrLOIKowEQbVdE3tagdPbiXT5htePAPzhUWDgVMwWlICZTayvTOU2m00iDn5gFbIXlv4AKCOcQSt5t%2B7dCfjC4qcFg0mGkb70qWHK0pH3TYPoQXN0Iy3Oy20KeUQEwRlZ5FghS%2F%2FU%2BEIRsJRS0et9NNnNigWVBbizyOkHQljlV02V8hRmnGbG3dK30OSQ8PjAMDBJJMyqMmFS9RfMrgmOiygCDgyndpAP0Yr8lZ1%2BieqfzfeCAMIfRJJ2iXwfCT1XNEKlGWJoQlKR0teVQ1TubE0ULfSOvs%2Fog7WCS5z69s40jVXuveoaA8d6rS7vQZu91BiOsTCq%2Ba67aeP3cr2wi7mzOYOS1xabK0PByaJnesCQmJrYI7%2BoVx4EQpjOpPiD8hmsgc%2FhD5LwpaXTr8RsbpEvcCNM716TbI5Qihg1S20qaNHVxi0xu72G6W7dKf9OK6ZnfUinhkB0o1sDQZcmYvEQ1nbTNACiNKiGbaeIO1W5AUHiWh5PtoQWRpqzp8zgyMesN3%2FwTDC4PJcUVWEn1o57LSVIhTatGO1HP359iYzoW7tpFgDl2P4tc%2Fr%2BzCs%2FZi9BjqkAdJmkyp%2BT7z5dj8spApNO0DBSmo9hFiDAak5Vs%2FqFMrvpU0gJIsihMLAXRQ2TqCZNzlOGz87ChrZi5uVkspLEzMkfbS0chYGVa1Duev%2BVxeR%2Fgmeo5kqAvMGH18D1lBz1Ew0VeLPvviQvg2VJed2t4Vx5HrN9IOI5qPS3%2F6R1h%2B7LZz5viznFCN1%2B2y%2FYelnnqf8YqFZNwDUJ2e6YoyPZsYmdRvn&X-Amz-Signature=4a88800eb6b4d857be9eb61506d31ed964d85695915200659ed3f153d791da90&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5LMJIZG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCGNLqLV9ClpxytPqVHT%2B1%2Bb7vbLxTuL0KMiPkZSW4uKwIhAOQwnuPJhyiRbvyjWwzMBBXAh9diqAj%2By4D7HMLzr9lRKv8DCHoQABoMNjM3NDIzMTgzODA1IgwKqg2R6XPrkbA5GVsq3AP2elq%2FmhQU4m1%2BEGQTMueg8IgHD6EkEpUf85Fs6noxNEjlVVvF7qEnwizHXQaHSrLOIKowEQbVdE3tagdPbiXT5htePAPzhUWDgVMwWlICZTayvTOU2m00iDn5gFbIXlv4AKCOcQSt5t%2B7dCfjC4qcFg0mGkb70qWHK0pH3TYPoQXN0Iy3Oy20KeUQEwRlZ5FghS%2F%2FU%2BEIRsJRS0et9NNnNigWVBbizyOkHQljlV02V8hRmnGbG3dK30OSQ8PjAMDBJJMyqMmFS9RfMrgmOiygCDgyndpAP0Yr8lZ1%2BieqfzfeCAMIfRJJ2iXwfCT1XNEKlGWJoQlKR0teVQ1TubE0ULfSOvs%2Fog7WCS5z69s40jVXuveoaA8d6rS7vQZu91BiOsTCq%2Ba67aeP3cr2wi7mzOYOS1xabK0PByaJnesCQmJrYI7%2BoVx4EQpjOpPiD8hmsgc%2FhD5LwpaXTr8RsbpEvcCNM716TbI5Qihg1S20qaNHVxi0xu72G6W7dKf9OK6ZnfUinhkB0o1sDQZcmYvEQ1nbTNACiNKiGbaeIO1W5AUHiWh5PtoQWRpqzp8zgyMesN3%2FwTDC4PJcUVWEn1o57LSVIhTatGO1HP359iYzoW7tpFgDl2P4tc%2Fr%2BzCs%2FZi9BjqkAdJmkyp%2BT7z5dj8spApNO0DBSmo9hFiDAak5Vs%2FqFMrvpU0gJIsihMLAXRQ2TqCZNzlOGz87ChrZi5uVkspLEzMkfbS0chYGVa1Duev%2BVxeR%2Fgmeo5kqAvMGH18D1lBz1Ew0VeLPvviQvg2VJed2t4Vx5HrN9IOI5qPS3%2F6R1h%2B7LZz5viznFCN1%2B2y%2FYelnnqf8YqFZNwDUJ2e6YoyPZsYmdRvn&X-Amz-Signature=1463c85b2aac21c7af49079cb5c12d634af738009ec0fc50e1b3a0bcf4404a93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
