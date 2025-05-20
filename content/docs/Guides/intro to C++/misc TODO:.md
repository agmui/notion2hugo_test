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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNAMKCB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2otmzJoQ4G%2FeAOiMNfF%2FrdblzOcGMO9arE9muH5zufAiEA33WpGPQQpqfI%2B94ICRN8fSJDLaF9HNi01VF%2FAzpQ4AgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1Xhb85nAqQMWFExyrcA6%2B6%2BArzv9nXK0h%2FF60ps8zDRy5o7o6JysRfhb7WCOt06%2F1uud7upfKs3fYiun7O6sxw9SAFRuuRIHjJJrWPZfk9X5FguP5I60s0Trwj2bSzg21u6wTz4Uldc4TBvEsdKlRE0afdPtzkcm2Mlh5nvDZ2ueEaceP3TFGBV76vHeSGXksw%2BO45oYo5YDxnzUgMWqvcJuTIDtO%2BCukcpSVTYgxaUNS2bXJc2P1BeQw0GWrBCKo35QziaKjAXUpPnuYGiGoG3Qmi6%2FXaU3qpWOi%2BNFfDlaLziJwLowZCRBF%2B9QchZPEV8WWkvWIzQm2levbjMb1nnEkKnfBE5NcmvAc%2FHoDIagrvpJml%2FuJi64ZjnGEoAyEtytSt3RGGPuQ6Mm%2FVx24o5h1DmUalUtxDZz1Hsgb%2B21POe5VR19%2FwX6LY7Z%2BpiWnQHHwhvv9D65uUh%2BY3Ngpj73LVe7b9BX2q8tby8rpIBCL7fUvOHiqGrInO9DHiU%2B6fSXcaFfS0Infs4jag1ACW510Zok%2B3UdT3roOPMxqkhRpkRyx6p9H16YcRuE5PgQE0jit%2BFJQw0FVhi5mTBnb3o6olmD6WRF1JuaPbIh7Wkv90wmHBjgIVSTUJY6x5zNrjoeKR8o%2FlF6pvMPHGsMEGOqUBojSp1ghRqsLM3SXlE%2BdOQGi2hnkBSs8oDAJuh7UiZBIGUaAYNPlIxSCrzvyxEgLMGZQnQVKHrv50MZbWmBWyleLDaPMEho7Ua4AD2dX85%2Bug9F3R9szoRcjhtc3MA%2FsX09PYkLK2mdJfRU1%2BfYjrPSOhhTD%2BLLML2TyGI%2FPR85gM7HSzoB4eD5%2FSeRlwkCfUyaYZ9iBd9QhfCb1c6i%2FpcHeakxpW&X-Amz-Signature=91cac07f209b293ac2d153427462c436aab1875e5f79ce4a3d1ee16eb98e8eee&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNAMKCB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2otmzJoQ4G%2FeAOiMNfF%2FrdblzOcGMO9arE9muH5zufAiEA33WpGPQQpqfI%2B94ICRN8fSJDLaF9HNi01VF%2FAzpQ4AgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1Xhb85nAqQMWFExyrcA6%2B6%2BArzv9nXK0h%2FF60ps8zDRy5o7o6JysRfhb7WCOt06%2F1uud7upfKs3fYiun7O6sxw9SAFRuuRIHjJJrWPZfk9X5FguP5I60s0Trwj2bSzg21u6wTz4Uldc4TBvEsdKlRE0afdPtzkcm2Mlh5nvDZ2ueEaceP3TFGBV76vHeSGXksw%2BO45oYo5YDxnzUgMWqvcJuTIDtO%2BCukcpSVTYgxaUNS2bXJc2P1BeQw0GWrBCKo35QziaKjAXUpPnuYGiGoG3Qmi6%2FXaU3qpWOi%2BNFfDlaLziJwLowZCRBF%2B9QchZPEV8WWkvWIzQm2levbjMb1nnEkKnfBE5NcmvAc%2FHoDIagrvpJml%2FuJi64ZjnGEoAyEtytSt3RGGPuQ6Mm%2FVx24o5h1DmUalUtxDZz1Hsgb%2B21POe5VR19%2FwX6LY7Z%2BpiWnQHHwhvv9D65uUh%2BY3Ngpj73LVe7b9BX2q8tby8rpIBCL7fUvOHiqGrInO9DHiU%2B6fSXcaFfS0Infs4jag1ACW510Zok%2B3UdT3roOPMxqkhRpkRyx6p9H16YcRuE5PgQE0jit%2BFJQw0FVhi5mTBnb3o6olmD6WRF1JuaPbIh7Wkv90wmHBjgIVSTUJY6x5zNrjoeKR8o%2FlF6pvMPHGsMEGOqUBojSp1ghRqsLM3SXlE%2BdOQGi2hnkBSs8oDAJuh7UiZBIGUaAYNPlIxSCrzvyxEgLMGZQnQVKHrv50MZbWmBWyleLDaPMEho7Ua4AD2dX85%2Bug9F3R9szoRcjhtc3MA%2FsX09PYkLK2mdJfRU1%2BfYjrPSOhhTD%2BLLML2TyGI%2FPR85gM7HSzoB4eD5%2FSeRlwkCfUyaYZ9iBd9QhfCb1c6i%2FpcHeakxpW&X-Amz-Signature=0d753264bfc17eee5123fcb7de4592a9f37ad832c9f7dada259bfd5029c0d30b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
