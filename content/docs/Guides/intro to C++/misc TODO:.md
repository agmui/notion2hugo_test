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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWO5H6I6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEc9VuhkJq%2FhYdB%2FdRGWxPysk48zj4skDCYbxx9QW8olAiAjNUeDO98cLouj7PCTaB5uOqoOw1Uu%2Bgv7sUGhaqOlEiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5T0jY9KLdLmqrHDMKtwD%2Br79ndzFriYWam%2BkWJisZuUTEPwL9VswfYMcMWOfvpzDwR2VCGB8N4H00CnPVtfjq2D52xNKM0zKYmHJg8ygqVr8oxF9%2BGOZHyCNUokNCxjv%2BvvoMx4ZPpcnn9L9P34VtXjE%2BjhXQ8udc04wqW5TLwAn3Y2VGLomPBvV7KTe1WBo50Nn9STspa1H9c4aGLIFWKlCWMls0LGXndDysICR5usZxlnkIjNjpWTHFXGZ71f0jQn5xTcYAzxjMs5EK4kgDFDZzwlEFnzov4xe3HutBy8YGN72F5IzXXihqXvUvchFSBGQhxUTVIDrRmocffF0BTXmSzAK3QS2LUrKQ3SzIxrNlU15yowAK9EhcodZCWjqCIEec%2BM1obH%2F0Q1JedSL3B8jOThl1pZVKrqU05JIDZzq2pONlfaqosslbm3ZdIqy215mea%2BXRDg%2BBZDY6KaFn%2Brc%2Brt85qGT3rwvZwrdeEDrfolQre2%2FwamMDsY7%2FmwQtAWOh%2BZOtvRSJlgZ8c3lgIPJLrp%2BI1Focs6oJRED5UaRvJxVh01Z9ufBkq7MQ2wYnhofsfhDlQETOcfL%2BxAQAgjVJL%2FmErxi%2B5wBoH%2FyDBlENq3cugHP6Zci9I0%2BSwarxlIkfzO2yC45V1YwzZOpwgY6pgHCKOpmxUgrbFBSlmQ4J2sNyiLf5Kc2VcRhf7FnCI1Fo4qg37JwsgjiK8Cd3j2EdtA3v1%2BJ6CX5DpWdk6%2BLDKnXtyAbbSz4lRYuyDXwPevJI3TRqxGv8p5mbb0X8tG2fiXa9k%2B9ciO3nxVux6e8bgu8q1h3qhwWN3aModrY4so3KRzGRymL8X4QQYUXmrpRgTUK4J3sPkvxoZsDFN1eDYnGIoFWABv5&X-Amz-Signature=e36015b6937763e4225921765a3002c873371ee32cb542c2b826544409be9453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWO5H6I6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEc9VuhkJq%2FhYdB%2FdRGWxPysk48zj4skDCYbxx9QW8olAiAjNUeDO98cLouj7PCTaB5uOqoOw1Uu%2Bgv7sUGhaqOlEiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5T0jY9KLdLmqrHDMKtwD%2Br79ndzFriYWam%2BkWJisZuUTEPwL9VswfYMcMWOfvpzDwR2VCGB8N4H00CnPVtfjq2D52xNKM0zKYmHJg8ygqVr8oxF9%2BGOZHyCNUokNCxjv%2BvvoMx4ZPpcnn9L9P34VtXjE%2BjhXQ8udc04wqW5TLwAn3Y2VGLomPBvV7KTe1WBo50Nn9STspa1H9c4aGLIFWKlCWMls0LGXndDysICR5usZxlnkIjNjpWTHFXGZ71f0jQn5xTcYAzxjMs5EK4kgDFDZzwlEFnzov4xe3HutBy8YGN72F5IzXXihqXvUvchFSBGQhxUTVIDrRmocffF0BTXmSzAK3QS2LUrKQ3SzIxrNlU15yowAK9EhcodZCWjqCIEec%2BM1obH%2F0Q1JedSL3B8jOThl1pZVKrqU05JIDZzq2pONlfaqosslbm3ZdIqy215mea%2BXRDg%2BBZDY6KaFn%2Brc%2Brt85qGT3rwvZwrdeEDrfolQre2%2FwamMDsY7%2FmwQtAWOh%2BZOtvRSJlgZ8c3lgIPJLrp%2BI1Focs6oJRED5UaRvJxVh01Z9ufBkq7MQ2wYnhofsfhDlQETOcfL%2BxAQAgjVJL%2FmErxi%2B5wBoH%2FyDBlENq3cugHP6Zci9I0%2BSwarxlIkfzO2yC45V1YwzZOpwgY6pgHCKOpmxUgrbFBSlmQ4J2sNyiLf5Kc2VcRhf7FnCI1Fo4qg37JwsgjiK8Cd3j2EdtA3v1%2BJ6CX5DpWdk6%2BLDKnXtyAbbSz4lRYuyDXwPevJI3TRqxGv8p5mbb0X8tG2fiXa9k%2B9ciO3nxVux6e8bgu8q1h3qhwWN3aModrY4so3KRzGRymL8X4QQYUXmrpRgTUK4J3sPkvxoZsDFN1eDYnGIoFWABv5&X-Amz-Signature=b9421e3354f58b583510d48660ad6557ae57646289515f838af30019ffc418bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
