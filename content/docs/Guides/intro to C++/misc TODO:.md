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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCMNHQ5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDokg9adNhnVvDOQxguRatlOjQySvfRprmMIwuWBDQAGgIgYvdIp1Huyx%2F8yAHItyinwa%2Fe%2FtWSvGJs5M7SZOlMoWIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKQodudZYJF%2BIUslIircAwEV%2FqT9tZIkf9I4fRO5SQzan%2FfqCbUISv%2BY9Bmmihix0HOKznpFIAQz0vKCkXnU3mGMiIACuYOlqJXL0G3tWKVXRM6QjcCIjkTSLndpHx1XKtFzlyK1zW1edZsOA1r73SJbo89yrphx83g8hzxrnduChQkVLVu56JvruTz1Aed5J6YbVMTpq5cG%2BKHbqH0QvoGKZWkNN6SdTIyGti%2F4BpQXhbgK6A9tIZ1Ztq2mBVADTMvT2bROL7VAdKVrOqgK9mco1VHFyOyZLXc4rHE6auCP5QyMlDtXPHGSitSGmg11usKYYXgH8M9Dpwu%2BOKh8vfQ4beGACk0LKXXvQqkwvLntg8QyMkWXRFbedWXCX35l7BCD1arXXuHqpb%2B4c7kT4xYj5dHlkQIOOgHceE5mQnap%2FyfF8W5CXQtwigZq02W3onQ8HVF4L0gNvhIg2P5n%2BLQ2Vb5ILRp7xTT7V8eu4rMYnEDPgB%2Ft8TWOiafllO7vDYj%2BCIa6DVAU8fXPSR4u8ehy7VWoU1PGYMH752T1OIo0S6kyHKTwScpoFwXrNCqE3jx2j8iSit3b98LfdeqnqCHNJz09iz4pqt%2B6r6QRe2%2BqpQXFYsMOWEhCQR7VmWk4edLvbBx%2F8Z2dSLKGMOPByL0GOqUBau%2Bi0CaFAU9Ah2AkhM2GQuVgQnWJJBw1A%2B6ygAeS3w9NKBLc4%2BhYGpr5V9tAZrPMOvJy5Ct%2FG61EPUXk9fAJoqiHcnH00WNDoId7SOYJL3Was7pBVAEmkDa4uOEcGga%2F3pPUhrhjCyq0xAkopt2l%2Fy%2FD4QovdsJfmsttbzru9XHqECeLjTC9Zja5IdnVT2cMC1ko5%2FB1hxxs6qgNsXNTKMzSvCmz&X-Amz-Signature=d87f7f730a8597db6a5ac76bae1e988a8540bfe0935ce3c39a6fb9b7259b1c51&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XCMNHQ5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDokg9adNhnVvDOQxguRatlOjQySvfRprmMIwuWBDQAGgIgYvdIp1Huyx%2F8yAHItyinwa%2Fe%2FtWSvGJs5M7SZOlMoWIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKQodudZYJF%2BIUslIircAwEV%2FqT9tZIkf9I4fRO5SQzan%2FfqCbUISv%2BY9Bmmihix0HOKznpFIAQz0vKCkXnU3mGMiIACuYOlqJXL0G3tWKVXRM6QjcCIjkTSLndpHx1XKtFzlyK1zW1edZsOA1r73SJbo89yrphx83g8hzxrnduChQkVLVu56JvruTz1Aed5J6YbVMTpq5cG%2BKHbqH0QvoGKZWkNN6SdTIyGti%2F4BpQXhbgK6A9tIZ1Ztq2mBVADTMvT2bROL7VAdKVrOqgK9mco1VHFyOyZLXc4rHE6auCP5QyMlDtXPHGSitSGmg11usKYYXgH8M9Dpwu%2BOKh8vfQ4beGACk0LKXXvQqkwvLntg8QyMkWXRFbedWXCX35l7BCD1arXXuHqpb%2B4c7kT4xYj5dHlkQIOOgHceE5mQnap%2FyfF8W5CXQtwigZq02W3onQ8HVF4L0gNvhIg2P5n%2BLQ2Vb5ILRp7xTT7V8eu4rMYnEDPgB%2Ft8TWOiafllO7vDYj%2BCIa6DVAU8fXPSR4u8ehy7VWoU1PGYMH752T1OIo0S6kyHKTwScpoFwXrNCqE3jx2j8iSit3b98LfdeqnqCHNJz09iz4pqt%2B6r6QRe2%2BqpQXFYsMOWEhCQR7VmWk4edLvbBx%2F8Z2dSLKGMOPByL0GOqUBau%2Bi0CaFAU9Ah2AkhM2GQuVgQnWJJBw1A%2B6ygAeS3w9NKBLc4%2BhYGpr5V9tAZrPMOvJy5Ct%2FG61EPUXk9fAJoqiHcnH00WNDoId7SOYJL3Was7pBVAEmkDa4uOEcGga%2F3pPUhrhjCyq0xAkopt2l%2Fy%2FD4QovdsJfmsttbzru9XHqECeLjTC9Zja5IdnVT2cMC1ko5%2FB1hxxs6qgNsXNTKMzSvCmz&X-Amz-Signature=dc6b55689dec043b607c13dedb1cf1a5b59127d3d921b96cae4edd4f3d0d113a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
