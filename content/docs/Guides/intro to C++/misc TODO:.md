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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDX3UQIA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCf%2BewvbjED2qRZZqhID6NwS7Fiu8t4%2B4sS6wUaJ1tMgIgeOG5I8xWTnfRUNEUuphNjTNBOBa0851ARTu34eWwMqoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCTCTRDZwO1R3ly16CrcA8WW6uqPfHMJmHKmgAjk9p97%2FsWUw%2FgApxJB53Cr59V6SnvNi7IbShOVPMUa0HI%2B8ulYaZAGI%2BSkmK943rovf7WBHgebwwesxKCPbM05xyuF6Bn1dANcoUSjHitgAiK9F46qTYbSUPGEgpbzLYvwFMSQuf%2B4Rp7u9e3tZt3gs7prtOALmIvtPoHF362Ns5EIb8Kq%2BzkSbGSyTJQ5NoyLnHX0w2Zns5y1EcHoVx5V7p1Flv57%2BnHGgzl%2BCybXRVV6XQ2P5w%2BP5Hzb%2BY70lL7k39%2BuH5cnT%2BdUhSRlrNkjdx%2Fu%2F4egDhdXxCZCKOPyJbSOnwPryACsZVqaerKK%2BjIrs%2BYyD0cjfXu08xiC%2FOqv3qn%2B7RrjTF6b7BO97w557gBMlNWkSGhgpOcl5ylvPat21y0fHQd0LNWGzCnY83wXOQae6oq9zUFjeDbBXqrEkWNR01NzZdIrCR5osgH73ct5LnBEeZXwnsCUm9jV2kchvw5wvwzDwjMZtif0CDuUCCCVbcaG3z2DMfo%2B%2FOPqqMSOJazKNfd7JQwhELLbdFYKvXMea958ZuE9B3vQtG%2Bm6eI9MPGm%2BUTfI%2FiaEgl2zHX3y5gsJIWpXPP4syDBIdYiF1jXJydYHhghuLPH9UD6MMC3v8AGOqUBaaKgyKWH8Yz0aRELmx9INR%2F8Sab5VgfxqUJw3r%2Fsk38Z2loj2SZGPxsyIp9hp06YaTdyO5Z5xbPegKTF%2FLa2Bj8zCRn30ytXdesdwFj3YNNkWuRZjbYaClzazRKrEwpQoMzru%2FUDTNvgrfJ5K9cavCQInDsYU9jIGonG0Pou9MGt%2BRetHqGX2sOr6l%2BOGvWtHPE3ihTSs1jbnXxzXHRTrQD%2B4EZX&X-Amz-Signature=de46a9df2976fae7af2919ecc5f6562f86096ef5a0f4461f214f6eb43b69ff9c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDX3UQIA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCf%2BewvbjED2qRZZqhID6NwS7Fiu8t4%2B4sS6wUaJ1tMgIgeOG5I8xWTnfRUNEUuphNjTNBOBa0851ARTu34eWwMqoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCTCTRDZwO1R3ly16CrcA8WW6uqPfHMJmHKmgAjk9p97%2FsWUw%2FgApxJB53Cr59V6SnvNi7IbShOVPMUa0HI%2B8ulYaZAGI%2BSkmK943rovf7WBHgebwwesxKCPbM05xyuF6Bn1dANcoUSjHitgAiK9F46qTYbSUPGEgpbzLYvwFMSQuf%2B4Rp7u9e3tZt3gs7prtOALmIvtPoHF362Ns5EIb8Kq%2BzkSbGSyTJQ5NoyLnHX0w2Zns5y1EcHoVx5V7p1Flv57%2BnHGgzl%2BCybXRVV6XQ2P5w%2BP5Hzb%2BY70lL7k39%2BuH5cnT%2BdUhSRlrNkjdx%2Fu%2F4egDhdXxCZCKOPyJbSOnwPryACsZVqaerKK%2BjIrs%2BYyD0cjfXu08xiC%2FOqv3qn%2B7RrjTF6b7BO97w557gBMlNWkSGhgpOcl5ylvPat21y0fHQd0LNWGzCnY83wXOQae6oq9zUFjeDbBXqrEkWNR01NzZdIrCR5osgH73ct5LnBEeZXwnsCUm9jV2kchvw5wvwzDwjMZtif0CDuUCCCVbcaG3z2DMfo%2B%2FOPqqMSOJazKNfd7JQwhELLbdFYKvXMea958ZuE9B3vQtG%2Bm6eI9MPGm%2BUTfI%2FiaEgl2zHX3y5gsJIWpXPP4syDBIdYiF1jXJydYHhghuLPH9UD6MMC3v8AGOqUBaaKgyKWH8Yz0aRELmx9INR%2F8Sab5VgfxqUJw3r%2Fsk38Z2loj2SZGPxsyIp9hp06YaTdyO5Z5xbPegKTF%2FLa2Bj8zCRn30ytXdesdwFj3YNNkWuRZjbYaClzazRKrEwpQoMzru%2FUDTNvgrfJ5K9cavCQInDsYU9jIGonG0Pou9MGt%2BRetHqGX2sOr6l%2BOGvWtHPE3ihTSs1jbnXxzXHRTrQD%2B4EZX&X-Amz-Signature=6d6f03ec6f172fc09089a36f3e4eb8c964085ec197fff6d4aca67fcfdf086bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
