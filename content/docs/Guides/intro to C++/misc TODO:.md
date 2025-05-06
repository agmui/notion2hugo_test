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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YURTGLUQ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5cgCPXqCF3LGQyDyzhtSEA%2BccSWDJqVCQCd%2FZBgw1NAIhAKi6t3he5BgWwwKRvLSdpP71XEGfMeXJiHPzLX4UmuMJKv8DCD8QABoMNjM3NDIzMTgzODA1IgyY%2BOOPmMhl5I6FIHYq3AMgToHWJoRsTGdTd1tq7molMAgsKdjbHgI5Mlql3ZhOaNV6A2i1AOP%2Fs2rHb60AH%2FVsCx2ZZ4XTmip2Ubck5etMfqEDTmWJq%2B163SJumnKx9Z1HdUOe1ciy7vACiV8dR7x%2F3aT%2FlNtS6Bium1CX5Aw9ArcvC50mMNWNBMrAlpBwy9Nj%2FPmH1Asoi%2BxZNmHSHNvBwsxP56wKHQJa2D30GP88wXkl8yqryuNUczlWbAZc9E8bYexyZEHjJTvEmHAqWJEWOpspUT5im4mxwZO9g21S2akmQ29YnQSfwFa%2F1mxxTkwd7lV%2BlrxtVnrz40OImeZcMSNtry10oXUTzvgnhtK%2B5f%2FhRSpgwRMNtm0r8%2Fs5f1%2FlxBhEraKbziV1mo4rq5hQEyO5Pu3ytuIRjZhCKyh5XGa9E%2BzqKJjfr7KjfRQJDIHBu21MLtftBftBYd8lEElWhScE1eMxvk2ENKzhdNXq77Dt1AEtYbXKcGYxjy7x1ys4UqJAW%2BCMTBzQHnYDAsPy0TU4a52xv9OZNUK1VeKjjXCEBENDQP0QEe59AfipX3xSsEkj8IrI7GGnsSWe0anOKepjOCobAK64DLEz24WjGhpbuPKFMDQnpnO8IxAkel4hAlqK1xUyt7ouAzCp1ebABjqkAfeePmjYRmCU4NkH2YaG5ZmbjQFStQZCTJt5%2B4qq%2B8OAhbWKK8YZSbY9UbCyuiz3x3Q%2FwWlpstryLwsIs00CGUXROEzs8ruR374s2fV0KBPLetSwcHAsuwFvi114sKDZ7yK2Qc6r%2FJgC24LxvAh7jmukVb12qEhvh0h4v8iLYVNws2srQSH5it61jcWDCTpwhfsCDG%2BpMuzTO%2B8049HpyvoRjxCz&X-Amz-Signature=9b510895108635babdba6659292748c5740ec3be4e3c7c548e336f3152daf311&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YURTGLUQ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5cgCPXqCF3LGQyDyzhtSEA%2BccSWDJqVCQCd%2FZBgw1NAIhAKi6t3he5BgWwwKRvLSdpP71XEGfMeXJiHPzLX4UmuMJKv8DCD8QABoMNjM3NDIzMTgzODA1IgyY%2BOOPmMhl5I6FIHYq3AMgToHWJoRsTGdTd1tq7molMAgsKdjbHgI5Mlql3ZhOaNV6A2i1AOP%2Fs2rHb60AH%2FVsCx2ZZ4XTmip2Ubck5etMfqEDTmWJq%2B163SJumnKx9Z1HdUOe1ciy7vACiV8dR7x%2F3aT%2FlNtS6Bium1CX5Aw9ArcvC50mMNWNBMrAlpBwy9Nj%2FPmH1Asoi%2BxZNmHSHNvBwsxP56wKHQJa2D30GP88wXkl8yqryuNUczlWbAZc9E8bYexyZEHjJTvEmHAqWJEWOpspUT5im4mxwZO9g21S2akmQ29YnQSfwFa%2F1mxxTkwd7lV%2BlrxtVnrz40OImeZcMSNtry10oXUTzvgnhtK%2B5f%2FhRSpgwRMNtm0r8%2Fs5f1%2FlxBhEraKbziV1mo4rq5hQEyO5Pu3ytuIRjZhCKyh5XGa9E%2BzqKJjfr7KjfRQJDIHBu21MLtftBftBYd8lEElWhScE1eMxvk2ENKzhdNXq77Dt1AEtYbXKcGYxjy7x1ys4UqJAW%2BCMTBzQHnYDAsPy0TU4a52xv9OZNUK1VeKjjXCEBENDQP0QEe59AfipX3xSsEkj8IrI7GGnsSWe0anOKepjOCobAK64DLEz24WjGhpbuPKFMDQnpnO8IxAkel4hAlqK1xUyt7ouAzCp1ebABjqkAfeePmjYRmCU4NkH2YaG5ZmbjQFStQZCTJt5%2B4qq%2B8OAhbWKK8YZSbY9UbCyuiz3x3Q%2FwWlpstryLwsIs00CGUXROEzs8ruR374s2fV0KBPLetSwcHAsuwFvi114sKDZ7yK2Qc6r%2FJgC24LxvAh7jmukVb12qEhvh0h4v8iLYVNws2srQSH5it61jcWDCTpwhfsCDG%2BpMuzTO%2B8049HpyvoRjxCz&X-Amz-Signature=f2d15b101bed6f70dd13114d94388c4265c23b186681bc0f9dfc222bce980495&X-Amz-SignedHeaders=host&x-id=GetObject)

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
