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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7QXCSC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCYFZKjeQNJ6I4BZjHNezjAgyJEQLXelAJqRVnghCpmKgIgBuRXZ99ueT18plrehV7WAmhRhJDghIj93mOqHU7poeoq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFBpHLAFK86O0yg1cyrcAw5RAUQsAaFEEo2BG6Z9jkEYYCgE0hGSCSn6Fvb0m1inXEb%2F11BWIs0vVPY2ior2MIc7Hb5%2BeL1GndviuWZDx7odO81%2Fh0k9ECfzpq0%2F%2BfvEAhI1zfpYk5UJPj0uCA8J3supFAHIx5lXWr720p%2F%2FGIjOS1ebdGzD5uHaRZm1aZvk7xAtSzlU%2Fq6sjcFcdnmYmthxF4R7jjDdTHxIznN%2FWvsYKCtKzcyzBjc66X0OyNExIgyRQglS030hadb7c8pMwEo165pda7kv9qQyhhX90omzXS7jU%2FYXWx13Tteq5d7wvZc0qs31IJ%2FKtcI1rmzW543nqpnwaFfYSwIbOlB1RRqUrMmr2bx%2B5s9dsCdsgvknYK00vQXUeMPq%2FII3t00bbWgJwkP9cJbNQrj8KCDOyl%2BdjLgWsbHTUXguZmI3%2BcH3RIYxwk1gEeEBOd8qkUIyxoVm2JyQUsr8Yng8whDYGZZyIfykxdxCtpp3Byk%2FHAwPSH167vFid6z5WQ8nF%2F5O0wZzkEm0CWrq7jGz47Vtqt8m3zm905kHj%2BCI57nTKgDgeEjCpWlGiYigykF3WEd4nnBtDgJaWb086BCLrb2J%2FiA0zvmtOpqoNHYbp9tP6KYHmKK3gGA6MoZdiHI6MNXTkcEGOqUBRhheSIbHCo1RhiPRFeb1oXLPuvg1%2FZ%2BuN8hLoZ%2F1QqbQO3XDUN0QLm%2FjDDjarGuRWet%2FcGD%2F7sgSc75pxON7M5VqLweCTWSwiO8Go5mS5jG%2FjgLB6FIW%2FKP8nI0Uwbak3eVNH%2BikXFca8bJRv4HnUYqaroVTS5acMT35v0bLfC7SzxTKejjnUArdaD2bpk2tmuOaeV1WmHexZRtp96H2NGe7%2BOB6&X-Amz-Signature=9ad819580424292ab6fac48ca9d6ee73f9099e152200d5c180d68aa762f9c960&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7QXCSC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCYFZKjeQNJ6I4BZjHNezjAgyJEQLXelAJqRVnghCpmKgIgBuRXZ99ueT18plrehV7WAmhRhJDghIj93mOqHU7poeoq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFBpHLAFK86O0yg1cyrcAw5RAUQsAaFEEo2BG6Z9jkEYYCgE0hGSCSn6Fvb0m1inXEb%2F11BWIs0vVPY2ior2MIc7Hb5%2BeL1GndviuWZDx7odO81%2Fh0k9ECfzpq0%2F%2BfvEAhI1zfpYk5UJPj0uCA8J3supFAHIx5lXWr720p%2F%2FGIjOS1ebdGzD5uHaRZm1aZvk7xAtSzlU%2Fq6sjcFcdnmYmthxF4R7jjDdTHxIznN%2FWvsYKCtKzcyzBjc66X0OyNExIgyRQglS030hadb7c8pMwEo165pda7kv9qQyhhX90omzXS7jU%2FYXWx13Tteq5d7wvZc0qs31IJ%2FKtcI1rmzW543nqpnwaFfYSwIbOlB1RRqUrMmr2bx%2B5s9dsCdsgvknYK00vQXUeMPq%2FII3t00bbWgJwkP9cJbNQrj8KCDOyl%2BdjLgWsbHTUXguZmI3%2BcH3RIYxwk1gEeEBOd8qkUIyxoVm2JyQUsr8Yng8whDYGZZyIfykxdxCtpp3Byk%2FHAwPSH167vFid6z5WQ8nF%2F5O0wZzkEm0CWrq7jGz47Vtqt8m3zm905kHj%2BCI57nTKgDgeEjCpWlGiYigykF3WEd4nnBtDgJaWb086BCLrb2J%2FiA0zvmtOpqoNHYbp9tP6KYHmKK3gGA6MoZdiHI6MNXTkcEGOqUBRhheSIbHCo1RhiPRFeb1oXLPuvg1%2FZ%2BuN8hLoZ%2F1QqbQO3XDUN0QLm%2FjDDjarGuRWet%2FcGD%2F7sgSc75pxON7M5VqLweCTWSwiO8Go5mS5jG%2FjgLB6FIW%2FKP8nI0Uwbak3eVNH%2BikXFca8bJRv4HnUYqaroVTS5acMT35v0bLfC7SzxTKejjnUArdaD2bpk2tmuOaeV1WmHexZRtp96H2NGe7%2BOB6&X-Amz-Signature=0f16f243fe19079ca4282e4074382d06a8d5e5e74fa62f3338eb7f0ec5dc3115&X-Amz-SignedHeaders=host&x-id=GetObject)

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
