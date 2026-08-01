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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LVF2CEQ%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5t2n2ezhVOrluWaj8wgwZTAbiiUapEEon7Gd%2BR0ahsAiEA9JiYCsFmiOQu5i28tgzNaVXqQXcOHyEyfb0afDI2Qv4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKluVLg4cUJgilt3GircA6ss5TMcDLA2HT1MephFv6PjlKT6nteDYtHEUCf43Blk0HK3PL7AxnBSCQuEW8id5xACQxB6OT9%2B7tDWwiQ9i6efJlJ8zZzleGhz4M9UWeTGT4M%2FkMF60e%2FHiN%2FOh%2FZokSdTPn2hpkClWQB4VuvyUXDJUo0ST6Cz9QrOOZuhQtQF2hZLl7rk9rMu%2BA8Cfnc5HFB1OxRJIoT78tFVhDPNi0GFbdMJvpBxzEpNOW417G5ZouiPgSbazQAUg4%2FK7GRFhmYXjcO96bJpgYX5PkXKLBy%2BrHmXwTnTjH2kFM8tVr6T6IINfThooXG20rH%2ByOMg4oF8OePP5jphEF9KblFLeSJrj8HH98dp0OPc98rG9mjw2mjvCcHOapfjTIiRCvmm4dqqO6HxdevKXzouhwPp1agpAuVYASaMX1x%2FtcUOtcHRP5xQThcpQD9KcJ6B%2B5ntU%2B9oEI8ZfeEJ607Zy70X5INur%2F7pe%2FZ%2B5nH5ZLT8mqupwhECiBN3pnYSkwCQo86rGBM56MnQv4G6yqTB3ernU8Ro1Ogy8wE2MKLF1f9GrW92iL%2F8cWWZs0jz1W%2BRgUrNXVojguoasg80R6PUJKRBXlnonsbtV4Up2UMJPtQybl1MOdafsN7Kes6Y6WNMMMa3tdMGOqUBQwOmJ11DF0sL8X981tpp%2FcB83fVCwq2oaeM%2BZxtH4ncYU8cs5MvdgNb8d7Z534YS7HW6bnWvdqTcoHOwYux1c58NZTn%2BJ0tLlEsstMLFDsydJ20DXC2tVoSpBdoT7drnVVet%2FZj1Cw8jZIUUdn5kevsNGrSh3oZNG8ag3B0YP%2BMLFTTahGI5wa2H1J22n1Z1pQjSwPdcJWVBreLW7CYnpQ4uyeZF&X-Amz-Signature=f87465496c8022ebf4c9a6d77e401e92bd58c563e919f3740b7d7db922685553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LVF2CEQ%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5t2n2ezhVOrluWaj8wgwZTAbiiUapEEon7Gd%2BR0ahsAiEA9JiYCsFmiOQu5i28tgzNaVXqQXcOHyEyfb0afDI2Qv4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKluVLg4cUJgilt3GircA6ss5TMcDLA2HT1MephFv6PjlKT6nteDYtHEUCf43Blk0HK3PL7AxnBSCQuEW8id5xACQxB6OT9%2B7tDWwiQ9i6efJlJ8zZzleGhz4M9UWeTGT4M%2FkMF60e%2FHiN%2FOh%2FZokSdTPn2hpkClWQB4VuvyUXDJUo0ST6Cz9QrOOZuhQtQF2hZLl7rk9rMu%2BA8Cfnc5HFB1OxRJIoT78tFVhDPNi0GFbdMJvpBxzEpNOW417G5ZouiPgSbazQAUg4%2FK7GRFhmYXjcO96bJpgYX5PkXKLBy%2BrHmXwTnTjH2kFM8tVr6T6IINfThooXG20rH%2ByOMg4oF8OePP5jphEF9KblFLeSJrj8HH98dp0OPc98rG9mjw2mjvCcHOapfjTIiRCvmm4dqqO6HxdevKXzouhwPp1agpAuVYASaMX1x%2FtcUOtcHRP5xQThcpQD9KcJ6B%2B5ntU%2B9oEI8ZfeEJ607Zy70X5INur%2F7pe%2FZ%2B5nH5ZLT8mqupwhECiBN3pnYSkwCQo86rGBM56MnQv4G6yqTB3ernU8Ro1Ogy8wE2MKLF1f9GrW92iL%2F8cWWZs0jz1W%2BRgUrNXVojguoasg80R6PUJKRBXlnonsbtV4Up2UMJPtQybl1MOdafsN7Kes6Y6WNMMMa3tdMGOqUBQwOmJ11DF0sL8X981tpp%2FcB83fVCwq2oaeM%2BZxtH4ncYU8cs5MvdgNb8d7Z534YS7HW6bnWvdqTcoHOwYux1c58NZTn%2BJ0tLlEsstMLFDsydJ20DXC2tVoSpBdoT7drnVVet%2FZj1Cw8jZIUUdn5kevsNGrSh3oZNG8ag3B0YP%2BMLFTTahGI5wa2H1J22n1Z1pQjSwPdcJWVBreLW7CYnpQ4uyeZF&X-Amz-Signature=9c2dceb6302eba3b9251131c5946a9c7be9739a60fe45a7f1e0eb4c4d47af9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
