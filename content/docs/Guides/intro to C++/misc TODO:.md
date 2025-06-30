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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBYICIA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnziabw58mDsU39SAG2HW1JseYfFSu%2FS2KQguRZiY0OAIgeTgjfYiJLJc0dqywa5lK6yt1GaCljJ2XDrQlvVEm%2FaUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGB3UndlIe2gianpKCrcA4Ze99CdpktzYQR6t8d%2Baj1Ed3IZ7lblJrO%2BLLKWInIX%2BkWQvEqAWSZjs99veuhgLr0B3H7ioQKqPPq%2FmEwqLc5CpGM543tZTLs%2BgxFyfldQ7W%2Bktt8btGNxzNeeAJPuOn%2BxYz0vk5pD9FGSxqUfrF43i9rzMR3imZE59zOrBIrtlDm2gMEnXy94myb5MJdARAfvGBm2b06FuCcUNUyZ95S0ZeSed38tkGv1R0A2x1XnktEMRxjIjkwawWXIe%2Bkv%2Fe6FjSX7CcpJg%2FjltEgDI9ufJURK267kCW9cU%2F%2FiB37A5w5b2pUhP8Rj%2FO%2F0%2B9Q%2Fu796%2FnkoLqse%2FZpALdJyxWxMuP58qlVmXIqKrm2qECN6xkHSoh49pX9T%2Bdu4TgUUnohzqWfuW2k91%2FZ3eU%2BVC7SPRgftbM1G0nRqMkouVR1Ai8F4qoKVxOuXIzzn3V4Nu3xSZ7Y5WS%2BNavScqVq3enK1EwVAtg1ffPyu5K7vHvPqk7%2FaKwagbnGppkQTxr5QmgmMesIakqpHr0MKeEbYI1QWyW8O5LL%2BoS1twxh9XWd0cjc5%2FCKZEeRKHlmE5QQhlDVts1vkJgvMgihnyrCTccLrPlIefraExSfB7XI8TLKna6sBUqqdTTQvn1k0MJ6ji8MGOqUBsR3oZH61hO5SFYWASwxffoS0ENi2WSwXjzJn46e4QrIJ%2FYS0trEVjMKfR4XmcdCSkzcgEn1HNa%2FcNred3TpXu27FSZ3RCOtzFj1AvZkHfJLEqTE6mGus5dwKB018RBmWygMlT46CgZle8CtPyLdurMUeuXdh6tJjG6cH0RozND%2FAh%2FxPmKHNJqpqvQs5%2BwDKwLr1WGjZKqwnmTKB8Ag3UgPm7H5j&X-Amz-Signature=55d7c00cd05e3166c6354d44a74bf609d0065a1c951e50eccc686c39f3d4b571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBYICIA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnziabw58mDsU39SAG2HW1JseYfFSu%2FS2KQguRZiY0OAIgeTgjfYiJLJc0dqywa5lK6yt1GaCljJ2XDrQlvVEm%2FaUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGB3UndlIe2gianpKCrcA4Ze99CdpktzYQR6t8d%2Baj1Ed3IZ7lblJrO%2BLLKWInIX%2BkWQvEqAWSZjs99veuhgLr0B3H7ioQKqPPq%2FmEwqLc5CpGM543tZTLs%2BgxFyfldQ7W%2Bktt8btGNxzNeeAJPuOn%2BxYz0vk5pD9FGSxqUfrF43i9rzMR3imZE59zOrBIrtlDm2gMEnXy94myb5MJdARAfvGBm2b06FuCcUNUyZ95S0ZeSed38tkGv1R0A2x1XnktEMRxjIjkwawWXIe%2Bkv%2Fe6FjSX7CcpJg%2FjltEgDI9ufJURK267kCW9cU%2F%2FiB37A5w5b2pUhP8Rj%2FO%2F0%2B9Q%2Fu796%2FnkoLqse%2FZpALdJyxWxMuP58qlVmXIqKrm2qECN6xkHSoh49pX9T%2Bdu4TgUUnohzqWfuW2k91%2FZ3eU%2BVC7SPRgftbM1G0nRqMkouVR1Ai8F4qoKVxOuXIzzn3V4Nu3xSZ7Y5WS%2BNavScqVq3enK1EwVAtg1ffPyu5K7vHvPqk7%2FaKwagbnGppkQTxr5QmgmMesIakqpHr0MKeEbYI1QWyW8O5LL%2BoS1twxh9XWd0cjc5%2FCKZEeRKHlmE5QQhlDVts1vkJgvMgihnyrCTccLrPlIefraExSfB7XI8TLKna6sBUqqdTTQvn1k0MJ6ji8MGOqUBsR3oZH61hO5SFYWASwxffoS0ENi2WSwXjzJn46e4QrIJ%2FYS0trEVjMKfR4XmcdCSkzcgEn1HNa%2FcNred3TpXu27FSZ3RCOtzFj1AvZkHfJLEqTE6mGus5dwKB018RBmWygMlT46CgZle8CtPyLdurMUeuXdh6tJjG6cH0RozND%2FAh%2FxPmKHNJqpqvQs5%2BwDKwLr1WGjZKqwnmTKB8Ag3UgPm7H5j&X-Amz-Signature=2e01ea82d3f8758dbb6eb3841e6c19ce59d7dddeed2b0fb7ad465fc3c4db02b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
