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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E7Y4W5R%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3brFClX6YkG9OpK5fxOWgl%2BMTM4i3e8DpyHLmKoWEwIhAK6GQioVbjs%2BT0vLemv3jMcXPcigbppafEPTyJtCjDcBKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaR%2BvFcHorw7Mp4dYq3AMaNqsO6c2medVFF1gZr%2FNGT5yiBFxw3IOlfaTyqzfsE2yHTnGvKyc5hTORWBIC%2FKqbC1C8LZCXlDtkH3sKC7f3%2F5v2vd4eIuRc%2B7eXNzy2ilXRKpLBgFp5sZCnOL8mC3N89AAm6YGM1bPJzpKfMWN81cpJl97pJ%2FJQ74CZ6%2Fvodf5wiiJ1%2FQbqcuucU%2FszdLHauKRgQnMfYadWdaSn%2BnqnXFJNvZ4UbIp%2FX0W0j5ykMcEuX9FqRo6W8ZSMA0rQ61phK2E5JYCG5hJ6XDZyE16QPw1WqfGakeKQvydaoS%2FE58KZ%2B%2FvOq9v56nRdnDCq0Pk1RVAoPWNFctu%2BUkue603ItoMEvWoU5%2B%2FCqofUs9tZTpi2FOoRIn6skjjUlewLdJzweVH7rkCca8MDAwNyWgWEeZUf9dmQztSBOchePK7Zf3opt5qovOSd6g26HHTNq%2FkwkBh2dA4psdT4ncFMZn4%2BMXxEhdCZmTRkZyE1i5CZtJ4%2Bvz1DkdUBB%2FR8z1wEymxFvE6i9XbIQIu1rQJeF8UVmHy5kYYMppOBORs%2B780cn5i4BXfP%2BtWGQOMS9Pg%2Fnj%2BSy7X3CsBqYawYDrVED6pwbGj6S4t%2FJGNCa7nN8vjrjBY2Q2Pq%2FBictn4VHjDXxu28BjqkAXn7lX59HSlQeGUqpVFdnU980LZEAdn2QPNFGpzeuhN73GwOa3Hob0JQAylGXjxOunCMfQ%2ByG6foKKCg%2BXu2la6LifBJkTpjh4NGkjC58DGe92cr494Z7wU9juASpNvTRU4YbJETsce4%2FpXIWd7p5PpPMLppAxgpMwrQa3E5HAeyrIYascqYkTvdWex%2FXzkpa%2B4eQQMxd8XagqJmHy9Cq4cwCOX8&X-Amz-Signature=a623e52f3c25dfb0e8fdb67662cab1d4b59acf366e8b0f83a4dd28b9207e484a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E7Y4W5R%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3brFClX6YkG9OpK5fxOWgl%2BMTM4i3e8DpyHLmKoWEwIhAK6GQioVbjs%2BT0vLemv3jMcXPcigbppafEPTyJtCjDcBKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaR%2BvFcHorw7Mp4dYq3AMaNqsO6c2medVFF1gZr%2FNGT5yiBFxw3IOlfaTyqzfsE2yHTnGvKyc5hTORWBIC%2FKqbC1C8LZCXlDtkH3sKC7f3%2F5v2vd4eIuRc%2B7eXNzy2ilXRKpLBgFp5sZCnOL8mC3N89AAm6YGM1bPJzpKfMWN81cpJl97pJ%2FJQ74CZ6%2Fvodf5wiiJ1%2FQbqcuucU%2FszdLHauKRgQnMfYadWdaSn%2BnqnXFJNvZ4UbIp%2FX0W0j5ykMcEuX9FqRo6W8ZSMA0rQ61phK2E5JYCG5hJ6XDZyE16QPw1WqfGakeKQvydaoS%2FE58KZ%2B%2FvOq9v56nRdnDCq0Pk1RVAoPWNFctu%2BUkue603ItoMEvWoU5%2B%2FCqofUs9tZTpi2FOoRIn6skjjUlewLdJzweVH7rkCca8MDAwNyWgWEeZUf9dmQztSBOchePK7Zf3opt5qovOSd6g26HHTNq%2FkwkBh2dA4psdT4ncFMZn4%2BMXxEhdCZmTRkZyE1i5CZtJ4%2Bvz1DkdUBB%2FR8z1wEymxFvE6i9XbIQIu1rQJeF8UVmHy5kYYMppOBORs%2B780cn5i4BXfP%2BtWGQOMS9Pg%2Fnj%2BSy7X3CsBqYawYDrVED6pwbGj6S4t%2FJGNCa7nN8vjrjBY2Q2Pq%2FBictn4VHjDXxu28BjqkAXn7lX59HSlQeGUqpVFdnU980LZEAdn2QPNFGpzeuhN73GwOa3Hob0JQAylGXjxOunCMfQ%2ByG6foKKCg%2BXu2la6LifBJkTpjh4NGkjC58DGe92cr494Z7wU9juASpNvTRU4YbJETsce4%2FpXIWd7p5PpPMLppAxgpMwrQa3E5HAeyrIYascqYkTvdWex%2FXzkpa%2B4eQQMxd8XagqJmHy9Cq4cwCOX8&X-Amz-Signature=391b97f01ce5910493623f4a0c2b26820bd9a12a22476091c9c32c0d99849b08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
