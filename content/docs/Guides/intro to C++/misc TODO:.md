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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y622QWPQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1zHAQpCLxkGh%2BCyZF7FvmPd4z3U0m2uo%2BAAKpSSOD4AiEAlU9W0iT9MX6DIusswL46EexPxnE4w13IEsGH04F5oDcq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBxAv7C2WCbSOSEf4SrcA1vlkJHxsEs0ToWqqR4bkDBIzqq71i0%2BFDIv5UH%2F7RMn0mZhgEEEvXQz0CPDUt%2FnRyMk46UIjJnyf9V%2FfkkFtujDiVzqZHtoDSmMoZWscB7FsWvJCyGAASEwfkuRuRoSdIxkMvIB9EFLGrhHxfFfLYWjtV%2FblcjJlSruLFQBR1ylR4AGw10UoQYf1TMGl4ngt8hHRtv1HaYCN%2B2rje01LXoC26Bn7SwWuNMiJhipbWqpSGcHf5swpMWqDVM4JMPriQHW%2FSouH6IDOnFejDt5a9sYzcY%2FGSHcNCaG2U5k%2Bh4sUNPtmAw%2BFlXu0%2FEh2uQtAxcYDVj8PYgJANpDT8MYU%2F4DWo6MZ3yIGU5PsYqpSLcj2je6I3ToCg8IUZxk2yAcTrri0%2BFsdfbLritTbGybqpUIm2LbSoJ2dZMTO%2B%2FHGJmLUED7VA%2F3jalE73FogPdOaTwwQIm9feqV8TALsLBzB44GfsMjwd3ifAyIZCbMconbiRno0sgMoFFsulBCpACteGdxNrFMqD%2FfhNskic2joj1A%2FrfJeyzw6AGIvgtB3HfrQi0niyovUNhvacYwjG9SjxthbB17c5b8VHXSXxzXpkByy4dKyBRoidoIc42ByEsxaOrshldq2OycjlpXMLqU8cAGOqUBOXU97bXZJ5HgSI%2BPEdLCWOVJ8YRlg8pq%2FOix5mPy0%2B0CwyDiD6ynlTskqVEIIUGJE%2BeaFzM1C5hEH5c%2F9wtKcKRuyc3J0gb665licLciqE22JVZohy7VAfVPgFP9fPmyeRCQRhqhm8ifJvTbmW59EPrPgef23hgkvhhBIf0fnZvUtcVBaz1kZ06O60FsO1mmDtBCYg9RvGkKi1hV1My%2BpKxwkrAV&X-Amz-Signature=5289495849f66f7829f8826d4cf30a0b644f0ec0c2186f07e29cf0908f32eda7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y622QWPQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1zHAQpCLxkGh%2BCyZF7FvmPd4z3U0m2uo%2BAAKpSSOD4AiEAlU9W0iT9MX6DIusswL46EexPxnE4w13IEsGH04F5oDcq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBxAv7C2WCbSOSEf4SrcA1vlkJHxsEs0ToWqqR4bkDBIzqq71i0%2BFDIv5UH%2F7RMn0mZhgEEEvXQz0CPDUt%2FnRyMk46UIjJnyf9V%2FfkkFtujDiVzqZHtoDSmMoZWscB7FsWvJCyGAASEwfkuRuRoSdIxkMvIB9EFLGrhHxfFfLYWjtV%2FblcjJlSruLFQBR1ylR4AGw10UoQYf1TMGl4ngt8hHRtv1HaYCN%2B2rje01LXoC26Bn7SwWuNMiJhipbWqpSGcHf5swpMWqDVM4JMPriQHW%2FSouH6IDOnFejDt5a9sYzcY%2FGSHcNCaG2U5k%2Bh4sUNPtmAw%2BFlXu0%2FEh2uQtAxcYDVj8PYgJANpDT8MYU%2F4DWo6MZ3yIGU5PsYqpSLcj2je6I3ToCg8IUZxk2yAcTrri0%2BFsdfbLritTbGybqpUIm2LbSoJ2dZMTO%2B%2FHGJmLUED7VA%2F3jalE73FogPdOaTwwQIm9feqV8TALsLBzB44GfsMjwd3ifAyIZCbMconbiRno0sgMoFFsulBCpACteGdxNrFMqD%2FfhNskic2joj1A%2FrfJeyzw6AGIvgtB3HfrQi0niyovUNhvacYwjG9SjxthbB17c5b8VHXSXxzXpkByy4dKyBRoidoIc42ByEsxaOrshldq2OycjlpXMLqU8cAGOqUBOXU97bXZJ5HgSI%2BPEdLCWOVJ8YRlg8pq%2FOix5mPy0%2B0CwyDiD6ynlTskqVEIIUGJE%2BeaFzM1C5hEH5c%2F9wtKcKRuyc3J0gb665licLciqE22JVZohy7VAfVPgFP9fPmyeRCQRhqhm8ifJvTbmW59EPrPgef23hgkvhhBIf0fnZvUtcVBaz1kZ06O60FsO1mmDtBCYg9RvGkKi1hV1My%2BpKxwkrAV&X-Amz-Signature=478da5b1c714b435312264c1fc46db609757353f6e08f889d6b83d61f0127e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
