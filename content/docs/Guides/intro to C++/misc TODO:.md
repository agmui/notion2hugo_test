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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG7P7VQ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPhuclkDzOXFjVQpzFqEgKgQK5zVL%2Bw25hzr71bEsMAIhALcSg2lDWlxkt3YNBLaBg8wZGDp7RlL7gmOrofGejYcIKv8DCBcQABoMNjM3NDIzMTgzODA1Igy143ocdlzHoP%2F%2FYNsq3ANoUmtkmh4oqIH4ddkq1ZfYIpA4OVQqnxI95LXvfTh1pacLDtSu1Uu0LnVW%2FvXM4eRKtaX%2B6UHNc%2F2KsO68lwmP4MGg%2B4%2F%2Bs1X8ky7qQVEPC8zuWu2mnptyfRwQL8JGTs1c%2BbwlS1bOwMveEJsWqjeVT9wHKvoLb1bKUqUdki9hScOHNdQiWGO8XsqBy7L5V%2B8lwVFyNkDUnT%2B9WeA8X6oEMaKnqT%2BItq%2BPed53yTypT%2FlVJ9Bd5ZOn2HrbISRl7GmUvL8Euvp6cDcV83yeKS%2BiJ3aOswKGyv%2FRKjby43bp1rPABN0BmOWDCTRXIDfMh2GXKAgT0sy%2FagqtZ5134d34zKIarvu0yrrQyP16vV%2FdLHE%2Be0S5KStNNCnDxD8HH6gGjZQazvww4D%2BNkcHYPTkQE4FW%2BrBlnLEVC%2FxMu5CUCrG48z5jIHcMtokpJiPLZdeFTYoptdJCRUzvu5pRGfe5S%2B93Etld4y1oUL14XN8Ovn%2FvT24iw%2FmmGrw3gXIYKCu90MzKf4C%2FI1BGjpbcTvRuxpHkerR1%2BPLqSEkpj7IMP2XTIedIkIyK6ZEgAD8M4e%2F2j6ixK7IYgBlZItVTE7hcbhkhhqq0IFBBwGH3r8gmqb5fxLeyVIPWGniP3zCXqPS%2FBjqkATWMH%2BCBymmxvIdHPlua9NrgetgD0hhTVKxir6HmoyWmsBQ2WqimqiP1fcnCbhDWnLbPOSkpmx4I43jczVmgl5a4HkuIM%2F3gaX%2Byft3uCYU6JVTzIC324QA0dRCetsMUl%2FsQ4DWrAGxgJsHKKiPmYjkriaFq4mz9gNovbxD%2Bh%2F8017mtM%2F6cVJ%2B0vdGvBCGdCasTYow1QtBjV0jDybwlo%2B32ulce&X-Amz-Signature=0ff0314240bce1853f3a553562c23ba21cfc6135245b43bf3437b507c284dd86&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQG7P7VQ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPhuclkDzOXFjVQpzFqEgKgQK5zVL%2Bw25hzr71bEsMAIhALcSg2lDWlxkt3YNBLaBg8wZGDp7RlL7gmOrofGejYcIKv8DCBcQABoMNjM3NDIzMTgzODA1Igy143ocdlzHoP%2F%2FYNsq3ANoUmtkmh4oqIH4ddkq1ZfYIpA4OVQqnxI95LXvfTh1pacLDtSu1Uu0LnVW%2FvXM4eRKtaX%2B6UHNc%2F2KsO68lwmP4MGg%2B4%2F%2Bs1X8ky7qQVEPC8zuWu2mnptyfRwQL8JGTs1c%2BbwlS1bOwMveEJsWqjeVT9wHKvoLb1bKUqUdki9hScOHNdQiWGO8XsqBy7L5V%2B8lwVFyNkDUnT%2B9WeA8X6oEMaKnqT%2BItq%2BPed53yTypT%2FlVJ9Bd5ZOn2HrbISRl7GmUvL8Euvp6cDcV83yeKS%2BiJ3aOswKGyv%2FRKjby43bp1rPABN0BmOWDCTRXIDfMh2GXKAgT0sy%2FagqtZ5134d34zKIarvu0yrrQyP16vV%2FdLHE%2Be0S5KStNNCnDxD8HH6gGjZQazvww4D%2BNkcHYPTkQE4FW%2BrBlnLEVC%2FxMu5CUCrG48z5jIHcMtokpJiPLZdeFTYoptdJCRUzvu5pRGfe5S%2B93Etld4y1oUL14XN8Ovn%2FvT24iw%2FmmGrw3gXIYKCu90MzKf4C%2FI1BGjpbcTvRuxpHkerR1%2BPLqSEkpj7IMP2XTIedIkIyK6ZEgAD8M4e%2F2j6ixK7IYgBlZItVTE7hcbhkhhqq0IFBBwGH3r8gmqb5fxLeyVIPWGniP3zCXqPS%2FBjqkATWMH%2BCBymmxvIdHPlua9NrgetgD0hhTVKxir6HmoyWmsBQ2WqimqiP1fcnCbhDWnLbPOSkpmx4I43jczVmgl5a4HkuIM%2F3gaX%2Byft3uCYU6JVTzIC324QA0dRCetsMUl%2FsQ4DWrAGxgJsHKKiPmYjkriaFq4mz9gNovbxD%2Bh%2F8017mtM%2F6cVJ%2B0vdGvBCGdCasTYow1QtBjV0jDybwlo%2B32ulce&X-Amz-Signature=38eb7c61dffe5ecd0de4890f557089648095ddb497f26f7bb4e74abb1f62be1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
