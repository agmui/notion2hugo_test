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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU54P4AL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF1gm9%2Fh%2BqKX7tWv8HMCT4AgoxwbPQXgh34%2F9JouESsvAiAiPKyrbGHTD1Dw%2BknNtMAXKtxVF9EGquZKouWcFdco7yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyNUk3hJiA3iH559JKtwDMAtEhc8SQy32IJNc1EoPY0s5MQd4K9AgEAqTxgLeEtvXWDmb1TbGNe8Shxq7BJvH%2BpGuFQf19KVcoho3s7IP%2F9RLSGgnBBbyZDVZ0sw09s8TmaG2Yu%2BqcW9%2FZVERa%2BT7jRJ%2F7g6L2El1If8TZ182YVy0MExkgp8t3V39neyo6HLZL8gvg03ADmcrZzhc%2BH1da1KAvGfZSQqOvdcHwV3TygTX7gcdUURLT2QqVgIYh8koik7Ia239RZSM578tdY2AVgF2h9slb7yzfiXcZK2L1WahsEIy0sjQCD5mvk6FycBA9Ak9oMf2pvP3eIYaAoql34AVxQdPtKsd2XrGM9SzZoxzjoU61%2F2mYS6JxBtsmKKJKAaXy%2FeyABlZoj%2FjVeBVirWrJYU3rkUxu2T5d2yrZGPkB%2F3QkNHlienCYOm28njxE6fyXDN%2BicU2sBKSO5AdkH3Pgas2XdIrKHVOW6SEi0LPbUNc0l7tqKAIdRbqN63xosxcrKXZnSwrFzixGO6SiJKA0er4dArG0OGOU%2FzzgjI%2FH5QmZ3qriVvzZE%2FBuiOVglpCLClrf48nQvF%2BjVtBbNJsVNHroaMu2A0%2BTOiXU4rakCOiUBNK0G5%2BUFwDOmmDE8wyTfO%2BQTJ40sIwnuXqwwY6pgFyO0BOP2qkm%2BZMSF%2B7vVVAgRfKxZF5AkJlgHRIdzad%2B7Jf4gKYFvMubhxe1AxxoDvurK%2FadzlOD%2FlU62KulrxkVru1PscznZFrkYOcAHMetrytwsurqBtazXxe3mzqpUtIL2XzjBeI9WlUT27di2WSn6tmIz5I0n2xfQRm86RuQOjVpGg82tkc4pY2vgvW8llPi6AjQjCcndZwkeOCH0GEH3TMSieZ&X-Amz-Signature=ec3cf9e034c03a6e7246635b64ce6e1cbdec26fe53e30bd5475bd5fa17d68071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU54P4AL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF1gm9%2Fh%2BqKX7tWv8HMCT4AgoxwbPQXgh34%2F9JouESsvAiAiPKyrbGHTD1Dw%2BknNtMAXKtxVF9EGquZKouWcFdco7yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyNUk3hJiA3iH559JKtwDMAtEhc8SQy32IJNc1EoPY0s5MQd4K9AgEAqTxgLeEtvXWDmb1TbGNe8Shxq7BJvH%2BpGuFQf19KVcoho3s7IP%2F9RLSGgnBBbyZDVZ0sw09s8TmaG2Yu%2BqcW9%2FZVERa%2BT7jRJ%2F7g6L2El1If8TZ182YVy0MExkgp8t3V39neyo6HLZL8gvg03ADmcrZzhc%2BH1da1KAvGfZSQqOvdcHwV3TygTX7gcdUURLT2QqVgIYh8koik7Ia239RZSM578tdY2AVgF2h9slb7yzfiXcZK2L1WahsEIy0sjQCD5mvk6FycBA9Ak9oMf2pvP3eIYaAoql34AVxQdPtKsd2XrGM9SzZoxzjoU61%2F2mYS6JxBtsmKKJKAaXy%2FeyABlZoj%2FjVeBVirWrJYU3rkUxu2T5d2yrZGPkB%2F3QkNHlienCYOm28njxE6fyXDN%2BicU2sBKSO5AdkH3Pgas2XdIrKHVOW6SEi0LPbUNc0l7tqKAIdRbqN63xosxcrKXZnSwrFzixGO6SiJKA0er4dArG0OGOU%2FzzgjI%2FH5QmZ3qriVvzZE%2FBuiOVglpCLClrf48nQvF%2BjVtBbNJsVNHroaMu2A0%2BTOiXU4rakCOiUBNK0G5%2BUFwDOmmDE8wyTfO%2BQTJ40sIwnuXqwwY6pgFyO0BOP2qkm%2BZMSF%2B7vVVAgRfKxZF5AkJlgHRIdzad%2B7Jf4gKYFvMubhxe1AxxoDvurK%2FadzlOD%2FlU62KulrxkVru1PscznZFrkYOcAHMetrytwsurqBtazXxe3mzqpUtIL2XzjBeI9WlUT27di2WSn6tmIz5I0n2xfQRm86RuQOjVpGg82tkc4pY2vgvW8llPi6AjQjCcndZwkeOCH0GEH3TMSieZ&X-Amz-Signature=0340fb8016585d8f222fc908d7297f52f3bcc14a5523bc04dab4de8a58d673e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
