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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA5TH3W3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH64gXtudHiglVViiP%2F%2BLuQH%2Ft%2Bncv3UKfrQwT89kNDeAiEA2AC3OUfutKOUaQJbI4je%2BPaKY272uJq7uKPQeuaNywoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDzNznap6KJQI7e4ircA8kUJg8a4c9PZRlCP3z0VCE48jkuq1RtM5bxDLvOWCJ%2BkLIkc7aO9pZajg2496IoOAMh7iHxtR5qf6MagplPBKATTmw%2F0ZLnXBqj4YTGODFCAMf2OCP79qd87QXfvMplowYQa4ua9fP5hNVXf69cLwggae8zy2dqBOJlFnJdyH2onnNxjKg1FB3SpIIWWRMhcdRQJACnng6eqKYh7hjzTdyIQ2eju6GWcirleghWcvpY2ZEQ3JZnXF%2B3QmPFbcf%2FiRcVwwFgbTgEVwRCwky8fvcoWsSrwjUVfA2ZtUNbA275NRO5FM1ddGuSQzscQKcbrZLctWRjhN6fvtw0aPsTTZHuXukXneP2rv3mt39eNNmPMWKcqpXwOdE0GqDZnrMVY%2FC3B9BHOJUoA2fdYppN%2Bz6dwXZcZGgkHPWK6k6LAdUbpPyhbiB5jCRiTqqz%2BNalPgxxi4NHcJxl1QICgjDiiWflLJtT%2FiXhSksBxS1sUrPHmS6VBWO7md9aJVf%2BMLNAXnZLrGSV9hAgps21Ct4GjqabX9nKuL0S4e7W9on3zChR%2B%2B3iaSacoYgz7oPONU%2BPaQsC%2FmLBBpGMemsTrMo%2BO6jId%2FEs5P284IR%2FXthBcgezKK1xoJJmjpydEmk1MPb6hcMGOqUB9VY8RJEnq0eCrPQaRrI29qqsQGWsx4Bo0G5R1ZLOaSQaaS0sxmCABQBbF2MmXiojkqu8bFCC11QFeu4JdhRD9DsH8xKd63%2FSJ7JpIDRzVa6Kx6bVjV8icLMMRnHboWoV7y8lkJTTu2V190Idrxp8MJXOliWxzfYpw%2BM84K8b0TOMdqd4b8gog3ZY7EPGUTenvKjH83kjq8TcfD7mHZQ4oNwbTNV5&X-Amz-Signature=7cdf585203d9cb0404fe2ec1e0ecce044e6d2e0dcd2072368fb4f5999128d080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA5TH3W3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH64gXtudHiglVViiP%2F%2BLuQH%2Ft%2Bncv3UKfrQwT89kNDeAiEA2AC3OUfutKOUaQJbI4je%2BPaKY272uJq7uKPQeuaNywoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDzNznap6KJQI7e4ircA8kUJg8a4c9PZRlCP3z0VCE48jkuq1RtM5bxDLvOWCJ%2BkLIkc7aO9pZajg2496IoOAMh7iHxtR5qf6MagplPBKATTmw%2F0ZLnXBqj4YTGODFCAMf2OCP79qd87QXfvMplowYQa4ua9fP5hNVXf69cLwggae8zy2dqBOJlFnJdyH2onnNxjKg1FB3SpIIWWRMhcdRQJACnng6eqKYh7hjzTdyIQ2eju6GWcirleghWcvpY2ZEQ3JZnXF%2B3QmPFbcf%2FiRcVwwFgbTgEVwRCwky8fvcoWsSrwjUVfA2ZtUNbA275NRO5FM1ddGuSQzscQKcbrZLctWRjhN6fvtw0aPsTTZHuXukXneP2rv3mt39eNNmPMWKcqpXwOdE0GqDZnrMVY%2FC3B9BHOJUoA2fdYppN%2Bz6dwXZcZGgkHPWK6k6LAdUbpPyhbiB5jCRiTqqz%2BNalPgxxi4NHcJxl1QICgjDiiWflLJtT%2FiXhSksBxS1sUrPHmS6VBWO7md9aJVf%2BMLNAXnZLrGSV9hAgps21Ct4GjqabX9nKuL0S4e7W9on3zChR%2B%2B3iaSacoYgz7oPONU%2BPaQsC%2FmLBBpGMemsTrMo%2BO6jId%2FEs5P284IR%2FXthBcgezKK1xoJJmjpydEmk1MPb6hcMGOqUB9VY8RJEnq0eCrPQaRrI29qqsQGWsx4Bo0G5R1ZLOaSQaaS0sxmCABQBbF2MmXiojkqu8bFCC11QFeu4JdhRD9DsH8xKd63%2FSJ7JpIDRzVa6Kx6bVjV8icLMMRnHboWoV7y8lkJTTu2V190Idrxp8MJXOliWxzfYpw%2BM84K8b0TOMdqd4b8gog3ZY7EPGUTenvKjH83kjq8TcfD7mHZQ4oNwbTNV5&X-Amz-Signature=6f0533994f189c48487288104d21c05e6dc2c2f0b56d077a665fa515cfde85eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
