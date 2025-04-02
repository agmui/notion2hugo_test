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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFU7BCN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDfA1rwxU9ePxXQ6M2oFiEXBGoMqxCeY8odCP5rPzSUcwIhAN9k4RMYA7HCtBhA20YkSMClJim2aZ4qj1VB78%2BEiFRzKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhuF8%2BwotnBd%2BpFbQq3APB%2BNwMcrXIBpWoViGBXOd6Ja0gD83cv%2Fb%2FU7W%2BTn1MkRLVJziC1H8ypukIAwK9ZEZiiPUl3OsIoscagVtAjdvvjOKRVCPQkvHJIed9%2BOqg1o4FN%2B%2B%2B67qCL5ULz8Jdk2dJHI3%2BOuaDPryf3FPVIxixBNdyeYR8JeiOe%2F8eMjv4XWCABn9nLWaG6hTw%2BTIOY6lzYka4WXZ%2F3iD0ggPiDqg8V5hXejpsdjRC%2FsREwPT6D%2BSrhAGNHA5fvgneMkvwlldAHrpoyoaGOR0doI2Ev7lFHoeqpdLBlZ5mdLiFNMEbPskOSJX6Ewn8zIjwL68%2BnmyZ4oL2%2FhmDj2qNRDpaViYDMFHvU5mu0adtrnd8ISqVPT5yCllWJcYtmi%2FknvELelU3cYhrPzsPPe7rp6OzSjy4ZiY4H31VU8CXuya8hocMF3mZvPn7A0RGHlqn9XKHOQWRbToe9Mbnx%2F7i%2BZd%2FuD3din7EP99Ijixo%2Fh1xFQ%2FmU4LxL0DL3zc8tCU3xSldi77Ww3iFYk1l1xTUALhnjpLtMNImdyDJQSKMb16I6ChzYfj%2Be4x1vQv9K2ZXRoLB0yyqe5732O2TUUtyctIHmaHYBptc%2FPzK3NMmZE9UtVCSHss6IYG%2BozXSL2odSTCdtbO%2FBjqkAas7dnY%2Fc3UyNPd0rQijoj7e0NeRYrKmh0TW1ki7rzk19iawnPPkXXmAHoTyrFpYsYc3tAPKp7H2P1TOcGwuW1Su%2BaIQLB%2BuMxkTjI%2FxWc6WCkKmaYB0L%2Fhf6bkNEbbHHrv4VSjruu56QstNViKBTlqpTjBH9HdU5r%2B2z1kU0%2BiYn32ys4BtyXZnmmfCq9dFhaQ%2BBy4qGN0oKzyn4E8Re3TZVsc0&X-Amz-Signature=51d1d434c4c222991df4fda89f3b857d3e6b6f6e5bbf61ce72c2535bea2842bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFU7BCN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDfA1rwxU9ePxXQ6M2oFiEXBGoMqxCeY8odCP5rPzSUcwIhAN9k4RMYA7HCtBhA20YkSMClJim2aZ4qj1VB78%2BEiFRzKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhuF8%2BwotnBd%2BpFbQq3APB%2BNwMcrXIBpWoViGBXOd6Ja0gD83cv%2Fb%2FU7W%2BTn1MkRLVJziC1H8ypukIAwK9ZEZiiPUl3OsIoscagVtAjdvvjOKRVCPQkvHJIed9%2BOqg1o4FN%2B%2B%2B67qCL5ULz8Jdk2dJHI3%2BOuaDPryf3FPVIxixBNdyeYR8JeiOe%2F8eMjv4XWCABn9nLWaG6hTw%2BTIOY6lzYka4WXZ%2F3iD0ggPiDqg8V5hXejpsdjRC%2FsREwPT6D%2BSrhAGNHA5fvgneMkvwlldAHrpoyoaGOR0doI2Ev7lFHoeqpdLBlZ5mdLiFNMEbPskOSJX6Ewn8zIjwL68%2BnmyZ4oL2%2FhmDj2qNRDpaViYDMFHvU5mu0adtrnd8ISqVPT5yCllWJcYtmi%2FknvELelU3cYhrPzsPPe7rp6OzSjy4ZiY4H31VU8CXuya8hocMF3mZvPn7A0RGHlqn9XKHOQWRbToe9Mbnx%2F7i%2BZd%2FuD3din7EP99Ijixo%2Fh1xFQ%2FmU4LxL0DL3zc8tCU3xSldi77Ww3iFYk1l1xTUALhnjpLtMNImdyDJQSKMb16I6ChzYfj%2Be4x1vQv9K2ZXRoLB0yyqe5732O2TUUtyctIHmaHYBptc%2FPzK3NMmZE9UtVCSHss6IYG%2BozXSL2odSTCdtbO%2FBjqkAas7dnY%2Fc3UyNPd0rQijoj7e0NeRYrKmh0TW1ki7rzk19iawnPPkXXmAHoTyrFpYsYc3tAPKp7H2P1TOcGwuW1Su%2BaIQLB%2BuMxkTjI%2FxWc6WCkKmaYB0L%2Fhf6bkNEbbHHrv4VSjruu56QstNViKBTlqpTjBH9HdU5r%2B2z1kU0%2BiYn32ys4BtyXZnmmfCq9dFhaQ%2BBy4qGN0oKzyn4E8Re3TZVsc0&X-Amz-Signature=2a071d8767c0528a7c788ec4b4a53639d8c3af3acefd287140f895dedb6f07e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
