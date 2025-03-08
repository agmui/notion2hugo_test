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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFRMX2O%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCCm2lhaS2RUYOLL0wt7fp1yGd6JKs5Fz1i633Y3Z7ALwIhAPCM35SQZYTPbb0Lmh50txmuR6hcMP8jIWC6FWfo2zqrKv8DCFQQABoMNjM3NDIzMTgzODA1IgxWTWg6eWx%2B%2Fr4H%2BMcq3AMxHw6mzBf9PENhy1A3PhGdzhHdR5GPmTyZxIzltFu8TXLmrA%2BrTsPRTOVnuFPPZGfHT%2BWAPXeqt9FrKXUJ35L2RIF0YjLzVEY9%2F2PwdA%2F8MOfyJl%2B5VHVVjCj4ZlKHEZfQylc0LQ6Nkk8NMZnGkmOFQS0poVoU8Phx2bZHrdyeLch1rCGp%2FoAjteq3B1CeQuJgX5mvu74EB8liypbr%2FRdhDbf5cZUjHC1CRz%2BLL6dLMid2AXH9RLrxrlV1UPAcF2W9oxAf6HeLj%2BRD6sXY%2BHJPgkHgOoFqatBXUpak7bZcQFobyvJgiOum%2FNlPFE81m58cA1XDycXgPo%2Bb7bQ3D%2BZiRcQMeg1mjckS%2BP5bShaCzZIMuGjmGajakQFEeGG34Ytbs7Rh%2FZZtLOSHBgF%2F3u9QbFj1jC%2Bl7yUwJhYUrQNPqPDam9KifiNGwg5BgPRSRUGKXk%2BIWhJcReHISFOLOJmErsJToTk6celwIS4cMgs0bE1YQukKMdTXVDOsI0rBQO13vI8hujUdyK%2F%2FUuPf6qkVZ0gHBJcE%2BKICG0mSPLo%2FlT4a0%2FeXWV2oOSkVvkEziEDhtwaw9vjOcpBbN3I4U6jEFyXsZxIXKP1IEHoatqw2lop%2B8VStZxe8W9%2BzKzCN3a6%2BBjqkAcyDQJkz0BGTM5pPlYCMSefmeI7lXJZJUHp3m649mCkW9evu%2FLwYPqZgYcVcpZQwyqrGhBBRgMCpKOMR%2FJ%2F2D8x2oNdp%2BTwlYCLnll%2FLKSVsEOun9ug%2FaOp61fp4hcUW7EeGMhXhYeyIiGp%2FsyB7rJmvi%2F%2B2S5iw1%2Fsp5A0q2R5pTQnOhWkS58IYxvzKamBRUhaGiG5nYSMDyhx7WoZ1ajpuvwVA&X-Amz-Signature=9da102391ea5fe6fe6de14db6a942f27f23c3ee6692bda4aa2aef211f8375cdb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFRMX2O%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCCm2lhaS2RUYOLL0wt7fp1yGd6JKs5Fz1i633Y3Z7ALwIhAPCM35SQZYTPbb0Lmh50txmuR6hcMP8jIWC6FWfo2zqrKv8DCFQQABoMNjM3NDIzMTgzODA1IgxWTWg6eWx%2B%2Fr4H%2BMcq3AMxHw6mzBf9PENhy1A3PhGdzhHdR5GPmTyZxIzltFu8TXLmrA%2BrTsPRTOVnuFPPZGfHT%2BWAPXeqt9FrKXUJ35L2RIF0YjLzVEY9%2F2PwdA%2F8MOfyJl%2B5VHVVjCj4ZlKHEZfQylc0LQ6Nkk8NMZnGkmOFQS0poVoU8Phx2bZHrdyeLch1rCGp%2FoAjteq3B1CeQuJgX5mvu74EB8liypbr%2FRdhDbf5cZUjHC1CRz%2BLL6dLMid2AXH9RLrxrlV1UPAcF2W9oxAf6HeLj%2BRD6sXY%2BHJPgkHgOoFqatBXUpak7bZcQFobyvJgiOum%2FNlPFE81m58cA1XDycXgPo%2Bb7bQ3D%2BZiRcQMeg1mjckS%2BP5bShaCzZIMuGjmGajakQFEeGG34Ytbs7Rh%2FZZtLOSHBgF%2F3u9QbFj1jC%2Bl7yUwJhYUrQNPqPDam9KifiNGwg5BgPRSRUGKXk%2BIWhJcReHISFOLOJmErsJToTk6celwIS4cMgs0bE1YQukKMdTXVDOsI0rBQO13vI8hujUdyK%2F%2FUuPf6qkVZ0gHBJcE%2BKICG0mSPLo%2FlT4a0%2FeXWV2oOSkVvkEziEDhtwaw9vjOcpBbN3I4U6jEFyXsZxIXKP1IEHoatqw2lop%2B8VStZxe8W9%2BzKzCN3a6%2BBjqkAcyDQJkz0BGTM5pPlYCMSefmeI7lXJZJUHp3m649mCkW9evu%2FLwYPqZgYcVcpZQwyqrGhBBRgMCpKOMR%2FJ%2F2D8x2oNdp%2BTwlYCLnll%2FLKSVsEOun9ug%2FaOp61fp4hcUW7EeGMhXhYeyIiGp%2FsyB7rJmvi%2F%2B2S5iw1%2Fsp5A0q2R5pTQnOhWkS58IYxvzKamBRUhaGiG5nYSMDyhx7WoZ1ajpuvwVA&X-Amz-Signature=ecd61bd9209a22f3658cb66b9641048781e8e3f18e7dc16817260bea9deaf530&X-Amz-SignedHeaders=host&x-id=GetObject)

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
