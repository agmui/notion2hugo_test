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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GHAT55Q%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiHR2e08QSbDBkoUpFZuE%2FoNKA27WGX0b2%2Brn7LD8SFAiEAj07kkFCEMBhEW510lDoW%2FzsRcbMcPaUp9UWHoj4LzKkq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA2cQjPSYsBspskVcyrcAzisju0HGFCuF3tg6IzYSFHeKIkGQRFlChmOqrLVO01j4A%2FpxinAYKtRfqg1kkLewPrURBCrqCjbxdvSBC%2FootBPbmtnEaOH6SA2tD4Ah40tR4bsvMYNp2pDH0EE6JC%2B94ZVi9TXELoCSS%2FL4By09S3c%2F9FCAnXWNTQdIMw9vDNrh6%2BBQUSvhpyEnEjKtSiFtCZLgN3tfnd3n08BO3lhegyWvSyxkCQ5OoRmXWFTPqLcIcL%2FNZB9NDKa3UXM7fVnTTAzpFdFWR%2Fk93NVVsVrM7SUYoSEhfRgswmgb%2BagQJnmVTgN8wwCN99jDT32m5WTG0yznZZwcwz%2Fsj5aOeMWpu%2BN1tfNH4uo3jRrQVXSLYfZpasrAHEq8SRbm%2FRsBzNQCZMqcLDVWnocFEnlFNE6%2Byi5730u77Rh8YEOivt%2F4qqHvQ8ptWXR21Iu5LGVyjVa2CXms0mpV0htEAgYcitZzd6IcZ2%2F%2BdZ6dLMmoxtQ0cJHMHVAPTx2TSCyBAprX%2FDwY%2BHqx%2FOl7vkdoOvTB%2FNhegwGGLs4CCTapwGKVFBOugH5KqbPMXfK2oZXaH2Cx5IwHfG8QCOfbsmUcJzqYKOBj8imqkDRo7ELHeqB9TGVfSRUqJJFehsroMA31v6cMPWbhcAGOqUBEC32NFLJTvh8zKQ8ghtpLdaHp5yJZx5qhT4cwkE8ICShswGaRjJeA8gEZxsKLX4tfn%2BcrFtp%2FM2p6YTyJK1xaFBi8XQP2%2BcPKKqL%2FXptCWKxMKVC7fC7iEDxnTka0V5R%2F38oNiUaljnNq2bQ0Yc6XP4CWDY3%2BPfMWcgJfUwWFyfJkp9Lnl83kwqj4AoTj%2Bd2rX7Dk8Jq8Yf0LlqtndjtJ2Msbqki&X-Amz-Signature=76392aa4086d292abec89707f158e53bedeed3726d255d85c716193531dcf8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GHAT55Q%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiHR2e08QSbDBkoUpFZuE%2FoNKA27WGX0b2%2Brn7LD8SFAiEAj07kkFCEMBhEW510lDoW%2FzsRcbMcPaUp9UWHoj4LzKkq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA2cQjPSYsBspskVcyrcAzisju0HGFCuF3tg6IzYSFHeKIkGQRFlChmOqrLVO01j4A%2FpxinAYKtRfqg1kkLewPrURBCrqCjbxdvSBC%2FootBPbmtnEaOH6SA2tD4Ah40tR4bsvMYNp2pDH0EE6JC%2B94ZVi9TXELoCSS%2FL4By09S3c%2F9FCAnXWNTQdIMw9vDNrh6%2BBQUSvhpyEnEjKtSiFtCZLgN3tfnd3n08BO3lhegyWvSyxkCQ5OoRmXWFTPqLcIcL%2FNZB9NDKa3UXM7fVnTTAzpFdFWR%2Fk93NVVsVrM7SUYoSEhfRgswmgb%2BagQJnmVTgN8wwCN99jDT32m5WTG0yznZZwcwz%2Fsj5aOeMWpu%2BN1tfNH4uo3jRrQVXSLYfZpasrAHEq8SRbm%2FRsBzNQCZMqcLDVWnocFEnlFNE6%2Byi5730u77Rh8YEOivt%2F4qqHvQ8ptWXR21Iu5LGVyjVa2CXms0mpV0htEAgYcitZzd6IcZ2%2F%2BdZ6dLMmoxtQ0cJHMHVAPTx2TSCyBAprX%2FDwY%2BHqx%2FOl7vkdoOvTB%2FNhegwGGLs4CCTapwGKVFBOugH5KqbPMXfK2oZXaH2Cx5IwHfG8QCOfbsmUcJzqYKOBj8imqkDRo7ELHeqB9TGVfSRUqJJFehsroMA31v6cMPWbhcAGOqUBEC32NFLJTvh8zKQ8ghtpLdaHp5yJZx5qhT4cwkE8ICShswGaRjJeA8gEZxsKLX4tfn%2BcrFtp%2FM2p6YTyJK1xaFBi8XQP2%2BcPKKqL%2FXptCWKxMKVC7fC7iEDxnTka0V5R%2F38oNiUaljnNq2bQ0Yc6XP4CWDY3%2BPfMWcgJfUwWFyfJkp9Lnl83kwqj4AoTj%2Bd2rX7Dk8Jq8Yf0LlqtndjtJ2Msbqki&X-Amz-Signature=8ff3c199f85f539300f274ef338defea2bb6e88077adf4865601ff7cf003d290&X-Amz-SignedHeaders=host&x-id=GetObject)

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
