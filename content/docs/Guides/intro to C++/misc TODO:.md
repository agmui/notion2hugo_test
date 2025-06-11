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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VKKMDE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZcirIZV5ejHUXhHNMcyRfgZptgFMG0rNkTI0Ndnl%2FAgIgYr0xbYzaKIy7TEnMDCbflJdMtVjq9I9gMhH2SmUGShYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHpt58cyjLn4H7uTyrcA6kknsAhGoXvQVvEh4DeVe9pPbADxIKxaR0GebP9t9mjTZqJk1Dv5uVkqA5j1xOru68Wyj%2F8Q%2FBsaKWHqtu3hQRHcdXKmKbB6KnJtLoQ4w4DNF2F8rUbmPVapcodiFGxfKMA6VBW2RKbYDZQIlIAvhok6clo08FUj1Qr%2FG47K8ZTxS98tTDS4qH3KK%2FYUq6ib15v%2F0HF%2BifBgvcaCJWt8eWQCxXLoVKnBJG9oZstpgjdOVVRB1YWZunmOPtQHfWJ6pqlbzl%2Bv%2B6XqxnL%2F5vJVWR7llpSypottilp0C5BCXRmc4frElYRvxFdrSbHgM%2BQKy%2BnjA6Q6a4JJZx3%2BCcftdboxXsIPlkiXgpGvcs8Eep5eXzwBQjGMI9M%2FJPhCZz%2FVeXytUmZMjO%2BAPnz0jVkFcnqeiDj52SJVJhYuz%2F1ApEbbzXa8o0d8LPA5kYy1gvW71Ni3oMyqNNz2Xp3PR%2FZAhP8T6wcomZi9tIVL6JoNzK%2Blf8Q7d4ayRwtUwduHGFktamfjklcekrHJIpXKeFgvDFVKn0psOh%2BEUe%2FaI4uh446xSZUi95fjBBd4a1u3qKbVnlimJ0XZ1CSF8AS491yADgDk2Up2FzyvMtENZlkT7cLUnUAXWalXPJPHxYIMNLJpMIGOqUBFpFikMFTm7MHtqKUHDFrq72iTETOAMHRIXReUV0qjeyYBH5MnfaNBnB%2F6amQCOb3ihfQkJiuRGvZoa%2FOsaampro6DLZyotO5C0mD%2BCS2nqyPx6ZgQoxzEivr%2FAuGbIoXC%2Be5nWxs%2FNP8nbvZUZIoHuVOSyKx7rMyZrCv4KdnnOu414h%2BJx8La7sPdQUN1S55GgeW%2BvEUm7%2BzefrZ3UkmPxARHo7l&X-Amz-Signature=9c48d8d1119966c70e8ccff09d7e8997eaa547c8686c08e0c86cf0bef3a47914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VKKMDE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZcirIZV5ejHUXhHNMcyRfgZptgFMG0rNkTI0Ndnl%2FAgIgYr0xbYzaKIy7TEnMDCbflJdMtVjq9I9gMhH2SmUGShYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHpt58cyjLn4H7uTyrcA6kknsAhGoXvQVvEh4DeVe9pPbADxIKxaR0GebP9t9mjTZqJk1Dv5uVkqA5j1xOru68Wyj%2F8Q%2FBsaKWHqtu3hQRHcdXKmKbB6KnJtLoQ4w4DNF2F8rUbmPVapcodiFGxfKMA6VBW2RKbYDZQIlIAvhok6clo08FUj1Qr%2FG47K8ZTxS98tTDS4qH3KK%2FYUq6ib15v%2F0HF%2BifBgvcaCJWt8eWQCxXLoVKnBJG9oZstpgjdOVVRB1YWZunmOPtQHfWJ6pqlbzl%2Bv%2B6XqxnL%2F5vJVWR7llpSypottilp0C5BCXRmc4frElYRvxFdrSbHgM%2BQKy%2BnjA6Q6a4JJZx3%2BCcftdboxXsIPlkiXgpGvcs8Eep5eXzwBQjGMI9M%2FJPhCZz%2FVeXytUmZMjO%2BAPnz0jVkFcnqeiDj52SJVJhYuz%2F1ApEbbzXa8o0d8LPA5kYy1gvW71Ni3oMyqNNz2Xp3PR%2FZAhP8T6wcomZi9tIVL6JoNzK%2Blf8Q7d4ayRwtUwduHGFktamfjklcekrHJIpXKeFgvDFVKn0psOh%2BEUe%2FaI4uh446xSZUi95fjBBd4a1u3qKbVnlimJ0XZ1CSF8AS491yADgDk2Up2FzyvMtENZlkT7cLUnUAXWalXPJPHxYIMNLJpMIGOqUBFpFikMFTm7MHtqKUHDFrq72iTETOAMHRIXReUV0qjeyYBH5MnfaNBnB%2F6amQCOb3ihfQkJiuRGvZoa%2FOsaampro6DLZyotO5C0mD%2BCS2nqyPx6ZgQoxzEivr%2FAuGbIoXC%2Be5nWxs%2FNP8nbvZUZIoHuVOSyKx7rMyZrCv4KdnnOu414h%2BJx8La7sPdQUN1S55GgeW%2BvEUm7%2BzefrZ3UkmPxARHo7l&X-Amz-Signature=81b01f44e6259f3de4a660d8fe92ac881877f7f12e89ea6555c09a623ac34e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
