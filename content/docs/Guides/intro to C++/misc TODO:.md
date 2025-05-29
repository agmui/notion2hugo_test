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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETSMW7U%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgYqOHWprvPd3%2BO5VO%2Fe5c3BFdKjMOwOJJy2oYAFG7UAiEAiKIXpwIDzYBLZ1tNJDM40%2BJyTLTGUKR97VztkIQskKoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETB0jpXvT%2Bis%2FSevyrcA6zxCqDQa%2F7OiVDAZeJNpszhfBHgdxhTI41DJQo82GleZ3%2FLuHMtkwlPv%2BIU8ow6Srraq4KhW2AKCpFiBchLnfqinfv2qHk59A%2F2oj6BJXMz9iC92dHVXqND2L4qFi6SbaaXR5HROjlpZsUNTTSyOVGqVkjhTb6Fjq6HFbUmBE6meLZXFOj2fHnPJxfqza9Z8uDcLIBiKh7UUuN1TRSTpZQM4ALxR%2BNXU%2FCTzhELrgp5DJQ4h7tba5y9LrG4rwGbt%2BXKQ%2FHVSYyYsxouK8404ps30fPTNoxtdvpQn%2BxK3HuCxXYpzfFDjNOov6QYQu78%2BJlHLXz8TbCFaTXeQ0D8svII%2BxmQySNKQsy34KyqmV3fIrW14ig%2BnXHjhmmJJsFF0P3jVuU8rXwF0r239qRrtOMdVMMT0KArIgLfl3p%2BSQibNMSBOU4DZvB4rkprGm5USwf2%2BaZPBMKtaGW3a%2F8jhpCQtzstNkOLlKK0cwP%2FuMhnxpmRnuddv1zxJpxwbz%2FzMmDA%2B5UtkOf8kTFWj6cL0H8VtN80H5isxBH2E9SWOvjqF13tQ9RMtbAKzHwZZSG93QTwnLJHev8fRVBCW6ubtUfRFUsFJaiUDgJQGYw%2BEWRp0eEaBxtC%2FH17JZh5MNmy4cEGOqUB0ft48qQpJwznCWIyEdQmNy1spgQ%2F%2BUotFzAuCbg%2F4T%2FfXsmKHgaLW%2B%2FQlKWBOT1KFwpRrnvXw97pzhs7XjoAwNJvSKI7wkxpHfL6g5iEq8QF453DXtsuGwcs3hBNA%2BTNmntiFLaTiFCTXfxmQzXTMWsrN7Sa1%2FLLM9MHB84wbe1NLckyvLCuexoZtlZpba34aqDubzemmhMWoyGNKJTSuANEFjJH&X-Amz-Signature=184732df51d426331b866b3151aed9d26dea4035ed70d0607029765c4b0a5f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETSMW7U%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgYqOHWprvPd3%2BO5VO%2Fe5c3BFdKjMOwOJJy2oYAFG7UAiEAiKIXpwIDzYBLZ1tNJDM40%2BJyTLTGUKR97VztkIQskKoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETB0jpXvT%2Bis%2FSevyrcA6zxCqDQa%2F7OiVDAZeJNpszhfBHgdxhTI41DJQo82GleZ3%2FLuHMtkwlPv%2BIU8ow6Srraq4KhW2AKCpFiBchLnfqinfv2qHk59A%2F2oj6BJXMz9iC92dHVXqND2L4qFi6SbaaXR5HROjlpZsUNTTSyOVGqVkjhTb6Fjq6HFbUmBE6meLZXFOj2fHnPJxfqza9Z8uDcLIBiKh7UUuN1TRSTpZQM4ALxR%2BNXU%2FCTzhELrgp5DJQ4h7tba5y9LrG4rwGbt%2BXKQ%2FHVSYyYsxouK8404ps30fPTNoxtdvpQn%2BxK3HuCxXYpzfFDjNOov6QYQu78%2BJlHLXz8TbCFaTXeQ0D8svII%2BxmQySNKQsy34KyqmV3fIrW14ig%2BnXHjhmmJJsFF0P3jVuU8rXwF0r239qRrtOMdVMMT0KArIgLfl3p%2BSQibNMSBOU4DZvB4rkprGm5USwf2%2BaZPBMKtaGW3a%2F8jhpCQtzstNkOLlKK0cwP%2FuMhnxpmRnuddv1zxJpxwbz%2FzMmDA%2B5UtkOf8kTFWj6cL0H8VtN80H5isxBH2E9SWOvjqF13tQ9RMtbAKzHwZZSG93QTwnLJHev8fRVBCW6ubtUfRFUsFJaiUDgJQGYw%2BEWRp0eEaBxtC%2FH17JZh5MNmy4cEGOqUB0ft48qQpJwznCWIyEdQmNy1spgQ%2F%2BUotFzAuCbg%2F4T%2FfXsmKHgaLW%2B%2FQlKWBOT1KFwpRrnvXw97pzhs7XjoAwNJvSKI7wkxpHfL6g5iEq8QF453DXtsuGwcs3hBNA%2BTNmntiFLaTiFCTXfxmQzXTMWsrN7Sa1%2FLLM9MHB84wbe1NLckyvLCuexoZtlZpba34aqDubzemmhMWoyGNKJTSuANEFjJH&X-Amz-Signature=90eee5e1d4983c2f8c00967101d7047e24a58f7b8b18fa4b30d5785acd11acdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
