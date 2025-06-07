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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXF5B7UY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeYaypQFeTyGwbFYHXbI8q1WbUDPlQS%2FdyJ%2FzScCpqPwIgAaX7c570xLnPqXdNNuOrm55sKSF463GXyKihYGJO00kq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHLuHx9NRVYHs2Z%2BsircAwn49eWYFndanp%2BzzvuLLaDxGPHijiuny5PYxKwm37W1YR2pcr03qmFqo%2BHnLIR8r3peL9QKYViB2cWs5OT6Qr4ps9reFRydo5%2BAdPLVQo2btmqdKFnDFWboc0dvgQIrE1DAZZzw%2BiRWZYT9FzJoFF3jVraHO0%2FkjyJD9bLg2Ccwr2H4zntoIAkyEx3McPnJvas%2FXzBp%2F4t98zSiXiBH3Ny0kaXSpnO%2F8ophjZo2ITVa0nluamQltVWe7I5XDOOwEEWrZnyvtpTOSREctH9Z8aj8uy4Iu7GZIIw3T34SXGh3l0TLlp0i4l%2FQ2IhBIbm7MtblhPC6GYOyoVemmGRmZveAJQOVfx7nd11sI8wPvkz9GnK%2FuZqnGTWxCdJmk3JT4X9kjGOUl0VLSxCl4XHFhlhXD4xGLK6nszrwriwpUe2%2BXhVyIz6vJX7DcgrMjg76gsba%2BMpYf9T2vgwDO1oVNxV6Yt2KSFF4%2Fl7U%2BPVAd1D3D30S%2Fhob31Md0chAPC%2FCezvCBF7AV4U%2F4Z0fSkFw4ThzNo2JT04bUwvLh%2BVToBsUHVOvcXuoExcZwVMLobIl%2BkVsGa0MFHGF4EqkeXxL4LgMV8jjmUE2Le31S3HIVl8AWEOk7Pu%2FNgq%2BivOCMK2BkcIGOqUBp8MwCwkhzz12Pr8oVAtJZLgDbiYAmcQiuMBDboT8vFfPwxH4zrYQ10UiBdKMQUzjVxFXe7dWGnr25vTh%2FG1SD2oP9yVwOj344kQ0zkCt8LA%2BQUMSiRTHX2YCtQOPhlsl5Go1oMatq%2FLw9Xz6LAA1qPzF9mMr4fXRLS1mMblXRJdudPgOzJUIIq4o0xgR9IEOKG%2Bvfv6zSFHQT2DrGRqa%2FyuMNFG5&X-Amz-Signature=b9d2b5d8c0849a9301ee60bfeb4014a6c0ea177290088a1e93984e905318f5d3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXF5B7UY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeYaypQFeTyGwbFYHXbI8q1WbUDPlQS%2FdyJ%2FzScCpqPwIgAaX7c570xLnPqXdNNuOrm55sKSF463GXyKihYGJO00kq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHLuHx9NRVYHs2Z%2BsircAwn49eWYFndanp%2BzzvuLLaDxGPHijiuny5PYxKwm37W1YR2pcr03qmFqo%2BHnLIR8r3peL9QKYViB2cWs5OT6Qr4ps9reFRydo5%2BAdPLVQo2btmqdKFnDFWboc0dvgQIrE1DAZZzw%2BiRWZYT9FzJoFF3jVraHO0%2FkjyJD9bLg2Ccwr2H4zntoIAkyEx3McPnJvas%2FXzBp%2F4t98zSiXiBH3Ny0kaXSpnO%2F8ophjZo2ITVa0nluamQltVWe7I5XDOOwEEWrZnyvtpTOSREctH9Z8aj8uy4Iu7GZIIw3T34SXGh3l0TLlp0i4l%2FQ2IhBIbm7MtblhPC6GYOyoVemmGRmZveAJQOVfx7nd11sI8wPvkz9GnK%2FuZqnGTWxCdJmk3JT4X9kjGOUl0VLSxCl4XHFhlhXD4xGLK6nszrwriwpUe2%2BXhVyIz6vJX7DcgrMjg76gsba%2BMpYf9T2vgwDO1oVNxV6Yt2KSFF4%2Fl7U%2BPVAd1D3D30S%2Fhob31Md0chAPC%2FCezvCBF7AV4U%2F4Z0fSkFw4ThzNo2JT04bUwvLh%2BVToBsUHVOvcXuoExcZwVMLobIl%2BkVsGa0MFHGF4EqkeXxL4LgMV8jjmUE2Le31S3HIVl8AWEOk7Pu%2FNgq%2BivOCMK2BkcIGOqUBp8MwCwkhzz12Pr8oVAtJZLgDbiYAmcQiuMBDboT8vFfPwxH4zrYQ10UiBdKMQUzjVxFXe7dWGnr25vTh%2FG1SD2oP9yVwOj344kQ0zkCt8LA%2BQUMSiRTHX2YCtQOPhlsl5Go1oMatq%2FLw9Xz6LAA1qPzF9mMr4fXRLS1mMblXRJdudPgOzJUIIq4o0xgR9IEOKG%2Bvfv6zSFHQT2DrGRqa%2FyuMNFG5&X-Amz-Signature=8c0b45f9fe988590dc02b3166cffa2cf408be1d964fff7a798343ffb0ec5cd71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
