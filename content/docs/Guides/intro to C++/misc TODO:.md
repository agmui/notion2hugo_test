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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW5FHJS7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDyMEgnahTbGD69m5Jc61XHFNCkoKhVLl8vZuqhsHqSEQIgfOsaYS%2Fy36q%2BA%2FKiASBeqCo3TWoL%2B7AD0ihaDyFbYFAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC9oPvGXMnVTb9A1DircA3BICP%2Fu66OFClhMCu5osEFGS%2Bwdb0OI2een7daOLcWgMy1HXTEsSIVpBEKSFcVppgPumV6WZ66aF4f6x4xb%2B%2BbRjG6H2wEr6l39Z0OdZUmSRex9gkC9kHzmqNCmQZUG4t5wF4f6Hx49Pu%2BLbZA6HYCViCcCYDUyCzk5M9CquESKfpaJ0SDduz882lMBf71V5aC9cEtOelJ1nM0hoKZPsQpIXFPWFIKoQQyyr1Ol3e459Z1MOWhVCAi%2BRkQZv72pHfugtGE24Z2dNKvANVju8GNnLWeVKfF8gUjP8bvRSRDacPbdLnSJg9xVT9r4hKjymkJJw19EZs3Z8smGrIhiY2tT12jhG6pIuGIrDXyKNBWLkup7CVUFYYiVlmEV15XtMpJb4pjeKUUOnOd00P46MilRKRPs7k49JvY1uHLXP75J0nEF2HqLjikeJudREQf3VfgelHzWl64srqKwCGbrshliy3K5SfslBKwZybLRg6C3gdrJqxaUtKByk64Y5S1CI%2BZS3vRQUSWLOo1rAOMJXMM5ewaj%2BGO5bFvvtCa%2FIlOppNGi1%2Bnt6t87bxY5RDT%2FE%2F31MLQFjmgsa7ovMh%2BgHpb8Q6y5pniAjSLM%2B725XEAQxxYt6RH6k6WSfcQ9MKSgrb4GOqUBb5ItJj4N7tIMgJWU9TJg0xQ%2BZzuXEVvh128%2B5LBF81u1zNRJlGB5cmv%2B6%2BT10qIC59VGermUSbvuiCoMB%2FURh%2BhN7d7O2WeHpvTiBiTjoLTvoz%2BsV8AL6u6hxi%2FNno2ElRxvnPQczVwWXj9sQL8xRvr2I268GSE7UjFhv%2B6P6sNBl%2FATYZpxMl1YI0EdsCC239%2Fo75HSV5EbPZYJuuDc8GEdHX81&X-Amz-Signature=17284807e8dce37d69416dcd2730765277f460b3edf75a250131c3913bcde48a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW5FHJS7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDyMEgnahTbGD69m5Jc61XHFNCkoKhVLl8vZuqhsHqSEQIgfOsaYS%2Fy36q%2BA%2FKiASBeqCo3TWoL%2B7AD0ihaDyFbYFAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC9oPvGXMnVTb9A1DircA3BICP%2Fu66OFClhMCu5osEFGS%2Bwdb0OI2een7daOLcWgMy1HXTEsSIVpBEKSFcVppgPumV6WZ66aF4f6x4xb%2B%2BbRjG6H2wEr6l39Z0OdZUmSRex9gkC9kHzmqNCmQZUG4t5wF4f6Hx49Pu%2BLbZA6HYCViCcCYDUyCzk5M9CquESKfpaJ0SDduz882lMBf71V5aC9cEtOelJ1nM0hoKZPsQpIXFPWFIKoQQyyr1Ol3e459Z1MOWhVCAi%2BRkQZv72pHfugtGE24Z2dNKvANVju8GNnLWeVKfF8gUjP8bvRSRDacPbdLnSJg9xVT9r4hKjymkJJw19EZs3Z8smGrIhiY2tT12jhG6pIuGIrDXyKNBWLkup7CVUFYYiVlmEV15XtMpJb4pjeKUUOnOd00P46MilRKRPs7k49JvY1uHLXP75J0nEF2HqLjikeJudREQf3VfgelHzWl64srqKwCGbrshliy3K5SfslBKwZybLRg6C3gdrJqxaUtKByk64Y5S1CI%2BZS3vRQUSWLOo1rAOMJXMM5ewaj%2BGO5bFvvtCa%2FIlOppNGi1%2Bnt6t87bxY5RDT%2FE%2F31MLQFjmgsa7ovMh%2BgHpb8Q6y5pniAjSLM%2B725XEAQxxYt6RH6k6WSfcQ9MKSgrb4GOqUBb5ItJj4N7tIMgJWU9TJg0xQ%2BZzuXEVvh128%2B5LBF81u1zNRJlGB5cmv%2B6%2BT10qIC59VGermUSbvuiCoMB%2FURh%2BhN7d7O2WeHpvTiBiTjoLTvoz%2BsV8AL6u6hxi%2FNno2ElRxvnPQczVwWXj9sQL8xRvr2I268GSE7UjFhv%2B6P6sNBl%2FATYZpxMl1YI0EdsCC239%2Fo75HSV5EbPZYJuuDc8GEdHX81&X-Amz-Signature=1e0c5006bfbb1efff38a9ab30dddcb3f720e16b11635e91f56a12671f8ae20b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
