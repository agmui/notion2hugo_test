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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHUOEIS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Brkj3BwRYsBh6FcKDwXjrRmrTyD%2Fc0RnXej2JICwxgIhAIFiiFqazZo0dOZ1caHpKMp0llUhSIfIwP4BDxSBbU%2BpKv8DCD0QABoMNjM3NDIzMTgzODA1IgzVS%2BJRe89nBNyC3fUq3AP0wXfrdscExa0DkBSnfod%2FZbef90HRXNu9z6ywFqpwfpej4TdP%2BXX1a4pCssVXvdWoLCY%2BdTHkK6xUgYN6%2FSmsFnw0gwAvOFr8S1fnTDC82jYixv9cc7MeqFe5CmcpyTNh6Z35QYFLZlwycEcG6TFMIFzlTOPEf369AWRsMjqWpoD9kNvmhYmLbJiWBWHG9rVxadz%2BgDfFTJgx1mXJuSEVXUi5yVJmbtsJ1H1qqIsbF9bO6QupZzUuRgjbZ%2B%2BeVnl%2FJhpXE71sJ%2Fq7v1XvAQx0ixmLBQXRtBz0tqt1x42WH5xb2rINEHfPJcpqxRscreGtpzZ8rqn92kD9MxDIycEIRIGXrvVPtYWMMHrLW2i3OitwydhGtyOn0m7rLsQYQkQrFa5e0Ku4Wrwce%2Be7b7VFfY34MvSP%2BMqPD4TQvXfKxsG9Qe9DG6vIf98bxqS6vIXTMwqDNZQXHzo0NMSpI6p%2BIov%2FQzBlYV53zfUkARlhLgjS9fHpHpecBmzHMlNPK933wr%2Ft4w6v6IKIz3kLdz3sg68uwZDwKfPkVDVWf%2F867ZXSfJeunPVWDhFkMgxSV%2FDXOnxaa96VW3HeT%2FESk2N%2BwibQezts87eACZ3v30hBoLOZ9pig5iOiSiYQsjDU6Me%2FBjqkAf2TDpUKUslqWrK5neFGTsqqo5yqxx25Rklsog%2FWrv95t0Yxabrgndj8Fni3gLmP5UUQjdcTAk%2Fqdf4q0wf9llgfNyj1Id1zXcXPsrF7zdWf2jDkkXtt17BX4OaYtXclwMRg3b3Z1a5DOpR2uGqSJUzocSkpXu4S5yS5ZR1Dvp8BK8zTH6zWjjvXPnge%2F7W1w%2FtYxq7va7upSQcQvkoUFQMFj3qM&X-Amz-Signature=19cc44ee11b1701fcd4c450c4546f911f37f2df9b551d1f8586281d1f07b221e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHUOEIS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Brkj3BwRYsBh6FcKDwXjrRmrTyD%2Fc0RnXej2JICwxgIhAIFiiFqazZo0dOZ1caHpKMp0llUhSIfIwP4BDxSBbU%2BpKv8DCD0QABoMNjM3NDIzMTgzODA1IgzVS%2BJRe89nBNyC3fUq3AP0wXfrdscExa0DkBSnfod%2FZbef90HRXNu9z6ywFqpwfpej4TdP%2BXX1a4pCssVXvdWoLCY%2BdTHkK6xUgYN6%2FSmsFnw0gwAvOFr8S1fnTDC82jYixv9cc7MeqFe5CmcpyTNh6Z35QYFLZlwycEcG6TFMIFzlTOPEf369AWRsMjqWpoD9kNvmhYmLbJiWBWHG9rVxadz%2BgDfFTJgx1mXJuSEVXUi5yVJmbtsJ1H1qqIsbF9bO6QupZzUuRgjbZ%2B%2BeVnl%2FJhpXE71sJ%2Fq7v1XvAQx0ixmLBQXRtBz0tqt1x42WH5xb2rINEHfPJcpqxRscreGtpzZ8rqn92kD9MxDIycEIRIGXrvVPtYWMMHrLW2i3OitwydhGtyOn0m7rLsQYQkQrFa5e0Ku4Wrwce%2Be7b7VFfY34MvSP%2BMqPD4TQvXfKxsG9Qe9DG6vIf98bxqS6vIXTMwqDNZQXHzo0NMSpI6p%2BIov%2FQzBlYV53zfUkARlhLgjS9fHpHpecBmzHMlNPK933wr%2Ft4w6v6IKIz3kLdz3sg68uwZDwKfPkVDVWf%2F867ZXSfJeunPVWDhFkMgxSV%2FDXOnxaa96VW3HeT%2FESk2N%2BwibQezts87eACZ3v30hBoLOZ9pig5iOiSiYQsjDU6Me%2FBjqkAf2TDpUKUslqWrK5neFGTsqqo5yqxx25Rklsog%2FWrv95t0Yxabrgndj8Fni3gLmP5UUQjdcTAk%2Fqdf4q0wf9llgfNyj1Id1zXcXPsrF7zdWf2jDkkXtt17BX4OaYtXclwMRg3b3Z1a5DOpR2uGqSJUzocSkpXu4S5yS5ZR1Dvp8BK8zTH6zWjjvXPnge%2F7W1w%2FtYxq7va7upSQcQvkoUFQMFj3qM&X-Amz-Signature=a20bcdb0ac6f8411a2e36ed097c2668bf90305ae2edbe8fc7b72b7ea18180461&X-Amz-SignedHeaders=host&x-id=GetObject)

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
