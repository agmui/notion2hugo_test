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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466465G7DFT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCABsod9DzbC9HOKwbQ5AKBBUsUC6P7AY6SWmIYcPqDyQIgOYJiM%2F5stU76rJewMvsp5Wh%2FEKc8%2Br0IAJy8zYKRYHgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B8uFenI2HTi05ucyrcA2OiMiAso74FJ32WS4B%2B6yz1tkT1MUAtd6ZXucE%2BdOCJeJO1nEcw3MO%2BwgTyD0HQhrIqEq9lTtLjo941%2Bxd67jCyN6kzQDDLREAayiAn23RJKgtxKa5G6HRmqP5wwtt2zh6nZlVI7qYtpRoKGF6QbdVRD%2Bov3eSH5%2BBP1cH%2FUjUzfifIdW1XBoE5xTKTAQtDi%2BkO2Lhh1Re086l24HsDWQAXI9ztw5VpuD4KHGe8W3w39VJRHQtNkXeivnYcUIc0QqeApr3rTl74NYOBO7W7lCaFxOuo%2FGXluTLT3r8HPXBWvVY1ZAhSSbVLQCdLTsz0FbUR8quVbS6zNU0rZ3zlWwuhlTtKbHtFCSCOPBfkOJv51TrILDcTzqEfBh%2F7sFfJZl5vi40jCT9Fbp4mzOEtAQUMYL%2BX2nNOyOr8786oXmt%2BsezXd4F%2BJGaR%2FEossRssAb7g%2FeHHJCizSx%2Bf%2FbcUPjaTAe8ngIEKuKzksPmbNfXc5FLJEBuCMLtTb%2FnuVH273k%2BesD7hP6qAVEATmtA0k0S4sh5dksNqfvzTReKzV43Z%2Blhy96AcZDjvMgynaY8hQCox%2Bf55uwGUPfvjDGpJ%2BdZ9cJ%2F8M%2Fby6R62ffHiwHig6%2BCQ8QrCXoSvSTSIMNuX3cIGOqUBX3pY2xXep32g21S9hnqHOruTmCrkZlENWqPmK2WtdCAlGPa4KKaxcuLfnsXO7HXCIeyw9loDJlYpdT7keHDP6QpQWFuJ9JtKGm930%2F9i%2F4B6HK%2Fi86pt4Q7AEsTqRnfYPxeTJ0yykZgoVKaPWBN4k%2BXJJEsQdph%2FUekdTYCGHIwFAONBJRm0Ca1gwfqIa7jVgRmYrQ0i8n0hvUoCY32Zo7pdDVqd&X-Amz-Signature=c9bdae65ae01e43f1a04423b6ba460f554b719755a364bc5b112d5aef8ba18bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466465G7DFT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCABsod9DzbC9HOKwbQ5AKBBUsUC6P7AY6SWmIYcPqDyQIgOYJiM%2F5stU76rJewMvsp5Wh%2FEKc8%2Br0IAJy8zYKRYHgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B8uFenI2HTi05ucyrcA2OiMiAso74FJ32WS4B%2B6yz1tkT1MUAtd6ZXucE%2BdOCJeJO1nEcw3MO%2BwgTyD0HQhrIqEq9lTtLjo941%2Bxd67jCyN6kzQDDLREAayiAn23RJKgtxKa5G6HRmqP5wwtt2zh6nZlVI7qYtpRoKGF6QbdVRD%2Bov3eSH5%2BBP1cH%2FUjUzfifIdW1XBoE5xTKTAQtDi%2BkO2Lhh1Re086l24HsDWQAXI9ztw5VpuD4KHGe8W3w39VJRHQtNkXeivnYcUIc0QqeApr3rTl74NYOBO7W7lCaFxOuo%2FGXluTLT3r8HPXBWvVY1ZAhSSbVLQCdLTsz0FbUR8quVbS6zNU0rZ3zlWwuhlTtKbHtFCSCOPBfkOJv51TrILDcTzqEfBh%2F7sFfJZl5vi40jCT9Fbp4mzOEtAQUMYL%2BX2nNOyOr8786oXmt%2BsezXd4F%2BJGaR%2FEossRssAb7g%2FeHHJCizSx%2Bf%2FbcUPjaTAe8ngIEKuKzksPmbNfXc5FLJEBuCMLtTb%2FnuVH273k%2BesD7hP6qAVEATmtA0k0S4sh5dksNqfvzTReKzV43Z%2Blhy96AcZDjvMgynaY8hQCox%2Bf55uwGUPfvjDGpJ%2BdZ9cJ%2F8M%2Fby6R62ffHiwHig6%2BCQ8QrCXoSvSTSIMNuX3cIGOqUBX3pY2xXep32g21S9hnqHOruTmCrkZlENWqPmK2WtdCAlGPa4KKaxcuLfnsXO7HXCIeyw9loDJlYpdT7keHDP6QpQWFuJ9JtKGm930%2F9i%2F4B6HK%2Fi86pt4Q7AEsTqRnfYPxeTJ0yykZgoVKaPWBN4k%2BXJJEsQdph%2FUekdTYCGHIwFAONBJRm0Ca1gwfqIa7jVgRmYrQ0i8n0hvUoCY32Zo7pdDVqd&X-Amz-Signature=9d71ef999e9f922a0c9bd1f01ce2af379cb5979c5aaa7988b789da317514006a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
