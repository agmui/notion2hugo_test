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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQRY2AG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDY7IeN4dxVLax0XQEqtsFvCeI1o%2Bpcbg3Gcdr2aEoWVAiB8gnX41hi1M%2FgrpYnJp7cxUmv9q%2FdeaVb0ZQ5JCABxNSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHIqpz3vysBhNC6acKtwDQX1T%2F%2BDk00DjYckVi4diITfVAA8I0yVu3JPy0yYibjDiXeI0GJCq3Hz3k%2BmWNQIvJQeWJ82KPTPtDnGC60A3ry8V0a8pSJf8wJOTrJ%2BYs0e5HPnXH5zmbnA9CiyzFrInQuRHMIcrMAAf9BAu%2BOuRV5z3b%2F6VkgaCrM7eXxEW%2B4TP8Ih7sQbw7o1XMNSkUvQVf%2B3uS72U%2Byg3TdKGrStigmdg7bsP7SbcMeLe5MLbtnZ5kWPscBW%2FcqSsq0yVpWQpK4FkYbLxSwzm5InVft%2FEuZu3YUOeCbplUTt%2FyOI6VUbkJR1QBWKicuuIa4NzKLj6V9JCa4SM0mXPeyiZtBsvpfQrS0buMl9OvMa36h2ymyW2ZB2f1yhs%2FPyM1OmkxOGM3F6HeR1WcVLkckOn1sPUbcEEwUGyjfj6kOFCzbniqigbjw5cBwthCIQCYjQuQAi8X0IjdyoyTpB7K9SxnduAbwgxLvSwO%2F8OgkL442b1QHEsJf6ZEcVi5kNAjTyZDag8x8pZTjA%2Fb6At9ZGxdG5H%2FdpDw0TqUtt3YeCRwavSAOUdl0V%2BM%2BsufIDA1i8YQGLYSeo5xyHzw63i46THHWyL32gV9G799710QwNI8Yq3gFWT3pzPu6eIgww6NBgw3M%2FHwwY6pgFBxCirfOxrdvDIXqNfLkSu21MOgJYlUmj72V6%2F1bUoHf%2FvHMgn6b8WlORwL3nwqiv4fp61g7Qfm1Ibm%2FjKs5AvCkcpwO5fNI4BruqVJAKPWxuE9959tcsCxEZ0UDO88ILgaPLLzmCW3bKA2kfPaFIdnI19vFoOR%2FJz9Fguodw7U6prwpKC%2B%2BFrqaOI4E0MSMuBjeR6E992yBKHabh8i5XiFj2wSGPr&X-Amz-Signature=42bd3fe83e5bc8d7cbeb92d6b4989a32f653fba359cef917649aed28fa63097f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQRY2AG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDY7IeN4dxVLax0XQEqtsFvCeI1o%2Bpcbg3Gcdr2aEoWVAiB8gnX41hi1M%2FgrpYnJp7cxUmv9q%2FdeaVb0ZQ5JCABxNSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHIqpz3vysBhNC6acKtwDQX1T%2F%2BDk00DjYckVi4diITfVAA8I0yVu3JPy0yYibjDiXeI0GJCq3Hz3k%2BmWNQIvJQeWJ82KPTPtDnGC60A3ry8V0a8pSJf8wJOTrJ%2BYs0e5HPnXH5zmbnA9CiyzFrInQuRHMIcrMAAf9BAu%2BOuRV5z3b%2F6VkgaCrM7eXxEW%2B4TP8Ih7sQbw7o1XMNSkUvQVf%2B3uS72U%2Byg3TdKGrStigmdg7bsP7SbcMeLe5MLbtnZ5kWPscBW%2FcqSsq0yVpWQpK4FkYbLxSwzm5InVft%2FEuZu3YUOeCbplUTt%2FyOI6VUbkJR1QBWKicuuIa4NzKLj6V9JCa4SM0mXPeyiZtBsvpfQrS0buMl9OvMa36h2ymyW2ZB2f1yhs%2FPyM1OmkxOGM3F6HeR1WcVLkckOn1sPUbcEEwUGyjfj6kOFCzbniqigbjw5cBwthCIQCYjQuQAi8X0IjdyoyTpB7K9SxnduAbwgxLvSwO%2F8OgkL442b1QHEsJf6ZEcVi5kNAjTyZDag8x8pZTjA%2Fb6At9ZGxdG5H%2FdpDw0TqUtt3YeCRwavSAOUdl0V%2BM%2BsufIDA1i8YQGLYSeo5xyHzw63i46THHWyL32gV9G799710QwNI8Yq3gFWT3pzPu6eIgww6NBgw3M%2FHwwY6pgFBxCirfOxrdvDIXqNfLkSu21MOgJYlUmj72V6%2F1bUoHf%2FvHMgn6b8WlORwL3nwqiv4fp61g7Qfm1Ibm%2FjKs5AvCkcpwO5fNI4BruqVJAKPWxuE9959tcsCxEZ0UDO88ILgaPLLzmCW3bKA2kfPaFIdnI19vFoOR%2FJz9Fguodw7U6prwpKC%2B%2BFrqaOI4E0MSMuBjeR6E992yBKHabh8i5XiFj2wSGPr&X-Amz-Signature=8074f1aa6fbe8f7727d023712fbe14242f238a033d261810b528bc1771c464d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
