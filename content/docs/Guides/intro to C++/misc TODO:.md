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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISC24TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq85HN6oXW8mIXBCvszLJG%2FsXhEBUJbwSC9%2Ft45lODIwIhAL7UPQIfyv3OQgV8lXH01Sjz3vCmGZzILJQCarZttFMnKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5jXjD2McVo%2F5ylYsq3AMBFMRAJuYQu%2BHX0Nwlt%2B4VpSWhYkI4tH3ZMcXT5u0PbKl98%2FDky%2B4%2FvMLY1vIfoxAB8Mie4Am5CKOap0UHCFcXKUoKO36LrKDOmsogzPZeMWDjWaSQIqzQcwLc3S0zSKKQKxnGqocBbYBmtYLKGqYbTDjy7kPPOt9cAblMNAypn8BeynJJGHWbjjm4hkk33hKLg9ox8WUQWf3kYuvfJy65iy0x9BRZTDUrE4jY8siyI2dQRiaptbZGlzZXI6IFnkRH7LeyepnZp635koucNMf%2BH6IJdcMRWBGE5NBabt7LSrNSWJXviDInQJh7ss91VLotdnkFhm3A5ztpNaLdbYq1sXkRNF6n%2BdR0k9dl3tkmN7LRiDKBrF6ErHl1%2FeKtC6yqCs3CW6%2BymPkMiifUkwgaC9okQjSYOBrjtOxR14LimkQJd3dTSdIPKCBctEhLmnb2BgQsrYheERPpHzK9t%2FZMAoYJFx%2FWh8ftp7IiX9Zk%2BwTFzZYTUu3ddfiW7fuxp%2BuYGlDtg40rNWyJx2D8aT7h90XTDAGypP9%2Bja0OdupGM0PsWEdvW2kLNRC2KfllK%2FEb8oRM96v2laeWZVd%2BEGXeqHVmkwg3ioxItXqhhG0n9hSSk%2B9mph42tqqWtTCE0eDEBjqkAdRvxGj7Dkz%2FAKcHh%2B2kntv9vGOfb2B1Lwa1pRzvX6vx8DG%2FcH2rria4Y21RsdDZPzOcPTJ0%2FUmjp4DMgbQ2HWYpMiz7W8rQxuu0Be%2FdCrcwP9vBkyIGJjiCMRkVsttqCfkM%2FL8iiQGOpnp0WpeRQvNth4wKicRIIvJqYVcX7zgmHe3KueNdczXWqEa7DF5Suka3sGnB7O6mQb01vwLYzIJy6Zwe&X-Amz-Signature=fb1c21f4620711b34ba0f96426a137716b08145347220615064aa823fa30a870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISC24TG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq85HN6oXW8mIXBCvszLJG%2FsXhEBUJbwSC9%2Ft45lODIwIhAL7UPQIfyv3OQgV8lXH01Sjz3vCmGZzILJQCarZttFMnKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5jXjD2McVo%2F5ylYsq3AMBFMRAJuYQu%2BHX0Nwlt%2B4VpSWhYkI4tH3ZMcXT5u0PbKl98%2FDky%2B4%2FvMLY1vIfoxAB8Mie4Am5CKOap0UHCFcXKUoKO36LrKDOmsogzPZeMWDjWaSQIqzQcwLc3S0zSKKQKxnGqocBbYBmtYLKGqYbTDjy7kPPOt9cAblMNAypn8BeynJJGHWbjjm4hkk33hKLg9ox8WUQWf3kYuvfJy65iy0x9BRZTDUrE4jY8siyI2dQRiaptbZGlzZXI6IFnkRH7LeyepnZp635koucNMf%2BH6IJdcMRWBGE5NBabt7LSrNSWJXviDInQJh7ss91VLotdnkFhm3A5ztpNaLdbYq1sXkRNF6n%2BdR0k9dl3tkmN7LRiDKBrF6ErHl1%2FeKtC6yqCs3CW6%2BymPkMiifUkwgaC9okQjSYOBrjtOxR14LimkQJd3dTSdIPKCBctEhLmnb2BgQsrYheERPpHzK9t%2FZMAoYJFx%2FWh8ftp7IiX9Zk%2BwTFzZYTUu3ddfiW7fuxp%2BuYGlDtg40rNWyJx2D8aT7h90XTDAGypP9%2Bja0OdupGM0PsWEdvW2kLNRC2KfllK%2FEb8oRM96v2laeWZVd%2BEGXeqHVmkwg3ioxItXqhhG0n9hSSk%2B9mph42tqqWtTCE0eDEBjqkAdRvxGj7Dkz%2FAKcHh%2B2kntv9vGOfb2B1Lwa1pRzvX6vx8DG%2FcH2rria4Y21RsdDZPzOcPTJ0%2FUmjp4DMgbQ2HWYpMiz7W8rQxuu0Be%2FdCrcwP9vBkyIGJjiCMRkVsttqCfkM%2FL8iiQGOpnp0WpeRQvNth4wKicRIIvJqYVcX7zgmHe3KueNdczXWqEa7DF5Suka3sGnB7O6mQb01vwLYzIJy6Zwe&X-Amz-Signature=54ab5f3f39915a3076a7d8e0b298e8b5f1f036fb56d16a9e39d6fa73ddf57139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
