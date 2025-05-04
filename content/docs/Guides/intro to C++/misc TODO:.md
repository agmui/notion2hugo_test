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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPMGD4N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHLv2zBSWSvtUgblSY1cS%2FZn7FWYkaU5EmcLZ8Jccm2TAiA1R6akv6zQwwO18q0GBdd7sBWHLM3wqbV%2B0a2j6HmuDyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM3ivG0TjXM4Hy12fXKtwDDiHOPinLsB089DywsZsfcdMcVX2XfZOZfxUqU42bysoJkMPbF9eg5XMlM8GQ%2F44wZAV4rdAx9bz04yLygkBDhBZz69I9wCo7lgej8F5WYPJrDMdXmepyJjWGN9WWnC4kOS%2BAOk8uFCGxpGFUSZn3FwbY5db0XhY0i5pLG4dMrsDbEo%2BuwLsxx85Kp4tzoR8F47Yvg6vjKjcBeEwc8kZwNkAkFfN5PtmsQnQX8aCYxGJKip120eLOHkXNdM8qyGf%2B8pb3dQAzXl181TvoBvUDv9Vgg5ESz4Qj6lNf9aL8k8pbdXfEjI6BbpmkloECfIODxP6toGe8WgPEhwqK5uCVFqsmR3dRjaGsJCg2RzCI4JRho4Xnr%2BX8pxjpEvgHOz1pOzd0kUo7ZUfCjyKVA8WtVpF3jch2s7jy%2BEaUSuDGoAcMi17U1JtUoP3YL%2FgpxkdjY1KsvhMUIKvCdLixXguxCzdatTnQH9QXTIZlEIz9WAcH4y15HjUbebhqtemd4LRf4%2BPFP8pOz5PRuv%2BpKr9Q%2BFj40piHmc14mk%2FN5yKPjj3%2FMIz27kl4eJCiNoGs7Z8ep1OclD5ae9qMxVu%2F2NkkaYi3wD2fWK%2B1pkQJK6QDA3T6EAkfnXl3YdAPo9Ew1tHcwAY6pgGL8yUxqNQyilQnfSyKKgGMS7IUUqmqRKQeKchV2Wh4pG9oNPFEoaJEpvZA3O80Cj4K7OaxXtvTPurSrH4Xo0d9BABu84Az467IdToVw04VHfKreVfu4kN88p1aHE7j3h%2FYzRmfjg30pl8VvIqAZDcyCeQ6n555y4noju1izTKgAHv2GdvJNmgfkLkwKpZszHz3J1%2BA8fSjcU4E9QYoPB42Eyr2yCmk&X-Amz-Signature=72b72ec5c5a6379824a52b9e324f7d6ca1fad0310f5a607fda1708f047dd68e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPMGD4N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHLv2zBSWSvtUgblSY1cS%2FZn7FWYkaU5EmcLZ8Jccm2TAiA1R6akv6zQwwO18q0GBdd7sBWHLM3wqbV%2B0a2j6HmuDyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM3ivG0TjXM4Hy12fXKtwDDiHOPinLsB089DywsZsfcdMcVX2XfZOZfxUqU42bysoJkMPbF9eg5XMlM8GQ%2F44wZAV4rdAx9bz04yLygkBDhBZz69I9wCo7lgej8F5WYPJrDMdXmepyJjWGN9WWnC4kOS%2BAOk8uFCGxpGFUSZn3FwbY5db0XhY0i5pLG4dMrsDbEo%2BuwLsxx85Kp4tzoR8F47Yvg6vjKjcBeEwc8kZwNkAkFfN5PtmsQnQX8aCYxGJKip120eLOHkXNdM8qyGf%2B8pb3dQAzXl181TvoBvUDv9Vgg5ESz4Qj6lNf9aL8k8pbdXfEjI6BbpmkloECfIODxP6toGe8WgPEhwqK5uCVFqsmR3dRjaGsJCg2RzCI4JRho4Xnr%2BX8pxjpEvgHOz1pOzd0kUo7ZUfCjyKVA8WtVpF3jch2s7jy%2BEaUSuDGoAcMi17U1JtUoP3YL%2FgpxkdjY1KsvhMUIKvCdLixXguxCzdatTnQH9QXTIZlEIz9WAcH4y15HjUbebhqtemd4LRf4%2BPFP8pOz5PRuv%2BpKr9Q%2BFj40piHmc14mk%2FN5yKPjj3%2FMIz27kl4eJCiNoGs7Z8ep1OclD5ae9qMxVu%2F2NkkaYi3wD2fWK%2B1pkQJK6QDA3T6EAkfnXl3YdAPo9Ew1tHcwAY6pgGL8yUxqNQyilQnfSyKKgGMS7IUUqmqRKQeKchV2Wh4pG9oNPFEoaJEpvZA3O80Cj4K7OaxXtvTPurSrH4Xo0d9BABu84Az467IdToVw04VHfKreVfu4kN88p1aHE7j3h%2FYzRmfjg30pl8VvIqAZDcyCeQ6n555y4noju1izTKgAHv2GdvJNmgfkLkwKpZszHz3J1%2BA8fSjcU4E9QYoPB42Eyr2yCmk&X-Amz-Signature=8f4de71820b80c32774b03b4dd6e5fedb7c4ebbb439c5016140069c489714d94&X-Amz-SignedHeaders=host&x-id=GetObject)

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
