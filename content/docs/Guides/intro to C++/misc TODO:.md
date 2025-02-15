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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHZR73G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID6n540o1TvReoogqVfA0mSdNJK2RIeWxSiFDlcLuTB5AiEAjDqHl%2Bobz9qmB70yP0%2FkJUZh%2BE6QkkCd8zRMZg8vpOAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJcVtoMp5PTT9eHDEyrcA%2B10fBryPcgxBbs6k3E2nJHr5VyBlBMWB1TJE%2Fqy%2FLBh9MOHXp1cFLTazlnqpxWcECVEz6HeCwRRvuP7RIIJP63GjeJqB%2Bari3bsk5IVff8L8X0wgE1VfcYa0XYFh5heTM9CDW103pOwQSkzlslaqjFhRbx9vH8K88SiZAjp%2FDec044vcEUhXoofIYc5cGJhrQdlBFTBynH4ugcZYN%2Fut%2BaATp%2FFYMAMaL1w92jpRo3rrRp16n6JI4QJh9UK0m%2F8QlpwBKysaHM3R77pL5ZJVGGB1mKulSbRGEGC8TqFs6agLAMqQXTZPYDe5MHcYTRdAx2lr9uyNIPfEvZ7iIUJ9k80CrnNFOQM1lbivyZAY90mucPL5W2ZotyKtmjS4KxCiOYTCVl6AK25ydKvG95Fo6SHv8yNDgP4W5UgHjLgbNIrs1wVqPWQxH50UXYOoX9QSt%2BU73hT3uNqCLugqWQPn6Nayxzl%2Fa5BHDjxLvgNNCcr3PKOo85dONKzT4ITvNV9VcvZajzbux7R%2FEqBcHVmJACNMziQCLIcoavYe26pGmCMOEOzgX4KLYrB%2BubYAvrYs%2BbZPtLYYqHCPLuL%2FMK2tA7%2BPJbj8KzVPGR9UsAoqDkG7LSaze%2FLMTHUQl1vML3Gwr0GOqUBW5lkH8GiINL4v2XndShWfU4sX2wLv%2BCw%2BOW7lPA4n9gB%2B52734uayhmN4UA2J9UXLeAQeJ7jlCsskyA5Djx73JIE%2Bph%2BJxy5mBSCUUTdfOLvlcQxe%2Fr9%2Fp578%2BRVORXGvDpWt2TdyDT%2F5zu7l9Q7eFLToRkJiQ%2BISTFpHv1kdMor23h%2FiSTg7OSon6L0NzY7CNN5sA9%2BkK7tUOrCxN9im9n%2FHZbN&X-Amz-Signature=53d710db3badd99e41a268770aad5245831046c955416897636d0c82a31afe4f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHZR73G%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID6n540o1TvReoogqVfA0mSdNJK2RIeWxSiFDlcLuTB5AiEAjDqHl%2Bobz9qmB70yP0%2FkJUZh%2BE6QkkCd8zRMZg8vpOAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJcVtoMp5PTT9eHDEyrcA%2B10fBryPcgxBbs6k3E2nJHr5VyBlBMWB1TJE%2Fqy%2FLBh9MOHXp1cFLTazlnqpxWcECVEz6HeCwRRvuP7RIIJP63GjeJqB%2Bari3bsk5IVff8L8X0wgE1VfcYa0XYFh5heTM9CDW103pOwQSkzlslaqjFhRbx9vH8K88SiZAjp%2FDec044vcEUhXoofIYc5cGJhrQdlBFTBynH4ugcZYN%2Fut%2BaATp%2FFYMAMaL1w92jpRo3rrRp16n6JI4QJh9UK0m%2F8QlpwBKysaHM3R77pL5ZJVGGB1mKulSbRGEGC8TqFs6agLAMqQXTZPYDe5MHcYTRdAx2lr9uyNIPfEvZ7iIUJ9k80CrnNFOQM1lbivyZAY90mucPL5W2ZotyKtmjS4KxCiOYTCVl6AK25ydKvG95Fo6SHv8yNDgP4W5UgHjLgbNIrs1wVqPWQxH50UXYOoX9QSt%2BU73hT3uNqCLugqWQPn6Nayxzl%2Fa5BHDjxLvgNNCcr3PKOo85dONKzT4ITvNV9VcvZajzbux7R%2FEqBcHVmJACNMziQCLIcoavYe26pGmCMOEOzgX4KLYrB%2BubYAvrYs%2BbZPtLYYqHCPLuL%2FMK2tA7%2BPJbj8KzVPGR9UsAoqDkG7LSaze%2FLMTHUQl1vML3Gwr0GOqUBW5lkH8GiINL4v2XndShWfU4sX2wLv%2BCw%2BOW7lPA4n9gB%2B52734uayhmN4UA2J9UXLeAQeJ7jlCsskyA5Djx73JIE%2Bph%2BJxy5mBSCUUTdfOLvlcQxe%2Fr9%2Fp578%2BRVORXGvDpWt2TdyDT%2F5zu7l9Q7eFLToRkJiQ%2BISTFpHv1kdMor23h%2FiSTg7OSon6L0NzY7CNN5sA9%2BkK7tUOrCxN9im9n%2FHZbN&X-Amz-Signature=99941427a0e08ebe9a2911fa9e1d81ffebae640196166c27854f8e30321c5b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
