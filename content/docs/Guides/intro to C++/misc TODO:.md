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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXLBIJF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNdop%2FMF6Mwm5sOx3xBFACdeYxY9jsDwTRcFvU1KqNpAiEAoLxy5bTcKUUEsA5oQAUW4l1MNrtdc3Eq8MbYH1%2BXY5sqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzcxc%2Bmj1hKxQhR4yrcA66jkZKN2L0z0tYMoLdmZF0IZAH3yDOG57GPlgcEYM3BCMB8rSJHNeA3C1NkXp0djL01MY%2BNeOiJkA%2FqU8ejlyg2%2FSSIX6L7%2B4PYNjC2mjcGH97m8F%2BaJHt4tQSrKkCqSk%2Bt%2Bk%2BUBw0JddGtMXzkMpReNasmGVyJf%2BJ3dg1ZoCmKOPqR3WUlTPkDROskZWvS3en85EqU9EAAZ5FS7nqkTnOzyhZMNguCAIoUAagzglfoGR4Amqkhi0f2iRGimR7%2BZOz8y2RTzG8PfJpAJsrDQ2RPu9L6FkTCurOJKJwy2llwRER7vWGjrWidX1omEeSwZW3fkODdmnU4WjzN04T%2BCtiB061UKEzSdaUx7TgY61Syh%2Bxs1i3AbsxclXdESftyHlFdKWs79t5awE3jhP8w6wLvkxvoFUFKIOaGVglNuKiLKv93g%2BPVQWSqBz%2Ffyv%2FLNWfMFPkiKWgDLrB91JO0LZGC8mlP1WFZVV%2BPCElCIQ6YCeDi5DpwBIiyttBerrwPByffktESzjBUH0ZrXH4%2Fiy7EUis%2BP7A316C6aedKnxFNEVQXL1zMPBbZhXGIuvrv9NmzmQuECdSedQ%2BI6Y8voBrl8RC99udMhHQDSgrfPjv1Wqp%2F4t%2FWR1o%2B6AcmMJrurL0GOqUBn27sudiNsZs%2BH%2BUHk3ymvw2x%2BP3QJ0pJ0riY5NVu8nrfWs48IkHSnNM9Y4GTyNpEIO1xYnW%2FZW%2B%2FyEdvFFcMzwfGAoR%2BtCot5IljwBjHAEcwoVDtTKtAcvzasYnjdEJQmUJzzQk1dBJpTEZBJXRSkiQxNT1hUcKmLsYEW7vAXGA7%2FwPdoPBxyEA%2BQmmEtF3s3hHCQvfntzY1XchLE7cB9qRPn0z9&X-Amz-Signature=563882a812acd9fc067af170197596522afb515c643e4f13b96b7265992518d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXLBIJF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNdop%2FMF6Mwm5sOx3xBFACdeYxY9jsDwTRcFvU1KqNpAiEAoLxy5bTcKUUEsA5oQAUW4l1MNrtdc3Eq8MbYH1%2BXY5sqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzcxc%2Bmj1hKxQhR4yrcA66jkZKN2L0z0tYMoLdmZF0IZAH3yDOG57GPlgcEYM3BCMB8rSJHNeA3C1NkXp0djL01MY%2BNeOiJkA%2FqU8ejlyg2%2FSSIX6L7%2B4PYNjC2mjcGH97m8F%2BaJHt4tQSrKkCqSk%2Bt%2Bk%2BUBw0JddGtMXzkMpReNasmGVyJf%2BJ3dg1ZoCmKOPqR3WUlTPkDROskZWvS3en85EqU9EAAZ5FS7nqkTnOzyhZMNguCAIoUAagzglfoGR4Amqkhi0f2iRGimR7%2BZOz8y2RTzG8PfJpAJsrDQ2RPu9L6FkTCurOJKJwy2llwRER7vWGjrWidX1omEeSwZW3fkODdmnU4WjzN04T%2BCtiB061UKEzSdaUx7TgY61Syh%2Bxs1i3AbsxclXdESftyHlFdKWs79t5awE3jhP8w6wLvkxvoFUFKIOaGVglNuKiLKv93g%2BPVQWSqBz%2Ffyv%2FLNWfMFPkiKWgDLrB91JO0LZGC8mlP1WFZVV%2BPCElCIQ6YCeDi5DpwBIiyttBerrwPByffktESzjBUH0ZrXH4%2Fiy7EUis%2BP7A316C6aedKnxFNEVQXL1zMPBbZhXGIuvrv9NmzmQuECdSedQ%2BI6Y8voBrl8RC99udMhHQDSgrfPjv1Wqp%2F4t%2FWR1o%2B6AcmMJrurL0GOqUBn27sudiNsZs%2BH%2BUHk3ymvw2x%2BP3QJ0pJ0riY5NVu8nrfWs48IkHSnNM9Y4GTyNpEIO1xYnW%2FZW%2B%2FyEdvFFcMzwfGAoR%2BtCot5IljwBjHAEcwoVDtTKtAcvzasYnjdEJQmUJzzQk1dBJpTEZBJXRSkiQxNT1hUcKmLsYEW7vAXGA7%2FwPdoPBxyEA%2BQmmEtF3s3hHCQvfntzY1XchLE7cB9qRPn0z9&X-Amz-Signature=96eb407fbad82453a4020b700452c165db18e961f0c7b8ed88f96719bd3f5344&X-Amz-SignedHeaders=host&x-id=GetObject)

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
