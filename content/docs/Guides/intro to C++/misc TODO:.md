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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V5LNOPT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlE7vTHCgKxDi2vbBP3O4cCyqKqcu8zSD4by7b15HA3AiEAzfDvLeN1z8NLM4YjhQpudDODatPVRff5r3Iigud2m1YqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ2%2BMJdqN5UKX2L0ircA6qlF6Tmda1iWUWWntOGjZ55W3ZYN8dEucmO6kp16hARWJkQ%2F4qXhrTzWN8PN6QpPqal0I2c1AA6ZzC7KXdo96RT6LjTrLOQCfcbq3b76Opho8%2FHqkfQtNWWz%2Ffff9fAL4sPfHbGekydDpypXT%2FQGlcW%2FD0P6hNOITl10Xh3vArMjWCBMDfTratLqDEgcOIOKp%2FGUJujUp95moGN4NykO8YY8lWx8cOrv5NQ0mwePQFOhoE6pFlGHQ6cTv9EcgoLcJEAyDV2RItORNyR4KVaAIET%2FyABq3DN1iePI652krU3KrPfbAYDTLH3JsLkkr9JUxC3NGKQz1ZxK5ZgkgfnzVeDQD%2F4UFfRjxtXMAiq40IvZHL%2F4mG%2Fg78BsDXM9WF55FUbcFRZhs3iZupLRsj9X1KFVtDLmVm2adK55JfBJHVvd5%2FNN2ccBGyBEH6guZy3wKc%2FBwbm0rl11rZ2GY%2FXrvwnI9JPw9lpgyJbSGfXr1F%2ByxCxNaZDrP2jyiavWDqPTI%2BEutTrRO6GoEUWlta35KJEAFRy91zg7VLPDyFU9iKVyGA5OPufvD6nfXpwJUdjFJfEMPaIi5KKVakN1DAvtYVk66F0BptIh7HylCnCybckMV4r8p3fWATosa4OMLG3sr0GOqUBTzDi5aNNDHBJbZczBmdNy3X7j1Ix8o4hP4VEHCCrDR4ZySL7TveH0WlF6Cstcg7FIcZueazhlIImFXUsldCspRj%2FfdTnAnK%2BDA5%2By2kqjO8OwMCZAkHMcmgyscODeRnYAUJAi1NuhBhHUTHe%2F6W0BFxakHKCt1LIZ40HGUfSZtT0EakyGyESNOVvIXwYPHQcLV1AM%2F9ODE%2FzBUKlHHI5Tr88MnMx&X-Amz-Signature=de265f7a486ef6472e09bf8d6b31f903f7eef0e5041a5cfb796aa84374e2f6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V5LNOPT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlE7vTHCgKxDi2vbBP3O4cCyqKqcu8zSD4by7b15HA3AiEAzfDvLeN1z8NLM4YjhQpudDODatPVRff5r3Iigud2m1YqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ2%2BMJdqN5UKX2L0ircA6qlF6Tmda1iWUWWntOGjZ55W3ZYN8dEucmO6kp16hARWJkQ%2F4qXhrTzWN8PN6QpPqal0I2c1AA6ZzC7KXdo96RT6LjTrLOQCfcbq3b76Opho8%2FHqkfQtNWWz%2Ffff9fAL4sPfHbGekydDpypXT%2FQGlcW%2FD0P6hNOITl10Xh3vArMjWCBMDfTratLqDEgcOIOKp%2FGUJujUp95moGN4NykO8YY8lWx8cOrv5NQ0mwePQFOhoE6pFlGHQ6cTv9EcgoLcJEAyDV2RItORNyR4KVaAIET%2FyABq3DN1iePI652krU3KrPfbAYDTLH3JsLkkr9JUxC3NGKQz1ZxK5ZgkgfnzVeDQD%2F4UFfRjxtXMAiq40IvZHL%2F4mG%2Fg78BsDXM9WF55FUbcFRZhs3iZupLRsj9X1KFVtDLmVm2adK55JfBJHVvd5%2FNN2ccBGyBEH6guZy3wKc%2FBwbm0rl11rZ2GY%2FXrvwnI9JPw9lpgyJbSGfXr1F%2ByxCxNaZDrP2jyiavWDqPTI%2BEutTrRO6GoEUWlta35KJEAFRy91zg7VLPDyFU9iKVyGA5OPufvD6nfXpwJUdjFJfEMPaIi5KKVakN1DAvtYVk66F0BptIh7HylCnCybckMV4r8p3fWATosa4OMLG3sr0GOqUBTzDi5aNNDHBJbZczBmdNy3X7j1Ix8o4hP4VEHCCrDR4ZySL7TveH0WlF6Cstcg7FIcZueazhlIImFXUsldCspRj%2FfdTnAnK%2BDA5%2By2kqjO8OwMCZAkHMcmgyscODeRnYAUJAi1NuhBhHUTHe%2F6W0BFxakHKCt1LIZ40HGUfSZtT0EakyGyESNOVvIXwYPHQcLV1AM%2F9ODE%2FzBUKlHHI5Tr88MnMx&X-Amz-Signature=a7348327bd5756e47f95911d5ebbaf3bb721fef338610dd24ba9465f7361aa6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
