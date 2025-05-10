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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDLZHJ7H%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDCgZLu2G6L0BUCJoKjzTKZ8J%2BFDunOArWFGUyDVUIH%2BwIgLrkbKQFgo1BHCDPpg5BW7wgJMJGBHH%2Bx3hbe5fSFEokqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATgEYyVTka9WSByFSrcA2LTZ9%2B0FTwSqj1Vt%2Fe%2BKHdr4EdrqxytYlmNxZMaO0mBP4hD1xEvX4Cojeivuc6SI9Ik1NmAzFQfIsCsgfnblXvbwiZRQYOL1Ptcpwh0oZJNKLmAVjQ6viB4bmQTrlN4if3dasNTqOwMh32nwhqB6iCNuuyrQ3oUWtbyWpzPZIOe2m3lD%2FJTze0jD42oqpjtlURsH%2BJ%2BGRqHfVyhC2Uiv%2BXpj%2F2l7EnIK086T8%2F0zoJWslE7ul2KgvbJjwiIt0gn5hYFvBLVVlej8JjAGMhDl56XtryazclkLVCN8%2FYBcfc4Wp2Z%2Birt72qH0esoNYNnZKW0CU%2F4wpk2BCaFy%2F9fBpwUMJGUCDtpBch6Pag2AWu2yOvpD7R7dWQaEhnK9qHDsGnlUS9jQfh71fk70neIAv%2BD5Y8oyozKwB0Np7NkLqdsIY39TCMv87B5UU7iA36oHDs7utKG2i7sqeSvSZMxp1Fd4pYP19twQJMCoyue9zMT4MDSoKu%2B%2FBuLb%2F82PL1A5ymHKVQjrw9xW1Pppgo5bvsrRh51cNarikxNmS%2F5Gaz1UQpw28pD0RJiOHPDqAt3d37QmYcPJG2VoJb42buRCpsq1hoRLyRUl7Bl6C2sjqMT%2Bym1wpBXimGZTZQmMOOg%2FsAGOqUBJZorRxkOLZxz55rdhJ1PGAikyX4G%2BIyYgmb7DWABVmX6rjRLiXwmOsxNeg7EWPeXZ%2B%2BaUkxgSml546bsJSfdfXsAJ2Pl8xRcG5wgPtIjSI3ns3EwEo0mnbvN3o1K0kxFt%2F8Ri3tpevZXzRjyrwkuqMQURGv%2FRJLKRg6a3ipePcsomVUpxVm9AsIr9osfWgD53fXALt3QdCQ6LdsvXbTtFy8fjY%2Bc&X-Amz-Signature=bd627943559d77c615287501148e366046b8380d333d2645e71b58945a9a4991&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDLZHJ7H%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDCgZLu2G6L0BUCJoKjzTKZ8J%2BFDunOArWFGUyDVUIH%2BwIgLrkbKQFgo1BHCDPpg5BW7wgJMJGBHH%2Bx3hbe5fSFEokqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATgEYyVTka9WSByFSrcA2LTZ9%2B0FTwSqj1Vt%2Fe%2BKHdr4EdrqxytYlmNxZMaO0mBP4hD1xEvX4Cojeivuc6SI9Ik1NmAzFQfIsCsgfnblXvbwiZRQYOL1Ptcpwh0oZJNKLmAVjQ6viB4bmQTrlN4if3dasNTqOwMh32nwhqB6iCNuuyrQ3oUWtbyWpzPZIOe2m3lD%2FJTze0jD42oqpjtlURsH%2BJ%2BGRqHfVyhC2Uiv%2BXpj%2F2l7EnIK086T8%2F0zoJWslE7ul2KgvbJjwiIt0gn5hYFvBLVVlej8JjAGMhDl56XtryazclkLVCN8%2FYBcfc4Wp2Z%2Birt72qH0esoNYNnZKW0CU%2F4wpk2BCaFy%2F9fBpwUMJGUCDtpBch6Pag2AWu2yOvpD7R7dWQaEhnK9qHDsGnlUS9jQfh71fk70neIAv%2BD5Y8oyozKwB0Np7NkLqdsIY39TCMv87B5UU7iA36oHDs7utKG2i7sqeSvSZMxp1Fd4pYP19twQJMCoyue9zMT4MDSoKu%2B%2FBuLb%2F82PL1A5ymHKVQjrw9xW1Pppgo5bvsrRh51cNarikxNmS%2F5Gaz1UQpw28pD0RJiOHPDqAt3d37QmYcPJG2VoJb42buRCpsq1hoRLyRUl7Bl6C2sjqMT%2Bym1wpBXimGZTZQmMOOg%2FsAGOqUBJZorRxkOLZxz55rdhJ1PGAikyX4G%2BIyYgmb7DWABVmX6rjRLiXwmOsxNeg7EWPeXZ%2B%2BaUkxgSml546bsJSfdfXsAJ2Pl8xRcG5wgPtIjSI3ns3EwEo0mnbvN3o1K0kxFt%2F8Ri3tpevZXzRjyrwkuqMQURGv%2FRJLKRg6a3ipePcsomVUpxVm9AsIr9osfWgD53fXALt3QdCQ6LdsvXbTtFy8fjY%2Bc&X-Amz-Signature=29dcfc475389d6a5d92f17a4e38d537c9b892d7926061f43f5462778ee5a43e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
