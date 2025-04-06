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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GICA4GY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh3MUc431TW4t7lndr8e27Aus6eNVWmN8%2F%2FqxNVvyzXAiBH4UEBt5LC4yqqRKShsKqhVmtp0vw5LQnPCn9txTGWtyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMw5p1TNUZYVOt9%2B5JKtwD%2FGoxqJFpJe2HuzNdkYUQHXj43ljVKKMo%2F%2FeUEZp5pso2FZ8cUJjO65vU4%2F3K2uRBGiimLzQU%2Bow2DMmaOm%2Frdsy3qt4jXebK21ar0e6XIsGgh84CEiJUXUK%2Btyoryq49BeKuzfZ86zadX4xVQfYMMQhTv3nkwj%2BRPoVEjm0L9gNtKr%2FQx%2F4ulfLQhgoXc69GQKcTXVwTIKRH6Vs%2FhpRwgMrlZg4S3yOle2%2Fgd0IJQv1wSLDmfirhVEMA4HI7%2FpJsWaAPFTIZWyn69IYlyh3%2BqL26DSYYNYy4igI3%2B43bNsXXiMjIyvYVCPXIDe%2BtF0erOdnzMUv4yI7eUOZKuMzGQY0In%2FT4SxvOKVMxnmOz8z5RadwaG7Ag6Dl4xQJHLyoFz8CaEPMffNxYoNm0l6Nr0Q8NRfe7BxQAGXSVLj%2FzNwZwPj3ppifPJqoCTtQGiL1WNVqehIJG5rvJ5CN45ZPn%2BM1RBpydvPzwxOy0UVqv9fbXAiENnsOy1z9wJUUwiPN8Xpw%2B4pyxWLWqiLpQtlSd2qigHBbUhbjKF5N7blSd97lZA%2BiFtsRPhK2dAKBqSLI4UM%2Bj5fMVVVNfrIMuqEtHLKur16ECKI5pu%2BRrpwhsHn3vaBtIX74FS2OrpHwwg4DIvwY6pgGPrOrWOMzWoZ2F1QAbD73u%2FOlcJkKWI1KA0efsasBocj0jQa0vO10%2FqmRyJB7t1gwpc2VLed3h8cyQvdrHIbbTF16qvw74QbLxqCHz4O3OHNCcJkxhUXOw%2FPfrEfFhXsc72rFMdIoPc1CiaAQ1pbgfvv7xDMsrkWmDLsLx0voxY7Lxb8ppn9AHwJS7eoXS5UF8pHII0d5D8eZvZa6KPr9Ki0w3GF1s&X-Amz-Signature=8ed2bef7a8716316e2d3da80a5013b358048e8ea5c75235f3b4a7f1281196ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GICA4GY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh3MUc431TW4t7lndr8e27Aus6eNVWmN8%2F%2FqxNVvyzXAiBH4UEBt5LC4yqqRKShsKqhVmtp0vw5LQnPCn9txTGWtyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMw5p1TNUZYVOt9%2B5JKtwD%2FGoxqJFpJe2HuzNdkYUQHXj43ljVKKMo%2F%2FeUEZp5pso2FZ8cUJjO65vU4%2F3K2uRBGiimLzQU%2Bow2DMmaOm%2Frdsy3qt4jXebK21ar0e6XIsGgh84CEiJUXUK%2Btyoryq49BeKuzfZ86zadX4xVQfYMMQhTv3nkwj%2BRPoVEjm0L9gNtKr%2FQx%2F4ulfLQhgoXc69GQKcTXVwTIKRH6Vs%2FhpRwgMrlZg4S3yOle2%2Fgd0IJQv1wSLDmfirhVEMA4HI7%2FpJsWaAPFTIZWyn69IYlyh3%2BqL26DSYYNYy4igI3%2B43bNsXXiMjIyvYVCPXIDe%2BtF0erOdnzMUv4yI7eUOZKuMzGQY0In%2FT4SxvOKVMxnmOz8z5RadwaG7Ag6Dl4xQJHLyoFz8CaEPMffNxYoNm0l6Nr0Q8NRfe7BxQAGXSVLj%2FzNwZwPj3ppifPJqoCTtQGiL1WNVqehIJG5rvJ5CN45ZPn%2BM1RBpydvPzwxOy0UVqv9fbXAiENnsOy1z9wJUUwiPN8Xpw%2B4pyxWLWqiLpQtlSd2qigHBbUhbjKF5N7blSd97lZA%2BiFtsRPhK2dAKBqSLI4UM%2Bj5fMVVVNfrIMuqEtHLKur16ECKI5pu%2BRrpwhsHn3vaBtIX74FS2OrpHwwg4DIvwY6pgGPrOrWOMzWoZ2F1QAbD73u%2FOlcJkKWI1KA0efsasBocj0jQa0vO10%2FqmRyJB7t1gwpc2VLed3h8cyQvdrHIbbTF16qvw74QbLxqCHz4O3OHNCcJkxhUXOw%2FPfrEfFhXsc72rFMdIoPc1CiaAQ1pbgfvv7xDMsrkWmDLsLx0voxY7Lxb8ppn9AHwJS7eoXS5UF8pHII0d5D8eZvZa6KPr9Ki0w3GF1s&X-Amz-Signature=919aa0e5980437096bb4fe946918027ab0d8bc516be735c480543641ffb40b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
