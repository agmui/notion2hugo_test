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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RMKHNH5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF5ge9r%2FQMcpcowq0DlJ9sH2ZUy3IrAuhPlepzcxxTfgIhAJuKyGGPeaHx5bAzILCfd5gVgnbO20v6f8ZIjxgjw0NyKv8DCFYQABoMNjM3NDIzMTgzODA1Igz9L2TPh4WxSlheFZoq3AMWl%2F6ZUScPkAkvFYK9v%2Bh%2FQrom75iHyLIu4Sk3Qz%2F4SbsHqh3Y4lTJEbZCLfp6VMY18qUn5izV6UNK%2BIfKj%2FkKpnOjZnmS%2BI86aMM1YhH%2BwPKP7ZTbmWL5Yvt4ZC9wEJ3vjD9XwUY3HQtG0DwvcYz7dO89O8kGifm0%2BUH9DLKeYJbEJ75SIOt8xyTT3TxpO3OW32yGM7ZZEWCssUeriHQHEJujQjxXoED%2BSaad4ZTfYrKobTsWjg17YmqLzpIPuLhSSWe0Jla1m%2FeMUnDLSxct%2FlFhCI5kYN%2FmLqdSGSOfl8jpgQEXsNA0vmtmxsOapJVuYve8%2BD8mUvrJYvtt417sx3WdPMhsz4fI%2BUmVKe9ilzK4bYETVpBKECoeiIwyRzbjJaYKiS39wAfK4LEPu0JMs9ergv%2BakPESZGH69GyVg7O42RTRlCWPEI7eQ%2F%2B9AnrzB9GohdsEMrq3VmGgZX4f20TTNn4MRRjSTeCs5URroGbQKwm5bFbXjMxpZzEMXTn%2BZaYpFrBPC6sxW7rpqYQ4ivJutP8gGIO77CZx%2BXvpnzIQmhiD9V8jNEArlq3xufBPaJssN3RNA3UZBShNdCkCHsgyweCA8v0LIkkgitiA8c%2BUPfsXGbgbaUjYxzCwlILABjqkAQ1ZFDxyqr4WMUcInRi%2F4mnbrFcRw9wwLd7%2BZQ%2BX0%2Fo2yY9oI8RCnD281UJiy4OPXS1mQgQYX7cZ6%2B0KpUoNjAAszJ6AooxNG7RjWCRfn2SWdamCzfA1LAmnAWaXBQO07k723ZYukoZElUT%2Farb8Xi5S98jNaidqqHEKkUkR%2Fw0SkZ7PbL6%2Fj6H3K4CRD%2FhFbN%2BKUcU2BTyQEnhbUFEa%2FTJQNRsf&X-Amz-Signature=38a2c8813cd3c3e632b7498a13eeef8a5f2d9e8253644eb3bbedf0a6a61835a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RMKHNH5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF5ge9r%2FQMcpcowq0DlJ9sH2ZUy3IrAuhPlepzcxxTfgIhAJuKyGGPeaHx5bAzILCfd5gVgnbO20v6f8ZIjxgjw0NyKv8DCFYQABoMNjM3NDIzMTgzODA1Igz9L2TPh4WxSlheFZoq3AMWl%2F6ZUScPkAkvFYK9v%2Bh%2FQrom75iHyLIu4Sk3Qz%2F4SbsHqh3Y4lTJEbZCLfp6VMY18qUn5izV6UNK%2BIfKj%2FkKpnOjZnmS%2BI86aMM1YhH%2BwPKP7ZTbmWL5Yvt4ZC9wEJ3vjD9XwUY3HQtG0DwvcYz7dO89O8kGifm0%2BUH9DLKeYJbEJ75SIOt8xyTT3TxpO3OW32yGM7ZZEWCssUeriHQHEJujQjxXoED%2BSaad4ZTfYrKobTsWjg17YmqLzpIPuLhSSWe0Jla1m%2FeMUnDLSxct%2FlFhCI5kYN%2FmLqdSGSOfl8jpgQEXsNA0vmtmxsOapJVuYve8%2BD8mUvrJYvtt417sx3WdPMhsz4fI%2BUmVKe9ilzK4bYETVpBKECoeiIwyRzbjJaYKiS39wAfK4LEPu0JMs9ergv%2BakPESZGH69GyVg7O42RTRlCWPEI7eQ%2F%2B9AnrzB9GohdsEMrq3VmGgZX4f20TTNn4MRRjSTeCs5URroGbQKwm5bFbXjMxpZzEMXTn%2BZaYpFrBPC6sxW7rpqYQ4ivJutP8gGIO77CZx%2BXvpnzIQmhiD9V8jNEArlq3xufBPaJssN3RNA3UZBShNdCkCHsgyweCA8v0LIkkgitiA8c%2BUPfsXGbgbaUjYxzCwlILABjqkAQ1ZFDxyqr4WMUcInRi%2F4mnbrFcRw9wwLd7%2BZQ%2BX0%2Fo2yY9oI8RCnD281UJiy4OPXS1mQgQYX7cZ6%2B0KpUoNjAAszJ6AooxNG7RjWCRfn2SWdamCzfA1LAmnAWaXBQO07k723ZYukoZElUT%2Farb8Xi5S98jNaidqqHEKkUkR%2Fw0SkZ7PbL6%2Fj6H3K4CRD%2FhFbN%2BKUcU2BTyQEnhbUFEa%2FTJQNRsf&X-Amz-Signature=fe2d531a157c3567467bc0628188f876dc72c8e2b465f7646fbeab81a197567d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
