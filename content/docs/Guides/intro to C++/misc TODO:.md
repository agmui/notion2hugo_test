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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVA4RM7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEcQ15nwi1YGz3zrSi5fidUZtT%2FhWSgNQ5QVHbYYMEgAiEA1QpW%2BDW1CQZN5IWqnN%2BJ5FaSZOuZYCd7gD0lkU0P4N0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCyD85XLq%2B9y3X5h1SrcAzqGm8fvI2CJ6SMC6RH%2BozR6WDSRJaM0YBdG8HBw%2BKO%2BL33sKxr4yMyIokkaLH3Kw0s9WMC5giFECbWWNkZjBbB1Z%2FnOhHHBfkRVxmhrcanFX%2B9KTtVK0sCoh534MGkGTDfIK0A3XJx6Q7yCFqkdtN4%2Bu3iufGLNJRGf%2FONjozOnHXYpIcZhrZtSjpWYzY0w7D6n8VCWWr5Gx7dhUVPacCZN0OHhRvXh9yLF8LWJeOTuSFQEV4FkpL0QIgoQKtfebA5McUcvcwEQg%2FkVKwSsKjwcV506hTuxTGBtSCYT6dVAPUsHIv6OLh0Ahaik0%2B9KA0Gxqtl%2BtQKSNjbpIlPoLtEc%2FROztdE1kbclk9BKlSK8T58ZU2U4CjE20NqRLipNm0fHRa3g%2BqAVPjYvx50px8lkN7bJD3FFXeKSAs2ErgQd2NhHbrU5mRd9xMnT0cTgS4HVpIInqtGbLadGo0CaHgTwdNc5DpPu5oqtGq8ZujkbHaCWmnO2olrG1lxeirTou%2FMgvfSaKfVHkm0n%2Fcvs3Dckf8MfQTQ4X4U5TSAG1souWewXtb62S6B7OuzS%2Fy2riZyjRirtyzQxykLG4C5%2BkbwgPj3emF4KE5quN0W1kk6c3Zf%2Bc08jP%2FyBgWlWMPjw%2BL8GOqUBu57rf6AQmwf8bCRmq5IVYjUo9bylGIfIfdIfJhTzvpoBZQyRA1irVYKtRpEoir21XCCaBLJBtuU1KmxXvcrchu00oBUgiFnxybcJnM4%2F5o1kvVFv4ievp6H5lVLsM8GdtCuj7ciXem8wK1l2AtBjbW2J6ceNxRdWo8ht%2FkBoJbyKA9%2Bl7wh2JtlAtTrTouS3iwwMqg7sxiuKcm0DXG1WUIVizLLh&X-Amz-Signature=c17649b0a824160c54c2f52b5ffbde61d4fd912f3321abe3a02deb597ade3b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVA4RM7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEcQ15nwi1YGz3zrSi5fidUZtT%2FhWSgNQ5QVHbYYMEgAiEA1QpW%2BDW1CQZN5IWqnN%2BJ5FaSZOuZYCd7gD0lkU0P4N0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCyD85XLq%2B9y3X5h1SrcAzqGm8fvI2CJ6SMC6RH%2BozR6WDSRJaM0YBdG8HBw%2BKO%2BL33sKxr4yMyIokkaLH3Kw0s9WMC5giFECbWWNkZjBbB1Z%2FnOhHHBfkRVxmhrcanFX%2B9KTtVK0sCoh534MGkGTDfIK0A3XJx6Q7yCFqkdtN4%2Bu3iufGLNJRGf%2FONjozOnHXYpIcZhrZtSjpWYzY0w7D6n8VCWWr5Gx7dhUVPacCZN0OHhRvXh9yLF8LWJeOTuSFQEV4FkpL0QIgoQKtfebA5McUcvcwEQg%2FkVKwSsKjwcV506hTuxTGBtSCYT6dVAPUsHIv6OLh0Ahaik0%2B9KA0Gxqtl%2BtQKSNjbpIlPoLtEc%2FROztdE1kbclk9BKlSK8T58ZU2U4CjE20NqRLipNm0fHRa3g%2BqAVPjYvx50px8lkN7bJD3FFXeKSAs2ErgQd2NhHbrU5mRd9xMnT0cTgS4HVpIInqtGbLadGo0CaHgTwdNc5DpPu5oqtGq8ZujkbHaCWmnO2olrG1lxeirTou%2FMgvfSaKfVHkm0n%2Fcvs3Dckf8MfQTQ4X4U5TSAG1souWewXtb62S6B7OuzS%2Fy2riZyjRirtyzQxykLG4C5%2BkbwgPj3emF4KE5quN0W1kk6c3Zf%2Bc08jP%2FyBgWlWMPjw%2BL8GOqUBu57rf6AQmwf8bCRmq5IVYjUo9bylGIfIfdIfJhTzvpoBZQyRA1irVYKtRpEoir21XCCaBLJBtuU1KmxXvcrchu00oBUgiFnxybcJnM4%2F5o1kvVFv4ievp6H5lVLsM8GdtCuj7ciXem8wK1l2AtBjbW2J6ceNxRdWo8ht%2FkBoJbyKA9%2Bl7wh2JtlAtTrTouS3iwwMqg7sxiuKcm0DXG1WUIVizLLh&X-Amz-Signature=61c4b81362e646c69990d9b71d6e7d7737007d69c375dfc9689b5e32bd4a8a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
