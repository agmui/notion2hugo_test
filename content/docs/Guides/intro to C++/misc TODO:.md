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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXNEBRQI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC1ZeLwn7%2B5BlBFIfX%2Bw6c5KDu%2Bg2pidtEGwdquC7Gk0wIhAKDevkaB0tqFzoyvfF1nHcjI6bWs1MlnozQuO7NqJfEMKv8DCD0QABoMNjM3NDIzMTgzODA1IgySMErOZsVmOPuyReYq3AOgg6ufylzM7UBzBlrctwKWeQrcqRD4%2BTF4AhxzXJoEjELiPH1KtSA5O5P8WmsQlxqtwh3Z%2F%2BK2C8jLIzVqdVGaDglW%2FNWbiMMYc%2B6Yk22IpvnBZ1j55%2F2Y%2F7zk1UNbG1f0L7NBQqpoFQuKgh53RqQwEwrtmvVKHCn7nuoMsGMUDfK9j8crfROGdLzIjMbpcbrI%2Fq2X0gg8UBvfnsmlxBRkFR0e0nvwIWoiJ5aXuY%2FkrOdmQ0Da8BnO5L2bck1doT5%2BDdTR42DuB97o6CcC9FC8V7Yc4TQfAeilp38sYf9aal0nLS7buFXkmPKAGn%2BKGHtuqB12WoL2mKc3oB3uzXMnAtbO1t6XbYKYFSOpFk0QANejmofsdRxGhDyx7Ln5ukwZHQKjS9ZytI8Q9PKgTko07v8F7t5nID5zfcbKS2De%2BU8MW%2B92R2KpxTOnvaUAmVZDSPtevFhuCelB%2BDALE3J8rWGXY77CHo4tCk5pPcC14mhKM3kppNZwgtY1CrVFmsFNGUNT23MoxCVJozLTPJ43WRULLTHl668ZDGg55Yg2Eo4N1YGH%2BX5IKHZVTq6CTbUh0xtYm%2BOaEWgjqrZzOvtzEa%2FDc4U635ym7l98%2BrrT1HKJZHW9u%2FDkwaFu5DCf%2F7jCBjqkAYLHbti3dheNbHqEfqGwED6cqAZ6aFRc7%2Fq5R9Uieo9qIHS76hhVLrNXi3Je0NwP50Dk3thBiXcGVIw71S2cutgNZ8WkIItUFYvxK5oOMYPkDc6%2FYHKk%2FyLlPfNa8Mq%2Bh3ygwDY1JzIsdYhGVwgQCH21n2lagdUux0XWsW57TuDTWMqmEcaxmKzlB7zu1%2BsfGiubhe8spwvA7yPcAOZKzn3ytrur&X-Amz-Signature=4600ce3ff72f740597a25232352cbd5c5dedda525a6575bc0b773d0056e3265d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXNEBRQI%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC1ZeLwn7%2B5BlBFIfX%2Bw6c5KDu%2Bg2pidtEGwdquC7Gk0wIhAKDevkaB0tqFzoyvfF1nHcjI6bWs1MlnozQuO7NqJfEMKv8DCD0QABoMNjM3NDIzMTgzODA1IgySMErOZsVmOPuyReYq3AOgg6ufylzM7UBzBlrctwKWeQrcqRD4%2BTF4AhxzXJoEjELiPH1KtSA5O5P8WmsQlxqtwh3Z%2F%2BK2C8jLIzVqdVGaDglW%2FNWbiMMYc%2B6Yk22IpvnBZ1j55%2F2Y%2F7zk1UNbG1f0L7NBQqpoFQuKgh53RqQwEwrtmvVKHCn7nuoMsGMUDfK9j8crfROGdLzIjMbpcbrI%2Fq2X0gg8UBvfnsmlxBRkFR0e0nvwIWoiJ5aXuY%2FkrOdmQ0Da8BnO5L2bck1doT5%2BDdTR42DuB97o6CcC9FC8V7Yc4TQfAeilp38sYf9aal0nLS7buFXkmPKAGn%2BKGHtuqB12WoL2mKc3oB3uzXMnAtbO1t6XbYKYFSOpFk0QANejmofsdRxGhDyx7Ln5ukwZHQKjS9ZytI8Q9PKgTko07v8F7t5nID5zfcbKS2De%2BU8MW%2B92R2KpxTOnvaUAmVZDSPtevFhuCelB%2BDALE3J8rWGXY77CHo4tCk5pPcC14mhKM3kppNZwgtY1CrVFmsFNGUNT23MoxCVJozLTPJ43WRULLTHl668ZDGg55Yg2Eo4N1YGH%2BX5IKHZVTq6CTbUh0xtYm%2BOaEWgjqrZzOvtzEa%2FDc4U635ym7l98%2BrrT1HKJZHW9u%2FDkwaFu5DCf%2F7jCBjqkAYLHbti3dheNbHqEfqGwED6cqAZ6aFRc7%2Fq5R9Uieo9qIHS76hhVLrNXi3Je0NwP50Dk3thBiXcGVIw71S2cutgNZ8WkIItUFYvxK5oOMYPkDc6%2FYHKk%2FyLlPfNa8Mq%2Bh3ygwDY1JzIsdYhGVwgQCH21n2lagdUux0XWsW57TuDTWMqmEcaxmKzlB7zu1%2BsfGiubhe8spwvA7yPcAOZKzn3ytrur&X-Amz-Signature=fef86c39652a4af449b293bf61b3fcd2bab29bb1d2b7215814bc7823c9a49d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
