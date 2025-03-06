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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5CSN4M%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfZXzDGu7wWcnj9Hqc%2BsucSR9kAXtYNFSwXi8aVyXWiAIhANapys11WUx6HsWyvKhC8kgxIC%2FJvEziPx1638o4NgQGKv8DCCgQABoMNjM3NDIzMTgzODA1Igxzi7Dt3MPiq%2FgJJl4q3ANvdaO8b%2FjnVTugOcxoefC0K2L%2FnTFWNw8Rf%2F%2F4K4THKow%2FkcH%2Bn%2FUhJwitKWVS0IFzX%2B7LAfrVTz%2BXsWuSQ1%2Bblv%2FUehk84%2FmxsyzbMs0LS98RO8H9UZJDGsrJSwLtVffuu36i1ehHRytDdv6yu85aPYVkvsdmUn2OR%2BsPLH3HJK4Y9SLWIXNzsKRaM4iW4%2FnQyk4jArsGb2ZTAL5gMlvyV9lczCGvzoRDb48LuEhL1uQXNoortfVt1pcxbm5VCaY4NEklXifKzUTShT6XiQKBt9zNZyKITRlt%2Bk30b0sg9K3fLpvwXsekqTvPSo%2BcZwlwfTgURg4%2FSCxMVY%2BjR7YyoB%2BI0oqaYIQ9j%2BjpwsdKD5VXvn3O2ZrFa6sxgDMqCMT4sPNGSL%2BTVWXQ8AjFx7b4T5nSRcumFT7K%2B1q43JHQt7YIm4pJMbAgcrO3%2BvmYm%2BTI0TuTMf35gwPMPmsr6PH8APQZpfJoHUV%2FFOjjYAyzafBsUY%2FCE2Slvm3CwF87FFphVv3oDRWGDzvUclOXc0pwoQ7Rq%2BIW0lcIQQd9mSXgses9I4tsR4SfUzeJXB7a2MIe9IeA7IJOJXz3RiYsSZjzTnrjnWB13CjUC4rsZ59AhnqU6eBfkOY31CdJ4jC2lqW%2BBjqkAQmMlLywLjSys3MN8AsejWdPDz%2BkG409iBRCfrtFfcsXdCUUSO3bycf%2BbOSZWydbYEV7xgdjA4ChszfoBjj4YQRNYNF6R4g0wsE6TrobsCG1%2FTYBIzOjFIIK7CJWLj2cLFinl8CdKTP%2FJxvAtBBP7JwcqC2txhBo210VlUdtNN2VN42VxfMUF2cxSi%2B2zy3GMNHoYXNOw%2BD%2Bfg5Y8d17IZSOTpjo&X-Amz-Signature=109ca8769cb9fe5a6b935f6ac3f486d9a05d17b3e607ca30950250a2667c4bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5CSN4M%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfZXzDGu7wWcnj9Hqc%2BsucSR9kAXtYNFSwXi8aVyXWiAIhANapys11WUx6HsWyvKhC8kgxIC%2FJvEziPx1638o4NgQGKv8DCCgQABoMNjM3NDIzMTgzODA1Igxzi7Dt3MPiq%2FgJJl4q3ANvdaO8b%2FjnVTugOcxoefC0K2L%2FnTFWNw8Rf%2F%2F4K4THKow%2FkcH%2Bn%2FUhJwitKWVS0IFzX%2B7LAfrVTz%2BXsWuSQ1%2Bblv%2FUehk84%2FmxsyzbMs0LS98RO8H9UZJDGsrJSwLtVffuu36i1ehHRytDdv6yu85aPYVkvsdmUn2OR%2BsPLH3HJK4Y9SLWIXNzsKRaM4iW4%2FnQyk4jArsGb2ZTAL5gMlvyV9lczCGvzoRDb48LuEhL1uQXNoortfVt1pcxbm5VCaY4NEklXifKzUTShT6XiQKBt9zNZyKITRlt%2Bk30b0sg9K3fLpvwXsekqTvPSo%2BcZwlwfTgURg4%2FSCxMVY%2BjR7YyoB%2BI0oqaYIQ9j%2BjpwsdKD5VXvn3O2ZrFa6sxgDMqCMT4sPNGSL%2BTVWXQ8AjFx7b4T5nSRcumFT7K%2B1q43JHQt7YIm4pJMbAgcrO3%2BvmYm%2BTI0TuTMf35gwPMPmsr6PH8APQZpfJoHUV%2FFOjjYAyzafBsUY%2FCE2Slvm3CwF87FFphVv3oDRWGDzvUclOXc0pwoQ7Rq%2BIW0lcIQQd9mSXgses9I4tsR4SfUzeJXB7a2MIe9IeA7IJOJXz3RiYsSZjzTnrjnWB13CjUC4rsZ59AhnqU6eBfkOY31CdJ4jC2lqW%2BBjqkAQmMlLywLjSys3MN8AsejWdPDz%2BkG409iBRCfrtFfcsXdCUUSO3bycf%2BbOSZWydbYEV7xgdjA4ChszfoBjj4YQRNYNF6R4g0wsE6TrobsCG1%2FTYBIzOjFIIK7CJWLj2cLFinl8CdKTP%2FJxvAtBBP7JwcqC2txhBo210VlUdtNN2VN42VxfMUF2cxSi%2B2zy3GMNHoYXNOw%2BD%2Bfg5Y8d17IZSOTpjo&X-Amz-Signature=82e224a8aa2c5e6fc5eff2e3653e920059f62173655d6271abd69dc9b86f0fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
