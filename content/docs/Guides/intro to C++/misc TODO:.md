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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXQYOWE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDzCltNH1VRzrJtprMa6RzaZDW89cVoZieadCs6hd6o8AiEAmtxwhnQrQcNIQ5wFzO6icH2s3T6ylDU4l6eLEFuqO%2B8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1rchTJ3Cz1si6E9SrcA3GlG97TgzCiAsLSuZlDpPNvRezQYHnlsnQIAmedRH8tpnyR8UbiuE78jegVqNd8jdwqb2kbnx%2BETLZ0yJNuXq0VuhLtYo%2F56BTkyZzNeNX6RPbXQai69ytgShU74%2BmUAbo8LskwiPZcdnoznajCMuiNIcmOQJ5oiYIyCBqcnhnhNKNWE3DHK%2B6U2P93x%2BrM1MDpK1k%2FFP9UA3Pr0DRG4%2BcAoq4dIBG0XsJEcMgCa74sy2EcBLsuIjLPFZYrjsMvbB7omzwpMQS9fWPOoZcbmSFAMxWxmanxFRkdzaL6ySVlfoNkgoGRzXO1GZSLODxEgob8R%2F66QjyXBqg17TbROX%2Fe6tNuJ%2BLwXzIEIDnwKb0JgIGJIwKMo3AATUhRtiosrzAmvdcwigkSXQmUtAregjQYU7yJKv4Ecd6zVFvoH2nqqCsuFsT6u3OflCbOxs2xTvQH%2BOqJmcoFplew57C%2BsLT5SY3J22v8ScjI3ntp1JfczKsbc8Ra3%2BXIHmbrDQ78Mz5P7LrKaCZ7p%2FOuJHmjIdG8d2%2FiO88t2RnJmLPltFnSjdSIsI3wIg8isicnYmkqDbRW2EbWJBnY54hkz6r0EdFm2kY99UaipiHw%2BVCNrktIdBg5T1MShkeTGtIHMI2y4L8GOqUBzcC%2F0t%2FpxkXWNfp9bmjlvx0gokenzHx4tFhcgozqok5iF7C%2FDz2bR2QSuiJQ0xGHdeeX2Ofwa7vTcw3WkH82OlzKj0WnoO1Eg7ROTYXb48l7cuAknKH5uwy5mjO%2Bjiqmv5ncxU%2BHjUbha9fpC99EhG6jNGoMlbYiVhWtkBGtA11Z7Id8ynFOiQJU2%2BS%2Fjj%2F4DHNG%2FuDxMupGKVl2sA7FTC%2F%2BgMq9&X-Amz-Signature=c2bd8bff57b0cdbdf2bdb5c37fa4cb21c594e6208abdb30afa62e5a78625163d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXQYOWE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDzCltNH1VRzrJtprMa6RzaZDW89cVoZieadCs6hd6o8AiEAmtxwhnQrQcNIQ5wFzO6icH2s3T6ylDU4l6eLEFuqO%2B8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1rchTJ3Cz1si6E9SrcA3GlG97TgzCiAsLSuZlDpPNvRezQYHnlsnQIAmedRH8tpnyR8UbiuE78jegVqNd8jdwqb2kbnx%2BETLZ0yJNuXq0VuhLtYo%2F56BTkyZzNeNX6RPbXQai69ytgShU74%2BmUAbo8LskwiPZcdnoznajCMuiNIcmOQJ5oiYIyCBqcnhnhNKNWE3DHK%2B6U2P93x%2BrM1MDpK1k%2FFP9UA3Pr0DRG4%2BcAoq4dIBG0XsJEcMgCa74sy2EcBLsuIjLPFZYrjsMvbB7omzwpMQS9fWPOoZcbmSFAMxWxmanxFRkdzaL6ySVlfoNkgoGRzXO1GZSLODxEgob8R%2F66QjyXBqg17TbROX%2Fe6tNuJ%2BLwXzIEIDnwKb0JgIGJIwKMo3AATUhRtiosrzAmvdcwigkSXQmUtAregjQYU7yJKv4Ecd6zVFvoH2nqqCsuFsT6u3OflCbOxs2xTvQH%2BOqJmcoFplew57C%2BsLT5SY3J22v8ScjI3ntp1JfczKsbc8Ra3%2BXIHmbrDQ78Mz5P7LrKaCZ7p%2FOuJHmjIdG8d2%2FiO88t2RnJmLPltFnSjdSIsI3wIg8isicnYmkqDbRW2EbWJBnY54hkz6r0EdFm2kY99UaipiHw%2BVCNrktIdBg5T1MShkeTGtIHMI2y4L8GOqUBzcC%2F0t%2FpxkXWNfp9bmjlvx0gokenzHx4tFhcgozqok5iF7C%2FDz2bR2QSuiJQ0xGHdeeX2Ofwa7vTcw3WkH82OlzKj0WnoO1Eg7ROTYXb48l7cuAknKH5uwy5mjO%2Bjiqmv5ncxU%2BHjUbha9fpC99EhG6jNGoMlbYiVhWtkBGtA11Z7Id8ynFOiQJU2%2BS%2Fjj%2F4DHNG%2FuDxMupGKVl2sA7FTC%2F%2BgMq9&X-Amz-Signature=c1b5ff013893f3e2c4975b357b82fdf949b6b1d2d1c8ba956c2a9a57fc2e486e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
