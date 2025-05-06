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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJTITVX4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8lm5KxFZRQqxTBdQydmxWh2X%2BAo7CiVp1QlBoqcPCPAiAKdItE%2Fit2675c%2BLdtZcXZRGrJqIJlH79haGMBoFZceCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMH%2F96rnN8WePj1tsPKtwDi0yHAjpGW8OXK359wkjTzZ6MDRJX2%2FkkQelefj9LbTX9zNQPur7Njj3h4SdGpZRNlQfWmyr%2BEV%2BoGQVhbuFLxa2E078X78nr6JYgGBaUMhs4VCJQBpxBIxYjxfqqwrPS6qUF1LujNYGdyobcjEJQgWtPOEMZSoxTAowvr5PkTt8qlZIEdvXcEZhJ3CzvhtIG2SFMAP%2BHfl4e%2FEB9DlRPpm9f1PZYHjxsT1k7ZrtHvJfBZq4srx%2FfRTBUqHdKCbC9Z2jTiFAbUPebz%2FLOv5Zb3beALZZup6SlEIDJ9Q%2F2BSAaIL9JNL2TXRHo0Zq%2FmXtJyO%2BFUJq7YK4ADXZak6hrNw1NMpEhDtEvLuUKETXBOjhyvHCiBHLfjdjDLOPE5qfufZdcmSlR8aSI8BoqxJIZW8MPCE0jua4AmW4EjeIzGNuAqPAQ3dtUpGHE74qyYsllXrsaHNZmaByeyMrDCV6t96%2BvbdT2%2Frsi9BpM78Hm6oFEe7sFI%2BEN3nF4z%2BnvkYIYgzmWHhkcUoBNfiCEUHSjG%2B3PyCgyJnwxxnJ%2FHLfgfT%2FFRQj3zKLgmshqJz3xCNedpQTr9etoOSuUa1f2DwbHkrcGkdOIyrSPxDozWsuXVoRxCzffE0vBzwxj%2B%2BYwl%2FbnwAY6pgHiMEpAdNFA3SvyeiG8EHaFapiZomE700mvh8MPsL81E1uiq%2BSQCXTwQ2dixCk7c8lw1xEgybEfk5jpsOH%2Fm%2BcWY1G5ymKJXxabJxIEWZV%2F%2BMdpGZHWnqifh66BmYAPkHWgjNwrtZwFcBbhvxjPD3L5yiKThY9y6DH9OkX7Vpq36myoM36N5apnJP4t89eXlMbnSNc1cztaGgI43qtxxvxcXgb1EDbn&X-Amz-Signature=7514473fe83c33aa20e1885ca9ec60791cc77f58a5cb40e4c2362f49578b8e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJTITVX4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8lm5KxFZRQqxTBdQydmxWh2X%2BAo7CiVp1QlBoqcPCPAiAKdItE%2Fit2675c%2BLdtZcXZRGrJqIJlH79haGMBoFZceCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMH%2F96rnN8WePj1tsPKtwDi0yHAjpGW8OXK359wkjTzZ6MDRJX2%2FkkQelefj9LbTX9zNQPur7Njj3h4SdGpZRNlQfWmyr%2BEV%2BoGQVhbuFLxa2E078X78nr6JYgGBaUMhs4VCJQBpxBIxYjxfqqwrPS6qUF1LujNYGdyobcjEJQgWtPOEMZSoxTAowvr5PkTt8qlZIEdvXcEZhJ3CzvhtIG2SFMAP%2BHfl4e%2FEB9DlRPpm9f1PZYHjxsT1k7ZrtHvJfBZq4srx%2FfRTBUqHdKCbC9Z2jTiFAbUPebz%2FLOv5Zb3beALZZup6SlEIDJ9Q%2F2BSAaIL9JNL2TXRHo0Zq%2FmXtJyO%2BFUJq7YK4ADXZak6hrNw1NMpEhDtEvLuUKETXBOjhyvHCiBHLfjdjDLOPE5qfufZdcmSlR8aSI8BoqxJIZW8MPCE0jua4AmW4EjeIzGNuAqPAQ3dtUpGHE74qyYsllXrsaHNZmaByeyMrDCV6t96%2BvbdT2%2Frsi9BpM78Hm6oFEe7sFI%2BEN3nF4z%2BnvkYIYgzmWHhkcUoBNfiCEUHSjG%2B3PyCgyJnwxxnJ%2FHLfgfT%2FFRQj3zKLgmshqJz3xCNedpQTr9etoOSuUa1f2DwbHkrcGkdOIyrSPxDozWsuXVoRxCzffE0vBzwxj%2B%2BYwl%2FbnwAY6pgHiMEpAdNFA3SvyeiG8EHaFapiZomE700mvh8MPsL81E1uiq%2BSQCXTwQ2dixCk7c8lw1xEgybEfk5jpsOH%2Fm%2BcWY1G5ymKJXxabJxIEWZV%2F%2BMdpGZHWnqifh66BmYAPkHWgjNwrtZwFcBbhvxjPD3L5yiKThY9y6DH9OkX7Vpq36myoM36N5apnJP4t89eXlMbnSNc1cztaGgI43qtxxvxcXgb1EDbn&X-Amz-Signature=33e346c8b3a725f5989b3cca8dd6560681b74f59e863f94e59c8aef260e2c0d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
