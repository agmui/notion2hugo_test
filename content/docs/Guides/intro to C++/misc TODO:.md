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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM7OSWCX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oIuc6IsqAyUZE%2FNPLUwddHR2dArrTMHLR1UYEtbF4QIhAMO8msbUMRq1apEhcItjc7V2Fljv6DF4OE9Z63rGm5BpKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJg2Jzda%2B6aEbXE9Iq3APaf5%2FAMOAyydXITqgT%2F2SMNqo4IGudWRCIMb%2B0SnC6IGXD8HC8f36Lz9e9LfYxYfqk%2Bv3Uaj6JEQyUBfYZIbprPJS6gQ38Bt7lBVyEZ14K56ZpnYB9%2FBjK3%2FpZmIs0vsE7ktWjJ3Sw7cSCUnTF8qNCltuG4fgT5Aktug0pszFIjc1piRwry9fYAlXgr1ZDoPItzM0yziZOKrYz9XYIQnlmEIM3%2Fdq8%2B6oJ%2FJdUfCQw1m3bVnuNI3carQDiu9rhjTzxskNSK4Dhox181P6%2B8rc8aWsPZBJmR9FnDH3AXXG%2BwefJm9BSDSyQ%2BwvNHY8eN9aN2mq6foNXHEwU5m6zhqiWaDvlzMOswHyPpG%2Bi2%2F0ujGAll%2BVhL1%2BEUsGpCNBNGVUQNwkG9z9lVIDhhBd3OOGark5uxqKVQxGZravCvGwSeRixDQMmKFRa%2Fic%2BoWszUcZs3mNmgdYGdd5vL5KQsmO9hzfRMjDeiz4mb9EWOzOc%2FAVIkqMN%2FGhIdmP2bfz1W%2FFmFUNrb9rVd%2FszgvSOmeY5Vci2QWPxflu5cb4HWoFRkFdIVrFvFOswY8kgEAFfRPQW%2FZ6eht7%2FI%2BkLsMmXFP2DGg%2BrlcalAVLbiSZaLZ%2FZEeiD58T6XrUdCNhbKzCd%2FcjDBjqkAe5VbD7aO5X4nY38xVb0b9AqJZk%2BYg%2F3id9A7jThK3KMsFtTYDcGrfrBeW4cCDYgTfW69XQfEem0%2FyZYvlFSPD7keETxzUCe3JJvI2cVl19FJWm14ePHr%2B6kUQ3RKDWC5ZcYrEAAJx09VQn4zFbXlCy%2BlHqC%2Fl%2Bk49hJ9XkmdsjnCUeYywbPir4mnSRVGbmHDAUfWWQBY2GatxQml2VlW4yE7H6m&X-Amz-Signature=fa34811177adae7666b35ea828368434050028c6da82f8685414a49b3ad7e6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM7OSWCX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0oIuc6IsqAyUZE%2FNPLUwddHR2dArrTMHLR1UYEtbF4QIhAMO8msbUMRq1apEhcItjc7V2Fljv6DF4OE9Z63rGm5BpKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJg2Jzda%2B6aEbXE9Iq3APaf5%2FAMOAyydXITqgT%2F2SMNqo4IGudWRCIMb%2B0SnC6IGXD8HC8f36Lz9e9LfYxYfqk%2Bv3Uaj6JEQyUBfYZIbprPJS6gQ38Bt7lBVyEZ14K56ZpnYB9%2FBjK3%2FpZmIs0vsE7ktWjJ3Sw7cSCUnTF8qNCltuG4fgT5Aktug0pszFIjc1piRwry9fYAlXgr1ZDoPItzM0yziZOKrYz9XYIQnlmEIM3%2Fdq8%2B6oJ%2FJdUfCQw1m3bVnuNI3carQDiu9rhjTzxskNSK4Dhox181P6%2B8rc8aWsPZBJmR9FnDH3AXXG%2BwefJm9BSDSyQ%2BwvNHY8eN9aN2mq6foNXHEwU5m6zhqiWaDvlzMOswHyPpG%2Bi2%2F0ujGAll%2BVhL1%2BEUsGpCNBNGVUQNwkG9z9lVIDhhBd3OOGark5uxqKVQxGZravCvGwSeRixDQMmKFRa%2Fic%2BoWszUcZs3mNmgdYGdd5vL5KQsmO9hzfRMjDeiz4mb9EWOzOc%2FAVIkqMN%2FGhIdmP2bfz1W%2FFmFUNrb9rVd%2FszgvSOmeY5Vci2QWPxflu5cb4HWoFRkFdIVrFvFOswY8kgEAFfRPQW%2FZ6eht7%2FI%2BkLsMmXFP2DGg%2BrlcalAVLbiSZaLZ%2FZEeiD58T6XrUdCNhbKzCd%2FcjDBjqkAe5VbD7aO5X4nY38xVb0b9AqJZk%2BYg%2F3id9A7jThK3KMsFtTYDcGrfrBeW4cCDYgTfW69XQfEem0%2FyZYvlFSPD7keETxzUCe3JJvI2cVl19FJWm14ePHr%2B6kUQ3RKDWC5ZcYrEAAJx09VQn4zFbXlCy%2BlHqC%2Fl%2Bk49hJ9XkmdsjnCUeYywbPir4mnSRVGbmHDAUfWWQBY2GatxQml2VlW4yE7H6m&X-Amz-Signature=34402aefe5c41ef4a7e67ddd54e81eefe8623b9d1ad9cad48a32578f8c70f29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
