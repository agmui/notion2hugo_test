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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN5HTBHF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS9EERYxMhp7864Wq%2Fh%2FxB%2FYQ9hxeuXcw78mYGnpKriAiEAzXfBVn1jf7Gu8Qs%2BQrH1EunK4WB7H%2Fw7vDuKiglSWeAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNTnylBfA6poTycZSrcA449pfQtcopj0fQYASIVDXRoNiy%2BhHiq3BUVaIT7olkC6JCyj4DIb%2B7f7La6MLzoWKBdoBBe9MpGbj2BsEVfi00u2amuBm4IRLjEgFXK5tJeVBViCwOaPldol962fDIRhObge1f8FJkywa7K9EdV6kW%2BBfwP8jBpv5zD4dSxwAUiqSN43kyYvLTp5%2FHZ1PfzkVfbUqZiGgIlIgkOu8ItE7KUOTCvkGtYCRg%2F7zngHGCL56bqD6vqF9alHer7rAKFcZuCV3RnRqumsDntSD0LtysfhU1221SdVpfJ9T5Gq%2BEzoHkXXbX6KFAZrXKDZWO6UWFZ7UB7iBMi2WJzcusKR7qU%2FdBUKw2xsHy1QHwcqqrn2xWRnzNJ0uOVTPmCB%2BheifazJp9SBmEd2cCdlhYkN4FqSk9%2FAKCkDJcJftH8kyVxBgHOj0g5UBm181Y9YPxFBzUKfoDCi18p%2B4daLY5JHAVdsLcZnMIjmUgTPDchG4jg%2FSLh1Ju9Dwf0UEn%2BhlWq85VqjwPA3cpYquSdHlB2AGTH0UBWycIix6SMYygUiLXALTWu4ELjNVwzqEklvUbOR4pRSBAmgQYVOT%2FqzA9xY1O%2BY2c%2BbXSWNi3ojgSbQ96DPUkNMT2LCQLGpdJ0MKGzlcIGOqUB87bI7NpcJEoSzUmnWBJNIs0cT0KBxqUsqam9I0Y9AKcN0vp%2BGwfvzr5xUwxhwHgAgQhzOdw9LWQwe%2FOA0wIH49fUdJ%2BYFHKZtNt6aNUMIFdTEeRu6b4XYUTHc4EYzp%2BKNF5vx%2Fw9cs6wev9ZqBHDkSSaPGLQdno10OaC%2BR59CQNiy66iIAkkCZynnfMs3UCf%2Fu2ZKFBh%2Bp1RTxdEU3xtQaG%2F%2BLfl&X-Amz-Signature=79b2f35e4cba2418fde77393517846f44f3555158badf041ababb929fe27a7f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN5HTBHF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS9EERYxMhp7864Wq%2Fh%2FxB%2FYQ9hxeuXcw78mYGnpKriAiEAzXfBVn1jf7Gu8Qs%2BQrH1EunK4WB7H%2Fw7vDuKiglSWeAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNTnylBfA6poTycZSrcA449pfQtcopj0fQYASIVDXRoNiy%2BhHiq3BUVaIT7olkC6JCyj4DIb%2B7f7La6MLzoWKBdoBBe9MpGbj2BsEVfi00u2amuBm4IRLjEgFXK5tJeVBViCwOaPldol962fDIRhObge1f8FJkywa7K9EdV6kW%2BBfwP8jBpv5zD4dSxwAUiqSN43kyYvLTp5%2FHZ1PfzkVfbUqZiGgIlIgkOu8ItE7KUOTCvkGtYCRg%2F7zngHGCL56bqD6vqF9alHer7rAKFcZuCV3RnRqumsDntSD0LtysfhU1221SdVpfJ9T5Gq%2BEzoHkXXbX6KFAZrXKDZWO6UWFZ7UB7iBMi2WJzcusKR7qU%2FdBUKw2xsHy1QHwcqqrn2xWRnzNJ0uOVTPmCB%2BheifazJp9SBmEd2cCdlhYkN4FqSk9%2FAKCkDJcJftH8kyVxBgHOj0g5UBm181Y9YPxFBzUKfoDCi18p%2B4daLY5JHAVdsLcZnMIjmUgTPDchG4jg%2FSLh1Ju9Dwf0UEn%2BhlWq85VqjwPA3cpYquSdHlB2AGTH0UBWycIix6SMYygUiLXALTWu4ELjNVwzqEklvUbOR4pRSBAmgQYVOT%2FqzA9xY1O%2BY2c%2BbXSWNi3ojgSbQ96DPUkNMT2LCQLGpdJ0MKGzlcIGOqUB87bI7NpcJEoSzUmnWBJNIs0cT0KBxqUsqam9I0Y9AKcN0vp%2BGwfvzr5xUwxhwHgAgQhzOdw9LWQwe%2FOA0wIH49fUdJ%2BYFHKZtNt6aNUMIFdTEeRu6b4XYUTHc4EYzp%2BKNF5vx%2Fw9cs6wev9ZqBHDkSSaPGLQdno10OaC%2BR59CQNiy66iIAkkCZynnfMs3UCf%2Fu2ZKFBh%2Bp1RTxdEU3xtQaG%2F%2BLfl&X-Amz-Signature=8a470c1c64949f19f5ba004564cc3ef64f89d966c9dd1979641f44026d10b5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
