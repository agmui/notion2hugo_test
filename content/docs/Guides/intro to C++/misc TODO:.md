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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKKYPVU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDCWSfMVVIUNuwp0wu90d0dZ3PbGyZswkxxK7ME9%2B42xAiEApJPEcpTd4gjbpuhDCO4dq30h6mWouIMNqIR5XTxiseIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKfio%2BD6rzybzkxwzyrcA5l%2BbKuNFDyL7K8t3NDGRZzAqlNiBsPd0rXMoIf9MTjj1%2F4PBN2mJcWmFmpR3TwVywbPZ6i2QnrLCo7KCv0P6RxXuoQLIm1vf5xM%2BcsKZ8lzmDeNZ2h9JJ9zc7B%2FnAHJv5LkxLk9w8hr8wetPcgV6E7chofkon6l26C0%2BJ5q8A4ReJam6tuMhKVYJfLch5wkKvnOHKmwGyb6dsGiA0eYsJPjTOLsQstLwa23f9FhFd00uhtyGwKvSCbY6Q8b0GuL94E5Tsi%2B9aE%2FBQe4kvtHhIZ40BPCCUrBff30hQ7N6%2BT%2F2wQbgxxXbu7%2BO7I0j%2BG%2FqnMLghWMhY2k7N8Ltc72EGwCpo4XqeEtXy8l%2BHtKgKceJ97w8fLCn3ozkrJZWEx74C9WbPNLV13eD%2B2rZNONs93xO3AzYaxZKCt0YXxkarzep1cJW%2B6Hv6o47FOmcYrCmHNylK0CDM76%2BLkQxirDN2p6g4OkrXfIn5dOGNrc9AH1NQrSpgKXRUmLF9T7Twyrze%2BVJFQrC1SPXcUaMdYNNorCkLnusIdA79gA2r7S%2BO3GlAo4E6kfV1JcJ%2BbZKB6DGn1y79Kv84oLMeEn3IGWA94GPQV8xjaLfGyAPiP%2FubF3eR3%2BJEXZQq3yj0rKMP31zb0GOqUBifm3yzqi%2FFZH%2BAOl67GUdtc2vuX1%2BW8sXU0UnF1dVoLp15jlDYPMCLeKfMoHlXl%2BW4SB5avSdiU0pIeXXh1BIGJtPZb1nBmy6y%2B%2FoNJ58CZwrJByRr8pPFFzR%2Bt6NWQNxpv3RG9nfwGRrMVVcnQwLPTUDLx8ZT88v1P3xz3YiDW6Ivawu4apHly2yaFi%2B1ieqGToD%2FIiLUBFFXFwMfBMzEWyMdsM&X-Amz-Signature=f04f9928e264f7d7fdefd425d8a73111d663e0b0a376267993926570cc151d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKKYPVU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDCWSfMVVIUNuwp0wu90d0dZ3PbGyZswkxxK7ME9%2B42xAiEApJPEcpTd4gjbpuhDCO4dq30h6mWouIMNqIR5XTxiseIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKfio%2BD6rzybzkxwzyrcA5l%2BbKuNFDyL7K8t3NDGRZzAqlNiBsPd0rXMoIf9MTjj1%2F4PBN2mJcWmFmpR3TwVywbPZ6i2QnrLCo7KCv0P6RxXuoQLIm1vf5xM%2BcsKZ8lzmDeNZ2h9JJ9zc7B%2FnAHJv5LkxLk9w8hr8wetPcgV6E7chofkon6l26C0%2BJ5q8A4ReJam6tuMhKVYJfLch5wkKvnOHKmwGyb6dsGiA0eYsJPjTOLsQstLwa23f9FhFd00uhtyGwKvSCbY6Q8b0GuL94E5Tsi%2B9aE%2FBQe4kvtHhIZ40BPCCUrBff30hQ7N6%2BT%2F2wQbgxxXbu7%2BO7I0j%2BG%2FqnMLghWMhY2k7N8Ltc72EGwCpo4XqeEtXy8l%2BHtKgKceJ97w8fLCn3ozkrJZWEx74C9WbPNLV13eD%2B2rZNONs93xO3AzYaxZKCt0YXxkarzep1cJW%2B6Hv6o47FOmcYrCmHNylK0CDM76%2BLkQxirDN2p6g4OkrXfIn5dOGNrc9AH1NQrSpgKXRUmLF9T7Twyrze%2BVJFQrC1SPXcUaMdYNNorCkLnusIdA79gA2r7S%2BO3GlAo4E6kfV1JcJ%2BbZKB6DGn1y79Kv84oLMeEn3IGWA94GPQV8xjaLfGyAPiP%2FubF3eR3%2BJEXZQq3yj0rKMP31zb0GOqUBifm3yzqi%2FFZH%2BAOl67GUdtc2vuX1%2BW8sXU0UnF1dVoLp15jlDYPMCLeKfMoHlXl%2BW4SB5avSdiU0pIeXXh1BIGJtPZb1nBmy6y%2B%2FoNJ58CZwrJByRr8pPFFzR%2Bt6NWQNxpv3RG9nfwGRrMVVcnQwLPTUDLx8ZT88v1P3xz3YiDW6Ivawu4apHly2yaFi%2B1ieqGToD%2FIiLUBFFXFwMfBMzEWyMdsM&X-Amz-Signature=b7fec9a7e2fb23c9c14c0c94aa068e032cb823cf071507d6631bcd743343393b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
