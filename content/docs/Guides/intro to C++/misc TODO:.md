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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVBXPIB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICi7%2FkFaRhVikEg6FEjci0vq7uFBMUMxyTjU8V4hxbMGAiBHHqxE94AS4ShNqPnsGFvR68nxmDpLUEj3km7PcTLwNCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5DFA9R8ZbuD%2BS4iKtwD4xneWOqLl33oBvlrePTKan2eoryehqZ%2FTAzkxGohKVRg%2BI3eXb7EAMunK1zwPa0w2c8X8fwJ8pa%2B46xwhrCzaM7rghJEtTtV%2BFqOjKOGHjfNVSXJvad9PFxcDhVAqpiQ9fueW80TZtH4G6S2ASmNUMG87pUucp6c3ThjKoHqwxynJUFt5T3si2APOQXhVu15vGvUa2bNrGK6TED0o2Psh3MKJTdYI4yKQdyibBwYZL1Q7AJPNpBI6%2FJpXbBYHkDgsdwnPZB3bXxJsAq%2B0NGrTya5fT0IwCKoJk9250%2Fczm0bujfBlz2o5ig2ebjxwjOd7IO%2BAWgWL6flTwjhQPMZiqApRlf0TQ9BAgPNGpS%2F%2Beh6DgVtEGzOA5tkWEpFklLlxK%2Ff%2BSckkzQAaOS1f2SWKNXOgaI6sW9mPOwidRk%2FjRX%2FHg%2BaedWAjvPWLS9iiVBCQHoEiscqgdB7eNTrgBPhwSIdP6nQJG7itK1SnAoOzx38KGfjDbKK2TEx17u2A3yX33lmK%2BP2A0KHUR1TtIlB89pzh3zA7lb7qwuBudzg72Wt5%2FZwr9yguL8JOonx7dprfmJ%2BFLlMAaTDRK46QoJ%2BSiyTbDxGZ8%2FEXXo67vbRZ4HD%2ByA5DLCWb29WqxQwgbDwvwY6pgFE5sO%2FulM6%2FsTgBK0yamr8qqessWEZMU0ucZQb85OAhVptAH74MuUkveDtCLa1X8eFa4EbnIiTLgNlhpmEzafMI8SFCkV5LPuoSvHFATJCcDAMphkFUt0xyL%2FephOaOEYh1kx%2BNUMJaScgeYjXAdYsN%2BrgLN53UxrYtPNRQUYWmP%2Bt8HTBIEo5dzDhR8Z2z0F8OleZIl76zCK%2Bl09lCYcxHMiZ1Pvx&X-Amz-Signature=855a79a5ae007799d05419f0043d88b4f0faae5095d102d236f3e07e0ae232b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVBXPIB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICi7%2FkFaRhVikEg6FEjci0vq7uFBMUMxyTjU8V4hxbMGAiBHHqxE94AS4ShNqPnsGFvR68nxmDpLUEj3km7PcTLwNCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5DFA9R8ZbuD%2BS4iKtwD4xneWOqLl33oBvlrePTKan2eoryehqZ%2FTAzkxGohKVRg%2BI3eXb7EAMunK1zwPa0w2c8X8fwJ8pa%2B46xwhrCzaM7rghJEtTtV%2BFqOjKOGHjfNVSXJvad9PFxcDhVAqpiQ9fueW80TZtH4G6S2ASmNUMG87pUucp6c3ThjKoHqwxynJUFt5T3si2APOQXhVu15vGvUa2bNrGK6TED0o2Psh3MKJTdYI4yKQdyibBwYZL1Q7AJPNpBI6%2FJpXbBYHkDgsdwnPZB3bXxJsAq%2B0NGrTya5fT0IwCKoJk9250%2Fczm0bujfBlz2o5ig2ebjxwjOd7IO%2BAWgWL6flTwjhQPMZiqApRlf0TQ9BAgPNGpS%2F%2Beh6DgVtEGzOA5tkWEpFklLlxK%2Ff%2BSckkzQAaOS1f2SWKNXOgaI6sW9mPOwidRk%2FjRX%2FHg%2BaedWAjvPWLS9iiVBCQHoEiscqgdB7eNTrgBPhwSIdP6nQJG7itK1SnAoOzx38KGfjDbKK2TEx17u2A3yX33lmK%2BP2A0KHUR1TtIlB89pzh3zA7lb7qwuBudzg72Wt5%2FZwr9yguL8JOonx7dprfmJ%2BFLlMAaTDRK46QoJ%2BSiyTbDxGZ8%2FEXXo67vbRZ4HD%2ByA5DLCWb29WqxQwgbDwvwY6pgFE5sO%2FulM6%2FsTgBK0yamr8qqessWEZMU0ucZQb85OAhVptAH74MuUkveDtCLa1X8eFa4EbnIiTLgNlhpmEzafMI8SFCkV5LPuoSvHFATJCcDAMphkFUt0xyL%2FephOaOEYh1kx%2BNUMJaScgeYjXAdYsN%2BrgLN53UxrYtPNRQUYWmP%2Bt8HTBIEo5dzDhR8Z2z0F8OleZIl76zCK%2Bl09lCYcxHMiZ1Pvx&X-Amz-Signature=287fc3996bc3d53b388f47c85c1794977c8f5ae1ad9418137c3855219a1215fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
