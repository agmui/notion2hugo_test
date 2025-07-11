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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6DATQY%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEv52GPXPJ1ah8DH6BA8H8sQO2P%2Beh65iOOsYdSW1lOZAiAzAOYB5VOLf1FlJDPFJ%2FCUi9ktog%2BgLaUWhx9io%2B56VyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6A2J1gfl4iOLugicKtwDtmvSvx2Tr0HEua4%2BSUaaoZCgbe%2FgsAefv6GAskNyX0rgI4E%2FJzD5V74netmtFPdG1aFL45AL3kcKu0emX2yOO6A%2B5RUQM5qIR2P2su92Il9vWulQgjPSAijZDoE2%2FQ47Ja5M4sRaXbFLC4Rnbi5KXe2YLs39VBLnPwW6fjDlJ%2FZK1fd0WRkPm2K4iA3JgqxcyfzCR6FwS9keO7S1FhiVpD%2BLNrFvaRw2HZ9DWiVsuD7rWjCP0ac4CWakmrhoDbb7%2FulQNDXyyvjyKtHLO7g1ZhVvtkWggHCxoE806taZ9jjamjmHm6Eb%2FTF3jL6419yBNnPAdPba43c5XpGCZf%2BUAx6M3wW42%2FUIxEc9pmya0fvZvJzDd7LCuyvEqvvor0%2Fbi8XV9P25l95483P3kU5efzbC1SLm1Xfz3GkrSYAAH7JZKo6YygffN4fn7jyS1ELav2Pf96rWXwk3Woi%2FRMgxqXU6oAnNUA9k0GJ9eQHnUpGGNsmrl9JF0wGhYFCHvxEKlVKQPG%2Bmd4KvIY%2FxlmuVuADqDm5o9B2TwMjsaOH4%2FsLhDuWMt7kzspZ%2BRViXCm7EPElXDc4aIzQaHdWSBmAuvvRPicVPPcMhz01%2F%2Fj19J794Pktt%2Fam%2Bjgwej48whM7AwwY6pgH%2BSTXuaQpBbSHrwxnsAi%2Byvzx5W7%2Bu7OEWgsKowbndteP4JjOb2HcbIj26wcMVqxpuNzTspITqEXeEx3FdfCLID%2F1Uo8BcVfwzw%2FVBpgsLMjMZWli47WimYp7V7gwkkupW7B5aCNDl9ZcwIGKOhVuLcdbf1qv%2Ft9IT7G8XwDCaEFb8%2FVrnAZphSPH3fBunDgvXDKUmvI9VTt%2F6Xhoo8YOnebwfEt9q&X-Amz-Signature=9bb0d4d7a75c96d92c9569a0e2962bd4f6989b26a79cbb9b19f7b0eff6ef5c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6DATQY%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEv52GPXPJ1ah8DH6BA8H8sQO2P%2Beh65iOOsYdSW1lOZAiAzAOYB5VOLf1FlJDPFJ%2FCUi9ktog%2BgLaUWhx9io%2B56VyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6A2J1gfl4iOLugicKtwDtmvSvx2Tr0HEua4%2BSUaaoZCgbe%2FgsAefv6GAskNyX0rgI4E%2FJzD5V74netmtFPdG1aFL45AL3kcKu0emX2yOO6A%2B5RUQM5qIR2P2su92Il9vWulQgjPSAijZDoE2%2FQ47Ja5M4sRaXbFLC4Rnbi5KXe2YLs39VBLnPwW6fjDlJ%2FZK1fd0WRkPm2K4iA3JgqxcyfzCR6FwS9keO7S1FhiVpD%2BLNrFvaRw2HZ9DWiVsuD7rWjCP0ac4CWakmrhoDbb7%2FulQNDXyyvjyKtHLO7g1ZhVvtkWggHCxoE806taZ9jjamjmHm6Eb%2FTF3jL6419yBNnPAdPba43c5XpGCZf%2BUAx6M3wW42%2FUIxEc9pmya0fvZvJzDd7LCuyvEqvvor0%2Fbi8XV9P25l95483P3kU5efzbC1SLm1Xfz3GkrSYAAH7JZKo6YygffN4fn7jyS1ELav2Pf96rWXwk3Woi%2FRMgxqXU6oAnNUA9k0GJ9eQHnUpGGNsmrl9JF0wGhYFCHvxEKlVKQPG%2Bmd4KvIY%2FxlmuVuADqDm5o9B2TwMjsaOH4%2FsLhDuWMt7kzspZ%2BRViXCm7EPElXDc4aIzQaHdWSBmAuvvRPicVPPcMhz01%2F%2Fj19J794Pktt%2Fam%2Bjgwej48whM7AwwY6pgH%2BSTXuaQpBbSHrwxnsAi%2Byvzx5W7%2Bu7OEWgsKowbndteP4JjOb2HcbIj26wcMVqxpuNzTspITqEXeEx3FdfCLID%2F1Uo8BcVfwzw%2FVBpgsLMjMZWli47WimYp7V7gwkkupW7B5aCNDl9ZcwIGKOhVuLcdbf1qv%2Ft9IT7G8XwDCaEFb8%2FVrnAZphSPH3fBunDgvXDKUmvI9VTt%2F6Xhoo8YOnebwfEt9q&X-Amz-Signature=4ebc678b8fe13c63003c61e7d445d177e65de07844af2edfd13d6018cb155098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
