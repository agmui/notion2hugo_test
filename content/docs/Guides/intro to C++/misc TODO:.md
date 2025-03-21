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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTMOBUO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIEi1SJzQlN0jIZ65cHtiCKvcUPyd%2F5RHk105C5CwXJoLAiBLrr%2B521Vhbs9GRL7OHy4BexLIDP3lMrSVJQVl4%2FYzbyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHor24OhWgdonkNK2KtwDc1sfzdp%2F9PbkyL2YgDGYwGyz49AY3LfBHiJa71m503OlolUVN7G50UwPZeHMeMY%2FDcyhV290GFCbU5o0mxcEXRiDbQ%2Br3RA2ynTv8gd2An13XtgOxsctK1tVbduoAL55sal2b06etsJbEqoM5kKXbISvOaqbASrMRjnR3GVJXSo16uhToBFa3tTXtzUpwfdAeAcGbv42mo2Wc4%2BmMIldFVkBO%2B1vBEREC0A6A08YUhc%2Bl%2FEZZrFSS1iToY2kAER2Pas8VTv1AQRzyvrZXmYPB%2FR1IhuvTQw7jCGu61Q4TcS%2Bl0wIBkcUKqN8EmSzUEVgOGdVYY9EqsVbCvNioxn9E46nSROzNZEBHqBnA9%2F5TPh8vdBAT5oJs9VN4kmpXz4wEqeW8B3AxwKk57B2HAoRm5yse5mRWq%2FI%2FUiTjTtClmXMPiL2uytw2GvB%2BOD5Y%2FYxtfuW%2FEtzvSoSoSoIGaolGKxAfA5uzzolVutTdCe%2FmQCTsXgwMDDhEZKO9A%2FGvDpmNsbq%2BH1t9BI244ApHZy69vc%2FDeqFL6zUhu2HVPo7ZKIcSg47t58ddipKFVUrE7nLKolG9GTS9fLe2S2EqwmZ1H2bUbr5C1r54h4xX95QkwceI7t2QhYNawZBrScwtvz1vgY6pgGob7EhyRNp0e%2F9jgplT74w0fs1gD%2FbM8bI8c182jAEs5xoFGYjs%2BWY%2FXNv61khNtXOsVEH5kQNTcehpvGz5mTzJaq5pk62GWWr9b%2BY6kjS3uNCzrW0dkpS%2BMrm4g7gfmKnqAA0xtLINZsMkInL5zHNMugGjWq4Xbmyq164z1J4sP4pNVXU4Kz%2FkNbUjS1c1qDNELxey8p3HA2OrkqPWUvyqz7nnhL%2F&X-Amz-Signature=49abaa4283572429dbd70b764c8d8662aaf84b1efaa3d4f30781c1a7de25bb43&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTMOBUO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIEi1SJzQlN0jIZ65cHtiCKvcUPyd%2F5RHk105C5CwXJoLAiBLrr%2B521Vhbs9GRL7OHy4BexLIDP3lMrSVJQVl4%2FYzbyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHor24OhWgdonkNK2KtwDc1sfzdp%2F9PbkyL2YgDGYwGyz49AY3LfBHiJa71m503OlolUVN7G50UwPZeHMeMY%2FDcyhV290GFCbU5o0mxcEXRiDbQ%2Br3RA2ynTv8gd2An13XtgOxsctK1tVbduoAL55sal2b06etsJbEqoM5kKXbISvOaqbASrMRjnR3GVJXSo16uhToBFa3tTXtzUpwfdAeAcGbv42mo2Wc4%2BmMIldFVkBO%2B1vBEREC0A6A08YUhc%2Bl%2FEZZrFSS1iToY2kAER2Pas8VTv1AQRzyvrZXmYPB%2FR1IhuvTQw7jCGu61Q4TcS%2Bl0wIBkcUKqN8EmSzUEVgOGdVYY9EqsVbCvNioxn9E46nSROzNZEBHqBnA9%2F5TPh8vdBAT5oJs9VN4kmpXz4wEqeW8B3AxwKk57B2HAoRm5yse5mRWq%2FI%2FUiTjTtClmXMPiL2uytw2GvB%2BOD5Y%2FYxtfuW%2FEtzvSoSoSoIGaolGKxAfA5uzzolVutTdCe%2FmQCTsXgwMDDhEZKO9A%2FGvDpmNsbq%2BH1t9BI244ApHZy69vc%2FDeqFL6zUhu2HVPo7ZKIcSg47t58ddipKFVUrE7nLKolG9GTS9fLe2S2EqwmZ1H2bUbr5C1r54h4xX95QkwceI7t2QhYNawZBrScwtvz1vgY6pgGob7EhyRNp0e%2F9jgplT74w0fs1gD%2FbM8bI8c182jAEs5xoFGYjs%2BWY%2FXNv61khNtXOsVEH5kQNTcehpvGz5mTzJaq5pk62GWWr9b%2BY6kjS3uNCzrW0dkpS%2BMrm4g7gfmKnqAA0xtLINZsMkInL5zHNMugGjWq4Xbmyq164z1J4sP4pNVXU4Kz%2FkNbUjS1c1qDNELxey8p3HA2OrkqPWUvyqz7nnhL%2F&X-Amz-Signature=7b01fec044cc00a049061da2610653ce518089dddfa6d86b76fe5804d060f587&X-Amz-SignedHeaders=host&x-id=GetObject)

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
