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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLGYOXFQ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCe5%2FhhC%2BE%2BpuALY9P8kHywWA3tgFSdNbiDxjOSy9%2BRqAIgZuzOGO0zfbYcIWX%2FDfe2ng71Tr3unucnntuow4OXbcwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAgyYvS9%2Bs3vYk7XEyrcAz3FEOcypGRPfnAM8l58ssA3phaNwR5z9SgadF1kG88lMhtuajW2%2BCpB3ldfziIZWgnW5koEwQgcFVaBk8heYQn5uM5SfkhnIn%2Bsn9IVnhob8rK%2F3dGQO096S%2FoAZUwf5%2FW%2FSq1zp%2BNnenuxF4BmueeKsItqmNErQwrhUkqtiyx26CbcmPsRXdRqXfVS%2FlqGvTkA9LyZJ3GhuVkarM4ZIC98GVCf0301MglPbdLOeEHhmnxbBI69FAhA9%2FHKLT3y0RCZ4eRbGBU127vsYoYcEwgDh5rxcGcurXbAkVr1haYm%2Bhr5Lm9vbJ%2FnRHOHNs%2BmBMPTwiGxPrxQ%2FozPWOOJ4n7z0CJJLMirO%2Bp%2BXTN0zB2HRV%2Bg68EzE07fw0dN2cSIpaeVvivBH6LCZClSf%2Bsmxf6jNv%2FkUUpzo0gM6eOm%2BehdoL3XceQJe3ajPST6SNhiaR0YYrGRqWtzHfvO2rv1U2Bu9Cwgo1ShtSnk8m7sYms%2F2yTc%2B%2B0sE%2FCpHKsX3fAxg8gig21ZdRJj0kgy5MZOjPjOQh8pW30byJieqagdW35PrHzCJsZsLoLbgLGleBRjpHR07m5feXsVxKVkGtw9WcuSuiVXpW5hXR5M1nUnSHNxPnLEQ0X1rbUzZJ5kMIWgytMGOqUB%2FD5%2Bx%2B%2F01rStmdVICFrYxAtlhWezEFE7deLbf3l61npLwKAL4WuD7IZkUxTEuU4pVHq6PtFy06mSu4HY5BbmiygTWnlb8ngtfwdQPmGx6j2YO5v1MsXQzyrW9zYbReDnZ3l55SSNTZIj2DnYvZfU4GE4CH%2Fn2nHaSWNA4%2BJGA5qvEE%2FE5KdhHMGY3%2BGRQLbdnSsAgNz3y3dVVCoMWzJat2WsCdQ0&X-Amz-Signature=5823750ca6e36f993a78037ae35517bac2c12917748531248e1d8ce0c5684fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLGYOXFQ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCe5%2FhhC%2BE%2BpuALY9P8kHywWA3tgFSdNbiDxjOSy9%2BRqAIgZuzOGO0zfbYcIWX%2FDfe2ng71Tr3unucnntuow4OXbcwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAgyYvS9%2Bs3vYk7XEyrcAz3FEOcypGRPfnAM8l58ssA3phaNwR5z9SgadF1kG88lMhtuajW2%2BCpB3ldfziIZWgnW5koEwQgcFVaBk8heYQn5uM5SfkhnIn%2Bsn9IVnhob8rK%2F3dGQO096S%2FoAZUwf5%2FW%2FSq1zp%2BNnenuxF4BmueeKsItqmNErQwrhUkqtiyx26CbcmPsRXdRqXfVS%2FlqGvTkA9LyZJ3GhuVkarM4ZIC98GVCf0301MglPbdLOeEHhmnxbBI69FAhA9%2FHKLT3y0RCZ4eRbGBU127vsYoYcEwgDh5rxcGcurXbAkVr1haYm%2Bhr5Lm9vbJ%2FnRHOHNs%2BmBMPTwiGxPrxQ%2FozPWOOJ4n7z0CJJLMirO%2Bp%2BXTN0zB2HRV%2Bg68EzE07fw0dN2cSIpaeVvivBH6LCZClSf%2Bsmxf6jNv%2FkUUpzo0gM6eOm%2BehdoL3XceQJe3ajPST6SNhiaR0YYrGRqWtzHfvO2rv1U2Bu9Cwgo1ShtSnk8m7sYms%2F2yTc%2B%2B0sE%2FCpHKsX3fAxg8gig21ZdRJj0kgy5MZOjPjOQh8pW30byJieqagdW35PrHzCJsZsLoLbgLGleBRjpHR07m5feXsVxKVkGtw9WcuSuiVXpW5hXR5M1nUnSHNxPnLEQ0X1rbUzZJ5kMIWgytMGOqUB%2FD5%2Bx%2B%2F01rStmdVICFrYxAtlhWezEFE7deLbf3l61npLwKAL4WuD7IZkUxTEuU4pVHq6PtFy06mSu4HY5BbmiygTWnlb8ngtfwdQPmGx6j2YO5v1MsXQzyrW9zYbReDnZ3l55SSNTZIj2DnYvZfU4GE4CH%2Fn2nHaSWNA4%2BJGA5qvEE%2FE5KdhHMGY3%2BGRQLbdnSsAgNz3y3dVVCoMWzJat2WsCdQ0&X-Amz-Signature=18112b0dabe8ff65bb64148a3633396f816e919b2fe01c263447c32805992126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
