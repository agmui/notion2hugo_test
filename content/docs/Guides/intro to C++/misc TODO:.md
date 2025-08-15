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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6BMJ2E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDePu0uX5gDG8A3VkAlODsIZQ1HlRUpB99fS0UhhMP0kAiEAyjuiTmnwcQ3yjMcRGmj%2Fd8mLQc3M8lrX67kZZLxthZMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFxPFzWyXOHpHBjHdCrcA7cBXoCB%2B%2F5EQgMWR7l05C49V%2FyTsJ5IFUyRmQm23aW0TFZ%2Bzbuq2yH96dVtaKdHMr%2BYb111JdKx%2F4tjvDk660AtV%2FqqkN718Fvb9tvEICT3eLQahhYS3zcTOWiTPtTNZfWe%2BImwnPJ0LXAS3JO4IVrCKG2mh77LB43gmwd9VkoL2B%2FigvaF%2FEU%2FakSKAYFsbXUccFmXS9O2ST9GtHCqFbG1hAHhFhbLD4PuxHB1dUiSdyIM0nIPEXgQEi07G0EEIJhO2lH8QtVDJYB6HklCnIHZF158zSXT9KcEAFdm%2BISx59YrsmeNa1m6clttPYIr6pmlLhqDNvrAxIFlhdETJu4KkLt%2F%2FfJnODUotW0dXVp1xGlMX85tRTYu8yLU21cEYZ25T6D7BKrhiDHjgH%2FljxanI1TXQYb7if%2FWYtlQ1gblyBFlluYWScae7K8aeehtqxr4Fldyv2%2Bz0aiOhOR6YIZaVo2aBdplZMbuVySDjHEWskal53%2FjhUe4QSq4otxcUYR0Rgfh6yfiAMqEzUrW67MwSqXu6ugiLa%2Br3Z0ihMEhT6%2FnnUhaH7w%2FceGa%2BhiQEhecuOUAx2Yit5naQendAEQxBLEgkqNWGoPw164%2Bcj%2Fxwg%2FK4%2BCGIOQcrEHCMN%2Bi%2B8QGOqUB3sajcAORQ5jAtsKGkmwi88Ndi%2FlkRSfE0X%2BAQqUyguDVQ0kRPRbkHUjx%2FkwYGSGZicvKavYfMtgPXrJDlZE9y7GfME%2B7KDwh5Yzhz3Lwwd5D5MfkOmL7GzkEj1Ff6nAwD3Wu2Pf7hkoqjgQ6w%2FNl7mVgW%2FpB6BztwmxY1JXoB5rE%2BIsWIuf%2FTEKeg3PUVYcyUxTvtwjfMbyef54DbpakUPS9m%2BAf&X-Amz-Signature=ba2df6bf8432055aea4043cbeddd74f9f46d6ecf7a5a0aae439b60457655f4f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6BMJ2E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDePu0uX5gDG8A3VkAlODsIZQ1HlRUpB99fS0UhhMP0kAiEAyjuiTmnwcQ3yjMcRGmj%2Fd8mLQc3M8lrX67kZZLxthZMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFxPFzWyXOHpHBjHdCrcA7cBXoCB%2B%2F5EQgMWR7l05C49V%2FyTsJ5IFUyRmQm23aW0TFZ%2Bzbuq2yH96dVtaKdHMr%2BYb111JdKx%2F4tjvDk660AtV%2FqqkN718Fvb9tvEICT3eLQahhYS3zcTOWiTPtTNZfWe%2BImwnPJ0LXAS3JO4IVrCKG2mh77LB43gmwd9VkoL2B%2FigvaF%2FEU%2FakSKAYFsbXUccFmXS9O2ST9GtHCqFbG1hAHhFhbLD4PuxHB1dUiSdyIM0nIPEXgQEi07G0EEIJhO2lH8QtVDJYB6HklCnIHZF158zSXT9KcEAFdm%2BISx59YrsmeNa1m6clttPYIr6pmlLhqDNvrAxIFlhdETJu4KkLt%2F%2FfJnODUotW0dXVp1xGlMX85tRTYu8yLU21cEYZ25T6D7BKrhiDHjgH%2FljxanI1TXQYb7if%2FWYtlQ1gblyBFlluYWScae7K8aeehtqxr4Fldyv2%2Bz0aiOhOR6YIZaVo2aBdplZMbuVySDjHEWskal53%2FjhUe4QSq4otxcUYR0Rgfh6yfiAMqEzUrW67MwSqXu6ugiLa%2Br3Z0ihMEhT6%2FnnUhaH7w%2FceGa%2BhiQEhecuOUAx2Yit5naQendAEQxBLEgkqNWGoPw164%2Bcj%2Fxwg%2FK4%2BCGIOQcrEHCMN%2Bi%2B8QGOqUB3sajcAORQ5jAtsKGkmwi88Ndi%2FlkRSfE0X%2BAQqUyguDVQ0kRPRbkHUjx%2FkwYGSGZicvKavYfMtgPXrJDlZE9y7GfME%2B7KDwh5Yzhz3Lwwd5D5MfkOmL7GzkEj1Ff6nAwD3Wu2Pf7hkoqjgQ6w%2FNl7mVgW%2FpB6BztwmxY1JXoB5rE%2BIsWIuf%2FTEKeg3PUVYcyUxTvtwjfMbyef54DbpakUPS9m%2BAf&X-Amz-Signature=2ccb8c57f33a34f3e1d1ea2f0ba70620de2922e82c5a23bbdccdb61fbc6ab516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
