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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFWA4LMT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxtGHwocoTT4wbgsZNdZ1UjjZkvnaLgX34DtRiZFD3AAiEA68Nie7SPoGq%2F8rQdXWAYlMCasTCZVJQ%2BDxpk6KRuEZEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJ8dJLnpeTbKm0Um8yrcA8kz32wadwpLfXv6H%2F%2BK5XjsJrJHwUgtJjF%2FWIZV6KMl3dAKYAAtQw8JBPPZ%2BcAI29bQ722UhieSe%2Bb%2FTSxOz2zbjWR6C9GW9%2B%2FAlX3pAvZzuqH7IX0mhYXjjv5OqYnVVwWJ7u7BhSm4sfaa0wf3C5fJ36w5EQXm11oDqgq6qiB4%2F9SkLtUvaErw%2BslxraQ%2B%2F6jjPUOK1%2Ff49bTq%2Bp2tsfyxNPJ6W29wEpwmD%2FwpcNqKq%2F0Oxlaj0qKJSGl%2BX030rcE18qs%2FxQlyWnACrwdaaBi%2FC6IfRRENd4n6Ng1eBWX%2BgUIS8OpSLQNHUy5Lk9O0l0DjiXup3YDKYMJpAgr0GYvPBRjJZLwF5775Sftz4tgD2QX8sIq7lavRsKRZ0duEyqkjBCcNYbbtdlaJ7FcLMS%2Fv%2FppqjDSvVawYW3ru%2Fj69%2FJz9gQv8KVSFCPQgDTTmMzUfyPrqXq%2BfJMPWLBzFNu3L9UYpgT%2Btc3kfcYDlguHC%2BZT1ta0UslPrPf1Ki0quTcPe%2F5wMATxegBh8aJiclMX1Lt%2F2N8wP2FfzPE%2BHjH4PRgSXpUF%2Baaog3jfpwa2HsSlYHy4fSBI0wYBqqwiyZ6PzAyEynErNtrmW1NN1aOv9cFa9UO7dCy6O2pfqMKfNv78GOqUBBu6SBQRAzFzADnF9ihB0LIQe%2Fhzo5Fu6UcxFqt2VtGFXHGClwoJV78gQ%2BtiG1xkWCukCgjikseOv%2FzSs9OyFDP6%2BP96aoXJr0SZyEJCDXl0TqtRHt9WhkY9BG%2BcaFjZ3Dj37UrlVPXCJ1KlfPPQKdSCscGT107qbOT18W%2BqxueSV%2FrgH%2FvQ8pry4qj7lvK5XbR%2BbQ9AIJjaJSMZwJ3sLgTsGNq1f&X-Amz-Signature=5ded69c82dd204db1c7011845bfbe46664aec6d88af326a2a7d0c9b76c20ec42&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFWA4LMT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxtGHwocoTT4wbgsZNdZ1UjjZkvnaLgX34DtRiZFD3AAiEA68Nie7SPoGq%2F8rQdXWAYlMCasTCZVJQ%2BDxpk6KRuEZEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJ8dJLnpeTbKm0Um8yrcA8kz32wadwpLfXv6H%2F%2BK5XjsJrJHwUgtJjF%2FWIZV6KMl3dAKYAAtQw8JBPPZ%2BcAI29bQ722UhieSe%2Bb%2FTSxOz2zbjWR6C9GW9%2B%2FAlX3pAvZzuqH7IX0mhYXjjv5OqYnVVwWJ7u7BhSm4sfaa0wf3C5fJ36w5EQXm11oDqgq6qiB4%2F9SkLtUvaErw%2BslxraQ%2B%2F6jjPUOK1%2Ff49bTq%2Bp2tsfyxNPJ6W29wEpwmD%2FwpcNqKq%2F0Oxlaj0qKJSGl%2BX030rcE18qs%2FxQlyWnACrwdaaBi%2FC6IfRRENd4n6Ng1eBWX%2BgUIS8OpSLQNHUy5Lk9O0l0DjiXup3YDKYMJpAgr0GYvPBRjJZLwF5775Sftz4tgD2QX8sIq7lavRsKRZ0duEyqkjBCcNYbbtdlaJ7FcLMS%2Fv%2FppqjDSvVawYW3ru%2Fj69%2FJz9gQv8KVSFCPQgDTTmMzUfyPrqXq%2BfJMPWLBzFNu3L9UYpgT%2Btc3kfcYDlguHC%2BZT1ta0UslPrPf1Ki0quTcPe%2F5wMATxegBh8aJiclMX1Lt%2F2N8wP2FfzPE%2BHjH4PRgSXpUF%2Baaog3jfpwa2HsSlYHy4fSBI0wYBqqwiyZ6PzAyEynErNtrmW1NN1aOv9cFa9UO7dCy6O2pfqMKfNv78GOqUBBu6SBQRAzFzADnF9ihB0LIQe%2Fhzo5Fu6UcxFqt2VtGFXHGClwoJV78gQ%2BtiG1xkWCukCgjikseOv%2FzSs9OyFDP6%2BP96aoXJr0SZyEJCDXl0TqtRHt9WhkY9BG%2BcaFjZ3Dj37UrlVPXCJ1KlfPPQKdSCscGT107qbOT18W%2BqxueSV%2FrgH%2FvQ8pry4qj7lvK5XbR%2BbQ9AIJjaJSMZwJ3sLgTsGNq1f&X-Amz-Signature=b7407da925f95d29b84ec2903c24929830a670fc4b701e9d7ea1d828a826d98a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
