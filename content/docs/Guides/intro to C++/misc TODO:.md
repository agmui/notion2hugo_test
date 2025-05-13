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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5PLHHU%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGXREmxb2NFmOImWUm8AhRwG7C4CZP7EuRkdXvZtgM38AiEAjWJy31VuEB77HDaqlGU2GrvkZTv6LC%2BS%2Be1L0vjkVFYqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFu877NuPj1RXYcFcyrcA8qKrkEuk%2Bg1W0nAaLAwvSx%2FKbg9LnQbA4YTlbMlIb30tMsTG7VLsUmFSZnBifhzQKKMlsk7Y8RYXWJ%2FyuzvkHG8boyXgnwg1ft40Cl921p%2Bm5YS3V11qlicmoNyWwf4SQIVWNMVVb%2B4LdXeOhpAA8Nh%2BuO%2BQ3Xw6aURnPEh4hLl16P9pP2Myq4isNQ4m%2F233bjw9H9%2FRgMu%2F6hD7tYpzzlWm6ghcqlRRkjqmFPLgnBKt9qKCTN2fyg24In0PnN14yeNU%2Fx1TnNkA4lyN9kBQznUsWWnPj5CrEe%2BFFSyFb%2B4cAT38CEXPSAZCYprEVcZpGekVg%2Fd9Z0w%2FfxJNG9lxgOAVtGMDXQCpOtDFMbhDA9H8d9nfFvcM6QE2V1Ty7jex1gwswuKf30XTJvCsBFabNPgfI1wP%2BpjRLMQCteB75V1pPrJYAeJTO6LMXVxMaHX0lUoaLkn0bAJ0ZYgyAXchEC3BCq%2BY6Ahw1nE1UxcXxU%2FXeOPJxgJwLo0UTfvUcy5hF8t9su6sL0UU0%2BGZPohG9RNNswKvkqgdS%2FHL%2BrGdw62l3sWypfm75IvSxSuOgqsUxK0xN12zBK%2FjJ4EZqHuYn6er1bFdshCjbmBohmS3qdiKe4g7Uz6jjEMTlk3MNTbjcEGOqUB9WW6kiAErpGidDwdmWycNfEciVAxXwyICT52C0C2CjV1jTHuR8yAUUg5cEP1HuIVV8CkVz1oFOrKOdYHWE%2B4epbQbaCnlBjMmFUtXYrZpCvYNX1CovgsLXYx2uH0qZcbyLQxCK3s9A6fEHW1s367VOfnuheBewtmK38Oe9eYf5P%2F4vwJ%2FuyGMQyEFDyyjD35uOAWpts9RoazIi3omFItkY78xRQx&X-Amz-Signature=1961a8832dc981406580cf231b0b8fefd1c78030c1b8678d52382f5317718581&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5PLHHU%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGXREmxb2NFmOImWUm8AhRwG7C4CZP7EuRkdXvZtgM38AiEAjWJy31VuEB77HDaqlGU2GrvkZTv6LC%2BS%2Be1L0vjkVFYqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFu877NuPj1RXYcFcyrcA8qKrkEuk%2Bg1W0nAaLAwvSx%2FKbg9LnQbA4YTlbMlIb30tMsTG7VLsUmFSZnBifhzQKKMlsk7Y8RYXWJ%2FyuzvkHG8boyXgnwg1ft40Cl921p%2Bm5YS3V11qlicmoNyWwf4SQIVWNMVVb%2B4LdXeOhpAA8Nh%2BuO%2BQ3Xw6aURnPEh4hLl16P9pP2Myq4isNQ4m%2F233bjw9H9%2FRgMu%2F6hD7tYpzzlWm6ghcqlRRkjqmFPLgnBKt9qKCTN2fyg24In0PnN14yeNU%2Fx1TnNkA4lyN9kBQznUsWWnPj5CrEe%2BFFSyFb%2B4cAT38CEXPSAZCYprEVcZpGekVg%2Fd9Z0w%2FfxJNG9lxgOAVtGMDXQCpOtDFMbhDA9H8d9nfFvcM6QE2V1Ty7jex1gwswuKf30XTJvCsBFabNPgfI1wP%2BpjRLMQCteB75V1pPrJYAeJTO6LMXVxMaHX0lUoaLkn0bAJ0ZYgyAXchEC3BCq%2BY6Ahw1nE1UxcXxU%2FXeOPJxgJwLo0UTfvUcy5hF8t9su6sL0UU0%2BGZPohG9RNNswKvkqgdS%2FHL%2BrGdw62l3sWypfm75IvSxSuOgqsUxK0xN12zBK%2FjJ4EZqHuYn6er1bFdshCjbmBohmS3qdiKe4g7Uz6jjEMTlk3MNTbjcEGOqUB9WW6kiAErpGidDwdmWycNfEciVAxXwyICT52C0C2CjV1jTHuR8yAUUg5cEP1HuIVV8CkVz1oFOrKOdYHWE%2B4epbQbaCnlBjMmFUtXYrZpCvYNX1CovgsLXYx2uH0qZcbyLQxCK3s9A6fEHW1s367VOfnuheBewtmK38Oe9eYf5P%2F4vwJ%2FuyGMQyEFDyyjD35uOAWpts9RoazIi3omFItkY78xRQx&X-Amz-Signature=71cfdec5ba7cbb270bdd4a8104d322e4c31d4d73064016dc2e0c090e7bc6782f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
