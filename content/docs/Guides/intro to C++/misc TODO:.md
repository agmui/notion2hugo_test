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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI235MTH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPswXA3KiYzDu7yNXWdqY%2Fd%2FR2XVciOpKtZ7hjSDfsGAiEAon7dflVY0jWIkD3wfKBVdRf6TTcObNPKFFyNuvgaEgYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHyodT6PLcCWhZERgircA1PZeUiaLxbCiMaZm%2BZEcFAMWffhs07nQXouvOWZPgYNHQDNfH6U4yiTcmCZ63toqaVQdUGXLKbC1lNStzrWIj894pGZeTSZI%2F54wlK2vPC1yLsgmiUA5u9vUcdSlwqer9iPeOcRnkQCXJ1rB7tABhll%2FO0rJzIpiFQ9A6JYneX9kfMfz1L2o4AJyK2yb%2BfxSx4S4uRa5srimLaMg5Pk0Y3bXYUpGXc9XAR1EHNixYlb%2BG2KsCpT%2FNretzf7eb3q5rvuXLtYLU9b%2BhUeJyQwsmQ3JqP6PeN3erHAFt%2Fa8ywhFJgBOyijw5feOOjo4T8ZJbFxPBQgBFwzCAA21DrsGPoSOuHKKxQGZxCGnvqcRSkfM7fAzXEZ7CX1yHioA1iEL%2FtuK0hj6B9BXdtFMz1ulpO%2BpYDYoSnYri%2BUjgMtjEUsBFCUI7rbeK30o9gBd6gnQBjtoGT4i9y6smrMSve4bH%2FjnO%2FPRsEBpBq1GEDYlzvnlUVenk2GsuZ1FPIFgLnVVpZ%2Bvtf0hynWJSE09rd6aLN%2FiEMKn9FAdUS8jgf6bd7QJVpmaIEoWwgRrpaG1fkrTprm0L%2B6kMce7ov9d%2FC%2FqQ7EX70TOTQNXitw9MWDezM84VLT3zv%2F39mVdOfdMP%2Fo670GOqUBK1Iy9znnrpmgi0jS%2Br2TKBN9pAmskvxJdND4uKQ7HiNeGt1D8Un0ExNSqF0CsPbc3hj4nLaiWbScxD5yHYduGFxkXnNiEXZzcbgj3QxJPPGdGIMDQbRMOfT1HHzbjf1gbq5pb%2Bcv1Uf9khrrC%2BAFKCZc%2FjfnU3pcRj2rwUQznLaq8JkE8G%2F5NAL2ncds49zv3lNNf8ses5qP0l2YIo%2FYna7nxRQa&X-Amz-Signature=840cd2412cc8710c66183f4e0ea5a9e1a45aa9b0b836492948d95769cbd6adfc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI235MTH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPswXA3KiYzDu7yNXWdqY%2Fd%2FR2XVciOpKtZ7hjSDfsGAiEAon7dflVY0jWIkD3wfKBVdRf6TTcObNPKFFyNuvgaEgYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHyodT6PLcCWhZERgircA1PZeUiaLxbCiMaZm%2BZEcFAMWffhs07nQXouvOWZPgYNHQDNfH6U4yiTcmCZ63toqaVQdUGXLKbC1lNStzrWIj894pGZeTSZI%2F54wlK2vPC1yLsgmiUA5u9vUcdSlwqer9iPeOcRnkQCXJ1rB7tABhll%2FO0rJzIpiFQ9A6JYneX9kfMfz1L2o4AJyK2yb%2BfxSx4S4uRa5srimLaMg5Pk0Y3bXYUpGXc9XAR1EHNixYlb%2BG2KsCpT%2FNretzf7eb3q5rvuXLtYLU9b%2BhUeJyQwsmQ3JqP6PeN3erHAFt%2Fa8ywhFJgBOyijw5feOOjo4T8ZJbFxPBQgBFwzCAA21DrsGPoSOuHKKxQGZxCGnvqcRSkfM7fAzXEZ7CX1yHioA1iEL%2FtuK0hj6B9BXdtFMz1ulpO%2BpYDYoSnYri%2BUjgMtjEUsBFCUI7rbeK30o9gBd6gnQBjtoGT4i9y6smrMSve4bH%2FjnO%2FPRsEBpBq1GEDYlzvnlUVenk2GsuZ1FPIFgLnVVpZ%2Bvtf0hynWJSE09rd6aLN%2FiEMKn9FAdUS8jgf6bd7QJVpmaIEoWwgRrpaG1fkrTprm0L%2B6kMce7ov9d%2FC%2FqQ7EX70TOTQNXitw9MWDezM84VLT3zv%2F39mVdOfdMP%2Fo670GOqUBK1Iy9znnrpmgi0jS%2Br2TKBN9pAmskvxJdND4uKQ7HiNeGt1D8Un0ExNSqF0CsPbc3hj4nLaiWbScxD5yHYduGFxkXnNiEXZzcbgj3QxJPPGdGIMDQbRMOfT1HHzbjf1gbq5pb%2Bcv1Uf9khrrC%2BAFKCZc%2FjfnU3pcRj2rwUQznLaq8JkE8G%2F5NAL2ncds49zv3lNNf8ses5qP0l2YIo%2FYna7nxRQa&X-Amz-Signature=53331a5d9c2d8adc7ef4a3b99111970430f6115f035e7b5a8d5ed00aa4219110&X-Amz-SignedHeaders=host&x-id=GetObject)

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
