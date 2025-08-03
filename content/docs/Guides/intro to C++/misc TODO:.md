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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5XOPS4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7%2BOmhtLEi1n4USHMa00d32O53iDDxoD4ly6PoEXtBvAiBxQ6Br4%2BeJaQjZX%2BkoJmuQhS9CeQvIBrysGFq4Dk6TVCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMmpQZ%2BJ8HYz%2FN%2BzboKtwDcSweEbYIvd%2Fjaxpf7teVYBjzIBUw%2F9gDbXMguOhb6SUcZmR3qDBdWURZL6zLjiWIaFd1S0rUoayQAuE0YK4Gopu9nMPcn8JqgdNCPq90rdPQHJoqMGT5kugXAAx5FTBrY4SoTonFDMNU2Yv14alWjmdmts5OR2h7BA%2BnodKM%2FmtHl32Yrekh5DRGXm4MgPZHBsKG7esNtfZRjRdzK2bTnSBG5ktsEIMuJq1QorlLLPdwX6BcLTU4EHrkZe%2FUz5JlaOc0g5pSqZEauhxmuqwrBFu6xwsqvd1St68MMdqlsUhWMBjybxIk%2FqGqtfjiRx2qVnPCuPg6TrHdu9HjsAamxbXmz0bHcncoF%2B7Br7MnDVkL%2FbmTvVxbsfkcN2BRKD%2FtLbwA%2BpMSwhTqtwXpFQca4dfK2VDiBHrhT%2BpZ5xvOerKDzDun5fVu1XWN08qsUoa9i4pd0bPRTOz8mAqwIOV3MEXtTNVrvgto3BjFYWY0MVXW9GIfMe4Kr%2FmifPzEzC0gmpWrXSXumcnUvORW6MwHAAAg7heBYYNjjY4ClA7JGm5OFHTjsnNCYIg2Gfp6YpvNSpmXs0Oy6sDBgfOat715E%2FQIgsjiu%2FHtM%2FfSEc8kE1MLHsN21KcvwDutXDQww9m%2BxAY6pgE%2BK7x2Dyt8s5myjzXGKDTx9CWIflYWHjcjBkcuKlYgUyif0xCQpv%2FCDhzOjvEnEcv4NrxJkwbViABSwGGGfJqE4wB%2B7gWrK8bbzrHMuJfvgfezeqRAH%2BJoB%2Ff6EjTBjcy7pLvz4I73lSSTQMnT8I5VyUVOmN7OKLIw3OEw9rjqptqywzTlOD%2FGYaXvGhg%2BKdk8Va5kkMiSaukLnNVHRQrFP0JeApsH&X-Amz-Signature=7d67369400b8b02c526955bd2d86c4f1411adcd08fc7c41789f802bb62a57731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5XOPS4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7%2BOmhtLEi1n4USHMa00d32O53iDDxoD4ly6PoEXtBvAiBxQ6Br4%2BeJaQjZX%2BkoJmuQhS9CeQvIBrysGFq4Dk6TVCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMmpQZ%2BJ8HYz%2FN%2BzboKtwDcSweEbYIvd%2Fjaxpf7teVYBjzIBUw%2F9gDbXMguOhb6SUcZmR3qDBdWURZL6zLjiWIaFd1S0rUoayQAuE0YK4Gopu9nMPcn8JqgdNCPq90rdPQHJoqMGT5kugXAAx5FTBrY4SoTonFDMNU2Yv14alWjmdmts5OR2h7BA%2BnodKM%2FmtHl32Yrekh5DRGXm4MgPZHBsKG7esNtfZRjRdzK2bTnSBG5ktsEIMuJq1QorlLLPdwX6BcLTU4EHrkZe%2FUz5JlaOc0g5pSqZEauhxmuqwrBFu6xwsqvd1St68MMdqlsUhWMBjybxIk%2FqGqtfjiRx2qVnPCuPg6TrHdu9HjsAamxbXmz0bHcncoF%2B7Br7MnDVkL%2FbmTvVxbsfkcN2BRKD%2FtLbwA%2BpMSwhTqtwXpFQca4dfK2VDiBHrhT%2BpZ5xvOerKDzDun5fVu1XWN08qsUoa9i4pd0bPRTOz8mAqwIOV3MEXtTNVrvgto3BjFYWY0MVXW9GIfMe4Kr%2FmifPzEzC0gmpWrXSXumcnUvORW6MwHAAAg7heBYYNjjY4ClA7JGm5OFHTjsnNCYIg2Gfp6YpvNSpmXs0Oy6sDBgfOat715E%2FQIgsjiu%2FHtM%2FfSEc8kE1MLHsN21KcvwDutXDQww9m%2BxAY6pgE%2BK7x2Dyt8s5myjzXGKDTx9CWIflYWHjcjBkcuKlYgUyif0xCQpv%2FCDhzOjvEnEcv4NrxJkwbViABSwGGGfJqE4wB%2B7gWrK8bbzrHMuJfvgfezeqRAH%2BJoB%2Ff6EjTBjcy7pLvz4I73lSSTQMnT8I5VyUVOmN7OKLIw3OEw9rjqptqywzTlOD%2FGYaXvGhg%2BKdk8Va5kkMiSaukLnNVHRQrFP0JeApsH&X-Amz-Signature=953bc9171e37ff3a39d45bdfd09558b5a6e857b9ebf14139b31256da0b1fe48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
