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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRNBQTD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIE1sXa%2FtVxUvgJpBeJfXVH7Cul6Pealu%2Ff5UvAwXyEsuAiBFKMC3H6M3UgPmcXaKafXH6lWgZtF31QV72NLWrcDKUyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMSM6vNTv6vjQADE9uKtwD536vr77wxCuGdtzy%2F89xTglp8DKhLZmbEX5jPVvkRhwtVPotmsigFmgHlm9kkCOh8ucddjYI1ZPwvWsGrjuZPVQPQivFx9tx78dACz341UWBjHZ%2FsUlfTLzWebXeDLWYwbjmT3doLV3DkzjXOdhnoMTyGDonj1qi5iuefDZEnRgu4zE0GB67yqB6XtmlsrsFfN%2BwbNJVSJZ5bpJt7F9a4jNivp0e292SbwPRYoKpqZCNfrhHxLavXs9QjJpPzmzdaOuSTeTjFED%2FT9sBiClBXZ30k33onfOuVRwLy987CP8M0sH8e26Vi6k%2BwMRs5d%2BQtWYq%2BRRk0fl8IVZw38pwqzk1LKJrn%2F6QgWfgir2YblcvP2e48ZFfqQ6yPGSt4ZTxzkTLoFnvcQ1yCk1symwPmsvN9GOgmqA18AAtu9CVG2yauAMj8SO48Dg4Q9qStdDl7P%2Bu24uSIrcGZIyd4vKJDLdIskGWXK%2FYof%2FjrxmEGygqUL3OGWrHeGCB0gTLryB9UhnEltVW1o6e0hWHjGNHKzJb%2FI8dxg5vwUresjE8iWeUN7UVaT5yqyZKORub24FRWyFs21QnKr%2BnRgN8rwfN4y8qKP9qEp5WZjkSPdLz%2BnKMt%2Bvd191039lG3T4w4oaSxAY6pgFb8%2Fix7zXtbE9iiF1ETrMdO2dFdkBi9iGjzvGJ1YjqurreS1c00tkBGo4LvdG8Z56o%2FNnkuYKqmPVtNi8eNj7%2FS%2BpWGMDa8W%2BBrxPlRE0ZqUwzumLn%2BO0KGP8eQ1ATEv8SVelAPGwhHO8ajqz2mR%2B6d%2BCvTt2L%2B%2BG5L%2BhjKL6it%2FaXKiEwy05HZlch%2FegX4RROzGvvnKyX3lD%2FBQ1Tto9aRJOqMWQd&X-Amz-Signature=b58551271dee0bae3ee82dfb5562a7c16cc2c003e5e09d9d15bebf9a78e85997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRNBQTD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIE1sXa%2FtVxUvgJpBeJfXVH7Cul6Pealu%2Ff5UvAwXyEsuAiBFKMC3H6M3UgPmcXaKafXH6lWgZtF31QV72NLWrcDKUyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMSM6vNTv6vjQADE9uKtwD536vr77wxCuGdtzy%2F89xTglp8DKhLZmbEX5jPVvkRhwtVPotmsigFmgHlm9kkCOh8ucddjYI1ZPwvWsGrjuZPVQPQivFx9tx78dACz341UWBjHZ%2FsUlfTLzWebXeDLWYwbjmT3doLV3DkzjXOdhnoMTyGDonj1qi5iuefDZEnRgu4zE0GB67yqB6XtmlsrsFfN%2BwbNJVSJZ5bpJt7F9a4jNivp0e292SbwPRYoKpqZCNfrhHxLavXs9QjJpPzmzdaOuSTeTjFED%2FT9sBiClBXZ30k33onfOuVRwLy987CP8M0sH8e26Vi6k%2BwMRs5d%2BQtWYq%2BRRk0fl8IVZw38pwqzk1LKJrn%2F6QgWfgir2YblcvP2e48ZFfqQ6yPGSt4ZTxzkTLoFnvcQ1yCk1symwPmsvN9GOgmqA18AAtu9CVG2yauAMj8SO48Dg4Q9qStdDl7P%2Bu24uSIrcGZIyd4vKJDLdIskGWXK%2FYof%2FjrxmEGygqUL3OGWrHeGCB0gTLryB9UhnEltVW1o6e0hWHjGNHKzJb%2FI8dxg5vwUresjE8iWeUN7UVaT5yqyZKORub24FRWyFs21QnKr%2BnRgN8rwfN4y8qKP9qEp5WZjkSPdLz%2BnKMt%2Bvd191039lG3T4w4oaSxAY6pgFb8%2Fix7zXtbE9iiF1ETrMdO2dFdkBi9iGjzvGJ1YjqurreS1c00tkBGo4LvdG8Z56o%2FNnkuYKqmPVtNi8eNj7%2FS%2BpWGMDa8W%2BBrxPlRE0ZqUwzumLn%2BO0KGP8eQ1ATEv8SVelAPGwhHO8ajqz2mR%2B6d%2BCvTt2L%2B%2BG5L%2BhjKL6it%2FaXKiEwy05HZlch%2FegX4RROzGvvnKyX3lD%2FBQ1Tto9aRJOqMWQd&X-Amz-Signature=c66822e524563cdc99fd6d8ee503e342f2422bc9adf35d256a61ca59c68e1eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
