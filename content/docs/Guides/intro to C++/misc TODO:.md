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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VU3STMS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQZXUiMt%2Fks5NsqEGlj4flHeZAEBgaRe4SKBKhf3AB0AiAtNXhsMcudhYodM0JaajafjCSBbj5MQAPMcpQ1rSkqBSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMFRge%2Fih2Eku3RQpKtwDvS2CpA08HSS9Q%2Bi6o7SSq0Skb2LCwJWm8NlpfjbsBdgPOGngM7%2BmviJXapMb9%2FViKuhMPXAs533WfnTsaPmCA9tQjIM7cwZEleRN8%2FxfLZb0toWbk63LeXCHahePhfsadcXtt9EAiaB7iIgWq6qaWlBXfi2jpJKeNpfzRFd1R6CPHZwNCQhDrVXg%2Bh6%2FCXv%2BWFuOgAchY9X%2F%2Bjpn8%2FY%2BVTxVD3q8KpXwn4%2F5VpW0aGSBXt2Ztay1lXi4%2B9bS7jUQ%2F0T0rNS4%2FwHLHW0j3onIwbRvNRRMM1MFt2cV9jJco9lN%2F79y0DBTnJTTfhJfFnDLPU8wATM94c6MA5ja4wrOeV%2Box3yNkKRMqYpVsJQlIum%2FmJfMvbKIQcBcWl7%2FvrHoVJXweLdZGR2bP53a00tGnIJVdvJn5OF2BdVj%2F6zliDumgSw7fgiE7twtLZ6a2TOfcl2kJgv2K5MhlYf7Nwhjj3Jrx%2BKHuWgouaCFlg22C2JxXdJKsJRVezJpXzpNKFWOCCQwXAWzHkdwJDAGw7zyGrtmEMZjgCte7NFgFBrqcx4iJentX1GhHr4gBOzlMyqaAPYv2NiZtJHb8275aqAg%2FGAiJgTn%2Fnj%2FvVUYp8IisNniWWzXfB9ClnZfmyowvY%2F8wAY6pgHXhpG8h0es6jhvEzx2QpLUuxlrfPiYK8W%2BkFIUoJ0P%2FFvir4fY%2F4xiQiEUzkgiNs91IciAIEQ%2BjIETc%2F9fk1AHm%2FZRrAfggYuQXfbR2ecFCA1oecr8IHvtcUaGANhyZ94sDC4zNWDVHUNqIjVuYK43BAr4ThYq5PxcZuFWgdi2UnTd1gdheV%2BBaXOB8nsx7vwJZADUei7Q22b9gnCtIYJKv2ofl%2FZa&X-Amz-Signature=1bdf9b6bc1dccfcb7bebb5d5ccb1802f1183c31ca9de4f4b916289581b89b878&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VU3STMS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQZXUiMt%2Fks5NsqEGlj4flHeZAEBgaRe4SKBKhf3AB0AiAtNXhsMcudhYodM0JaajafjCSBbj5MQAPMcpQ1rSkqBSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMFRge%2Fih2Eku3RQpKtwDvS2CpA08HSS9Q%2Bi6o7SSq0Skb2LCwJWm8NlpfjbsBdgPOGngM7%2BmviJXapMb9%2FViKuhMPXAs533WfnTsaPmCA9tQjIM7cwZEleRN8%2FxfLZb0toWbk63LeXCHahePhfsadcXtt9EAiaB7iIgWq6qaWlBXfi2jpJKeNpfzRFd1R6CPHZwNCQhDrVXg%2Bh6%2FCXv%2BWFuOgAchY9X%2F%2Bjpn8%2FY%2BVTxVD3q8KpXwn4%2F5VpW0aGSBXt2Ztay1lXi4%2B9bS7jUQ%2F0T0rNS4%2FwHLHW0j3onIwbRvNRRMM1MFt2cV9jJco9lN%2F79y0DBTnJTTfhJfFnDLPU8wATM94c6MA5ja4wrOeV%2Box3yNkKRMqYpVsJQlIum%2FmJfMvbKIQcBcWl7%2FvrHoVJXweLdZGR2bP53a00tGnIJVdvJn5OF2BdVj%2F6zliDumgSw7fgiE7twtLZ6a2TOfcl2kJgv2K5MhlYf7Nwhjj3Jrx%2BKHuWgouaCFlg22C2JxXdJKsJRVezJpXzpNKFWOCCQwXAWzHkdwJDAGw7zyGrtmEMZjgCte7NFgFBrqcx4iJentX1GhHr4gBOzlMyqaAPYv2NiZtJHb8275aqAg%2FGAiJgTn%2Fnj%2FvVUYp8IisNniWWzXfB9ClnZfmyowvY%2F8wAY6pgHXhpG8h0es6jhvEzx2QpLUuxlrfPiYK8W%2BkFIUoJ0P%2FFvir4fY%2F4xiQiEUzkgiNs91IciAIEQ%2BjIETc%2F9fk1AHm%2FZRrAfggYuQXfbR2ecFCA1oecr8IHvtcUaGANhyZ94sDC4zNWDVHUNqIjVuYK43BAr4ThYq5PxcZuFWgdi2UnTd1gdheV%2BBaXOB8nsx7vwJZADUei7Q22b9gnCtIYJKv2ofl%2FZa&X-Amz-Signature=dab68c68f79a2beca95d90c0c4e12c3d393b90c0916314a4000fd932d140dccb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
