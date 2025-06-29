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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76VFV4T%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYQ%2Fy9%2FXflFPxUdrvVrSzsk1L9L3wEFERxUt6vVyAtywIgOHj6DTki9L7xmTmFzWOK2Iuok%2BTcMdGyrlv3P7wQ6uwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1GfxB5Pu1J%2FXe19yrcA54x7RZEpZ53Cgi7Xq9rUf6f2tvteUmtToNFGy3PavH6MoKQsr15%2FRJU8VHN%2BX2mnRvZzqQpSFDpQCmhzkTN%2BwyPcazmIW0AmUAsPzUWIPcfJgFa8EwKKvQiu3l52LOYCjX5843AokmSzQmdNpiFr%2F%2BjAqj%2FlYXZ%2BEw64I163A1VkNl93q4orMrInApVMgXZ4UNEyx32VEFRe8OQLoL6oaLmLQ%2BcQPALpO7vE4ffL3iNBXSwOqc8%2FzEoPcScVRwoX7Uw7BAB%2FB8%2BTEN0PrQmGs7KkFTwy7MNKDb9%2FRg8EsXOIGd%2B3owSlA8AK%2Bym4Bq8U7PjzHGwGWdtl%2F6iCW3O4LHhnpm%2Fn6Stxig89KPURfr2Z0nDIQ9PjOSmA0Kl9HOh22d33IyVDwUk6Ine4tzvY65zfr5FPpuofEb6RcFhTOsck5C1QMtpG8735L4DkN3VMGz8L7gwaMioGjCcO2iZlL2%2FQeTLSv7TjSU2oUnqn7aEtMEh0NH%2FFkDhnMtxGCuZAWzCPiPcYmB%2FTSDkgnYfqI83cu590MrXqpDe%2Fa5%2B13fU3365fqaARta4RWstr0O%2FzV2c7jsd6sOi%2BzOhSpCCZgTxUl8lq1C%2B9WLcR3%2FebAR448IxwtWZyI2gAd5pMKGghMMGOqUB8DCOJD19ZOyp36E6wIED9P6Fc5qSJjDkSnUQWU%2F3l6foYjPXgjrbAH18JB6GhufaEk1sgCxzUV3%2F8NyHlA5027UxwuvfaeoWsytSoPYX6d0LJtV9kE%2FSiYEE9GdlBv7HdjExGmX7KmF7dYsTqgeEkq%2FOkdUaXBadQUUZ0Cm8wGYylrQF8VWmTnwCF7lTWYRx5fh5yxf3vsZ9a9S1I99YZ%2BXGWGea&X-Amz-Signature=e18e8cb31c6de1ca739535ea619c6f5d512afca4b516b32ad9ec890052b7973a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76VFV4T%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYQ%2Fy9%2FXflFPxUdrvVrSzsk1L9L3wEFERxUt6vVyAtywIgOHj6DTki9L7xmTmFzWOK2Iuok%2BTcMdGyrlv3P7wQ6uwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1GfxB5Pu1J%2FXe19yrcA54x7RZEpZ53Cgi7Xq9rUf6f2tvteUmtToNFGy3PavH6MoKQsr15%2FRJU8VHN%2BX2mnRvZzqQpSFDpQCmhzkTN%2BwyPcazmIW0AmUAsPzUWIPcfJgFa8EwKKvQiu3l52LOYCjX5843AokmSzQmdNpiFr%2F%2BjAqj%2FlYXZ%2BEw64I163A1VkNl93q4orMrInApVMgXZ4UNEyx32VEFRe8OQLoL6oaLmLQ%2BcQPALpO7vE4ffL3iNBXSwOqc8%2FzEoPcScVRwoX7Uw7BAB%2FB8%2BTEN0PrQmGs7KkFTwy7MNKDb9%2FRg8EsXOIGd%2B3owSlA8AK%2Bym4Bq8U7PjzHGwGWdtl%2F6iCW3O4LHhnpm%2Fn6Stxig89KPURfr2Z0nDIQ9PjOSmA0Kl9HOh22d33IyVDwUk6Ine4tzvY65zfr5FPpuofEb6RcFhTOsck5C1QMtpG8735L4DkN3VMGz8L7gwaMioGjCcO2iZlL2%2FQeTLSv7TjSU2oUnqn7aEtMEh0NH%2FFkDhnMtxGCuZAWzCPiPcYmB%2FTSDkgnYfqI83cu590MrXqpDe%2Fa5%2B13fU3365fqaARta4RWstr0O%2FzV2c7jsd6sOi%2BzOhSpCCZgTxUl8lq1C%2B9WLcR3%2FebAR448IxwtWZyI2gAd5pMKGghMMGOqUB8DCOJD19ZOyp36E6wIED9P6Fc5qSJjDkSnUQWU%2F3l6foYjPXgjrbAH18JB6GhufaEk1sgCxzUV3%2F8NyHlA5027UxwuvfaeoWsytSoPYX6d0LJtV9kE%2FSiYEE9GdlBv7HdjExGmX7KmF7dYsTqgeEkq%2FOkdUaXBadQUUZ0Cm8wGYylrQF8VWmTnwCF7lTWYRx5fh5yxf3vsZ9a9S1I99YZ%2BXGWGea&X-Amz-Signature=c9cb9dbe82b9b4cf875473ae526aa9f6e3a2a1fb6ef781930480b5f2fb220aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
