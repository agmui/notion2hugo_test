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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVP2MAD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDzbDabVk5NxY%2Bk4rwJcofuBTqbmCzD6CfRAxD0SBGwsAIgPW27YeaCrMGt4H1eL1wYQ7JlU6W6t8rhc6t8DzCqeN8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHZ0H2AYifEYSSbzSrcA5Fl1TP9NAlMFjJ7rjOw1Oy2EXBAb%2FjqiqTYR7MEmIW1QclSB1IbN9g7qRkrYF6XjZGve9U4Uc8SibA%2FB4EwZwQXVjuu%2BUeLd1BQZS3Gv67ajtOfCMLTYF4USelc7Ti701tQznqHCfa0xFp9tfFqTcytru5zhfnBFQwhjh3NpWDdiE9sdiXBaywTB4woRBIoGnVO9IfwM8Uj3tYBbiJ3LmAGkxBhARrBtV7l7nMO7Yo2uzmQoiv4N1wKT8ZPNNLMZno94jf%2BccjHFcwFEapkPdsLP6MT6euwJ1FwngVH4ihDONfN%2FgwhEmOmCSUAIHc%2BP3ArboFTKNO8DFm4ggYtbEY63m43qIQkBPnXK5xxCmEryRMAiz%2FwU6bPJmvSaZ9asbze41gn0nGK937%2BkVHo25VzFW7LTUNCgbNMcwU4llBOu7saNos5geIB%2F%2FAL%2FLgSBkdy2q9C%2F%2BcKAzTwhAAesoTw%2BSx%2BGuw0%2FprYSDyPxgOwyEt3Yf7e3Pl8WfP%2F3qRGvFaI1yrzYsnwLDjZ%2FB2jXyvQFnEIM2UssvahYmvPs3tx4qqqrciEXfJapdxW4873gQUldlV%2BWt%2FfkCbvXyi8j8WHYck7JAwH4WoAXDuyIlFiHB5Th0FL75465IdcMNfDksAGOqUBr3wO6VaLTrWJJSwavSDR3ZfygdZB5mJKW%2BGNSUtP3OeTdPFKQIzWVBHlKk17%2Bs9cmmExg%2B%2BiullsVDGWsRUikihYL4FsqOBO3J0W5mOD1vRy0Ui%2Fu66ysz%2B8h34y71RXiQ7yWFG3Mci%2Bxd571AHQOGKSWbg6qPePQ54ml4V5rkeTMbyALRA7didO2Y7OTKd2XR2%2Bk1%2Fz34HFnIazrbteu%2BrgVGvM&X-Amz-Signature=24d1b9aea0a71f106509cb5108ceebcc9689238d8213cce72b54f5fce7f0317c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVP2MAD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDzbDabVk5NxY%2Bk4rwJcofuBTqbmCzD6CfRAxD0SBGwsAIgPW27YeaCrMGt4H1eL1wYQ7JlU6W6t8rhc6t8DzCqeN8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHZ0H2AYifEYSSbzSrcA5Fl1TP9NAlMFjJ7rjOw1Oy2EXBAb%2FjqiqTYR7MEmIW1QclSB1IbN9g7qRkrYF6XjZGve9U4Uc8SibA%2FB4EwZwQXVjuu%2BUeLd1BQZS3Gv67ajtOfCMLTYF4USelc7Ti701tQznqHCfa0xFp9tfFqTcytru5zhfnBFQwhjh3NpWDdiE9sdiXBaywTB4woRBIoGnVO9IfwM8Uj3tYBbiJ3LmAGkxBhARrBtV7l7nMO7Yo2uzmQoiv4N1wKT8ZPNNLMZno94jf%2BccjHFcwFEapkPdsLP6MT6euwJ1FwngVH4ihDONfN%2FgwhEmOmCSUAIHc%2BP3ArboFTKNO8DFm4ggYtbEY63m43qIQkBPnXK5xxCmEryRMAiz%2FwU6bPJmvSaZ9asbze41gn0nGK937%2BkVHo25VzFW7LTUNCgbNMcwU4llBOu7saNos5geIB%2F%2FAL%2FLgSBkdy2q9C%2F%2BcKAzTwhAAesoTw%2BSx%2BGuw0%2FprYSDyPxgOwyEt3Yf7e3Pl8WfP%2F3qRGvFaI1yrzYsnwLDjZ%2FB2jXyvQFnEIM2UssvahYmvPs3tx4qqqrciEXfJapdxW4873gQUldlV%2BWt%2FfkCbvXyi8j8WHYck7JAwH4WoAXDuyIlFiHB5Th0FL75465IdcMNfDksAGOqUBr3wO6VaLTrWJJSwavSDR3ZfygdZB5mJKW%2BGNSUtP3OeTdPFKQIzWVBHlKk17%2Bs9cmmExg%2B%2BiullsVDGWsRUikihYL4FsqOBO3J0W5mOD1vRy0Ui%2Fu66ysz%2B8h34y71RXiQ7yWFG3Mci%2Bxd571AHQOGKSWbg6qPePQ54ml4V5rkeTMbyALRA7didO2Y7OTKd2XR2%2Bk1%2Fz34HFnIazrbteu%2BrgVGvM&X-Amz-Signature=340e58f78bab57936aa5979bb3528f61e38c1b0449778224bd4e840b46b72ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
