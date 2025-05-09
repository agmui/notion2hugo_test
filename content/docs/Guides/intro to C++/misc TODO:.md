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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HF62HG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqqIdDTfheKC1uJaI3vYmc7QMQN4ZsQa92bj5cNBpieQIhAOwRVFw5q9liy3peAP%2B%2B8SaINfBPTcHaqvXln%2FOV8Ay6KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKm05BsOUk4tk1MIcq3AN0inup13RcU%2FGxitBRur4cRvft5I%2FKHPl2pUvNAFjb4kiPw%2Ft%2BAkbFZVFtLvX6U%2Bef13SkizAHS4UBnhjcFOGZuNNgKTmVNhiwmos7O02ERsfdo%2ByeO%2FuZJrvpsaD6bVbOA2MBJC3XXHOlKXck9wrg8ZHeo%2BDSuFv3FufO5JRtVCUbKpgjfB0H67pThtEMTS5pDao9gJXAAeo%2BR66y%2FW6Rz3Q1hao%2FBTpKtg8GXXmAwENAbg5DyS4aGHSx84nrjwX9Hmn1xgGmLJqxqDiuRzg14u7ghTPYjiPuoIXJsojahh%2FvNf1r3HA3j61Mt4vURaN17KEiJYcbE1PHe3QScXh6b7jR6grag9VP7MWapidIs8E4cq07xq5RJWDzlCCy%2FVBUCF6pNznf6dejRmtJVQAN1Qc9ri2ZZ8Rs3WOyJ9twYr71VPDhBPdTn4qC1WFAmJKaH2EzqF%2FfS%2FCc5cuagucSBINTyy%2BzCeghOxLXvuqikW0FWar7m%2FjcrKucfN%2Bhf7dkzkprbiTn56RL1zVNFmWG8QotgcIk6VLSJmNdE4c1DNGV6NtGvZRC5H91stQ1nzrooBh5UW7B%2Fly8t6UVgGz2atXiWxS81eIuRugZqFO71mwQF%2FAu0MLy6xvdQTCux%2FbABjqkARyiWOffReAbioQTjQN72dA2A4i%2B69dxBMwLJC%2F0eLds2WrGzUIqWs7NjUaUInn%2BJsdl%2B1V2EWszMGFGJ612pSE0GL8WPgIpxp9vcXNj3zUUg%2BSkqbWcPclmhoUNA8bruUynSkYlFMqc9PCOtHCIz5WWGUgcn7eVC1oG26thmHWuuZDVjcjz52SRBjXUoKjq6YqMl95ViKOG37oeNcVFGzce2ygA&X-Amz-Signature=e5ba49af6068274b3ba1c3a07f6fb6a003a4b3e97c7bfbd0864225eb0552dd8d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HF62HG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqqIdDTfheKC1uJaI3vYmc7QMQN4ZsQa92bj5cNBpieQIhAOwRVFw5q9liy3peAP%2B%2B8SaINfBPTcHaqvXln%2FOV8Ay6KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKm05BsOUk4tk1MIcq3AN0inup13RcU%2FGxitBRur4cRvft5I%2FKHPl2pUvNAFjb4kiPw%2Ft%2BAkbFZVFtLvX6U%2Bef13SkizAHS4UBnhjcFOGZuNNgKTmVNhiwmos7O02ERsfdo%2ByeO%2FuZJrvpsaD6bVbOA2MBJC3XXHOlKXck9wrg8ZHeo%2BDSuFv3FufO5JRtVCUbKpgjfB0H67pThtEMTS5pDao9gJXAAeo%2BR66y%2FW6Rz3Q1hao%2FBTpKtg8GXXmAwENAbg5DyS4aGHSx84nrjwX9Hmn1xgGmLJqxqDiuRzg14u7ghTPYjiPuoIXJsojahh%2FvNf1r3HA3j61Mt4vURaN17KEiJYcbE1PHe3QScXh6b7jR6grag9VP7MWapidIs8E4cq07xq5RJWDzlCCy%2FVBUCF6pNznf6dejRmtJVQAN1Qc9ri2ZZ8Rs3WOyJ9twYr71VPDhBPdTn4qC1WFAmJKaH2EzqF%2FfS%2FCc5cuagucSBINTyy%2BzCeghOxLXvuqikW0FWar7m%2FjcrKucfN%2Bhf7dkzkprbiTn56RL1zVNFmWG8QotgcIk6VLSJmNdE4c1DNGV6NtGvZRC5H91stQ1nzrooBh5UW7B%2Fly8t6UVgGz2atXiWxS81eIuRugZqFO71mwQF%2FAu0MLy6xvdQTCux%2FbABjqkARyiWOffReAbioQTjQN72dA2A4i%2B69dxBMwLJC%2F0eLds2WrGzUIqWs7NjUaUInn%2BJsdl%2B1V2EWszMGFGJ612pSE0GL8WPgIpxp9vcXNj3zUUg%2BSkqbWcPclmhoUNA8bruUynSkYlFMqc9PCOtHCIz5WWGUgcn7eVC1oG26thmHWuuZDVjcjz52SRBjXUoKjq6YqMl95ViKOG37oeNcVFGzce2ygA&X-Amz-Signature=08a1194c81f1956b7386632d660597a6e6cfe2623b53e61b809cc704eebe49ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
