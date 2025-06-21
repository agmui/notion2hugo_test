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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75VQRRK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjwYnVaDKWE0pAEj1HnAGtGg3%2FSEkLlx5EgPo5dUTwWAiB8yEqlpap1XpwvhI6rBVhY4PKUFOe6Kgl96d%2Fj4JAD5iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxC6g0OBGPayE2PW8KtwDX1mLzx6QasA3QaboId0%2FCAH6v8OIMFEOD3JD1FRkHtCb7e2rb7T2FGywXInEzSXjhj1X6pySIOReEZjHffB5uGp5sf3RGdYhPbyO15Y6jT1yuq8E5aMTqKrx2sQXkXqztppBgAr7epS2RTohPdWmnJTTg%2BfqvTdp9UmUaPU28%2FlB0QzW%2BKywJUufQ6GOkiWMu4x7xEQU03FjvtLf3AoZyQgIXif9F6UwnaYZ5%2F0Y%2FaIZBOGxFJGk6xradChMpX9F6OFgT6wqzyomrPg0Wv1ZiUELfnhlBg%2FlfJwKyaUNPx7GYsyMLx1ERz5whnKPYc12mdgsmzlMIlEcGUREYRrS5b7bTAE920rjzjZsaGRbUuT0v4mzH0mh25zFOr9x4pXgIScWOuiMD7MTLlX8hfIKflUVPpJR6Q4Vfjwm0zoDojkbapuiIG%2B%2BQ1QIbBrSIosmTRfE%2BxSBZJKwYl%2F0SAr5uOxU8%2FYzWURB7GTUy47bSvOjzRoOBtGUNo0yrzOdU5%2BPR6icUpKqzxkYHhfZSxiU%2Fm2gcb%2BJFjhBQi5IosJQvaeP75RjVi7kNgOF4YdnEtYj9fGppQ9SI%2B5up%2BADmNJBeyGzUQVBZ1MI0bJ53Xsm4MPbHHMsQs9Y2n0nGGMwyq%2FYwgY6pgGkmQvtFMlsdAWFervwzfsFhU4uJ7Ebdb023nzXRSE%2BO4Qh%2FPtIV9xNizGVaD7YbfwntWZpCZLqEFkDZMjI7GTiUKwRpHq%2BKeCfNWPr9zwLvdfU7TqoEpq9%2FMeoOBZHxebZsDZWr76%2BM%2BoDwGzSyhCIyBnak2I96ViAmSGVcimYcElPicT4oI3faR8Kuhk%2Fi81ZLw4VWuVz%2BPyPX5kEg36uSkP0ZfxH&X-Amz-Signature=6037ba36e04cd5ac7ae90520e7084295fbafd37917d03d1bab80e5ead57d688b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75VQRRK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjwYnVaDKWE0pAEj1HnAGtGg3%2FSEkLlx5EgPo5dUTwWAiB8yEqlpap1XpwvhI6rBVhY4PKUFOe6Kgl96d%2Fj4JAD5iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxC6g0OBGPayE2PW8KtwDX1mLzx6QasA3QaboId0%2FCAH6v8OIMFEOD3JD1FRkHtCb7e2rb7T2FGywXInEzSXjhj1X6pySIOReEZjHffB5uGp5sf3RGdYhPbyO15Y6jT1yuq8E5aMTqKrx2sQXkXqztppBgAr7epS2RTohPdWmnJTTg%2BfqvTdp9UmUaPU28%2FlB0QzW%2BKywJUufQ6GOkiWMu4x7xEQU03FjvtLf3AoZyQgIXif9F6UwnaYZ5%2F0Y%2FaIZBOGxFJGk6xradChMpX9F6OFgT6wqzyomrPg0Wv1ZiUELfnhlBg%2FlfJwKyaUNPx7GYsyMLx1ERz5whnKPYc12mdgsmzlMIlEcGUREYRrS5b7bTAE920rjzjZsaGRbUuT0v4mzH0mh25zFOr9x4pXgIScWOuiMD7MTLlX8hfIKflUVPpJR6Q4Vfjwm0zoDojkbapuiIG%2B%2BQ1QIbBrSIosmTRfE%2BxSBZJKwYl%2F0SAr5uOxU8%2FYzWURB7GTUy47bSvOjzRoOBtGUNo0yrzOdU5%2BPR6icUpKqzxkYHhfZSxiU%2Fm2gcb%2BJFjhBQi5IosJQvaeP75RjVi7kNgOF4YdnEtYj9fGppQ9SI%2B5up%2BADmNJBeyGzUQVBZ1MI0bJ53Xsm4MPbHHMsQs9Y2n0nGGMwyq%2FYwgY6pgGkmQvtFMlsdAWFervwzfsFhU4uJ7Ebdb023nzXRSE%2BO4Qh%2FPtIV9xNizGVaD7YbfwntWZpCZLqEFkDZMjI7GTiUKwRpHq%2BKeCfNWPr9zwLvdfU7TqoEpq9%2FMeoOBZHxebZsDZWr76%2BM%2BoDwGzSyhCIyBnak2I96ViAmSGVcimYcElPicT4oI3faR8Kuhk%2Fi81ZLw4VWuVz%2BPyPX5kEg36uSkP0ZfxH&X-Amz-Signature=8658fa956d65ea79e267e5b0700ea4a25c60168098ef1a3f9adfe1e85e5cc20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
