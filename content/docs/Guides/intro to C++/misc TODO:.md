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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVC5HTD6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDCxeCf0CxvgIupDlsv5%2F8DZ7Tb0TmBZsCwnRwmUIP4ewIgKQ45F2rSV3l1uZpLepCAWFhI8jYSc7FjPZy7lhFWzQsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyJeVIaLKpgmzbKPCrcA2AIJOh%2F3FazbDfbhVhHHbNxjZey98E4dczavAZ9EzpSUoDWRLjo%2F56Y0d4X8vXK5VW4qlMGKj%2FDsepZqOyZgIciYyAVQPsLii1OTIZmrDsL6UFs9Sjc3MjSOHuktqYAcGVnZzASc4VFaeYJOvK7puogEu4DEAUuGsMaTmku6U8rk0g%2FMDgksjSHlRxLajsMv4czxC8llgmT62YI2eBujoyL0%2FHO%2FATgSprji33%2BYrsuIdsG%2BaUGkiaj6ntqO%2Bpu0%2BZtek64jne%2FXhBZiDFo8rQPQe%2FzGA2NGbctX1jp3al5cNCjSSlQiznKGJt2bHPibEbb9JFvXZSkc9sqod3XSE6TQdfebWaLYj4eJWRHhaRHb0CIXufEu1DVYh%2FYKmutcetNlL7hKcEjdVcQcb2GfQ6enqxIckLx7nM6y5hWH6mgTIr1KCf8tl%2F0mWO8omGqwADqXNrKUYKHkS3HAxZrfvMB64ID6pZkopkEypRPfO%2BJEF2Bd4M5A%2B7d4COdRl4lKYSkAfmYtYAi9Ov9FTeiS9WvZm%2BTfW3Gfhq7yGPV%2FHw8WvQw7njL1jo50aT1jeZbNSWGxf5ZQGmwyueJaRn6%2BaCg%2BSPiLWmr%2FGWLw3cwZx0cBWm2C7MBpQWE08fxMMWv58MGOqUBqDF7R%2BAIaQZYLDKNQC%2FVO9hTFO%2FJa950tsnpXIRSaS7yDk9UuBMJ%2F6uhItafcUUAS0PLCjl8Z0%2FHe0fjuGxqOHLXbEZRHp4Xz11zR36%2B3Vsi0rmdgxX6dQGq4oU%2BxkpmC%2Bycb%2BBY8xxB6bhcZI%2BD91YnkSzpPO52n13jQvrurncjFBP4xqaH%2FRR%2FR9bftnrIqW9T9%2FABdmufExSC75EDHNuS%2FpIT&X-Amz-Signature=1a9415f0f72fb8ea7ee43b66cccdca61dadd85b6ba996e4bd7e0602f90de0438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVC5HTD6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDCxeCf0CxvgIupDlsv5%2F8DZ7Tb0TmBZsCwnRwmUIP4ewIgKQ45F2rSV3l1uZpLepCAWFhI8jYSc7FjPZy7lhFWzQsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyJeVIaLKpgmzbKPCrcA2AIJOh%2F3FazbDfbhVhHHbNxjZey98E4dczavAZ9EzpSUoDWRLjo%2F56Y0d4X8vXK5VW4qlMGKj%2FDsepZqOyZgIciYyAVQPsLii1OTIZmrDsL6UFs9Sjc3MjSOHuktqYAcGVnZzASc4VFaeYJOvK7puogEu4DEAUuGsMaTmku6U8rk0g%2FMDgksjSHlRxLajsMv4czxC8llgmT62YI2eBujoyL0%2FHO%2FATgSprji33%2BYrsuIdsG%2BaUGkiaj6ntqO%2Bpu0%2BZtek64jne%2FXhBZiDFo8rQPQe%2FzGA2NGbctX1jp3al5cNCjSSlQiznKGJt2bHPibEbb9JFvXZSkc9sqod3XSE6TQdfebWaLYj4eJWRHhaRHb0CIXufEu1DVYh%2FYKmutcetNlL7hKcEjdVcQcb2GfQ6enqxIckLx7nM6y5hWH6mgTIr1KCf8tl%2F0mWO8omGqwADqXNrKUYKHkS3HAxZrfvMB64ID6pZkopkEypRPfO%2BJEF2Bd4M5A%2B7d4COdRl4lKYSkAfmYtYAi9Ov9FTeiS9WvZm%2BTfW3Gfhq7yGPV%2FHw8WvQw7njL1jo50aT1jeZbNSWGxf5ZQGmwyueJaRn6%2BaCg%2BSPiLWmr%2FGWLw3cwZx0cBWm2C7MBpQWE08fxMMWv58MGOqUBqDF7R%2BAIaQZYLDKNQC%2FVO9hTFO%2FJa950tsnpXIRSaS7yDk9UuBMJ%2F6uhItafcUUAS0PLCjl8Z0%2FHe0fjuGxqOHLXbEZRHp4Xz11zR36%2B3Vsi0rmdgxX6dQGq4oU%2BxkpmC%2Bycb%2BBY8xxB6bhcZI%2BD91YnkSzpPO52n13jQvrurncjFBP4xqaH%2FRR%2FR9bftnrIqW9T9%2FABdmufExSC75EDHNuS%2FpIT&X-Amz-Signature=37590b656b866dc3a4cf038ad690c2bf8838f8a7dcd270cb9e4f6bba05169f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
