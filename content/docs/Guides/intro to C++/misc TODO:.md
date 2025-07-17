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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWLKX77%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCv4YrXE8Vt5TLF65TMQ%2BzZ3ELSTsTDYV7tbL1Sj0a9RwIhAMtdMo1cF6WvqkEV8DfgcJuz94IUdSBFekJsHoazFhXEKv8DCHYQABoMNjM3NDIzMTgzODA1Igyj83EGhFuXsTyMqzAq3APCHmJ4DO6LVogj7ufoXF6YhDTGxP9NEV4K4DWowcLwfqppbp%2FitiaKnbj9VkA2Pbx9GX7pmOxKBk7WZjnQLZN5YqcY4wTSdu%2BW0uZ%2B5eC9scYKGU0iTNxn3YKPdKJneL6aPOyfxsZogCkJsKrCBEYrq9wHWQXcCxKhpXQQ1jWuRCy1m1XDON9dUvpKeNvXurame9yN1W0CZG%2FkjJL5z%2B4rKQW%2FD9ehSJMMXP%2B%2F7%2FBWORyVTpNKN0hiVZM%2F03hvo6jgI0RCRPfj37wQ5NzqO%2FrDOaklJB8%2FBdb974NqE2kHpVUkjRMAKRFToG2jjNcujqxZiKQFKiot9SO1frPytVOBmfuGm8Py5G8eS79cR2B3DOAm9EwLQsO%2BDMLvZFo%2BAjiVsYWbKq39Sen2ix%2FwwLZmnumQ1nj8Iydzj%2FJ2j8Dvog4gXCTi1Jd2jCiavcJB4yBA0Q1ZykM0Wal%2BsYMhHce6WFBcXEc%2FIyZOOM9LlyC6FlawCCNCpIbMKRJ5Glmve7W0NuJCybYWAJPQHaYmbmjtY26SXweieN9AG81MgG851nQmX6RuSdsCGRTGPLamz5xm5V7fPDlPYdoNxsaGHd8BtwinvhUcLq2HwIqd1hVaHBbpbuZ%2BWgj%2Bl4rhVTDt4ePDBjqkAcXTzZvPl0wh6SFdDZ8wqP7aH1W45FF%2BAvlJHwDI42IRhaRApEZ1NhyS4an4tSzn6VikT01rrnqtJ6XzYJUEBghjjF4nDS6k4mVYVs333Gz%2BJk1ZCYuIU0DbBS%2BNHTkAbyj0Qir4maQfjv%2BK1cJhz7wfsJc9XtD92KrhP4lX9%2B3cEJ1%2FNFWvBYqMT94M2mn4dxOeOiBRTtq5nyS%2FogyqUhdg9mm3&X-Amz-Signature=0567d1ac7cb704e744619907262980ea0c769f8b0e34ed70e8db479bba80bbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWLKX77%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCv4YrXE8Vt5TLF65TMQ%2BzZ3ELSTsTDYV7tbL1Sj0a9RwIhAMtdMo1cF6WvqkEV8DfgcJuz94IUdSBFekJsHoazFhXEKv8DCHYQABoMNjM3NDIzMTgzODA1Igyj83EGhFuXsTyMqzAq3APCHmJ4DO6LVogj7ufoXF6YhDTGxP9NEV4K4DWowcLwfqppbp%2FitiaKnbj9VkA2Pbx9GX7pmOxKBk7WZjnQLZN5YqcY4wTSdu%2BW0uZ%2B5eC9scYKGU0iTNxn3YKPdKJneL6aPOyfxsZogCkJsKrCBEYrq9wHWQXcCxKhpXQQ1jWuRCy1m1XDON9dUvpKeNvXurame9yN1W0CZG%2FkjJL5z%2B4rKQW%2FD9ehSJMMXP%2B%2F7%2FBWORyVTpNKN0hiVZM%2F03hvo6jgI0RCRPfj37wQ5NzqO%2FrDOaklJB8%2FBdb974NqE2kHpVUkjRMAKRFToG2jjNcujqxZiKQFKiot9SO1frPytVOBmfuGm8Py5G8eS79cR2B3DOAm9EwLQsO%2BDMLvZFo%2BAjiVsYWbKq39Sen2ix%2FwwLZmnumQ1nj8Iydzj%2FJ2j8Dvog4gXCTi1Jd2jCiavcJB4yBA0Q1ZykM0Wal%2BsYMhHce6WFBcXEc%2FIyZOOM9LlyC6FlawCCNCpIbMKRJ5Glmve7W0NuJCybYWAJPQHaYmbmjtY26SXweieN9AG81MgG851nQmX6RuSdsCGRTGPLamz5xm5V7fPDlPYdoNxsaGHd8BtwinvhUcLq2HwIqd1hVaHBbpbuZ%2BWgj%2Bl4rhVTDt4ePDBjqkAcXTzZvPl0wh6SFdDZ8wqP7aH1W45FF%2BAvlJHwDI42IRhaRApEZ1NhyS4an4tSzn6VikT01rrnqtJ6XzYJUEBghjjF4nDS6k4mVYVs333Gz%2BJk1ZCYuIU0DbBS%2BNHTkAbyj0Qir4maQfjv%2BK1cJhz7wfsJc9XtD92KrhP4lX9%2B3cEJ1%2FNFWvBYqMT94M2mn4dxOeOiBRTtq5nyS%2FogyqUhdg9mm3&X-Amz-Signature=7e24409d6647b9bc4b058d64caa012241f367d9371ab938a69c9f2f9c67d5865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
