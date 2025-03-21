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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZG4KKAQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDdcQde1AbgFlVc5Hy%2FVWNKjU8LSKo5uIL8XpixDvtAngIhALWKNLJCo5pQxZTJpMMfLzmmiHny9pBXBbR2sUeAFIHbKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX8wB6MEdp4m2lxqQq3APM1c5F3jNGBmiFgBmYSropjCpGehZuE0lomjeSCb1lDSM9A6x5SpTu8WKYBO6Z%2Fzutxe5%2Bxs7Rnk5Gj%2Fo76OjqSJLa1hDdWZu9aoV9AdeHh%2FkdV116AGmooA6bFNxJU0%2BFOEdHlZCmfGC19VBaznVYnIaP6AeyO7CzVBwOCBGpJk%2BJj2e%2FuSrQKeGTqC3Q69UC%2F97y596Sgr4WsRl7cZRyOkPoth5kuQPH1u4j9Yla%2FS7QQUSQsHdK9TDih712IYem%2BIyPJ7%2BcUbIVgTFvMexkR9KHlHfW%2Fw%2B%2Fm4LcYt9q24wpf7%2F4z9Dur8VBwb6Nm8cJnPadCo%2FIYsYTwuzEEFFLSRIUiowDHWUJLUoJ42lw8Pi1Yi7kCVS3gLJ3fJT2zkEOah%2F3G2GGc166S%2BnGVnPxR7htqypPtt6XGzErEJMHyPBq08EbtcEY3dvnnFAbPQvvl3arMCpLJ4aZ1JTN5%2FvoN3lsKG9UXJfc5%2FvQ%2FmPXq7kIittL1ReZrk%2Fws1TdZ9TqzLwIemC16ITIuS16TxYTwwhWTV3CEKq%2ByoQgHM2uNKl0rzmcj1Paf66aN7gVCy%2BwpfS%2FXhXIwNHnLvld1idGDgkBJhh7ob5Q4jcc1yZW78BptaiYeWGDQtp5FDDC%2BfK%2BBjqkAXSVL123oF0VlxDp1pLvmfP4PsBVW29tSAKEU8Co%2F2ciR%2FtBCHw3I9iwaE%2Bub8Rxejm6FEaphUZ211VsqNnbUzuTUqO5AIglCfmDQ%2Fkqru5%2Fyxux4rAgWp7RhHnklmS7r9ESB34t1w9rGG5ihU69DLvRU08m5OT3unREomdHdE3bkGD2vsMeWBHUwHCGiMhnNqOHlPf0Bysrc56OFI%2BJ3aQjaswq&X-Amz-Signature=0911bc3a8a17d507e73998b01b821235fab1889e4428930dcc92ad2dabe90d62&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZG4KKAQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDdcQde1AbgFlVc5Hy%2FVWNKjU8LSKo5uIL8XpixDvtAngIhALWKNLJCo5pQxZTJpMMfLzmmiHny9pBXBbR2sUeAFIHbKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX8wB6MEdp4m2lxqQq3APM1c5F3jNGBmiFgBmYSropjCpGehZuE0lomjeSCb1lDSM9A6x5SpTu8WKYBO6Z%2Fzutxe5%2Bxs7Rnk5Gj%2Fo76OjqSJLa1hDdWZu9aoV9AdeHh%2FkdV116AGmooA6bFNxJU0%2BFOEdHlZCmfGC19VBaznVYnIaP6AeyO7CzVBwOCBGpJk%2BJj2e%2FuSrQKeGTqC3Q69UC%2F97y596Sgr4WsRl7cZRyOkPoth5kuQPH1u4j9Yla%2FS7QQUSQsHdK9TDih712IYem%2BIyPJ7%2BcUbIVgTFvMexkR9KHlHfW%2Fw%2B%2Fm4LcYt9q24wpf7%2F4z9Dur8VBwb6Nm8cJnPadCo%2FIYsYTwuzEEFFLSRIUiowDHWUJLUoJ42lw8Pi1Yi7kCVS3gLJ3fJT2zkEOah%2F3G2GGc166S%2BnGVnPxR7htqypPtt6XGzErEJMHyPBq08EbtcEY3dvnnFAbPQvvl3arMCpLJ4aZ1JTN5%2FvoN3lsKG9UXJfc5%2FvQ%2FmPXq7kIittL1ReZrk%2Fws1TdZ9TqzLwIemC16ITIuS16TxYTwwhWTV3CEKq%2ByoQgHM2uNKl0rzmcj1Paf66aN7gVCy%2BwpfS%2FXhXIwNHnLvld1idGDgkBJhh7ob5Q4jcc1yZW78BptaiYeWGDQtp5FDDC%2BfK%2BBjqkAXSVL123oF0VlxDp1pLvmfP4PsBVW29tSAKEU8Co%2F2ciR%2FtBCHw3I9iwaE%2Bub8Rxejm6FEaphUZ211VsqNnbUzuTUqO5AIglCfmDQ%2Fkqru5%2Fyxux4rAgWp7RhHnklmS7r9ESB34t1w9rGG5ihU69DLvRU08m5OT3unREomdHdE3bkGD2vsMeWBHUwHCGiMhnNqOHlPf0Bysrc56OFI%2BJ3aQjaswq&X-Amz-Signature=55cf696b3626ba966f53e91c6e9dc9bcff868e9af685694e689964092bb53379&X-Amz-SignedHeaders=host&x-id=GetObject)

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
