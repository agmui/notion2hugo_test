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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKKZX7I%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD0YxiKH8AdwxnquOuvTgFZ1LNg2A1PkyQUDeH5coOUbQIhAO5W05ImWIrRdSLj0SVR4YQSj5%2FdrA7KhwjRjvgJecqNKv8DCC0QABoMNjM3NDIzMTgzODA1IgyQpkQr9YRpP5%2Fon2Yq3AMvPUNlnKWhjyM6%2F0ibgfJA5BjZi7QPivJvZmOm3jbzAB%2BThSt1IxbFZ0SjmcP5cQqLnXc1PE1p%2BIdnZZNolJlCo9JlQ02dscGoPDaAddu36fPCkawk8Rvo6xqrwcjR1t8UgJtqFggmfWZtnUHUjKhSPlH1FdEO3W6mQ68CVuHuFen66z89NIW37e%2Bzu6c4W4p8Pd0cPtctPiLttTOYmwbL%2BfgGdrh1uZNDlp00GFioc5hberpIw%2BpjdH5WT0kYXNwKDEuse2wBe4kHGkl5k2sawpTLh0gXcpqqXnNVYYMbzwQGHwrN9hCXg%2FqIzv6HKHXzyahW%2FWl7NbOWP7UFx71Rqj%2BT6Kb175mPqHc2hmCVqCvo0SOXw4bt1VK2csnRzf%2BCsLcN8xrp%2B0SXEksrHE%2BdJfvuirU9Ty9copzeZvwVAu4%2Fn2UU2GLJ3MDOqtVxb2%2Bvl8T28tfuA879KBo8oXrxulX3eJi%2Fbr7%2Fnc3V%2FfQbgFacEHKAS6dcaodhuehKLY9VRNLnCjzp6jZqyQibGOD7KFsMdSeD8kojvPmiq3pE4VypsJD93UCRj9BPeayni6VhswvdJa%2BPVdKd4YZlDaIX9Vt5OAFP%2Fy1fMGT3DesdbXm1LMPCTNbmgeW37TDBourCBjqkAdrYCdKNDiBowyzQJvCDOHhQbXQ2bXgm66JIPXRCbv5RVP8Xjjx7cGyC1TyT%2BfBFq%2BziQh0RaUeGTi4wVhQeAQp1uuf57KLRyyPSkyfWf8KSGxRiaL9SRYcd%2BmyQTgvbdmbDqvPidxMVdfM9VtpWnF%2Fz0bu9W1K%2F9XPa60vipZqrsrjTSuE485pwddgdKSECiczKzTqKXnjLMyvt2Q6Sfj5O9P7R&X-Amz-Signature=d4df219a98ae2b4d98557b18e73c438c46a858f237a705d1686b47a40125ab45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKKZX7I%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD0YxiKH8AdwxnquOuvTgFZ1LNg2A1PkyQUDeH5coOUbQIhAO5W05ImWIrRdSLj0SVR4YQSj5%2FdrA7KhwjRjvgJecqNKv8DCC0QABoMNjM3NDIzMTgzODA1IgyQpkQr9YRpP5%2Fon2Yq3AMvPUNlnKWhjyM6%2F0ibgfJA5BjZi7QPivJvZmOm3jbzAB%2BThSt1IxbFZ0SjmcP5cQqLnXc1PE1p%2BIdnZZNolJlCo9JlQ02dscGoPDaAddu36fPCkawk8Rvo6xqrwcjR1t8UgJtqFggmfWZtnUHUjKhSPlH1FdEO3W6mQ68CVuHuFen66z89NIW37e%2Bzu6c4W4p8Pd0cPtctPiLttTOYmwbL%2BfgGdrh1uZNDlp00GFioc5hberpIw%2BpjdH5WT0kYXNwKDEuse2wBe4kHGkl5k2sawpTLh0gXcpqqXnNVYYMbzwQGHwrN9hCXg%2FqIzv6HKHXzyahW%2FWl7NbOWP7UFx71Rqj%2BT6Kb175mPqHc2hmCVqCvo0SOXw4bt1VK2csnRzf%2BCsLcN8xrp%2B0SXEksrHE%2BdJfvuirU9Ty9copzeZvwVAu4%2Fn2UU2GLJ3MDOqtVxb2%2Bvl8T28tfuA879KBo8oXrxulX3eJi%2Fbr7%2Fnc3V%2FfQbgFacEHKAS6dcaodhuehKLY9VRNLnCjzp6jZqyQibGOD7KFsMdSeD8kojvPmiq3pE4VypsJD93UCRj9BPeayni6VhswvdJa%2BPVdKd4YZlDaIX9Vt5OAFP%2Fy1fMGT3DesdbXm1LMPCTNbmgeW37TDBourCBjqkAdrYCdKNDiBowyzQJvCDOHhQbXQ2bXgm66JIPXRCbv5RVP8Xjjx7cGyC1TyT%2BfBFq%2BziQh0RaUeGTi4wVhQeAQp1uuf57KLRyyPSkyfWf8KSGxRiaL9SRYcd%2BmyQTgvbdmbDqvPidxMVdfM9VtpWnF%2Fz0bu9W1K%2F9XPa60vipZqrsrjTSuE485pwddgdKSECiczKzTqKXnjLMyvt2Q6Sfj5O9P7R&X-Amz-Signature=b14d327e4d0c9e0d7db11d627b67ff0b335eb8631a4f0f782385def06183e18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
