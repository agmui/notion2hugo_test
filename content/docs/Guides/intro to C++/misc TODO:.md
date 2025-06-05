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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A2VT23%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIACkozcZYtxRykgfXAsSWIrBrlwIasZFsQfRji63RS7bAiAP7LD3tPX40W9WejioYHG2DliJ1CYAMc8xZkno2g7AWir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMEVQuWxcY4jWFyrfSKtwD1y%2F7fxuvqawkrO7KzpvrREC8wcxs6vhMoBTkAVKuks3WYHyaJv3fo6VH8wJQ49QttW9VgM4yIWIndxXWtxLs4nYoN%2B3X5LUO5tc2PlPQdvsBWmRq0HpPjroxd5hBLqKCw7HTqjXLYWf1wKM6seAYyMLn3j5iHu%2FuSXR5%2FUgtonJs333RdPB8336Px9I27hK8oTXgpNd6W756DcnnusZZsyowVCXVfkD48pztPEbOgLxsUD%2B51HAI9kTgVRZDq%2BZ1tGKmHSf%2B8X7Nx20chdkHPrT4LvbhjAA9p%2FRNb4nJ9R5wo2%2Bs%2FApcAKMcESLrUaOTs1gJ1uA%2BTInL6UHxSDnk4XEzy8m2LHJE5wFgG3KLgitfYJEc9zCeTy%2Fxygn%2Fpbu%2B2zrTzR0mJdVNvC8wVVgWyduoG7SHxBpqFX0lQQYfbUteh%2BD1RLfsAUNJF87F5AwTJMNY2m14eyFCEO%2FMiGWvhfctvviEqmu0pL8uQGw9%2BZ8sugfEqmuPrPSLmCRkx4nl87IDyVn3YL%2FW13RLTn3adAlWlSxk0DL3%2FWAWDGmt8VkRw76oPyVLQnKF6OEbTVRjdx7jtyh%2FY%2BNZI9Vly1y%2Fhf3Tz2tyTbY8V3Rj3UvIayZr9i3b0Ge5dPizU5ww0%2B6FwgY6pgHPgiPkXABaOb82q3sIqobwhdth4NwADDTGchWOP%2BivE%2BEDD00Wv2tclqqdpckfW7jb7yO%2B13zzS434ateDUOQiPx%2B3IX9vFKsWNb8Us8dVOAfdO7Lu4xZIzzZkmLA5QK2vokWXlEobYNC4u50sz2TgItHN0KeUqv4wLSl7xOq3cIkgYEoGEovifbpK1EirKOHEn8C5xhGLcWJMgbeYtawpVCfgjt6u&X-Amz-Signature=3cfa601d0122f22b2e5d927bc1fd2a5056a22f9b9bdb7b1a27c48ca03dfc94f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A2VT23%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIACkozcZYtxRykgfXAsSWIrBrlwIasZFsQfRji63RS7bAiAP7LD3tPX40W9WejioYHG2DliJ1CYAMc8xZkno2g7AWir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMEVQuWxcY4jWFyrfSKtwD1y%2F7fxuvqawkrO7KzpvrREC8wcxs6vhMoBTkAVKuks3WYHyaJv3fo6VH8wJQ49QttW9VgM4yIWIndxXWtxLs4nYoN%2B3X5LUO5tc2PlPQdvsBWmRq0HpPjroxd5hBLqKCw7HTqjXLYWf1wKM6seAYyMLn3j5iHu%2FuSXR5%2FUgtonJs333RdPB8336Px9I27hK8oTXgpNd6W756DcnnusZZsyowVCXVfkD48pztPEbOgLxsUD%2B51HAI9kTgVRZDq%2BZ1tGKmHSf%2B8X7Nx20chdkHPrT4LvbhjAA9p%2FRNb4nJ9R5wo2%2Bs%2FApcAKMcESLrUaOTs1gJ1uA%2BTInL6UHxSDnk4XEzy8m2LHJE5wFgG3KLgitfYJEc9zCeTy%2Fxygn%2Fpbu%2B2zrTzR0mJdVNvC8wVVgWyduoG7SHxBpqFX0lQQYfbUteh%2BD1RLfsAUNJF87F5AwTJMNY2m14eyFCEO%2FMiGWvhfctvviEqmu0pL8uQGw9%2BZ8sugfEqmuPrPSLmCRkx4nl87IDyVn3YL%2FW13RLTn3adAlWlSxk0DL3%2FWAWDGmt8VkRw76oPyVLQnKF6OEbTVRjdx7jtyh%2FY%2BNZI9Vly1y%2Fhf3Tz2tyTbY8V3Rj3UvIayZr9i3b0Ge5dPizU5ww0%2B6FwgY6pgHPgiPkXABaOb82q3sIqobwhdth4NwADDTGchWOP%2BivE%2BEDD00Wv2tclqqdpckfW7jb7yO%2B13zzS434ateDUOQiPx%2B3IX9vFKsWNb8Us8dVOAfdO7Lu4xZIzzZkmLA5QK2vokWXlEobYNC4u50sz2TgItHN0KeUqv4wLSl7xOq3cIkgYEoGEovifbpK1EirKOHEn8C5xhGLcWJMgbeYtawpVCfgjt6u&X-Amz-Signature=f97db1e205f6406b8e99da31da908cac3ff9440eaafad4cadbbb98a93981fb46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
