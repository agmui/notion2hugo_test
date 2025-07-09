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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UJPUKX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx4WjIzfido6CAYD9ZarJrYsgEmwM1vy4GytxuFPHiBAIhAIAKYrKX3yuGn94P%2B8pM83csWGhXI%2FJ911g900uVqZa8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgSqqFTXK844PtKxgq3AP%2Fh7hkgGTc2q9S52el1l8gseTsRKkcKVqq4dcv83qZo8fPJKeAlQu4moZ5MtGBzUTO904A%2FmSAgtQdTDRwq2CHUpwGC6D0EtDj5frL%2BSBycrxnuNkvIfzzwFxhaLl8vY94wDH0QOmgcCwp4WHUZYBaPDrda66j64C%2Bis6gPnyzluEeLdHfqhZtcw17eg5C5LIlJEGRLY13GfcUBygh1vDVBCWvjqIqZDTpeu5iIQJ5iLUShD2EZxVtMSl4GQOuuXSKE%2BJMBfBTehaKCk%2B41fXxFryEOaZo12MhpqL86XiIJ0kSoAAOc96VzUTNRLbPg4Y9r58ZH5Wm7m%2FDfQR%2FZx9vuskb4LNrBJaipsARGyY5JeZbNF0n2YpbyBf6s17VCrjy5f01DV2ucdlgrny9JjSbDKPtS2IxGtt4RZSJk7i6kmCdeU8suaJ297VIC5uqP9IZ6gmQeiV1h9fClcE%2FlhneoyBUJzph10bertxSaa8iIFzL7k0gi4dCWoyauZJ1P9O0UGtbCnoEc16ZNbExjRTSvShVNPXRfVROdV%2BWlgOV79P6qDSqPK9sntfB6UB2WitXGz4H5c8Cf%2FLTq2e9PjAP0zEnilxYYe1KFmwKtF5OiK9a0YrnvPBS6ZM62DDoxLvDBjqkAVBIzECVJoX7TX7%2FIZwHr3lX4lEREBn6f%2FrQeJJEJR07I72D11bDkJSMrLS0adSxa448HxiOUNG8mmNux0wqDgDpKeEKppeJD4JLiTO9oU1Cw53TiarRYBmVJRq9pLg%2BPST4s6wMV64qfpFGIJ8iQOj4a9ocuTEybL5Od12cV5T9Q9MrxA7uTnQH1VdOZ3qvUN1pD6syw6GbZ5bn3gHuPlTakpTx&X-Amz-Signature=72d8ed3b9da7a81fb7ef462b7ff88b6d3dcecfcab3bda6fc48be31284c1fc079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UJPUKX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx4WjIzfido6CAYD9ZarJrYsgEmwM1vy4GytxuFPHiBAIhAIAKYrKX3yuGn94P%2B8pM83csWGhXI%2FJ911g900uVqZa8KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgSqqFTXK844PtKxgq3AP%2Fh7hkgGTc2q9S52el1l8gseTsRKkcKVqq4dcv83qZo8fPJKeAlQu4moZ5MtGBzUTO904A%2FmSAgtQdTDRwq2CHUpwGC6D0EtDj5frL%2BSBycrxnuNkvIfzzwFxhaLl8vY94wDH0QOmgcCwp4WHUZYBaPDrda66j64C%2Bis6gPnyzluEeLdHfqhZtcw17eg5C5LIlJEGRLY13GfcUBygh1vDVBCWvjqIqZDTpeu5iIQJ5iLUShD2EZxVtMSl4GQOuuXSKE%2BJMBfBTehaKCk%2B41fXxFryEOaZo12MhpqL86XiIJ0kSoAAOc96VzUTNRLbPg4Y9r58ZH5Wm7m%2FDfQR%2FZx9vuskb4LNrBJaipsARGyY5JeZbNF0n2YpbyBf6s17VCrjy5f01DV2ucdlgrny9JjSbDKPtS2IxGtt4RZSJk7i6kmCdeU8suaJ297VIC5uqP9IZ6gmQeiV1h9fClcE%2FlhneoyBUJzph10bertxSaa8iIFzL7k0gi4dCWoyauZJ1P9O0UGtbCnoEc16ZNbExjRTSvShVNPXRfVROdV%2BWlgOV79P6qDSqPK9sntfB6UB2WitXGz4H5c8Cf%2FLTq2e9PjAP0zEnilxYYe1KFmwKtF5OiK9a0YrnvPBS6ZM62DDoxLvDBjqkAVBIzECVJoX7TX7%2FIZwHr3lX4lEREBn6f%2FrQeJJEJR07I72D11bDkJSMrLS0adSxa448HxiOUNG8mmNux0wqDgDpKeEKppeJD4JLiTO9oU1Cw53TiarRYBmVJRq9pLg%2BPST4s6wMV64qfpFGIJ8iQOj4a9ocuTEybL5Od12cV5T9Q9MrxA7uTnQH1VdOZ3qvUN1pD6syw6GbZ5bn3gHuPlTakpTx&X-Amz-Signature=1ef17add2c773cccb87f08d3a12f3f09ffbdfe453a6094ddc19f10d97bb1703a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
