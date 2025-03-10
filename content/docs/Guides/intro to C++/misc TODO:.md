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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3B3YDPD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHpOQD9GKDVuZ0%2FKLfaLnnfNJwdRtTIQmuwpQbVXKPQhAiEA%2BTymgtrjoS7JyF3V2lkJdpjfoAYcOzgpiSTz1VARuEkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3wvWCro2COZeWpGSrcA21V%2BwPBPuudZtiiKR21lYXWSOPeUVCaE6LM6ZHaIHxkWO27pkFliVoHzwzhe%2F3yN%2BWV5O0BbqKnJ71AxErlMvXtvHabaTloAMEUcqRhw%2BiqETewskMeeCxxinLB%2FvqCAWXEALzXGPMetC9pt3ydqhvxVF1vln3htbT69wjAmxg9v5WxuoYAb20utt2%2FDCdua9wawL9Cwjl36dD4lHrs%2BJDqoKxM3p3gQh2UAXHD7JOVmDkXef3R4n4jduLTcTNL%2FgCGAm0MLlmz8JR6dniiCrg2jYu3cxislfIvMFFHkLQPU99Ew6YlH6RHTFbpRvGW3mYJLIthw2tT5%2BZ9dyFEkysp%2FEv6%2F13ApN7fRTyvARkTlzVsUap6Cu96hTd9N%2Bp7CyYmQ9vjXTaOF5NB95aESP%2B5PZA2M68ndNK1qoc6DW48mEsl3bMBwh%2BkK6MSeBw1XbP9HvmI62Z5euDc%2Bkey18fZ1FokZzyw5EjetRAK6jyn2EgNWzvpC8tgw3LfAhG7PTWldP2vL99k9NN9mRV3EDjgCaXdZ1CZiqNH7pcUd4DTR%2BGUSsubSv5wWPeL2gmYJ%2ByNrYlwgbaGuXnfVlqw%2Fj6xsCZWN4FCBoFAnhwj14RSWX6lBbez2f2qEEoxMOTJu74GOqUBGfq564mwLGrCSfpP3k2HHrEbnGkCe%2Fklwo6qOeR%2FQp0L%2Fp3uLpfMfmYo5l8TkPqaaxvZp%2FIo%2FnnXdHBrdkTFbdiTUSxhO0%2Fz1rOQgI2XU3A9kk3Exhe6A6KhpNsv7Uqct6f4%2F7VBgUYFs42osKXjpTk9j838tppFUJ3vyN9p67vgl7V70ETzjtOVuimy4UVCzDFlbWEfpek2cQBdLsap%2B3BebW0s&X-Amz-Signature=97e63dbbcdb4015e02df36492d77010dd4fb6579a72258a891fa582ad8351b61&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3B3YDPD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHpOQD9GKDVuZ0%2FKLfaLnnfNJwdRtTIQmuwpQbVXKPQhAiEA%2BTymgtrjoS7JyF3V2lkJdpjfoAYcOzgpiSTz1VARuEkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3wvWCro2COZeWpGSrcA21V%2BwPBPuudZtiiKR21lYXWSOPeUVCaE6LM6ZHaIHxkWO27pkFliVoHzwzhe%2F3yN%2BWV5O0BbqKnJ71AxErlMvXtvHabaTloAMEUcqRhw%2BiqETewskMeeCxxinLB%2FvqCAWXEALzXGPMetC9pt3ydqhvxVF1vln3htbT69wjAmxg9v5WxuoYAb20utt2%2FDCdua9wawL9Cwjl36dD4lHrs%2BJDqoKxM3p3gQh2UAXHD7JOVmDkXef3R4n4jduLTcTNL%2FgCGAm0MLlmz8JR6dniiCrg2jYu3cxislfIvMFFHkLQPU99Ew6YlH6RHTFbpRvGW3mYJLIthw2tT5%2BZ9dyFEkysp%2FEv6%2F13ApN7fRTyvARkTlzVsUap6Cu96hTd9N%2Bp7CyYmQ9vjXTaOF5NB95aESP%2B5PZA2M68ndNK1qoc6DW48mEsl3bMBwh%2BkK6MSeBw1XbP9HvmI62Z5euDc%2Bkey18fZ1FokZzyw5EjetRAK6jyn2EgNWzvpC8tgw3LfAhG7PTWldP2vL99k9NN9mRV3EDjgCaXdZ1CZiqNH7pcUd4DTR%2BGUSsubSv5wWPeL2gmYJ%2ByNrYlwgbaGuXnfVlqw%2Fj6xsCZWN4FCBoFAnhwj14RSWX6lBbez2f2qEEoxMOTJu74GOqUBGfq564mwLGrCSfpP3k2HHrEbnGkCe%2Fklwo6qOeR%2FQp0L%2Fp3uLpfMfmYo5l8TkPqaaxvZp%2FIo%2FnnXdHBrdkTFbdiTUSxhO0%2Fz1rOQgI2XU3A9kk3Exhe6A6KhpNsv7Uqct6f4%2F7VBgUYFs42osKXjpTk9j838tppFUJ3vyN9p67vgl7V70ETzjtOVuimy4UVCzDFlbWEfpek2cQBdLsap%2B3BebW0s&X-Amz-Signature=f4e072e44c3ce3431e618adb46596e143feec9806e5aeff4c8c0015553f88f37&X-Amz-SignedHeaders=host&x-id=GetObject)

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
