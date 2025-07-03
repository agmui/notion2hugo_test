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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHSLSMA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJFMEMCICLOw0eA%2FQmGL5vomrCj7pVlZlBpiCc4F32%2F2mDWCfIbAh9K0LHNEy91O2LEEIuT5cmc4pzX61v4XJ2%2FiFFmY8UeKv8DCBUQABoMNjM3NDIzMTgzODA1IgxtG4DhzJOSn6Fhf5Eq3AMuQIGncX2S8nsbTms%2F4xBcsxIYpX0wZxigiXxa%2FJ6IAClGe6hs%2BYDwfWC0%2FkWdjFbIebKSETajS9DRiSZ7MvdUjOIqTFeKs27anXhWVvnz5pTeNxoXSnykgRvd3yPfxWkgRtanFHUbQyVGkLq3YLlR%2BgcF8hXgqpxNdezMGwMjBv65EpLMv1NK73gsKm%2BcbZZuODV4kp%2FkpmsHLkOkQGgXBwtLY8T%2BMwYQ2%2Bz9Tc0YVwXX1LKrTCzbpidaJNg9aEy9DpQao5Jzq99uvqQSXPkO%2FNkBNPC%2FLiuoie5sinDUoCE4jp26v%2FvZO8TO5CVnXQtgvaQEWyKa%2Fckv9brlVF6TbgwYXmMVzEi51TJOE8gRnYcFyB2JzPxNyObTRV50xsfaBygzjubYQYsOSkH%2F8Heo5ABXAAaiwzw9g9%2F2nKtTzsl%2F8mAFX1DGUQG0%2B8H8ml82gFTKgsaywRFwWOgEgcDucDGCxZtH8FLCrmIiZOwxWal7PBUW8bu7ksIZtFhZIWXJmatWAoltBO0VXziF%2FKr3jGQjhpvPfhqjG5KzFLX%2FYXevQc9yFxc7C5IpyzaHFQKK3arq%2Fvk%2FcGdLHa2XGcdZh5l5%2FfWGAX33Q9v50pVeSsHyXVkgWP1twU3xijDe4ZnDBjqnAa5rh17%2BviTzkRuP8n7XJGVFaTuXZmlZhOkKfiMY7WL6KAXxrDXcEfgjsxQpYysVprRVoCMzyFuv5weaJ4Gd66ViV20%2B3lKj8LiGCMArJ3yqlaxGeNsS7oxt5rWhkIiId0e5Z7aviaXNm9hnCA%2FkxQbO1HgV%2F%2FGW73w2ScyNW5BlqQStKRo7LvXVPgBSNAQE9adRMQ9O09dx9h7zx8toYMPDa71a8IaB&X-Amz-Signature=84eaab91f3824b9126c9d0864730728894b555e073655dfff4f9616e2424285b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHSLSMA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJFMEMCICLOw0eA%2FQmGL5vomrCj7pVlZlBpiCc4F32%2F2mDWCfIbAh9K0LHNEy91O2LEEIuT5cmc4pzX61v4XJ2%2FiFFmY8UeKv8DCBUQABoMNjM3NDIzMTgzODA1IgxtG4DhzJOSn6Fhf5Eq3AMuQIGncX2S8nsbTms%2F4xBcsxIYpX0wZxigiXxa%2FJ6IAClGe6hs%2BYDwfWC0%2FkWdjFbIebKSETajS9DRiSZ7MvdUjOIqTFeKs27anXhWVvnz5pTeNxoXSnykgRvd3yPfxWkgRtanFHUbQyVGkLq3YLlR%2BgcF8hXgqpxNdezMGwMjBv65EpLMv1NK73gsKm%2BcbZZuODV4kp%2FkpmsHLkOkQGgXBwtLY8T%2BMwYQ2%2Bz9Tc0YVwXX1LKrTCzbpidaJNg9aEy9DpQao5Jzq99uvqQSXPkO%2FNkBNPC%2FLiuoie5sinDUoCE4jp26v%2FvZO8TO5CVnXQtgvaQEWyKa%2Fckv9brlVF6TbgwYXmMVzEi51TJOE8gRnYcFyB2JzPxNyObTRV50xsfaBygzjubYQYsOSkH%2F8Heo5ABXAAaiwzw9g9%2F2nKtTzsl%2F8mAFX1DGUQG0%2B8H8ml82gFTKgsaywRFwWOgEgcDucDGCxZtH8FLCrmIiZOwxWal7PBUW8bu7ksIZtFhZIWXJmatWAoltBO0VXziF%2FKr3jGQjhpvPfhqjG5KzFLX%2FYXevQc9yFxc7C5IpyzaHFQKK3arq%2Fvk%2FcGdLHa2XGcdZh5l5%2FfWGAX33Q9v50pVeSsHyXVkgWP1twU3xijDe4ZnDBjqnAa5rh17%2BviTzkRuP8n7XJGVFaTuXZmlZhOkKfiMY7WL6KAXxrDXcEfgjsxQpYysVprRVoCMzyFuv5weaJ4Gd66ViV20%2B3lKj8LiGCMArJ3yqlaxGeNsS7oxt5rWhkIiId0e5Z7aviaXNm9hnCA%2FkxQbO1HgV%2F%2FGW73w2ScyNW5BlqQStKRo7LvXVPgBSNAQE9adRMQ9O09dx9h7zx8toYMPDa71a8IaB&X-Amz-Signature=5f20e1e0e4f880b6f8516d0d0b5233ad4390fdc589350f54541d8f4f141fa347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
