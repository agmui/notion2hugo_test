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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z77W2KW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVJ1qLsmgJ8TJrTJLjtiLhSBF14QqEUEngDCrR1s7VOAIgdtZY6qRgd439r1Ok2vQ5q%2FCNenmKTKA%2FN3YU0nwNN0oqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCOguS6bYeXa3obiircAxDUyExMx2cCf1NTfSXcX7j%2FI7HmckOQbHUYFH7a3FdPzyyj4W%2BJOi93w8pUsg4EG2UEVvyhRP%2Bhky22y4KlmQFgWvpkTKQcQBh0raPkfDUTxargn3oVTKKGkWw2B8RNyzT%2BIpVxmcY4d2TtvSY%2B3QOw0V%2B86FuF3Tvl2wh8AaNK5dtO8cN8qBnuqn1xaCZ1CcMx9taziad%2Bj6oRIbg4auO9OuooMFcz03ZLAov2BupgCLXhhWBvux%2FFiXce5IF1S3vHP5yyHaGzSSoocy%2FHuGfGoJWFnmx3kYCmnLfPDG0Tp%2BKffAoGkXOYr0IMjPk8CWqawDIfNtYixR6%2BrFrr7g%2FEDV0k7MQR6iIfS96OGY0IK8vXt0T%2Bnzib6UaL4psBPMvOhTA2gXLdij%2FQoWpDXmkjyAm54cvS8jlx6z0sYRVeGI%2BvRBhzNSde5g5UPeTM4zFP1Uo7qCwrqbRY%2BCJEKuotnSC1aIHnHuKRSa6%2F%2FP8dIUe2scOIf4SBU6d5PW0H27ASYo0m5QIjB3%2BA%2B3SNWP6ZKgI8Fy9lqMcoeVkadDDs2Cyi3%2BVZ1w7MI%2FoQ%2BeJ%2Fv4kJRCc4DtJQE5NvBd4tIAnYaFOcGC87uLQh9wpv5asp5hIACA5SfREDtwlaMJrHtMQGOqUBkXMeV%2BzeemUfq95Wrw6SHqifsZkzVDlfbJeykHUmhcodkyZW488pcXJjb69VNu5AmJwHwqqaW6huoP4%2FCYPRM00M4dSUZ2Z9n5hVPc1n4Ys1X7mPkSZGnsxiPf7QTljx2G94XOAN6IQ%2F3a0ck6J6io4%2F6UvSatOVKevsWNe1lOEMi0paBu%2BaqBlQwu3f55sJuTtxNJI2ZEcZJTAiGEBo12tFWkzK&X-Amz-Signature=e52582f4ce38f2107d5d6083a686202fe75222b2a366e10421de10b16322a219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z77W2KW2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVJ1qLsmgJ8TJrTJLjtiLhSBF14QqEUEngDCrR1s7VOAIgdtZY6qRgd439r1Ok2vQ5q%2FCNenmKTKA%2FN3YU0nwNN0oqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCOguS6bYeXa3obiircAxDUyExMx2cCf1NTfSXcX7j%2FI7HmckOQbHUYFH7a3FdPzyyj4W%2BJOi93w8pUsg4EG2UEVvyhRP%2Bhky22y4KlmQFgWvpkTKQcQBh0raPkfDUTxargn3oVTKKGkWw2B8RNyzT%2BIpVxmcY4d2TtvSY%2B3QOw0V%2B86FuF3Tvl2wh8AaNK5dtO8cN8qBnuqn1xaCZ1CcMx9taziad%2Bj6oRIbg4auO9OuooMFcz03ZLAov2BupgCLXhhWBvux%2FFiXce5IF1S3vHP5yyHaGzSSoocy%2FHuGfGoJWFnmx3kYCmnLfPDG0Tp%2BKffAoGkXOYr0IMjPk8CWqawDIfNtYixR6%2BrFrr7g%2FEDV0k7MQR6iIfS96OGY0IK8vXt0T%2Bnzib6UaL4psBPMvOhTA2gXLdij%2FQoWpDXmkjyAm54cvS8jlx6z0sYRVeGI%2BvRBhzNSde5g5UPeTM4zFP1Uo7qCwrqbRY%2BCJEKuotnSC1aIHnHuKRSa6%2F%2FP8dIUe2scOIf4SBU6d5PW0H27ASYo0m5QIjB3%2BA%2B3SNWP6ZKgI8Fy9lqMcoeVkadDDs2Cyi3%2BVZ1w7MI%2FoQ%2BeJ%2Fv4kJRCc4DtJQE5NvBd4tIAnYaFOcGC87uLQh9wpv5asp5hIACA5SfREDtwlaMJrHtMQGOqUBkXMeV%2BzeemUfq95Wrw6SHqifsZkzVDlfbJeykHUmhcodkyZW488pcXJjb69VNu5AmJwHwqqaW6huoP4%2FCYPRM00M4dSUZ2Z9n5hVPc1n4Ys1X7mPkSZGnsxiPf7QTljx2G94XOAN6IQ%2F3a0ck6J6io4%2F6UvSatOVKevsWNe1lOEMi0paBu%2BaqBlQwu3f55sJuTtxNJI2ZEcZJTAiGEBo12tFWkzK&X-Amz-Signature=43d9224045d757ac09cef023880463e5709f1e3eb5e54d143175c78a15612fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
