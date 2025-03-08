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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXGWW3G%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAf4uIG8qmhkyX2p0Djlgv6hnlwIMOU4b1JAyQpBD3KcAiEA4w4bYMsWu6QuwMZyADoo2Kidn2d06dXHRdKslBcKGekq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKV078MOcAmzUVDE%2FircAx5CS6Fg3V4pGhNa4ApjWCPM7YF8RrjCLiJw0Lbn9lxs1ZPRHo%2FlHgetXYOlsI5tCB%2FrhAMQiDKiZH%2FzXSYNQCmvXt1mENTsx5%2FL3vpGyrGQf34rF%2FtwfhCN6AJQF8EXVW3Boc5p%2F1tR3leVaHp9OFBBThctZ4GpMrxBcTxLRUBO1UKbMq8aCQ0nL4C7UPaWKcuNHU0BIgd%2Ba%2FjUe%2Fovw7QPiBrIzx9tddOHALEH0LMtYPTxuibOHj4%2BEVmu0fYlOgi9i5Tu8qPPzmpg3wpv5SJ%2BrCWF%2FRMOX718SSRLP8IfZ%2BbT2sRDZEthO43PEVNVMCBkaj3LxdIT8FFrfPfQ%2ByCJ5bPFVQXI4yLYzNMWN4mcdKaKAq29sr00SPsuN%2B6FveWsZqtU5f5dAAT%2Bx9W3K2rKERLDsrGOWf7lQ%2FuxL0O986G4tiM51WB7tSgsPYrPfRygfSxUREaNf7HHRyh%2FJh58s2XS1i81YpQ0fjGj9fZNQQpMjbzV%2FTvgpLF4z2Se3mYFJImBwqdRQh6aaG%2B4g6jHBDxPIl6pldmG4rqiaforO0DH%2Fdnc%2FrctUR9N0xhOaimMSMUeabForx6XlCuiv3LnZAikl0CAqWmOGSjxf1iXgwQp0jcv2wRBqLjRMMj7rr4GOqUBvuqF7qJ23XSiUkOfnM6TvDd%2FVxJBEuGQwERp1Zoo5LgLhndNW0sn%2F4CbOXofkyGjwuV6wt9WhJwFFgine0DV4j%2BqKxw1OEx7hXe2nuSRy5y%2Bi4YfGfGeXQ%2BPfgd66541GuP3j9ZqF%2FT7TKdDP74xjSl6pK3m9qB3r4ugarnS3fKjOD%2F2JVENXU0pJS%2BXyHfpBrK3EkGAr%2FfPZA38jlndv7Mo0qH3&X-Amz-Signature=5ec67f10866aeacd68bbb41ef5411469a8a92bafa56c09bcaaf8b6dd651cd7e8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXGWW3G%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAf4uIG8qmhkyX2p0Djlgv6hnlwIMOU4b1JAyQpBD3KcAiEA4w4bYMsWu6QuwMZyADoo2Kidn2d06dXHRdKslBcKGekq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKV078MOcAmzUVDE%2FircAx5CS6Fg3V4pGhNa4ApjWCPM7YF8RrjCLiJw0Lbn9lxs1ZPRHo%2FlHgetXYOlsI5tCB%2FrhAMQiDKiZH%2FzXSYNQCmvXt1mENTsx5%2FL3vpGyrGQf34rF%2FtwfhCN6AJQF8EXVW3Boc5p%2F1tR3leVaHp9OFBBThctZ4GpMrxBcTxLRUBO1UKbMq8aCQ0nL4C7UPaWKcuNHU0BIgd%2Ba%2FjUe%2Fovw7QPiBrIzx9tddOHALEH0LMtYPTxuibOHj4%2BEVmu0fYlOgi9i5Tu8qPPzmpg3wpv5SJ%2BrCWF%2FRMOX718SSRLP8IfZ%2BbT2sRDZEthO43PEVNVMCBkaj3LxdIT8FFrfPfQ%2ByCJ5bPFVQXI4yLYzNMWN4mcdKaKAq29sr00SPsuN%2B6FveWsZqtU5f5dAAT%2Bx9W3K2rKERLDsrGOWf7lQ%2FuxL0O986G4tiM51WB7tSgsPYrPfRygfSxUREaNf7HHRyh%2FJh58s2XS1i81YpQ0fjGj9fZNQQpMjbzV%2FTvgpLF4z2Se3mYFJImBwqdRQh6aaG%2B4g6jHBDxPIl6pldmG4rqiaforO0DH%2Fdnc%2FrctUR9N0xhOaimMSMUeabForx6XlCuiv3LnZAikl0CAqWmOGSjxf1iXgwQp0jcv2wRBqLjRMMj7rr4GOqUBvuqF7qJ23XSiUkOfnM6TvDd%2FVxJBEuGQwERp1Zoo5LgLhndNW0sn%2F4CbOXofkyGjwuV6wt9WhJwFFgine0DV4j%2BqKxw1OEx7hXe2nuSRy5y%2Bi4YfGfGeXQ%2BPfgd66541GuP3j9ZqF%2FT7TKdDP74xjSl6pK3m9qB3r4ugarnS3fKjOD%2F2JVENXU0pJS%2BXyHfpBrK3EkGAr%2FfPZA38jlndv7Mo0qH3&X-Amz-Signature=933fedb5db2201c0467d4f2a56b97f5d34ecb73ca8b57fa365cadad3f6a12d89&X-Amz-SignedHeaders=host&x-id=GetObject)

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
