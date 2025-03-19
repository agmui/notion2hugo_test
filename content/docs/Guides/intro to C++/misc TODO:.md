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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664THRDSQF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCtgmqFTfwoldk22t%2BE0U%2B3UQp4wzEY1WuRllZHBibRRgIgLHrsoAWPIT%2F7R0kiHlocbLbyX54OPCjX30MfnzjRRjIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNdQ8NQoDJomJoH7UyrcAyQ8g6tYPAj%2Bz9HKDecwA4lYZYEKEIIxrfVFM%2F9Z6dFjKVKxCW1iYrc3j1fZAcVYAlmZBMlpkpGEctI23wlDRG2hd%2BOEsIptcERJhlndLr4qgc9ExBDqCF%2FSfBeIZBfnWyFZqywgpcJogsTxTvpgDtHjTDGMAUvmJnnIjdgg7KuQ%2FyzfvYu6%2Flkyd206If9vk5NeyEj90Kpzt3elt3VF4aDynjJ375iiNA1q2bilk2%2B1st5cvHDDSZY6oNYnRf9WWP%2FRAxDUO0gNkN17wHnwTtsO6YYVAiWsx589clvHSdsDRzk3OHqCSrAvYEeWCFLSBKxxaMTo3%2BPQNzwBlEfy8W4vULixuqjoev2%2FOU1U8U%2FniL4xZ0NIn1R8hHznJrMgC%2Ba%2Fu5Waz1rD0VObF0NyiyEmxIaVyhtNvBgLkI7Yilek8dYB4cDofMekIReoAOKjRv3Opqlq6ZJRt7IQP94lwZHVb61DxDns00L56LGz8NiuYXx9pvZKusYYJhSunsUp7iLiD4x8Xu59v62gDIFGNDZpQLHaHL7unuGvHKMzgJojxbUp%2FREWEoyNG%2F2yHx%2FEkNHRQZBXt3HUrx24xLlIuZBYG3MfNz59cNXmPlS1HjBM%2BFRN4FwwOxckwxMgMPXj6b4GOqUBFzfG837A4LQMf4G%2BV33dyT1gUZSY594w8i3huRFmoG%2B0G092gwSoZe%2FKFavaxEhcC4LnQ8%2FR7rpm%2BFy%2BwQAU05E7C3jf4rCRmEj%2FHuZ4T%2FCnjYJVJlN3kfGPcsYo9BSIijdCAlQ5k6C3wu1ELdkvsZ6NPuNcLCvxwrxT5i817AFnyErbeIeJBCfB%2BR1wYMSHevlwIZkblmwHRS%2BcYBqkS5ZVEq4P&X-Amz-Signature=c55d64bb0ee8f7ab429e3609a3a310ec75965153cd2c7887b6ce12db5efd0ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664THRDSQF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCtgmqFTfwoldk22t%2BE0U%2B3UQp4wzEY1WuRllZHBibRRgIgLHrsoAWPIT%2F7R0kiHlocbLbyX54OPCjX30MfnzjRRjIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNdQ8NQoDJomJoH7UyrcAyQ8g6tYPAj%2Bz9HKDecwA4lYZYEKEIIxrfVFM%2F9Z6dFjKVKxCW1iYrc3j1fZAcVYAlmZBMlpkpGEctI23wlDRG2hd%2BOEsIptcERJhlndLr4qgc9ExBDqCF%2FSfBeIZBfnWyFZqywgpcJogsTxTvpgDtHjTDGMAUvmJnnIjdgg7KuQ%2FyzfvYu6%2Flkyd206If9vk5NeyEj90Kpzt3elt3VF4aDynjJ375iiNA1q2bilk2%2B1st5cvHDDSZY6oNYnRf9WWP%2FRAxDUO0gNkN17wHnwTtsO6YYVAiWsx589clvHSdsDRzk3OHqCSrAvYEeWCFLSBKxxaMTo3%2BPQNzwBlEfy8W4vULixuqjoev2%2FOU1U8U%2FniL4xZ0NIn1R8hHznJrMgC%2Ba%2Fu5Waz1rD0VObF0NyiyEmxIaVyhtNvBgLkI7Yilek8dYB4cDofMekIReoAOKjRv3Opqlq6ZJRt7IQP94lwZHVb61DxDns00L56LGz8NiuYXx9pvZKusYYJhSunsUp7iLiD4x8Xu59v62gDIFGNDZpQLHaHL7unuGvHKMzgJojxbUp%2FREWEoyNG%2F2yHx%2FEkNHRQZBXt3HUrx24xLlIuZBYG3MfNz59cNXmPlS1HjBM%2BFRN4FwwOxckwxMgMPXj6b4GOqUBFzfG837A4LQMf4G%2BV33dyT1gUZSY594w8i3huRFmoG%2B0G092gwSoZe%2FKFavaxEhcC4LnQ8%2FR7rpm%2BFy%2BwQAU05E7C3jf4rCRmEj%2FHuZ4T%2FCnjYJVJlN3kfGPcsYo9BSIijdCAlQ5k6C3wu1ELdkvsZ6NPuNcLCvxwrxT5i817AFnyErbeIeJBCfB%2BR1wYMSHevlwIZkblmwHRS%2BcYBqkS5ZVEq4P&X-Amz-Signature=b5d9daf1256ffb5ebb306fa7da5b88b4ecfc30f572c35a4f02da62db9dcef007&X-Amz-SignedHeaders=host&x-id=GetObject)

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
