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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFRCD5O%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIB2FiXT92xqwQj2kf8YuFhybQqgLG0QcYCzp1lTHr%2FpjAiEAvuevfYcxZ0d6noYCTaubRZAp00YqbcTdByxhVk1FSYwqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxG2LVBhUaiEY7BWSrcAyXqmani2KdY%2BQOALSN0wShS3nF5jSMZhLMyCJf5Jb6pjCpDKpkypiCUR9qRk8J50CH6CrFu896qn7cm%2FiB9VaoYFqh1%2BXUzyYDWeIWLVhfvRPPXL61nvzYEBCDZRcbEwCI66VDnjjtc4lxSU%2BwNTGflMuLMMi%2BU9gw%2BdTy6gRoJIT77b4F2wxkfB7Au0c86M6vy32YwDrSzoI9URAYbKstxC2wfEyFHU8it%2Fme4mbwuXmCSlv7colTbHaeyyqgX2Ap39xyB%2BEhdX2XC6CPv85LiwmdRs251OWwKW9XhA8%2BYqjCBulBrNDTV%2BMN3AhwI5aKF8n5yE4lvoM9QoRzQxTuQyaQOcXLarjv3IiXea1VUYIkC1%2BXuAw1Co97CkkNJRfJKhafvHATWVFFzVx9x%2BU2oz8Xwv50%2FeIOY2cTxx%2FDIlhOws2t1PDkjy4zcRtrhsTkCRl9DNaD%2BAxzJqoj1pNlICxQzWiaMzCiwlOHSp4OitKMEpwMWzgK2GYF3gxy1wx152xdO1sDLdY%2F5hUN7BmOP9lqp7zxklNfyuCpJ5KvmeRT9XvOvZ6aqYUIrTgZAjIAvGD88fR40F0aYCKq0xfzSLTrheAmYvPgTHuXgrWXHrokVDIDvD92vCSyDMICHkMEGOqUBvTCr06M%2B3X4ee2rBuSyuHZ260doxP5JwI5tPZ9IVlUg5eyqRJPR0X4z9b6XBQtUEAVcbuuzoMmWgJ73k9kJ4mgOJMrP18m1rrslPdPwE9XuSXh9p%2FCaZ68AWgCgyNcWalcDAO%2FnlNTExIvc6q%2F7viOKRplsYzvb3fcWaNdVu70irrTydMs%2FSBPbEUPlj7g7HhYUfF2Yf6kGacyaTfWiCr%2BRPvBg0&X-Amz-Signature=fcd04fe7ee10f0d83f2a4d41e5ed63ed78007a171d3063d5da7c199c4bcb3a16&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFRCD5O%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIB2FiXT92xqwQj2kf8YuFhybQqgLG0QcYCzp1lTHr%2FpjAiEAvuevfYcxZ0d6noYCTaubRZAp00YqbcTdByxhVk1FSYwqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxG2LVBhUaiEY7BWSrcAyXqmani2KdY%2BQOALSN0wShS3nF5jSMZhLMyCJf5Jb6pjCpDKpkypiCUR9qRk8J50CH6CrFu896qn7cm%2FiB9VaoYFqh1%2BXUzyYDWeIWLVhfvRPPXL61nvzYEBCDZRcbEwCI66VDnjjtc4lxSU%2BwNTGflMuLMMi%2BU9gw%2BdTy6gRoJIT77b4F2wxkfB7Au0c86M6vy32YwDrSzoI9URAYbKstxC2wfEyFHU8it%2Fme4mbwuXmCSlv7colTbHaeyyqgX2Ap39xyB%2BEhdX2XC6CPv85LiwmdRs251OWwKW9XhA8%2BYqjCBulBrNDTV%2BMN3AhwI5aKF8n5yE4lvoM9QoRzQxTuQyaQOcXLarjv3IiXea1VUYIkC1%2BXuAw1Co97CkkNJRfJKhafvHATWVFFzVx9x%2BU2oz8Xwv50%2FeIOY2cTxx%2FDIlhOws2t1PDkjy4zcRtrhsTkCRl9DNaD%2BAxzJqoj1pNlICxQzWiaMzCiwlOHSp4OitKMEpwMWzgK2GYF3gxy1wx152xdO1sDLdY%2F5hUN7BmOP9lqp7zxklNfyuCpJ5KvmeRT9XvOvZ6aqYUIrTgZAjIAvGD88fR40F0aYCKq0xfzSLTrheAmYvPgTHuXgrWXHrokVDIDvD92vCSyDMICHkMEGOqUBvTCr06M%2B3X4ee2rBuSyuHZ260doxP5JwI5tPZ9IVlUg5eyqRJPR0X4z9b6XBQtUEAVcbuuzoMmWgJ73k9kJ4mgOJMrP18m1rrslPdPwE9XuSXh9p%2FCaZ68AWgCgyNcWalcDAO%2FnlNTExIvc6q%2F7viOKRplsYzvb3fcWaNdVu70irrTydMs%2FSBPbEUPlj7g7HhYUfF2Yf6kGacyaTfWiCr%2BRPvBg0&X-Amz-Signature=6bafd6d8e97a4fd36e6c85b9936811dd24bb52dc2975e52d8520921d25d735c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
