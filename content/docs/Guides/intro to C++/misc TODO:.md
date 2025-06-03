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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIYBYXB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIB8nGeM5ro15ysMVE8wYmyv7aOKE0qje8SaKW%2BJbR2mCAiAocTngUug5zz9OklqZaW3sTV4vBoXy9Dowah87khN69SqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhlGjyaJnHhp6Jl6MKtwDQ7t7AwUaN3TvwvI4%2BDRh9kElYY2ix7AhHcPTelr%2B7NS7XjDQ8J4N2UwuvxyR2G9di4xlv2eWqsgZn4aCDUcpfKgDyG%2BRNKuDVguZKrJKxlJwQkZMVlPJXmIwrGjycLlIGo8ow4VLpU%2B4eNgCOXwW1I6%2FbTVEU3PaZgbGGASXhsxQVZok1nVHC1GExlmAsL1Dx%2FoYmFirbEFTlSOwN0eXhYCUCAPBWS4qYeyDG3CEkQo5KCZ9QbxgpEjSeaYWq%2BU8nsm5CsoLND6uW%2FafrfX86ivC%2BjRL2XL2N9ksb8uR8mHPHgwybhkOWt1EGus6oSebyQQlL6kxE3WMxPd3pGKGP5EkB3h0qs%2Fr%2FKoUB6wNePHRTcO6Z4aJfWRSYTJp9VwX8R%2BV%2FdtEcY%2B3aOPojQ0QShkAO%2FP9lxNzND2D%2BiTUtOhg9SmmsFVUAGDl0RiY1Av4H3KqPLCqiGzmU8aXQr%2F6L%2FH7Niii2jd6yxfNdhhIl2aBclH4up2u7oEExxCec1cCQMYUfLQsjmPIOsVOENnNvjyp27ExWEKCeTB9uopEllYR5rXYqI1VPbwHY3wbKmDkQfndsBuieev8S5YkQNu8qLTJaHjYb1innsbcmQiBog%2B3mcxJsOXORTSmTIMwnIL6wQY6pgHNodXVH7Qf8gpCPpzxel%2BJpBQhyFt%2B9iHNyGcDpl8yb1jI0s%2FzJbG6WUL%2B%2B8YbOZ1%2Fb5S%2Fjt1bHt8W9vYfUa9fQFYw%2BWi6yewpxtjbhA0SmBRkfFfSZdlGptYdYR4WbYStDhBZOqYbhGBS8Iy%2BO92R%2FZhC6XiJdB1BUzWVksgx60h2qJoFMl8XoEhOpBxu%2BdiacuXPKXD9MSP8KDVLDqwlEfcfmJlS&X-Amz-Signature=e4384b117cee9442c9de6b6f34bd6ccaa847b197bf73bddbe8c5c7990aa4193f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIYBYXB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIB8nGeM5ro15ysMVE8wYmyv7aOKE0qje8SaKW%2BJbR2mCAiAocTngUug5zz9OklqZaW3sTV4vBoXy9Dowah87khN69SqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhlGjyaJnHhp6Jl6MKtwDQ7t7AwUaN3TvwvI4%2BDRh9kElYY2ix7AhHcPTelr%2B7NS7XjDQ8J4N2UwuvxyR2G9di4xlv2eWqsgZn4aCDUcpfKgDyG%2BRNKuDVguZKrJKxlJwQkZMVlPJXmIwrGjycLlIGo8ow4VLpU%2B4eNgCOXwW1I6%2FbTVEU3PaZgbGGASXhsxQVZok1nVHC1GExlmAsL1Dx%2FoYmFirbEFTlSOwN0eXhYCUCAPBWS4qYeyDG3CEkQo5KCZ9QbxgpEjSeaYWq%2BU8nsm5CsoLND6uW%2FafrfX86ivC%2BjRL2XL2N9ksb8uR8mHPHgwybhkOWt1EGus6oSebyQQlL6kxE3WMxPd3pGKGP5EkB3h0qs%2Fr%2FKoUB6wNePHRTcO6Z4aJfWRSYTJp9VwX8R%2BV%2FdtEcY%2B3aOPojQ0QShkAO%2FP9lxNzND2D%2BiTUtOhg9SmmsFVUAGDl0RiY1Av4H3KqPLCqiGzmU8aXQr%2F6L%2FH7Niii2jd6yxfNdhhIl2aBclH4up2u7oEExxCec1cCQMYUfLQsjmPIOsVOENnNvjyp27ExWEKCeTB9uopEllYR5rXYqI1VPbwHY3wbKmDkQfndsBuieev8S5YkQNu8qLTJaHjYb1innsbcmQiBog%2B3mcxJsOXORTSmTIMwnIL6wQY6pgHNodXVH7Qf8gpCPpzxel%2BJpBQhyFt%2B9iHNyGcDpl8yb1jI0s%2FzJbG6WUL%2B%2B8YbOZ1%2Fb5S%2Fjt1bHt8W9vYfUa9fQFYw%2BWi6yewpxtjbhA0SmBRkfFfSZdlGptYdYR4WbYStDhBZOqYbhGBS8Iy%2BO92R%2FZhC6XiJdB1BUzWVksgx60h2qJoFMl8XoEhOpBxu%2BdiacuXPKXD9MSP8KDVLDqwlEfcfmJlS&X-Amz-Signature=5bcbb18f861519dfc92d344296d7ad459859a0db463e5033ee1e12c0160a6142&X-Amz-SignedHeaders=host&x-id=GetObject)

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
