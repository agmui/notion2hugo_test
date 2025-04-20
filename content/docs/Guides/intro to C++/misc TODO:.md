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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MSODD5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFZU0o4ZRXlXnqyHwhsgGcG8aQqXdHzdtUwiFRV4HrHtAiEAs0MLm9mprPKFSx0oQzHejSDJ%2BHxdk2pa75G%2FD%2B26w4IqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBMeWxllBbNsnlDOircAy8xzP1kwoE%2Frv%2B6eypnHj4nQVyaRD8OMRyhiEItvzJlwmNsoZK2%2F5ZZczDped5YDOBCN%2BVHSP5CFiJI16AVQd9rvw2DWoyuTotDnr6GQ8jC63D3EhH7jvMacvIx%2FqyGA0sLeBApboy77He0ROWyzlqIQq3j47PUcv4hUNx42m7NRC%2FbLgc8j7WVqRmPPz5zWifDecLqYkRJsENYaqhKMvv9KMIxMPk6V24fSlMkcchaEA%2BmPMVA4T1BEmXahgRsyKgpUwkR7f9BRnTRr5vrl%2BoNSag5sveGsWepuNtYL2kr4ekBozavDpqTJng53ceN6G0Yx13O76DwpIS7eMSoI741v%2B4oCDUbi%2BFsiuKi298zHdtecaTutKXYYrT3tnF8mB0jSZiynncBILE%2BwQW3YNdUj7%2FuHzyozU9%2BxOEcwtrohcuXdCbprEaXMX7DZ2GaeEPilT5PoVFCcFrALi0bDM3LLpthTpRXfJt2wJseTHl2YjGelq3vQ08jEORMbdRLeeT%2FC0vAeSRr59nL1TDnIrjERDX1lbSRfSerWe%2BsFyFWJ855dq2YcXHDmMaEQdhdh%2FRjt4Ni1SHeGxvS%2FwjmR1pPiScbAdmfQWATU%2Fuc5qsBs7hYBmhiB%2F7jPLEIMLG8k8AGOqUBNFECO1yhjEVOIwgPkMAxStbL0yzIl42bu7CXVgEtWCthrNRB3FKFiOz9TiOn6ypGj9zTyn852R10qUstfhiH9JygKxz%2B0HHTbOHsoiwSMaXe72%2FF8l1TKzw3Z6ua49LP0sMBK4X8bG4VTgvWGCS7chM%2BNjzdqoaTizq8K%2BIJ5rM0SkXAlJa5hGHaffpS18EsxmvPw7SSbNYrRxT2DBuQUEWvjv4h&X-Amz-Signature=e91688d1418573f0c42ed86201fbd124bf456a414b39b43048311e82819b51af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MSODD5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFZU0o4ZRXlXnqyHwhsgGcG8aQqXdHzdtUwiFRV4HrHtAiEAs0MLm9mprPKFSx0oQzHejSDJ%2BHxdk2pa75G%2FD%2B26w4IqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBMeWxllBbNsnlDOircAy8xzP1kwoE%2Frv%2B6eypnHj4nQVyaRD8OMRyhiEItvzJlwmNsoZK2%2F5ZZczDped5YDOBCN%2BVHSP5CFiJI16AVQd9rvw2DWoyuTotDnr6GQ8jC63D3EhH7jvMacvIx%2FqyGA0sLeBApboy77He0ROWyzlqIQq3j47PUcv4hUNx42m7NRC%2FbLgc8j7WVqRmPPz5zWifDecLqYkRJsENYaqhKMvv9KMIxMPk6V24fSlMkcchaEA%2BmPMVA4T1BEmXahgRsyKgpUwkR7f9BRnTRr5vrl%2BoNSag5sveGsWepuNtYL2kr4ekBozavDpqTJng53ceN6G0Yx13O76DwpIS7eMSoI741v%2B4oCDUbi%2BFsiuKi298zHdtecaTutKXYYrT3tnF8mB0jSZiynncBILE%2BwQW3YNdUj7%2FuHzyozU9%2BxOEcwtrohcuXdCbprEaXMX7DZ2GaeEPilT5PoVFCcFrALi0bDM3LLpthTpRXfJt2wJseTHl2YjGelq3vQ08jEORMbdRLeeT%2FC0vAeSRr59nL1TDnIrjERDX1lbSRfSerWe%2BsFyFWJ855dq2YcXHDmMaEQdhdh%2FRjt4Ni1SHeGxvS%2FwjmR1pPiScbAdmfQWATU%2Fuc5qsBs7hYBmhiB%2F7jPLEIMLG8k8AGOqUBNFECO1yhjEVOIwgPkMAxStbL0yzIl42bu7CXVgEtWCthrNRB3FKFiOz9TiOn6ypGj9zTyn852R10qUstfhiH9JygKxz%2B0HHTbOHsoiwSMaXe72%2FF8l1TKzw3Z6ua49LP0sMBK4X8bG4VTgvWGCS7chM%2BNjzdqoaTizq8K%2BIJ5rM0SkXAlJa5hGHaffpS18EsxmvPw7SSbNYrRxT2DBuQUEWvjv4h&X-Amz-Signature=f0a3eadaf110e24f30d9f2286a314d65c67af0ed733234e15687256a61f8cb99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
