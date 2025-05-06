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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSQJA77%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnw17I9HQzQKAePFAbKqvBxQcuEAlgDYCngCSeqfzrSAiEA6zaH7duACHmhFmbznk12uadzUGytaGTPb9ZB%2FYv6xh8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDP856xllxPdqIx09pSrcA1EhQolWTml%2Btrv8K%2BV7zxAUS9TQtbbfN%2FLOqUpiWJptwozQ8kTJLmkIfuro7ZtVSZGarfXvdznZNNsu0T%2Ff1rWub26b6kUkvU6pWIji%2FpUppc6yz88E1mdv2a7RCyuglaJBPaIqzi5z2k0ns5klP1Wl4BgrIWPkPICvOvMF1%2Ba2pPKjmvg39k4Tyt1fMXn4gsS0IHndhV8HIg3FO4nu3v7WtoP%2BwlKUHF1IdslrgY1DKuXRsSKEN4oke0v%2FQSQJpxKL%2BnfHxJibqtajACxi64M%2BNWxoTQU%2BvRqZ3U%2FOOnwcaaB76GwuubPTCF7gLpslFAjd6Xai4gwKaBI6rDDUbQBWTiWey8qxqoZ7%2Bo9XIseZcBp1CHPfkgxvDgzCW%2BolWzYOAVCNscJGRmqpYHCn1PKiRT%2BudE%2FrVsMhe0gry2%2BXSsuyQWikkWWAWWQFwb2QfXLjl7QUpXnrHWYZXBvbMsxGS4%2FZjU41LbkvgdvaWMhqfSFI0bG2QDCo7DII59F9XN93kyKykRyZqvt5x6cVeX20NYKWnButTE4ltRzKmmxhto6qiRwm2lQaa%2BNLZeOd%2BKJqtvMXrZ86Y5dwSTSNt37OXv2I5RHJAikUStGFoycTCH%2FHxV70W5OEIxauMP6w5cAGOqUBipoe%2FHZvt7f2K9tgsknKFRiObAh7rPsYOVp5Gac2L8Wv6svyyupB1KTIMjveD3eqi5vU6ocG5asmn0SWzd2CSPi7qVdfAJZmZBh16K%2BoJRELld3QuXDue%2Fu8B1jCiXEryjijebVjF5y1%2FK53lMRc%2BJexJitJbIobO3hWoV2NsUVqK0S9fVNX4GFrYA7k6MoPIHtL9VhKQYt49VepI0mUdaB31bQj&X-Amz-Signature=66507714cde0cae35ff13317abd808be964018ca56c0869d01edf29c935b0477&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSQJA77%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnw17I9HQzQKAePFAbKqvBxQcuEAlgDYCngCSeqfzrSAiEA6zaH7duACHmhFmbznk12uadzUGytaGTPb9ZB%2FYv6xh8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDP856xllxPdqIx09pSrcA1EhQolWTml%2Btrv8K%2BV7zxAUS9TQtbbfN%2FLOqUpiWJptwozQ8kTJLmkIfuro7ZtVSZGarfXvdznZNNsu0T%2Ff1rWub26b6kUkvU6pWIji%2FpUppc6yz88E1mdv2a7RCyuglaJBPaIqzi5z2k0ns5klP1Wl4BgrIWPkPICvOvMF1%2Ba2pPKjmvg39k4Tyt1fMXn4gsS0IHndhV8HIg3FO4nu3v7WtoP%2BwlKUHF1IdslrgY1DKuXRsSKEN4oke0v%2FQSQJpxKL%2BnfHxJibqtajACxi64M%2BNWxoTQU%2BvRqZ3U%2FOOnwcaaB76GwuubPTCF7gLpslFAjd6Xai4gwKaBI6rDDUbQBWTiWey8qxqoZ7%2Bo9XIseZcBp1CHPfkgxvDgzCW%2BolWzYOAVCNscJGRmqpYHCn1PKiRT%2BudE%2FrVsMhe0gry2%2BXSsuyQWikkWWAWWQFwb2QfXLjl7QUpXnrHWYZXBvbMsxGS4%2FZjU41LbkvgdvaWMhqfSFI0bG2QDCo7DII59F9XN93kyKykRyZqvt5x6cVeX20NYKWnButTE4ltRzKmmxhto6qiRwm2lQaa%2BNLZeOd%2BKJqtvMXrZ86Y5dwSTSNt37OXv2I5RHJAikUStGFoycTCH%2FHxV70W5OEIxauMP6w5cAGOqUBipoe%2FHZvt7f2K9tgsknKFRiObAh7rPsYOVp5Gac2L8Wv6svyyupB1KTIMjveD3eqi5vU6ocG5asmn0SWzd2CSPi7qVdfAJZmZBh16K%2BoJRELld3QuXDue%2Fu8B1jCiXEryjijebVjF5y1%2FK53lMRc%2BJexJitJbIobO3hWoV2NsUVqK0S9fVNX4GFrYA7k6MoPIHtL9VhKQYt49VepI0mUdaB31bQj&X-Amz-Signature=4fbb02099d3ab1a355c3ab089e2217597dcf48a48d45a4755fcefa15eef8e028&X-Amz-SignedHeaders=host&x-id=GetObject)

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
