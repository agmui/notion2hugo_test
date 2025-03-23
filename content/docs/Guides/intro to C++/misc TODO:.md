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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OUUIDRU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCP9eYAxP%2B9L0Y%2FebU7sZebT%2B0INnSdIwSeXIqBe4r6YwIgH8RufegCau%2FnZccNrenT2vHc9r1vA1gKx80HiDnPRtgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcNkAqkAVRJ6CbfmCrcA7%2BjkxXD%2BW8c%2B%2BTHHnIGusH6XlM%2B%2BAk3tLJlqIGhF2igWVQ4g5JGQRjHHvEpKViknJj8pedyJGVQdq1n4CEIspu3Dalo43BEUQPYsGoX5Ngfc1cJtpL8SdRzZD7EqaS366y0UZatsy5UGgPX%2Fxv6aIXKsNfm3MsjtJGq2EBscTWHeZ5qhuqSdfQTC%2FAE%2B35n1hFYZdXDFZJvsQP7imU0m7Rx%2BxOBiBoxk3YSP7EPZTAKUT12JenybMQlPY2uG6oxzG8SpqPno3KEtwQNnj7Mqs9LnFKHukoCG5%2FNjHWfEO7Z30UXXvbeyTNQ3YjF6u%2BLiljevmqCEnjYWZn4xRw9APTgADLHfCEHMdpOR1F1kPLO7CzqZsR4AbStkb2t25thUYsblw7%2FW%2BqlYkZ42cnkVKaKfUXYAPuWBtahsnEgVXr2vYX9JUIrNRc6pntMMUnWJrfSWEG04QdT2ZMCI5jxox526HpZS1pQCjz8VOV%2FLw5HiFgSqHQDYLPvXbO2QBSl6QSLR6VaxBl0AYMh31%2F%2BwTy%2FDWJEKz7trJZOS7laQFLzytYocjsyFOKZuM984ubDvFzr%2BtUkXEKXZumEt1kmiY32%2BH%2BnU4eXC4JlB8NHBICzOEJF%2BiVB0CLFImtOMNDM%2F74GOqUBSCjnhwcHHuyXozJv5hfG5eHNaam30EiCLSJe8d2vZYiEshNc5CJcUDRsoGt4Vh1nQGeu0hlrR%2BzJO5RGi5oISc3yvmekwybT14ZJ5De7fubwj7TeaZ7xjJqu%2Bd1Z4Ggom2PvdfG1byMaZiFVfXgej9g6jOzBd4ZuYOJLGla9l7b1DnEUnT4p6xXcRZttsHcieHyGbs2xmmrSjW4GAkaYRh%2BfulUT&X-Amz-Signature=a6ec0ca5755b0a98bf848f503016e051d7c5112d3d667e45f1a00e692817cd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OUUIDRU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCP9eYAxP%2B9L0Y%2FebU7sZebT%2B0INnSdIwSeXIqBe4r6YwIgH8RufegCau%2FnZccNrenT2vHc9r1vA1gKx80HiDnPRtgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcNkAqkAVRJ6CbfmCrcA7%2BjkxXD%2BW8c%2B%2BTHHnIGusH6XlM%2B%2BAk3tLJlqIGhF2igWVQ4g5JGQRjHHvEpKViknJj8pedyJGVQdq1n4CEIspu3Dalo43BEUQPYsGoX5Ngfc1cJtpL8SdRzZD7EqaS366y0UZatsy5UGgPX%2Fxv6aIXKsNfm3MsjtJGq2EBscTWHeZ5qhuqSdfQTC%2FAE%2B35n1hFYZdXDFZJvsQP7imU0m7Rx%2BxOBiBoxk3YSP7EPZTAKUT12JenybMQlPY2uG6oxzG8SpqPno3KEtwQNnj7Mqs9LnFKHukoCG5%2FNjHWfEO7Z30UXXvbeyTNQ3YjF6u%2BLiljevmqCEnjYWZn4xRw9APTgADLHfCEHMdpOR1F1kPLO7CzqZsR4AbStkb2t25thUYsblw7%2FW%2BqlYkZ42cnkVKaKfUXYAPuWBtahsnEgVXr2vYX9JUIrNRc6pntMMUnWJrfSWEG04QdT2ZMCI5jxox526HpZS1pQCjz8VOV%2FLw5HiFgSqHQDYLPvXbO2QBSl6QSLR6VaxBl0AYMh31%2F%2BwTy%2FDWJEKz7trJZOS7laQFLzytYocjsyFOKZuM984ubDvFzr%2BtUkXEKXZumEt1kmiY32%2BH%2BnU4eXC4JlB8NHBICzOEJF%2BiVB0CLFImtOMNDM%2F74GOqUBSCjnhwcHHuyXozJv5hfG5eHNaam30EiCLSJe8d2vZYiEshNc5CJcUDRsoGt4Vh1nQGeu0hlrR%2BzJO5RGi5oISc3yvmekwybT14ZJ5De7fubwj7TeaZ7xjJqu%2Bd1Z4Ggom2PvdfG1byMaZiFVfXgej9g6jOzBd4ZuYOJLGla9l7b1DnEUnT4p6xXcRZttsHcieHyGbs2xmmrSjW4GAkaYRh%2BfulUT&X-Amz-Signature=c9d1024d8f5a8456acefcca28dcc85b0622dcb93445c4b2efc386359177ac07e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
