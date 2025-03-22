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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLYG6NOY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIB4iQ7zBQWzcYBI0VnaujlFmi3Tibm97ocHU4mZhUOIIAiBDDhJm5mKReSG2hhMiCep4JTNgBT8QGdZhCTMKLIkJQiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC3vldPuKzyr3xYMyKtwDxMn384H%2BfKwisUn7PV81enJJwQ94wwsfSDXXAnOB0hO%2B%2F5kWxhq3sIUP11kymnOPY5knHHo574oVyoq3jNXNN2DIefV%2Fw3Oe0MHb3ox5Ea9Ts5foNN4SLaVk4POXa1NuvcY7Le5manSV4hnNHhR8FFwqSYJpDwsj4iOM0f%2FLs%2BwyAiWDM4%2BYaIBu%2B0chN9z2BlH7KpDR1Znq4TYSU%2BOhOmv7NTVQSsUP1ZQAHsfFwMG6JQO3uXIC07sEfm8wsECVE71CNDTQ4jOKnenoy45q2WJQfoOIdGFywbKbFI3AQ1%2BGMGTjbTzKQeSLKodZGrZL9VlfHkh5nK5CiGmSi8uRAt4aJftinq%2BFukuUb9UnOoqnc6HWAvi3IYuU2tIpqpzTJMA%2FbDn4tPPu44oW68fqGY5S0JqiSUU9ObZ0n3PqeyDrLk0nF15t6nIZcMYEf%2B7TbfN0UAqUo1Y5muVdl%2FhPUBo5MWAwTXweIsIcT6YTrcLK6%2F9OhNPzc19oJzIch8K%2B3y6DVnumi69s621lZfGcqobxXfkZpBRe4if3bBdTsPLctf%2FQFUpdV1qJin4WZ3iXjZ9okrERT5Gb2VcTUPJjzPJMgPZx%2F%2BoZg%2B06bM%2BNM16RsNRADyN%2B4TgovVow%2FO77vgY6pgGPzquJC98JXWdGo9f94jFlrtWPbxPAv3DvKTtR6e8HyaUpI%2FPAauoTWK3WRgd%2BA%2Fn1lH%2Fz1n1TYag%2FYUL8dmQMfpDq2BW1aL4iy%2FEVASq11YUEtS%2FlM1esZsa4E30FNRsVyCSU8iOi3oqYQTpxuKnLPIR%2FF4RgKyfZ9AK9QVLk5PBo0GUCWtCKmXG2%2FzDR3E2Gtiyl%2F%2FGM5dV%2FhfNTaBa86DQ9cv%2Bc&X-Amz-Signature=9ff27da5a18cc2741b4598c68aea6f46eb2553e1f5a467c2f4dbeaa14a121448&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLYG6NOY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIB4iQ7zBQWzcYBI0VnaujlFmi3Tibm97ocHU4mZhUOIIAiBDDhJm5mKReSG2hhMiCep4JTNgBT8QGdZhCTMKLIkJQiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC3vldPuKzyr3xYMyKtwDxMn384H%2BfKwisUn7PV81enJJwQ94wwsfSDXXAnOB0hO%2B%2F5kWxhq3sIUP11kymnOPY5knHHo574oVyoq3jNXNN2DIefV%2Fw3Oe0MHb3ox5Ea9Ts5foNN4SLaVk4POXa1NuvcY7Le5manSV4hnNHhR8FFwqSYJpDwsj4iOM0f%2FLs%2BwyAiWDM4%2BYaIBu%2B0chN9z2BlH7KpDR1Znq4TYSU%2BOhOmv7NTVQSsUP1ZQAHsfFwMG6JQO3uXIC07sEfm8wsECVE71CNDTQ4jOKnenoy45q2WJQfoOIdGFywbKbFI3AQ1%2BGMGTjbTzKQeSLKodZGrZL9VlfHkh5nK5CiGmSi8uRAt4aJftinq%2BFukuUb9UnOoqnc6HWAvi3IYuU2tIpqpzTJMA%2FbDn4tPPu44oW68fqGY5S0JqiSUU9ObZ0n3PqeyDrLk0nF15t6nIZcMYEf%2B7TbfN0UAqUo1Y5muVdl%2FhPUBo5MWAwTXweIsIcT6YTrcLK6%2F9OhNPzc19oJzIch8K%2B3y6DVnumi69s621lZfGcqobxXfkZpBRe4if3bBdTsPLctf%2FQFUpdV1qJin4WZ3iXjZ9okrERT5Gb2VcTUPJjzPJMgPZx%2F%2BoZg%2B06bM%2BNM16RsNRADyN%2B4TgovVow%2FO77vgY6pgGPzquJC98JXWdGo9f94jFlrtWPbxPAv3DvKTtR6e8HyaUpI%2FPAauoTWK3WRgd%2BA%2Fn1lH%2Fz1n1TYag%2FYUL8dmQMfpDq2BW1aL4iy%2FEVASq11YUEtS%2FlM1esZsa4E30FNRsVyCSU8iOi3oqYQTpxuKnLPIR%2FF4RgKyfZ9AK9QVLk5PBo0GUCWtCKmXG2%2FzDR3E2Gtiyl%2F%2FGM5dV%2FhfNTaBa86DQ9cv%2Bc&X-Amz-Signature=6033492250c6eb62acc74b7511745fe51f42bc919df8f14da4c85205d0e6653f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
