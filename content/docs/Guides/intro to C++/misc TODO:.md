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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3TKLTY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh1nXZmRFad9qSbOJ%2FgcSemtzhtYeeCPJCoOzu%2Fn1QcAiAk8c8GajwfpKdAvDq3MwElgU5Nwni9489eKQRW2e2zZSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHa%2FYVLKqX0j4gGlgKtwD3nsYeC%2FzkcwRvyKRhrdgX%2BMTskK4OOmnEkLvSKASRclGy1WqeiQEhsv9a2cjtGO6oL7F15vHV5DVP0GmyAEwUqb%2F3i2ilYn%2F68awGfq9sWiKzQfGqNYl%2FwLRyZcZeeBwuF7bV2PFLagxw2IrxT1RpAE0P6YQG%2BbWt6m%2Ff%2BiUudv%2FTcHK8ny3XLWEkQJwt7cKmHuV2fdIRxBbxMmquPoUROii0ggyRkSmnR%2Bbt9Mc9k97bk5iYfqmIXwZOkg4FfN41NUDX6w7zZszz0Jlw6ofIF52DFwPWf3%2B0uIBjbH5cth68Ghkx0eAz2mnJu1y5gSSPB38uBaZH3DnWwd7wVBUnoW7QD68cN%2BYN5rGheu2fmcCyigdk7xA7NOP3LOuvYj3Du219jtK7BzVbM8%2F9lvuUbJt073wErM2MufnMIJLH%2FJmZrNk%2BXcv1tN17xjUlq5IjuboijfVYVPWBDHDjaR5ccjYOZZH7gi%2BtWGJb1cHYmMROEaoklyQDNluMtPuQRyKV1rly2eYe1xddg7p8lA%2Bq0KaAlKKMe8acy0tyDWlflY4oRnoFlfwb%2FklWU5Rn6rCB5drNzrOWvh6wVEFpTEWqFtc7oKQ7NyIJ4q1%2FKm4nNoGQwideyei9NhvxvIw6MWj1AY6pgGaZCbzQpcRp4O07gXU0l9VYKtDCoq9folpTZRNhQNz0k%2FLfYgYjoDmpJLqCFNyIFB7HDYigNrvFsdILczZOtqcaXrj4SB5KZNfNNFLhFcrlaA9Qf602y6hdBlBR%2BUpwJLSpImYWy1LwFfl91WNfAivuHQO8eH3NBjzdFbESBbIt9fRKz9vfCGCJoAMIWKJLmTT6AW%2FL4CPYK5BMfVHcHgfRTOTtgV9&X-Amz-Signature=ce4863e29a8139b1cd2bf9a682e837bb1d088c4a3affe19977e89cd0a868fccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3TKLTY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBh1nXZmRFad9qSbOJ%2FgcSemtzhtYeeCPJCoOzu%2Fn1QcAiAk8c8GajwfpKdAvDq3MwElgU5Nwni9489eKQRW2e2zZSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHa%2FYVLKqX0j4gGlgKtwD3nsYeC%2FzkcwRvyKRhrdgX%2BMTskK4OOmnEkLvSKASRclGy1WqeiQEhsv9a2cjtGO6oL7F15vHV5DVP0GmyAEwUqb%2F3i2ilYn%2F68awGfq9sWiKzQfGqNYl%2FwLRyZcZeeBwuF7bV2PFLagxw2IrxT1RpAE0P6YQG%2BbWt6m%2Ff%2BiUudv%2FTcHK8ny3XLWEkQJwt7cKmHuV2fdIRxBbxMmquPoUROii0ggyRkSmnR%2Bbt9Mc9k97bk5iYfqmIXwZOkg4FfN41NUDX6w7zZszz0Jlw6ofIF52DFwPWf3%2B0uIBjbH5cth68Ghkx0eAz2mnJu1y5gSSPB38uBaZH3DnWwd7wVBUnoW7QD68cN%2BYN5rGheu2fmcCyigdk7xA7NOP3LOuvYj3Du219jtK7BzVbM8%2F9lvuUbJt073wErM2MufnMIJLH%2FJmZrNk%2BXcv1tN17xjUlq5IjuboijfVYVPWBDHDjaR5ccjYOZZH7gi%2BtWGJb1cHYmMROEaoklyQDNluMtPuQRyKV1rly2eYe1xddg7p8lA%2Bq0KaAlKKMe8acy0tyDWlflY4oRnoFlfwb%2FklWU5Rn6rCB5drNzrOWvh6wVEFpTEWqFtc7oKQ7NyIJ4q1%2FKm4nNoGQwideyei9NhvxvIw6MWj1AY6pgGaZCbzQpcRp4O07gXU0l9VYKtDCoq9folpTZRNhQNz0k%2FLfYgYjoDmpJLqCFNyIFB7HDYigNrvFsdILczZOtqcaXrj4SB5KZNfNNFLhFcrlaA9Qf602y6hdBlBR%2BUpwJLSpImYWy1LwFfl91WNfAivuHQO8eH3NBjzdFbESBbIt9fRKz9vfCGCJoAMIWKJLmTT6AW%2FL4CPYK5BMfVHcHgfRTOTtgV9&X-Amz-Signature=bd82db78e84e0b4db9a2752cc131cb9f2409a1d0e295e2c24be21414df9b91de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
