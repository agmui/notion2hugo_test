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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKALCBQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCIG7b5T2kzZOfwghk5%2FFcFVqEcMzyMb2lrgh2ZMvtajAIhAKsvqgTP%2Fb9YUTkQTFYyrpsTiTwyt5HrcLHIGjTKNfPGKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT7ENqMQIqUvqH1hoq3AOtMqR1KCJg7ox9xCwJOtOzvTUP21dAJBOr6ggrHzLSlAKRqJZfVR6o6rO0ZIn3NZluNrjOsS34hWW%2Bo8eDXLMzO0fUzBiP5MciMKTgwbZmnIp431FTV5GzyQPP%2B08PpmOTG79lE%2BjbJ0sIy6g5FUyabegh7LxOZ19nU5BdWKKz8aPK9GvF9BWH21xvpaBlJw6iZr7hPY1FVhRzaj2ZAjsMNLAtQV%2BlMbOODm4mEjCMy0YnD7uoFMIAaY%2BPb2lt45gNavwEsmHqqbmFh3ZFdWZA1GK%2FQykCPZFiXIcawsAARS8fQnXaaOoIhvTkwTZ1IjYjqMFQHxANkx8ACThu4j%2BMguimJyaigbFsaEx1ceiF%2FU%2B4D%2FetPHpa0Z2boSysyzkNZtOiVgYQA2pAQg2umwSDkRAlZx4CY7r0qUI1WfnsDi0DyKT7j15wDs8o9lgI%2BCtUSgXF6EYosMGgKtcJSBTAmg4T4WSu2FRsHyGUOcofhmjCFGxp5xjlw8ZSpnUepL0USeQT4maeX2dDo%2BdnMwFcxPntFWFkwPKdr5tP%2BINwJDci6byjErmTD43RhuvJPOELPezPWsrGN2SZ6EoLp8v598VtgVW1110vkWObuTqY9t3iNh6J9xihsK4%2FzDCbuZ%2FEBjqkASJ7eiGgnVZgj3qXvEZQ%2BH8hLwO0xa2nmrfbKe%2Bujv2r8weGNhW3WtLIRJVVNWz%2BaBmFutb6CRdiE7zRPnAIr1OpuwEVUCLE1yGghDgCla577buOSCKUHyKBudjRlh08ft2TNKtQghHEYYAGlAN3RcPOMoW5OiqW5mVmo2gK%2FYvG9aBnfT6x%2Bxrhn8p174XCKbC9RpBGXr0dB%2FKKbscYxBQ07JkN&X-Amz-Signature=b318ead2321d8b5558725a29da45370e7c9cb716837d20d40b135477cdf046f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKALCBQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCIG7b5T2kzZOfwghk5%2FFcFVqEcMzyMb2lrgh2ZMvtajAIhAKsvqgTP%2Fb9YUTkQTFYyrpsTiTwyt5HrcLHIGjTKNfPGKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT7ENqMQIqUvqH1hoq3AOtMqR1KCJg7ox9xCwJOtOzvTUP21dAJBOr6ggrHzLSlAKRqJZfVR6o6rO0ZIn3NZluNrjOsS34hWW%2Bo8eDXLMzO0fUzBiP5MciMKTgwbZmnIp431FTV5GzyQPP%2B08PpmOTG79lE%2BjbJ0sIy6g5FUyabegh7LxOZ19nU5BdWKKz8aPK9GvF9BWH21xvpaBlJw6iZr7hPY1FVhRzaj2ZAjsMNLAtQV%2BlMbOODm4mEjCMy0YnD7uoFMIAaY%2BPb2lt45gNavwEsmHqqbmFh3ZFdWZA1GK%2FQykCPZFiXIcawsAARS8fQnXaaOoIhvTkwTZ1IjYjqMFQHxANkx8ACThu4j%2BMguimJyaigbFsaEx1ceiF%2FU%2B4D%2FetPHpa0Z2boSysyzkNZtOiVgYQA2pAQg2umwSDkRAlZx4CY7r0qUI1WfnsDi0DyKT7j15wDs8o9lgI%2BCtUSgXF6EYosMGgKtcJSBTAmg4T4WSu2FRsHyGUOcofhmjCFGxp5xjlw8ZSpnUepL0USeQT4maeX2dDo%2BdnMwFcxPntFWFkwPKdr5tP%2BINwJDci6byjErmTD43RhuvJPOELPezPWsrGN2SZ6EoLp8v598VtgVW1110vkWObuTqY9t3iNh6J9xihsK4%2FzDCbuZ%2FEBjqkASJ7eiGgnVZgj3qXvEZQ%2BH8hLwO0xa2nmrfbKe%2Bujv2r8weGNhW3WtLIRJVVNWz%2BaBmFutb6CRdiE7zRPnAIr1OpuwEVUCLE1yGghDgCla577buOSCKUHyKBudjRlh08ft2TNKtQghHEYYAGlAN3RcPOMoW5OiqW5mVmo2gK%2FYvG9aBnfT6x%2Bxrhn8p174XCKbC9RpBGXr0dB%2FKKbscYxBQ07JkN&X-Amz-Signature=4c4b1362afc3942210be23125974a8800da4e21218a36dbf04fa40232484a65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
