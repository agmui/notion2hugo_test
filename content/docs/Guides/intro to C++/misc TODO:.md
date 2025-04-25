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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN4GARUH%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUFAkf%2BpYlG3l%2FAnxj1jinDbeUpyCt3HTbhRk335VCBgIgL7of5xJAmfLPUfKuAl6NT5QlRhRHlaSaB8rJ%2B4qsNMsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJYH65lHVA03CtD8XCrcAybwYr7qz24jivBV%2FLno1YiGnP4Zl%2FQ70OlKVA2CYhs3sh7atgN0QcF7%2FSeYVYq9yLHsvURv253jnjQTi2xDsl0dMqg7roWOJZScj7CxjKQgHDfqnU57LpvlJh6UMukWzd0Kqy63dFehxywqYqO38jNKbRalnBSEwWIx%2B3d2tUagVP3m2f2%2Bva4qQZwcNb8A%2B9gai23q8rl05oO1TkY7ko%2B8WjQ7%2FxB5imErI%2F0TYVmOvDh%2BY%2FaWd8TrzNzvG50zentFgZlSzyJwrAi6c3VnwzsCX1%2BDwy9C%2FnwoQ%2FY4OVVR0W%2FKHPPHTgiJ0aWqbXE3dkPAFXqN%2Bm4aPf9MRNBDx%2Bo77nrxIo0DfPnf4lzCJmX5aotqZ5YqYTC8j30y644qKL1hk4nK9sUWll%2BPgZoA%2B1taUjK6Q9Z%2BiEViMJjLWuOyfXpWsZzQtdcwjOShkSIyfU82tGfOFdwAkNZuieAsC3kOxfx%2B7skuqhXDoHPsJ8UNDgb%2FNH1qVzmYmBIqRqzR95Kvflxa%2FrJS6Q7%2B3pfblQqSrhCBQWbvNNX5wJMjkLX1tO3GPW46Xif04lbJUMBf7FDGS%2BoZlY0GjZojOEKzfyoJ3%2BhBjCMlAqg98vA%2BF4R1kkwJSQbsEpywJccjMNC3r8AGOqUB5ouyEi%2BuLJApBj%2FEwa44fG1R7Aao9SRSdSjK8l9gFT8hA%2BfnnJmJHBs%2FDqdpZ2jCATDU04kCP3wLt%2BZ9qztlX7oTmveSUcgRhX5mt0iMV4kcPQrqcJ6PgWgxaYMK2eDS8UW0zRR%2B7mnTjyRU9XhGH13jsjnHChVGssK2wo%2BgrvA4GQShN7Fx0%2FbDwLelPYPM9bcQ0WCX1n8iiMNXgXKVkIXLlRD8&X-Amz-Signature=6a4cdc43f9ab08841113824ae7ec2c416d0ab93a2cde86852005f3e7bee1e651&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN4GARUH%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUFAkf%2BpYlG3l%2FAnxj1jinDbeUpyCt3HTbhRk335VCBgIgL7of5xJAmfLPUfKuAl6NT5QlRhRHlaSaB8rJ%2B4qsNMsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJYH65lHVA03CtD8XCrcAybwYr7qz24jivBV%2FLno1YiGnP4Zl%2FQ70OlKVA2CYhs3sh7atgN0QcF7%2FSeYVYq9yLHsvURv253jnjQTi2xDsl0dMqg7roWOJZScj7CxjKQgHDfqnU57LpvlJh6UMukWzd0Kqy63dFehxywqYqO38jNKbRalnBSEwWIx%2B3d2tUagVP3m2f2%2Bva4qQZwcNb8A%2B9gai23q8rl05oO1TkY7ko%2B8WjQ7%2FxB5imErI%2F0TYVmOvDh%2BY%2FaWd8TrzNzvG50zentFgZlSzyJwrAi6c3VnwzsCX1%2BDwy9C%2FnwoQ%2FY4OVVR0W%2FKHPPHTgiJ0aWqbXE3dkPAFXqN%2Bm4aPf9MRNBDx%2Bo77nrxIo0DfPnf4lzCJmX5aotqZ5YqYTC8j30y644qKL1hk4nK9sUWll%2BPgZoA%2B1taUjK6Q9Z%2BiEViMJjLWuOyfXpWsZzQtdcwjOShkSIyfU82tGfOFdwAkNZuieAsC3kOxfx%2B7skuqhXDoHPsJ8UNDgb%2FNH1qVzmYmBIqRqzR95Kvflxa%2FrJS6Q7%2B3pfblQqSrhCBQWbvNNX5wJMjkLX1tO3GPW46Xif04lbJUMBf7FDGS%2BoZlY0GjZojOEKzfyoJ3%2BhBjCMlAqg98vA%2BF4R1kkwJSQbsEpywJccjMNC3r8AGOqUB5ouyEi%2BuLJApBj%2FEwa44fG1R7Aao9SRSdSjK8l9gFT8hA%2BfnnJmJHBs%2FDqdpZ2jCATDU04kCP3wLt%2BZ9qztlX7oTmveSUcgRhX5mt0iMV4kcPQrqcJ6PgWgxaYMK2eDS8UW0zRR%2B7mnTjyRU9XhGH13jsjnHChVGssK2wo%2BgrvA4GQShN7Fx0%2FbDwLelPYPM9bcQ0WCX1n8iiMNXgXKVkIXLlRD8&X-Amz-Signature=6a24ff224c6790f48e12d617faa31da934d44a77b1b08a56d664be585048f221&X-Amz-SignedHeaders=host&x-id=GetObject)

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
