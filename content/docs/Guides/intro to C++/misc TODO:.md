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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWOYXDP7%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID42KH%2FRWf2DgWB5PrSplxTVcnbXSRAr9wV4b3xFzid%2FAiEA6RPdJ0nd8scXg0%2F%2FdKDUS3YOH4w4F2X4hB5PNGDwglsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyQmcNQLnU3rq2%2FWCrcAwh0sIKVwLmwsqFRM7LuS0fC9339tqQYqie3h43ULnIXpHEwEJ53SD3coMvTZwhlDqNlWY31Lj7jfQlSWctmsofXK4f%2FK4bVKRAyKNG42evuYdCLeNmoHg%2F%2BgdRqHDPSj2FzRPZXBDtn%2B%2FeufO%2FzPCCxtzeCKeMacrRejAg6huvm%2Buhl6xKAL7pspLBg%2BKtHca15m1bzC1V9Dtn8WENCDIEoc%2Bh%2BLYpnPDgl3Fv0Sq1FJo5JN1BTh4nS0JTWe9h%2BhCWHrTSRgqdH%2BTAk8UQjEkD2bW35YL1kuy6cgixTa5rrU1kj7LA6yy50dzCR%2FOsE0iLFKsFPdSoDQemKL1sbs5t7SMP%2B4GX9Wx2zucztBmoWCHqEjakxP7s%2FWzma3QywugJ6ONT6e5a2biBZP8o8pu1VrTo%2FkQHPVFhVCg2N0J%2BOfGVp3Ohw5ArwLd0EDTEsDXmQcbcvebEmAJCiztQnmP1zJ8hLqsWefYSQewqBRzBQMpUwKOgAVU4eCQSDhj7ye7yLtmy7OVnj71N0GrYF4mZd2JDPGFYMEuQCS%2BWhvqDbtYlEED8Ztql510NGZEDvpUmSxI479pO1k0JvXn107Z599aTPIWpW0oanXiquEjp2K%2BL%2F9FgSbdbvutMvMKiy4cEGOqUBivp9WRqveO9RmQZBH3nrG%2FMFe0bFF%2Fmzfi%2F5Lwypo5IcqEKtv7f6CMvQqPaBNSG3r1pg1XUVnbquiMz7iVjP53sHOslwIGAsjU6Ta%2FZYNjK1w4mFuDTNqd095RvH4JLGFgqD200N%2FCcbv8Qa3c0y6rF%2FCVw3iP%2F1nEDZu84Clnx9PyfC4FWzMsPDFJJ3%2FWE4%2Bz4WkOYliZAOE%2B3Dl%2FmGUrS06abW&X-Amz-Signature=56374a79013c4b96d31de4ac597feca993f5316b6d8935314d7cdb4c4708b5ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWOYXDP7%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID42KH%2FRWf2DgWB5PrSplxTVcnbXSRAr9wV4b3xFzid%2FAiEA6RPdJ0nd8scXg0%2F%2FdKDUS3YOH4w4F2X4hB5PNGDwglsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyQmcNQLnU3rq2%2FWCrcAwh0sIKVwLmwsqFRM7LuS0fC9339tqQYqie3h43ULnIXpHEwEJ53SD3coMvTZwhlDqNlWY31Lj7jfQlSWctmsofXK4f%2FK4bVKRAyKNG42evuYdCLeNmoHg%2F%2BgdRqHDPSj2FzRPZXBDtn%2B%2FeufO%2FzPCCxtzeCKeMacrRejAg6huvm%2Buhl6xKAL7pspLBg%2BKtHca15m1bzC1V9Dtn8WENCDIEoc%2Bh%2BLYpnPDgl3Fv0Sq1FJo5JN1BTh4nS0JTWe9h%2BhCWHrTSRgqdH%2BTAk8UQjEkD2bW35YL1kuy6cgixTa5rrU1kj7LA6yy50dzCR%2FOsE0iLFKsFPdSoDQemKL1sbs5t7SMP%2B4GX9Wx2zucztBmoWCHqEjakxP7s%2FWzma3QywugJ6ONT6e5a2biBZP8o8pu1VrTo%2FkQHPVFhVCg2N0J%2BOfGVp3Ohw5ArwLd0EDTEsDXmQcbcvebEmAJCiztQnmP1zJ8hLqsWefYSQewqBRzBQMpUwKOgAVU4eCQSDhj7ye7yLtmy7OVnj71N0GrYF4mZd2JDPGFYMEuQCS%2BWhvqDbtYlEED8Ztql510NGZEDvpUmSxI479pO1k0JvXn107Z599aTPIWpW0oanXiquEjp2K%2BL%2F9FgSbdbvutMvMKiy4cEGOqUBivp9WRqveO9RmQZBH3nrG%2FMFe0bFF%2Fmzfi%2F5Lwypo5IcqEKtv7f6CMvQqPaBNSG3r1pg1XUVnbquiMz7iVjP53sHOslwIGAsjU6Ta%2FZYNjK1w4mFuDTNqd095RvH4JLGFgqD200N%2FCcbv8Qa3c0y6rF%2FCVw3iP%2F1nEDZu84Clnx9PyfC4FWzMsPDFJJ3%2FWE4%2Bz4WkOYliZAOE%2B3Dl%2FmGUrS06abW&X-Amz-Signature=a10a0c78f3ec3928411bf58afe0eb0366e88059b337df63e62df8d9a698e7a00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
