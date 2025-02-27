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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2SVGHI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDijTW3ZSXJiswo5wmd2NEIvHFtWVYnDEQqYFhat8ieZAIhAMusTjjiotaPsCYvrNjmdLaBJHwzWlr4%2By7zZbmXkrn0Kv8DCGsQABoMNjM3NDIzMTgzODA1IgwKRipmjscTrUw268Aq3APJvmNxB4Dkr41QuBIj7kpQDPIOx9gaWkwyOgrS%2F9K%2FQ5wh6dn4iIRP6cb39Dd0hMiJJVHF5yTACWESmOKa6zPVbDD0mpLcEbw7aAj52YA8FIFS2vFAPR1LwdD4QQpuzg%2FB2VEbgOfR1jX0tEvFoMd6V%2FXVSDty3MHcbpzoEgqq0C1MZNpX1Q6guNyIKQSGDhBPYQAAab%2BBOyknjcpju45U%2BzvZ%2FMp8IhJFZi8pCFX54z8YpZLLWY0Piz2wgaWPibouvaD0P8tr7o6Mlaoi15zhaO%2BJRYcBzRug3u0bsHpFAb993mdr9M0XbTrwI67yQiycYD9py4G%2BBva3rmiKs2a1wejrt0NAy0rPT15CudqnC%2FGUhEREclf5yCABTCBfKcCRxag91p4JGrvrg6%2FrV0PSgFhy2PPv5j%2FZ3IoEyMd4ppXPHouKxNfglPrrCg4SUIklxc8%2FBdQ%2BXUTiJsOLOxu%2FVZI7eBFM%2BsAE%2FSlxcH6rTSQTTgKyp2RUD9UZkTz3gtmo0JhrQRYrt9rf6siVrNckqJYKsCVL0E%2BMlfALmsRbEequoSwewKIRlFAlg71o%2BPUI0p3cGnerMGYP8BSKBVbmDXsuUOLdhwZsQMWJ24qzI%2BLpR3mo2AtmVt%2FVzTCelP%2B9BjqkAV8J3KwNHBQEIXVKyir3BWKPjth0CSzlQvT0UyfaqV8Q7KuI0dyPFNxHC2xdxQsyWTVSnBEJgBZkr70apcFVisP4XA3ZjL9Bh3ovr6k72FS1k7I0%2BzNDjKra1iqyz4r2RABe3e8ifAwPfDsfkzJ0kUiEyQWJvOU6X3RblFwMc74WmQFigw5tJ5JOE82pRzNV7BV%2BGprtosC1Dlbz5kQ8oTTToGDw&X-Amz-Signature=9d7c3ef9ca7c602347ee110996a2ec8afa3c87d48e0e566666603a96af53f500&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2SVGHI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDijTW3ZSXJiswo5wmd2NEIvHFtWVYnDEQqYFhat8ieZAIhAMusTjjiotaPsCYvrNjmdLaBJHwzWlr4%2By7zZbmXkrn0Kv8DCGsQABoMNjM3NDIzMTgzODA1IgwKRipmjscTrUw268Aq3APJvmNxB4Dkr41QuBIj7kpQDPIOx9gaWkwyOgrS%2F9K%2FQ5wh6dn4iIRP6cb39Dd0hMiJJVHF5yTACWESmOKa6zPVbDD0mpLcEbw7aAj52YA8FIFS2vFAPR1LwdD4QQpuzg%2FB2VEbgOfR1jX0tEvFoMd6V%2FXVSDty3MHcbpzoEgqq0C1MZNpX1Q6guNyIKQSGDhBPYQAAab%2BBOyknjcpju45U%2BzvZ%2FMp8IhJFZi8pCFX54z8YpZLLWY0Piz2wgaWPibouvaD0P8tr7o6Mlaoi15zhaO%2BJRYcBzRug3u0bsHpFAb993mdr9M0XbTrwI67yQiycYD9py4G%2BBva3rmiKs2a1wejrt0NAy0rPT15CudqnC%2FGUhEREclf5yCABTCBfKcCRxag91p4JGrvrg6%2FrV0PSgFhy2PPv5j%2FZ3IoEyMd4ppXPHouKxNfglPrrCg4SUIklxc8%2FBdQ%2BXUTiJsOLOxu%2FVZI7eBFM%2BsAE%2FSlxcH6rTSQTTgKyp2RUD9UZkTz3gtmo0JhrQRYrt9rf6siVrNckqJYKsCVL0E%2BMlfALmsRbEequoSwewKIRlFAlg71o%2BPUI0p3cGnerMGYP8BSKBVbmDXsuUOLdhwZsQMWJ24qzI%2BLpR3mo2AtmVt%2FVzTCelP%2B9BjqkAV8J3KwNHBQEIXVKyir3BWKPjth0CSzlQvT0UyfaqV8Q7KuI0dyPFNxHC2xdxQsyWTVSnBEJgBZkr70apcFVisP4XA3ZjL9Bh3ovr6k72FS1k7I0%2BzNDjKra1iqyz4r2RABe3e8ifAwPfDsfkzJ0kUiEyQWJvOU6X3RblFwMc74WmQFigw5tJ5JOE82pRzNV7BV%2BGprtosC1Dlbz5kQ8oTTToGDw&X-Amz-Signature=81570e7fa79106165ae3cbedc1a420237ba00185918694064370a38bc973e55f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
