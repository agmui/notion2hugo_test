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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YAX64X%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFMMyOuPlJylInXD%2FGK5wsZYB7sSS%2Bu8U%2BMEUdXKHptKAiEAzmQz6KOHRs06WsNWv7A63VoyMRTW5jnUqwmToIIFUkQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkNYEIjW%2FHPKYodISrcA81Gl6elJj021VkMib%2FTcY6mCV7eryaVxW3EYDfU%2BRgojRi62tgEp6yFZCXxSUOY02iyyiZG1Q%2Ff4DXuJDj5aT%2FdY%2FBEaeHj7aBsKrcgagcVvHUsPO2fNmtXnhyJMtJIPTegeNfmk2MHIHVkUqdpdsRJFibHh9K%2BVSx8jXz%2BIMBL%2BJlEh%2Bglbx0G5bS7Ws%2B2IW%2F890oHnAycqShm0qBrUEH2nbXt3Q40TAw%2FuZylOCxeL9JmAZKrQ4NbCvPyPvZAIQg78W3jzdvFOdiGhBHTMa7PeCZNfk0FmeWmsbvYIZbVArelMJVjZ8Bhr2o%2Br535m5Or6ZQKF5ljmikdjbUmqZh%2BrEk4VrZZc8KNLbzBlNYruZK2IeJiQVVezmXJ7nvdqfsAqoGsczChLGA93EqfocGTXEoe%2B%2FT9HwIEqiUX7sHWir73nArtIAYJ%2Bd0GEuRP3yZFwfZMEfyZOXAvbipYIfs90M41wgVfiGb4K%2BkMRh3dWm2ygIlo7QK4ycSgGWch0B1156RHFkk0%2BpqZhB%2BxY79OHhLV7kfJJPb9lZmAhDsl6t%2F9gc4ZfZvvc9ga5yRWlRaIhp%2B7vrAp9Ijx%2FIATkuG64VSjGpZqOdqKOfv5QPCVRW39EiQy5wEuT91AMMuLiL4GOqUB272ktXk%2FvhxCma3jqR%2Bcd1UuMjumIgkCNchPo494W2F%2FCen2KZv9DZOyvLRzG0lV9n9h7Yy7sSTS9cfLMx2Gm1czikSnY5HNztCo3fc2W4Auix4T9Bit4B73kx2i9395YVbxTF2%2FyORiQhyRhz6XqWAroxZC898FYPQyNJtbl8yqcEwV%2B9xlXr7OoBUK2cW7xa6fQ%2BGqa50xybTr5hBi6LuDBGw4&X-Amz-Signature=3bbb9bd999daea735be587d05563c0a6acfabb20fbf52cc97b1481b2cf41cb45&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YAX64X%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFMMyOuPlJylInXD%2FGK5wsZYB7sSS%2Bu8U%2BMEUdXKHptKAiEAzmQz6KOHRs06WsNWv7A63VoyMRTW5jnUqwmToIIFUkQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkNYEIjW%2FHPKYodISrcA81Gl6elJj021VkMib%2FTcY6mCV7eryaVxW3EYDfU%2BRgojRi62tgEp6yFZCXxSUOY02iyyiZG1Q%2Ff4DXuJDj5aT%2FdY%2FBEaeHj7aBsKrcgagcVvHUsPO2fNmtXnhyJMtJIPTegeNfmk2MHIHVkUqdpdsRJFibHh9K%2BVSx8jXz%2BIMBL%2BJlEh%2Bglbx0G5bS7Ws%2B2IW%2F890oHnAycqShm0qBrUEH2nbXt3Q40TAw%2FuZylOCxeL9JmAZKrQ4NbCvPyPvZAIQg78W3jzdvFOdiGhBHTMa7PeCZNfk0FmeWmsbvYIZbVArelMJVjZ8Bhr2o%2Br535m5Or6ZQKF5ljmikdjbUmqZh%2BrEk4VrZZc8KNLbzBlNYruZK2IeJiQVVezmXJ7nvdqfsAqoGsczChLGA93EqfocGTXEoe%2B%2FT9HwIEqiUX7sHWir73nArtIAYJ%2Bd0GEuRP3yZFwfZMEfyZOXAvbipYIfs90M41wgVfiGb4K%2BkMRh3dWm2ygIlo7QK4ycSgGWch0B1156RHFkk0%2BpqZhB%2BxY79OHhLV7kfJJPb9lZmAhDsl6t%2F9gc4ZfZvvc9ga5yRWlRaIhp%2B7vrAp9Ijx%2FIATkuG64VSjGpZqOdqKOfv5QPCVRW39EiQy5wEuT91AMMuLiL4GOqUB272ktXk%2FvhxCma3jqR%2Bcd1UuMjumIgkCNchPo494W2F%2FCen2KZv9DZOyvLRzG0lV9n9h7Yy7sSTS9cfLMx2Gm1czikSnY5HNztCo3fc2W4Auix4T9Bit4B73kx2i9395YVbxTF2%2FyORiQhyRhz6XqWAroxZC898FYPQyNJtbl8yqcEwV%2B9xlXr7OoBUK2cW7xa6fQ%2BGqa50xybTr5hBi6LuDBGw4&X-Amz-Signature=17fbc92855330dba5d262bf34044846c04ff9c55b7b57bd5a2d22f25c5060b09&X-Amz-SignedHeaders=host&x-id=GetObject)

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
