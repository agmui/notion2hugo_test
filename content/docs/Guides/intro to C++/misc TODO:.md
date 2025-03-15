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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C6RZQYC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJC3y4YIk7t67mTJufAcXv5z5rPM4bhDiHtN43Ll%2FIzwIhAMXOfYYF2db0Q7PuuWQXCASBKLoVKoU0%2B0B1f9P1%2FFnHKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt1qXGLfARziLLwdsq3AMQ1eA58tOCH6s6IAzoRVQeGbD329sNq1VmuqTYF%2BbdpQtKcbsyV2y61iA67EBcc8aGWdUxSSffYYmDhR9PpOgulzgtVWWXJZfzxHGOieOAWeqttaIB%2Bg%2FU6ploz9SgHehrqR60aFL4XRraQhp%2B340XtQ8Hmrdq6%2FvoIuhvM9adSwCZUhzTLF9IFEWgjBqdx%2Fy3JyJoj820m3%2FnvEEfbIDjPecEAzcbnqR9a6opQH%2FkWoA1gew10DyTY8jmS%2Fc38CrPV00WTiEakG4jvE8YuuqRyteKgJ7LyQ4sVMPdCwBZICcjlX0vVQiJoopgR%2BhN42zFBIN125kXmlWLHndR50cmPcezPt0twfW4dydQs%2B0dYfiIEQW21IDBW3LEcRpnfFULZ78FvMZwLXmNdmU%2BTJvNcaekvq2UJi%2BBGvM78iOvLlO7bJmK70En4RvqtY2SKEKLyZO3CvAfESLdE00uU4x3k2STf%2F%2BNrX41Q8D6CWH8QXClGh2Q4aFqxJ6%2FhSpyphgHot00Md7uW2TdrGYm69zM5fykhoUWPftvuZRBRSdJ%2Fp9Z5%2FoVDgICGI1fIvCeMjuxqwElAblNalMqNgPfqj4p4FRWKEwgS2NddI0Lc7mr1WXoGhruv9BMtadVpDDR6NO%2BBjqkAQRVgjFecqHAl3YUO0k2v6SWXtN6OfgiLtyd0did0VPqA6Spy5W%2B%2FG1ZbtYaf3W4XdN2MgyHsko9774BN4XapawRhzm3yFvKKXOPxcYyKFhzFcFD4L5qMxM%2FU601mQ9R7QRZx4Xcg7P5y1BMEzHqtS4oz8iO1KLepoU7csM6RVw2iozNKsWSsJfm%2Fw5uvS%2F0M5qoK8ULFVHg9IJHig4WhH7qbTMw&X-Amz-Signature=a2c94cc9649c61e8e8fb2a9806ac1adf9ae2ed89a91839d94e97a79d0bb063b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C6RZQYC%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJC3y4YIk7t67mTJufAcXv5z5rPM4bhDiHtN43Ll%2FIzwIhAMXOfYYF2db0Q7PuuWQXCASBKLoVKoU0%2B0B1f9P1%2FFnHKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt1qXGLfARziLLwdsq3AMQ1eA58tOCH6s6IAzoRVQeGbD329sNq1VmuqTYF%2BbdpQtKcbsyV2y61iA67EBcc8aGWdUxSSffYYmDhR9PpOgulzgtVWWXJZfzxHGOieOAWeqttaIB%2Bg%2FU6ploz9SgHehrqR60aFL4XRraQhp%2B340XtQ8Hmrdq6%2FvoIuhvM9adSwCZUhzTLF9IFEWgjBqdx%2Fy3JyJoj820m3%2FnvEEfbIDjPecEAzcbnqR9a6opQH%2FkWoA1gew10DyTY8jmS%2Fc38CrPV00WTiEakG4jvE8YuuqRyteKgJ7LyQ4sVMPdCwBZICcjlX0vVQiJoopgR%2BhN42zFBIN125kXmlWLHndR50cmPcezPt0twfW4dydQs%2B0dYfiIEQW21IDBW3LEcRpnfFULZ78FvMZwLXmNdmU%2BTJvNcaekvq2UJi%2BBGvM78iOvLlO7bJmK70En4RvqtY2SKEKLyZO3CvAfESLdE00uU4x3k2STf%2F%2BNrX41Q8D6CWH8QXClGh2Q4aFqxJ6%2FhSpyphgHot00Md7uW2TdrGYm69zM5fykhoUWPftvuZRBRSdJ%2Fp9Z5%2FoVDgICGI1fIvCeMjuxqwElAblNalMqNgPfqj4p4FRWKEwgS2NddI0Lc7mr1WXoGhruv9BMtadVpDDR6NO%2BBjqkAQRVgjFecqHAl3YUO0k2v6SWXtN6OfgiLtyd0did0VPqA6Spy5W%2B%2FG1ZbtYaf3W4XdN2MgyHsko9774BN4XapawRhzm3yFvKKXOPxcYyKFhzFcFD4L5qMxM%2FU601mQ9R7QRZx4Xcg7P5y1BMEzHqtS4oz8iO1KLepoU7csM6RVw2iozNKsWSsJfm%2Fw5uvS%2F0M5qoK8ULFVHg9IJHig4WhH7qbTMw&X-Amz-Signature=d3d0693aef22d75eec63cfe2caaeacf54f8a582371a2ea122a47b25652b8c4ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
