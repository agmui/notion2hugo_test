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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3OTODGZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4poxx%2Bk%2BNkNHkl9Al%2FZewlKDENmWpRkU589jsbJL2IAiAhyOuyff2ZJjqrw%2FR8Rmb%2B5xut9so2wRJHrUy%2FfS7eYiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeJt42UyAW%2B8y%2BMsKtwDkp%2FxSc7smE%2FZ2gEaaYygbkAdQ2lYgNDPCCbWWLO%2FCuwwzX4n8l2FFoz25YxiY3EuRJJoT8jrmX8mmtYMITtyk0J2dbRZDuGqEHuvaoQxrqszlQend2vuwruGO4PyJPDdU%2Fb5LGeR9coetwhmcZdD1doGJJ45FqzXrT0A3hjemhcF%2FB6k44Rj%2FxuoPTGrphH4zRpj8Jn6k70odupjFEYK%2Fzm6Do1F1UloOjJhnq3nyhT0nnWKDhqfxXU3rZk4%2BCDqZTGCdnjkB%2FUC1zwZzjyoB8NuI%2Fzbeqxz4SRezpNVn6xDNHX2aJ460Y4Yn2qQU%2FZ9atOhQFz35PPBiqQQZn90GqjIazeje8Lk3H8N3JrBPi2EROLF7giVUOSzBAtsFaqpnLcBpyt1Ywg%2BsIMi%2BcPurfF8FSyJ60GAuFe%2ByPKfTa30ourGBm6QzyYbW2%2FgiqNoWSa0IT2WlSPh0W2bcXMc%2FDQJBPQb2X6QVXYnWAD8jTIKkBNeh%2BS%2FkbXTPb2HWX13QtZKwwiqW91CyOfgqRElNvQyeVnXyXkKVrF73wciwZAe%2Ff1H2Ehmsbdu6CBGu1%2B9iW%2FYvsHQGaLOoXlr7o2q09E2SwKO9rvRVBO8dyL8Qpk3acMktVQH668ILD0w3ci3wwY6pgFJnk2jOzWdqK1PQ2Yaeb3o5220MAkrT%2BwatyOxgYW%2FeM7BVOndOh17izJhTrJxW0zBV%2FgOhycq9gKs8MSjkTFAYpIq2g91UnoIcLo7lD7V738yAwI3vOxKE5JepdLMDMvBc%2FpPC9m%2FUrJnmREibs8qV%2F%2F8XKSIHptdhcyBNHKmv4QOdky5T1wEo5kBajUN0qTAcNk4rv7du1FG0tpX14yhF9PNnwaU&X-Amz-Signature=5eb276edb410c76586f511842c5ec78dfee9cf217e48d7c5092af8f54be75657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3OTODGZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4poxx%2Bk%2BNkNHkl9Al%2FZewlKDENmWpRkU589jsbJL2IAiAhyOuyff2ZJjqrw%2FR8Rmb%2B5xut9so2wRJHrUy%2FfS7eYiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeJt42UyAW%2B8y%2BMsKtwDkp%2FxSc7smE%2FZ2gEaaYygbkAdQ2lYgNDPCCbWWLO%2FCuwwzX4n8l2FFoz25YxiY3EuRJJoT8jrmX8mmtYMITtyk0J2dbRZDuGqEHuvaoQxrqszlQend2vuwruGO4PyJPDdU%2Fb5LGeR9coetwhmcZdD1doGJJ45FqzXrT0A3hjemhcF%2FB6k44Rj%2FxuoPTGrphH4zRpj8Jn6k70odupjFEYK%2Fzm6Do1F1UloOjJhnq3nyhT0nnWKDhqfxXU3rZk4%2BCDqZTGCdnjkB%2FUC1zwZzjyoB8NuI%2Fzbeqxz4SRezpNVn6xDNHX2aJ460Y4Yn2qQU%2FZ9atOhQFz35PPBiqQQZn90GqjIazeje8Lk3H8N3JrBPi2EROLF7giVUOSzBAtsFaqpnLcBpyt1Ywg%2BsIMi%2BcPurfF8FSyJ60GAuFe%2ByPKfTa30ourGBm6QzyYbW2%2FgiqNoWSa0IT2WlSPh0W2bcXMc%2FDQJBPQb2X6QVXYnWAD8jTIKkBNeh%2BS%2FkbXTPb2HWX13QtZKwwiqW91CyOfgqRElNvQyeVnXyXkKVrF73wciwZAe%2Ff1H2Ehmsbdu6CBGu1%2B9iW%2FYvsHQGaLOoXlr7o2q09E2SwKO9rvRVBO8dyL8Qpk3acMktVQH668ILD0w3ci3wwY6pgFJnk2jOzWdqK1PQ2Yaeb3o5220MAkrT%2BwatyOxgYW%2FeM7BVOndOh17izJhTrJxW0zBV%2FgOhycq9gKs8MSjkTFAYpIq2g91UnoIcLo7lD7V738yAwI3vOxKE5JepdLMDMvBc%2FpPC9m%2FUrJnmREibs8qV%2F%2F8XKSIHptdhcyBNHKmv4QOdky5T1wEo5kBajUN0qTAcNk4rv7du1FG0tpX14yhF9PNnwaU&X-Amz-Signature=6f0cfe9b9ac989c3680a393979e1a84eee8683ba925f23b8b8774ac27089dd81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
