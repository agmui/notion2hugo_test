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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24MUUKA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUtMlJC5WB7p5TR26EIGj2tCFsySikOIkNw%2BsZ2hoMUAiAH94i%2FksQX9O1Rh7PEbubIUyNFf3VqJbITbipfT2rS0SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHnUrjNVbEmLI93e2KtwD4rXExoIUECu6LI0bLLHkiJFZdiWY73MVOrGwrJzJwHvr%2BGA2%2Fv3tjxfoRiaanS26q6LsKy%2Fomtg9Vh7wLgNMIeQ51s9o73z%2FdBvHqiWzIB27Crdmf%2Bc4xiC7hE0UnhdLjWQ%2BWrzTP0H90DL54sFMr1DOPp3Lab5jCpbcdHhOZjrdA6Dcv%2FBvcJskJ539gLgzGF1jrCvPygvds1wtvY%2FgjWxxrxsODLPrL9Ktj2PJso1t6auiK3N358HloKZd5Vqoyu1Q8WnbCs%2FmP7hX3vSQ%2F8MLrqzNEFc59R4SFf7Z%2F%2FlEz0I69Z0Bp0ELWdTwNLvFWbWgFE5C2siE3SFyZK3XFwcWLo88b8uwqRcWtrOuZgPAp%2FSFmrlXLF0Pprzj0qTdE5iZZlR3TwQT%2B9ZVqjMD6leb2mYVce0JyK58n1h%2BUC8iEPOPrYTk5fCgCez2trDwr6O6GABVzjuv4x%2FuqKvNFS9L0eg1AdWRqPzWvnunFi3oNNsDvcycO1J7zM8yQbc6xlM%2Fn%2B4fT5elra6WgYy1ETyVgeqThB9B24vr4ZFWaOYZy%2Bb34jXP1A3yIxkouhqswSF5aiZPlBuKH4AAkNyG2fmAsZObqXCtPw0YP9X3m4IDiC6TTg1xYzNItEwwha3MwwY6pgH6t4tZkzicdxMIpGtGhkLAU1HQxFsy18HXhS45pUxY%2BlVXM%2FYZfkWUWwraCLLff4FsS96MY9G%2F%2B2%2FxEzPWlZvCGZkvV5Cqfq2kSlFIlVac06JwAuNUZgYvUd05sB5iyzxEj5JV3%2BxPDGmNYGcuyDs39JTmeUqkz1B50rf7ppJqP5qrLsDBObfFLEN2qVGoTFCt8KckSNn0oFjtvtqAg8gkWsPABpQh&X-Amz-Signature=91b65da00f7b33a5bd38d37b23a91ab222a610db6207318255ff5f10aa238f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24MUUKA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUtMlJC5WB7p5TR26EIGj2tCFsySikOIkNw%2BsZ2hoMUAiAH94i%2FksQX9O1Rh7PEbubIUyNFf3VqJbITbipfT2rS0SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHnUrjNVbEmLI93e2KtwD4rXExoIUECu6LI0bLLHkiJFZdiWY73MVOrGwrJzJwHvr%2BGA2%2Fv3tjxfoRiaanS26q6LsKy%2Fomtg9Vh7wLgNMIeQ51s9o73z%2FdBvHqiWzIB27Crdmf%2Bc4xiC7hE0UnhdLjWQ%2BWrzTP0H90DL54sFMr1DOPp3Lab5jCpbcdHhOZjrdA6Dcv%2FBvcJskJ539gLgzGF1jrCvPygvds1wtvY%2FgjWxxrxsODLPrL9Ktj2PJso1t6auiK3N358HloKZd5Vqoyu1Q8WnbCs%2FmP7hX3vSQ%2F8MLrqzNEFc59R4SFf7Z%2F%2FlEz0I69Z0Bp0ELWdTwNLvFWbWgFE5C2siE3SFyZK3XFwcWLo88b8uwqRcWtrOuZgPAp%2FSFmrlXLF0Pprzj0qTdE5iZZlR3TwQT%2B9ZVqjMD6leb2mYVce0JyK58n1h%2BUC8iEPOPrYTk5fCgCez2trDwr6O6GABVzjuv4x%2FuqKvNFS9L0eg1AdWRqPzWvnunFi3oNNsDvcycO1J7zM8yQbc6xlM%2Fn%2B4fT5elra6WgYy1ETyVgeqThB9B24vr4ZFWaOYZy%2Bb34jXP1A3yIxkouhqswSF5aiZPlBuKH4AAkNyG2fmAsZObqXCtPw0YP9X3m4IDiC6TTg1xYzNItEwwha3MwwY6pgH6t4tZkzicdxMIpGtGhkLAU1HQxFsy18HXhS45pUxY%2BlVXM%2FYZfkWUWwraCLLff4FsS96MY9G%2F%2B2%2FxEzPWlZvCGZkvV5Cqfq2kSlFIlVac06JwAuNUZgYvUd05sB5iyzxEj5JV3%2BxPDGmNYGcuyDs39JTmeUqkz1B50rf7ppJqP5qrLsDBObfFLEN2qVGoTFCt8KckSNn0oFjtvtqAg8gkWsPABpQh&X-Amz-Signature=4924eec73b35ababf9ee4eabf6e220faf96f9ef4ae693733ccadb52a309a52ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
