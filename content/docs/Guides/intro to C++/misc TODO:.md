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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64YCEU7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDpuZWS4999%2BuXUJFWM7hnkBKpfcGzu9cTcG7jXN6xNsgIhAJ1U8Iu0KEd8oCupUIw5IafEgv9mbYg1acWpNBfe7ipWKv8DCBMQABoMNjM3NDIzMTgzODA1IgxLEJ2%2FFD6HNI7QukMq3ANO9c2cb2t8srzMQjO3AlGWhR1TWyT1x0Mbf0JIqHnoMmu49XFj4mNsLqzCQOYoMpmJxoHnWj%2Bk%2FYw6ZPTBldsZiS1fEnvFOKMXCY1Gv2QRVk0cEq56CVP3h75HjYqfobgjhlqlDniOjhgg2r4h7E9holwdgLkp0Fy4Lxp3jqO7ugnOSk5Adp%2BJLt8bK%2BttuJ9hi3s0Qw3anJNwACjEtC7rjmY98M6uM399YdpOaJqj2qc1mDH6vEaV%2BmsXxWEmPiYnEpGDswcd70nf2OBU%2BypAR8mYyha7ZNWDWHtK6mnomYlZ%2B10FwrSGKG1Tgh3ZepkpaVidnMmWIbM%2FEFHRPCwhqBG2VRI5a1mUEUlsltdCKJ6egIc%2FuptQ1WK%2Fei%2FgSmdMUw1HKdxS91TsQCULzu1unVZsBzQOnDDV4K9I5WnLnOBfxeqRMCZPvTz8NpjUQv0lj7aJE%2B1YqTUVdXvcVylX%2BluMVCrD7qktQSWxg5s3%2FiYZQZTIOL%2Bw%2B%2FXX1cXHkDpOXK2oxKgilaL3TY84mOjK2SCA%2F4%2FyVcf7txZaRvSkaEPvFRvjEZF6wkOJUwqn%2BduWPSftQLY8Vrnl3s5NhrkE1zrQZoryLXA6XbrwyyMz7%2FxWMGE7ZmLms%2B3b8TCIrsbBBjqkARLqN4JQYTDQ9zzLIUSQnZD5FSb0HL%2BACMgYm0Q3xV6SbKrq1i7bZ%2BtMAlMFrH%2FRLyVhtXR8OUG5I3dFXY%2BxcRYm0lVuRReGJ9RrdP%2F6OlDGOoOKO585A%2BujldLlIIcYFHoa1CiXxjL49UrjpUhhaHrYbMBuz0nVVfnl1r0VqFVhL1t25%2F40LOK2yQIqJPO6XMf4ITJJA4fUnaK9d0TTsF9nA6PL&X-Amz-Signature=3e3d3f760dcd489040ffde51472e7778ea24f1f9dc1014cb8c2afac18490f01c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64YCEU7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDpuZWS4999%2BuXUJFWM7hnkBKpfcGzu9cTcG7jXN6xNsgIhAJ1U8Iu0KEd8oCupUIw5IafEgv9mbYg1acWpNBfe7ipWKv8DCBMQABoMNjM3NDIzMTgzODA1IgxLEJ2%2FFD6HNI7QukMq3ANO9c2cb2t8srzMQjO3AlGWhR1TWyT1x0Mbf0JIqHnoMmu49XFj4mNsLqzCQOYoMpmJxoHnWj%2Bk%2FYw6ZPTBldsZiS1fEnvFOKMXCY1Gv2QRVk0cEq56CVP3h75HjYqfobgjhlqlDniOjhgg2r4h7E9holwdgLkp0Fy4Lxp3jqO7ugnOSk5Adp%2BJLt8bK%2BttuJ9hi3s0Qw3anJNwACjEtC7rjmY98M6uM399YdpOaJqj2qc1mDH6vEaV%2BmsXxWEmPiYnEpGDswcd70nf2OBU%2BypAR8mYyha7ZNWDWHtK6mnomYlZ%2B10FwrSGKG1Tgh3ZepkpaVidnMmWIbM%2FEFHRPCwhqBG2VRI5a1mUEUlsltdCKJ6egIc%2FuptQ1WK%2Fei%2FgSmdMUw1HKdxS91TsQCULzu1unVZsBzQOnDDV4K9I5WnLnOBfxeqRMCZPvTz8NpjUQv0lj7aJE%2B1YqTUVdXvcVylX%2BluMVCrD7qktQSWxg5s3%2FiYZQZTIOL%2Bw%2B%2FXX1cXHkDpOXK2oxKgilaL3TY84mOjK2SCA%2F4%2FyVcf7txZaRvSkaEPvFRvjEZF6wkOJUwqn%2BduWPSftQLY8Vrnl3s5NhrkE1zrQZoryLXA6XbrwyyMz7%2FxWMGE7ZmLms%2B3b8TCIrsbBBjqkARLqN4JQYTDQ9zzLIUSQnZD5FSb0HL%2BACMgYm0Q3xV6SbKrq1i7bZ%2BtMAlMFrH%2FRLyVhtXR8OUG5I3dFXY%2BxcRYm0lVuRReGJ9RrdP%2F6OlDGOoOKO585A%2BujldLlIIcYFHoa1CiXxjL49UrjpUhhaHrYbMBuz0nVVfnl1r0VqFVhL1t25%2F40LOK2yQIqJPO6XMf4ITJJA4fUnaK9d0TTsF9nA6PL&X-Amz-Signature=6d4a7a57310a920a0cd694862a168494c3cd4cf8e494b008188abd8d94859999&X-Amz-SignedHeaders=host&x-id=GetObject)

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
