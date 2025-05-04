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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXIHTH4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEc8eVSxXXBf%2BKqlDrYzdsL2tVwMxd31JGw0ekwl4qfwIgCoBewLxzi9GzMLwcc67eDt%2Fsq9wOcNJOOEg4QWdYeiEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCGbvWF3vwAnxTRjyrcA8vV2Lk7hEnxgWFUaN4LUJ5V6Gi79GIljmEDMEvax7s3H7ArVSkSdRvDDJGhZ%2B9FaF0KpEUg5rEdPKs0CQhukIQPXWHZ5Bk7A02spW7UfGahWZQfAdIPE341RZay9gsH4IKxL5UelflAi3gfcvLujZhZOLt2WziHhpSI2ZVt9VpQRgXZkpAbBKhULbp0nrHmM0swEKcqz%2BtleyzW0HRssocNhYkZUOEvJhecowVD6YXxz6tnSXTruFg9zNGz9ydmaanwwLh0aisB4uwU%2FeXtmS%2FKaLSBgFJYBVmvGQJm%2FGOf5nBhzoxt%2BfVHa1QLH%2BvkK%2BDA%2B9jUE7qR1GWKapqA6cT5p7kDoMaBPMck9MZB8mXpqArESVQ6BARNtglnSPqX3NDVYQbcFel98xieG0sVmvWgwVkZAzgpFkJh%2BCxX8ZFCfTMbsOGFz2M8B3p8XiCyLWS%2Fx9HRGF89tlwIdGj2pKN4rec57ebcfuGxwcV6tvpQnE5uyeKF0fR%2BdittQcIqeBUmaQgAmJc5L0JCDtLnSM7gYCqbagwf0s272zmfS1WNOvWhHCN3WteIP%2FIhglSh8z9EL2CibZ%2BvzQmFUgnibhet2dchr3XJX9tGY3iozOXouse8BMQRu9i%2BRfeeMKnr28AGOqUBKsf8Q1DKMphmu6e7SZXt4qBU7ODSxCFmCb6i2grsgMckW%2F8lSnH7hwPSZ6%2BLncqik%2BqLHkhOVgo%2FKJ97Hsynw%2B%2BezmAvHTNGYqNibDNuxj2heJE1%2F3%2F%2F9sBpRQp6X1oXCXQ45nW3pmY4qmjqiELzWaaWwIQTxLNpC8%2FqSSlhi%2FzhX7CUn3BTF7HhfnELpYABM9jwSsthiGl8oKwIk5SpUQTrvTDZ&X-Amz-Signature=5cced29e3ea1b4a76ce48d40c6b83d7e8dcc396439ed4ed2192029491dab5b56&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXIHTH4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDEc8eVSxXXBf%2BKqlDrYzdsL2tVwMxd31JGw0ekwl4qfwIgCoBewLxzi9GzMLwcc67eDt%2Fsq9wOcNJOOEg4QWdYeiEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCGbvWF3vwAnxTRjyrcA8vV2Lk7hEnxgWFUaN4LUJ5V6Gi79GIljmEDMEvax7s3H7ArVSkSdRvDDJGhZ%2B9FaF0KpEUg5rEdPKs0CQhukIQPXWHZ5Bk7A02spW7UfGahWZQfAdIPE341RZay9gsH4IKxL5UelflAi3gfcvLujZhZOLt2WziHhpSI2ZVt9VpQRgXZkpAbBKhULbp0nrHmM0swEKcqz%2BtleyzW0HRssocNhYkZUOEvJhecowVD6YXxz6tnSXTruFg9zNGz9ydmaanwwLh0aisB4uwU%2FeXtmS%2FKaLSBgFJYBVmvGQJm%2FGOf5nBhzoxt%2BfVHa1QLH%2BvkK%2BDA%2B9jUE7qR1GWKapqA6cT5p7kDoMaBPMck9MZB8mXpqArESVQ6BARNtglnSPqX3NDVYQbcFel98xieG0sVmvWgwVkZAzgpFkJh%2BCxX8ZFCfTMbsOGFz2M8B3p8XiCyLWS%2Fx9HRGF89tlwIdGj2pKN4rec57ebcfuGxwcV6tvpQnE5uyeKF0fR%2BdittQcIqeBUmaQgAmJc5L0JCDtLnSM7gYCqbagwf0s272zmfS1WNOvWhHCN3WteIP%2FIhglSh8z9EL2CibZ%2BvzQmFUgnibhet2dchr3XJX9tGY3iozOXouse8BMQRu9i%2BRfeeMKnr28AGOqUBKsf8Q1DKMphmu6e7SZXt4qBU7ODSxCFmCb6i2grsgMckW%2F8lSnH7hwPSZ6%2BLncqik%2BqLHkhOVgo%2FKJ97Hsynw%2B%2BezmAvHTNGYqNibDNuxj2heJE1%2F3%2F%2F9sBpRQp6X1oXCXQ45nW3pmY4qmjqiELzWaaWwIQTxLNpC8%2FqSSlhi%2FzhX7CUn3BTF7HhfnELpYABM9jwSsthiGl8oKwIk5SpUQTrvTDZ&X-Amz-Signature=cb7721618b72089a82c410fef0b2989f23d3048cc5d7c3c89b7fd20f2cb0a556&X-Amz-SignedHeaders=host&x-id=GetObject)

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
