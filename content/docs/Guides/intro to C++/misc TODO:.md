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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNM4YIM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2mtb5sF7hR87EjuxJTmom6cVl4pg9gPJFq2731rWj%2BwIgep7TBoZKAMHleJSEp%2BBe%2FNBRxcWAoHBuBaYT11bEE2YqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfwcjX48sfV501SGSrcAxX5vEQVOhNXcDIKOlhQ6f1OJpViiG0zdrn3A7Kun1qGDYBxOwEbMsupKP1gXrZpjtfVtMPbq%2B4625sKSiy%2BnUONcXuncqRg%2F94gVPRONy%2F2NSp6F2HENNNVeea0Chmv1R7R7DnLIZnLH8rlAIa1FuAl7DUpID3drwB59nhuAEPWyyAvjFgXavHbQocDG7X9EBMpiy12nxqEXUp4GN8pSWm%2Fvde6zTQFrrBjDkASSup2QASCpHiqD0L1sul0LWj6rVZEI7ygo%2B48D%2FfDtSvx2px%2BwSTKq1snzaUHRnH%2FZQc2MyQzDaIVsFeaghPrSq4ToC%2FEzgHbw4Gin%2B6RXtBu24Q0sWe%2FfOkFSoxA5VaG8%2FddOOzEZgFgIMPwxPGf0hYqYK%2FA8LTkDyJ4zwjdEzHXtQsR8JE32EEIHvTqpoXieYYPqxfOaF7XwrEvIKx7W8OZviyB8%2BtZxtQ4Wmtx8ZWXLw26f7sSZefG%2BSa6RHLScHrLJT2EWZmmfPYtrqC81ixlnPqK7qDcfIRVWS%2BJm%2BdATERbOeW%2FNhlKqztj9%2BINTrVjHY7NJD6dpK%2FKtHQVJfV9AAO%2BRYhR9dYafsN7MYfkUNO4AGrw0CUsskIZMDax7%2B0XH%2FjSIy6YW1zFAdGhMKqijMAGOqUBKb3IUm%2BlUEkzjitrBeqPf8wOfGEpWgHEFs8v%2Fh6D2KYMfZBxW%2Fhc5n3q8oJ6m8wu428%2Fdepqw%2FnAKYfMfEAJ46Al1c8zOZkBEMi6bv2WinE%2F5dyLPmt1sVd5X08eqxXUmozbFpGXiKqPz62rnPFAzqSx8tK8ex90TfN6FPE6DwxdmEAtJwhYRdiK1ELb1SyuOCIWkRt%2FShLgTjsbkW%2F6RuU9C2Ak&X-Amz-Signature=d91a6d30026c790e97bce3b810fbbc49b7a54c7e01e59a7b3ed1dd698451bd88&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNM4YIM%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2mtb5sF7hR87EjuxJTmom6cVl4pg9gPJFq2731rWj%2BwIgep7TBoZKAMHleJSEp%2BBe%2FNBRxcWAoHBuBaYT11bEE2YqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfwcjX48sfV501SGSrcAxX5vEQVOhNXcDIKOlhQ6f1OJpViiG0zdrn3A7Kun1qGDYBxOwEbMsupKP1gXrZpjtfVtMPbq%2B4625sKSiy%2BnUONcXuncqRg%2F94gVPRONy%2F2NSp6F2HENNNVeea0Chmv1R7R7DnLIZnLH8rlAIa1FuAl7DUpID3drwB59nhuAEPWyyAvjFgXavHbQocDG7X9EBMpiy12nxqEXUp4GN8pSWm%2Fvde6zTQFrrBjDkASSup2QASCpHiqD0L1sul0LWj6rVZEI7ygo%2B48D%2FfDtSvx2px%2BwSTKq1snzaUHRnH%2FZQc2MyQzDaIVsFeaghPrSq4ToC%2FEzgHbw4Gin%2B6RXtBu24Q0sWe%2FfOkFSoxA5VaG8%2FddOOzEZgFgIMPwxPGf0hYqYK%2FA8LTkDyJ4zwjdEzHXtQsR8JE32EEIHvTqpoXieYYPqxfOaF7XwrEvIKx7W8OZviyB8%2BtZxtQ4Wmtx8ZWXLw26f7sSZefG%2BSa6RHLScHrLJT2EWZmmfPYtrqC81ixlnPqK7qDcfIRVWS%2BJm%2BdATERbOeW%2FNhlKqztj9%2BINTrVjHY7NJD6dpK%2FKtHQVJfV9AAO%2BRYhR9dYafsN7MYfkUNO4AGrw0CUsskIZMDax7%2B0XH%2FjSIy6YW1zFAdGhMKqijMAGOqUBKb3IUm%2BlUEkzjitrBeqPf8wOfGEpWgHEFs8v%2Fh6D2KYMfZBxW%2Fhc5n3q8oJ6m8wu428%2Fdepqw%2FnAKYfMfEAJ46Al1c8zOZkBEMi6bv2WinE%2F5dyLPmt1sVd5X08eqxXUmozbFpGXiKqPz62rnPFAzqSx8tK8ex90TfN6FPE6DwxdmEAtJwhYRdiK1ELb1SyuOCIWkRt%2FShLgTjsbkW%2F6RuU9C2Ak&X-Amz-Signature=e21f434cfcfebb5aaa353f027f4802660ab0d0cb53d130444d9a61b2c59472c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
