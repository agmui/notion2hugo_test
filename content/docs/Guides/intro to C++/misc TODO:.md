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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQIN4W6%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoIGRb3Lrq2DUGN2YoJzSSgmswuYDAhuZf%2BpBZ9nCXSQIgCbjDgbW9DsrOW8dghq6m3fxlgLOwh1WxTuTR7g4nqUYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmM%2BZTNL3fxAWyILircA6WW94jwOyaRdm3NmkriP0u%2FHM0bC3vuv2mHVwlaJbQPs0mn0QBJUB1h1PIEowHalsDo4qbXYWvAGAcp0wvlmtN%2B%2FIsesu7Z7EYWbG7ZB7ZZGwT7xCQ50H1w8Fn7Cg%2B9JGHk230%2B3ZJLhv5KfKM9Gbao9cJL%2B%2BfIhRpURPizlSkAoGDKQfsrTxU6YRR4Y25KUaW4jdfNnVhzQsC40gcxp3vfyNtkoos%2Bal2B5S7gRXrCc8jSkUJBaSCjsoqiQKg8YHPIpCWg5p9G%2F%2F2Ri2%2B0mrDdpKCCGbBswngHhp9D5Ci44Hv2BTcqzX9zrrMOUC7W1WZgO0yljCYP7IyEAiCCWu4baZV4xgffyIkiAWDpmoqIPR%2BtHuTGQZD%2FXfBE0U%2FPulnC%2Fw4Fk1r2hC%2BwuiRZREap7SUY2jsm%2F2xf1uRShrSfM0TQooIshcaAQb1CBc2NP%2Bpes5iPjZKk0wpLvbMZnboONvbB9HB07W47PLHcq7Y2SilFpTo%2BuTdvgvvWK66JPfulbG3lySx6BVm7EHs1%2F%2Bpf30mIW9DKIlYwwl9GznCu%2BUcer6%2BUyC1Am1r%2BWz4%2BJoJmRkLDyY7pyKcqKsif4f6vczOn3EnfvdciJAr4HQYf8XcFQZbASZTn7JE%2FMN%2BB470GOqUBS0Ac%2BdCg9u0iKbeKeXOp3tt4yc%2FHYwO0%2FvFD%2BwT595%2BVlMtYA3hHSd5QGJ6b9MDQHwqxtDYHp%2FHDH3%2F5819OlXZflFEquPkXcYHsH2Rm8O5N0IRWLDHdaaQC451QKtaVpCcobOa5GRFP6L5CQnqerQitkajatFfpLs5E6uCaYXVH0vid3oYtCEi8YZxBuRdWjAaVE12KPhbzlqTvDk5TtbpA52SO&X-Amz-Signature=0dc27700b4485583cdb8cfdba90cf7f8434d82cf60cfeddd5bd9ef08719cfbf1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQIN4W6%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoIGRb3Lrq2DUGN2YoJzSSgmswuYDAhuZf%2BpBZ9nCXSQIgCbjDgbW9DsrOW8dghq6m3fxlgLOwh1WxTuTR7g4nqUYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmM%2BZTNL3fxAWyILircA6WW94jwOyaRdm3NmkriP0u%2FHM0bC3vuv2mHVwlaJbQPs0mn0QBJUB1h1PIEowHalsDo4qbXYWvAGAcp0wvlmtN%2B%2FIsesu7Z7EYWbG7ZB7ZZGwT7xCQ50H1w8Fn7Cg%2B9JGHk230%2B3ZJLhv5KfKM9Gbao9cJL%2B%2BfIhRpURPizlSkAoGDKQfsrTxU6YRR4Y25KUaW4jdfNnVhzQsC40gcxp3vfyNtkoos%2Bal2B5S7gRXrCc8jSkUJBaSCjsoqiQKg8YHPIpCWg5p9G%2F%2F2Ri2%2B0mrDdpKCCGbBswngHhp9D5Ci44Hv2BTcqzX9zrrMOUC7W1WZgO0yljCYP7IyEAiCCWu4baZV4xgffyIkiAWDpmoqIPR%2BtHuTGQZD%2FXfBE0U%2FPulnC%2Fw4Fk1r2hC%2BwuiRZREap7SUY2jsm%2F2xf1uRShrSfM0TQooIshcaAQb1CBc2NP%2Bpes5iPjZKk0wpLvbMZnboONvbB9HB07W47PLHcq7Y2SilFpTo%2BuTdvgvvWK66JPfulbG3lySx6BVm7EHs1%2F%2Bpf30mIW9DKIlYwwl9GznCu%2BUcer6%2BUyC1Am1r%2BWz4%2BJoJmRkLDyY7pyKcqKsif4f6vczOn3EnfvdciJAr4HQYf8XcFQZbASZTn7JE%2FMN%2BB470GOqUBS0Ac%2BdCg9u0iKbeKeXOp3tt4yc%2FHYwO0%2FvFD%2BwT595%2BVlMtYA3hHSd5QGJ6b9MDQHwqxtDYHp%2FHDH3%2F5819OlXZflFEquPkXcYHsH2Rm8O5N0IRWLDHdaaQC451QKtaVpCcobOa5GRFP6L5CQnqerQitkajatFfpLs5E6uCaYXVH0vid3oYtCEi8YZxBuRdWjAaVE12KPhbzlqTvDk5TtbpA52SO&X-Amz-Signature=da2930e1c7ec0924061bb1285bd80a5188581421dde3b40da87103f65c0e9013&X-Amz-SignedHeaders=host&x-id=GetObject)

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
