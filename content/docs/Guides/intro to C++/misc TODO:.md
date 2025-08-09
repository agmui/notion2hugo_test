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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2VOW2FK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjMFM9Rxu9C4H31%2BqrSTKQHt4eIm20VBmvcCqI8yrzEAIgZ73UsyMcS1YwRBuGlvaJ%2BpMKNmWcAjS8A18ftzK9R0AqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYlXM8dGLmc%2Bkfm%2BSrcA1mRPsuWv3SUUiw1KnLphmWsTUGZCfWOov0e%2Fpf3mYUZswWqp84M20WZAgaQ5rlzFOi%2Fb88jm0KpHRM%2B1Gw7%2FHIe3nUVCi5bWH24Yz5V0zOmKQDyk%2BoHCnTl07KeLKWVxDFssb1M9x6yctHxwpvPFtFspHPApDvaED3ObibuZKNRhAGMbjeNOVVLpf9KMpmNeLs2enoMtJ8W1l4E2LJgYGNgArAEAj4tbbUh0H9EaIZLKbyrlTY8YXeBZZ4jimKtm905mAi8m3vDVApyG9wfoKURqb3LzoenUiSpWhY4lSkSFTIfnamDygq7W4BH86yT65VIXacHN0mehpt8DWRfxD1Vt3wdYUNVuPuWWx2OvLpE64dq94meUEFtTA7jF92MFanBPMsNjeKrbfkZMm3P7LqeKb6VwxJ%2F7F5nqSI5Zl3mcb85S5Cw5xSHtmh904plxrxAzHz10MEVAx%2FPZJ29rG3Q1ryW1y3oDkzWyzolZM%2F1vQ3qvpd1DurJn5XPVfK1kwx4xMXqit%2FyFV0O3TAOWj%2FFTqWS0mbMp873oXwnDMvLh8dAbwIVNd%2BVlvZP7pRAEYurI8ENGsnfII1VAUOAjb41FavfRG%2FZ4gXbPRbK3B2Nd6Bm5%2F1S4O3TkvlxMPuJ3sQGOqUB%2FONOhK%2BpxkYjZ%2FXGbJsf%2F5Fz3rUtv6odfVVeAjVFlhJaGZiRuGg7RMuc5Ka8t5inGtZKlb1VhM98DtpTngRX3CzkhoNKt1hqWhIl2qTXtQ%2FJ83mL3aeps9E676HSUH2klt1Rxxf2MobvJFLoSs%2BWZ8RTonEQmei%2Fdwvr9BnKyRVevE1kRxPJQHKMmIzC671dx2II4bJlF3EBJnNGvRHIqvm8pcI3&X-Amz-Signature=29e99a97eb79777ca48964c2f1e7a62724ec158c84ce47e094fdcec0ad17f631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2VOW2FK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjMFM9Rxu9C4H31%2BqrSTKQHt4eIm20VBmvcCqI8yrzEAIgZ73UsyMcS1YwRBuGlvaJ%2BpMKNmWcAjS8A18ftzK9R0AqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYlXM8dGLmc%2Bkfm%2BSrcA1mRPsuWv3SUUiw1KnLphmWsTUGZCfWOov0e%2Fpf3mYUZswWqp84M20WZAgaQ5rlzFOi%2Fb88jm0KpHRM%2B1Gw7%2FHIe3nUVCi5bWH24Yz5V0zOmKQDyk%2BoHCnTl07KeLKWVxDFssb1M9x6yctHxwpvPFtFspHPApDvaED3ObibuZKNRhAGMbjeNOVVLpf9KMpmNeLs2enoMtJ8W1l4E2LJgYGNgArAEAj4tbbUh0H9EaIZLKbyrlTY8YXeBZZ4jimKtm905mAi8m3vDVApyG9wfoKURqb3LzoenUiSpWhY4lSkSFTIfnamDygq7W4BH86yT65VIXacHN0mehpt8DWRfxD1Vt3wdYUNVuPuWWx2OvLpE64dq94meUEFtTA7jF92MFanBPMsNjeKrbfkZMm3P7LqeKb6VwxJ%2F7F5nqSI5Zl3mcb85S5Cw5xSHtmh904plxrxAzHz10MEVAx%2FPZJ29rG3Q1ryW1y3oDkzWyzolZM%2F1vQ3qvpd1DurJn5XPVfK1kwx4xMXqit%2FyFV0O3TAOWj%2FFTqWS0mbMp873oXwnDMvLh8dAbwIVNd%2BVlvZP7pRAEYurI8ENGsnfII1VAUOAjb41FavfRG%2FZ4gXbPRbK3B2Nd6Bm5%2F1S4O3TkvlxMPuJ3sQGOqUB%2FONOhK%2BpxkYjZ%2FXGbJsf%2F5Fz3rUtv6odfVVeAjVFlhJaGZiRuGg7RMuc5Ka8t5inGtZKlb1VhM98DtpTngRX3CzkhoNKt1hqWhIl2qTXtQ%2FJ83mL3aeps9E676HSUH2klt1Rxxf2MobvJFLoSs%2BWZ8RTonEQmei%2Fdwvr9BnKyRVevE1kRxPJQHKMmIzC671dx2II4bJlF3EBJnNGvRHIqvm8pcI3&X-Amz-Signature=5d365e8de13d0abea3e15f497825da9ac37e1364ed1f2c3e8a3c5ecd7c664515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
