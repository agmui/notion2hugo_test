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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646G5Y2T4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFSY66CXnlVRC52pOWhn1LRG5TEfkmB2BEM7H%2FCfvmHwIgAK59b9yGFgmzS96xt8OHHBwfAShXdd%2FbJRyDH1co1bQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxYTU3F4uCHFQJMpCrcA8Aj3fFgjrfUKSk9sBlDa1LfHh5D3MMLRnXMYM%2B19G%2BoNWz1XZ7Qb7gdO2rQ5Nz57xh%2Fzj%2FBKSvllyC0gt%2B6NFjNQE0CaatFO2yUh%2FTMMZ9yRxiRuwvh1%2BAeoKq8US8QFoU2TxSrkPSV9uZk8d9MQiLL5wrRCLvV3VAp3PvO446gvP69g6WozgnuYS9pwSLcucrYuHBS%2BEOTlUx98nnInc3%2BXy1ky%2BM8Pr3gJd%2Boo80aGStmEbWp7Ee%2FV46LnaUKNZjiquuV7%2FOYwrYTCRhxytyRbXf9jM7bTYk68eGYkxT%2BpBjAfhE2YAJI1KXcH6hYfRM7Ppp0IvYb7PTOD27rCpqO2ciYGWSx6a2w%2BNHSUMmI4UzMW7Mg9O2H5o9HXqK%2BV1wO4kdpW9kaXsBPh8DG35Tl%2Fl8GozeOPbk0P1qBjvyzga0dzXkXd6bF6jaLU0A9bZZG3CHxZ62RbvU04In1cRPZi7AVwVA%2FqSkEI9AiLRCUESs5IrWQNdasC17lvqG7ddwRC%2FVCNsa6%2BUFqYqnF1szm0zV8Qdy5pr3KJq4z7ZcRrMlcIO6EpwCl8Q1wCHh%2BtzrqLtRKrqveU%2FZCqLS7nrrwHU9bPw3HETGza9ENxiv3DGOjS9Y%2FcsKLnFYVMOS0zL4GOqUBaqxRg2BIPYaSwYLpWrkOvmJeCQrvfHurWIqWHBS23%2BJtpd27db%2BJbSGeLNPqy%2BoRG%2F9sX0LColO6KBFY9nVBbWth4zlnmQH66fDMdZHEU1hj%2FeXxbVJoR4bp%2FNkgMUwVOTDDgPrLlRZmnps%2F7nNzBgsALi%2BXZUpos6NjYLe3Dszliliu3xLyYKAoW4AunE57sJ7Jlzpcban%2BEaBQA4ztZiz5yif4&X-Amz-Signature=1595961c07cad43436e3629e2bc28e8633575ac99131eacd8a00eb4841f29c75&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646G5Y2T4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFSY66CXnlVRC52pOWhn1LRG5TEfkmB2BEM7H%2FCfvmHwIgAK59b9yGFgmzS96xt8OHHBwfAShXdd%2FbJRyDH1co1bQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxYTU3F4uCHFQJMpCrcA8Aj3fFgjrfUKSk9sBlDa1LfHh5D3MMLRnXMYM%2B19G%2BoNWz1XZ7Qb7gdO2rQ5Nz57xh%2Fzj%2FBKSvllyC0gt%2B6NFjNQE0CaatFO2yUh%2FTMMZ9yRxiRuwvh1%2BAeoKq8US8QFoU2TxSrkPSV9uZk8d9MQiLL5wrRCLvV3VAp3PvO446gvP69g6WozgnuYS9pwSLcucrYuHBS%2BEOTlUx98nnInc3%2BXy1ky%2BM8Pr3gJd%2Boo80aGStmEbWp7Ee%2FV46LnaUKNZjiquuV7%2FOYwrYTCRhxytyRbXf9jM7bTYk68eGYkxT%2BpBjAfhE2YAJI1KXcH6hYfRM7Ppp0IvYb7PTOD27rCpqO2ciYGWSx6a2w%2BNHSUMmI4UzMW7Mg9O2H5o9HXqK%2BV1wO4kdpW9kaXsBPh8DG35Tl%2Fl8GozeOPbk0P1qBjvyzga0dzXkXd6bF6jaLU0A9bZZG3CHxZ62RbvU04In1cRPZi7AVwVA%2FqSkEI9AiLRCUESs5IrWQNdasC17lvqG7ddwRC%2FVCNsa6%2BUFqYqnF1szm0zV8Qdy5pr3KJq4z7ZcRrMlcIO6EpwCl8Q1wCHh%2BtzrqLtRKrqveU%2FZCqLS7nrrwHU9bPw3HETGza9ENxiv3DGOjS9Y%2FcsKLnFYVMOS0zL4GOqUBaqxRg2BIPYaSwYLpWrkOvmJeCQrvfHurWIqWHBS23%2BJtpd27db%2BJbSGeLNPqy%2BoRG%2F9sX0LColO6KBFY9nVBbWth4zlnmQH66fDMdZHEU1hj%2FeXxbVJoR4bp%2FNkgMUwVOTDDgPrLlRZmnps%2F7nNzBgsALi%2BXZUpos6NjYLe3Dszliliu3xLyYKAoW4AunE57sJ7Jlzpcban%2BEaBQA4ztZiz5yif4&X-Amz-Signature=02a41e070689beb51a0999387638b977b9a3c5ebde4a70c06e4be6444133ace6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
