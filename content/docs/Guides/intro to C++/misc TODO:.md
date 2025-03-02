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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7Z7BQA6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBQuOq7qo0yplHl9A9%2B%2Fge9wNk8SxhKZBEUiypScFbBAIhALLIryDF6d9Rx5sYj2suutE%2Bkz39zeuOMNzbu3yJYdL2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHfv9CXGC4sPv1MgEq3AN9V9djYeV70PWw8JMfy6Wcvhe29FX%2FhoEIRyDv6s%2FCRV2imwBu0pmqXGU52%2FczX35RX%2F1aANB0WucUUNAdwtDD%2B%2F20zUPUSn1ldNOqY15MSlVSDOGH4NDwHjyTQxTxPpXpFQ7RSUwa7a6%2Bq7LBIrDKu52%2BRAyQYJGM%2Bm%2F2SJyRNXy9upF1uRktdlfyiAVa9h5dEWbVRgG0RhTduBv8tI%2Fi4ziV%2FNJWfk0w5%2FU6r%2FfVLx3iK8MT2GKMl3feRfDXD8QNGX3ocykW3RDkpUIoj6S%2FvyIRA9k4Hp0f%2B3ZcxSiS8sY1X342YyvXKhwBPiky4IRzYYlyj7PVBDH%2BAlLBMheg6G1D%2FQq2XeTD8Bn061X6qde8toMCnU%2FZQzDfV0nabC5Ks99LzleeJnsFpMNsyuPPyU39oid8zLX%2BMyP363CB6s5DRxXPIrc1zCxBSDzjo59A5cfLMp%2FO34DlfsoRMSuYpQg7FQdHq82QIBBjre5DDjuHgzP2jNxRyiDjC5F6VG68eW8xS%2FyhefRjbXyuyfEK485f0DJ%2FUVL1h4ZpQ4%2B9IOornb7%2FddgmFpEhdWFBp4DyyEoS%2Fi3NqeFZ29PuFv9JW5ttP55CQqbyMKAVzxWQ67G04xhleaIg33nICTDs95C%2BBjqkAdYusnO%2Beodct39U%2Bo7xSxw5gEdGOzrTHLfhS8wBOO2HgY%2BaMDh3fk8kG2U8iBNPyc%2BQbKAk8zNytAmRdFKISrjOR2ZdHTeaGp5Oc3kDFNOk9POPTDoQ1gkC%2FyNCfxVXqiGGmRR8DOsgrP7Ml1UOs9VpvQsLGsr05CS%2BNoYbJHoKPRR6DvqSt%2F5VF5wjMaYh2cEy7L2y%2FtUqIVy7wbkwvPmLQ9ph&X-Amz-Signature=e2e9d19c2feea2fa0e49a45fc0edfa01c898d9cb85e58d3583f8060b8fb4a1e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7Z7BQA6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBQuOq7qo0yplHl9A9%2B%2Fge9wNk8SxhKZBEUiypScFbBAIhALLIryDF6d9Rx5sYj2suutE%2Bkz39zeuOMNzbu3yJYdL2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHfv9CXGC4sPv1MgEq3AN9V9djYeV70PWw8JMfy6Wcvhe29FX%2FhoEIRyDv6s%2FCRV2imwBu0pmqXGU52%2FczX35RX%2F1aANB0WucUUNAdwtDD%2B%2F20zUPUSn1ldNOqY15MSlVSDOGH4NDwHjyTQxTxPpXpFQ7RSUwa7a6%2Bq7LBIrDKu52%2BRAyQYJGM%2Bm%2F2SJyRNXy9upF1uRktdlfyiAVa9h5dEWbVRgG0RhTduBv8tI%2Fi4ziV%2FNJWfk0w5%2FU6r%2FfVLx3iK8MT2GKMl3feRfDXD8QNGX3ocykW3RDkpUIoj6S%2FvyIRA9k4Hp0f%2B3ZcxSiS8sY1X342YyvXKhwBPiky4IRzYYlyj7PVBDH%2BAlLBMheg6G1D%2FQq2XeTD8Bn061X6qde8toMCnU%2FZQzDfV0nabC5Ks99LzleeJnsFpMNsyuPPyU39oid8zLX%2BMyP363CB6s5DRxXPIrc1zCxBSDzjo59A5cfLMp%2FO34DlfsoRMSuYpQg7FQdHq82QIBBjre5DDjuHgzP2jNxRyiDjC5F6VG68eW8xS%2FyhefRjbXyuyfEK485f0DJ%2FUVL1h4ZpQ4%2B9IOornb7%2FddgmFpEhdWFBp4DyyEoS%2Fi3NqeFZ29PuFv9JW5ttP55CQqbyMKAVzxWQ67G04xhleaIg33nICTDs95C%2BBjqkAdYusnO%2Beodct39U%2Bo7xSxw5gEdGOzrTHLfhS8wBOO2HgY%2BaMDh3fk8kG2U8iBNPyc%2BQbKAk8zNytAmRdFKISrjOR2ZdHTeaGp5Oc3kDFNOk9POPTDoQ1gkC%2FyNCfxVXqiGGmRR8DOsgrP7Ml1UOs9VpvQsLGsr05CS%2BNoYbJHoKPRR6DvqSt%2F5VF5wjMaYh2cEy7L2y%2FtUqIVy7wbkwvPmLQ9ph&X-Amz-Signature=1407879084c2bb3a08c8643024a43da3a8ce7f4877cd5e0a2567d859f16b9fc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
