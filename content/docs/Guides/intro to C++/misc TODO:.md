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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGCRGKN%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCR3BsypbXn6xhwgow3TowvZJAvYW%2FMmFyeCF%2F4OqEd%2FwIgTpxjDWAyq7IeWcUC1i1U1XQA1N7S03a0tgIDob%2F3LK4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FOGvAscbACiUf%2FCrcA5FEoPfFO9Clmsb3ptFo05LnINFLV7OzskUubhCnng45LtoOyvh95Rn0uBQ%2FhVtqEMtK6VayMLQvdX2A2y5Z%2BZgw9GKvWQZpYeHx8XGHL%2FYH9K8TqYaaNHst3Yo7mOCjRPO8iXNWyq0jDKkx3ntAXmadfx5X9%2BcDMTEFMA362obxR0EUnSYIRaz59lUkCN2CPPpcdk6vb0linE%2F3%2FhvTgvoTnzRHUvZeWL2qJ9pjXGxJfL131CdYLMRMBlVAt9psaXcEaEDgBqYxW7g6YoOigIUflZsvNfRbwW2CdeUj3vB9np%2FpXUl9rrw2ihGEB8Lj1OtkSDBEy66t02xW3gqzQ1o8BnbBi8aVz6dqb%2Fr2w5KJpUaaJfqdeFcRxBm2vWi0vR7YLn9SpTXEAiSZZtAJ5314e5OBSQPlLFRb7VYjt9TCHQdPIJsA1x%2Fbls8spcbKXx57FFXsCr2YSYrH50Y9OjvtC9KlStEIftdNLOmfNDN8WxjYnTSga5hP38KzZ1%2BMXGS%2F6DcJSbyDnEeRd6SG%2F4lEvnvhNQXhFOxHeicOVBZRcwFaMWNSa2IawiIMJfGJ07sD675Gz5S5yEWWiwfeQ9RhaE4sILbLzHLgShz%2FoXlWPnu6Og6bGgWyHLniMNb69L4GOqUBSSotj%2F7DER9rlsCSoTJh1djSR4a1VI3Zb8tzKM5qZ5MhGgKKZC09IZ6xFXRoXKHffj2kyncPVxpH98N45Zmv5Edk4sP9L7c5i2Es%2BtdPkAe3u%2F7%2BNus61r6Y8w9cYmDnaLpV5ox40ptHcSZ0oqT3qow5BGSFAvldnjIwUZxI6Mvo7hM8%2Bdf7kBUf55hKJzfqPIFxyc6JDCDwTSYzh6kxUhnRFBXS&X-Amz-Signature=a0c039f64e041a8c0eda60aa63ed68706a44ac0e30192ecb7cb1ead0ecabcb5d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGCRGKN%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCR3BsypbXn6xhwgow3TowvZJAvYW%2FMmFyeCF%2F4OqEd%2FwIgTpxjDWAyq7IeWcUC1i1U1XQA1N7S03a0tgIDob%2F3LK4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLo%2FOGvAscbACiUf%2FCrcA5FEoPfFO9Clmsb3ptFo05LnINFLV7OzskUubhCnng45LtoOyvh95Rn0uBQ%2FhVtqEMtK6VayMLQvdX2A2y5Z%2BZgw9GKvWQZpYeHx8XGHL%2FYH9K8TqYaaNHst3Yo7mOCjRPO8iXNWyq0jDKkx3ntAXmadfx5X9%2BcDMTEFMA362obxR0EUnSYIRaz59lUkCN2CPPpcdk6vb0linE%2F3%2FhvTgvoTnzRHUvZeWL2qJ9pjXGxJfL131CdYLMRMBlVAt9psaXcEaEDgBqYxW7g6YoOigIUflZsvNfRbwW2CdeUj3vB9np%2FpXUl9rrw2ihGEB8Lj1OtkSDBEy66t02xW3gqzQ1o8BnbBi8aVz6dqb%2Fr2w5KJpUaaJfqdeFcRxBm2vWi0vR7YLn9SpTXEAiSZZtAJ5314e5OBSQPlLFRb7VYjt9TCHQdPIJsA1x%2Fbls8spcbKXx57FFXsCr2YSYrH50Y9OjvtC9KlStEIftdNLOmfNDN8WxjYnTSga5hP38KzZ1%2BMXGS%2F6DcJSbyDnEeRd6SG%2F4lEvnvhNQXhFOxHeicOVBZRcwFaMWNSa2IawiIMJfGJ07sD675Gz5S5yEWWiwfeQ9RhaE4sILbLzHLgShz%2FoXlWPnu6Og6bGgWyHLniMNb69L4GOqUBSSotj%2F7DER9rlsCSoTJh1djSR4a1VI3Zb8tzKM5qZ5MhGgKKZC09IZ6xFXRoXKHffj2kyncPVxpH98N45Zmv5Edk4sP9L7c5i2Es%2BtdPkAe3u%2F7%2BNus61r6Y8w9cYmDnaLpV5ox40ptHcSZ0oqT3qow5BGSFAvldnjIwUZxI6Mvo7hM8%2Bdf7kBUf55hKJzfqPIFxyc6JDCDwTSYzh6kxUhnRFBXS&X-Amz-Signature=954611ee01f1b10723eb7bdcc5e5c959535a9e06f94e932078e9629fb3f739b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
