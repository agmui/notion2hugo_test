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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUQ3EFME%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIDO96JefIk%2F0IUhupkvV3X1m6DC%2FqfyxP2AmP%2Fd4v1teAiBQ2Dj0kJ6%2BhYxi0nJr%2F7tiai1bbvhEir%2Bm5RUwItrrMSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdqByzb%2FyxXnqWU1MKtwD5ldF713AQLRCFFP1nJc03wVY%2FVOvdZ7YaJmkJ89gJO5b%2B82y5V6RnHModN1ZnLFIUWVSuuHW6TZhOjMvcePziVv1obHQGMn6y6qcKrpE8os9cCwpfc5sIZCLhg%2B4j%2BqfQIz%2F%2FPT9lO21Kk0mEmefzrQi5HtEV8eQ35Q2x6hwPzlfBeKMg7OMB40g8ht4jMIYO2smmmkizMDJ8OsHv%2BeRHfhVUnDNgc5A0qtVbWEOol3JOXljbkTNcQBF%2BFq%2Fo1lVoE4a9P9M1Q3mkXxMxrfR2jBtC2OfWv5YuEO7BRXexH2qmss0nSkHMyNYz4b8LPmxXV40C7yDlGZDa0D6Eo5IkMyXQe6DhV%2FFbsaEIYUgnfq7dvWUcLfQS7GWcLDhGKe2jellDnqeH9AAIYjbJ6BGJnS2705lv57YQaOt3UJje%2FWva58lwqlp2BoxuHQWm%2B%2FIQsRX5hdlzAfQSFkIdvTch68lqHkrJPALVI63g1Df2agn0FLBfvZlIWZn9PXRtXwX%2By1jc%2FHhLmIRh6X6VcBMiIWjDmJAEUkmXIIsMRKLSAfpjB6PHGUL79Bb7ptpAPAFSVZnte8mF9lxt7JDfansfGevqYSphRyl%2BXrGJse5C%2FUE4gN3Ar8UqR1JC74wp%2FjcvwY6pgHDzOjNSBVI1JFwdLzcgEmOy67WYVTG7iRkS8WcL37VT7jxRNybRndBCUZD3msDR%2FarRNoSD2EWwzlLfHnQWwcHTJHM%2Fs9u1uYVgLEYfxl%2F6EQW8Fh%2BtC9my%2FfBv8RH%2BF3%2BXmyUHnJV3tgwygzCZ1Q2jkwQaqzwEOjdfbbWtIQU78sB%2FllP41aeC8ZAbu6YBMIXQHYiBa2yakqtBnaSZXQxensYFZSi&X-Amz-Signature=a4416cfb940045047995067cde9c8f3fd6af49955f0e6362b8357051e7451dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUQ3EFME%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIDO96JefIk%2F0IUhupkvV3X1m6DC%2FqfyxP2AmP%2Fd4v1teAiBQ2Dj0kJ6%2BhYxi0nJr%2F7tiai1bbvhEir%2Bm5RUwItrrMSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdqByzb%2FyxXnqWU1MKtwD5ldF713AQLRCFFP1nJc03wVY%2FVOvdZ7YaJmkJ89gJO5b%2B82y5V6RnHModN1ZnLFIUWVSuuHW6TZhOjMvcePziVv1obHQGMn6y6qcKrpE8os9cCwpfc5sIZCLhg%2B4j%2BqfQIz%2F%2FPT9lO21Kk0mEmefzrQi5HtEV8eQ35Q2x6hwPzlfBeKMg7OMB40g8ht4jMIYO2smmmkizMDJ8OsHv%2BeRHfhVUnDNgc5A0qtVbWEOol3JOXljbkTNcQBF%2BFq%2Fo1lVoE4a9P9M1Q3mkXxMxrfR2jBtC2OfWv5YuEO7BRXexH2qmss0nSkHMyNYz4b8LPmxXV40C7yDlGZDa0D6Eo5IkMyXQe6DhV%2FFbsaEIYUgnfq7dvWUcLfQS7GWcLDhGKe2jellDnqeH9AAIYjbJ6BGJnS2705lv57YQaOt3UJje%2FWva58lwqlp2BoxuHQWm%2B%2FIQsRX5hdlzAfQSFkIdvTch68lqHkrJPALVI63g1Df2agn0FLBfvZlIWZn9PXRtXwX%2By1jc%2FHhLmIRh6X6VcBMiIWjDmJAEUkmXIIsMRKLSAfpjB6PHGUL79Bb7ptpAPAFSVZnte8mF9lxt7JDfansfGevqYSphRyl%2BXrGJse5C%2FUE4gN3Ar8UqR1JC74wp%2FjcvwY6pgHDzOjNSBVI1JFwdLzcgEmOy67WYVTG7iRkS8WcL37VT7jxRNybRndBCUZD3msDR%2FarRNoSD2EWwzlLfHnQWwcHTJHM%2Fs9u1uYVgLEYfxl%2F6EQW8Fh%2BtC9my%2FfBv8RH%2BF3%2BXmyUHnJV3tgwygzCZ1Q2jkwQaqzwEOjdfbbWtIQU78sB%2FllP41aeC8ZAbu6YBMIXQHYiBa2yakqtBnaSZXQxensYFZSi&X-Amz-Signature=f96c10985ba398f8a05f10e166ecd977671609b1fbbe15643a0ad7c0e804e58f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
