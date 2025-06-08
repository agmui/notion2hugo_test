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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644LDJIEX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLEJ7oL1%2BFCRQ5RHrC8TgpgKlxKWr7z459WF7EpPGzcAiBTvXDhSKQA1taLVHwx2eX2V%2FDxOWR%2FWeySNlSwgLvPVSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf9UDmK8XAjTuYm7yKtwDZ4ZG1KO%2F9p2uKcYoypqF0gIsCTMJ3Ur7lt4ipdC5zRLbaZCbn0r6iW%2B6pK3YdH7WlRnvjc3zODW7M4yQJTtx6pBM8qTcdyuLJeAKHwnfIxU47jKvsrF%2FK7kHi6iyczv8m0Nl81RnnIoSMQn1J6Cr2oIafr8q1q%2FIY4E75%2FJGHtiL%2FJ5dBfgvzfftqZpDaoTHgopcjNWeryKnVh47L1vgNMgFNaRkDHYvEed0yR7UGQky2ij%2Bpt%2BlcHLKnNhyzA08af686t8Km%2FoLcvH38q3oW4d0ZvK7G3T57IHkDaoYhixu%2FVyB1P%2FL%2B%2BNqHcnnQ0u21pNdxC6iD8gyKJfU2OLkckt9VHq%2F31Vs98TjnhQWNp5ZTGF%2Fmg2gKlEGkT6GHys9R8e1uHThjgVZIX9s3ZUNRlIn25W0jGEnxcr8qlJE8zkTkjMkfzVXqAXYlocGUO%2FHzoEQ8ZXS97VprSJ4NWIX9VTKP1rRZHpJDPd5e1FdPlJ9%2BdmpVVBwZ7JSAj7LoJYUAzL8ydU1rwvyaX9vMVmy4E0jMB3IpJxlq6gW6oVor7RiMn%2BWxhdHLFhv9%2BNBjZFhveS3Cv3LZ1FHuU5R%2FmUe9OHWccvISMqTxK2PirZ3C4rvYxYvN5kvwX%2BLFRkwi7OWwgY6pgHkS7Aca83LLZ8uB1HTXXmvQcrIaVryQjPB278w3vTY3Cw4Tc0s7Oqul2fxFwdMB0qnxt1cV6DGTF5H3QEWxe8uLPsu9piCjj1UMOlpmmvrf67l9iERp8sKgq8ZzTCA6WHIeMNQARI3eI7dVtK0crBafQ6lv5W7aoGFQO2FkEuK%2B3%2BgIEu2DxzgWWhvQ%2Ba30XpANyuZF6uiVrkrJvj%2BGXzQIOvd90Pa&X-Amz-Signature=a3d4f03e8ae024ae1d4c214da1f675489c05acd0f92394836e95901a7443400a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644LDJIEX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLEJ7oL1%2BFCRQ5RHrC8TgpgKlxKWr7z459WF7EpPGzcAiBTvXDhSKQA1taLVHwx2eX2V%2FDxOWR%2FWeySNlSwgLvPVSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf9UDmK8XAjTuYm7yKtwDZ4ZG1KO%2F9p2uKcYoypqF0gIsCTMJ3Ur7lt4ipdC5zRLbaZCbn0r6iW%2B6pK3YdH7WlRnvjc3zODW7M4yQJTtx6pBM8qTcdyuLJeAKHwnfIxU47jKvsrF%2FK7kHi6iyczv8m0Nl81RnnIoSMQn1J6Cr2oIafr8q1q%2FIY4E75%2FJGHtiL%2FJ5dBfgvzfftqZpDaoTHgopcjNWeryKnVh47L1vgNMgFNaRkDHYvEed0yR7UGQky2ij%2Bpt%2BlcHLKnNhyzA08af686t8Km%2FoLcvH38q3oW4d0ZvK7G3T57IHkDaoYhixu%2FVyB1P%2FL%2B%2BNqHcnnQ0u21pNdxC6iD8gyKJfU2OLkckt9VHq%2F31Vs98TjnhQWNp5ZTGF%2Fmg2gKlEGkT6GHys9R8e1uHThjgVZIX9s3ZUNRlIn25W0jGEnxcr8qlJE8zkTkjMkfzVXqAXYlocGUO%2FHzoEQ8ZXS97VprSJ4NWIX9VTKP1rRZHpJDPd5e1FdPlJ9%2BdmpVVBwZ7JSAj7LoJYUAzL8ydU1rwvyaX9vMVmy4E0jMB3IpJxlq6gW6oVor7RiMn%2BWxhdHLFhv9%2BNBjZFhveS3Cv3LZ1FHuU5R%2FmUe9OHWccvISMqTxK2PirZ3C4rvYxYvN5kvwX%2BLFRkwi7OWwgY6pgHkS7Aca83LLZ8uB1HTXXmvQcrIaVryQjPB278w3vTY3Cw4Tc0s7Oqul2fxFwdMB0qnxt1cV6DGTF5H3QEWxe8uLPsu9piCjj1UMOlpmmvrf67l9iERp8sKgq8ZzTCA6WHIeMNQARI3eI7dVtK0crBafQ6lv5W7aoGFQO2FkEuK%2B3%2BgIEu2DxzgWWhvQ%2Ba30XpANyuZF6uiVrkrJvj%2BGXzQIOvd90Pa&X-Amz-Signature=e3e68510f30190b6c98a740ac4e40ceaae351ca82a0981e5297a74fe6a544215&X-Amz-SignedHeaders=host&x-id=GetObject)

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
