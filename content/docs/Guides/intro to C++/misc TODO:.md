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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JZ22VH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGyc75YE2BbPzAGJagSr4707dYBspm2%2FN6wB0kGotyxzAiEA3CoAqPVUSArH6ElUbv6iDAxHrzdV6id3FUnRrjLwGRgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj7YHtni7cD9fl90yrcAzpCb7JC8jcKop087KQJTq0TuitlEjlEqo4OSK3dD1oD1Emcu9%2B35%2BUToG7PYBONzDWilDfHyzwI8UCvlBfNNC5tCu5uknLfR7tZh2g0PX%2Bc8ntm22S22qgW6xoZI0pCfJMVrJA5nqdO1girzFzyiysIj%2B4%2B2dhE65b03jK975F4vVq6dIEkaggajYwWyULoFwfwk%2F5VH4%2Bw%2Bj0%2FLkOvkPk2X70b2atSoCEo3kO4DctClYbkiwsFrLc6TdGZfq6X2WAS%2Fmkd19LXnhxc4AyOAHQl3xs9K%2F%2BfOxV%2BFyCpTik1aWIFY6ua0zHUqQbovMdJzHK1KvLTHTgydCaw2d81t62wHryBqI1jm%2FQSnJtNXXGED4%2FVhhCYQhEv0D2MQ4ELScY8xJ5j8dkf1ERA84lMfM3cvmGANp5ihvMXMVgIcT5iY%2FQaPUYtBUR5L2wGFsMUra2mRapjLZzVBbtJTEDow%2BgPfSxg3Cm%2BUgXTOC8YZhHkobb1yeXRKvwz4aieXA7ZgloX5pmzxqMeO58K%2F00aX30hINUlRC34aSZQdPVc0WcyPk9rLfPAfsznGXgEGbnoSfikqvSX2y04FCVFPCVAtGT6HhyMy0OIWkH7oqf1EVV8%2BDug4XTn%2F5E%2FwenaMLbHz8AGOqUB8LLJLUXdzSJOhukPNVBI3ou1jsFobV%2BSBTXYcJj7Uh%2F0m7c7j%2F3Na9nzEynox9WD0v0GxYtQZJgOk0jGX7ke4h0fWeZ4%2B2Qs9Bm1wuEbTkBQtXSw8nEOkoE%2BBmaP%2FNgfOD%2FMv2TFJxBVfwhdfBHQIKrToTC2KGG%2FJ7IY8%2Fequ6a1fzIy6Pa8y63Hqcd5cGRQQqUXiDQtwihcEzXAs1lsqDTW8YR9&X-Amz-Signature=7769f8707480db55de2bed741320ee8582b242c4491d650dcdff501cc7c6ae3f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JZ22VH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGyc75YE2BbPzAGJagSr4707dYBspm2%2FN6wB0kGotyxzAiEA3CoAqPVUSArH6ElUbv6iDAxHrzdV6id3FUnRrjLwGRgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj7YHtni7cD9fl90yrcAzpCb7JC8jcKop087KQJTq0TuitlEjlEqo4OSK3dD1oD1Emcu9%2B35%2BUToG7PYBONzDWilDfHyzwI8UCvlBfNNC5tCu5uknLfR7tZh2g0PX%2Bc8ntm22S22qgW6xoZI0pCfJMVrJA5nqdO1girzFzyiysIj%2B4%2B2dhE65b03jK975F4vVq6dIEkaggajYwWyULoFwfwk%2F5VH4%2Bw%2Bj0%2FLkOvkPk2X70b2atSoCEo3kO4DctClYbkiwsFrLc6TdGZfq6X2WAS%2Fmkd19LXnhxc4AyOAHQl3xs9K%2F%2BfOxV%2BFyCpTik1aWIFY6ua0zHUqQbovMdJzHK1KvLTHTgydCaw2d81t62wHryBqI1jm%2FQSnJtNXXGED4%2FVhhCYQhEv0D2MQ4ELScY8xJ5j8dkf1ERA84lMfM3cvmGANp5ihvMXMVgIcT5iY%2FQaPUYtBUR5L2wGFsMUra2mRapjLZzVBbtJTEDow%2BgPfSxg3Cm%2BUgXTOC8YZhHkobb1yeXRKvwz4aieXA7ZgloX5pmzxqMeO58K%2F00aX30hINUlRC34aSZQdPVc0WcyPk9rLfPAfsznGXgEGbnoSfikqvSX2y04FCVFPCVAtGT6HhyMy0OIWkH7oqf1EVV8%2BDug4XTn%2F5E%2FwenaMLbHz8AGOqUB8LLJLUXdzSJOhukPNVBI3ou1jsFobV%2BSBTXYcJj7Uh%2F0m7c7j%2F3Na9nzEynox9WD0v0GxYtQZJgOk0jGX7ke4h0fWeZ4%2B2Qs9Bm1wuEbTkBQtXSw8nEOkoE%2BBmaP%2FNgfOD%2FMv2TFJxBVfwhdfBHQIKrToTC2KGG%2FJ7IY8%2Fequ6a1fzIy6Pa8y63Hqcd5cGRQQqUXiDQtwihcEzXAs1lsqDTW8YR9&X-Amz-Signature=7d2beb2fbf319637737554fad9620f194a0ee90da853206189412f918d6d3e67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
