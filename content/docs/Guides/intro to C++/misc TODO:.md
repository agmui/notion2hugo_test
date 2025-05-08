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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGJVWKPA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmpAHCgbV%2B16PER0cIgpkWQGxXl38HeXjFf2kXhHxnRgIgXS%2BXetYq7PAyWYEN2%2FRzqwp8UFx%2B7Jnj1ZWBlNfAfV4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGiS86qCjz2YILsc3CrcA4W7HuQifqeCHCCwa2quw3N0YmpgiWi%2FhljtIgY3zWSDBsJ7rRp%2BP9O68WuBCOT9No4jzc0JYxiLtFsKvXtz5mGjzukE6rJikY2NvsZZ38zdpQgdZoABPyaPKyexHhUSO81uHfHOBmu5GLuT%2FOAapj22986PfLb9j1N0TrzsR0yzzg9HYfLwes%2F1j%2B7XoSs07ruRpIqoNlFyC%2BG1Trz0Ofge79A2sK0betzvl9%2BCXZ48WKEE3duE1zPPt1U7JVl8B56tClhc8iINxABgkuWDGvfdrw4oiMkYUhDYnqlbUwPnToyEtq011BFaFjw4MoM6K6gtAYWu5RZ2Bt519jHMHVVWJIJtFJYQg1lN3e3m1az5DznpIDoFY0DMmdwifjtG4Npp%2FSA6ptUBm6SHPPSGecAwfKh%2BlyxnhjluR7jFdsjTvhYrZOHwmhZ%2FRQ5Xw%2FCXmR%2FldrclUjVUe21%2BxfNZOu8HLRv3eUpCvuRZe1or6cNFiXBsNUHETrGJSsRomBLn5gbPhyOqaNJDQBhFRXOAKCT0zQUeeUxd7uwMvnCD0Zke9D2aWBEALdzNR341WAlSXbHRqR5pUXnGv0VoAc03w0BuH8OHAHjQERiwMN7y%2B%2B7F2DdNBmjqn8WpdQ18MNWx9MAGOqUBXcjZTwZLiFnavfciXQUb7Xq%2FAEplzRVVQURdfIw2kQocO6lpx7Azc%2BYRLZr%2Fjj2reFnMb6J1mSX0Yfy6Qx1R%2FNWHdAL8GFd0GlMKJmX5twrxBNBqREC8JHxPjpjz63Sgqh%2BCarr1Y3n0qTlaRWvNnbv8uzfiFKdGtGzeV5KVjfeT7clipUMEpJJU8h66DIGIj%2BdxsFAcGZ9%2BNoNfvNUtqE7c5Z%2F%2B&X-Amz-Signature=b2b1d337e5a7b1d1fa6d481a4becdae8103f260b255a17c7f99552aee0c64ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGJVWKPA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmpAHCgbV%2B16PER0cIgpkWQGxXl38HeXjFf2kXhHxnRgIgXS%2BXetYq7PAyWYEN2%2FRzqwp8UFx%2B7Jnj1ZWBlNfAfV4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGiS86qCjz2YILsc3CrcA4W7HuQifqeCHCCwa2quw3N0YmpgiWi%2FhljtIgY3zWSDBsJ7rRp%2BP9O68WuBCOT9No4jzc0JYxiLtFsKvXtz5mGjzukE6rJikY2NvsZZ38zdpQgdZoABPyaPKyexHhUSO81uHfHOBmu5GLuT%2FOAapj22986PfLb9j1N0TrzsR0yzzg9HYfLwes%2F1j%2B7XoSs07ruRpIqoNlFyC%2BG1Trz0Ofge79A2sK0betzvl9%2BCXZ48WKEE3duE1zPPt1U7JVl8B56tClhc8iINxABgkuWDGvfdrw4oiMkYUhDYnqlbUwPnToyEtq011BFaFjw4MoM6K6gtAYWu5RZ2Bt519jHMHVVWJIJtFJYQg1lN3e3m1az5DznpIDoFY0DMmdwifjtG4Npp%2FSA6ptUBm6SHPPSGecAwfKh%2BlyxnhjluR7jFdsjTvhYrZOHwmhZ%2FRQ5Xw%2FCXmR%2FldrclUjVUe21%2BxfNZOu8HLRv3eUpCvuRZe1or6cNFiXBsNUHETrGJSsRomBLn5gbPhyOqaNJDQBhFRXOAKCT0zQUeeUxd7uwMvnCD0Zke9D2aWBEALdzNR341WAlSXbHRqR5pUXnGv0VoAc03w0BuH8OHAHjQERiwMN7y%2B%2B7F2DdNBmjqn8WpdQ18MNWx9MAGOqUBXcjZTwZLiFnavfciXQUb7Xq%2FAEplzRVVQURdfIw2kQocO6lpx7Azc%2BYRLZr%2Fjj2reFnMb6J1mSX0Yfy6Qx1R%2FNWHdAL8GFd0GlMKJmX5twrxBNBqREC8JHxPjpjz63Sgqh%2BCarr1Y3n0qTlaRWvNnbv8uzfiFKdGtGzeV5KVjfeT7clipUMEpJJU8h66DIGIj%2BdxsFAcGZ9%2BNoNfvNUtqE7c5Z%2F%2B&X-Amz-Signature=233c2ba763f2827bcc6a8d7d01c7341c68362c70594b29bf0a693fd6cc4c06fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
