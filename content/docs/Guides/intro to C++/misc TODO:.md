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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SPLY73%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJFMEMCH1Cj0jyoJZa7hql2luiQhIi3E2HE8IY20ptwe3hvDUwCIHTzCEueMRT0LQBqQZI1GMXbU%2FbzYRdCyVguw5MxAFxcKv8DCE4QABoMNjM3NDIzMTgzODA1Igz1nwmFGPRMwk%2F%2BTrUq3AMVLOOxjpMuAx0VrfdxqoDBkTATmbkAjGNXchGmctNQl6pcsYt425o4s9Dk75e9k9fn8llYypELkLg449beHcWmXi3j8LdKQ0Xy9nUnVilJAJF7Wm4d4GectPyBUWcg2uPEZ7s4dzcDiaDHX%2BQyG6FYgxk8qcB5t7hsUWRPBAx%2FmLUW2gzLnQmOD64Z%2F%2FuCRNzs75DxKA%2BXjZjoIVYAHIRbrojee7%2FAVZIxNgD15sFl1RO8K3UZ27kq2XQEHqNxXjkDpl5J78b1yYgDUMr6YTQfe5zoLn1iUZeKTDCzhiH4EAbuqHE3cES8DSmGXk7ofVcCg7TTP0882zCf%2FVcO%2BQoP8MBT%2F2Nagb%2BzemK2PnTrt%2FJDcO%2BahoBJkunfjFj%2F9gJVKZQ7pTC%2FK1%2B1Rt97GaMmDLlFqLDQ%2B710vPpRmPESPhkBrn17DPTzIt9zQmqJjlbTCxfgk99x3GL6MQskZVsHN27SMgfqS0XJi9VjS2jig7eMx7%2Fli%2FGG8%2BvkjJ23h8VEFNMuVq3uVDE095WPhEHvXzxNnUH2hjl6be2fPz91lvL6um5Anehwbbdko400UHEUCoJSYKa4z6wwBS7m9HvPdS1XrZv20ZktuexhG1NaAX31k3OMQ3xRjs%2F%2BejDhwMTEBjqnAXFbpwXvKH2YhGlIArPnvp6cM44JOXgAA%2FmwGrVtwvQvbFchlj7xeJ1r7PeFqIqPMDpr7wx5RFMr2AB1ylfil70gdSqmysm7RkXDqbHXghvI%2Fpo2CrDqHR%2FLkrYahtD%2B7Lg%2BPVjYSNBgqbQnoOja3g9BnHTcU7Hi8s9mxws%2B6sNVRASflU1CheriQ%2FSSTO7K5mYDU71jXW8USwmX2BVwOBlDg2An8jKD&X-Amz-Signature=452c3a5840a142bdde0e01af5cd3b5d3e65cb566a3cfba75d144eb47ab820b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SPLY73%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJFMEMCH1Cj0jyoJZa7hql2luiQhIi3E2HE8IY20ptwe3hvDUwCIHTzCEueMRT0LQBqQZI1GMXbU%2FbzYRdCyVguw5MxAFxcKv8DCE4QABoMNjM3NDIzMTgzODA1Igz1nwmFGPRMwk%2F%2BTrUq3AMVLOOxjpMuAx0VrfdxqoDBkTATmbkAjGNXchGmctNQl6pcsYt425o4s9Dk75e9k9fn8llYypELkLg449beHcWmXi3j8LdKQ0Xy9nUnVilJAJF7Wm4d4GectPyBUWcg2uPEZ7s4dzcDiaDHX%2BQyG6FYgxk8qcB5t7hsUWRPBAx%2FmLUW2gzLnQmOD64Z%2F%2FuCRNzs75DxKA%2BXjZjoIVYAHIRbrojee7%2FAVZIxNgD15sFl1RO8K3UZ27kq2XQEHqNxXjkDpl5J78b1yYgDUMr6YTQfe5zoLn1iUZeKTDCzhiH4EAbuqHE3cES8DSmGXk7ofVcCg7TTP0882zCf%2FVcO%2BQoP8MBT%2F2Nagb%2BzemK2PnTrt%2FJDcO%2BahoBJkunfjFj%2F9gJVKZQ7pTC%2FK1%2B1Rt97GaMmDLlFqLDQ%2B710vPpRmPESPhkBrn17DPTzIt9zQmqJjlbTCxfgk99x3GL6MQskZVsHN27SMgfqS0XJi9VjS2jig7eMx7%2Fli%2FGG8%2BvkjJ23h8VEFNMuVq3uVDE095WPhEHvXzxNnUH2hjl6be2fPz91lvL6um5Anehwbbdko400UHEUCoJSYKa4z6wwBS7m9HvPdS1XrZv20ZktuexhG1NaAX31k3OMQ3xRjs%2F%2BejDhwMTEBjqnAXFbpwXvKH2YhGlIArPnvp6cM44JOXgAA%2FmwGrVtwvQvbFchlj7xeJ1r7PeFqIqPMDpr7wx5RFMr2AB1ylfil70gdSqmysm7RkXDqbHXghvI%2Fpo2CrDqHR%2FLkrYahtD%2B7Lg%2BPVjYSNBgqbQnoOja3g9BnHTcU7Hi8s9mxws%2B6sNVRASflU1CheriQ%2FSSTO7K5mYDU71jXW8USwmX2BVwOBlDg2An8jKD&X-Amz-Signature=1263019472d68dab4668fcbb9a0555888ef9098fa864f36f30303b5113a67d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
