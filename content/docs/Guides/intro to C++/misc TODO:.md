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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCH7XUCK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkMixh8y4tXk%2FF5EudricohN76ji6j5YQe%2FGUnaEI5cAiEAu9hKmBFlAKXexcpdxtpq5XrTfbZvJBePwMNOOC6ahUgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOQvY3qVAVsWqriASrcA620b%2B01pje4iSFAq2riKT1ODastH6118bHfCXE9EPTe7i9pci7f6ukz%2FX8Pf8%2F8Pev%2FP7os3iPwxNMbcBn3%2BjVNJfAVXxLf%2BUtBsUqRUPLWJqP0El%2FNEG69awy6aOVGucncIzuryw9LG0aCzFvP6Of8bSwgCe9sqJs67y%2FX7t7hV%2FMxD78VjCZsqPcjCDW7WYR%2Bbndj0%2BnrBnnTCD88tiIO7NeEDhhcVvf6WJBGaRje9p3krfT%2Bj0atFBh%2F48p0gRivUMeCKQ9Oeie%2BPFqDzdx%2BmimR86Ldarm6GLyKgZofiY9HM%2FJ4GDR%2F5aZ3JlCt51pCQ%2BDlM5nUyhDWwy75DF721V9pfD6Nk2JIOyihxaORJ0o9d8iNRIGg4HUoTyd1TZ45iSihAgtpFWW6tBGHbjd87MGxO0%2BwhQHB4oxLZ9JYP7FLQc8QATdogmabMoRyoRMBKuNiQEI1uj%2Baq%2F69139anKWSbNd0IWn5366BVT0KfNB7j5zwPdXe%2FheFdwVt%2BJFBqzUqDrXnzO67ZfFNmrpAE5es6g8y21j8Qf3vqtQZBHU3yc5h%2B4RcXNH9JCEdqkGCBT%2B0KFhCy5HodVNXuVq37ucjqyamo47aj1UQ2sIpZcUgK5eNmtgLKMGfMPz%2Bw8MGOqUB%2B3lfvTtXstclgoEk984WFEtUc41Y81TBRDbf7vB9YlPJQIN8reizwAgkiz2uL8hsbOsUH%2FDUr8xZnEWjyEFHKDYLLywSl3hxvC2nJ8toW%2F0capr81CsGeEdo4VXedMnM%2FQ%2FH2yofsvpS2RGWi8i7s4sA775OpeWPaLNNtK23bXIdWuBCbnbNtQnK%2FZrPc0mPypwURpLXBycyQx0F%2FBleRRZWDN%2F%2F&X-Amz-Signature=d66043297c3176ffef41b0083da0b3b6bc5071d8bea0b2e116312e8dfba4c109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCH7XUCK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkMixh8y4tXk%2FF5EudricohN76ji6j5YQe%2FGUnaEI5cAiEAu9hKmBFlAKXexcpdxtpq5XrTfbZvJBePwMNOOC6ahUgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOQvY3qVAVsWqriASrcA620b%2B01pje4iSFAq2riKT1ODastH6118bHfCXE9EPTe7i9pci7f6ukz%2FX8Pf8%2F8Pev%2FP7os3iPwxNMbcBn3%2BjVNJfAVXxLf%2BUtBsUqRUPLWJqP0El%2FNEG69awy6aOVGucncIzuryw9LG0aCzFvP6Of8bSwgCe9sqJs67y%2FX7t7hV%2FMxD78VjCZsqPcjCDW7WYR%2Bbndj0%2BnrBnnTCD88tiIO7NeEDhhcVvf6WJBGaRje9p3krfT%2Bj0atFBh%2F48p0gRivUMeCKQ9Oeie%2BPFqDzdx%2BmimR86Ldarm6GLyKgZofiY9HM%2FJ4GDR%2F5aZ3JlCt51pCQ%2BDlM5nUyhDWwy75DF721V9pfD6Nk2JIOyihxaORJ0o9d8iNRIGg4HUoTyd1TZ45iSihAgtpFWW6tBGHbjd87MGxO0%2BwhQHB4oxLZ9JYP7FLQc8QATdogmabMoRyoRMBKuNiQEI1uj%2Baq%2F69139anKWSbNd0IWn5366BVT0KfNB7j5zwPdXe%2FheFdwVt%2BJFBqzUqDrXnzO67ZfFNmrpAE5es6g8y21j8Qf3vqtQZBHU3yc5h%2B4RcXNH9JCEdqkGCBT%2B0KFhCy5HodVNXuVq37ucjqyamo47aj1UQ2sIpZcUgK5eNmtgLKMGfMPz%2Bw8MGOqUB%2B3lfvTtXstclgoEk984WFEtUc41Y81TBRDbf7vB9YlPJQIN8reizwAgkiz2uL8hsbOsUH%2FDUr8xZnEWjyEFHKDYLLywSl3hxvC2nJ8toW%2F0capr81CsGeEdo4VXedMnM%2FQ%2FH2yofsvpS2RGWi8i7s4sA775OpeWPaLNNtK23bXIdWuBCbnbNtQnK%2FZrPc0mPypwURpLXBycyQx0F%2FBleRRZWDN%2F%2F&X-Amz-Signature=ff2e0808b7f01e8ae663be7ebdc11ea6a4ff7114963cf404a6b012081d1ee0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
