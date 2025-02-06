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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5CXEA5C%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDAzyPVE%2FqClibHFI7idIBeQsLVUEVxhihaQPVmQK7UjwIgV2qFldhMw5PwB3ji5avGuWlaB2GqH6EN9R9D4eJK9%2B4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIrf4Bxf1QwcHdm%2BoyrcA8gJxsR5K55LoZ0y45jFWUloa%2BxNBiB1ocQfcIS6HPiSLnRBNetF627%2F69BP6yTP7JmywXv5PhKBZFJXVx88%2FILJCqmH31iVVmkB1lU7VtBVFLSwYia9BaUEJh1cDeHmZrUV%2Fe90lO5kYqFkUmNxWYXDNuoL0Ct%2B%2ForY8G0bJtzqnfV4bf9SBDAYPEzFrjsgs0Iv07tsJ%2BBFCUrNJr%2Fpmleydy6ygF%2FijWrrdZ3ovgNYnH17bbXeVrEQ5qRsT24WB54WzsBYvpGdElGX1YghD5usmvgMjxWuW86Q1Lfl2ogHNjoCCRC2GRBT1VMa9lzYjV%2B92XWWjXWE6MbMWwlcKji38ai7UcwyJ7aCx26yWO4Lmert49TTBLX9BoK0ayJjtEpzEe1pfU2Stk%2BX%2BfL7OxDvOH5XL3%2FnQVfyp4zOkFWFYn4ugnTFOxt1Y99WVPe2e%2BzrYnqT8zUJON6BkBWnM6ckygeQ8vaKhKRQjX%2B2lyuJ0S74z1CpclECkTt226hgyBSix6FDjb7t4ll7Nz7vARqGYElpj7%2Fma%2FWzrhOGfMjVVLnp7CCEvfGrkqCNYMHzNN0qnib%2FssgZkM9ODdt6bIhMqePil6127pXyXlUjwXUP9UBlW3kx3uHcY0brMIXtkb0GOqUB5UM1sKmQx8EAKb%2FqQakyoq%2B4mWDdbRpJl758hylLp%2FLC4UND87KULjkLWa7ma2uNcUAKQ5uxZX8%2FyKEHm1b9sgg17T%2BF2eaJ0VVx7v4AwNOupJi1ZLhp5Wl%2BG6gTBZ%2B%2BGvXqr%2BTS6gEVg4uzYkzOfECANRbkVrk3BRUiUGE5rxYLXsnBz4IFBX1D1GCIXvBx2Be1Zm8J0LCz5LQ8DFMiCscqjk82&X-Amz-Signature=1e161e87c967b8d239600c24c3357c05e89a4cef27dce687ec5a20e35b7f949a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5CXEA5C%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDAzyPVE%2FqClibHFI7idIBeQsLVUEVxhihaQPVmQK7UjwIgV2qFldhMw5PwB3ji5avGuWlaB2GqH6EN9R9D4eJK9%2B4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIrf4Bxf1QwcHdm%2BoyrcA8gJxsR5K55LoZ0y45jFWUloa%2BxNBiB1ocQfcIS6HPiSLnRBNetF627%2F69BP6yTP7JmywXv5PhKBZFJXVx88%2FILJCqmH31iVVmkB1lU7VtBVFLSwYia9BaUEJh1cDeHmZrUV%2Fe90lO5kYqFkUmNxWYXDNuoL0Ct%2B%2ForY8G0bJtzqnfV4bf9SBDAYPEzFrjsgs0Iv07tsJ%2BBFCUrNJr%2Fpmleydy6ygF%2FijWrrdZ3ovgNYnH17bbXeVrEQ5qRsT24WB54WzsBYvpGdElGX1YghD5usmvgMjxWuW86Q1Lfl2ogHNjoCCRC2GRBT1VMa9lzYjV%2B92XWWjXWE6MbMWwlcKji38ai7UcwyJ7aCx26yWO4Lmert49TTBLX9BoK0ayJjtEpzEe1pfU2Stk%2BX%2BfL7OxDvOH5XL3%2FnQVfyp4zOkFWFYn4ugnTFOxt1Y99WVPe2e%2BzrYnqT8zUJON6BkBWnM6ckygeQ8vaKhKRQjX%2B2lyuJ0S74z1CpclECkTt226hgyBSix6FDjb7t4ll7Nz7vARqGYElpj7%2Fma%2FWzrhOGfMjVVLnp7CCEvfGrkqCNYMHzNN0qnib%2FssgZkM9ODdt6bIhMqePil6127pXyXlUjwXUP9UBlW3kx3uHcY0brMIXtkb0GOqUB5UM1sKmQx8EAKb%2FqQakyoq%2B4mWDdbRpJl758hylLp%2FLC4UND87KULjkLWa7ma2uNcUAKQ5uxZX8%2FyKEHm1b9sgg17T%2BF2eaJ0VVx7v4AwNOupJi1ZLhp5Wl%2BG6gTBZ%2B%2BGvXqr%2BTS6gEVg4uzYkzOfECANRbkVrk3BRUiUGE5rxYLXsnBz4IFBX1D1GCIXvBx2Be1Zm8J0LCz5LQ8DFMiCscqjk82&X-Amz-Signature=b7b08570cb3b4d72ac437f3e053e110b7145250e008df934567e72c37f730a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
