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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZARFSDH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDgsEBTYNFtcvwkWz1ildsY%2FkNJbtSr7FoJWEroRoCF8AIgRzERhSPXM5FEJKhoVunw9ap9lckFrnB6r7zm8wIp4rIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8M6hbRjcqJBlseCircA4xTCH%2FontePiXOtCLvc8w3GOb6EnEDGGrva4%2FpuYsy%2BHVBK3WZ0SVYm2qwhOlMEAEYB1fwoe2ordAd91N%2BJuwJTdxFhj4%2F9iCsCBXAgHyRJIx1ToFuElRBaAsrFO8hll1SBySt5on%2BQnAdjtqMXCicDyhan3xjp5Pc%2BVivhhlyVLUfgw6BGURIYdErJPvW7dq8VgmFH4vWkw%2BuToS%2Bo4iqLFcWZxv7rjSPygHl5lfCIBEx95OEYd8qq2JlABV0Y%2FsZwVLCGIJE1Ae8UbfrkhhnsGfaMw1LPcEc36bb9tvUHhpLnQmPOAiPCg8kORuG6VthSEoM3G%2FwKg5ULCv%2FmBD%2BgnaSjVcmAlJe%2BvtGXEVVcqE%2FdKSuAPVv9gZ3FYV5o5n6rY9y8%2B0ztl28mPXSNv5LbeydyHNbmbpPBIoh8C2dDpaaukDYyydAMroHPajy9HYbgjPq%2BB8%2B7XHBeOKf0X33UtdUoCmN8IiwsjcEJ%2FZyzQ0U6GphhXerUMsfn%2BjW1YjWbo7tsRQrSLrbRf9WwnvtqUvFRD8aWFVrAfGC0dNzwx7t%2FM3SShP9TIVLgVvZEG%2B45Y2uZ%2BF5FhrE%2BOMGqipWRy%2FmqXdafw%2BvnOtV%2BkE0OphUqW23qA7Hc8jSbMMSpjsEGOqUBFwW%2F%2BoxulfE6J7l2bgxea%2BbxTHbx08Hyn%2BVIkyl7dyyTmxnRO2Pi8LOZYHc3i1uqtObm0CAYDHLfHj4NBNvmU0vWk0jPNFVbWu3Or1fUUx8zUGZSkoXrExvSGTBwyzbfbYG5WEsCdvdKTk8mZ%2BXmpoWSB6VbamciIiJWVpnRWOwcv1y%2B8Y1fz9uinqIDV6x9RheeDJDUokPOaJVgr8FaD1rGpe9n&X-Amz-Signature=d894671610fa027abffb844d70429372dbb58e1d10ac1b891e5c7ac36a5e2317&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZARFSDH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDgsEBTYNFtcvwkWz1ildsY%2FkNJbtSr7FoJWEroRoCF8AIgRzERhSPXM5FEJKhoVunw9ap9lckFrnB6r7zm8wIp4rIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8M6hbRjcqJBlseCircA4xTCH%2FontePiXOtCLvc8w3GOb6EnEDGGrva4%2FpuYsy%2BHVBK3WZ0SVYm2qwhOlMEAEYB1fwoe2ordAd91N%2BJuwJTdxFhj4%2F9iCsCBXAgHyRJIx1ToFuElRBaAsrFO8hll1SBySt5on%2BQnAdjtqMXCicDyhan3xjp5Pc%2BVivhhlyVLUfgw6BGURIYdErJPvW7dq8VgmFH4vWkw%2BuToS%2Bo4iqLFcWZxv7rjSPygHl5lfCIBEx95OEYd8qq2JlABV0Y%2FsZwVLCGIJE1Ae8UbfrkhhnsGfaMw1LPcEc36bb9tvUHhpLnQmPOAiPCg8kORuG6VthSEoM3G%2FwKg5ULCv%2FmBD%2BgnaSjVcmAlJe%2BvtGXEVVcqE%2FdKSuAPVv9gZ3FYV5o5n6rY9y8%2B0ztl28mPXSNv5LbeydyHNbmbpPBIoh8C2dDpaaukDYyydAMroHPajy9HYbgjPq%2BB8%2B7XHBeOKf0X33UtdUoCmN8IiwsjcEJ%2FZyzQ0U6GphhXerUMsfn%2BjW1YjWbo7tsRQrSLrbRf9WwnvtqUvFRD8aWFVrAfGC0dNzwx7t%2FM3SShP9TIVLgVvZEG%2B45Y2uZ%2BF5FhrE%2BOMGqipWRy%2FmqXdafw%2BvnOtV%2BkE0OphUqW23qA7Hc8jSbMMSpjsEGOqUBFwW%2F%2BoxulfE6J7l2bgxea%2BbxTHbx08Hyn%2BVIkyl7dyyTmxnRO2Pi8LOZYHc3i1uqtObm0CAYDHLfHj4NBNvmU0vWk0jPNFVbWu3Or1fUUx8zUGZSkoXrExvSGTBwyzbfbYG5WEsCdvdKTk8mZ%2BXmpoWSB6VbamciIiJWVpnRWOwcv1y%2B8Y1fz9uinqIDV6x9RheeDJDUokPOaJVgr8FaD1rGpe9n&X-Amz-Signature=3528dd8cb2dc39a1ebb9fe8a98c5befdb1a1c19c6e58ddbd07c66a759e58d473&X-Amz-SignedHeaders=host&x-id=GetObject)

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
