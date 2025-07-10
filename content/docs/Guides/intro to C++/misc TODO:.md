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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QY2VMQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMj2M8XVXJYbYSgABBgEzs%2BtDhCyoAfOV%2Fn7p%2FqPmINgIgMe0H2%2F7u%2FslXudn%2BRjCzmO4HlmxhqFQDB6bO0%2F46JG0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8lplbSmHOKSgDc6SrcA0Hd0vMpBI9%2BOYXXBWPcuABoZ3Gc621qk7QqxjbBA1H9fRI9OCxR9bHb6SGFVR%2Bflbe6x6vHC%2FuWKOpcCiQLSyeYIKInfWTHuwdUmkLXJnjWd8gXR9y%2FX4zWbO9dCGNMzvCqO9NWndgNDhES4xqLV2y%2BQD7%2FDYfdbNZlJfpAg31nXxjp8KTPvIzWb7ByH1bJHBvTUEna3U8XwAd8dohJR15axUawN26TZyUSr%2FC6J9k7hXd3i8bJEUI%2FoCyhBzHXbsLo4Bm0W%2BqEJuGwSDeB%2FIMMLLWFVDncPLt4FMkCmjbyGCb6nyiZh6gZ95lSHNVRWKhEr5cRDZFgwx%2FIidFELKHLN9ucnZxWLjfoX4JI4R4KhhzpHNP1q84I1c%2Bmh5nJmA8eA0cy%2BKXI7t7%2FbIFYGH7dwcfX3FymjmJE3AeplbJ4oYVf%2BCdH4q%2FK%2BjFEU7EbFvkoVaTl2QrnWIWp6GqDhlHq1gwNPFU3R8K92%2FjIWL%2FfoICtY%2BYktEBXsNQ3raN6h0QvutTQC0lNKtCJYw01kDM8Pr3MsHJ4ACDbpsOnSks8XDHhvsKYDyb3OXhsndpW2ybBWN6zguQ%2FG4CYbbyWFN3cD5i8jr93nEto3ziog%2FVt%2BCzlX%2BObW4demrGUMK2ov8MGOqUB6SG1bCi8rAswb6j%2BDNHA59ZzJhwIJBqHA5P1CqUMpJVZv5oFLFZ4b6nBh3RibSRo9sL28WEioyMvxmyrbeuGd6rQoK0vvZMNMFTb%2F5s%2FrX14d%2B57hdfqPV14jvkcatru5RxYop3b%2FJV%2BszWkthlFybgoNNqoog960aZD7EEcpyg7uRcfYp3bx8I%2FihrjFT0o6JTdmlESQADpIFOrQOSQqsz8ozuy&X-Amz-Signature=cd4ea95a532a67bc97f27e7b45f24e22e94d7d6f532c15616d03d188b9fb433e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QY2VMQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMj2M8XVXJYbYSgABBgEzs%2BtDhCyoAfOV%2Fn7p%2FqPmINgIgMe0H2%2F7u%2FslXudn%2BRjCzmO4HlmxhqFQDB6bO0%2F46JG0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8lplbSmHOKSgDc6SrcA0Hd0vMpBI9%2BOYXXBWPcuABoZ3Gc621qk7QqxjbBA1H9fRI9OCxR9bHb6SGFVR%2Bflbe6x6vHC%2FuWKOpcCiQLSyeYIKInfWTHuwdUmkLXJnjWd8gXR9y%2FX4zWbO9dCGNMzvCqO9NWndgNDhES4xqLV2y%2BQD7%2FDYfdbNZlJfpAg31nXxjp8KTPvIzWb7ByH1bJHBvTUEna3U8XwAd8dohJR15axUawN26TZyUSr%2FC6J9k7hXd3i8bJEUI%2FoCyhBzHXbsLo4Bm0W%2BqEJuGwSDeB%2FIMMLLWFVDncPLt4FMkCmjbyGCb6nyiZh6gZ95lSHNVRWKhEr5cRDZFgwx%2FIidFELKHLN9ucnZxWLjfoX4JI4R4KhhzpHNP1q84I1c%2Bmh5nJmA8eA0cy%2BKXI7t7%2FbIFYGH7dwcfX3FymjmJE3AeplbJ4oYVf%2BCdH4q%2FK%2BjFEU7EbFvkoVaTl2QrnWIWp6GqDhlHq1gwNPFU3R8K92%2FjIWL%2FfoICtY%2BYktEBXsNQ3raN6h0QvutTQC0lNKtCJYw01kDM8Pr3MsHJ4ACDbpsOnSks8XDHhvsKYDyb3OXhsndpW2ybBWN6zguQ%2FG4CYbbyWFN3cD5i8jr93nEto3ziog%2FVt%2BCzlX%2BObW4demrGUMK2ov8MGOqUB6SG1bCi8rAswb6j%2BDNHA59ZzJhwIJBqHA5P1CqUMpJVZv5oFLFZ4b6nBh3RibSRo9sL28WEioyMvxmyrbeuGd6rQoK0vvZMNMFTb%2F5s%2FrX14d%2B57hdfqPV14jvkcatru5RxYop3b%2FJV%2BszWkthlFybgoNNqoog960aZD7EEcpyg7uRcfYp3bx8I%2FihrjFT0o6JTdmlESQADpIFOrQOSQqsz8ozuy&X-Amz-Signature=f1a40c6b7430c6dc403429250f83fedd5da961b082db870a4dafd8987694ede7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
