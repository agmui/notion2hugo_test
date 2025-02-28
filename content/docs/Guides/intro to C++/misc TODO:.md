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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622XTHBAH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE7eTIK1H%2BgHD9152hKvHA7JuJZvbrSVFRcLT1wl85cYAiAmLnjVY2%2FoYpGdvk9r45K5%2BfncmD84WTGfDBQTDheXfiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7ONXdW91jiNH8BRzKtwDDySPlH25ZzUkX%2BmCq2aZK1OVh10apTchieQGbc1FOMovZIE7ka7aqWR5Am34SamCEMAzogXK%2BXd%2FWuMuneVpumrwxuO8Vc0pASMshgdBS1%2Fq7tXQULFHsb%2FN9%2BueGJwZQDJhuLVR3%2F62h2ytgwjU7RAGheDW0hQTB%2FqkXUdsHXRMy6gtrAomZ5cfMkLMbKhhKYCbVUa7t5hNI70kmBfPZ%2F%2F7nVHVkQhlkbya0CzQf6DkQD8bWb12kV9D0RsfBnwJpZnUgNM9g0cVpG1oVeiczVz70AKeRXIDVLLyX6%2FRnhJVZ%2BSrlrtCDqADu1%2Fbarn9vNk2igHsXH0VGII4rkOjop1UynvXIUZF2CcF0RsxuigqhGUPfoI8OLLhEd4rLFGWIRfmnscPPWCVrHiHXN7H2i%2FeDsKY2ZiongKnyQqeKWfimYoW97ms50SvcPSx12yxtHDfa721nC3j7gvM65AF6wVw%2Bzg2BRrGuqCd5d1EHVTxzs03QM0SsLhEFaSirt%2FRst1If3aky8yqSlXXnrFRrZMYuhE90qinA6yDsjQdZHiGGZSVSf%2FXroyky%2FOaQJn0YMQAUvJrBH5pi%2BHUr4Gy%2F38lCZ99HcdbTjeWPjHO09n6jumGmMXEauSJkeEwt%2FaFvgY6pgFosU3raXjwLjJpgCPxsqixTgP6CwzzphNyi%2B6x42fM%2FSB4pr6Uh0knHnwmcPLxC5qKZpcZjHfDxtmdnayPK83YDfDZyq06oSqO5b7TZ2Aqo8OHDjMoV1E3Z0O0KN50JOFFp86cJrOfm%2BcRD2Vmim2m4YA6EGd%2B2Im3efdir6hzzjrgNHzfBE8hWDjX6bJPfoaG8qvLAZ2WMndbepXLjlrXZQVwLbGa&X-Amz-Signature=65cd0e8ac2ef0be165f6333bb9b78c1263835465bb7989defb1cfd89975ae952&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622XTHBAH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIE7eTIK1H%2BgHD9152hKvHA7JuJZvbrSVFRcLT1wl85cYAiAmLnjVY2%2FoYpGdvk9r45K5%2BfncmD84WTGfDBQTDheXfiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7ONXdW91jiNH8BRzKtwDDySPlH25ZzUkX%2BmCq2aZK1OVh10apTchieQGbc1FOMovZIE7ka7aqWR5Am34SamCEMAzogXK%2BXd%2FWuMuneVpumrwxuO8Vc0pASMshgdBS1%2Fq7tXQULFHsb%2FN9%2BueGJwZQDJhuLVR3%2F62h2ytgwjU7RAGheDW0hQTB%2FqkXUdsHXRMy6gtrAomZ5cfMkLMbKhhKYCbVUa7t5hNI70kmBfPZ%2F%2F7nVHVkQhlkbya0CzQf6DkQD8bWb12kV9D0RsfBnwJpZnUgNM9g0cVpG1oVeiczVz70AKeRXIDVLLyX6%2FRnhJVZ%2BSrlrtCDqADu1%2Fbarn9vNk2igHsXH0VGII4rkOjop1UynvXIUZF2CcF0RsxuigqhGUPfoI8OLLhEd4rLFGWIRfmnscPPWCVrHiHXN7H2i%2FeDsKY2ZiongKnyQqeKWfimYoW97ms50SvcPSx12yxtHDfa721nC3j7gvM65AF6wVw%2Bzg2BRrGuqCd5d1EHVTxzs03QM0SsLhEFaSirt%2FRst1If3aky8yqSlXXnrFRrZMYuhE90qinA6yDsjQdZHiGGZSVSf%2FXroyky%2FOaQJn0YMQAUvJrBH5pi%2BHUr4Gy%2F38lCZ99HcdbTjeWPjHO09n6jumGmMXEauSJkeEwt%2FaFvgY6pgFosU3raXjwLjJpgCPxsqixTgP6CwzzphNyi%2B6x42fM%2FSB4pr6Uh0knHnwmcPLxC5qKZpcZjHfDxtmdnayPK83YDfDZyq06oSqO5b7TZ2Aqo8OHDjMoV1E3Z0O0KN50JOFFp86cJrOfm%2BcRD2Vmim2m4YA6EGd%2B2Im3efdir6hzzjrgNHzfBE8hWDjX6bJPfoaG8qvLAZ2WMndbepXLjlrXZQVwLbGa&X-Amz-Signature=62867e941426435207501c468888ffc64c8e4986f3e79c9cd6e898b2db5327f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
