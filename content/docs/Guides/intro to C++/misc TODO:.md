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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVDEA4E%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzUa7JmXDKA50aFHQcmwQBgQ8qOM%2F6i%2FosZFNSNJmr7QIgEEi0RcLst6Fn4olTrzSwAkow9%2FUo8hpN1L1SV5oqk20qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFw4TmeJkWcvpONiSrcA%2F%2FklurUZBRnAxIZagVsIz2KqpyX%2Bipz1zZZFlJ1WQgMkNpLks67tMApEHYyTP0e8uTxdhNdoCogRvS93hCMaqM6DVAVqQ15%2BOkbFXRmOaSWH0na%2F4J3nFm6Jr7%2FEQPZZ7dGWKaP8LVrb5s0qUVUCYXUU3BuKZKPMa4LotNeGGD7XP0dxj81trcgdvkEriVNJCO21hvLoCieShURSosTUbShl9QM4oe%2B2HlSmvs37apavUW3vnaG7lxGUJz1Mc3CBB5%2FvwnMoIyzjZKS9jtl4PRt%2BZ4z%2BtA%2FYIzVeX8DbvmUFsV0bG3BjutiFH18FplpJadB%2F543D4vuGkHL1yuZLnET5GwbEEGK3Ak%2B4bsUcGWLFkjsXQMdBNADkWWBjeKco6WdTfNi21t5vPunQUv8UCJsmmsvmgUs%2Fh0cthtA6NsKyfC4j19Bys6v0kp5PlLivhEZ2nVMv2yzylgnwIw5ADJ%2Fhle6Nn7YZ2XxAEC422kdz5ZBCfN3%2Fkqs8BVXd9TB6Tf5c2BPGNyfMC0rWwiDjDt5HBYSFI1kwdTYjyUtnSXBuCoXKsHdMoxnsdFsliztAB7ybzDGn7xWkVYCmI961ubA%2FZPk47ONatrBbuBanhJtQJZk%2F6GVrRPlJaVxMI%2Bz3sEGOqUBtXeu19K32uTA1GxKz%2FrwpgSE2R6210UPVHcBOYpaYFswopTSCnVrzRN2Bh5z%2FVpAfGeor9yjvM0rqSBIsfO0aQUy8eDq%2F1PSviQoH6n4Qxlz7MUqnNsqkBUJK90%2FFbvvexxbQ5741UJLoTweChFZjy3K8PHmLydM2Dv58otKjyzEWGU1MSTfQaJIaIpEAsklR1ukelpobbVvVWInD7ym7G6%2F6Mwz&X-Amz-Signature=30242e8f65a6e0aa215a440ff07b530b7b52295f681f45427a05a27bf870f654&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVDEA4E%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzUa7JmXDKA50aFHQcmwQBgQ8qOM%2F6i%2FosZFNSNJmr7QIgEEi0RcLst6Fn4olTrzSwAkow9%2FUo8hpN1L1SV5oqk20qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFw4TmeJkWcvpONiSrcA%2F%2FklurUZBRnAxIZagVsIz2KqpyX%2Bipz1zZZFlJ1WQgMkNpLks67tMApEHYyTP0e8uTxdhNdoCogRvS93hCMaqM6DVAVqQ15%2BOkbFXRmOaSWH0na%2F4J3nFm6Jr7%2FEQPZZ7dGWKaP8LVrb5s0qUVUCYXUU3BuKZKPMa4LotNeGGD7XP0dxj81trcgdvkEriVNJCO21hvLoCieShURSosTUbShl9QM4oe%2B2HlSmvs37apavUW3vnaG7lxGUJz1Mc3CBB5%2FvwnMoIyzjZKS9jtl4PRt%2BZ4z%2BtA%2FYIzVeX8DbvmUFsV0bG3BjutiFH18FplpJadB%2F543D4vuGkHL1yuZLnET5GwbEEGK3Ak%2B4bsUcGWLFkjsXQMdBNADkWWBjeKco6WdTfNi21t5vPunQUv8UCJsmmsvmgUs%2Fh0cthtA6NsKyfC4j19Bys6v0kp5PlLivhEZ2nVMv2yzylgnwIw5ADJ%2Fhle6Nn7YZ2XxAEC422kdz5ZBCfN3%2Fkqs8BVXd9TB6Tf5c2BPGNyfMC0rWwiDjDt5HBYSFI1kwdTYjyUtnSXBuCoXKsHdMoxnsdFsliztAB7ybzDGn7xWkVYCmI961ubA%2FZPk47ONatrBbuBanhJtQJZk%2F6GVrRPlJaVxMI%2Bz3sEGOqUBtXeu19K32uTA1GxKz%2FrwpgSE2R6210UPVHcBOYpaYFswopTSCnVrzRN2Bh5z%2FVpAfGeor9yjvM0rqSBIsfO0aQUy8eDq%2F1PSviQoH6n4Qxlz7MUqnNsqkBUJK90%2FFbvvexxbQ5741UJLoTweChFZjy3K8PHmLydM2Dv58otKjyzEWGU1MSTfQaJIaIpEAsklR1ukelpobbVvVWInD7ym7G6%2F6Mwz&X-Amz-Signature=1c5d60d550a1c1d844b2097747ef7ac4c9899392c2add552fbc6224fd0a976e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
