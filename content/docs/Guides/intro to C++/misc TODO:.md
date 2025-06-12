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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TUHRBT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCH3An%2BFGb%2ByfrDhN2sU4cuKaBANjgiDV3ihA0YFU%2F9RECIQDid1tnocrJctiNPb5FkZ5iqf2v83w8YLfgq1cAvRIkiSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0nVDBg%2FmCLBO1tpfKtwDTs7NWufiRFZvyWTpBu55mmACGbqBZ1EYKMPk59Lew0%2F7%2FnmOnikkGcJMN3Xm3QfNsEMnzVC%2FnNP7YlCNoaAH3pB3ysm%2BbIi%2FCQP%2FLcu8XV3%2FW1STUs%2BEfMoETZcPQLN5Ce7%2BDlZjyZDnEdiAa4nxN3FHRUc34saq5D6BJYsDQJ2BqkwrGT4bDka9vqg1M7KBXcQhUYc0bNGVgtlrF3VWft5axq4xZRgzUeKEyvEtMI9%2BxgQO3iyX8CfxS3iveBFZSciiqwW26XCv7XEsGPHkS7N2bJF2xm7w4ax3O3VVXzA%2F54puzaZfMXdUphLGsW74UqHBMTmRNrnvBj3JQqmQRIaQSlNdZ%2Fpr%2Fs8LlepzIYvObIFgzviD01s81gjohbUXJyP1MYCswYQ66XVsNZCJUFWNA2uGz%2FlcQKe8VXBVd1Wr5MNPz8hAYhzn2vuBhMOFJL3YXJK71fpDBM8R2f%2FbDA65JhAag48I5Pf5OGkENXIlr8SZPTzRYzp9XS0CFwAz9AenyhfAGk4YM05TXxw3E0G1Ph%2FniZ8PIVcQHvqpoHYTtMbBrfIQBa%2FGIK%2F%2B%2FhX5D9g0HyeoJ%2FJuf35HXGHOqLjH6JQu9BXRL09VSVJgAKO2mbxMcTx%2Br5Brcm0w84eqwgY6pgFAW34YR23cRsVLxBE9HCF6nnxgab5M50eEvS2S6HVeGbHC%2FCz0fY2y%2BMgWlXyfo8FWnSRKtdFBko2F5m4VPk8aat%2BKoKawsH99MC%2BKhpVTQcCQk0vjcDhP5v94Gy6eN8DYHOttjORqvL7GKnTArvFmGF8COLPlNpz4dBYIrVAAHEruHT7KPcz3slD699cZtdl6a7jvmC5cF7yncj3BsMIb52zhU%2FJH&X-Amz-Signature=bcd7857a457a089507e8cfcafe9e83bd97fb9f65ddd5cc6cbbbf6eed34d485f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TUHRBT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCH3An%2BFGb%2ByfrDhN2sU4cuKaBANjgiDV3ihA0YFU%2F9RECIQDid1tnocrJctiNPb5FkZ5iqf2v83w8YLfgq1cAvRIkiSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0nVDBg%2FmCLBO1tpfKtwDTs7NWufiRFZvyWTpBu55mmACGbqBZ1EYKMPk59Lew0%2F7%2FnmOnikkGcJMN3Xm3QfNsEMnzVC%2FnNP7YlCNoaAH3pB3ysm%2BbIi%2FCQP%2FLcu8XV3%2FW1STUs%2BEfMoETZcPQLN5Ce7%2BDlZjyZDnEdiAa4nxN3FHRUc34saq5D6BJYsDQJ2BqkwrGT4bDka9vqg1M7KBXcQhUYc0bNGVgtlrF3VWft5axq4xZRgzUeKEyvEtMI9%2BxgQO3iyX8CfxS3iveBFZSciiqwW26XCv7XEsGPHkS7N2bJF2xm7w4ax3O3VVXzA%2F54puzaZfMXdUphLGsW74UqHBMTmRNrnvBj3JQqmQRIaQSlNdZ%2Fpr%2Fs8LlepzIYvObIFgzviD01s81gjohbUXJyP1MYCswYQ66XVsNZCJUFWNA2uGz%2FlcQKe8VXBVd1Wr5MNPz8hAYhzn2vuBhMOFJL3YXJK71fpDBM8R2f%2FbDA65JhAag48I5Pf5OGkENXIlr8SZPTzRYzp9XS0CFwAz9AenyhfAGk4YM05TXxw3E0G1Ph%2FniZ8PIVcQHvqpoHYTtMbBrfIQBa%2FGIK%2F%2B%2FhX5D9g0HyeoJ%2FJuf35HXGHOqLjH6JQu9BXRL09VSVJgAKO2mbxMcTx%2Br5Brcm0w84eqwgY6pgFAW34YR23cRsVLxBE9HCF6nnxgab5M50eEvS2S6HVeGbHC%2FCz0fY2y%2BMgWlXyfo8FWnSRKtdFBko2F5m4VPk8aat%2BKoKawsH99MC%2BKhpVTQcCQk0vjcDhP5v94Gy6eN8DYHOttjORqvL7GKnTArvFmGF8COLPlNpz4dBYIrVAAHEruHT7KPcz3slD699cZtdl6a7jvmC5cF7yncj3BsMIb52zhU%2FJH&X-Amz-Signature=b9614a7f7927fafa732701dd9f22baacb844868f6f496a6a7ed7fe480120ed40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
