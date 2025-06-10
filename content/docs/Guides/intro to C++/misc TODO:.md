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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZDNFKG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIA%2BK%2FxpVPKdVRkAwa5ZvA8%2FM2YkbQ6pSa7ZaK9O5aiQIgKYnzjxqQ8bddTe1dH%2Bx2TVK1UDFnFkXq0y9Yz3HkaxIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcdMPweaduJqw5cJyrcA9VANxmrVGDY5H%2Ftiasgzp1OXZsYQdpuA3aZfMzTHD%2BWFrRJHzyUpRFYz1g4WzPMmidZnzu151ERpdMPiF6aDLplRURMbNgmszyPsTcxLRpaeqo197cdmeo2lvCQMfORHv%2FkX3t7nRkZYR85OttclGomWYTYXPtee30cO32K2EUDbDPJyGh8n2OhoiK35iDBWFl64Y%2FQViyccjETV94Jq%2BKWmaI10%2BxuKvcdrB%2FsT2gO1XSI9qHzuJ0WHj9HIKx5EgvMQzl3118xaqJe%2BZRJl%2FOhOOqLYTDw0SWakOYyWIlyNtB%2FPjJNj6uqf4oKZpJzSn854sSOpGqt87BH7ZwWoaotDVnKlcNRmMdhfGpIlJ5HJsppZVidJzCSPdfIC0uDtE2S02Z5yEeEXppWiWoxiLrfcPFOwQmoD6p6Kj%2BwVLq9Rn9PZjWjs8UjbCuQGj7IQuiLcCK84NplU2E0F9d5nrB2prTO%2FSmAgp1qw9J%2FDi82sUekT2ipRzQXtd16bQXsG677oJNNxjIrmAXf%2FOY%2FpqBYMslAw7TmI42cWpRmqqBQCtU6sPuwI8xW1%2FTLq6ZIJ7W7zYJP5Cu%2F0DNpmZYPZ2GQjXyNx%2BI1Zt3B4VLFDLupNbxMKjIy7OtReoSEMIKIn8IGOqUBvYz8fKhQDw5OAUpXnL%2BJn4Jrt1ylLRk%2F%2FFw5OdNs%2FTbrVAgPBxNB3wFWvdkWHtZbwuxNzyD2jHu2GeTmcHX5dRx8qRZI2Rs%2Fd68lgUn8HZV6uDWgf8%2B5omF0a2mvVsSytsedCkMUWuHnh%2FXMdWZLQeiNSDB9NbIrqITWQaa7jfS2S658VrcjPXBOPI%2Bnyol%2BXCFcZme2LEVJSg8om64zLJrFNghv&X-Amz-Signature=88ff4f636684a44e409c0a00b2c8f4ce81e601d22533f769620bc61c54c26109&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZDNFKG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIA%2BK%2FxpVPKdVRkAwa5ZvA8%2FM2YkbQ6pSa7ZaK9O5aiQIgKYnzjxqQ8bddTe1dH%2Bx2TVK1UDFnFkXq0y9Yz3HkaxIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcdMPweaduJqw5cJyrcA9VANxmrVGDY5H%2Ftiasgzp1OXZsYQdpuA3aZfMzTHD%2BWFrRJHzyUpRFYz1g4WzPMmidZnzu151ERpdMPiF6aDLplRURMbNgmszyPsTcxLRpaeqo197cdmeo2lvCQMfORHv%2FkX3t7nRkZYR85OttclGomWYTYXPtee30cO32K2EUDbDPJyGh8n2OhoiK35iDBWFl64Y%2FQViyccjETV94Jq%2BKWmaI10%2BxuKvcdrB%2FsT2gO1XSI9qHzuJ0WHj9HIKx5EgvMQzl3118xaqJe%2BZRJl%2FOhOOqLYTDw0SWakOYyWIlyNtB%2FPjJNj6uqf4oKZpJzSn854sSOpGqt87BH7ZwWoaotDVnKlcNRmMdhfGpIlJ5HJsppZVidJzCSPdfIC0uDtE2S02Z5yEeEXppWiWoxiLrfcPFOwQmoD6p6Kj%2BwVLq9Rn9PZjWjs8UjbCuQGj7IQuiLcCK84NplU2E0F9d5nrB2prTO%2FSmAgp1qw9J%2FDi82sUekT2ipRzQXtd16bQXsG677oJNNxjIrmAXf%2FOY%2FpqBYMslAw7TmI42cWpRmqqBQCtU6sPuwI8xW1%2FTLq6ZIJ7W7zYJP5Cu%2F0DNpmZYPZ2GQjXyNx%2BI1Zt3B4VLFDLupNbxMKjIy7OtReoSEMIKIn8IGOqUBvYz8fKhQDw5OAUpXnL%2BJn4Jrt1ylLRk%2F%2FFw5OdNs%2FTbrVAgPBxNB3wFWvdkWHtZbwuxNzyD2jHu2GeTmcHX5dRx8qRZI2Rs%2Fd68lgUn8HZV6uDWgf8%2B5omF0a2mvVsSytsedCkMUWuHnh%2FXMdWZLQeiNSDB9NbIrqITWQaa7jfS2S658VrcjPXBOPI%2Bnyol%2BXCFcZme2LEVJSg8om64zLJrFNghv&X-Amz-Signature=5b1852364ac900d7c0c32ebf2b2453bea7f162ab612c1dbc3d89ca64417afec2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
