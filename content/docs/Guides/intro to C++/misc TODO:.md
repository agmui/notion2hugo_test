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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56TIDDS%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1CaDB%2FrAmQebel0ZxZqujojZnIchpjkIG6dilcqL9KQIgZqPr47KoK7LrQpb7bKF4pR%2BOEWMGGhuubz1geljf6H0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdVEZl5aI8Ab0591SrcAz32cFCqW4mU7bmPOlHO8QRuNCLInsdRSUWNgoT%2FtxiFLGeLguDK94vkDVx3nEOzjYzMC%2Ba%2Biwv%2BZNrmEA8Jymct1ZaJj2Kyj66Yr%2BTYJLnJtuJEQGQhhgvA%2BjzVR4AW0YSSbTO7KqV%2FdeSLkreGjbVkjW1k%2F6F9NYxkOEOjUZMmSD3%2FQ6zf3IsK85h7GWpWi6is00u2VQE2EIEGkA%2FNDD1Si0%2F0UHR6%2Fczhd69Y912ssMgx9WbZTJZEa0U06GohfuwCM6iKXYC1S9%2FTWDGhFGAHw5dYWFZaVB1ERkox2JMf%2B8YHJ7Xnct%2BVUVNX4nYMTuXIfCsM%2B3O5T0zjCHDXfxszByYKo%2F7euDCIzS58LwKJSluKHfrTFDVnt6GDJlrE2KNqF4dFrwh46HOmhBgsH16Rpt%2BI752nSccDXJfBduFHDFWLIo%2B0dZojSiFCbDtKszovNfW9XFFky0WxvjRguHryYp59%2Fjli3beKPDXqYl0gqbM7N8drx8D%2B9n%2Be186XPLksuCRUdS8u07g%2FNQ%2Famx2oLyS0aJVhjTEENFdjyqK3wkIwe2y58Fwlost4Cv%2BE3jEI4aEXTNkYjk6IZWVVEtbbWx%2BV2gdg9gwBwh6HPObe3KjpL7%2BpjZmx6tStMJqFntEGOqUBeCoWlrvnTwMB%2F1GYfc9AWVGgUOusTg2RG9NcliDg4zRfSmc2u9sTzyenDMaDS41Le4GlTJZHrc1%2Bq8h9KgF9wGTLaitgdJ5GbxFSTdi0Vw%2Fdln%2B2RkT3syDsNNCJBZeq7ZJolhkvArsEv0uuCXWXeyQVJkDryOjKl6sgf9H9AcTDebxgz%2Fy2R5E%2F0QchZesSPuLs1H98S5cB9NsdqSGm1nZxPj5x&X-Amz-Signature=03ad49be16eeac2d4a75c2ae05c60472f355d687078a1b677c41d792560f1782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56TIDDS%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1CaDB%2FrAmQebel0ZxZqujojZnIchpjkIG6dilcqL9KQIgZqPr47KoK7LrQpb7bKF4pR%2BOEWMGGhuubz1geljf6H0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdVEZl5aI8Ab0591SrcAz32cFCqW4mU7bmPOlHO8QRuNCLInsdRSUWNgoT%2FtxiFLGeLguDK94vkDVx3nEOzjYzMC%2Ba%2Biwv%2BZNrmEA8Jymct1ZaJj2Kyj66Yr%2BTYJLnJtuJEQGQhhgvA%2BjzVR4AW0YSSbTO7KqV%2FdeSLkreGjbVkjW1k%2F6F9NYxkOEOjUZMmSD3%2FQ6zf3IsK85h7GWpWi6is00u2VQE2EIEGkA%2FNDD1Si0%2F0UHR6%2Fczhd69Y912ssMgx9WbZTJZEa0U06GohfuwCM6iKXYC1S9%2FTWDGhFGAHw5dYWFZaVB1ERkox2JMf%2B8YHJ7Xnct%2BVUVNX4nYMTuXIfCsM%2B3O5T0zjCHDXfxszByYKo%2F7euDCIzS58LwKJSluKHfrTFDVnt6GDJlrE2KNqF4dFrwh46HOmhBgsH16Rpt%2BI752nSccDXJfBduFHDFWLIo%2B0dZojSiFCbDtKszovNfW9XFFky0WxvjRguHryYp59%2Fjli3beKPDXqYl0gqbM7N8drx8D%2B9n%2Be186XPLksuCRUdS8u07g%2FNQ%2Famx2oLyS0aJVhjTEENFdjyqK3wkIwe2y58Fwlost4Cv%2BE3jEI4aEXTNkYjk6IZWVVEtbbWx%2BV2gdg9gwBwh6HPObe3KjpL7%2BpjZmx6tStMJqFntEGOqUBeCoWlrvnTwMB%2F1GYfc9AWVGgUOusTg2RG9NcliDg4zRfSmc2u9sTzyenDMaDS41Le4GlTJZHrc1%2Bq8h9KgF9wGTLaitgdJ5GbxFSTdi0Vw%2Fdln%2B2RkT3syDsNNCJBZeq7ZJolhkvArsEv0uuCXWXeyQVJkDryOjKl6sgf9H9AcTDebxgz%2Fy2R5E%2F0QchZesSPuLs1H98S5cB9NsdqSGm1nZxPj5x&X-Amz-Signature=97727f7ca78056105fc46e37111004cc128dc21109a3e31496409c47e8b55715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
