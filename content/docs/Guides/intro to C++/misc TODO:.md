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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJGEDYS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDp6K%2Fp6MIeM22PllKVT%2FcN4a1leRMLlflJwxKA8isHpgIgEn9SQoMphFeg9RWDBFzah2qCJWQ8OKlrPPk1B0RS7e8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIBBIFwY8PuSGFRrrircA1PRffCMpc8v6gHGrTasB9b0%2BvWVuGA%2FzT3aB5MSwxr7o8vKknBl%2BURPe2vv5tDKcpbUJIsqwDzCL4uwtB6zLuRQXPdsjogpCO%2F%2F0uskE6i3Ww19JBduBWI%2BNapTrbKPeiypekXyj%2Bqhs8iofDWeDjIGtEKxYZIKXcVwySwVCUVirbuowMwnq2%2FhtRNumQOogXK3GqqloCPv7HLKpZnvVpLj2vkvG8ThieoWlTcEkxoj06tJ3C4lJ3yckoRiVYmBir4PaMB19qMwl4wNTxm0%2FZNmIzTSplXupNd4NGF6JJ1R3G8yOg%2FJcF32e0kUypG0Yq5r5H1eQVD7w3Rani4NK7AoFxiS79CxsY%2B6zyKQgcHW1xv7f4VuHxnSEmx1YLHLIZOe3B7JCnWVdK85yG%2BVjxCmLOtGsExVR2xAj0yjd%2BJ7sebq3EPFz53jXzt5p3q%2B69TxA2qPsfoKquprg0Clls2VfbPUGo0us1llFp%2BAq7HO7kQBqMtcN9ocVsM%2FE7y2jj1HLkViYAtDMJk2JXjBUNEbvlPv2omN1e5B2Q5sSE5krVw6PT6D%2BE2jKQtLycgNPDJsn%2FnHlEqOjBuxv6c%2FaG8u3rdjh%2BtGvC2tctfx%2BumXOTgfUAUYatThhihXMMqCsr4GOqUBvrGma1fUzwKHSloQ79enKwvlFW5AeDT3NV9bHuz5t7fDwDDKhNz%2Bzmrp3M%2BsTFw680eThwrEGjXByRlCaMC67WNaUJpgpmoMvgW6NdBAJQHTuTC33cMvHPPWCxTW1%2BkXmxAWZkpnchBBjqw6RrO06daV9Z8XMkwgaxkOSrEYwoRl%2BoO5p7v9l%2B8Uh0ElnM94F2eTxrGGlFS5Z7FJxn6uEc5tfTeT&X-Amz-Signature=7d6debe2e8dc49b4cd2d16605eda2b4400a0cffaf6d5891b1b36b81b5e2ce242&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJGEDYS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDp6K%2Fp6MIeM22PllKVT%2FcN4a1leRMLlflJwxKA8isHpgIgEn9SQoMphFeg9RWDBFzah2qCJWQ8OKlrPPk1B0RS7e8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIBBIFwY8PuSGFRrrircA1PRffCMpc8v6gHGrTasB9b0%2BvWVuGA%2FzT3aB5MSwxr7o8vKknBl%2BURPe2vv5tDKcpbUJIsqwDzCL4uwtB6zLuRQXPdsjogpCO%2F%2F0uskE6i3Ww19JBduBWI%2BNapTrbKPeiypekXyj%2Bqhs8iofDWeDjIGtEKxYZIKXcVwySwVCUVirbuowMwnq2%2FhtRNumQOogXK3GqqloCPv7HLKpZnvVpLj2vkvG8ThieoWlTcEkxoj06tJ3C4lJ3yckoRiVYmBir4PaMB19qMwl4wNTxm0%2FZNmIzTSplXupNd4NGF6JJ1R3G8yOg%2FJcF32e0kUypG0Yq5r5H1eQVD7w3Rani4NK7AoFxiS79CxsY%2B6zyKQgcHW1xv7f4VuHxnSEmx1YLHLIZOe3B7JCnWVdK85yG%2BVjxCmLOtGsExVR2xAj0yjd%2BJ7sebq3EPFz53jXzt5p3q%2B69TxA2qPsfoKquprg0Clls2VfbPUGo0us1llFp%2BAq7HO7kQBqMtcN9ocVsM%2FE7y2jj1HLkViYAtDMJk2JXjBUNEbvlPv2omN1e5B2Q5sSE5krVw6PT6D%2BE2jKQtLycgNPDJsn%2FnHlEqOjBuxv6c%2FaG8u3rdjh%2BtGvC2tctfx%2BumXOTgfUAUYatThhihXMMqCsr4GOqUBvrGma1fUzwKHSloQ79enKwvlFW5AeDT3NV9bHuz5t7fDwDDKhNz%2Bzmrp3M%2BsTFw680eThwrEGjXByRlCaMC67WNaUJpgpmoMvgW6NdBAJQHTuTC33cMvHPPWCxTW1%2BkXmxAWZkpnchBBjqw6RrO06daV9Z8XMkwgaxkOSrEYwoRl%2BoO5p7v9l%2B8Uh0ElnM94F2eTxrGGlFS5Z7FJxn6uEc5tfTeT&X-Amz-Signature=b793338929d406f879e1b3f8febb6c85fc6bfcb4ba7d5e2d4cf813e645f69a24&X-Amz-SignedHeaders=host&x-id=GetObject)

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
