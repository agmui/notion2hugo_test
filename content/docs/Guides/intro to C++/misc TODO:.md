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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSHYQYLX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVuiVeieVDq5S%2B%2Fa2lOnVfquPYWSKsIq8mvjkffLZ0IAiBfJNRF63HQcIkyJtO4GlTjS4CEDrBWhTVQEZbfH8xNsSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMx5RAUFSAB15ZX6R%2BKtwDDzFapyAI2DtgYXmPSwkXRQSXjQguCts%2BccP2I6ucJSIXXdUbZJ1G93A%2FT7LgQ9xm2yWhCBg6jDewkwiEFELFQvj0a%2Fj0UxEw%2BDkP6q3tsMb4J4Y4bPvatJNWfSPhbNOC9SA%2Bgkum7g21dBxfPllX6yOvHm9kLBzyJh8x32qSBBq5y2NEoM58JzbXKs%2BvbE0yQw6i6YRn2SlE4gWJLiuvYcq%2FZIQ6JTwkm7qMS%2FnsdI1EzsdQMx%2Fa%2FJEWND%2BXRQjo1%2BZBtMWTgGmRjAAHACiu4edhpZRBlkhPcVgLfwjjkpUC10AUetNDM%2B%2F11G4giXh3m1xb3PUMZJaPmyxCB0ibOP8Ciyndr5GKIlmazfmpQ5eYM22VAzhF81caqIddGqXj%2Fn4Mq%2BdBXe%2BXUCrVybSFwp%2BwvjGYVJLN6Id7D0YQGZQddyLWc9gtGyEWgpVVJOqrHm9zDa3RK1GTTlmqB%2ByPIkrqW3px6tqUC1peI22i44kKtPGgQteF5y5eOSCr2kD69YNty1xmPzOKAJYh3TkAyzgAjev8r9zTDLD16qKmpIOf4N5DilBpfW%2BJSwz5CPz6ihbDtz0oDAD1UwN5MGKPU%2Boovy4pKLrKhE6NCpOtUCEsRZeT8i5mvC%2B089owkMviwAY6pgFaQ3c5Pg0xRWEpSpyn2%2BkgXgwz4iPWk2M3pdjHIs2zFgxkpxhOiBuomwZpb6LmJ94HQUSdv3UbxZYhByBWfb7Xe83ePmB0u6tci5egumdnA8odfWmFZYgmgA4wiHfw%2BHioCpzgdpZmq5QyR1%2BXqwIym%2BXKBHCTL30G%2FSdW695UNyk2p6B%2BSzWIMX1vgbLXJBtWiOWrZ9Dm5Fq3uJOHO%2Bw7Dpxo0djy&X-Amz-Signature=51e7475453829faa5c37a21e0cc6e642cf0a02a2adf551067f02fd812d9e87a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSHYQYLX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVuiVeieVDq5S%2B%2Fa2lOnVfquPYWSKsIq8mvjkffLZ0IAiBfJNRF63HQcIkyJtO4GlTjS4CEDrBWhTVQEZbfH8xNsSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMx5RAUFSAB15ZX6R%2BKtwDDzFapyAI2DtgYXmPSwkXRQSXjQguCts%2BccP2I6ucJSIXXdUbZJ1G93A%2FT7LgQ9xm2yWhCBg6jDewkwiEFELFQvj0a%2Fj0UxEw%2BDkP6q3tsMb4J4Y4bPvatJNWfSPhbNOC9SA%2Bgkum7g21dBxfPllX6yOvHm9kLBzyJh8x32qSBBq5y2NEoM58JzbXKs%2BvbE0yQw6i6YRn2SlE4gWJLiuvYcq%2FZIQ6JTwkm7qMS%2FnsdI1EzsdQMx%2Fa%2FJEWND%2BXRQjo1%2BZBtMWTgGmRjAAHACiu4edhpZRBlkhPcVgLfwjjkpUC10AUetNDM%2B%2F11G4giXh3m1xb3PUMZJaPmyxCB0ibOP8Ciyndr5GKIlmazfmpQ5eYM22VAzhF81caqIddGqXj%2Fn4Mq%2BdBXe%2BXUCrVybSFwp%2BwvjGYVJLN6Id7D0YQGZQddyLWc9gtGyEWgpVVJOqrHm9zDa3RK1GTTlmqB%2ByPIkrqW3px6tqUC1peI22i44kKtPGgQteF5y5eOSCr2kD69YNty1xmPzOKAJYh3TkAyzgAjev8r9zTDLD16qKmpIOf4N5DilBpfW%2BJSwz5CPz6ihbDtz0oDAD1UwN5MGKPU%2Boovy4pKLrKhE6NCpOtUCEsRZeT8i5mvC%2B089owkMviwAY6pgFaQ3c5Pg0xRWEpSpyn2%2BkgXgwz4iPWk2M3pdjHIs2zFgxkpxhOiBuomwZpb6LmJ94HQUSdv3UbxZYhByBWfb7Xe83ePmB0u6tci5egumdnA8odfWmFZYgmgA4wiHfw%2BHioCpzgdpZmq5QyR1%2BXqwIym%2BXKBHCTL30G%2FSdW695UNyk2p6B%2BSzWIMX1vgbLXJBtWiOWrZ9Dm5Fq3uJOHO%2Bw7Dpxo0djy&X-Amz-Signature=2e36fb944097ef42dc44ab34fe8885364ccb31c9e584be699ea85ca9f1099c47&X-Amz-SignedHeaders=host&x-id=GetObject)

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
