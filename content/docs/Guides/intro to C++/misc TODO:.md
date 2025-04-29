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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3ZQVJE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlwnkL4x4%2BQMSc9XsLyvbv%2BkWuc00KtWjrgkGxXDTxKAIgPiuduX7dRVlPOKxneIpr%2BQc2OYmEo0rz9rOdlZvQlFMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL95ZvUfgiKittIiYSrcA1%2Bnn3Sawe13y%2FUQqcFePMx5XcVz1FGX6saWR86Bd3ZzWNng5X6Wl%2Bwzm2S%2FxPU%2BiYC9DVfz1idcP5KKJMqdcfK5n8Ud%2BYNZOFxXKcFznoUMm3%2FpzHHnT9AMDJJE%2BBMssw9oyC%2Bp2Qg0PeCr%2FaIfdgo6mY1VWByLEqN1KSWjLzU5CTn3tMhwOZKDJNpiC%2FFt8dUQCijSW3dPMcT5Mjv%2BveyP9F4Lt%2Bja4AGNKrWB9DKmbv5TKdojHBbzhD1fBmFei2J6t2cyqawS%2B5LJw0Q%2BaWeCgDzRBh%2Fw6FJV5hmPBVmXULAaiByFC%2F5ygiLoBVMLkAX2eaWHfPw4yQWszLtN%2BnI0%2Fa58P1FchNr%2FZ9cyL90B%2BcCxQQ9U%2FqcCx7TUsKfzjwlnoTNQFsrffHegXOtEL71hghjjCG5CIckVUAWALVhW0PY1DIjgM02XAvnWoO7c7djv%2FcnTHPkZSpIXCfPwMN7OkW%2BRMMHW4%2FVowMjiybx3adSuWzjUFnkJoISlOtGZTup58L2XkkkXAkkj3Sb6guRtslz7hgMSkT%2FrxNC7yoPklkwEpXqJduA0Pbt0B9WF3QEwue9z99MmrVQTYZ%2FXIO%2BRsbCW%2BLSe877o0enLwhHZV7N2R9t0kkHc%2F2Y3MIHPxMAGOqUBAySSK7gwKB1oX%2F%2B6a26pmj4bO436lCVcyzGMQmbn2pl1%2FSK06RTzGU30edvK7sXKLnuhYTii8tmU0uaU1I1wS73Og%2FKBJMgPPZa4VDqniUqp62%2BoQuiZ4bCCBIe6FbmLWzkjzhWMSi65ci9hG7Hu8ZgczjEpeqwj40A0ytm4EA8NqloKeQL7rckwV7r6AhvTCokLa7TRP1cl9MPl6p%2FPAPAic2ob&X-Amz-Signature=5a49d7a68c6e6e2461d2d833fac6b761799b56be21c1034125e1276bb42202d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3ZQVJE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlwnkL4x4%2BQMSc9XsLyvbv%2BkWuc00KtWjrgkGxXDTxKAIgPiuduX7dRVlPOKxneIpr%2BQc2OYmEo0rz9rOdlZvQlFMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL95ZvUfgiKittIiYSrcA1%2Bnn3Sawe13y%2FUQqcFePMx5XcVz1FGX6saWR86Bd3ZzWNng5X6Wl%2Bwzm2S%2FxPU%2BiYC9DVfz1idcP5KKJMqdcfK5n8Ud%2BYNZOFxXKcFznoUMm3%2FpzHHnT9AMDJJE%2BBMssw9oyC%2Bp2Qg0PeCr%2FaIfdgo6mY1VWByLEqN1KSWjLzU5CTn3tMhwOZKDJNpiC%2FFt8dUQCijSW3dPMcT5Mjv%2BveyP9F4Lt%2Bja4AGNKrWB9DKmbv5TKdojHBbzhD1fBmFei2J6t2cyqawS%2B5LJw0Q%2BaWeCgDzRBh%2Fw6FJV5hmPBVmXULAaiByFC%2F5ygiLoBVMLkAX2eaWHfPw4yQWszLtN%2BnI0%2Fa58P1FchNr%2FZ9cyL90B%2BcCxQQ9U%2FqcCx7TUsKfzjwlnoTNQFsrffHegXOtEL71hghjjCG5CIckVUAWALVhW0PY1DIjgM02XAvnWoO7c7djv%2FcnTHPkZSpIXCfPwMN7OkW%2BRMMHW4%2FVowMjiybx3adSuWzjUFnkJoISlOtGZTup58L2XkkkXAkkj3Sb6guRtslz7hgMSkT%2FrxNC7yoPklkwEpXqJduA0Pbt0B9WF3QEwue9z99MmrVQTYZ%2FXIO%2BRsbCW%2BLSe877o0enLwhHZV7N2R9t0kkHc%2F2Y3MIHPxMAGOqUBAySSK7gwKB1oX%2F%2B6a26pmj4bO436lCVcyzGMQmbn2pl1%2FSK06RTzGU30edvK7sXKLnuhYTii8tmU0uaU1I1wS73Og%2FKBJMgPPZa4VDqniUqp62%2BoQuiZ4bCCBIe6FbmLWzkjzhWMSi65ci9hG7Hu8ZgczjEpeqwj40A0ytm4EA8NqloKeQL7rckwV7r6AhvTCokLa7TRP1cl9MPl6p%2FPAPAic2ob&X-Amz-Signature=7a0d9935dbe0a89726a1706d22eb868af87dd8377e5f6edd54861c19fdc5832c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
