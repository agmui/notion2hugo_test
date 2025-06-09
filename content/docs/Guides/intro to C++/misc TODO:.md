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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNB5HLWL%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB70Xf7%2F2dtuiXD4F8DXzHVZ%2Fj9HK32B4%2BPxDk4hvkAkAiB934TS6p%2Bzvz0khhs3odNT6LTiZvU2H4JMCqVMGbXUACqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWblfSbk1qjfD2jJtKtwDvWptLYh8b0D7u%2BiMV9ddzms3fknawqCKnoBsiNEUx7E5gA%2FvGgmr3hEZjIsZ747nYY1pSEx28h0OqC1nZPpnt3sElUcGK3%2F8q8GYIMZCceXuX1pmjIf1lYS03VDjOC18XpGVqmUppjvwtBN1WYwQM76qUiOJRCFU3hNWTPFJ3OrEVMM0g9acFCAQc7anoQVlLM3LbY%2FReGwExRxdb96d1QzFb7pPj5hAGNnEwBmS61yVdc2i02a4jbPmVR07ReuB%2BE3O3ut1LZtwPCdRpafXE4NPjBsVgof7jQOkbQh%2FDvqMhZ8ub9qUX7OQhdEZVA9mwyxxLFWGEO%2B172QdANFpJRVkH5yqt4qA%2FIXWF1qSIRj2H71sUQiZ62wu7srD%2FCBWcDG53DCv1oUe1TIcFK3pEtyACBpWhvgOLWucogu%2FwJ9Tou40tkreDXttWrMVQpCJJX0Y6YuRE9EIbIPZfXREZhG4Jwdfd4Yy47XtToXSjc18sfu865BU1f9FFLz3xUJSPaW6CPZX%2BqhySxC1s5M7VPnmYM%2FoV7PPGmH5iH%2FeKkxAhJlPdBqoL4v0117uzNXPpjqtCRfzBfjwrgdks5sP%2BU69L80VUDoN2B%2BbkzxOqJYJbK2LiK2uOCrgR2ow%2BvicwgY6pgH7U0S4S1vjR%2BUT8rNIe8nGATIodHc3%2FYc4KLfgWfa1jT5pfYRApCVXR35hJH2wjQR62pli5tmFCbEXH5kmaof2vxphnmd3pnrD%2F3Aij3azaLPdDYfJCvrrK9RIcO7u1ITUhOMxVOEeIDgCsZdLP549V%2FA%2BnPjYJCAzebCCjy2XCsoSE%2FSywpDaaz9h20oGwaTGO18Xl2So5OyzkYa3LpD2gOHYYLEn&X-Amz-Signature=13939738f27b5811f6e1bdb6287e73501f78b91f69679da145d81b1981da0095&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNB5HLWL%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB70Xf7%2F2dtuiXD4F8DXzHVZ%2Fj9HK32B4%2BPxDk4hvkAkAiB934TS6p%2Bzvz0khhs3odNT6LTiZvU2H4JMCqVMGbXUACqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWblfSbk1qjfD2jJtKtwDvWptLYh8b0D7u%2BiMV9ddzms3fknawqCKnoBsiNEUx7E5gA%2FvGgmr3hEZjIsZ747nYY1pSEx28h0OqC1nZPpnt3sElUcGK3%2F8q8GYIMZCceXuX1pmjIf1lYS03VDjOC18XpGVqmUppjvwtBN1WYwQM76qUiOJRCFU3hNWTPFJ3OrEVMM0g9acFCAQc7anoQVlLM3LbY%2FReGwExRxdb96d1QzFb7pPj5hAGNnEwBmS61yVdc2i02a4jbPmVR07ReuB%2BE3O3ut1LZtwPCdRpafXE4NPjBsVgof7jQOkbQh%2FDvqMhZ8ub9qUX7OQhdEZVA9mwyxxLFWGEO%2B172QdANFpJRVkH5yqt4qA%2FIXWF1qSIRj2H71sUQiZ62wu7srD%2FCBWcDG53DCv1oUe1TIcFK3pEtyACBpWhvgOLWucogu%2FwJ9Tou40tkreDXttWrMVQpCJJX0Y6YuRE9EIbIPZfXREZhG4Jwdfd4Yy47XtToXSjc18sfu865BU1f9FFLz3xUJSPaW6CPZX%2BqhySxC1s5M7VPnmYM%2FoV7PPGmH5iH%2FeKkxAhJlPdBqoL4v0117uzNXPpjqtCRfzBfjwrgdks5sP%2BU69L80VUDoN2B%2BbkzxOqJYJbK2LiK2uOCrgR2ow%2BvicwgY6pgH7U0S4S1vjR%2BUT8rNIe8nGATIodHc3%2FYc4KLfgWfa1jT5pfYRApCVXR35hJH2wjQR62pli5tmFCbEXH5kmaof2vxphnmd3pnrD%2F3Aij3azaLPdDYfJCvrrK9RIcO7u1ITUhOMxVOEeIDgCsZdLP549V%2FA%2BnPjYJCAzebCCjy2XCsoSE%2FSywpDaaz9h20oGwaTGO18Xl2So5OyzkYa3LpD2gOHYYLEn&X-Amz-Signature=de2476bf4049061f14faab5518d07c360361732bde8637a372a3605ea4233bce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
