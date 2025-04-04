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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6G7YICZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKGjvPTp6WaG8BRKmp%2F7pjV0XcENzbU%2FpKecZclZm0MgIgWbWomplYe75H6%2B05DVXZfICaDZxg28wrLGLJTOLsuaEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDrPzFJNFeto2Idz1SrcAxCqPjBrBuuTAUKM97Gcx4%2BqaMRBpCY7SPbRV8uVLGLA7wV9zCE5RUuO%2BCrfJmP%2FocdCYT8KvaEyUoRFiIE8RcafySpNkbg8tZJRJPKqVRXtaOVY2dCQgKLMN%2FVbuxTH5OSjTkyJeQRiDENMnZjaYMXgJs0d75VtGKw2GamHnGnr%2BoPtg62tiVWtlwf%2Fy11H54FDJuHrDxEJVF6iaHtNJJ5A7cyddWGgdfZQLxyMPbg9t3hSxF9EMm7j62bUi%2BzYhV8ymF2YlV068iIyBFlF%2FMqY0CfqfiowR9gcetECLC%2FtrGAT%2Fw%2FKw2rFaFysO4QlmVOAD6u3yOMOdugkSvV7SbYGR7UoC%2FPMmBeRKeRVU3dHIh%2BezWVoKVVHPrG8kEESLGOrwo6xa8skEP8vaqNhJY506mn3xo%2Fy1riXxD%2FMzIM%2F%2FKoRIsKJtDbyk1KYRo7EsQofiT%2BIni6SlF2ch0GJfrH7%2FdbPdKnUZ32hZpvU1BqPwoPHNvlKIc7NHBRRVEQtEo1pdIxauP5OFj9MWs5mp%2Bo2R2j0EcTXUPtHJhdBGv5txinh9tKaxxQKE6cTPs9gg0cXhGIvsEVk7dhUV1CgZhLK8MXSb%2BwXHJ6XwvbW4LZzJT1cmBcZinnzFCM5MKvnv78GOqUBONJC5MWUzmtTauRMl%2F7LsaR%2ByyPxW7BwZl9MiMKEPIydZfmKnyLiP4tQyPLt1OpHyY8mCdXdzjJIQ%2FU7kpd0wTQagu291ur%2BsHQaI8Ls%2FqXwfCAbRatzoYfj%2B6CpL2F5vztkdGlFMc3WdBAPMECKrcSH43Ox%2BwGFYRa9Y2tPtu1%2FiXOb3H%2F9aX9J3jx4WAm7AfjBTTYK2he3vixgrrLiUZMNhrHr&X-Amz-Signature=3956b7b09e881248314e7011f084c127aeaf61546cba53e37a824dd05a74fced&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6G7YICZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKGjvPTp6WaG8BRKmp%2F7pjV0XcENzbU%2FpKecZclZm0MgIgWbWomplYe75H6%2B05DVXZfICaDZxg28wrLGLJTOLsuaEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDrPzFJNFeto2Idz1SrcAxCqPjBrBuuTAUKM97Gcx4%2BqaMRBpCY7SPbRV8uVLGLA7wV9zCE5RUuO%2BCrfJmP%2FocdCYT8KvaEyUoRFiIE8RcafySpNkbg8tZJRJPKqVRXtaOVY2dCQgKLMN%2FVbuxTH5OSjTkyJeQRiDENMnZjaYMXgJs0d75VtGKw2GamHnGnr%2BoPtg62tiVWtlwf%2Fy11H54FDJuHrDxEJVF6iaHtNJJ5A7cyddWGgdfZQLxyMPbg9t3hSxF9EMm7j62bUi%2BzYhV8ymF2YlV068iIyBFlF%2FMqY0CfqfiowR9gcetECLC%2FtrGAT%2Fw%2FKw2rFaFysO4QlmVOAD6u3yOMOdugkSvV7SbYGR7UoC%2FPMmBeRKeRVU3dHIh%2BezWVoKVVHPrG8kEESLGOrwo6xa8skEP8vaqNhJY506mn3xo%2Fy1riXxD%2FMzIM%2F%2FKoRIsKJtDbyk1KYRo7EsQofiT%2BIni6SlF2ch0GJfrH7%2FdbPdKnUZ32hZpvU1BqPwoPHNvlKIc7NHBRRVEQtEo1pdIxauP5OFj9MWs5mp%2Bo2R2j0EcTXUPtHJhdBGv5txinh9tKaxxQKE6cTPs9gg0cXhGIvsEVk7dhUV1CgZhLK8MXSb%2BwXHJ6XwvbW4LZzJT1cmBcZinnzFCM5MKvnv78GOqUBONJC5MWUzmtTauRMl%2F7LsaR%2ByyPxW7BwZl9MiMKEPIydZfmKnyLiP4tQyPLt1OpHyY8mCdXdzjJIQ%2FU7kpd0wTQagu291ur%2BsHQaI8Ls%2FqXwfCAbRatzoYfj%2B6CpL2F5vztkdGlFMc3WdBAPMECKrcSH43Ox%2BwGFYRa9Y2tPtu1%2FiXOb3H%2F9aX9J3jx4WAm7AfjBTTYK2he3vixgrrLiUZMNhrHr&X-Amz-Signature=2135f778003cb37c79d782748e4a4e7421a1c03a7049b3a96c63b903ed320545&X-Amz-SignedHeaders=host&x-id=GetObject)

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
