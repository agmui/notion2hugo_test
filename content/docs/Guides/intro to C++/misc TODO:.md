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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBA7NTNF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BG36STABWRaPshOKbrbM94oNihWU9FgzUFyLrl82tWQIgN4g7N2U8p%2FjNZmml3AJI6iraI9tQFmSvgecGUN6pjiIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBo%2FVHdQaekfbKDBqCrcAz9YZcxpgs%2Fc6%2FxEL4%2BHaomSH%2FdvZWZAjFIzEXw%2B9GBWzwg7ECT1QL%2BW4aPkGdLcQtdh36fTtmSJkOVkF8tBesxJ1zYaipFJHn%2FG9%2BvKwVTDk0RG1MJEJDqSjay2eTHyw1BYwsF26YSc0AVTW8TtojIeastVvV6n4OolvRxkOBbYCa1XrvveEDQ18TrwNmOrS8u6yq7p2ZmDeI2mHJL8VudkklvmaBGUbQ1%2B832WURzHvffGGe9K2Pgq383Iz6EDUdYRel2VdDUxhAvutwPrKIBBhd1ZSxi2zVcW1NjoQt4HZhZtZ%2Bq3dFPMSFrlVY3Vu%2B0ChyCty9rVgnpeNBLpJD%2FkjdqL%2F6S8UU64x%2BXYV7VerRDUuLYRb0fw20XuNpSOiZAy1HJQBPEuGSVIYKFJNFquCvWDpU2zkfR8rikrcU8rbFISzKl0Fx5ujcUelg1G5gLSTfnDJCrJeO2E0PtQzDj5CCO4ZbXkcVCPgpe0GQaRWmIlTNEZXH1LpY2XBAa%2Bs879PlnQ6lKjLuMvcpwby0ERmNBFqasyJfHDuusyUs6xewf6VKEyEfrJXGeX6cdBVPyi4G0guQoo8GOplrJBBY0YvgdUTt2qbsrXE9HEwlymWBobS0W1xLEL6JAdMNnwpcEGOqUBL43v1ioxnr0hsNe1FoLXKKo4YnSBe6AI81D2jK3HAZvQKZ2yNIwwz1RtjAs8wVKH8ZZoTX7qYOcOuP7PFhVU8HJmU%2FaVufAXUNC2%2BDx%2FFJofK%2F18zPZqMF1XPnEM8D%2FAyOEwjAZmYAzuUQTB2IFbe0F0ORjXMKnvXmzEbp0CWtx6Z3Zx6UEwdHYyTfD1hl%2FYBHXYe6gPxL27vVGeDo7H%2BX1YWdTf&X-Amz-Signature=e7879ea8627034874f7aec657291e3d737dee5636755161ca18aa3a205d3c52d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBA7NTNF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BG36STABWRaPshOKbrbM94oNihWU9FgzUFyLrl82tWQIgN4g7N2U8p%2FjNZmml3AJI6iraI9tQFmSvgecGUN6pjiIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBo%2FVHdQaekfbKDBqCrcAz9YZcxpgs%2Fc6%2FxEL4%2BHaomSH%2FdvZWZAjFIzEXw%2B9GBWzwg7ECT1QL%2BW4aPkGdLcQtdh36fTtmSJkOVkF8tBesxJ1zYaipFJHn%2FG9%2BvKwVTDk0RG1MJEJDqSjay2eTHyw1BYwsF26YSc0AVTW8TtojIeastVvV6n4OolvRxkOBbYCa1XrvveEDQ18TrwNmOrS8u6yq7p2ZmDeI2mHJL8VudkklvmaBGUbQ1%2B832WURzHvffGGe9K2Pgq383Iz6EDUdYRel2VdDUxhAvutwPrKIBBhd1ZSxi2zVcW1NjoQt4HZhZtZ%2Bq3dFPMSFrlVY3Vu%2B0ChyCty9rVgnpeNBLpJD%2FkjdqL%2F6S8UU64x%2BXYV7VerRDUuLYRb0fw20XuNpSOiZAy1HJQBPEuGSVIYKFJNFquCvWDpU2zkfR8rikrcU8rbFISzKl0Fx5ujcUelg1G5gLSTfnDJCrJeO2E0PtQzDj5CCO4ZbXkcVCPgpe0GQaRWmIlTNEZXH1LpY2XBAa%2Bs879PlnQ6lKjLuMvcpwby0ERmNBFqasyJfHDuusyUs6xewf6VKEyEfrJXGeX6cdBVPyi4G0guQoo8GOplrJBBY0YvgdUTt2qbsrXE9HEwlymWBobS0W1xLEL6JAdMNnwpcEGOqUBL43v1ioxnr0hsNe1FoLXKKo4YnSBe6AI81D2jK3HAZvQKZ2yNIwwz1RtjAs8wVKH8ZZoTX7qYOcOuP7PFhVU8HJmU%2FaVufAXUNC2%2BDx%2FFJofK%2F18zPZqMF1XPnEM8D%2FAyOEwjAZmYAzuUQTB2IFbe0F0ORjXMKnvXmzEbp0CWtx6Z3Zx6UEwdHYyTfD1hl%2FYBHXYe6gPxL27vVGeDo7H%2BX1YWdTf&X-Amz-Signature=19f4933687f1a4629821005beb57f648ca0377d36bfe2cbed628180e88773ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
