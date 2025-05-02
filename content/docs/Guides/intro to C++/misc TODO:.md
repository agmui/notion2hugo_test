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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCTYBRRB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIAOpBZEPeGxqb%2Ff%2F3x1F2QbBAO8RIDehsvVNHeWinWuRAiEArIg2wE1I0BI%2BxFCPW9Lg7KQZwrcst9LoRxFKaGHwkTkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmE7dF42oexG7z3DyrcA96hby8ib8%2BKtIwbwI3r8kMQZlZWhZQxwmvkqtHHNqOhttqdr4fnFZORthhJnHx1hpJ3DOGvrzudC8bfpSlw4d1NxsQNxWTHYwM6mQpdmJBRAPztfPAsA5EciC6rj6WzmWvP5gp99RqAT63B0R3rViPxe6aYoTBN6BAXmBJAVvlezGSK5Ozj5fNNRSFuwIuwXbgghfH4YmUYeBSf1XNNUBYXnoaeipr2BhfxPO998d%2FwJ2rN15sfS31ow5hmBxj6SuSI%2BdDbvhpfU0F3qJHwUiXDJETvtmuvvJlKeMgxSKUgfPWVDauvbtOwywFWUggBgruJloTPsRKzqW2aB0OJL2nOygpZW30X5XXuusGVjA2S4XUO52IZWBwPclMQKYUosMDRDSovoARrb6a3jp%2Bj8wEJN2wsRbnMUuUT2v44hlj%2BYUNq9V0V8mMmM9aDKJeftaVAnIih5oELfQXq%2FVN%2B4Zwm41wcARZyjkicPht98C%2Bb74LlZ8jlmYPKAyP3NMS%2B8RC7ScGVBaZdefWwquZWSRoDV9QbaUajxmNBZ7fPy2wRGdLFD9HKlTrWfXL0WGN6HuKyyQ5gHBVpSTU7l27ambFxIklBGcezbXa8jg54oEem9dKvOpJm6vS4xAb5MOPs0MAGOqUBHLL5i%2FQmL4xUxTvF6%2Bq91eedDB0KkA8MnFt4IM7ZZvjj6jAAB6dynnvw1mhbub%2FwH5odaVzTUcRPg6Iv3xxeQt357HgvmAK0uo8aJKZJVym85citBQcP6cGLfhoQd5rlCxmkhOm2WBe9Nl4nbOoJEp10J8ahOPBebIPCBxoGBLh0Cm775QVKNai5fT1SsJe%2Bf6JYanQ0rR7B8fHaoQ7XOioFiXQI&X-Amz-Signature=98b41ab81f12eaa2da0e146f87a618cb302e51ff1e607b69c1834527a7c9786d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCTYBRRB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIAOpBZEPeGxqb%2Ff%2F3x1F2QbBAO8RIDehsvVNHeWinWuRAiEArIg2wE1I0BI%2BxFCPW9Lg7KQZwrcst9LoRxFKaGHwkTkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmE7dF42oexG7z3DyrcA96hby8ib8%2BKtIwbwI3r8kMQZlZWhZQxwmvkqtHHNqOhttqdr4fnFZORthhJnHx1hpJ3DOGvrzudC8bfpSlw4d1NxsQNxWTHYwM6mQpdmJBRAPztfPAsA5EciC6rj6WzmWvP5gp99RqAT63B0R3rViPxe6aYoTBN6BAXmBJAVvlezGSK5Ozj5fNNRSFuwIuwXbgghfH4YmUYeBSf1XNNUBYXnoaeipr2BhfxPO998d%2FwJ2rN15sfS31ow5hmBxj6SuSI%2BdDbvhpfU0F3qJHwUiXDJETvtmuvvJlKeMgxSKUgfPWVDauvbtOwywFWUggBgruJloTPsRKzqW2aB0OJL2nOygpZW30X5XXuusGVjA2S4XUO52IZWBwPclMQKYUosMDRDSovoARrb6a3jp%2Bj8wEJN2wsRbnMUuUT2v44hlj%2BYUNq9V0V8mMmM9aDKJeftaVAnIih5oELfQXq%2FVN%2B4Zwm41wcARZyjkicPht98C%2Bb74LlZ8jlmYPKAyP3NMS%2B8RC7ScGVBaZdefWwquZWSRoDV9QbaUajxmNBZ7fPy2wRGdLFD9HKlTrWfXL0WGN6HuKyyQ5gHBVpSTU7l27ambFxIklBGcezbXa8jg54oEem9dKvOpJm6vS4xAb5MOPs0MAGOqUBHLL5i%2FQmL4xUxTvF6%2Bq91eedDB0KkA8MnFt4IM7ZZvjj6jAAB6dynnvw1mhbub%2FwH5odaVzTUcRPg6Iv3xxeQt357HgvmAK0uo8aJKZJVym85citBQcP6cGLfhoQd5rlCxmkhOm2WBe9Nl4nbOoJEp10J8ahOPBebIPCBxoGBLh0Cm775QVKNai5fT1SsJe%2Bf6JYanQ0rR7B8fHaoQ7XOioFiXQI&X-Amz-Signature=affdd1b2a19d0137b90dd3adaaa9a5de9261b1fe34192082bf18b5651617054a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
