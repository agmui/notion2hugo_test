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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQQ3QRM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFwuCNhIQuX8Evmsh5j902BsVScwOB43k%2FyX7cxMFLTAiEA%2BDmqIbijQIrs6HXJ7mP9kjtrk%2FW9k79U%2FBHygILTm9QqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCEEk1o0vw3lBgDByrcA9SsACH6TjRmUc3yFbrTkHIRcw3fUWzVdJBOPxusMt93QqMVdUv7P5B%2FHntCzHZczVqEmgzowHWPZYANGIbA07rex%2FGM%2FQvpSFFnIiE6dDDjMbkafCiiuntIobGrt2StyUbqwbDWs2MDtRBOft0i11BonCk6ketckpA8WPabgeurl6UEtyb6i6MY2lRugiqo41gUTZd75yI1o2VJaZ3hbgL%2BXNPx6jYX4WphdA8PtzIYg1iqUNL6Usk2%2B%2F6AlhI5%2FiAC0dKoCCPnVdJvfYat62WZz5gTW9i4FUqjZpA%2Fhgxm3scj9zEYDBRGV2cc3cXN8exJCFU4BPtCfHQ7QiXovVuMrBrR%2BZaI%2B0Xh0YrAg6P9Gk6o0Q5FtO0IpyNUXnNPZqino6GZcU14u4bqy8op7WDY6JvS4GYazAHQos2FGaUhCDQKguzj4rBJU%2BbnEOmJLw7U5N9kT1SoTxrihAAIUuv%2Fjf5cS%2F4GrXVe0GtsIYNP%2BOiDScMiTAtCz1Ey0yZlm63dQu8QTekv8SbSsuGxfweivpEtG5qX2fujpbr1nYGC33zh5K6HmyFTalaSop1SD1gz9oDn%2FjEXMd8G%2BWwg4OrUOGrNANbY%2Bo1nwM1a7PEyKsUNAWZEtfEny2F1MIK0tsMGOqUBiZmZ8p76o54QeZ2Y1YdgBFOO8tzxAxsSA6%2B43YOkV%2BD65WFlO84OSKHv52xqeWxtnIZ2yhsUAQY8%2FSWkPAFLtutoR%2Fj80DqkTDaZixiaew4b9wxjQwCLwKT0qf5Y5TOH%2Fc3Y3pqytGEOO%2F4DU%2BzjyZIuB9qIYRYbwdUgLp0JAdWwbjAxX4NELgYuyxrTve31ZaHdfUiHZg7DxVfHVe6iUfHLgeKn&X-Amz-Signature=007b6b76d8270e88be2a7bdb967b8bed9ed89ceb13aabe952de1ae1f087311ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQQ3QRM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFwuCNhIQuX8Evmsh5j902BsVScwOB43k%2FyX7cxMFLTAiEA%2BDmqIbijQIrs6HXJ7mP9kjtrk%2FW9k79U%2FBHygILTm9QqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCEEk1o0vw3lBgDByrcA9SsACH6TjRmUc3yFbrTkHIRcw3fUWzVdJBOPxusMt93QqMVdUv7P5B%2FHntCzHZczVqEmgzowHWPZYANGIbA07rex%2FGM%2FQvpSFFnIiE6dDDjMbkafCiiuntIobGrt2StyUbqwbDWs2MDtRBOft0i11BonCk6ketckpA8WPabgeurl6UEtyb6i6MY2lRugiqo41gUTZd75yI1o2VJaZ3hbgL%2BXNPx6jYX4WphdA8PtzIYg1iqUNL6Usk2%2B%2F6AlhI5%2FiAC0dKoCCPnVdJvfYat62WZz5gTW9i4FUqjZpA%2Fhgxm3scj9zEYDBRGV2cc3cXN8exJCFU4BPtCfHQ7QiXovVuMrBrR%2BZaI%2B0Xh0YrAg6P9Gk6o0Q5FtO0IpyNUXnNPZqino6GZcU14u4bqy8op7WDY6JvS4GYazAHQos2FGaUhCDQKguzj4rBJU%2BbnEOmJLw7U5N9kT1SoTxrihAAIUuv%2Fjf5cS%2F4GrXVe0GtsIYNP%2BOiDScMiTAtCz1Ey0yZlm63dQu8QTekv8SbSsuGxfweivpEtG5qX2fujpbr1nYGC33zh5K6HmyFTalaSop1SD1gz9oDn%2FjEXMd8G%2BWwg4OrUOGrNANbY%2Bo1nwM1a7PEyKsUNAWZEtfEny2F1MIK0tsMGOqUBiZmZ8p76o54QeZ2Y1YdgBFOO8tzxAxsSA6%2B43YOkV%2BD65WFlO84OSKHv52xqeWxtnIZ2yhsUAQY8%2FSWkPAFLtutoR%2Fj80DqkTDaZixiaew4b9wxjQwCLwKT0qf5Y5TOH%2Fc3Y3pqytGEOO%2F4DU%2BzjyZIuB9qIYRYbwdUgLp0JAdWwbjAxX4NELgYuyxrTve31ZaHdfUiHZg7DxVfHVe6iUfHLgeKn&X-Amz-Signature=40e76b2c13ce9fe2312b20c718077515037382b5b7ad63fa6bbaa63dc57ee62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
