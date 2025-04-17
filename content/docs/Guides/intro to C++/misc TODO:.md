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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKEZDC4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFjmA4WCU2M%2B2zJaQLOv02O4XxjJl7MkuiLP2HpqA5YgIgU3cHcNePpxBkSPt65aJkRySyKFJvALlhD%2BQaJaFpHcwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCkviArQ80GelSZ17CrcA78wE1QonCqnju7Z4rx9um9z%2Bfu1Z1hHMRuHUhJyZueeiOqF6fm%2B3kNeqTwlgjStRlOEUlpKpnuP5yo40xS5iHM2NP3ELeDldJBHhO%2F7cAvCnhKbDmkjEH1YSt6%2BhzLC0LBOmvxECR8%2BN0ILutG5H96CHlXPFztY5aDBnE9BbbMC4%2BfEf9lF%2B8xqoJ19vuRw%2FeKRQu1c0D9S6fWndwSJZQftNHkq9l3bNj03eW8x0Y0r34%2Bi9nuwjGTiR5QEUOncKz8ecls8zkl8B7xKbPBVIBVCyfMR2yoV%2B2yaIRE%2BarJ%2Fc3aWizpC1GKbb6%2FHWj01KYB%2BOB5%2Fj1xeW5ioKmE4oG8TbQkG1zGBWY4yKOC9aft3EPg1H6vnx8p3kwAwLeAvZAwvwnpG15GXzvAdLUIXlw1JQj6gP4qBkyTp8ysRMfDipZu6cPNYENuir6eLul3fGHqHkj9QYhua7huoRllgXjuRHN0olBhDXf2b0%2FDgtVTs83RIcZHUKChboOMdEUQgESh%2FGDAySJzgdNcuisJTOmol4RJGT%2FFndx7rlar%2BSwsH%2BcrTZ%2B8oYsRE2y7Iru0PM%2B6J2r%2FaJWA4A4J%2FHVTrSVmXrP4myqDXx9qdmTme1NOOMeNps71a8P1ioqZOMMP7g8AGOqUBVY76LGMkyS72fa%2BU2jxgsz05ntrsMTZ0LTy3oMk%2FPHaZi2XBha6gaBFr4hK18uEVGiedLoDJH9LapGThGxnxGPlEUGXalsdeusZXQPEAWzw322z5ZGsWTyIUMWRDVwL2p5xw7pmH3cqiUcJiq%2FO9bk8rBbwP3j0%2B%2BTTR5ZwOdJTEpRb3rHqFX5YEwQkh7faeq5eEbQoF3Jsq83hUO7r6PWX8uTZO&X-Amz-Signature=c79c4b873796005a8c9f784f9a5661ce9c4bc58ced2caa4cfbbbc862e4717a92&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKEZDC4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFjmA4WCU2M%2B2zJaQLOv02O4XxjJl7MkuiLP2HpqA5YgIgU3cHcNePpxBkSPt65aJkRySyKFJvALlhD%2BQaJaFpHcwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCkviArQ80GelSZ17CrcA78wE1QonCqnju7Z4rx9um9z%2Bfu1Z1hHMRuHUhJyZueeiOqF6fm%2B3kNeqTwlgjStRlOEUlpKpnuP5yo40xS5iHM2NP3ELeDldJBHhO%2F7cAvCnhKbDmkjEH1YSt6%2BhzLC0LBOmvxECR8%2BN0ILutG5H96CHlXPFztY5aDBnE9BbbMC4%2BfEf9lF%2B8xqoJ19vuRw%2FeKRQu1c0D9S6fWndwSJZQftNHkq9l3bNj03eW8x0Y0r34%2Bi9nuwjGTiR5QEUOncKz8ecls8zkl8B7xKbPBVIBVCyfMR2yoV%2B2yaIRE%2BarJ%2Fc3aWizpC1GKbb6%2FHWj01KYB%2BOB5%2Fj1xeW5ioKmE4oG8TbQkG1zGBWY4yKOC9aft3EPg1H6vnx8p3kwAwLeAvZAwvwnpG15GXzvAdLUIXlw1JQj6gP4qBkyTp8ysRMfDipZu6cPNYENuir6eLul3fGHqHkj9QYhua7huoRllgXjuRHN0olBhDXf2b0%2FDgtVTs83RIcZHUKChboOMdEUQgESh%2FGDAySJzgdNcuisJTOmol4RJGT%2FFndx7rlar%2BSwsH%2BcrTZ%2B8oYsRE2y7Iru0PM%2B6J2r%2FaJWA4A4J%2FHVTrSVmXrP4myqDXx9qdmTme1NOOMeNps71a8P1ioqZOMMP7g8AGOqUBVY76LGMkyS72fa%2BU2jxgsz05ntrsMTZ0LTy3oMk%2FPHaZi2XBha6gaBFr4hK18uEVGiedLoDJH9LapGThGxnxGPlEUGXalsdeusZXQPEAWzw322z5ZGsWTyIUMWRDVwL2p5xw7pmH3cqiUcJiq%2FO9bk8rBbwP3j0%2B%2BTTR5ZwOdJTEpRb3rHqFX5YEwQkh7faeq5eEbQoF3Jsq83hUO7r6PWX8uTZO&X-Amz-Signature=30fb883ffe3668854aa1d39a45fefb3a5b59a2d3bbcfda588e31a2ab9b310b8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
