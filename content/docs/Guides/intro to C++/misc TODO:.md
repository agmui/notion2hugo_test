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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFGIPQH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAWD52nDso98OhJ2RrlfMDU6wXLZf%2F6%2Fu0PLadQO%2BDfiAiBOBT8SULPl46KIe1rK8ErPFIScgV%2FBZ3M3OJDh3mg1BSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsP1EGz%2FexgJNMisKtwDcEObzv6sqxMJCEY%2B%2BZzLuwXNl%2Bemw8Q%2Fw2z6GW3V4%2FVZz%2BjNPeRC%2FK%2FwQXwfHepupWFc%2F8lJGZawIZ3nOPbziD0Q5tr%2BDZGqF%2FAa4a%2FVcwuDordXmPgqH2rLn18GSLFow469TEGNpo5Oi1DUyEK9qgDMLegCyHc%2FjjSi8zb35MSQe97EXc%2F7H5lUYmFYt%2F%2Bk9k3nbxHOCGRtGq513Ntasu6ev2LVTj5m6VGMu2Huu9h0v5WlZo9vujbm45GFoOT3juygrxezFAa4LYEiFmSWLxvBsgfyiyAIqdFnVtoJZFthjitK8Fq4s88LjaOXi5U19UoYBsO1XPmrGN8xZyvJS5KV%2FPG7vD0cOJmYKcja%2F70Sily3%2FinlEKT5lq154grnHn8XiEZnZZpnxg4AAdpf4kxS9DSvVSMF10ddxuS26q2QQq1BwhJAji8Gs969iCQUffX6Wig14zryTtu0ABN1izkxBakEoySZRsU6G%2FwjOm%2BnosIRJ7HIp1oyUNg%2FV5Q7kUh0%2FIWFsnijLMbJSPutNmd%2B9ewgLfHTh1Ka%2FJ2GcQOnFFU%2FdkR1wIxo5J6KQZqmoWRpR2ZJW7%2BZjj%2B1zOaPjeRVtdJKriHpE9GGjcptJRAZqCZizo6D6C3Qy%2F4wpsL4wQY6pgFSlhXgzwWMZNEy6hrnopA%2BSXNuljOLdS6JEtHuHDI1b87zP%2FK4BrDWuQspR2%2BZKyxclYM2sPVgAUaYqpnzMTJ21k4NXmcqbpIxwETfa3cwjDj6egdWLFMEG4YiYMx1xPfz5LXzR%2BfUR4ZhItCRFIcosgZqstM1%2Bff5tH6BLySG11mztaf70ZiL6FuDqAu7vtT5vwiQmJ5wYayY2Pxi5ziaus6TWTz%2F&X-Amz-Signature=1f99ccf2f3667a579d4fa4ad8ff59b042f48dab304a09e721c98928e5eb42ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFGIPQH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAWD52nDso98OhJ2RrlfMDU6wXLZf%2F6%2Fu0PLadQO%2BDfiAiBOBT8SULPl46KIe1rK8ErPFIScgV%2FBZ3M3OJDh3mg1BSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwsP1EGz%2FexgJNMisKtwDcEObzv6sqxMJCEY%2B%2BZzLuwXNl%2Bemw8Q%2Fw2z6GW3V4%2FVZz%2BjNPeRC%2FK%2FwQXwfHepupWFc%2F8lJGZawIZ3nOPbziD0Q5tr%2BDZGqF%2FAa4a%2FVcwuDordXmPgqH2rLn18GSLFow469TEGNpo5Oi1DUyEK9qgDMLegCyHc%2FjjSi8zb35MSQe97EXc%2F7H5lUYmFYt%2F%2Bk9k3nbxHOCGRtGq513Ntasu6ev2LVTj5m6VGMu2Huu9h0v5WlZo9vujbm45GFoOT3juygrxezFAa4LYEiFmSWLxvBsgfyiyAIqdFnVtoJZFthjitK8Fq4s88LjaOXi5U19UoYBsO1XPmrGN8xZyvJS5KV%2FPG7vD0cOJmYKcja%2F70Sily3%2FinlEKT5lq154grnHn8XiEZnZZpnxg4AAdpf4kxS9DSvVSMF10ddxuS26q2QQq1BwhJAji8Gs969iCQUffX6Wig14zryTtu0ABN1izkxBakEoySZRsU6G%2FwjOm%2BnosIRJ7HIp1oyUNg%2FV5Q7kUh0%2FIWFsnijLMbJSPutNmd%2B9ewgLfHTh1Ka%2FJ2GcQOnFFU%2FdkR1wIxo5J6KQZqmoWRpR2ZJW7%2BZjj%2B1zOaPjeRVtdJKriHpE9GGjcptJRAZqCZizo6D6C3Qy%2F4wpsL4wQY6pgFSlhXgzwWMZNEy6hrnopA%2BSXNuljOLdS6JEtHuHDI1b87zP%2FK4BrDWuQspR2%2BZKyxclYM2sPVgAUaYqpnzMTJ21k4NXmcqbpIxwETfa3cwjDj6egdWLFMEG4YiYMx1xPfz5LXzR%2BfUR4ZhItCRFIcosgZqstM1%2Bff5tH6BLySG11mztaf70ZiL6FuDqAu7vtT5vwiQmJ5wYayY2Pxi5ziaus6TWTz%2F&X-Amz-Signature=52ddf97d3e812399f198e0b6a88990df29538a5a6f2cb9de945c7b1055eb2369&X-Amz-SignedHeaders=host&x-id=GetObject)

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
