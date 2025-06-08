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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBZUBEGB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVJKemnhJXnNAdLk%2FN%2FsfDinnxOBUtDooieXzmpHGQiQIgLpEx%2FgkEJPgonU9VapVYbUuqm%2FkIYCQlRuDHmtEkCFsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXVZMkQUprVu95pTSrcA9V68bNdr3q0aV%2Ftxh6ZZhUWDo7actdgXhrON8TJQ8d6W9Uqs%2F6c4tcPLyQ0%2BgDI6AWZFe5EetGQtZY%2B4760FNLij17jWRPxPYqRV2QJoHvXmeKKTEijePHDReo1Q%2F9IhroGwfWEJg1rhEcygD8Iy4Lv8eWaJs63GBrHVFO1b9txHSm5pWqDa4WopW6RUVGkXoH2GRrZ7y%2F%2FzkzBbYXcMkPJq%2FccLZQFCnLOjA4ppmI3P%2B0qkQsUiW%2FlZqd5tsxIMVGzSOJL9gv0LXAtavEOtDgyIUMHjhxq7l4nWR1H7Mq9c00bgDMkVecMNYaO7XN6ASFsA5wc%2FPK%2BSEAWf9mAzd5xM7GbaZ3t16CzcVJH%2FHAp5s9WvLcTQSiJo3HsGEcbQPYu7mXovOVD042Y6fFcuB%2F9VRnBpabt6C1AgkqMdMKs7IV7HRPLd5calWBmQ0M2F3rBOGWGnR%2F%2BLCk8TenUs6K99DPPa4JSCHmoOXgW7SawlcoiEWW%2FXZwHq%2BnADAnjKuB6WyeuSVJxo2PDR%2BqOefjgMVPGlxfAzbTZQyvMo4NAiIDUnAd4Oex%2FLcQoVG%2BUxkYRP2smUCwEf6WurywRZyP0DwlFpzQRDLg94Pn2YA14eKHYmTDyEcPXYnxfMJ6slcIGOqUBXqlPmmIqFiw5Gt8uUC5supW7XJP%2B5pGq1yF2u%2BjNXXLBxtQf4RFuwHJbQMnkPOeG94t82EFcHkV8E2YL9Bwelpnn49q39OEUek3l3UCQ4TKCNG0y%2BJb%2BTUKiZOf4dCA6MaX0J4YcosEHghP4ZeRENEws%2FClD4jA1hXG40jrE9hhJZAKBkH43aud0Rgi3ernJjw%2BiQu52c6ag0dDWMy2wybyzvEYE&X-Amz-Signature=ac0e8c26c2d1b333a3883351e78ff21a1e117d49ca4f2ef85b0a5476a5df8dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBZUBEGB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVJKemnhJXnNAdLk%2FN%2FsfDinnxOBUtDooieXzmpHGQiQIgLpEx%2FgkEJPgonU9VapVYbUuqm%2FkIYCQlRuDHmtEkCFsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXVZMkQUprVu95pTSrcA9V68bNdr3q0aV%2Ftxh6ZZhUWDo7actdgXhrON8TJQ8d6W9Uqs%2F6c4tcPLyQ0%2BgDI6AWZFe5EetGQtZY%2B4760FNLij17jWRPxPYqRV2QJoHvXmeKKTEijePHDReo1Q%2F9IhroGwfWEJg1rhEcygD8Iy4Lv8eWaJs63GBrHVFO1b9txHSm5pWqDa4WopW6RUVGkXoH2GRrZ7y%2F%2FzkzBbYXcMkPJq%2FccLZQFCnLOjA4ppmI3P%2B0qkQsUiW%2FlZqd5tsxIMVGzSOJL9gv0LXAtavEOtDgyIUMHjhxq7l4nWR1H7Mq9c00bgDMkVecMNYaO7XN6ASFsA5wc%2FPK%2BSEAWf9mAzd5xM7GbaZ3t16CzcVJH%2FHAp5s9WvLcTQSiJo3HsGEcbQPYu7mXovOVD042Y6fFcuB%2F9VRnBpabt6C1AgkqMdMKs7IV7HRPLd5calWBmQ0M2F3rBOGWGnR%2F%2BLCk8TenUs6K99DPPa4JSCHmoOXgW7SawlcoiEWW%2FXZwHq%2BnADAnjKuB6WyeuSVJxo2PDR%2BqOefjgMVPGlxfAzbTZQyvMo4NAiIDUnAd4Oex%2FLcQoVG%2BUxkYRP2smUCwEf6WurywRZyP0DwlFpzQRDLg94Pn2YA14eKHYmTDyEcPXYnxfMJ6slcIGOqUBXqlPmmIqFiw5Gt8uUC5supW7XJP%2B5pGq1yF2u%2BjNXXLBxtQf4RFuwHJbQMnkPOeG94t82EFcHkV8E2YL9Bwelpnn49q39OEUek3l3UCQ4TKCNG0y%2BJb%2BTUKiZOf4dCA6MaX0J4YcosEHghP4ZeRENEws%2FClD4jA1hXG40jrE9hhJZAKBkH43aud0Rgi3ernJjw%2BiQu52c6ag0dDWMy2wybyzvEYE&X-Amz-Signature=3547cbe8f0df4d575a130c9f43543ca34de80bf26273c33f5ba4922e5a8dcd76&X-Amz-SignedHeaders=host&x-id=GetObject)

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
