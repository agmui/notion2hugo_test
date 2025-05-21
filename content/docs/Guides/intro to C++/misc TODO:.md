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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLC7IZH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN7r0b2qTBjIVNt94oKZWVbbAI4JT3XsuaUxloEw0dwQIhAKsXWAClb4gklajL6kd436LbvZEMxzLQ%2Fogh8q%2BybbrzKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymnHm5SwuMlKwWN%2Fwq3APz18%2F%2BvKQIaEw8hMAGFth8QXbDAvZXJC%2FRNUvzDAx82Xzkqie2tjFiKgLf7TCM0LTu9JhcJ5ihw7uOGn1SBo5rPpQGcfR%2BqQBKUJE3Syi712it%2Bi%2BNw7d9bUjMuKhj9MnHqFKhmXSjx%2BmHHXqNKvdLkdOj2iNpw%2BnJ8%2BGNwNiKdzptEln18XvehG%2Fk%2BzIrQeGSCgPeA4%2FZz5sb3GGfhrT%2BIqXIe8Nt1GIkf%2F9dcIk2j9Ap06NNiAv4ebULlHGIv%2FF6WWcgr53po2i%2ByO%2Fgbfj24uWwlizH2H40fH9CsV0ToxMnmzwDXnrrKwakvr3SeLY56dg%2BRz5tbCE%2FhD16ELMFomjW5ip0IOtoFr%2BVrr7B2lpuxnPSVj4QIg9arwIY2jYQTvmZjc5KVi2%2FYhzYQazcKYQT14w1Y00zXb37V3Te3Jhrrf%2BVu3hhqiTaOE0u8bt3fyJtSHPrc4T4sv9tq4tCSUfmqKnhiT%2BnNm3Iav7nfO%2FJ5LsZM2w3R9DmPSvI9KUvhw9%2BH%2FPqJByQZe0YczvnTwxqvGMByVRpwfP133t0Rd5EDcTrNj3yEtv7WL1pL6JU80EemHemlml6emzCi6hxQiE9r6xwb9%2Fe0RBgo%2FJMaqx%2B1bKasJyYnC%2FJBDDArrXBBjqkAc80ArVX5oAlNNQWWV5e7zIYqkUDwljeFNpDxrC66wrK6KIiG1G%2B5DAos78Cb9ZrO2EXrmhGuOaDH4teLvA9GOjaL35sajU%2F0RdGWEs0hE2Rwl92utc3xyV3zzKSi2PwJKUsLe9im4phEdHw6cw4uIkubVkTX8lkndaL%2B3CWuZXAL%2BoXKbhDI3P2DOhBdwE6iIvgV%2BpF%2F7HwMA61F4JyRQqVlPp9&X-Amz-Signature=909068657eb110a06b6d9bbb51de37b746220409b0a0ea048647104ed0459186&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLC7IZH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN7r0b2qTBjIVNt94oKZWVbbAI4JT3XsuaUxloEw0dwQIhAKsXWAClb4gklajL6kd436LbvZEMxzLQ%2Fogh8q%2BybbrzKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymnHm5SwuMlKwWN%2Fwq3APz18%2F%2BvKQIaEw8hMAGFth8QXbDAvZXJC%2FRNUvzDAx82Xzkqie2tjFiKgLf7TCM0LTu9JhcJ5ihw7uOGn1SBo5rPpQGcfR%2BqQBKUJE3Syi712it%2Bi%2BNw7d9bUjMuKhj9MnHqFKhmXSjx%2BmHHXqNKvdLkdOj2iNpw%2BnJ8%2BGNwNiKdzptEln18XvehG%2Fk%2BzIrQeGSCgPeA4%2FZz5sb3GGfhrT%2BIqXIe8Nt1GIkf%2F9dcIk2j9Ap06NNiAv4ebULlHGIv%2FF6WWcgr53po2i%2ByO%2Fgbfj24uWwlizH2H40fH9CsV0ToxMnmzwDXnrrKwakvr3SeLY56dg%2BRz5tbCE%2FhD16ELMFomjW5ip0IOtoFr%2BVrr7B2lpuxnPSVj4QIg9arwIY2jYQTvmZjc5KVi2%2FYhzYQazcKYQT14w1Y00zXb37V3Te3Jhrrf%2BVu3hhqiTaOE0u8bt3fyJtSHPrc4T4sv9tq4tCSUfmqKnhiT%2BnNm3Iav7nfO%2FJ5LsZM2w3R9DmPSvI9KUvhw9%2BH%2FPqJByQZe0YczvnTwxqvGMByVRpwfP133t0Rd5EDcTrNj3yEtv7WL1pL6JU80EemHemlml6emzCi6hxQiE9r6xwb9%2Fe0RBgo%2FJMaqx%2B1bKasJyYnC%2FJBDDArrXBBjqkAc80ArVX5oAlNNQWWV5e7zIYqkUDwljeFNpDxrC66wrK6KIiG1G%2B5DAos78Cb9ZrO2EXrmhGuOaDH4teLvA9GOjaL35sajU%2F0RdGWEs0hE2Rwl92utc3xyV3zzKSi2PwJKUsLe9im4phEdHw6cw4uIkubVkTX8lkndaL%2B3CWuZXAL%2BoXKbhDI3P2DOhBdwE6iIvgV%2BpF%2F7HwMA61F4JyRQqVlPp9&X-Amz-Signature=f65f3fba9b736e5f112fb903b2ca50521f53610c698996771237bdfd518b7893&X-Amz-SignedHeaders=host&x-id=GetObject)

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
