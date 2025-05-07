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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWAW5PI6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4OX%2BarjXGvjrq10JXb3zGnTLGGtFc%2BInsjr0k0N2%2B0AiEAkDyyssD69C6leyUx9kAY7wKekMYaTXnpANESUoAYfRcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCFqKeOp%2FSX%2FA0rNpircAyFRNkYwv0mtjodCQOIPqH25Bx4%2FZm85AJ1hFSfC%2FRcvi8LhvxpAfHYHnOIUq69lGHXR3i50fcLbUHiWLaevnq4fbLwGzgd4YJYcml1emqiKndgkw51hgWmg3p0B%2BdMuxQLrPtNjfBg5VUmFJjAb0Bu6s9uGk%2FgoGq%2BebRx2Iw3SbjQojGMU917T4ntNHaX45sOH5gn9T%2Brtx61YKNbmpKbVaUAcKddUT%2BBOoH8QGGPxxq9fSugrnRR3KUBw9NriY%2Fhv%2BYLOvXHgadUvC3LYHpIz6fmKfmfqpXMqYSqMM6n3VFCJAb5oqLrf5vajnZCRzKGu4OEp5ewqFLZGJTvdYfF6Z9fqLYcgS8CBi3CyjLNoMf7TkDj83be8BV56CZgSy0%2BgZjKeHR07rViDCuIIZ8ij%2BSS1orZIYUyFJMpQ6b9u3PlAJedNtAXLSHy%2F5N1A%2F%2Bf4M4yvCW0EH6S2EmoLRelRnbP8QSAqOtWytG15kRjjtopyaM7K9w6%2FcUW%2F9whPrZREkN0uj5%2FKiS%2Fz%2FJOdfH145lAge72xg7cDJhAJYndh8BtSvtr59ti3Eq52SqLe3PAKM7Rra14axlcGd9te3ro4Smt2PU7zf%2FIypi3NQLqn%2BVLTAY%2FQiY3qsFSBMO7G78AGOqUBtas2uIArTnZHDA0PC4k%2B97BPyBFU%2FEGwNTOntArNTCFY3ulmij3D7C5N8b2XYRTY4hM9hHjyOXpvtY2uLWhSry5EZ%2BuccDWNSDEa6Eo1b7ulxuwH68X9s1s%2BLCHWTPmh5BwdQ0t86TE2upYwyhWeH4HBALXMSqAgLaw%2Fs0jAoTSSISTNiRVAGTPwK3t%2Fw4YmzUR0UmeQdPYyIqf6tZBpT%2BY%2BF32L&X-Amz-Signature=65b8f419a1e34d18f23fb967ec91d40f36b9e0d42e705215db05b297f49fd553&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWAW5PI6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4OX%2BarjXGvjrq10JXb3zGnTLGGtFc%2BInsjr0k0N2%2B0AiEAkDyyssD69C6leyUx9kAY7wKekMYaTXnpANESUoAYfRcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCFqKeOp%2FSX%2FA0rNpircAyFRNkYwv0mtjodCQOIPqH25Bx4%2FZm85AJ1hFSfC%2FRcvi8LhvxpAfHYHnOIUq69lGHXR3i50fcLbUHiWLaevnq4fbLwGzgd4YJYcml1emqiKndgkw51hgWmg3p0B%2BdMuxQLrPtNjfBg5VUmFJjAb0Bu6s9uGk%2FgoGq%2BebRx2Iw3SbjQojGMU917T4ntNHaX45sOH5gn9T%2Brtx61YKNbmpKbVaUAcKddUT%2BBOoH8QGGPxxq9fSugrnRR3KUBw9NriY%2Fhv%2BYLOvXHgadUvC3LYHpIz6fmKfmfqpXMqYSqMM6n3VFCJAb5oqLrf5vajnZCRzKGu4OEp5ewqFLZGJTvdYfF6Z9fqLYcgS8CBi3CyjLNoMf7TkDj83be8BV56CZgSy0%2BgZjKeHR07rViDCuIIZ8ij%2BSS1orZIYUyFJMpQ6b9u3PlAJedNtAXLSHy%2F5N1A%2F%2Bf4M4yvCW0EH6S2EmoLRelRnbP8QSAqOtWytG15kRjjtopyaM7K9w6%2FcUW%2F9whPrZREkN0uj5%2FKiS%2Fz%2FJOdfH145lAge72xg7cDJhAJYndh8BtSvtr59ti3Eq52SqLe3PAKM7Rra14axlcGd9te3ro4Smt2PU7zf%2FIypi3NQLqn%2BVLTAY%2FQiY3qsFSBMO7G78AGOqUBtas2uIArTnZHDA0PC4k%2B97BPyBFU%2FEGwNTOntArNTCFY3ulmij3D7C5N8b2XYRTY4hM9hHjyOXpvtY2uLWhSry5EZ%2BuccDWNSDEa6Eo1b7ulxuwH68X9s1s%2BLCHWTPmh5BwdQ0t86TE2upYwyhWeH4HBALXMSqAgLaw%2Fs0jAoTSSISTNiRVAGTPwK3t%2Fw4YmzUR0UmeQdPYyIqf6tZBpT%2BY%2BF32L&X-Amz-Signature=71170a381afba4c6ab445ab965e49ca64d664b67a06fd9561d6f6ddbeb223e46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
