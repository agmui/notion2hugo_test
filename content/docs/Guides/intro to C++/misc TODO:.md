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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YPJSNW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCizR%2FNpTXAIceNrGaTJ9ZRz4U0CrMG3zgGjbLnzPwiJgIhAJpbx8cP4ZfbwcROZNMBcfw4f648rot4CMU6%2Fh2%2Fz66PKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoEaYWAUBYfmdoDCkq3AOusF7yisMDIDBUCnkHBoabn%2BnKr9MqkdSs3iRg%2BqQjRU5A4OovhquWUVN2%2FjY2OJcoFol8uRIh54nB9faY7PpE0yRqju7C25FuKv5ZSMxYJBpVpq10V35YjozcXfgtodjw35ecOcSd3%2BUqKFEybRbVPZN9uDaP8qf8O4RdOsaznd7db%2FW5LzFuUf4rkh9fafID6n2dTq%2BBbgBM56G9T%2Fturu24AQjb7iHoFt%2BPtwfcPr1TaWf1bWZLNoxzDEQOuTCGKzyN%2BVl%2F7qYTIjf3WytKUAD%2FPEC1QIJBOypXgDDRL0uO0x2QVjhXHEq0Hk6mznDmaP5frKWD56VejLck3dqE6%2FDUZmV6Jirix1UMiUM2NeXSWPD%2FpVDX9kkWiVEGJy5waPC0LQSnCnIf5eEKnCTkWeXpbiZE%2FyZ5Lpq4lgllId8yReREMD0ihrfPf3BbcURY%2BhGWXtIgBJtI%2FUHUQlGfS3opJNpAw0KbEOX%2BRJEwUcAotQwj8lFRs1WTRbWw8MhTeF8Kz36yCMA%2F3nM9Nv5kHDOzg%2F4hFjlC2CcJYsjP8Hz7dkfOBzokObo%2Bh%2Fq5ZoPf9drD5zBpir7HHRU4gu7bU8SEHSpGyrww3LPhnLYKrPcfOJWXRPTum5yjUDCLu4G9BjqkAfph4S9wwGzjmHAbFglB21bTQJyhu3KU8RiV3hNk5QncEr5B2BPy3zG%2FBiG0WOZSNgKiVcLaVUl50582qusIDgJCj5qRKVtSHr8vnjWzHeqH8pIoofrsjpBu5%2BpCahjZOm0WKyr17CDvT1Ta%2BmPVofvZDg1O6x9LpYDexD%2FmfCE6SVxan460U5ob%2BQLP4PdH2M8MNdSfLMvjpNxeijdgAFhJeFKV&X-Amz-Signature=2ecc1b1621b2833f01fb68136d178d9c86e05f00be70eb2e65a47d60a442c9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YPJSNW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCizR%2FNpTXAIceNrGaTJ9ZRz4U0CrMG3zgGjbLnzPwiJgIhAJpbx8cP4ZfbwcROZNMBcfw4f648rot4CMU6%2Fh2%2Fz66PKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoEaYWAUBYfmdoDCkq3AOusF7yisMDIDBUCnkHBoabn%2BnKr9MqkdSs3iRg%2BqQjRU5A4OovhquWUVN2%2FjY2OJcoFol8uRIh54nB9faY7PpE0yRqju7C25FuKv5ZSMxYJBpVpq10V35YjozcXfgtodjw35ecOcSd3%2BUqKFEybRbVPZN9uDaP8qf8O4RdOsaznd7db%2FW5LzFuUf4rkh9fafID6n2dTq%2BBbgBM56G9T%2Fturu24AQjb7iHoFt%2BPtwfcPr1TaWf1bWZLNoxzDEQOuTCGKzyN%2BVl%2F7qYTIjf3WytKUAD%2FPEC1QIJBOypXgDDRL0uO0x2QVjhXHEq0Hk6mznDmaP5frKWD56VejLck3dqE6%2FDUZmV6Jirix1UMiUM2NeXSWPD%2FpVDX9kkWiVEGJy5waPC0LQSnCnIf5eEKnCTkWeXpbiZE%2FyZ5Lpq4lgllId8yReREMD0ihrfPf3BbcURY%2BhGWXtIgBJtI%2FUHUQlGfS3opJNpAw0KbEOX%2BRJEwUcAotQwj8lFRs1WTRbWw8MhTeF8Kz36yCMA%2F3nM9Nv5kHDOzg%2F4hFjlC2CcJYsjP8Hz7dkfOBzokObo%2Bh%2Fq5ZoPf9drD5zBpir7HHRU4gu7bU8SEHSpGyrww3LPhnLYKrPcfOJWXRPTum5yjUDCLu4G9BjqkAfph4S9wwGzjmHAbFglB21bTQJyhu3KU8RiV3hNk5QncEr5B2BPy3zG%2FBiG0WOZSNgKiVcLaVUl50582qusIDgJCj5qRKVtSHr8vnjWzHeqH8pIoofrsjpBu5%2BpCahjZOm0WKyr17CDvT1Ta%2BmPVofvZDg1O6x9LpYDexD%2FmfCE6SVxan460U5ob%2BQLP4PdH2M8MNdSfLMvjpNxeijdgAFhJeFKV&X-Amz-Signature=b2d731ef732dfdb793673020ab9bef21d487ed705e7a60d0c053694422fd1587&X-Amz-SignedHeaders=host&x-id=GetObject)

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
