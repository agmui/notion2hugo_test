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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZLYORX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmrbRbQ0kajZ%2FYx8MLwJeXU5GTnSxC1ZxCiW9WDidMKAiAgwwogfh%2B5Hiur%2F8g%2BzIODutT4P6IP37RPctneUe2KVyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMrTTGi4K2NwHpt1aJKtwDtcs4%2Bi09dFUXxGXu3TANjLK6Dlkj5sEOmSDNdZXVl6QNsX2gFmakD4yl4EHaShW7fYEbFxCiat%2BTW7uBFlBFS9bWWl5Dag%2BelMJWzbKt5MBVEELDkyHCmnEkQ2o5GrpY0E9AcA4xkedhj9FJv6x25spEQNtgcqlK9CXdEcUiprmsWGqiALkt7l%2Fvqagb6uoXe4ZXo6qp0YS4%2B7f6YktvdrM3NK%2F08XEDnjLugNM9LPGxqfWi%2FbDvB2OTqvlB9UZRrdiKMsoYtFqloFMCsB5S0oTTcI7TvCr0UpYfEd%2B8XgEKZCtlCdFjmpvIx3QkM7KQ%2FjW%2BfOw2WlKwE2%2FYdQzBl1AJzCaium39PeQSy2nhy2NJr0pqZCQ80bHAdN%2BYf3VYEpOosOkgqLpjCZuaLzSPYJh%2F2rZGw8%2BDNafZ%2B7teavACNaGPtYi%2BRkzORtA22JcNQi5BSl7xSW9HzoqfZz8c1TqxYNESglNYnfq3nuPYjjFQGvQcypgdQueAsHu5LuukrbKiGz7rZmlx6OTB8ypND246JTR3jlgBy4btKBL4eivZVxxndv8xLwFg7RWIKro9JbgXDgG3tRIK2VOcoK4pG6c%2Bi%2BfeVFKF79l0DIpEY9lvSRTOkpcYttqICGMwksuNvwY6pgGgs%2BiSpQm%2BNqv3Q8s6uhmZ0FCHCylGcBf9aaemkS0%2BQ2%2BAwMmCIsv%2B774AE6Y9uc9dq8Ojhpa3enM%2BbFjdgmUfjU5inms%2FqG4J1qcJWlWPn%2BebsYqDok4BcLrE1H88Pet08nRs0l0XJzLu8t9jR6M36e%2Bu9GpMyITKN9msE15ob6MnctWqRplvnwzuwIak1jUYm%2Fekx3HL%2FVy2mOoEY%2BWPj1PeFnCj&X-Amz-Signature=d5dc743dc935a9b448f5b58342e07376963880fdedaa38e8932054c84f4b589f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZLYORX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmrbRbQ0kajZ%2FYx8MLwJeXU5GTnSxC1ZxCiW9WDidMKAiAgwwogfh%2B5Hiur%2F8g%2BzIODutT4P6IP37RPctneUe2KVyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMrTTGi4K2NwHpt1aJKtwDtcs4%2Bi09dFUXxGXu3TANjLK6Dlkj5sEOmSDNdZXVl6QNsX2gFmakD4yl4EHaShW7fYEbFxCiat%2BTW7uBFlBFS9bWWl5Dag%2BelMJWzbKt5MBVEELDkyHCmnEkQ2o5GrpY0E9AcA4xkedhj9FJv6x25spEQNtgcqlK9CXdEcUiprmsWGqiALkt7l%2Fvqagb6uoXe4ZXo6qp0YS4%2B7f6YktvdrM3NK%2F08XEDnjLugNM9LPGxqfWi%2FbDvB2OTqvlB9UZRrdiKMsoYtFqloFMCsB5S0oTTcI7TvCr0UpYfEd%2B8XgEKZCtlCdFjmpvIx3QkM7KQ%2FjW%2BfOw2WlKwE2%2FYdQzBl1AJzCaium39PeQSy2nhy2NJr0pqZCQ80bHAdN%2BYf3VYEpOosOkgqLpjCZuaLzSPYJh%2F2rZGw8%2BDNafZ%2B7teavACNaGPtYi%2BRkzORtA22JcNQi5BSl7xSW9HzoqfZz8c1TqxYNESglNYnfq3nuPYjjFQGvQcypgdQueAsHu5LuukrbKiGz7rZmlx6OTB8ypND246JTR3jlgBy4btKBL4eivZVxxndv8xLwFg7RWIKro9JbgXDgG3tRIK2VOcoK4pG6c%2Bi%2BfeVFKF79l0DIpEY9lvSRTOkpcYttqICGMwksuNvwY6pgGgs%2BiSpQm%2BNqv3Q8s6uhmZ0FCHCylGcBf9aaemkS0%2BQ2%2BAwMmCIsv%2B774AE6Y9uc9dq8Ojhpa3enM%2BbFjdgmUfjU5inms%2FqG4J1qcJWlWPn%2BebsYqDok4BcLrE1H88Pet08nRs0l0XJzLu8t9jR6M36e%2Bu9GpMyITKN9msE15ob6MnctWqRplvnwzuwIak1jUYm%2Fekx3HL%2FVy2mOoEY%2BWPj1PeFnCj&X-Amz-Signature=6dfb96be4a10d12c380779b7ff8e9eaec448ff5fd4bb03de99f00e5cac81d468&X-Amz-SignedHeaders=host&x-id=GetObject)

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
