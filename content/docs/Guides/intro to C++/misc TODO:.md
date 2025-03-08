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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWVJ4WX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJFMEMCHwVR1MfRvH0ESxLJ8dtD539uauvYatF8qZN0W6aF4gUCIAccTNo1sNTqi2TAdm34aIkKXdKGmQl%2Fas1tEYoZdTsnKv8DCFgQABoMNjM3NDIzMTgzODA1IgwVLNRZ2%2F%2FwKjRbpyUq3ANi4T2%2Bdj0AfBLlhX7yngJOhY1acSsrMchldxSh5ArRkZZw0AowAIGnnR72Q95B84eO142hTVvyh%2BzcO1nETykKlojaIv9IsmwWIAzXcUsD16x8F4xZH35%2FSTSwnXoTttja2MuO9LUK8ZuMGLIvQ3avHVb3h3LW8egLZsZjOM1MaMwhH5PInFsgJ%2BB%2FpTPqSPdR2ahlJTh0nSQZmPr7RlKdqYyc%2F09kHRCWHV5KRtfsnf2zC9mM7m%2BlqaBYMGrxL9x9P98bUdz21isUWjzBiRar7XZw6VgA2QsjNVSkrTw7LHzNdnz0%2BwINGRpJrPchsVMqYFWL%2BONxuYNAYEl98fDlRNaGlhBihkseczDcDyRwGiXCwRaKXCOogGfHnnLAB1vUF7H52ZCPqJcfJ5D%2FnxCgEE4D8TnA7i4pPBzPvTdJTwbfNmPIPX2ZDpbQZBNtRt7tzU6hJY6e%2BDDztwuV%2FsG%2BSF9cHwpq2GrnVAnyjZMVRpywGpzZcyv3aX296%2FmTGyAsigmDobqehM1SR9jsZWyMenNZRtSbQgL8nbp%2BrUsX4szdC7Om%2BK9yMtk8aBLi5gNMjzIouK30SaDDp50DVzbneD7bEypcdi0ElWLnSb61tniWOGAEm8P6dt%2BI3DDdyq%2B%2BBjqnAWzwUxlea3Ekxnugb2JhzQOeDXhABBaEr0wzDgweL8nBsr8DS5GE%2F9qLpMkRJtf0oAwsRlSYwW2vKy%2BZOHHGmzBcCyB0b0vmWy0kHrJfehvy79PXEAISxVNn6sqw%2Fjp8VjDg4CzMX4q%2BPMhXQwcAGJ6LWOYLJy4kP5eOWNkZeBgM84Wrgvx1WsFG8ocDt0Jpp63C5jZmAArRYBHYoRvkArCQQMKPjCFH&X-Amz-Signature=df572a610f0986e0514022b94178636ff0c610b8519d9063495f068958b63d26&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWVJ4WX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJFMEMCHwVR1MfRvH0ESxLJ8dtD539uauvYatF8qZN0W6aF4gUCIAccTNo1sNTqi2TAdm34aIkKXdKGmQl%2Fas1tEYoZdTsnKv8DCFgQABoMNjM3NDIzMTgzODA1IgwVLNRZ2%2F%2FwKjRbpyUq3ANi4T2%2Bdj0AfBLlhX7yngJOhY1acSsrMchldxSh5ArRkZZw0AowAIGnnR72Q95B84eO142hTVvyh%2BzcO1nETykKlojaIv9IsmwWIAzXcUsD16x8F4xZH35%2FSTSwnXoTttja2MuO9LUK8ZuMGLIvQ3avHVb3h3LW8egLZsZjOM1MaMwhH5PInFsgJ%2BB%2FpTPqSPdR2ahlJTh0nSQZmPr7RlKdqYyc%2F09kHRCWHV5KRtfsnf2zC9mM7m%2BlqaBYMGrxL9x9P98bUdz21isUWjzBiRar7XZw6VgA2QsjNVSkrTw7LHzNdnz0%2BwINGRpJrPchsVMqYFWL%2BONxuYNAYEl98fDlRNaGlhBihkseczDcDyRwGiXCwRaKXCOogGfHnnLAB1vUF7H52ZCPqJcfJ5D%2FnxCgEE4D8TnA7i4pPBzPvTdJTwbfNmPIPX2ZDpbQZBNtRt7tzU6hJY6e%2BDDztwuV%2FsG%2BSF9cHwpq2GrnVAnyjZMVRpywGpzZcyv3aX296%2FmTGyAsigmDobqehM1SR9jsZWyMenNZRtSbQgL8nbp%2BrUsX4szdC7Om%2BK9yMtk8aBLi5gNMjzIouK30SaDDp50DVzbneD7bEypcdi0ElWLnSb61tniWOGAEm8P6dt%2BI3DDdyq%2B%2BBjqnAWzwUxlea3Ekxnugb2JhzQOeDXhABBaEr0wzDgweL8nBsr8DS5GE%2F9qLpMkRJtf0oAwsRlSYwW2vKy%2BZOHHGmzBcCyB0b0vmWy0kHrJfehvy79PXEAISxVNn6sqw%2Fjp8VjDg4CzMX4q%2BPMhXQwcAGJ6LWOYLJy4kP5eOWNkZeBgM84Wrgvx1WsFG8ocDt0Jpp63C5jZmAArRYBHYoRvkArCQQMKPjCFH&X-Amz-Signature=a671935df882f93c00631c3a6797b39dffdbad64495829bf71f47641be0490d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
