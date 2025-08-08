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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632APSSJK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDCqFCS5klW3vrriRi1tywrJNPa0TDVVdEQ19nqN04zlwIhAOqCOAed19XZ5GndJ7mFdunv3rm4wElkk4uSVyfmP521KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv9YdXzwzYkmeiSNkq3AO%2BvqtHS1RClB63Wkiywvuz%2FjUI50894nygJJsoepDfucq13ZuxMezdswkoY4mSrOY5QN%2FSk%2F4ylkR%2FBOntv6oMQULMI3oB3XhDhxCiBKqJZkNQhx33%2FSdJeIKFUJbByoGoOHHACl6%2FeqoMsDXJRT8krTUoYJOy8nJ2sH2B%2FnWpknvUsltBRY%2FDSbdNSEMZZYMH32zQMxsDmaxmH9O6hZlylEJ46FxIrp%2BBh9fTJMeg5qtaA7uMQz%2BN9QqhBVwPFFA10DwF9wPlKMfpSd7NUrb4PaLMJWvCCFoXTHKRDLjOmcZCK5QVA0fbClRnWqfm51o3jLeuKA4LI6IHG81L%2BIB7Ub42IKQlDGRWwFxBt%2FEDLPBXI2arhn36wZgeMuzKfp3Vs0DY92k8NEGcGP67lRngaeeMSccUl7qf6Nlrsayf1hu2ItKDwHwxxz%2Bni0m%2FdAcLlP1p1ifYlrGsMBfG30NB5w9Eu5YslMLlkBpQBzz2KCqvOopOxlgttQmAFyTHEVOV%2BRBXZsKs%2Fi49%2BByvp49KoTE8BDqXPJDnpmcZweHRg3IQU2zJy%2Fy4z5AnEcPm9NXK3KmfMI%2B4E7Y%2FRJOkazBr3jkZyDhgYLqDJOYJXWeovddF7UiSN3LYjRGKOTCpu9nEBjqkASvaWvzhqMsc8kvitM37Y%2BGyM7vmcUty4PrxQBjhI3HRt4Yqdw1%2F%2B1e31aPxbSqQfGkxfmB8yOMD%2FluJPGB%2FP2X6x6%2BfGmaGiucx0C69%2FSC8sx7D0y%2BPUapgXfeTBXQN0XgGCqTE47dsbm7ZHVyDJXTAXxW03dYugfqUTWKVptBb%2B13Qbhqu0qMl6UeJdtudkKKBN5063Xz%2FFqR6GYTo3P%2B4o9bw&X-Amz-Signature=2573b060d70d489522b1448a8c8f34866939c58a4bac7679375d6b95eab46a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632APSSJK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDCqFCS5klW3vrriRi1tywrJNPa0TDVVdEQ19nqN04zlwIhAOqCOAed19XZ5GndJ7mFdunv3rm4wElkk4uSVyfmP521KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv9YdXzwzYkmeiSNkq3AO%2BvqtHS1RClB63Wkiywvuz%2FjUI50894nygJJsoepDfucq13ZuxMezdswkoY4mSrOY5QN%2FSk%2F4ylkR%2FBOntv6oMQULMI3oB3XhDhxCiBKqJZkNQhx33%2FSdJeIKFUJbByoGoOHHACl6%2FeqoMsDXJRT8krTUoYJOy8nJ2sH2B%2FnWpknvUsltBRY%2FDSbdNSEMZZYMH32zQMxsDmaxmH9O6hZlylEJ46FxIrp%2BBh9fTJMeg5qtaA7uMQz%2BN9QqhBVwPFFA10DwF9wPlKMfpSd7NUrb4PaLMJWvCCFoXTHKRDLjOmcZCK5QVA0fbClRnWqfm51o3jLeuKA4LI6IHG81L%2BIB7Ub42IKQlDGRWwFxBt%2FEDLPBXI2arhn36wZgeMuzKfp3Vs0DY92k8NEGcGP67lRngaeeMSccUl7qf6Nlrsayf1hu2ItKDwHwxxz%2Bni0m%2FdAcLlP1p1ifYlrGsMBfG30NB5w9Eu5YslMLlkBpQBzz2KCqvOopOxlgttQmAFyTHEVOV%2BRBXZsKs%2Fi49%2BByvp49KoTE8BDqXPJDnpmcZweHRg3IQU2zJy%2Fy4z5AnEcPm9NXK3KmfMI%2B4E7Y%2FRJOkazBr3jkZyDhgYLqDJOYJXWeovddF7UiSN3LYjRGKOTCpu9nEBjqkASvaWvzhqMsc8kvitM37Y%2BGyM7vmcUty4PrxQBjhI3HRt4Yqdw1%2F%2B1e31aPxbSqQfGkxfmB8yOMD%2FluJPGB%2FP2X6x6%2BfGmaGiucx0C69%2FSC8sx7D0y%2BPUapgXfeTBXQN0XgGCqTE47dsbm7ZHVyDJXTAXxW03dYugfqUTWKVptBb%2B13Qbhqu0qMl6UeJdtudkKKBN5063Xz%2FFqR6GYTo3P%2B4o9bw&X-Amz-Signature=0d809c2b5136ed32448d8c4f74d8409b9db84ac0d2e4025f16e0d23cc39382b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
