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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7BJCZGV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEniexXE2b7w210x2uP%2BlirPne8Y08X9Z6qWIsiEyWF2AiAJNHRZw8BBOhH9OjfXG5IMVl6CHGrkdA7l%2F48oE2%2F2dCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY26JiGOnMyiBdCq2KtwDwOI717J0tN9bIyQ4OFtvWxqyvmz0g7i%2BXroYnQHPUUxXzRFYyD1gOXB8rI3lhKRP9N8ue41LzzboVZHOjSfeNm7%2BL53mgLvoWcwHGkvfGPxmvOSODlIeJF37UTVIPirWCxmfQhMkXMGfLktiG5YLpCq8EsCMAuyO1AlbmvNjasF%2BdYDcqpRtzIEaV5ygboD27AmQz%2BEmCyiFuaXCtXLK2ur4y9H0yPYOqP0gJbpFkWGTCFA9vBIRRAH17TuDynaJftvDphLQuBYGVnD0ufkFgWV9xF8z%2BSHKkVF4rp19%2FBqypMm3y2FR6BbWE390Bji16xjLsd%2Bu1ZV8iWEUgcmQ2r4SQaMoZZQXAhw477JLXqo%2BHYtt8abmlurKzqx%2FY4F6EQQUZbaBf2xfDLh2DvGubq2l1zVZwlszvYczmOCXiudRWrSt3Cfxmnt3vJvHlEioz8gCkbhrAEhfYPTGOzjpEDX3dAirQ%2BYTewhBDkN29ErSH6Y9v7H9z23Ol4ZzbEj%2BYsYIsiXssTl7IJ3ULeNj1apS%2BGPQzMIaDG5v0RH2t8YEq5edVTlXx9cS3GiZq%2F9oOtKCZGXiUj7uJkqS8JK37h6Lh3G%2BvYp%2B2lHz1KuE2RZUPqeFyGxIuXfZDAYwzYuxvQY6pgED2ibgNZwKBL1bCPQ%2Be8JaXObnhZvBResS%2BMu774dhLLvEsC%2FJC%2FN5CJ321EzTdY24QlljpIUelF9OLJMgZ7jdvLY%2FnLVsH6CX0D3D0%2FDUyDbrfw56nvQ1yY3KjJojPVyRbLuZCoqqdTkKzn63fOBy4fCoaz34CbYAIOCpGPm9VCavn6gRBcT2Xf8EgkAU13cKxaRXFG9ldtAvq3Upwo7MaqPxbOb9&X-Amz-Signature=4b93ca4b85769d09c16d6495203ca758aa3af8326141baace2a4b30b4c63dc12&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7BJCZGV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEniexXE2b7w210x2uP%2BlirPne8Y08X9Z6qWIsiEyWF2AiAJNHRZw8BBOhH9OjfXG5IMVl6CHGrkdA7l%2F48oE2%2F2dCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY26JiGOnMyiBdCq2KtwDwOI717J0tN9bIyQ4OFtvWxqyvmz0g7i%2BXroYnQHPUUxXzRFYyD1gOXB8rI3lhKRP9N8ue41LzzboVZHOjSfeNm7%2BL53mgLvoWcwHGkvfGPxmvOSODlIeJF37UTVIPirWCxmfQhMkXMGfLktiG5YLpCq8EsCMAuyO1AlbmvNjasF%2BdYDcqpRtzIEaV5ygboD27AmQz%2BEmCyiFuaXCtXLK2ur4y9H0yPYOqP0gJbpFkWGTCFA9vBIRRAH17TuDynaJftvDphLQuBYGVnD0ufkFgWV9xF8z%2BSHKkVF4rp19%2FBqypMm3y2FR6BbWE390Bji16xjLsd%2Bu1ZV8iWEUgcmQ2r4SQaMoZZQXAhw477JLXqo%2BHYtt8abmlurKzqx%2FY4F6EQQUZbaBf2xfDLh2DvGubq2l1zVZwlszvYczmOCXiudRWrSt3Cfxmnt3vJvHlEioz8gCkbhrAEhfYPTGOzjpEDX3dAirQ%2BYTewhBDkN29ErSH6Y9v7H9z23Ol4ZzbEj%2BYsYIsiXssTl7IJ3ULeNj1apS%2BGPQzMIaDG5v0RH2t8YEq5edVTlXx9cS3GiZq%2F9oOtKCZGXiUj7uJkqS8JK37h6Lh3G%2BvYp%2B2lHz1KuE2RZUPqeFyGxIuXfZDAYwzYuxvQY6pgED2ibgNZwKBL1bCPQ%2Be8JaXObnhZvBResS%2BMu774dhLLvEsC%2FJC%2FN5CJ321EzTdY24QlljpIUelF9OLJMgZ7jdvLY%2FnLVsH6CX0D3D0%2FDUyDbrfw56nvQ1yY3KjJojPVyRbLuZCoqqdTkKzn63fOBy4fCoaz34CbYAIOCpGPm9VCavn6gRBcT2Xf8EgkAU13cKxaRXFG9ldtAvq3Upwo7MaqPxbOb9&X-Amz-Signature=175390817f94193fd04c214ea9b278068f8b7d5f56102cae15f4728deb546fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
