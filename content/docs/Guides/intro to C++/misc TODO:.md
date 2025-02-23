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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK5NMCB6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbGt7254BdPZ15NtiGB5wiKIFV6p894Ei%2FSD3bmGNUPAiEAwERC2ghsJrAGhISJyhvNNpWxh1KTBC9srHPgI1NgDI4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXnKNP4LlJym%2ByA%2BCrcAx8PcuDmutAJjG7ei1oNh3Jn2WPooaG6s3owLi61rOV38kffrjH0HGM%2BD6oYHLOK5TUAV4bbCIw5M5W13qDpJiXoQVgEtkXAvL4w7CnnoIQKi24J8rBzq%2FVldq171SNUP5UnnTTj7B%2BtZyFw7V3nfNgcCJujvMZOirko3f40UeK%2FPAIIUjSGAgEstDDUJmzoLLyoaowCK4K6LwswcR%2FWM01Iq7v1Y1cM4BjdxbDkf8CVxq7U4HSpYhpoJ5TXkMt02cb5iB9UDccir241TsjIwbIpRnIuIKosMP%2BfYZbfIfugdFJ%2Fk8mBCQs7pkEOjF36%2B60v8%2BHO0tGHrszUw7g7rAtfUX16bKYzqbgZy8Dw%2Fr8X2cRxty2UHFcMhV4IZxnUMlGflm569YRGLoP4Zxn2Vjf4IAV%2Bnorx4QboK2%2BuXKHiMapWMMKI4wODfffa0f9wL8ypWK9rlXIcWq2%2FEZqFoaPMvDRDCgMclcCuRMa3p96LsrifpPLGCPH9gfg19NV2a1dxkMI6RGVWwUMT3YxWPXtimhrFSdFHev24NL69oR7kFAyHqcl5s2SU60%2BOZD79q7hX0YrE1gwXwe79wvUFihNP1CfNkKKhI7ROwMelUlzIXxh%2FOrK2KoV8eZkqMLuO6r0GOqUB0qAmn27VGCvTRRJ5hvmlqZ3zsIF%2B2zBXcDTSPk2Wn23Z2qhk3sW9eNxXv5%2Fj9U1xuXW5oeioDzl4ErY2RpQd%2BL3gp65Fzq9gkiaUvPoV9BlK0vvi1d55ZbJlbQvWqB2KmIx1pQTkbZDLlZmncv14uaIKILew5LQH6EF9scwVUg%2BgVYcmmjtXQKVATAWvm8%2F99ivwyyJDJeAtzFxRnsVkU2tQMk1C&X-Amz-Signature=15cdc4df71ed650219507b522071f4bfd929a2ab4414db061737306878d41076&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK5NMCB6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbGt7254BdPZ15NtiGB5wiKIFV6p894Ei%2FSD3bmGNUPAiEAwERC2ghsJrAGhISJyhvNNpWxh1KTBC9srHPgI1NgDI4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXnKNP4LlJym%2ByA%2BCrcAx8PcuDmutAJjG7ei1oNh3Jn2WPooaG6s3owLi61rOV38kffrjH0HGM%2BD6oYHLOK5TUAV4bbCIw5M5W13qDpJiXoQVgEtkXAvL4w7CnnoIQKi24J8rBzq%2FVldq171SNUP5UnnTTj7B%2BtZyFw7V3nfNgcCJujvMZOirko3f40UeK%2FPAIIUjSGAgEstDDUJmzoLLyoaowCK4K6LwswcR%2FWM01Iq7v1Y1cM4BjdxbDkf8CVxq7U4HSpYhpoJ5TXkMt02cb5iB9UDccir241TsjIwbIpRnIuIKosMP%2BfYZbfIfugdFJ%2Fk8mBCQs7pkEOjF36%2B60v8%2BHO0tGHrszUw7g7rAtfUX16bKYzqbgZy8Dw%2Fr8X2cRxty2UHFcMhV4IZxnUMlGflm569YRGLoP4Zxn2Vjf4IAV%2Bnorx4QboK2%2BuXKHiMapWMMKI4wODfffa0f9wL8ypWK9rlXIcWq2%2FEZqFoaPMvDRDCgMclcCuRMa3p96LsrifpPLGCPH9gfg19NV2a1dxkMI6RGVWwUMT3YxWPXtimhrFSdFHev24NL69oR7kFAyHqcl5s2SU60%2BOZD79q7hX0YrE1gwXwe79wvUFihNP1CfNkKKhI7ROwMelUlzIXxh%2FOrK2KoV8eZkqMLuO6r0GOqUB0qAmn27VGCvTRRJ5hvmlqZ3zsIF%2B2zBXcDTSPk2Wn23Z2qhk3sW9eNxXv5%2Fj9U1xuXW5oeioDzl4ErY2RpQd%2BL3gp65Fzq9gkiaUvPoV9BlK0vvi1d55ZbJlbQvWqB2KmIx1pQTkbZDLlZmncv14uaIKILew5LQH6EF9scwVUg%2BgVYcmmjtXQKVATAWvm8%2F99ivwyyJDJeAtzFxRnsVkU2tQMk1C&X-Amz-Signature=cec0ad54f8af308430b7c0a345d83febe2368659f3620af1f1b0c631f97249cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
