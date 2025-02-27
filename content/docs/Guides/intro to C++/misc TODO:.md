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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRL3ESVE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCF%2Fy%2FjG0t0S%2B5DXjJWvCtRc2lTYw8m272War3%2Fd4Zd1AIhAMdvQ06XRnv%2BT1nGhbbhwPI0ynvekcqYvG9sFSddwiE5Kv8DCHsQABoMNjM3NDIzMTgzODA1IgyEiNhNIi4P6v4Kr1kq3APD7k0%2BlsC6SykqJy89IWx713xaPC9bnAGAMcwPfny6dSvvS60iH0xVtUpuJWVH%2BgJrDJKfxTI7mmRe26j8kw0AkQXdeNpXgm2k%2F4aRV73rxPXmaLsFzfU75QrQ346fQEqFA4xqgIGKxrdvUKNQPmq209JFY2HzNLvckCX5PLtFVzgRyAP6lIQyzWJVkdbyNd7oPOMb1OTpYl94YKVlKUGe%2F2DyinaiUk5NfG8k3zHW16koMNzVtw6lDQAffCgNvPajQyhPN0AT1%2B7M2FuJXKHhmOjfW0J99BStZi1E1yOXXbMMkDtpW9ph9GpMRuyOD20q9Keeex8NxQRLVmj%2F%2FLZvb%2FyTcEOE9jbWOhVF7NCSC%2BsfyVdFz0EP%2BJLJoveTa0WuFk5DnmTJ9IVNevmh36oOqLoKalui%2BdfYA%2FPiplfyV2hFP7T9Ba0Lac2v%2F5nRyTzommVpabfWcdoRqAIX3PBnoeRCUlZA3IF30k0CcHbBE%2BRao9C5nN776Egr%2Fkrs2OxrKmw2XpfSARbFZ1QuBTjIAPw9TYQ%2BbC3wHVUqwkrWB5sTxvKqErK4YENFrKHenZWGBIDR2GnY6ezqEJX0GjLV5vRSShFpvDJwyhrXnQ87KvQsTZwS%2B7bGC4hSQDCd04K%2BBjqkAfMAgomkrz3sLn0Yhp0xXu10r3JK%2Fhrrj4iCV2w%2BBahPcXJEQIBp%2BMbuuqTy0w5knzNqy%2Fnqnae2FOuzxC2eGsxW%2F0kZyk4zyIL8G5tqTyLxKzcFKoClvvsM25wNsEhC4v4fybtpT8o1vd%2BaIqiLlI3cusiTPwLB9ciiZWmbzP7Sa1WHI8LFGHKUahJ4qTCI0NxRZL1HCxaMuJfJe3hdzDuwDEeJ&X-Amz-Signature=41004569906679b7566721c1c25897603ceeacff2abf7b360011ec49504100b7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRL3ESVE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCF%2Fy%2FjG0t0S%2B5DXjJWvCtRc2lTYw8m272War3%2Fd4Zd1AIhAMdvQ06XRnv%2BT1nGhbbhwPI0ynvekcqYvG9sFSddwiE5Kv8DCHsQABoMNjM3NDIzMTgzODA1IgyEiNhNIi4P6v4Kr1kq3APD7k0%2BlsC6SykqJy89IWx713xaPC9bnAGAMcwPfny6dSvvS60iH0xVtUpuJWVH%2BgJrDJKfxTI7mmRe26j8kw0AkQXdeNpXgm2k%2F4aRV73rxPXmaLsFzfU75QrQ346fQEqFA4xqgIGKxrdvUKNQPmq209JFY2HzNLvckCX5PLtFVzgRyAP6lIQyzWJVkdbyNd7oPOMb1OTpYl94YKVlKUGe%2F2DyinaiUk5NfG8k3zHW16koMNzVtw6lDQAffCgNvPajQyhPN0AT1%2B7M2FuJXKHhmOjfW0J99BStZi1E1yOXXbMMkDtpW9ph9GpMRuyOD20q9Keeex8NxQRLVmj%2F%2FLZvb%2FyTcEOE9jbWOhVF7NCSC%2BsfyVdFz0EP%2BJLJoveTa0WuFk5DnmTJ9IVNevmh36oOqLoKalui%2BdfYA%2FPiplfyV2hFP7T9Ba0Lac2v%2F5nRyTzommVpabfWcdoRqAIX3PBnoeRCUlZA3IF30k0CcHbBE%2BRao9C5nN776Egr%2Fkrs2OxrKmw2XpfSARbFZ1QuBTjIAPw9TYQ%2BbC3wHVUqwkrWB5sTxvKqErK4YENFrKHenZWGBIDR2GnY6ezqEJX0GjLV5vRSShFpvDJwyhrXnQ87KvQsTZwS%2B7bGC4hSQDCd04K%2BBjqkAfMAgomkrz3sLn0Yhp0xXu10r3JK%2Fhrrj4iCV2w%2BBahPcXJEQIBp%2BMbuuqTy0w5knzNqy%2Fnqnae2FOuzxC2eGsxW%2F0kZyk4zyIL8G5tqTyLxKzcFKoClvvsM25wNsEhC4v4fybtpT8o1vd%2BaIqiLlI3cusiTPwLB9ciiZWmbzP7Sa1WHI8LFGHKUahJ4qTCI0NxRZL1HCxaMuJfJe3hdzDuwDEeJ&X-Amz-Signature=685c1e987a8738cd7847bd72f3d17870176368c36aa48cbc1d990bffb9c711a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
