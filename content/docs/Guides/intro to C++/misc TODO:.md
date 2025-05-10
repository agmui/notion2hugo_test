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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2DYHQV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUXO8o0vi9SFjDszXpPQW5g5vtpoaBnl6R02Ifljl0KwIgKpyWlAlXvSD%2FeuVtDt5X%2BCBigZcEwz%2FsVyU38eXY3PYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7OqQPIXqHvGa03kyrcA%2F3rqveqMmJ%2BfGFX4ShITE%2B92j6oikRs3GIMMySm8u3%2FIptV7Zwj1KnkRY7919lq9OvHNuyeACcW3KaO0aukk1cMttwjpQpc5bfipB32iCrvdMCAg%2BOSsrUkFml%2FKt5kpQ0jBljNs%2Fc9JtoxlyOA1NAZXM4iiDFBIjTHVFZS1NvcwijCuUdn5GtLN8vPL5YqHz7mtMLNmRvcCtChoKHxo9%2BfkE4%2FD0jXrjqHU5j6mupktReuUxLYp%2BMLS5cmIrf8lhB1LFcNwpk%2FM6duGHKW%2Fe2PI8txlszb9a6DXIRUFREMDfQ0B5CCLszT5xHtKpsGd8rIxZcRilaUfXlLhfufeljft4fnbu%2B%2FiurIER742U8uuNtzPQN6EgrqBGRyoEMrJclRnvAbP%2BpesG6VFRVWjDOPV8LGakLO7De7wtwk1F18j%2BPC%2BMmk%2B0xJXn8Fq7%2BEGMctrOaqzgSothHimhmRgY6LF8M%2Bek5Lh9yF4Z%2F4dbYz2tcmzf5F1KC2%2FGHZ5Bo3XxfB4fAPn%2BezOks%2B4eV%2FWckMx6FSCwk4WAyvHH5LBPi1lf08%2F6Nqcl882QTaPMVMGWZiwfqSqmmIY59Ca6e21XNRrL04K3su8wUqpOvy7H%2F9ymI8ZEB%2BbPOdzVWOMMeP%2FMAGOqUBRS3aoeUnwFBFXWN07LD8oie0vaZkScg4RLmehNgH990R6B1SxNQsxvOHZX3LUjVfEBpwXMMkwSq5IBd7aC8bYlH5U0LhJS8nmyTRO769j39G%2Fwr%2F%2BTRAnBMmiVmY%2FfK%2Fe7AdcRGx3OgYl273vqbM0LuDhURq7uopGBIUo0h6gl%2FU70%2BRXGYIgIi2QJnDUUkl2EhO9Jv09KR7j5l%2B44x5YeSmjvzs&X-Amz-Signature=f7ed31576eb48795550140895d0c14bc1411c464b0f90699966f1a3e636ae40a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2DYHQV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUXO8o0vi9SFjDszXpPQW5g5vtpoaBnl6R02Ifljl0KwIgKpyWlAlXvSD%2FeuVtDt5X%2BCBigZcEwz%2FsVyU38eXY3PYqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7OqQPIXqHvGa03kyrcA%2F3rqveqMmJ%2BfGFX4ShITE%2B92j6oikRs3GIMMySm8u3%2FIptV7Zwj1KnkRY7919lq9OvHNuyeACcW3KaO0aukk1cMttwjpQpc5bfipB32iCrvdMCAg%2BOSsrUkFml%2FKt5kpQ0jBljNs%2Fc9JtoxlyOA1NAZXM4iiDFBIjTHVFZS1NvcwijCuUdn5GtLN8vPL5YqHz7mtMLNmRvcCtChoKHxo9%2BfkE4%2FD0jXrjqHU5j6mupktReuUxLYp%2BMLS5cmIrf8lhB1LFcNwpk%2FM6duGHKW%2Fe2PI8txlszb9a6DXIRUFREMDfQ0B5CCLszT5xHtKpsGd8rIxZcRilaUfXlLhfufeljft4fnbu%2B%2FiurIER742U8uuNtzPQN6EgrqBGRyoEMrJclRnvAbP%2BpesG6VFRVWjDOPV8LGakLO7De7wtwk1F18j%2BPC%2BMmk%2B0xJXn8Fq7%2BEGMctrOaqzgSothHimhmRgY6LF8M%2Bek5Lh9yF4Z%2F4dbYz2tcmzf5F1KC2%2FGHZ5Bo3XxfB4fAPn%2BezOks%2B4eV%2FWckMx6FSCwk4WAyvHH5LBPi1lf08%2F6Nqcl882QTaPMVMGWZiwfqSqmmIY59Ca6e21XNRrL04K3su8wUqpOvy7H%2F9ymI8ZEB%2BbPOdzVWOMMeP%2FMAGOqUBRS3aoeUnwFBFXWN07LD8oie0vaZkScg4RLmehNgH990R6B1SxNQsxvOHZX3LUjVfEBpwXMMkwSq5IBd7aC8bYlH5U0LhJS8nmyTRO769j39G%2Fwr%2F%2BTRAnBMmiVmY%2FfK%2Fe7AdcRGx3OgYl273vqbM0LuDhURq7uopGBIUo0h6gl%2FU70%2BRXGYIgIi2QJnDUUkl2EhO9Jv09KR7j5l%2B44x5YeSmjvzs&X-Amz-Signature=8689c0a501c1e9d8ac8acfb42951695759f6934cf0396fb1e89dae774e61a91b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
