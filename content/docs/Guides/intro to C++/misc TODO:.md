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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJW5UZH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDk5bpgFkjDdNGfS35Vs0nrnEotPYfnhKUyydnvmfpATQIgL2T1sHovMASU8X4Zh8a1NCz5WXes0PtmBAdXfNhQ2icqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZrkFsLq7UV7r%2Fm%2BSrcAxb7kH1INAfXIahnAIrJnUXDGWbz9p6FW5Jh2yqaUSq7MY6JrONVDJONNQplQBszOjrV2edfxTAoeXlfU5c%2BY8PpKk9m%2BI2HZZ3I6YMUTgqatLrQHWVpmp09ScSS3JdBORA%2FGaubeD47GeCMFUhe9OOy%2B7gCTS9neNYcg9r6yVoNG7QE7SZfWNsfrZGJuoegoR7es6%2Fs%2Ftvd7Ib%2F1o%2FojHJ6Axfkt5rvDjEFyPfYbPu81SmeUyvnk%2BnD9LqPwOQTUxgJxlnbb8937yde%2FMX7cB3HpHKs2MxPGIyjGKl%2FLRazoDp0d24FyejC%2Ba4MLvcrIyfM54xACLaNMdV3NNV3hO0LoLAl%2B9DFyoCVt7nQSl3Hj30x88PBqZy%2FYge8gEXAalZfjVxV2OFoLrH1Pfnn1teBzp%2FDKL5TCCuggxI48OF2xjKHGW2BmUn4wXXOlHFJf8Wk4yJWvatNBYuKWBjJ6lFgF454LhNs6HYsrsb4k1BO69fAjdsM7NEExYykVnH5uwO7wvCAVsuVtMxOnw5RKCdkQyCUEdphBKLQkiiXmHsZxK4pMkZ82KnxrGrPuNmtxqt0xs7LTVI3Aem%2B39Ed4Yc65CJbpq1b5onrhMvG43okp6pZU3NQNmLprtVxMMe93r8GOqUBZx2yDfTIvp5U1ZUR%2BRNqRga2J4Yfh%2FWPrbQhd2Pb2wv8C5LoIhWvB0Q5SkLJsHRREz7Svj8TLAd8HOWfvObfrLhtU0AYaJizyJln7DoknJ5J9xu%2FaUMwPFbEjGUFuY4lRQ%2BbS4HiKEYv8c8Gsu95lnvaNuGs3mqk8Ho1Lt%2BtnArKSuzsTMrtAZ%2Fe9wT83rRhiMBd7xh1%2Bc7LA8ULkL%2ForyYpa1ql&X-Amz-Signature=50a9a33f9db4db4c806f351c11b6ba6aae9360a4d82ab742348199d1c98221d2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJW5UZH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDk5bpgFkjDdNGfS35Vs0nrnEotPYfnhKUyydnvmfpATQIgL2T1sHovMASU8X4Zh8a1NCz5WXes0PtmBAdXfNhQ2icqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZrkFsLq7UV7r%2Fm%2BSrcAxb7kH1INAfXIahnAIrJnUXDGWbz9p6FW5Jh2yqaUSq7MY6JrONVDJONNQplQBszOjrV2edfxTAoeXlfU5c%2BY8PpKk9m%2BI2HZZ3I6YMUTgqatLrQHWVpmp09ScSS3JdBORA%2FGaubeD47GeCMFUhe9OOy%2B7gCTS9neNYcg9r6yVoNG7QE7SZfWNsfrZGJuoegoR7es6%2Fs%2Ftvd7Ib%2F1o%2FojHJ6Axfkt5rvDjEFyPfYbPu81SmeUyvnk%2BnD9LqPwOQTUxgJxlnbb8937yde%2FMX7cB3HpHKs2MxPGIyjGKl%2FLRazoDp0d24FyejC%2Ba4MLvcrIyfM54xACLaNMdV3NNV3hO0LoLAl%2B9DFyoCVt7nQSl3Hj30x88PBqZy%2FYge8gEXAalZfjVxV2OFoLrH1Pfnn1teBzp%2FDKL5TCCuggxI48OF2xjKHGW2BmUn4wXXOlHFJf8Wk4yJWvatNBYuKWBjJ6lFgF454LhNs6HYsrsb4k1BO69fAjdsM7NEExYykVnH5uwO7wvCAVsuVtMxOnw5RKCdkQyCUEdphBKLQkiiXmHsZxK4pMkZ82KnxrGrPuNmtxqt0xs7LTVI3Aem%2B39Ed4Yc65CJbpq1b5onrhMvG43okp6pZU3NQNmLprtVxMMe93r8GOqUBZx2yDfTIvp5U1ZUR%2BRNqRga2J4Yfh%2FWPrbQhd2Pb2wv8C5LoIhWvB0Q5SkLJsHRREz7Svj8TLAd8HOWfvObfrLhtU0AYaJizyJln7DoknJ5J9xu%2FaUMwPFbEjGUFuY4lRQ%2BbS4HiKEYv8c8Gsu95lnvaNuGs3mqk8Ho1Lt%2BtnArKSuzsTMrtAZ%2Fe9wT83rRhiMBd7xh1%2Bc7LA8ULkL%2ForyYpa1ql&X-Amz-Signature=5ea8aed6f7bab26cf7195b89f79b4e57e0732d130b0ea475e14b40c88c51cd11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
