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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H5A7BRH%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCss%2FTyDlnPcFSyebhEFu4vWDd9Zpf2iukjG5RxIhflfgIgKUsbeBhO%2FuXFSlGrjyz9Z%2FlssryvNrd9rtVvaDyRt1YqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnKqSUahD%2B7hz3VIircAyDR2kkx%2FoWq5PlDkeQjmdNnA%2FvQC1jKaWRNo%2B5QnMgpyVVJJgqqhsV7U1Bop%2FKymJlHp6qi32tPU1IsF0ja0mltrCgo6dO9QueYSmdvNOBSD%2BwTvHRgB3gyK%2BIet%2BBuReDm8h5nUYMjZxhwk0%2Bydk0FLGz7Bh5O%2FfapM4zehqF5f0bUjV%2FWkP89WGrLTPpnS4ZclKfajd7sTFb3Xlo87nDwIBYZkbXzoLcEnQzQCXsmXZ6YBPMHkc2kSi%2BA%2FwUXpXmcL5oa5RCIz0GhlXd9pwN%2FPYIwTSXUcLPM9sBHi3oHZVsRJ5s8twQLRIWXtzUedPJryNXnwY8y5IxN8y1ImjDc234H47vj4VwU3Us93kYqR7XRTrO6GF4W8IqihOonpaKl5Owyxpg8XaKBFX9WVNH87DHO7a6MluhzAR7yxLqrflJOq7PJz0liGGFkRt8keUnjTXnP%2BDPJYszBI2JNH4RXjrbMOQyxvPaEBBiHAgP8pA3MT870E5GNE4NUUFYgTVaMS%2B%2BLXCQ2Sv2U6cMizdySrRZiJm6CS%2FiRV3vBCdUg%2Bdh8FPp0EvqKzEl8PU2CvomTIn3sxb1nCBJZHhoBO3HNBHOjrOUM9YRcJllGI7tEQuVaP3KQ2mPwBaZZMJHwr8gGOqUBtu8PDM4%2FyK4Vgi9vS7KAU%2F2B4UeqxnBx4a2WJMFRPCp%2BkvTppx9AiNRRzvvlnUEiwVdyym3gT3rhQnJUCBuzMj4rOVGhH0bdR5KHhj0CHNhT7P9vP3JZ%2BsxvWV0rNp0%2Bkg3fUdPhIxrMIb6R3RgVdlTPMYhHcVSzzjCxXIUmN3d%2Ff8FWWLlkCFmj2ctz3IT%2F3uCw52RJJ8SnZvaAKwt%2Baivh1KVO&X-Amz-Signature=6d109d110801d1f8a31a0ae04aa7de4b5a824dbba159151de7ef414b975d1eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H5A7BRH%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCss%2FTyDlnPcFSyebhEFu4vWDd9Zpf2iukjG5RxIhflfgIgKUsbeBhO%2FuXFSlGrjyz9Z%2FlssryvNrd9rtVvaDyRt1YqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnKqSUahD%2B7hz3VIircAyDR2kkx%2FoWq5PlDkeQjmdNnA%2FvQC1jKaWRNo%2B5QnMgpyVVJJgqqhsV7U1Bop%2FKymJlHp6qi32tPU1IsF0ja0mltrCgo6dO9QueYSmdvNOBSD%2BwTvHRgB3gyK%2BIet%2BBuReDm8h5nUYMjZxhwk0%2Bydk0FLGz7Bh5O%2FfapM4zehqF5f0bUjV%2FWkP89WGrLTPpnS4ZclKfajd7sTFb3Xlo87nDwIBYZkbXzoLcEnQzQCXsmXZ6YBPMHkc2kSi%2BA%2FwUXpXmcL5oa5RCIz0GhlXd9pwN%2FPYIwTSXUcLPM9sBHi3oHZVsRJ5s8twQLRIWXtzUedPJryNXnwY8y5IxN8y1ImjDc234H47vj4VwU3Us93kYqR7XRTrO6GF4W8IqihOonpaKl5Owyxpg8XaKBFX9WVNH87DHO7a6MluhzAR7yxLqrflJOq7PJz0liGGFkRt8keUnjTXnP%2BDPJYszBI2JNH4RXjrbMOQyxvPaEBBiHAgP8pA3MT870E5GNE4NUUFYgTVaMS%2B%2BLXCQ2Sv2U6cMizdySrRZiJm6CS%2FiRV3vBCdUg%2Bdh8FPp0EvqKzEl8PU2CvomTIn3sxb1nCBJZHhoBO3HNBHOjrOUM9YRcJllGI7tEQuVaP3KQ2mPwBaZZMJHwr8gGOqUBtu8PDM4%2FyK4Vgi9vS7KAU%2F2B4UeqxnBx4a2WJMFRPCp%2BkvTppx9AiNRRzvvlnUEiwVdyym3gT3rhQnJUCBuzMj4rOVGhH0bdR5KHhj0CHNhT7P9vP3JZ%2BsxvWV0rNp0%2Bkg3fUdPhIxrMIb6R3RgVdlTPMYhHcVSzzjCxXIUmN3d%2Ff8FWWLlkCFmj2ctz3IT%2F3uCw52RJJ8SnZvaAKwt%2Baivh1KVO&X-Amz-Signature=e0440af377530626bc4309a38d2d52df0a4c1cedde4b6a65d6d75337fb3df1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
