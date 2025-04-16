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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2X4SIUQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3qiUib57sSiSR6TKraCbRKeQbZKra0LRDqldIj5Mw1AIgSO2Bc9vZoTdsUQxd4iCIgb5AE1PWw71c5OZM5zkRduYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAbCEqoTTxTZazXp3ircA2E%2FFDU%2B37b%2FXdA52DmFgTkKVDu5SSblI%2BZgxo456YBFU7uMkIVtVWnB81j7a%2BVpphkpstqrun%2BYa%2BQe%2BX8AL2A2EdRafV%2Ffxo969D6JKLT1khDUhsN8%2Bc2E8CTaDaBdZa%2F7XMuV%2FvDISUjJi4LoWpl3BL3P5j7m9unHVTRcMIN%2FRQKr7ucfZcY5H3gOzAcA4yFiYGgyq5knw%2BdrGZrRRcROwJTPSBsOcWRbUXjFKqKfK3k1BMUufwOXNoBVCP6aogMvDEmzGl8wlZizp5SOyoyJq8V0ScawWXlFyFBly84p3U36vPMY9iahoPUlG%2BXlcjy05nUl3JDYZp19pBkTDIZsfOvDNI208QxjXYRef%2BOPMjkqKuKxJzG2h6bOUaXpQZmj5wZZ2ULOpLsoo4gY9vEZClTCZxLy4XORaHnCjf9h5Wys473pg%2FkJ8b5TN5L8xd%2FTB%2FbvbxWa%2Bxv0w1PaqmWdpb6X17QW3vykQSGH4bRo48l%2FH6CGdxr1pgha5lVTxAOTFTiov1I6kA3jn4rrEqGWCysd8znIePNzKn3Tyj9CtMM7D%2F7ltU0Zi6A%2FwKfUG5H8ahfo%2BE0MTlcYv0SUxPmJz3YBcFEvU6eRxpCrb07k5KYQXHVT5TIm5eB%2FMNL4%2Fr8GOqUB2LChOSyUt0GY0VXcIdSaEh37NrZvTFXlxlXZ8UdQb6hkUmaeGGGIu41cayptOXElxYW94Ml5YbIWleL80ghp1E3VhmiSlx4tpADS0O7xnEHz4pGgw0IxUwjRpmHvTrzWra%2FB11dDCE%2FTBgl5nq6r2JhE8iPxYzN5kmRGgnBMEnQEYdlP8VcBbJtHXC1roVOryXtIOs1LNcpTgFNOiZZaQcA0Xpqg&X-Amz-Signature=b42104139bc345d626c2e2695f9450883516e707e1643c9fdccd765e845b347d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2X4SIUQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3qiUib57sSiSR6TKraCbRKeQbZKra0LRDqldIj5Mw1AIgSO2Bc9vZoTdsUQxd4iCIgb5AE1PWw71c5OZM5zkRduYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAbCEqoTTxTZazXp3ircA2E%2FFDU%2B37b%2FXdA52DmFgTkKVDu5SSblI%2BZgxo456YBFU7uMkIVtVWnB81j7a%2BVpphkpstqrun%2BYa%2BQe%2BX8AL2A2EdRafV%2Ffxo969D6JKLT1khDUhsN8%2Bc2E8CTaDaBdZa%2F7XMuV%2FvDISUjJi4LoWpl3BL3P5j7m9unHVTRcMIN%2FRQKr7ucfZcY5H3gOzAcA4yFiYGgyq5knw%2BdrGZrRRcROwJTPSBsOcWRbUXjFKqKfK3k1BMUufwOXNoBVCP6aogMvDEmzGl8wlZizp5SOyoyJq8V0ScawWXlFyFBly84p3U36vPMY9iahoPUlG%2BXlcjy05nUl3JDYZp19pBkTDIZsfOvDNI208QxjXYRef%2BOPMjkqKuKxJzG2h6bOUaXpQZmj5wZZ2ULOpLsoo4gY9vEZClTCZxLy4XORaHnCjf9h5Wys473pg%2FkJ8b5TN5L8xd%2FTB%2FbvbxWa%2Bxv0w1PaqmWdpb6X17QW3vykQSGH4bRo48l%2FH6CGdxr1pgha5lVTxAOTFTiov1I6kA3jn4rrEqGWCysd8znIePNzKn3Tyj9CtMM7D%2F7ltU0Zi6A%2FwKfUG5H8ahfo%2BE0MTlcYv0SUxPmJz3YBcFEvU6eRxpCrb07k5KYQXHVT5TIm5eB%2FMNL4%2Fr8GOqUB2LChOSyUt0GY0VXcIdSaEh37NrZvTFXlxlXZ8UdQb6hkUmaeGGGIu41cayptOXElxYW94Ml5YbIWleL80ghp1E3VhmiSlx4tpADS0O7xnEHz4pGgw0IxUwjRpmHvTrzWra%2FB11dDCE%2FTBgl5nq6r2JhE8iPxYzN5kmRGgnBMEnQEYdlP8VcBbJtHXC1roVOryXtIOs1LNcpTgFNOiZZaQcA0Xpqg&X-Amz-Signature=3b2faeab6847bb6ebeb61ad16b4c69764b02018a9cd9062f0dce12af310548b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
