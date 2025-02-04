---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "null/Guides/intro to C++/misc TODO:.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIXHEFT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCwmEBtnIgN2bK51bmpCdckJ0YZgCKN13H%2FH8wuxJE7jgIgG0Fu9hKZqS%2FSsmps0nmdpoGygQ3hOAnlN8i9ExtEYHkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNWk2nm7g8i0wrDrDircAwrAEsStvR9YkZkuGUMelytrWeerLAKPkGHbxugDZJ6W14Qh7U8L3tpF13EduI%2BE8XclSGJuHS1nRQRQVkYKqs%2BuubGjsHXz5hr5gJVL6k%2Bf0eH4YlgF4YKYYfwetKq9MT8yBvoKsKLBxodyGEFBlqpP7Hja6y8PaNjZhKpxO%2BAr%2FqqNnRVB06fjm8PQBD9XkPaSqPsVM1dyMkYvAWOa3FUvusvGW47H5JmxAWt779dUriNbQUvfIT4FbMEfanc3OL8jNzqOSas8UDAjHsP0ApbcdgI5i4Rr5tLFRuETePgk7hcnGr%2F5FX%2Bw0aFg4VPP5mnJwhKAMz7W98V7bVt5IA2cKMRgm%2Bn1dIKcwBxNHBVaTcX%2B8MpqVhfNnkPq3bn6GobijVgwnKusihHCIe6cRaIZo%2BvmztsOYMcT4Fss%2BS0N93GT3pINnWNNgdk4l1uhKYxT5bZRcpMZ8ulI5I8nGvDc3e1AidxpmMMT0xXU4ZB8tEUxoZ0xHUgH94qo3PNa9BIGIyEhcr59B6B0GuqTeGD2C1YKqStAtesPrfchR8iAnTh1HM8MbjiRyRpMazCcQNeYZz%2FrQR6YyzQwBw4KaO%2BVupQGw1KB62Jpqn%2Bh3fnxlBNvrgaFr2MPhuYIMJf%2Bib0GOqUB6DFeCN%2FXbBs5DViq7dbzURVPcOvRnSh4zvaP0cxZFQILvsxHe8%2BqjAdg15gsBYSOq8XfKFgpJGpK1h80N0wxCbCVJaB8Jttmg8stk2iKJakGsK%2FrgfWLk3LdysyNm72tkam%2BV0r87PrqV7sLwENB6HhwmX363mXXc1YdkgVLLHNdFPL0BnSYEfoKn5LgKM82vG8Hw5vJCwup4bhclq54uC%2FC1wFt&X-Amz-Signature=776c21c461e6d943bba9063847ca8a8829bd7c4de718647aa1648a0da81664db&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIXHEFT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCwmEBtnIgN2bK51bmpCdckJ0YZgCKN13H%2FH8wuxJE7jgIgG0Fu9hKZqS%2FSsmps0nmdpoGygQ3hOAnlN8i9ExtEYHkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNWk2nm7g8i0wrDrDircAwrAEsStvR9YkZkuGUMelytrWeerLAKPkGHbxugDZJ6W14Qh7U8L3tpF13EduI%2BE8XclSGJuHS1nRQRQVkYKqs%2BuubGjsHXz5hr5gJVL6k%2Bf0eH4YlgF4YKYYfwetKq9MT8yBvoKsKLBxodyGEFBlqpP7Hja6y8PaNjZhKpxO%2BAr%2FqqNnRVB06fjm8PQBD9XkPaSqPsVM1dyMkYvAWOa3FUvusvGW47H5JmxAWt779dUriNbQUvfIT4FbMEfanc3OL8jNzqOSas8UDAjHsP0ApbcdgI5i4Rr5tLFRuETePgk7hcnGr%2F5FX%2Bw0aFg4VPP5mnJwhKAMz7W98V7bVt5IA2cKMRgm%2Bn1dIKcwBxNHBVaTcX%2B8MpqVhfNnkPq3bn6GobijVgwnKusihHCIe6cRaIZo%2BvmztsOYMcT4Fss%2BS0N93GT3pINnWNNgdk4l1uhKYxT5bZRcpMZ8ulI5I8nGvDc3e1AidxpmMMT0xXU4ZB8tEUxoZ0xHUgH94qo3PNa9BIGIyEhcr59B6B0GuqTeGD2C1YKqStAtesPrfchR8iAnTh1HM8MbjiRyRpMazCcQNeYZz%2FrQR6YyzQwBw4KaO%2BVupQGw1KB62Jpqn%2Bh3fnxlBNvrgaFr2MPhuYIMJf%2Bib0GOqUB6DFeCN%2FXbBs5DViq7dbzURVPcOvRnSh4zvaP0cxZFQILvsxHe8%2BqjAdg15gsBYSOq8XfKFgpJGpK1h80N0wxCbCVJaB8Jttmg8stk2iKJakGsK%2FrgfWLk3LdysyNm72tkam%2BV0r87PrqV7sLwENB6HhwmX363mXXc1YdkgVLLHNdFPL0BnSYEfoKn5LgKM82vG8Hw5vJCwup4bhclq54uC%2FC1wFt&X-Amz-Signature=b06f5bfc50cd835d9dc7ca39dc645556b05949dc90a3dd1c06e53380e123f3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
