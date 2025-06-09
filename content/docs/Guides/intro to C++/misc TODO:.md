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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEHOTOJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHR1%2BW1EW6Uqayp6I9OFGX67qDI%2FXnVHUakT0NLu2QKAiAYDhf3wM%2F9X90Tg6tzUsTbPiLYcSTWYs4lHIo5vvxfGSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY6AVFMgw5U0SRJ47KtwD2P0NeIRB%2BEx%2FT0%2BT47F4FeMgP1AVxJuSi1%2BxwGXhtQSinDQG4uLrgCc8DnF632Mj0PyIWCwxOFL1dsO34rhAiEwMlCMyxGaPrSDz%2B8tSMt5HwAgnaXQNW8OUxCM2Ec3estEz3V9YZ8ZPG6tgGVNlHMAircP0zZ8MerV%2BrQsb6K3eGTGOMrdIRBZO5hXM4hSGhXce%2B0hRW3hq855gkNMOS4l%2BaPafwumcJ0kf2anvpqZbhnFpOeDWH6SW411p0Xy5d%2BQV7Z1vEJMdLVeLMpwJ3DE491Ki3nWkENUEXYdXjDzaj544E%2F2GkjxN%2BDI3uyj2FPMZiEsEHiqwXvJzhqKJXZQlFllHY8gWkC7bXsV7EFd9qgL2j5uFNfNa6LpUijwd41F8DQZgnrwckX7UmhwwhEFYdIEo3mynpkCrisW47qdOZJPYh1d3Y96QLcpXyWw5PguXusywqdFAYVC0IhqEK5mXBd2japw5sPdz5%2Fx6TgQFfHepbgUyMifa2kFxyTNdk%2BKb9FPG%2Fawik0P2vI0nqOLIFRFXhwHaIXoAHlyuPO3sTkEIAqk2u3hulq%2Bc9kQyytT5%2Fxwi8Fumr4xO7tsuFsaGU2XX0bompAZ9Nzj8GBr%2BaVdnNQBEH3WSxXIw9Z2bwgY6pgEmNOr0GCCPn6yoUqh5yfCD3m3ku57%2F2PSNJrcw9xBz0ZvxVLgN7TAlPUK7VVKxfMY4gtw8q%2B4lt61n7F%2BSXy%2FqNdJeNfg7vgPD4bQnrZu3ywGru0gqRWXVhv%2F1m7p%2B0AENYjMmv1U%2FYzL8yU%2BtLzS1LX7DMvh6J27QwrQVWK2IsPV%2B%2Ftao9jsVA95P1ZgCsMRjaoGVqXOQApqUUF11R1d5EX336K3Z&X-Amz-Signature=416d8cd3402337d59f493741c3ff6de0b9ff74172b998925951c4ca27639ff86&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEHOTOJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHR1%2BW1EW6Uqayp6I9OFGX67qDI%2FXnVHUakT0NLu2QKAiAYDhf3wM%2F9X90Tg6tzUsTbPiLYcSTWYs4lHIo5vvxfGSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY6AVFMgw5U0SRJ47KtwD2P0NeIRB%2BEx%2FT0%2BT47F4FeMgP1AVxJuSi1%2BxwGXhtQSinDQG4uLrgCc8DnF632Mj0PyIWCwxOFL1dsO34rhAiEwMlCMyxGaPrSDz%2B8tSMt5HwAgnaXQNW8OUxCM2Ec3estEz3V9YZ8ZPG6tgGVNlHMAircP0zZ8MerV%2BrQsb6K3eGTGOMrdIRBZO5hXM4hSGhXce%2B0hRW3hq855gkNMOS4l%2BaPafwumcJ0kf2anvpqZbhnFpOeDWH6SW411p0Xy5d%2BQV7Z1vEJMdLVeLMpwJ3DE491Ki3nWkENUEXYdXjDzaj544E%2F2GkjxN%2BDI3uyj2FPMZiEsEHiqwXvJzhqKJXZQlFllHY8gWkC7bXsV7EFd9qgL2j5uFNfNa6LpUijwd41F8DQZgnrwckX7UmhwwhEFYdIEo3mynpkCrisW47qdOZJPYh1d3Y96QLcpXyWw5PguXusywqdFAYVC0IhqEK5mXBd2japw5sPdz5%2Fx6TgQFfHepbgUyMifa2kFxyTNdk%2BKb9FPG%2Fawik0P2vI0nqOLIFRFXhwHaIXoAHlyuPO3sTkEIAqk2u3hulq%2Bc9kQyytT5%2Fxwi8Fumr4xO7tsuFsaGU2XX0bompAZ9Nzj8GBr%2BaVdnNQBEH3WSxXIw9Z2bwgY6pgEmNOr0GCCPn6yoUqh5yfCD3m3ku57%2F2PSNJrcw9xBz0ZvxVLgN7TAlPUK7VVKxfMY4gtw8q%2B4lt61n7F%2BSXy%2FqNdJeNfg7vgPD4bQnrZu3ywGru0gqRWXVhv%2F1m7p%2B0AENYjMmv1U%2FYzL8yU%2BtLzS1LX7DMvh6J27QwrQVWK2IsPV%2B%2Ftao9jsVA95P1ZgCsMRjaoGVqXOQApqUUF11R1d5EX336K3Z&X-Amz-Signature=7462ba59fe3499b60550cba7affec1cba6238fa4a02800fc4d4a6593805fd2c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
