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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG6MBDE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZN91eiSTU9af1t5GNvd3AazGfHMLAi7iwckaaXauJ3AiB4REFcndE8yHZjTb0KgUIaHD4j5OuX6ZSiyqqgUqjegiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBrYac64o6%2Bxse29DKtwDYIQrcbjrbXtiyTa3RRnVijWVPFSrLd935WnaNBe1VmX4P66%2BVITJTSj75b4felPbIZdzrhbmcihL2Y2cEWJkowrks6ufNLr1Rcncoa2N1hZR6WbQ5rCXPg8b7UWKxIRUtEuIIug9o%2BkN%2Fl74UZFT51V6NYonfQSY2wvoTXjBhGNyn56ygIy0rQlfj3d50KR4UYwPaw83hB57wdk1%2F6cgTyrgekXU5fj9WVqi%2Fy76PsU2w2Y8gpOmRyUnwGiN3KD10IRG5c4PCzuFY8bp0xiEsVsbTJXHzXy9fzD3Wsi750m%2F9sVzVO0eVP45RvD5CnHh9mAahNHvYp6YvYV5BEIEB9po0mcaO6PUVH32gGW7lWOGjfv7pj48JqTaWU6S%2B%2BXRFRZz3hcZLR%2BUj9M%2BEm6eegVVXjurG81%2BhSVsBsLeYlK62ztygb%2ByVmV7aH6nu9UFCmXP9rDpyAwIppMNCxIFZ9G%2FsJKwqFh%2F%2BUAUblL9cYvPIapX0iFrAGJbk%2Fy0DW6mhHBAr1xh2imMUJY6icUgAdJGb4oQnZ0ZMDpQSF46xzgrTcX8SHrMFoAua3ATy3mK55pTkD47j7eFnXrOM5TQShElmPERZyiWg1OBcYS85ZNnfmBSaYHLmvg6VgAwtPSwxAY6pgGlOZYwr2xAGqCyPqLIgDnfFkP5veYYcbFfTmHHGo5AQnvEZdOs0yd%2FbMIK0FLxxVgGZQ3EyPZNrORbjsn2UxW335DeMBTRHJKzXeDcqXpgT7eSChPd6IpKG2F6EPbaov3YCLMrEikvvvuLDkObkcfVdG0hE%2FBKYEQWx0OlOXghbgr8emOWo5KWNHqNYJ%2FmJSa%2FQU4X77Bzkc8pJbuTJfJY%2F%2Bc8C7hA&X-Amz-Signature=9208dcb209b6c3b3a7f5b3ad93b8bf3ef4d23ac601051712e3d8f9901ab06988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG6MBDE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZN91eiSTU9af1t5GNvd3AazGfHMLAi7iwckaaXauJ3AiB4REFcndE8yHZjTb0KgUIaHD4j5OuX6ZSiyqqgUqjegiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBrYac64o6%2Bxse29DKtwDYIQrcbjrbXtiyTa3RRnVijWVPFSrLd935WnaNBe1VmX4P66%2BVITJTSj75b4felPbIZdzrhbmcihL2Y2cEWJkowrks6ufNLr1Rcncoa2N1hZR6WbQ5rCXPg8b7UWKxIRUtEuIIug9o%2BkN%2Fl74UZFT51V6NYonfQSY2wvoTXjBhGNyn56ygIy0rQlfj3d50KR4UYwPaw83hB57wdk1%2F6cgTyrgekXU5fj9WVqi%2Fy76PsU2w2Y8gpOmRyUnwGiN3KD10IRG5c4PCzuFY8bp0xiEsVsbTJXHzXy9fzD3Wsi750m%2F9sVzVO0eVP45RvD5CnHh9mAahNHvYp6YvYV5BEIEB9po0mcaO6PUVH32gGW7lWOGjfv7pj48JqTaWU6S%2B%2BXRFRZz3hcZLR%2BUj9M%2BEm6eegVVXjurG81%2BhSVsBsLeYlK62ztygb%2ByVmV7aH6nu9UFCmXP9rDpyAwIppMNCxIFZ9G%2FsJKwqFh%2F%2BUAUblL9cYvPIapX0iFrAGJbk%2Fy0DW6mhHBAr1xh2imMUJY6icUgAdJGb4oQnZ0ZMDpQSF46xzgrTcX8SHrMFoAua3ATy3mK55pTkD47j7eFnXrOM5TQShElmPERZyiWg1OBcYS85ZNnfmBSaYHLmvg6VgAwtPSwxAY6pgGlOZYwr2xAGqCyPqLIgDnfFkP5veYYcbFfTmHHGo5AQnvEZdOs0yd%2FbMIK0FLxxVgGZQ3EyPZNrORbjsn2UxW335DeMBTRHJKzXeDcqXpgT7eSChPd6IpKG2F6EPbaov3YCLMrEikvvvuLDkObkcfVdG0hE%2FBKYEQWx0OlOXghbgr8emOWo5KWNHqNYJ%2FmJSa%2FQU4X77Bzkc8pJbuTJfJY%2F%2Bc8C7hA&X-Amz-Signature=8aefbd5ad8f5ad158ec4c59defc52ef14b2d1b0f8121617ce2b7a904e103a034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
