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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JO2FGWF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC6U9mvkq7O8hKIOyCtZBJLMhCeVZeACUGbyGQTGadqEQIgZji1iDy7FEUQYQfaW1VQvBr1j8NOOTX%2B8jn7uSR3Ho0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJfDaAN3JJ2zYSMlSrcA3dN2mOZybZmXB9ziF4q2MK2MdroRPSkd%2FiyWIc1ZuZI4O%2BT6uflL%2BlAd48CVYE%2FdCfhlOtAIdBmKvKARJ0vf0QN5PwWyoLVwlH03t9rb65sPMkuFx6iHm2onsgeYh9%2Fuh7teXwBVn1TdgnTl82mPRT%2B9Q9blTSlp25rqiYnSecG9SCsNN1VVGG7qBGPJkhJRORnE7uXXaA0p3WfJ%2B7WbHJP4dpFwMOXBXE0cnj038aj%2B46%2FKLy%2FiTraz%2B5rVSD9HL4yqzE%2BanNJNtPi7Rs9K%2BZZavj3fSpsbXu8V2Lcpqb1dS2XzJ6bpGp0TCx2eO85DhWd6WUQy4s7j6QJ24949KgHLtoeiLGl8ORWiprg7qq14j77if2biVslAJ4ysFtxCIyjlCPK5Ap%2BSOwQC9ClJzJ3UhKtg5pjtq2xysdlEQ%2BxcWil2eB%2FoJIOSqHbzw%2BckhxFoT0453uWXgFsj22F66goOeF2PclH3hxBBATbc%2BMIewd9R7fhlOzRtACz2osgtqgnM5qNo0kGBCXGSQVds95OrD4sXd7Hh7nIrWXnkB6kgbRq9oPU8t4jxW%2B3rXltPlbEsZerYPS%2B%2F4llmJGuY6Slz%2FKo6i0V%2FnZZ%2Fk%2Fj33agdeTfrM2PdL5iU8w1MLuq%2Bb4GOqUBd4haWBbKRCdW1ayE9QnElpi221JGfu07Crtnw%2BW7z8E17L9pOs3BKrUojCMqHNZLhls%2BQvollKXuyobeupp38o5RNFKppiMhvm%2BT1JwYnd3L%2BcyVUVgHx93HI4PKiVNn9Pvyf%2BdEwnhLWnGpiyXvf8Ncz3MNFWaSUsZVYfTKoCcrfT95Lpg2PKIU0d6Ppv4KMnFB2U4HAXvrLrkQDxV5oBEJbnK%2B&X-Amz-Signature=70d4b8250ab84f9e48f28f43bc8e5890c55bb2cea6fc5f3d27a3236b8bc6dc76&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JO2FGWF%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC6U9mvkq7O8hKIOyCtZBJLMhCeVZeACUGbyGQTGadqEQIgZji1iDy7FEUQYQfaW1VQvBr1j8NOOTX%2B8jn7uSR3Ho0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJfDaAN3JJ2zYSMlSrcA3dN2mOZybZmXB9ziF4q2MK2MdroRPSkd%2FiyWIc1ZuZI4O%2BT6uflL%2BlAd48CVYE%2FdCfhlOtAIdBmKvKARJ0vf0QN5PwWyoLVwlH03t9rb65sPMkuFx6iHm2onsgeYh9%2Fuh7teXwBVn1TdgnTl82mPRT%2B9Q9blTSlp25rqiYnSecG9SCsNN1VVGG7qBGPJkhJRORnE7uXXaA0p3WfJ%2B7WbHJP4dpFwMOXBXE0cnj038aj%2B46%2FKLy%2FiTraz%2B5rVSD9HL4yqzE%2BanNJNtPi7Rs9K%2BZZavj3fSpsbXu8V2Lcpqb1dS2XzJ6bpGp0TCx2eO85DhWd6WUQy4s7j6QJ24949KgHLtoeiLGl8ORWiprg7qq14j77if2biVslAJ4ysFtxCIyjlCPK5Ap%2BSOwQC9ClJzJ3UhKtg5pjtq2xysdlEQ%2BxcWil2eB%2FoJIOSqHbzw%2BckhxFoT0453uWXgFsj22F66goOeF2PclH3hxBBATbc%2BMIewd9R7fhlOzRtACz2osgtqgnM5qNo0kGBCXGSQVds95OrD4sXd7Hh7nIrWXnkB6kgbRq9oPU8t4jxW%2B3rXltPlbEsZerYPS%2B%2F4llmJGuY6Slz%2FKo6i0V%2FnZZ%2Fk%2Fj33agdeTfrM2PdL5iU8w1MLuq%2Bb4GOqUBd4haWBbKRCdW1ayE9QnElpi221JGfu07Crtnw%2BW7z8E17L9pOs3BKrUojCMqHNZLhls%2BQvollKXuyobeupp38o5RNFKppiMhvm%2BT1JwYnd3L%2BcyVUVgHx93HI4PKiVNn9Pvyf%2BdEwnhLWnGpiyXvf8Ncz3MNFWaSUsZVYfTKoCcrfT95Lpg2PKIU0d6Ppv4KMnFB2U4HAXvrLrkQDxV5oBEJbnK%2B&X-Amz-Signature=3ad6db2ed0440ac63f36bd84d801affa569d3d2d6f3154ea59e8056d3a9a3617&X-Amz-SignedHeaders=host&x-id=GetObject)

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
