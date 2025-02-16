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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PU2VHR6%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIB3gN3FB31Zk16n%2Fnjn3zGw%2Buyhm9ViUkpPYTIV%2FL6ZrAiATU9p0UzjaH40VCKt6LyuW12tlmxemU4C8lEJCMzxRECr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPz1iDQBdMEZQ0ot7KtwDwu7gTUR2Ni3GgGspCQJMFwD7u7rd2WnYq8XuqDbRM8%2BuC7Stx8St9ehASw5Egei06Ik0l1oT2rDYzCEyvo%2FCO1PS%2Blsws%2BRV2fxepl4OsGe5No1L%2Bfyv0EzhZFv7FfboCsufrGECyFL4JpvVSpioUblbbJXptKXAC2h3sgsyu0Ba5lzCueFG4kp9bg21EJ2vZkOfqg4%2Bl6YyQc2xy16vAS%2Flh8aYZrKlaDFZf2HuGZRjeCRq2hc%2BTLXcCrNR0V%2BXujG3SPYQgziY4VxvjGC1RqLLH%2FJ%2FVM%2BtiMekZ4Qpa%2F4kbWFzbUrj9OdTX2SmjcA0C%2FXK4lpN%2B5YAn%2FW3xfABp4X%2F6SkuYCewO%2BzCIyGAVvolV7OhPKA5HM35B%2Fi4NVz8Bt1CVAU7eW4%2B8NpQpUATyBUHGhiE9Z3ITkrkgHJWb9guuyaxnAQCeYZ2N0OA9aybvqxY834%2FyeO1COJ9SrF8xnA50MndrDrn00VuJXyx%2BnYfSKZ%2F45lmlTf8JE%2BMv5ywhdN%2BXPVWrbigJlmvEnkouoMmsPkJOXdUkHMeiEnRP%2F1OlY1tUdn1BlnL3t9ATfwOVLNt5RtULi%2BDJ0KmoCtA9pw5WKcHDwr8A2GOHvqQif9kL%2FRcrCJUWLvwi3Iww%2F7FvQY6pgHvuCzXtkbj3Kc9HTJukNGKqv3YKfka%2BpQ2ooH0RRT7VOVXdBbFXPP5raE51FHnN5jSwvp0GLesjHyFk%2FjBMEBYJTBxr1nbo3se4gOx2Y1v59%2BkBenLS3VgZI3kn8TsMULcst9f8wTB0EQQMmpkfIKJGNY91UM6sh10Xqd3bVR5rPJuNOsScrMK0CSu2pT0QXvX%2BVWvfJHQp5xLXJUmC8dyiyd4cDaP&X-Amz-Signature=9ff33d2cadb88d5f68415bac4c17d88f9e89d254614ea97a8f464cc0980c1820&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PU2VHR6%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIB3gN3FB31Zk16n%2Fnjn3zGw%2Buyhm9ViUkpPYTIV%2FL6ZrAiATU9p0UzjaH40VCKt6LyuW12tlmxemU4C8lEJCMzxRECr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPz1iDQBdMEZQ0ot7KtwDwu7gTUR2Ni3GgGspCQJMFwD7u7rd2WnYq8XuqDbRM8%2BuC7Stx8St9ehASw5Egei06Ik0l1oT2rDYzCEyvo%2FCO1PS%2Blsws%2BRV2fxepl4OsGe5No1L%2Bfyv0EzhZFv7FfboCsufrGECyFL4JpvVSpioUblbbJXptKXAC2h3sgsyu0Ba5lzCueFG4kp9bg21EJ2vZkOfqg4%2Bl6YyQc2xy16vAS%2Flh8aYZrKlaDFZf2HuGZRjeCRq2hc%2BTLXcCrNR0V%2BXujG3SPYQgziY4VxvjGC1RqLLH%2FJ%2FVM%2BtiMekZ4Qpa%2F4kbWFzbUrj9OdTX2SmjcA0C%2FXK4lpN%2B5YAn%2FW3xfABp4X%2F6SkuYCewO%2BzCIyGAVvolV7OhPKA5HM35B%2Fi4NVz8Bt1CVAU7eW4%2B8NpQpUATyBUHGhiE9Z3ITkrkgHJWb9guuyaxnAQCeYZ2N0OA9aybvqxY834%2FyeO1COJ9SrF8xnA50MndrDrn00VuJXyx%2BnYfSKZ%2F45lmlTf8JE%2BMv5ywhdN%2BXPVWrbigJlmvEnkouoMmsPkJOXdUkHMeiEnRP%2F1OlY1tUdn1BlnL3t9ATfwOVLNt5RtULi%2BDJ0KmoCtA9pw5WKcHDwr8A2GOHvqQif9kL%2FRcrCJUWLvwi3Iww%2F7FvQY6pgHvuCzXtkbj3Kc9HTJukNGKqv3YKfka%2BpQ2ooH0RRT7VOVXdBbFXPP5raE51FHnN5jSwvp0GLesjHyFk%2FjBMEBYJTBxr1nbo3se4gOx2Y1v59%2BkBenLS3VgZI3kn8TsMULcst9f8wTB0EQQMmpkfIKJGNY91UM6sh10Xqd3bVR5rPJuNOsScrMK0CSu2pT0QXvX%2BVWvfJHQp5xLXJUmC8dyiyd4cDaP&X-Amz-Signature=91519da391f66a334c621f210e4c5e221254e53d4bd36935a726d7e7f65a6c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
