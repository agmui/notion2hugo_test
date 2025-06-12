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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA6LLHIG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBIqqZ6G3AbGlj%2B6EyBX9r3glLFE6KeWZwlzGvo1BmeIAiAMMFpQBK0qZbTkUEy8vDoMXh%2FK2I3GwKfPm3bMxTFqMCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ4CXZSH6NXFYaBevKtwDXy%2B%2BBCm5SIoLU3aO51nXf4QQ%2Ff%2B6vg9FzJFlPTwRGL6Jt5v4CEY7So94Y1ytfYmpiOI5IfaduJx%2Fj2jECeUjWsq5GISbGLIbD50eBJuVzlbBgcM%2BPHZx1HiaU3SfhjYmjslNNk24Ys2CaUTgWR74rvbKoDV9%2FtjOjM182B6Q%2F%2BF%2BHrAGNSrOdQejgsraxptPOyhm%2FkIouQZFJVT0uGMEFU58issq3jbOUdviG%2F%2BjIK%2FqZz0Ds6aTvhWh9HQflTU8gmkllr%2BpnDuRy505q4cWWl%2FHXxmiAOcWevqI7jOnyx%2BAMFYPDKlptrHx8q0tTSiYGWRPMNsc%2BZCjJQmHsXtTiJgoQuOhTYf8bcR4VrWf9Th6QpPLQpkFnUqwzaFqEw3arntXGgeSeqnRQot59I63tIz3ZFUM1TlkCPKZhvq0h6FLatBQ4569EajKABi414W7o3OVx5LaTjIjQv8N42sH7jWZ7Lzzazt84weDC68ZW2BICd2IO%2BfddUSJNduIDnPg4LQpmhCDNGo3bLH0gFhDqDoTYTVdrwGBw9GTQGRCoZ4bFAFY8txiwIqXKqchvM3YTUNfVfTlj4JtwA7jTZsA4crfpvG3HF4uIDQiD9rYroFXhDmn%2FnW5XYbGiV0w45CswgY6pgGr%2BWctqg%2Fdwc0YnzjAvdDxo42dXCLohJxqnUh5nbL1NY7CjWlvHbax8VPyr6HWmqPX6QiwW9E3RXkC9s0y63ANAZnfjniyVlLNkSKqLv8WXJIr2d%2B%2B87DwRZ26plZuYbgA1QXWAC6IL%2Fi6u7qY5vqk7aus%2FriSbG9pyKx9Ja3404tnETIKJ9HOB3nMBJru2IrOyt06GhfmwATqQr8kLfebgJsi5gdr&X-Amz-Signature=51a9ad1d9637197636b93cd090d28ecc12c4dbad3beeff100d7d760a5f6051ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA6LLHIG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBIqqZ6G3AbGlj%2B6EyBX9r3glLFE6KeWZwlzGvo1BmeIAiAMMFpQBK0qZbTkUEy8vDoMXh%2FK2I3GwKfPm3bMxTFqMCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ4CXZSH6NXFYaBevKtwDXy%2B%2BBCm5SIoLU3aO51nXf4QQ%2Ff%2B6vg9FzJFlPTwRGL6Jt5v4CEY7So94Y1ytfYmpiOI5IfaduJx%2Fj2jECeUjWsq5GISbGLIbD50eBJuVzlbBgcM%2BPHZx1HiaU3SfhjYmjslNNk24Ys2CaUTgWR74rvbKoDV9%2FtjOjM182B6Q%2F%2BF%2BHrAGNSrOdQejgsraxptPOyhm%2FkIouQZFJVT0uGMEFU58issq3jbOUdviG%2F%2BjIK%2FqZz0Ds6aTvhWh9HQflTU8gmkllr%2BpnDuRy505q4cWWl%2FHXxmiAOcWevqI7jOnyx%2BAMFYPDKlptrHx8q0tTSiYGWRPMNsc%2BZCjJQmHsXtTiJgoQuOhTYf8bcR4VrWf9Th6QpPLQpkFnUqwzaFqEw3arntXGgeSeqnRQot59I63tIz3ZFUM1TlkCPKZhvq0h6FLatBQ4569EajKABi414W7o3OVx5LaTjIjQv8N42sH7jWZ7Lzzazt84weDC68ZW2BICd2IO%2BfddUSJNduIDnPg4LQpmhCDNGo3bLH0gFhDqDoTYTVdrwGBw9GTQGRCoZ4bFAFY8txiwIqXKqchvM3YTUNfVfTlj4JtwA7jTZsA4crfpvG3HF4uIDQiD9rYroFXhDmn%2FnW5XYbGiV0w45CswgY6pgGr%2BWctqg%2Fdwc0YnzjAvdDxo42dXCLohJxqnUh5nbL1NY7CjWlvHbax8VPyr6HWmqPX6QiwW9E3RXkC9s0y63ANAZnfjniyVlLNkSKqLv8WXJIr2d%2B%2B87DwRZ26plZuYbgA1QXWAC6IL%2Fi6u7qY5vqk7aus%2FriSbG9pyKx9Ja3404tnETIKJ9HOB3nMBJru2IrOyt06GhfmwATqQr8kLfebgJsi5gdr&X-Amz-Signature=b962a4916b9c6d808514368ddca45c96e251a543690925ac54ea0c9624932847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
