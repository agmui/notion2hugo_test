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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ADKGIA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEpnuoqnARWH1ZMbeltZqOtXtYz67X59zSUv8un5T1%2BAiADU%2BA9Ch92HmMFN0IIAurwayBTcq%2F3vOl20dCka5qUpCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqTSti10CgjsCnkl8KtwDGfWeTklaYao8cID%2FtUnWW7rQXIXHAbUJGOaoKKAtr%2Fxkwh0HlYpEaQYe1v3ZYQbQoCdlejKidAZYWugmEwX5CR4ULlJ51nvkkv71kb7ZaDEIt%2BGrMcGkcFcq5Pl6wZM8XMpmMQEtkbtCo%2Bszo3Bn49uXTWqhV%2FmhKIbfENvf0e18M%2BRm%2B4JjNs723wbBKb%2FS0NG5kkPI%2FXXrdG%2B83qBiu1R9H%2FZBQ2R%2BmtfjuGCxkvm1SyGwsPdzaHq0udtsPQChY9NzuGoEAcDDhEX06a0UF73M02iRKTIKZ8MbrtxOaKGSpy1c9ngLdMtxYbraCFjTvSWLhsTipP0S2dMDJN5H%2BXDnYTdxYipgKy1qEKOr%2FLny32MYR3ZH8ruwHDaA78cq3rcWeNWYAlmu1HEIBn4BOGVjcrXj88rup8L0K2KQf5e7QAnvxFNuMnQG%2FPeoKMW7dtLVX7RjRQ0lNqfHjtBLgW%2Brs0qVqJ7cR9FW8AnwpqgvObhOMd%2BuLQfldXQnHtfliIQ%2FRzXW%2FmCmIXyqMU8UkGe71NwF0oZcVVWTWp58OHUjkBB88sVE9XLMwarrmJeskMje0rG9vk03gHg75F%2FV%2BEBfVbHlXPsf4oy%2F2kQS44n%2BEv2LKQNpXZI4ahUwnub%2FvAY6pgHHU%2BdidD4VDZQ65PBWzwrT3o4kYfZ%2Ble3Q4p3u4QNgCLOb4d0XAngNDOIDvZfxLYaOrZ%2BRGD4GJS%2FjNjZnOfBcBOrflIGnvN69BLBKhgu4%2BnAKNdfKLSAxm%2FlWIknG%2Bb4HxbaFfWK8%2BO%2Bbe9s77xGPV8X8JIyeF6zKbtKhfI8wDBwHGMaHlKscKUC1eWZfoMtXjnimyAJPRGxNuUUYdI2GWTn1TzBx&X-Amz-Signature=c9dd7a42b62848da99dd386390a602ab4f2534457ea2daac56ebc90d06f20f43&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ADKGIA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEpnuoqnARWH1ZMbeltZqOtXtYz67X59zSUv8un5T1%2BAiADU%2BA9Ch92HmMFN0IIAurwayBTcq%2F3vOl20dCka5qUpCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqTSti10CgjsCnkl8KtwDGfWeTklaYao8cID%2FtUnWW7rQXIXHAbUJGOaoKKAtr%2Fxkwh0HlYpEaQYe1v3ZYQbQoCdlejKidAZYWugmEwX5CR4ULlJ51nvkkv71kb7ZaDEIt%2BGrMcGkcFcq5Pl6wZM8XMpmMQEtkbtCo%2Bszo3Bn49uXTWqhV%2FmhKIbfENvf0e18M%2BRm%2B4JjNs723wbBKb%2FS0NG5kkPI%2FXXrdG%2B83qBiu1R9H%2FZBQ2R%2BmtfjuGCxkvm1SyGwsPdzaHq0udtsPQChY9NzuGoEAcDDhEX06a0UF73M02iRKTIKZ8MbrtxOaKGSpy1c9ngLdMtxYbraCFjTvSWLhsTipP0S2dMDJN5H%2BXDnYTdxYipgKy1qEKOr%2FLny32MYR3ZH8ruwHDaA78cq3rcWeNWYAlmu1HEIBn4BOGVjcrXj88rup8L0K2KQf5e7QAnvxFNuMnQG%2FPeoKMW7dtLVX7RjRQ0lNqfHjtBLgW%2Brs0qVqJ7cR9FW8AnwpqgvObhOMd%2BuLQfldXQnHtfliIQ%2FRzXW%2FmCmIXyqMU8UkGe71NwF0oZcVVWTWp58OHUjkBB88sVE9XLMwarrmJeskMje0rG9vk03gHg75F%2FV%2BEBfVbHlXPsf4oy%2F2kQS44n%2BEv2LKQNpXZI4ahUwnub%2FvAY6pgHHU%2BdidD4VDZQ65PBWzwrT3o4kYfZ%2Ble3Q4p3u4QNgCLOb4d0XAngNDOIDvZfxLYaOrZ%2BRGD4GJS%2FjNjZnOfBcBOrflIGnvN69BLBKhgu4%2BnAKNdfKLSAxm%2FlWIknG%2Bb4HxbaFfWK8%2BO%2Bbe9s77xGPV8X8JIyeF6zKbtKhfI8wDBwHGMaHlKscKUC1eWZfoMtXjnimyAJPRGxNuUUYdI2GWTn1TzBx&X-Amz-Signature=7f732043b769d31fa357aa4216a76f33f847f655af801f1eb88d2ad11960d534&X-Amz-SignedHeaders=host&x-id=GetObject)

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
