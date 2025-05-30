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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UROPUB2T%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMbQWFhjOqDXVtm8vSiA5ORJSYkWRogOcVMGdikAw6zAiEA1IhFoFrLWXRAvsgWGHb8ZiayD8tV9HxQZTqohzKJo%2FwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPik9%2B1OUFOicSi9BCrcA3auxsmlTT4QCA9KWoS%2BDzS31C4Bjmh8vb818lGBJ2DhwX5QgDEzCMepoMgtsPwhNNfvbyfDMRc0Uw0lGBBDIWjpDVeinmQhaAz3Jbnp0QX6jFpE3tD3PbLCNOkh7khl8dHP75StwOTSXTgriuQXxth%2FPCBs%2FFYDAIBH6jnNhlilK4ZuJXmkIz8XDsGTEKcOc2zUAfiK3UjfBQ8MefTVfNUWedyVGL7871ObhdIYUcN4qX1Y5ANr5Z9uMDyVAtM6nscOu9K5fLOEPJK8ZNu%2F%2F%2B1RjiyyK%2F3aMRPdpb7YOLtEKdDU5qm0VQZCXSwlCZa5P3OAQlE3btRWoMNFiX8iyTToRBLjqkShvzzjOoigXkkUTke%2Bne3HqqPjbSnFxuAyyyTBqKrseciRIBCULcxrlNTkqbfopv4u0RzUdP5MPMnhbQT4rHL%2F8e8c7b%2FUOKemv52qphet3UcaSPtoFoYFtaQyw0SoFesqjOypz0BKewJNFoMlGFiXKU6eGvtqg6SmpgQPrHPgv0ixLE%2FjkOsvByNJCwE8sx92cI6LDdVJVyXImpXN9ddHcr3198o%2FaE1QvGKJFaPeSUdyZzUQMLldyyqdfaLuJwwr5aFY3Y3iiAJLyUJDTAkLcXdf02MeMIqm5sEGOqUBjhC5G8Nu92%2Fq0lv7t4m3AF3C3bmzR2IOZJ4%2FClw%2FlSHsqCpoXEuP9o64Yc9ffm8ErBHfwJD5OJhi4BtMeIMRvnK1%2Fwn7fVN5nb1XS7L83Zec4eXVvyYnXNGinpShQbWu099xZSdupslTOkRqskgJd7WztBVK2zjNJK7muU2cQtxLWRndPad2vJsJP%2BsSMwd5Up5pBX%2BALOzH2x9a8xUx7J08yuRk&X-Amz-Signature=c678a3defbe3df8367bd9fe595d8f16289b102b0148281cf64790718124ad7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UROPUB2T%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMbQWFhjOqDXVtm8vSiA5ORJSYkWRogOcVMGdikAw6zAiEA1IhFoFrLWXRAvsgWGHb8ZiayD8tV9HxQZTqohzKJo%2FwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPik9%2B1OUFOicSi9BCrcA3auxsmlTT4QCA9KWoS%2BDzS31C4Bjmh8vb818lGBJ2DhwX5QgDEzCMepoMgtsPwhNNfvbyfDMRc0Uw0lGBBDIWjpDVeinmQhaAz3Jbnp0QX6jFpE3tD3PbLCNOkh7khl8dHP75StwOTSXTgriuQXxth%2FPCBs%2FFYDAIBH6jnNhlilK4ZuJXmkIz8XDsGTEKcOc2zUAfiK3UjfBQ8MefTVfNUWedyVGL7871ObhdIYUcN4qX1Y5ANr5Z9uMDyVAtM6nscOu9K5fLOEPJK8ZNu%2F%2F%2B1RjiyyK%2F3aMRPdpb7YOLtEKdDU5qm0VQZCXSwlCZa5P3OAQlE3btRWoMNFiX8iyTToRBLjqkShvzzjOoigXkkUTke%2Bne3HqqPjbSnFxuAyyyTBqKrseciRIBCULcxrlNTkqbfopv4u0RzUdP5MPMnhbQT4rHL%2F8e8c7b%2FUOKemv52qphet3UcaSPtoFoYFtaQyw0SoFesqjOypz0BKewJNFoMlGFiXKU6eGvtqg6SmpgQPrHPgv0ixLE%2FjkOsvByNJCwE8sx92cI6LDdVJVyXImpXN9ddHcr3198o%2FaE1QvGKJFaPeSUdyZzUQMLldyyqdfaLuJwwr5aFY3Y3iiAJLyUJDTAkLcXdf02MeMIqm5sEGOqUBjhC5G8Nu92%2Fq0lv7t4m3AF3C3bmzR2IOZJ4%2FClw%2FlSHsqCpoXEuP9o64Yc9ffm8ErBHfwJD5OJhi4BtMeIMRvnK1%2Fwn7fVN5nb1XS7L83Zec4eXVvyYnXNGinpShQbWu099xZSdupslTOkRqskgJd7WztBVK2zjNJK7muU2cQtxLWRndPad2vJsJP%2BsSMwd5Up5pBX%2BALOzH2x9a8xUx7J08yuRk&X-Amz-Signature=daaa273b85a6cfcd267073bbfe1b5d9db06d291481b04df397a0ea3c4d0b83d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
