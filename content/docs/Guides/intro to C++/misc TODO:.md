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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4CXGLR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU%2Bal8yqbe1f1nDTZqJcPTb0Jt%2FAQkbdevtUQsDVoVLwIhAJKDMpMv1pVSVsjOjs0j46x51zqXJuMnINqoaiZR%2F90nKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoVPo8Jx5uTIseUtoq3AMWuTHJlKzT9Mbzd%2BxTPqJTqd547wn7EXGmr5I44JR5dr8bvdzgfjwc70iTpqpYmZpzl52YdrgpimnkkhcfUJO%2FpOfzRBSCKZ3YRoBQm%2FDc8vdXB2PcvTXlQgUs8cnnDSILMDaYum%2FxrKV%2BP7PcEAgP34z82Im81B5vgbbtBs%2FUnGs7zOUpyDc6gAWdjVMMmHgjoOgJRHPAAwCaERT4H6l%2FUHkSzZaE0yNweb0mgJSAIcazPTxraWylq8m8iPmmzNVQRZ64x33Eq52XX07CDV%2FxP8eHnzUrHjGFVWgx3sXA4rzqW%2F1rzYFvh1FDVX0Xt4dtdpuw2kZGZa2vCjp4KdWl2wFX%2Bsv4s2PCtpHRiRj0NLQ3AieFhCvPdGuiEYFKSPsUw0zs5e5tX1t%2BwBGrqCnLkHoujEs2Yn9Zku2JDv4vrviy6eR18s7Nsjb%2B5wzlRImH3DWRuTa6zgCJpi02Y%2F9Jbo0puRt0tYvKeRvJUhJ14rN1Q3ImkTTvbkH5npEnHb6DsPCKxidnaPTGoe5uwo5pekhkJnB8V0qOZlIPGHzaxb0PUWd9KHLQy%2BJRm0unHJ2oST0aIBpo%2FD74pfHEzozjZCwGv7m3svReNqBscFmHMvFYbxlVc7kV3FX5PjCno7jDBjqkAawq5BqcErZWa6IMz2LO0JnQfFUHfbMi4D0%2B%2F0ibsZ3x3iqMo1S8qltlY4INLH9LETu2CY%2FFbqyvZyaYvdagtwzJ7ZB3IDFOiLzUIHSiLE8LC%2BdCTV88jz6T9Kb7jmby6h%2B%2BpG8liCAFbnYlGbi5%2BCN3N16z0MRR4xSUYXMgq4kLuIoe9cH6uTnwGNaSU9Xc5snzOkXgfYz0wFezLi0MJ7S7YvIJ&X-Amz-Signature=a9cfb7c946c8413b61b5a23b763b21ca8196ebeb73f7eb1c1567a028b734bfb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4CXGLR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU%2Bal8yqbe1f1nDTZqJcPTb0Jt%2FAQkbdevtUQsDVoVLwIhAJKDMpMv1pVSVsjOjs0j46x51zqXJuMnINqoaiZR%2F90nKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoVPo8Jx5uTIseUtoq3AMWuTHJlKzT9Mbzd%2BxTPqJTqd547wn7EXGmr5I44JR5dr8bvdzgfjwc70iTpqpYmZpzl52YdrgpimnkkhcfUJO%2FpOfzRBSCKZ3YRoBQm%2FDc8vdXB2PcvTXlQgUs8cnnDSILMDaYum%2FxrKV%2BP7PcEAgP34z82Im81B5vgbbtBs%2FUnGs7zOUpyDc6gAWdjVMMmHgjoOgJRHPAAwCaERT4H6l%2FUHkSzZaE0yNweb0mgJSAIcazPTxraWylq8m8iPmmzNVQRZ64x33Eq52XX07CDV%2FxP8eHnzUrHjGFVWgx3sXA4rzqW%2F1rzYFvh1FDVX0Xt4dtdpuw2kZGZa2vCjp4KdWl2wFX%2Bsv4s2PCtpHRiRj0NLQ3AieFhCvPdGuiEYFKSPsUw0zs5e5tX1t%2BwBGrqCnLkHoujEs2Yn9Zku2JDv4vrviy6eR18s7Nsjb%2B5wzlRImH3DWRuTa6zgCJpi02Y%2F9Jbo0puRt0tYvKeRvJUhJ14rN1Q3ImkTTvbkH5npEnHb6DsPCKxidnaPTGoe5uwo5pekhkJnB8V0qOZlIPGHzaxb0PUWd9KHLQy%2BJRm0unHJ2oST0aIBpo%2FD74pfHEzozjZCwGv7m3svReNqBscFmHMvFYbxlVc7kV3FX5PjCno7jDBjqkAawq5BqcErZWa6IMz2LO0JnQfFUHfbMi4D0%2B%2F0ibsZ3x3iqMo1S8qltlY4INLH9LETu2CY%2FFbqyvZyaYvdagtwzJ7ZB3IDFOiLzUIHSiLE8LC%2BdCTV88jz6T9Kb7jmby6h%2B%2BpG8liCAFbnYlGbi5%2BCN3N16z0MRR4xSUYXMgq4kLuIoe9cH6uTnwGNaSU9Xc5snzOkXgfYz0wFezLi0MJ7S7YvIJ&X-Amz-Signature=f69593a1fa7ac0afc53486dd2449fcf698f386b1969040250d47d4832323f6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
