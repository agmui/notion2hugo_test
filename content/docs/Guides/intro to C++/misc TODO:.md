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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZXE7KI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmDZ8uIgveQ8zdMmyo3nvrSpAHwnSJEVii4cj5RTaxFAiEAoXQXOT9Hv6n2%2FmxGySc5zhZDV8x%2FA25Xc46%2BAd2hjUoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv3%2B77YoDIfYhb0syrcA7lpn1BqduLWWDUkrcFcYdAPxlZfwpiKOmO6W615MBJVzUx5wZmUcC1Xu37%2BazCh38%2FRytJCDZdagwEwT%2BUaq%2B0yrYMBNndKa4UGnOlopubCEA%2FSgq2eXx3Pzg6C8FiJ5M8T0lByRzxn4KXbcvR72AvTP2ykXTS7IWW5nNA1BVhiiOea709PB1mfYKMDL9hM3eym%2F%2Bbnj97FmOb%2Bn7eoYqqhPsaaHDGQPBm4TVtT9Qg%2Bl2vKePUnT5fPv1YNT4ZgvzMDmMNjhlL3DpbdpoYAG9tsidEVqO9o%2Bjw%2FVHtW61YrlNtLNTc5CIDTkWcvCxIHDsyMZQTBjWu%2FXtXALajRLpY5a4cMvnEfGrjT4IP2g%2Biyk7uurM4Dib1DB6XiB8lQ46k21k94unBD9GaHwR9hBaR7iBgHIwbuUj6yrF1JdRVQrui9CYOudMNKrGfDAgRgmRqDnW10vmes25p3wzx4WaU6EXcnPzEmvcNNQHz09ze3LM3ICgd%2F3epjjPDosTqfQvIPglfVt9BLXlv1yj%2B%2BqWXRkESWk8f1aRSdgRXlE0SWtYnosokRYQIfPT3WzmB9io9YwoEt7p8AujDE2UiEGuRXObjP0bb1kQ09%2FX%2FRd%2Bh2PkRyX5FNiLfPFcvGMJnph8MGOqUBszK4tMRl9Twc0flsZ48ucZA1VZvI7r%2Fgs9DfxWGeNMIFoFdtSxOFGqF9YXA9PxOMRtik3aJKTMuOgOKfjBkpkNR5OUfbSSYxkk%2BCLtqIby%2BKlmyAGSMKl%2FHA%2FW7Jp1VNu5UAXNQu%2F94R4WjuNQhyVhvnKnpVDOK%2BPuTUmJ7Yj0x6vMYDTTQALpU7P%2BT7RnTe2fKRpPKu6sF6n%2FZbKLa%2FW38mVEKj&X-Amz-Signature=9ff2918f9e2796f7b1514fd1649ba12d8bd11aed807780b522d5b9a584dfe79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZXE7KI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmDZ8uIgveQ8zdMmyo3nvrSpAHwnSJEVii4cj5RTaxFAiEAoXQXOT9Hv6n2%2FmxGySc5zhZDV8x%2FA25Xc46%2BAd2hjUoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBv3%2B77YoDIfYhb0syrcA7lpn1BqduLWWDUkrcFcYdAPxlZfwpiKOmO6W615MBJVzUx5wZmUcC1Xu37%2BazCh38%2FRytJCDZdagwEwT%2BUaq%2B0yrYMBNndKa4UGnOlopubCEA%2FSgq2eXx3Pzg6C8FiJ5M8T0lByRzxn4KXbcvR72AvTP2ykXTS7IWW5nNA1BVhiiOea709PB1mfYKMDL9hM3eym%2F%2Bbnj97FmOb%2Bn7eoYqqhPsaaHDGQPBm4TVtT9Qg%2Bl2vKePUnT5fPv1YNT4ZgvzMDmMNjhlL3DpbdpoYAG9tsidEVqO9o%2Bjw%2FVHtW61YrlNtLNTc5CIDTkWcvCxIHDsyMZQTBjWu%2FXtXALajRLpY5a4cMvnEfGrjT4IP2g%2Biyk7uurM4Dib1DB6XiB8lQ46k21k94unBD9GaHwR9hBaR7iBgHIwbuUj6yrF1JdRVQrui9CYOudMNKrGfDAgRgmRqDnW10vmes25p3wzx4WaU6EXcnPzEmvcNNQHz09ze3LM3ICgd%2F3epjjPDosTqfQvIPglfVt9BLXlv1yj%2B%2BqWXRkESWk8f1aRSdgRXlE0SWtYnosokRYQIfPT3WzmB9io9YwoEt7p8AujDE2UiEGuRXObjP0bb1kQ09%2FX%2FRd%2Bh2PkRyX5FNiLfPFcvGMJnph8MGOqUBszK4tMRl9Twc0flsZ48ucZA1VZvI7r%2Fgs9DfxWGeNMIFoFdtSxOFGqF9YXA9PxOMRtik3aJKTMuOgOKfjBkpkNR5OUfbSSYxkk%2BCLtqIby%2BKlmyAGSMKl%2FHA%2FW7Jp1VNu5UAXNQu%2F94R4WjuNQhyVhvnKnpVDOK%2BPuTUmJ7Yj0x6vMYDTTQALpU7P%2BT7RnTe2fKRpPKu6sF6n%2FZbKLa%2FW38mVEKj&X-Amz-Signature=2eb471b03ee81bb3d8d13ad60705213f8f5571c05165d89bde1f80b5ed5dce31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
