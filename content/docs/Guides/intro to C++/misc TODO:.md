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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E43JO7N%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIC8JvYxnT2OqmqRGp3vSmzrAtIII3mDZb12X4IDQ5S%2BOAiEA6J4BWrn0ejWCVezh55aL5GrEnHtScQ2S4fT2%2BiPyQCEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FKVRQQcRVi9reExCrcA7rFjvDWfr6sCqKhiBOy9WN5wfy0cWJsWOAWnOlC%2BaWd5nW%2F1M6Av7wELmDtBoyDSeFt7%2BPviwG00oC9YnsrrBsv8V8Sq3SMAp3xzt4QZO%2BQUVJVEMwwIf6SEFntvXFd9jUV1m4tdbYXi4%2FjA9oWgAOy5HCFOSPLMNgck3J2m1MHYMVWbbE9FxokLXxVZ9a%2BvOlddvzW8sqOkZtkH6Hb3g24x%2BaNfMKSyeeHB938DSU8znOaX1HvQYIYZIwSXH0oqIaw73EuNw%2F%2BEFRadWt8WoUXGG%2F544N77%2BTZR01qMZG353DHYpIqid4is3RL1nGwzQABmKb1JvbrmasTCqZJ2HLyB775QkmwqZaab4HLUUjWjkngMCQKq9h5yshvzpxKOdS4jQo85UkCCE1bE5aChjlOaNhy0fvMSmEbi4gv8smp6BE6189TSoUUvNioVRSbsmL7htBjvVe58dQUiE0xnHsaqXrllaaUG2hzOyf3y3BWs6mX9dL4n%2FkGLBrV32sGO5s6lIbhBrwrNFTQZPEGSEoP73CRS8bJ%2FyqpEMIurxAZZ2uuB0r%2FxpserVylKygJmYO9H%2FhbIQ%2BFjmKMHtU%2FcOCfK8i9uY9G88KdrjMMooc%2BSvipvgL2SqB%2BE8EqMPfe8MEGOqUBFIXzdUQfBGctNqXpFXOMn5EG9FdL5z86MQuEMli2OZfZuEPfRhks6so4AqPivYH64221Uk1lb8ugIkrp%2Fvo8%2BWNDJTkIWcZgBUmdTEe5OOH8eQWlgBR6%2Fvoa2g%2Bk16aWpELVa%2BWt53VUlzvcc5%2FddV1K0zuRqJHlEqLqvs1XmAI%2Ff2JRbrhOhV7UUSvknYqskrrZLWAUXhQOYfCzVFQCYJMidU2u&X-Amz-Signature=9349cf4eaf9a8492b7b8ae90c1bc6f092469a620607c424230bd46ec58b7d516&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E43JO7N%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIC8JvYxnT2OqmqRGp3vSmzrAtIII3mDZb12X4IDQ5S%2BOAiEA6J4BWrn0ejWCVezh55aL5GrEnHtScQ2S4fT2%2BiPyQCEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FKVRQQcRVi9reExCrcA7rFjvDWfr6sCqKhiBOy9WN5wfy0cWJsWOAWnOlC%2BaWd5nW%2F1M6Av7wELmDtBoyDSeFt7%2BPviwG00oC9YnsrrBsv8V8Sq3SMAp3xzt4QZO%2BQUVJVEMwwIf6SEFntvXFd9jUV1m4tdbYXi4%2FjA9oWgAOy5HCFOSPLMNgck3J2m1MHYMVWbbE9FxokLXxVZ9a%2BvOlddvzW8sqOkZtkH6Hb3g24x%2BaNfMKSyeeHB938DSU8znOaX1HvQYIYZIwSXH0oqIaw73EuNw%2F%2BEFRadWt8WoUXGG%2F544N77%2BTZR01qMZG353DHYpIqid4is3RL1nGwzQABmKb1JvbrmasTCqZJ2HLyB775QkmwqZaab4HLUUjWjkngMCQKq9h5yshvzpxKOdS4jQo85UkCCE1bE5aChjlOaNhy0fvMSmEbi4gv8smp6BE6189TSoUUvNioVRSbsmL7htBjvVe58dQUiE0xnHsaqXrllaaUG2hzOyf3y3BWs6mX9dL4n%2FkGLBrV32sGO5s6lIbhBrwrNFTQZPEGSEoP73CRS8bJ%2FyqpEMIurxAZZ2uuB0r%2FxpserVylKygJmYO9H%2FhbIQ%2BFjmKMHtU%2FcOCfK8i9uY9G88KdrjMMooc%2BSvipvgL2SqB%2BE8EqMPfe8MEGOqUBFIXzdUQfBGctNqXpFXOMn5EG9FdL5z86MQuEMli2OZfZuEPfRhks6so4AqPivYH64221Uk1lb8ugIkrp%2Fvo8%2BWNDJTkIWcZgBUmdTEe5OOH8eQWlgBR6%2Fvoa2g%2Bk16aWpELVa%2BWt53VUlzvcc5%2FddV1K0zuRqJHlEqLqvs1XmAI%2Ff2JRbrhOhV7UUSvknYqskrrZLWAUXhQOYfCzVFQCYJMidU2u&X-Amz-Signature=7c9a2a1cec22ec946780460a686b7c498c1e0a36e8bc0725a65b6d660d095b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
