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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKKEVPO7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUxE79ZmOZpfvUTyXjxBjHwgH%2BsXP%2FtgbdH6c2o%2FKVMwIgHi2xJbnUnvQ7sZ7xlYpQ8XlNKJ6%2FxfifEZoW5k19b4QqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTDF%2BZ%2FdBWD8BRLzircAyjZ9wSyv37IDo8NKl3p5SQraChbPMitvT9BrDox3mrX%2Bids25AdZxAQlYBYksagvUlP1sCZR8TPp37U3QcsQ2UGxGAOdABT48NPyrrCyV7nvrn2LACUEzQ8q4nKlllYujCsbZyKkcoOrRvHF9wJNo%2FGcR3W2mA38TA3thvc8v%2FMmpCmCHLYh1sLTBXpkB6J7sSOakQPGdcXO%2FVhZOJh40Q0E6PiF8buc3P9C5FMQOoK1pLs%2BA%2FKSd%2BQNkYTZgjzPgnTs5hyW%2FrgLilRBmZCbSBVe%2BtMXDRMMO%2BkrsXFWuXXkBfa1di%2BxiyFcd4Zl0TiizJd8WGb3h0r12jPHFApTrNAUCqYPZhEc8hlfFIlsTLPAXU1ZtSLp%2BQi7mOHkWkzBEx3g3qyYgQJAHwp7XxKnVlA47IDR%2Frort7jWqTVmaXV6V3FRWoGTFaVAtsC79w9g4mv3H6iPoswEkj4xjsZpXnc04kzDPhLrPZkYZjb%2Fd2qS4OgIWdkTHiwoyU5sNEcmBzvlmdxp9%2BXPwDENyauY670mvcfdXOYRHBGmAGb3Wcqwj0RhpAX8Sxs5eFllRZhNkOyVD7%2F0GGd%2FcU23a%2FIdDPYvbHOvjt%2Fbou52VmlqK1YL5azNMz5J1UECmr8MKmk7LwGOqUBscsdJX0y8iHtNWcAuSNdGZjwqrfeSMh1bfzMOAb5NxmScawwq2%2FFAbI2zCq7Gwu2YHbd3d9zb2pwb%2Fxdpm%2BJ08qrYj13Ur0knOSg%2Fo5be38tk4dVoDAAycwzbbovsqkRsIBEIOrU7TJpKpmTyrFzWEm2UcfSQSS7OZ7suwh76vpZWlmp5ES8daYhTooHGFbEf8kMAC7%2BM2YUMK3PyIvT2e1faaw4&X-Amz-Signature=a71415f4a85095e3bbcb5ec197927f6e82bb03f950d7766f21b3cc01e9152e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKKEVPO7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUxE79ZmOZpfvUTyXjxBjHwgH%2BsXP%2FtgbdH6c2o%2FKVMwIgHi2xJbnUnvQ7sZ7xlYpQ8XlNKJ6%2FxfifEZoW5k19b4QqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTDF%2BZ%2FdBWD8BRLzircAyjZ9wSyv37IDo8NKl3p5SQraChbPMitvT9BrDox3mrX%2Bids25AdZxAQlYBYksagvUlP1sCZR8TPp37U3QcsQ2UGxGAOdABT48NPyrrCyV7nvrn2LACUEzQ8q4nKlllYujCsbZyKkcoOrRvHF9wJNo%2FGcR3W2mA38TA3thvc8v%2FMmpCmCHLYh1sLTBXpkB6J7sSOakQPGdcXO%2FVhZOJh40Q0E6PiF8buc3P9C5FMQOoK1pLs%2BA%2FKSd%2BQNkYTZgjzPgnTs5hyW%2FrgLilRBmZCbSBVe%2BtMXDRMMO%2BkrsXFWuXXkBfa1di%2BxiyFcd4Zl0TiizJd8WGb3h0r12jPHFApTrNAUCqYPZhEc8hlfFIlsTLPAXU1ZtSLp%2BQi7mOHkWkzBEx3g3qyYgQJAHwp7XxKnVlA47IDR%2Frort7jWqTVmaXV6V3FRWoGTFaVAtsC79w9g4mv3H6iPoswEkj4xjsZpXnc04kzDPhLrPZkYZjb%2Fd2qS4OgIWdkTHiwoyU5sNEcmBzvlmdxp9%2BXPwDENyauY670mvcfdXOYRHBGmAGb3Wcqwj0RhpAX8Sxs5eFllRZhNkOyVD7%2F0GGd%2FcU23a%2FIdDPYvbHOvjt%2Fbou52VmlqK1YL5azNMz5J1UECmr8MKmk7LwGOqUBscsdJX0y8iHtNWcAuSNdGZjwqrfeSMh1bfzMOAb5NxmScawwq2%2FFAbI2zCq7Gwu2YHbd3d9zb2pwb%2Fxdpm%2BJ08qrYj13Ur0knOSg%2Fo5be38tk4dVoDAAycwzbbovsqkRsIBEIOrU7TJpKpmTyrFzWEm2UcfSQSS7OZ7suwh76vpZWlmp5ES8daYhTooHGFbEf8kMAC7%2BM2YUMK3PyIvT2e1faaw4&X-Amz-Signature=8b274da0709eeb15246c122e1ea4da59e00ad729a27b1719f207a5f1e50aaed4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
