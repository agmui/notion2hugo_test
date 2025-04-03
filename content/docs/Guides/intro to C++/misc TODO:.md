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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HKOMSEA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp%2F0wUdRYt6vLnvocdldwNPToKDwNMWeqVFK9gQMSYNAIhAK3O9EvajzmjuOY1OMGHaVoOGQnsOujZzVK413o3fMD8KogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLqxuRD%2FV2qa%2B5urIq3AOD%2BsOcKB57kcuUEmS13iwyQ96NQV%2BWDprt9dJjSiE%2Bhj7Io5PSV0xNTiPtFmE0qc9XRS9BPsAJfIepCLu1kjLKtMWNh3t9W4Iz%2F1XgrZJ8HEe%2FqaNF9gG5L3i2J0yeoKJHlECo4omHWO7eQefqZOAVh%2B8yjBWHTWuNLEszZkxK5jDmrbStCsX%2BEC3ap%2FecXQ03uEAfblFnIATv9CyWOuEkVF87H6ZFvFDry60qz%2BGWRuTX38qVDimJc0ZYpNCFPfPCs34ZJbxTtVS0wfq2V%2FBcfDocqDIFrxVlfaspK0fwJ7i8BK%2B3b5QpzpIWVoruNRbH6MoLHovX6jSbtfs6pYGKjevHjQvAU%2Fqdo0AutHM8WIoI3ym2rgPWpQ8YS5gUmOic%2FH%2BeME8KB2NQWPDW%2BRFEcsPxgAvIoG8eg0PsciN2AH6cZ5KQbY9U9x0xQEUzlibgMxccq47h8QswBXFZOxmNttxbheh3TfAMxCJB6GVbuibmrvTqtoAe3KRDax4bOZDmQ31Bm6qTKB4%2BByPmeXrj4F8YK4DdhdT%2BaTo3kkk%2Fx%2BwUB%2FBK7JlJe%2FeUnKxofnyZg9EQvr3325ODMs%2BVja8do31aH4UIlLw4PQuXSI88FcTE0irwIZzX6dP3PjDchLy%2FBjqkAZmH5%2BMUB10UCcV0FET9prPq0A4%2F%2F1bBBHUHPY%2FaOWOtOpIR8FaB7sIM0LaFwrl7MKHwXPYFvkrDmxJFoMbeWC6SXKLNMLlUslR1c65XDzn5Z6FGwAq%2Ftc1mZI00PLWcJzeQgHmwpKTrhl0CdZDP6ul2v6ISrg9Zl4VA1NGPGI5gJCDuzHmiPQCHUB8HBlht0lT6zofZMJi3PjNddjr2XJGYf0mX&X-Amz-Signature=f9834c54ca8ef5ddcf401c0fc2538b70b6b302cdb66f4674a8fbe53c2dfd3ded&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HKOMSEA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp%2F0wUdRYt6vLnvocdldwNPToKDwNMWeqVFK9gQMSYNAIhAK3O9EvajzmjuOY1OMGHaVoOGQnsOujZzVK413o3fMD8KogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLqxuRD%2FV2qa%2B5urIq3AOD%2BsOcKB57kcuUEmS13iwyQ96NQV%2BWDprt9dJjSiE%2Bhj7Io5PSV0xNTiPtFmE0qc9XRS9BPsAJfIepCLu1kjLKtMWNh3t9W4Iz%2F1XgrZJ8HEe%2FqaNF9gG5L3i2J0yeoKJHlECo4omHWO7eQefqZOAVh%2B8yjBWHTWuNLEszZkxK5jDmrbStCsX%2BEC3ap%2FecXQ03uEAfblFnIATv9CyWOuEkVF87H6ZFvFDry60qz%2BGWRuTX38qVDimJc0ZYpNCFPfPCs34ZJbxTtVS0wfq2V%2FBcfDocqDIFrxVlfaspK0fwJ7i8BK%2B3b5QpzpIWVoruNRbH6MoLHovX6jSbtfs6pYGKjevHjQvAU%2Fqdo0AutHM8WIoI3ym2rgPWpQ8YS5gUmOic%2FH%2BeME8KB2NQWPDW%2BRFEcsPxgAvIoG8eg0PsciN2AH6cZ5KQbY9U9x0xQEUzlibgMxccq47h8QswBXFZOxmNttxbheh3TfAMxCJB6GVbuibmrvTqtoAe3KRDax4bOZDmQ31Bm6qTKB4%2BByPmeXrj4F8YK4DdhdT%2BaTo3kkk%2Fx%2BwUB%2FBK7JlJe%2FeUnKxofnyZg9EQvr3325ODMs%2BVja8do31aH4UIlLw4PQuXSI88FcTE0irwIZzX6dP3PjDchLy%2FBjqkAZmH5%2BMUB10UCcV0FET9prPq0A4%2F%2F1bBBHUHPY%2FaOWOtOpIR8FaB7sIM0LaFwrl7MKHwXPYFvkrDmxJFoMbeWC6SXKLNMLlUslR1c65XDzn5Z6FGwAq%2Ftc1mZI00PLWcJzeQgHmwpKTrhl0CdZDP6ul2v6ISrg9Zl4VA1NGPGI5gJCDuzHmiPQCHUB8HBlht0lT6zofZMJi3PjNddjr2XJGYf0mX&X-Amz-Signature=c933421b195e7b2d182fa949d8802920d13c49ea14f1aafa7c58275bd8b231a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
