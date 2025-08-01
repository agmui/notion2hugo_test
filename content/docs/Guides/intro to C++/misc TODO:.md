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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456YIBKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRujs5BR5A4a6FnRjFliQf081YDIbB77p7Bh25APFdpgIhAOH4JVKY%2FGr%2F9xn5I8URa8x1O4LOYdIEUy7NfUxRkKRkKv8DCBsQABoMNjM3NDIzMTgzODA1Igzs0F31LdlCjzIxtv8q3AMoyO%2BDI0DBVIeL5KhWbAdALLdm6PSGq%2FC2vVp68XzKyLAJAQNKa9bEuNWwK2kDs%2FjULpg7I6fyEp0Mc3ltEUv8YTP28tDTFIeynIQYLKW0Hs7ATs%2FPPE%2FX1ZzXqNokqqEXnd8Ib7zwiaqU%2BdIjHNMgT%2BGKcwvn5tUBFbE9mkr3aTG75DVX4bnq1eWPzEqgOkGMwIURGhnQD88%2FqKcckH5GmoNo38nj%2B6HSoU7ipsxlSKn7RTzVCCfmG8HdhKVom3%2BurW796FEzBgjiLsRg7s1bBiSA%2FsccvqU5hIEQKURoBm884oGEiZKOBqyo4O%2B5cWDXBKKUYqVdLqPCARtazYFyhPgBJYR2GgkRvTmXonX3hubbh7FFI4fUyMNSr2HYxXQCCLDR%2BsQYl5%2Bi6t3RrYvtH77CHpfIbSFWOOVI5aJ3QEDCi4jfNFqDER3P9i1sVxQ%2BZZjTU844cbdIYDx41ZtxkGXDVz0pYMg6inP0JcWYaWbYX2udsDJRr%2Bhwu%2Bm2dmbnhuYLJb2cnahD2AZ4UccsJHgICbRWMxzF%2BECSjP3vRaZRgBwc8gqUmSE3Ihnswk28awz5Ccup%2FM4cGSPSPe%2FC2PptqP13D%2BxLsh7MONi76ydnIdJNvWnZzHSaCTDwnbnEBjqkATcpf%2FuqrKKCR4f%2F%2BaIDdXwoYFNHpFQ7xxeDmOdB6%2B2mZryks9KgigwiEF5XS0fPLw7A6y%2BX49k%2BD81OZAZ89J7QIGi%2BRERIaqu9PGp2QYDDuUP2%2BsPevqymiVUER%2F7v2jsqSEtuUpSbxGjsvSNHdQQrZzlMpjBy7DEfSIPqaWSbI%2FCKlXT%2BG1kwgBcWaOHumNAUDRroVNRWiU7kM9VAFHCdK8po&X-Amz-Signature=33a426cb51ccfdb8aeb9f83cf8edfbcb9335f3e22466cd92d3b1a192f0419428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456YIBKN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRujs5BR5A4a6FnRjFliQf081YDIbB77p7Bh25APFdpgIhAOH4JVKY%2FGr%2F9xn5I8URa8x1O4LOYdIEUy7NfUxRkKRkKv8DCBsQABoMNjM3NDIzMTgzODA1Igzs0F31LdlCjzIxtv8q3AMoyO%2BDI0DBVIeL5KhWbAdALLdm6PSGq%2FC2vVp68XzKyLAJAQNKa9bEuNWwK2kDs%2FjULpg7I6fyEp0Mc3ltEUv8YTP28tDTFIeynIQYLKW0Hs7ATs%2FPPE%2FX1ZzXqNokqqEXnd8Ib7zwiaqU%2BdIjHNMgT%2BGKcwvn5tUBFbE9mkr3aTG75DVX4bnq1eWPzEqgOkGMwIURGhnQD88%2FqKcckH5GmoNo38nj%2B6HSoU7ipsxlSKn7RTzVCCfmG8HdhKVom3%2BurW796FEzBgjiLsRg7s1bBiSA%2FsccvqU5hIEQKURoBm884oGEiZKOBqyo4O%2B5cWDXBKKUYqVdLqPCARtazYFyhPgBJYR2GgkRvTmXonX3hubbh7FFI4fUyMNSr2HYxXQCCLDR%2BsQYl5%2Bi6t3RrYvtH77CHpfIbSFWOOVI5aJ3QEDCi4jfNFqDER3P9i1sVxQ%2BZZjTU844cbdIYDx41ZtxkGXDVz0pYMg6inP0JcWYaWbYX2udsDJRr%2Bhwu%2Bm2dmbnhuYLJb2cnahD2AZ4UccsJHgICbRWMxzF%2BECSjP3vRaZRgBwc8gqUmSE3Ihnswk28awz5Ccup%2FM4cGSPSPe%2FC2PptqP13D%2BxLsh7MONi76ydnIdJNvWnZzHSaCTDwnbnEBjqkATcpf%2FuqrKKCR4f%2F%2BaIDdXwoYFNHpFQ7xxeDmOdB6%2B2mZryks9KgigwiEF5XS0fPLw7A6y%2BX49k%2BD81OZAZ89J7QIGi%2BRERIaqu9PGp2QYDDuUP2%2BsPevqymiVUER%2F7v2jsqSEtuUpSbxGjsvSNHdQQrZzlMpjBy7DEfSIPqaWSbI%2FCKlXT%2BG1kwgBcWaOHumNAUDRroVNRWiU7kM9VAFHCdK8po&X-Amz-Signature=c25ada6064f01d40c146be9fce587feb182ab7f766a5d64703ca36ea8d248743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
