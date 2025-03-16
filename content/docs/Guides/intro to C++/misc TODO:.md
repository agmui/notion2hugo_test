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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVOY3ME%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHOBgyxdQUgA%2Fh7IBkIGYRjdSQKt4RjlZYlbLjekshxAiBE9DAVFd%2BV8Z%2FkjtwnhdkuaWPMDGhYvfZQCtE7FwZp7yr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMxzUS0fKGzfDaLqhiKtwDLEVXBLK9oTDWoA1F67%2BhwO%2FHeqF3MIHYQ7ArIpGw3c5K0OlKF7i80YxbXYinUWtAf98qu7To0ujVG%2BqsXySZTdiRsERBZarRhiaH2VQt4gIqtfV69Xx82TCHkVFzuP1kVnmGpDQN85%2FTQi94v8U%2FqR3B6l8BbMT%2FP8JclmEhMARkgc%2FsTTmG49yO1DKGUVmd46B%2F0lV6R%2F2SaH%2BLuALpStmhMaFLhnhyej%2BtYmw4yCNhy50DHdN2wTUFSo1aqkXbAvQuCIDP11mqrW5TffBMJOf0RRkAJ3O9En0tsE%2FGpooxnDDVEhxj9fPSPuuS3CmGyzT%2BP534gpbpIJUgmUBT%2BPZBgTUlT00LURfiyssxn7ZCJckbuSj3%2FL9SrnvCmE6qZ1PTFjwUq7Vdy2ZeMsnuYX2uVLKe0%2F3WQyaeON8%2FdJSbTHrZYq69T2lXbJvzUN0it8epVJX8AFRI7lhTWQC7JL%2BqDScSc6ernA0lqO6CjWzLRPnYqg%2BxZsb0PAhMzYkc7QVjiYjy1C3GwDqdCVWouwHVH%2FCWiCOYgA45BCnOyViTAk6wF84JpDAMVMWV0tVALtNQWcZpa97lKEau413ESX1t4RRbQG%2FgKGDXdOUxMEW40lTta9nMY6oS%2Blswz6DZvgY6pgGnodaGwzpfhOvf86eoLoaQnsmfCDLqyX0f9yKW%2BYOp6c8Z86cX7MufwJERgrZD%2Bl3yR9HwmLG31CrSlDHFLEjZwj4nBb2auPqkYPMrULH0aQxuRK%2BzbYJrq%2FWVY5jd4aIzvchyBGYjuvOse0vSAuAP570hQU3w4KZF6G33Ux2sDSXjeEStVckuaqQhvUYfjW8ETrfNHOSD1HJnuuONP2F3hHVethQ3&X-Amz-Signature=089ae938e1f96d17e194d7a87ea2af5b4238573e9900011580be0aa7fe11d09f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVOY3ME%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHOBgyxdQUgA%2Fh7IBkIGYRjdSQKt4RjlZYlbLjekshxAiBE9DAVFd%2BV8Z%2FkjtwnhdkuaWPMDGhYvfZQCtE7FwZp7yr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMxzUS0fKGzfDaLqhiKtwDLEVXBLK9oTDWoA1F67%2BhwO%2FHeqF3MIHYQ7ArIpGw3c5K0OlKF7i80YxbXYinUWtAf98qu7To0ujVG%2BqsXySZTdiRsERBZarRhiaH2VQt4gIqtfV69Xx82TCHkVFzuP1kVnmGpDQN85%2FTQi94v8U%2FqR3B6l8BbMT%2FP8JclmEhMARkgc%2FsTTmG49yO1DKGUVmd46B%2F0lV6R%2F2SaH%2BLuALpStmhMaFLhnhyej%2BtYmw4yCNhy50DHdN2wTUFSo1aqkXbAvQuCIDP11mqrW5TffBMJOf0RRkAJ3O9En0tsE%2FGpooxnDDVEhxj9fPSPuuS3CmGyzT%2BP534gpbpIJUgmUBT%2BPZBgTUlT00LURfiyssxn7ZCJckbuSj3%2FL9SrnvCmE6qZ1PTFjwUq7Vdy2ZeMsnuYX2uVLKe0%2F3WQyaeON8%2FdJSbTHrZYq69T2lXbJvzUN0it8epVJX8AFRI7lhTWQC7JL%2BqDScSc6ernA0lqO6CjWzLRPnYqg%2BxZsb0PAhMzYkc7QVjiYjy1C3GwDqdCVWouwHVH%2FCWiCOYgA45BCnOyViTAk6wF84JpDAMVMWV0tVALtNQWcZpa97lKEau413ESX1t4RRbQG%2FgKGDXdOUxMEW40lTta9nMY6oS%2Blswz6DZvgY6pgGnodaGwzpfhOvf86eoLoaQnsmfCDLqyX0f9yKW%2BYOp6c8Z86cX7MufwJERgrZD%2Bl3yR9HwmLG31CrSlDHFLEjZwj4nBb2auPqkYPMrULH0aQxuRK%2BzbYJrq%2FWVY5jd4aIzvchyBGYjuvOse0vSAuAP570hQU3w4KZF6G33Ux2sDSXjeEStVckuaqQhvUYfjW8ETrfNHOSD1HJnuuONP2F3hHVethQ3&X-Amz-Signature=12aa5c96181537c0c63541089a3db223a6079794667bfa1e1929980b0e86681b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
