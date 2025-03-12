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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNZMDZO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCxTEorzYVvELfImGllqerjUB2PZ%2FLvd0pLAh4IwW3f5QIhAJt2rGlD7UoqO31cTbdDsNL5WfYK2%2FN%2BQcl4YBRadzt6KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVMrGgvGMbEcNCE0Qq3AOLDLHvrY0XDU8Lco5saVMq17BCzhdmePXUWtDt%2BWRYz%2FG0yK26DviAF30sgBLRy%2BhJ1L%2BB5jLsxbwYBrOGK6DCB1DHqSZVcEQAmtLj%2FdQGRQDGeG8zPDZY3kA0BHa7sTw7avzxnel3rAjm%2BZ0ZbWgrGRY6ozC%2BQUmL8QjOCUK7jA8BTu1KJ9htqBu6avmcICyv9zz76NQNhjtXwfvGZSEHAx5%2BNiVumQCcxQ%2BvXomkeWdLT%2BD%2B8LtVgIPuCOPkReSGyInZfl6DnnYNd3rvqKluHuZXcVFeBLQcJR7lJZVRdFeALz6P1BjEb61ro4rp4J191kID04AUJtQOID1ut6pdgbhuohKC8DFp9BS1AwmDaSswL5jLNrhRCtBLvC%2Br0KKUmPAlSJ6OU7Pu77aKproMXYq8%2F9UWknf%2BZ4Sn3Io91Pl1Z%2BeGlRu53GldkNVPwqytlAOSn9YpREHUdbFef37ht%2FvUC9ZQATNr6c1w8MHgTju9FO1bP8ZwbkPwr3%2B1VYU5vKufq6Yf1ar5lQBPaAaTb%2BFkMV6j%2FIJQ1YJbx6h3jBqk5K5tg4Qqe%2FNIlQ2GOJkSAWw3qUvgpoCdjC4GutkP5tlqV7A%2B1aSBkVeA3lfger4wNbCYjiWzykUyjDDL5Me%2BBjqkARzcDtjdTV7Q2XAfo7xFBlhLgwb%2BVnq9gBOuFIDdJYLddvPrZX1MuZFEqznZiAy6tFCJk4YHVvTvfYdSryNIl62X8GeG3%2FHT8nicmEADcaJb%2FDYJ7mvhf80YLCts01WVvQFON8j8IlfV5AiI7trmekH7mVjeI8sQ7drmldsnSx%2B6RTBD0FbQ8Bu7QrLFx5x81KXAgpuOePt4VW6Ea4P2g8R97tx6&X-Amz-Signature=e8f8af645492b419a73e99901757150e63c91ce0273a1b163ba7205d845e81b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNZMDZO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCxTEorzYVvELfImGllqerjUB2PZ%2FLvd0pLAh4IwW3f5QIhAJt2rGlD7UoqO31cTbdDsNL5WfYK2%2FN%2BQcl4YBRadzt6KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVMrGgvGMbEcNCE0Qq3AOLDLHvrY0XDU8Lco5saVMq17BCzhdmePXUWtDt%2BWRYz%2FG0yK26DviAF30sgBLRy%2BhJ1L%2BB5jLsxbwYBrOGK6DCB1DHqSZVcEQAmtLj%2FdQGRQDGeG8zPDZY3kA0BHa7sTw7avzxnel3rAjm%2BZ0ZbWgrGRY6ozC%2BQUmL8QjOCUK7jA8BTu1KJ9htqBu6avmcICyv9zz76NQNhjtXwfvGZSEHAx5%2BNiVumQCcxQ%2BvXomkeWdLT%2BD%2B8LtVgIPuCOPkReSGyInZfl6DnnYNd3rvqKluHuZXcVFeBLQcJR7lJZVRdFeALz6P1BjEb61ro4rp4J191kID04AUJtQOID1ut6pdgbhuohKC8DFp9BS1AwmDaSswL5jLNrhRCtBLvC%2Br0KKUmPAlSJ6OU7Pu77aKproMXYq8%2F9UWknf%2BZ4Sn3Io91Pl1Z%2BeGlRu53GldkNVPwqytlAOSn9YpREHUdbFef37ht%2FvUC9ZQATNr6c1w8MHgTju9FO1bP8ZwbkPwr3%2B1VYU5vKufq6Yf1ar5lQBPaAaTb%2BFkMV6j%2FIJQ1YJbx6h3jBqk5K5tg4Qqe%2FNIlQ2GOJkSAWw3qUvgpoCdjC4GutkP5tlqV7A%2B1aSBkVeA3lfger4wNbCYjiWzykUyjDDL5Me%2BBjqkARzcDtjdTV7Q2XAfo7xFBlhLgwb%2BVnq9gBOuFIDdJYLddvPrZX1MuZFEqznZiAy6tFCJk4YHVvTvfYdSryNIl62X8GeG3%2FHT8nicmEADcaJb%2FDYJ7mvhf80YLCts01WVvQFON8j8IlfV5AiI7trmekH7mVjeI8sQ7drmldsnSx%2B6RTBD0FbQ8Bu7QrLFx5x81KXAgpuOePt4VW6Ea4P2g8R97tx6&X-Amz-Signature=478a2752405feab16688e2c18588efc21c798392279789fb0849ecbf8c2e5283&X-Amz-SignedHeaders=host&x-id=GetObject)

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
