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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JVLPEI%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeitXvri1ZNTNCAeaJcMwcA3QVAKz3Wn43kh5g8Msw0AiAgX5IpzUNSyjAnQz77nxOims2YqcVO1s8sR7uz0huA6yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM5lzhNxSHfF8dTR3%2FKtwDNetoM%2By4yVok4j1%2FsUMvEJ4Vm%2FiCKQfEX4p13Ml1NksbJ%2Bz6Dr44x14CV2%2F8LQ7EWTKmFbzzd3FPXL2F17xFVPO9%2F4ppSfcgYvJNMcPUBlUiPNMMGQUSB%2BumpKE1rA34Jm40ZzSWfe8ByvZR32kGf6SIu3audB9Gfal6i%2FJFt31Byqr3PQ84yov6lSYn5UQ0Rjo%2F00Zy7msbbzxHn4L6CearEglmPGpRFfNPB2Dw7g%2BnDABA8LznckXpV2AstQiPJz0uLgXciZOiQLt5vE1AiBjFGZMJeKPsz0tm1HMs6eEITGoVJ5U3R3TLxflOGWcyTNCTyLgyGZxJFy8jM8Y78G%2F%2FCMPewJUjGk3usRxFJDJ7%2B5nD%2B2fkH6wzwcqktkdkViGWm9oB5aX3vErMIAECoW3dIEmnjQWdpKSs8S%2Bx0rHjI8%2F%2BzgUKiMFtWMKUM34T7wARQ6MfrZSvwy8FTL20GObab%2FXH6K5Ft9OaUapNcK6QqPEwhzEASgJzm7h11J6oI%2FnQxAGFC9sHRwSQNHElyCuV%2B6hzNDiyCJuTk5Hox3UZmKpcOayXFj2xgyRv%2Bi5ES%2B9IaM9IfghML0s0rESGo5DkkOInPeRRWVbLdQhtK1jUreh6UozIC4J2OKQwq%2FGpwAY6pgHZx62RDLk%2B1LjqiGk15e1ERW4oRVYehqySkiZH%2Bgl7ES9zeUxzBmS0%2FyxdmylcyzE1IxKozoyMhwJzudFvTaGGYEBbvUEcJxfHnOBvg183H3y%2BNVZrSu6zk2M7gSAmEQZvxURPCcYx38%2B3r%2BQizKw6pXaWOkNvSvXMM%2F9tZsh3zBsEpwkeaCpMmTlTo5gCp91cu4CxKA0f%2FI%2FIWdPZqLh32lhRJUoN&X-Amz-Signature=07794d0808f867e1c0cda3aa888a032dd398b301c76edac2ec54a0a0bf7bf6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3JVLPEI%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeitXvri1ZNTNCAeaJcMwcA3QVAKz3Wn43kh5g8Msw0AiAgX5IpzUNSyjAnQz77nxOims2YqcVO1s8sR7uz0huA6yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM5lzhNxSHfF8dTR3%2FKtwDNetoM%2By4yVok4j1%2FsUMvEJ4Vm%2FiCKQfEX4p13Ml1NksbJ%2Bz6Dr44x14CV2%2F8LQ7EWTKmFbzzd3FPXL2F17xFVPO9%2F4ppSfcgYvJNMcPUBlUiPNMMGQUSB%2BumpKE1rA34Jm40ZzSWfe8ByvZR32kGf6SIu3audB9Gfal6i%2FJFt31Byqr3PQ84yov6lSYn5UQ0Rjo%2F00Zy7msbbzxHn4L6CearEglmPGpRFfNPB2Dw7g%2BnDABA8LznckXpV2AstQiPJz0uLgXciZOiQLt5vE1AiBjFGZMJeKPsz0tm1HMs6eEITGoVJ5U3R3TLxflOGWcyTNCTyLgyGZxJFy8jM8Y78G%2F%2FCMPewJUjGk3usRxFJDJ7%2B5nD%2B2fkH6wzwcqktkdkViGWm9oB5aX3vErMIAECoW3dIEmnjQWdpKSs8S%2Bx0rHjI8%2F%2BzgUKiMFtWMKUM34T7wARQ6MfrZSvwy8FTL20GObab%2FXH6K5Ft9OaUapNcK6QqPEwhzEASgJzm7h11J6oI%2FnQxAGFC9sHRwSQNHElyCuV%2B6hzNDiyCJuTk5Hox3UZmKpcOayXFj2xgyRv%2Bi5ES%2B9IaM9IfghML0s0rESGo5DkkOInPeRRWVbLdQhtK1jUreh6UozIC4J2OKQwq%2FGpwAY6pgHZx62RDLk%2B1LjqiGk15e1ERW4oRVYehqySkiZH%2Bgl7ES9zeUxzBmS0%2FyxdmylcyzE1IxKozoyMhwJzudFvTaGGYEBbvUEcJxfHnOBvg183H3y%2BNVZrSu6zk2M7gSAmEQZvxURPCcYx38%2B3r%2BQizKw6pXaWOkNvSvXMM%2F9tZsh3zBsEpwkeaCpMmTlTo5gCp91cu4CxKA0f%2FI%2FIWdPZqLh32lhRJUoN&X-Amz-Signature=fa8a001b29269d92b2fc50ee4f5375b64e2a72cba00fc54ae7ae606431ebf48f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
