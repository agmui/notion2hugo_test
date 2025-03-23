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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375FA356%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyPC6Cqfe1i1b%2BMNBsNVsMVCmWYkvn5LbFy59E97YF3AIgVFvaJjUXY6YeaY%2FPEnDgRr1iANGLFoH2M8J1miiUTlYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJsYpo%2BmERP75lAvyrcA3EloPTChDmRPPH%2FEamd3syVyHMpQr1fS%2Fr%2FTKRdGmfOQ8wb9hGZI7wB3hovKaywet61341CDsvk3DWjoy7At8oHApc243%2Fxh%2F0EQZhEOB7R0kQr3pJWLat9mRn4ikbV5daHfAfegRvgG8o58decUlzpnZeV%2BiavTUVNReW%2FsHDA3JvC5Zinj7sPr01fGPwgkmxxzv4p8%2BCfcasgW3bllHR%2BklImRMTBEoO3FFdGppHIfoubbFsc6iCMxUVzjtwzZBwtgIwzDnjcdVQ77NqT%2BvFfZA%2BdFN9JaYsqYfI%2BpVwIjB1mE6uOcIUN4Y6n7pjLSZQA4fhruaxrFnncpRTgNZvKhgrI87VUrVugHXUVzUSV6CSpCELMs6ba%2FxjM7AVpt8nNOEx24neWhtXxv4UZKF%2FA5SgoPlhS0kVOin2rHVkRi68xmUBp804FgWc4LRchhSOnn%2FdkoQ4MVpDyKmrfe%2FCxKw4Tv60C4f%2FReFSJQgAao4XefJulpZcHSuy7rgZ0LrE1pBWLUN6gOyp64T3CUbOMo3aWRJjXMpvO4N4LP5w1E8r7oGmacmbn1UxjUG4sdeWn98xaDd6OxdI7zQcKyEMpT8pOh%2F1nb0KFkh7gLdbcMROqZ2Egf3yFJvR2MPDKgb8GOqUBegrMBZh4A7PKTQzas1rC%2BIrT7oxoqxa%2B36VDKQ1xbqIE7kiJ8%2Bm8HsaLVdWCwpEaPToCQX0Z7TV%2FnVsIRo6StEyErHSwo3828C%2FmlrOqDybvY56fvkevAnT%2BbggOrTfFj%2FhtBqIFSYPvPTKsMlKGbhJVxcV86LgTyMAIr5ODmCmp3P8zJbCn9%2FnnGF8US3q3sJ260mj5DCAd55JnvkXlDS9yvoX%2B&X-Amz-Signature=f2fe82d3ff02d257ac8d0b75d7b4508a617c255ff8424af54b0dbb83989f5a16&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375FA356%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyPC6Cqfe1i1b%2BMNBsNVsMVCmWYkvn5LbFy59E97YF3AIgVFvaJjUXY6YeaY%2FPEnDgRr1iANGLFoH2M8J1miiUTlYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJsYpo%2BmERP75lAvyrcA3EloPTChDmRPPH%2FEamd3syVyHMpQr1fS%2Fr%2FTKRdGmfOQ8wb9hGZI7wB3hovKaywet61341CDsvk3DWjoy7At8oHApc243%2Fxh%2F0EQZhEOB7R0kQr3pJWLat9mRn4ikbV5daHfAfegRvgG8o58decUlzpnZeV%2BiavTUVNReW%2FsHDA3JvC5Zinj7sPr01fGPwgkmxxzv4p8%2BCfcasgW3bllHR%2BklImRMTBEoO3FFdGppHIfoubbFsc6iCMxUVzjtwzZBwtgIwzDnjcdVQ77NqT%2BvFfZA%2BdFN9JaYsqYfI%2BpVwIjB1mE6uOcIUN4Y6n7pjLSZQA4fhruaxrFnncpRTgNZvKhgrI87VUrVugHXUVzUSV6CSpCELMs6ba%2FxjM7AVpt8nNOEx24neWhtXxv4UZKF%2FA5SgoPlhS0kVOin2rHVkRi68xmUBp804FgWc4LRchhSOnn%2FdkoQ4MVpDyKmrfe%2FCxKw4Tv60C4f%2FReFSJQgAao4XefJulpZcHSuy7rgZ0LrE1pBWLUN6gOyp64T3CUbOMo3aWRJjXMpvO4N4LP5w1E8r7oGmacmbn1UxjUG4sdeWn98xaDd6OxdI7zQcKyEMpT8pOh%2F1nb0KFkh7gLdbcMROqZ2Egf3yFJvR2MPDKgb8GOqUBegrMBZh4A7PKTQzas1rC%2BIrT7oxoqxa%2B36VDKQ1xbqIE7kiJ8%2Bm8HsaLVdWCwpEaPToCQX0Z7TV%2FnVsIRo6StEyErHSwo3828C%2FmlrOqDybvY56fvkevAnT%2BbggOrTfFj%2FhtBqIFSYPvPTKsMlKGbhJVxcV86LgTyMAIr5ODmCmp3P8zJbCn9%2FnnGF8US3q3sJ260mj5DCAd55JnvkXlDS9yvoX%2B&X-Amz-Signature=1e6b59be5134e477f2293ecb41cbf47207bfe1e61cece0bc4fefac236f572ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
