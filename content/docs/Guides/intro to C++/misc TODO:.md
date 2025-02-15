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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674L2ZMVD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICs7KW4MYI7QYReXSybo1TKUVEsPsS1ZBD5NtTeE3n0bAiBxo31f95in8T4KTOuCxjIOCpgVAJQ%2BWS1H0Ovmd1a3uyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTbcH09VNfEkFYIWtKtwDcFKpNxkif%2BF6o3hbKHaVuilfA%2FCq92MgHd8qmNd3wBGoLqEzfi4BW5ZaEOsl%2Bvu1DP1pki%2FIv14ffz4gzyxLs5l9NEqM%2FNgr4GRKBmRXNmpZt7CzIiEsb%2BDettNi9WiCXmFV8E7PbNVcDZAkXkACHOOX6aHDh98PW4QcOpw2XXjh%2Fr8QyYZlpG1OOYM9%2FIVxyHRac7MgaWwEo0AWqgZ1BK%2FF7Xt6anEFH0mg4PWPpR%2BQByo8DWk%2BZV1%2B2qX4K2u5c%2FGjSk6G1mGbDp%2FxDkBqxDh0BbKm0vQlSHHkYL9H1F%2BhwU6dMuuK56utDSZKfj0Yt0qGg5fVe8KrtxnIInmfqGi9W%2Bx2QmG7xdul%2Fc85BiwO%2B2Swmt2IPqCFj%2BLEMtkW1CZuUVIueGF5CNR68iyiQ8sCcW%2BMq%2BGweMXIBjqyBDgvU4JaF21xJcvF6C%2BqMSf57Bf61TwLhq%2BFEo%2BMGBCagNy60uEA3mxJYRqhtWtDvzpC0f3eEbsW00JezmGxo7TZBW%2FbfBI6LQNp0tGjYVJ%2BD%2BBSDXmM9auvaFfSct%2FdIZDpiyG%2B9MJ0jbdW6kPVcCoCFiPnChq0XtgslbkL%2F0nuIOYSVa4CqmhIgMK%2FfEQpAbsU2FQARdnx9mVzLDUwrK7EvQY6pgFAPsYOLA42Kk1dfgtDTO6YQvB2IcjvOA%2FZ9rs7tIZj%2Fq6HBUNH9GOGFWoysjR6lZySDl0FxlpT%2BV%2FFu5rMC%2BVV3c6cVczxIlPz%2B1hAmTyluR3YeXu%2FIO040LEwpukYsTRSzCO%2BDgCdGy7agsr2kbvxqLJQzOubnO07KXdEgQ%2FWZnTdPZ7f6IGC4KWXCq%2BFcRqfKTmq1zKfPmqlD2fWG2TSCP2f7UTY&X-Amz-Signature=7a75def61d70a02111ff4c10fe6d7d674216a332b4c9745f1a82b1fbcbbffadd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674L2ZMVD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICs7KW4MYI7QYReXSybo1TKUVEsPsS1ZBD5NtTeE3n0bAiBxo31f95in8T4KTOuCxjIOCpgVAJQ%2BWS1H0Ovmd1a3uyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTbcH09VNfEkFYIWtKtwDcFKpNxkif%2BF6o3hbKHaVuilfA%2FCq92MgHd8qmNd3wBGoLqEzfi4BW5ZaEOsl%2Bvu1DP1pki%2FIv14ffz4gzyxLs5l9NEqM%2FNgr4GRKBmRXNmpZt7CzIiEsb%2BDettNi9WiCXmFV8E7PbNVcDZAkXkACHOOX6aHDh98PW4QcOpw2XXjh%2Fr8QyYZlpG1OOYM9%2FIVxyHRac7MgaWwEo0AWqgZ1BK%2FF7Xt6anEFH0mg4PWPpR%2BQByo8DWk%2BZV1%2B2qX4K2u5c%2FGjSk6G1mGbDp%2FxDkBqxDh0BbKm0vQlSHHkYL9H1F%2BhwU6dMuuK56utDSZKfj0Yt0qGg5fVe8KrtxnIInmfqGi9W%2Bx2QmG7xdul%2Fc85BiwO%2B2Swmt2IPqCFj%2BLEMtkW1CZuUVIueGF5CNR68iyiQ8sCcW%2BMq%2BGweMXIBjqyBDgvU4JaF21xJcvF6C%2BqMSf57Bf61TwLhq%2BFEo%2BMGBCagNy60uEA3mxJYRqhtWtDvzpC0f3eEbsW00JezmGxo7TZBW%2FbfBI6LQNp0tGjYVJ%2BD%2BBSDXmM9auvaFfSct%2FdIZDpiyG%2B9MJ0jbdW6kPVcCoCFiPnChq0XtgslbkL%2F0nuIOYSVa4CqmhIgMK%2FfEQpAbsU2FQARdnx9mVzLDUwrK7EvQY6pgFAPsYOLA42Kk1dfgtDTO6YQvB2IcjvOA%2FZ9rs7tIZj%2Fq6HBUNH9GOGFWoysjR6lZySDl0FxlpT%2BV%2FFu5rMC%2BVV3c6cVczxIlPz%2B1hAmTyluR3YeXu%2FIO040LEwpukYsTRSzCO%2BDgCdGy7agsr2kbvxqLJQzOubnO07KXdEgQ%2FWZnTdPZ7f6IGC4KWXCq%2BFcRqfKTmq1zKfPmqlD2fWG2TSCP2f7UTY&X-Amz-Signature=e5589c270b3a4fc9c8ac6774b533399c0a0e4adac9892c18636432d9cb344fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
