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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCT7US2L%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDSUVHUlBwKzOZnR9nx2oqRhF7HZwuqE5maYtrOu0N1bQIgR9K9UxBjVlGUO7zgt8hTtjKzGeSDW7wvUh0IWwWvz5AqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvVWBnG9vggmZ6ILyrcAwTqJIGosbyTbv%2FRbVVXGgXP%2FSzhJ9xudJ7mPaPdhtLfKuLC%2BcNLVwd4WhTiiI8UHAKrLNGgVdEVUqUSZZSdYjHZmwlL7L2h8SAiqvVtjgu23hRcBvGNzkhh1ZYtpe1mbVSHK2oIHWnWcQH7zec9oDNmxbjK41hj%2B6FLieoJKrrq1pJYBXutHLeyTu%2Fid0RWDluzHy7acwZtuQ6IfBHkGA8UoTfe1xYdNBYmSas%2FmoJiZph0KY6TLOTObo1rUfH5vAYlS%2BWimD0bWsMK6eIj7V67QGdjPnvQ2uLiSPZKnwjvzTReTpVkjuJ46Zw1udunM8ixmaAuVXmhyKKZMJSAdf9Abo7A7qnQ5IPzx%2By9lzaVJMLHBLGUgwhux4IuEf7voMVBNmdbZDVyIAzm4nEsfcCNlczXqt8ymCOEIoQSeDdyGU2Oot%2BSPOdgf4TBuepRoHYXKdpLeZTxiSSY844YW5iQEM2KKKy1ADoy3rtUIHfYitE8K5Zu%2F4c3eGpCAaeILK8pzjgJmHHqX%2BxQVb3L0LT6l9fidlxf8lj7FeMWJrvuNH4RTNaBjEtTQnBHIqmwu1S%2BJZ3dvfwWg4xGVZkOmWAUMpRdl5Dco%2B%2BXBVKky2wLEjFtQoYavyn9Wid4MNu75b8GOqUBXL1NiHeyh021rmnNXR3gAfCpHEF0dooSGupvftGO4tQ3alvRcDp6RDX3wXtFy9WZewVuQl1UZ%2BDUA9gdHGpPXACbV4O%2BX1%2BOgXJMfcwU10QFkbi49lXr7Qp3auIgAbTDsTcAVWQhXX%2FfCqS%2BZkhGNc6ZA9zKi8yJ9KqWEninAsuP37%2FNUwICeFvoxQAMzrJqVBBmLIa%2FkOIzgziTCmUGEylY0qfJ&X-Amz-Signature=437ce7d06458b54c85764a05f9d88ba8e5db01fd12559bad7b6e56ed39771843&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCT7US2L%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDSUVHUlBwKzOZnR9nx2oqRhF7HZwuqE5maYtrOu0N1bQIgR9K9UxBjVlGUO7zgt8hTtjKzGeSDW7wvUh0IWwWvz5AqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvVWBnG9vggmZ6ILyrcAwTqJIGosbyTbv%2FRbVVXGgXP%2FSzhJ9xudJ7mPaPdhtLfKuLC%2BcNLVwd4WhTiiI8UHAKrLNGgVdEVUqUSZZSdYjHZmwlL7L2h8SAiqvVtjgu23hRcBvGNzkhh1ZYtpe1mbVSHK2oIHWnWcQH7zec9oDNmxbjK41hj%2B6FLieoJKrrq1pJYBXutHLeyTu%2Fid0RWDluzHy7acwZtuQ6IfBHkGA8UoTfe1xYdNBYmSas%2FmoJiZph0KY6TLOTObo1rUfH5vAYlS%2BWimD0bWsMK6eIj7V67QGdjPnvQ2uLiSPZKnwjvzTReTpVkjuJ46Zw1udunM8ixmaAuVXmhyKKZMJSAdf9Abo7A7qnQ5IPzx%2By9lzaVJMLHBLGUgwhux4IuEf7voMVBNmdbZDVyIAzm4nEsfcCNlczXqt8ymCOEIoQSeDdyGU2Oot%2BSPOdgf4TBuepRoHYXKdpLeZTxiSSY844YW5iQEM2KKKy1ADoy3rtUIHfYitE8K5Zu%2F4c3eGpCAaeILK8pzjgJmHHqX%2BxQVb3L0LT6l9fidlxf8lj7FeMWJrvuNH4RTNaBjEtTQnBHIqmwu1S%2BJZ3dvfwWg4xGVZkOmWAUMpRdl5Dco%2B%2BXBVKky2wLEjFtQoYavyn9Wid4MNu75b8GOqUBXL1NiHeyh021rmnNXR3gAfCpHEF0dooSGupvftGO4tQ3alvRcDp6RDX3wXtFy9WZewVuQl1UZ%2BDUA9gdHGpPXACbV4O%2BX1%2BOgXJMfcwU10QFkbi49lXr7Qp3auIgAbTDsTcAVWQhXX%2FfCqS%2BZkhGNc6ZA9zKi8yJ9KqWEninAsuP37%2FNUwICeFvoxQAMzrJqVBBmLIa%2FkOIzgziTCmUGEylY0qfJ&X-Amz-Signature=b44499fc9f2f7b5252f7d90ba0ca146346efd2cd3ad98f3f72abe2f08e7c9bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
