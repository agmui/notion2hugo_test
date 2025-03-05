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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQNCNSXT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbyvxRQ4UHgINlvFZDQ2rO45iAe2j%2FxsKN3PfDO0m7mAiA4G8f4bVuJSYjzx1od6Ta%2BjK1zUdQIxQQXE7VThDiRTSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwCvNeR7aacnYIM53KtwDvxn4IoVuek5UMIVNVKvyvgzMcGK7yXOfzpo4Hl4D76Ef%2BWr3P2bCCc7kwYab5DFGSHlephGuhcIRhmGSC07OBRhKtvR1a%2BwoJrYO0H5t5zS%2BgBvg7uqXFFowI6lMCfjOL80yIhbStIz6892OH3pkkXASp7rm0LpcfZsrzXntoMl%2BEf3oOCYtap6%2FOVcJEg7z7xsy4Xe7ur3xcfL2vD4C1MfPagydsUPzbNSikGAA6qopcMSlY%2BuDfmDulAkcMKo5FW2fBL%2F%2BdyAZ4Eahiny0dKdhLS1Ql2O8fJtnlQau412pb5R%2BO6sp%2FQefWeiEi9HUv0VQK9rThX9kZx3A%2Fun2JuZrCK%2BGmReLCZ531CaPzkBrTEv%2BV9CLGdN%2ByaYo1otei2RhFWwNvBPHP79acilIi4PyvSWF%2Fc9nEEDTDIIJ5APEDEuqodb1NHqEpFpsnZ9JPxBpimxsn0r%2Fij4l0x9XSxig0UXjdTCIdrSgapRDthsBEJ5MXQxXRIoJ5aZCEVClI8kVvbpEsJKaJA8LjVDhDBGAKqw35Pm09VuoKsmzFpGYI7OE%2FxUCsRjEJiUpnSQ1KSpk08X%2F272YHuh5djYjuPkKWpsnapeo2FHGwLCBEUgtdhjdl%2F5L4DqRlqcwoqOjvgY6pgGZuv05zV7gV4CDT%2FYcmSAjbEghcQ1QUiiyGx6kxMIBrQ1bJMNC8TofUe%2BU77CpJtit8Px7kVXa0wc%2B%2BKgBxLSbnP88IVZYjMA2U8vCvCKtuyMoBr1rILXMNSmlP8ds5eJ1LZEDV4s3vXqh6cW4kl2tJmevoEYblrvsMj0C9t1sPxE7XTbiiSgibDP4qpL4cWGMR8W7Ep%2FG6OCzIaJOzpAQ%2B9NUwnj0&X-Amz-Signature=5b5445d18215255c51a3c70c5e4ccb5e675559b8025a7f996d77c98f44411d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQNCNSXT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbyvxRQ4UHgINlvFZDQ2rO45iAe2j%2FxsKN3PfDO0m7mAiA4G8f4bVuJSYjzx1od6Ta%2BjK1zUdQIxQQXE7VThDiRTSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMwCvNeR7aacnYIM53KtwDvxn4IoVuek5UMIVNVKvyvgzMcGK7yXOfzpo4Hl4D76Ef%2BWr3P2bCCc7kwYab5DFGSHlephGuhcIRhmGSC07OBRhKtvR1a%2BwoJrYO0H5t5zS%2BgBvg7uqXFFowI6lMCfjOL80yIhbStIz6892OH3pkkXASp7rm0LpcfZsrzXntoMl%2BEf3oOCYtap6%2FOVcJEg7z7xsy4Xe7ur3xcfL2vD4C1MfPagydsUPzbNSikGAA6qopcMSlY%2BuDfmDulAkcMKo5FW2fBL%2F%2BdyAZ4Eahiny0dKdhLS1Ql2O8fJtnlQau412pb5R%2BO6sp%2FQefWeiEi9HUv0VQK9rThX9kZx3A%2Fun2JuZrCK%2BGmReLCZ531CaPzkBrTEv%2BV9CLGdN%2ByaYo1otei2RhFWwNvBPHP79acilIi4PyvSWF%2Fc9nEEDTDIIJ5APEDEuqodb1NHqEpFpsnZ9JPxBpimxsn0r%2Fij4l0x9XSxig0UXjdTCIdrSgapRDthsBEJ5MXQxXRIoJ5aZCEVClI8kVvbpEsJKaJA8LjVDhDBGAKqw35Pm09VuoKsmzFpGYI7OE%2FxUCsRjEJiUpnSQ1KSpk08X%2F272YHuh5djYjuPkKWpsnapeo2FHGwLCBEUgtdhjdl%2F5L4DqRlqcwoqOjvgY6pgGZuv05zV7gV4CDT%2FYcmSAjbEghcQ1QUiiyGx6kxMIBrQ1bJMNC8TofUe%2BU77CpJtit8Px7kVXa0wc%2B%2BKgBxLSbnP88IVZYjMA2U8vCvCKtuyMoBr1rILXMNSmlP8ds5eJ1LZEDV4s3vXqh6cW4kl2tJmevoEYblrvsMj0C9t1sPxE7XTbiiSgibDP4qpL4cWGMR8W7Ep%2FG6OCzIaJOzpAQ%2B9NUwnj0&X-Amz-Signature=8af353fe6c8c0629b00f458500e16b2af82cf5bf376c38216bdebc60b652e157&X-Amz-SignedHeaders=host&x-id=GetObject)

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
