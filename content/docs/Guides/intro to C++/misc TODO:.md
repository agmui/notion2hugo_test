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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D4N5MAP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCQ6Q5nuV%2FQvQdq21s9NMEHVXTBYdW0Zlz7BNVuLhYVTQIgVXJKqmxw%2BNpujLjQYkQYgWqpx5IQJgGWt5zZmx2hurUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBnzJbplnZwUlfPHmyrcA14bnTuXAPV5RmTZ2picL%2B5iM7aiyLf5sHpm2qLVZQzvliuvwfB%2B1bykweS%2BVH9dQnwXovuMWz65nsVpAqGdBXKdQP%2FvYSYog%2BvnyAhEcGGSPSJUv6i7REhseVPPxWiGG3ltHGpAhtB191JnJMVxAl1D3HQxsUfX%2BhTOiXuSsu9N0yF3B4GJm%2FCf9h%2FrxbGS7rPL4Tn66NSQaBxIO7HLV0O8mpAiLRlyfyzWnv%2BI929G4fbcnVN4bUA8xF%2B5rO5l1gpGrF7gjAsq2kBYfFB2irGR4NuACjN3wLNzJW6D1eVPrWSSQtCxzI9T9d6oFaR%2FH7Wn%2BbaVOR1p4Rz6JieA0ujT0Njq4YJZSgKfRaHwcg%2FLE%2FqzntFb%2F1fbf9V0X5E0XPmd6AimGSf%2BLeMrcmu%2FVgLTHbGtU9kNUW2qmU9VS%2FcDqD8myh3j0v%2FXmxsgzDkoYRKcPEhUTxnNHBFkX9HjJHAyccjslcpAd%2BytJs7ffsvRWyfnjz0G%2F%2BFWgZR8Au5AR2fL4y6ODeE1vFM1GhuVIOXGsG5eZd1gmam2sOZ8iJe%2BDEcOjnDBsyg%2F7%2BDw5FLYyjJxjC%2FmQUJeHT113I%2Bqm%2BpWKC%2BVmHH7O8pVkrmZ%2BoE6is4VjkatblwECv%2FXMJyhrL4GOqUBjsQ3V%2Bu9fHRDfxZ0s5ZG%2FqNoINfoIW3TJuXqH4rogrF4orQMu9KMnCpnsqTBd6dwQ70MGx3rHredPv5x4hRUGu9OghALc1xaC2LEhTLICpHUAW1sWLfRmOW7zH58aBa0FFMZe6VaI%2BxWRq0zkS1LEXY37%2Fhp8uOG9VV19Czf4YZuQ3boqegMap3ygpnESoRQ%2FderJep1mHu0zuQF4IWB2acbWKxM&X-Amz-Signature=c550e294c82e42eef4332cde15227faf0e4be8e40f2593a03bdd620bf134ff12&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D4N5MAP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCQ6Q5nuV%2FQvQdq21s9NMEHVXTBYdW0Zlz7BNVuLhYVTQIgVXJKqmxw%2BNpujLjQYkQYgWqpx5IQJgGWt5zZmx2hurUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBnzJbplnZwUlfPHmyrcA14bnTuXAPV5RmTZ2picL%2B5iM7aiyLf5sHpm2qLVZQzvliuvwfB%2B1bykweS%2BVH9dQnwXovuMWz65nsVpAqGdBXKdQP%2FvYSYog%2BvnyAhEcGGSPSJUv6i7REhseVPPxWiGG3ltHGpAhtB191JnJMVxAl1D3HQxsUfX%2BhTOiXuSsu9N0yF3B4GJm%2FCf9h%2FrxbGS7rPL4Tn66NSQaBxIO7HLV0O8mpAiLRlyfyzWnv%2BI929G4fbcnVN4bUA8xF%2B5rO5l1gpGrF7gjAsq2kBYfFB2irGR4NuACjN3wLNzJW6D1eVPrWSSQtCxzI9T9d6oFaR%2FH7Wn%2BbaVOR1p4Rz6JieA0ujT0Njq4YJZSgKfRaHwcg%2FLE%2FqzntFb%2F1fbf9V0X5E0XPmd6AimGSf%2BLeMrcmu%2FVgLTHbGtU9kNUW2qmU9VS%2FcDqD8myh3j0v%2FXmxsgzDkoYRKcPEhUTxnNHBFkX9HjJHAyccjslcpAd%2BytJs7ffsvRWyfnjz0G%2F%2BFWgZR8Au5AR2fL4y6ODeE1vFM1GhuVIOXGsG5eZd1gmam2sOZ8iJe%2BDEcOjnDBsyg%2F7%2BDw5FLYyjJxjC%2FmQUJeHT113I%2Bqm%2BpWKC%2BVmHH7O8pVkrmZ%2BoE6is4VjkatblwECv%2FXMJyhrL4GOqUBjsQ3V%2Bu9fHRDfxZ0s5ZG%2FqNoINfoIW3TJuXqH4rogrF4orQMu9KMnCpnsqTBd6dwQ70MGx3rHredPv5x4hRUGu9OghALc1xaC2LEhTLICpHUAW1sWLfRmOW7zH58aBa0FFMZe6VaI%2BxWRq0zkS1LEXY37%2Fhp8uOG9VV19Czf4YZuQ3boqegMap3ygpnESoRQ%2FderJep1mHu0zuQF4IWB2acbWKxM&X-Amz-Signature=b8a93d9888993f47268201484385dead17cff3fe9f69737598c33b88840e321f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
