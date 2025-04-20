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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJCMW46%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCXjK0C12Paj726nH8nuQgC26vyye6k1uLfkdPQqaGNAwIgY8yXGgYgRW5M7H8GjNhoe8%2BD7BfGP0IYWVPcjGIcWAcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNntiADVjwqWjx4QJSrcA1Z0pYhQESRoRLEVWPiT4SIr4q5BVUfNzb2%2Bg%2FuVvIXr3r5P8%2BTbOgxEvs6TroJg6spCWhVx8N8KOzPC1LgZUdeQt0LTiFGgk40pJHdRAvKfUyKdKb5RNuUKcxPGueNTE3H3RtFlPmrwwh9OTDbA%2F6ik4Sxf5CDiIVwIxitFBs6FXSj1k4QksIpZ6nzTPO%2FjcSNVbmvxZGlpXDWAhQURq2fmH6TzFPO5K2vEF8MjlA73lAwrgKeRXgOOqVvRhYU%2FQNR01PYPv%2B6DMp0CLotzWNhL6P5Ux9jGyQxkiUSHmkBycvdmQh5MXQ6U3%2F0vhA1DNd6a3w%2BZ%2BebD5z4lmmfz51spK9UhlIOZwaEvyislaAozDIR4mfCBnV%2F3SIh4IsveMr1juPHag8Ih9w78peEmNC452%2Bdud%2FS5K3LV1MYiMKrnFfQ5%2FaplpSTNW2j1o0sUf1sscxPnAYFQbRs%2BQXoBPViUijYZIjD9p%2FCZg82%2BSxdAaxhZfrFL6EtKOnOx8%2Bxv1snq1%2BcMP4edeYc36D1hgl3ZMQb2MGZ9b8zhda01cM1KkHo38lZh4dTBdmFOkxKeMc1i%2F8q4MU%2FuWWv1TT2aMlagwkow4G6%2FnqiYT8P%2Fd%2BADtgKLFPWv36AxVLSMMNSBkcAGOqUBZI0WN3%2FJuIP7ZjgtHygYbWlnbkyhfXbb1%2BSzVPv1h%2Bts%2BPP1lfppDMF8a1%2Br%2F9jWlgBMSX%2B0SL5n3r1ME3LCjltSa5OKpYaTfLnJrIJ3JjEhcS%2BsFM60H9AycL%2Bybw1aug7Aq5X4ZSnXOFJYmKN8FRCWvzEn%2BpQWiM99mdwXrgC3b7zngslg6JHXQXW9nusxwuBsUNSrFSbh02sca7W%2BtMce1SS8&X-Amz-Signature=44b16db57b06d6dd1fd62d070f1f30a980ea9ffd1237775abbb3c6a8bf0976b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJCMW46%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCXjK0C12Paj726nH8nuQgC26vyye6k1uLfkdPQqaGNAwIgY8yXGgYgRW5M7H8GjNhoe8%2BD7BfGP0IYWVPcjGIcWAcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNntiADVjwqWjx4QJSrcA1Z0pYhQESRoRLEVWPiT4SIr4q5BVUfNzb2%2Bg%2FuVvIXr3r5P8%2BTbOgxEvs6TroJg6spCWhVx8N8KOzPC1LgZUdeQt0LTiFGgk40pJHdRAvKfUyKdKb5RNuUKcxPGueNTE3H3RtFlPmrwwh9OTDbA%2F6ik4Sxf5CDiIVwIxitFBs6FXSj1k4QksIpZ6nzTPO%2FjcSNVbmvxZGlpXDWAhQURq2fmH6TzFPO5K2vEF8MjlA73lAwrgKeRXgOOqVvRhYU%2FQNR01PYPv%2B6DMp0CLotzWNhL6P5Ux9jGyQxkiUSHmkBycvdmQh5MXQ6U3%2F0vhA1DNd6a3w%2BZ%2BebD5z4lmmfz51spK9UhlIOZwaEvyislaAozDIR4mfCBnV%2F3SIh4IsveMr1juPHag8Ih9w78peEmNC452%2Bdud%2FS5K3LV1MYiMKrnFfQ5%2FaplpSTNW2j1o0sUf1sscxPnAYFQbRs%2BQXoBPViUijYZIjD9p%2FCZg82%2BSxdAaxhZfrFL6EtKOnOx8%2Bxv1snq1%2BcMP4edeYc36D1hgl3ZMQb2MGZ9b8zhda01cM1KkHo38lZh4dTBdmFOkxKeMc1i%2F8q4MU%2FuWWv1TT2aMlagwkow4G6%2FnqiYT8P%2Fd%2BADtgKLFPWv36AxVLSMMNSBkcAGOqUBZI0WN3%2FJuIP7ZjgtHygYbWlnbkyhfXbb1%2BSzVPv1h%2Bts%2BPP1lfppDMF8a1%2Br%2F9jWlgBMSX%2B0SL5n3r1ME3LCjltSa5OKpYaTfLnJrIJ3JjEhcS%2BsFM60H9AycL%2Bybw1aug7Aq5X4ZSnXOFJYmKN8FRCWvzEn%2BpQWiM99mdwXrgC3b7zngslg6JHXQXW9nusxwuBsUNSrFSbh02sca7W%2BtMce1SS8&X-Amz-Signature=b94e02f0599b772e7a3cc6c45fe2100870e99e29d5be7451bdae57ff5ccf8806&X-Amz-SignedHeaders=host&x-id=GetObject)

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
