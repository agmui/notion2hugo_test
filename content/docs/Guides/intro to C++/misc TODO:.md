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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4JR3GVA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsMyLdeULggKvLMxeVV%2FGCs9oZ4Av%2FRdw6d01Rs91B6QIhALHYaSbHPkrwV0KGY9qRUJCg8s2RPg%2Bu5pP7yT6HyuURKv8DCBYQABoMNjM3NDIzMTgzODA1IgxS7OuopT82Ns2XeYQq3AM0882Urxf0hcqq3KceNv0b38T4E0j2a5a4j9FK%2B1QImZLFwfg2c0fJ0kcKRLUPxgOywrRkZ28Ooh6%2F6mDK70fLU1SkEDGgJ69ANcqUxWyOyMY0Tuw0LlAazjrST4XqaRl57%2F9MP2xxY%2Bb%2FYI7RGBOfG8uFpG8o19QGUKbi%2BPyHXPI4mtOIW%2BPMJGziZQSQm%2Fr8xZ3%2BbOVB1Lh4os5m76U9EieGRgmvAi3mybReQXCYf%2BvUQI2NGquuW5eFMdqd3ywLu%2Bpfr6vMEdFv4Z0BLZEa9igRYOVe6ahSpVBI19Hq9DabxHS720IiVKN%2FELHgAaQn59POI8811iok26CH9twvAbPOikU6OnfjxNCf97YGwaPhoaRBgblLr5EOhYsW%2Fk0P3mJMd%2B1RQI6ljhk8RYK%2B%2F8sKj%2BCp9dROl0bZZwbVof5NrDvEBPa88iLQhj3vnyrjjFsMXC7hxPHnZ%2FhqwlJZ%2BB6yFQmb910FEER5AColYbGjsy41RKDprYrDqvBZvCQc52E%2B327V0ttJ4QqavYYu%2FMxOCC6%2FBny8ktskRxWadbFcaG5rsW6iI2MJ9fM10jF6JmKdoaJ8kukqbsADr2tMly8BXpBnLl0u3Q1gk%2F9w0T%2FEtAk77%2F7qHKtDuDCa79W%2BBjqkAcJ5M4uhM1O837tXoOyvItRjo7Q8aNEnXjrJeixXUMs6db%2BnhzL0ol%2FG1VEXAqMSyB4MmrKZtpAhSpVzmDgACT2uNllKvbHcOo8mOT8NlI2wJmmnLl%2FJ%2Fnv4%2F3JqqTcfPERqncjn0rs4zPNI%2FrM0NNZqmYsihV9Jp2RUukAK03evys%2BRgui26pvHwJFJpc58R9t39QRUimnG5y9IYkn2oAsD2nUn&X-Amz-Signature=1c03f945678c92c7e91bd67a55b338afff1ab455bb8ccab2b33b5d217c027bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4JR3GVA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsMyLdeULggKvLMxeVV%2FGCs9oZ4Av%2FRdw6d01Rs91B6QIhALHYaSbHPkrwV0KGY9qRUJCg8s2RPg%2Bu5pP7yT6HyuURKv8DCBYQABoMNjM3NDIzMTgzODA1IgxS7OuopT82Ns2XeYQq3AM0882Urxf0hcqq3KceNv0b38T4E0j2a5a4j9FK%2B1QImZLFwfg2c0fJ0kcKRLUPxgOywrRkZ28Ooh6%2F6mDK70fLU1SkEDGgJ69ANcqUxWyOyMY0Tuw0LlAazjrST4XqaRl57%2F9MP2xxY%2Bb%2FYI7RGBOfG8uFpG8o19QGUKbi%2BPyHXPI4mtOIW%2BPMJGziZQSQm%2Fr8xZ3%2BbOVB1Lh4os5m76U9EieGRgmvAi3mybReQXCYf%2BvUQI2NGquuW5eFMdqd3ywLu%2Bpfr6vMEdFv4Z0BLZEa9igRYOVe6ahSpVBI19Hq9DabxHS720IiVKN%2FELHgAaQn59POI8811iok26CH9twvAbPOikU6OnfjxNCf97YGwaPhoaRBgblLr5EOhYsW%2Fk0P3mJMd%2B1RQI6ljhk8RYK%2B%2F8sKj%2BCp9dROl0bZZwbVof5NrDvEBPa88iLQhj3vnyrjjFsMXC7hxPHnZ%2FhqwlJZ%2BB6yFQmb910FEER5AColYbGjsy41RKDprYrDqvBZvCQc52E%2B327V0ttJ4QqavYYu%2FMxOCC6%2FBny8ktskRxWadbFcaG5rsW6iI2MJ9fM10jF6JmKdoaJ8kukqbsADr2tMly8BXpBnLl0u3Q1gk%2F9w0T%2FEtAk77%2F7qHKtDuDCa79W%2BBjqkAcJ5M4uhM1O837tXoOyvItRjo7Q8aNEnXjrJeixXUMs6db%2BnhzL0ol%2FG1VEXAqMSyB4MmrKZtpAhSpVzmDgACT2uNllKvbHcOo8mOT8NlI2wJmmnLl%2FJ%2Fnv4%2F3JqqTcfPERqncjn0rs4zPNI%2FrM0NNZqmYsihV9Jp2RUukAK03evys%2BRgui26pvHwJFJpc58R9t39QRUimnG5y9IYkn2oAsD2nUn&X-Amz-Signature=56626c491c9850f29621541ddb5e6fb487bc35562b3669df6c88ae2d0729605d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
