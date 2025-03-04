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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVM2YNOD%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjwMc8ItKin96%2FARI4eI132jddXq1OJgxPv4UyEbhN0AiEA9wODEhRzsrUZkUBIw6%2B0rhn5bKpCfE462JCbADIQKDMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3gIFlcNjdyJaPvhircA4ckP3QKbYa2j%2BtgdrNJBOkjTUy7IXKJgfgd6BKkjwHm1BXDQ1GTsy6V74qNwoOX2wEnyfmS64mr9tN6yZOEwGmSVtK8FTLI1MXVgxVtlNRxgMcgsmMcbQqiWGPh1IXoK8Yw7aeiBbDY8dqNA43rTIxTNxCIzTEWA10g0YVWIWPVAWCJb2EW9Sx4AZWN9YXQNlL6ck0Z87E2zB9ItBA%2FQEQXaXV2etZ7oHg%2BKXLdhAStEfmuI1toPHmbMC%2FXK8Z44upezL8iShpv%2F8pfIDaveTVnsugpFm1WJ0e9jLQzaHvfNPr7QjW%2F1JzNOCjK9VL3mf0PqIRb8z2TIKo%2Fj%2F55m14mEq2IT8h5LAecjz6YCSMo97oTWIoI74H%2BQvUaXDZNfl8yWj2yrEPcfjvfw2y2zwMyIHQ%2BRABc%2F3Rop3QxfC3r6Ah7Td43rUTTRqsqqWS2FeEerFvh6J8hTrMGbEBg%2Bwl7EEbkbV2BHWmXEYH1uTwha5DjSj4bXoh2S2kXL%2B9nH7ShozqLvcO%2B99unP0o5mSrDW6LyKlMOeZZY8wNlTFuZ5k4xXKw5Me%2FZVOE53m%2BjPWSRxr4XPH2bkorUUzA9rZ1bmYK1ULMoG9JylGzy638eKrE%2BKhbc01brvYB0MKPqm74GOqUBYt5ImA5X5QbiXUXrIoLC0NAm%2BlGXYHksxqZtPl9r9zO2rQ7jynnANV7vBk3YLxLQih1UixKsUXAuCS5oKrgAKe30gWcP3etITAmW0Y%2FSfwmEa%2FNp61iwq4EdEMA6wvN6BOXsJP7%2FS9AjnU1oEjWC3acbg%2BCn43SpP6eYhpuZ%2BfhN6UuAZqctu0AetS2mdAX8rfeFtoEtag9QM%2Bg0nPlTLymBns%2Bm&X-Amz-Signature=fd39b32a800b364b38597f169740cfb10910645db6bdcb6df8251ce59a870f98&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVM2YNOD%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjwMc8ItKin96%2FARI4eI132jddXq1OJgxPv4UyEbhN0AiEA9wODEhRzsrUZkUBIw6%2B0rhn5bKpCfE462JCbADIQKDMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3gIFlcNjdyJaPvhircA4ckP3QKbYa2j%2BtgdrNJBOkjTUy7IXKJgfgd6BKkjwHm1BXDQ1GTsy6V74qNwoOX2wEnyfmS64mr9tN6yZOEwGmSVtK8FTLI1MXVgxVtlNRxgMcgsmMcbQqiWGPh1IXoK8Yw7aeiBbDY8dqNA43rTIxTNxCIzTEWA10g0YVWIWPVAWCJb2EW9Sx4AZWN9YXQNlL6ck0Z87E2zB9ItBA%2FQEQXaXV2etZ7oHg%2BKXLdhAStEfmuI1toPHmbMC%2FXK8Z44upezL8iShpv%2F8pfIDaveTVnsugpFm1WJ0e9jLQzaHvfNPr7QjW%2F1JzNOCjK9VL3mf0PqIRb8z2TIKo%2Fj%2F55m14mEq2IT8h5LAecjz6YCSMo97oTWIoI74H%2BQvUaXDZNfl8yWj2yrEPcfjvfw2y2zwMyIHQ%2BRABc%2F3Rop3QxfC3r6Ah7Td43rUTTRqsqqWS2FeEerFvh6J8hTrMGbEBg%2Bwl7EEbkbV2BHWmXEYH1uTwha5DjSj4bXoh2S2kXL%2B9nH7ShozqLvcO%2B99unP0o5mSrDW6LyKlMOeZZY8wNlTFuZ5k4xXKw5Me%2FZVOE53m%2BjPWSRxr4XPH2bkorUUzA9rZ1bmYK1ULMoG9JylGzy638eKrE%2BKhbc01brvYB0MKPqm74GOqUBYt5ImA5X5QbiXUXrIoLC0NAm%2BlGXYHksxqZtPl9r9zO2rQ7jynnANV7vBk3YLxLQih1UixKsUXAuCS5oKrgAKe30gWcP3etITAmW0Y%2FSfwmEa%2FNp61iwq4EdEMA6wvN6BOXsJP7%2FS9AjnU1oEjWC3acbg%2BCn43SpP6eYhpuZ%2BfhN6UuAZqctu0AetS2mdAX8rfeFtoEtag9QM%2Bg0nPlTLymBns%2Bm&X-Amz-Signature=5a056ccf14a14c18ab73aef37630e9329d76796b377a2cede21aa70a3ec7dc69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
