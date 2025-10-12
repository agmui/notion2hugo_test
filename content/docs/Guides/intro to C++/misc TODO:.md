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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5XYGRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEBPckYo75TVaj0VN27ZPd%2Bt9waN%2FLgNMSzgOVWcLzvbAiAoTvP27zH2ULWpwvhMI%2ByvduIDVShbprUvbkkzXp3OnCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMU9dwWwrb8ihP6sjmKtwDvNTtxY8KjrOzeIfDnpvBafrUCRHf4cFi4cMG2wwDek9yM%2BZIj5KkeSqp1H74dQbgVdBKg3y0Sf40Dehf8o5mRnYsBtzZKrLz2JJdqVPR2pKFsKE%2BiixBXnyfkDbv6J0M6HO%2FOtiZKn9IylwdCuC7PzdSHG4TgOJgMKW7SsqSS0h5u%2FnwFVc65DCDzBaJ3ZlTK3AdDCZxHz1pVeoznyOwEK%2BzNjX%2FTF3F4nveN0RzhwwsUnJ%2BJpnwC8VwEw5EunPeRbr5Z8QzTZChc3MrHqe1hsb%2B%2FtEG%2FtokLLVW9AA8XtQQ3v4ZThRpvv1HjgzkFlbHdAGYkyRugF30D85nLP3IUQtOsvoRpjUjeK%2B8Xpss8o%2BV6CerE203T5MVhUXItHMRH%2BAKKowHEjw5QP0ETd%2BwE%2BI%2Fqq3UQKJYlJelqMWfnPeNLvaE7qzv11wcPmxb3ylXFN8iILSIn8X45YUn%2BgZsuomzEuWIsgCwTdMunKI6cTRudAP1DUVoHEjB%2B%2BpWYIYfRiYg0agI34h6bK7OMUIY9Q75PZ0mMaZaO3adIv8AiAJCWKv4DD887XZOyC4tCdWdqHVecibwmVRqiTrDlL3xzj0w9guevQzaR6cm2NYI5nvX8WcrxkDhLlGQTbkwormrxwY6pgEnIw4vU7jIWDIRA9IuDMz7Lz%2BE%2BcgFVJtRCI5EJAPRoRFlXTSIT0pYij1Y%2BFu6Vdz0prAKHQxz6iI%2FCDbnaYcOv0qMG9QRjBsaGYyY8QaByMd4HynGIGismdRijNmW5WZZHylALMz83dvJi%2BS9i6MASHjHQLXL8etc%2Fm%2FYcPtxjv9b5ShJpKr4xS4Uc8tbPnQc%2FtOlQF3hiYS8TbC%2BzHmXSNNylK5F&X-Amz-Signature=a3387548bcb41b034efce43432bc611b2d933b0fc10a9e9ce352ae3a8d5f02af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5XYGRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEBPckYo75TVaj0VN27ZPd%2Bt9waN%2FLgNMSzgOVWcLzvbAiAoTvP27zH2ULWpwvhMI%2ByvduIDVShbprUvbkkzXp3OnCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMU9dwWwrb8ihP6sjmKtwDvNTtxY8KjrOzeIfDnpvBafrUCRHf4cFi4cMG2wwDek9yM%2BZIj5KkeSqp1H74dQbgVdBKg3y0Sf40Dehf8o5mRnYsBtzZKrLz2JJdqVPR2pKFsKE%2BiixBXnyfkDbv6J0M6HO%2FOtiZKn9IylwdCuC7PzdSHG4TgOJgMKW7SsqSS0h5u%2FnwFVc65DCDzBaJ3ZlTK3AdDCZxHz1pVeoznyOwEK%2BzNjX%2FTF3F4nveN0RzhwwsUnJ%2BJpnwC8VwEw5EunPeRbr5Z8QzTZChc3MrHqe1hsb%2B%2FtEG%2FtokLLVW9AA8XtQQ3v4ZThRpvv1HjgzkFlbHdAGYkyRugF30D85nLP3IUQtOsvoRpjUjeK%2B8Xpss8o%2BV6CerE203T5MVhUXItHMRH%2BAKKowHEjw5QP0ETd%2BwE%2BI%2Fqq3UQKJYlJelqMWfnPeNLvaE7qzv11wcPmxb3ylXFN8iILSIn8X45YUn%2BgZsuomzEuWIsgCwTdMunKI6cTRudAP1DUVoHEjB%2B%2BpWYIYfRiYg0agI34h6bK7OMUIY9Q75PZ0mMaZaO3adIv8AiAJCWKv4DD887XZOyC4tCdWdqHVecibwmVRqiTrDlL3xzj0w9guevQzaR6cm2NYI5nvX8WcrxkDhLlGQTbkwormrxwY6pgEnIw4vU7jIWDIRA9IuDMz7Lz%2BE%2BcgFVJtRCI5EJAPRoRFlXTSIT0pYij1Y%2BFu6Vdz0prAKHQxz6iI%2FCDbnaYcOv0qMG9QRjBsaGYyY8QaByMd4HynGIGismdRijNmW5WZZHylALMz83dvJi%2BS9i6MASHjHQLXL8etc%2Fm%2FYcPtxjv9b5ShJpKr4xS4Uc8tbPnQc%2FtOlQF3hiYS8TbC%2BzHmXSNNylK5F&X-Amz-Signature=323b3690500e0835668b0a0320e6067ef43952b8147786653860fe99814ed9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
