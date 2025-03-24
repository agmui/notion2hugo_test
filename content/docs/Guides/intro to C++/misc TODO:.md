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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSEJFCMX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwOlQ7gc4yUcTRHSDsYGR4Z2b5Rw0oeBFD8d9Y5W8LIAiEA9QOoxij%2BYvrwzdAjrpxBkZ3lrbjQfpUFWMyZ3p1v8dEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdaEaNgacA5YQJ0KircA3tMYNQhBXCPkjoUjoU5GvkKDVIpDS4EszuU50pO9cbeYsJW0R4QhpcXmcLEGWBj629D5XYORX%2FBqD8VOVDKzN%2Bhck3OlXTXmSlNAu77w936jZYBRAsx05rFvXngLEwuK9V797hp4FqBnZMCI8%2F7ML2htDxMqWw1u2SMaXvAgwiwgqpvlr%2BCpwP6qsWdRTaHJNgXe8lk5WyFLxazJGAOs4q6sZHWb%2B3iPusM3WRorv0cZHj1SnOuAZfTvNEesAOtAf5YB00uY77BqjyIj87sA4H1QCVUBdWnYwuxyntCRgfjtDJGMnU1mpVveiQBD11dsNXqNBs44Ks2nl7CrZ7tpD83zdiWO04ckej7u6cWuV2u%2F6SgUWQTw9knYFzwsFA0ajXYgEJ6iTsGB7QzdWdfE%2FAXlrMTzfILeUccHOz6G7AqSSTvfjJDhn%2BXe7VonBq3Xh1wY3kkPPDpYJe%2FNqag%2FTz2dg8HtBYuTvQdD4FHMffvbdFqkZTQBxncd7ZeTddfPYllIGJC1jJspGRNqV5SFmHnCTIdMBk48Ia%2B0b3kpJNqPyAvCdAsRXiBDet1a3QQmNkWM8nfvEHytLYsBGtCZZ7dVyQObNOqs%2FKEVIQsPr4u4hkTAkZiYGsxGXMkMP%2Bvgr8GOqUBRHXjgle%2BoAWESBO8l9k9fLn1lmhFx5kwV%2FQu%2FameVvw0IqiGfuHy91Jh8KXfVtHycemVZBTlbyoenKM63UIfm%2B2seW4uD1sRR9X%2FgQrzWeApmjh%2F8H5l0fMi4fz9ELZg%2FoY%2Fl6yBvkt4vk%2FRXdfPCrAoTk%2BdTJgL7EqQBzr9NnoJQRmyQ5tEUipRWQ6LzWZB%2BA1XqAOVmF1kXJ25%2FnGxpPzXG0mP&X-Amz-Signature=4617fcd1e660ac7b52ea5d732f4938b2e6d11e8e193d9e44d2142e12cf67697a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSEJFCMX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwOlQ7gc4yUcTRHSDsYGR4Z2b5Rw0oeBFD8d9Y5W8LIAiEA9QOoxij%2BYvrwzdAjrpxBkZ3lrbjQfpUFWMyZ3p1v8dEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdaEaNgacA5YQJ0KircA3tMYNQhBXCPkjoUjoU5GvkKDVIpDS4EszuU50pO9cbeYsJW0R4QhpcXmcLEGWBj629D5XYORX%2FBqD8VOVDKzN%2Bhck3OlXTXmSlNAu77w936jZYBRAsx05rFvXngLEwuK9V797hp4FqBnZMCI8%2F7ML2htDxMqWw1u2SMaXvAgwiwgqpvlr%2BCpwP6qsWdRTaHJNgXe8lk5WyFLxazJGAOs4q6sZHWb%2B3iPusM3WRorv0cZHj1SnOuAZfTvNEesAOtAf5YB00uY77BqjyIj87sA4H1QCVUBdWnYwuxyntCRgfjtDJGMnU1mpVveiQBD11dsNXqNBs44Ks2nl7CrZ7tpD83zdiWO04ckej7u6cWuV2u%2F6SgUWQTw9knYFzwsFA0ajXYgEJ6iTsGB7QzdWdfE%2FAXlrMTzfILeUccHOz6G7AqSSTvfjJDhn%2BXe7VonBq3Xh1wY3kkPPDpYJe%2FNqag%2FTz2dg8HtBYuTvQdD4FHMffvbdFqkZTQBxncd7ZeTddfPYllIGJC1jJspGRNqV5SFmHnCTIdMBk48Ia%2B0b3kpJNqPyAvCdAsRXiBDet1a3QQmNkWM8nfvEHytLYsBGtCZZ7dVyQObNOqs%2FKEVIQsPr4u4hkTAkZiYGsxGXMkMP%2Bvgr8GOqUBRHXjgle%2BoAWESBO8l9k9fLn1lmhFx5kwV%2FQu%2FameVvw0IqiGfuHy91Jh8KXfVtHycemVZBTlbyoenKM63UIfm%2B2seW4uD1sRR9X%2FgQrzWeApmjh%2F8H5l0fMi4fz9ELZg%2FoY%2Fl6yBvkt4vk%2FRXdfPCrAoTk%2BdTJgL7EqQBzr9NnoJQRmyQ5tEUipRWQ6LzWZB%2BA1XqAOVmF1kXJ25%2FnGxpPzXG0mP&X-Amz-Signature=7afbebdd2e213cb027842790c314886d9e0afb9280eebfe1ee7993fd0296d926&X-Amz-SignedHeaders=host&x-id=GetObject)

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
