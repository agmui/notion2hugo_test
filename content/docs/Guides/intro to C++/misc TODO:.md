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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCU4CMSR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFX4ZCeN%2BwT4lhSmo%2BjWoJBVP2g37THKCXhz42ntEJSCAiAiPhXW3n0NzbmOLfMbwbdiramUwbVlVkD%2FXQGcg99%2BqSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMxUJPAb0aH1FIqPBuKtwDIypxpX%2F4cAqf%2FNrpjxy1Tvmd3r7U4M7bmcs8wbybOn6sQEetUw7wllHhHgmcxzlRPpW5dMe0QbkzoqCcw%2F6w5QSbevzpKdwZl1oTTuyujv5H3UifTNoad4dWUX2wrnc8CtMz3ozH91JClMCwgAYvc71KFZi%2FfWDsiKSrFG2hS2wkpNDIbLxOP7cWu0aeNduDuwGBH8f0Yu2LgRl2cWcxOU%2FDWN%2BC%2B4WE%2BN05tw0NYao%2B7htLRdLOnYiivicIjVSykEwQw3Fky8EDRO4mh%2FcmzMgfeMzjCN9uO0%2B%2BxHtrCqsUnkjcvQqvuv52bbH2w5I9CdzFX%2FTrN9QrtQpnKGMX0FtUugWhicAQlQReaH2s%2B46G%2Bh5i2qrSeDM3neYupAp3SbXohD01yh6ZXRnges44AZkvyeOIlRoNjyXvoqg%2BesCvev3eMgPyjaqtRBjFI9FGsVQPqK7olLDjW9WSrnDk3QgGoVHbj3m7puTgSu829m%2BqlJclotZwC5GNCX5pz6ekjydzlq%2FSJbLfKF2inTRLiIo4McP8EqCsjBjuz5yfrgwaPaTqIh6NKEpxOKi7aIee1Y2Ok3ZkDI7MNyLoMxae%2Fyl8N9qUzgMEJoEJNLxE%2BQ9D3PkZfMwXlbq%2FHSswpoyNvQY6pgGk8yV9uINSbHyE2OBFznvMrgCftnxiNxELgg4e204i4xLivvQNcuOMxdkytMf6dALxVhFvL1inafSYU%2FV3HS%2BXXDzRANyXqTymAjb1R3e0XfieaNSKHwgh4bQ4LShlYOGB2ITLhChgbdgpetUXoRYwNAlG50ya9o59rFyokEQJM3ZWkgfJ1nnYkS16xkhkInin0rANjZL%2BlySopIMvoxowLnupxifr&X-Amz-Signature=11f24fa3db63e453ff4c1f5eacc31c5f97a3a2f084e8e3f0a44595137278a312&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCU4CMSR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFX4ZCeN%2BwT4lhSmo%2BjWoJBVP2g37THKCXhz42ntEJSCAiAiPhXW3n0NzbmOLfMbwbdiramUwbVlVkD%2FXQGcg99%2BqSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMxUJPAb0aH1FIqPBuKtwDIypxpX%2F4cAqf%2FNrpjxy1Tvmd3r7U4M7bmcs8wbybOn6sQEetUw7wllHhHgmcxzlRPpW5dMe0QbkzoqCcw%2F6w5QSbevzpKdwZl1oTTuyujv5H3UifTNoad4dWUX2wrnc8CtMz3ozH91JClMCwgAYvc71KFZi%2FfWDsiKSrFG2hS2wkpNDIbLxOP7cWu0aeNduDuwGBH8f0Yu2LgRl2cWcxOU%2FDWN%2BC%2B4WE%2BN05tw0NYao%2B7htLRdLOnYiivicIjVSykEwQw3Fky8EDRO4mh%2FcmzMgfeMzjCN9uO0%2B%2BxHtrCqsUnkjcvQqvuv52bbH2w5I9CdzFX%2FTrN9QrtQpnKGMX0FtUugWhicAQlQReaH2s%2B46G%2Bh5i2qrSeDM3neYupAp3SbXohD01yh6ZXRnges44AZkvyeOIlRoNjyXvoqg%2BesCvev3eMgPyjaqtRBjFI9FGsVQPqK7olLDjW9WSrnDk3QgGoVHbj3m7puTgSu829m%2BqlJclotZwC5GNCX5pz6ekjydzlq%2FSJbLfKF2inTRLiIo4McP8EqCsjBjuz5yfrgwaPaTqIh6NKEpxOKi7aIee1Y2Ok3ZkDI7MNyLoMxae%2Fyl8N9qUzgMEJoEJNLxE%2BQ9D3PkZfMwXlbq%2FHSswpoyNvQY6pgGk8yV9uINSbHyE2OBFznvMrgCftnxiNxELgg4e204i4xLivvQNcuOMxdkytMf6dALxVhFvL1inafSYU%2FV3HS%2BXXDzRANyXqTymAjb1R3e0XfieaNSKHwgh4bQ4LShlYOGB2ITLhChgbdgpetUXoRYwNAlG50ya9o59rFyokEQJM3ZWkgfJ1nnYkS16xkhkInin0rANjZL%2BlySopIMvoxowLnupxifr&X-Amz-Signature=0cd90ea64f05a922669d756943e354e4b9842e98a38e4760b1e67f8652fd0072&X-Amz-SignedHeaders=host&x-id=GetObject)

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
