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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQTCD4QU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCxikBj3l5uXZkCKcuwLV4bLRXIBuSt6y6rie6u3ZldPAIhAKfea5Uo%2FuQ9Q0YPThhJ5srmbWylj6lbyh0mdxoQi5UIKv8DCD8QABoMNjM3NDIzMTgzODA1IgyJmX3IMjVKlbwRbRoq3ANrCWCq4ZRL2PO1Xp2DmwuEufA%2FYTYIOSe4Mwa2BDztKbQp59T8f%2FMU0c5OzJOSK7OYDJ8OvyuUhcX6Roa1BVldUpQS3TROX3mBUwuuif%2BzNm9Z7BWQdA2vkoLg8NaEbkRWP2P2dOoIqlkT%2FLgSPyYJ1rtqV1falppbXG06J2OqMBHQ2CI2fNYQcfj17wLG6f65Frz22tSDbZr5yrORqBwy5bTbPPXzP%2FWfE%2Bd7pgPkcG39AX%2F92AxMas01POQgIzb8tnCc%2FQFds5tI9o09Z0PVXLOXo5HM4CCJmDeYelxcFUjvfHy6C0XfZRyxYKoJavq5jqQvuacyyecz8TRWQoZEQ%2F5hRk61E2uh4YE%2Byt0xCQz21x5RUzH4QzeiqduyS82JBrWC5iKRkHMYJ3ZyAYJP9eJ1Qw5j7a3PRTmmk3P9EBmDKVqmbO4px6e3YXqJHzN41GSGLDLdVciK5enezNy5IlKDlq3i92E%2FeKpTUSbg9nzrZlz7fW2hFiL6RsnVSRrTQou4R4SMgnKAOrAZk3pLZOlyipievUKZgADrP1xiBH4zgHmlqqvsSun07eKkK3ebpdLNES77RTTKJKTyl5wJOA2ekgDJb4jzfl%2BbeXYoJegy0oKXRjHzpCL2KTD25YTCBjqkAZfXlCLQhXoUupcqKulG2UdZGCu0YR9wfdkxY%2FoAlSR%2FmLOGSC6yVnqyEwNSGRkh5PI%2B81K3t4tBBmDf6lNO4gRTfWVWHLiuReK%2BG1kzcxX1rwpKuulEtBgF9wcZRLA1NYoFTBXEKVfDm53DDWle9ijHXetr8V2Effmuf0Q1NdGRgpPxmjnEHmHdn%2FJ1pRe6sCXssg39bFz9N1JStKNN00eoK%2Bt7&X-Amz-Signature=8a2e7af2cf3502654d6384fe6efce172113b07838d3074d5b64f405c5269af59&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQTCD4QU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCxikBj3l5uXZkCKcuwLV4bLRXIBuSt6y6rie6u3ZldPAIhAKfea5Uo%2FuQ9Q0YPThhJ5srmbWylj6lbyh0mdxoQi5UIKv8DCD8QABoMNjM3NDIzMTgzODA1IgyJmX3IMjVKlbwRbRoq3ANrCWCq4ZRL2PO1Xp2DmwuEufA%2FYTYIOSe4Mwa2BDztKbQp59T8f%2FMU0c5OzJOSK7OYDJ8OvyuUhcX6Roa1BVldUpQS3TROX3mBUwuuif%2BzNm9Z7BWQdA2vkoLg8NaEbkRWP2P2dOoIqlkT%2FLgSPyYJ1rtqV1falppbXG06J2OqMBHQ2CI2fNYQcfj17wLG6f65Frz22tSDbZr5yrORqBwy5bTbPPXzP%2FWfE%2Bd7pgPkcG39AX%2F92AxMas01POQgIzb8tnCc%2FQFds5tI9o09Z0PVXLOXo5HM4CCJmDeYelxcFUjvfHy6C0XfZRyxYKoJavq5jqQvuacyyecz8TRWQoZEQ%2F5hRk61E2uh4YE%2Byt0xCQz21x5RUzH4QzeiqduyS82JBrWC5iKRkHMYJ3ZyAYJP9eJ1Qw5j7a3PRTmmk3P9EBmDKVqmbO4px6e3YXqJHzN41GSGLDLdVciK5enezNy5IlKDlq3i92E%2FeKpTUSbg9nzrZlz7fW2hFiL6RsnVSRrTQou4R4SMgnKAOrAZk3pLZOlyipievUKZgADrP1xiBH4zgHmlqqvsSun07eKkK3ebpdLNES77RTTKJKTyl5wJOA2ekgDJb4jzfl%2BbeXYoJegy0oKXRjHzpCL2KTD25YTCBjqkAZfXlCLQhXoUupcqKulG2UdZGCu0YR9wfdkxY%2FoAlSR%2FmLOGSC6yVnqyEwNSGRkh5PI%2B81K3t4tBBmDf6lNO4gRTfWVWHLiuReK%2BG1kzcxX1rwpKuulEtBgF9wcZRLA1NYoFTBXEKVfDm53DDWle9ijHXetr8V2Effmuf0Q1NdGRgpPxmjnEHmHdn%2FJ1pRe6sCXssg39bFz9N1JStKNN00eoK%2Bt7&X-Amz-Signature=a22c9ed65799abfd8a71849d1babb951c3f1ee3162c311779e4262f47beb5483&X-Amz-SignedHeaders=host&x-id=GetObject)

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
