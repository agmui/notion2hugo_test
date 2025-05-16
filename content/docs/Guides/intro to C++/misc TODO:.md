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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJKLZOU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXcunWw3FQ7IA0WaabNpgr8EJxzYbhBiWWjMCm4GKVqAiACPUMnGTAYCSmbzmJAr9Zt%2B5jXkyDEnDYHTGR%2Fjn%2BjYSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMvhAuTA1GgO%2BCHdNEKtwDVjxw1aEdlp2U7ghne%2B%2FFNJJlJajVfL0pl4uQ7h6UfG9Fbtxo1ttT2ofn2ZgjYNKYGk84wjorSpR03Q%2FQScj%2FrwLX%2FJdy%2FepJo2IWy5UqC3XU%2FN20cA6qubeonOUP2hxtqG97YSR8jYcRsut%2Fd4i1Ohup5uD%2F1jn6zyu4T2As%2B8voxxIKAuBREJvuwz%2BBgZCctGpA2GRS5rnNFXYQXN7wS%2BJFBBGsI1qvTxeE9KCTu8rc%2BFDrsz0meNUlcAz6PgGSHIlv%2FSSxNxEp3%2FUZ%2Fzvy5wTCNv8rDKfFw1nYI%2FZjwkwWku1KmjNwIqJVZKjErendI4X%2Fw%2BlVefh7CMK8Ex5w9xthstY%2FQygybJy8hU%2FWkc2ydEJsFsKS%2ByJSed96qKX0g6wlvEkgpGYVMTqddP9rybm6U5lPJF5evhI1119k8j%2BUYWPT%2Bpchnutq2oANbyGLruIisuktQlIGEWi9DWvoYzToamzCvfnHLSOhcosa72cHdDMltfFYvQXo5KwuTqyvJCfXM90j8wpTxufS2H724%2BZ8JR0Ygu8zK6cQ3O%2FT3SBkjz9pXQGOf0XbF4Ahr8ZG3vLf%2FP018WqmbznM1omURyn3Yaaupnd1HC%2BhLgkqcnW5tlEDRhoCfD56s2Aww4abwQY6pgHa5obsr9EMAnQ7Qlt86o6J%2BeeSYkNAtfjR0XtFReWr0KPrezfiY9kMe0Jz%2BMUNsuxI0n8EpW%2FYxgISB25la%2FXhPGNmtD8ucOB%2FcOJk2f300u1oHXPo737%2B9in8%2BzbYJ9CPzOJ7hGhwxGEhGXrzEm8j33zQ1lux%2Bv7ADNl%2BQjgDoBEQCdozyF6Wxkj3SqzJKC0f6%2BIWtvkeeqctoMZhQX%2BcBZ6SI%2FIq&X-Amz-Signature=1da3cb5387018f9d1c93814173ed72a416edbfb2aa1206294ac9975fd216c45f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJKLZOU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXcunWw3FQ7IA0WaabNpgr8EJxzYbhBiWWjMCm4GKVqAiACPUMnGTAYCSmbzmJAr9Zt%2B5jXkyDEnDYHTGR%2Fjn%2BjYSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMvhAuTA1GgO%2BCHdNEKtwDVjxw1aEdlp2U7ghne%2B%2FFNJJlJajVfL0pl4uQ7h6UfG9Fbtxo1ttT2ofn2ZgjYNKYGk84wjorSpR03Q%2FQScj%2FrwLX%2FJdy%2FepJo2IWy5UqC3XU%2FN20cA6qubeonOUP2hxtqG97YSR8jYcRsut%2Fd4i1Ohup5uD%2F1jn6zyu4T2As%2B8voxxIKAuBREJvuwz%2BBgZCctGpA2GRS5rnNFXYQXN7wS%2BJFBBGsI1qvTxeE9KCTu8rc%2BFDrsz0meNUlcAz6PgGSHIlv%2FSSxNxEp3%2FUZ%2Fzvy5wTCNv8rDKfFw1nYI%2FZjwkwWku1KmjNwIqJVZKjErendI4X%2Fw%2BlVefh7CMK8Ex5w9xthstY%2FQygybJy8hU%2FWkc2ydEJsFsKS%2ByJSed96qKX0g6wlvEkgpGYVMTqddP9rybm6U5lPJF5evhI1119k8j%2BUYWPT%2Bpchnutq2oANbyGLruIisuktQlIGEWi9DWvoYzToamzCvfnHLSOhcosa72cHdDMltfFYvQXo5KwuTqyvJCfXM90j8wpTxufS2H724%2BZ8JR0Ygu8zK6cQ3O%2FT3SBkjz9pXQGOf0XbF4Ahr8ZG3vLf%2FP018WqmbznM1omURyn3Yaaupnd1HC%2BhLgkqcnW5tlEDRhoCfD56s2Aww4abwQY6pgHa5obsr9EMAnQ7Qlt86o6J%2BeeSYkNAtfjR0XtFReWr0KPrezfiY9kMe0Jz%2BMUNsuxI0n8EpW%2FYxgISB25la%2FXhPGNmtD8ucOB%2FcOJk2f300u1oHXPo737%2B9in8%2BzbYJ9CPzOJ7hGhwxGEhGXrzEm8j33zQ1lux%2Bv7ADNl%2BQjgDoBEQCdozyF6Wxkj3SqzJKC0f6%2BIWtvkeeqctoMZhQX%2BcBZ6SI%2FIq&X-Amz-Signature=135b562798f43aff0e9eeb7e5f1a82fa2d6aa8601b0249e4678e8c461063894a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
