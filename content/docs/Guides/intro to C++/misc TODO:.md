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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QACFZN3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3i3JI1drn7yyuKhx%2Bxu3XS3o0txM95k7Eg2h5dqx3ZAiEA5iBPkhPAjDuK0AKdHf5UOb0DwY%2BejopVXcpsii%2Bq5LAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7mhhTwsXad6EiQFCrcA2Ee7G7d%2B6tgwG2F26wZUykLfLQ%2FwpbrE4s1mXyMTyjyH7kmX4BsGgJ6x4haWoZEBebPHuLgpQatUpJka%2BIn%2FEqmTfoaH76dQA2lWyUf0vAD4JvvLdvPRHSdyhcQqJ%2Bvhed3Ws4HLmu5nxWbbbkrXR289YibEUSOcRaa3msdoEbqeZYycaQvWirZfxYd49uFFEENKLM%2BrgqpPEW3WWqPf%2B%2FcrEOPadjSc6no8QmPOoIo7MHpS1FADAWqDd0VZ1Hhj6AhvuVgQXTNDUiIizJsMZDe7BmUi4uncurOaXeSaSPrhfJlNHEPJR%2FMNgbHdt300vnenkAA%2B7CD69RcV7RbgYRQWu0yqX4RhjB71U9vEQjaDHpujFbtTCvSf9CbTfiAwtCVB%2BKL2DIVbJTyt5Qo4tkYCGBDXtDya4XPx3zakLlWJmcRMvHOzkLYDwmDY4RNDOlolairg7rZnp70Bv5WagUuzI1PPdqwQfQ6DyYnWMDdjDBCFptVy1xi4fMTNsPunlPuNW6AvlzLCBfZ5rysgueabTsFPyYOqy9d6J00Md4VSdcsrJeQ6xUhpP9sVr%2Bfa7spLqVa%2BFeLulJkGu4KJmN1H0I2e1FqjQM83vy1oxO85aKAujQCHqEh6w4KMNzX270GOqUBTerumoAT%2BAMwO112NEVgCGRYE217eEKDXnaOIM526K5cMdeIpRex%2Fv4QFOjIPlRWGjMHmKY3mSlYMRzsH39xgmu0YMW%2BM7zZ1kNnCS4Lxruz%2BldiImqCFdID7DCB8c5dCd9lunC7iondYRCDezgyiXO1ETx8VEcfUUmi5Ov4ZmvrDrVPx2%2F7nOmeD88Z0rieMKXmhWZTq1Yu0b3pXprkLe16TrH7&X-Amz-Signature=342b0896b6b1f62a3741c416a48a43b8fbc1f321156e8a36205e1b29f53a8b89&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QACFZN3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3i3JI1drn7yyuKhx%2Bxu3XS3o0txM95k7Eg2h5dqx3ZAiEA5iBPkhPAjDuK0AKdHf5UOb0DwY%2BejopVXcpsii%2Bq5LAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7mhhTwsXad6EiQFCrcA2Ee7G7d%2B6tgwG2F26wZUykLfLQ%2FwpbrE4s1mXyMTyjyH7kmX4BsGgJ6x4haWoZEBebPHuLgpQatUpJka%2BIn%2FEqmTfoaH76dQA2lWyUf0vAD4JvvLdvPRHSdyhcQqJ%2Bvhed3Ws4HLmu5nxWbbbkrXR289YibEUSOcRaa3msdoEbqeZYycaQvWirZfxYd49uFFEENKLM%2BrgqpPEW3WWqPf%2B%2FcrEOPadjSc6no8QmPOoIo7MHpS1FADAWqDd0VZ1Hhj6AhvuVgQXTNDUiIizJsMZDe7BmUi4uncurOaXeSaSPrhfJlNHEPJR%2FMNgbHdt300vnenkAA%2B7CD69RcV7RbgYRQWu0yqX4RhjB71U9vEQjaDHpujFbtTCvSf9CbTfiAwtCVB%2BKL2DIVbJTyt5Qo4tkYCGBDXtDya4XPx3zakLlWJmcRMvHOzkLYDwmDY4RNDOlolairg7rZnp70Bv5WagUuzI1PPdqwQfQ6DyYnWMDdjDBCFptVy1xi4fMTNsPunlPuNW6AvlzLCBfZ5rysgueabTsFPyYOqy9d6J00Md4VSdcsrJeQ6xUhpP9sVr%2Bfa7spLqVa%2BFeLulJkGu4KJmN1H0I2e1FqjQM83vy1oxO85aKAujQCHqEh6w4KMNzX270GOqUBTerumoAT%2BAMwO112NEVgCGRYE217eEKDXnaOIM526K5cMdeIpRex%2Fv4QFOjIPlRWGjMHmKY3mSlYMRzsH39xgmu0YMW%2BM7zZ1kNnCS4Lxruz%2BldiImqCFdID7DCB8c5dCd9lunC7iondYRCDezgyiXO1ETx8VEcfUUmi5Ov4ZmvrDrVPx2%2F7nOmeD88Z0rieMKXmhWZTq1Yu0b3pXprkLe16TrH7&X-Amz-Signature=0ca5904215de29b7ae55810e0a36bb20d7e7d100a75eab290cb72c4d315bec00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
