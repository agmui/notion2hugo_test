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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYAWFSV%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCID90xnE2%2F%2BCnePcd6EVlkF4OdGWZSsFjTrYkWKtF5HdOAiEA3xgecdOC8iwX%2B%2BrcX2glnu%2BT8Hppcb3rleEv4ysvJ6cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWg94NZt2OTrPgchCrcA6aMe3v1irf4LYkSi4L7Th%2B4vzzo3dIysusx%2FuDDbkar8shbJgK8KadQktI504cIOxSSfyeIvUWnkN1m3N8ICB1z82N0MFlMllZZhGC9nzTKLxE0IRFJc0pCdoB9vOULE35czSYXzPig9gqJSK8ArSvwrUY2nvrZIrt0uLKcWfz33bHybSQHhUpYQ%2FNXvvTiMtJyM70F1b02oAaJbfgqgmU2C2gPbJ4PfyEq%2F0Sb1YRxINDJTc8A%2F09S%2FFZ49s8y4pcc6oZnB%2BrXfvd68DSLglSBTpOI%2Bivi7DjY4VzxfEWEwR077%2BGAgbkSiMsbI99o0E6gEP6zJmz32Bibquwj%2BtAoWqsJSbRUIuezvK8UtToBwI1JudtBoNOmwjUpC%2FYlPV8b4xt%2BHoCZ9AmMMAWXIc1QZ26KqVMYpcO8ruCDMiqJXe1QS8WmaXi8WgoOWutP1jWVIS%2FZZhEZqb6NYG4e9N%2FWtY6496Lki%2Bw8e0vhs6qJzoRYBhMKABnvCkslFSBuFVZNZZezCSqn3bAJAsRwYzDEi5b1oPbkt2jUODQxJUEiJ0gWtCNDpPa0hwr92C36n%2FBDymBpmpLVMZ%2BOeX9Bc4gSXH3CsqQTuu7IypGG4SP7WddujlpvV95L0fmlMMqHgMwGOqUBnpTWjSZzAJF8tPmpMFRaiyBO%2Buums1aiETcskhbIpAF487RqVs8P8Nx4TosWL%2B3WS5JGpxxlyzklMVzK%2FBj1ULYDHq%2BEW3Vd3YI6j7Y4wBEmpWBScYOayQPPveODq2fDcn6B%2BHDF1AgXP8o0iKpf0y7IxvtvwTpgyJVh7aRqs1qjiANuPDolQCtWxhe1DnFAeddr36j2KrZMwoFgelaWL%2Bhte5ho&X-Amz-Signature=d4d85d992786cea2dfde601a7bfae8d86ebb3f320a80faefff3049844e4f159a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYAWFSV%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCID90xnE2%2F%2BCnePcd6EVlkF4OdGWZSsFjTrYkWKtF5HdOAiEA3xgecdOC8iwX%2B%2BrcX2glnu%2BT8Hppcb3rleEv4ysvJ6cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWg94NZt2OTrPgchCrcA6aMe3v1irf4LYkSi4L7Th%2B4vzzo3dIysusx%2FuDDbkar8shbJgK8KadQktI504cIOxSSfyeIvUWnkN1m3N8ICB1z82N0MFlMllZZhGC9nzTKLxE0IRFJc0pCdoB9vOULE35czSYXzPig9gqJSK8ArSvwrUY2nvrZIrt0uLKcWfz33bHybSQHhUpYQ%2FNXvvTiMtJyM70F1b02oAaJbfgqgmU2C2gPbJ4PfyEq%2F0Sb1YRxINDJTc8A%2F09S%2FFZ49s8y4pcc6oZnB%2BrXfvd68DSLglSBTpOI%2Bivi7DjY4VzxfEWEwR077%2BGAgbkSiMsbI99o0E6gEP6zJmz32Bibquwj%2BtAoWqsJSbRUIuezvK8UtToBwI1JudtBoNOmwjUpC%2FYlPV8b4xt%2BHoCZ9AmMMAWXIc1QZ26KqVMYpcO8ruCDMiqJXe1QS8WmaXi8WgoOWutP1jWVIS%2FZZhEZqb6NYG4e9N%2FWtY6496Lki%2Bw8e0vhs6qJzoRYBhMKABnvCkslFSBuFVZNZZezCSqn3bAJAsRwYzDEi5b1oPbkt2jUODQxJUEiJ0gWtCNDpPa0hwr92C36n%2FBDymBpmpLVMZ%2BOeX9Bc4gSXH3CsqQTuu7IypGG4SP7WddujlpvV95L0fmlMMqHgMwGOqUBnpTWjSZzAJF8tPmpMFRaiyBO%2Buums1aiETcskhbIpAF487RqVs8P8Nx4TosWL%2B3WS5JGpxxlyzklMVzK%2FBj1ULYDHq%2BEW3Vd3YI6j7Y4wBEmpWBScYOayQPPveODq2fDcn6B%2BHDF1AgXP8o0iKpf0y7IxvtvwTpgyJVh7aRqs1qjiANuPDolQCtWxhe1DnFAeddr36j2KrZMwoFgelaWL%2Bhte5ho&X-Amz-Signature=494969e5b86bb869e15fdcfff74bd0e8340e767c138a6577c5d79a66d4c56db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
