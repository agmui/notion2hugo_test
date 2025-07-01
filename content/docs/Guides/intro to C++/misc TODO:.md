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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2GRVCQI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2Bf1XmN7Iw%2F5VV7KSDTFx7aBOgHTSLULfQVQ4DZyjtwIgPV07mLbYF9wTVckUAJcV%2FcpN0lCJRd3788pQTTSRZy0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtROjnPK7RmCWvxBSrcA3YAN%2FnHnW31qU6aYvQV9x044OA4%2FZb%2BI74EqTnEBhDfzWth374yUPz5glrlNpNtCn5xF4goXx4ecNS1FTSWy1OQOb7hOQ1eq9kB05VlCOYWkl0nSjnK3Cee%2BXv%2FrE3zS99CaLUn7WZmHnU%2F1Sc6vUTazZvpa7QuUHHgOXT2TWk%2FKwLkSTO7iHYp%2FmxL0PelRP8g%2BLiAjJpkQZWqS0B5dWV2Zl73E1b56d6GSnubfDMJZwl4tcEb7SFC%2B3a7bfxVCgyXMtjmUd%2FAhF%2Bw%2FR%2FmO%2FPvOVBuOAUpwFQscXys7GRBmU5toGYm8VW4r5GFRAZrjjxgTXVA2zlgxX%2BYZPxKc4L7pQ6Ccw7rN5XDXWTLPQeHDW3PKhY35q9Y4DAlSsTYGj7h7TdAG%2FO9XSpuTR%2BSayGEBk3Ferhe4CN7SYdzkUN55fvRg%2FLSP1KVoQWDS85AJm87%2FZnTbHdKNzg8hxNnl8yA4i8nx7WxuMdsctbVQsJyMCT3xwBEASGwiS2xuljIg2snNcC0OL7we5XirRwRlE47%2FOniGzsmNwV1bK7RFcZhhxJq%2FH9VtHAS6DPOdvKZfLp36%2F58zHL%2BBGR%2FRKitNQB%2BsDk9TvtH4TNdikIklFKci2sYTzMWDXGrDEeOMNPNkMMGOqUBtJX8T%2BsaxOYEA6YriyssgX%2B5kPHDYKWMiJUO82JTZ3kH%2B2CVe7xlJ9ce9NhkkZfYM1yyley%2BCywf%2FUDS2sINbJNpjkOQX8WHuUPfpOdAxmrYIqwyhtn572dKxm1wzVC38bp25tThkOdNZkETADSUP7L6e3xnLCOL9%2FZTgY3qBNxz5dbwZLlgcuLaQNGP4QI1XdRwUuWZhw7nNosMiDiNAZaRInwz&X-Amz-Signature=f3e3012d270a90efaaba6cde240ddf122bbedbfd7f036c8800d55fa9764cc2c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2GRVCQI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2Bf1XmN7Iw%2F5VV7KSDTFx7aBOgHTSLULfQVQ4DZyjtwIgPV07mLbYF9wTVckUAJcV%2FcpN0lCJRd3788pQTTSRZy0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtROjnPK7RmCWvxBSrcA3YAN%2FnHnW31qU6aYvQV9x044OA4%2FZb%2BI74EqTnEBhDfzWth374yUPz5glrlNpNtCn5xF4goXx4ecNS1FTSWy1OQOb7hOQ1eq9kB05VlCOYWkl0nSjnK3Cee%2BXv%2FrE3zS99CaLUn7WZmHnU%2F1Sc6vUTazZvpa7QuUHHgOXT2TWk%2FKwLkSTO7iHYp%2FmxL0PelRP8g%2BLiAjJpkQZWqS0B5dWV2Zl73E1b56d6GSnubfDMJZwl4tcEb7SFC%2B3a7bfxVCgyXMtjmUd%2FAhF%2Bw%2FR%2FmO%2FPvOVBuOAUpwFQscXys7GRBmU5toGYm8VW4r5GFRAZrjjxgTXVA2zlgxX%2BYZPxKc4L7pQ6Ccw7rN5XDXWTLPQeHDW3PKhY35q9Y4DAlSsTYGj7h7TdAG%2FO9XSpuTR%2BSayGEBk3Ferhe4CN7SYdzkUN55fvRg%2FLSP1KVoQWDS85AJm87%2FZnTbHdKNzg8hxNnl8yA4i8nx7WxuMdsctbVQsJyMCT3xwBEASGwiS2xuljIg2snNcC0OL7we5XirRwRlE47%2FOniGzsmNwV1bK7RFcZhhxJq%2FH9VtHAS6DPOdvKZfLp36%2F58zHL%2BBGR%2FRKitNQB%2BsDk9TvtH4TNdikIklFKci2sYTzMWDXGrDEeOMNPNkMMGOqUBtJX8T%2BsaxOYEA6YriyssgX%2B5kPHDYKWMiJUO82JTZ3kH%2B2CVe7xlJ9ce9NhkkZfYM1yyley%2BCywf%2FUDS2sINbJNpjkOQX8WHuUPfpOdAxmrYIqwyhtn572dKxm1wzVC38bp25tThkOdNZkETADSUP7L6e3xnLCOL9%2FZTgY3qBNxz5dbwZLlgcuLaQNGP4QI1XdRwUuWZhw7nNosMiDiNAZaRInwz&X-Amz-Signature=9097e8fa369bb19da163633e66599bfc6da483a0da0b4376c6538d424369d09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
