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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYXKLWRS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4ylOGZu8%2F2%2FYxcxvPIkCJ15Dkbi3o2aVliD%2FJgRwJUAiEAzTsiuSwngQ9foUYXo87a8W7ieTjduLMTB9dC8%2FT4HGcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMcZfEkl4zsfXwRwyrcA48l7XgCpitAuvBr%2B6vpfW4IjVsslvvId3Ixbw2Wr1fmWf3P6zHQYzKL14f%2FQkxVrqI9xr8lGmeBZIjWWHjEA0V1fAabcUb5ozCZR6k43y3TtJ7JrfVmrEqkIoaE7DzLn5K5VN0beUb%2BjLS4XVyHLRrIyqCCI3kjtPoPhliDNQHbnjFJ76P7TC%2BdVeLHL5KiFDVokXu1mc1R%2FvmFqk5xX5CoxNPuikIGhAraNnOVFLSFpJtsy6ChVqKS%2FTD1AAOgHcHP28IqubNibakT9UNB0P7lIP7x8TRqk6QtSZoh%2FSV5BVwDYz%2B9KLezd5JjwyfU3%2FPPFAJaefmNi8QQRITPN8H3I49WCwrr4xZTzno7Ex2y9xgLIFEA%2BuQOn3B2fNUwlEm0ybxYAdEYgQItVxR331pX2sSeBpnyjZS%2B0bdgxirY2Q7CfaaXOv%2Fd3iHXtdlCkWrgkZ9JdOEG0QQv63wuq8RhiRrWmljub43uSZczBHU4mT576%2B%2Bsh3ytl7z5SuzEFJE52Wk1ysjiggPmvsBdMqz6ICZyGImMAWZVx0Jcu1fy8biz3xkOOdW6AWMLoIo6Z5LZllsmdRmMTVxh9eQ6fU3FyDAVDLm2FHO7WkxQBROeDQHQKDjOPDgZwUCgMJXAscQGOqUBa0pXi9RGyVEvJktGWMmH4ZdCbaFdccNnTef9S0UhBW02wHLrokISSGPPrD67Yxg8Epp6EN4B5UkHzCClR53Ief7OkHtHPoY0%2FNTglmuJfWUwkVO7FoAcSIgAGHdOcZOOGeqmfbaIgneEsRINmpJ%2BUo24%2B104Dh4%2BbMnW6cCHmXh4dcRYFmkUvZLo59yyyYrdoYMbCb1ICSBiHej2sFr3qgzgmRdx&X-Amz-Signature=20802258ec10a4de6aa132d60a1b7c6f5f2aeb5c702648b1d81f9a8325a9a008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYXKLWRS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4ylOGZu8%2F2%2FYxcxvPIkCJ15Dkbi3o2aVliD%2FJgRwJUAiEAzTsiuSwngQ9foUYXo87a8W7ieTjduLMTB9dC8%2FT4HGcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMcZfEkl4zsfXwRwyrcA48l7XgCpitAuvBr%2B6vpfW4IjVsslvvId3Ixbw2Wr1fmWf3P6zHQYzKL14f%2FQkxVrqI9xr8lGmeBZIjWWHjEA0V1fAabcUb5ozCZR6k43y3TtJ7JrfVmrEqkIoaE7DzLn5K5VN0beUb%2BjLS4XVyHLRrIyqCCI3kjtPoPhliDNQHbnjFJ76P7TC%2BdVeLHL5KiFDVokXu1mc1R%2FvmFqk5xX5CoxNPuikIGhAraNnOVFLSFpJtsy6ChVqKS%2FTD1AAOgHcHP28IqubNibakT9UNB0P7lIP7x8TRqk6QtSZoh%2FSV5BVwDYz%2B9KLezd5JjwyfU3%2FPPFAJaefmNi8QQRITPN8H3I49WCwrr4xZTzno7Ex2y9xgLIFEA%2BuQOn3B2fNUwlEm0ybxYAdEYgQItVxR331pX2sSeBpnyjZS%2B0bdgxirY2Q7CfaaXOv%2Fd3iHXtdlCkWrgkZ9JdOEG0QQv63wuq8RhiRrWmljub43uSZczBHU4mT576%2B%2Bsh3ytl7z5SuzEFJE52Wk1ysjiggPmvsBdMqz6ICZyGImMAWZVx0Jcu1fy8biz3xkOOdW6AWMLoIo6Z5LZllsmdRmMTVxh9eQ6fU3FyDAVDLm2FHO7WkxQBROeDQHQKDjOPDgZwUCgMJXAscQGOqUBa0pXi9RGyVEvJktGWMmH4ZdCbaFdccNnTef9S0UhBW02wHLrokISSGPPrD67Yxg8Epp6EN4B5UkHzCClR53Ief7OkHtHPoY0%2FNTglmuJfWUwkVO7FoAcSIgAGHdOcZOOGeqmfbaIgneEsRINmpJ%2BUo24%2B104Dh4%2BbMnW6cCHmXh4dcRYFmkUvZLo59yyyYrdoYMbCb1ICSBiHej2sFr3qgzgmRdx&X-Amz-Signature=4115a31f109f65f7a54b04d4e84c756fe02635069068e696cfd853605a436d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
