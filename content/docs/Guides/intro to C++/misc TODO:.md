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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUGDVH4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTNfJLdTJ3Pb54zuOt7XKX10kDkuPTG1WKGI4psD1skgIhAPrQoiaTLv8wFgG%2FGJKLCMtixuK%2FxbkVy%2BBy0leOBvyNKv8DCCEQABoMNjM3NDIzMTgzODA1IgyDDQS7acDJxAXvFuAq3AOpFQcbqPP4vR21xtMq0hOv7LHAuFBVSlgpT1NxIeZ9MZlg9nBmGGKUQ7rn0RsAvhitpk6hSzv%2FGx91BmSLfUyJ70s05VDuPvaxg1%2BfL3Ga%2FVd0F1A1gJ4xSrcHRTgXO1y1exiZ4TPeAEeXsenG6g890gNpBbZerl1mwtbPzXRlQRyR3M9UCv47f9KepEf%2BIdPzijKRQdMQaU9BcxrJ9woUipe2g9bAXFFTgisMO1Lh1I%2BqR4EwyvGkXWJR6JS7Plqd4r1eEZIWr3PVfzxrkcnqGOoH4F8vRx01R%2FWKYbtziQw9aQjTVDqBww3K6hZCnVSrWBp79lBBbYExQDZEDzncctWaBkvWEnF%2FxIz5Ld2oVhG279dHB7MVcbSgvaHZou0oKe7ZyzaWNPbhxi28kNY5ikTSlHzfFqoiGAbBRAFXzKtxR81Z0mEw9ewKDDpY9ZuxQOmUaJGEefKWkQMQ60AVjPu4uXAkaFcKiiYTR4rmk3YqCgd3w%2FzGFS23ZG%2Fwj7up4Yc75CFS%2B0q9nSqFlmho0cj8oyaK%2BfnAbB8LnxNWolsr7ih1%2FhODrKBS6J9hvYUDusXzPic2ct2tmuXRv7WjgTDX1Pq5f9bF2lj2xf44sVm6%2BOCEKcceT2TTDjD3jY2%2FBjqkAUtEsogxH0z2JS0MBlTfH5mzrjQiGmp3O%2FCGxXk5YDcxgAVfQN2v5GyJPIiKomLAqnXj9O6zhFUwFgxlTBZVUf%2F4rx4yl8rLuSzphK4dEhHYbB%2BiVmDaMVlghISohc48FRbqlza8kdkP4AH0XSkMdma%2BRzhzSlQq5ix3WkErwvEd%2BEcL3w%2FQEH1v6gShate1DRc%2BA8xFykJPiIB%2FrupkzYbytWGi&X-Amz-Signature=61122931bdc7e23df6a13acf15af1ba078374efd02a00aee8216d4f5173b774e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUGDVH4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTNfJLdTJ3Pb54zuOt7XKX10kDkuPTG1WKGI4psD1skgIhAPrQoiaTLv8wFgG%2FGJKLCMtixuK%2FxbkVy%2BBy0leOBvyNKv8DCCEQABoMNjM3NDIzMTgzODA1IgyDDQS7acDJxAXvFuAq3AOpFQcbqPP4vR21xtMq0hOv7LHAuFBVSlgpT1NxIeZ9MZlg9nBmGGKUQ7rn0RsAvhitpk6hSzv%2FGx91BmSLfUyJ70s05VDuPvaxg1%2BfL3Ga%2FVd0F1A1gJ4xSrcHRTgXO1y1exiZ4TPeAEeXsenG6g890gNpBbZerl1mwtbPzXRlQRyR3M9UCv47f9KepEf%2BIdPzijKRQdMQaU9BcxrJ9woUipe2g9bAXFFTgisMO1Lh1I%2BqR4EwyvGkXWJR6JS7Plqd4r1eEZIWr3PVfzxrkcnqGOoH4F8vRx01R%2FWKYbtziQw9aQjTVDqBww3K6hZCnVSrWBp79lBBbYExQDZEDzncctWaBkvWEnF%2FxIz5Ld2oVhG279dHB7MVcbSgvaHZou0oKe7ZyzaWNPbhxi28kNY5ikTSlHzfFqoiGAbBRAFXzKtxR81Z0mEw9ewKDDpY9ZuxQOmUaJGEefKWkQMQ60AVjPu4uXAkaFcKiiYTR4rmk3YqCgd3w%2FzGFS23ZG%2Fwj7up4Yc75CFS%2B0q9nSqFlmho0cj8oyaK%2BfnAbB8LnxNWolsr7ih1%2FhODrKBS6J9hvYUDusXzPic2ct2tmuXRv7WjgTDX1Pq5f9bF2lj2xf44sVm6%2BOCEKcceT2TTDjD3jY2%2FBjqkAUtEsogxH0z2JS0MBlTfH5mzrjQiGmp3O%2FCGxXk5YDcxgAVfQN2v5GyJPIiKomLAqnXj9O6zhFUwFgxlTBZVUf%2F4rx4yl8rLuSzphK4dEhHYbB%2BiVmDaMVlghISohc48FRbqlza8kdkP4AH0XSkMdma%2BRzhzSlQq5ix3WkErwvEd%2BEcL3w%2FQEH1v6gShate1DRc%2BA8xFykJPiIB%2FrupkzYbytWGi&X-Amz-Signature=7689b2391d5be45d4e5e8a3ee1b811bafb3e3231c751de42735ecd274be577f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
