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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636LAJKW4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGcNa6diXAV7D7rBf1jy1dGqexp7zT71cVSUMmsestOXAiEA4OYZ%2FsEyjlWWREK0Ecnb%2B9F7YQHkFInTcZRcrIV1nzgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJdvUNb3EzPP25fGCrcAyOSbvo3%2BKESt177Cagk1uDxEU8JtnzcfgWj1xKrINR97KYS%2Fdkp4d44%2FS1UCG8mxp2U6czdB1RsGx9Mk4eHLzwvGVEN8Hk2U11KKWcpCmvzN1DY8h0HgxCGLipBDL2atvoE2lETKpAab9U0EGFaC2dUN6vgBq%2F6WENaL2ygK8UkGNxID5ggdDkx3GbqnhvssMeADFeY0qFZVW6F5cETrBt2UxMF97DPL9vAKo1hB3uGfY6V3m54dBdToCbOFnPJhc9b%2FctmDhRZvvna%2BqGpN%2BLSblsHHnHXkckDk42jgGHja%2FeGae54FBwUOwZShy81ntzvKxXdroyc3ppQGbpn2ZSy4E%2FqMdlQYBIX6XWs1FrlbL9dKAmehK8fDbKAhdu%2BrdNerwVta8%2BBAYpFusotGMLoSLVwzGyexKhY%2Fxm%2FullULyRCS%2BriNZTfvwkH0lo98p3lH0G8XbE9t5tBnsACCW2siM1fvC7EB4QHmRtNHUxpRc2x1jT%2Fg84gKZcBq2EuFp6TDuSK0KgSkIUORk5gF9GIMoUvCQFxw%2FdJ56Xcl3qUgL%2BSwjd%2FTSlX31gny7mrjZY89e2aeV2PMIIanE8EzXmAsVU9uQbp3pw3fvwJ4aqZX2R4dnx%2BswS0w7OVMJ%2Fdxb4GOqUBAUZzAvkGdpQ7rxtooFCO0aX%2FNzKiKKGdN7MQzJ1xY8Cucr0yd5zwULzJx05mjAcbJKQF%2FqhTSxaGyS%2FkU2m4YX8MzeBIFNzgA30GcGU%2FkPwMTgGMKV4g4lRVLTJUyPW2eNbdEUmqEUIsxUaI2lIEhRQIsVRWIGTlmfFyKymMkd5C%2BzfvmbtnyPBmVAh9Kmrhzsje5IrJZhc93BXdrjHTGkK4fBQo&X-Amz-Signature=74d7b6a5953ef21b97a110d7604982942385c70bc7be3bab47844d61493d4ede&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636LAJKW4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGcNa6diXAV7D7rBf1jy1dGqexp7zT71cVSUMmsestOXAiEA4OYZ%2FsEyjlWWREK0Ecnb%2B9F7YQHkFInTcZRcrIV1nzgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJdvUNb3EzPP25fGCrcAyOSbvo3%2BKESt177Cagk1uDxEU8JtnzcfgWj1xKrINR97KYS%2Fdkp4d44%2FS1UCG8mxp2U6czdB1RsGx9Mk4eHLzwvGVEN8Hk2U11KKWcpCmvzN1DY8h0HgxCGLipBDL2atvoE2lETKpAab9U0EGFaC2dUN6vgBq%2F6WENaL2ygK8UkGNxID5ggdDkx3GbqnhvssMeADFeY0qFZVW6F5cETrBt2UxMF97DPL9vAKo1hB3uGfY6V3m54dBdToCbOFnPJhc9b%2FctmDhRZvvna%2BqGpN%2BLSblsHHnHXkckDk42jgGHja%2FeGae54FBwUOwZShy81ntzvKxXdroyc3ppQGbpn2ZSy4E%2FqMdlQYBIX6XWs1FrlbL9dKAmehK8fDbKAhdu%2BrdNerwVta8%2BBAYpFusotGMLoSLVwzGyexKhY%2Fxm%2FullULyRCS%2BriNZTfvwkH0lo98p3lH0G8XbE9t5tBnsACCW2siM1fvC7EB4QHmRtNHUxpRc2x1jT%2Fg84gKZcBq2EuFp6TDuSK0KgSkIUORk5gF9GIMoUvCQFxw%2FdJ56Xcl3qUgL%2BSwjd%2FTSlX31gny7mrjZY89e2aeV2PMIIanE8EzXmAsVU9uQbp3pw3fvwJ4aqZX2R4dnx%2BswS0w7OVMJ%2Fdxb4GOqUBAUZzAvkGdpQ7rxtooFCO0aX%2FNzKiKKGdN7MQzJ1xY8Cucr0yd5zwULzJx05mjAcbJKQF%2FqhTSxaGyS%2FkU2m4YX8MzeBIFNzgA30GcGU%2FkPwMTgGMKV4g4lRVLTJUyPW2eNbdEUmqEUIsxUaI2lIEhRQIsVRWIGTlmfFyKymMkd5C%2BzfvmbtnyPBmVAh9Kmrhzsje5IrJZhc93BXdrjHTGkK4fBQo&X-Amz-Signature=4c54a6d32ed198d2d84324662bf62a0f6ed2580c0401470a839e042ec01dc6d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
