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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNDDDWI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxMCecNuKOkA87ri6Sr%2FJQs7BAVC1mSEOVS4Kpo47jwAiEAiZ2U%2F7qhH9JSiZseUaYX51GM1lHNhIJAeuQjWd0WQrUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOs9VXYAeQG%2FR3WwUCrcA1PXL4mtyCthnWCr5B6f8h3qOHjwfmo2eYW53O2UNGlJPEFOz3A816HSfrm41adbdhUOnoYWzAr1hQQfNZ8qB7UTLxfI0Ks0tW3a6KKsJTEQp1Wixkc7muX%2BcgopIaIx9EGO1MNeAbQi5hU6t7IJrWTyYRla2KSqUXhaDSwyf1SUiExqjfgWgEeXh6D3kqEDEzhZv7ZSYQpHbuXEFBAUamE%2FQ%2BmpDI40O6dgTuWNhVk1zC9ui%2Fm41iIZ%2BWJozvuoZIOjnJEPxz%2B7P7B6ItvrCqjREJh%2BmMFNhswDdtpMvH7p3M48BdK8YKyMThDWyqDvwv2eh7ZyBhQaj3WC92pBn3slGXhS2Lba%2FMaz7Mg6RFTE%2FliZ0jzTT%2BFzZsV6%2BiC7UTCM3MCSwUUMVqKNuNSG0FUq5i1m%2FMYXbtKOsr6BkxWAjue8Rz8l36knVm%2F%2FLNPRtChW4Yf5zzZHSqxvQVxd6kXJwmJszQe6VL1YBi3leHR8QIuWjZmwI%2FuktQZe121eaRF2SjT7e7wOvKNRXVIL0bNYnTK7KEgQ3fRxRNNPvzr4YWHX4Y3tubucoORfsviqdyK9yVwoXj7l7MPAXUBMh7d5jT00SlakZDsX1%2Bwe%2Fq07TSgNqcwLmU4d4hEhMMWzzsIGOqUBVuveYOIQ8plbfNk592Xwduf%2FQm5OEkyU4SUd37eNv9OjB3%2BcolUNfX8DIaGOK3C5FNQ1bPuKrPsG7vX6UdkOmE72L%2Bsuj9CJ7uc385IEw%2FOlqt0pLawNqff7iDiw4ZKp0HTsB3KY%2F0UWXYJI6cq7Nc3bVLrmvDACSyeTohm3kHzxez5KD3Qwk4ZYw5P%2BydlZEx6FgdPl0GW4fnAACwerF9eN8R2P&X-Amz-Signature=b70d4d51d8878bc162de5142ad0b7e7d139c5cc0c03b1f893733b606acce50d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNDDDWI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxMCecNuKOkA87ri6Sr%2FJQs7BAVC1mSEOVS4Kpo47jwAiEAiZ2U%2F7qhH9JSiZseUaYX51GM1lHNhIJAeuQjWd0WQrUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOs9VXYAeQG%2FR3WwUCrcA1PXL4mtyCthnWCr5B6f8h3qOHjwfmo2eYW53O2UNGlJPEFOz3A816HSfrm41adbdhUOnoYWzAr1hQQfNZ8qB7UTLxfI0Ks0tW3a6KKsJTEQp1Wixkc7muX%2BcgopIaIx9EGO1MNeAbQi5hU6t7IJrWTyYRla2KSqUXhaDSwyf1SUiExqjfgWgEeXh6D3kqEDEzhZv7ZSYQpHbuXEFBAUamE%2FQ%2BmpDI40O6dgTuWNhVk1zC9ui%2Fm41iIZ%2BWJozvuoZIOjnJEPxz%2B7P7B6ItvrCqjREJh%2BmMFNhswDdtpMvH7p3M48BdK8YKyMThDWyqDvwv2eh7ZyBhQaj3WC92pBn3slGXhS2Lba%2FMaz7Mg6RFTE%2FliZ0jzTT%2BFzZsV6%2BiC7UTCM3MCSwUUMVqKNuNSG0FUq5i1m%2FMYXbtKOsr6BkxWAjue8Rz8l36knVm%2F%2FLNPRtChW4Yf5zzZHSqxvQVxd6kXJwmJszQe6VL1YBi3leHR8QIuWjZmwI%2FuktQZe121eaRF2SjT7e7wOvKNRXVIL0bNYnTK7KEgQ3fRxRNNPvzr4YWHX4Y3tubucoORfsviqdyK9yVwoXj7l7MPAXUBMh7d5jT00SlakZDsX1%2Bwe%2Fq07TSgNqcwLmU4d4hEhMMWzzsIGOqUBVuveYOIQ8plbfNk592Xwduf%2FQm5OEkyU4SUd37eNv9OjB3%2BcolUNfX8DIaGOK3C5FNQ1bPuKrPsG7vX6UdkOmE72L%2Bsuj9CJ7uc385IEw%2FOlqt0pLawNqff7iDiw4ZKp0HTsB3KY%2F0UWXYJI6cq7Nc3bVLrmvDACSyeTohm3kHzxez5KD3Qwk4ZYw5P%2BydlZEx6FgdPl0GW4fnAACwerF9eN8R2P&X-Amz-Signature=281b509df82241bc573fa1ab65e9f3f63576fb6a00e68c865196d90ab4a49f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
