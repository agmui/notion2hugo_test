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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GUYPQT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAgyng2TFARJLfvWjRncUBTwai98Lo7jWaHkW0ujTa%2BgIhAOulh48mKbS%2B1ykG0%2Bo9O%2FMig2SOGMPC24wj2J5Hm2GJKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy01ETfhWfBx%2Fue%2BIoq3APAq8xS2FeCQ%2FKyphrWt3oBXx%2BVHKJ%2BtD3nQbcZOBvfxpg%2F6Y0idGoSRoSUGZqvcxX2Srxsa%2BNRSgflsX2%2BWYaTjYdFUVx3dWEnSG%2B7ASfL4G2HW0x19gAZovbNJhqe50Grz%2BCzrXiiy3W1sPLVKrJfdMxduBMGwIBcoeLUrxg6XPOKLgFgt46VZkdyft%2FrgevicGeYq5NWWn1GHHdLTvVTqSk1akwQFizpUpr39XdtZRyugp%2FJ6Mwm%2FYe0c0FODvJltkPh%2FtawWYqzYuZxenM4VVXI85UnR0MQv3yzVXUtGwkN5Z%2FXonExoAVmOSMFNvadsNTyIKLqW7h8HRXycZOnSaq05h8fPldFYbLVfgUNSfmZpKnCVKCgLvZy29Y6TOIDkjNuQm2g4n8CsobAySIcfS9MtWgDJLGaMNdFbT90FTklyPuqDFIIO479nJl%2B6DR%2BWsXS5QAed5mVNtypxsu%2FHjmKPAjF5%2BAnpjS1ekjWQ%2BhSjZ9dv%2BGjmp310nnCVW5iOg8mma8hIMl6MTttKpyE6J21Dl2XHtGlndQrDU8VGNos4rbewiH5XbymDgwzqBLDacL%2Fny6VCGYaDe%2BYQD%2Bio1%2FL%2Flqru6QrNjHcYB6B%2Fr%2FqSQ09qS47C9BZGjC5z9nCBjqkAVyF7pd9AhUgz1tKKti1f14UFogRC5JNYyvMw7paR6vIZ%2FkaKP2nfoMNbPwpAdLRtYhMcqVIIZU691IMVh1PY4VmxnFSrF%2BF%2FYJ2I678DbaTwHQAjlBPuMgEVEqQe%2BCHlT3VkWsVsuG4cjjkpRiIIGkCeFnZTJYjKZ%2BYBnQO2Odw9fP46Q5a9bjCtCMaVlui7QjbU2dyL5Zm5EwHiKl9Z90usaGW&X-Amz-Signature=20ca34d2bfb89872602b06e51cdd067ce2fc1db43e115db32b81a0bbafc0c4e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GUYPQT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAgyng2TFARJLfvWjRncUBTwai98Lo7jWaHkW0ujTa%2BgIhAOulh48mKbS%2B1ykG0%2Bo9O%2FMig2SOGMPC24wj2J5Hm2GJKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy01ETfhWfBx%2Fue%2BIoq3APAq8xS2FeCQ%2FKyphrWt3oBXx%2BVHKJ%2BtD3nQbcZOBvfxpg%2F6Y0idGoSRoSUGZqvcxX2Srxsa%2BNRSgflsX2%2BWYaTjYdFUVx3dWEnSG%2B7ASfL4G2HW0x19gAZovbNJhqe50Grz%2BCzrXiiy3W1sPLVKrJfdMxduBMGwIBcoeLUrxg6XPOKLgFgt46VZkdyft%2FrgevicGeYq5NWWn1GHHdLTvVTqSk1akwQFizpUpr39XdtZRyugp%2FJ6Mwm%2FYe0c0FODvJltkPh%2FtawWYqzYuZxenM4VVXI85UnR0MQv3yzVXUtGwkN5Z%2FXonExoAVmOSMFNvadsNTyIKLqW7h8HRXycZOnSaq05h8fPldFYbLVfgUNSfmZpKnCVKCgLvZy29Y6TOIDkjNuQm2g4n8CsobAySIcfS9MtWgDJLGaMNdFbT90FTklyPuqDFIIO479nJl%2B6DR%2BWsXS5QAed5mVNtypxsu%2FHjmKPAjF5%2BAnpjS1ekjWQ%2BhSjZ9dv%2BGjmp310nnCVW5iOg8mma8hIMl6MTttKpyE6J21Dl2XHtGlndQrDU8VGNos4rbewiH5XbymDgwzqBLDacL%2Fny6VCGYaDe%2BYQD%2Bio1%2FL%2Flqru6QrNjHcYB6B%2Fr%2FqSQ09qS47C9BZGjC5z9nCBjqkAVyF7pd9AhUgz1tKKti1f14UFogRC5JNYyvMw7paR6vIZ%2FkaKP2nfoMNbPwpAdLRtYhMcqVIIZU691IMVh1PY4VmxnFSrF%2BF%2FYJ2I678DbaTwHQAjlBPuMgEVEqQe%2BCHlT3VkWsVsuG4cjjkpRiIIGkCeFnZTJYjKZ%2BYBnQO2Odw9fP46Q5a9bjCtCMaVlui7QjbU2dyL5Zm5EwHiKl9Z90usaGW&X-Amz-Signature=d24b448f96acea1698efc893f92e54c5f824a2e0eed9d2549e27b5e6fd228893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
