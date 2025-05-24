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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVJMDWW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHqlQkcxdZYCgiY7WneRGzQgAiiQyBN37GcXGHYX2RqVAiEAjkxGM7%2FGxE%2BFZ1Ve%2BgJ%2B7%2Fv5w8NWu4Q7hGuEvMTyoJ4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhnLgE9pAhK9ipgcSrcAx%2BHFpJ%2BTVhClex5SAfKGseQT2Vd175ow7iE7aVKkXKLjo6N5pNMEKbyEzVM1zd9e7B0x81VHNVvQEWwcyyjTPRdlPPi5oPXiGBhFBbTZlcNOiJDTFKJSpdzgF5AUpsCwtRcBYP0UITxXjUEGjbsElC0YeN49O0XsedloaKoyneeL1I2qd%2FxtFWHyX9lHQJ7cODJUhUpmlh%2FroP1PVRvIRHjS8l1jRL5Ly3nxiZXbHDJAGnpbGWOw3yzDk%2B1GhWCtGQ%2BUBJezyPo%2Fbgjtw6UaNYhsFs9VOzvLOx%2FMMmpK0kBu0N1OcByOFQoJ5NC4gmWBKpyFqhA2icVCrwdwiYocDpT%2Fw%2FhhPw8FCsOPVbmkeK5tkH2gTzWKfluT6ZwlH%2F%2FO3J72oqYxOaH2QXCUlrKjYttEJC1IOKkRuiVIzurF7KTYpgd8ZN73bAsLdpknsyYYH24NMDQEDzxEIbdWs%2BB77WYEm66nL6TJ8fePs6DI0f5KbYRGliE60y8QLfJp79tEXMqdXmKV0%2BW7NIkUSy3wqTXb%2BXA2CKJowQIBui%2BV20SuaPo7zdEti0mLvdi9%2BKI4XYsk1BCotL1MTAxJyfHRKKvQEnHov1v2qL6PMnXDv%2F8s3Ph1EZFsOTe9xxNMI74xMEGOqUB%2B3jkXSJ57Yv16mAYMvhPthfrQfvvmX4eJnfuy9inQ7MOPk0anu9%2BvT882SE%2Bs3gRXTMwKE4gup51%2BgJ29%2B%2FmnZQkhkW8iigFOGCmF56YNVuuI57jQD2SlDGFJjMCJWNIo8reJkk80%2Bq%2BKlvo9zqkoXSnnEsw4TDX3ZvCBgohHQQocNgk5nR6L7SddHfdc%2Bq9s6nV9HGbcxPDgZHGxnuq7CdwrNh%2B&X-Amz-Signature=b2262651f480e22928f9898b06ca00c3596699d28bcc9eb16589b2c59e26473a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVJMDWW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHqlQkcxdZYCgiY7WneRGzQgAiiQyBN37GcXGHYX2RqVAiEAjkxGM7%2FGxE%2BFZ1Ve%2BgJ%2B7%2Fv5w8NWu4Q7hGuEvMTyoJ4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhnLgE9pAhK9ipgcSrcAx%2BHFpJ%2BTVhClex5SAfKGseQT2Vd175ow7iE7aVKkXKLjo6N5pNMEKbyEzVM1zd9e7B0x81VHNVvQEWwcyyjTPRdlPPi5oPXiGBhFBbTZlcNOiJDTFKJSpdzgF5AUpsCwtRcBYP0UITxXjUEGjbsElC0YeN49O0XsedloaKoyneeL1I2qd%2FxtFWHyX9lHQJ7cODJUhUpmlh%2FroP1PVRvIRHjS8l1jRL5Ly3nxiZXbHDJAGnpbGWOw3yzDk%2B1GhWCtGQ%2BUBJezyPo%2Fbgjtw6UaNYhsFs9VOzvLOx%2FMMmpK0kBu0N1OcByOFQoJ5NC4gmWBKpyFqhA2icVCrwdwiYocDpT%2Fw%2FhhPw8FCsOPVbmkeK5tkH2gTzWKfluT6ZwlH%2F%2FO3J72oqYxOaH2QXCUlrKjYttEJC1IOKkRuiVIzurF7KTYpgd8ZN73bAsLdpknsyYYH24NMDQEDzxEIbdWs%2BB77WYEm66nL6TJ8fePs6DI0f5KbYRGliE60y8QLfJp79tEXMqdXmKV0%2BW7NIkUSy3wqTXb%2BXA2CKJowQIBui%2BV20SuaPo7zdEti0mLvdi9%2BKI4XYsk1BCotL1MTAxJyfHRKKvQEnHov1v2qL6PMnXDv%2F8s3Ph1EZFsOTe9xxNMI74xMEGOqUB%2B3jkXSJ57Yv16mAYMvhPthfrQfvvmX4eJnfuy9inQ7MOPk0anu9%2BvT882SE%2Bs3gRXTMwKE4gup51%2BgJ29%2B%2FmnZQkhkW8iigFOGCmF56YNVuuI57jQD2SlDGFJjMCJWNIo8reJkk80%2Bq%2BKlvo9zqkoXSnnEsw4TDX3ZvCBgohHQQocNgk5nR6L7SddHfdc%2Bq9s6nV9HGbcxPDgZHGxnuq7CdwrNh%2B&X-Amz-Signature=20ef7d7eb9e3104052ca0d6350606d9060cec21a9e19255fdf01b09b54796059&X-Amz-SignedHeaders=host&x-id=GetObject)

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
