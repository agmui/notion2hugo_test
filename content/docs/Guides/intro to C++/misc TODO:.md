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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECXLGH7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWZeUqKtLPfDAIRijTVOXbFBdZNnlBDC7j94aHZlCfCAiASJXQWM11mCKfDdXMamV2NgxEEoV2Ep24SMPu6Nr7ReSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJsEMU5EN321Nvl%2BKtwDeToZxansHNQV4PPlDwxYmXIZY%2FS23CqK3S0%2F6Zfrm9i%2BtkcJ88SSaTOgpdykGcTcJd2PWF%2B4u6ImSQJ54ow18Z%2BXbBdFTS4Rn85ILseqQrNs%2B8XL%2Fe3AIVxH11kKHoh9NU8EXSa20W7Nf%2FZ%2B6hEoiiiN5bXdJy%2BzNS5n5AJVe39CQpNHJV%2FI%2BV5cZqMttkfKgH08Dpv3YOvdy691C25PSbUC4%2B5qIwlcUDcced8zfnVQue08lm%2B%2FRfl8i0mOxmrxnJ%2FF3GeI91VyBBaLU4z9faC46ml94UuN8iQq4jImQVZP8GXGLgPG%2FiCJlUkEbpFnVxa9VxomrqA6JeiYNX3GNZ0%2FmWJ2lnIfbz8EMBZHAYYR7r5B1dEBwf8PgFRorgfHSlUD9fZ8c7a%2BCGn%2FWfrxBYpGk%2BcoaALCbX5%2F5WGaC7qbTuLtXdqVQHQJ%2BxOre20u9F37CXoNm5EpstWbTHW34ucQXPZp2kTkL%2BxQVHrihFBhE3F91PiHTCWlrU3S7z9GPHgXgZfwSSF4pVk%2FDqCG9jJY5S%2FPi%2FGZXtpjBSLdUTRnhcwBgDLbkNSJlWXzoU%2BnAvTmEBf83ZEZjxY72cwxG%2BwCq5S9wLbVaQEPgDWM8qTIZPDDaQvXbBaKKbcwqK%2FnvAY6pgHJhH7OOiP1T775FBH7rY1GVW%2BWNQlugj1f5WouXDFMp7Jm4rXm7Uwx5tPWIAPy%2B5pjKtWzcYMGSueILnmAAvnwfzlyCdwy5BV%2FChjSjaTakc9yUTlJtPSWkrF1ecZtXBF18f6%2BynCDVSvMgFmqlwJJqokx5WrJHSwZKi%2FH4GHNGT%2FL%2BlX%2F4Q3y2%2BXqusx9FnhFnC53fkQOcZAISR8QNLY6jKgtHNgo&X-Amz-Signature=c4fce63640538b3d2b09ef0db4977050f69292018c22ea0914d6077220584366&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECXLGH7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWZeUqKtLPfDAIRijTVOXbFBdZNnlBDC7j94aHZlCfCAiASJXQWM11mCKfDdXMamV2NgxEEoV2Ep24SMPu6Nr7ReSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJsEMU5EN321Nvl%2BKtwDeToZxansHNQV4PPlDwxYmXIZY%2FS23CqK3S0%2F6Zfrm9i%2BtkcJ88SSaTOgpdykGcTcJd2PWF%2B4u6ImSQJ54ow18Z%2BXbBdFTS4Rn85ILseqQrNs%2B8XL%2Fe3AIVxH11kKHoh9NU8EXSa20W7Nf%2FZ%2B6hEoiiiN5bXdJy%2BzNS5n5AJVe39CQpNHJV%2FI%2BV5cZqMttkfKgH08Dpv3YOvdy691C25PSbUC4%2B5qIwlcUDcced8zfnVQue08lm%2B%2FRfl8i0mOxmrxnJ%2FF3GeI91VyBBaLU4z9faC46ml94UuN8iQq4jImQVZP8GXGLgPG%2FiCJlUkEbpFnVxa9VxomrqA6JeiYNX3GNZ0%2FmWJ2lnIfbz8EMBZHAYYR7r5B1dEBwf8PgFRorgfHSlUD9fZ8c7a%2BCGn%2FWfrxBYpGk%2BcoaALCbX5%2F5WGaC7qbTuLtXdqVQHQJ%2BxOre20u9F37CXoNm5EpstWbTHW34ucQXPZp2kTkL%2BxQVHrihFBhE3F91PiHTCWlrU3S7z9GPHgXgZfwSSF4pVk%2FDqCG9jJY5S%2FPi%2FGZXtpjBSLdUTRnhcwBgDLbkNSJlWXzoU%2BnAvTmEBf83ZEZjxY72cwxG%2BwCq5S9wLbVaQEPgDWM8qTIZPDDaQvXbBaKKbcwqK%2FnvAY6pgHJhH7OOiP1T775FBH7rY1GVW%2BWNQlugj1f5WouXDFMp7Jm4rXm7Uwx5tPWIAPy%2B5pjKtWzcYMGSueILnmAAvnwfzlyCdwy5BV%2FChjSjaTakc9yUTlJtPSWkrF1ecZtXBF18f6%2BynCDVSvMgFmqlwJJqokx5WrJHSwZKi%2FH4GHNGT%2FL%2BlX%2F4Q3y2%2BXqusx9FnhFnC53fkQOcZAISR8QNLY6jKgtHNgo&X-Amz-Signature=741e0dbe6655e4c3de3698eee520518d84feccd9b4d9062f567c36418ca655ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
