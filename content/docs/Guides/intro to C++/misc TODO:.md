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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IT22UD4%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlilF7VYJqt1bNKfk36ae34dKVfQNbGPId%2FKpJdRYgAAiBE2Oai%2BYpSNNFuYUDTsSGf7Z%2FIvFLxq3zChFiNiuxDWyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2Br%2BjpBOV0Q9%2B%2BBwKtwDksh%2Fdy%2FjGC9YB1%2FDZ0YbUuR8HokcQw00Eob2ciEawR4ZIX%2BS3zHVAvIWRI7lS%2FqDmWy0oMACdIY19m3Z6zhV2ykgrU3joUQskrfZq3TviWQhv0rPCM%2BG0LlZArxGmxqQhAd5Hg9au4cI0iu%2B3J0TAgBEe6uudlVqmv5fMBl4awC2ytMYX4KJSd6FsKJ1B1RcA9JqzBOi6lgy%2FDTSHq1oRir2sqzzoRtHOBpX9ZfnAtgU08rtK9kIzFasYwHLfkqP4pHAXT5GAoojrrigBc4pmSggf7UHnBYEWh6l3v%2FCOpK%2Fo4SWPNdZi9IGnmo2%2FJdomEIc2TZwCwR4PWXIeWijCTt5ULuXCYrK8Ldcimsach4Soy9CM4KxZCY7jMr6%2Fe%2FLc1WLvH9hB9E%2FxGm3RQ82I2i6H%2Bw2tE6yPmSFktOrNH9HmxDm5qGOGezZWwRrPrV2HiShgn8fUwLc8lqvCB%2ByM6foZlL91UaK5qFIDe9LyMHx15u0U6SqJmkZZ8ZZb8rYTfb4bcfHVpyFuLr1f8ks0vTD%2BSylZw96YC6Zzf5gQikyXAx6CqdVbx7CRTM8S1sA9Ah1A%2FaiNJHpcWmcs%2FZPc1OzVJHb5A6uFXFycwF89PSaH7pPRzBOIvHBv2AwjMGAvQY6pgGfNhjXcqVwR9orJIMPM%2FAF7CxFXlx8hx6k7JLXUp5Vgnz1Oq15p4HOUTbjXcblT205qiJHv50LHsBnSd3PohtsRuBG6PRTm%2BeAi17yKGGr75PDceckG0iw68mYb83O25ArFhb0ETP5FBiCsI1sZtzuk2ZXuU3KLW0z68iS0gcFUcDI%2BzHQhV0gnVubUnV4WKKKsbOPBX2ponMM78terTxGedHDCLLo&X-Amz-Signature=279cc4c0028331fd93b7510a62d44ec996deb0c75a9021e6aa877f0ebdbc4bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IT22UD4%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlilF7VYJqt1bNKfk36ae34dKVfQNbGPId%2FKpJdRYgAAiBE2Oai%2BYpSNNFuYUDTsSGf7Z%2FIvFLxq3zChFiNiuxDWyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2Br%2BjpBOV0Q9%2B%2BBwKtwDksh%2Fdy%2FjGC9YB1%2FDZ0YbUuR8HokcQw00Eob2ciEawR4ZIX%2BS3zHVAvIWRI7lS%2FqDmWy0oMACdIY19m3Z6zhV2ykgrU3joUQskrfZq3TviWQhv0rPCM%2BG0LlZArxGmxqQhAd5Hg9au4cI0iu%2B3J0TAgBEe6uudlVqmv5fMBl4awC2ytMYX4KJSd6FsKJ1B1RcA9JqzBOi6lgy%2FDTSHq1oRir2sqzzoRtHOBpX9ZfnAtgU08rtK9kIzFasYwHLfkqP4pHAXT5GAoojrrigBc4pmSggf7UHnBYEWh6l3v%2FCOpK%2Fo4SWPNdZi9IGnmo2%2FJdomEIc2TZwCwR4PWXIeWijCTt5ULuXCYrK8Ldcimsach4Soy9CM4KxZCY7jMr6%2Fe%2FLc1WLvH9hB9E%2FxGm3RQ82I2i6H%2Bw2tE6yPmSFktOrNH9HmxDm5qGOGezZWwRrPrV2HiShgn8fUwLc8lqvCB%2ByM6foZlL91UaK5qFIDe9LyMHx15u0U6SqJmkZZ8ZZb8rYTfb4bcfHVpyFuLr1f8ks0vTD%2BSylZw96YC6Zzf5gQikyXAx6CqdVbx7CRTM8S1sA9Ah1A%2FaiNJHpcWmcs%2FZPc1OzVJHb5A6uFXFycwF89PSaH7pPRzBOIvHBv2AwjMGAvQY6pgGfNhjXcqVwR9orJIMPM%2FAF7CxFXlx8hx6k7JLXUp5Vgnz1Oq15p4HOUTbjXcblT205qiJHv50LHsBnSd3PohtsRuBG6PRTm%2BeAi17yKGGr75PDceckG0iw68mYb83O25ArFhb0ETP5FBiCsI1sZtzuk2ZXuU3KLW0z68iS0gcFUcDI%2BzHQhV0gnVubUnV4WKKKsbOPBX2ponMM78terTxGedHDCLLo&X-Amz-Signature=47a1c2fb6e22187aeec7b25706b65fdfe474f99f753a8f0c3f4cbe47321c0fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
