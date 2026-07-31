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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2WIAXQ7%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgboIRU2VV0hvfb4jHQBG7pnMpMYp27lsJz5l2FfCEnwIhAODCkErTTnrTfGuTakG5uuomj%2B8nYansYK2Di7t1NCl6KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUeeFtCvcbHCzzaeAq3APdZgiJPzVgGClyuv3DsUNFAZaNKjHiv%2FpKBipehlh8XY0US5ZF%2BA16rok4zy5gyhMoHD8z5meXdQ6mYviqaHjguDp5LwhOLNP6JxYJuMP9GVGdWsi26PqpEKnw8y8nhJgtXXxiKQw%2BVQqyfM1g1X8B6iwJS%2F%2BFYw67v0AofV4ygcTT1mZuAKd44hBTSYSPp0GSeKTQrs4fEH4X1XJ3GiDhkwA57qlqr%2FCdK289fFeQ5FaKW1MpKNZZzOIcpEGkhYjeEgvZBJlol1Kr1S%2FAmPYDDe1qCcH2KUrJHUa6okdnGm1iaVkkOhIcvXAo1F0sYWnhrmSwMVyp8M55H6vgssooX%2FqpPsxEcNPGHzIBmJLhx9oc9OhRSjZ0bNdkyfC1WxFWND%2FCABnNWB8zDDGzKHPvj54nhYvrWza39PxRlD5qYpTDpx8Ok63f5uSysKyBodcz9Sxfd%2FHe%2F2da5ydXcdbh9so6hTZSCZH7L%2FNDXiupwQmVr%2BAVJgVetf6dw%2BUasTs%2Bqo%2FkPbcNlTm5Azuft2aX8PP%2B1vpxhyZz18Dqy3q5V5CokwFHYr2zPNgU7sUK8HoO8A6vTm4a6NHYSm1KaOluxB1Z8SNu50EY3NiMehf05G8z4nJyQN6VMSs2JTCDl7DTBjqkAUXKCvyVTyIKpShzoE0Hr2UhIQ8VyBgtzInLZB2N7Z9uEevTIsOS6CEeyLEAgFQVpFKiFgXBUrDUFCpqHrRImLpRrDKlHLNOgyN0JZ8UUkOLHCEaS9oDbx0PidbVz4umpxhz5%2FGorh%2BwX4bfShxV6HzQmVNKkacpRerqYJ5zDQt9RgTmHB1LxXVnpzP%2FRnO4yS%2B84yg%2BfiBRm36juKAzio%2BZTjSK&X-Amz-Signature=eedd489bd01811abfa1f662ce47b1e94bd0049c38d59853a9abceed48f91bc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2WIAXQ7%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgboIRU2VV0hvfb4jHQBG7pnMpMYp27lsJz5l2FfCEnwIhAODCkErTTnrTfGuTakG5uuomj%2B8nYansYK2Di7t1NCl6KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUeeFtCvcbHCzzaeAq3APdZgiJPzVgGClyuv3DsUNFAZaNKjHiv%2FpKBipehlh8XY0US5ZF%2BA16rok4zy5gyhMoHD8z5meXdQ6mYviqaHjguDp5LwhOLNP6JxYJuMP9GVGdWsi26PqpEKnw8y8nhJgtXXxiKQw%2BVQqyfM1g1X8B6iwJS%2F%2BFYw67v0AofV4ygcTT1mZuAKd44hBTSYSPp0GSeKTQrs4fEH4X1XJ3GiDhkwA57qlqr%2FCdK289fFeQ5FaKW1MpKNZZzOIcpEGkhYjeEgvZBJlol1Kr1S%2FAmPYDDe1qCcH2KUrJHUa6okdnGm1iaVkkOhIcvXAo1F0sYWnhrmSwMVyp8M55H6vgssooX%2FqpPsxEcNPGHzIBmJLhx9oc9OhRSjZ0bNdkyfC1WxFWND%2FCABnNWB8zDDGzKHPvj54nhYvrWza39PxRlD5qYpTDpx8Ok63f5uSysKyBodcz9Sxfd%2FHe%2F2da5ydXcdbh9so6hTZSCZH7L%2FNDXiupwQmVr%2BAVJgVetf6dw%2BUasTs%2Bqo%2FkPbcNlTm5Azuft2aX8PP%2B1vpxhyZz18Dqy3q5V5CokwFHYr2zPNgU7sUK8HoO8A6vTm4a6NHYSm1KaOluxB1Z8SNu50EY3NiMehf05G8z4nJyQN6VMSs2JTCDl7DTBjqkAUXKCvyVTyIKpShzoE0Hr2UhIQ8VyBgtzInLZB2N7Z9uEevTIsOS6CEeyLEAgFQVpFKiFgXBUrDUFCpqHrRImLpRrDKlHLNOgyN0JZ8UUkOLHCEaS9oDbx0PidbVz4umpxhz5%2FGorh%2BwX4bfShxV6HzQmVNKkacpRerqYJ5zDQt9RgTmHB1LxXVnpzP%2FRnO4yS%2B84yg%2BfiBRm36juKAzio%2BZTjSK&X-Amz-Signature=a1f388bc34bf6e8850163a99127e2e64646f3d9c6e134098f54a728eae6232b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
