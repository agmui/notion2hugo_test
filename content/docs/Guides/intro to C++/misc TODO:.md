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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHI26TKH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCozu1re6FJIhOVa5E3pHB34iZwIdH%2BWz0PzCE45qWLbgIhAKpPXLE1ksArdVNJsECSFqTlcry5v4MR3Wy8bQXrkjlkKv8DCEYQABoMNjM3NDIzMTgzODA1Igxi%2FxvYSw8YiilrI8Mq3AONq8NUY4w3tpVGIu0GpQaOwZMu1NEeFN%2Fl7%2FceEph3oO8QaGKS381vFdFuxZPiyEFg9r6BkARVZnKqJncT%2FCy1B7lwS2TiKUSrnS5L6DGGquANBy9Q5tzPb7vMFohRANNEFQcFpldZGpdPT91Q8u0JrF7zyJCtiP0UTsF88ggA0wtOe7IWGchkELsgpI35i87TRswQa3PZWTT8Ir76Pqlh%2Bl6HAi%2FwvNR7p0U5vPYSXDcsKCzOD%2FQBIiXrreVZORrmq2yON%2BtiPUBmWlVluXWaQ1RQR0XVP47HNPpC3Ng80YGeyC37W9gcYc9gK8xzdvSE%2FQdYQalSZBbxhFetvb1YwhpQWIqTBGV8nT09QlAyFXGnJ1c4IupWMmRWQq9n%2Fy9ccP7pn8ZuzKi10ke0U94Oz%2BldgQOZN4oyaA1iF9UOAYcfME98zyYE9fqb5yls6OETcQxjXa5QjCyR9MnLvBUfGfmMzLxjecQCaBdLhDpIfLl1VO4nejHkDYH96kJ6tpYCFEswoPU%2BXBK8CYZWkcb5dmOYKioeUyqMNRIJQop%2BqXAyUTJHd%2FlMULpYLS0DvqlE8ayNYW8tYnBTopjGTXoU64X4mFLUiwgxYqGjpEdWHXAH3j%2BH%2Becd4Gt4rDDl36u%2BBjqkAa8P94YMwztTAwb8ZVXIDLGoXKXDuoZ42Ro2gwEQ3vl3uhdVCWN%2FxjQr5%2BDqnPAuZdEFXILMO%2FlI5YPvJlH5Rl15H4DtAz6GoIPCgLma3ZV9OivAlK4jrag58LDD2SF%2BOPt6rds3csl7HuyuYdTXsuVZlRMMaQ1MYZYOcwjTvmTvaRISNZ2hoMTuUF9MCqfJseAFYbqe%2FVdbewU%2FOhjahiBJTUhj&X-Amz-Signature=52d46b738271a0c21dacc16d164e8db0afde8ade8f4c4945864421f8104c3a36&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHI26TKH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCozu1re6FJIhOVa5E3pHB34iZwIdH%2BWz0PzCE45qWLbgIhAKpPXLE1ksArdVNJsECSFqTlcry5v4MR3Wy8bQXrkjlkKv8DCEYQABoMNjM3NDIzMTgzODA1Igxi%2FxvYSw8YiilrI8Mq3AONq8NUY4w3tpVGIu0GpQaOwZMu1NEeFN%2Fl7%2FceEph3oO8QaGKS381vFdFuxZPiyEFg9r6BkARVZnKqJncT%2FCy1B7lwS2TiKUSrnS5L6DGGquANBy9Q5tzPb7vMFohRANNEFQcFpldZGpdPT91Q8u0JrF7zyJCtiP0UTsF88ggA0wtOe7IWGchkELsgpI35i87TRswQa3PZWTT8Ir76Pqlh%2Bl6HAi%2FwvNR7p0U5vPYSXDcsKCzOD%2FQBIiXrreVZORrmq2yON%2BtiPUBmWlVluXWaQ1RQR0XVP47HNPpC3Ng80YGeyC37W9gcYc9gK8xzdvSE%2FQdYQalSZBbxhFetvb1YwhpQWIqTBGV8nT09QlAyFXGnJ1c4IupWMmRWQq9n%2Fy9ccP7pn8ZuzKi10ke0U94Oz%2BldgQOZN4oyaA1iF9UOAYcfME98zyYE9fqb5yls6OETcQxjXa5QjCyR9MnLvBUfGfmMzLxjecQCaBdLhDpIfLl1VO4nejHkDYH96kJ6tpYCFEswoPU%2BXBK8CYZWkcb5dmOYKioeUyqMNRIJQop%2BqXAyUTJHd%2FlMULpYLS0DvqlE8ayNYW8tYnBTopjGTXoU64X4mFLUiwgxYqGjpEdWHXAH3j%2BH%2Becd4Gt4rDDl36u%2BBjqkAa8P94YMwztTAwb8ZVXIDLGoXKXDuoZ42Ro2gwEQ3vl3uhdVCWN%2FxjQr5%2BDqnPAuZdEFXILMO%2FlI5YPvJlH5Rl15H4DtAz6GoIPCgLma3ZV9OivAlK4jrag58LDD2SF%2BOPt6rds3csl7HuyuYdTXsuVZlRMMaQ1MYZYOcwjTvmTvaRISNZ2hoMTuUF9MCqfJseAFYbqe%2FVdbewU%2FOhjahiBJTUhj&X-Amz-Signature=104e1eac964364a5e13a462b5bbd9f45475359392a6a2201a21b8e6fde917f32&X-Amz-SignedHeaders=host&x-id=GetObject)

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
