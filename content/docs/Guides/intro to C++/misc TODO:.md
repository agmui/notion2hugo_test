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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUL6NAFC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEmKZNguv0tAZmI7d6wRdrzMmMRBicLPjkiRxogHwW6NAiEApv%2FQ1Q%2FfK7Uc7UISGb%2FrBKyqkocsbsdrnhtdI6wvGpkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNr8BHMyBSTsftjQircAzavbah9S9qbvapxrBsBtleVQtBAWw1pWmLfNMVcJC5tdL86pgv1G4ane%2FFGza17R6G9DCP%2FHR0YsbdB1ElGUJORtXOPejTK0ZdefL6drwBWvhPQndFDJEtme8uV%2Bxwuwiai%2BYWrrJV5aKX7qYwpjhUl%2FxUqVO5yS6ChiK%2BXWPfbiBtjo2TftyZ6tQLV2rF7mqfzObWyUsfaw7DdaAy3II8UubWtFvZjvepaK5HOeFAvuJPX3xIFx4zV3sWtbvrCzW3a0FmVUKuMotVldLkyEwgEawFuC1k9CqN5CfsvA%2FUCASKwHDNQ4DFxI2UBX5nyPo8162H6T28W1BD8%2Fkml2hfGSwBeZL5SgL45dAhtMY0TPhVwodxb6PiqIs%2FK1emuVyVBX7VPPEzLANsgO%2FrhX7MmPerKHk79drr5oBWJzxvwhB7qb2yzaH8HGVeqt2VFTyX4qHG7SycN2AHjRnPxHAEmh1JJVKeSPyrrpqUSkLCxWvixDq7T9tKrbqHWeuaQy9HShzMMtrit5Ftakcs6vapt9Zj5KvvTcZq9RAgCgJioIuxQ4gqrw%2FiM32hPMmG4B3MU1%2FYhEl%2FsNZzyJNFy0AkGzvBVDU%2FgwFoOTiCquAKaJnAKq2H%2FuMOYnFKiMK3vhr4GOqUB%2FB%2F8meWTQIOCGPatsm6HkbDX70FW1cx5ORZHBw5G9jA4CIY0DVzA1ENRrQQHUtr8IVug5Q%2B0AqvrJmcll%2BCv4eZNLN%2FvRQmbkR%2FkRCkrxkbxRT%2B3uMLh9Ujv2bhmBc6J1S8XaEDMqcDGwMFBf49ldG%2BljEPznaa%2B2G7Qm38L7rLPI9zQnibdu7VXNzqNNuKsFR4DLtWeszF9kdU7FxeXcgFgmX%2Bw&X-Amz-Signature=3d8b1a863042cc706fc3a040669085831384a833ad329dcf2b2627e6c347dae1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUL6NAFC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEmKZNguv0tAZmI7d6wRdrzMmMRBicLPjkiRxogHwW6NAiEApv%2FQ1Q%2FfK7Uc7UISGb%2FrBKyqkocsbsdrnhtdI6wvGpkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNr8BHMyBSTsftjQircAzavbah9S9qbvapxrBsBtleVQtBAWw1pWmLfNMVcJC5tdL86pgv1G4ane%2FFGza17R6G9DCP%2FHR0YsbdB1ElGUJORtXOPejTK0ZdefL6drwBWvhPQndFDJEtme8uV%2Bxwuwiai%2BYWrrJV5aKX7qYwpjhUl%2FxUqVO5yS6ChiK%2BXWPfbiBtjo2TftyZ6tQLV2rF7mqfzObWyUsfaw7DdaAy3II8UubWtFvZjvepaK5HOeFAvuJPX3xIFx4zV3sWtbvrCzW3a0FmVUKuMotVldLkyEwgEawFuC1k9CqN5CfsvA%2FUCASKwHDNQ4DFxI2UBX5nyPo8162H6T28W1BD8%2Fkml2hfGSwBeZL5SgL45dAhtMY0TPhVwodxb6PiqIs%2FK1emuVyVBX7VPPEzLANsgO%2FrhX7MmPerKHk79drr5oBWJzxvwhB7qb2yzaH8HGVeqt2VFTyX4qHG7SycN2AHjRnPxHAEmh1JJVKeSPyrrpqUSkLCxWvixDq7T9tKrbqHWeuaQy9HShzMMtrit5Ftakcs6vapt9Zj5KvvTcZq9RAgCgJioIuxQ4gqrw%2FiM32hPMmG4B3MU1%2FYhEl%2FsNZzyJNFy0AkGzvBVDU%2FgwFoOTiCquAKaJnAKq2H%2FuMOYnFKiMK3vhr4GOqUB%2FB%2F8meWTQIOCGPatsm6HkbDX70FW1cx5ORZHBw5G9jA4CIY0DVzA1ENRrQQHUtr8IVug5Q%2B0AqvrJmcll%2BCv4eZNLN%2FvRQmbkR%2FkRCkrxkbxRT%2B3uMLh9Ujv2bhmBc6J1S8XaEDMqcDGwMFBf49ldG%2BljEPznaa%2B2G7Qm38L7rLPI9zQnibdu7VXNzqNNuKsFR4DLtWeszF9kdU7FxeXcgFgmX%2Bw&X-Amz-Signature=8a87dcf3b3d69b96d6020b5a7620efe59b25ec4d0ef988adf9d0c04a9e6acc65&X-Amz-SignedHeaders=host&x-id=GetObject)

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
