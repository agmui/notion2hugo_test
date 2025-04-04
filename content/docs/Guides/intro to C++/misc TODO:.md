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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6YJN7VM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSGOVSqHKiOKMpMGo%2Fd0Rv9Fqae5mDre9BG4T%2BqiVwXAIhAKCmblc838COAzsbgekwbxqEgEyu9ckgZ3gN1mesEV6zKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1k6Imw3JhhMTxzMQq3ANORRVrkg4m74%2BGnLp8XL5zfIKWvoDA4t3qr9cM84Y8mKeaW1EBwVyXx8lCYGw0FxsUKFEVnkQqnQ0LtK%2Fwu8OD8bbxWa%2F78BPw7hN9GIohrif0PMd%2FniAwkxXytiZ8q1oEFTxPc5AiSDatWo3qczWF67uwi3WrPaqZjY%2B5GC5bL%2B8AZ8GNAK8G7973R3EfBXapdgYS3BegU1ibFY1Up58d8pU4a%2FFXN91mTCI8YhgQMCqAZEmrGf9fTDrq1du2OItAs2VX6wzdxMQESL4dM28BccqZjRAoBRAMxUjS1%2FtzsbGCvjvb3bEFAKVi7FG2e%2Bg5Lzdl6a8ytpd0xNfVXZAnh6AesEdybPr40klxVufET0K7BjKi9rrj5%2BxHgjabGdzyVWg0nFFYmmGUu0qykbNu550arQQMc%2F2pxjUIoRs46LTPlg%2BiValUeDfmtKV4vCuoiEHxD%2BrVs1FFUb2Pwl4XWJsAgFUCKv42Vnsl9latk0K0YbApWeNsF70x1eRuIGr0NUTi24r9r5Mnn4TWtufoz3mPJOQTLtMS%2BZfgLWFH86N0IHKcCecZhry3A2qlEowQ%2F3zeHLnXxr%2BQ0utYeJBz5STK1Tvz%2F6NF6Z2vHrptLVVOJ6j6TSI28FAwTjDbrL2%2FBjqkASoMZvhy6acQ2HYjumKw7Ld1uP%2FSsyhGKcnqNo3alcaC1zlxWbUDemkCXjYY8RIDq7W7ds0ndOIevAVIZIKxHeGCIxi53aKKuXB7ndl725ngzu20jsc1J5zh8kW4o8z5Ts36RqwJIkBxSWiQJ1MeKj4qhFfN23x1rqHkVu3OgEUb8KLrUZn79TDlrdTSzlRoTuppnuMn8ccNkSWekPVcQedDmqZJ&X-Amz-Signature=89c7bf14822150adbc5b83a7cc3e7d9fe436bc88b411b77338c9ada5fa45e894&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6YJN7VM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSGOVSqHKiOKMpMGo%2Fd0Rv9Fqae5mDre9BG4T%2BqiVwXAIhAKCmblc838COAzsbgekwbxqEgEyu9ckgZ3gN1mesEV6zKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1k6Imw3JhhMTxzMQq3ANORRVrkg4m74%2BGnLp8XL5zfIKWvoDA4t3qr9cM84Y8mKeaW1EBwVyXx8lCYGw0FxsUKFEVnkQqnQ0LtK%2Fwu8OD8bbxWa%2F78BPw7hN9GIohrif0PMd%2FniAwkxXytiZ8q1oEFTxPc5AiSDatWo3qczWF67uwi3WrPaqZjY%2B5GC5bL%2B8AZ8GNAK8G7973R3EfBXapdgYS3BegU1ibFY1Up58d8pU4a%2FFXN91mTCI8YhgQMCqAZEmrGf9fTDrq1du2OItAs2VX6wzdxMQESL4dM28BccqZjRAoBRAMxUjS1%2FtzsbGCvjvb3bEFAKVi7FG2e%2Bg5Lzdl6a8ytpd0xNfVXZAnh6AesEdybPr40klxVufET0K7BjKi9rrj5%2BxHgjabGdzyVWg0nFFYmmGUu0qykbNu550arQQMc%2F2pxjUIoRs46LTPlg%2BiValUeDfmtKV4vCuoiEHxD%2BrVs1FFUb2Pwl4XWJsAgFUCKv42Vnsl9latk0K0YbApWeNsF70x1eRuIGr0NUTi24r9r5Mnn4TWtufoz3mPJOQTLtMS%2BZfgLWFH86N0IHKcCecZhry3A2qlEowQ%2F3zeHLnXxr%2BQ0utYeJBz5STK1Tvz%2F6NF6Z2vHrptLVVOJ6j6TSI28FAwTjDbrL2%2FBjqkASoMZvhy6acQ2HYjumKw7Ld1uP%2FSsyhGKcnqNo3alcaC1zlxWbUDemkCXjYY8RIDq7W7ds0ndOIevAVIZIKxHeGCIxi53aKKuXB7ndl725ngzu20jsc1J5zh8kW4o8z5Ts36RqwJIkBxSWiQJ1MeKj4qhFfN23x1rqHkVu3OgEUb8KLrUZn79TDlrdTSzlRoTuppnuMn8ccNkSWekPVcQedDmqZJ&X-Amz-Signature=1c30ccf3df0325863f9097ce7f000898fd9b8690df1f9cba3159cd5c272ff3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
