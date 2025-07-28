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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJZDQYS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG8BH2%2FW7AQIJ4lhkE%2BIKURjQjzlMF7k2ljIsJLDdnY9AiBZK7RWHs7ysXFQytTGqKupPBmbWzBfURd%2BPJkDM8hfUSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxXrEvI1IFeHE7MkJKtwDEjaxYGijY31kc%2FZt139X9Y15Wqhu%2FhEBCXY87lHq9CsTUTts7tAcKGKnT6qv3KHgvv8IpUQeDOML27G8Zey48DdpcZLDwLJeHED%2FbnVqfuYyE%2FoPcxPVRsheOBEHJ0GTucU5Bia2Uyhjr8NY2QcUILIKf5CDf%2FeNyh5Ci59Q%2B0c5L62dfafppcVi5ghYzK6bCRyFtWovxmDv4QcDV%2FMT3vwGiKnB1n1ZP4ZSAhVa1FEtkPQfgP7LBjr0upPshGwLvwqOr2VfUeMlciAQQD6wTiW191Wy%2FLQoVo0ugr8fghKIuuUa35XcyHBTPdC0qdlWbWGvTLdTOU1H2ltw2KrowRL8%2F7mjSLwDCQy9GkZ6wkqQwMgAKOD%2FTtZt37H%2FjVGVqTfckox1INZoiWexw6YHZ%2F%2BgqNf5MFCzQuf9Jq5U8CaE73Hlu62bZ4WtK%2F0Pw%2Bdfdk9z7XPR19dw5e001M7%2FQlG2SEXFDcblEM0hyI0f5Gh4SJJzadot9ufAVmRGuEGlcwoabjAWVbu3vabseBYxUlf3%2F6N5v2fLkGa6mAgrIjOst3o5VAVO7IYsf7rN3sKK%2F18TTRTwd9wZXLCThnGoSQKnAjSx4EoXUAjl0r316eaBKyBSn3AZ9NBPG%2Bkwq42dxAY6pgFxbZns2gWf9S70YiCURMSAaSLOzpiEXfVuFlMrdpEbUYb6jnZ8JgO%2FeylYBoC6PMiGymGclBb8FwiLzLqOmnc6bhItwBd32FlCzYqCO5gFXYqSMRRf9ShUEx4Bygg%2BLW%2Bz4%2FkOttT1rbEi6sJcrA6KJhCoQPgE%2FsqM7ARbqU%2BUHfTu0Qzpp%2F%2BvNeM7v5vTts4kDJm44AdIwWa4rVVZJJOgTgwa%2FBpL&X-Amz-Signature=7f43683540d8ab5ff3670f9e17fd42259fe2f6516ac521688bf05ef55bb4fa06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJZDQYS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG8BH2%2FW7AQIJ4lhkE%2BIKURjQjzlMF7k2ljIsJLDdnY9AiBZK7RWHs7ysXFQytTGqKupPBmbWzBfURd%2BPJkDM8hfUSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxXrEvI1IFeHE7MkJKtwDEjaxYGijY31kc%2FZt139X9Y15Wqhu%2FhEBCXY87lHq9CsTUTts7tAcKGKnT6qv3KHgvv8IpUQeDOML27G8Zey48DdpcZLDwLJeHED%2FbnVqfuYyE%2FoPcxPVRsheOBEHJ0GTucU5Bia2Uyhjr8NY2QcUILIKf5CDf%2FeNyh5Ci59Q%2B0c5L62dfafppcVi5ghYzK6bCRyFtWovxmDv4QcDV%2FMT3vwGiKnB1n1ZP4ZSAhVa1FEtkPQfgP7LBjr0upPshGwLvwqOr2VfUeMlciAQQD6wTiW191Wy%2FLQoVo0ugr8fghKIuuUa35XcyHBTPdC0qdlWbWGvTLdTOU1H2ltw2KrowRL8%2F7mjSLwDCQy9GkZ6wkqQwMgAKOD%2FTtZt37H%2FjVGVqTfckox1INZoiWexw6YHZ%2F%2BgqNf5MFCzQuf9Jq5U8CaE73Hlu62bZ4WtK%2F0Pw%2Bdfdk9z7XPR19dw5e001M7%2FQlG2SEXFDcblEM0hyI0f5Gh4SJJzadot9ufAVmRGuEGlcwoabjAWVbu3vabseBYxUlf3%2F6N5v2fLkGa6mAgrIjOst3o5VAVO7IYsf7rN3sKK%2F18TTRTwd9wZXLCThnGoSQKnAjSx4EoXUAjl0r316eaBKyBSn3AZ9NBPG%2Bkwq42dxAY6pgFxbZns2gWf9S70YiCURMSAaSLOzpiEXfVuFlMrdpEbUYb6jnZ8JgO%2FeylYBoC6PMiGymGclBb8FwiLzLqOmnc6bhItwBd32FlCzYqCO5gFXYqSMRRf9ShUEx4Bygg%2BLW%2Bz4%2FkOttT1rbEi6sJcrA6KJhCoQPgE%2FsqM7ARbqU%2BUHfTu0Qzpp%2F%2BvNeM7v5vTts4kDJm44AdIwWa4rVVZJJOgTgwa%2FBpL&X-Amz-Signature=ffa8d2d05afd2e50cc98689297f623bac1de2ff872f0068ed4921a2f98801de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
