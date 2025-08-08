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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTVEO6R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEVKKzZzbpwfoK7WCoinknoBra4b1OoedVIGFX0W3lIDAiEA7xpmTtmNxDBoRoK9PZT7hff24%2FTtNpCpfSycEIgs6gcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfivAAYsz%2BclWMspSrcAwxVffB%2FNlEwifg7HvLMvxT3ySYas9k8s0x%2B2sQsV5sUJBi03S5dqhxzg9esAzJNM2z3n7jCyfn07l2IUPTYkyfvy0Ep1IkJoePUnVJ7v8gxZcVEDzZTwvr%2F4grOSfM3boHbIgohh%2BngVr3DIB8fKWaPDwXPMSpYHa0J1%2B%2Bca%2FZLZnHlzr78Qn9yTXPZia570f7FyzC9fwqL%2BxYnTdYI%2BhApkG5LJSePAtyjueh8pmjl8RhUrQa94PB08CcQRotH1Xt%2Bl18E9daAg1T1prOJRoptEl35oo27BaUiK%2BPTGGcRw%2BNJnkNebsxo%2BJQ3iI1IWlunXREiGptxZgG0I3d8EVZ2GMPRcjQliZAXJilk3csw0ufewgCUqXlExjdkS1xqtwGoOQdsT0bIAdVHtnpBu75JTPsi1g10mtt%2FdwDhEp7eY%2Bfo4v%2F1E9yecMlCr26ficRuyMDqFRFjZASC43A919NLUxRrRRlu8SGMS4PYyl6Y4m7y5WSA%2Be5YGMDXRS6Vy5l0rAUk0gI4kJhndk8ZaTPzMysJjZzAywPaOu6mPZAVY%2FsEd%2FvOU8LTVHvBFWNvIqXTcdHt0Vc2a2o%2FE7yBqEyk92ajgOLcO%2FaSvkn51ByyMrYb1hP3Ahky0G1dMOft1sQGOqUBp6KwGkUN3dQ48Cxss4FhaZRrgDD4Hzw0HMJm5uSPJYCd1z8lZy2dKTsBCeYSS0HZQ3IGu7gMbgr34vj19nPFD0lBYH4PZW%2B6nG9%2FFi8Z5ow%2B0ut34zOT%2B%2FhjneFLJ5XXcjOr8l0MYogSOlPknwnoecit3CbvqF2PX12Q%2BiVn%2FMzMdotlbZVSFKnMVKnkyoMY5Juf%2Fjg8ZG1DWMa46tn6Sy4IVlAW&X-Amz-Signature=66c75e09e61e67b70949f87dd7663c188466b595e8bc311af54a3771d72f65c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTVEO6R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEVKKzZzbpwfoK7WCoinknoBra4b1OoedVIGFX0W3lIDAiEA7xpmTtmNxDBoRoK9PZT7hff24%2FTtNpCpfSycEIgs6gcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfivAAYsz%2BclWMspSrcAwxVffB%2FNlEwifg7HvLMvxT3ySYas9k8s0x%2B2sQsV5sUJBi03S5dqhxzg9esAzJNM2z3n7jCyfn07l2IUPTYkyfvy0Ep1IkJoePUnVJ7v8gxZcVEDzZTwvr%2F4grOSfM3boHbIgohh%2BngVr3DIB8fKWaPDwXPMSpYHa0J1%2B%2Bca%2FZLZnHlzr78Qn9yTXPZia570f7FyzC9fwqL%2BxYnTdYI%2BhApkG5LJSePAtyjueh8pmjl8RhUrQa94PB08CcQRotH1Xt%2Bl18E9daAg1T1prOJRoptEl35oo27BaUiK%2BPTGGcRw%2BNJnkNebsxo%2BJQ3iI1IWlunXREiGptxZgG0I3d8EVZ2GMPRcjQliZAXJilk3csw0ufewgCUqXlExjdkS1xqtwGoOQdsT0bIAdVHtnpBu75JTPsi1g10mtt%2FdwDhEp7eY%2Bfo4v%2F1E9yecMlCr26ficRuyMDqFRFjZASC43A919NLUxRrRRlu8SGMS4PYyl6Y4m7y5WSA%2Be5YGMDXRS6Vy5l0rAUk0gI4kJhndk8ZaTPzMysJjZzAywPaOu6mPZAVY%2FsEd%2FvOU8LTVHvBFWNvIqXTcdHt0Vc2a2o%2FE7yBqEyk92ajgOLcO%2FaSvkn51ByyMrYb1hP3Ahky0G1dMOft1sQGOqUBp6KwGkUN3dQ48Cxss4FhaZRrgDD4Hzw0HMJm5uSPJYCd1z8lZy2dKTsBCeYSS0HZQ3IGu7gMbgr34vj19nPFD0lBYH4PZW%2B6nG9%2FFi8Z5ow%2B0ut34zOT%2B%2FhjneFLJ5XXcjOr8l0MYogSOlPknwnoecit3CbvqF2PX12Q%2BiVn%2FMzMdotlbZVSFKnMVKnkyoMY5Juf%2Fjg8ZG1DWMa46tn6Sy4IVlAW&X-Amz-Signature=73646bc814a3747807dc306c4a224cfd12d9d694052e6693c22e302ff6600e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
