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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXL2F4H6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtkWigTltIkMKxKqFSPumULLrnmSs%2B2dRDdZ9A3s5KogIgS0bifotn8elHlKw9kDOBiotWasG74LE6womokWzwMHkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDE%2BPYrG8tSH%2FLjbQZCrcA%2FI%2B6WEvTyr4Q6JOzo2GHLwZ9iPrLn2n25V5RbaK1imMnORCJJJ%2F2Msw%2FDbHXYltLbksPpXDoapDvSC8sK56DXW7dHmz2UFuqrVfyvEVFKzQW1BWoeojw8qvhXuwQET62mQ%2FdLJptvU%2FFVLcbsRgHoEQnutNSZhtl5uSew1ZHgBfwUaVz4h7uk%2BXmiy1OOAcVRLAiYUjWoOYI7AYwq6tunaqRR5XH%2BrdmO2LaZSOJqOcFOIYYGWe4SBVAptkZLi65L9%2Be6m%2FrrUoQzoE9ej3jYqXEA1zFvt7En%2FwzZcGmmsE5bFXHsFFfv%2FMt78%2FkbW9p1z%2FmIiB8Rad5YhUNIzQ%2FVhdAz1Bxa8o1mKLAiU9yVYGw2Qm6OG%2BXWwi%2FrjQeBtEQgaP99W7I4YDNX9I8Vwx6PLW2MHwpTyb%2B3Ms7D4oxlYanAw8Fsn7H8ovCnu3erDs2vEagXOxFA2dstMoV9mu4CU8u9vIsy61GP5xULmfeIoocE599yq%2FvlIZ4vYgrh8lH%2F%2FF%2BCCHS6K4f7wWEIvS5eJUcW3DRyI0cn66kJcBSAYvKE1N6mGg9BVaxBQaRX35cQtvwYAJ9MNtsNMgm9CEAEveD%2BH%2FLnTGH%2F7%2FL%2FyjH1JObhrVReZhIPrgEeWkMJfwwr8GOqUBQGqlw5za1uAWBriejeCbQx9PN3Q68k6orUWJyxevxIEG3HFIJi%2Fs%2FSVvmmeubGeo%2FONXW%2BcrWTVKxRjQn2tnlsvjFSeNbq3Nrp7wXrtAQfDBH9JijOWZlBgcw%2BHP5Z0qoehUVejKQnoBLNeeSChw416io65iKdIf%2BlbakXLmiEPaAnw2KtzrvT9FT1U2Iwiww89z5ryAX8%2Fk3ttOLVMw6n5AhZtQ&X-Amz-Signature=173715cd2019dafff62622e01a4e0c147ac80ff1416b2d760cfb4e1c2010611b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXL2F4H6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtkWigTltIkMKxKqFSPumULLrnmSs%2B2dRDdZ9A3s5KogIgS0bifotn8elHlKw9kDOBiotWasG74LE6womokWzwMHkq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDE%2BPYrG8tSH%2FLjbQZCrcA%2FI%2B6WEvTyr4Q6JOzo2GHLwZ9iPrLn2n25V5RbaK1imMnORCJJJ%2F2Msw%2FDbHXYltLbksPpXDoapDvSC8sK56DXW7dHmz2UFuqrVfyvEVFKzQW1BWoeojw8qvhXuwQET62mQ%2FdLJptvU%2FFVLcbsRgHoEQnutNSZhtl5uSew1ZHgBfwUaVz4h7uk%2BXmiy1OOAcVRLAiYUjWoOYI7AYwq6tunaqRR5XH%2BrdmO2LaZSOJqOcFOIYYGWe4SBVAptkZLi65L9%2Be6m%2FrrUoQzoE9ej3jYqXEA1zFvt7En%2FwzZcGmmsE5bFXHsFFfv%2FMt78%2FkbW9p1z%2FmIiB8Rad5YhUNIzQ%2FVhdAz1Bxa8o1mKLAiU9yVYGw2Qm6OG%2BXWwi%2FrjQeBtEQgaP99W7I4YDNX9I8Vwx6PLW2MHwpTyb%2B3Ms7D4oxlYanAw8Fsn7H8ovCnu3erDs2vEagXOxFA2dstMoV9mu4CU8u9vIsy61GP5xULmfeIoocE599yq%2FvlIZ4vYgrh8lH%2F%2FF%2BCCHS6K4f7wWEIvS5eJUcW3DRyI0cn66kJcBSAYvKE1N6mGg9BVaxBQaRX35cQtvwYAJ9MNtsNMgm9CEAEveD%2BH%2FLnTGH%2F7%2FL%2FyjH1JObhrVReZhIPrgEeWkMJfwwr8GOqUBQGqlw5za1uAWBriejeCbQx9PN3Q68k6orUWJyxevxIEG3HFIJi%2Fs%2FSVvmmeubGeo%2FONXW%2BcrWTVKxRjQn2tnlsvjFSeNbq3Nrp7wXrtAQfDBH9JijOWZlBgcw%2BHP5Z0qoehUVejKQnoBLNeeSChw416io65iKdIf%2BlbakXLmiEPaAnw2KtzrvT9FT1U2Iwiww89z5ryAX8%2Fk3ttOLVMw6n5AhZtQ&X-Amz-Signature=0d7a8e2463a1058773be323cb50d262c01d6e7e828feb57965b95b57a4eb6bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
