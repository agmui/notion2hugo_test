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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXUKILA%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBJWTLCdq1C1jevQTSXhoAY6XdBGOCIkyvqDB%2B0tYH8JAiEA2ndRFGhAq3XM8IEDvMq8Wi%2Fe5SBmU3hqv%2F6D8D32RcIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkex1anqHBSlOVpfircA%2FwvN7jL%2F7Ya6SBUX9JCZkRY4idV3e6PqpYzFNYapgigciAiJu2cqfi3vxR0yS%2FdFrrwUNg%2F%2FnUwKwpoBQoTmt3UaRd5%2B%2B5o5en1ByqB%2BjmLB9EFXeuKvr1AUbO1ddW5kuL1kUVT3r1pJGZpE6l88mlHCHVX%2FUNOfLoznUWtXH3AgU8F486%2BHSZh2SK4wHzt9UNO4YtC3L9ErnLIWAPrL4izd%2FrXg1ewjAGOQFdHxkEvfLTZIzn3U3EEA%2BKcUgxs7PolHn8KQl98ztt2hMjB4EGK%2B%2BVCBMVGx36ZDLBPrwmXXky7hI6mFhqme56916nm90lLXD%2B9bp17HgERW4JVdREcxqhTen2xXPPoVl4aM0wGtDiIKPE7vJYnUe%2FqZk4lLLnB7R3F6zBhBQY4fLz%2B0%2BMZ0iA%2BLEETgzTDRszGSTaVjFEsaPXdyqD22i3Yl1yGpM41Z0qFVvy2iJopmKGW9hubgiG%2B4cHWi3pdwwkQIKxgKChWQwr4gmVmp1yPT8nJdIYhkzVoKeVLyoQYY8luVKBQK04lcrWGf25kS0%2ByukQty4LEtBU248BKnKXLzFhc3Kew%2Fz6kBVEuif8HfcILms6BYaZpoRvRqXFS7NPqeuLNvGMofxPWMZuixB9rMLnn3MYGOqUBj1ylFeRnTiC2Z%2FQXyGkz1Inblxjec%2B8%2BfMyN7rEcd021V1Z2jHFt4cHOKcBQ69LWfPZwVCMrg02h5xZ%2BPbcwC8Gv89ur1NmTa8QoV7SbwfO6ztdsC4wpsSFiJblvtgQA8wUdIkb1HDL847bf4fkSdRT8YLYe2mregokF6t6gZ%2FfGlJrzLViwwi6h5yGV7I96%2Bwrg5X5NGK49KJyM4cXb8aabRf25&X-Amz-Signature=998a671c71f83cfbf009681938a11f631f232f211726ca9e1e4d84b0a972a83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXUKILA%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBJWTLCdq1C1jevQTSXhoAY6XdBGOCIkyvqDB%2B0tYH8JAiEA2ndRFGhAq3XM8IEDvMq8Wi%2Fe5SBmU3hqv%2F6D8D32RcIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkex1anqHBSlOVpfircA%2FwvN7jL%2F7Ya6SBUX9JCZkRY4idV3e6PqpYzFNYapgigciAiJu2cqfi3vxR0yS%2FdFrrwUNg%2F%2FnUwKwpoBQoTmt3UaRd5%2B%2B5o5en1ByqB%2BjmLB9EFXeuKvr1AUbO1ddW5kuL1kUVT3r1pJGZpE6l88mlHCHVX%2FUNOfLoznUWtXH3AgU8F486%2BHSZh2SK4wHzt9UNO4YtC3L9ErnLIWAPrL4izd%2FrXg1ewjAGOQFdHxkEvfLTZIzn3U3EEA%2BKcUgxs7PolHn8KQl98ztt2hMjB4EGK%2B%2BVCBMVGx36ZDLBPrwmXXky7hI6mFhqme56916nm90lLXD%2B9bp17HgERW4JVdREcxqhTen2xXPPoVl4aM0wGtDiIKPE7vJYnUe%2FqZk4lLLnB7R3F6zBhBQY4fLz%2B0%2BMZ0iA%2BLEETgzTDRszGSTaVjFEsaPXdyqD22i3Yl1yGpM41Z0qFVvy2iJopmKGW9hubgiG%2B4cHWi3pdwwkQIKxgKChWQwr4gmVmp1yPT8nJdIYhkzVoKeVLyoQYY8luVKBQK04lcrWGf25kS0%2ByukQty4LEtBU248BKnKXLzFhc3Kew%2Fz6kBVEuif8HfcILms6BYaZpoRvRqXFS7NPqeuLNvGMofxPWMZuixB9rMLnn3MYGOqUBj1ylFeRnTiC2Z%2FQXyGkz1Inblxjec%2B8%2BfMyN7rEcd021V1Z2jHFt4cHOKcBQ69LWfPZwVCMrg02h5xZ%2BPbcwC8Gv89ur1NmTa8QoV7SbwfO6ztdsC4wpsSFiJblvtgQA8wUdIkb1HDL847bf4fkSdRT8YLYe2mregokF6t6gZ%2FfGlJrzLViwwi6h5yGV7I96%2Bwrg5X5NGK49KJyM4cXb8aabRf25&X-Amz-Signature=fa0862256b04d4ad574155e21e35d7f74411f4a39263474220d83ef9e635e20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
