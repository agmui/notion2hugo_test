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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4DYYI3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH9gUmGRcRRsS%2F6MlHuPH3bDo8lMPAKUDVwCl7aS6i7BAiEA0PB2wHSKZHvgdNoHdndt3m40VCjkwYjNQR%2FJpwVLGa4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTVN8olGgm3tGaaZSrcAywk45yGMbnKb2M8AVEifPx0X8clZWs1OMYzVB2je02Fu%2FiVmBRZA6BEYB91NTnOailXYEeU300HpyOMwS6Rv0BTgdO3VQunojl9LTxNICcek6X5NT0pBqOHraJszOjYCqYKMBikQZyGrr6KW5orxiIVMqgCIVyRbRunZbC6WbRo8Lz8uGasiSeSvT5v9qmHmCtmcHYPuRh4jUOfs22hmCQsUD25%2BflG3OXeCiKY9fmSpcQsoo%2B2iYT03GlEGvs7kUiHhCa31oqHD3sJ%2Ftv2YDgZSu0z1EpDnZ2tppnR9BZTbrbSt8ud1Tqyr3GA%2BuevS%2F2UQbdBLUOFsUkLEPjvgdDeX6o8wbYb1UNb%2BBcA0P0LKcg2m6q%2F3D8pXZxSEIUeENL9ZzTdBEQQ8xn2TNgheNXmeeJl8qa9Z1nASPSyWjwHzAwiVI723925S2qjAaIhXWsCkR2fI2vQY%2FnZmKv9StXct25iwxp%2FU4fK4QzTq0oAV%2BPnxRzqwHFUfa6Nwl02cQLgE4mc6iQrnmCT95EXQtX9IacYtloY4KpXWbbxS3E4eUvo6ecvGeylzqRXL2y0bSiDCQyzME6ICwO8SplGkZYrNb1k6vrbduUGxN8KqttQzc8ybYcR3xTdWoiTMI%2FYj74GOqUB88sQklFLNk0SUzd3fzg111KThLbJ1eEvOjWf7yuuylXmrCH5aNZVxdbL9zPPlZlbxk14NMbqNSLZ3nZMjfER%2FIpwQvyRo3Kdn6WAQbW9AdSi7S46JW%2F5RYKGOjWhvNklLjf9On6XMwAddM30e%2Bc6aeH5e8SIR0cr99DtIktQ%2B21QUGUoD%2FKQ0GC8wCdnkwBg15RBnMZLUrQIRjibdbyooiPYQXeI&X-Amz-Signature=0dd942febf95fa289767113bf440b4a72a3827f40f700ae42438fa1c1db1ed4e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4DYYI3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH9gUmGRcRRsS%2F6MlHuPH3bDo8lMPAKUDVwCl7aS6i7BAiEA0PB2wHSKZHvgdNoHdndt3m40VCjkwYjNQR%2FJpwVLGa4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTVN8olGgm3tGaaZSrcAywk45yGMbnKb2M8AVEifPx0X8clZWs1OMYzVB2je02Fu%2FiVmBRZA6BEYB91NTnOailXYEeU300HpyOMwS6Rv0BTgdO3VQunojl9LTxNICcek6X5NT0pBqOHraJszOjYCqYKMBikQZyGrr6KW5orxiIVMqgCIVyRbRunZbC6WbRo8Lz8uGasiSeSvT5v9qmHmCtmcHYPuRh4jUOfs22hmCQsUD25%2BflG3OXeCiKY9fmSpcQsoo%2B2iYT03GlEGvs7kUiHhCa31oqHD3sJ%2Ftv2YDgZSu0z1EpDnZ2tppnR9BZTbrbSt8ud1Tqyr3GA%2BuevS%2F2UQbdBLUOFsUkLEPjvgdDeX6o8wbYb1UNb%2BBcA0P0LKcg2m6q%2F3D8pXZxSEIUeENL9ZzTdBEQQ8xn2TNgheNXmeeJl8qa9Z1nASPSyWjwHzAwiVI723925S2qjAaIhXWsCkR2fI2vQY%2FnZmKv9StXct25iwxp%2FU4fK4QzTq0oAV%2BPnxRzqwHFUfa6Nwl02cQLgE4mc6iQrnmCT95EXQtX9IacYtloY4KpXWbbxS3E4eUvo6ecvGeylzqRXL2y0bSiDCQyzME6ICwO8SplGkZYrNb1k6vrbduUGxN8KqttQzc8ybYcR3xTdWoiTMI%2FYj74GOqUB88sQklFLNk0SUzd3fzg111KThLbJ1eEvOjWf7yuuylXmrCH5aNZVxdbL9zPPlZlbxk14NMbqNSLZ3nZMjfER%2FIpwQvyRo3Kdn6WAQbW9AdSi7S46JW%2F5RYKGOjWhvNklLjf9On6XMwAddM30e%2Bc6aeH5e8SIR0cr99DtIktQ%2B21QUGUoD%2FKQ0GC8wCdnkwBg15RBnMZLUrQIRjibdbyooiPYQXeI&X-Amz-Signature=d8479f035ab0e448ee85df8d1a3d7b99e69e695f6bca1f6afa75724d82551a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
