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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ6RGNVB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAqFttC%2F7LCjZn0lABSA2fcy7Heein4Mta8PGaNnU%2BYRAiBg40pV20ki1RRkTe8H96sOchVkTElPhT%2BQDaxBCsAZOCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMnxr87FldIfvjJ5x1KtwDhybVWko3eL7q0bx1BZQ4OBZ92gFnMiWZPqxfEjCTAByF9ZZYV%2Fc%2B2P02DQugUs0HTbZW%2FLzzbTBoUYrmI31s84%2Bk0OM3XGJVnJ3OAIupuNbnPwpTHYCdhLj%2B%2BMPWB%2Bv7mFBq2G5CP8fs7l6EDYCpLJWO0fBsa9GG7ab5vaCUbKxhDfsoiB35uz8kWLHZ%2F02n7HNcR4GkVkFPdAtLW50ezFmGBoLiiH4k5cQR7QhEUpVJF8%2F%2BUaYX40ppWdOJMldHq3HFoIspu3xxsHvcRGVuy9BMtX7rO6bGcIdTuKTMxbB14PEGCf%2FuwnmLYxyFZctxwJN641oO7ZEys3UTzoGlSKPvmubCgxFvScHi9bV8a6E%2BJgr7xxVVMGUoJbsyUX6ezez%2BREj6Ov%2Fevm3Ydv0zgXO7oWS0rVG7mWMgXMOqDp3jO5GRzGowk1s%2BA6Ax7V0LHyCMNQpVcD5g%2FN4cSD%2BRBAIyRQPxF1NkzWSuKxbxDGpwbicDIqY%2FEmrgrEuhYyUFmlM79ELQql4%2BaNRYuQTqCaX5qTpd4vLuhJt8EVt5N5NjG%2F32gXiL4QEX6Q4%2BCqsX%2FGjd9UVrZkJwGgSJAG88fz6X45l1oA7GBMeq0RtWfczqzqrxvzG3DecundswzOzJwQY6pgHYHMvODfNtgbCKoXF3%2FsMe63DJo0XEg7TppCIdgcvd2mXBWYzl59JUX97Dy6sUB3wZ9Clgjko42xM5jFnDRu8IMNcGvhz0yTtvb%2FybFCTr9jt2zRP0Rw3kJOtYzKHIQX%2B78WFLIUe29JEij2hH0pAfoBlRS29aDjjT80DJVxZe3PBBXEPt29VkTbKBF7FeMhR8azRV9zR%2BOIAZtDmfCFw5NWcutjk%2B&X-Amz-Signature=16242938631f3fdd146c80347dba647a0035285ca584e666ecda615f0d2f93ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ6RGNVB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAqFttC%2F7LCjZn0lABSA2fcy7Heein4Mta8PGaNnU%2BYRAiBg40pV20ki1RRkTe8H96sOchVkTElPhT%2BQDaxBCsAZOCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMnxr87FldIfvjJ5x1KtwDhybVWko3eL7q0bx1BZQ4OBZ92gFnMiWZPqxfEjCTAByF9ZZYV%2Fc%2B2P02DQugUs0HTbZW%2FLzzbTBoUYrmI31s84%2Bk0OM3XGJVnJ3OAIupuNbnPwpTHYCdhLj%2B%2BMPWB%2Bv7mFBq2G5CP8fs7l6EDYCpLJWO0fBsa9GG7ab5vaCUbKxhDfsoiB35uz8kWLHZ%2F02n7HNcR4GkVkFPdAtLW50ezFmGBoLiiH4k5cQR7QhEUpVJF8%2F%2BUaYX40ppWdOJMldHq3HFoIspu3xxsHvcRGVuy9BMtX7rO6bGcIdTuKTMxbB14PEGCf%2FuwnmLYxyFZctxwJN641oO7ZEys3UTzoGlSKPvmubCgxFvScHi9bV8a6E%2BJgr7xxVVMGUoJbsyUX6ezez%2BREj6Ov%2Fevm3Ydv0zgXO7oWS0rVG7mWMgXMOqDp3jO5GRzGowk1s%2BA6Ax7V0LHyCMNQpVcD5g%2FN4cSD%2BRBAIyRQPxF1NkzWSuKxbxDGpwbicDIqY%2FEmrgrEuhYyUFmlM79ELQql4%2BaNRYuQTqCaX5qTpd4vLuhJt8EVt5N5NjG%2F32gXiL4QEX6Q4%2BCqsX%2FGjd9UVrZkJwGgSJAG88fz6X45l1oA7GBMeq0RtWfczqzqrxvzG3DecundswzOzJwQY6pgHYHMvODfNtgbCKoXF3%2FsMe63DJo0XEg7TppCIdgcvd2mXBWYzl59JUX97Dy6sUB3wZ9Clgjko42xM5jFnDRu8IMNcGvhz0yTtvb%2FybFCTr9jt2zRP0Rw3kJOtYzKHIQX%2B78WFLIUe29JEij2hH0pAfoBlRS29aDjjT80DJVxZe3PBBXEPt29VkTbKBF7FeMhR8azRV9zR%2BOIAZtDmfCFw5NWcutjk%2B&X-Amz-Signature=c3b45c0f939293ca63600a688260ef27a4bd4f4f991450bff430d28b3fc718b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
