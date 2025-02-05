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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KZCRWC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDWuZKmSl6tIFUWBdV4Bu4FxoQ61DJcdxr3q4rymcjWlAIgMCI%2Bd9OK17sa1AiWctSNcCvJBScLR170MQ8UWQa9C4sq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEZCBWxn7UfRjqlaXyrcA5Hy54NUUG4Y7mZ4X%2Fx5vaOHH8XuiPfoKNILOXmK5HlJEdtnY%2BcqmRKHe3UWpUHx7Q0H6jwaUQWxFM3cySwXQmiEHJwspYh3zXSGKFK9aIaB9u9%2B1F8jBXC0L2MkYpR7Vo4G%2FoQHTZaKuEsbKnL7KrCDkEd6dnRgvpMpkBz5mqBgJcvxKh%2BRkf9eYlY39lA%2FV0lqE67qOvDca%2FC247Aew3PFVnvCFKgt6mfumnYF6kk3WXmgoW2sABCLceIjQE6cucB%2BA4aQOsvNsiyT%2BBa98%2FVORVGW2MpvQZ1t%2F99210OtO3CVWfB5%2Baj9EztWWhEh5%2BJ%2BzMk5DdKuh5SqMb8Mw7aWj1xGFIhz5L%2FjCDYz2AJGAcvTWImdjdSYKkCu9BoRg7t14IRlEEQcbk1LKTkTWfF6H7bMG7mnCMmK1WSias8xXriracoqAM3zAEUB%2Fujo0ZwPt85R7jty0IHpDyWNt%2BzW3MJlL2QtvHOQZwWdJgJ6JWP93lsVwb0AhzI9t4r2Fi9zOkCDvNflU7tuF%2FzzAtXDwiuuS2FXtJ40XhyiXVUPD3DHPPy%2BX9GwF1%2FKr10ZaKKfS%2FcB2dSGfkJVPlnvJguCBkF25GtU4mWnoSQG%2FS%2FWqBC5BCXs9NZ1YerMMN%2Fljb0GOqUBwVExjJgbAk%2FHpzzNADFpoiyNCjR1vSrQvESpULQByJmph1BlGfaudvbzik9%2BxNqjBnj2eHKloeL%2BRuXLhqi2qLenxodexWAoNh0HgC4nd5AXBzLak9fJHHG8niXdBcs1MC2CeXqJ9bPRm9UbmTEKGq5cYNtt5h63IE9AdIZKRvaGxupMLzx0v2ga3a9jUNYKoNxce4xC8ZiN6s%2FQ86QVG4h8GEns&X-Amz-Signature=239bdb3c8ccc85697f83a6deb9ca7887641dd402c4a1553fd64ad405f5f50559&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KZCRWC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDWuZKmSl6tIFUWBdV4Bu4FxoQ61DJcdxr3q4rymcjWlAIgMCI%2Bd9OK17sa1AiWctSNcCvJBScLR170MQ8UWQa9C4sq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEZCBWxn7UfRjqlaXyrcA5Hy54NUUG4Y7mZ4X%2Fx5vaOHH8XuiPfoKNILOXmK5HlJEdtnY%2BcqmRKHe3UWpUHx7Q0H6jwaUQWxFM3cySwXQmiEHJwspYh3zXSGKFK9aIaB9u9%2B1F8jBXC0L2MkYpR7Vo4G%2FoQHTZaKuEsbKnL7KrCDkEd6dnRgvpMpkBz5mqBgJcvxKh%2BRkf9eYlY39lA%2FV0lqE67qOvDca%2FC247Aew3PFVnvCFKgt6mfumnYF6kk3WXmgoW2sABCLceIjQE6cucB%2BA4aQOsvNsiyT%2BBa98%2FVORVGW2MpvQZ1t%2F99210OtO3CVWfB5%2Baj9EztWWhEh5%2BJ%2BzMk5DdKuh5SqMb8Mw7aWj1xGFIhz5L%2FjCDYz2AJGAcvTWImdjdSYKkCu9BoRg7t14IRlEEQcbk1LKTkTWfF6H7bMG7mnCMmK1WSias8xXriracoqAM3zAEUB%2Fujo0ZwPt85R7jty0IHpDyWNt%2BzW3MJlL2QtvHOQZwWdJgJ6JWP93lsVwb0AhzI9t4r2Fi9zOkCDvNflU7tuF%2FzzAtXDwiuuS2FXtJ40XhyiXVUPD3DHPPy%2BX9GwF1%2FKr10ZaKKfS%2FcB2dSGfkJVPlnvJguCBkF25GtU4mWnoSQG%2FS%2FWqBC5BCXs9NZ1YerMMN%2Fljb0GOqUBwVExjJgbAk%2FHpzzNADFpoiyNCjR1vSrQvESpULQByJmph1BlGfaudvbzik9%2BxNqjBnj2eHKloeL%2BRuXLhqi2qLenxodexWAoNh0HgC4nd5AXBzLak9fJHHG8niXdBcs1MC2CeXqJ9bPRm9UbmTEKGq5cYNtt5h63IE9AdIZKRvaGxupMLzx0v2ga3a9jUNYKoNxce4xC8ZiN6s%2FQ86QVG4h8GEns&X-Amz-Signature=8c8b408f7a4990ebeead426341202775dc25bbd7850b3ac7c8ffcc0c148ba650&X-Amz-SignedHeaders=host&x-id=GetObject)

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
