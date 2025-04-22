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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG4SLMVK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCtfSu6yr3UE2OSJ%2BHqU4cI3jiHx%2FbcJJtAqkiAWE%2BdjwIgfllz6BNaubM52VV36FKlTSPRD8do12HZETQX2f2nldgqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7CRFqhZ%2BTzxxx%2B2CrcA5q%2BDfgxnQqKfMhxw8pijOdW4gA6TQSb%2Fer4Wajo2pwqgUDX77gi%2FPbRkBqj7ZeLZSwQoEQUPZmVM1VSVmUgf%2BX4spFQ9ArZZGdvRtlC4RCV%2BDvdEn%2F%2FUpdncSQ5Aexri6a6AFNax9RRi08JPkOgDoZneE%2BEED%2FlN9PmbEm1iuYPXpFpBfdtWUCCEBsKl%2BD%2FsCndvDFZ4Vsf4I%2B7OT6bKVynXEkuA%2BbItxZofgKxJET6KLQ3xQqUOJzXZqFYr2azokkbOCqwk%2FPKBdabLIaV9QftcZGar6LNFkXQqw8XjsIRBUrTVrLfISzJj30uqorMQkgVuNIHe%2BPXfCBaA5JzXnHCDSf8jaXLhow0MNiFkgtTnK00Nu1X%2B9jkUohCf1tXG%2FVxKMT%2FXetYD%2FiXsddSG6ONTFm5FERhCGbGFysi0smyT0MX%2BvgGIYMF6wQ5jcftWkq41h6JlPHGSE8W%2Fkw1%2BRz6lcJBtcwwMnO8ArNW6wplWqxQZliEbXTmpDJ6cM9uebxQ0LQ1q3U8muzzmoq0x32yE7ts0q6Uwg9MBDVnba2IwYw2s27CuVJ6ODwiFrT%2FS9DMrCqa7xqxjt4Y1%2FGD%2BZy636dy6CwwiFPZxLLuQFe4g%2F61x1xLAlJUgjccMKOkoMAGOqUB2eaciPqBniY2fuC0oqfZ7%2Fv3fqj9mWAjXJ%2FxGgppt8DWJoDVXdvbazIpAHu6JjIJ5GzAqLQxejWSQhC8v9Y6MEpMEUMD2mUPC62U8R4jZt%2FkK9KDWYpH2cZB6%2Fq6dPWMdvZ7eHYpADPhIY3MLAv%2BGiJs5jV%2BPp90rVpiUKufrW55xpLPCUJ6hI%2B1mNiBJIcEWTWJtZUMLgKRsHq78G%2Bp1fXMbKP%2B&X-Amz-Signature=89d30ac7a339e93a078af4d2fb0ad16f0ee61d44b390293dd03a46d615a17bde&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG4SLMVK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCtfSu6yr3UE2OSJ%2BHqU4cI3jiHx%2FbcJJtAqkiAWE%2BdjwIgfllz6BNaubM52VV36FKlTSPRD8do12HZETQX2f2nldgqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7CRFqhZ%2BTzxxx%2B2CrcA5q%2BDfgxnQqKfMhxw8pijOdW4gA6TQSb%2Fer4Wajo2pwqgUDX77gi%2FPbRkBqj7ZeLZSwQoEQUPZmVM1VSVmUgf%2BX4spFQ9ArZZGdvRtlC4RCV%2BDvdEn%2F%2FUpdncSQ5Aexri6a6AFNax9RRi08JPkOgDoZneE%2BEED%2FlN9PmbEm1iuYPXpFpBfdtWUCCEBsKl%2BD%2FsCndvDFZ4Vsf4I%2B7OT6bKVynXEkuA%2BbItxZofgKxJET6KLQ3xQqUOJzXZqFYr2azokkbOCqwk%2FPKBdabLIaV9QftcZGar6LNFkXQqw8XjsIRBUrTVrLfISzJj30uqorMQkgVuNIHe%2BPXfCBaA5JzXnHCDSf8jaXLhow0MNiFkgtTnK00Nu1X%2B9jkUohCf1tXG%2FVxKMT%2FXetYD%2FiXsddSG6ONTFm5FERhCGbGFysi0smyT0MX%2BvgGIYMF6wQ5jcftWkq41h6JlPHGSE8W%2Fkw1%2BRz6lcJBtcwwMnO8ArNW6wplWqxQZliEbXTmpDJ6cM9uebxQ0LQ1q3U8muzzmoq0x32yE7ts0q6Uwg9MBDVnba2IwYw2s27CuVJ6ODwiFrT%2FS9DMrCqa7xqxjt4Y1%2FGD%2BZy636dy6CwwiFPZxLLuQFe4g%2F61x1xLAlJUgjccMKOkoMAGOqUB2eaciPqBniY2fuC0oqfZ7%2Fv3fqj9mWAjXJ%2FxGgppt8DWJoDVXdvbazIpAHu6JjIJ5GzAqLQxejWSQhC8v9Y6MEpMEUMD2mUPC62U8R4jZt%2FkK9KDWYpH2cZB6%2Fq6dPWMdvZ7eHYpADPhIY3MLAv%2BGiJs5jV%2BPp90rVpiUKufrW55xpLPCUJ6hI%2B1mNiBJIcEWTWJtZUMLgKRsHq78G%2Bp1fXMbKP%2B&X-Amz-Signature=c107f9bb7a9b5179219931a94e044b91d8e38964c84f4d072689630d800caca0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
