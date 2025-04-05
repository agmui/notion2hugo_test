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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGB6PKQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHEEgcZJ4oCJt5DyBjuZuU75TOjSDD1KS27nmv4TwS7AiBWbRidlw8Y0LQPiMa9Jtmr5acU%2FMxrlCCpk1oDYTSoECr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMu%2F0veC0kf4cgQzmHKtwDkafHGYCLohrgjWRQSVDZ5p6MZZEYfu2v8y%2FNwqXElBRdh7aE7VCW278ZPzeFA%2B6M1jWAOSJati3z%2Fg3ZelLm%2FbaQ8YvBw%2FOKi3%2FGCj70g4O9wWg7h8d6rTzsuxbb3QbbVqjCgu0JPkmMRKTddJniT7KFnIfkNPGupFI6izFjJiQJRh8t1Ff4bSYIwa%2BNYkXi19DMfTkXbzFPB1qxvt2viWhwknT9NLL4y%2FHn3roDHqkFKpxfhQkw6t5g%2BggUUq2ZbQtNF5QUyZGCjVTCWwJe3ro0QP%2FfcB9W5FMJGOHi3tvDeyusrAxyAWBH9Qts8qvOgpnihGgQjVlbSErS%2F4DcjxWsHZ51DVOajF%2Fw88KmvAzTGBsqK5RFGpPLvDZgO8125xGvljCuK1y7p4XUJtNr7Aeb8N%2FS2GyIC%2FZaDhxgIwWiwY1GmWc2iCOxrdToCiRU587DXUF3qmr05d7n%2BZcH98qKplHuccDyTZFx781lH7%2BAfJuKSTiWaLjOff4ITYSaWUuo6aoC38kyoCiNET5v%2FCrZedeaKhCBUjAG7E9a%2BsUe0JdiRY804sn09M6FQiQRUclFr8j3%2F4i%2FKES109fwEunp0oGeQpPpmlYxepsAMdKl9%2F1mQMTg%2BFdCDQUwyKLCvwY6pgF%2Fric35XBWw9ll9Nrelpnhgn%2BF8RunzVFsXC8IsIBizJUTzNiJer9Oxh3t3d7z%2FZigtEJ7XXNRbHjtxs7shQirq03EY2%2FrrSWtKa%2BChC06vlKu8l4RLDuFhJ020a4RNCx0rxRl368vFDEPX1lhBlXr405FlSIzf6x18T1xkBtNG2X9epltDRkMZ06UEUMLfxO3oObCDSZ81c84hr2SFe08CESD63ya&X-Amz-Signature=e975025c0085d1b6da6d2790542ffde42acba7e1dd6165adeccc8b27ff89e7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGB6PKQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHEEgcZJ4oCJt5DyBjuZuU75TOjSDD1KS27nmv4TwS7AiBWbRidlw8Y0LQPiMa9Jtmr5acU%2FMxrlCCpk1oDYTSoECr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMu%2F0veC0kf4cgQzmHKtwDkafHGYCLohrgjWRQSVDZ5p6MZZEYfu2v8y%2FNwqXElBRdh7aE7VCW278ZPzeFA%2B6M1jWAOSJati3z%2Fg3ZelLm%2FbaQ8YvBw%2FOKi3%2FGCj70g4O9wWg7h8d6rTzsuxbb3QbbVqjCgu0JPkmMRKTddJniT7KFnIfkNPGupFI6izFjJiQJRh8t1Ff4bSYIwa%2BNYkXi19DMfTkXbzFPB1qxvt2viWhwknT9NLL4y%2FHn3roDHqkFKpxfhQkw6t5g%2BggUUq2ZbQtNF5QUyZGCjVTCWwJe3ro0QP%2FfcB9W5FMJGOHi3tvDeyusrAxyAWBH9Qts8qvOgpnihGgQjVlbSErS%2F4DcjxWsHZ51DVOajF%2Fw88KmvAzTGBsqK5RFGpPLvDZgO8125xGvljCuK1y7p4XUJtNr7Aeb8N%2FS2GyIC%2FZaDhxgIwWiwY1GmWc2iCOxrdToCiRU587DXUF3qmr05d7n%2BZcH98qKplHuccDyTZFx781lH7%2BAfJuKSTiWaLjOff4ITYSaWUuo6aoC38kyoCiNET5v%2FCrZedeaKhCBUjAG7E9a%2BsUe0JdiRY804sn09M6FQiQRUclFr8j3%2F4i%2FKES109fwEunp0oGeQpPpmlYxepsAMdKl9%2F1mQMTg%2BFdCDQUwyKLCvwY6pgF%2Fric35XBWw9ll9Nrelpnhgn%2BF8RunzVFsXC8IsIBizJUTzNiJer9Oxh3t3d7z%2FZigtEJ7XXNRbHjtxs7shQirq03EY2%2FrrSWtKa%2BChC06vlKu8l4RLDuFhJ020a4RNCx0rxRl368vFDEPX1lhBlXr405FlSIzf6x18T1xkBtNG2X9epltDRkMZ06UEUMLfxO3oObCDSZ81c84hr2SFe08CESD63ya&X-Amz-Signature=d5dcab9582b8f59b84387c1de4c1c2deb6818264c1a0179dc80362afa1435166&X-Amz-SignedHeaders=host&x-id=GetObject)

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
