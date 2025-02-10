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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQLIMCLN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeF3%2BnCV823NAfGTOQsD9lRcEOAhY2%2FRA2ssldCIJmjAIgeg8cckzvp6ceYqPQ%2BXlSWFBTO8tNSSh6wo5cDfSyMi4qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd6i%2BTi64hX%2FgSh8yrcA9hGJHMiHABiRwNkpcQOCEH7hxfmgSljykqN1lvb8SdQYfZ6JxFLGeUXZaNP8%2BDz8VaCcSixZscOTWnrR9E9%2BAsJ%2Fl4UJhfoVLVkLv%2FWu2ux86dcQdVQdpMJymIrK9K2PnJZW1HmJg7CogFJr93V73q5N3hIZ5XTDMVtNnSOzprCuGESLym%2ByHaY8OrZtAYMcsswnv90wlpv4bNUSCRzKRVwcZNJYMxaRQNYU5x5gBimrSUB6EOpoFqjV%2FsaDk23OiWADRJDPB1GdQi5W3%2FFNI%2BFehWhVQoNcpy3pFYQQ30ZuIM2sit8IEfWN2giKyOI6zl72j%2Fo5Ko9VKpVBjxKfJP1O2AzIKCbhhUWp8a1ETyV9tFUjrKT3dc8gwa83fiWCmce3zGRWtCrHo2bKqDL9IYb3LCXGbwoYtgVXmT6PutYF8a5i5LyPBbGmT77GbXmXTXn2XQtXuPgFc1IoCPKmWQd0IRKclqVRG3KJ4eL%2BpQguJv2s520ClxVrVyohJNJi8KsFieV%2B4K6DJAe39O7K7GN1S%2BdHlMDWOUo8ROm%2BBc9Y3g2XuaMYWHsl9aKoA4DxP4RfjtGv2q62ulsQPXmkAUwrVrvbton%2Bflqa1T%2FMAlJ8BYG0E9Gdiy3WiGgMLLNqb0GOqUBRY75ldg0gb5Q4iVMfn0o%2BdYVcpnZf3Zfc5PrHXvUpZzSISEhb73LNnkjV5trmC515LPF5qUbSImjhmSTJA29huMHD%2Fx%2BEfpthYbKjlZfzc4TblZtQVTKWvGP7FuNdAr2x%2FfNyzDWdk2H6orvz74cWoGwIJ5jPVwl8m37aTrvtPtGp5GPzejadwZYvqL%2FltQPCxiw5LKTeV26Vwqh16lBup771qLM&X-Amz-Signature=778a49fea21b3df6b1e8fc07cc1f006ed82dd4238cc1f8f17b209bd476b3e644&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQLIMCLN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeF3%2BnCV823NAfGTOQsD9lRcEOAhY2%2FRA2ssldCIJmjAIgeg8cckzvp6ceYqPQ%2BXlSWFBTO8tNSSh6wo5cDfSyMi4qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd6i%2BTi64hX%2FgSh8yrcA9hGJHMiHABiRwNkpcQOCEH7hxfmgSljykqN1lvb8SdQYfZ6JxFLGeUXZaNP8%2BDz8VaCcSixZscOTWnrR9E9%2BAsJ%2Fl4UJhfoVLVkLv%2FWu2ux86dcQdVQdpMJymIrK9K2PnJZW1HmJg7CogFJr93V73q5N3hIZ5XTDMVtNnSOzprCuGESLym%2ByHaY8OrZtAYMcsswnv90wlpv4bNUSCRzKRVwcZNJYMxaRQNYU5x5gBimrSUB6EOpoFqjV%2FsaDk23OiWADRJDPB1GdQi5W3%2FFNI%2BFehWhVQoNcpy3pFYQQ30ZuIM2sit8IEfWN2giKyOI6zl72j%2Fo5Ko9VKpVBjxKfJP1O2AzIKCbhhUWp8a1ETyV9tFUjrKT3dc8gwa83fiWCmce3zGRWtCrHo2bKqDL9IYb3LCXGbwoYtgVXmT6PutYF8a5i5LyPBbGmT77GbXmXTXn2XQtXuPgFc1IoCPKmWQd0IRKclqVRG3KJ4eL%2BpQguJv2s520ClxVrVyohJNJi8KsFieV%2B4K6DJAe39O7K7GN1S%2BdHlMDWOUo8ROm%2BBc9Y3g2XuaMYWHsl9aKoA4DxP4RfjtGv2q62ulsQPXmkAUwrVrvbton%2Bflqa1T%2FMAlJ8BYG0E9Gdiy3WiGgMLLNqb0GOqUBRY75ldg0gb5Q4iVMfn0o%2BdYVcpnZf3Zfc5PrHXvUpZzSISEhb73LNnkjV5trmC515LPF5qUbSImjhmSTJA29huMHD%2Fx%2BEfpthYbKjlZfzc4TblZtQVTKWvGP7FuNdAr2x%2FfNyzDWdk2H6orvz74cWoGwIJ5jPVwl8m37aTrvtPtGp5GPzejadwZYvqL%2FltQPCxiw5LKTeV26Vwqh16lBup771qLM&X-Amz-Signature=bde850ec3f2923c82a0398f3e2f9f7c0690388a1141360361a6491ad54f98065&X-Amz-SignedHeaders=host&x-id=GetObject)

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
