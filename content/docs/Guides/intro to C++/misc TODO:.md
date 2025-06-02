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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O5YMQGZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCID5QHRqG%2FOcWMtzUUbB%2B1FRP8rkCgDsLQbig1YAcT5v9AiEA8ciBVxcjOXklcAs8rl4dshApxmXpmuPw0Yswi8Onj9AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAU405zaqrjl3Fy%2BSCrcA2cqxHDQ5JENDkHiVXaQ2jwbxRjL0FtrqoZPAsys6MfkWzfW%2B10nexAAdz9Cgc%2FOn0cxSHCCjnPl8yti39rUSvLF7NEV1OIrO6sG0tql6dM71VgfaxhlugeA7nM3BltyL2b8REJH8QS1bhhtclZfl4bckgmWXDJoiHiSCvzDsg8Z6UtqoRv0LYSEINqmo7nwc4tiariNAF95Hmn5niHNmHhLxuG4bui9r1jlWwxx77SzOaSrzhytjfMAqXRhND%2FE77jeCKJJ05KKZoI31B7rIdIgbuwgbxAPomLB%2BMViob90gWuKcrL2tLT9xzhKDYHGby92ylnNZGSe%2Brt6R9A3NDFgUDTBKjfqglk5ZZIpsx8tMUJ8qBi7KvsvOwAtkjhvQAVx551sZb8jETrFuQrqM7WPF1LUp2MxRGNUBUf2JvyiMvgfQbRMd0uOFhxis5k9n8i4QhO99AhaGEYbXbDswSOb2478tFAEXI0%2FX3lp0nlc1K9sGApeOp6fUBHw22H5DNwLOqtR2ZiiEj3LJSYIwoVMzkVl3Mi%2BkmiXMW0ZaF8ZMyNnu867i7cNxGPjtLD47CoXYyUxj2ushplNzU479f7RI2uyae2aCXmKY3V1hKtYyZZtqiRG%2FmAtyEKcMNn09cEGOqUBf8pnVxxxNjM1MyCorzAtBRNL8h6Jc9%2BUEvNo%2FYVX6otpf5i7w%2FiytgdcDczuepuse%2F1wD3i%2F4wj0UFJHmdA1nxXqsPPMh5T25PiZ7DC0nSztGQ5ojto1Vwx8hx5FLXjlJYKx51b13dyT522jV742iXlzA2oqjeYq1gI%2FR9k8uyUUhkSb%2B%2BqqP%2Bamp8%2F891zcx0gIqQMtM1NkB%2BefKs%2BnKSk4TxZc&X-Amz-Signature=0de80a3c787f2cb13f3f7fcb57d3a51e44fd2e851bf3c54348114ede9a55958c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O5YMQGZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCID5QHRqG%2FOcWMtzUUbB%2B1FRP8rkCgDsLQbig1YAcT5v9AiEA8ciBVxcjOXklcAs8rl4dshApxmXpmuPw0Yswi8Onj9AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAU405zaqrjl3Fy%2BSCrcA2cqxHDQ5JENDkHiVXaQ2jwbxRjL0FtrqoZPAsys6MfkWzfW%2B10nexAAdz9Cgc%2FOn0cxSHCCjnPl8yti39rUSvLF7NEV1OIrO6sG0tql6dM71VgfaxhlugeA7nM3BltyL2b8REJH8QS1bhhtclZfl4bckgmWXDJoiHiSCvzDsg8Z6UtqoRv0LYSEINqmo7nwc4tiariNAF95Hmn5niHNmHhLxuG4bui9r1jlWwxx77SzOaSrzhytjfMAqXRhND%2FE77jeCKJJ05KKZoI31B7rIdIgbuwgbxAPomLB%2BMViob90gWuKcrL2tLT9xzhKDYHGby92ylnNZGSe%2Brt6R9A3NDFgUDTBKjfqglk5ZZIpsx8tMUJ8qBi7KvsvOwAtkjhvQAVx551sZb8jETrFuQrqM7WPF1LUp2MxRGNUBUf2JvyiMvgfQbRMd0uOFhxis5k9n8i4QhO99AhaGEYbXbDswSOb2478tFAEXI0%2FX3lp0nlc1K9sGApeOp6fUBHw22H5DNwLOqtR2ZiiEj3LJSYIwoVMzkVl3Mi%2BkmiXMW0ZaF8ZMyNnu867i7cNxGPjtLD47CoXYyUxj2ushplNzU479f7RI2uyae2aCXmKY3V1hKtYyZZtqiRG%2FmAtyEKcMNn09cEGOqUBf8pnVxxxNjM1MyCorzAtBRNL8h6Jc9%2BUEvNo%2FYVX6otpf5i7w%2FiytgdcDczuepuse%2F1wD3i%2F4wj0UFJHmdA1nxXqsPPMh5T25PiZ7DC0nSztGQ5ojto1Vwx8hx5FLXjlJYKx51b13dyT522jV742iXlzA2oqjeYq1gI%2FR9k8uyUUhkSb%2B%2BqqP%2Bamp8%2F891zcx0gIqQMtM1NkB%2BefKs%2BnKSk4TxZc&X-Amz-Signature=82681cc6873b5879f8fda0ef8195448d33d3c35834104c636e3aa1a0e834ddd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
