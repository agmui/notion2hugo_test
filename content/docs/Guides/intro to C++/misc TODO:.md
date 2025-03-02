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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IWP66JL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIC1lHbBt0j2nik7%2BXqH3zhklXDVWM6waeOiq7PI6i5ZbAiBgzbOTI%2FHXAGalx11CBDDBc2VPKc6YHOXXvXHyzwHUzCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRF%2Bzr2B5uVB8MQhNKtwDje%2FqaKuRgJU5bfrO%2BqtTMSKxKYL1vOyhLbXNPSGExDGEGJxVHfmhLo0gftHex0e%2BvvzXyFNtn1hVhM%2F5bxR7IAECxLUdPRPLdDYNVqUniTZTY5o8m9rCmHa70O0q0FFbbi0ULGMfZINrWXO6%2BSGGB4ML4AnceoZgDsgg0ChYhq3U7jHl0Ifs588Kl%2BkO2TZlppbRML4412mbYRRaYnu%2BpQgE4OvTO533QYIIMf2QY%2Fyq4wlOd2%2FrZfgthUSuugTlfGamAC24%2BaccSDgnNoN%2B3gAB%2FNVerxPToNlB18XdoemxeqlP7xEniOr%2BtGMBq9AzOVYxwHyFSX0jMf2tQ4DmbcIQEIUAn3ARwnjFwjhuIoNSioYFffg7LnfVj4jNTWip6HgXiyrTYMKmYPlyQR0troBA7FY3lZxkUfLke%2Bcv2txu4Hfzrne%2Bw4nClWh6jqTOYzqAEcNbImODIAWL3pwYIo1IpMqPGMhcsdgSdo1JHINxNiYxR8y2WjcAshEPfALYtVPhJfrIEiZWLRvmxi0VF18%2F%2BjddJO%2FSZTQ8UKETp1z1AuX9F9Bk7iviORBo2N8Qxi3Sdud20ShLsQsCCxC3fyqZ%2B0SWkvhDY4ui1SlfpEN%2FwOJe3UOPfB6qIJYw6NePvgY6pgHdDpLq4bqNlFiFXnZfiaMP05Otpjsh1fUgB1XXPbCtJU507u4j8URyBKkzjcG%2BZVYOzlNjTreFGwjVWPi4BT%2F32FsnCzUmQ2rHFGf7290s0idpFxw%2F9p5sWGmVjHk66zMC7wlXasaoNEXPmYLMZJEuNCTACusq1rr8q8T50QPCJDBJGX3uW%2FvlPlOOxTc7zvWKhyIiwXqPkq9SEnCcbGjsA7MgULdq&X-Amz-Signature=3531d9baf74ef9c64f4a0ef1fca43fb6e52bb756783d7dfb4188c52e591214bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IWP66JL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIC1lHbBt0j2nik7%2BXqH3zhklXDVWM6waeOiq7PI6i5ZbAiBgzbOTI%2FHXAGalx11CBDDBc2VPKc6YHOXXvXHyzwHUzCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRF%2Bzr2B5uVB8MQhNKtwDje%2FqaKuRgJU5bfrO%2BqtTMSKxKYL1vOyhLbXNPSGExDGEGJxVHfmhLo0gftHex0e%2BvvzXyFNtn1hVhM%2F5bxR7IAECxLUdPRPLdDYNVqUniTZTY5o8m9rCmHa70O0q0FFbbi0ULGMfZINrWXO6%2BSGGB4ML4AnceoZgDsgg0ChYhq3U7jHl0Ifs588Kl%2BkO2TZlppbRML4412mbYRRaYnu%2BpQgE4OvTO533QYIIMf2QY%2Fyq4wlOd2%2FrZfgthUSuugTlfGamAC24%2BaccSDgnNoN%2B3gAB%2FNVerxPToNlB18XdoemxeqlP7xEniOr%2BtGMBq9AzOVYxwHyFSX0jMf2tQ4DmbcIQEIUAn3ARwnjFwjhuIoNSioYFffg7LnfVj4jNTWip6HgXiyrTYMKmYPlyQR0troBA7FY3lZxkUfLke%2Bcv2txu4Hfzrne%2Bw4nClWh6jqTOYzqAEcNbImODIAWL3pwYIo1IpMqPGMhcsdgSdo1JHINxNiYxR8y2WjcAshEPfALYtVPhJfrIEiZWLRvmxi0VF18%2F%2BjddJO%2FSZTQ8UKETp1z1AuX9F9Bk7iviORBo2N8Qxi3Sdud20ShLsQsCCxC3fyqZ%2B0SWkvhDY4ui1SlfpEN%2FwOJe3UOPfB6qIJYw6NePvgY6pgHdDpLq4bqNlFiFXnZfiaMP05Otpjsh1fUgB1XXPbCtJU507u4j8URyBKkzjcG%2BZVYOzlNjTreFGwjVWPi4BT%2F32FsnCzUmQ2rHFGf7290s0idpFxw%2F9p5sWGmVjHk66zMC7wlXasaoNEXPmYLMZJEuNCTACusq1rr8q8T50QPCJDBJGX3uW%2FvlPlOOxTc7zvWKhyIiwXqPkq9SEnCcbGjsA7MgULdq&X-Amz-Signature=c39e139464d2bc9b29eb38cfe069730534a2773790c4875a5650cda98474d3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
