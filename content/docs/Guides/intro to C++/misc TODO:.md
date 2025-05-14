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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWZAGNA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFXGlFB3HUCrZ4Zxfou5JIJAy6UzrWBCC4n0O9c8ZMzLAiEA6v1mNnxZLdWtojk6qfK6mI82shcJII92KjDnqviEpX4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDweCBf9e5i%2FigRSoSrcA8D9FshdJOeCY8HxtXL6uKhztqx6SFZ7OhXah47VzRer8ia1mFyY4KtnvxEYrWog7TGY3I5SATyXNueQjIeBlHAF3aM9%2Fe%2BmtYJ3iObcJsvxRG8Sn2A1sYhl9K6e0dR1%2BUp30bFUWad33pjYT2Hq6xIQr3LszgTkzJIg%2BrnJ%2BtAQxELM4gow9J0ZtLxDHICHwcCeszap8lE6Z5ZaB5aqbkHZTUZYi5voHODIridwzhZIKh4wrb05s2pJycA7lujf88tm4oLsxN1yKPFoWzKdc4o9olxyZfFhM9vyRo7Q1rb19AuWxakTTHboOlB6xK5kBkxBsOYVSdsB%2BFjRnJqzzsfGEJVj5v8tGlWWr0WmyyBVoVdoJIDLObW9xdm0oKYbUm1UAWWEezI6svcfZVH5UXI%2F7lQTUqLeC8hmZBZ3YAaD1wS82DVXWmYPXmJMFi%2BFsPLBjRDeimbpxdmrlCfzfr8RFOItDa3ndBTpW8M%2Fqudp8TNdkMUV1n6DawFgDNIWM1ZQnqmNuwIb%2BMFMRpr%2BkNLSemPcLcEpbF%2B2qicOI8dyzIBO9A24bYjG2n4HcJJ5XIqCAPjXF%2BALQrmgaoCDY%2B0OASU27EtsNt%2F5ZZS3NtpoteTwNNQLT0Rej%2F8uMLqdkcEGOqUBgTnRTs1KgqZRsfBMFr6%2Bl%2FmFks6Pm7xqqUbDHBGSgd%2B%2BPxcAwEsgU5MqcvwDfujmdsfNIcWq0R3GEze8WpuAA%2FNQDMNa7Jvrhi7EAT18zP1Yda7dnOp2nyrm%2FaOMjpkbSvr47e0OKfxblXLzIGDD2rFZjCPIBXmaTP5peuZXKwZ38AdiGyXRGjoip9N9CwPPEsrahYMckcG378QEcTzOhXfOFRvK&X-Amz-Signature=482b77d13e66ead42e36f05605f9332b658fa97bfac32b4931ca5bd8cf7b6552&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWZAGNA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFXGlFB3HUCrZ4Zxfou5JIJAy6UzrWBCC4n0O9c8ZMzLAiEA6v1mNnxZLdWtojk6qfK6mI82shcJII92KjDnqviEpX4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDweCBf9e5i%2FigRSoSrcA8D9FshdJOeCY8HxtXL6uKhztqx6SFZ7OhXah47VzRer8ia1mFyY4KtnvxEYrWog7TGY3I5SATyXNueQjIeBlHAF3aM9%2Fe%2BmtYJ3iObcJsvxRG8Sn2A1sYhl9K6e0dR1%2BUp30bFUWad33pjYT2Hq6xIQr3LszgTkzJIg%2BrnJ%2BtAQxELM4gow9J0ZtLxDHICHwcCeszap8lE6Z5ZaB5aqbkHZTUZYi5voHODIridwzhZIKh4wrb05s2pJycA7lujf88tm4oLsxN1yKPFoWzKdc4o9olxyZfFhM9vyRo7Q1rb19AuWxakTTHboOlB6xK5kBkxBsOYVSdsB%2BFjRnJqzzsfGEJVj5v8tGlWWr0WmyyBVoVdoJIDLObW9xdm0oKYbUm1UAWWEezI6svcfZVH5UXI%2F7lQTUqLeC8hmZBZ3YAaD1wS82DVXWmYPXmJMFi%2BFsPLBjRDeimbpxdmrlCfzfr8RFOItDa3ndBTpW8M%2Fqudp8TNdkMUV1n6DawFgDNIWM1ZQnqmNuwIb%2BMFMRpr%2BkNLSemPcLcEpbF%2B2qicOI8dyzIBO9A24bYjG2n4HcJJ5XIqCAPjXF%2BALQrmgaoCDY%2B0OASU27EtsNt%2F5ZZS3NtpoteTwNNQLT0Rej%2F8uMLqdkcEGOqUBgTnRTs1KgqZRsfBMFr6%2Bl%2FmFks6Pm7xqqUbDHBGSgd%2B%2BPxcAwEsgU5MqcvwDfujmdsfNIcWq0R3GEze8WpuAA%2FNQDMNa7Jvrhi7EAT18zP1Yda7dnOp2nyrm%2FaOMjpkbSvr47e0OKfxblXLzIGDD2rFZjCPIBXmaTP5peuZXKwZ38AdiGyXRGjoip9N9CwPPEsrahYMckcG378QEcTzOhXfOFRvK&X-Amz-Signature=abd89e661d259836941d9627d1666836e53bf50d00f56752f59c3b8c6bc0d32a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
