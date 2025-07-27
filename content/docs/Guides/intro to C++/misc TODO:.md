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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKJV6BW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHOEUfkmNTrXX9STN9L19MI386GSQ6LAo6cf%2BqhWR2uoAiBlZT%2FXhk9PqG7INWErpqgH5vYOv72dNb%2FMvtjbLuWE4ir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM8J0VkUavA%2BCN9P%2FKKtwDTg%2BDtMcV9CsCN78MYGsPMs1na6R0fpRjcNApfhcZWe9U%2F3tjRSAWev8HkyWpSHn%2Bc0EbOfgle2xeCUm8FrPSwcFZIzm3uzMbEgMiS%2BV5Pkjq2N149hGa60TrPJ6Uu%2BQP5YL2c%2BLhC7H%2BfU%2BVNMUBeYzhyq6hOcpyPUVLJwKvuNYCPvjmkyPpg2tnTp1coC41W0s7KqrYYMTBv4UdYzdo7y1beSs7ENwm%2FY4j%2FfmVQPq%2BweheWVJdwq9Dp467w6hkgLD4wvGIvv5QIvUoHiUU9nZatRX7hMLU4nnqPV8sslxpucmurhvxpbr6wqN4M%2FTvumdNOUYTi6NvQmdvOdSNouSweD7fV%2B9Z9B83uctOCoRFQ2y2XjSMS7EkEUdCc%2Fn5xzNINvb7iWlJY7W81D5j98DBz72NCk1EREp3X9kJkIFUG5mQidMj3MZntnR9iAOH8AousxSoyR3UHzLGlMNP0%2F3K7Z9Cr%2FaMG90l8AoR4UNt%2FEZfyX8OOous5yoPx11IEpij7WSo7GKRL7PdP5y5O4ewCy8XWGkdpvY3Gt2m6vLfkCStPQPOsdR%2FfZjdvuDbe21g8LwVIM6ouswIxAUk261Q0h6glT69OjV9NGRenRSKyBGTyNy6NBHTNzAw07qWxAY6pgGSVxHPLfa2TUYFrk8MqnBAV1h1TUDrk3zOmh9cEzuFhV9feFAq7KytHtjpmvCX1iniJZnLwPGFDzBXWibFHvOrae2AMZdj8cm%2BfWn18vFAt%2FH%2BkOjOfveWoXoMro9muqpboSjocJQEfCfIuhY9xfcnU3HPr%2FCl67UHxdbVJayayfGv%2F6zVQE0WU4HC9Ex2%2FwK3qozFGkaDWGdcu1chj4Kf82fzWvxZ&X-Amz-Signature=9f27eb2db3c873ea63509fc5011e19517c6a68f3de011324234917d1caed5b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKJV6BW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHOEUfkmNTrXX9STN9L19MI386GSQ6LAo6cf%2BqhWR2uoAiBlZT%2FXhk9PqG7INWErpqgH5vYOv72dNb%2FMvtjbLuWE4ir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM8J0VkUavA%2BCN9P%2FKKtwDTg%2BDtMcV9CsCN78MYGsPMs1na6R0fpRjcNApfhcZWe9U%2F3tjRSAWev8HkyWpSHn%2Bc0EbOfgle2xeCUm8FrPSwcFZIzm3uzMbEgMiS%2BV5Pkjq2N149hGa60TrPJ6Uu%2BQP5YL2c%2BLhC7H%2BfU%2BVNMUBeYzhyq6hOcpyPUVLJwKvuNYCPvjmkyPpg2tnTp1coC41W0s7KqrYYMTBv4UdYzdo7y1beSs7ENwm%2FY4j%2FfmVQPq%2BweheWVJdwq9Dp467w6hkgLD4wvGIvv5QIvUoHiUU9nZatRX7hMLU4nnqPV8sslxpucmurhvxpbr6wqN4M%2FTvumdNOUYTi6NvQmdvOdSNouSweD7fV%2B9Z9B83uctOCoRFQ2y2XjSMS7EkEUdCc%2Fn5xzNINvb7iWlJY7W81D5j98DBz72NCk1EREp3X9kJkIFUG5mQidMj3MZntnR9iAOH8AousxSoyR3UHzLGlMNP0%2F3K7Z9Cr%2FaMG90l8AoR4UNt%2FEZfyX8OOous5yoPx11IEpij7WSo7GKRL7PdP5y5O4ewCy8XWGkdpvY3Gt2m6vLfkCStPQPOsdR%2FfZjdvuDbe21g8LwVIM6ouswIxAUk261Q0h6glT69OjV9NGRenRSKyBGTyNy6NBHTNzAw07qWxAY6pgGSVxHPLfa2TUYFrk8MqnBAV1h1TUDrk3zOmh9cEzuFhV9feFAq7KytHtjpmvCX1iniJZnLwPGFDzBXWibFHvOrae2AMZdj8cm%2BfWn18vFAt%2FH%2BkOjOfveWoXoMro9muqpboSjocJQEfCfIuhY9xfcnU3HPr%2FCl67UHxdbVJayayfGv%2F6zVQE0WU4HC9Ex2%2FwK3qozFGkaDWGdcu1chj4Kf82fzWvxZ&X-Amz-Signature=393d09eab125c21aa860748b53cd7491c1840a61abcbeab467d54ebfba8a9bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
