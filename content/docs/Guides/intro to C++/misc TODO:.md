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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LMLIK2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBiGpIez99PqjQyCWya8%2BMQry5zSxc9SWNyk4xtW6pOPAiEA9e6fmj4BDirKumhSsFwhh1ork%2BNbheJANNVwi%2Bb%2BBIYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2lkJhUaM9MFlEPTSrcA17ibSIHEcfc%2FLpWvaojvWxttHXG9HhKXXKF4B86nNzGu92CsEhfjaO9QTOV%2BpbD%2FfnDnYW79B0XDf0vZL3VucdOX%2BR7rQlmYYMtSa1Rd5216XzlunNexESNApf4ydy%2FkRB0UuZl11QEhDy0x5jKv%2BHHTotsa2OIVv9ka7czkipwh6fn1uiHDc6vNIJ%2F2AuHlaaLNyJ%2F5HJJ1V1gHVhM0sCknS66N2rNjFJs5gZNKO5swvWOf8wJn1qXHeTmYhpTlZO88iccRRmGZINncLf3YVFR6SEW0SiBfF4oDxuAMPm3V%2BJwp1C%2F679JSoXML%2FAJGO1eObh7dC41f%2F6acK61BTmxtDF5Q6ntF90ecUhvVXPxD8Pa0o3eSAO%2B8r2HBn1Kuugk18kKMXUNwwrJEPd7ifJVZIthuI3xz0Yz2VgXRq5xWTxz%2BGrX7Zrofgz3XvQPPFLLwe2EQg6ZeHVu2BKokamKZhFtDLjFdDL5S7zQgYkruG%2B8%2BUlUSDdpCDIlfNlrxZ28s%2BfRyQiXKhCQ0%2F%2FoqLB2Sa8zGZqYbA1HO9E%2BiokSW1E2PPd6dVYXxQnkX81TbZZN%2B6ekDjuGKw7M%2B04W7VYmd1PzN9WwVb53YP6tofHHvzKFNjJ7eF4XbJ86MMzD4r8GOqUBXnT8L7g02UpEkkRYDABFn8QFxru%2FVE2UH1vrPgOnDKvgeSiHoHPadDKUrTIyDAd%2BnHEpFhnAHlnVCG%2B2LsvMSrn2EOUVoqXryU4MEBbqbG0JesnD8gg4OHlZHDaHGw1yvKuKnjOtQnWVI60%2Fbbc97Yh6cHDIFxSDjWOEZONMHLCT0mRiHreFCGxF16C7q%2BMNupGmgkhPFKDQMMwa6HFZwoDsv%2Be3&X-Amz-Signature=09c5158ad085ef6ead59474b050f89124277c469ba2d1d3507ee33d407b56ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LMLIK2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBiGpIez99PqjQyCWya8%2BMQry5zSxc9SWNyk4xtW6pOPAiEA9e6fmj4BDirKumhSsFwhh1ork%2BNbheJANNVwi%2Bb%2BBIYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2lkJhUaM9MFlEPTSrcA17ibSIHEcfc%2FLpWvaojvWxttHXG9HhKXXKF4B86nNzGu92CsEhfjaO9QTOV%2BpbD%2FfnDnYW79B0XDf0vZL3VucdOX%2BR7rQlmYYMtSa1Rd5216XzlunNexESNApf4ydy%2FkRB0UuZl11QEhDy0x5jKv%2BHHTotsa2OIVv9ka7czkipwh6fn1uiHDc6vNIJ%2F2AuHlaaLNyJ%2F5HJJ1V1gHVhM0sCknS66N2rNjFJs5gZNKO5swvWOf8wJn1qXHeTmYhpTlZO88iccRRmGZINncLf3YVFR6SEW0SiBfF4oDxuAMPm3V%2BJwp1C%2F679JSoXML%2FAJGO1eObh7dC41f%2F6acK61BTmxtDF5Q6ntF90ecUhvVXPxD8Pa0o3eSAO%2B8r2HBn1Kuugk18kKMXUNwwrJEPd7ifJVZIthuI3xz0Yz2VgXRq5xWTxz%2BGrX7Zrofgz3XvQPPFLLwe2EQg6ZeHVu2BKokamKZhFtDLjFdDL5S7zQgYkruG%2B8%2BUlUSDdpCDIlfNlrxZ28s%2BfRyQiXKhCQ0%2F%2FoqLB2Sa8zGZqYbA1HO9E%2BiokSW1E2PPd6dVYXxQnkX81TbZZN%2B6ekDjuGKw7M%2B04W7VYmd1PzN9WwVb53YP6tofHHvzKFNjJ7eF4XbJ86MMzD4r8GOqUBXnT8L7g02UpEkkRYDABFn8QFxru%2FVE2UH1vrPgOnDKvgeSiHoHPadDKUrTIyDAd%2BnHEpFhnAHlnVCG%2B2LsvMSrn2EOUVoqXryU4MEBbqbG0JesnD8gg4OHlZHDaHGw1yvKuKnjOtQnWVI60%2Fbbc97Yh6cHDIFxSDjWOEZONMHLCT0mRiHreFCGxF16C7q%2BMNupGmgkhPFKDQMMwa6HFZwoDsv%2Be3&X-Amz-Signature=080a31a7c8169ab38e93da8e573b7a3a2bb75dbeb63e4d75dea485d645b03bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
