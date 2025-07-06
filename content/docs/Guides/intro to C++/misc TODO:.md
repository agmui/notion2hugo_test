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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3TPIIZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDWYl5fiQu7GfHgKYMCCe8DZb%2F1%2Bh9CCHm0LaP13JOMPwIgU9%2FXJpPqD8L6JQY45BhpNPiDk%2FZS%2Ffn6wHk3rm1k3WQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD66lcwBsm51d8dPrCrcAw4Maq9xq01mAEXON7nT9WXN1GnYgyElw4KoHKHP9EGY8GSTFvVb3WayQ6947G9Izb%2BL2xxZuYoiC4sXwsz9wL1BoX1bJWeANP1DZ44Tg64QPJlLE7rnEjxB%2FuRsr0Vla8ThQEi%2FecPWKapSsBPPWQMNIEd4thLJoeBUr2ISQ5tj2MZp0ZcG%2FdxMA05TGyPvlZpPa1R0XHviGDCc5YpFpawUdcc7j7xT%2BdnHc91pelF9974Bq7Mt4Petp%2FKlerWBtZ4Hqnk4GlNw1BderlvDmWskkklDyfiSpF2oFNXwb2mpC7EUd2jZQWmTEbB2ehSok%2FV3pi82MKfAzF%2BQIoJ3lWUd18IVfdwofdIWjvMrcNUCohZrk5Bi09RMZCQ%2FvBwdvIjNjXVxyA7f5y19iyqPiYQzs6S146vT5thRnams87mM0LpytXq9jW2nUR0IjWempag7Z0bc1d%2Fy1DicZNoke%2BlQb8lEFICbQrny20SjP%2BuhHsCrTDbcDmC6AZ1XKuefwVZEzdmlOFVo2%2BJnu4R0ZhcoV5mKQe6T449Gb9j1sFbJ1Od%2F8pUeJaIoZDURO%2Bp89caIiUn9pUGj3iqkkS1AGXCFeU9tkMGydV42Yyu1jT3ru79YaFlmzjsZrLtYMMeKp8MGOqUBr504U5C4S6l47HJuh%2FKPCrfNrNc59WArg5H3n3oQNNrAc4JCsrnIgrlKcSObsXmy6SWubiXwT1xowhCu8ePbRQ2cQdwgq764pY6qEGCTH%2FSqSHiSJEB1zqaWrk0%2B9xIr7lqnjp4O9rqHDjNYWHiwytQ4O%2FOkdrAh7uMWu3eui0Jpk6973Yzp0YmBpDkyqe5WHSXsHyDgNk9nH7fIUToLc01dQEDY&X-Amz-Signature=e9fb9a6802315602784158586a64e3343dd0c051bfc836617d6d849616ec6d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3TPIIZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDWYl5fiQu7GfHgKYMCCe8DZb%2F1%2Bh9CCHm0LaP13JOMPwIgU9%2FXJpPqD8L6JQY45BhpNPiDk%2FZS%2Ffn6wHk3rm1k3WQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDD66lcwBsm51d8dPrCrcAw4Maq9xq01mAEXON7nT9WXN1GnYgyElw4KoHKHP9EGY8GSTFvVb3WayQ6947G9Izb%2BL2xxZuYoiC4sXwsz9wL1BoX1bJWeANP1DZ44Tg64QPJlLE7rnEjxB%2FuRsr0Vla8ThQEi%2FecPWKapSsBPPWQMNIEd4thLJoeBUr2ISQ5tj2MZp0ZcG%2FdxMA05TGyPvlZpPa1R0XHviGDCc5YpFpawUdcc7j7xT%2BdnHc91pelF9974Bq7Mt4Petp%2FKlerWBtZ4Hqnk4GlNw1BderlvDmWskkklDyfiSpF2oFNXwb2mpC7EUd2jZQWmTEbB2ehSok%2FV3pi82MKfAzF%2BQIoJ3lWUd18IVfdwofdIWjvMrcNUCohZrk5Bi09RMZCQ%2FvBwdvIjNjXVxyA7f5y19iyqPiYQzs6S146vT5thRnams87mM0LpytXq9jW2nUR0IjWempag7Z0bc1d%2Fy1DicZNoke%2BlQb8lEFICbQrny20SjP%2BuhHsCrTDbcDmC6AZ1XKuefwVZEzdmlOFVo2%2BJnu4R0ZhcoV5mKQe6T449Gb9j1sFbJ1Od%2F8pUeJaIoZDURO%2Bp89caIiUn9pUGj3iqkkS1AGXCFeU9tkMGydV42Yyu1jT3ru79YaFlmzjsZrLtYMMeKp8MGOqUBr504U5C4S6l47HJuh%2FKPCrfNrNc59WArg5H3n3oQNNrAc4JCsrnIgrlKcSObsXmy6SWubiXwT1xowhCu8ePbRQ2cQdwgq764pY6qEGCTH%2FSqSHiSJEB1zqaWrk0%2B9xIr7lqnjp4O9rqHDjNYWHiwytQ4O%2FOkdrAh7uMWu3eui0Jpk6973Yzp0YmBpDkyqe5WHSXsHyDgNk9nH7fIUToLc01dQEDY&X-Amz-Signature=b05247720cdab96e48b7d38a67d7c969df990fd8e9a20f139c707b181d53b0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
