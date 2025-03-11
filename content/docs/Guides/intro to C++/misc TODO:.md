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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCX2QKI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCqU5i7C5k1Y1V5uM7GwEglvlLzzP7lmRJOMdQwxHPrLAIgO3hnh%2Fp6JJt7ITkDoR%2BeJmhPu4Y5y1w%2BmZDEc5p9JUUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIyVJf%2B8cttaf63uircA82XZfKykkEmdUM3U6qo%2FB1Nt5YA%2BZBSSvFvO53p71NXbwb%2BQVZg6SMVNDuupEqKNHjU3G87MdWPP4KCa%2FgNksvH77LKjpOYGPqmXrgQzs7v3g34z6LcnZ4PIuo3YVcQcqL3E%2FLYnpp8YA1PqBkJpVHnLw223P0jmoP1CP6FLP%2FhpUxhuA6cUTHWneMZWM19YW%2FnTCiPtTeJ%2FP46nKbEobbnDoJIYPy%2BPzIQTczlJHZPQRwCUth9I0FxH%2FH1PmTWjCd5yFpAmniROV%2F7gKSBRdw4I99qPwftGdxCTSmCE1dgWn2EbQwnVi2ax98ki%2B6lpHRsknLOcvW5ZVotcLr0673XjlYSIsjNluUUW47laFM7GCA%2Fy456hfXi%2FbK1mT489lHeO5%2Bxbmsg0brMYZDroDzuN9feQn4PLGWa42%2B4BnnKWCLou2%2Fe4ZdssBeigIYnwLcAZPq2JcB8PKzYFiMs%2Ft9ZDeGWM%2FwkzsxQ4KA5XZWu%2Fs8n%2BZGvv65TdgA7PAk3QkGMmYiMDWS8DGdF2T86KsP6yeKDIP9Of%2F5QeKH8XR3WLw5qItQ%2FjsmH50fgFABXuFyN6Yqs65gbSDfHx2z%2BNDXs%2FK%2FagThMwnRw8ZgXsDGOJVOXmSfWNiJ%2BXRMCMOrywb4GOqUBFchzAQf6b5QdHSpcqMVm%2B6VerL8MGk41fI2iYXKTfU9BZTbD%2FEuvLOy7896KflsCF8orv6OYr9ZXF%2FJ%2F6NvI8P0Qa6JXcxBae7XP8h4bjekfOu%2FLQoGMqYE2hYXiZoazpHCAeXQGNzTOyQBFBx7teWMWfXk7PFRcb2RhJVn%2B%2B%2BAFFqmD7JrbSyrXCzIIIOAfAdwHdaG5%2Bl1NCWqhZQEMpsx%2Bo5zY&X-Amz-Signature=98323a6a995c9b2f8c05d843b118efd356f581860ea471420cd9ea3e06ec37f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCX2QKI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCqU5i7C5k1Y1V5uM7GwEglvlLzzP7lmRJOMdQwxHPrLAIgO3hnh%2Fp6JJt7ITkDoR%2BeJmhPu4Y5y1w%2BmZDEc5p9JUUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIyVJf%2B8cttaf63uircA82XZfKykkEmdUM3U6qo%2FB1Nt5YA%2BZBSSvFvO53p71NXbwb%2BQVZg6SMVNDuupEqKNHjU3G87MdWPP4KCa%2FgNksvH77LKjpOYGPqmXrgQzs7v3g34z6LcnZ4PIuo3YVcQcqL3E%2FLYnpp8YA1PqBkJpVHnLw223P0jmoP1CP6FLP%2FhpUxhuA6cUTHWneMZWM19YW%2FnTCiPtTeJ%2FP46nKbEobbnDoJIYPy%2BPzIQTczlJHZPQRwCUth9I0FxH%2FH1PmTWjCd5yFpAmniROV%2F7gKSBRdw4I99qPwftGdxCTSmCE1dgWn2EbQwnVi2ax98ki%2B6lpHRsknLOcvW5ZVotcLr0673XjlYSIsjNluUUW47laFM7GCA%2Fy456hfXi%2FbK1mT489lHeO5%2Bxbmsg0brMYZDroDzuN9feQn4PLGWa42%2B4BnnKWCLou2%2Fe4ZdssBeigIYnwLcAZPq2JcB8PKzYFiMs%2Ft9ZDeGWM%2FwkzsxQ4KA5XZWu%2Fs8n%2BZGvv65TdgA7PAk3QkGMmYiMDWS8DGdF2T86KsP6yeKDIP9Of%2F5QeKH8XR3WLw5qItQ%2FjsmH50fgFABXuFyN6Yqs65gbSDfHx2z%2BNDXs%2FK%2FagThMwnRw8ZgXsDGOJVOXmSfWNiJ%2BXRMCMOrywb4GOqUBFchzAQf6b5QdHSpcqMVm%2B6VerL8MGk41fI2iYXKTfU9BZTbD%2FEuvLOy7896KflsCF8orv6OYr9ZXF%2FJ%2F6NvI8P0Qa6JXcxBae7XP8h4bjekfOu%2FLQoGMqYE2hYXiZoazpHCAeXQGNzTOyQBFBx7teWMWfXk7PFRcb2RhJVn%2B%2B%2BAFFqmD7JrbSyrXCzIIIOAfAdwHdaG5%2Bl1NCWqhZQEMpsx%2Bo5zY&X-Amz-Signature=15d37370f2bb567345c41c96c5a4c52e6639778f78a7c32eb6e002418fd84e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
