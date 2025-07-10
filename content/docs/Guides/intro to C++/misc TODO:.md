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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QTJWE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYnnaGGG06r1M7AJ41E1ghyLXdeail%2BhkT8UNQcHZ8EAiEAiMlz4bQ7q050LbammSGcYxgzoUHkaiENanbYYKwUBFYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaTdrNZ4hDtHBrH8ircA3HU65HtE70xy7Ar9lG0FrlssoCzF%2BuERM6ckd%2FNrXxxVSblSP3bUfkQQZi79ZqcouOxRIdkifr5sI%2B0%2B0RlQGgDuyXqAxg4J1Zl9MznK2bdlG1CVwRgwLsqHH5%2F985j8DGHhoki1GBx1yz6LSszvR4igQMmtubuXKGbNhqcTP3LPvg30eMKFZFlxs33dmbFl%2FY%2FJWXuEZmj1UwXn%2BLKiFDlrmo1mTmlPa40kMs58bbaz3bQzbGo4A2hR%2F86lkUaSpJpXnhQBrmRSb%2F0YRF0kDQgy6wsIqbZtiQjBVYNW%2Bcrwl191EccHw1%2FQbuTE7UbgkbN49B9rhaT8VLUIPnf5hW7isxqoNpPpqlcp2dsxajJJp7koFmPMnxOnktcH4mghQR7wa4nds9DwBXNWgBaFxKiqyf3WMhkz%2Bnt0O945Ha9b35WC9zNcbvB2kgSicor3q3ezyvTPfG4%2BGv4ajRONBmWSQbrt94qDnWplsYtYURNaLvSXi%2F1BB7VwXB%2Fcl0Beknsvr3m3uDzAqkhgyMqhbMpf%2BZAUn2ePj7NcqogpSOILDen%2FcickNUTLie9w6%2BJnHLEFsYsLNNsB%2BQRpWzsttfhf8JLvWSNvQxwG7g%2FeI3vQYp%2FIClqeNbbWwA6MKLNwMMGOqUBw%2Fa49aNrzwSgSQ9Hhw3rArdTQ9yLOC70aCuQqo5WfNx4%2BuHJbHRLve7AwImCKhvWayKQ%2FQztz0Q3JTAQ3x0feIYLM8NQCo4UMrPortxTVb4SvDMMQ6to%2BGtD7Ei6NM%2FyU0bgCXGQURsTZyQX7VDIMPSoSK6VK77j2EY1i0L%2FbIUCz%2FSVZ3ecwmtWbgFy5EgXiDgCX3rvR%2BnL8c9KGBz872IECu6u&X-Amz-Signature=98c073e8f8be45775dc214867f475f361bf480855430fd3927b6c23eb9b8a0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252QTJWE%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYnnaGGG06r1M7AJ41E1ghyLXdeail%2BhkT8UNQcHZ8EAiEAiMlz4bQ7q050LbammSGcYxgzoUHkaiENanbYYKwUBFYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaTdrNZ4hDtHBrH8ircA3HU65HtE70xy7Ar9lG0FrlssoCzF%2BuERM6ckd%2FNrXxxVSblSP3bUfkQQZi79ZqcouOxRIdkifr5sI%2B0%2B0RlQGgDuyXqAxg4J1Zl9MznK2bdlG1CVwRgwLsqHH5%2F985j8DGHhoki1GBx1yz6LSszvR4igQMmtubuXKGbNhqcTP3LPvg30eMKFZFlxs33dmbFl%2FY%2FJWXuEZmj1UwXn%2BLKiFDlrmo1mTmlPa40kMs58bbaz3bQzbGo4A2hR%2F86lkUaSpJpXnhQBrmRSb%2F0YRF0kDQgy6wsIqbZtiQjBVYNW%2Bcrwl191EccHw1%2FQbuTE7UbgkbN49B9rhaT8VLUIPnf5hW7isxqoNpPpqlcp2dsxajJJp7koFmPMnxOnktcH4mghQR7wa4nds9DwBXNWgBaFxKiqyf3WMhkz%2Bnt0O945Ha9b35WC9zNcbvB2kgSicor3q3ezyvTPfG4%2BGv4ajRONBmWSQbrt94qDnWplsYtYURNaLvSXi%2F1BB7VwXB%2Fcl0Beknsvr3m3uDzAqkhgyMqhbMpf%2BZAUn2ePj7NcqogpSOILDen%2FcickNUTLie9w6%2BJnHLEFsYsLNNsB%2BQRpWzsttfhf8JLvWSNvQxwG7g%2FeI3vQYp%2FIClqeNbbWwA6MKLNwMMGOqUBw%2Fa49aNrzwSgSQ9Hhw3rArdTQ9yLOC70aCuQqo5WfNx4%2BuHJbHRLve7AwImCKhvWayKQ%2FQztz0Q3JTAQ3x0feIYLM8NQCo4UMrPortxTVb4SvDMMQ6to%2BGtD7Ei6NM%2FyU0bgCXGQURsTZyQX7VDIMPSoSK6VK77j2EY1i0L%2FbIUCz%2FSVZ3ecwmtWbgFy5EgXiDgCX3rvR%2BnL8c9KGBz872IECu6u&X-Amz-Signature=5fbbe7ddf5505922a6ca60f4761f1d7b64b977810747b7c2921e3108728d764e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
