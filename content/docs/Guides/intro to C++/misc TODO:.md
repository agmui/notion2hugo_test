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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJLND7D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCZ%2B117kwFiJZJ%2BtJf%2FTGud8FX5WPsBmh954G5gI9CtUQIhAKe5jqu7AYss8jcAXVjzBJGJ9bQX4XR%2BChWuPCj5PevEKv8DCBYQABoMNjM3NDIzMTgzODA1IgwBSyXpHbSCNnSn0Roq3AMMPF%2FyrfjtvVOzQekgjhKiHkjKcEnVrN8BnpPMesx%2B321ZWGqluPMn%2F7wPVXe%2FAfw%2BqmL6FL0xad5oG6kOhxpa1dnF2vzbsLal1s%2B9XeO1MSmTmsBIodw%2FAPvdjaCV%2BNcWEbjTxTyceBA%2Fq4I7unhQWeltxbLPoVFqAeGtT%2BnAau%2B8Zi2Uknjqbqpnelek8JR0lMhvkIIVjerFvKVnrILnPBkrdZwaWJvHhD2y6smbuLswcVqcNbdhVpsPz7BNF65UMQ2i9PCcTv04jUrpj7qljTwJuLsE32lld%2BOTrO69fLKMLKp6JcDHPpTTLNEALY4uEvujJd6Mp23LCdvDWv%2F5wS2YJ%2Bk3VX%2BxEgo3EEKaJt2ibLnXem8qXsGW1oOa761LHGEN%2B70eQeoLPqBRm8mlPsxeb%2BKOG5q58nEqmQThJL2GsdndW73RASh3deGtZlgGK1pMOLbUtQ%2BCk4Zc%2BWmyZRoI3RDrSSd7mTeiFiPppxPto9AHzsYbN%2FLo9xGQBBMbqUjG43uPvx7ga33V%2BYfuR7cQ0N8FtfF4YRi0VEQJbMGdMr7Vb%2BC3jChWDn%2BKKiTdTYY0qPLbzhGxrPevoklGhNHpBIXKjBHRLYq%2F2usEWbtFXgH085LIlePmkDDds7DCBjqkAela%2F5AuRflZogzTsURWznbZ8R1y8uonhoWgf17qt0aFiFi4sJntrUdY0A6jaq1NILCAobDyh2kta2p289E7s3MtB7LBltMqqjLD995O%2BHIAAqL6XZjS%2FY33kVEa6G3xrMXeB6zNMFUSAIWJ5gdF%2Bwx7NckqTcYsoGVwVWYrnjZW86G5SzEHw%2BOqlbj25E7TIi4hjbeocijMCxenaSBaMkKSWH4j&X-Amz-Signature=7734b753e9942b7d39e8d0c2dadaad3026bf0c3bca83f9408981a32c991423ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLJLND7D%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCZ%2B117kwFiJZJ%2BtJf%2FTGud8FX5WPsBmh954G5gI9CtUQIhAKe5jqu7AYss8jcAXVjzBJGJ9bQX4XR%2BChWuPCj5PevEKv8DCBYQABoMNjM3NDIzMTgzODA1IgwBSyXpHbSCNnSn0Roq3AMMPF%2FyrfjtvVOzQekgjhKiHkjKcEnVrN8BnpPMesx%2B321ZWGqluPMn%2F7wPVXe%2FAfw%2BqmL6FL0xad5oG6kOhxpa1dnF2vzbsLal1s%2B9XeO1MSmTmsBIodw%2FAPvdjaCV%2BNcWEbjTxTyceBA%2Fq4I7unhQWeltxbLPoVFqAeGtT%2BnAau%2B8Zi2Uknjqbqpnelek8JR0lMhvkIIVjerFvKVnrILnPBkrdZwaWJvHhD2y6smbuLswcVqcNbdhVpsPz7BNF65UMQ2i9PCcTv04jUrpj7qljTwJuLsE32lld%2BOTrO69fLKMLKp6JcDHPpTTLNEALY4uEvujJd6Mp23LCdvDWv%2F5wS2YJ%2Bk3VX%2BxEgo3EEKaJt2ibLnXem8qXsGW1oOa761LHGEN%2B70eQeoLPqBRm8mlPsxeb%2BKOG5q58nEqmQThJL2GsdndW73RASh3deGtZlgGK1pMOLbUtQ%2BCk4Zc%2BWmyZRoI3RDrSSd7mTeiFiPppxPto9AHzsYbN%2FLo9xGQBBMbqUjG43uPvx7ga33V%2BYfuR7cQ0N8FtfF4YRi0VEQJbMGdMr7Vb%2BC3jChWDn%2BKKiTdTYY0qPLbzhGxrPevoklGhNHpBIXKjBHRLYq%2F2usEWbtFXgH085LIlePmkDDds7DCBjqkAela%2F5AuRflZogzTsURWznbZ8R1y8uonhoWgf17qt0aFiFi4sJntrUdY0A6jaq1NILCAobDyh2kta2p289E7s3MtB7LBltMqqjLD995O%2BHIAAqL6XZjS%2FY33kVEa6G3xrMXeB6zNMFUSAIWJ5gdF%2Bwx7NckqTcYsoGVwVWYrnjZW86G5SzEHw%2BOqlbj25E7TIi4hjbeocijMCxenaSBaMkKSWH4j&X-Amz-Signature=b60398bfb7723077c81ecf265fa6e79e14dbc1acbfd19fdcbff234e9e6263868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
