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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUKKELSV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDCDj4k6Zmt%2BEn%2BBDRaT1AmnMPQqakfmKpX08piWCJ3BQIgDBrwhDN6LrBYjBvf%2FRN6ewGfQL6LhFa6IGBrZ8JXALsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKPkFW4pyy7mspIQwircAzylQfuqSlH0GTVEtPK5Zihm8mj%2FU0ArAATgoWctCsUmHAmBp0D5DMXaOnbsCrKcl%2BuncvtA%2FO855RiEEELu7TmZ7N1VLJXGmJCbSqc3el3n6T03DeGBdxVSe5V8JdsIAstrJ27mz5Uidl345jXwUxlNXxTlbN1M2Uunj82FwJJRluaPMRfXrKxfIlMwU%2BN5wcgoctWpMHiEPRyAhglzaFzKKmC3GO6R1z83pg1yeGf5MJkptGrMuxfE92wPqed1eIf9Q9qOMTlLBiuOD5V3lh2h3S%2FrQvyncWU5kOCJsEsDAF7YQRi3POj4dwn4e5DV03RX5jLmKJI6wZKiftIXFGTbVFRRCtnz6oQk2MmS8t2%2Bk0vRrJ4UGi%2BEEWxXtjUs1Ky0kpTOmSn%2B7g3wXl8RK5IzRbniU3n%2BMPJcgfG2WQ84KfP5sG%2F8Zx2VJTMsCKGZw9CMrd756m6Ylofs9Y07XeaIaVae5I1AoPFd9EtWlfuy2RhL96N8BmAPqrIbZKJYf3FO3k4cbLvuZWl1u6SOo0CpGOOYhysDu0X668HLMcVbwM94u53KRqbfu8kBqA2mnLLrqRvUgD33wKhZ7jcCQRN3Op%2B8jt3OO6jhUtCc%2BNVAOugJVOOzyArJenp6MNWfrMMGOqUBA2oNmSUouafJr43omvu861xqnU%2B7Lu9WzSaobmfFi86DqICZgWkcpZVJIoz2sr3a%2Fy4Szfgq6FZeBxwfggKmT0l4DKfgoiGjBti%2BKFtSRMaxtvuOmA15E1b886khsJAL8RUSKqXVWynxrMSh1%2FcpMKrsX39WM4eRQ1p%2BnbArAzhJayE4jc8zIYIXi9cPLIiTMCPVHt3oUz78Mc8C5PpzN0epIto1&X-Amz-Signature=7dbeb06826bbd838cfd8e328332641e7334a17ec9bf95760ffc4453bc394d244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUKKELSV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDCDj4k6Zmt%2BEn%2BBDRaT1AmnMPQqakfmKpX08piWCJ3BQIgDBrwhDN6LrBYjBvf%2FRN6ewGfQL6LhFa6IGBrZ8JXALsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKPkFW4pyy7mspIQwircAzylQfuqSlH0GTVEtPK5Zihm8mj%2FU0ArAATgoWctCsUmHAmBp0D5DMXaOnbsCrKcl%2BuncvtA%2FO855RiEEELu7TmZ7N1VLJXGmJCbSqc3el3n6T03DeGBdxVSe5V8JdsIAstrJ27mz5Uidl345jXwUxlNXxTlbN1M2Uunj82FwJJRluaPMRfXrKxfIlMwU%2BN5wcgoctWpMHiEPRyAhglzaFzKKmC3GO6R1z83pg1yeGf5MJkptGrMuxfE92wPqed1eIf9Q9qOMTlLBiuOD5V3lh2h3S%2FrQvyncWU5kOCJsEsDAF7YQRi3POj4dwn4e5DV03RX5jLmKJI6wZKiftIXFGTbVFRRCtnz6oQk2MmS8t2%2Bk0vRrJ4UGi%2BEEWxXtjUs1Ky0kpTOmSn%2B7g3wXl8RK5IzRbniU3n%2BMPJcgfG2WQ84KfP5sG%2F8Zx2VJTMsCKGZw9CMrd756m6Ylofs9Y07XeaIaVae5I1AoPFd9EtWlfuy2RhL96N8BmAPqrIbZKJYf3FO3k4cbLvuZWl1u6SOo0CpGOOYhysDu0X668HLMcVbwM94u53KRqbfu8kBqA2mnLLrqRvUgD33wKhZ7jcCQRN3Op%2B8jt3OO6jhUtCc%2BNVAOugJVOOzyArJenp6MNWfrMMGOqUBA2oNmSUouafJr43omvu861xqnU%2B7Lu9WzSaobmfFi86DqICZgWkcpZVJIoz2sr3a%2Fy4Szfgq6FZeBxwfggKmT0l4DKfgoiGjBti%2BKFtSRMaxtvuOmA15E1b886khsJAL8RUSKqXVWynxrMSh1%2FcpMKrsX39WM4eRQ1p%2BnbArAzhJayE4jc8zIYIXi9cPLIiTMCPVHt3oUz78Mc8C5PpzN0epIto1&X-Amz-Signature=46794ddc9b108ff974c7dd7d676fd8dc1beaabbb9f2671e1c6e371a8fed5f6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
