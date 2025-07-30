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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREQW2LW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQKjM%2BhdbIqYdLXbhDY1Z1U3V4EQZAmMzy1x7GEpjsrAIhAPWvRbI%2B6QRCagyJnlt%2B7%2BoXQLq3ALxRT4gca75%2FXXjMKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQyQFITV6mVw9DlCsq3AP2G2A50qvhje6k6%2Bhfk1kiTCnXzZ5WcbzfrcGAkTi0oXFS3gjStF%2FA%2FMpXyPv162fJNKyrzwgreiDi1vDYWP9ieScreiLeILTy73DZL2d%2FdccDQanlU3bvggDqH%2Fkr2%2BTjCJtsDvsw7d0saGsinPW%2BjbOtAhUMUs8ZeYx%2Fgzf3QommuRRKrks6z7wrQCk%2B7mEaoOyKIZM0IhHMf9eEEy%2FfuELPeE9VKROq24TQgZAt%2Fz680n6USEFsHIAivIUXMk5xP3mihzP%2BUU4Vq18%2BJpLEfT9JFtjuuiLN5M1BYz3tXtnUh%2Fi6qLqEcgf%2F6mLbeQO3TJu%2F5agZ0zU6tsK2ixqqA7uPN7k70KNeBuuKPrT6ioJJPVd4yTPHIn7OkentvopFCadsJKbmQdobSyF1YurWkwgWq096rHqt6R8OcOR41zagpX2N85RhryxK8ar09R5i7TSkjC0%2BIV5YQyrwRaNifRwbz80PSXJ0lonQ22TldMxj%2FoVQc%2F7svSutO%2FDAhq6%2BbwWyHJzU4ZERaYgn0zoscGWrs8UT7nQQxQwlqcrIK3A9cz5rqa%2BTay0pKTmRZkUhKbp9DromCpnF6uAxBwx5w6UNu7fx3Q84yyfuvLnzgu3Je0oGLJUeAQjdyTCyparEBjqkAa9uowZhznF7mM0ab3fmXB%2Foi7tzsIIkK7ii36uMsWc9zmQbLkGFLYgd2YRWSfIP8yy8Fc9JF1kxh48kevDxkRQc%2FAEKeCS4yS8N98gJnbjo0sSfwYMGciaVLipaLDFMacqyCPB1s3CAaD%2Bokp4DN0AWYig62xrdezfKMo5oUTbdviDo1i5IsasYK5BbGnxhf4zdo25Dgo6ePgRrB6pqNBq0PF%2Fh&X-Amz-Signature=2f8e42dd7a6b334768aea82e3911b49808d16bd13e7e3eef853429a50c389f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREQW2LW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQKjM%2BhdbIqYdLXbhDY1Z1U3V4EQZAmMzy1x7GEpjsrAIhAPWvRbI%2B6QRCagyJnlt%2B7%2BoXQLq3ALxRT4gca75%2FXXjMKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQyQFITV6mVw9DlCsq3AP2G2A50qvhje6k6%2Bhfk1kiTCnXzZ5WcbzfrcGAkTi0oXFS3gjStF%2FA%2FMpXyPv162fJNKyrzwgreiDi1vDYWP9ieScreiLeILTy73DZL2d%2FdccDQanlU3bvggDqH%2Fkr2%2BTjCJtsDvsw7d0saGsinPW%2BjbOtAhUMUs8ZeYx%2Fgzf3QommuRRKrks6z7wrQCk%2B7mEaoOyKIZM0IhHMf9eEEy%2FfuELPeE9VKROq24TQgZAt%2Fz680n6USEFsHIAivIUXMk5xP3mihzP%2BUU4Vq18%2BJpLEfT9JFtjuuiLN5M1BYz3tXtnUh%2Fi6qLqEcgf%2F6mLbeQO3TJu%2F5agZ0zU6tsK2ixqqA7uPN7k70KNeBuuKPrT6ioJJPVd4yTPHIn7OkentvopFCadsJKbmQdobSyF1YurWkwgWq096rHqt6R8OcOR41zagpX2N85RhryxK8ar09R5i7TSkjC0%2BIV5YQyrwRaNifRwbz80PSXJ0lonQ22TldMxj%2FoVQc%2F7svSutO%2FDAhq6%2BbwWyHJzU4ZERaYgn0zoscGWrs8UT7nQQxQwlqcrIK3A9cz5rqa%2BTay0pKTmRZkUhKbp9DromCpnF6uAxBwx5w6UNu7fx3Q84yyfuvLnzgu3Je0oGLJUeAQjdyTCyparEBjqkAa9uowZhznF7mM0ab3fmXB%2Foi7tzsIIkK7ii36uMsWc9zmQbLkGFLYgd2YRWSfIP8yy8Fc9JF1kxh48kevDxkRQc%2FAEKeCS4yS8N98gJnbjo0sSfwYMGciaVLipaLDFMacqyCPB1s3CAaD%2Bokp4DN0AWYig62xrdezfKMo5oUTbdviDo1i5IsasYK5BbGnxhf4zdo25Dgo6ePgRrB6pqNBq0PF%2Fh&X-Amz-Signature=b7ade8f4bd8197d54b702aeafed82d563393517b6dfb4f739f9ab34d1e50cb91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
