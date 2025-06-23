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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGQ3JYZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIASS%2B6RrAgDqeRnYIcvDAgfNuENWEZGs6XZk79%2Fp1HXRAiALKomvh%2BEdrvU6GreWCJlktK5Q%2FP5dFjjiH9NdM6Av%2ByqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGuz9jaiSCsiL1qOKtwDs2gz3aG%2BR5Dzslz3dCuVmt6JiMjsBYyNuvpJM0yCjhz6bgyuq1yyLsgxetXXnkZ0641GEtDn%2B89Ltcekyk8giUFdWnulX9XMCFSykBeIVhIgb3UiG70VOgayqdpXouJsDL9qi75IVJGjgbbqMsD5FmlcifqenT%2FsXakObHKbRpLEaPBOrBnO0cXLfO4JL5qpj8xNBLMsAxAnWDjvs51aJbU5iK4AQNnQ%2BAke%2BRC4y09Gt7Px8D83t9wxFPmL%2Bwd398Jlwea8KehkTTCaLQhR5o5DIfAUSzx7rYbCIQF0%2BpX3J%2B8o9NiGc3I7r3rPlnZ%2FTrTPws%2F0rWj3yDabNABhr%2BUyvoDy4Ce8i10HqWGZtif97Kn9o2TlU0kSRqEEX%2BIu3spuJMjUiA0SR%2BCnzuh20mxb2DC0Mf%2BdyGZTZ9ARCUZOW5vTQ8QLdU83TpxPOfQZWtGhlLzXLCTsE7nyLNIhYTLo0Bcjmxk2OtCGr6xfJI0RWSN1cKTdDevV%2BaIVhcjvvSd76b%2FlpPVpERoZ76azL81Koh5PYbP9PcKa0%2FS%2FNQdsgBeh2Awmwjz26fHxhUAqzWmN3CC3Yewe4WY19%2BPGTwzlxdL3kEVje7Kj2uKwAGG918FktPllmDbqVcIw26fiwgY6pgF76AggOZ67NTsfRIS%2BnbSBRJN7hYMW6pUvC4Hm7CMoIzv4v9IzMx1wpF%2FR06AGmCIC713Y6qPSznVdiSsFgNytAiUGzt4YEV5bD5HU0qOxtIC49CYnoArf0EdC3%2FkYmSkUgi%2Fs5MUg%2FUk0j1P0BMmxVt%2F59NBAW0t1AtMQq%2Buh7MvpkITpAJrZnOgQn6PJETSxRhf1hF5L0yG5BwA0IhQvUMJYvUuw&X-Amz-Signature=c44e09b44d069b5a4164a4a54e109651fbcbc30450dd5d189e8effea69d116ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGQ3JYZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIASS%2B6RrAgDqeRnYIcvDAgfNuENWEZGs6XZk79%2Fp1HXRAiALKomvh%2BEdrvU6GreWCJlktK5Q%2FP5dFjjiH9NdM6Av%2ByqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGuz9jaiSCsiL1qOKtwDs2gz3aG%2BR5Dzslz3dCuVmt6JiMjsBYyNuvpJM0yCjhz6bgyuq1yyLsgxetXXnkZ0641GEtDn%2B89Ltcekyk8giUFdWnulX9XMCFSykBeIVhIgb3UiG70VOgayqdpXouJsDL9qi75IVJGjgbbqMsD5FmlcifqenT%2FsXakObHKbRpLEaPBOrBnO0cXLfO4JL5qpj8xNBLMsAxAnWDjvs51aJbU5iK4AQNnQ%2BAke%2BRC4y09Gt7Px8D83t9wxFPmL%2Bwd398Jlwea8KehkTTCaLQhR5o5DIfAUSzx7rYbCIQF0%2BpX3J%2B8o9NiGc3I7r3rPlnZ%2FTrTPws%2F0rWj3yDabNABhr%2BUyvoDy4Ce8i10HqWGZtif97Kn9o2TlU0kSRqEEX%2BIu3spuJMjUiA0SR%2BCnzuh20mxb2DC0Mf%2BdyGZTZ9ARCUZOW5vTQ8QLdU83TpxPOfQZWtGhlLzXLCTsE7nyLNIhYTLo0Bcjmxk2OtCGr6xfJI0RWSN1cKTdDevV%2BaIVhcjvvSd76b%2FlpPVpERoZ76azL81Koh5PYbP9PcKa0%2FS%2FNQdsgBeh2Awmwjz26fHxhUAqzWmN3CC3Yewe4WY19%2BPGTwzlxdL3kEVje7Kj2uKwAGG918FktPllmDbqVcIw26fiwgY6pgF76AggOZ67NTsfRIS%2BnbSBRJN7hYMW6pUvC4Hm7CMoIzv4v9IzMx1wpF%2FR06AGmCIC713Y6qPSznVdiSsFgNytAiUGzt4YEV5bD5HU0qOxtIC49CYnoArf0EdC3%2FkYmSkUgi%2Fs5MUg%2FUk0j1P0BMmxVt%2F59NBAW0t1AtMQq%2Buh7MvpkITpAJrZnOgQn6PJETSxRhf1hF5L0yG5BwA0IhQvUMJYvUuw&X-Amz-Signature=1ae15d19b43450c01af5216c44f1a4e6e2aa4a30166a73cdeaf3b942f0a3aeb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
