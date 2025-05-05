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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2ENR3S%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDjn9nuFNavwY5y1uEYNyCvLC34nnI%2FRvdcELeyPC%2B6AwIgQhDsLk%2B7ZUrt4kFEu8EVZyNgV1zspS2lEaK7rPVisskq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDiwSBKCenuYiYZ53yrcA3ShQXNsnSwzc5iHFxd%2F9S2wdCNDf7OX6OAgk6zM1s1A1465EEsfrvuFoCVzJuHIfeovAfR6WWkMhBxezbrYOlvi6sJaZO5kKXT87wUPH6W1XGdF0aukkz%2BdF%2BoFMXWJkFXiDdKl5%2B%2FhD8lSjidpTVN9dGMQ8gshbs2L2C1cwF%2BRA5cl%2F3YU0rxpL7sKsGVkd7jUZv6lJ1yL%2Bva65Uaxm%2F6i%2BRc50ubTgFqDwfGXqvPj0EKuceqNPsquxAXlU9t2KxRAy2hnlh5PY91KP2Szc8NeDEqh72ZXGoNqfYKzRyVnBJysJBQ2dfCP5oAe02xW4rELLPFYA2U67UGhY8V6NJwDyyspTH35b18mGIhXxu%2BJVLlVgWwhBv7egb67PDIkLjHbYC5nEbY%2B006H%2F0Y3JDnf46zuGbBqLa%2FOCIDr0TyxdxJ2pc7e4u2u67kFBvj7NbhulGbyhTI%2Bi9hvW6Z0HBKzQseABLbNgcyk6NTYEewib8IBkJKFDQ%2BA1YddkbHoB8EKxWpcBMpNt8IAVvo6gEfp%2FPI82ybamPpCcTCFFZQiZ56mrCgi9M5BjlxZbZQ6Xc9nI40oP4W6b9auu0TZAMZXYKYv%2BT%2Bxnt3%2BuCp6%2FH7omoW2XYe4J2%2Fh1kTNMOHp4MAGOqUBs1MbS56tAxIRiIKEsWU5tdVJPuKDF3GVU7TiYuC7TbC5VSinJA3SsgiosvG9m6G6AVIRbSDwlh58a8dHXVAn9yxJX0K5wibaA%2FNEAiOYuKYlKW61WuD87fyHZ9KdJHVMNfSGkq2eFI7G9Ra8sAHUKNbjlb9eYR%2BGw1C5xEzh6Ya5n30MLL2OeqcOjlsMDeNotTsXW4PhWWtsfV8op0%2FC0bpFvKnH&X-Amz-Signature=8c73795e2bb48f7b34c7586a1a54294660ccbc9494c3ffec0d610f5bce0305c9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2ENR3S%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDjn9nuFNavwY5y1uEYNyCvLC34nnI%2FRvdcELeyPC%2B6AwIgQhDsLk%2B7ZUrt4kFEu8EVZyNgV1zspS2lEaK7rPVisskq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDiwSBKCenuYiYZ53yrcA3ShQXNsnSwzc5iHFxd%2F9S2wdCNDf7OX6OAgk6zM1s1A1465EEsfrvuFoCVzJuHIfeovAfR6WWkMhBxezbrYOlvi6sJaZO5kKXT87wUPH6W1XGdF0aukkz%2BdF%2BoFMXWJkFXiDdKl5%2B%2FhD8lSjidpTVN9dGMQ8gshbs2L2C1cwF%2BRA5cl%2F3YU0rxpL7sKsGVkd7jUZv6lJ1yL%2Bva65Uaxm%2F6i%2BRc50ubTgFqDwfGXqvPj0EKuceqNPsquxAXlU9t2KxRAy2hnlh5PY91KP2Szc8NeDEqh72ZXGoNqfYKzRyVnBJysJBQ2dfCP5oAe02xW4rELLPFYA2U67UGhY8V6NJwDyyspTH35b18mGIhXxu%2BJVLlVgWwhBv7egb67PDIkLjHbYC5nEbY%2B006H%2F0Y3JDnf46zuGbBqLa%2FOCIDr0TyxdxJ2pc7e4u2u67kFBvj7NbhulGbyhTI%2Bi9hvW6Z0HBKzQseABLbNgcyk6NTYEewib8IBkJKFDQ%2BA1YddkbHoB8EKxWpcBMpNt8IAVvo6gEfp%2FPI82ybamPpCcTCFFZQiZ56mrCgi9M5BjlxZbZQ6Xc9nI40oP4W6b9auu0TZAMZXYKYv%2BT%2Bxnt3%2BuCp6%2FH7omoW2XYe4J2%2Fh1kTNMOHp4MAGOqUBs1MbS56tAxIRiIKEsWU5tdVJPuKDF3GVU7TiYuC7TbC5VSinJA3SsgiosvG9m6G6AVIRbSDwlh58a8dHXVAn9yxJX0K5wibaA%2FNEAiOYuKYlKW61WuD87fyHZ9KdJHVMNfSGkq2eFI7G9Ra8sAHUKNbjlb9eYR%2BGw1C5xEzh6Ya5n30MLL2OeqcOjlsMDeNotTsXW4PhWWtsfV8op0%2FC0bpFvKnH&X-Amz-Signature=ef6512c50f16dde723a2cc874b1a986b4328f6ea43412042d450bc3404237eca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
