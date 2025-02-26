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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2HLIVB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDnVmQRUjbGt65VInhnorDGGhGYk7gIuF5gLLPNEZuPHAIgDfyTnBj2PvmFMFkUaqvkX8VrzUnHYYJ%2FhTaRHAtJdx8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG2yf3a41dLxk%2BBxByrcA1Bw4wamAsvvHvd4oow9YA01FnUYhxZEL4H08wvlDKJvsWVzVI%2B99EtA84uKGAXh%2B%2B78HaWsXvvJ1WgHca5Yr%2F%2FZjlRLLGFeh1gq1LZMhDAgrO6Obm4SB7cpEDZ3MQb1lUPPTfYgiWDmYzySZj8uLNceWGRKtRGx84H%2FQj3z%2Fb632BilVbEyvJ7EqT1vMPHhCtYY5Jb2Rf1r0CsvOCge%2B%2B6i4PcFEQvCbQecAZKM2toZ0eAiXzZ6ZUqzl43Za4rJNbKLL2iY9f8UGAjxP1Cn%2BMtsxcSKZ2KrWXTbL%2BT7Bm3v6jP5Xra2vrWLwmvl9fyYGv9Ol0teIQi%2FwpZ3c4%2Bu%2Fp5mmK0uyjIRqxeI2Qlit6sLtwi2bfmzFUFLBLQ1bJKP%2FEGPzWHUmY2zTDD59IbBsSOTokTfX5TRK67ibvO7vshS1BLzeO4MbCKK3%2FX4yAHFewUz5gztbMLNSs7Tjasu%2B7fhoZCYdqXTjJ9jMkEf3JOl%2B85EdQZhi%2BxN8WNl8Z%2FYGmgoel3ELSXPjnM%2Bn4mMXDv2X5noV5vWPIHkb9ekljPzH57Sp9IKSv4JKlenzygWv5SCwjTKks%2FXKI6szfdUxo2ar1WBSI78WpckW5zHd%2BhJkA2E0su20Kz2dmthMOy8%2Bb0GOqUBpR6VklZ%2B3uebqWUnNnNiIttU7Z6j8puj7LE34voUtGrc5QxpdZi5t8rivSe6Qw%2BJLpe8fxFliYgxF%2Fq8JrkDOz0W%2Br9JsbumIWvo%2F8rZzDB%2B2UB5NUh9b%2Fn%2Fl0AbLYZksSjWbDfZriShCgMRxsHXIgTxEpPyMbODU1H2YpqlJrZQllPHYZxRuI3Rbd7YJooN5ct2zwVSxw4%2Bj1gP%2FXvhKUB1zoXH&X-Amz-Signature=32002d4011e39cdcc3c62c8cc12f8bae70b2c5e9916cc0a66baf15973377e426&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2HLIVB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDnVmQRUjbGt65VInhnorDGGhGYk7gIuF5gLLPNEZuPHAIgDfyTnBj2PvmFMFkUaqvkX8VrzUnHYYJ%2FhTaRHAtJdx8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG2yf3a41dLxk%2BBxByrcA1Bw4wamAsvvHvd4oow9YA01FnUYhxZEL4H08wvlDKJvsWVzVI%2B99EtA84uKGAXh%2B%2B78HaWsXvvJ1WgHca5Yr%2F%2FZjlRLLGFeh1gq1LZMhDAgrO6Obm4SB7cpEDZ3MQb1lUPPTfYgiWDmYzySZj8uLNceWGRKtRGx84H%2FQj3z%2Fb632BilVbEyvJ7EqT1vMPHhCtYY5Jb2Rf1r0CsvOCge%2B%2B6i4PcFEQvCbQecAZKM2toZ0eAiXzZ6ZUqzl43Za4rJNbKLL2iY9f8UGAjxP1Cn%2BMtsxcSKZ2KrWXTbL%2BT7Bm3v6jP5Xra2vrWLwmvl9fyYGv9Ol0teIQi%2FwpZ3c4%2Bu%2Fp5mmK0uyjIRqxeI2Qlit6sLtwi2bfmzFUFLBLQ1bJKP%2FEGPzWHUmY2zTDD59IbBsSOTokTfX5TRK67ibvO7vshS1BLzeO4MbCKK3%2FX4yAHFewUz5gztbMLNSs7Tjasu%2B7fhoZCYdqXTjJ9jMkEf3JOl%2B85EdQZhi%2BxN8WNl8Z%2FYGmgoel3ELSXPjnM%2Bn4mMXDv2X5noV5vWPIHkb9ekljPzH57Sp9IKSv4JKlenzygWv5SCwjTKks%2FXKI6szfdUxo2ar1WBSI78WpckW5zHd%2BhJkA2E0su20Kz2dmthMOy8%2Bb0GOqUBpR6VklZ%2B3uebqWUnNnNiIttU7Z6j8puj7LE34voUtGrc5QxpdZi5t8rivSe6Qw%2BJLpe8fxFliYgxF%2Fq8JrkDOz0W%2Br9JsbumIWvo%2F8rZzDB%2B2UB5NUh9b%2Fn%2Fl0AbLYZksSjWbDfZriShCgMRxsHXIgTxEpPyMbODU1H2YpqlJrZQllPHYZxRuI3Rbd7YJooN5ct2zwVSxw4%2Bj1gP%2FXvhKUB1zoXH&X-Amz-Signature=bed78b5da826fa9436cd6dc2a3f65cb7addb19a3fd33d065205ae9e7985e653b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
