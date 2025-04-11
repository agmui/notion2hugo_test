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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2IPSX3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCICQl5Qi1h1R1B9jUeZ7%2FxPJxOsQTyIhUva%2F6%2F%2BZkZkSmAiAVoKyMKhoTfCk26VTkIZzy4b8YGjIrNK0ORuzhsNpC8CqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Zb76GGYlBSbin2fKtwD%2F2ERgIsJElP1pIs9IeqaRxa%2BzUTVVY%2Bcmh1ea4nuL7L9dFtwRVZ8qQaoz1jqOiGSyHH3MorU3wp7obCNBXzUBmbKXYjedBhFcK%2FdbBQxky0cjE6AOKqkqFKfo2JMmM0mZFHU%2FHIF5aCQewcrWLMQyvskhv5F0Vqd3MxNDwNL%2BkQrj9ZSUZI%2FtBepI9YRKEyLUYycD2W4sa8W%2Fv96zZCvrw3djTXNnHWtk6bbRxUaMp4d%2BgSfP0OXVYAiaBXyYQ1iq%2BYd%2Fi3vc0F9QG3D%2FvKnsgv8gjMc4XC5hxLnOZu%2FkplUCNAGeDVxCxtoGri5Q6OWCi%2F4bRWxOlfJ0qyYdPWP3w8Bw5kkWwAWM19prUO6kFEAOOT9%2Bv8uFGeeIGJtCY8eDVZnOxKwFYMtFeTTWeZPOMaGFszNLVcXcxblmInacYSv5o6FQEWB7orWbIwKR5RawqAiq5G2VtcmxVwGvyQA1g5%2BLy5RV%2FXOZAxJLOwSPgkFCGAVbWciE5N3bMT9v%2FrKgAWCY1wBK2n8jZgKy8gMQHAOFd0h24aS6OjSsUT0LstS%2BVmZvbSaxKoq9EpjH7E%2BOM6uCPNdxta58GyJDfXacPDyIkYE5UtLGtvaKI8wx1dVAyFKsKDXVbETqv8ww8rjvwY6pgFCCPt%2F83ooogmGhN5DBZU5WXb1%2BQHoyzWOVf2WGda%2FcNIXRwIJFy%2BhzFxLQXlSf0CiK2e1t%2FsQETxl5QvuLSPgHWfiTow%2FK8hj6Md%2B%2FOuLbMtjHBawvdCHCUQuI5hy9P%2BqZ1IVwtlerwDrqF%2Btjd8EwLAmODFwPZzhD%2B%2BOi4It2SC%2BULDMs3Zcijrb3UZmvtH48jcIlReIl0jhmhsE21fazr2e7A8R&X-Amz-Signature=16c6b13d3ec3877503ffb662944a9fe6341c4760a7cf0729056279929878b930&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2IPSX3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCICQl5Qi1h1R1B9jUeZ7%2FxPJxOsQTyIhUva%2F6%2F%2BZkZkSmAiAVoKyMKhoTfCk26VTkIZzy4b8YGjIrNK0ORuzhsNpC8CqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Zb76GGYlBSbin2fKtwD%2F2ERgIsJElP1pIs9IeqaRxa%2BzUTVVY%2Bcmh1ea4nuL7L9dFtwRVZ8qQaoz1jqOiGSyHH3MorU3wp7obCNBXzUBmbKXYjedBhFcK%2FdbBQxky0cjE6AOKqkqFKfo2JMmM0mZFHU%2FHIF5aCQewcrWLMQyvskhv5F0Vqd3MxNDwNL%2BkQrj9ZSUZI%2FtBepI9YRKEyLUYycD2W4sa8W%2Fv96zZCvrw3djTXNnHWtk6bbRxUaMp4d%2BgSfP0OXVYAiaBXyYQ1iq%2BYd%2Fi3vc0F9QG3D%2FvKnsgv8gjMc4XC5hxLnOZu%2FkplUCNAGeDVxCxtoGri5Q6OWCi%2F4bRWxOlfJ0qyYdPWP3w8Bw5kkWwAWM19prUO6kFEAOOT9%2Bv8uFGeeIGJtCY8eDVZnOxKwFYMtFeTTWeZPOMaGFszNLVcXcxblmInacYSv5o6FQEWB7orWbIwKR5RawqAiq5G2VtcmxVwGvyQA1g5%2BLy5RV%2FXOZAxJLOwSPgkFCGAVbWciE5N3bMT9v%2FrKgAWCY1wBK2n8jZgKy8gMQHAOFd0h24aS6OjSsUT0LstS%2BVmZvbSaxKoq9EpjH7E%2BOM6uCPNdxta58GyJDfXacPDyIkYE5UtLGtvaKI8wx1dVAyFKsKDXVbETqv8ww8rjvwY6pgFCCPt%2F83ooogmGhN5DBZU5WXb1%2BQHoyzWOVf2WGda%2FcNIXRwIJFy%2BhzFxLQXlSf0CiK2e1t%2FsQETxl5QvuLSPgHWfiTow%2FK8hj6Md%2B%2FOuLbMtjHBawvdCHCUQuI5hy9P%2BqZ1IVwtlerwDrqF%2Btjd8EwLAmODFwPZzhD%2B%2BOi4It2SC%2BULDMs3Zcijrb3UZmvtH48jcIlReIl0jhmhsE21fazr2e7A8R&X-Amz-Signature=c989153ef6501f1f92e44889e9c0c2a53827e9ec251892ad05899662c85f6e33&X-Amz-SignedHeaders=host&x-id=GetObject)

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
