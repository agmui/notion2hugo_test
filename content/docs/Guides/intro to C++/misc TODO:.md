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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676Q4CNOC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC6yPDfMlGID7%2Fj%2Fk2%2FHbfQ2VEyl8RHkAFqjifQf4COCQIgB8Za0KGjUDCZkrh%2BnXBILzuX%2BiAG9A%2FpFMKm13F2nBsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI6BXvwupIdNjZky%2BSrcA%2F%2Btw0i3ko%2BsxwxphNmfAhWeqD%2FScoU4CHrohmxQfl5JfBPpXimPCt5W2lXZOAb6m2DMTjuZRMHcIPaR8VaPUsTWTRTNWSeIUlZYa13SlyfmoX5RZMP67t9mEKEAGaTtofU9JIRXlYG9Crfr0F0NXMUwwARI9tZbdjIMTXv5nrJiBarzlFCQH3nrtqiR%2BbD12YlZGa25%2FTn1UKUyDykvAIGHMUAQXR7L8wb9c2L6uybIDIBrcJ5TY9L8KrdypsqwoeoQYTudll9OvDgsdcWiLBe1xqBQp8pHLrdqKZsIcSooFaRv%2FVyxLAHqCtpFXHNS%2BIYOPRImSB6dgPUGJFidewe%2FySPE9stt9Imh%2FqMMjwxWeQCRzNT086RbjmoRzPZ1f8YS2nh4NMpHXacyabCEmynyXOlvvAygq1WOzDOZ3H9HvgZOS2c%2Fy9iIsn1Sms9au%2F0Cripy4C%2BAg0kYU2aoRrP54VcnVSPhJnitFqXtHl2xloLTDTmTozj17947Wh4CFvQevovHbd0ZeX5Fy8n0EfpF%2FmvS91bMGqWTX0Q4YZXpN8jAm3OQO7TqYapkwAfiie4DBOqnOnSMQ2%2Fs%2B00f1JkiLPgVppffIYdBWZt2WeUvvjGcHD567VAGrDnNMIf05MIGOqUBnLTnUdzjXsvgq1WEbcdU2xE8PpvsTVRRmCW0bCja4r1a0fnDz6KPpbVwPFUSgVnGW7eWWbAjD%2FckDb%2FNUCR%2BhS3xIerNeZ77Sq6Kok9%2FX%2BRZPCYjcD%2FhYBezvjdA%2FdQPCBSKY95B5y9f5semboFoomYXGNA%2F%2FZnO65aa94p1SSOJrD8xbGcgWvNUQxSHjjwebRBApOY876UOEQHRnSDG6TJ7w91k&X-Amz-Signature=8f6b2a0edd3e0b4637bd0bded602040fe078b44ed694ee3d7d708e588fcc093f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676Q4CNOC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC6yPDfMlGID7%2Fj%2Fk2%2FHbfQ2VEyl8RHkAFqjifQf4COCQIgB8Za0KGjUDCZkrh%2BnXBILzuX%2BiAG9A%2FpFMKm13F2nBsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI6BXvwupIdNjZky%2BSrcA%2F%2Btw0i3ko%2BsxwxphNmfAhWeqD%2FScoU4CHrohmxQfl5JfBPpXimPCt5W2lXZOAb6m2DMTjuZRMHcIPaR8VaPUsTWTRTNWSeIUlZYa13SlyfmoX5RZMP67t9mEKEAGaTtofU9JIRXlYG9Crfr0F0NXMUwwARI9tZbdjIMTXv5nrJiBarzlFCQH3nrtqiR%2BbD12YlZGa25%2FTn1UKUyDykvAIGHMUAQXR7L8wb9c2L6uybIDIBrcJ5TY9L8KrdypsqwoeoQYTudll9OvDgsdcWiLBe1xqBQp8pHLrdqKZsIcSooFaRv%2FVyxLAHqCtpFXHNS%2BIYOPRImSB6dgPUGJFidewe%2FySPE9stt9Imh%2FqMMjwxWeQCRzNT086RbjmoRzPZ1f8YS2nh4NMpHXacyabCEmynyXOlvvAygq1WOzDOZ3H9HvgZOS2c%2Fy9iIsn1Sms9au%2F0Cripy4C%2BAg0kYU2aoRrP54VcnVSPhJnitFqXtHl2xloLTDTmTozj17947Wh4CFvQevovHbd0ZeX5Fy8n0EfpF%2FmvS91bMGqWTX0Q4YZXpN8jAm3OQO7TqYapkwAfiie4DBOqnOnSMQ2%2Fs%2B00f1JkiLPgVppffIYdBWZt2WeUvvjGcHD567VAGrDnNMIf05MIGOqUBnLTnUdzjXsvgq1WEbcdU2xE8PpvsTVRRmCW0bCja4r1a0fnDz6KPpbVwPFUSgVnGW7eWWbAjD%2FckDb%2FNUCR%2BhS3xIerNeZ77Sq6Kok9%2FX%2BRZPCYjcD%2FhYBezvjdA%2FdQPCBSKY95B5y9f5semboFoomYXGNA%2F%2FZnO65aa94p1SSOJrD8xbGcgWvNUQxSHjjwebRBApOY876UOEQHRnSDG6TJ7w91k&X-Amz-Signature=a0e58d714538235210a704328bdb5567b93f08414ed45bf2c134e04bf06f3038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
