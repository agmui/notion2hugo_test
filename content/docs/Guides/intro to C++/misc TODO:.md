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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSTBXBU%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWNCJrfW50UXmQoFpd0GncsxHUwvKXVmqrupLKCG0xtAiAn%2BsRgF9a9xSrRx4hWV9qf1INpEIbc9s2DChj%2B1T7iPyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPRDvd6WUKAFBzGGKtwDGUKDem1NnbuOinP4OOT4hlrmxSXKo6Pt7KtZ4pYG%2B52p7M7fF6dovot8oBd9yf%2FLHNIsYOKIBdQ6sOnXB2Mz49ID4BbMniF%2F7z7xQ1VtQJydT7lMmvwxTPaZWLWV8glk%2B1M5GRmUcgPMzZVVl4L3A5qAzF%2Fx6prxIs8gd0pGrl3oYEoel273MOiEoBJBih13CewQOU1ruf8Ycifp23PUhdqHVudN%2FZLeQst2Mv3mnKXt4%2BBi0SxxNCAOVpSZIysRtpt9gZGIGL6IQuly40jfJnDbgnXFFoIZPCi%2BUCIJ2EDH6Xp8646S4mVvd%2FDNuPcWjkCE9AFTJoAgyYbmkUcnyaeZiB6AylonqhL5bieIZEW6Tzc4OQYSavZUtAB21dAngeo8XMKfw5FtPj%2BNvnt25t%2Btxxr1DJW4WzAZUHnAyOZKQ191wQk2Nc9%2FDAgVsZHRIYKSnIGQNc1MV2eLJyhykH4DbgaowPG2VfBHwA2ANkcmMbdWsbLz1Zd5wI9l%2F6aOkpfmGZqz6RCTlhjpmIWEu%2B96BgD%2F9hDAceKRM68YRksARp4RhW2FdNbIFqwYBuolp1XwF%2FHeI0MuiII3nkIwJKRHVfulKrfHh3Efom8RKF9QjfhLjuFxjDdTrhIwmpusvQY6pgFR43Y2UoT03JF%2BepQgep%2FTU8Qf%2Btf%2BqxYxwMq8%2F7lQcv%2BbEcyH7atgLUe08SmmBIaRW6DMG0O%2F9ZjSW%2FxcVvYvwfB1MSLUh9MiNCttVM34TnxxT2FsflhGqypNGpb6uMctoZcg4FwvbAlKDID6hj12Yy7TF0%2FAAvyUisu2ndr1Dn5Mew7k4bcUP%2B%2FA3c8Sm3ouv%2FESSEc%2Bc8T165Ofgqu3k1Q%2F%2BemB&X-Amz-Signature=5a38a7d02be9e8f22102465ac4d8842f8b1fc96ab8f4e1011ca52f6e231024dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSTBXBU%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWNCJrfW50UXmQoFpd0GncsxHUwvKXVmqrupLKCG0xtAiAn%2BsRgF9a9xSrRx4hWV9qf1INpEIbc9s2DChj%2B1T7iPyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPRDvd6WUKAFBzGGKtwDGUKDem1NnbuOinP4OOT4hlrmxSXKo6Pt7KtZ4pYG%2B52p7M7fF6dovot8oBd9yf%2FLHNIsYOKIBdQ6sOnXB2Mz49ID4BbMniF%2F7z7xQ1VtQJydT7lMmvwxTPaZWLWV8glk%2B1M5GRmUcgPMzZVVl4L3A5qAzF%2Fx6prxIs8gd0pGrl3oYEoel273MOiEoBJBih13CewQOU1ruf8Ycifp23PUhdqHVudN%2FZLeQst2Mv3mnKXt4%2BBi0SxxNCAOVpSZIysRtpt9gZGIGL6IQuly40jfJnDbgnXFFoIZPCi%2BUCIJ2EDH6Xp8646S4mVvd%2FDNuPcWjkCE9AFTJoAgyYbmkUcnyaeZiB6AylonqhL5bieIZEW6Tzc4OQYSavZUtAB21dAngeo8XMKfw5FtPj%2BNvnt25t%2Btxxr1DJW4WzAZUHnAyOZKQ191wQk2Nc9%2FDAgVsZHRIYKSnIGQNc1MV2eLJyhykH4DbgaowPG2VfBHwA2ANkcmMbdWsbLz1Zd5wI9l%2F6aOkpfmGZqz6RCTlhjpmIWEu%2B96BgD%2F9hDAceKRM68YRksARp4RhW2FdNbIFqwYBuolp1XwF%2FHeI0MuiII3nkIwJKRHVfulKrfHh3Efom8RKF9QjfhLjuFxjDdTrhIwmpusvQY6pgFR43Y2UoT03JF%2BepQgep%2FTU8Qf%2Btf%2BqxYxwMq8%2F7lQcv%2BbEcyH7atgLUe08SmmBIaRW6DMG0O%2F9ZjSW%2FxcVvYvwfB1MSLUh9MiNCttVM34TnxxT2FsflhGqypNGpb6uMctoZcg4FwvbAlKDID6hj12Yy7TF0%2FAAvyUisu2ndr1Dn5Mew7k4bcUP%2B%2FA3c8Sm3ouv%2FESSEc%2Bc8T165Ofgqu3k1Q%2F%2BemB&X-Amz-Signature=f5a93f35f2a5cb565e42ae8c69007baefc1c6737fdd2fb6f3b3aa1e6d90eda8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
