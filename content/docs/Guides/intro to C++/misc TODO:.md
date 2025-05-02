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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJYHH7K%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDjVPThHYjOfgwgJpteEtA0kqaMss%2BOm6pyXdiLNzqLqQIgZjjWbgHKvzavKkspOTyZ8aV1HbGgv3fN6u8tV6w0e%2BUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPikzcTtbUo6oPl3PCrcA62sGXrjNowH0GxAfa4UPhKx7OT19pbG12LpRHF%2Fa2wBT0oFbBuRR2MLTouXgfSMkcMUNXrHz%2Fy1i3tOodl%2F4%2BOpAhlgltlydXtqgcoXzDFO%2FXsDHtl%2BFKqQPrA%2B9Dy0sutCDGpmOy8Hx2b5zH4cRqQQI%2BCNbi3NJiOIdgwzw0PLOSSODo0icFvUvoXxxHw3n2cEi4YDwJyYxSG%2FR4ELND8risZih57wqVokkV%2F0g7MsRHxRk1Vk3mAuZxQg2FCy4%2FWzo2SEHHvx3TV32AjfDDwlfTVIeySpCLYT7jL7zqyE0pYSLSg6m6vshQwL8rnKCAcXm9NGXxT2loK0HYSO35XGwrBM16ex5nchKei27eNt8bSm1Wu6JBtFLCd6xTILLXg60BlyZLX09HzSi5JiS0LFswHxNFLeuA7BFQIvZyE4l7m3HGV1jcSa2Zx3aKZyp2y2YovJxdt%2Bk7ggGpJOK724H71%2B%2BVPknd6Sr32u1YL%2BXUXTjDcsBA8%2FMT0q1o7s%2B%2FiuTxyl4LeHxGLylhwJtRZwC7l%2BSIyHIHr9%2BNTwCxAYYUvwxm8%2FmsvVfBo23bomvSQ4qsm4o44wxxcPXG2EU6mK4O9CXrm3PBaRgmDmBD6%2FhodiPeN9ReuSgVpjMPa80cAGOqUBSk%2Fx0Ebffs%2FBMeY5O2G3T9G4E2F1%2BeY1GcBAqPd4C2gZ%2BWL1WN4fyUBXCGh7OA5bFgKav5MHhPyEwAYs%2BTrJZCEzwZS5rI1y7joSQi%2FcgXCPGi%2FSY5%2BGULhXEqxNL23eO66FwUv7adMrebGChtYleDDqT9zamxCKN640Tfs0STZocbyb3dN05bWWCCbTOu05%2BI%2B77yqrFIigkmFjKx1E9Uda3Ju6&X-Amz-Signature=a3e34f744b837ccd026020c0cee5badd231a2676072725ac682c822c1caac2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJYHH7K%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDjVPThHYjOfgwgJpteEtA0kqaMss%2BOm6pyXdiLNzqLqQIgZjjWbgHKvzavKkspOTyZ8aV1HbGgv3fN6u8tV6w0e%2BUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPikzcTtbUo6oPl3PCrcA62sGXrjNowH0GxAfa4UPhKx7OT19pbG12LpRHF%2Fa2wBT0oFbBuRR2MLTouXgfSMkcMUNXrHz%2Fy1i3tOodl%2F4%2BOpAhlgltlydXtqgcoXzDFO%2FXsDHtl%2BFKqQPrA%2B9Dy0sutCDGpmOy8Hx2b5zH4cRqQQI%2BCNbi3NJiOIdgwzw0PLOSSODo0icFvUvoXxxHw3n2cEi4YDwJyYxSG%2FR4ELND8risZih57wqVokkV%2F0g7MsRHxRk1Vk3mAuZxQg2FCy4%2FWzo2SEHHvx3TV32AjfDDwlfTVIeySpCLYT7jL7zqyE0pYSLSg6m6vshQwL8rnKCAcXm9NGXxT2loK0HYSO35XGwrBM16ex5nchKei27eNt8bSm1Wu6JBtFLCd6xTILLXg60BlyZLX09HzSi5JiS0LFswHxNFLeuA7BFQIvZyE4l7m3HGV1jcSa2Zx3aKZyp2y2YovJxdt%2Bk7ggGpJOK724H71%2B%2BVPknd6Sr32u1YL%2BXUXTjDcsBA8%2FMT0q1o7s%2B%2FiuTxyl4LeHxGLylhwJtRZwC7l%2BSIyHIHr9%2BNTwCxAYYUvwxm8%2FmsvVfBo23bomvSQ4qsm4o44wxxcPXG2EU6mK4O9CXrm3PBaRgmDmBD6%2FhodiPeN9ReuSgVpjMPa80cAGOqUBSk%2Fx0Ebffs%2FBMeY5O2G3T9G4E2F1%2BeY1GcBAqPd4C2gZ%2BWL1WN4fyUBXCGh7OA5bFgKav5MHhPyEwAYs%2BTrJZCEzwZS5rI1y7joSQi%2FcgXCPGi%2FSY5%2BGULhXEqxNL23eO66FwUv7adMrebGChtYleDDqT9zamxCKN640Tfs0STZocbyb3dN05bWWCCbTOu05%2BI%2B77yqrFIigkmFjKx1E9Uda3Ju6&X-Amz-Signature=5bf8a2ac2c4359b2f254f5d33d812c9cc3da38b8af3e75714c588b28daa780d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
