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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHFWT3V%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBbzQKf1PbfQor3IJLRo13F2gzhi1kzWsQRM55revh0IAiEA8K8mWR7p2DOb0%2BeuPFOoPUfu21qJT5htMVcuoO7ZCDwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOQtEqSwRzkTFJK5pSrcAz9xaYg8eNbTfSkCZjyFuQ%2BuUThHio8JUUhrlVNLsxN1YVgA%2ByDzf2HTls151v7DZd14LPrd9NaC23mXPFSUz6kKpim%2B7N6U8FrqLOrjYM7F3XDsQaZ9A0aI0FgC5fLRIy0GmwV0k9XJC3T0ivND9zO%2FC0jihbP175o8IrdxY%2B3VjwNTcTz2gp8mAqt9rLS0ztfgeHwbLggFwUH%2FPGTs%2FfI%2FEceqKi2qWS5V1cHutc9MOhkCYMDkPeapZe8%2B9hCeCl10PAUxDRbSRqHx32qsKhgW4UUlrxB%2BdZIQn39vVIA2JoaVaslAycw%2Brza8Iwj6ifeuWVimEy%2FEcYLQ9NtjtWlfuqGej6IEzllPvLWYBVXmvMiaAuCefDH7tCKiCPUxhqfcbp4FFzsQmUecwr6sEFp0bLIApgD2byzSav3OIlJxHoI7jkzGhFx33nswKBOummtQ63RvBZdPH8prBJJ365lpowklNzdXogjTXCzR1OlB%2BTK7qkPadwDGfcvHC6WOGxXRRP4rQCammw8LqfA01Nwi6uk1hCJpHqkZdyXb5FdJAJUxKUwaTHGsUg4wbonMfwuLzJan3tF3Z3%2B0ktW5q7BtG5HgfTv7RTO62dvNRSwzJzFmGWr0UFwa%2FUxzMJbGkr0GOqUBfXQFJhS1CP6qTKG3KCPdxFGahNvFxAf5Rmt%2FL2bHG6YhoOokE9NmuovAeqEhTK7l6sbV4ttJ5wPOzYuFGkab3063qXfvu7G%2F9vXJBBQa0vyGOcWjSF5sL00%2FpQuyo7qR2tG0Dj0s6IsijXeOahRkkVV4MONOkAbtiO5biCjTf0ZGk7VTJ7xFpT%2BzmtsfBl45FKTbZ0nX4CDOwMy75AmsqG0ZbJgs&X-Amz-Signature=008a957183194668e7f22c3b3ff534a8fee46708ff8a498340f0d4c7b8f83392&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHFWT3V%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBbzQKf1PbfQor3IJLRo13F2gzhi1kzWsQRM55revh0IAiEA8K8mWR7p2DOb0%2BeuPFOoPUfu21qJT5htMVcuoO7ZCDwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOQtEqSwRzkTFJK5pSrcAz9xaYg8eNbTfSkCZjyFuQ%2BuUThHio8JUUhrlVNLsxN1YVgA%2ByDzf2HTls151v7DZd14LPrd9NaC23mXPFSUz6kKpim%2B7N6U8FrqLOrjYM7F3XDsQaZ9A0aI0FgC5fLRIy0GmwV0k9XJC3T0ivND9zO%2FC0jihbP175o8IrdxY%2B3VjwNTcTz2gp8mAqt9rLS0ztfgeHwbLggFwUH%2FPGTs%2FfI%2FEceqKi2qWS5V1cHutc9MOhkCYMDkPeapZe8%2B9hCeCl10PAUxDRbSRqHx32qsKhgW4UUlrxB%2BdZIQn39vVIA2JoaVaslAycw%2Brza8Iwj6ifeuWVimEy%2FEcYLQ9NtjtWlfuqGej6IEzllPvLWYBVXmvMiaAuCefDH7tCKiCPUxhqfcbp4FFzsQmUecwr6sEFp0bLIApgD2byzSav3OIlJxHoI7jkzGhFx33nswKBOummtQ63RvBZdPH8prBJJ365lpowklNzdXogjTXCzR1OlB%2BTK7qkPadwDGfcvHC6WOGxXRRP4rQCammw8LqfA01Nwi6uk1hCJpHqkZdyXb5FdJAJUxKUwaTHGsUg4wbonMfwuLzJan3tF3Z3%2B0ktW5q7BtG5HgfTv7RTO62dvNRSwzJzFmGWr0UFwa%2FUxzMJbGkr0GOqUBfXQFJhS1CP6qTKG3KCPdxFGahNvFxAf5Rmt%2FL2bHG6YhoOokE9NmuovAeqEhTK7l6sbV4ttJ5wPOzYuFGkab3063qXfvu7G%2F9vXJBBQa0vyGOcWjSF5sL00%2FpQuyo7qR2tG0Dj0s6IsijXeOahRkkVV4MONOkAbtiO5biCjTf0ZGk7VTJ7xFpT%2BzmtsfBl45FKTbZ0nX4CDOwMy75AmsqG0ZbJgs&X-Amz-Signature=af2253b63dbf9fc071996b2f5a13416d9724737c45adda59eeb2c33c787a61b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
