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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXHMFJLD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVN7eMZDJE97oCE5fC2lfcWGym%2F3ElKQWvOvPEJaqMxAiB4zKHzUZdsuDdqcEIhz9rDyqd1zCBnYl22E5hi9bj4cSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZkxmqaL97HS3T4beKtwDZdwR6PSTNwKq1g2iGgr%2B1eLheQ1B1sQfxVMFx31%2BOtQsBw%2B2U8TADka%2BKxhCJ0nW23bxLYzTuCGK6M0%2BftJoIFmF3NllsEC%2BPWhcTpCKQAYZTIvBITDE1HVih0QNIbYfyMspiXUkTyfesSjEl97wbHnrIjh5I0Cb9nSNpRSuJfjBEJFkt999TfmyneM%2B4FGWfVcegZS3%2BkSwybQMUcXPUcSycft%2FDXzpbKJRveJL%2FMc2%2FYh%2BGbZZYOjRSjSSvyoi5cMLLA6ZWP%2B0XDq7KAKwNuzNyBOhUmY7Bc9aA67gkFAnU60vp6o3jQeYihaKDjocWH9WJqryOXKBiXP0UDoyQNX3G%2FM5yDukbcB7ZNhWUMKiiBe35TGLK%2BZUbC9BqQ6mujgJ7bF1%2BIjdeFmnqvchOsZAg3NU69586Cxnux2shIn1Z7%2FJeyZj7CHT5OPF9CqO1Lew99iAijXskmlwJCSLvM1YCn84tcxv6kaP3kvbn7U62wknHcoNU%2FniElmsKqIwPlAU0jaY3cfGsX60yXi5jylhG8gskFhOAyRFr4%2B37ko%2Fp3RA7Pld2Es%2Bw25JquMsz0sU9pe4r7G9hwaHlJnNLLQ3SWAZz5WeLMEmfvgw9gZfqdxZJFfc3ccNUXAws63KwwY6pgFtBHGw4JFFKpFoSu8bRJjh19HxmPvLU2%2BlFSLYdDC3%2FGb1dYKM6h2qumTKNJeQ9FTllGZtq7IXEMlkJiWDabGSf2r8UBbvZKaDUnEs%2FrN08gaNzndEVlCpdFxsF1fCKqIFeSDTZfZ4I1ZP4SW6XdTXxwqGrAPRXvPFV43tB3fBdl8er9K1xZ9Lkc%2BPFp1uVbknDduL8DSlsqAAsewnQWtwz0wQb42a&X-Amz-Signature=6fd368962cdf4bc67bd9d90a28133971342fbab8716ebc7ab6ec301f2c568b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXHMFJLD%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVN7eMZDJE97oCE5fC2lfcWGym%2F3ElKQWvOvPEJaqMxAiB4zKHzUZdsuDdqcEIhz9rDyqd1zCBnYl22E5hi9bj4cSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZkxmqaL97HS3T4beKtwDZdwR6PSTNwKq1g2iGgr%2B1eLheQ1B1sQfxVMFx31%2BOtQsBw%2B2U8TADka%2BKxhCJ0nW23bxLYzTuCGK6M0%2BftJoIFmF3NllsEC%2BPWhcTpCKQAYZTIvBITDE1HVih0QNIbYfyMspiXUkTyfesSjEl97wbHnrIjh5I0Cb9nSNpRSuJfjBEJFkt999TfmyneM%2B4FGWfVcegZS3%2BkSwybQMUcXPUcSycft%2FDXzpbKJRveJL%2FMc2%2FYh%2BGbZZYOjRSjSSvyoi5cMLLA6ZWP%2B0XDq7KAKwNuzNyBOhUmY7Bc9aA67gkFAnU60vp6o3jQeYihaKDjocWH9WJqryOXKBiXP0UDoyQNX3G%2FM5yDukbcB7ZNhWUMKiiBe35TGLK%2BZUbC9BqQ6mujgJ7bF1%2BIjdeFmnqvchOsZAg3NU69586Cxnux2shIn1Z7%2FJeyZj7CHT5OPF9CqO1Lew99iAijXskmlwJCSLvM1YCn84tcxv6kaP3kvbn7U62wknHcoNU%2FniElmsKqIwPlAU0jaY3cfGsX60yXi5jylhG8gskFhOAyRFr4%2B37ko%2Fp3RA7Pld2Es%2Bw25JquMsz0sU9pe4r7G9hwaHlJnNLLQ3SWAZz5WeLMEmfvgw9gZfqdxZJFfc3ccNUXAws63KwwY6pgFtBHGw4JFFKpFoSu8bRJjh19HxmPvLU2%2BlFSLYdDC3%2FGb1dYKM6h2qumTKNJeQ9FTllGZtq7IXEMlkJiWDabGSf2r8UBbvZKaDUnEs%2FrN08gaNzndEVlCpdFxsF1fCKqIFeSDTZfZ4I1ZP4SW6XdTXxwqGrAPRXvPFV43tB3fBdl8er9K1xZ9Lkc%2BPFp1uVbknDduL8DSlsqAAsewnQWtwz0wQb42a&X-Amz-Signature=a93a6269163f5f7332492dc2096812ca0bf71ceef4dc1b2d6551a5aa88288a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
