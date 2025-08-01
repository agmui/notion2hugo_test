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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLEJ2MY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx%2BcatzLY1ClSQaz0RJIBWX3KT7N0%2FxCCbkNQZPhzMrAIhAPR%2FJiKSJS30LQummL1Gngqg5eST%2B6374RqAQIvNMyxqKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYMwt95tYWAEMcEqEq3AOoV38e0EhyuWtCMAeKgUZrGZtZm7gv2y1pvB8JnRyokE%2Ftr6HMgwZOXLDhmkdtK9udU36CM0lbcfkwMrgDLsO3Xi%2Foyuct2eQJvLpySJtucX3XzN3aeyPXmyLKv7c57xrF0apGwo7Ogn8XgJ3%2BiuTSYVzYSwjVIF2AUCkLJ9ii%2FZIv8LbUwwxLIOSEslXJVX0bWw132j9zy1cduqJMz6U3zm3GpARgHi%2B1i9KEv8iD%2FG9WrRtMwHUBZMmC6TvqkD4UrCaT3izOBMuaaww03MBTgqBJiTuW8uLeW9RJYFtTZwMzIGFW6YKihauLlD6bm%2BEF0KYt8vuGb3HFXos50gktbUzvjV4UGCQRaypR5U6xIDVnhZaCQSvF6iip8H5ErKaf9HXtjBVBsTFGUZnh%2Ft0jTNtu7rcuzWcP553zyTnaXfmZ5TYW4pujSxdlgtzmZcATP5dUWgOvKUqA68XrDe2I0p%2B6klcBHPBq2rVW3kaHxfMKORZTDjsPtcp3A%2B2U9wLvQhRw4g8wEuCFi22PZpD%2BKO6DD6aOnLM318ohNIX%2B9EFxFC0g1qyRV7%2FmvxiTFRbk76c1i68JzQF0nH%2FZcCsBffzzIMXBNktGy5CqxeDDPlp%2FvuliEOgoc15%2BfDCYsLPEBjqkAZGSTxZWiT5fOFWXjV17SbdmuelXqQriWHhhMYcWbpBzJdRa864lBUjnTR3vEoN37KOIFmaBud2mXboa%2Fj3NVD%2BpN8fx8zRmGK4zml9PCak83O%2Bm8iZIkewPj8yFhGfSD6uEaSxaCJxIJMp1zkTmF1TOy8u7QMrtp%2B2XWjEQigCqbqCgqqeYi0DdP8w%2Bi86dWzmOM77ugMU9zndqM6TGNsiNfdk1&X-Amz-Signature=291cfcecc1d1fe10101b18fc04be3acadbe64d938fab8ca8ed780af809db14a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLEJ2MY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx%2BcatzLY1ClSQaz0RJIBWX3KT7N0%2FxCCbkNQZPhzMrAIhAPR%2FJiKSJS30LQummL1Gngqg5eST%2B6374RqAQIvNMyxqKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYMwt95tYWAEMcEqEq3AOoV38e0EhyuWtCMAeKgUZrGZtZm7gv2y1pvB8JnRyokE%2Ftr6HMgwZOXLDhmkdtK9udU36CM0lbcfkwMrgDLsO3Xi%2Foyuct2eQJvLpySJtucX3XzN3aeyPXmyLKv7c57xrF0apGwo7Ogn8XgJ3%2BiuTSYVzYSwjVIF2AUCkLJ9ii%2FZIv8LbUwwxLIOSEslXJVX0bWw132j9zy1cduqJMz6U3zm3GpARgHi%2B1i9KEv8iD%2FG9WrRtMwHUBZMmC6TvqkD4UrCaT3izOBMuaaww03MBTgqBJiTuW8uLeW9RJYFtTZwMzIGFW6YKihauLlD6bm%2BEF0KYt8vuGb3HFXos50gktbUzvjV4UGCQRaypR5U6xIDVnhZaCQSvF6iip8H5ErKaf9HXtjBVBsTFGUZnh%2Ft0jTNtu7rcuzWcP553zyTnaXfmZ5TYW4pujSxdlgtzmZcATP5dUWgOvKUqA68XrDe2I0p%2B6klcBHPBq2rVW3kaHxfMKORZTDjsPtcp3A%2B2U9wLvQhRw4g8wEuCFi22PZpD%2BKO6DD6aOnLM318ohNIX%2B9EFxFC0g1qyRV7%2FmvxiTFRbk76c1i68JzQF0nH%2FZcCsBffzzIMXBNktGy5CqxeDDPlp%2FvuliEOgoc15%2BfDCYsLPEBjqkAZGSTxZWiT5fOFWXjV17SbdmuelXqQriWHhhMYcWbpBzJdRa864lBUjnTR3vEoN37KOIFmaBud2mXboa%2Fj3NVD%2BpN8fx8zRmGK4zml9PCak83O%2Bm8iZIkewPj8yFhGfSD6uEaSxaCJxIJMp1zkTmF1TOy8u7QMrtp%2B2XWjEQigCqbqCgqqeYi0DdP8w%2Bi86dWzmOM77ugMU9zndqM6TGNsiNfdk1&X-Amz-Signature=0414f7894415e0a4e0a4953e6b872cb2942b7b7a2fcdb9a3bb14f94e814b8672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
