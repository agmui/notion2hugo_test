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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJN5YYX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC8JzxJ5N6qyk0yaVfOxuMEFK4jlzpudSIF2fSRjuarGQIgb7j4xbxtX7QPSoW9Jr9MLYQvfn1x2gRAXrCiUiQl%2FFAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEo4dUxGbW5eaOKg5CrcA1dfn1BTCOvdNZdz42Ob89P1jvvnH6vDinohHPbpqc0oiH%2B3FzolmtnL%2BBamuXeew88p4OONzmcc1ne%2BBUEcvWrqGTB3wy6b0vuPWL8P8zYGmtSSF0D6n0WmcdpEZXvU4198wgjxqTijEtqPGNJJ%2BlM0QF%2FVdwv8irPs28rSM7ImZvzJJGRdFm%2BeMo1TGc5yFTXwJ%2BcDHqC9h09sh2kguGEow%2BINCKrWWzKe%2B7ymTMNSX2ozUii7IE%2Fp47v1lhA%2FgF9l%2BiE%2FwHFu3SpO%2BIaJ3pLCBAdilcSEBvrg7hGOoVnZvhv%2B5vRsakIvLlQUlLtxMPLszgtpr2GdpxTKt9BaaCE6VDcLOOvcZprcCBW1DItCDmJBh2nsxwSmnLq3n2E5%2FFlkA33MPwGHhregEnO4C3n2Ygfb1VTSunSlSNv38MJYezPpA5O1PBgAl7ZbTufbl5rKQu1kqkYW7FZjPnF5QpeLu%2FGDKZx3h487a6lre95alLUUoVw4eAPghqbwd1tKOeXTswNNtNuL83qUTuaxWDFHY%2BEfHD7yTVbd5oJs5WDwHw49Rnd9x6na33VjYdDqaz1QXI4naChmSuLC77aVGwHla3cMlGVFmi3Yu1va4AtZmzUZp6NVC9nDLxVYMMCQ9b0GOqUByl7jeHOlzDWoCCDM46lFhXDTD6u5skga%2FEjvhxTfqq5HAtVD93Q%2Fvv%2Fo27p9rhToZ%2Bx6ioChYckwXUto2kcN2JwkUudqlwuGi34hHMvOP%2BzkFjLiyhJmTHFUMk%2F00ueTm5ns3O7L5dcXn%2F%2FHWrVGKKHoIZgbUKs4bnzlOdCSDxVAXsT4haUfhwS0%2B901ekhWXl2sCBPvyebQR585gbJGHfn4CiZp&X-Amz-Signature=e5f8199c912b5dbee4f1a702a8f4c17ab3a9186b2ae2d1e499c9b7d4655b9934&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJN5YYX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC8JzxJ5N6qyk0yaVfOxuMEFK4jlzpudSIF2fSRjuarGQIgb7j4xbxtX7QPSoW9Jr9MLYQvfn1x2gRAXrCiUiQl%2FFAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEo4dUxGbW5eaOKg5CrcA1dfn1BTCOvdNZdz42Ob89P1jvvnH6vDinohHPbpqc0oiH%2B3FzolmtnL%2BBamuXeew88p4OONzmcc1ne%2BBUEcvWrqGTB3wy6b0vuPWL8P8zYGmtSSF0D6n0WmcdpEZXvU4198wgjxqTijEtqPGNJJ%2BlM0QF%2FVdwv8irPs28rSM7ImZvzJJGRdFm%2BeMo1TGc5yFTXwJ%2BcDHqC9h09sh2kguGEow%2BINCKrWWzKe%2B7ymTMNSX2ozUii7IE%2Fp47v1lhA%2FgF9l%2BiE%2FwHFu3SpO%2BIaJ3pLCBAdilcSEBvrg7hGOoVnZvhv%2B5vRsakIvLlQUlLtxMPLszgtpr2GdpxTKt9BaaCE6VDcLOOvcZprcCBW1DItCDmJBh2nsxwSmnLq3n2E5%2FFlkA33MPwGHhregEnO4C3n2Ygfb1VTSunSlSNv38MJYezPpA5O1PBgAl7ZbTufbl5rKQu1kqkYW7FZjPnF5QpeLu%2FGDKZx3h487a6lre95alLUUoVw4eAPghqbwd1tKOeXTswNNtNuL83qUTuaxWDFHY%2BEfHD7yTVbd5oJs5WDwHw49Rnd9x6na33VjYdDqaz1QXI4naChmSuLC77aVGwHla3cMlGVFmi3Yu1va4AtZmzUZp6NVC9nDLxVYMMCQ9b0GOqUByl7jeHOlzDWoCCDM46lFhXDTD6u5skga%2FEjvhxTfqq5HAtVD93Q%2Fvv%2Fo27p9rhToZ%2Bx6ioChYckwXUto2kcN2JwkUudqlwuGi34hHMvOP%2BzkFjLiyhJmTHFUMk%2F00ueTm5ns3O7L5dcXn%2F%2FHWrVGKKHoIZgbUKs4bnzlOdCSDxVAXsT4haUfhwS0%2B901ekhWXl2sCBPvyebQR585gbJGHfn4CiZp&X-Amz-Signature=61978833dda954322918bf89ac0413310ed67eddbe1571affd70979a995d763d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
