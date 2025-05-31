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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUUSEAL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWq9F3WQ7i%2BhUHOm24tYlmSUlLGQ44Cj2uY6frXj%2FvVgIgWhMqL%2Fs%2FxJ9t9eKHlydSkecp4w922bup2ayRcqBmWfAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRn%2Bbg8egDjsxijuSrcA6LViU%2F1Wz7%2FqCzVp6qWPbBaqivKrH6jSgw5cAF9wl%2FN6svAqjKqkLFtYJimXsoSpnopR7yV8Et89mSsNObsqRC1lIeWr7R1aMd2J%2F5Kmu%2BKn4%2BL8c%2BAbH5mMqf2XCFrIwK6oMEBeNzP%2BzZEezbCs8VJiVUPo%2BUX%2FvzvH88H72pbNriu0OYC7IGVK4zg3njMGAkqT8qgyuKZA1DVGx5CX4y3%2FWftOG5s0DBHhCgVbvMOs%2FcmljlvRnUooE2TQjgQgdmNvlHxUs%2FSgXb85yX1gZVTaDdhGX5ByLLDxVsPEd%2BXuLqw014Jx29MDbqgmBKyLyLtOLSv1RICLtoTXqeJK0Zd%2FFXZf%2F0dB4ybm5kslZyMczTFrK0fT2tOdCxjDiYn61ID45K7pNSKLueUhFy43sBy9f9WcFEMZ4%2B%2Bvh%2Fadhsheq8CjeoLonTiHkYHqlG5QOloPsZulRCfx3xUiic4q2jN0oKqaalslUg6ktPGddLFHSh09VoFQ%2BrVC9AUgrrrRchx0C6xMPGG1FNMie%2FYuebD2Ox2OZDh4VKyLFeRIQvhkXC%2BaVOn7B1htluIrfjK30T5AWJOkusTtvZ7VwU%2FL6CeJmtHqAsGo%2BHnWshXcCkiAZMzhrET9LQ%2Fsop1MPmM6sEGOqUBaukwPi7k5qennGg1Zvw10vK9XYbXFZiyMtWE%2FKa8eZdiS81cSKHQwHfdITySbdvOKV%2BRGlcHMvoarhLNpXX%2BgvNkdaefLVaSZBhZbolcFf%2Fwm%2BbgwSzfe3x8gUQ641g3Vf9mJ%2F3MSsXwbOoj747TBaPULGUXhIvVdAvuGmoVw32w7PbbvwzVra%2FRaG8i%2FRh6LztD1R%2FhBvzbV3jEPA0rcgzfgWw9&X-Amz-Signature=acadde437361e1623ea9e922e8fb558f3010fcd0423d315d78cf3ef43b14295d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUUSEAL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWq9F3WQ7i%2BhUHOm24tYlmSUlLGQ44Cj2uY6frXj%2FvVgIgWhMqL%2Fs%2FxJ9t9eKHlydSkecp4w922bup2ayRcqBmWfAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRn%2Bbg8egDjsxijuSrcA6LViU%2F1Wz7%2FqCzVp6qWPbBaqivKrH6jSgw5cAF9wl%2FN6svAqjKqkLFtYJimXsoSpnopR7yV8Et89mSsNObsqRC1lIeWr7R1aMd2J%2F5Kmu%2BKn4%2BL8c%2BAbH5mMqf2XCFrIwK6oMEBeNzP%2BzZEezbCs8VJiVUPo%2BUX%2FvzvH88H72pbNriu0OYC7IGVK4zg3njMGAkqT8qgyuKZA1DVGx5CX4y3%2FWftOG5s0DBHhCgVbvMOs%2FcmljlvRnUooE2TQjgQgdmNvlHxUs%2FSgXb85yX1gZVTaDdhGX5ByLLDxVsPEd%2BXuLqw014Jx29MDbqgmBKyLyLtOLSv1RICLtoTXqeJK0Zd%2FFXZf%2F0dB4ybm5kslZyMczTFrK0fT2tOdCxjDiYn61ID45K7pNSKLueUhFy43sBy9f9WcFEMZ4%2B%2Bvh%2Fadhsheq8CjeoLonTiHkYHqlG5QOloPsZulRCfx3xUiic4q2jN0oKqaalslUg6ktPGddLFHSh09VoFQ%2BrVC9AUgrrrRchx0C6xMPGG1FNMie%2FYuebD2Ox2OZDh4VKyLFeRIQvhkXC%2BaVOn7B1htluIrfjK30T5AWJOkusTtvZ7VwU%2FL6CeJmtHqAsGo%2BHnWshXcCkiAZMzhrET9LQ%2Fsop1MPmM6sEGOqUBaukwPi7k5qennGg1Zvw10vK9XYbXFZiyMtWE%2FKa8eZdiS81cSKHQwHfdITySbdvOKV%2BRGlcHMvoarhLNpXX%2BgvNkdaefLVaSZBhZbolcFf%2Fwm%2BbgwSzfe3x8gUQ641g3Vf9mJ%2F3MSsXwbOoj747TBaPULGUXhIvVdAvuGmoVw32w7PbbvwzVra%2FRaG8i%2FRh6LztD1R%2FhBvzbV3jEPA0rcgzfgWw9&X-Amz-Signature=4183d3fd0531e3df5a25f914c0b27c551017f122db35b6a0b6f2668a84562439&X-Amz-SignedHeaders=host&x-id=GetObject)

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
