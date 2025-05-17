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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5UKPS4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVYPRLTKk%2B2hrCGfxff%2BNgx31TxaIOqS1oj%2F7XRka8CQIhAN4nip50Vqq2mXC20H5khJkrw5nxjAAOA3oy9FR19Ky9Kv8DCGUQABoMNjM3NDIzMTgzODA1Igzzss0ZLOrVuZLBLjAq3AMaFAMZz%2FZiZp5c9ybCR9OhN%2BU%2B4zwArwgbGxD%2FNBnZPdYSFZsU2NHJ66bR4Kr11K9SngBGEK1wcW%2F5qFCpaabVcaOcOaaExni5jKeMYo0U3VavQJzUmsJyV1wt1XpKehxKAShXidI7iD4jGBhp58bMinzQwWT1IQCabrXWasOtNIX489F1USgr0rQVhz%2BiygreqsPgNd5Fs6xcDtosb2RLsc6rvZaYoppPnWYwasX6cL9S9cIUCQUIbx8j%2BwnRaIztMzU3NX8TWs5OQngtycsnxr%2BgMd7c%2BrG6%2BI2tXVlmQaC6H6952hkMT7AuB3%2FDOQOFADxvi60HWLUYNqZFkm658NodFyj7ZqunbRiRzH0vCGOpmhEPWmBAQ17ZyI%2FqxuL%2FBsuA07Ap9UnOUHBVdiGVgEWt6%2B5Jln%2FS8Y%2B0B9jaSckAqwrx3rldS6pYeXxGJhfdoueodhF3%2FD24oxXcrMoYI5VgRw0xSy7m3aAkkRrPDWPDh8wKcIHoAlji1%2BHeZ%2Bt3Wz8QYhOF30tZcyZE78ImG3AhfnVopDV42PxqreXMbk7Zdo2RiG%2BwsaSmyH0kRdtIEamU%2BOxsgdBvt%2FYSYKlTO0TtmGK8S9v6I8ITVAyUHNKPyadgCmv0vw%2F8SjCsy6PBBjqkAS9D7dFyJxuAo3sc0rlKF4Rxvs%2FAp42o09RCxUUTafOik0pWe63tifjTEeESlML1z9fcCQA15HPQQSJ3hSDqjNtUlQN3M9GgBm%2BLBZRGnL3q0KcJw0kEQPCZuC0MvjpDEvgVWp5MRtYlIm2Vi9gvNEOrPz5ts8le4syijXYfJ2Xd5vX8B0C3h73f6MEvy5vhhYsDIKANamQhxzycL7%2F6MaeAyEKx&X-Amz-Signature=a6a867bdf145cbb2621a8fa60805d76f9433995aaa176984dcdc63ec2132f93f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5UKPS4%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVYPRLTKk%2B2hrCGfxff%2BNgx31TxaIOqS1oj%2F7XRka8CQIhAN4nip50Vqq2mXC20H5khJkrw5nxjAAOA3oy9FR19Ky9Kv8DCGUQABoMNjM3NDIzMTgzODA1Igzzss0ZLOrVuZLBLjAq3AMaFAMZz%2FZiZp5c9ybCR9OhN%2BU%2B4zwArwgbGxD%2FNBnZPdYSFZsU2NHJ66bR4Kr11K9SngBGEK1wcW%2F5qFCpaabVcaOcOaaExni5jKeMYo0U3VavQJzUmsJyV1wt1XpKehxKAShXidI7iD4jGBhp58bMinzQwWT1IQCabrXWasOtNIX489F1USgr0rQVhz%2BiygreqsPgNd5Fs6xcDtosb2RLsc6rvZaYoppPnWYwasX6cL9S9cIUCQUIbx8j%2BwnRaIztMzU3NX8TWs5OQngtycsnxr%2BgMd7c%2BrG6%2BI2tXVlmQaC6H6952hkMT7AuB3%2FDOQOFADxvi60HWLUYNqZFkm658NodFyj7ZqunbRiRzH0vCGOpmhEPWmBAQ17ZyI%2FqxuL%2FBsuA07Ap9UnOUHBVdiGVgEWt6%2B5Jln%2FS8Y%2B0B9jaSckAqwrx3rldS6pYeXxGJhfdoueodhF3%2FD24oxXcrMoYI5VgRw0xSy7m3aAkkRrPDWPDh8wKcIHoAlji1%2BHeZ%2Bt3Wz8QYhOF30tZcyZE78ImG3AhfnVopDV42PxqreXMbk7Zdo2RiG%2BwsaSmyH0kRdtIEamU%2BOxsgdBvt%2FYSYKlTO0TtmGK8S9v6I8ITVAyUHNKPyadgCmv0vw%2F8SjCsy6PBBjqkAS9D7dFyJxuAo3sc0rlKF4Rxvs%2FAp42o09RCxUUTafOik0pWe63tifjTEeESlML1z9fcCQA15HPQQSJ3hSDqjNtUlQN3M9GgBm%2BLBZRGnL3q0KcJw0kEQPCZuC0MvjpDEvgVWp5MRtYlIm2Vi9gvNEOrPz5ts8le4syijXYfJ2Xd5vX8B0C3h73f6MEvy5vhhYsDIKANamQhxzycL7%2F6MaeAyEKx&X-Amz-Signature=8fe1aed31d9020c68ec10e5e87d75d236b9c11515287506e4e4574eca86ac509&X-Amz-SignedHeaders=host&x-id=GetObject)

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
