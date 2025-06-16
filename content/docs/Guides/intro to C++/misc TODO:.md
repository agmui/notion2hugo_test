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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LHFVGLR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDlzTjp6jg37EZKSMOoU2kujane24OX3SSoqDKAvASGLAIgFIZW%2Bj7WwCMDWpuXdo00fphMLNBMdmahIuAuPX1obDoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOQupZ7%2Bsraa3W%2B%2FPCrcA8CWqf4%2FkaXBkLNhpTFA3Nw%2B9L9imDmx1z2KBmrqzCaowN880ccExhqXLpxORGR5J8PYGKVyd5U0j%2FfIPsBgMHyxs0lg7SL1p4uKHJOyoUiDXSpYA2vQswKSz28YLwUeTjAt%2BClpxBdC%2F%2Ff%2FiT%2B5d%2Bf3Eb%2F4yLUK8W51fiAWCjP8sltyWfHVDbRSK47lNJSfBIIoue34s%2BVGWEtOLtuadGiNbOrPvIitcM7%2F4UHGBOyT3BrbpZbEMjwdEX4g1MKRd%2BhrREm2DCWQQPdONBaYzYbmyC%2FSttjl2rJCwP3xxPNaUpYYnTPP6q9HfQrX4hgJSudHSuamTktu8GvmrUf5mWvSCtg1NuR1Pl%2B4WIP53qi2PaMT4PW%2FczUbrtHPeXjHOcnAzF4lvqUm5raaFuyMkbjDJJoPQb1jTtwCWOn3pBN%2BDTJc04ZF3wXHfJZ2CbJwFKgmKfSicFK7nfE5MKivvMoFuhCD8PDujJ%2B7Di7kO%2FUuC7KvcNQc1SnVPM0zarFGQHWDwpjZ%2BlDol6GibNx3pYlqImXiHhsQbMi%2BdjSDIy%2BrqWjHDjS3z2sPF7UyxuxNvVgWT%2BnOhhPSJR2iBfvIk12Hlv3QxSpufyI1Lj9HAoC4mGxxn6yDnJ0h6MnpMKK0v8IGOqUB%2BSgsSX%2Fjnbx9kvljF2C3AW0AvB9am2Q4E%2FprO8jORIFnoRvO251EFKFEmyt0ZonSAwppnMv6X8EMjRPXUV8Oi5PljPSkwgwb2JOXCSpe%2FTit1bdGdnvq1TAMF2fFLA2l7TJnef41Mc34ziY3Wd%2Bz2EYWQyseEfbIBAu0gJ0Tkk8PUyUft12UDFY0M3ejUEV9RcHbxVDf%2BgUxhWxvAYNzCy5A7cDR&X-Amz-Signature=4b0e93e1d250748a3742ba6c3c1c6c1bfd1cb6bbeb1cd4424556fd804c6b2cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LHFVGLR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDlzTjp6jg37EZKSMOoU2kujane24OX3SSoqDKAvASGLAIgFIZW%2Bj7WwCMDWpuXdo00fphMLNBMdmahIuAuPX1obDoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOQupZ7%2Bsraa3W%2B%2FPCrcA8CWqf4%2FkaXBkLNhpTFA3Nw%2B9L9imDmx1z2KBmrqzCaowN880ccExhqXLpxORGR5J8PYGKVyd5U0j%2FfIPsBgMHyxs0lg7SL1p4uKHJOyoUiDXSpYA2vQswKSz28YLwUeTjAt%2BClpxBdC%2F%2Ff%2FiT%2B5d%2Bf3Eb%2F4yLUK8W51fiAWCjP8sltyWfHVDbRSK47lNJSfBIIoue34s%2BVGWEtOLtuadGiNbOrPvIitcM7%2F4UHGBOyT3BrbpZbEMjwdEX4g1MKRd%2BhrREm2DCWQQPdONBaYzYbmyC%2FSttjl2rJCwP3xxPNaUpYYnTPP6q9HfQrX4hgJSudHSuamTktu8GvmrUf5mWvSCtg1NuR1Pl%2B4WIP53qi2PaMT4PW%2FczUbrtHPeXjHOcnAzF4lvqUm5raaFuyMkbjDJJoPQb1jTtwCWOn3pBN%2BDTJc04ZF3wXHfJZ2CbJwFKgmKfSicFK7nfE5MKivvMoFuhCD8PDujJ%2B7Di7kO%2FUuC7KvcNQc1SnVPM0zarFGQHWDwpjZ%2BlDol6GibNx3pYlqImXiHhsQbMi%2BdjSDIy%2BrqWjHDjS3z2sPF7UyxuxNvVgWT%2BnOhhPSJR2iBfvIk12Hlv3QxSpufyI1Lj9HAoC4mGxxn6yDnJ0h6MnpMKK0v8IGOqUB%2BSgsSX%2Fjnbx9kvljF2C3AW0AvB9am2Q4E%2FprO8jORIFnoRvO251EFKFEmyt0ZonSAwppnMv6X8EMjRPXUV8Oi5PljPSkwgwb2JOXCSpe%2FTit1bdGdnvq1TAMF2fFLA2l7TJnef41Mc34ziY3Wd%2Bz2EYWQyseEfbIBAu0gJ0Tkk8PUyUft12UDFY0M3ejUEV9RcHbxVDf%2BgUxhWxvAYNzCy5A7cDR&X-Amz-Signature=e9d5d32d59cf5928ac73dc339a23e1a3e4dd3a6e416e9e49ec65a0a9e934b69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
