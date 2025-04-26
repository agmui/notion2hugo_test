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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5A5MH3R%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBgjs1KViXcFi1eVH%2FMOCx%2F2dIJ0zohYR5QW%2Bpr6g4GAiEA6nVKf5ZV5%2FFbYulGYjkfgpFhBZ3Z8sIrSs%2Bpkj6KtYUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPmcK8Grsqbj9pMYZircAwnp5w6X8rstEInI5QEOphu5fBZ3JXhJ9KjAptxhFtlJouCjpD2q1rJoKOuGj0vl0qpAUNAEmB8pEEkwaGDbvAIwaYn7pFCAqKsbWzCEMj%2BXtxmBhGa4QGG05QEUhmR2iCNg8k1IfuxMsolAXfSaNCTSFLkXUS2gsOnGUceNJ4NBjoL9ASPQ4Neiyg0aTjQe5b80iMdNQjf5GIDaXTCwsck0h%2FdI2cX0dP4sRv6L9u3EMmH0YGerUWbtNHy6SEi0RWkHqkRO2yJmS1dKUcflWnNznOYeptgdAQiutKWjyXoPEYfOeDR3yXO1I3UpLI6%2F4C%2F4bVeSGZgG49Xm6YPvQogb%2FQE96k7wgFGLhMRhGs30wjjcMUN2gf1S7%2FE0PdZvU%2BjwU7BBJSzXou34opnuPG8dgGhHrm8plE1IDYxSXZgz1i6eMFLjACDMKjV2MpDb3HjSuK8dqoYEx0Cb0HsM2GP5BymWT0g9Qo0u6pFfOu2n5XTaHzDBdvzgt2fKPHp1h%2FP%2FBt2VZCT1BaY2jIT9NPmmfAbz8i0iYFKGnUQP%2FCIoYMazPCNi9HUQqfVfoxRu%2Fuud7ikKSJWVLbhfhzkLJbXm7NbyKEkAjHavKi8ZHdjtsUsqJZjpZ3KX5KJOMJvdtMAGOqUBCkwCIFAkmR3MVduNTCtKnhCViXJBw3VnR4ZLOWOqk3vQio3w8l%2FWZEJNsL6J1tUEmiL6xQpSEhU67bk8V3gwprOaSAusA%2FiD8%2BVatGtQN0pR44kwhlY16mNiN9GiExp56r3A2lLuVjAXrw4vuY%2BM91NTipOkVgCagwb%2BFHWRfvMwKx55N2ln4o48bgCV3h%2FVsSpErsNAfpyp1C4LFpNfT2MbBHsS&X-Amz-Signature=fef8548ceff3e4f263b190e82d3cfb836049cdd14187d87dd649c6df1ca948f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5A5MH3R%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBgjs1KViXcFi1eVH%2FMOCx%2F2dIJ0zohYR5QW%2Bpr6g4GAiEA6nVKf5ZV5%2FFbYulGYjkfgpFhBZ3Z8sIrSs%2Bpkj6KtYUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPmcK8Grsqbj9pMYZircAwnp5w6X8rstEInI5QEOphu5fBZ3JXhJ9KjAptxhFtlJouCjpD2q1rJoKOuGj0vl0qpAUNAEmB8pEEkwaGDbvAIwaYn7pFCAqKsbWzCEMj%2BXtxmBhGa4QGG05QEUhmR2iCNg8k1IfuxMsolAXfSaNCTSFLkXUS2gsOnGUceNJ4NBjoL9ASPQ4Neiyg0aTjQe5b80iMdNQjf5GIDaXTCwsck0h%2FdI2cX0dP4sRv6L9u3EMmH0YGerUWbtNHy6SEi0RWkHqkRO2yJmS1dKUcflWnNznOYeptgdAQiutKWjyXoPEYfOeDR3yXO1I3UpLI6%2F4C%2F4bVeSGZgG49Xm6YPvQogb%2FQE96k7wgFGLhMRhGs30wjjcMUN2gf1S7%2FE0PdZvU%2BjwU7BBJSzXou34opnuPG8dgGhHrm8plE1IDYxSXZgz1i6eMFLjACDMKjV2MpDb3HjSuK8dqoYEx0Cb0HsM2GP5BymWT0g9Qo0u6pFfOu2n5XTaHzDBdvzgt2fKPHp1h%2FP%2FBt2VZCT1BaY2jIT9NPmmfAbz8i0iYFKGnUQP%2FCIoYMazPCNi9HUQqfVfoxRu%2Fuud7ikKSJWVLbhfhzkLJbXm7NbyKEkAjHavKi8ZHdjtsUsqJZjpZ3KX5KJOMJvdtMAGOqUBCkwCIFAkmR3MVduNTCtKnhCViXJBw3VnR4ZLOWOqk3vQio3w8l%2FWZEJNsL6J1tUEmiL6xQpSEhU67bk8V3gwprOaSAusA%2FiD8%2BVatGtQN0pR44kwhlY16mNiN9GiExp56r3A2lLuVjAXrw4vuY%2BM91NTipOkVgCagwb%2BFHWRfvMwKx55N2ln4o48bgCV3h%2FVsSpErsNAfpyp1C4LFpNfT2MbBHsS&X-Amz-Signature=55160300262792a576574d8cd15028debb869c7dc768a5619c9e0313f84d4bf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
