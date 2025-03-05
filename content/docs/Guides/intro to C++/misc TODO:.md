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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEIZKKBY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCveNaLbeGTsf0r8PWzPaGT%2BsYd0plsHUezaExMWDUreQIgF1LJF%2BO8irk9OkdgltFawZQMajJXAPlCdw5dpCIy7eMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb76L9UqHTK74xR1SrcA6MYK4A%2BMqlOGa7%2BhGTnYMnO8TXsoZWVkAxjKGN5E3juedGOvtZSslrzBW08%2BN15EwdUzvho%2FA492ML3umjBX%2BqgM373Hma2ZtxbyGj6PhSBOCqaiU1buzb6PtX%2BMWgE1UCzaacwwXALzTA0%2FSLTfHsKwseYGmzzWv%2BqUcxtiIcAybKkb3bnGMaXebjyvnWTs9EdAUdDvJFttDy%2BWBnxnXMZLf6g3jd6OWWJTC7v4FmS1SoroSwV7%2FnQQNCEh7isdGDsScSCO%2Fs2gho%2BnBbO3X6vk0NLYA8LJm4mOdZZP4pprRb0J12NawTm928qh%2FmCvNfqhBtD%2FDzHffX0bNWhOgISpS5YpPcHiTzLTqm1NPOyJk0%2F7%2FhNCJbNj3KG1vBz%2BCNpgKPbYLU9P%2FX3UtDiZamp01gpTCvw7nJdSyCPwhhNSe7AklowhG68tckg%2Bgdo8sRmfUS04uvnGUpt%2BxD4wpCGlS13kRo%2B706mE2rz7gWtTtk3GgV4iAtGjIvb1pHQrOeOccGY58NOb0ZtAwhuddgkD5jO36y23sGQqRT2UUeIH3RMkyHYVunLSSoCEENY8ZOo%2FfaKuJcBfBQsVdf0QjhLNLp8vhGFdgFeED3Xym%2BQfZfiDBnB9F2yhVCJMK%2BJn74GOqUB6UCFcvSKgQQ19AItJyIUgq2nOaRK9zj939oxbklH8w5mA8H42HyI03sAVT%2Ft5OzGGzltey81GSLL7KRmfRL0s2vxpGT8VzAns8X9ut90XSKMqo5h3eRhoyo59PM3qticKZJyGyzC68Q8RJBRcKcUPPiaetGF8qj%2BzO2ZUMZUd2ac7YMZ8rFVeu9WF8TZbB0uEbaFnlnBY%2B87ig6hib95MRSZ0mWo&X-Amz-Signature=9bc9fb823dd7729ee0f17543d977158f24ac09132650494e0347f063c65127ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEIZKKBY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCveNaLbeGTsf0r8PWzPaGT%2BsYd0plsHUezaExMWDUreQIgF1LJF%2BO8irk9OkdgltFawZQMajJXAPlCdw5dpCIy7eMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb76L9UqHTK74xR1SrcA6MYK4A%2BMqlOGa7%2BhGTnYMnO8TXsoZWVkAxjKGN5E3juedGOvtZSslrzBW08%2BN15EwdUzvho%2FA492ML3umjBX%2BqgM373Hma2ZtxbyGj6PhSBOCqaiU1buzb6PtX%2BMWgE1UCzaacwwXALzTA0%2FSLTfHsKwseYGmzzWv%2BqUcxtiIcAybKkb3bnGMaXebjyvnWTs9EdAUdDvJFttDy%2BWBnxnXMZLf6g3jd6OWWJTC7v4FmS1SoroSwV7%2FnQQNCEh7isdGDsScSCO%2Fs2gho%2BnBbO3X6vk0NLYA8LJm4mOdZZP4pprRb0J12NawTm928qh%2FmCvNfqhBtD%2FDzHffX0bNWhOgISpS5YpPcHiTzLTqm1NPOyJk0%2F7%2FhNCJbNj3KG1vBz%2BCNpgKPbYLU9P%2FX3UtDiZamp01gpTCvw7nJdSyCPwhhNSe7AklowhG68tckg%2Bgdo8sRmfUS04uvnGUpt%2BxD4wpCGlS13kRo%2B706mE2rz7gWtTtk3GgV4iAtGjIvb1pHQrOeOccGY58NOb0ZtAwhuddgkD5jO36y23sGQqRT2UUeIH3RMkyHYVunLSSoCEENY8ZOo%2FfaKuJcBfBQsVdf0QjhLNLp8vhGFdgFeED3Xym%2BQfZfiDBnB9F2yhVCJMK%2BJn74GOqUB6UCFcvSKgQQ19AItJyIUgq2nOaRK9zj939oxbklH8w5mA8H42HyI03sAVT%2Ft5OzGGzltey81GSLL7KRmfRL0s2vxpGT8VzAns8X9ut90XSKMqo5h3eRhoyo59PM3qticKZJyGyzC68Q8RJBRcKcUPPiaetGF8qj%2BzO2ZUMZUd2ac7YMZ8rFVeu9WF8TZbB0uEbaFnlnBY%2B87ig6hib95MRSZ0mWo&X-Amz-Signature=e34b4dd81bef834894f20d8554489533d02487cbeffd3fdf59a965757795267d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
