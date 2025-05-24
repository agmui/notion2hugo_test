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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5I6OEM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGJgC8cQOpE6W%2BszhdhTugilFwAnegAU24FwNQ4cjQSKAiEAm76gzfKU3HND1E%2FPR%2BcrBSS%2BQVZ7is8HVt3k67sYJwQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPD3szVXQSP6aizkQyrcA3AILfjg3zdMtV28PCqwFl%2FegeMxVPNPdCFtQNB2uS4sSbWEe7X0ICntavtRY20HYrX0F1M12JK%2FMirn562blXxKQDFjqWmYTL%2B7oOFMGuxMI0UfpbSGgRXgrsfVWsTcrh0NvTQb%2FBnYu5PNC%2BBW%2FKlmFUFdCsQKXTRfxxYvdXK1kKUgWyWYDvf6LdRAuKbg%2FgOQ%2BqWVwfwm15pLyV%2B04aoDMD%2B1wK27x83U6XyZOj2NLjRyY1MawsKswCsCfMuvAB8NaytDIvlg71vdNIj0kAa5dINe9HlxekrNtiUF%2FYymHs7swQg95zqRO7ynGioPQbADmtDTzU4YQLMpNoMr7nn4nouZIBRv1IXGNcFhAyy54bMtoQsW1oCATFPx93Ag4n1%2BhF16Rx51Mvawj1fY56WPP3KDWiTlSL4SkOMw0aSf6SgyiDqfKMyrFgX91%2B0XT2HaZCPW%2FdhKLZZOdFttIpiV1Xa01UDOhDdoIeTVnH%2BVLQe%2FuyiaPxa7%2FGIQe6hXech6se6DlvucYBZ0ebW4yFyMxoZ3%2FeqQgESbR1p6oyXFg9a3RRQOIOiwspmA0SOzsaUs4TKCSasC5W4Wxed08uDyuvNynSZF84T%2BxXil4BMYVJm3slOLdk3KB%2FNDMOTXyMEGOqUBUGZ7GhivtklXQMvdU1oQ%2BVdAcwAm%2FAl%2BfmxL6%2FWqD3RSUwyytw9EdHA2QxAVfJFzKwW%2Fwyhn29zY0mQbu%2BOaMafWD4NtvFiMuzWA31Tgjfs1F2R5%2Fd33g6bi4%2FGcIwPztyC1atHfd0X47vV6hbhp8M6a8bnZxoUGFyM%2FCMg69ckLGvL5IohArwaEgHpVdaMaBOX%2BCFzjLWnhpYMWX0qAvTh6gjPm&X-Amz-Signature=c05de329d952f8d7b536b965c7313bb14deccac0de40c7a1f869ad4179499fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5I6OEM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGJgC8cQOpE6W%2BszhdhTugilFwAnegAU24FwNQ4cjQSKAiEAm76gzfKU3HND1E%2FPR%2BcrBSS%2BQVZ7is8HVt3k67sYJwQq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPD3szVXQSP6aizkQyrcA3AILfjg3zdMtV28PCqwFl%2FegeMxVPNPdCFtQNB2uS4sSbWEe7X0ICntavtRY20HYrX0F1M12JK%2FMirn562blXxKQDFjqWmYTL%2B7oOFMGuxMI0UfpbSGgRXgrsfVWsTcrh0NvTQb%2FBnYu5PNC%2BBW%2FKlmFUFdCsQKXTRfxxYvdXK1kKUgWyWYDvf6LdRAuKbg%2FgOQ%2BqWVwfwm15pLyV%2B04aoDMD%2B1wK27x83U6XyZOj2NLjRyY1MawsKswCsCfMuvAB8NaytDIvlg71vdNIj0kAa5dINe9HlxekrNtiUF%2FYymHs7swQg95zqRO7ynGioPQbADmtDTzU4YQLMpNoMr7nn4nouZIBRv1IXGNcFhAyy54bMtoQsW1oCATFPx93Ag4n1%2BhF16Rx51Mvawj1fY56WPP3KDWiTlSL4SkOMw0aSf6SgyiDqfKMyrFgX91%2B0XT2HaZCPW%2FdhKLZZOdFttIpiV1Xa01UDOhDdoIeTVnH%2BVLQe%2FuyiaPxa7%2FGIQe6hXech6se6DlvucYBZ0ebW4yFyMxoZ3%2FeqQgESbR1p6oyXFg9a3RRQOIOiwspmA0SOzsaUs4TKCSasC5W4Wxed08uDyuvNynSZF84T%2BxXil4BMYVJm3slOLdk3KB%2FNDMOTXyMEGOqUBUGZ7GhivtklXQMvdU1oQ%2BVdAcwAm%2FAl%2BfmxL6%2FWqD3RSUwyytw9EdHA2QxAVfJFzKwW%2Fwyhn29zY0mQbu%2BOaMafWD4NtvFiMuzWA31Tgjfs1F2R5%2Fd33g6bi4%2FGcIwPztyC1atHfd0X47vV6hbhp8M6a8bnZxoUGFyM%2FCMg69ckLGvL5IohArwaEgHpVdaMaBOX%2BCFzjLWnhpYMWX0qAvTh6gjPm&X-Amz-Signature=418bf621beea1812722e0358a85a3e78e7bec030977255645127da28acf81bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
