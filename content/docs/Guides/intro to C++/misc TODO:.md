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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V32DOZCA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC16LDo8WukJ3q%2B8INmohcL03UCiS5yTTRVpxZjELyusAIgAPXLh%2BuFNVpWj5gLqqg6%2FSBf69WYsOBSmUVlp8lhaqsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKCXVd%2FBhvl1yWgPyrcA%2FDVRwCC7EaOO%2BsmjapnQiLC3skiD4LdeEKi3rx3q%2FEDry5U35zF9BTS3riErOoGNrVFbkZPiQr8fOrURXJ3VqMa3YUA%2BitTOdcIuTLdJEiETv1JdbwZdxt%2F7O6Th5uS5Thy0C3V24VaAgZJKb6jrY5X0a2LX5Us6COenXf5HmSohfklJNLS833bvWxZ6aVB98YYLv49f3exknL7BjAFdgobnuDYXmJjowbRiXi8BPMV7fpGVNdMaFznGtAqiA5cQ40SZItfHy5dlpQM72vyz2V5YSqpJmTLyxHHtGLkvGiMFwNnrvJh%2B1nKurAMUxtDYuKdYwm6xipUUkxgb6%2Fs%2BStstWrqh6CkSIWJZlUAyfI15WH7pJmUWWrVV3LLiAA8KzbuCXWoz3GV2qJs7AL07nEvGe5vSb%2BAcw7ivGUgbTQVhsgKg57kdQPaCLmXy6qKvBn7c5N5k8i8%2FRvvxcPEwzi%2BxPnplScnDaqYig9niLb9Iixxn4CnEvngCaOyYdK2Alfj9g4dCjaJTKccjgLDTzqVzroopmTwJbUII3dMi18I64iK4qqvyew21ZKfFqJGLUAKJNZYkun%2F5znSx9%2B0HNwyasJDNcu4dxMf%2F3KymHwC1KnXVcxcUZBnty05MJbqor8GOqUB4p7SyJ9C4g8GChU3ogomnFcokVw6pczYHJWN2Zk4rcgL484QLY1EbwNr3L0EpBwIL%2BnetxZ8ab3fbDw2UBX82MxkGFNrKrE3R5JcTHGGDpHnDUth1c8TRiayMjgQgD9%2BvT3V8NNfDQR4UY4dWfmEJcDnR0GvUh3M76M6cmV1PJa32EHWrCL9%2BVhfWrbJaBhqO6fzUGR1rSLYj8NUDXQTXbjQeegs&X-Amz-Signature=c500818a8ac09f70ff197e527cb873734a9d591dd1fa78b6e1ad9e09c4e5daab&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V32DOZCA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQC16LDo8WukJ3q%2B8INmohcL03UCiS5yTTRVpxZjELyusAIgAPXLh%2BuFNVpWj5gLqqg6%2FSBf69WYsOBSmUVlp8lhaqsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKCXVd%2FBhvl1yWgPyrcA%2FDVRwCC7EaOO%2BsmjapnQiLC3skiD4LdeEKi3rx3q%2FEDry5U35zF9BTS3riErOoGNrVFbkZPiQr8fOrURXJ3VqMa3YUA%2BitTOdcIuTLdJEiETv1JdbwZdxt%2F7O6Th5uS5Thy0C3V24VaAgZJKb6jrY5X0a2LX5Us6COenXf5HmSohfklJNLS833bvWxZ6aVB98YYLv49f3exknL7BjAFdgobnuDYXmJjowbRiXi8BPMV7fpGVNdMaFznGtAqiA5cQ40SZItfHy5dlpQM72vyz2V5YSqpJmTLyxHHtGLkvGiMFwNnrvJh%2B1nKurAMUxtDYuKdYwm6xipUUkxgb6%2Fs%2BStstWrqh6CkSIWJZlUAyfI15WH7pJmUWWrVV3LLiAA8KzbuCXWoz3GV2qJs7AL07nEvGe5vSb%2BAcw7ivGUgbTQVhsgKg57kdQPaCLmXy6qKvBn7c5N5k8i8%2FRvvxcPEwzi%2BxPnplScnDaqYig9niLb9Iixxn4CnEvngCaOyYdK2Alfj9g4dCjaJTKccjgLDTzqVzroopmTwJbUII3dMi18I64iK4qqvyew21ZKfFqJGLUAKJNZYkun%2F5znSx9%2B0HNwyasJDNcu4dxMf%2F3KymHwC1KnXVcxcUZBnty05MJbqor8GOqUB4p7SyJ9C4g8GChU3ogomnFcokVw6pczYHJWN2Zk4rcgL484QLY1EbwNr3L0EpBwIL%2BnetxZ8ab3fbDw2UBX82MxkGFNrKrE3R5JcTHGGDpHnDUth1c8TRiayMjgQgD9%2BvT3V8NNfDQR4UY4dWfmEJcDnR0GvUh3M76M6cmV1PJa32EHWrCL9%2BVhfWrbJaBhqO6fzUGR1rSLYj8NUDXQTXbjQeegs&X-Amz-Signature=00f13361a36b69c4cecaed54751521756b328cf701957f11c1dcc29bf5729179&X-Amz-SignedHeaders=host&x-id=GetObject)

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
