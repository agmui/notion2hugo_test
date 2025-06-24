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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDURZW6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDHZEHT%2FmC6bR7Na3VJn6FoXOlBKOpUlUg6wgyxT7oCIAiEAv7Phuh9pFH6VrnhQueQnKisUBddXD8aLdulN4liesLUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFFkgLVacNZdL920OircA%2Fu0r%2F9hw45QMMKaBWBhaBgXQbXnuq8q9TsGQi2Y9mgkTLOhZI8A14rZ%2B0fLPNYbpiSkay9BIlfmIMgJJXM%2FpQr0sJtBO91UHWmotagf1cM4X4FsqsC7zTSvr03%2BW4RH8YyHItru%2BLVIqnLYjBt80ZW9U%2FKXa3Cvi2oKmTT%2BK%2FtZUYUAZTXP23G3srRyGvFYrgFgpp3JGWb6yN%2BDxT%2FqVbBIW8YfKCTj4M6KHlRUjsoZwnWZ5nQLmnwLpHANtWR9NPbaozQu66bXtGQj0UETD9g8CvO7WAp4JKGrMNJ6C5iFcjKbyXSlvTGGI9Tj0DMowC24%2FPC0tsCHn%2BsGsperLgG9NJlgRRP%2F3P%2FS871%2FQcKhLoG23nQZzRvuZJPiG9SQ67GrHAHwnuY0tNV3osyPMA7KjmX8%2BPvUfhIJbgB02k9jnykIX11GHkIPTm0wGUBiebJR1XGCMUzUD82od5rH0XXQu2ZhsGkOlOk1qAH34rP4c1vAsLGU0EnHXWwy%2FK0IgExV5gb9uz3P1CkSTi%2BrweMlKa0dlF6Pty%2FM7IZBUJ1mpD1qSLQ0Kev3xhmCifeXLbVRUPKDYdLFOBcAXecU9Ah7yieaow%2FrTgPweGAn3TBx5iJ45yI4omTKvYvBMPvN6MIGOqUBOSxD22L%2BdTT7OYexEjHqGqJS70cofVMDmXvVqiFunnDQiPbFt85223o9kSGFEFrymxPrpCjqEzeLzqAM9rgStnUt%2BKXE%2F5PHTTtK95C9s0SjOoWMYMo7j%2B9M2ZlirnDi7zYv2fbTnWMB6aSrEe6AaDDeOteQ14BADFJtLCWTlZvWigUDx%2BuBt6IzY%2FLoqqD%2BaQRigNhj5fjyazVJE8oZYi2Wj6VH&X-Amz-Signature=ff55b1e5851dc9db6f78e574f1d8198a7f8de0f6224916f38fa01cd89fc2a8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDURZW6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDHZEHT%2FmC6bR7Na3VJn6FoXOlBKOpUlUg6wgyxT7oCIAiEAv7Phuh9pFH6VrnhQueQnKisUBddXD8aLdulN4liesLUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFFkgLVacNZdL920OircA%2Fu0r%2F9hw45QMMKaBWBhaBgXQbXnuq8q9TsGQi2Y9mgkTLOhZI8A14rZ%2B0fLPNYbpiSkay9BIlfmIMgJJXM%2FpQr0sJtBO91UHWmotagf1cM4X4FsqsC7zTSvr03%2BW4RH8YyHItru%2BLVIqnLYjBt80ZW9U%2FKXa3Cvi2oKmTT%2BK%2FtZUYUAZTXP23G3srRyGvFYrgFgpp3JGWb6yN%2BDxT%2FqVbBIW8YfKCTj4M6KHlRUjsoZwnWZ5nQLmnwLpHANtWR9NPbaozQu66bXtGQj0UETD9g8CvO7WAp4JKGrMNJ6C5iFcjKbyXSlvTGGI9Tj0DMowC24%2FPC0tsCHn%2BsGsperLgG9NJlgRRP%2F3P%2FS871%2FQcKhLoG23nQZzRvuZJPiG9SQ67GrHAHwnuY0tNV3osyPMA7KjmX8%2BPvUfhIJbgB02k9jnykIX11GHkIPTm0wGUBiebJR1XGCMUzUD82od5rH0XXQu2ZhsGkOlOk1qAH34rP4c1vAsLGU0EnHXWwy%2FK0IgExV5gb9uz3P1CkSTi%2BrweMlKa0dlF6Pty%2FM7IZBUJ1mpD1qSLQ0Kev3xhmCifeXLbVRUPKDYdLFOBcAXecU9Ah7yieaow%2FrTgPweGAn3TBx5iJ45yI4omTKvYvBMPvN6MIGOqUBOSxD22L%2BdTT7OYexEjHqGqJS70cofVMDmXvVqiFunnDQiPbFt85223o9kSGFEFrymxPrpCjqEzeLzqAM9rgStnUt%2BKXE%2F5PHTTtK95C9s0SjOoWMYMo7j%2B9M2ZlirnDi7zYv2fbTnWMB6aSrEe6AaDDeOteQ14BADFJtLCWTlZvWigUDx%2BuBt6IzY%2FLoqqD%2BaQRigNhj5fjyazVJE8oZYi2Wj6VH&X-Amz-Signature=8873c81e9c75af57326a5a4288f589e076595d2617b4c78251acec522bf918d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
