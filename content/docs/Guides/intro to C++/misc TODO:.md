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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZWTK34%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDND7zrjb6ANHV5r%2BMKMtfPQ53br4rxfdlac7sq5V1ItAiB2vUDrhiTOecKd7B%2BPvd7hFSyZvD70K4u5Xus2nevoWyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMimFqGZGWHfNktYxAKtwDkpnoaLkKRHMK9xK7SWXWr2KXD73ryQ4mbEWLNjQoMmEd3xi3CMVPzQzjnZVEsoopM04948Sr1TPpvriPYhalMh6NrhNLKITEU8L5iWtWdVrncqBB5rnZGvflwD%2BVsj3T%2F2i5A3D9lDuG7AK7WBwYYyk4SVZz1bJo1Z2ntw0QhbZl9tS11HdkTG%2Fh4qFXl%2Fd1YpQ1qL9dnZAtayeHPo6BAjlG4yyr35jj5vx9Sv8uKUmdng0zBsSe7SnNaQJOE6eCEL%2F4GflBYfcX0QXlG8zV7j4eB1fmZ4uR4PwF8ulYGIZz3SOt%2BmR8yQwscicn3Z2j582O5UmWMd3h58exJo9G7Pd1VQiIpJNu7zz3xkRfinyUy1BIc%2FL5kF7iz5Zoi%2FBaR8mgzTsZRjA0Ynk9wYQtrNTZIVfwyh%2Fzc4wKCj2FvPR4Ebn6mBd6WFikaXG4cY6S7%2BdP0uEmOtHC230oyWNdaPmW%2FCBEY3rz5douLWLH6MLZ%2Bb0fEZw9%2BYDpO2FSMTRNR1JbMZQec3Vln1GjD0nVu5%2FqyNSTriAWVm4wucGZTAcB9zqJuDswfn6dIWgVqh2jHK1kRmGwu5MVD%2FiblaIXxO4dByd5K8PS%2BuxcqEpJHD0KC68ij2wKt9b6HHIwtrGswQY6pgF9Q3WFqe2TGSo0wEXFiOK6BHi05YUWNHbgKt436%2BFsFn3vBbrEH%2B47iyYsxVauwpiHKdo0vMSm9vNI9oc%2BtGRMvYC1dKcLgOaDad3R%2FUcmx7D1wTEi1qcEf8XOV6F1iA4WZvp%2FIW2tPnnlbD6gADqi%2B00U1Fl2xwjsiVVce0KSSjmp%2FgIMdS3uJd0aM%2B90SAr8HLnYvuFeZ7sHfv9AIfkl2piKabBL&X-Amz-Signature=2ef6c7b13a63c715669640d90d40df26ddb1959c3d68e8157028214e090e1330&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZWTK34%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDND7zrjb6ANHV5r%2BMKMtfPQ53br4rxfdlac7sq5V1ItAiB2vUDrhiTOecKd7B%2BPvd7hFSyZvD70K4u5Xus2nevoWyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMimFqGZGWHfNktYxAKtwDkpnoaLkKRHMK9xK7SWXWr2KXD73ryQ4mbEWLNjQoMmEd3xi3CMVPzQzjnZVEsoopM04948Sr1TPpvriPYhalMh6NrhNLKITEU8L5iWtWdVrncqBB5rnZGvflwD%2BVsj3T%2F2i5A3D9lDuG7AK7WBwYYyk4SVZz1bJo1Z2ntw0QhbZl9tS11HdkTG%2Fh4qFXl%2Fd1YpQ1qL9dnZAtayeHPo6BAjlG4yyr35jj5vx9Sv8uKUmdng0zBsSe7SnNaQJOE6eCEL%2F4GflBYfcX0QXlG8zV7j4eB1fmZ4uR4PwF8ulYGIZz3SOt%2BmR8yQwscicn3Z2j582O5UmWMd3h58exJo9G7Pd1VQiIpJNu7zz3xkRfinyUy1BIc%2FL5kF7iz5Zoi%2FBaR8mgzTsZRjA0Ynk9wYQtrNTZIVfwyh%2Fzc4wKCj2FvPR4Ebn6mBd6WFikaXG4cY6S7%2BdP0uEmOtHC230oyWNdaPmW%2FCBEY3rz5douLWLH6MLZ%2Bb0fEZw9%2BYDpO2FSMTRNR1JbMZQec3Vln1GjD0nVu5%2FqyNSTriAWVm4wucGZTAcB9zqJuDswfn6dIWgVqh2jHK1kRmGwu5MVD%2FiblaIXxO4dByd5K8PS%2BuxcqEpJHD0KC68ij2wKt9b6HHIwtrGswQY6pgF9Q3WFqe2TGSo0wEXFiOK6BHi05YUWNHbgKt436%2BFsFn3vBbrEH%2B47iyYsxVauwpiHKdo0vMSm9vNI9oc%2BtGRMvYC1dKcLgOaDad3R%2FUcmx7D1wTEi1qcEf8XOV6F1iA4WZvp%2FIW2tPnnlbD6gADqi%2B00U1Fl2xwjsiVVce0KSSjmp%2FgIMdS3uJd0aM%2B90SAr8HLnYvuFeZ7sHfv9AIfkl2piKabBL&X-Amz-Signature=e3fd1089166f968bc4dff47ed6436aff4f0a0d237d0fe03fbccc359d63d4948e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
