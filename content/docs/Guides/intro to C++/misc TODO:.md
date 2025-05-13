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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQITU5KZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIBUWqMUTO9Qa5aU2t3nfb40X%2FLBskidxZQF12tDNsbQmAiBXQ56afc%2FLxo8vd15jLYk5uco%2BMsb54XKabNwc4OPcfCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYxj6m5azvPu2Ak2LKtwDBEjXiC4wS8fxW9LdcD2BGFWalksd%2BK2ibkMF2Qo45eCaBxMSpBEHkn%2BlhquzfCTjRm0fLDd7bu8EjmIsbJz7tBxOP493pcyy%2FTzvEN5SSLPy%2BOfhXwiiUJ8T9c4Ol6UvLAT7j3A%2FMxmt4e7V2GbWh4Dd1dNHYCG08Ge%2FDAL3T%2BCzSwYujv1LAgpiD4mLbPwm1iClt7lwqdUK7NFeOaPN2yBUx2DUnQDmypa3S2D149lr7UCWgYmS0zAaMXRA1qG32svmWXBOmknVMgTMcv1ZqW0MzUt81RxMVFR%2BxGWBB9R7Fv4Ux8yWmLsU7u1W7rx8XqPH65Y%2B0ma4hxCTQMpUu0f9%2BekEY42QUKIXHcMXv0SXYy6AG54GX46wB5X%2BVUcf0lM28iLH7%2FtUeDA0rwNzrjjUb2MWTpHJA3USn2MQkjPapnuz89S9ETrQqSsRPKHodmfyfPhwZzygELhF49%2FID%2FfTMHySJQkKLChA%2BJJ%2B0KOW0kj1mNoEG0dfI7%2FSbe9gYIedtvgBRpXowowZU840ua50wig0fDkNxC6UnlSmBx7SgFGASiGXal4xcmZ7bOQNPsraIjZlH54byTaMLr9B6D4qNBGWvbHM6CenQ9bF5jIGpgdaDO7ha6j6f8cw56OMwQY6pgGdYNjyONjsi1T6AAzkOxH0VrRQsPbQIW4l0hqYRxGH5weu5BMWXPzIma8kup26FN0DLRhzMH3kyUSM9LjwcvFpSRxnUS61s2k64LtW9HDyaSJNm1W93czb5ZOe3wCc52hPEExpwk9bmfDxdw1NQyVDa7zQBO1JnkIG0laMN%2FztAHPCiuFzw6N%2Ba%2BMdk1V39JsLfBsnjJwz1%2BXpfIPePQjuCsvgFTv5&X-Amz-Signature=b15ae84178316885df8dddc3778cf65e9696aed2cc3bfd120ae7fc73f0f1335b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQITU5KZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIBUWqMUTO9Qa5aU2t3nfb40X%2FLBskidxZQF12tDNsbQmAiBXQ56afc%2FLxo8vd15jLYk5uco%2BMsb54XKabNwc4OPcfCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYxj6m5azvPu2Ak2LKtwDBEjXiC4wS8fxW9LdcD2BGFWalksd%2BK2ibkMF2Qo45eCaBxMSpBEHkn%2BlhquzfCTjRm0fLDd7bu8EjmIsbJz7tBxOP493pcyy%2FTzvEN5SSLPy%2BOfhXwiiUJ8T9c4Ol6UvLAT7j3A%2FMxmt4e7V2GbWh4Dd1dNHYCG08Ge%2FDAL3T%2BCzSwYujv1LAgpiD4mLbPwm1iClt7lwqdUK7NFeOaPN2yBUx2DUnQDmypa3S2D149lr7UCWgYmS0zAaMXRA1qG32svmWXBOmknVMgTMcv1ZqW0MzUt81RxMVFR%2BxGWBB9R7Fv4Ux8yWmLsU7u1W7rx8XqPH65Y%2B0ma4hxCTQMpUu0f9%2BekEY42QUKIXHcMXv0SXYy6AG54GX46wB5X%2BVUcf0lM28iLH7%2FtUeDA0rwNzrjjUb2MWTpHJA3USn2MQkjPapnuz89S9ETrQqSsRPKHodmfyfPhwZzygELhF49%2FID%2FfTMHySJQkKLChA%2BJJ%2B0KOW0kj1mNoEG0dfI7%2FSbe9gYIedtvgBRpXowowZU840ua50wig0fDkNxC6UnlSmBx7SgFGASiGXal4xcmZ7bOQNPsraIjZlH54byTaMLr9B6D4qNBGWvbHM6CenQ9bF5jIGpgdaDO7ha6j6f8cw56OMwQY6pgGdYNjyONjsi1T6AAzkOxH0VrRQsPbQIW4l0hqYRxGH5weu5BMWXPzIma8kup26FN0DLRhzMH3kyUSM9LjwcvFpSRxnUS61s2k64LtW9HDyaSJNm1W93czb5ZOe3wCc52hPEExpwk9bmfDxdw1NQyVDa7zQBO1JnkIG0laMN%2FztAHPCiuFzw6N%2Ba%2BMdk1V39JsLfBsnjJwz1%2BXpfIPePQjuCsvgFTv5&X-Amz-Signature=2fe8de70637b1c7d4c8605579e66b5b6fb0347cfb82d0f1ed89c34179319e460&X-Amz-SignedHeaders=host&x-id=GetObject)

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
