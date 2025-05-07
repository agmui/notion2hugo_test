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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCCJTLX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH86%2BFhWgngT%2BPTp33yzqCyLyi5NYkK3ik909VGYIkYwIhAOxEpx9OiH0QpM4YTaygwNJzPYnvUPXqGzEeQByPPMxyKv8DCFMQABoMNjM3NDIzMTgzODA1IgyPmnQJAl8ByLWGhikq3APdmpAZl3FhDckVWbp%2FcYl%2FRRQd7Eo7xhCDdnOyfzo1aHTGdC8Z0toVq60tTbW%2BsySNlAgE8GRrkOZ7BrVegZPR9OTUH%2BSaEkU3vzBpilZqgdxXTaVgyWvWZJuCSwbUVVWRz0x352VhK2rmmKbqvU3HPIF6VZ%2BvrQ%2FzdwheWdZnMlpKS9mhRBQHMriuEaPui0rGs7ONpmMkT%2BhYo%2BmL2IAW119RjrvDdSQ9Td1OQohnx0JeoxceI4JnmMciZDWn2PsNkDmxXPKyVN479Y3chgoRdWM5x4gMoLzhHwMbBcrPTBxl5jTy%2Bzc6GXjNyz852IXqr3FP5UphyihLyl%2FWFYNgDGbHYzhbVbBTLKBGY4jxYtGltpwHJbe98S7F5VBcaJOLRU%2FjtOJh8FXoU1DPI%2FQzfkxV%2BdNHWxHNpx%2BMSwLZZgu3UGPKuzGwl4yh5oBdfHVh6IPH5XDnkudFWrg3lWTVBEvGXZNGepHT2Q7gTJ0NDYlBQJA7psEkftE5g%2F8SnCXsmLb81o6c2NxgJCWW7ZiSr2lGTI36ec5njm2FbKkodZoclR64bk%2B3vYMe51%2BiBbyfgEfyeggXARBOKRBDOz%2BSQe1%2FYx3fMH9jhCdlv93jHMcItuq3IAQ%2BdWJYPjDe%2BOrABjqkAVXjzX61tx01moVG3P9KaTDzqVvKPxS5igfFMFRT4e0Jeh4nwsIPGgpD0CVU78oOft%2BGHL88k78xvghqOesaZ306Euf4ZUEA9l2J2UPyqJo0YmaHTCl1kvkug69GLNOGKwuG%2B4N4gVkPqK%2Fj9VN09YWBoPSi3KzZZzZ1eCcQxHBOh5cLoFLOK3OQl7loB%2Fs6tKIAakaspbq74A2pNXoyKnLcXD7h&X-Amz-Signature=9854fe6acbdd156a48045d8061cefaf7e9a2ddf5f0cceed532f19e8be59c712f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCCJTLX%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH86%2BFhWgngT%2BPTp33yzqCyLyi5NYkK3ik909VGYIkYwIhAOxEpx9OiH0QpM4YTaygwNJzPYnvUPXqGzEeQByPPMxyKv8DCFMQABoMNjM3NDIzMTgzODA1IgyPmnQJAl8ByLWGhikq3APdmpAZl3FhDckVWbp%2FcYl%2FRRQd7Eo7xhCDdnOyfzo1aHTGdC8Z0toVq60tTbW%2BsySNlAgE8GRrkOZ7BrVegZPR9OTUH%2BSaEkU3vzBpilZqgdxXTaVgyWvWZJuCSwbUVVWRz0x352VhK2rmmKbqvU3HPIF6VZ%2BvrQ%2FzdwheWdZnMlpKS9mhRBQHMriuEaPui0rGs7ONpmMkT%2BhYo%2BmL2IAW119RjrvDdSQ9Td1OQohnx0JeoxceI4JnmMciZDWn2PsNkDmxXPKyVN479Y3chgoRdWM5x4gMoLzhHwMbBcrPTBxl5jTy%2Bzc6GXjNyz852IXqr3FP5UphyihLyl%2FWFYNgDGbHYzhbVbBTLKBGY4jxYtGltpwHJbe98S7F5VBcaJOLRU%2FjtOJh8FXoU1DPI%2FQzfkxV%2BdNHWxHNpx%2BMSwLZZgu3UGPKuzGwl4yh5oBdfHVh6IPH5XDnkudFWrg3lWTVBEvGXZNGepHT2Q7gTJ0NDYlBQJA7psEkftE5g%2F8SnCXsmLb81o6c2NxgJCWW7ZiSr2lGTI36ec5njm2FbKkodZoclR64bk%2B3vYMe51%2BiBbyfgEfyeggXARBOKRBDOz%2BSQe1%2FYx3fMH9jhCdlv93jHMcItuq3IAQ%2BdWJYPjDe%2BOrABjqkAVXjzX61tx01moVG3P9KaTDzqVvKPxS5igfFMFRT4e0Jeh4nwsIPGgpD0CVU78oOft%2BGHL88k78xvghqOesaZ306Euf4ZUEA9l2J2UPyqJo0YmaHTCl1kvkug69GLNOGKwuG%2B4N4gVkPqK%2Fj9VN09YWBoPSi3KzZZzZ1eCcQxHBOh5cLoFLOK3OQl7loB%2Fs6tKIAakaspbq74A2pNXoyKnLcXD7h&X-Amz-Signature=46928a0330c30e84515945d3824d2776b2f0099b44c8f7926d9e94569f5f2c78&X-Amz-SignedHeaders=host&x-id=GetObject)

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
