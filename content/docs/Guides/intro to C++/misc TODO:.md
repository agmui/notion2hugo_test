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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPZQVO5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsDwiJJTuJHhdaVytWB3fvGbfvU0zhPMt2BfYsFrs4aAiALWCk0kiuxO0nhTE6HgmygBpz8NfmHhvdVSPCSyTlIFSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5qQJnxCkXJYk373rKtwDmeLv1SsxayaP5z2hv6rK8uSbMw56eYsu5xdOC3Hpx7cNiiRGTardkEHPof2YnBXv3tMHk9e2N30ii0BdXkl6R%2FKCFDjyT8jhyzGK0HGDF8WdaUSf%2BseOZc8xEmwGmrabe7H8sDVto6%2FTJ1EdvBTmA5CNPwn8ZuAHZmCPckO7P9aHkfqB0gVs98UAZ%2BU28XLrklXZX%2BPjDqs87bJeDt4RZsmvJHFcTpNKmjvnvrAy0kVKDq0HZI2K6qQ4dkdNIIcdHQybppqPk9Z6cWLNvNg%2FK%2BbV9sjgU%2BgFxbVOGbfwCJdNGXa1n8cTlG7ou8qaJuW1KoyGfKPfb%2FxROx%2FePmI224XIBmJfDHwErd5Ru0WaJhigNAjGzg0LkrVEfdVooaiBGzFZUDs4BDaaXob9axEkLPiaby4xW%2B4h2AbWRZtQeWPhjyY55Mi1RWFVvjwOVsUDrEW9sOBFEfGpZLguKmAq8KzpbBY6wp%2BOFCDZpAW3Evg6Y4doHgghgmAK0GITQwIYO15GwTSkPgeI8G4RcGUoCyqXLtYtdUOT8oPxm7Qjw8eqZnHHR0q7M7YgCQJ0iXFlRxcBqKhTJ8MnlDhIe7oyU0KcldkoU1Sj5JLZkMCAg39COs8taePugzOWk%2FgwyL2ovQY6pgH1rwahTQrzcpzYI7Xr4sP%2FF%2FluI8SgMGde7OjI06YgJUD%2BD4v5yrWwYRMYm94o8GbUsT5MdiPhlLpSrVd5KTNk5BzcBYm9XiRRtYdPsI%2FijnEDM%2FY8vEAtMGiKOGGsdHqc1vhToFk%2F0AGhqF2uqa034oqA3U3276WhWTAICpOQFVq9MC%2FEhR9vRYFe15h0Ngp864wy2gpDcQ1NydoLVOM1v440lQWG&X-Amz-Signature=67b0160b9378590a9534c51a0e8e0b08661c635954e2017a6666ccdb710bb910&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPZQVO5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsDwiJJTuJHhdaVytWB3fvGbfvU0zhPMt2BfYsFrs4aAiALWCk0kiuxO0nhTE6HgmygBpz8NfmHhvdVSPCSyTlIFSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5qQJnxCkXJYk373rKtwDmeLv1SsxayaP5z2hv6rK8uSbMw56eYsu5xdOC3Hpx7cNiiRGTardkEHPof2YnBXv3tMHk9e2N30ii0BdXkl6R%2FKCFDjyT8jhyzGK0HGDF8WdaUSf%2BseOZc8xEmwGmrabe7H8sDVto6%2FTJ1EdvBTmA5CNPwn8ZuAHZmCPckO7P9aHkfqB0gVs98UAZ%2BU28XLrklXZX%2BPjDqs87bJeDt4RZsmvJHFcTpNKmjvnvrAy0kVKDq0HZI2K6qQ4dkdNIIcdHQybppqPk9Z6cWLNvNg%2FK%2BbV9sjgU%2BgFxbVOGbfwCJdNGXa1n8cTlG7ou8qaJuW1KoyGfKPfb%2FxROx%2FePmI224XIBmJfDHwErd5Ru0WaJhigNAjGzg0LkrVEfdVooaiBGzFZUDs4BDaaXob9axEkLPiaby4xW%2B4h2AbWRZtQeWPhjyY55Mi1RWFVvjwOVsUDrEW9sOBFEfGpZLguKmAq8KzpbBY6wp%2BOFCDZpAW3Evg6Y4doHgghgmAK0GITQwIYO15GwTSkPgeI8G4RcGUoCyqXLtYtdUOT8oPxm7Qjw8eqZnHHR0q7M7YgCQJ0iXFlRxcBqKhTJ8MnlDhIe7oyU0KcldkoU1Sj5JLZkMCAg39COs8taePugzOWk%2FgwyL2ovQY6pgH1rwahTQrzcpzYI7Xr4sP%2FF%2FluI8SgMGde7OjI06YgJUD%2BD4v5yrWwYRMYm94o8GbUsT5MdiPhlLpSrVd5KTNk5BzcBYm9XiRRtYdPsI%2FijnEDM%2FY8vEAtMGiKOGGsdHqc1vhToFk%2F0AGhqF2uqa034oqA3U3276WhWTAICpOQFVq9MC%2FEhR9vRYFe15h0Ngp864wy2gpDcQ1NydoLVOM1v440lQWG&X-Amz-Signature=97b4339d7ae78493e52f0a209acc135a7707db8e39884057bb5fecbfd7c95b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
