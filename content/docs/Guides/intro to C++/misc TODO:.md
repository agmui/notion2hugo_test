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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVSX4AG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVLNjzb2BRZ9agszRbSLd0s70wX2YqZQiXS2nDh8UGaAiEAndWEsGyB%2BA%2F%2BsH7hnO1oII8Wu26HE04zIkRW4%2FtrYwEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDJw0UOpy8yiEXCo2yrcA7Ny0oC4u0tDvXWE2vvz6zVxXIvvOAUxTBvkauCvB4VJgC2YC%2By5TLjrC9yTbe6VcvBnNwnBmgJ6V4D%2F37iiacirvI7bDW11TG9w5hTtK%2Bu8KOplo0pptRQh9o8PbG7ea4szqMPmFo5CUn31gSdJWyD%2BFvBIqpzxkdDwlm6z5qubmEHds0l1VmiVrvwRzET90i1wC8JKIgonzr%2FTmJcsWXVaGTqdfoPlyqB0FNQWI3zGi3qgH6Nn3XuJqMOw7YUWyW7rKxXc529LjtYvADAABa0TcVK2mH66SF3v%2FpapiLrOhixN3ezrrZxZzcPY2PD2wasvw7uTao6vZFk6n5GYs6cVWtfPdJidqDgktm55HwOwQD5eNP3xwhbo33sTkKhDjQXHmeRxpWmtzn2bOteYulcYj4asig7FNfau8frenCy%2FoponFoZwTY5epTFnnLz%2FbbrOzUCeuM4OJJvnF2jWCuFxhop7LT%2Bp%2Bqy6p3du10RTONvY1Vi2dg0xX%2BEF1AAwZBNZ2AWrQIPXOY9M%2F8Iyra%2BOVpxn2hoNhQOTtMKKmEc91uQxNQVKW2kGnYf7WyzhYqPH%2FQKgFDIqoMaztbVurW8ys1Bm4A2GiQJM85OMRb8BkoG3vlH%2FWraD0MBNMIqwisAGOqUBwiF3YhPVr71A8lRSP45j8o7GInFGorRKKb%2FZo8FkTWmFrRK%2Fh5UyG8aYeHlpoqeocXpRebmyqmPhtpF4i5KKMWD44v5dBmga0LklfwCFYkJEIRZxYE%2F9Xer8moD0ktjqnGNGNcpIA%2Fs7IFJnUgkG0pTmjdA0KHzr7HZ1ulTXhjyw5aFb%2FJLaZUcS%2FqpLXMxOjPvr5UhR6PpZkLXxvEKsQMh34sUg&X-Amz-Signature=8d85c79c77566af9966ffa9bc1df6189d3ccce8dd7ae644e864935dd2e2b5448&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVSX4AG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVLNjzb2BRZ9agszRbSLd0s70wX2YqZQiXS2nDh8UGaAiEAndWEsGyB%2BA%2F%2BsH7hnO1oII8Wu26HE04zIkRW4%2FtrYwEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDJw0UOpy8yiEXCo2yrcA7Ny0oC4u0tDvXWE2vvz6zVxXIvvOAUxTBvkauCvB4VJgC2YC%2By5TLjrC9yTbe6VcvBnNwnBmgJ6V4D%2F37iiacirvI7bDW11TG9w5hTtK%2Bu8KOplo0pptRQh9o8PbG7ea4szqMPmFo5CUn31gSdJWyD%2BFvBIqpzxkdDwlm6z5qubmEHds0l1VmiVrvwRzET90i1wC8JKIgonzr%2FTmJcsWXVaGTqdfoPlyqB0FNQWI3zGi3qgH6Nn3XuJqMOw7YUWyW7rKxXc529LjtYvADAABa0TcVK2mH66SF3v%2FpapiLrOhixN3ezrrZxZzcPY2PD2wasvw7uTao6vZFk6n5GYs6cVWtfPdJidqDgktm55HwOwQD5eNP3xwhbo33sTkKhDjQXHmeRxpWmtzn2bOteYulcYj4asig7FNfau8frenCy%2FoponFoZwTY5epTFnnLz%2FbbrOzUCeuM4OJJvnF2jWCuFxhop7LT%2Bp%2Bqy6p3du10RTONvY1Vi2dg0xX%2BEF1AAwZBNZ2AWrQIPXOY9M%2F8Iyra%2BOVpxn2hoNhQOTtMKKmEc91uQxNQVKW2kGnYf7WyzhYqPH%2FQKgFDIqoMaztbVurW8ys1Bm4A2GiQJM85OMRb8BkoG3vlH%2FWraD0MBNMIqwisAGOqUBwiF3YhPVr71A8lRSP45j8o7GInFGorRKKb%2FZo8FkTWmFrRK%2Fh5UyG8aYeHlpoqeocXpRebmyqmPhtpF4i5KKMWD44v5dBmga0LklfwCFYkJEIRZxYE%2F9Xer8moD0ktjqnGNGNcpIA%2Fs7IFJnUgkG0pTmjdA0KHzr7HZ1ulTXhjyw5aFb%2FJLaZUcS%2FqpLXMxOjPvr5UhR6PpZkLXxvEKsQMh34sUg&X-Amz-Signature=935f32ee245ae9d67ee70410ba8a7eadcaeac6d1c7552eae3a5661da6db7e4f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
