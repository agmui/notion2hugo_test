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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAROHLQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDn%2BTcgkrKI7Tsnq5DTrEqy%2BMhGCxmdYaS8z8twzvRf0AIgVm3PiCLhjjK%2F0SnOii0KpAsl6%2FGFhG6G1qGstAKJ5bYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjbUsiJupKOeEenNyrcAwuaFTTBfDvMkLteOVmnIvdr03T33s14UUKu2z9TeIPQVkKrYYyAYp68eDXZXRjbNkNAi%2BxMTGpiDlxsVorUlo9nK%2BbRiPHfx39oMlfkRoaLYccYMRxDcHUHjPt90ItGmpz2DgvtZuM0DXVi5N5AKjr8ef3BfIbUytkOVUJVa1OVrxEZkM4QsmyP6pGbJdHAM%2BdUIeJ5Xvt7L45uL5dmSGwo8kneWl9VWBepBjoDGaWNBk5IvTPxnpnKXai719UoZ3M1AI7Itezz%2FgpIoEZtqw%2Bf2mwjnzavOM9i167n8TVeudkqU4a0364JT1dEAsXPo01QvlUgCUslqmtXGipDQykKOsbuyrtYhAgMRYZ1Sm8EhVQH1pnHvcUMiQEOonp68sa3759qPicULmmOE3bFr0OJajqf38znqgcdPkvfqsFYnZYV%2FAU4Lo30a4yahfPDpBwTk2QTIBd2PBcRmmH6BT5GXXOOWjwuU65UB5wdEZI012pT8lRRcquTeK6snWE2hJjhGOMGrr%2F%2Fc7ujJZnWav70%2B600QhEtnnfNC%2FY7PgKynjW1LSbVJBfIKGlb7KkWGYlzteVx3p5ky3e6GCiK9Jyaa6ALQbBvA2hylz3%2BF0lHs2vMPtU%2BSVJqbwK0MIaDtL8GOqUBGqVaWztTtpNuIo8n7ykufyOE3xJ9%2BoAQOE7m89esgkQBcaRBf3lNqy6PWuDAhrXxKi2NrKvDgcgptISxe%2FtPY0iFKseRui97xZt8LTnRtyFlQKkp4Oso41fCNdTUu4X%2B%2F2NxQgKkjL%2FCgwW6W8DblGq8rzBphzKenuQjOCZmq6DWA2vblrDBKknCnQ8LAdUWPxYBshtu4ke8%2FVzHZiQ73kjffKEm&X-Amz-Signature=13cdcf3d2a7000dce9c800420b29e36ffd948ddfa7c6fa6c2df99d6c9bf2948a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMAROHLQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDn%2BTcgkrKI7Tsnq5DTrEqy%2BMhGCxmdYaS8z8twzvRf0AIgVm3PiCLhjjK%2F0SnOii0KpAsl6%2FGFhG6G1qGstAKJ5bYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjbUsiJupKOeEenNyrcAwuaFTTBfDvMkLteOVmnIvdr03T33s14UUKu2z9TeIPQVkKrYYyAYp68eDXZXRjbNkNAi%2BxMTGpiDlxsVorUlo9nK%2BbRiPHfx39oMlfkRoaLYccYMRxDcHUHjPt90ItGmpz2DgvtZuM0DXVi5N5AKjr8ef3BfIbUytkOVUJVa1OVrxEZkM4QsmyP6pGbJdHAM%2BdUIeJ5Xvt7L45uL5dmSGwo8kneWl9VWBepBjoDGaWNBk5IvTPxnpnKXai719UoZ3M1AI7Itezz%2FgpIoEZtqw%2Bf2mwjnzavOM9i167n8TVeudkqU4a0364JT1dEAsXPo01QvlUgCUslqmtXGipDQykKOsbuyrtYhAgMRYZ1Sm8EhVQH1pnHvcUMiQEOonp68sa3759qPicULmmOE3bFr0OJajqf38znqgcdPkvfqsFYnZYV%2FAU4Lo30a4yahfPDpBwTk2QTIBd2PBcRmmH6BT5GXXOOWjwuU65UB5wdEZI012pT8lRRcquTeK6snWE2hJjhGOMGrr%2F%2Fc7ujJZnWav70%2B600QhEtnnfNC%2FY7PgKynjW1LSbVJBfIKGlb7KkWGYlzteVx3p5ky3e6GCiK9Jyaa6ALQbBvA2hylz3%2BF0lHs2vMPtU%2BSVJqbwK0MIaDtL8GOqUBGqVaWztTtpNuIo8n7ykufyOE3xJ9%2BoAQOE7m89esgkQBcaRBf3lNqy6PWuDAhrXxKi2NrKvDgcgptISxe%2FtPY0iFKseRui97xZt8LTnRtyFlQKkp4Oso41fCNdTUu4X%2B%2F2NxQgKkjL%2FCgwW6W8DblGq8rzBphzKenuQjOCZmq6DWA2vblrDBKknCnQ8LAdUWPxYBshtu4ke8%2FVzHZiQ73kjffKEm&X-Amz-Signature=b421ef3c62f9ad9fa9f368e96c8e8b3e119077cbd597b9c0dbbd61c428a7bb1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
