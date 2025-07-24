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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625M3XESD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDjz4pJfa8dQeNmOI%2F5XRA8Qlyx38db5NbofHvcN%2F%2BwGQIhAK%2FIzNNqud5fCN7L0Hn2R8XHPieinqaSnQ5kqaLnCv%2B%2FKv8DCDcQABoMNjM3NDIzMTgzODA1Igyx7ZNDbaOSg2s9Ntcq3APDhZbEc6sgQW7elZkh3dxvmVwqU4jMdvNvy0Pnqkcsnu2j%2BHeFzMqFT9Gxi8Wwpv%2BD27Y60AtbkXAu4DmG%2FprO2gOGZnZeCIoJSsFjNbjRz6g3J1qvSWDa1uvM88YICNcRw%2BkhCL6jVq1hv29w88R28swHHcamu84sozCKG88PNhOGu2ITC0d4xtI98WQhNJZEyZposlzLLcm29irJ22zwzYZJtsLeWy8%2BOhTXI%2Ffs3%2BaGz7wAtQ0UoerjXORRQPeb5JlQG8OwQtdVzRHszrjn6JT7bBcVmhPLIj7RjccqlBLGxdHoW3G17VQRtay3KpUosKp1V%2BcjcLItmBK8yyaGsca%2FaElveI321mcfswyXwQ7bwU4U6Uhg00aHG%2BaOALWPq6%2Fn4LE7S%2FZBDzX2s34o62R3WHuad8ZLfHlBJZkFeeKJwxzLImf%2FIZagIGRh9TAqpOf6MlPwvNKl5cxOKqXY68oLqa0XivFNdTgBR%2BEzowu59B%2BbZ8j1GONfXjC%2B%2FK6G1J0bjDfdA0EHRg4GCZz2kyyRqchuINAKViIjazC7HzRGEfUQrQW8Q5u8N%2BdtKOnwGzRFi1N3JcBoWS0JFSq%2BBtZI44ZeFkFIymvTrox8PxaFSN9Sy9Xs6tBgNDDa14rEBjqkAdQ1jj6s%2BQrrRe7M%2F9isB7NlM5UHk5tZLn3mvtO9%2BJM9GDLGOC4KJxJR1fyLRnACgeXmPWjNvAPdqngUG6da%2BRTwTkAoiVK5q0pQEzB%2FpNXF5hMO5WQvhHJ5YaFQ1CRxlhb8OskBO%2BMmI5jLD0ItcIHW9%2FHYEl1KLuUz7%2B56yPKSZYYJTcnW1h4pZBbs8pPrw1Sza00wZmoyMzQtbnwp3XNDzCSr&X-Amz-Signature=0f78e9cc62385cf0af72b4b97a4fb472e35549274be2ccfa8304504109cbf20d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625M3XESD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDjz4pJfa8dQeNmOI%2F5XRA8Qlyx38db5NbofHvcN%2F%2BwGQIhAK%2FIzNNqud5fCN7L0Hn2R8XHPieinqaSnQ5kqaLnCv%2B%2FKv8DCDcQABoMNjM3NDIzMTgzODA1Igyx7ZNDbaOSg2s9Ntcq3APDhZbEc6sgQW7elZkh3dxvmVwqU4jMdvNvy0Pnqkcsnu2j%2BHeFzMqFT9Gxi8Wwpv%2BD27Y60AtbkXAu4DmG%2FprO2gOGZnZeCIoJSsFjNbjRz6g3J1qvSWDa1uvM88YICNcRw%2BkhCL6jVq1hv29w88R28swHHcamu84sozCKG88PNhOGu2ITC0d4xtI98WQhNJZEyZposlzLLcm29irJ22zwzYZJtsLeWy8%2BOhTXI%2Ffs3%2BaGz7wAtQ0UoerjXORRQPeb5JlQG8OwQtdVzRHszrjn6JT7bBcVmhPLIj7RjccqlBLGxdHoW3G17VQRtay3KpUosKp1V%2BcjcLItmBK8yyaGsca%2FaElveI321mcfswyXwQ7bwU4U6Uhg00aHG%2BaOALWPq6%2Fn4LE7S%2FZBDzX2s34o62R3WHuad8ZLfHlBJZkFeeKJwxzLImf%2FIZagIGRh9TAqpOf6MlPwvNKl5cxOKqXY68oLqa0XivFNdTgBR%2BEzowu59B%2BbZ8j1GONfXjC%2B%2FK6G1J0bjDfdA0EHRg4GCZz2kyyRqchuINAKViIjazC7HzRGEfUQrQW8Q5u8N%2BdtKOnwGzRFi1N3JcBoWS0JFSq%2BBtZI44ZeFkFIymvTrox8PxaFSN9Sy9Xs6tBgNDDa14rEBjqkAdQ1jj6s%2BQrrRe7M%2F9isB7NlM5UHk5tZLn3mvtO9%2BJM9GDLGOC4KJxJR1fyLRnACgeXmPWjNvAPdqngUG6da%2BRTwTkAoiVK5q0pQEzB%2FpNXF5hMO5WQvhHJ5YaFQ1CRxlhb8OskBO%2BMmI5jLD0ItcIHW9%2FHYEl1KLuUz7%2B56yPKSZYYJTcnW1h4pZBbs8pPrw1Sza00wZmoyMzQtbnwp3XNDzCSr&X-Amz-Signature=7233a6c8f5401536ac3aca773742d042eacf65c863314a66ad4a3c89697777f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
