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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UABOPT3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCzdVKDvAlGd6DU1Z5KThb5IQn7a%2B4rKoWXGumQgu1%2BZwIhALnMNqbMl96Ak8Xgvj6jBEEMk9zLdC%2FMmj59uZUk94VWKv8DCFUQABoMNjM3NDIzMTgzODA1IgzVBETILtu4P2pPU3kq3APItK2t%2BjegWB2wRjjE23aeeJOJM1HeM9RZ%2FyMeOhaj%2BN5%2FgBNkyAx7O%2BmUa0vgqMWKqlu%2FffEh4qQox3%2Bwe8U62QMh5TzzRlCgm%2FbizY1mk5Cac02vB4%2BaP3IoJr8rzcyKlKXEfHi4bUQtDbhCme0bmqSP%2FNV2G9hkSaKkz5TLUOJgp8BS9fGYa%2Bhi7naAI13QjRK7AhoFSXiyMgKXHBxPnR%2Byvu2a%2BW6gquX0QgvT%2BQY9fN0LQx4WsU42UOb36hqkYu6ESFinOIO2NhSyiJrpIVtk7BgUOn40dlTkNvq2H4e8kM9zAnXEsCQ7RYkATWfADvYs9R%2FkGcN5bJv9zqHBBlPFsEJ1uHsZoj4YFlLHwUVF7JtVoaEar9E34r4TvsZFOeuO9rkR3z6fWkYrRGk6k1E7ojbtLYVQ4uimvuRRJ%2FirLDjrrNUbPIE54nJbRtdzNcaK9fmPH9xOO7TTbcRjo7xB3DtDIyGL3c1Ux7nagh0WkEZQpKKf7%2Bfv%2B5O%2FxzmWnpOKMdfrNJcNLmgVjzBYP0Xw8LllEZQhu71vshny%2BSzq89PLZ3jkj%2F%2FPhSz9qijpXAdZ4C99VvXeK0ApENt8nIbDj5Zk8tF%2BA4ovdm60juXjHncrtdMleD8iXzCyw8W9BjqkAb2h5RFFaGYBkAys53Zj%2BIlNS02JyFoBnlnrm9rUG5y98JtHzwbz3FVxMqTfUNNFGsY4y8nHUIsDOSrTyH0ZZNPFw8haRFpdt2b1KU5eQe1e%2FRPN7GR4MhFO58q8YsZj8iHmIyHjmFVSpnp3gJrcLK8t2Qt%2BpfXO0HdAH8tGWz%2B1o8VSKfFvU9GVHoa3fMZeAsvTPMf%2B3leAXiTsLXYL82PlXPLb&X-Amz-Signature=55821c4b7a872adfed8c4a6c3693b420b7cd2193f098fb03501761a4a5f4d21f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UABOPT3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCzdVKDvAlGd6DU1Z5KThb5IQn7a%2B4rKoWXGumQgu1%2BZwIhALnMNqbMl96Ak8Xgvj6jBEEMk9zLdC%2FMmj59uZUk94VWKv8DCFUQABoMNjM3NDIzMTgzODA1IgzVBETILtu4P2pPU3kq3APItK2t%2BjegWB2wRjjE23aeeJOJM1HeM9RZ%2FyMeOhaj%2BN5%2FgBNkyAx7O%2BmUa0vgqMWKqlu%2FffEh4qQox3%2Bwe8U62QMh5TzzRlCgm%2FbizY1mk5Cac02vB4%2BaP3IoJr8rzcyKlKXEfHi4bUQtDbhCme0bmqSP%2FNV2G9hkSaKkz5TLUOJgp8BS9fGYa%2Bhi7naAI13QjRK7AhoFSXiyMgKXHBxPnR%2Byvu2a%2BW6gquX0QgvT%2BQY9fN0LQx4WsU42UOb36hqkYu6ESFinOIO2NhSyiJrpIVtk7BgUOn40dlTkNvq2H4e8kM9zAnXEsCQ7RYkATWfADvYs9R%2FkGcN5bJv9zqHBBlPFsEJ1uHsZoj4YFlLHwUVF7JtVoaEar9E34r4TvsZFOeuO9rkR3z6fWkYrRGk6k1E7ojbtLYVQ4uimvuRRJ%2FirLDjrrNUbPIE54nJbRtdzNcaK9fmPH9xOO7TTbcRjo7xB3DtDIyGL3c1Ux7nagh0WkEZQpKKf7%2Bfv%2B5O%2FxzmWnpOKMdfrNJcNLmgVjzBYP0Xw8LllEZQhu71vshny%2BSzq89PLZ3jkj%2F%2FPhSz9qijpXAdZ4C99VvXeK0ApENt8nIbDj5Zk8tF%2BA4ovdm60juXjHncrtdMleD8iXzCyw8W9BjqkAb2h5RFFaGYBkAys53Zj%2BIlNS02JyFoBnlnrm9rUG5y98JtHzwbz3FVxMqTfUNNFGsY4y8nHUIsDOSrTyH0ZZNPFw8haRFpdt2b1KU5eQe1e%2FRPN7GR4MhFO58q8YsZj8iHmIyHjmFVSpnp3gJrcLK8t2Qt%2BpfXO0HdAH8tGWz%2B1o8VSKfFvU9GVHoa3fMZeAsvTPMf%2B3leAXiTsLXYL82PlXPLb&X-Amz-Signature=f4439d2b52ac8529fde9e204219b7ed7130927683a1964b1f19fe84d9ddf49e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
