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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6D4R2M%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGczs4XNPPn3Hkg27dOmKDBHOfMCbYolyEJ3m%2F%2FcPJ7dAiEA4cQ6UdVbUdtdkx8yjOl3Y4HWTFX6yFkEHRG6G0U%2Fy2wq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOwiHt2vVMUXEOVYSCrcA8s5LGprCeGYBxQ3Uw2aqB1YL1YpY0Dsm%2BG7piM%2BPmBfqn%2FqNWCKBfjCzg2xiv3upKdzbnLBNuseo7kAkK2HPDjIjCgtOTaE1HDBX16rq6wFUBAbwRP55D4nNNEr1aC%2F0ynOLfkdzOaTFmFsPcA1gS3%2FIZ4JLbrXvXahVFgHQBSFZSDje68EfgPFr122CewQzuzsaFzV124By%2FGwjQeWmlJZHbQbzQiIUARBz%2FItZb1UCjN0LzWd00E68CJlecX8zYv14rYM6ryhnCYx9VPefBN9GWrpmWJLIUCs4ThxSVMj9gaEvOWm%2Bpb1J4Euyn91HuJdcLhb3tjeUzKluH8OrAXGuNNdSN03NNWq9HCLKdq9AbsB5AgJlW6jo6RviFgoznlOYuRpcfeu6RmI%2BwpEUIjq2G29LLJ2flmGo0RPczjetUT8q3XqQe%2FlVc4mkzCYP7bs70WGMRufWUzok6D6cha%2FP8KTaslutlnWK%2FbMncwQIL7%2FRARrAIMe1WbY2KgyuW7N4cvNvtOxBet9V76fXjeqBimOsKw8CS5sBc2O3z1ZBQGz5fi9T1zSBrUPBEJI00FyUGQF4eBQy2RwwXThWYTwYQUlPgNryRRedjORVCzEfPrE8j9ICkFo3Lu5ML%2Fsw8IGOqUBBlsh4nIdXUKHqduOOWwKlCHGJ6k93DcbcRufhKWPOQw7HaAEn9kfOWay3wavgRyGYvuypR9Nb8pPsGnt79O7mEMc2WlMgi4do36%2Fc9WL9R6ryIGeRyAwpzf8IQCTK%2FouLiPlvn%2FG1561tlLsril4iiFBhcXkUgPZCdq0RFBQ7xPuus2LmjjRWbnPXcGVo06XWcXtlnCFRAp6KPioODxkGHGh9PZ%2B&X-Amz-Signature=14960790a2c0b5ebd46e7b2c6277d584d6ee171c08190a8875531a1f2aaec926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6D4R2M%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGczs4XNPPn3Hkg27dOmKDBHOfMCbYolyEJ3m%2F%2FcPJ7dAiEA4cQ6UdVbUdtdkx8yjOl3Y4HWTFX6yFkEHRG6G0U%2Fy2wq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOwiHt2vVMUXEOVYSCrcA8s5LGprCeGYBxQ3Uw2aqB1YL1YpY0Dsm%2BG7piM%2BPmBfqn%2FqNWCKBfjCzg2xiv3upKdzbnLBNuseo7kAkK2HPDjIjCgtOTaE1HDBX16rq6wFUBAbwRP55D4nNNEr1aC%2F0ynOLfkdzOaTFmFsPcA1gS3%2FIZ4JLbrXvXahVFgHQBSFZSDje68EfgPFr122CewQzuzsaFzV124By%2FGwjQeWmlJZHbQbzQiIUARBz%2FItZb1UCjN0LzWd00E68CJlecX8zYv14rYM6ryhnCYx9VPefBN9GWrpmWJLIUCs4ThxSVMj9gaEvOWm%2Bpb1J4Euyn91HuJdcLhb3tjeUzKluH8OrAXGuNNdSN03NNWq9HCLKdq9AbsB5AgJlW6jo6RviFgoznlOYuRpcfeu6RmI%2BwpEUIjq2G29LLJ2flmGo0RPczjetUT8q3XqQe%2FlVc4mkzCYP7bs70WGMRufWUzok6D6cha%2FP8KTaslutlnWK%2FbMncwQIL7%2FRARrAIMe1WbY2KgyuW7N4cvNvtOxBet9V76fXjeqBimOsKw8CS5sBc2O3z1ZBQGz5fi9T1zSBrUPBEJI00FyUGQF4eBQy2RwwXThWYTwYQUlPgNryRRedjORVCzEfPrE8j9ICkFo3Lu5ML%2Fsw8IGOqUBBlsh4nIdXUKHqduOOWwKlCHGJ6k93DcbcRufhKWPOQw7HaAEn9kfOWay3wavgRyGYvuypR9Nb8pPsGnt79O7mEMc2WlMgi4do36%2Fc9WL9R6ryIGeRyAwpzf8IQCTK%2FouLiPlvn%2FG1561tlLsril4iiFBhcXkUgPZCdq0RFBQ7xPuus2LmjjRWbnPXcGVo06XWcXtlnCFRAp6KPioODxkGHGh9PZ%2B&X-Amz-Signature=b763fd81b27a5e168f0a80405a067c2d45d3b075509fe04d29371aae1cc41fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
