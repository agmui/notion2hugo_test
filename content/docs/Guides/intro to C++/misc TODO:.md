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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBJFCPGN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFsXHzNvtWcNfIO82tFU5rGROj6H99LZNNHw0Kob%2BeeIAiB3Apg0AAZJ1mdphcn4dQhtMohrNgC2CRoCC%2F%2FILobYVCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMlEje2RmBkEU%2FLCaNKtwDgzrTMkS7O%2B1nR2l91xhVkfnSXPnN7TcE6lOs9XDfseQ5Z2pT%2FBEvufOTCu8iO8gXz54iBeN5eHnms8yxJbub1EWyYWdH8OjmTHyJeyEM8Ab3Xw%2Bya6rxwQZwoJDWGRev3MwCThwCj2C7pwaJ2LKpo%2FdpuGDrgb7l7p0dYRKxoLRjLDCUqdLTVrMGU8P0rLLX6yHWuAN12B4%2FkTB63xQ9OjcGAGjZW8NllInE0i4pB6ZryTAS6QanDzYxQUyJIEVEw43s%2FlRKbFmY6FHwNepE3j0CTkMGjSyL%2BT8qRG3MCgU5fE7GXQz01MlnwO%2FffTj1FoJz02c%2F1Hk5tjJerwPxxsjSJc8S7I5zo8ISWW8beag0q3XQFijh13twvDT7yba%2BobmFMmACbzBLhY0%2BpQhwNZcuMV85ru%2F8N294Zqis7asuM9%2BY9L5NnyqM%2Fae5cQ3fwnPlx3KOzZ9iA4oR8Que%2FPSSO%2Boms9g1ITsBZ2jmufYMo3EvhXh3baLk1JgIYR4iRbNqFOs38AzX3j6wfpEgaUi0vo%2FVqvyPu5QbU%2BNUdvybXy9r7HoiwbH7Q8pZOipfXZJwdhNgDoqZWzYnPedorSIRSNAdKcp1731P1ISDRco1r94z3DmLFArd3TowgoP0vQY6pgG2SmgSDHoNYDu5zl2tD9aFOj1bkXXPzY3QDF6fglZFpN6b7EgTSe%2BVTHAyCFhRtSYL%2F%2Feui1jeOrQcQ%2Fuc%2BU3XbTFiSOze0BWXnAqO2PWYmVTIsy1aMa0jwP8%2FMw%2FmdHDU8j6cRFYLNFMpkzKcBMQR7Tvyy7gvITVlUZr7aPYnSnDoi1t95%2FY9v1YMzwUWRy7Cijiy2f7onEKBWH69lozyfXFWGoIo&X-Amz-Signature=4f5aa000693192e0cba40f329c7db9ad48c2bdd7e38a28d5c7bed01551c68d78&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBJFCPGN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFsXHzNvtWcNfIO82tFU5rGROj6H99LZNNHw0Kob%2BeeIAiB3Apg0AAZJ1mdphcn4dQhtMohrNgC2CRoCC%2F%2FILobYVCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMlEje2RmBkEU%2FLCaNKtwDgzrTMkS7O%2B1nR2l91xhVkfnSXPnN7TcE6lOs9XDfseQ5Z2pT%2FBEvufOTCu8iO8gXz54iBeN5eHnms8yxJbub1EWyYWdH8OjmTHyJeyEM8Ab3Xw%2Bya6rxwQZwoJDWGRev3MwCThwCj2C7pwaJ2LKpo%2FdpuGDrgb7l7p0dYRKxoLRjLDCUqdLTVrMGU8P0rLLX6yHWuAN12B4%2FkTB63xQ9OjcGAGjZW8NllInE0i4pB6ZryTAS6QanDzYxQUyJIEVEw43s%2FlRKbFmY6FHwNepE3j0CTkMGjSyL%2BT8qRG3MCgU5fE7GXQz01MlnwO%2FffTj1FoJz02c%2F1Hk5tjJerwPxxsjSJc8S7I5zo8ISWW8beag0q3XQFijh13twvDT7yba%2BobmFMmACbzBLhY0%2BpQhwNZcuMV85ru%2F8N294Zqis7asuM9%2BY9L5NnyqM%2Fae5cQ3fwnPlx3KOzZ9iA4oR8Que%2FPSSO%2Boms9g1ITsBZ2jmufYMo3EvhXh3baLk1JgIYR4iRbNqFOs38AzX3j6wfpEgaUi0vo%2FVqvyPu5QbU%2BNUdvybXy9r7HoiwbH7Q8pZOipfXZJwdhNgDoqZWzYnPedorSIRSNAdKcp1731P1ISDRco1r94z3DmLFArd3TowgoP0vQY6pgG2SmgSDHoNYDu5zl2tD9aFOj1bkXXPzY3QDF6fglZFpN6b7EgTSe%2BVTHAyCFhRtSYL%2F%2Feui1jeOrQcQ%2Fuc%2BU3XbTFiSOze0BWXnAqO2PWYmVTIsy1aMa0jwP8%2FMw%2FmdHDU8j6cRFYLNFMpkzKcBMQR7Tvyy7gvITVlUZr7aPYnSnDoi1t95%2FY9v1YMzwUWRy7Cijiy2f7onEKBWH69lozyfXFWGoIo&X-Amz-Signature=fdf6d2832869622a9a5716bfa01573f58387e2117253c21f2a301d150235b932&X-Amz-SignedHeaders=host&x-id=GetObject)

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
