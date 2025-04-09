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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FTF56XH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDDog6RoJ30vez8AwQthZDRJ76JPkSB87kqCfYl%2BCnxgQIgLtRWXV4AnXe%2BtSNlkb1RRAsAfkGxqZyq0cT9RGEmiv4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIdIfHC4HoxX2mCcCrcA1nYxo5V89mP71LL3Q1KImZfsLdjGN7mptX9VVz%2BjpeF9AuOH2xzZL7IFJfE9ncvbM1%2FqBR2DhfkUfShQU49ha6%2Bckj7Bj5oZ6SxnMTP5ABDPt1IkPlzWsau3OyLNOpePrPaH0na0CQembyerEBdJuNy4SyH81xKHbjstut%2BznBUHIfFNsB7CMPTIlybGqQdHRK82LzXm%2BpFi2r6zZOATQ%2Buu78an0A81b1%2BJAczkRo2bpQfy1YWagwkHWskXZTgKMArlhIqgUxXNBvhQSdoLwa%2FvdfKV8wsIsQ9wrMIFMsAfum9c3bA9B29QvMGYvrHpUvGDejdgZH65jfPKvXsbAQ8MNujirYXLBgzZYQscS658Vg1kYHJaCAcqeJhdiudfAcBcn90Dc2IGpCMHYlv7Fl9BsCP6WZpjHgCyCqe%2BoiH0m9UdKsAdB%2BhmFl8q3NNQfpNr1SsoUDz%2FCPXfq8e72ZC4J0K3BO3KwfEegiVTlup%2BfA936iM5Tm%2Fc8RdSVcNBovzUGjvlDBmbuD24C%2FG34V8dFp2UkUhzYZvZE65UMnp8OVMhu7X3bu%2B1ObxUsjnwOme4X61vvX3YyYKjZNJ%2FW039a%2BgLXAL7OHcStDzDg4xsI8V%2FepbrEbNUdL6MLbL2L8GOqUBcgv4q7dL0K%2BSN5pYzjJrpGwhnDCKpukPctmNpW8S5j7XKvsKwJK0fzZ0532BFYHYxeCg4dE8hjSOPej1yBmpK89OOCHWA1gKCfOmOEYpGVZFdH7JxSQM0t4MeXyUIUX5AX2G3CEorNCR%2Bbb8N8lsZd%2B7uv6mlTQ2SaVSIWqu65BC0A%2FVS%2BlJTcfd6n5EWoBpAQZuqXJXm2qpsiQ7bCbI1smHtSB3&X-Amz-Signature=42ce366a3f45742c2f76204cbf0d8e448504bbc7cbe6b89c03ab24e38b1303ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FTF56XH%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDDog6RoJ30vez8AwQthZDRJ76JPkSB87kqCfYl%2BCnxgQIgLtRWXV4AnXe%2BtSNlkb1RRAsAfkGxqZyq0cT9RGEmiv4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIdIfHC4HoxX2mCcCrcA1nYxo5V89mP71LL3Q1KImZfsLdjGN7mptX9VVz%2BjpeF9AuOH2xzZL7IFJfE9ncvbM1%2FqBR2DhfkUfShQU49ha6%2Bckj7Bj5oZ6SxnMTP5ABDPt1IkPlzWsau3OyLNOpePrPaH0na0CQembyerEBdJuNy4SyH81xKHbjstut%2BznBUHIfFNsB7CMPTIlybGqQdHRK82LzXm%2BpFi2r6zZOATQ%2Buu78an0A81b1%2BJAczkRo2bpQfy1YWagwkHWskXZTgKMArlhIqgUxXNBvhQSdoLwa%2FvdfKV8wsIsQ9wrMIFMsAfum9c3bA9B29QvMGYvrHpUvGDejdgZH65jfPKvXsbAQ8MNujirYXLBgzZYQscS658Vg1kYHJaCAcqeJhdiudfAcBcn90Dc2IGpCMHYlv7Fl9BsCP6WZpjHgCyCqe%2BoiH0m9UdKsAdB%2BhmFl8q3NNQfpNr1SsoUDz%2FCPXfq8e72ZC4J0K3BO3KwfEegiVTlup%2BfA936iM5Tm%2Fc8RdSVcNBovzUGjvlDBmbuD24C%2FG34V8dFp2UkUhzYZvZE65UMnp8OVMhu7X3bu%2B1ObxUsjnwOme4X61vvX3YyYKjZNJ%2FW039a%2BgLXAL7OHcStDzDg4xsI8V%2FepbrEbNUdL6MLbL2L8GOqUBcgv4q7dL0K%2BSN5pYzjJrpGwhnDCKpukPctmNpW8S5j7XKvsKwJK0fzZ0532BFYHYxeCg4dE8hjSOPej1yBmpK89OOCHWA1gKCfOmOEYpGVZFdH7JxSQM0t4MeXyUIUX5AX2G3CEorNCR%2Bbb8N8lsZd%2B7uv6mlTQ2SaVSIWqu65BC0A%2FVS%2BlJTcfd6n5EWoBpAQZuqXJXm2qpsiQ7bCbI1smHtSB3&X-Amz-Signature=ba397f71f47077a88c77283433b3e570e958d9eb66d1dde62719f06cf3cfd483&X-Amz-SignedHeaders=host&x-id=GetObject)

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
