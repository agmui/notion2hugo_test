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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALWCV7H%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWa1xmF2Xr1e5PhU6y46Q%2FG57d5est0cEzx3dHGqe76AiAXWDAYmNx9UrNI3ywMp2kCjJr3GKJKSOp6uMyXPHwBlSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMql%2F48TF4W6VyX6OoKtwDzdyn9K9LkDMvSVWcBPChkjCBquhi%2FIiDzYPsAqby4eEpHqaU8mUG0cF6juyVxF8Wl8ZyHM6fOfdLZgqCM5mrpiqYtdzlKnb1yIdyHJQjrdy50N4iqkMUr7vLENI4wnQV8nTkQf%2BynpKIJb1BSVmIZBHmzXJk4%2FvURe32TUioQhDxLJKnE2njbh%2BZQmqQx4nv%2FpeSs73I0cU1iw9eSSY7pjuqp5fsZKQT2eu4d%2FpmH8x5yUV52rlsmjD%2FqwQ3ArncVyJjBmfk%2BtTK6%2BJzR2mYVmv5ecniTi1gq9wAHpo%2B9%2BBig7qXG%2BYAdD9kAxA7%2FHs8OASB8maUacG6mF3hExy%2BjSc9tLiQz0SRmhaEnuz55LoB87nUpiZR87rwdW%2BFsy5VFotxSqSWvBOYdYpWnGjhCKzbHNUVzhjWEgF7seR%2BD5dVk5LBnYpqvLSmEoJKu7qPHn6k3dag5KbbQoK%2BTjuoZN3JIlDHuZygv6x4Rg5w4iE4DiVmE0UFhQP1a6%2Fe8vktmyGZ8kWUhq1oeWjD6YoEwBGxR7yeju4%2Fz%2FBcBuC31HAN5%2F0uPYMP0Ng6%2FzTyXY%2B43RvPuTQaaNCxnAbfXBgXXmMYiNXEqztK8Yg07jtEIaG3P7lMCgLNRhm%2FIBow5dGAvgY6pgEUKi8q3XK5zDWv3ken0mCARt0w2NaNDpUAUojs3WNLdzP6SW5%2BGGdm86Yra4%2F6quj%2FQMKZ5XOsjFTFQohDTOepaKEVd65aC%2B02Q0pyVpwNrYhydHWGsRrpOxGxx7yQsFgHbXfaVH5HyBgGGyZujoqlkmqtqiHBTN7H95He4t4Sm%2Fh9wQaz1t6Ob%2FG7AY4g4rMjoQOCesOKwi5dNfmM%2B8HZVQJC32JU&X-Amz-Signature=774a7fc5792d434bb093ef91b7396852d5fa282d665186f08e8795efd9c6e3a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALWCV7H%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWa1xmF2Xr1e5PhU6y46Q%2FG57d5est0cEzx3dHGqe76AiAXWDAYmNx9UrNI3ywMp2kCjJr3GKJKSOp6uMyXPHwBlSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMql%2F48TF4W6VyX6OoKtwDzdyn9K9LkDMvSVWcBPChkjCBquhi%2FIiDzYPsAqby4eEpHqaU8mUG0cF6juyVxF8Wl8ZyHM6fOfdLZgqCM5mrpiqYtdzlKnb1yIdyHJQjrdy50N4iqkMUr7vLENI4wnQV8nTkQf%2BynpKIJb1BSVmIZBHmzXJk4%2FvURe32TUioQhDxLJKnE2njbh%2BZQmqQx4nv%2FpeSs73I0cU1iw9eSSY7pjuqp5fsZKQT2eu4d%2FpmH8x5yUV52rlsmjD%2FqwQ3ArncVyJjBmfk%2BtTK6%2BJzR2mYVmv5ecniTi1gq9wAHpo%2B9%2BBig7qXG%2BYAdD9kAxA7%2FHs8OASB8maUacG6mF3hExy%2BjSc9tLiQz0SRmhaEnuz55LoB87nUpiZR87rwdW%2BFsy5VFotxSqSWvBOYdYpWnGjhCKzbHNUVzhjWEgF7seR%2BD5dVk5LBnYpqvLSmEoJKu7qPHn6k3dag5KbbQoK%2BTjuoZN3JIlDHuZygv6x4Rg5w4iE4DiVmE0UFhQP1a6%2Fe8vktmyGZ8kWUhq1oeWjD6YoEwBGxR7yeju4%2Fz%2FBcBuC31HAN5%2F0uPYMP0Ng6%2FzTyXY%2B43RvPuTQaaNCxnAbfXBgXXmMYiNXEqztK8Yg07jtEIaG3P7lMCgLNRhm%2FIBow5dGAvgY6pgEUKi8q3XK5zDWv3ken0mCARt0w2NaNDpUAUojs3WNLdzP6SW5%2BGGdm86Yra4%2F6quj%2FQMKZ5XOsjFTFQohDTOepaKEVd65aC%2B02Q0pyVpwNrYhydHWGsRrpOxGxx7yQsFgHbXfaVH5HyBgGGyZujoqlkmqtqiHBTN7H95He4t4Sm%2Fh9wQaz1t6Ob%2FG7AY4g4rMjoQOCesOKwi5dNfmM%2B8HZVQJC32JU&X-Amz-Signature=6885faf7731c812a4942f688b2889416aba2f665d58acd9f7e2bd615d576aab6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
