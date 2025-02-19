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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4LZ6AH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEb6MVe3bNh9T%2FopOMgExpZ2q9nL6MuOwEiLRC3PC%2BEJAiEA3sY2XjUlhOsnrG5uWfSaRx3Y4mgn458nzjoMcR73e74qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLM0zRT5DZgIauwl7CrcA1NvLUietOxIv03SpHY2KxXFAblMf1OkFNme7bwYL6dswUxVGb1kjtogxrBoP4em%2B9Wyr0HWgLtvw0G8uljFF%2BIbCaWkDgu7KueyhQY6SEYdegdlUKNFP9yH%2B9M6GzJjvUJnal4udVFgSLmpVYuOJMGoQNqn5LWVBXcHOEx%2FGPztbxwYDaNVFGtCo5KzHAw05fgpiFGpAbq0HwbAIprvdweE0K3MP3imnfihTMdjWUGv6SJdEyp9Xv0lbX4wuTvOX78ybh4Ed6pD0efcL3iT8fY64l4g7kzuqer4od%2FlYfxDM%2BWVw07mTIAgtDKeR8qtoL0DlTI6q6ZnQfSELyVnoAx%2BVDuja3I17WiX85cEtpTQq5KeFBK0oiflnaKCpzx%2B6JHXMIWjxlI8E8%2FJ46luFUqGCUHQ7sCQsheNxXxectsSD9%2FyoNHD6qROAByNrnMH048r%2FMfczVit7eBPAdXmJ8ls3xxWec8CYM%2Fefx3bP6C8P%2Bk30jMX5s3HnPRBPIOfyXBgtYpA1%2FS5uEMSmUZTg69%2FHFq2C1j5VvR0AKL3KSJZVFNOdvWiSIZmSXGG%2Bv94Nb%2BhOHjKSeF4KVGhe2YfmkbSVfMNs2VEkjcZq%2BN4XumnvtdbjNP6%2FowXgbpxMOf%2B1b0GOqUBs%2BvoYdvGAl4dmmLZcdwFFoeGEXA430DUNjKg5ewI45FbMTDnXF0ICwva3im2YZU9HFzvPxSclLKzZCVjOavYgHPx3rXqJ2Ha7ZgTVc8PmjH0mHT29VYvAxdMHV%2FsP3NBXEmbkWBZ6ATb1wnraYYYbHgsH4FtAXGXec1KFZYWTk2bxIRwd%2B%2B0RhHW2FnZaVkEkdpVTCTJD179NvyVDHomeJlipnVs&X-Amz-Signature=4fa17819e666cb2b375ce8d31310c34b1fcad51433122fa69e74ecfc031671be&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4LZ6AH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEb6MVe3bNh9T%2FopOMgExpZ2q9nL6MuOwEiLRC3PC%2BEJAiEA3sY2XjUlhOsnrG5uWfSaRx3Y4mgn458nzjoMcR73e74qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLM0zRT5DZgIauwl7CrcA1NvLUietOxIv03SpHY2KxXFAblMf1OkFNme7bwYL6dswUxVGb1kjtogxrBoP4em%2B9Wyr0HWgLtvw0G8uljFF%2BIbCaWkDgu7KueyhQY6SEYdegdlUKNFP9yH%2B9M6GzJjvUJnal4udVFgSLmpVYuOJMGoQNqn5LWVBXcHOEx%2FGPztbxwYDaNVFGtCo5KzHAw05fgpiFGpAbq0HwbAIprvdweE0K3MP3imnfihTMdjWUGv6SJdEyp9Xv0lbX4wuTvOX78ybh4Ed6pD0efcL3iT8fY64l4g7kzuqer4od%2FlYfxDM%2BWVw07mTIAgtDKeR8qtoL0DlTI6q6ZnQfSELyVnoAx%2BVDuja3I17WiX85cEtpTQq5KeFBK0oiflnaKCpzx%2B6JHXMIWjxlI8E8%2FJ46luFUqGCUHQ7sCQsheNxXxectsSD9%2FyoNHD6qROAByNrnMH048r%2FMfczVit7eBPAdXmJ8ls3xxWec8CYM%2Fefx3bP6C8P%2Bk30jMX5s3HnPRBPIOfyXBgtYpA1%2FS5uEMSmUZTg69%2FHFq2C1j5VvR0AKL3KSJZVFNOdvWiSIZmSXGG%2Bv94Nb%2BhOHjKSeF4KVGhe2YfmkbSVfMNs2VEkjcZq%2BN4XumnvtdbjNP6%2FowXgbpxMOf%2B1b0GOqUBs%2BvoYdvGAl4dmmLZcdwFFoeGEXA430DUNjKg5ewI45FbMTDnXF0ICwva3im2YZU9HFzvPxSclLKzZCVjOavYgHPx3rXqJ2Ha7ZgTVc8PmjH0mHT29VYvAxdMHV%2FsP3NBXEmbkWBZ6ATb1wnraYYYbHgsH4FtAXGXec1KFZYWTk2bxIRwd%2B%2B0RhHW2FnZaVkEkdpVTCTJD179NvyVDHomeJlipnVs&X-Amz-Signature=e10066855582dbf0d4575c3630c2cdde36a493c235be7b8169715cac83b8d10e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
