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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662XYJUK7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFMnEB5OuFMLEac4NV8gcCCNxy1UVELfbzGzWs1tudgbAiEAniftR8mxujGVryOAQ53iZ6%2BQQFnTFfUM8lvyPT%2F%2Bk9cqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVnU%2BLwjT1AoZVzaSrcAxFNdVDKxbH3jJ%2B05aLCiOs1VkOyefEqhSJXDA5dIvVArZeWL7pHesjqZa47TK4WLGlDguoAFSNCEglj%2BaF8fiB6YGVEY23ZjF0lrd2jSUOf0YbnNWnonSwZLor06hd%2BLUssFwMCvcPAaifpEJXAC3uEUc5cKcdvAgKhZVoSEYFPSaWd3%2B47p6GbOy0fNn%2FjvTalisuldX%2FESSCY7PvHowbbtzY19oqsmRkL4oWXIrsvbUAxA7i8ReeqfT%2Fn92sxOp%2F3cFS42UCxxmn6f9qjj8dcnXLp1EsHhVhAOMfbbdyNE56HSMzM1QXu3iV8lDtw4MgjryhBJCu68wlrfa0UHRifrXq%2BenqNqJrmjtxA9wIPgdu0dUhUIySbwrqA7QbXEEvptfbL%2FH1rKlo9QimU7WnmMuHxzdlkGv%2B%2BPi5%2FMjZqN2DKoOOmVmyJJ7xWgj3irtbLPU%2BUI4rWqLKz%2BEvynMJwre6XHATJdrTKHon1NzRBZwTHFEVgQ%2FUV65ZivRtNb6o4YZgn5IrgMojY9YvnxTOs%2FIYSg%2BxYOjlgWaCJLYuiLB3WI6gSTMei9ZENTzOvAGFKnW5%2BuySB5s0%2FgGj8YTSEPfnV%2FUANpC9%2FBIBE%2Be%2FzNQl%2BY9DFIFUIvI%2FyMNnV5r8GOqUBP2VTAyQ0np4ibV2V9HAIRude%2F9EciQdGZjC%2FhDqt4wKXCn%2FdoQHCHcWUSQ7zhqQwgU4pQWumW%2BfNGu4EbeZdWHFyPJ391Uw%2FqatyJ44gX1UbMITLTkLp%2FJa36A67EbKCA7ink8cRNnL1cZBg7YfH1xPut0tEHr%2B0Dj2gE9csE7Hi2qlm%2BNtuHLKFVB0jH7yT36AQEHdmC7%2BXPJ9K5V1zH3%2BFyRTQ&X-Amz-Signature=04810180c1cb38b668f0d47d7e4631dbacc3d4ac1ed586023bbb0e07ff86bfcd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662XYJUK7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIFMnEB5OuFMLEac4NV8gcCCNxy1UVELfbzGzWs1tudgbAiEAniftR8mxujGVryOAQ53iZ6%2BQQFnTFfUM8lvyPT%2F%2Bk9cqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVnU%2BLwjT1AoZVzaSrcAxFNdVDKxbH3jJ%2B05aLCiOs1VkOyefEqhSJXDA5dIvVArZeWL7pHesjqZa47TK4WLGlDguoAFSNCEglj%2BaF8fiB6YGVEY23ZjF0lrd2jSUOf0YbnNWnonSwZLor06hd%2BLUssFwMCvcPAaifpEJXAC3uEUc5cKcdvAgKhZVoSEYFPSaWd3%2B47p6GbOy0fNn%2FjvTalisuldX%2FESSCY7PvHowbbtzY19oqsmRkL4oWXIrsvbUAxA7i8ReeqfT%2Fn92sxOp%2F3cFS42UCxxmn6f9qjj8dcnXLp1EsHhVhAOMfbbdyNE56HSMzM1QXu3iV8lDtw4MgjryhBJCu68wlrfa0UHRifrXq%2BenqNqJrmjtxA9wIPgdu0dUhUIySbwrqA7QbXEEvptfbL%2FH1rKlo9QimU7WnmMuHxzdlkGv%2B%2BPi5%2FMjZqN2DKoOOmVmyJJ7xWgj3irtbLPU%2BUI4rWqLKz%2BEvynMJwre6XHATJdrTKHon1NzRBZwTHFEVgQ%2FUV65ZivRtNb6o4YZgn5IrgMojY9YvnxTOs%2FIYSg%2BxYOjlgWaCJLYuiLB3WI6gSTMei9ZENTzOvAGFKnW5%2BuySB5s0%2FgGj8YTSEPfnV%2FUANpC9%2FBIBE%2Be%2FzNQl%2BY9DFIFUIvI%2FyMNnV5r8GOqUBP2VTAyQ0np4ibV2V9HAIRude%2F9EciQdGZjC%2FhDqt4wKXCn%2FdoQHCHcWUSQ7zhqQwgU4pQWumW%2BfNGu4EbeZdWHFyPJ391Uw%2FqatyJ44gX1UbMITLTkLp%2FJa36A67EbKCA7ink8cRNnL1cZBg7YfH1xPut0tEHr%2B0Dj2gE9csE7Hi2qlm%2BNtuHLKFVB0jH7yT36AQEHdmC7%2BXPJ9K5V1zH3%2BFyRTQ&X-Amz-Signature=0bf055f662c79eadf9bb3a880b207fd50a39009de20b969251037bfedf505b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
