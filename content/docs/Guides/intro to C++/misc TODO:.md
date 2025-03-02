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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BP5IHL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOJdvX74ac%2B4b1DuB%2FM1AgLZ%2Bf5XIA6obZXjFy2I2TEwIhAJV67s6C1v2d%2FFsZnXedbmz8qh4AACPygMqDZQ4iJB%2B%2BKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKiJKRfAkSUMhs59Mq3AOHnEjhCKrKh1OysC1KmhK1J02KUneXs4BFV39V4iGUgOABY9ncPR%2F6vKuoRe6MMQ7eBGXhkfGxCM%2FU%2FFis5L3t3foYRmWGBzSfJYdcuCNckcy%2FpaP3G40rD%2BJsw%2Bd0ffdY5BmouRLwq0bgBrELAjxkyxYBtYT7uIV16ijbZ%2BSqJMdtYKTCcBWS5d1JUNrWgA6zssqcJi4edJmGmcXcd4YZQK1gzbkmPWnOVLkoCs5L4iXR15bFqVoaZ3Mcskj56BTPldkufU43oOBjQlZ0MbSogsWCWx3KIz8m99M7zznRrcH3KlCoNxoAYepRS6piUIJzXD%2B7f1HVXTQbUtLEbLs8EGPDLvdD4QpgchnAaF7YNZz3SZ56a%2Bl1RIFKv67V%2FuKigwKjhrs7CRuPZEHQijn2gwfIQ5I4V6fzJh7mTKosrdNXiRT4aGBFcwKFW%2BRUyHAMJ6KW7gjr1VD57LIolnbeZ77UEwq5wsEPK4e8xxlVzxAkC11MxNsWGNRvG9A8D8UGfbjzsueKHDXeahpJHBd5gpuEJdlzVM53ifciUjuHlh4av8VI4VlYIQ%2Fh%2B0rfPYrWQGrYtAaVChT2r6ikk3sx9bM0JIDm7LiIg0Sba6Bcs%2FSVCl75YQlHm7G2tDCdlpK%2BBjqkAZUKRAIns64u%2FNq7%2BpOENUTVb3k4scOpLZT1Gpv0Zrj%2FfTLHNi3W9YhJQPXKF3j0hAX8OXFa7%2BKZf5WNnQoC8jNgG8tQPdwU90yYZgGqjmxAycPNr5txNXTKcvO4%2FOyQaSQudeaQP3cIBtFhze%2FAeVQduXUAsPdckYceDOaZJEOkdsH7oEgxh%2FtdDkgEj5MDqa10drHXDY6Gr5oFys4yCNK1UVoF&X-Amz-Signature=48a2ba492bc6f4bee54bba26eb17900256a5d237d4b81c9cab065adb5f8f21a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BP5IHL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOJdvX74ac%2B4b1DuB%2FM1AgLZ%2Bf5XIA6obZXjFy2I2TEwIhAJV67s6C1v2d%2FFsZnXedbmz8qh4AACPygMqDZQ4iJB%2B%2BKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKiJKRfAkSUMhs59Mq3AOHnEjhCKrKh1OysC1KmhK1J02KUneXs4BFV39V4iGUgOABY9ncPR%2F6vKuoRe6MMQ7eBGXhkfGxCM%2FU%2FFis5L3t3foYRmWGBzSfJYdcuCNckcy%2FpaP3G40rD%2BJsw%2Bd0ffdY5BmouRLwq0bgBrELAjxkyxYBtYT7uIV16ijbZ%2BSqJMdtYKTCcBWS5d1JUNrWgA6zssqcJi4edJmGmcXcd4YZQK1gzbkmPWnOVLkoCs5L4iXR15bFqVoaZ3Mcskj56BTPldkufU43oOBjQlZ0MbSogsWCWx3KIz8m99M7zznRrcH3KlCoNxoAYepRS6piUIJzXD%2B7f1HVXTQbUtLEbLs8EGPDLvdD4QpgchnAaF7YNZz3SZ56a%2Bl1RIFKv67V%2FuKigwKjhrs7CRuPZEHQijn2gwfIQ5I4V6fzJh7mTKosrdNXiRT4aGBFcwKFW%2BRUyHAMJ6KW7gjr1VD57LIolnbeZ77UEwq5wsEPK4e8xxlVzxAkC11MxNsWGNRvG9A8D8UGfbjzsueKHDXeahpJHBd5gpuEJdlzVM53ifciUjuHlh4av8VI4VlYIQ%2Fh%2B0rfPYrWQGrYtAaVChT2r6ikk3sx9bM0JIDm7LiIg0Sba6Bcs%2FSVCl75YQlHm7G2tDCdlpK%2BBjqkAZUKRAIns64u%2FNq7%2BpOENUTVb3k4scOpLZT1Gpv0Zrj%2FfTLHNi3W9YhJQPXKF3j0hAX8OXFa7%2BKZf5WNnQoC8jNgG8tQPdwU90yYZgGqjmxAycPNr5txNXTKcvO4%2FOyQaSQudeaQP3cIBtFhze%2FAeVQduXUAsPdckYceDOaZJEOkdsH7oEgxh%2FtdDkgEj5MDqa10drHXDY6Gr5oFys4yCNK1UVoF&X-Amz-Signature=dcb4a25d00284a6a67bafb25c6f3eb849bbd4aa5043bfeb5d3d216f68e5b716f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
