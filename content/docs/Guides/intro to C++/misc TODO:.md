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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BAPYSBG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2WkUe3t0wOJVZ%2Bgusv2W5TbmWne8azil6%2B0BrExLbtwIhAIF9xrBinVJRaASOcGAARGmXIr8uv%2BTWNIQ1WdFUYbowKv8DCB4QABoMNjM3NDIzMTgzODA1IgwxbY98yBLRbk06Pl8q3AOJ%2BC%2FKhvfpPIAiw4c514bFzi6lV6cixEzH08Igc0Gfip8IA9VgX%2FYM6JeBhu5V%2FG4DxM2W%2BYO72D6Ic2NmpAxechnXvjlnq%2FLOH%2FucH7weuQ8SfN3xMR1UYEc2J%2FmZTe4hwJZebCoFi03AiisbdsLXiQbdpxG%2BoRB7Kc2XvQNIQpryqWEujX893XxXACqYyTsmP%2Fb2YJ4HQLjnB5LOtB5ooeKaIqJL8qMa7vAcjq%2B0ny4dzCKPyuHxmnO8C6ejB0oq3wo4vpblQiFjgXG9CZYVC2Z%2FiVDQUUwO8IHfX1VFhjjCPBPFp1h4VKfW1rt4%2BgNDlAoN7vzIr7RGm9TVaanRm5JJPMaP%2FsY72sd%2FgAgDidKH9SBRpXyb4nXD5S1V3dj0CCNHe70X5s9lsvb8zHpsYKjQbjPzwjm%2BjtKsvqKygNiBZf2kjlrG4tL0edCWfoOI9kfJ71Kd5i05USm0gNYgTVlt22yF5U%2FZ6I5wE%2FndTVpBorNZa91Z%2BN5QTXAHz5%2FPA5m8dLGJSqUAFq%2FNUN0L9kt8Epjk%2FWWTA%2F78wudLlYGhQg%2B2HnWmgZCefhm8TD9wgrm%2F%2FZVNpv2AjfDCQgAM4cwl7mQNR5gT6%2FueiFT6vnnRUyFY%2BKedidAATDDeiMG%2FBjqkAZKxV0KQKmVMNeX%2BThgQDl9I%2Fmq8URedp0LOp%2F4ZhyNLqyQNfguHjJf3X50Vk9p%2Bzs8E7y7IY1jr0YoLab55zvynbplqt4XTGLOVPmOhGVDUMy%2B4NDmN1iorOJSzS27MF04BwC3ZI4b8xkm8fV1q48XlCy2w94%2BWwifqM4ERY17gI2ixKhrkMCX%2FsjJ8%2BsIuvL9KrvmDVfkfcScs%2BlDwQHmjguop&X-Amz-Signature=9392c0b9ee3072e6a8ebed15e2171874ae08d5ac88c395246af581cf617901d2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BAPYSBG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2WkUe3t0wOJVZ%2Bgusv2W5TbmWne8azil6%2B0BrExLbtwIhAIF9xrBinVJRaASOcGAARGmXIr8uv%2BTWNIQ1WdFUYbowKv8DCB4QABoMNjM3NDIzMTgzODA1IgwxbY98yBLRbk06Pl8q3AOJ%2BC%2FKhvfpPIAiw4c514bFzi6lV6cixEzH08Igc0Gfip8IA9VgX%2FYM6JeBhu5V%2FG4DxM2W%2BYO72D6Ic2NmpAxechnXvjlnq%2FLOH%2FucH7weuQ8SfN3xMR1UYEc2J%2FmZTe4hwJZebCoFi03AiisbdsLXiQbdpxG%2BoRB7Kc2XvQNIQpryqWEujX893XxXACqYyTsmP%2Fb2YJ4HQLjnB5LOtB5ooeKaIqJL8qMa7vAcjq%2B0ny4dzCKPyuHxmnO8C6ejB0oq3wo4vpblQiFjgXG9CZYVC2Z%2FiVDQUUwO8IHfX1VFhjjCPBPFp1h4VKfW1rt4%2BgNDlAoN7vzIr7RGm9TVaanRm5JJPMaP%2FsY72sd%2FgAgDidKH9SBRpXyb4nXD5S1V3dj0CCNHe70X5s9lsvb8zHpsYKjQbjPzwjm%2BjtKsvqKygNiBZf2kjlrG4tL0edCWfoOI9kfJ71Kd5i05USm0gNYgTVlt22yF5U%2FZ6I5wE%2FndTVpBorNZa91Z%2BN5QTXAHz5%2FPA5m8dLGJSqUAFq%2FNUN0L9kt8Epjk%2FWWTA%2F78wudLlYGhQg%2B2HnWmgZCefhm8TD9wgrm%2F%2FZVNpv2AjfDCQgAM4cwl7mQNR5gT6%2FueiFT6vnnRUyFY%2BKedidAATDDeiMG%2FBjqkAZKxV0KQKmVMNeX%2BThgQDl9I%2Fmq8URedp0LOp%2F4ZhyNLqyQNfguHjJf3X50Vk9p%2Bzs8E7y7IY1jr0YoLab55zvynbplqt4XTGLOVPmOhGVDUMy%2B4NDmN1iorOJSzS27MF04BwC3ZI4b8xkm8fV1q48XlCy2w94%2BWwifqM4ERY17gI2ixKhrkMCX%2FsjJ8%2BsIuvL9KrvmDVfkfcScs%2BlDwQHmjguop&X-Amz-Signature=cf34e031180fb230068c871628c0fd5873b7364c7c476b75134c6da3a586398c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
