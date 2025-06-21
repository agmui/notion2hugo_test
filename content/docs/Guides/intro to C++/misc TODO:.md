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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZVG3PDB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIAy2Izp6mJ0CrfjWKShVtRHaXZg%2BLz8XZw6H1bFIL4QIhAPc3FSjpxNITjlVWLTT2ihHdpg7lQ%2F9TvAIHRDGXGEnPKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1tQ4FzrjPP0OVs9gq3ANlkhM4JkgfKk9AEUwQckrkuquzy%2BfC2GfSazvSebe8k%2BaMpawEjXzTe0O4I1P96jVAHPja0ehFULyTL%2FSIpaDz3M33ffo0e4a8P3B2CFsYWHpIKO3CRxsu23oU2RJ6MKbBqtDdj6KvBYx%2FWe6tC1baOvCkoSngnzuiGoDb6eUZOhSIdHq9OeEOfY1tXYJGmmIgQEtYFNMaAxCveCiQ%2F%2BzC5zl0ZPr9vUR%2BazMVLcf8eugQSLDGH0iP9WuLdd7CBZ%2Bw8XrTDYxvfMStZY4TpCB15SwLsH4TCyL%2FBqIskP6yAolTgd84OIsp6POTu%2Fj0nmqUbFyNWWAhHZQJ9tOGYj5sXWrPBLyPo%2B760Oc8RHgu8Cr57LZUanXuPu3YRV7gzLehATv4i5AWrOD%2FlAn4rWTo9h1yF6EuATFD5RXlRV8bhWNwCPejyMq%2FCorLUcBZKL8Hg8bZWY0mMe0XRTwvXVFomOfb76eMmFY6avtdlH%2FTpnN%2FeOQ5JU9XR%2Fr3Dtsm0DeM79Mr36WoLGJBH1%2BA5TFsPRc5S9QpuOcsQMToRx5WfSfUfelnpYcBsQkJNh568%2FSL09gu3UX1eKgpfPBTo178Zkj%2FlwinbiANMJivK7p%2FQODtlixLiBwWML11FDCuj9vCBjqkAWRdx6AzIkQfPvUN16YPoAKAazlDW1X%2BwetH5rKq6gN%2FXeRs59Ok4reBI9eS5mRmXMD5mRnEi3FvPsboI65fatNc2f4Zfq8qkC2ctcQAGOgMA446d4v%2FwOyZ%2FATz712aOm3NGeWa7gzfFDe3lCCqetXfUyd5B25G6FJCtokYgrRFjT%2B8B9ZeebFc%2B8ZO5ZPpCTpnNkVhX9iRL%2B3%2BFukzFz9ta8Hb&X-Amz-Signature=77181e6e0499b03d652ab18a2a5eeefe657f4b389f88c657de16743425fdd218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZVG3PDB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIAy2Izp6mJ0CrfjWKShVtRHaXZg%2BLz8XZw6H1bFIL4QIhAPc3FSjpxNITjlVWLTT2ihHdpg7lQ%2F9TvAIHRDGXGEnPKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1tQ4FzrjPP0OVs9gq3ANlkhM4JkgfKk9AEUwQckrkuquzy%2BfC2GfSazvSebe8k%2BaMpawEjXzTe0O4I1P96jVAHPja0ehFULyTL%2FSIpaDz3M33ffo0e4a8P3B2CFsYWHpIKO3CRxsu23oU2RJ6MKbBqtDdj6KvBYx%2FWe6tC1baOvCkoSngnzuiGoDb6eUZOhSIdHq9OeEOfY1tXYJGmmIgQEtYFNMaAxCveCiQ%2F%2BzC5zl0ZPr9vUR%2BazMVLcf8eugQSLDGH0iP9WuLdd7CBZ%2Bw8XrTDYxvfMStZY4TpCB15SwLsH4TCyL%2FBqIskP6yAolTgd84OIsp6POTu%2Fj0nmqUbFyNWWAhHZQJ9tOGYj5sXWrPBLyPo%2B760Oc8RHgu8Cr57LZUanXuPu3YRV7gzLehATv4i5AWrOD%2FlAn4rWTo9h1yF6EuATFD5RXlRV8bhWNwCPejyMq%2FCorLUcBZKL8Hg8bZWY0mMe0XRTwvXVFomOfb76eMmFY6avtdlH%2FTpnN%2FeOQ5JU9XR%2Fr3Dtsm0DeM79Mr36WoLGJBH1%2BA5TFsPRc5S9QpuOcsQMToRx5WfSfUfelnpYcBsQkJNh568%2FSL09gu3UX1eKgpfPBTo178Zkj%2FlwinbiANMJivK7p%2FQODtlixLiBwWML11FDCuj9vCBjqkAWRdx6AzIkQfPvUN16YPoAKAazlDW1X%2BwetH5rKq6gN%2FXeRs59Ok4reBI9eS5mRmXMD5mRnEi3FvPsboI65fatNc2f4Zfq8qkC2ctcQAGOgMA446d4v%2FwOyZ%2FATz712aOm3NGeWa7gzfFDe3lCCqetXfUyd5B25G6FJCtokYgrRFjT%2B8B9ZeebFc%2B8ZO5ZPpCTpnNkVhX9iRL%2B3%2BFukzFz9ta8Hb&X-Amz-Signature=6839081e3e3aa5347c6f5721041baf9145ae1d128bc5da5e5fcc7f59b5991fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
