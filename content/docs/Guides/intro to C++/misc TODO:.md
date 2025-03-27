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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFHRNCMI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAjKvxJYdfX8vm6KaC9NABPsXG%2FN17V280YZing92r2AiEAy537c5xfQW3dAe8rOhWGYdk3BurdqIByAZ3UPyEBkTkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIOJuWa4OfXcGfDd8ircA5yv9bKbGroFLEHylRLN2NTmaodFHRBpmtZc8DBhQ9dQhyunHYyk%2FVTT182vFvv2w3sQo%2FMMgaaVmlBBaIdVcBnzA24RdwxLM%2BreM1Z6aDzSAmc6lYlqmbrvYSYLyOP0DE5MM1Q1XSn2Tu%2Fc9Gw5uobBFEfPUhroqRs5JL9tvIgE%2F5VW1OsWOZAjAmENugMiO9PVJjrI%2FfcDtud6sGAI%2Bjf16Qv70sKMJzGwcqANg%2FrU2suNyvIFSTlrYnKZWWtrBRQvXMFG1JuC8vN5aoCCihKQElvAGYP8KRHaIRsikCe8vx8QR4D3Eu93dx3cdbk6LikUykMsgRevWXelNBHOD0XiYqUmBSFc2o3kCQBwnLRuXjytT73xVXir71FRg1amUQn5PCiuQtZ5dyc9ruXMa7gwNorSnW%2BYItU76iwDbj35Japk%2FO%2BYbMLpReIrYy5%2FvIrK8AMtRR%2Fxitn1hcqfSahXPc3UxyQeDvgImKUrSJu1U7Ona3R39h2ZEzvyBIMdEusArKGGo9AftwlLsZJs8A7%2BNwbp2PuuZ09F05zRlb95mXAxg4xV6zDKYNa4AYi4sMwVqJ1TaEggXz8DjWa8F%2FyEUlqzmhslyFXjca5TNk7HlKU4o3%2Bs3fvn6E7RML6Nkr8GOqUB2t6tViPnQOwYNBd0wzdvXG8wRvR44HpDe0lDK7ZAMqJnlWbXXoABeXo7Uaq9BhSFqet7uHxN4aXr68TN%2BUDSZt%2FAbTIUta8rAl3vZX8055pbAeQ1HVVZOfTr2cS6BmPFmgencx0hHO3RWpqyExnSYYrgx7kdvaM77PdCiUlIrPQNe07NhrsuMuAAJo2asCZKHm0JJIhRHa1emnKvg1TiYhmMSxyv&X-Amz-Signature=cfe8bbad7b3dc0e539df8f682da42af40f8ae87d50dca5df3574664c0c724139&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFHRNCMI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAjKvxJYdfX8vm6KaC9NABPsXG%2FN17V280YZing92r2AiEAy537c5xfQW3dAe8rOhWGYdk3BurdqIByAZ3UPyEBkTkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIOJuWa4OfXcGfDd8ircA5yv9bKbGroFLEHylRLN2NTmaodFHRBpmtZc8DBhQ9dQhyunHYyk%2FVTT182vFvv2w3sQo%2FMMgaaVmlBBaIdVcBnzA24RdwxLM%2BreM1Z6aDzSAmc6lYlqmbrvYSYLyOP0DE5MM1Q1XSn2Tu%2Fc9Gw5uobBFEfPUhroqRs5JL9tvIgE%2F5VW1OsWOZAjAmENugMiO9PVJjrI%2FfcDtud6sGAI%2Bjf16Qv70sKMJzGwcqANg%2FrU2suNyvIFSTlrYnKZWWtrBRQvXMFG1JuC8vN5aoCCihKQElvAGYP8KRHaIRsikCe8vx8QR4D3Eu93dx3cdbk6LikUykMsgRevWXelNBHOD0XiYqUmBSFc2o3kCQBwnLRuXjytT73xVXir71FRg1amUQn5PCiuQtZ5dyc9ruXMa7gwNorSnW%2BYItU76iwDbj35Japk%2FO%2BYbMLpReIrYy5%2FvIrK8AMtRR%2Fxitn1hcqfSahXPc3UxyQeDvgImKUrSJu1U7Ona3R39h2ZEzvyBIMdEusArKGGo9AftwlLsZJs8A7%2BNwbp2PuuZ09F05zRlb95mXAxg4xV6zDKYNa4AYi4sMwVqJ1TaEggXz8DjWa8F%2FyEUlqzmhslyFXjca5TNk7HlKU4o3%2Bs3fvn6E7RML6Nkr8GOqUB2t6tViPnQOwYNBd0wzdvXG8wRvR44HpDe0lDK7ZAMqJnlWbXXoABeXo7Uaq9BhSFqet7uHxN4aXr68TN%2BUDSZt%2FAbTIUta8rAl3vZX8055pbAeQ1HVVZOfTr2cS6BmPFmgencx0hHO3RWpqyExnSYYrgx7kdvaM77PdCiUlIrPQNe07NhrsuMuAAJo2asCZKHm0JJIhRHa1emnKvg1TiYhmMSxyv&X-Amz-Signature=478481bb8206d78c1b4d70e5cb2f1969c1baacfd0998b3aaff4c577993b75e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
