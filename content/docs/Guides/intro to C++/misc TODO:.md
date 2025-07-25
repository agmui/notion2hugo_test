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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSM4ONV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH8AndPO0pc7sO1N96HsWgcAbMYe6xdh%2FA0ScrduDey%2BAiALPP%2B3h3hTcp%2FHGMPoFFtEqVZCA%2FlDk8NeVqaaoeSDRir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMHzN%2F5WtZpNZx2UseKtwDiUvjZraUE5inslyxoYaP5kUCLmC3whTOxXW5lZru8Am2wDaTU7XPNe64TwbRWSBrvAErvxIM%2BcpI7kz0rGdNwiMx82FP%2F%2FMpFYVhGJo0PBoI%2Fx5hl%2B%2BwD1yX6UEKK2thWO8cwlzcTfexIPpvoYi6yet8KR4SclRz002oDV9O%2BgRyKBP7v9kHapra7pEwO0%2FqZkppBQR8e%2B6nS9FZsbXwA8Sl8cATQZG5%2F2ODC9BCqImWUpWyDqy4nZSU95r7ALvTYnMA%2Fnp52Yu7%2FL3PUXliuZfSBb7LNaDYIwWcdhQCc8RRgxPjPg46OZ9DgsYruZFiR6xTM7h22l2McR1XQD2VXULXZ6ift5XjdQUiw1kHHZlc0%2FdekO2g0yO4dqLSmQjdRIT14GxpKqROivLlsA014CQMDkYewKyFwQDBiMIhArzXaRil88pyTJlIU3h2ui3VojbkJMFAdq%2F64Vw%2F%2F0XKiSart6HpnnSPK%2B%2BXM8R6UTs4ltPMR3xz9gMmcSEFgzjB%2BMYRbPhabpO6PLfUR78Po4FIE8dEZ7nTqV9UnDipwV05RRmjwPENQwKhg5RCFNukLLFPK%2FaqmegEJ%2Fw2j%2FzWnjYd7F4D%2BCnV7hht414aS%2BpOMNrFl9EfWWlQ07gw49CPxAY6pgGHywjhddruBGyEmUr5HMahI9CaUNrBDJ46Vnz0AR4AqitnsDxaKO2ovaxYJn9dhY%2F%2FETTGasNP6EvnHIlADsmK9nJCFRxmGdmdl8jYudmUhJcJFSUTdRCIbhUmoP9vHmrxV4bNBdB8rZJuJVKThUzSi1%2BNl7Dp4ecQIDegXma4AWmdr2JTYiXSHhMLeB5a8KfkphdMYR9UMbMDtYUkYq0gj8KCxQ0H&X-Amz-Signature=b41526abfba7cbce0224d2ae0f20e4879636439ac26dc5ffcb96b825de64f17c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSM4ONV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH8AndPO0pc7sO1N96HsWgcAbMYe6xdh%2FA0ScrduDey%2BAiALPP%2B3h3hTcp%2FHGMPoFFtEqVZCA%2FlDk8NeVqaaoeSDRir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMHzN%2F5WtZpNZx2UseKtwDiUvjZraUE5inslyxoYaP5kUCLmC3whTOxXW5lZru8Am2wDaTU7XPNe64TwbRWSBrvAErvxIM%2BcpI7kz0rGdNwiMx82FP%2F%2FMpFYVhGJo0PBoI%2Fx5hl%2B%2BwD1yX6UEKK2thWO8cwlzcTfexIPpvoYi6yet8KR4SclRz002oDV9O%2BgRyKBP7v9kHapra7pEwO0%2FqZkppBQR8e%2B6nS9FZsbXwA8Sl8cATQZG5%2F2ODC9BCqImWUpWyDqy4nZSU95r7ALvTYnMA%2Fnp52Yu7%2FL3PUXliuZfSBb7LNaDYIwWcdhQCc8RRgxPjPg46OZ9DgsYruZFiR6xTM7h22l2McR1XQD2VXULXZ6ift5XjdQUiw1kHHZlc0%2FdekO2g0yO4dqLSmQjdRIT14GxpKqROivLlsA014CQMDkYewKyFwQDBiMIhArzXaRil88pyTJlIU3h2ui3VojbkJMFAdq%2F64Vw%2F%2F0XKiSart6HpnnSPK%2B%2BXM8R6UTs4ltPMR3xz9gMmcSEFgzjB%2BMYRbPhabpO6PLfUR78Po4FIE8dEZ7nTqV9UnDipwV05RRmjwPENQwKhg5RCFNukLLFPK%2FaqmegEJ%2Fw2j%2FzWnjYd7F4D%2BCnV7hht414aS%2BpOMNrFl9EfWWlQ07gw49CPxAY6pgGHywjhddruBGyEmUr5HMahI9CaUNrBDJ46Vnz0AR4AqitnsDxaKO2ovaxYJn9dhY%2F%2FETTGasNP6EvnHIlADsmK9nJCFRxmGdmdl8jYudmUhJcJFSUTdRCIbhUmoP9vHmrxV4bNBdB8rZJuJVKThUzSi1%2BNl7Dp4ecQIDegXma4AWmdr2JTYiXSHhMLeB5a8KfkphdMYR9UMbMDtYUkYq0gj8KCxQ0H&X-Amz-Signature=90df14b5420e035858d8cff9d0c57e54c5529cd32a2e531e2459786255f158b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
