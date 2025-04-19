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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM26GN5A%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCohMzI90cNSlAlHKE8jbdRWxpKltpGqCxRf8P9NYzneAIgd9%2Bil%2B4dG7vkKsfgZ9Qb6BxpjLXmH5jBqi6W%2BgUUQGoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUcY0haac2SnLDHESrcA3Qmvdc9qPvyWV%2B4rvyCRuMklE%2BuCjpyGPbaHdvGjzvM3X0%2BdliDN0JPEo9Drl7bEC2NwhnKXTgbIgBAl1VWLyijQ88dfeH6iLw834i%2Beyjrjy31vQViroj9Z73%2BXPZu5WjKJpnkPtKKCOOHVvZuvXjtTDrTBBCs1gAOY%2BuruU4pgla947tDg67cEpEj4bsSCTm2ed%2F7%2BymO4iaWcT%2BuqTBZyRNSH%2Fcs3cUU7Zwap2jdW4nBZ0Lyn8KZ4dXkLDDfW2O1Ib4bHVXD05EEE1LksIK1RO38%2FQRkmKoZJKwZcwDPn0n5MsabMiZt9JT%2Fo5AVAcPpwVBc3vSBJ3Lis5d8ko3qFWyo6GfjMYqZV%2FPf1zOc8btTe0kpXt55P3qbmNrloUNojbIp4V%2BLOSZyRSRaFXDsLPOKNqAqP0Ajus2qr4TGvX44ohLzHUFxujSGCgpbLC8q2ZX6MhN9%2BLy3EEB64Hy8pclhgiVMMYKLHkP8fVVmgPewWMRz15XbzK8mcVoYCy%2Fuyn2B2B9AlHOQiq%2B4Ue%2FfLWrAMPl79D%2BbOno1yNU97LG34GDqMfy8X3nallz3CCj2%2F4GU9lizJZF9NvXp4o2%2FHZcW%2Bx6YB7AMC4j42Tisu5v%2BmDlcn2t3qf%2FAMOG8jMAGOqUBBk1T5GmCVWCoTbi21me5XlJgcNRw4OgSGCf6K75RpCcuyGZmj7wpLGzQKS0SKvIQPRdyt2pRjsvvY1iwzOny%2Bq5rvfLnMvDedjM57UL7eXfzIZ6PbQ%2FgZARk7kAoml1KRmOXU9FBX6jXCIjnewCD3i5LwKGMLhXierqF9XFalf9gzyaIfJcTGVnl4%2F2z3WyisS30f9ws%2B23Pj4mAGQmBX3%2B6%2FQvn&X-Amz-Signature=1cfe908add7eb055d86a7a64226c2cbbc6cce6799a9459bf938cd0aada3c9ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM26GN5A%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCohMzI90cNSlAlHKE8jbdRWxpKltpGqCxRf8P9NYzneAIgd9%2Bil%2B4dG7vkKsfgZ9Qb6BxpjLXmH5jBqi6W%2BgUUQGoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUcY0haac2SnLDHESrcA3Qmvdc9qPvyWV%2B4rvyCRuMklE%2BuCjpyGPbaHdvGjzvM3X0%2BdliDN0JPEo9Drl7bEC2NwhnKXTgbIgBAl1VWLyijQ88dfeH6iLw834i%2Beyjrjy31vQViroj9Z73%2BXPZu5WjKJpnkPtKKCOOHVvZuvXjtTDrTBBCs1gAOY%2BuruU4pgla947tDg67cEpEj4bsSCTm2ed%2F7%2BymO4iaWcT%2BuqTBZyRNSH%2Fcs3cUU7Zwap2jdW4nBZ0Lyn8KZ4dXkLDDfW2O1Ib4bHVXD05EEE1LksIK1RO38%2FQRkmKoZJKwZcwDPn0n5MsabMiZt9JT%2Fo5AVAcPpwVBc3vSBJ3Lis5d8ko3qFWyo6GfjMYqZV%2FPf1zOc8btTe0kpXt55P3qbmNrloUNojbIp4V%2BLOSZyRSRaFXDsLPOKNqAqP0Ajus2qr4TGvX44ohLzHUFxujSGCgpbLC8q2ZX6MhN9%2BLy3EEB64Hy8pclhgiVMMYKLHkP8fVVmgPewWMRz15XbzK8mcVoYCy%2Fuyn2B2B9AlHOQiq%2B4Ue%2FfLWrAMPl79D%2BbOno1yNU97LG34GDqMfy8X3nallz3CCj2%2F4GU9lizJZF9NvXp4o2%2FHZcW%2Bx6YB7AMC4j42Tisu5v%2BmDlcn2t3qf%2FAMOG8jMAGOqUBBk1T5GmCVWCoTbi21me5XlJgcNRw4OgSGCf6K75RpCcuyGZmj7wpLGzQKS0SKvIQPRdyt2pRjsvvY1iwzOny%2Bq5rvfLnMvDedjM57UL7eXfzIZ6PbQ%2FgZARk7kAoml1KRmOXU9FBX6jXCIjnewCD3i5LwKGMLhXierqF9XFalf9gzyaIfJcTGVnl4%2F2z3WyisS30f9ws%2B23Pj4mAGQmBX3%2B6%2FQvn&X-Amz-Signature=8bc98d2ee5d9035d01823d6ed8c19b0f2d1de5adeb6ded8921ad06a82603bd36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
