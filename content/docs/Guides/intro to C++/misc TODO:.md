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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNOCL75C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEsSWSEzG7oKKTk9rrcVzBRJojTdS3gzDtSRN8P1lOlwAiAu9ByvysnSsVlWLmrkTKC7fut6RMEik%2FgwhsL9x3VfYCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMZBws9OjgbUGPGidhKtwDNLRg57BcPQ4w960E5IcLOoCin4%2FKGTtOSBW7Tgxm66TPlJyuthrW%2BO5O5YD73pgZvMQq3F3lqXvntMUrDGeXuTcImAcp530IrnuAv1fWwLGnRLc1jRn4Kx%2FkgGGMc8gh0vtySXvwcZyG4x1GxbwputUVdR8woPCdlyCcPMRM4F2nPyV0NFhJo8Hsw8Zd6uJX1Iz9UPn5Vy03Nxef7jXGnBfQWSxS%2Fim%2FR8y2Fj8spzp3qI4FDZ%2F0UK6lGv3LP6mSvo3CrghkareW33B8kpVx8F0YOgXlP89vLoSHs9RoNB%2BGaV%2FK0VyXcB%2BJflktv4WGZ6twRgxy3%2FAedGjpGG0kwg%2FcAwexMy6glYVJNuPxm%2FZqQ5wk62KLMXWOPUC%2F8R1r3f55PRDwQOJYUEMHDCEoVjufmIkQshEcrpiexqRVsjN6R%2BFGRmD7wPvfLkN%2FhVgzKMFG%2FT3C4yTGnrBKfpP%2F86VEjzxq5bMEfnElJuiaX8uPFjGCz4mE7oMFOc4diWthr9V0K%2BHzczoxvro5xd5X2%2BCdLZV%2B9cEZwfxIU5TxcJXyb78DtNsodyuZrPM7YhU%2B21hzjuDQJ1RqUW5fLBnqmQSljSjG%2FpXAbDW7C%2Biao4PJSPVjthZUmlmnxJkwnPaIwgY6pgEsxSgeBS%2BCt5fxgaR6IKJMx1%2Bshv7G0kvKWGVTGHGRQfsGw2zIAM%2F%2BKeEJbsoQixkSQSO3eNYwF%2FYpVh83JvjzK2rT7Y4TV7OHVdppgBkWFgnNwO%2BPZrXTxRd%2BNykIoFYHsgn0xJyXCO0YG5xuhTInu00FcKkIHufGLL%2Fd2EThmdn3AHoKGfTLZM3HWgbS4PTV%2FYdqwdJvvsVPOZddUNbrGJ01sZbK&X-Amz-Signature=693c6eb247c678ed1005a540412655b861f634a9cc377005c759f7e9c8b57079&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNOCL75C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEsSWSEzG7oKKTk9rrcVzBRJojTdS3gzDtSRN8P1lOlwAiAu9ByvysnSsVlWLmrkTKC7fut6RMEik%2FgwhsL9x3VfYCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMZBws9OjgbUGPGidhKtwDNLRg57BcPQ4w960E5IcLOoCin4%2FKGTtOSBW7Tgxm66TPlJyuthrW%2BO5O5YD73pgZvMQq3F3lqXvntMUrDGeXuTcImAcp530IrnuAv1fWwLGnRLc1jRn4Kx%2FkgGGMc8gh0vtySXvwcZyG4x1GxbwputUVdR8woPCdlyCcPMRM4F2nPyV0NFhJo8Hsw8Zd6uJX1Iz9UPn5Vy03Nxef7jXGnBfQWSxS%2Fim%2FR8y2Fj8spzp3qI4FDZ%2F0UK6lGv3LP6mSvo3CrghkareW33B8kpVx8F0YOgXlP89vLoSHs9RoNB%2BGaV%2FK0VyXcB%2BJflktv4WGZ6twRgxy3%2FAedGjpGG0kwg%2FcAwexMy6glYVJNuPxm%2FZqQ5wk62KLMXWOPUC%2F8R1r3f55PRDwQOJYUEMHDCEoVjufmIkQshEcrpiexqRVsjN6R%2BFGRmD7wPvfLkN%2FhVgzKMFG%2FT3C4yTGnrBKfpP%2F86VEjzxq5bMEfnElJuiaX8uPFjGCz4mE7oMFOc4diWthr9V0K%2BHzczoxvro5xd5X2%2BCdLZV%2B9cEZwfxIU5TxcJXyb78DtNsodyuZrPM7YhU%2B21hzjuDQJ1RqUW5fLBnqmQSljSjG%2FpXAbDW7C%2Biao4PJSPVjthZUmlmnxJkwnPaIwgY6pgEsxSgeBS%2BCt5fxgaR6IKJMx1%2Bshv7G0kvKWGVTGHGRQfsGw2zIAM%2F%2BKeEJbsoQixkSQSO3eNYwF%2FYpVh83JvjzK2rT7Y4TV7OHVdppgBkWFgnNwO%2BPZrXTxRd%2BNykIoFYHsgn0xJyXCO0YG5xuhTInu00FcKkIHufGLL%2Fd2EThmdn3AHoKGfTLZM3HWgbS4PTV%2FYdqwdJvvsVPOZddUNbrGJ01sZbK&X-Amz-Signature=47afa2b275ccd9722af4ba4cc1b404a14bd70021d37c79298fe8fa67c8d9c867&X-Amz-SignedHeaders=host&x-id=GetObject)

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
