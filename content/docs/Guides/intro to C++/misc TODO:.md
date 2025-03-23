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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZDC3H2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHQLkkMdlIvXEVCsUuDDcxu3QQR3%2FPJP5fMsRFRLY4aVAiEAto67wbuifZ529XE%2F46P2gEAiN7NwcviTkc22P46LRR8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdtrRM15eCYdwjSsSrcA8%2FFbr6Oyb0eebGnuu3qQ4dfkzyzCtmU88nrwricZHCiI20GqVUhaxIlcLKasJ55olU%2FTXtZ2ynBAvd%2BHanzPmMBIIOrwwsiKDOysYNsMs9osyS3%2B5ABBI0TBn%2FR9mGulMcZlNFhHaolw1cZ6pTf0uV%2Be9S4pp7Of59ZjvNBpYqthEdPAyysGmE8ZA5wbzozxSPtfy42Qh5d3ffLREF6gmhiOtC%2BBJGPpJhTWVMzxVhPu5i6eTOqqRFA7O%2BWcYUyDvAZuimPWHfpUKzSpO3Q3Wyu3JmD%2BIecVNnseoJhlIkOPQb5Ku3I1s%2B52XjBrxRYomJD5MiI3V%2BisY0oq6hKGTl7ISVM8IDSHs2G7ht%2F65AIuUsq99wypNpMthWktTKR8wKWygz1gi8pZjmBe69%2BqgFqVdMSEVFh9kbbXFCAb52nyglctXdVFajXV8%2FlqE6454v2yYMcn7AUfPRB1VB5gVQTIk21oXdQrxLAiTUmA65Yf5vJtbHnamiy8JaOfdHtFCCiGiAOmM0ChfUf1p%2FXGDmqwkpFJXy3aL1Gec%2FOV96UQIZTxwIKwib%2FZ0zvNecZwH6RRsmbDTMRpUcrm6g6S%2B8Mt7E1Z57hkzcRK3mSZhiPfdaP%2F0akzCwUyGTfMI7j%2Fb4GOqUBHr5vtFNpyOR50VxKwx5v1rJl74mgNVHN57Mk3n3HkbBFwEi7ZRQbTjpQq09jYBS1pwMZs1a7YwK53zcTifo5WD9pDUBOkggD7L5l%2BTKrPUCqdc75dpy%2BpqG7wH3XLiDycW5P3TGbgqDO5uioeab4BxLvayMRQlJcimCm0ddU%2BI4kQczopbVVQl93oCL5lsGCd595pwYhgK9fyY8ANuUTFqcm1SGK&X-Amz-Signature=f1bc61e8f8fed66b91af6c313e059afd7981b11647cbef5a322a41860af13cec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZDC3H2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHQLkkMdlIvXEVCsUuDDcxu3QQR3%2FPJP5fMsRFRLY4aVAiEAto67wbuifZ529XE%2F46P2gEAiN7NwcviTkc22P46LRR8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdtrRM15eCYdwjSsSrcA8%2FFbr6Oyb0eebGnuu3qQ4dfkzyzCtmU88nrwricZHCiI20GqVUhaxIlcLKasJ55olU%2FTXtZ2ynBAvd%2BHanzPmMBIIOrwwsiKDOysYNsMs9osyS3%2B5ABBI0TBn%2FR9mGulMcZlNFhHaolw1cZ6pTf0uV%2Be9S4pp7Of59ZjvNBpYqthEdPAyysGmE8ZA5wbzozxSPtfy42Qh5d3ffLREF6gmhiOtC%2BBJGPpJhTWVMzxVhPu5i6eTOqqRFA7O%2BWcYUyDvAZuimPWHfpUKzSpO3Q3Wyu3JmD%2BIecVNnseoJhlIkOPQb5Ku3I1s%2B52XjBrxRYomJD5MiI3V%2BisY0oq6hKGTl7ISVM8IDSHs2G7ht%2F65AIuUsq99wypNpMthWktTKR8wKWygz1gi8pZjmBe69%2BqgFqVdMSEVFh9kbbXFCAb52nyglctXdVFajXV8%2FlqE6454v2yYMcn7AUfPRB1VB5gVQTIk21oXdQrxLAiTUmA65Yf5vJtbHnamiy8JaOfdHtFCCiGiAOmM0ChfUf1p%2FXGDmqwkpFJXy3aL1Gec%2FOV96UQIZTxwIKwib%2FZ0zvNecZwH6RRsmbDTMRpUcrm6g6S%2B8Mt7E1Z57hkzcRK3mSZhiPfdaP%2F0akzCwUyGTfMI7j%2Fb4GOqUBHr5vtFNpyOR50VxKwx5v1rJl74mgNVHN57Mk3n3HkbBFwEi7ZRQbTjpQq09jYBS1pwMZs1a7YwK53zcTifo5WD9pDUBOkggD7L5l%2BTKrPUCqdc75dpy%2BpqG7wH3XLiDycW5P3TGbgqDO5uioeab4BxLvayMRQlJcimCm0ddU%2BI4kQczopbVVQl93oCL5lsGCd595pwYhgK9fyY8ANuUTFqcm1SGK&X-Amz-Signature=a4a5313d8caa61b8f0c29c949690bdea2ac12c89440260b287069ae8f364a389&X-Amz-SignedHeaders=host&x-id=GetObject)

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
