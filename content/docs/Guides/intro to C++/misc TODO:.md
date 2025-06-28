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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2TC63N%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUvfTf9vK%2FxkuaJdKeK1xvITLfQXOa6RjNnuu%2FLeQEBAiB4jqafiCGcaCRvVqQYj5llyci5kKMHctw0BWyhs%2BIawCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6j8DNVq7rE3snlKmKtwDaB222JBjKaZ6w%2By%2BHST1Pv5pJvfZqcUL5vdCPbfIVVYHKYU%2BjA8F7vcGeh%2Fham2e5Fn%2FZO6%2BxjtsYb5hBgsBj7eW0uNNJIPKwIRORmPb6dihTz6ZyA390OMz9qZRJN7MxAEgvHnP8imOVbeXnP1z25DkOfkWhPTcDhAhGaM7T1SMUe0chVmdl7rfCr3JssJpkUG1y2rmqmCuJSNkldNWXmoVjFYN12SuOKE6BBXhrYp8l1iYNv%2FYs53xuo2NoXNvqZ51mwXuuogiY49QDkMqrEqXDXHxH2MVjzZZq1DQY22NwUxjrCq7lRn9RscS6f%2B%2FFRNupzRbPWOnP0kwJWwkmRN7gB4Q5f4L9Z18ZKr2ST0aOAyFcXq49dH04CT1XrO2N4HilS5D%2BCmw1vKaXPTYZ2aaCKttXY09poJYfzd4hYd%2B7ILP8B6BPJgWn2t%2FFi6qaVqtTjJ4f67kVUnM96u832eXXtEYiAZrtmrfiogx5b6Xl%2F3YDqcAM06myP65rV%2Bcsm%2B42XEF19Hn4DJSYUBilYHvw8xdV6nWUT%2BRW%2FMoePiZ5nmUVirYRcS37qjdzqihvG%2B1hJ9D0Sw2%2FC78nWc61KysMN6QqtjWduEcGtD06uogcQhVEvT3xD8l9sQw6sr%2BwgY6pgEwBuY9xPsTcoHgv6AkIRMmcCZYnB%2F7X6EOrJvTZFDNOX4p0JWTHUe6eA5pWQMKEAhYwUaiYLGdj%2BbGyIjev1GrlRWiTaGds0xqXlAf2uDpJmoaV4kk7iWps0A1PYREpMfvMA2VL1ELo%2FSFMUgzdZvxvIFMQbfFURWj6Ama53TvHCQ%2BoBsW0tq7heV7VS167nE4tYMgdDrqabLzE76GAMvI%2BRhWRZM5&X-Amz-Signature=40b6fd65bd9e3b280e18cdf9c6d5db6cf385cd332a132b9c0e034d568e6907bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2TC63N%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUvfTf9vK%2FxkuaJdKeK1xvITLfQXOa6RjNnuu%2FLeQEBAiB4jqafiCGcaCRvVqQYj5llyci5kKMHctw0BWyhs%2BIawCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6j8DNVq7rE3snlKmKtwDaB222JBjKaZ6w%2By%2BHST1Pv5pJvfZqcUL5vdCPbfIVVYHKYU%2BjA8F7vcGeh%2Fham2e5Fn%2FZO6%2BxjtsYb5hBgsBj7eW0uNNJIPKwIRORmPb6dihTz6ZyA390OMz9qZRJN7MxAEgvHnP8imOVbeXnP1z25DkOfkWhPTcDhAhGaM7T1SMUe0chVmdl7rfCr3JssJpkUG1y2rmqmCuJSNkldNWXmoVjFYN12SuOKE6BBXhrYp8l1iYNv%2FYs53xuo2NoXNvqZ51mwXuuogiY49QDkMqrEqXDXHxH2MVjzZZq1DQY22NwUxjrCq7lRn9RscS6f%2B%2FFRNupzRbPWOnP0kwJWwkmRN7gB4Q5f4L9Z18ZKr2ST0aOAyFcXq49dH04CT1XrO2N4HilS5D%2BCmw1vKaXPTYZ2aaCKttXY09poJYfzd4hYd%2B7ILP8B6BPJgWn2t%2FFi6qaVqtTjJ4f67kVUnM96u832eXXtEYiAZrtmrfiogx5b6Xl%2F3YDqcAM06myP65rV%2Bcsm%2B42XEF19Hn4DJSYUBilYHvw8xdV6nWUT%2BRW%2FMoePiZ5nmUVirYRcS37qjdzqihvG%2B1hJ9D0Sw2%2FC78nWc61KysMN6QqtjWduEcGtD06uogcQhVEvT3xD8l9sQw6sr%2BwgY6pgEwBuY9xPsTcoHgv6AkIRMmcCZYnB%2F7X6EOrJvTZFDNOX4p0JWTHUe6eA5pWQMKEAhYwUaiYLGdj%2BbGyIjev1GrlRWiTaGds0xqXlAf2uDpJmoaV4kk7iWps0A1PYREpMfvMA2VL1ELo%2FSFMUgzdZvxvIFMQbfFURWj6Ama53TvHCQ%2BoBsW0tq7heV7VS167nE4tYMgdDrqabLzE76GAMvI%2BRhWRZM5&X-Amz-Signature=c35157c1415fefc2708da49ab941b1da31f0264e6387130214bc9d4ff4aad1c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
