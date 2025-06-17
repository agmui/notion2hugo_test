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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NIFMU7Q%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJlIMl4644CicplNkzZxSfXRvzkAIzRWy%2BXMpgjE0kqgIhAP2sfsdBqfitmE5SNDb5xmiWjNPtVa3yZYZCIRtMhE27Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzROKM7zwsCVEUXRPYq3AMufdymCkie1RLt%2FcppFwShLWxQkO31JbxgGZY7OA5lOUfUu5Er%2BmCvDvXioHYpSYD%2BYuB9EGbYtc33VikgJEzV1Fy%2FnNWa5ho4vWkiNm9BaenD70z0bIHd3swq7Q9C50hZllwvOy%2FuAaCabnFD%2F1reZTrXjamPmhCGYXAsa6iktOL9ENm%2Bqq7Qf2uDNHFvNRDQlLvvbuR9DjgT89yImeAKH1DxNDgcA%2FVnR%2BGGGIwLjx48YoouXbF2cXrFd9VeBVndnWh2flkctPBaDsMMdPw4Fgxnfrs3Gn%2FaydSO3KD9zEdJaL%2B7Tfz1oYifdPFEJZGsPAHuQ5JWYE9ogH9PRFIoG0VMA%2FnQ%2Fo6LsOaYpmrKo0wFXWeY7T586k4%2BqOLz3WMBVFCoWQyc6OGf1Mw%2BLXe2XAC%2FaCZpCFVUrwviS08e%2BortKvZLchNpr7CtuWxusq9L1inN4eWQF%2F8zQWHlj2U66I68iNmHEbzDNClV4hg9aSO13AxZVqmeaGpska525sIoEnIEDcgEq9iiSu4eNnTp20mO3cmHxfvOKIo6n91if%2BPkmCBW%2BS%2FDYn3h8f1TUL5Y97CkmcB3w0sfzLoVpYCEEZeQcOISaXzLGzrmsZ3uMrIG8G7OdhZvLGYIMzDOtMbCBjqkAc2nWQqegKyyWQkONowLz4MvpjWKbvUMz1pe7iqPUx8y1KwEDIfXN%2FW9PDvGWkW8MgLiJ9u5spu%2Bd7OrpWX2ithd3yBci39VA1kSQioKXpXyOg4C5TRQeYyxk%2B5pKDzqF0QkFAowlGUDCM1iPh47cknRUxyorDzccf73gDQVv2SAemz1zqUCrtIQdHovotMuZ189A5%2BeJXlhs%2FSYV6%2FucK225v%2F8&X-Amz-Signature=7e33a7fcbbd96613e9cc0fdd285f0c0d5cbcac345587dac5681811f92ac1dc80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NIFMU7Q%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJlIMl4644CicplNkzZxSfXRvzkAIzRWy%2BXMpgjE0kqgIhAP2sfsdBqfitmE5SNDb5xmiWjNPtVa3yZYZCIRtMhE27Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzROKM7zwsCVEUXRPYq3AMufdymCkie1RLt%2FcppFwShLWxQkO31JbxgGZY7OA5lOUfUu5Er%2BmCvDvXioHYpSYD%2BYuB9EGbYtc33VikgJEzV1Fy%2FnNWa5ho4vWkiNm9BaenD70z0bIHd3swq7Q9C50hZllwvOy%2FuAaCabnFD%2F1reZTrXjamPmhCGYXAsa6iktOL9ENm%2Bqq7Qf2uDNHFvNRDQlLvvbuR9DjgT89yImeAKH1DxNDgcA%2FVnR%2BGGGIwLjx48YoouXbF2cXrFd9VeBVndnWh2flkctPBaDsMMdPw4Fgxnfrs3Gn%2FaydSO3KD9zEdJaL%2B7Tfz1oYifdPFEJZGsPAHuQ5JWYE9ogH9PRFIoG0VMA%2FnQ%2Fo6LsOaYpmrKo0wFXWeY7T586k4%2BqOLz3WMBVFCoWQyc6OGf1Mw%2BLXe2XAC%2FaCZpCFVUrwviS08e%2BortKvZLchNpr7CtuWxusq9L1inN4eWQF%2F8zQWHlj2U66I68iNmHEbzDNClV4hg9aSO13AxZVqmeaGpska525sIoEnIEDcgEq9iiSu4eNnTp20mO3cmHxfvOKIo6n91if%2BPkmCBW%2BS%2FDYn3h8f1TUL5Y97CkmcB3w0sfzLoVpYCEEZeQcOISaXzLGzrmsZ3uMrIG8G7OdhZvLGYIMzDOtMbCBjqkAc2nWQqegKyyWQkONowLz4MvpjWKbvUMz1pe7iqPUx8y1KwEDIfXN%2FW9PDvGWkW8MgLiJ9u5spu%2Bd7OrpWX2ithd3yBci39VA1kSQioKXpXyOg4C5TRQeYyxk%2B5pKDzqF0QkFAowlGUDCM1iPh47cknRUxyorDzccf73gDQVv2SAemz1zqUCrtIQdHovotMuZ189A5%2BeJXlhs%2FSYV6%2FucK225v%2F8&X-Amz-Signature=52aa2e6231644ea02a5f934730ef557bffca76bfe88c7e377f6cb764e62b189a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
