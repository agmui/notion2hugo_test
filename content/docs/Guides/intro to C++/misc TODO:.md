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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AGAL5Q%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC7OGRde0mo92tmZ%2BWPEYL0wRKZeN%2BLNWx2fhCg49UQcAIhALsiBlb4rjwYEWtYPdc12L6z7n3VXaGtYEFfgvhHUIpgKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyshH14XDbCl2Zxr%2Fgq3APSt53VmVtHzZsbXTsGPIkKWh5VJKipI5WSxsYc6F5734k2DAIINsWKpoTS%2F7lWylrHN%2FVyw8HqQpZHc3r1kRJCVMhPAmtxGp%2BESdSG6aqoTAGbb7kfnqiSRgTBqS%2BHZ2sXms2HICj1WRibNuqYkClEnjA%2FmNa%2Fg5ntknIIcneHlLahu0umXgH9XlAFzbQNAulbWZGJ%2BRbVlbolljX%2Bw2iH4b1EZi%2FClQHwMLQf1UgEbgHi9ckc4ig%2FWgP2NQSKLspoB6HBQBDkJ3FBijI3Os47kJUlgTknB1j8pgrM03WjIiJBQzGSd7DWpDjPJBoZir5UVy8H5761Nh9lBttNV7fveHyIyG%2B6CLzb9gvuB6eV94nV2mhXR0femEL%2BUsd64mtFYuVXfg2XJB0voIQbAVx3ZobrPu0EhzK37QwZVcCQdeI6FkfOGH62xQs1Gk3ifZd3PFSZXSqwaymtrqvvOWt1yVzvqtfhyzkh%2FuATZ4NvjNVE%2F9zMlBl1ueO57ipgwalqUvrj3Kafs%2FUoMothSD5DR24zJ2pb%2BdPKhSqW4TMvo75BappZSGgjL8xvbzvcsAuKgSDYchLbeBm5Um2gn908qTYYU5RXIzlF3CNyFMXkMDjf8slJL1PebHZruDC26efNBjqkAU%2BZ%2F0j91Mb9iLpbYeUwRtl5WcFJfCTlrXaxcjptq8pbK%2FD9TgECB8Jwyblyh2KiPH2KGJeeyD52iCJ09Lsu%2Fpkpy5KDbekmE1VZzHgSfL00mJMb3iN4z7Rq%2BQYPxr4dXgL9Sx76QDkVp1aZQ5WJwp2DSfAvEazj39JSBfkH6myIdckK1gk12uK%2FxC20kgNRgs%2BZVW55vI3t2f0bMBJ5whjb1TNz&X-Amz-Signature=4ab895e0354dc1cea42dcb1eecec7c6809c752b38f362e3982a872749e9f6f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AGAL5Q%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC7OGRde0mo92tmZ%2BWPEYL0wRKZeN%2BLNWx2fhCg49UQcAIhALsiBlb4rjwYEWtYPdc12L6z7n3VXaGtYEFfgvhHUIpgKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyshH14XDbCl2Zxr%2Fgq3APSt53VmVtHzZsbXTsGPIkKWh5VJKipI5WSxsYc6F5734k2DAIINsWKpoTS%2F7lWylrHN%2FVyw8HqQpZHc3r1kRJCVMhPAmtxGp%2BESdSG6aqoTAGbb7kfnqiSRgTBqS%2BHZ2sXms2HICj1WRibNuqYkClEnjA%2FmNa%2Fg5ntknIIcneHlLahu0umXgH9XlAFzbQNAulbWZGJ%2BRbVlbolljX%2Bw2iH4b1EZi%2FClQHwMLQf1UgEbgHi9ckc4ig%2FWgP2NQSKLspoB6HBQBDkJ3FBijI3Os47kJUlgTknB1j8pgrM03WjIiJBQzGSd7DWpDjPJBoZir5UVy8H5761Nh9lBttNV7fveHyIyG%2B6CLzb9gvuB6eV94nV2mhXR0femEL%2BUsd64mtFYuVXfg2XJB0voIQbAVx3ZobrPu0EhzK37QwZVcCQdeI6FkfOGH62xQs1Gk3ifZd3PFSZXSqwaymtrqvvOWt1yVzvqtfhyzkh%2FuATZ4NvjNVE%2F9zMlBl1ueO57ipgwalqUvrj3Kafs%2FUoMothSD5DR24zJ2pb%2BdPKhSqW4TMvo75BappZSGgjL8xvbzvcsAuKgSDYchLbeBm5Um2gn908qTYYU5RXIzlF3CNyFMXkMDjf8slJL1PebHZruDC26efNBjqkAU%2BZ%2F0j91Mb9iLpbYeUwRtl5WcFJfCTlrXaxcjptq8pbK%2FD9TgECB8Jwyblyh2KiPH2KGJeeyD52iCJ09Lsu%2Fpkpy5KDbekmE1VZzHgSfL00mJMb3iN4z7Rq%2BQYPxr4dXgL9Sx76QDkVp1aZQ5WJwp2DSfAvEazj39JSBfkH6myIdckK1gk12uK%2FxC20kgNRgs%2BZVW55vI3t2f0bMBJ5whjb1TNz&X-Amz-Signature=48aab821006ac65ca46c55cc876d582f08b2eb06b870511f954395243f6d0ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
