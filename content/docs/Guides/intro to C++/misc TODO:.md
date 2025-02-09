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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORSFGJC%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmXDi8gOFTYY4CNe6VAvQBvUy4%2FaemBgQD4AfouYEHAAiEAp2P4q0xtfhuf19W5Tc670Mrz0oOBOE7c%2BrdzyZ83bUoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeLofWI5U3Z47l95yrcA12GVATi%2BVKiJ%2FYATPyOFn617OKpe9OJotNBhccXsK5PGtCr5JPjbqOuRIblfXpsawP7sI8HFMuzm8NsjYqMy7TOEb44zC3gd1lkRQxWyiP00aVhNXgWlV1YKdIjhQPx2KCOg4e2zB2Bu1XdXszw%2FgzqIjSAcwnlgDhZjP9PRByoMZ%2BUBgTIbdIXB4Iff4%2BzJqrOgKY5YRVARphnBlGv3XRYB3wttKtd9vw5o4IbnMfw%2B056Zl1cguBDRVXWQJWU64k0DdV%2Bd7Bt1XdSFT1Wzb3JfRiTkQfZKE595pjOjvH9k0T24ApoFDmZQIUoas9DF9aqgvke4eJ6oOIJ6hEGW1%2BDCSJ4HyzdtMFJvsbD9lLBWiSjtdRHwd8WuHPYltdZXrVrM1rpF%2Bvuq9e4GA4kPHLQAc2%2FrneDRU2Dhr5DiczA3KfNW6CBRmNKctHn%2F15gXHmltgMwdkeN0mV32Bu5g4uoBXD40fSregir5ZLgh2D3fytJF%2FAM16%2Fi2a9d8NL6SkZGngTFl%2FRMVoLEuQrw0ofTQY2PKYA7cvgZM%2F%2BvSDVBdD5FLkKNeLq7a%2FCEa5waVo3NfUoHGRUHonrn3BDUrEMVScqv1usvPHAZ631o29QjgHpnQUDzRjvjcV7gMPCDo70GOqUB6pQzWzlD1iRf1pEhhjLv58d1BsTzQNFRjPFwG2WNE7otFiI7eIlJ1bZUv4zGywFzHOp5EOs2JrXbYtnLFezIWFdGwtB2Hb34gwC6CLb3o9SL2mr8%2F9SzFVfnXof%2FAGj%2BBm%2Fx2EWRK%2BwVLhNeqpRnrG3NPevcFSikks9RjeP57DYhYlbvenm%2Bjp3a5oVMfHUriXjAwt06gSmwKPaTY0GjTYpk9dWT&X-Amz-Signature=2f178f80b619d11a74128245a2012f881e59e4c12ea84c65bf9b533db8f08860&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORSFGJC%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmXDi8gOFTYY4CNe6VAvQBvUy4%2FaemBgQD4AfouYEHAAiEAp2P4q0xtfhuf19W5Tc670Mrz0oOBOE7c%2BrdzyZ83bUoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeLofWI5U3Z47l95yrcA12GVATi%2BVKiJ%2FYATPyOFn617OKpe9OJotNBhccXsK5PGtCr5JPjbqOuRIblfXpsawP7sI8HFMuzm8NsjYqMy7TOEb44zC3gd1lkRQxWyiP00aVhNXgWlV1YKdIjhQPx2KCOg4e2zB2Bu1XdXszw%2FgzqIjSAcwnlgDhZjP9PRByoMZ%2BUBgTIbdIXB4Iff4%2BzJqrOgKY5YRVARphnBlGv3XRYB3wttKtd9vw5o4IbnMfw%2B056Zl1cguBDRVXWQJWU64k0DdV%2Bd7Bt1XdSFT1Wzb3JfRiTkQfZKE595pjOjvH9k0T24ApoFDmZQIUoas9DF9aqgvke4eJ6oOIJ6hEGW1%2BDCSJ4HyzdtMFJvsbD9lLBWiSjtdRHwd8WuHPYltdZXrVrM1rpF%2Bvuq9e4GA4kPHLQAc2%2FrneDRU2Dhr5DiczA3KfNW6CBRmNKctHn%2F15gXHmltgMwdkeN0mV32Bu5g4uoBXD40fSregir5ZLgh2D3fytJF%2FAM16%2Fi2a9d8NL6SkZGngTFl%2FRMVoLEuQrw0ofTQY2PKYA7cvgZM%2F%2BvSDVBdD5FLkKNeLq7a%2FCEa5waVo3NfUoHGRUHonrn3BDUrEMVScqv1usvPHAZ631o29QjgHpnQUDzRjvjcV7gMPCDo70GOqUB6pQzWzlD1iRf1pEhhjLv58d1BsTzQNFRjPFwG2WNE7otFiI7eIlJ1bZUv4zGywFzHOp5EOs2JrXbYtnLFezIWFdGwtB2Hb34gwC6CLb3o9SL2mr8%2F9SzFVfnXof%2FAGj%2BBm%2Fx2EWRK%2BwVLhNeqpRnrG3NPevcFSikks9RjeP57DYhYlbvenm%2Bjp3a5oVMfHUriXjAwt06gSmwKPaTY0GjTYpk9dWT&X-Amz-Signature=3d543ed4ed6841c5de5e746d233364e9789cea8a9812c75e16131b577d98ed08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
