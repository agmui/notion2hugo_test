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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCH2HCC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfJ8Cdomein7tg%2BFIPoXcx%2FPI%2F050ptjT0RZNCn3e5AiEAjfgMy6atJcfpugzEPumDZ1aBGfmVxWDYgkSP1j6R2H8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F41pnBokl2gMJRtCrcA8mnItgL2YNMn5bqcND%2FGSq1TpZ9ofjsQcZnlG%2BGxrAnHwydyI2nwi1i9tFXAjq%2Fb9quY%2BzXdDZBA67plU7AVQLvBvjGTKFvsVHa%2B%2FvZmSIeyMu6ypG57M7cWbKW7eTAUPFdIctuS8cWcgYDoplI1NbP7fVEIUTZgz4jLsOSpQksia8a%2BmvCy7ohDvThgE2uFaxRKD%2BCSEQsU3dx3CE049%2FY5XTlptHIe974qt1i6ldi%2FMyIsiQPrx2uAbiBXw6lOVQlB1XrgFYqQTobGTpiPrQzPNdcDCJ%2FU4IE%2FCo5XNPfTi8w5xWdHm5BAzsKgso%2BfzCTWJhXlmVUXBUF92rymVpWeyTnXIbYT1AteleYKh1EoBIDS%2BIQt1GI9IKdMmV0Z0MZbuWxVNt%2F8FssWOZekZl5VSD70XCIPt5ehJrb5hr8PnFViiCG9K1aY0pl2yxnuDf%2BT%2FTRkcNRzPM5CTTodUul2uFUmvSbb8aa2jgFeIqgZujmDt%2F3p6PShSqUoyuv3Cfc4HWMdpAvIK%2FIBoLLhXoy7dh7gfowHMY5D1gPQdDtGwaFVbGNtuUu2bMdL8j0tczkCmHedJqb%2BkjCuVcav34ZtOXEBBvHLQ2MJdvl5mZc9829ISam68KDNpb6MOOsq70GOqUB59v4VxIJ8xMV2NUqGr0O6OTWmZlyUzDre7elKV7nBgNT8cBc4LRtG0G%2Bj7IkH0qCY78n7Ttzh1vmdNYa%2FoCgBCDAQ6zkf%2FCw7lOCf9%2BwFWLMAu%2FX%2BwPKeieHNR8nRLHgL8Wszx9c%2F8cMjh51LovY%2BugYUOe9LYo0ah%2BXcbIfIFgnVhZ4UY%2BHTWJOwkTG60uoNGZsE%2F1E3Ffm8XzKiYgBCECXHdlg&X-Amz-Signature=bb28b9b7db0d5ba6d1c88906c5e312a15bac731e3fa4b6bb115011a4e7f54bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCH2HCC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPfJ8Cdomein7tg%2BFIPoXcx%2FPI%2F050ptjT0RZNCn3e5AiEAjfgMy6atJcfpugzEPumDZ1aBGfmVxWDYgkSP1j6R2H8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2F41pnBokl2gMJRtCrcA8mnItgL2YNMn5bqcND%2FGSq1TpZ9ofjsQcZnlG%2BGxrAnHwydyI2nwi1i9tFXAjq%2Fb9quY%2BzXdDZBA67plU7AVQLvBvjGTKFvsVHa%2B%2FvZmSIeyMu6ypG57M7cWbKW7eTAUPFdIctuS8cWcgYDoplI1NbP7fVEIUTZgz4jLsOSpQksia8a%2BmvCy7ohDvThgE2uFaxRKD%2BCSEQsU3dx3CE049%2FY5XTlptHIe974qt1i6ldi%2FMyIsiQPrx2uAbiBXw6lOVQlB1XrgFYqQTobGTpiPrQzPNdcDCJ%2FU4IE%2FCo5XNPfTi8w5xWdHm5BAzsKgso%2BfzCTWJhXlmVUXBUF92rymVpWeyTnXIbYT1AteleYKh1EoBIDS%2BIQt1GI9IKdMmV0Z0MZbuWxVNt%2F8FssWOZekZl5VSD70XCIPt5ehJrb5hr8PnFViiCG9K1aY0pl2yxnuDf%2BT%2FTRkcNRzPM5CTTodUul2uFUmvSbb8aa2jgFeIqgZujmDt%2F3p6PShSqUoyuv3Cfc4HWMdpAvIK%2FIBoLLhXoy7dh7gfowHMY5D1gPQdDtGwaFVbGNtuUu2bMdL8j0tczkCmHedJqb%2BkjCuVcav34ZtOXEBBvHLQ2MJdvl5mZc9829ISam68KDNpb6MOOsq70GOqUB59v4VxIJ8xMV2NUqGr0O6OTWmZlyUzDre7elKV7nBgNT8cBc4LRtG0G%2Bj7IkH0qCY78n7Ttzh1vmdNYa%2FoCgBCDAQ6zkf%2FCw7lOCf9%2BwFWLMAu%2FX%2BwPKeieHNR8nRLHgL8Wszx9c%2F8cMjh51LovY%2BugYUOe9LYo0ah%2BXcbIfIFgnVhZ4UY%2BHTWJOwkTG60uoNGZsE%2F1E3Ffm8XzKiYgBCECXHdlg&X-Amz-Signature=4f3332f2c2f8065bb148ccb35357f703a081fe8c003ba7a0f2e3c678640ad455&X-Amz-SignedHeaders=host&x-id=GetObject)

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
