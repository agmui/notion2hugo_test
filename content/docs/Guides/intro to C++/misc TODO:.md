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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PDRCFT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHy71FD4%2FbYtvgUPpeJksPBF4WTp84vTrOwBS8oBGV5wIhAOlnO9YyfBpnq6KLjLj%2Fi4c%2FLeOi0xDRGWdxTx91%2BC71KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzarIwrG4AvpCCkJPQq3AM39eC1eyPcSFGQaCLonh29BEf9ddZMOfhtdN89X3ZgjwgchiHa7OWcp50HnYO8YpZf8Rhu%2BBiEPPe1%2BQLq5ezi8a5M1OFA6FPB95QE1sG0Pb1aauYuLEkWOCOm0bBbRbctTa25g2xPOnFG4soogqO7ZPCLcmfeyz8yuTKQFCGeH8d69boxM1EBqFxP6iofxN6Ygkotp7QN3CYAtZvSaQe%2Fymya%2BifSAYgZ2EDn%2FimGrohJJtvYUg6bX0BCH%2BQRn2J3gV2lT9EIDTfk76ZkrKMNQDmpJPo4r2hTdfgc7osp81YEWdU3rtpJV7hEmJl1XmfIoeSZEIGO7BKqZekVqXjL4zv2M%2BkmVE13v4akicW8xfgo5ubWi4js7w9nAWvR90p5HruuN1gtU2wWawQH%2FIl9Vn3CcgFOIpjIXNHHLIZFiR4804axS77qcm3sGFCKBFHaNCYaGoNlmjWaVHylJT3uXgdv1i7EkjCf0r9s1N7IyL1XY5qho1Zqc1H%2FZdU4fp97DaWItj89HsiYcNQvx60%2Bv%2B1gNOWJOx67VLpCTsJXOFdxdGkm4Rf%2Fz5EDjKKOCPidD2ryR5fN8%2Fvrr4CQBYFuuQb5cKX7DDxPkfAsYmNQC%2B5fClo%2B3nAz7beTqzDJs%2BrBBjqkAbjXTpXB%2BANByI4LkXfEC9wx0zqHsun6MVKSgydIuoNTsHg%2F1nYY2gG5G71g06rla6aiGrS0fFx1aqwPNKle1hnfTXV8MX2ZrpbZSjHjxDs9MqrTRQ3T%2BbhD%2F1EY9HofSf73Ng6vPU%2Bw5dxwvqb%2FBtFXdqS8VDdLuRvwQ5y4noOVVQ%2BL1vqKdV7Hy5k0evHOWoPufMzBqLsK%2BBG2Qq9nj4ZUUq8W&X-Amz-Signature=4a4ce01d1eddb16b20d68325aaf49dc14ea38f614f44ce04211fa33e39254b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PDRCFT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHy71FD4%2FbYtvgUPpeJksPBF4WTp84vTrOwBS8oBGV5wIhAOlnO9YyfBpnq6KLjLj%2Fi4c%2FLeOi0xDRGWdxTx91%2BC71KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzarIwrG4AvpCCkJPQq3AM39eC1eyPcSFGQaCLonh29BEf9ddZMOfhtdN89X3ZgjwgchiHa7OWcp50HnYO8YpZf8Rhu%2BBiEPPe1%2BQLq5ezi8a5M1OFA6FPB95QE1sG0Pb1aauYuLEkWOCOm0bBbRbctTa25g2xPOnFG4soogqO7ZPCLcmfeyz8yuTKQFCGeH8d69boxM1EBqFxP6iofxN6Ygkotp7QN3CYAtZvSaQe%2Fymya%2BifSAYgZ2EDn%2FimGrohJJtvYUg6bX0BCH%2BQRn2J3gV2lT9EIDTfk76ZkrKMNQDmpJPo4r2hTdfgc7osp81YEWdU3rtpJV7hEmJl1XmfIoeSZEIGO7BKqZekVqXjL4zv2M%2BkmVE13v4akicW8xfgo5ubWi4js7w9nAWvR90p5HruuN1gtU2wWawQH%2FIl9Vn3CcgFOIpjIXNHHLIZFiR4804axS77qcm3sGFCKBFHaNCYaGoNlmjWaVHylJT3uXgdv1i7EkjCf0r9s1N7IyL1XY5qho1Zqc1H%2FZdU4fp97DaWItj89HsiYcNQvx60%2Bv%2B1gNOWJOx67VLpCTsJXOFdxdGkm4Rf%2Fz5EDjKKOCPidD2ryR5fN8%2Fvrr4CQBYFuuQb5cKX7DDxPkfAsYmNQC%2B5fClo%2B3nAz7beTqzDJs%2BrBBjqkAbjXTpXB%2BANByI4LkXfEC9wx0zqHsun6MVKSgydIuoNTsHg%2F1nYY2gG5G71g06rla6aiGrS0fFx1aqwPNKle1hnfTXV8MX2ZrpbZSjHjxDs9MqrTRQ3T%2BbhD%2F1EY9HofSf73Ng6vPU%2Bw5dxwvqb%2FBtFXdqS8VDdLuRvwQ5y4noOVVQ%2BL1vqKdV7Hy5k0evHOWoPufMzBqLsK%2BBG2Qq9nj4ZUUq8W&X-Amz-Signature=b2be9f7606e358503eba542131a58afe9f1ba49c9bd904a74ece8e6070a44d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
