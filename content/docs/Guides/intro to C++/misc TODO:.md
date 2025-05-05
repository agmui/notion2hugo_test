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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35LXRB7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfSAsoLebX%2Bvcwyu%2FPyHl76uSm07MrRZ2Lqlqik%2BFQSAiEAxGrne6QD2rY%2F%2Fonx8UPwsPtoJijcZylk01fKWbOAtigq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDO2ejxJLmNrz8xj%2BDCrcA4tIy6nAWUbOXxzc3vsQGIXr4ph6SBODKX8QnNFiw1x%2F%2BFVsBd9vtNmk8J1UbKsXK8QAewVgQ0XDmnkJMybtR10xG%2FYuhFLuDYBy5GzRyPEgxDNTSsP1LJg3bYixB%2FMJbuasOOw51jMFlurasChdLQYspu%2Fx76Ri4zqlOOddKUI2rwPl0wQGXrD7ECqpWSnJutulXjXqnmDGCLAqUQOnRHNVVGziALsgoFUhEsx3KgWUE8hY08f2SHL1xKFIMP9ME3ORUMkd%2FbZwgSp%2FBaphgfKwq6l6jwnq8L6U6PvqyO1i%2Ff8SnWA1Gb0SIuYYFWzgpYa4f58ii%2BJdkttmP5aPwECMpzTXcF7bhOgm%2FXMJ88GYK%2BwaEeD9%2FbOqyr2JGECjE3SAlEl1sOHwqNvXu5ul3nyloL%2FrBGvfq4MN1m%2B9yj3zvK0D7XXAcb37EqRIHx8JPBlOBbU7emLPTqW2zOhs8AIp6rWN94epSZiUE0BpJ%2Fp8YQAtqg%2B4rBfH%2FARbX8sL124byKsvx6PgclfkQfgLvZOBA6DXTpyS394sl5oQ7s5ikCDkwCZ%2BEri2h6riP%2FGmPTgzSqw%2FAnTQVMge8ENmM1Xr6f8bfwoWSwhO2rwXoN20AmdgJMK9agbQ28CMMPvI48AGOqUB6QsP22spGnEC5ehzP0npaoEP0YneS38%2FwffNQgs1gL5tzZ8hxFoBBfzVK56GbUJ25kbkVddYsZnieMsEurD7%2B5WrJ%2FTXHPVI%2BtQlSd8QttLMMOa%2FtuREaSk859fj%2FOyNUXEOCxx2vHQXvQ3t4LXT1t2Z5MNLQ5tI8P2jSF6diXy%2B6HkrP76zQOSryFVG%2Fi7s4rs%2F4hQJMweiV1s3ePNUUxF22A26&X-Amz-Signature=2f4a6be39cb2da463a2e1dd25b678165e750ae9043a957ac1e7660e2e6e355c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35LXRB7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfSAsoLebX%2Bvcwyu%2FPyHl76uSm07MrRZ2Lqlqik%2BFQSAiEAxGrne6QD2rY%2F%2Fonx8UPwsPtoJijcZylk01fKWbOAtigq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDO2ejxJLmNrz8xj%2BDCrcA4tIy6nAWUbOXxzc3vsQGIXr4ph6SBODKX8QnNFiw1x%2F%2BFVsBd9vtNmk8J1UbKsXK8QAewVgQ0XDmnkJMybtR10xG%2FYuhFLuDYBy5GzRyPEgxDNTSsP1LJg3bYixB%2FMJbuasOOw51jMFlurasChdLQYspu%2Fx76Ri4zqlOOddKUI2rwPl0wQGXrD7ECqpWSnJutulXjXqnmDGCLAqUQOnRHNVVGziALsgoFUhEsx3KgWUE8hY08f2SHL1xKFIMP9ME3ORUMkd%2FbZwgSp%2FBaphgfKwq6l6jwnq8L6U6PvqyO1i%2Ff8SnWA1Gb0SIuYYFWzgpYa4f58ii%2BJdkttmP5aPwECMpzTXcF7bhOgm%2FXMJ88GYK%2BwaEeD9%2FbOqyr2JGECjE3SAlEl1sOHwqNvXu5ul3nyloL%2FrBGvfq4MN1m%2B9yj3zvK0D7XXAcb37EqRIHx8JPBlOBbU7emLPTqW2zOhs8AIp6rWN94epSZiUE0BpJ%2Fp8YQAtqg%2B4rBfH%2FARbX8sL124byKsvx6PgclfkQfgLvZOBA6DXTpyS394sl5oQ7s5ikCDkwCZ%2BEri2h6riP%2FGmPTgzSqw%2FAnTQVMge8ENmM1Xr6f8bfwoWSwhO2rwXoN20AmdgJMK9agbQ28CMMPvI48AGOqUB6QsP22spGnEC5ehzP0npaoEP0YneS38%2FwffNQgs1gL5tzZ8hxFoBBfzVK56GbUJ25kbkVddYsZnieMsEurD7%2B5WrJ%2FTXHPVI%2BtQlSd8QttLMMOa%2FtuREaSk859fj%2FOyNUXEOCxx2vHQXvQ3t4LXT1t2Z5MNLQ5tI8P2jSF6diXy%2B6HkrP76zQOSryFVG%2Fi7s4rs%2F4hQJMweiV1s3ePNUUxF22A26&X-Amz-Signature=23728a5c099964cc4a8dbd4c84007e18bb94099b7cbbedfa3a1fa0419ad8d46a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
