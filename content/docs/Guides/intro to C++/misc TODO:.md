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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FXDOKVP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuMQpRrlQOFiJDn5%2FOvdBGJX6x2drm39HyxscDxdCVpAiEA2wUb05KRDEQlaEN6ed%2BnmiCi3VMD1zepbGrNPy%2B40KkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqnESfba9WMoKcSQircA2qFVrgifOiBrud91sdkzY3eeIwg1FO8YlFE8m0DuhsjusEkRVp0pf2xe8KfIVh3N1vCefTJ9tOvRRUC0ZHDGA4hrL1MeLNmjUvmtmawwO%2B7pxvrGHPv0bmZefZXgKVaGgsh7lbm3Gl4msw47fKzahmrXtuYIc3HfYn4ywsaodfnU6kLHFobeCXPmQ%2B2IKTxdx22dz0m0yeMLaW9fY171I7zO1PJv6ItiLkzWXYNEuKDKHoa28tyEM%2BfOMGJVU5nxiFOgQWAJDbq2dQvL%2FkPHEGU0dTy5A9HyvVZ7HE3nZ8sieaCe4vDzwE8ip%2Fi%2F%2FGcqmcTmEoLXwlOhmJnF%2B2JYwxmrpSLk5qMYScmaSKCL%2B7x68%2BgBL%2Ff0lag4UIfyuR2cDNFiHRcRiUdrkeAg9EvcYxD6wsKw%2BMeEpYNnh7gh%2FdVC9mb2j0s8bIWNc1zDBDuwyERxhr0Sbu1WZUV0wxxI3V1VXv4FsZAEsn4i5tttvoiYGqps%2BUzpox6rK2aVO7TTetKFOdi3stV3wYwffk2T9Ds%2BWp0AoOlnqzhKiC0%2BIltXEjgv29ewOpTRPmXVMM9gS4Qs0L4epNMrbTdZxH2nvzjX7CNHIGcAv%2BgV13Qf%2BdcXIx6W%2Bq%2FzeR3NKiGMIapwsAGOqUBYLPTx55TLp7m%2FLLEJ0TSIFbQiQq92zFnNdzctAv9uUUJXfF4OXtwhA6m5Ne7qHhEB60D3RvB9QcNs6dN3cp%2FeTR1R2WpHPSkFAPDAAAerGNYm%2Fkx4e3XPpA%2BQox8m9bpv21ikNkZc2pQ0%2FJULVN4VDunbRRWCqlfQ5%2BXNUF6CubsCs1bApJC091IQl68kr5JL5APGspNTVNeWu4z0tMP2j9v%2B%2Bx%2B&X-Amz-Signature=916118a1dc0be663c99d29e5ac24cbaace882225225795018ad638d9ead354f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FXDOKVP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuMQpRrlQOFiJDn5%2FOvdBGJX6x2drm39HyxscDxdCVpAiEA2wUb05KRDEQlaEN6ed%2BnmiCi3VMD1zepbGrNPy%2B40KkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqnESfba9WMoKcSQircA2qFVrgifOiBrud91sdkzY3eeIwg1FO8YlFE8m0DuhsjusEkRVp0pf2xe8KfIVh3N1vCefTJ9tOvRRUC0ZHDGA4hrL1MeLNmjUvmtmawwO%2B7pxvrGHPv0bmZefZXgKVaGgsh7lbm3Gl4msw47fKzahmrXtuYIc3HfYn4ywsaodfnU6kLHFobeCXPmQ%2B2IKTxdx22dz0m0yeMLaW9fY171I7zO1PJv6ItiLkzWXYNEuKDKHoa28tyEM%2BfOMGJVU5nxiFOgQWAJDbq2dQvL%2FkPHEGU0dTy5A9HyvVZ7HE3nZ8sieaCe4vDzwE8ip%2Fi%2F%2FGcqmcTmEoLXwlOhmJnF%2B2JYwxmrpSLk5qMYScmaSKCL%2B7x68%2BgBL%2Ff0lag4UIfyuR2cDNFiHRcRiUdrkeAg9EvcYxD6wsKw%2BMeEpYNnh7gh%2FdVC9mb2j0s8bIWNc1zDBDuwyERxhr0Sbu1WZUV0wxxI3V1VXv4FsZAEsn4i5tttvoiYGqps%2BUzpox6rK2aVO7TTetKFOdi3stV3wYwffk2T9Ds%2BWp0AoOlnqzhKiC0%2BIltXEjgv29ewOpTRPmXVMM9gS4Qs0L4epNMrbTdZxH2nvzjX7CNHIGcAv%2BgV13Qf%2BdcXIx6W%2Bq%2FzeR3NKiGMIapwsAGOqUBYLPTx55TLp7m%2FLLEJ0TSIFbQiQq92zFnNdzctAv9uUUJXfF4OXtwhA6m5Ne7qHhEB60D3RvB9QcNs6dN3cp%2FeTR1R2WpHPSkFAPDAAAerGNYm%2Fkx4e3XPpA%2BQox8m9bpv21ikNkZc2pQ0%2FJULVN4VDunbRRWCqlfQ5%2BXNUF6CubsCs1bApJC091IQl68kr5JL5APGspNTVNeWu4z0tMP2j9v%2B%2Bx%2B&X-Amz-Signature=4705e42b69fda0d4778f70c1a9ea9889bb54d229bee5e5bc3db7ae20ba7b9269&X-Amz-SignedHeaders=host&x-id=GetObject)

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
