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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJZKVB7%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCID1K4Vy7eAvpgvvy%2FLq8HHb7S7saKFHvNjsLons5eAQBAiA5nGMN44sWTTtZpqk1bN74OGv8JTYe90teYiC1elZfriqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMG2LAKUq0ltNeYx1KtwDA4bExtGbtZWCs7Le%2BfEZcDT6egY1fIbWZZC%2B5sCEltoND7L7Yp%2FfX%2Bbt9NcvjTu7Uk4sLVqxTNZ%2BNfK41YODW3bgjsrvDvIC1e9bYNbfjCKBtwzzouyMlKnezvb9yxnxBwrCuKbfGCVTxAK8zaixc%2FDIdwugvYAmn7mQGpRM3TzCXA5Ax9%2BaEwpRW0wH2oWqwWHGqDmHMaYM0B5h4fg%2FLXFux3D7Cb9RVnCdZZ9Z3fuo2tYCV5uKz0zlrzp3FF0ojlv3AK%2BiMkrngkzebrrwS18uODfwGDgMBLpRCp21p41bH57xG6Kh0Vqppbdw0TEhWPZerqWa5KL4j%2F1GxOSEenGohqa66za5b9TSrmt3X4YfQWahU1UVfZgnuCFP1Q9HebFiwtlVLCDaEUDzotTCwNSeDU6c73kZIOiypLJfHFrgz0PtL5R1q%2B38efHr124%2By5TSWbXYEq%2FqK98bkOTTTJWh34nVQoLHaMlDEa0wYhf%2BebS%2F%2BpiVwV%2FKrMYN6fG%2FOY37wHT6HhJrD90%2BJqxUGifJ%2FAEm1zehtSXglW%2F0NF%2B0T%2BfX%2F%2FX%2FddcWZ0a%2BpxR7RyHHSnnSsrLP44z6VrRXhPCe1SlK4jmLwHhMrz4Wa2gmSmQOM%2FXHgydJGBUwrZXSvQY6pgFRcphKDPftkRuFyrhWFzwZ%2BTox6UlAxn%2FrvFIF4TTvGcF%2BDglEMfg7a4ez80Dp6vRIKnIdF25Z67qiaMQ5aJdZps5rFGBXIO6M5poVMlvMUinAG2uxxUCnVy7d%2B8CAuORdPF%2FPSr8rB1E%2FoEycou%2FVg2LI7FLzA7UsEgTYfDE2MMO4FdetlrBZofR0liQOZMvJcGNSpVg4vgNKCp7EMo4KgU%2FU9KaP&X-Amz-Signature=ee783ae7622f2d573af94804a70ebae2de291ad83310e69fe8ab61b96d74015e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJZKVB7%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCID1K4Vy7eAvpgvvy%2FLq8HHb7S7saKFHvNjsLons5eAQBAiA5nGMN44sWTTtZpqk1bN74OGv8JTYe90teYiC1elZfriqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMG2LAKUq0ltNeYx1KtwDA4bExtGbtZWCs7Le%2BfEZcDT6egY1fIbWZZC%2B5sCEltoND7L7Yp%2FfX%2Bbt9NcvjTu7Uk4sLVqxTNZ%2BNfK41YODW3bgjsrvDvIC1e9bYNbfjCKBtwzzouyMlKnezvb9yxnxBwrCuKbfGCVTxAK8zaixc%2FDIdwugvYAmn7mQGpRM3TzCXA5Ax9%2BaEwpRW0wH2oWqwWHGqDmHMaYM0B5h4fg%2FLXFux3D7Cb9RVnCdZZ9Z3fuo2tYCV5uKz0zlrzp3FF0ojlv3AK%2BiMkrngkzebrrwS18uODfwGDgMBLpRCp21p41bH57xG6Kh0Vqppbdw0TEhWPZerqWa5KL4j%2F1GxOSEenGohqa66za5b9TSrmt3X4YfQWahU1UVfZgnuCFP1Q9HebFiwtlVLCDaEUDzotTCwNSeDU6c73kZIOiypLJfHFrgz0PtL5R1q%2B38efHr124%2By5TSWbXYEq%2FqK98bkOTTTJWh34nVQoLHaMlDEa0wYhf%2BebS%2F%2BpiVwV%2FKrMYN6fG%2FOY37wHT6HhJrD90%2BJqxUGifJ%2FAEm1zehtSXglW%2F0NF%2B0T%2BfX%2F%2FX%2FddcWZ0a%2BpxR7RyHHSnnSsrLP44z6VrRXhPCe1SlK4jmLwHhMrz4Wa2gmSmQOM%2FXHgydJGBUwrZXSvQY6pgFRcphKDPftkRuFyrhWFzwZ%2BTox6UlAxn%2FrvFIF4TTvGcF%2BDglEMfg7a4ez80Dp6vRIKnIdF25Z67qiaMQ5aJdZps5rFGBXIO6M5poVMlvMUinAG2uxxUCnVy7d%2B8CAuORdPF%2FPSr8rB1E%2FoEycou%2FVg2LI7FLzA7UsEgTYfDE2MMO4FdetlrBZofR0liQOZMvJcGNSpVg4vgNKCp7EMo4KgU%2FU9KaP&X-Amz-Signature=88c5e88fb3bb3fcbfff56c4fa81d18c23f587de9572e3100f3b95ba1afa279f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
