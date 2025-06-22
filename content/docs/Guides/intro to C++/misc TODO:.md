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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633J3PZVP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRlKy77SikHFeBwuiu4VPMOGzLNND4QQfGmffwtwk%2BZAiEArAIHRHAp%2B%2B84fwhWiq23NJaSbQOCU5yItaZFLl0Dg4sqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9kprO2bhMxJCtUySrcAzPSLf5RJfonao%2Fh13y9qfRwlspc2Y%2BY1hcEJ3Oy3yXk3eiKr00EYpBLsn%2BIeEERbJEil4bsLcvsXA13Qhf3wmuiJckBnvZ1LG55tRJ1AoNTiQB3eiCTwYvrXmzvUoAHOTq8RgNRdcg7ZPC%2FRafzE7vS9ayIJzLUuchSpsIciVBFTBDMMuvgigjB0e%2BrVwj9h3TA6FZBq7cvQbb%2Br43L4S3W7NrEtb3Kb5O69l77G4alR8SWPLhBi92ZJmPMaLN4hlHqAobBnKdMQ8DdeyYwIfsI0i%2F1%2F73V6UpikSBXZQpqIdlHLruF1tPPeFRNU8t9O%2Fn9KJ%2FZiQQ9ddhzIX%2FzO12DOztapNnzYar0qUMmb48O2zDZ5wYhJ1uCyMTy9qF1Wg5lxzdPFcogg1vjDBcp0U042AT%2BOqGgUW7nIPaoWZ9I%2FL3KeGQOJWX2Kkr1mU3oC7b9nnsNoNNaagrqDZyJAOuF%2FfYoHMylyhidh0SxHjBW78VQvw7qOLUGBe7YshFBd%2Fg7yFd91WKvQaHYHzygT7CJpmqDmtweFsIPHubJlqbbpq5hrCYvTMA4zvnlNWqz7Eg4%2BnVF76kPdsY00FXjjHG6SiIhPgEJsIKh68Z%2BNKnYh%2BcNYnnYRnL6urMFMIq23sIGOqUBZ6XaU17KM%2BexZhuDItyXfOJLVBaOqTakPkgb4pQD95Or2v0llpTYJLQbWoxTq6yDcwnip%2F5j8gIZvuJVhlEV5GqcQcUrsOHAwovsNCLbJmkcp9COG4F9%2BnrSOEBP9Wl3frAbIIUi7x7cN4DII5rbukwJxSCO0K8%2FJhxm9kP5ks%2B6FNqadHZnlSyMToO6Yoncid9Oob2ErKLREuD%2Bzwg41nS93oMs&X-Amz-Signature=f3fb2b5d3a269f8a546429f3e10ce4c0dfd5cda0152b9ca1e5d051a0a8203e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633J3PZVP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRlKy77SikHFeBwuiu4VPMOGzLNND4QQfGmffwtwk%2BZAiEArAIHRHAp%2B%2B84fwhWiq23NJaSbQOCU5yItaZFLl0Dg4sqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9kprO2bhMxJCtUySrcAzPSLf5RJfonao%2Fh13y9qfRwlspc2Y%2BY1hcEJ3Oy3yXk3eiKr00EYpBLsn%2BIeEERbJEil4bsLcvsXA13Qhf3wmuiJckBnvZ1LG55tRJ1AoNTiQB3eiCTwYvrXmzvUoAHOTq8RgNRdcg7ZPC%2FRafzE7vS9ayIJzLUuchSpsIciVBFTBDMMuvgigjB0e%2BrVwj9h3TA6FZBq7cvQbb%2Br43L4S3W7NrEtb3Kb5O69l77G4alR8SWPLhBi92ZJmPMaLN4hlHqAobBnKdMQ8DdeyYwIfsI0i%2F1%2F73V6UpikSBXZQpqIdlHLruF1tPPeFRNU8t9O%2Fn9KJ%2FZiQQ9ddhzIX%2FzO12DOztapNnzYar0qUMmb48O2zDZ5wYhJ1uCyMTy9qF1Wg5lxzdPFcogg1vjDBcp0U042AT%2BOqGgUW7nIPaoWZ9I%2FL3KeGQOJWX2Kkr1mU3oC7b9nnsNoNNaagrqDZyJAOuF%2FfYoHMylyhidh0SxHjBW78VQvw7qOLUGBe7YshFBd%2Fg7yFd91WKvQaHYHzygT7CJpmqDmtweFsIPHubJlqbbpq5hrCYvTMA4zvnlNWqz7Eg4%2BnVF76kPdsY00FXjjHG6SiIhPgEJsIKh68Z%2BNKnYh%2BcNYnnYRnL6urMFMIq23sIGOqUBZ6XaU17KM%2BexZhuDItyXfOJLVBaOqTakPkgb4pQD95Or2v0llpTYJLQbWoxTq6yDcwnip%2F5j8gIZvuJVhlEV5GqcQcUrsOHAwovsNCLbJmkcp9COG4F9%2BnrSOEBP9Wl3frAbIIUi7x7cN4DII5rbukwJxSCO0K8%2FJhxm9kP5ks%2B6FNqadHZnlSyMToO6Yoncid9Oob2ErKLREuD%2Bzwg41nS93oMs&X-Amz-Signature=6180de48ae283330e58b00d8cdbc29f7be72cb91c424638585b8cbf8ec74b190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
