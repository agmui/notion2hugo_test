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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQFUXCA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGHHjcz4ua%2FzSegg7gE7FNLXHVBygdttkv4Opq3MISb1AiAZkL6Ec5bvoJYDdD%2B8CTdfJt%2B7glKYOgFsr742hXzWhSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMBAzWPzuNeKAQdx1GKtwDecavXZ9nfFJ6QU5y3jXVyDMUOLcoN9BXCWvTSmuKsRzR842hy6UU%2FV6xdZHqrjnSihnJtOg9kLr587iUWtXh%2FGHvtLJG60PHYfF3gHj3kpMpsgZzYa63huRe9KEbipMNUM2T1PawDnHFletylSZxLbLmhUMswzFRO3%2FKMn6GAVOOGGQFizUmFwmy1i4ePXzC9fh8DhC33Y3Ulch2etqoPyu9eXWFe114qS%2BxWA%2B9qKBwFrncNSx0V3BbJcldkbfnlJmpFOFB242jKmSK%2FC7DLf44M92ksijmwnuvHCpzkLo4Cw52khIZqMq3C34em88oSalpGrMGUkcow2tQPOwX7uIa7WYL5QCgLbCjS%2FVV4HwHLDspKgyn%2B2Zin2Dp4FNpofnvscNHfBVANLu7Q3xB3pItAeCfbpSpVptI7BX7I9%2BEgvuhkwg0SZJkomn2rOUWRuEV9HNAWQCrlz1jUt%2FkHhJ34jLLWVKyHrX6o7TTDRiw7P5JIFTXtz3UUKHEagmpBI2EXL%2FSfrqQksvEH50lBzyMt7oKRVMrtRBDWC4TQwsNK1bgohV6K5ltVpiWRmNvZqzWwVaQuZFYlBjxzUZ05y%2B%2BgWUcuC8NSc6HtYvK1vmRGisYtmGnEIVX1VAw67yewwY6pgE3BeO%2FhTncqs03cLMOUmVrUO4OIBHp4cOAch9aj0EXblLWDDeI4RDscQN26edhQGBaYO5QXzC0jqT5RKm9dygRrQzV3ln7oj0jq2yn2u8xo5mDTmAxZP%2F7nSmKAP7%2BzgP2D8frJOr2l9ZlTABWoDTHrE6zsw%2BZIN6crhEIMIBt9sXTpKtLr%2FSVwZGNSez5RGasJ6WzFjA0s6s8Y%2BtqurqXQPccr3%2FR&X-Amz-Signature=be5ea6499c8e296b4e57b509ee6d0bf4dd705b3118b501491d35a56545331170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKQFUXCA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGHHjcz4ua%2FzSegg7gE7FNLXHVBygdttkv4Opq3MISb1AiAZkL6Ec5bvoJYDdD%2B8CTdfJt%2B7glKYOgFsr742hXzWhSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMBAzWPzuNeKAQdx1GKtwDecavXZ9nfFJ6QU5y3jXVyDMUOLcoN9BXCWvTSmuKsRzR842hy6UU%2FV6xdZHqrjnSihnJtOg9kLr587iUWtXh%2FGHvtLJG60PHYfF3gHj3kpMpsgZzYa63huRe9KEbipMNUM2T1PawDnHFletylSZxLbLmhUMswzFRO3%2FKMn6GAVOOGGQFizUmFwmy1i4ePXzC9fh8DhC33Y3Ulch2etqoPyu9eXWFe114qS%2BxWA%2B9qKBwFrncNSx0V3BbJcldkbfnlJmpFOFB242jKmSK%2FC7DLf44M92ksijmwnuvHCpzkLo4Cw52khIZqMq3C34em88oSalpGrMGUkcow2tQPOwX7uIa7WYL5QCgLbCjS%2FVV4HwHLDspKgyn%2B2Zin2Dp4FNpofnvscNHfBVANLu7Q3xB3pItAeCfbpSpVptI7BX7I9%2BEgvuhkwg0SZJkomn2rOUWRuEV9HNAWQCrlz1jUt%2FkHhJ34jLLWVKyHrX6o7TTDRiw7P5JIFTXtz3UUKHEagmpBI2EXL%2FSfrqQksvEH50lBzyMt7oKRVMrtRBDWC4TQwsNK1bgohV6K5ltVpiWRmNvZqzWwVaQuZFYlBjxzUZ05y%2B%2BgWUcuC8NSc6HtYvK1vmRGisYtmGnEIVX1VAw67yewwY6pgE3BeO%2FhTncqs03cLMOUmVrUO4OIBHp4cOAch9aj0EXblLWDDeI4RDscQN26edhQGBaYO5QXzC0jqT5RKm9dygRrQzV3ln7oj0jq2yn2u8xo5mDTmAxZP%2F7nSmKAP7%2BzgP2D8frJOr2l9ZlTABWoDTHrE6zsw%2BZIN6crhEIMIBt9sXTpKtLr%2FSVwZGNSez5RGasJ6WzFjA0s6s8Y%2BtqurqXQPccr3%2FR&X-Amz-Signature=b45a4a7536b06401887e97f18ae8714fa1b8002ead2da821452ce5caa3c53c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
