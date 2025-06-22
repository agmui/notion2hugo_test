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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J3E3MQQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFBKS5pqetZlb6l284Ymm3YGGSXy%2BHdSs726mhthTFvpAiEApHU94dRK2EIkvvn%2FUd49a3HDmQE3FAQq6DQ7%2BIde0xIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7383MSV48Jypu1VCrcAzz4ab%2Fs3o4Eno7GnUy%2FSIeA2j2T8unWtlhyMillXjU13EH%2FCtqAskxaIU7VL6ASPw%2Fi3RwcPQz5C%2Fw%2FZKX8p9cNZ6WJuAbbGU1xvH08G5%2FiqDvaqeTPifmiup%2FSuBc3o2X6w%2BS6pBxrwBeDAWsw430baDaZr9AqRfkwG1CYp2wyyaXe3c4L8cJGCyuliTP8enC8GYllqBEQcUSruAXLAFj%2FQxvKpD2qVkSfX4C3pezbMBM0JAxoPyiwKffmrGK9Hh2lU3W6Dfao6yoJ11mQmX3%2FxB0UKstRNuRG4HaNLBm3ucNsyBtS8ePcRXXF6z07%2BlKjBs1kXh0kTMXuwLpoBbXjzuRHAXeFpbvn41RIivpEqFCd7b5mB4kDqR4K5LfrrrskbWo%2F1VqBJvs2duQMIAhEhJZScZLNz%2BkKh%2Bo2XE%2B3U8xWKDKjv%2F9QtKzw7fOdkyqteOV9mg8iOh1kQKxpyGD7DNW9gyb7uf7C6w%2BeP%2FUc9tHBk2TL3mUYa9nIKBn5dUVxMSOSKxJXaxyx13oMbsFb9lwbEzsO%2Bd3jbzIatGp6Xv8zbLZvdOH3mxvhCyFT1BIWY5iMEV0N9l2Xqz4Yt2NNP7kJREJMySmzK8byQs0UJ4c41qbZCL5yCjmpMPmT4cIGOqUBLymwSEgeQCv5WX5Xwe7fl9nZn1gBaxYp6aKwSldSsyl3sWLcUdPJWnic3rQR1hFnd%2Fo%2BKpnFh6qvCACXvRjfBd3fJhWrby%2BIc0IJflNxi4HON0ZZIUjcTVDts3CuEUHSiGq0vZ0dGMwhEAkPfdJfrbCVw454rvl9AkjPzdUbP%2Fcx5X0ybo9d3Jbn7%2FuLetPFenN5TBWJEz1UH4ecgnhwaxpPo5ZP&X-Amz-Signature=7c1c26c613be7372f27debc36bf2bc7c1686ec0321757279330d962d535b7ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J3E3MQQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFBKS5pqetZlb6l284Ymm3YGGSXy%2BHdSs726mhthTFvpAiEApHU94dRK2EIkvvn%2FUd49a3HDmQE3FAQq6DQ7%2BIde0xIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7383MSV48Jypu1VCrcAzz4ab%2Fs3o4Eno7GnUy%2FSIeA2j2T8unWtlhyMillXjU13EH%2FCtqAskxaIU7VL6ASPw%2Fi3RwcPQz5C%2Fw%2FZKX8p9cNZ6WJuAbbGU1xvH08G5%2FiqDvaqeTPifmiup%2FSuBc3o2X6w%2BS6pBxrwBeDAWsw430baDaZr9AqRfkwG1CYp2wyyaXe3c4L8cJGCyuliTP8enC8GYllqBEQcUSruAXLAFj%2FQxvKpD2qVkSfX4C3pezbMBM0JAxoPyiwKffmrGK9Hh2lU3W6Dfao6yoJ11mQmX3%2FxB0UKstRNuRG4HaNLBm3ucNsyBtS8ePcRXXF6z07%2BlKjBs1kXh0kTMXuwLpoBbXjzuRHAXeFpbvn41RIivpEqFCd7b5mB4kDqR4K5LfrrrskbWo%2F1VqBJvs2duQMIAhEhJZScZLNz%2BkKh%2Bo2XE%2B3U8xWKDKjv%2F9QtKzw7fOdkyqteOV9mg8iOh1kQKxpyGD7DNW9gyb7uf7C6w%2BeP%2FUc9tHBk2TL3mUYa9nIKBn5dUVxMSOSKxJXaxyx13oMbsFb9lwbEzsO%2Bd3jbzIatGp6Xv8zbLZvdOH3mxvhCyFT1BIWY5iMEV0N9l2Xqz4Yt2NNP7kJREJMySmzK8byQs0UJ4c41qbZCL5yCjmpMPmT4cIGOqUBLymwSEgeQCv5WX5Xwe7fl9nZn1gBaxYp6aKwSldSsyl3sWLcUdPJWnic3rQR1hFnd%2Fo%2BKpnFh6qvCACXvRjfBd3fJhWrby%2BIc0IJflNxi4HON0ZZIUjcTVDts3CuEUHSiGq0vZ0dGMwhEAkPfdJfrbCVw454rvl9AkjPzdUbP%2Fcx5X0ybo9d3Jbn7%2FuLetPFenN5TBWJEz1UH4ecgnhwaxpPo5ZP&X-Amz-Signature=14162f172b1217a0545312904e1de94ae2fce631daadd15cd52b6b2b70a3459b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
