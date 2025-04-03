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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFY65BE%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXxd0mNZmMKxO6h5EaJxJFrpMUtQmesZKMyYPkvWGaFAiEAgXHTBm2K00jYW%2F6KVnVZNtJqmozB74LTzaLxLopx%2BTIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgencmhopepwCJ1QCrcAw4bD4UbbZNfMMhrwuoQD67jw3KLGp8yjPKRjVd9KSKBO82Vt1kO9UMKBxjrCD7pL%2FoYDTk2MYQjwfqnZiy9Z%2F9AntMtry8jrm%2F6KWu0h%2FzM9%2FxlhRRab7St5EKdZhcwxFUhgm50IWq3nh%2Fz5bB%2BkfPai9fUngZ5vGX%2BKXanVhbdCJUMWxKzdPjl2878mvrW%2B%2FgSowWvuW%2Fda%2F9vf8lJDreBlIb3XhZ7MVnW%2B5nhg9%2BbRM8rbUdiZwtyna0VDReVhYnLFuQQOHdO1tS1dPF2i2SLUclqJan6Ru972ipt0qjsaEKgupmky6jMQY0kbzfXI3pObZ0TWlu%2BDae1hhiQ13l5ai15xEdPgwXxS97dOeiO6Gu17Buxl8KP5n9GWyJY7psqva2xmrkc%2BvaRiJWHKREmAFIKgrVRt1ovTVEynV6Ox7jqAex9bf12gjJ0nEa%2F5%2BqJsdy88z%2BHNGjFQiOmfgHM9%2BDcCJpWcXLf5KDznmQkRwJFaExSuYmdBiTZmlhHL%2FB8wpQ%2Fcy5ZiAu9nLKAd0Xf5ldmrl3vgs2iKccvj12HHBo7Mce7%2BmvtcujN%2FjoUQFMIrHH%2FEHxukH4L8rCPsrF9vXOhUCyDlUOd0A%2Fqa%2BRrW5eIrRIcpp3J3ALSMLqBur8GOqUBjAXCFJaE11qtzL%2F7N%2F5rnHvm8nPYrglKAKlV8QB58vexV%2FCam6KyzJCSykrvbM9WUtbseLBoqRHfjnpxOZt6PkK0cEdkLfRY1VjACabV7YZ35U7dI1xnXKCas8s22MvcdL6UQfv3H%2FDwxqF7PjHlF3vuSIFv8xVAtZ%2FFIEdQaS%2Bp0La0x4ulM4XovtRBZZJxPIzu15xgjneA9J1RbQF8adz9prNi&X-Amz-Signature=30736b7d212c144ac4ee18a4c6437b0b96ca15c49a619219b091dd612f463814&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFY65BE%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXxd0mNZmMKxO6h5EaJxJFrpMUtQmesZKMyYPkvWGaFAiEAgXHTBm2K00jYW%2F6KVnVZNtJqmozB74LTzaLxLopx%2BTIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgencmhopepwCJ1QCrcAw4bD4UbbZNfMMhrwuoQD67jw3KLGp8yjPKRjVd9KSKBO82Vt1kO9UMKBxjrCD7pL%2FoYDTk2MYQjwfqnZiy9Z%2F9AntMtry8jrm%2F6KWu0h%2FzM9%2FxlhRRab7St5EKdZhcwxFUhgm50IWq3nh%2Fz5bB%2BkfPai9fUngZ5vGX%2BKXanVhbdCJUMWxKzdPjl2878mvrW%2B%2FgSowWvuW%2Fda%2F9vf8lJDreBlIb3XhZ7MVnW%2B5nhg9%2BbRM8rbUdiZwtyna0VDReVhYnLFuQQOHdO1tS1dPF2i2SLUclqJan6Ru972ipt0qjsaEKgupmky6jMQY0kbzfXI3pObZ0TWlu%2BDae1hhiQ13l5ai15xEdPgwXxS97dOeiO6Gu17Buxl8KP5n9GWyJY7psqva2xmrkc%2BvaRiJWHKREmAFIKgrVRt1ovTVEynV6Ox7jqAex9bf12gjJ0nEa%2F5%2BqJsdy88z%2BHNGjFQiOmfgHM9%2BDcCJpWcXLf5KDznmQkRwJFaExSuYmdBiTZmlhHL%2FB8wpQ%2Fcy5ZiAu9nLKAd0Xf5ldmrl3vgs2iKccvj12HHBo7Mce7%2BmvtcujN%2FjoUQFMIrHH%2FEHxukH4L8rCPsrF9vXOhUCyDlUOd0A%2Fqa%2BRrW5eIrRIcpp3J3ALSMLqBur8GOqUBjAXCFJaE11qtzL%2F7N%2F5rnHvm8nPYrglKAKlV8QB58vexV%2FCam6KyzJCSykrvbM9WUtbseLBoqRHfjnpxOZt6PkK0cEdkLfRY1VjACabV7YZ35U7dI1xnXKCas8s22MvcdL6UQfv3H%2FDwxqF7PjHlF3vuSIFv8xVAtZ%2FFIEdQaS%2Bp0La0x4ulM4XovtRBZZJxPIzu15xgjneA9J1RbQF8adz9prNi&X-Amz-Signature=f445ac6533536b7880f49ae9d6aaca2be63898c9634bd5e580d76b18e72261f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
