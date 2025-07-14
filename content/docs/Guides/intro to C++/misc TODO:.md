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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IVDCAPY%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBN6XOpnTGiVTtH3bGpQkQtiltjbhY%2FmSjtZoFutChCoAiB3gb2aa%2FqIjarTIjxudWgupKSzs8Avu7RtZ1Udrt49pyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMwPxyozG2tVjOWHOkKtwDKpaoAPkeoBWjq%2BrGRfAkaaIMv6ZL3xMtqJk%2BXXrrdczZQTnQDnRBtxlZXO3mL8y8cb33I2WWvngMb1DFOJoEcHX1K%2BaswwvozbFqql5O52C3Z8vKOuL5xjdW208gZeQuB3v0QgPpecjM%2BlCUOrN6V2d9qDtWoebvkem5Sg574MY8VJtV9ujz9hnL17%2FMYAhFGfoHEqkxMv%2BF60umVr4bZZ3MbH6kaLHA7zgxB0JBVKjCyrZwpI%2FNN4vy%2B1mO1qPkuTqE%2BykYUlP2oXkfVFSNfQ30yZEKofmglN9LyjYgKylNFdkQoqGXXSKRh9D6RaCsoStrFQz3LG%2FaRu65nyQIrT%2FKMnijNxoC%2B5eNJkh890wHj%2FLhNF7hZQ4JqXW5Ulo%2BGPBRBx4lpUB3XaZpeEq3Ob6h8Jq4Lh1v8IQDhzJXfftDv8XvpbwpiW3qQdgirIhBrjbXwwSrbEzrOu%2FaSm5ZausNLhAp6pTN5bzGjsnfxtx72tjuY1qK6ZVgIir%2F7ZzTJ3A08XJnVSuPyYhYPfzXqo3tHPBKStGC%2FNa0Vk1zVYGGVymrYgO2Z5o%2F6mcIKGVRVQfH2spFRyfOQe0ZZrwQ3cPakCg3VBV5Fxv8BS2BOKp5e8uyPdWo%2FFBRQ6Yw1tvTwwY6pgGKSwP2XEUKBDqtImvZ4t8I74TS7V8eYDaLgwBFcrEhg7FBwAB9fzssUXGUhDGFcGO1GIerNP9RERPf%2FSGUfEH2mf3jWGGyXW7Rrlt1ukTpdZa2au8ol3WMglQPlS2n1DmqfuOCirTcLmnO4jAzvJL9c60zqqMCq10ZKMcAX3HAKWzJR2G1TGHhs2jxfD93%2B7vJpQ9C%2BjOZeTvg57bHKaojlOqYxBKp&X-Amz-Signature=7965578e74f7ba90d76e938ce7c4880e235961f610b644dd5b1b55bb08884cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IVDCAPY%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBN6XOpnTGiVTtH3bGpQkQtiltjbhY%2FmSjtZoFutChCoAiB3gb2aa%2FqIjarTIjxudWgupKSzs8Avu7RtZ1Udrt49pyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMwPxyozG2tVjOWHOkKtwDKpaoAPkeoBWjq%2BrGRfAkaaIMv6ZL3xMtqJk%2BXXrrdczZQTnQDnRBtxlZXO3mL8y8cb33I2WWvngMb1DFOJoEcHX1K%2BaswwvozbFqql5O52C3Z8vKOuL5xjdW208gZeQuB3v0QgPpecjM%2BlCUOrN6V2d9qDtWoebvkem5Sg574MY8VJtV9ujz9hnL17%2FMYAhFGfoHEqkxMv%2BF60umVr4bZZ3MbH6kaLHA7zgxB0JBVKjCyrZwpI%2FNN4vy%2B1mO1qPkuTqE%2BykYUlP2oXkfVFSNfQ30yZEKofmglN9LyjYgKylNFdkQoqGXXSKRh9D6RaCsoStrFQz3LG%2FaRu65nyQIrT%2FKMnijNxoC%2B5eNJkh890wHj%2FLhNF7hZQ4JqXW5Ulo%2BGPBRBx4lpUB3XaZpeEq3Ob6h8Jq4Lh1v8IQDhzJXfftDv8XvpbwpiW3qQdgirIhBrjbXwwSrbEzrOu%2FaSm5ZausNLhAp6pTN5bzGjsnfxtx72tjuY1qK6ZVgIir%2F7ZzTJ3A08XJnVSuPyYhYPfzXqo3tHPBKStGC%2FNa0Vk1zVYGGVymrYgO2Z5o%2F6mcIKGVRVQfH2spFRyfOQe0ZZrwQ3cPakCg3VBV5Fxv8BS2BOKp5e8uyPdWo%2FFBRQ6Yw1tvTwwY6pgGKSwP2XEUKBDqtImvZ4t8I74TS7V8eYDaLgwBFcrEhg7FBwAB9fzssUXGUhDGFcGO1GIerNP9RERPf%2FSGUfEH2mf3jWGGyXW7Rrlt1ukTpdZa2au8ol3WMglQPlS2n1DmqfuOCirTcLmnO4jAzvJL9c60zqqMCq10ZKMcAX3HAKWzJR2G1TGHhs2jxfD93%2B7vJpQ9C%2BjOZeTvg57bHKaojlOqYxBKp&X-Amz-Signature=883e3b7ea7d727348128a5d2323746be9e36553c9b5bf78857e7725d09bb0d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
