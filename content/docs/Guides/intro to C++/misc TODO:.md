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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXHVENB7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzOkvFXCtO0N6sn%2B51sfTKUwcw4Qz7u%2Fyum5A%2Fliu8lAiBn4b1PYAI%2FcJFesKqSQDGuWMeEEopVk2gYNc0lBGKhyir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBoj%2BzTTxdOVU6CLLKtwD%2FCPn7roS3Un18z5PYzCRd1ftwLoXLi7K4VDE7mCZG%2FYgc20Rf73X5Ae4NFbzRF408AZqYBs99h8oo%2BXGAPYhQYUeHDyh9dA3lZIA6AyLgD7xv1qL2zMO6h%2BMCBhftAmgncG9j42txwNyauL5Qd56tnNDm4k%2Bzu7lBXFweX7CNqiXWsRH3c5sCxicBW9vf3Jv5iqlBy3aEPaepcyvtJMXfke67pZrwC%2F3hCSc%2B38YPgyt551m0glrST%2FEareWpA9Nsq5hIcSCoF4hNgJQTgyd0GOYN2magWu3MpoK9OjKj02NCu0rlg0tA3coHq7EVDYkiqj7EuCFbxxXUKSa%2Fu0IPEhqYhH43mMFfyTr0V3jBsz%2B26qEvDNqw9fLWr7aLe4Xwv3sJRD3tWrVyAGq548F8QD%2FolQoLVcSxvFiDxvDA8%2F%2B4q9MMaWqYj0oec6fAOO%2BFgjEjIMWTDNtTGOf1Vr53IsazjI0gBZ7NhzstcguiY5IHPn4cMsCwF4Cw2%2BEisz0w2gJHn5pOvzyB1iLIu3Ef9c8wMxWT%2BLOV8TMOajOmGHULMFuJJzgN16XukFFFoENGEhE9aHqf5VAcmbKh7dv87ONmI1XyaLdk0UEBpJL2qY75F8vQQUdjGqMDH4w8IOywAY6pgFp7HAMNpoQSRIczkY%2FkAMj3yKv%2BH0EhQ2WKukvhMIdHSQd75rgNFBEfCP49Zo05O%2FvmIGClWm7nfwYlJCVO2PACxPov2XXr5sjrZahR6HbyqOTWoh9tJWRueekHUAmT91imzeqnK%2BOlUWRryBxtzGWSlgQT8ob4vR5Hgiq1axdg0dgXoE6mja%2BlB%2BP%2FjpcG%2BKDyqc%2FBriM5aQrp%2Boln5AYIXRomCMp&X-Amz-Signature=954e7f3e6dd153f9a9cef1e621fd9cfe63e369ded7ad3a99d227a2d8a5d8e0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXHVENB7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzOkvFXCtO0N6sn%2B51sfTKUwcw4Qz7u%2Fyum5A%2Fliu8lAiBn4b1PYAI%2FcJFesKqSQDGuWMeEEopVk2gYNc0lBGKhyir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBoj%2BzTTxdOVU6CLLKtwD%2FCPn7roS3Un18z5PYzCRd1ftwLoXLi7K4VDE7mCZG%2FYgc20Rf73X5Ae4NFbzRF408AZqYBs99h8oo%2BXGAPYhQYUeHDyh9dA3lZIA6AyLgD7xv1qL2zMO6h%2BMCBhftAmgncG9j42txwNyauL5Qd56tnNDm4k%2Bzu7lBXFweX7CNqiXWsRH3c5sCxicBW9vf3Jv5iqlBy3aEPaepcyvtJMXfke67pZrwC%2F3hCSc%2B38YPgyt551m0glrST%2FEareWpA9Nsq5hIcSCoF4hNgJQTgyd0GOYN2magWu3MpoK9OjKj02NCu0rlg0tA3coHq7EVDYkiqj7EuCFbxxXUKSa%2Fu0IPEhqYhH43mMFfyTr0V3jBsz%2B26qEvDNqw9fLWr7aLe4Xwv3sJRD3tWrVyAGq548F8QD%2FolQoLVcSxvFiDxvDA8%2F%2B4q9MMaWqYj0oec6fAOO%2BFgjEjIMWTDNtTGOf1Vr53IsazjI0gBZ7NhzstcguiY5IHPn4cMsCwF4Cw2%2BEisz0w2gJHn5pOvzyB1iLIu3Ef9c8wMxWT%2BLOV8TMOajOmGHULMFuJJzgN16XukFFFoENGEhE9aHqf5VAcmbKh7dv87ONmI1XyaLdk0UEBpJL2qY75F8vQQUdjGqMDH4w8IOywAY6pgFp7HAMNpoQSRIczkY%2FkAMj3yKv%2BH0EhQ2WKukvhMIdHSQd75rgNFBEfCP49Zo05O%2FvmIGClWm7nfwYlJCVO2PACxPov2XXr5sjrZahR6HbyqOTWoh9tJWRueekHUAmT91imzeqnK%2BOlUWRryBxtzGWSlgQT8ob4vR5Hgiq1axdg0dgXoE6mja%2BlB%2BP%2FjpcG%2BKDyqc%2FBriM5aQrp%2Boln5AYIXRomCMp&X-Amz-Signature=dcfd4525c36df8eef11dc093e662d769c95fe55fe3687a0672fb65a2b70adc73&X-Amz-SignedHeaders=host&x-id=GetObject)

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
