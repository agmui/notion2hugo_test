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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNLMPKBG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwjmDErO50CbNVG94yuHaIwV6r8SO%2BHyOnA2LcdOnjbAIgB44NCLGCaYty%2F2TYj2dVvrIBUhTzVIrRCoTLVdnXr58q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPOPGVXwJ4X0kFAMTSrcA%2BWg%2Fb2FJUaReZZsjkxxkzbBBu8f84aR%2BqAftdKS1oyDD2Kikyla9m5zA%2B9X9koRf6zsvKeFaTInJQXJPTHF07%2FLQVBHTbWgukv2Sz6T8Fkzt68r5ziHMmfynqlJkMsgQMfEjofeiN4i8ABIY2NIdw2MXDqlRz7Cl8jlccvItUGv4v%2FUcaMbkeXhOvZ5w1B1pDxrG1BJ62jT5set4Ba4WoLY%2FrpqHWmoU%2F8MOKJqPOZ7umV6D9e3EaXaTdRhtOP80eZ%2BSiqEhjlez5KxAtNHltGqxgMzkhvKDCKGoIOme6mRNdq9lCnDKUUCW21IL%2F7ZoWavmcKRaJDUCjsQbp5TORZdSpGld9E%2FH9nJRvprRg18uSxFl9JglLrOtdIA4fbj4sFvw34TSXmhOCYfUx%2FPa1m6%2B1rD5dmj5DMLBPmVt%2F%2FBj4Wx0qu1HSuMrUB7nhc69UjvTIzENcn8fBbllsSN0OsAUg%2BiKAFJO9VUfX0g9F6tIP7OwHerZRJA09nhuTESJeWJoDr4MWH7Pdru2Iv%2BiXmx2P0WjLM8whol5c57OVGbbQ26lRZvdmtJ%2BfSuar3QgIBaFbrT79zcOLiD44GkkEppkwcazVPLvG36faHyNVQQNxELr0M3RVBEdWLJMMnum8EGOqUBI02gPkOgHrIE%2Fsztjqogo8hOIqCMONR7inPvxcuGVEh7Fuf6Cj2fYpCoDW%2B6HRb7v0erLn%2BEP5837lXSzqBz%2FXAaH44RN7jzKzMwRO04C1ZGsPvCAyaS7ifFtOx3zhULt8UdGWOVyd5n9nniSVo1a6WTmnpAZwnOnB0aCaqvlUvIlQImFryYfnpcIXkA6ktXDUhYEl4DH3ONZO%2Bb9kc8ixsg56Fs&X-Amz-Signature=a4c6c3f410c37f5e89d2f5a276fb0703da6aeed56e24eb79ca705d35ca7b1dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNLMPKBG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwjmDErO50CbNVG94yuHaIwV6r8SO%2BHyOnA2LcdOnjbAIgB44NCLGCaYty%2F2TYj2dVvrIBUhTzVIrRCoTLVdnXr58q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPOPGVXwJ4X0kFAMTSrcA%2BWg%2Fb2FJUaReZZsjkxxkzbBBu8f84aR%2BqAftdKS1oyDD2Kikyla9m5zA%2B9X9koRf6zsvKeFaTInJQXJPTHF07%2FLQVBHTbWgukv2Sz6T8Fkzt68r5ziHMmfynqlJkMsgQMfEjofeiN4i8ABIY2NIdw2MXDqlRz7Cl8jlccvItUGv4v%2FUcaMbkeXhOvZ5w1B1pDxrG1BJ62jT5set4Ba4WoLY%2FrpqHWmoU%2F8MOKJqPOZ7umV6D9e3EaXaTdRhtOP80eZ%2BSiqEhjlez5KxAtNHltGqxgMzkhvKDCKGoIOme6mRNdq9lCnDKUUCW21IL%2F7ZoWavmcKRaJDUCjsQbp5TORZdSpGld9E%2FH9nJRvprRg18uSxFl9JglLrOtdIA4fbj4sFvw34TSXmhOCYfUx%2FPa1m6%2B1rD5dmj5DMLBPmVt%2F%2FBj4Wx0qu1HSuMrUB7nhc69UjvTIzENcn8fBbllsSN0OsAUg%2BiKAFJO9VUfX0g9F6tIP7OwHerZRJA09nhuTESJeWJoDr4MWH7Pdru2Iv%2BiXmx2P0WjLM8whol5c57OVGbbQ26lRZvdmtJ%2BfSuar3QgIBaFbrT79zcOLiD44GkkEppkwcazVPLvG36faHyNVQQNxELr0M3RVBEdWLJMMnum8EGOqUBI02gPkOgHrIE%2Fsztjqogo8hOIqCMONR7inPvxcuGVEh7Fuf6Cj2fYpCoDW%2B6HRb7v0erLn%2BEP5837lXSzqBz%2FXAaH44RN7jzKzMwRO04C1ZGsPvCAyaS7ifFtOx3zhULt8UdGWOVyd5n9nniSVo1a6WTmnpAZwnOnB0aCaqvlUvIlQImFryYfnpcIXkA6ktXDUhYEl4DH3ONZO%2Bb9kc8ixsg56Fs&X-Amz-Signature=cf761c4209f9b7f157f8148b448fa3bc7fba43be507e73dbe5e0a1d0ed38c819&X-Amz-SignedHeaders=host&x-id=GetObject)

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
