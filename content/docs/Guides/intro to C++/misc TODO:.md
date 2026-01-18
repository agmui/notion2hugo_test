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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5TJ67J%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHz7gEw4wt9V2P8ykKkomyu59tNGgkpvmjU2ruL6%2Fvd5AiEAyQ0D0QI1xGNs8uyTTZ2pZVp6x%2B7uTIW39807JBmL3AQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCslV3Y7auapjvwbNCrcA%2FcD8v8bVMHZw%2BjfqeQPlPQq0%2BwxJOi3okpHgLbct%2BIpyeuB8aLyvvnSOUpyEQvsqX2PUe1sgEZTqox02%2FWaZjJPhyPNOonj%2FgZ0Yx1d8d37MCsVBuMsJtlKbaGiVWAHsXHtqkNVUkXWSCq%2BXIS8zThVkUndgcOshGwj3pVyhQ8Ygn1IneFgnU7ZaSc36eWKPU6o8xyj0rD6K8vOEjHKdF9EHWEzIyD94KEhal12%2BQSwckTdJOWvuRcEBAgN61A2F08kHOYecOj0jin1HV1%2FA19ZJIYvfUsNh%2Fmm1Cdl%2BeV0dFbWQ7LhVbvl5VrSkWwqZML5hEmPm13NAq5DohzugcJbP9jZdCn%2FvxzmhUxAHfEsujNQTiGDnYBYYbA3TR30AuicuYj0xFmuOB3QD4RqhaOv0yoU%2BJTz2mBxAHQhwr2mCwgY3%2BdEvxQt3noIV6yM8yF2jfioa5z31Gwx3I7MqabI83RwnfdajsVJ%2Fxe8zom1bSxG7vKDC5FKdDABxJILxj6KhkSBDf2Wufr%2B9Zf1JvAV3VeCA%2FCVxM4vfqZXaAj3YT96Mqu7VM9yB8%2BY82oJHYrP5kkjA1NhldSG47UwCqrKJ9M1YegsSu%2FQANf0vcxxXs0SDcyZvDuxaZWiMOGcsMsGOqUBxExz44jS6ZzxEGal9YP211RVtX3%2Fd6z5Ym7DO1VlX2cA6oyFnHKMD%2Fm8BcouvgiCLUbp0ouPqVzJLvcToKGxwZFFB4HQuDD0wkIKsFP0W2x4iPkRIIUTTzIbXemCv%2B793WNx3dWYbl0a5f6AlaWZm1s0WGgWP2tuHgxK0oQYsKFnW6nDWTWHVB46G97lLG24gHz1RMxXUpiwBjIRHbfLFRQ2dxCY&X-Amz-Signature=9997f97cf6c2d6bf0dadc957a5107d885b7374349d6f7f8ca4fc7434117f8904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5TJ67J%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHz7gEw4wt9V2P8ykKkomyu59tNGgkpvmjU2ruL6%2Fvd5AiEAyQ0D0QI1xGNs8uyTTZ2pZVp6x%2B7uTIW39807JBmL3AQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCslV3Y7auapjvwbNCrcA%2FcD8v8bVMHZw%2BjfqeQPlPQq0%2BwxJOi3okpHgLbct%2BIpyeuB8aLyvvnSOUpyEQvsqX2PUe1sgEZTqox02%2FWaZjJPhyPNOonj%2FgZ0Yx1d8d37MCsVBuMsJtlKbaGiVWAHsXHtqkNVUkXWSCq%2BXIS8zThVkUndgcOshGwj3pVyhQ8Ygn1IneFgnU7ZaSc36eWKPU6o8xyj0rD6K8vOEjHKdF9EHWEzIyD94KEhal12%2BQSwckTdJOWvuRcEBAgN61A2F08kHOYecOj0jin1HV1%2FA19ZJIYvfUsNh%2Fmm1Cdl%2BeV0dFbWQ7LhVbvl5VrSkWwqZML5hEmPm13NAq5DohzugcJbP9jZdCn%2FvxzmhUxAHfEsujNQTiGDnYBYYbA3TR30AuicuYj0xFmuOB3QD4RqhaOv0yoU%2BJTz2mBxAHQhwr2mCwgY3%2BdEvxQt3noIV6yM8yF2jfioa5z31Gwx3I7MqabI83RwnfdajsVJ%2Fxe8zom1bSxG7vKDC5FKdDABxJILxj6KhkSBDf2Wufr%2B9Zf1JvAV3VeCA%2FCVxM4vfqZXaAj3YT96Mqu7VM9yB8%2BY82oJHYrP5kkjA1NhldSG47UwCqrKJ9M1YegsSu%2FQANf0vcxxXs0SDcyZvDuxaZWiMOGcsMsGOqUBxExz44jS6ZzxEGal9YP211RVtX3%2Fd6z5Ym7DO1VlX2cA6oyFnHKMD%2Fm8BcouvgiCLUbp0ouPqVzJLvcToKGxwZFFB4HQuDD0wkIKsFP0W2x4iPkRIIUTTzIbXemCv%2B793WNx3dWYbl0a5f6AlaWZm1s0WGgWP2tuHgxK0oQYsKFnW6nDWTWHVB46G97lLG24gHz1RMxXUpiwBjIRHbfLFRQ2dxCY&X-Amz-Signature=c40cfc65452c7cb35d67e25b0cfa6465e93b662c7c1bcda35aa64a677e057886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
