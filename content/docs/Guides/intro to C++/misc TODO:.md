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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYQY3XQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2FSUU6iBm%2BmzHha2vnbW3wyAeTRqDzuFuwFE07JYbt3QIhAMPltT2zEpkiBO%2BHckrbjkdslnBxeIlPlpaFBX5cyi80Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwcNRwYCq%2Bnw8i8jH8q3AO7HGCXxOrIx%2FDefXvDJ1kjvkMzTbOnqoM9p%2Fnpq88HXybwLiZ5u28m242U%2FmAIDUzMVTEucdmhE9iGDOOnQBKmfwqhSti5RopG1GJZL8E3op2igfLMuTRa3SdsjI5ce326%2BYWYVcGOEHL04JwQ%2FXoVqrdkY0iZfKVX4hEE1DgSTmfsRwYAEcfzQmqjG8r6RnYK2Mdyo0n%2FQdo9xYhfqF1AGkXJAnAPPLKUbMcH5LZTIEU%2B3X9SXfRqjGOjdd3c6JzkVhYtP7Dyyf8y9AnzMunaJCb2NXb%2BBHq4tLxkghKxiahnacsN1bD8dTZ50HrVLN7tPsnws8zz7N6Y1HXzpcWZiRdYiZ2RrzqTn2O0%2BX7ekJIqy45gIeE4pH0JaORjFXuuNPPqe8M1kgT6%2BrC9bpDD0BP4YrD8Cf6HEgr%2FJsGFDOlMIUdeMFO2llVLm7dZ3HYNTmhsQzguoV0WRBslFlhtq1MLiQ63LFw%2FoAaA1DQZ68muYyVlm7YyS8nhEPNqOTG70fwuecyffzxNnRtX8d9tVvlIAmJsCJipi54e48XsvAZCIgvIqWt5IjGcZ3w8niKLUryrEP8CMRhtms%2BYCy4%2FBzJI1YnG%2FnAtoIUQF9kaIMx%2BoC0twjQFWj8LzzDptL%2B9BjqkAUEGSQDmsuvN2qi908fNkAMDsjR%2FVqwuXuXjVxklKLboEqhFceDo72iI2AttKB%2BYwZ%2BPSGTvlvqjnkgsOk9xRTwwZZFBP4hUeZ%2F3f4%2BF0ZbBkySjnaWDPDqCea3i27JgmB2EdQDt5hBV85TXBAPPBCn0jGmPN4qIWz38PaMdXPpwoqEt8KwLbogUtneSjVPfZ7qBJGvf9OBkOrVhNmcETsHUwXTB&X-Amz-Signature=867c5e30155abc6777dc58c5d5262be558aabc7c690cde5dbfb3e94a2c935330&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYQY3XQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2FSUU6iBm%2BmzHha2vnbW3wyAeTRqDzuFuwFE07JYbt3QIhAMPltT2zEpkiBO%2BHckrbjkdslnBxeIlPlpaFBX5cyi80Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwcNRwYCq%2Bnw8i8jH8q3AO7HGCXxOrIx%2FDefXvDJ1kjvkMzTbOnqoM9p%2Fnpq88HXybwLiZ5u28m242U%2FmAIDUzMVTEucdmhE9iGDOOnQBKmfwqhSti5RopG1GJZL8E3op2igfLMuTRa3SdsjI5ce326%2BYWYVcGOEHL04JwQ%2FXoVqrdkY0iZfKVX4hEE1DgSTmfsRwYAEcfzQmqjG8r6RnYK2Mdyo0n%2FQdo9xYhfqF1AGkXJAnAPPLKUbMcH5LZTIEU%2B3X9SXfRqjGOjdd3c6JzkVhYtP7Dyyf8y9AnzMunaJCb2NXb%2BBHq4tLxkghKxiahnacsN1bD8dTZ50HrVLN7tPsnws8zz7N6Y1HXzpcWZiRdYiZ2RrzqTn2O0%2BX7ekJIqy45gIeE4pH0JaORjFXuuNPPqe8M1kgT6%2BrC9bpDD0BP4YrD8Cf6HEgr%2FJsGFDOlMIUdeMFO2llVLm7dZ3HYNTmhsQzguoV0WRBslFlhtq1MLiQ63LFw%2FoAaA1DQZ68muYyVlm7YyS8nhEPNqOTG70fwuecyffzxNnRtX8d9tVvlIAmJsCJipi54e48XsvAZCIgvIqWt5IjGcZ3w8niKLUryrEP8CMRhtms%2BYCy4%2FBzJI1YnG%2FnAtoIUQF9kaIMx%2BoC0twjQFWj8LzzDptL%2B9BjqkAUEGSQDmsuvN2qi908fNkAMDsjR%2FVqwuXuXjVxklKLboEqhFceDo72iI2AttKB%2BYwZ%2BPSGTvlvqjnkgsOk9xRTwwZZFBP4hUeZ%2F3f4%2BF0ZbBkySjnaWDPDqCea3i27JgmB2EdQDt5hBV85TXBAPPBCn0jGmPN4qIWz38PaMdXPpwoqEt8KwLbogUtneSjVPfZ7qBJGvf9OBkOrVhNmcETsHUwXTB&X-Amz-Signature=da340af1db6f481a004899709fa0fe59d3fd84fec974ec18efe7e47e69668f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
