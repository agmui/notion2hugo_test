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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREH5B7Y%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUVjTBo6%2FOKFcW9w2IMDnvbcB68QNlpTlcXTukBmN2qQIhAPwHsEfrkajC1ylyKWYGspWlyTDYbIP33NQolNeUzVjTKv8DCG0QABoMNjM3NDIzMTgzODA1Igw1nUls6PTCj4idbZcq3AORy8ReYlid0Hu%2F%2Fm35ogijzyie9bGVHcnrAAXUpL2xDLTqDSW0Dwr%2B%2FtJl%2BSZ1XMb0BCNdcQN1vwvslp0NBXrcc6cVoWJFEWDnj%2BBtA8vz1%2Baq85Fgppu8K8LWRck7XunFjIQC8kNbjLVX%2FoVHRtUiOoNo8xjyl%2FRKkdW6apEygVEDkBe7BQrtl3OrcG1CJWrGk%2FiRBnoIQdWOgqq6JGrBKy28h4o5SayvDzhuEF4RTu5XtYe1OXCyx05mwGNUw1q2nAWQWmm4p4EyNlx7Qs8dOIG%2FI2Ko1bKx8B%2BWXRGHRWdQF4B1lIzu%2BipA6ddkEj8VaCl6OVBcMqE1vD0pP7Ci%2FP3oGaf3RRjF7mSQ75DCXG0ryZoZ5VnCKvgG9Gr6yjaS6mkYkmVNMfoPEDkz%2BQ45%2BpoeuoNxJ%2FXHbe9%2B9KxVbriQY8YTTK4NhdH9ShctCskzda4tao08VDquAswxHyHYeOvTXGKLL8x6cnL6DIybtHR0YWSw9CLrFEgRApw9rB0EPeyQIY63k9nB3xsAnqyQ8Y16MRvJEeqOdvfu8bqdRf4mN8RTISOk5iGkJKgybBrNu91aj0bmo1uR1usYtuF4I4HKoeV6gilSbe253ZLmCTW0OxmyzqV%2Bcbd%2FJzDvwMPCBjqkAXjdT3I87ixQpD9%2Bb2q%2FKFOdR3FcJdK1exoObl%2ByGiq8aBJjyBRUB%2BZo3myptlFOeRHY0w64vt7ZaTTdhSf3RaUsHXCDvnPuoCTOQE9UegtgiwwZwrSafiXqLOK%2BPNjRpZLY8dO3ixPuWKkYZvCRPcqHbiM%2BF8vhV7bTfFbRVUkIY8VWkXbLQOMGW8KOfM1y2o0ltTz%2FYUkT7%2B5xK%2Fnt%2BlnBZ%2Fyc&X-Amz-Signature=b3858e658007e9dcd359787595ee0088418b0e3a20f909622ef6a4a63e133fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREH5B7Y%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUVjTBo6%2FOKFcW9w2IMDnvbcB68QNlpTlcXTukBmN2qQIhAPwHsEfrkajC1ylyKWYGspWlyTDYbIP33NQolNeUzVjTKv8DCG0QABoMNjM3NDIzMTgzODA1Igw1nUls6PTCj4idbZcq3AORy8ReYlid0Hu%2F%2Fm35ogijzyie9bGVHcnrAAXUpL2xDLTqDSW0Dwr%2B%2FtJl%2BSZ1XMb0BCNdcQN1vwvslp0NBXrcc6cVoWJFEWDnj%2BBtA8vz1%2Baq85Fgppu8K8LWRck7XunFjIQC8kNbjLVX%2FoVHRtUiOoNo8xjyl%2FRKkdW6apEygVEDkBe7BQrtl3OrcG1CJWrGk%2FiRBnoIQdWOgqq6JGrBKy28h4o5SayvDzhuEF4RTu5XtYe1OXCyx05mwGNUw1q2nAWQWmm4p4EyNlx7Qs8dOIG%2FI2Ko1bKx8B%2BWXRGHRWdQF4B1lIzu%2BipA6ddkEj8VaCl6OVBcMqE1vD0pP7Ci%2FP3oGaf3RRjF7mSQ75DCXG0ryZoZ5VnCKvgG9Gr6yjaS6mkYkmVNMfoPEDkz%2BQ45%2BpoeuoNxJ%2FXHbe9%2B9KxVbriQY8YTTK4NhdH9ShctCskzda4tao08VDquAswxHyHYeOvTXGKLL8x6cnL6DIybtHR0YWSw9CLrFEgRApw9rB0EPeyQIY63k9nB3xsAnqyQ8Y16MRvJEeqOdvfu8bqdRf4mN8RTISOk5iGkJKgybBrNu91aj0bmo1uR1usYtuF4I4HKoeV6gilSbe253ZLmCTW0OxmyzqV%2Bcbd%2FJzDvwMPCBjqkAXjdT3I87ixQpD9%2Bb2q%2FKFOdR3FcJdK1exoObl%2ByGiq8aBJjyBRUB%2BZo3myptlFOeRHY0w64vt7ZaTTdhSf3RaUsHXCDvnPuoCTOQE9UegtgiwwZwrSafiXqLOK%2BPNjRpZLY8dO3ixPuWKkYZvCRPcqHbiM%2BF8vhV7bTfFbRVUkIY8VWkXbLQOMGW8KOfM1y2o0ltTz%2FYUkT7%2B5xK%2Fnt%2BlnBZ%2Fyc&X-Amz-Signature=e5fe4be3cfdada8b8015123f860b64b5feb31098812f4bfe4f3d5437c5d398d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
