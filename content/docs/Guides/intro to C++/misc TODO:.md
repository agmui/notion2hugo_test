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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULM5QH43%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3Oyc%2BIKSi3ya4vrU1P3v0LnkumtXvVNz1W8a41L2i3AiEAgTFU6V1Ga2GZ37rOncwtIAbKwPNXmoy0Zsx%2B1WAfoHAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcGZ%2Bs3pvNDjSNKHyrcAwF9gQTEL57sP0XjMEmCrpgVnWNcykc4RzFMF2sW4vNy1EzBUKQ4SyOv%2BJ8yk%2FUJnBhqh9a3RqvBGNu%2B%2BSjzTZGhxvHj06eBnBy3549Dh8M7GvcxS0qjiJ%2Bs2Gx9R%2BCKdvhEVNW2A0knoKaY5tQLj357rILsZU2OUPRZY%2FN%2B%2BPBvFWshnRVK7hbbOlhcmoED5iH5x7CfIgAN2LGWwmvEO3HslvMssVVh%2FY8r6cHc7t9khecyTIk%2B4nUZxz4L3heliGbhB6zUBMrOUfvNhkJzjf%2FTE4qBEUGwuF5I3d6DLNoftw608yRvbc7RLpDlNwWwiQZWxE0nzNK6nNCGvzaEutn%2BLEMC9811nd%2FNjjF38BA8ecfGmCG9p2Y4tBHGqw7VD2LFtnqNLQA%2FsbjI%2Bw6eTVvV8B1cNA%2FqGyFl64uDYNNly%2FKdnkLvXf36xbJjcbBiJwfbYTObT7zJhjj%2BiRu4MjewnlXuY7hsQwjTBMCEvn1CD5ZQDC%2BfDoG705S7oRpLh2oTeurqDL%2Fkq9Jp1RQKiv%2F%2B%2Fp4uQF58A%2BkoXwpQtqKs%2By3uIk8RSIUQykX5yEpby533Mc5pAtBoQGYJpsd3Aax4wn8UTbLjc3mzazzczlJDO7ZsJ1d44R3eNTd9MKyT98MGOqUBX4hRGs9bNaVAZOhyQYpoImLr8Hh2o6mBnHu37JMPojfm9bTQrEwpNR%2BXjU2OJO1x2ktyuaN1TVPVp3RxMzeiR2P5CsxyUOVSUWChzBZ0Dp%2FwAyvhr2ZGKlu%2FWnod1TJlg5p8tYUU%2Bf%2BJ7fs4D75aUuqyzOwW5L5QnqSBR38d387mh3r6Dg5coialkhAjv3vrHl9xi2pfp83N9%2BSpV9brgxmJVMPK&X-Amz-Signature=aed2c5452ef9f08c1b6b010a537f20189204d71636331751c063ab9669e4c1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULM5QH43%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3Oyc%2BIKSi3ya4vrU1P3v0LnkumtXvVNz1W8a41L2i3AiEAgTFU6V1Ga2GZ37rOncwtIAbKwPNXmoy0Zsx%2B1WAfoHAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcGZ%2Bs3pvNDjSNKHyrcAwF9gQTEL57sP0XjMEmCrpgVnWNcykc4RzFMF2sW4vNy1EzBUKQ4SyOv%2BJ8yk%2FUJnBhqh9a3RqvBGNu%2B%2BSjzTZGhxvHj06eBnBy3549Dh8M7GvcxS0qjiJ%2Bs2Gx9R%2BCKdvhEVNW2A0knoKaY5tQLj357rILsZU2OUPRZY%2FN%2B%2BPBvFWshnRVK7hbbOlhcmoED5iH5x7CfIgAN2LGWwmvEO3HslvMssVVh%2FY8r6cHc7t9khecyTIk%2B4nUZxz4L3heliGbhB6zUBMrOUfvNhkJzjf%2FTE4qBEUGwuF5I3d6DLNoftw608yRvbc7RLpDlNwWwiQZWxE0nzNK6nNCGvzaEutn%2BLEMC9811nd%2FNjjF38BA8ecfGmCG9p2Y4tBHGqw7VD2LFtnqNLQA%2FsbjI%2Bw6eTVvV8B1cNA%2FqGyFl64uDYNNly%2FKdnkLvXf36xbJjcbBiJwfbYTObT7zJhjj%2BiRu4MjewnlXuY7hsQwjTBMCEvn1CD5ZQDC%2BfDoG705S7oRpLh2oTeurqDL%2Fkq9Jp1RQKiv%2F%2B%2Fp4uQF58A%2BkoXwpQtqKs%2By3uIk8RSIUQykX5yEpby533Mc5pAtBoQGYJpsd3Aax4wn8UTbLjc3mzazzczlJDO7ZsJ1d44R3eNTd9MKyT98MGOqUBX4hRGs9bNaVAZOhyQYpoImLr8Hh2o6mBnHu37JMPojfm9bTQrEwpNR%2BXjU2OJO1x2ktyuaN1TVPVp3RxMzeiR2P5CsxyUOVSUWChzBZ0Dp%2FwAyvhr2ZGKlu%2FWnod1TJlg5p8tYUU%2Bf%2BJ7fs4D75aUuqyzOwW5L5QnqSBR38d387mh3r6Dg5coialkhAjv3vrHl9xi2pfp83N9%2BSpV9brgxmJVMPK&X-Amz-Signature=15927d82101fa43a4bc285c4f254e418edc4255d4f15a6860b6fdab965d376dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
