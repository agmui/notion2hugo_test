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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU5BLOAW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvf6%2BHdzCdA3P56FYxEGOVrIezySGBh%2BEiagaqctjBHAiEAxjI9sIlgWQTlhMdmZHKqXK0Bww33%2BmLfmBItfCQWCSoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJhVkFhQym0E26y%2BDSrcA1Z8O%2F8Py%2BYUyw3tcY%2FWkT7w%2BSCeeFtmFjAri%2FJhJsQg3bbJso%2F6gxynodJtYd8zJVtN%2FZ0o9zeoxdaWr9yAOT5OFdp37lMm%2BcupCyrEbUxtrCccGl2pTrnNMxqxrq6toSP%2Fq1ZzT82%2BKBxbc3vibJm2puKCZZi8BSQHB7H93gFY%2F2Luh23vXgFlKAi8dgJ5%2FeW8%2FvZmsL8XBB6SCnNjA%2FVa0P7pYSJrF1H7i%2FU5AAabAjbgDbcGDq8cw%2FtVMDRmBRXEg3HAIbVkSBJN2%2FIQKqpRsQC0i%2B2NxctZNLPO6zRIMlEh%2BbzrZEf%2FHnd0XiKWWGpkyuceFgvum9Vb7fZtE%2BYIYViSfxZV2n3GlHgqQKx1Kl8ToL6i4yEmVBqoZroTLINYsMTrYJjJvo54SUdi3ocWCd%2By136IbsnFLaHdhx1Dc0%2BUae4PaMS91cjvPaGIZOTkfpNumZ5w2LmsMZ8LJ4E0EiSxy8Du7T4hJkzVbapqQQM4woa0kleBsyD4CCjyAPfcME%2FmMSLScqVXoF5gblO5jehvF%2Bac7qifTZWRqfmVGCEgVJeU4rBu4zF0EhzrMaK0pY3UzvT8vdql8jW2eTNAdJSYHOyj%2FbnHBEpRvD9YWJdlHS96QUZJoXX7MM6q%2F78GOqUBa%2BG7CghOkYp90VSlJqMaKPeN0qhtJd0hkLMtkm5u4enRQCffnOq8KnJA0BD35Ba6L%2FukqP%2Ffd9bsyIZkHfQzOfxWQC8Xk4l04dj0jazmRJJjUxjG2OCMnkDaSX6U2jMGbRPcVSdqzEMH1daYaB8U336IUV3OwBRIvlhIR9axkgfJJgjzAeRbtiaBQIGe%2F9sNDS%2BMQ2oYIuYy%2BcR357cQMY2rIyyc&X-Amz-Signature=7cf546273a87ebce987e50dd75b3b3d0aca74dc666ef6993169f96d6ad908eff&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU5BLOAW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvf6%2BHdzCdA3P56FYxEGOVrIezySGBh%2BEiagaqctjBHAiEAxjI9sIlgWQTlhMdmZHKqXK0Bww33%2BmLfmBItfCQWCSoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJhVkFhQym0E26y%2BDSrcA1Z8O%2F8Py%2BYUyw3tcY%2FWkT7w%2BSCeeFtmFjAri%2FJhJsQg3bbJso%2F6gxynodJtYd8zJVtN%2FZ0o9zeoxdaWr9yAOT5OFdp37lMm%2BcupCyrEbUxtrCccGl2pTrnNMxqxrq6toSP%2Fq1ZzT82%2BKBxbc3vibJm2puKCZZi8BSQHB7H93gFY%2F2Luh23vXgFlKAi8dgJ5%2FeW8%2FvZmsL8XBB6SCnNjA%2FVa0P7pYSJrF1H7i%2FU5AAabAjbgDbcGDq8cw%2FtVMDRmBRXEg3HAIbVkSBJN2%2FIQKqpRsQC0i%2B2NxctZNLPO6zRIMlEh%2BbzrZEf%2FHnd0XiKWWGpkyuceFgvum9Vb7fZtE%2BYIYViSfxZV2n3GlHgqQKx1Kl8ToL6i4yEmVBqoZroTLINYsMTrYJjJvo54SUdi3ocWCd%2By136IbsnFLaHdhx1Dc0%2BUae4PaMS91cjvPaGIZOTkfpNumZ5w2LmsMZ8LJ4E0EiSxy8Du7T4hJkzVbapqQQM4woa0kleBsyD4CCjyAPfcME%2FmMSLScqVXoF5gblO5jehvF%2Bac7qifTZWRqfmVGCEgVJeU4rBu4zF0EhzrMaK0pY3UzvT8vdql8jW2eTNAdJSYHOyj%2FbnHBEpRvD9YWJdlHS96QUZJoXX7MM6q%2F78GOqUBa%2BG7CghOkYp90VSlJqMaKPeN0qhtJd0hkLMtkm5u4enRQCffnOq8KnJA0BD35Ba6L%2FukqP%2Ffd9bsyIZkHfQzOfxWQC8Xk4l04dj0jazmRJJjUxjG2OCMnkDaSX6U2jMGbRPcVSdqzEMH1daYaB8U336IUV3OwBRIvlhIR9axkgfJJgjzAeRbtiaBQIGe%2F9sNDS%2BMQ2oYIuYy%2BcR357cQMY2rIyyc&X-Amz-Signature=402c7a187b77695817383927d01e69bb4cc127c5ef64dd48970a7835dfc66a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
