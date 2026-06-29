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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOCWMDP%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFahfMoHV2KCZdj5QwJRlZLMb1nXClygRa7P3ZMjScdtAiBSdP2UNPv9kfdGnF48xJ5%2BzPYuXy0y8ugcussuu%2FL6JyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbMAcWHmhm86ayLgTKtwDaugYV9XQ8WrfuOUTvbzFMFEWciTHms5vgfQmMBV%2FHyno90tNfNsStUaZ5ynh9HkHq3e3tpLJndiCrPn05MxwoIBP%2FVjHjeLdu%2BOG9tAQMGAwgz17UV43cVbdfT7puMzvF3BcuZRP9fVTytECbrDa46SOWDbAHhkt9kN1Yu1J4JW4Q1FIZW0ZRlOG28tilST1zlqnZcj2KAS8yrt8WSRzQvWMsLRzNHK1K8eYV37qw8m%2BtpE4wNnvQpeGjfYsOhogK2pJDU10euEDDICt9Q8i2TgIIG2%2F2xBeWO%2BfKz88ATbE0e0%2Fzg%2FoJFSFmdZWCeIWeMehz8Tmih5QKiZuxYghhKV4pew9iQ2P68oLR0VqUc%2FNyh8Gn%2BdZ7NXNWh1TEloxPGvzc9ZG7dC9ZuwT5VlQFHyFZXS3xhQCLXyx9gWT11brkXQLamuvbv5lzN27fZ%2BeCP1N4nVgomDkbO09Ql7DFTx%2FAo%2FHptMjBo0Dhr%2FyvBAcPUmMibrWfuXrOkxVhwU%2BCRnTCyuhhbsJyZz4U7DhheZp3rfnfOG03cYXQOyGHNBM0nKtkLr4De1YzXAayyNvy%2BEbpix%2FQ2qRmWQsgbKk3WndCmSJu2RMVdoIm%2BSohH4UvjK6C%2B40aQ5aIx4wwdaH0gY6pgGD3crh7i2toMKk9m5ko3LbOKHsdjDbaAEVcwxkDKSgz2wKKJ7oIbRrudC%2FFTH2Ve3aXdY1MP%2BRjmaeGCk0tLEbll5ngT%2FLZusH8PX%2B0Uj%2FTCcJ4apV31EwQJxXdjcz4zgCqxen3QhjDSThCtVAZhtkzq%2BYqas28fhc%2BJcnXZXlbWAOZBECrH9evcQT51R%2Bw9ralBn1cj9pgb9H7h%2B4dbR0AHN%2BJl0v&X-Amz-Signature=be5a01d2af2c37a3933619adf81a39ed094d475507845ea379018da27f215caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOCWMDP%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFahfMoHV2KCZdj5QwJRlZLMb1nXClygRa7P3ZMjScdtAiBSdP2UNPv9kfdGnF48xJ5%2BzPYuXy0y8ugcussuu%2FL6JyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbMAcWHmhm86ayLgTKtwDaugYV9XQ8WrfuOUTvbzFMFEWciTHms5vgfQmMBV%2FHyno90tNfNsStUaZ5ynh9HkHq3e3tpLJndiCrPn05MxwoIBP%2FVjHjeLdu%2BOG9tAQMGAwgz17UV43cVbdfT7puMzvF3BcuZRP9fVTytECbrDa46SOWDbAHhkt9kN1Yu1J4JW4Q1FIZW0ZRlOG28tilST1zlqnZcj2KAS8yrt8WSRzQvWMsLRzNHK1K8eYV37qw8m%2BtpE4wNnvQpeGjfYsOhogK2pJDU10euEDDICt9Q8i2TgIIG2%2F2xBeWO%2BfKz88ATbE0e0%2Fzg%2FoJFSFmdZWCeIWeMehz8Tmih5QKiZuxYghhKV4pew9iQ2P68oLR0VqUc%2FNyh8Gn%2BdZ7NXNWh1TEloxPGvzc9ZG7dC9ZuwT5VlQFHyFZXS3xhQCLXyx9gWT11brkXQLamuvbv5lzN27fZ%2BeCP1N4nVgomDkbO09Ql7DFTx%2FAo%2FHptMjBo0Dhr%2FyvBAcPUmMibrWfuXrOkxVhwU%2BCRnTCyuhhbsJyZz4U7DhheZp3rfnfOG03cYXQOyGHNBM0nKtkLr4De1YzXAayyNvy%2BEbpix%2FQ2qRmWQsgbKk3WndCmSJu2RMVdoIm%2BSohH4UvjK6C%2B40aQ5aIx4wwdaH0gY6pgGD3crh7i2toMKk9m5ko3LbOKHsdjDbaAEVcwxkDKSgz2wKKJ7oIbRrudC%2FFTH2Ve3aXdY1MP%2BRjmaeGCk0tLEbll5ngT%2FLZusH8PX%2B0Uj%2FTCcJ4apV31EwQJxXdjcz4zgCqxen3QhjDSThCtVAZhtkzq%2BYqas28fhc%2BJcnXZXlbWAOZBECrH9evcQT51R%2Bw9ralBn1cj9pgb9H7h%2B4dbR0AHN%2BJl0v&X-Amz-Signature=94fee785deb98a099c3da2f0e65dd88ef1b2196a52b8a66791f2f715e93d2e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
