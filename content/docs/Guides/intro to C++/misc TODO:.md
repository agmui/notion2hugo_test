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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB5XOOHX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5LhwS2r2RzoRQmH8sHkMRi6KXgkeJ5q%2FGo35ZMkaMQAiEA0XT86k1eqz35Mtgr8tLAN5zX4RmN15NspnLfN1NZiVEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIddl3Q6MnXy2lpOJSrcAwwX1jiOUbvLlqVPBHlF%2BPSZGn0ev43jnl9oshQwa9DwGOtPCyu4YTls1LFS42USVP7z0oc7DXVYicP3lAo2ZnDIKclub4c9BzB9KFb6QqBERWXSgc0918ktAdLllX%2BVEH8Dq5oAZncMxTk9v0dKrejoylMlszQdPEN1%2BsPaWXu3l2v39T1mDu%2B5zx7jU1wUlL7x%2FXIzR2NFT1KjjxZbNa%2BExKRkCPajni53Ry7NuS%2BYqZqtJ5EclO%2B7wdFlRsDW67epBNnJ3MwDnCMgIGnJwQ1jfBmZ%2BX9b52RSStNUoD4xsLN61BXMpD6K%2Fnte3CJjS%2B2o5ks7Zjj6hjCl%2BI8kFFn%2BmOzeSWJ0DPqijd6EFN2Yx8yo8yitHiyns064iJT8kL54xXOkBbXZ3R32Y5zQStg8V0EAcM07%2BaxfmftaFtbfv0nYp11B%2BTnF2RjBMsIKKuO%2F3jpfZHE7n3Gv2L5body1WNd3Wkki6yi%2FGyko0y7Jgf9GR36gJ8caEmf6oXQrEVf2nvRtbhfQNfgK22v9Ciomoan5PUjKNVTiEZstwlCFrmIP4qz%2FQ8kaTzUUlUpStVQvE5I92Qg5E2roxeR7jSIxUXbTvAeARJiNv2LilYPN4bzw94dB790MC1MOMJOMuMAGOqUBC0kgs5p40x6cuAvnKacASM8Bh4FyJSchuTFNaTVhSIMoTPgVsuKlhO8TPR3OkgJHkmezg7eS2g%2BCvMkJ16xbB1tfFXawzapCgu62jus752a7Cac5oE7tXiX9XANqgAjvrJKms8NyfbKLSrLtiqtHp5UXpRMEY5nDRNuvAbPrLVK23qbXUqOuTBwJaVrEX6pAJXRvt1Vs7Dp%2Boctmn6Brm%2Fg%2BwUEv&X-Amz-Signature=41fc1a866237f4654713e265fd71308237a3a6f28a696b0196ae859e95b6e2ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB5XOOHX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5LhwS2r2RzoRQmH8sHkMRi6KXgkeJ5q%2FGo35ZMkaMQAiEA0XT86k1eqz35Mtgr8tLAN5zX4RmN15NspnLfN1NZiVEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIddl3Q6MnXy2lpOJSrcAwwX1jiOUbvLlqVPBHlF%2BPSZGn0ev43jnl9oshQwa9DwGOtPCyu4YTls1LFS42USVP7z0oc7DXVYicP3lAo2ZnDIKclub4c9BzB9KFb6QqBERWXSgc0918ktAdLllX%2BVEH8Dq5oAZncMxTk9v0dKrejoylMlszQdPEN1%2BsPaWXu3l2v39T1mDu%2B5zx7jU1wUlL7x%2FXIzR2NFT1KjjxZbNa%2BExKRkCPajni53Ry7NuS%2BYqZqtJ5EclO%2B7wdFlRsDW67epBNnJ3MwDnCMgIGnJwQ1jfBmZ%2BX9b52RSStNUoD4xsLN61BXMpD6K%2Fnte3CJjS%2B2o5ks7Zjj6hjCl%2BI8kFFn%2BmOzeSWJ0DPqijd6EFN2Yx8yo8yitHiyns064iJT8kL54xXOkBbXZ3R32Y5zQStg8V0EAcM07%2BaxfmftaFtbfv0nYp11B%2BTnF2RjBMsIKKuO%2F3jpfZHE7n3Gv2L5body1WNd3Wkki6yi%2FGyko0y7Jgf9GR36gJ8caEmf6oXQrEVf2nvRtbhfQNfgK22v9Ciomoan5PUjKNVTiEZstwlCFrmIP4qz%2FQ8kaTzUUlUpStVQvE5I92Qg5E2roxeR7jSIxUXbTvAeARJiNv2LilYPN4bzw94dB790MC1MOMJOMuMAGOqUBC0kgs5p40x6cuAvnKacASM8Bh4FyJSchuTFNaTVhSIMoTPgVsuKlhO8TPR3OkgJHkmezg7eS2g%2BCvMkJ16xbB1tfFXawzapCgu62jus752a7Cac5oE7tXiX9XANqgAjvrJKms8NyfbKLSrLtiqtHp5UXpRMEY5nDRNuvAbPrLVK23qbXUqOuTBwJaVrEX6pAJXRvt1Vs7Dp%2Boctmn6Brm%2Fg%2BwUEv&X-Amz-Signature=0749f5194afe96ab973086be2d9256bb8300431e9277a1f00913c4912f5147ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
