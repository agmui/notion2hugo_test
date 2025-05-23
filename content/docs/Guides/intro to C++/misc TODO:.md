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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKOWMZEU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIGC2gPlZ3btgxPmFKHntz29qSmAbMjif8oVEYqNelLTKAiBHyidESYm4OnKFGLMelURq9Hwmnq8MmXiZ8RTk4o35fyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxvm8Z0D61zw3ncH6KtwD26CfornyBpush9nAJTCscuyXiiR6y650fpTZZVprllYCIO%2BzUYaLw3PkUIPTe%2FYzLvS8hKR5WhZgT1HsmNoefTUKBney0DGNhOMsl1nFZOCJsNQnc%2BthWo1WL6uv%2FKA6%2FNHhvMqdvVrHKIYtRVxqNxqgjKI3zJJL71WOreiLp9b7OeXJXkHn4Pm69TcNcTyObB0s9iO4PD1BTNhFndTJj%2FeL9sL6%2FwQXuVsDhKH4cH7RI53VdWshr2tC4HLod0%2Bi8JkEO1ZN%2BwErygYlmf7o1Mubc7oFP95n2zfCwJENjgHmsV0rKX6BOoj6c8yO8pfeXOM%2FD8VLiVpXfKomL%2F8X8QoX0H0FnBcsQBjb3oS5ADfFoxZo%2BBKJee0rkWPud7C1bXhTzRgY5McfKJ1C%2FbpTZOLsDhiTNx67k7Oz75DeWUxvB5Z7uM7jnU67xjlcIzNCZjERNJf2RUCx1CRMQBN8vf5OYh5jfdS1Xig3GDP3bYuXd64Wg94ej9PSai6v9F0bjZvtO4c9HS4dxRGxVuw%2FoQ61rGtTkXwH7xi9iZVdmtcQjiCaQGq9VuiSJVnycz%2BPxo4p18jPdeItq%2FnM%2Fw9RtaYNORj%2BJvVAxsueLMashl2LEINp9iaoFv9xBnEw0rTAwQY6pgFz56gS0dqw3K%2B9QZyyc5mAneo9cimxqje59ctdHYAI%2BmjTvtamPeXqtos6Ek%2Fq29PWvC6ToyND2kHii8JYbx7hrhqvsmQjQ1rFPzjBfoH4uFw45rmLeIy67AMJixOIJ%2FHjesMBHgLEz9gNnniOrocD30GXRwziNEGvYpPMym0vL2mVYzj4wC4cWIELCVj0GazEeVgHk%2B64SDbJpfXLjQJBMmdzMfnO&X-Amz-Signature=f87958af55a13488b19283678f88dce8e102f228a10c09d455558ef0abcbf838&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKOWMZEU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIGC2gPlZ3btgxPmFKHntz29qSmAbMjif8oVEYqNelLTKAiBHyidESYm4OnKFGLMelURq9Hwmnq8MmXiZ8RTk4o35fyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxvm8Z0D61zw3ncH6KtwD26CfornyBpush9nAJTCscuyXiiR6y650fpTZZVprllYCIO%2BzUYaLw3PkUIPTe%2FYzLvS8hKR5WhZgT1HsmNoefTUKBney0DGNhOMsl1nFZOCJsNQnc%2BthWo1WL6uv%2FKA6%2FNHhvMqdvVrHKIYtRVxqNxqgjKI3zJJL71WOreiLp9b7OeXJXkHn4Pm69TcNcTyObB0s9iO4PD1BTNhFndTJj%2FeL9sL6%2FwQXuVsDhKH4cH7RI53VdWshr2tC4HLod0%2Bi8JkEO1ZN%2BwErygYlmf7o1Mubc7oFP95n2zfCwJENjgHmsV0rKX6BOoj6c8yO8pfeXOM%2FD8VLiVpXfKomL%2F8X8QoX0H0FnBcsQBjb3oS5ADfFoxZo%2BBKJee0rkWPud7C1bXhTzRgY5McfKJ1C%2FbpTZOLsDhiTNx67k7Oz75DeWUxvB5Z7uM7jnU67xjlcIzNCZjERNJf2RUCx1CRMQBN8vf5OYh5jfdS1Xig3GDP3bYuXd64Wg94ej9PSai6v9F0bjZvtO4c9HS4dxRGxVuw%2FoQ61rGtTkXwH7xi9iZVdmtcQjiCaQGq9VuiSJVnycz%2BPxo4p18jPdeItq%2FnM%2Fw9RtaYNORj%2BJvVAxsueLMashl2LEINp9iaoFv9xBnEw0rTAwQY6pgFz56gS0dqw3K%2B9QZyyc5mAneo9cimxqje59ctdHYAI%2BmjTvtamPeXqtos6Ek%2Fq29PWvC6ToyND2kHii8JYbx7hrhqvsmQjQ1rFPzjBfoH4uFw45rmLeIy67AMJixOIJ%2FHjesMBHgLEz9gNnniOrocD30GXRwziNEGvYpPMym0vL2mVYzj4wC4cWIELCVj0GazEeVgHk%2B64SDbJpfXLjQJBMmdzMfnO&X-Amz-Signature=5583cb0d78aaa5f6bb97dc927bcb42dfa3ddf480387e1b78c03c64765dd69a69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
