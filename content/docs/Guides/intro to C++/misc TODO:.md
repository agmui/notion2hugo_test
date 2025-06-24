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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMXOLHU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICKqu4xh4glqzreGL1e6kExgqaHtnG9GqcfxxfWYKbl3AiA18D%2B08%2FAU4VVXmRv5XRIs6%2Bi8V2v%2B2BPptiBBuQITjir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMpMk2uEhQ98jLKXEjKtwD41t0quLQCY%2FEzS3G1J4e5fTrRNgU8nXPnvOMsYJBtBYPwyOSbjfsmYtiprOUmbaqIeCGJQQk%2BPMMXUhoNw1pqEibU0GgZPD2q7wRSMG%2FTKGxZy5uoe6Y52yMLMh36%2By9uSYfLYecEFUw9wQb3AFSfUs0NO9FgzU4zuqxgQ0LRhOPumzx5yKErYRH5C9C7h5RSOhqddB7GM6iuFhoEIdoLi58AaX%2BXmYgijQERyQP4sqLV12i0ycG5iQFZcYUHeI%2Bw3YD9hhv8IZAM%2BDeYb%2BIS0IepnSDr2jFTEmVKwhM7mkO2nNR878LyLUqUPHz1CjB4zCjM%2BKf3OmCvoxvgyZb%2FFdVOKM7HHOlYPeJuXvQoPVUPeveAVDuUL6yfEvpYZ%2F15bVfaaI56shzLGJgjrSTN58FohtBIDzbCNNwukBCn1JBVWeemLzPzZoyBBmVV8xeRp5IRNYB7DSEDNpwQAMkQW%2F%2B4iEmQvBU2tFJVvmilyQf70z770eSNVXn4XVS3TGyvx3Dw9rmLFgpjQFfWyvkeySp%2FVKJSmvXrcc%2Fyy5QlP53l7CgtLx67%2F9X%2BJ%2BZ5L1z3EH1B7G18%2FO9T5E5ne02YV9hluO4ZELPLwTjQ8yy%2BtrcUQ8F0Z4wN%2BtdL2Qw4b3rwgY6pgG%2BYZwKyUzd%2BWxDnUwXfAfh360KNJT6MxQJ2p%2BfTEklNuGi%2FcnxOwY3kbX2SwExyJJ7l55U7n0Be%2BOSECYqaNq1X2R0x2t%2BSU%2BUwHLaXdqjOVi46DJkSlgmdaeYx1l8C6B3zAqN24d6TlSFY%2BB%2BFE4b7ZmNKM2fiuJ9fwXSGHqXxMh9rR1Mt4CwhK%2BJLLPH9Sa%2F9mGFVwADaVfUbSLc%2BcbpXdZxe9Jl&X-Amz-Signature=273a4b12866b63dd42c2088e4aa0d5123896547405f50ec9555767aab50491ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMXOLHU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICKqu4xh4glqzreGL1e6kExgqaHtnG9GqcfxxfWYKbl3AiA18D%2B08%2FAU4VVXmRv5XRIs6%2Bi8V2v%2B2BPptiBBuQITjir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMpMk2uEhQ98jLKXEjKtwD41t0quLQCY%2FEzS3G1J4e5fTrRNgU8nXPnvOMsYJBtBYPwyOSbjfsmYtiprOUmbaqIeCGJQQk%2BPMMXUhoNw1pqEibU0GgZPD2q7wRSMG%2FTKGxZy5uoe6Y52yMLMh36%2By9uSYfLYecEFUw9wQb3AFSfUs0NO9FgzU4zuqxgQ0LRhOPumzx5yKErYRH5C9C7h5RSOhqddB7GM6iuFhoEIdoLi58AaX%2BXmYgijQERyQP4sqLV12i0ycG5iQFZcYUHeI%2Bw3YD9hhv8IZAM%2BDeYb%2BIS0IepnSDr2jFTEmVKwhM7mkO2nNR878LyLUqUPHz1CjB4zCjM%2BKf3OmCvoxvgyZb%2FFdVOKM7HHOlYPeJuXvQoPVUPeveAVDuUL6yfEvpYZ%2F15bVfaaI56shzLGJgjrSTN58FohtBIDzbCNNwukBCn1JBVWeemLzPzZoyBBmVV8xeRp5IRNYB7DSEDNpwQAMkQW%2F%2B4iEmQvBU2tFJVvmilyQf70z770eSNVXn4XVS3TGyvx3Dw9rmLFgpjQFfWyvkeySp%2FVKJSmvXrcc%2Fyy5QlP53l7CgtLx67%2F9X%2BJ%2BZ5L1z3EH1B7G18%2FO9T5E5ne02YV9hluO4ZELPLwTjQ8yy%2BtrcUQ8F0Z4wN%2BtdL2Qw4b3rwgY6pgG%2BYZwKyUzd%2BWxDnUwXfAfh360KNJT6MxQJ2p%2BfTEklNuGi%2FcnxOwY3kbX2SwExyJJ7l55U7n0Be%2BOSECYqaNq1X2R0x2t%2BSU%2BUwHLaXdqjOVi46DJkSlgmdaeYx1l8C6B3zAqN24d6TlSFY%2BB%2BFE4b7ZmNKM2fiuJ9fwXSGHqXxMh9rR1Mt4CwhK%2BJLLPH9Sa%2F9mGFVwADaVfUbSLc%2BcbpXdZxe9Jl&X-Amz-Signature=9d64f3e88c7bf8ccadddb391b71190e471f28591f80764fb56a92d0678f8fe13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
