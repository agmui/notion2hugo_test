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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM7XW4LQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpA5u4jw1m6Rn2Of4KGJC0U%2B4cFPpXS4yIErkKb%2FrVMwIgD92LIHQg3aTOGfK2S8BcN74%2FwMGTkK5A%2B%2FL%2B%2BBM68n4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGtb7%2FfLrUa16dNayrcA6IzmPfdqxz4Yj4M4pt9yYmHhj9n%2BB6FdRekpkgZlKyayWMmTkU%2FP5XVYucxAadsPKC7raTWlak5q5AdN1MKZJxwQHuZHNgsUiBPUu3IKJhDkEav3MN5%2B1Qv%2FEno4%2B0HkzUfgZpQh9JDiWauM3ipicLX8KODAJFmtVzGJSOiDLCVpzPWGTjqZpR4AHnmR9pZZTC%2BPp6Mpzvn%2BbIY0etko35FmRtieS65wxGaD9XLaU5SDTumMYWak%2BeJZ3HFViS3oDwgPoO5IzJK0KHR2sINSveVQY5pwPnTr%2B08HsE%2BoaRds6BxPXACcQhWzq6xEOmiA8ZDhSEO5N%2FBKhbl38CqNdZx7hOB1S0D7%2FFNLdemu0avUly2fyDV3nqmmtRrRn4bSUuR5YVT6gzZgG8eawpj%2Bkjw3gxNuUWs1ae8gmm%2B2LIzZaxa6kLoqo123WAOajoiyScYZhY%2BnJBLpYSWOwlz%2F%2Fb1757y1G71KRtgh5zu7m58GnQyRXjsVXPA3HPk1ioOmdjXu%2B0z2BO0fEuXO6mwfKWQhmT%2FwRSKM1ZM6c0ZDOFWfs5d1SsUh5ODPMPNIinOshDTyELetlsjLL2K3smSRsRtErphkq%2BYxB8edZske4ZxJSVFmt320NkTwQs%2BMKXGz74GOqUBuT7Z8hxSZdKWpBrAI1G%2Fd67vuYlhl%2BoZ8x%2F%2FcfiDlwnWwX79sN4XoeWAWyObswyExtYkB0SiPchdv5ZdPIFpvuUje53Fzk7bvnU5DC%2BilQzLpp%2BZlvS3GGajSLtIURdUCuTwdDRvgK9SA%2Fp9D6xXoD%2B%2BN2Kqv7y5ns61JunkRnJ6gLg4UpxC4k5zg1zxZ7WNviUJvapXHTPJj%2FqLRge%2BrSNmyO8M&X-Amz-Signature=9df900067ef654230a6b3ce91095b833becea52175799d6a4c6eeaade13e1d46&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM7XW4LQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpA5u4jw1m6Rn2Of4KGJC0U%2B4cFPpXS4yIErkKb%2FrVMwIgD92LIHQg3aTOGfK2S8BcN74%2FwMGTkK5A%2B%2FL%2B%2BBM68n4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGtb7%2FfLrUa16dNayrcA6IzmPfdqxz4Yj4M4pt9yYmHhj9n%2BB6FdRekpkgZlKyayWMmTkU%2FP5XVYucxAadsPKC7raTWlak5q5AdN1MKZJxwQHuZHNgsUiBPUu3IKJhDkEav3MN5%2B1Qv%2FEno4%2B0HkzUfgZpQh9JDiWauM3ipicLX8KODAJFmtVzGJSOiDLCVpzPWGTjqZpR4AHnmR9pZZTC%2BPp6Mpzvn%2BbIY0etko35FmRtieS65wxGaD9XLaU5SDTumMYWak%2BeJZ3HFViS3oDwgPoO5IzJK0KHR2sINSveVQY5pwPnTr%2B08HsE%2BoaRds6BxPXACcQhWzq6xEOmiA8ZDhSEO5N%2FBKhbl38CqNdZx7hOB1S0D7%2FFNLdemu0avUly2fyDV3nqmmtRrRn4bSUuR5YVT6gzZgG8eawpj%2Bkjw3gxNuUWs1ae8gmm%2B2LIzZaxa6kLoqo123WAOajoiyScYZhY%2BnJBLpYSWOwlz%2F%2Fb1757y1G71KRtgh5zu7m58GnQyRXjsVXPA3HPk1ioOmdjXu%2B0z2BO0fEuXO6mwfKWQhmT%2FwRSKM1ZM6c0ZDOFWfs5d1SsUh5ODPMPNIinOshDTyELetlsjLL2K3smSRsRtErphkq%2BYxB8edZske4ZxJSVFmt320NkTwQs%2BMKXGz74GOqUBuT7Z8hxSZdKWpBrAI1G%2Fd67vuYlhl%2BoZ8x%2F%2FcfiDlwnWwX79sN4XoeWAWyObswyExtYkB0SiPchdv5ZdPIFpvuUje53Fzk7bvnU5DC%2BilQzLpp%2BZlvS3GGajSLtIURdUCuTwdDRvgK9SA%2Fp9D6xXoD%2B%2BN2Kqv7y5ns61JunkRnJ6gLg4UpxC4k5zg1zxZ7WNviUJvapXHTPJj%2FqLRge%2BrSNmyO8M&X-Amz-Signature=1abd68fb589f38d1586d654e492c635e07e123ad41eaf1efe7db3ae3a069694f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
