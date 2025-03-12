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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCSXDDC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIA65i0VQXeAUwndttfZ9qwpdmAjiXJrVwQa%2F%2BIe9gT69AiB5Gxda%2B9no%2F83T1fNrqvKkBSz3EIlPOPPkyfNRVfuUiCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvTvaqe0s8f7C69KNKtwDruYgK9Q%2BNqA75NZ%2FBexjJBr9zVz45BIJFRNGNMUcG5LS4uqjaHRrwUHQmI67ZbLBKfkcwuI3hCt4GlMPr9cjo1VNJaINWGenajUhUB2fdlCzQg%2B7zm0%2BKCm1p%2FPbIsHybrIBnwdGiiCuu75n9OZjoGFy7wuRBXPBqxACGfpq4hsdkBole3jGruzJOtKp%2Fi53aPZyfHqY5s%2BITPI1Js8fVd0Tv7ebZvc%2FkySot0Ifzze%2FicA8luPNibVtG5b7UmJtFgmENIlekL4UzxtGmUKcSEPHlYApQeMl9UBm1Dl4CYu3ca1OzZCdP1Z6flEJuw3d2nc4QapFYFxiKXdF3WGd6KsA5PlPeSnYdTCf7KPw7m%2BwygQjrSUIiKHZh4nexjAn74EENNCoWUuwTe0hY6O6%2BNOcl3ihoJFwJFB8NYhJlhbV6hz1wiMhe7dMR8pRGCpr6Ov9lAQcaU%2Feq8t4349%2Bh8JB8oQ5L4vNEeTADKj0l6z2EheoweCjIEfzRZroisADvqFh3GoAfs2DvVItVkmPQVUkZUhg%2F8aR5k32ERfBbnMvHvQY9zdhsUkEvGi6jbsnpvP3jiXYkwVWK9Gfkhsu9GvccKC%2Bk7HELD9l%2FjNhCvpbFVAxVf%2F%2B9bFjHGsw1r3FvgY6pgEVNnoGXnLiSRFFymYC3YJWmpqGEdv2V5WDa33VxKFoD9YxMQbY%2FJT6leVOtI7W8UZnPgFiC9DKSN3Us2saFK2kOW44a0vSNVjQWNzCp%2Fk%2BcCCzQJ%2BvJhYCi8QNu%2FBQTRXLP%2BLzI%2Bxt0drd%2BiFmX0VhYsDrhLFhYrzIKOeHOLpQ1r%2F3aJdHvunkXHUVjUuulzludJUraqji8YC2Cw831qgM5r0eCa9C&X-Amz-Signature=5bac5090779c199bb9004e0f3821106b175bd2aaba9ec86b89a690fb7fa770ef&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCSXDDC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIA65i0VQXeAUwndttfZ9qwpdmAjiXJrVwQa%2F%2BIe9gT69AiB5Gxda%2B9no%2F83T1fNrqvKkBSz3EIlPOPPkyfNRVfuUiCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvTvaqe0s8f7C69KNKtwDruYgK9Q%2BNqA75NZ%2FBexjJBr9zVz45BIJFRNGNMUcG5LS4uqjaHRrwUHQmI67ZbLBKfkcwuI3hCt4GlMPr9cjo1VNJaINWGenajUhUB2fdlCzQg%2B7zm0%2BKCm1p%2FPbIsHybrIBnwdGiiCuu75n9OZjoGFy7wuRBXPBqxACGfpq4hsdkBole3jGruzJOtKp%2Fi53aPZyfHqY5s%2BITPI1Js8fVd0Tv7ebZvc%2FkySot0Ifzze%2FicA8luPNibVtG5b7UmJtFgmENIlekL4UzxtGmUKcSEPHlYApQeMl9UBm1Dl4CYu3ca1OzZCdP1Z6flEJuw3d2nc4QapFYFxiKXdF3WGd6KsA5PlPeSnYdTCf7KPw7m%2BwygQjrSUIiKHZh4nexjAn74EENNCoWUuwTe0hY6O6%2BNOcl3ihoJFwJFB8NYhJlhbV6hz1wiMhe7dMR8pRGCpr6Ov9lAQcaU%2Feq8t4349%2Bh8JB8oQ5L4vNEeTADKj0l6z2EheoweCjIEfzRZroisADvqFh3GoAfs2DvVItVkmPQVUkZUhg%2F8aR5k32ERfBbnMvHvQY9zdhsUkEvGi6jbsnpvP3jiXYkwVWK9Gfkhsu9GvccKC%2Bk7HELD9l%2FjNhCvpbFVAxVf%2F%2B9bFjHGsw1r3FvgY6pgEVNnoGXnLiSRFFymYC3YJWmpqGEdv2V5WDa33VxKFoD9YxMQbY%2FJT6leVOtI7W8UZnPgFiC9DKSN3Us2saFK2kOW44a0vSNVjQWNzCp%2Fk%2BcCCzQJ%2BvJhYCi8QNu%2FBQTRXLP%2BLzI%2Bxt0drd%2BiFmX0VhYsDrhLFhYrzIKOeHOLpQ1r%2F3aJdHvunkXHUVjUuulzludJUraqji8YC2Cw831qgM5r0eCa9C&X-Amz-Signature=65bea002ba4b5e2652b7fb7cca2da6577098b5054d96e6b5dc0990439ed72687&X-Amz-SignedHeaders=host&x-id=GetObject)

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
