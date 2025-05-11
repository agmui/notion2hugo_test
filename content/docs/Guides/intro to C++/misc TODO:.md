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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WTX742T%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEOpRRNUlnMqkyOtmO9hlDalZCLsFtgORULHaFjiW21vAiA4SEfDTIJTZwaxj%2Ft8Lqp%2BwndlgDPCZfJuiWZTtQKxwyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsqNpe6k9RT2QIIYDKtwDhUbxH19S5HQ61%2F%2BkgxTr1tmDCvQ%2BkwVcUsIERtDsGQTFWYWsZ6Rleusz6jtUoVauHl%2F33%2Bc0oZZT0lC7szanR5Ab2GKNoTtalBX%2BsG4nj4tYirou8OZyOH4ULXQ3e7P%2BT4yIJH5klUCltATd22uogKKCWB7P2WdjLI%2Fq0QqI9kVmKXLQucZrQEV1apP1yYM6%2BknG47%2Bjp60fCybX3Rlx1NtpMHoDWCEeCyuKxzSG64lbLF3H5ITdVB9Pnyhcg8Fqt1MzMOqzsZXOB0ZV6RxcCL3g7mzQjFZSqezBY66w8AIOe5rtlqk%2B7gc%2F10n%2Fep4VKzOmh6m4PvPYPx3CC9X6YxeoAZ5Prnd4pZGd%2FgayIPUY6P2Uxez0kBu%2BGXHcVie31Hb6FNparX%2FHKDqI6Diduy5y3v%2BTbgQ5O4YvWLC5W%2Bk8F%2Fx6sLcX18WmqdgY6YwCxhyxQ%2BfaGeg8b7ukYUrH3wrr0Ret0vg6%2F0OemZRll0sq%2BWGL2Ja7zhu868n1Qf3cdZzhpHfL1jz%2BBTnUjXkVLNhFETLraU9tnIK9N8xJwuAchHFHCIxSMp3icTXAVE6iZl00O5Ca4QvRkAvf7ZrxIosf6TdHiukZDo%2BTX1SWXBn7eWEW1bU3TB%2FnJcswxtL%2FwAY6pgGHGy7cKcInB8%2B5VEW%2BpkyNoofeisQTcudQNJ%2B2R9k7o0meQD0G5S5uUitlI%2BB2%2Fx7pmqlRh4%2BI1wg1U0qaykZm5tZ0F7fGSaAbG2rp1R2rPwgtD6fOcUgQDmXTujbVyNjscf%2FBja74YrXOgV%2Bw6sf99h7SDEOTirqoEbdvwzJ%2FUL%2Fm%2BmGj%2Bso1Q4L5WVZRftpnnkN1XagL%2Fif1h2ZyBjs6TZW2Ak3E&X-Amz-Signature=d0a3edf189c2b7b449aa3fcd6d82ad24f380602e5465fb2101ac947e7e029a17&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WTX742T%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEOpRRNUlnMqkyOtmO9hlDalZCLsFtgORULHaFjiW21vAiA4SEfDTIJTZwaxj%2Ft8Lqp%2BwndlgDPCZfJuiWZTtQKxwyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsqNpe6k9RT2QIIYDKtwDhUbxH19S5HQ61%2F%2BkgxTr1tmDCvQ%2BkwVcUsIERtDsGQTFWYWsZ6Rleusz6jtUoVauHl%2F33%2Bc0oZZT0lC7szanR5Ab2GKNoTtalBX%2BsG4nj4tYirou8OZyOH4ULXQ3e7P%2BT4yIJH5klUCltATd22uogKKCWB7P2WdjLI%2Fq0QqI9kVmKXLQucZrQEV1apP1yYM6%2BknG47%2Bjp60fCybX3Rlx1NtpMHoDWCEeCyuKxzSG64lbLF3H5ITdVB9Pnyhcg8Fqt1MzMOqzsZXOB0ZV6RxcCL3g7mzQjFZSqezBY66w8AIOe5rtlqk%2B7gc%2F10n%2Fep4VKzOmh6m4PvPYPx3CC9X6YxeoAZ5Prnd4pZGd%2FgayIPUY6P2Uxez0kBu%2BGXHcVie31Hb6FNparX%2FHKDqI6Diduy5y3v%2BTbgQ5O4YvWLC5W%2Bk8F%2Fx6sLcX18WmqdgY6YwCxhyxQ%2BfaGeg8b7ukYUrH3wrr0Ret0vg6%2F0OemZRll0sq%2BWGL2Ja7zhu868n1Qf3cdZzhpHfL1jz%2BBTnUjXkVLNhFETLraU9tnIK9N8xJwuAchHFHCIxSMp3icTXAVE6iZl00O5Ca4QvRkAvf7ZrxIosf6TdHiukZDo%2BTX1SWXBn7eWEW1bU3TB%2FnJcswxtL%2FwAY6pgGHGy7cKcInB8%2B5VEW%2BpkyNoofeisQTcudQNJ%2B2R9k7o0meQD0G5S5uUitlI%2BB2%2Fx7pmqlRh4%2BI1wg1U0qaykZm5tZ0F7fGSaAbG2rp1R2rPwgtD6fOcUgQDmXTujbVyNjscf%2FBja74YrXOgV%2Bw6sf99h7SDEOTirqoEbdvwzJ%2FUL%2Fm%2BmGj%2Bso1Q4L5WVZRftpnnkN1XagL%2Fif1h2ZyBjs6TZW2Ak3E&X-Amz-Signature=66947f6ca7452d218a974f0f5a8e3d33b480fa32651ca6c4d7991452e8a3c0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
