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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGBGIWCC%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICD4Glf0xfaeiMy%2BkuqvRqKF4j3SZDv3g5BgDT%2FLN81rAiB17Qp7QyQJ2ebhJJa5XcCRHC9JPB3A0%2BD936nC2EgSpSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNQUwBeLw9kaIvJmKtwDxq7HrOokCgzub%2BwOhYM9521An5ddDCYoHejbTOstkFyHIupkxcb1L8BRkT9%2BGksvkF9UKm9JsaVmSObbW3xf%2BPsczNtwGWwvI%2FbzvfNp574IMRJ%2BLxBh7GArltkDz09CqHNci0pm%2FqwoVWC8iaF4RIQobpns1Gr9Ii57oLgaUvpCBImXl%2BQtd%2B8EGjguTA3EexyiUugFSgnDxWwwnKmJudvdDJ4HKFMDKDO0SsrBW0%2Fm%2FP5vf5HEEOtzNEr7dcBrdZV3hYjOfkDHvSoOGmrUUOGnosw65tHTX4qQfDq1QEAbDbjfBhts9Qq4tnJMBw4bTMHYVjBLQ89a%2FXrSM8LI6HaBFZMcH7bZT%2BKwfzE4n40yvF6HoRD7e%2F7JnHLEk5vMVlbB21sdyJL%2BatdOnumwy5lVtO1z2APD2EMdjAamB1CvwlTrUxtGjD1irAJKRw1FwHWdNAGc5gH3OFQfM4Q6vudW2etHyUmxlJknX%2FMeqNES8HWltICY0XRbcBynRDOIK83MkueImSAXkNp5AIy5OpKsLiQoyuWH4iyqCGwhwbIsmoyt%2B5D9iJmu32cxxgNd9yhu8JJmj6%2BV6oZYZo3JQgob%2BkpbBr9edZ0MPgc4cSHvgUdQ%2Btqs2yKLOW4w%2B%2FL9xQY6pgFdKKa2EWTE6nGMaKaEYnaoP7S8GgXIVxYfjg7wq%2Fjwhg6MCHJ5wo8UJ96MJbBJpZilJ9usWE%2FvUf43fvOLGE4dXuuE5E0rHj6H4GNh9X8QmZfGFZu4BSPEOB6mgynIdioamyh3qNLkmc9G%2B3iXrGVkA6CccORNo4t2lYY5YD7e8lG0kppYSF2nXvn9kS8WXoqymiGUPYqplbp5NdeWfyNmoJGF9L5E&X-Amz-Signature=ea4e6ca2efac65f54376b3be67a8ab9f236967a34b04e8efccde0e816841b4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGBGIWCC%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICD4Glf0xfaeiMy%2BkuqvRqKF4j3SZDv3g5BgDT%2FLN81rAiB17Qp7QyQJ2ebhJJa5XcCRHC9JPB3A0%2BD936nC2EgSpSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNQUwBeLw9kaIvJmKtwDxq7HrOokCgzub%2BwOhYM9521An5ddDCYoHejbTOstkFyHIupkxcb1L8BRkT9%2BGksvkF9UKm9JsaVmSObbW3xf%2BPsczNtwGWwvI%2FbzvfNp574IMRJ%2BLxBh7GArltkDz09CqHNci0pm%2FqwoVWC8iaF4RIQobpns1Gr9Ii57oLgaUvpCBImXl%2BQtd%2B8EGjguTA3EexyiUugFSgnDxWwwnKmJudvdDJ4HKFMDKDO0SsrBW0%2Fm%2FP5vf5HEEOtzNEr7dcBrdZV3hYjOfkDHvSoOGmrUUOGnosw65tHTX4qQfDq1QEAbDbjfBhts9Qq4tnJMBw4bTMHYVjBLQ89a%2FXrSM8LI6HaBFZMcH7bZT%2BKwfzE4n40yvF6HoRD7e%2F7JnHLEk5vMVlbB21sdyJL%2BatdOnumwy5lVtO1z2APD2EMdjAamB1CvwlTrUxtGjD1irAJKRw1FwHWdNAGc5gH3OFQfM4Q6vudW2etHyUmxlJknX%2FMeqNES8HWltICY0XRbcBynRDOIK83MkueImSAXkNp5AIy5OpKsLiQoyuWH4iyqCGwhwbIsmoyt%2B5D9iJmu32cxxgNd9yhu8JJmj6%2BV6oZYZo3JQgob%2BkpbBr9edZ0MPgc4cSHvgUdQ%2Btqs2yKLOW4w%2B%2FL9xQY6pgFdKKa2EWTE6nGMaKaEYnaoP7S8GgXIVxYfjg7wq%2Fjwhg6MCHJ5wo8UJ96MJbBJpZilJ9usWE%2FvUf43fvOLGE4dXuuE5E0rHj6H4GNh9X8QmZfGFZu4BSPEOB6mgynIdioamyh3qNLkmc9G%2B3iXrGVkA6CccORNo4t2lYY5YD7e8lG0kppYSF2nXvn9kS8WXoqymiGUPYqplbp5NdeWfyNmoJGF9L5E&X-Amz-Signature=79bf6c4f84e2eb65f2bca0e33ec73035c9d0b4b390256a0101861b67451aa5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
