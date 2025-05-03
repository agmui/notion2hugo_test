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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3GWGIL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQD3gaxlTsLVtnQP9SVigQoyqNje5dPLxXgpEXAd6tCR1wIhAP7QXYNt6YUaTxS3qPr9zhwWAvYAnoFvnn4VS4QQWj61KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEkIqYQwnl1J6bFT0q3AMKESG671W9GDVhirkeyQZKYPYFnujpgjBK7UUIArMYJ%2Bbc8JPeS0K6bsSoiqIItIiCsSx3Nwh3B5FvnEJ0Km6WvCzEU3Msj%2BDcplBYEnr%2BspJmQ1GM2HL9QNpFnCvEsxhSg7xbva9%2BFvwP%2Bg6e14wHk1TLb952T96Trsk%2F83hj83mS2dwNhkEXsxjolPkQ%2Ftoksu%2B%2FzyUr435sxciUjPE9EpYBgT5NlwEqGRP%2Ff17HED2UAR%2FZ9nBv1vhqaTxKLDWzKu84XAF0uiKLWwt%2Bm9cbBZC9Fv2TCN9g1UMZYx4Q3JHCeNJ2GW8fesit5r9edkJEITV2BD%2B3H%2B5PSL5Vmlg9Xgw%2FFV9R8ZdEim3lHOPWS7WsHXeAf0Nbns%2FX%2BN2VveZsilC8fyx8knCdHdLL25%2Fovk6lyDkF1V%2FiyOZLu%2B80YwTXMIxI1g2v9xekoV9lda%2BBCQ1U%2BgVB3nyERzyfCl86LgEDdf%2BOd1DXx6Rea4s8GowEAdHGNxpz3Fj%2BX8InO65bNZYecJ3LaHOTO5Quk0NhhA91KD4XhaPz3MSfeEyZhUcGMZOR24PtXi7XXg5TgafoocooW%2F4%2BuGIFlsEpJNNR1ngzOCKKvZhcLaSNEx1Mvsr8cyjs1cne4QlZMTCTutfABjqkAT0Fov6A2jHsPpx04sxOCJrVXXOfCOFLr8KU7yDl%2BMe1F%2FCjyQhTxvKydKPIr0gfm%2BPfNrB70fBDwDRj4kfjWkcOY6kfrZABNENZ0%2B%2F5PepXTBjt0EbsREBz0IVrkH94xNimn0Ky0gJdcee1jYYio5mdLGp5ZSuB3k3HCEz6HUgiu832NvJKTtcOijI0dAOYAiFm%2Bs2rTbnWMHzBx%2BuDvZgEszm7&X-Amz-Signature=881f049fd565deef3ee55a78c9deab97640a5223803b8c3d0edf6ea3106476db&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3GWGIL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQD3gaxlTsLVtnQP9SVigQoyqNje5dPLxXgpEXAd6tCR1wIhAP7QXYNt6YUaTxS3qPr9zhwWAvYAnoFvnn4VS4QQWj61KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEkIqYQwnl1J6bFT0q3AMKESG671W9GDVhirkeyQZKYPYFnujpgjBK7UUIArMYJ%2Bbc8JPeS0K6bsSoiqIItIiCsSx3Nwh3B5FvnEJ0Km6WvCzEU3Msj%2BDcplBYEnr%2BspJmQ1GM2HL9QNpFnCvEsxhSg7xbva9%2BFvwP%2Bg6e14wHk1TLb952T96Trsk%2F83hj83mS2dwNhkEXsxjolPkQ%2Ftoksu%2B%2FzyUr435sxciUjPE9EpYBgT5NlwEqGRP%2Ff17HED2UAR%2FZ9nBv1vhqaTxKLDWzKu84XAF0uiKLWwt%2Bm9cbBZC9Fv2TCN9g1UMZYx4Q3JHCeNJ2GW8fesit5r9edkJEITV2BD%2B3H%2B5PSL5Vmlg9Xgw%2FFV9R8ZdEim3lHOPWS7WsHXeAf0Nbns%2FX%2BN2VveZsilC8fyx8knCdHdLL25%2Fovk6lyDkF1V%2FiyOZLu%2B80YwTXMIxI1g2v9xekoV9lda%2BBCQ1U%2BgVB3nyERzyfCl86LgEDdf%2BOd1DXx6Rea4s8GowEAdHGNxpz3Fj%2BX8InO65bNZYecJ3LaHOTO5Quk0NhhA91KD4XhaPz3MSfeEyZhUcGMZOR24PtXi7XXg5TgafoocooW%2F4%2BuGIFlsEpJNNR1ngzOCKKvZhcLaSNEx1Mvsr8cyjs1cne4QlZMTCTutfABjqkAT0Fov6A2jHsPpx04sxOCJrVXXOfCOFLr8KU7yDl%2BMe1F%2FCjyQhTxvKydKPIr0gfm%2BPfNrB70fBDwDRj4kfjWkcOY6kfrZABNENZ0%2B%2F5PepXTBjt0EbsREBz0IVrkH94xNimn0Ky0gJdcee1jYYio5mdLGp5ZSuB3k3HCEz6HUgiu832NvJKTtcOijI0dAOYAiFm%2Bs2rTbnWMHzBx%2BuDvZgEszm7&X-Amz-Signature=7503a493d29cf1c60d0a5b5cef9b582a3a67ec83fe27121a856de4c5778f61c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
