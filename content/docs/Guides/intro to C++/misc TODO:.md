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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFV252TN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDLDU8puf%2FS45ACiIIx4TJCcklImyL%2B0QtkeZiMh%2FlM%2BgIgIbrj2dTZYm8YAflHWGXQ4hPxpNuQZFDtKkxXC7001yoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUqVGPG7DH1XJ9eYCrcA%2FDU1vVguuJfM9PhAiwJw5BQOh4QJrjVSJu2meaQTH5gCT1t22ka9EciG8gGYS6DL%2Bs3A0npG94uUJzzpcIvOpqcZYBl%2FRzPpn4YnyoqaUnScxl3MTwvdOaIhx%2B9aXfovRvjK1CyAXVUg6WQtwp2s4WYWZjTZW8y7y3qbsw4xNIe9jcI2ENiJSirNcrl8qCs4dabc4Yxh%2BRezjzH14n38WDFue8GtcG4iNmYJWRdN%2FAPzYeGim5%2FsEL2SBc5DZm2lVk41jk%2FiYiZCOIxJr8Fm9bJjDy8TSVUSnxZVRLi957fq1rGHWsRHZjHTaT7OlbcxJ265f93C67kZ3DtaLrFyP2lDoQm3gCz%2B0t73Oa8rRkIOCofN4DL1jvVE959D6Wml8s1pA0hpjAfxeR66rzZXaV17%2BhPUYdeMUKMVH2Mxf8VQg8lYeYjMYhvZvXZUp8ZfZ7ZNKILzcUPm0Op%2BD0IksSZnBHlzAR5JPI%2F%2Bk3n%2F45qBiXfD6HDMoFI4VvIdjanmdVfNqchrkQKfvMljERjqgcwM13ENmAwtEdLIqvhcreVT5EQlm9pvWWHjmQPfZeCG3yo2tvvHQemmFDsw8WQk1J13mDRT2FFXp3oqWNlZulN5npIwzD60nGApjUAMMbRnsQGOqUBgoWR3RzMK%2BwsC8niGmleiJz9t3AwW8giwwdl%2FuNNAHzgx7Dgd82bcmFkjWLhWs4ztw2ik%2BFKUdr3hxs03p9wotd6LEy9jSiRtj9AHyrzozaqi41MEu9PcLgNuWyVe786EQ3k8x96EqFXnU%2BSqqievnKYWAN7N9R7wJzs%2FFLrDze4ODpXd3Z3TAzXBuvsZLxHUP2l1fP%2BD7B6LKGYMW92UnDnCXyY&X-Amz-Signature=07c840d953a230ee08fbfe99084da4cce79d246609eb2968a496f4d825543909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFV252TN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDLDU8puf%2FS45ACiIIx4TJCcklImyL%2B0QtkeZiMh%2FlM%2BgIgIbrj2dTZYm8YAflHWGXQ4hPxpNuQZFDtKkxXC7001yoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUqVGPG7DH1XJ9eYCrcA%2FDU1vVguuJfM9PhAiwJw5BQOh4QJrjVSJu2meaQTH5gCT1t22ka9EciG8gGYS6DL%2Bs3A0npG94uUJzzpcIvOpqcZYBl%2FRzPpn4YnyoqaUnScxl3MTwvdOaIhx%2B9aXfovRvjK1CyAXVUg6WQtwp2s4WYWZjTZW8y7y3qbsw4xNIe9jcI2ENiJSirNcrl8qCs4dabc4Yxh%2BRezjzH14n38WDFue8GtcG4iNmYJWRdN%2FAPzYeGim5%2FsEL2SBc5DZm2lVk41jk%2FiYiZCOIxJr8Fm9bJjDy8TSVUSnxZVRLi957fq1rGHWsRHZjHTaT7OlbcxJ265f93C67kZ3DtaLrFyP2lDoQm3gCz%2B0t73Oa8rRkIOCofN4DL1jvVE959D6Wml8s1pA0hpjAfxeR66rzZXaV17%2BhPUYdeMUKMVH2Mxf8VQg8lYeYjMYhvZvXZUp8ZfZ7ZNKILzcUPm0Op%2BD0IksSZnBHlzAR5JPI%2F%2Bk3n%2F45qBiXfD6HDMoFI4VvIdjanmdVfNqchrkQKfvMljERjqgcwM13ENmAwtEdLIqvhcreVT5EQlm9pvWWHjmQPfZeCG3yo2tvvHQemmFDsw8WQk1J13mDRT2FFXp3oqWNlZulN5npIwzD60nGApjUAMMbRnsQGOqUBgoWR3RzMK%2BwsC8niGmleiJz9t3AwW8giwwdl%2FuNNAHzgx7Dgd82bcmFkjWLhWs4ztw2ik%2BFKUdr3hxs03p9wotd6LEy9jSiRtj9AHyrzozaqi41MEu9PcLgNuWyVe786EQ3k8x96EqFXnU%2BSqqievnKYWAN7N9R7wJzs%2FFLrDze4ODpXd3Z3TAzXBuvsZLxHUP2l1fP%2BD7B6LKGYMW92UnDnCXyY&X-Amz-Signature=9d5ca4667e54f8da4d87c065a31c1e36c9fbc91eadc1caf9027c847b518ba18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
