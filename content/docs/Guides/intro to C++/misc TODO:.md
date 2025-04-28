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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSPTM7T%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWfivn%2F%2BjWeStH3ev7sCmRcQmZejsz61ZxBt%2F3zVUPJAiB7t%2FwiLQvIgAogxMnMSljdR7jzihCY%2FrI9ti9w%2Bz6YvCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMcGvdnuSH%2FSh1Wb96KtwDAe54cZFrp5W67lpKYfeXjS69NPujIx%2BhvDQEkQ3p2Wej82PusYd%2F7g0VO8hKBPcTbnKIo9ZjOa5CaK6M61Z7Cbwc%2FK2UrGbUvz5%2FqjV2FSZrG8ZDNCpShjd3jkNVg%2BD4gzkfywGe%2Bq6fcK%2BevPnmbfU8prr8jZSwixDCSGAfzrdODB6pwydXcZdMfaJKzX9kKsKEYJqRfQUb0UmZv9SzwRJ89TbgJKRRLkxmOOedirg%2FI2cWRVWDBBekp%2F9yKrMFKTVQzU3afuoKiukI2rw9K2G6LegWsC4Uk5tq2sdgiztgrogZ372Zf0Ab4ZhcfxikFIc0XYK79O2zAqjB%2Fp1RcckTW4sIy8zf30nO6CVRz5HMQCjC0y7y06QkVXh5ySImh8djpEso8Gq3NNTtBrLtKsNQ164OXHanXePwMyUwg5YojezRYXcUbL%2B%2BTabUFfYNH9Yqz73fMGkgWpgdJ%2BWExa9f4lqZS4xlXaLqD%2BhdPM%2F0rlfEg4lXBG7kapq37V7%2FXzXL5KEYV7hlKU38XNRTOvhwxJ9p4BQrNKsUwhlXEqFjCGioKNGUUwlPBrNxOo01lTH4xY%2FhX%2BCWM%2Bi5HUWt3DCqeCGutjxPCIyfnO4hXRn%2F6UJ6xxGAfh3e9tMwtvS%2BwAY6pgEWeYUpJSeMtt%2BpTH1kxVZhqPKs70d3EPUBaETmCY64mLZpcRdP0gDlYwRK%2F20u35Ag5cwNWZ8nitTuH5sD6bN3IR43k%2BEwMEP5Cl%2BWpssS%2BgJQ%2B1aL7SYTSQ6Rl1%2FQO%2FbplDTr2vH5eLmU4M0kSgxcdCmfknzas6NtwKN%2BTH6DOYsp%2Bm6aadka6ldkaClsQOxaUbREKpiyrZbB49iWNHEQrbanGN%2FZ&X-Amz-Signature=281c96a149ffb3b4e19961aba3ff3ed3c112b751ae4f61a881101580ab55fd8a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSPTM7T%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWfivn%2F%2BjWeStH3ev7sCmRcQmZejsz61ZxBt%2F3zVUPJAiB7t%2FwiLQvIgAogxMnMSljdR7jzihCY%2FrI9ti9w%2Bz6YvCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMcGvdnuSH%2FSh1Wb96KtwDAe54cZFrp5W67lpKYfeXjS69NPujIx%2BhvDQEkQ3p2Wej82PusYd%2F7g0VO8hKBPcTbnKIo9ZjOa5CaK6M61Z7Cbwc%2FK2UrGbUvz5%2FqjV2FSZrG8ZDNCpShjd3jkNVg%2BD4gzkfywGe%2Bq6fcK%2BevPnmbfU8prr8jZSwixDCSGAfzrdODB6pwydXcZdMfaJKzX9kKsKEYJqRfQUb0UmZv9SzwRJ89TbgJKRRLkxmOOedirg%2FI2cWRVWDBBekp%2F9yKrMFKTVQzU3afuoKiukI2rw9K2G6LegWsC4Uk5tq2sdgiztgrogZ372Zf0Ab4ZhcfxikFIc0XYK79O2zAqjB%2Fp1RcckTW4sIy8zf30nO6CVRz5HMQCjC0y7y06QkVXh5ySImh8djpEso8Gq3NNTtBrLtKsNQ164OXHanXePwMyUwg5YojezRYXcUbL%2B%2BTabUFfYNH9Yqz73fMGkgWpgdJ%2BWExa9f4lqZS4xlXaLqD%2BhdPM%2F0rlfEg4lXBG7kapq37V7%2FXzXL5KEYV7hlKU38XNRTOvhwxJ9p4BQrNKsUwhlXEqFjCGioKNGUUwlPBrNxOo01lTH4xY%2FhX%2BCWM%2Bi5HUWt3DCqeCGutjxPCIyfnO4hXRn%2F6UJ6xxGAfh3e9tMwtvS%2BwAY6pgEWeYUpJSeMtt%2BpTH1kxVZhqPKs70d3EPUBaETmCY64mLZpcRdP0gDlYwRK%2F20u35Ag5cwNWZ8nitTuH5sD6bN3IR43k%2BEwMEP5Cl%2BWpssS%2BgJQ%2B1aL7SYTSQ6Rl1%2FQO%2FbplDTr2vH5eLmU4M0kSgxcdCmfknzas6NtwKN%2BTH6DOYsp%2Bm6aadka6ldkaClsQOxaUbREKpiyrZbB49iWNHEQrbanGN%2FZ&X-Amz-Signature=7206000e229594bd25a76c384cdd3cf22eed28130fa8b2025c468752d06bfeed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
