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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GVPLND%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8WEAHBZIP1V8PW11%2F9RWNzxnGlMycj60YAGlVlvnRgIgRGK7T6eZe8VzgdgmkWwMAFapz%2FXED9C7KJP5%2BnYvcasq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLMZxy5ApuSkQkqmHCrcA0c3C0Ex7GmvMLH0gQvyRGCpxA0t7HNKWIVsMhrcg7w7O1snvUC39Va9u1bNijD%2BOxErhAPcVNhY87bvORdwL6Lj2%2F3J1llx%2FEwWEx0j%2BL8wOm9iiIPXIJv80e36JMQuXhMkm%2B2oHbVxsw5LZFH1X9uE506FAG6wt9sOEX41VYyLlmTKnM75CrNhWaGiodmoOIFEau1Fl5wPU5NRFM8oS%2FB%2Buk%2FF%2BGerJ0RK%2FbgZ3JfAAp51QDusguYSZbXgncp4VMMSBJ9IVkaGURS5Tk8qkDcZd%2BBGwcL%2Flyy8poV2WBCrmx0KoOMDJoJwU6QiFlReIY%2FOluEoqEwOK%2Fzmd9pBcBl8AcISQPVQKGYmlGqAYT495k8%2BOxY5GnIZPw5HlOMEmq7KS%2BPkdi6CD%2BuEmqMew5RjWC8NezHsuZtcwNt6Ow7VBaQbi9aes2VCgfaUOChhhZiwY%2BwWVY6dt5nONp4%2BBAIfUjcfUQMige%2FF6L7tIcgb3JCiH2sXGnYj1PJfDYDY1W6NEGr9fCV%2F3JdSForRzNF6Qs0zVvwZTb6zpBryey8xrlSHCKQa9RtPU90xF27RuTrumCCOCpXyf5FqWNZRV%2BHx%2BRCkKZoRWRXQm2c%2BiMGqEnZFjXAV0LllOMiZMOaH5L4GOqUB37BW4bZ8SGkg0LvtyhH2p3a3ehMOd0NxnD4UBrUdsrXVXZPpsRN57xDLOWSw%2F6wIaXsLnumoSPDzcOniDpogyheDxxbSANelvIYhUt6CD%2Bh7zgo5J2KKqEWF4h7cA6Z9I0hxPvmxWUsU6bfPGO9d7qcI1JFExbK%2FvdGTe8Ux%2FzyRaANISYgA5cyL78Xpto33Z3SjMGc85pwb%2BVd8XUta2ILzlrjK&X-Amz-Signature=1bb1a91fb1589eb168843f89a0c263db2121e384c25a65f0e50b0f30a563e5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GVPLND%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF8WEAHBZIP1V8PW11%2F9RWNzxnGlMycj60YAGlVlvnRgIgRGK7T6eZe8VzgdgmkWwMAFapz%2FXED9C7KJP5%2BnYvcasq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLMZxy5ApuSkQkqmHCrcA0c3C0Ex7GmvMLH0gQvyRGCpxA0t7HNKWIVsMhrcg7w7O1snvUC39Va9u1bNijD%2BOxErhAPcVNhY87bvORdwL6Lj2%2F3J1llx%2FEwWEx0j%2BL8wOm9iiIPXIJv80e36JMQuXhMkm%2B2oHbVxsw5LZFH1X9uE506FAG6wt9sOEX41VYyLlmTKnM75CrNhWaGiodmoOIFEau1Fl5wPU5NRFM8oS%2FB%2Buk%2FF%2BGerJ0RK%2FbgZ3JfAAp51QDusguYSZbXgncp4VMMSBJ9IVkaGURS5Tk8qkDcZd%2BBGwcL%2Flyy8poV2WBCrmx0KoOMDJoJwU6QiFlReIY%2FOluEoqEwOK%2Fzmd9pBcBl8AcISQPVQKGYmlGqAYT495k8%2BOxY5GnIZPw5HlOMEmq7KS%2BPkdi6CD%2BuEmqMew5RjWC8NezHsuZtcwNt6Ow7VBaQbi9aes2VCgfaUOChhhZiwY%2BwWVY6dt5nONp4%2BBAIfUjcfUQMige%2FF6L7tIcgb3JCiH2sXGnYj1PJfDYDY1W6NEGr9fCV%2F3JdSForRzNF6Qs0zVvwZTb6zpBryey8xrlSHCKQa9RtPU90xF27RuTrumCCOCpXyf5FqWNZRV%2BHx%2BRCkKZoRWRXQm2c%2BiMGqEnZFjXAV0LllOMiZMOaH5L4GOqUB37BW4bZ8SGkg0LvtyhH2p3a3ehMOd0NxnD4UBrUdsrXVXZPpsRN57xDLOWSw%2F6wIaXsLnumoSPDzcOniDpogyheDxxbSANelvIYhUt6CD%2Bh7zgo5J2KKqEWF4h7cA6Z9I0hxPvmxWUsU6bfPGO9d7qcI1JFExbK%2FvdGTe8Ux%2FzyRaANISYgA5cyL78Xpto33Z3SjMGc85pwb%2BVd8XUta2ILzlrjK&X-Amz-Signature=a45bd3777df4125ba52f101db410141892de7fc93213dee244901dd1a4794926&X-Amz-SignedHeaders=host&x-id=GetObject)

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
