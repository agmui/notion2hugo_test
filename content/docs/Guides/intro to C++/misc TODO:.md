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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5GXFZ2G%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTyeNk4kim3vN9CUDdsImBVVREEhLfkj0vkzWEebVkxAiEAoLmDOYc1tUpssK%2FvLXcqIjiWDbIN3kAv9bWJEb8z6fcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi1L7XxYfjeJ4yfiSrcAx%2B5SoJuWlVj6psygI8RG8YRqcsetWcA%2Fo5XV3DH6sPTdy775YoVlbf1wl%2BE6zzbJ%2B3DxqEGQErtJAGy9Li55xqGnFVDtvl5%2FkZSMTKk3WKLu6MadTPkPoEIEVYdfeNCZwUs83ehteA4%2FXulcDncrObqWlkxAOW57q%2BU4vZxUROpm0zWPxJ0CBwHzBsn86spUSMseZZdb3MBx%2BSr%2Fy54ephzG4Jyc0zf3cylqb9LrVU5MGQof0ypI3BFxTWsOAmhye3tV9M0iicy8VMEfHMRscgyutmTPTEBM1QnLQMYoHe5RU5PlGC9K581By3iRTSoHJGJGYcjxJpbOQKE3%2BDjMf7ED6MCQwEDWVmXaiVD9tQbR5fGsLUkF7FxGNV%2FCv2IfbdvBw8W%2FJpAgcECF1YMhRffDyKuL%2FeDiM85Isxu3m5de0YTd8n3x9fB2qPyqxhfAZQ0W0AaUCdv6M2cbViyfTlhR0JGh5crupZxb5FvBWpE8RjPQNzw%2BY6%2BCUordv%2BioxPCt126%2Fca6kRa6zNQoxZl0Lg4RAau7gGLgYfS76O%2BwAPZTKBqI57wvaBR9kucmsNOn2PfgTYsYk%2Ftplg7hOI8vt4lKkQTk33yrMmIRTap0ECntUxvmdksbHETFMMv9hb8GOqUBx1P48Fr2IGKG0EW74nN65G8jWWxlEbWJRcEUxMMN398jMaR0QWV3wGrE06Th9wtyqtD8DcbnZwGPV02%2FdTheeZ0pMq9dX2%2FxV3c1%2FpKZmdglWrfTx90RSgLZVaeWaW%2BKQw2kr5oiDXNy4qcjLEqc1rFz98KTJvB7f5KUcpptErxiDPQSIy3NyGtR%2BQK0GIF9jgpW0JRppbj6unSDeHEvO3AQLdSA&X-Amz-Signature=49c26575cbc4374a9eb6ba2dc379238038bea78bf40977cca6c8f92b38030b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5GXFZ2G%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTyeNk4kim3vN9CUDdsImBVVREEhLfkj0vkzWEebVkxAiEAoLmDOYc1tUpssK%2FvLXcqIjiWDbIN3kAv9bWJEb8z6fcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi1L7XxYfjeJ4yfiSrcAx%2B5SoJuWlVj6psygI8RG8YRqcsetWcA%2Fo5XV3DH6sPTdy775YoVlbf1wl%2BE6zzbJ%2B3DxqEGQErtJAGy9Li55xqGnFVDtvl5%2FkZSMTKk3WKLu6MadTPkPoEIEVYdfeNCZwUs83ehteA4%2FXulcDncrObqWlkxAOW57q%2BU4vZxUROpm0zWPxJ0CBwHzBsn86spUSMseZZdb3MBx%2BSr%2Fy54ephzG4Jyc0zf3cylqb9LrVU5MGQof0ypI3BFxTWsOAmhye3tV9M0iicy8VMEfHMRscgyutmTPTEBM1QnLQMYoHe5RU5PlGC9K581By3iRTSoHJGJGYcjxJpbOQKE3%2BDjMf7ED6MCQwEDWVmXaiVD9tQbR5fGsLUkF7FxGNV%2FCv2IfbdvBw8W%2FJpAgcECF1YMhRffDyKuL%2FeDiM85Isxu3m5de0YTd8n3x9fB2qPyqxhfAZQ0W0AaUCdv6M2cbViyfTlhR0JGh5crupZxb5FvBWpE8RjPQNzw%2BY6%2BCUordv%2BioxPCt126%2Fca6kRa6zNQoxZl0Lg4RAau7gGLgYfS76O%2BwAPZTKBqI57wvaBR9kucmsNOn2PfgTYsYk%2Ftplg7hOI8vt4lKkQTk33yrMmIRTap0ECntUxvmdksbHETFMMv9hb8GOqUBx1P48Fr2IGKG0EW74nN65G8jWWxlEbWJRcEUxMMN398jMaR0QWV3wGrE06Th9wtyqtD8DcbnZwGPV02%2FdTheeZ0pMq9dX2%2FxV3c1%2FpKZmdglWrfTx90RSgLZVaeWaW%2BKQw2kr5oiDXNy4qcjLEqc1rFz98KTJvB7f5KUcpptErxiDPQSIy3NyGtR%2BQK0GIF9jgpW0JRppbj6unSDeHEvO3AQLdSA&X-Amz-Signature=f6db0101117282f83e77b8f4dbe3d06348387280c0f3dd9c15c793685466a5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
