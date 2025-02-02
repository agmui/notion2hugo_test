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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFDBIV7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTAjLOr6ytGY124hsyLFKNUDZdfmzeL4etaU5XwdNPgQIgdUzmZFtvvTHF7tQ9e8WVfmRpCWKWmHGv%2Bi893WHNUxsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk%2F0uYB%2B7%2FZLDCGaCrcA8ZJwm4Xfzf6UTyms7d7nh5gQo4Af%2B%2BxEd8gs%2B4fYr58Yr4Hioewt0e1h1eY1zF7gxDs%2F0epgh74FG0ISlp1siDONK7LzmgCxjfFXiabtGtUnmjYibknLydRbacrkvKsPgo%2FixEbv1YLsxbbqYyED9Z3XoRUfcxH8oh4mEQ7Pls9gxB8vzXv%2F2ExThUoJQN3EhuztZURoYkLQ3jdCQa4GAM3Rk4WKesRnPmBgTWuN8EhSq6YoSez9%2F66VREV4cVn2e6juYAKmu4QfUrQ%2BBcZRcOu7IKsYH9U%2F4ENr24%2F2URHHff0L07Vhd11z4q52KKQvnxr82nFT2RH9nJ8Xv9pMkLLiMkSf%2F7jT9okeAuNbRRa5HsKVnmcs13nklL%2B3sw2kmadKkcpvN4Pp%2FNwij1v4q5fxTr%2BilqbJYMlAXkS3iLU5xmzYT20sGBGPr9NtphsXvOZ4TQPROuh85eE51dNIUKlA7FzH%2FCTNv88xTP3zh208nLixTMrHV2MAxkFd%2BSpxFoWrhWCGzIYDMBPQlDNyJdVE7n4q1L3XlkHAWSQJ75UqfqMIwbz77N9wdMVgv82wpGjmHuoMmjB7flUXdxMlD72WhIo9%2FNkptfGs%2BSpR7tX%2FsnvittGBNH0R8k5MIS9%2B7wGOqUBEwWkrmjU22XRG7slwg2%2FvRebFuHb3ekoXPaglnaPaIY8WVCYkFeWj%2BSArpDbVYdoEjENvWnm8stVhYyG7OWSUxCQGQ32q%2F9lCqB3ObcUuq2Xxus2%2FvfPJ2C5wBMUwWAeDyStZT678t4rc3AwadR27iZ2N%2B6szxUUVEerH1XViyHpJzeYJh%2FFkqq2XYUxigX4FRdRP%2BlIdoGEHwbvH8JObAbHxXh7&X-Amz-Signature=e835e29f757a6f08f14384c58ede3cdfb434821f669c024019b81694f87588a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFDBIV7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTAjLOr6ytGY124hsyLFKNUDZdfmzeL4etaU5XwdNPgQIgdUzmZFtvvTHF7tQ9e8WVfmRpCWKWmHGv%2Bi893WHNUxsqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk%2F0uYB%2B7%2FZLDCGaCrcA8ZJwm4Xfzf6UTyms7d7nh5gQo4Af%2B%2BxEd8gs%2B4fYr58Yr4Hioewt0e1h1eY1zF7gxDs%2F0epgh74FG0ISlp1siDONK7LzmgCxjfFXiabtGtUnmjYibknLydRbacrkvKsPgo%2FixEbv1YLsxbbqYyED9Z3XoRUfcxH8oh4mEQ7Pls9gxB8vzXv%2F2ExThUoJQN3EhuztZURoYkLQ3jdCQa4GAM3Rk4WKesRnPmBgTWuN8EhSq6YoSez9%2F66VREV4cVn2e6juYAKmu4QfUrQ%2BBcZRcOu7IKsYH9U%2F4ENr24%2F2URHHff0L07Vhd11z4q52KKQvnxr82nFT2RH9nJ8Xv9pMkLLiMkSf%2F7jT9okeAuNbRRa5HsKVnmcs13nklL%2B3sw2kmadKkcpvN4Pp%2FNwij1v4q5fxTr%2BilqbJYMlAXkS3iLU5xmzYT20sGBGPr9NtphsXvOZ4TQPROuh85eE51dNIUKlA7FzH%2FCTNv88xTP3zh208nLixTMrHV2MAxkFd%2BSpxFoWrhWCGzIYDMBPQlDNyJdVE7n4q1L3XlkHAWSQJ75UqfqMIwbz77N9wdMVgv82wpGjmHuoMmjB7flUXdxMlD72WhIo9%2FNkptfGs%2BSpR7tX%2FsnvittGBNH0R8k5MIS9%2B7wGOqUBEwWkrmjU22XRG7slwg2%2FvRebFuHb3ekoXPaglnaPaIY8WVCYkFeWj%2BSArpDbVYdoEjENvWnm8stVhYyG7OWSUxCQGQ32q%2F9lCqB3ObcUuq2Xxus2%2FvfPJ2C5wBMUwWAeDyStZT678t4rc3AwadR27iZ2N%2B6szxUUVEerH1XViyHpJzeYJh%2FFkqq2XYUxigX4FRdRP%2BlIdoGEHwbvH8JObAbHxXh7&X-Amz-Signature=78908e753e43b225f5eb4eba4d58be59292b92edef6ecf82a38156fb5a94e889&X-Amz-SignedHeaders=host&x-id=GetObject)

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
