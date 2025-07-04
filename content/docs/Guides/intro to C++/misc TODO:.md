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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPXBWFT5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCd5inSuLcZC8RcHqTt2777DtsKpfQYnviX3qILVsR1XQIgbxpGI3dBgLLZCIgfOcHKMbmhmAmwwivv1fSPA%2FsjP98q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOSrv6c2fu%2BZFgRcLyrcA8je8%2B0pdvBatU%2FEPK89Shm4LgQ%2BwSX62yc639IUzAnOX2OdmBxlm31lh9mpi1UOqnYWOqm5saXLiPog0vtYhVFgYpJvBbAH558sYSwdyEazIIkdZ7sIUZt9lvcgno9oHA%2FB2i7PqoOz%2F0y96vUrlgYBGbQ8nlhWdu3h7B1%2B7NEXMc3VCkJgzCH0bGtH%2FHOXrCGl%2F3Qj3EA%2BmdhDPJDZRMXUCf8zv78o4dGlGapZXjmfDbNs5Tgdewk4%2BFgS%2F%2B6mLMd4ARTo4oEdljVz80FRfaySqRJMsjIUbnRHHrkJdS8jRztvnnn%2BjK0je6KcYq5fa%2B9HOIGkXeezgh%2FmTnb3Xj1U6d9l%2Bq%2FCSdpUZwxplGt%2FcAtkiLIbbH8oFAfmapsRu3K2VlKeZ21gLs8Jq%2F75MLAjhyQ27qOVvJFHIF40FpAgTDQ8xC6x9PeYfjIqPFLIpsKPlUKuls5AscKICtj7caASoaxf2jGHmVhheoDFWG%2BITkAwa57OfPvj5Wf00JH9hXHMrDMqKZfaE03YwglvPB2qLjI2Au91bQev1%2BBXIhT3Zg%2BfTrk6KYIngix6RnQNwICH%2Bs4ts9%2BNl2rEwT24chMpPi1%2BxwSMWiVABkmCOzpv9UO4W%2FyLiJ3VivmqMMqVoMMGOqUBizfYvpQnjDpLUZG35S5dahQ4Vll7%2F59k4v2I04f6txg86wzY%2BDlzGJqc1UQdkQ5VQAXjwlinwGLjz9p%2BarUsRzqU3arUDllrvjN77aQ0HidFEJItn2K4HXJGsRtdwPEibwykf2kzTegJnoPrvsdqY5qsqX2PZwGkf%2FYa6kncK1xkd21btR5buNj32%2BbOTgL9L8fPUMNvwbAB8nyuUm6TuDAc6W%2Bx&X-Amz-Signature=86abb54be6cdd43eb750bc399b353d2500ec1818069492cbcea27c0771b05ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPXBWFT5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCd5inSuLcZC8RcHqTt2777DtsKpfQYnviX3qILVsR1XQIgbxpGI3dBgLLZCIgfOcHKMbmhmAmwwivv1fSPA%2FsjP98q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOSrv6c2fu%2BZFgRcLyrcA8je8%2B0pdvBatU%2FEPK89Shm4LgQ%2BwSX62yc639IUzAnOX2OdmBxlm31lh9mpi1UOqnYWOqm5saXLiPog0vtYhVFgYpJvBbAH558sYSwdyEazIIkdZ7sIUZt9lvcgno9oHA%2FB2i7PqoOz%2F0y96vUrlgYBGbQ8nlhWdu3h7B1%2B7NEXMc3VCkJgzCH0bGtH%2FHOXrCGl%2F3Qj3EA%2BmdhDPJDZRMXUCf8zv78o4dGlGapZXjmfDbNs5Tgdewk4%2BFgS%2F%2B6mLMd4ARTo4oEdljVz80FRfaySqRJMsjIUbnRHHrkJdS8jRztvnnn%2BjK0je6KcYq5fa%2B9HOIGkXeezgh%2FmTnb3Xj1U6d9l%2Bq%2FCSdpUZwxplGt%2FcAtkiLIbbH8oFAfmapsRu3K2VlKeZ21gLs8Jq%2F75MLAjhyQ27qOVvJFHIF40FpAgTDQ8xC6x9PeYfjIqPFLIpsKPlUKuls5AscKICtj7caASoaxf2jGHmVhheoDFWG%2BITkAwa57OfPvj5Wf00JH9hXHMrDMqKZfaE03YwglvPB2qLjI2Au91bQev1%2BBXIhT3Zg%2BfTrk6KYIngix6RnQNwICH%2Bs4ts9%2BNl2rEwT24chMpPi1%2BxwSMWiVABkmCOzpv9UO4W%2FyLiJ3VivmqMMqVoMMGOqUBizfYvpQnjDpLUZG35S5dahQ4Vll7%2F59k4v2I04f6txg86wzY%2BDlzGJqc1UQdkQ5VQAXjwlinwGLjz9p%2BarUsRzqU3arUDllrvjN77aQ0HidFEJItn2K4HXJGsRtdwPEibwykf2kzTegJnoPrvsdqY5qsqX2PZwGkf%2FYa6kncK1xkd21btR5buNj32%2BbOTgL9L8fPUMNvwbAB8nyuUm6TuDAc6W%2Bx&X-Amz-Signature=3d3e8a9382ea90f1f82e48c0ddbe6d2c993386ef69599b6324396e058c1a868c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
