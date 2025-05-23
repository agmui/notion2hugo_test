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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP7XBAPP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDWx8uuNVXpvsCyrTXCnzLPIQNTBDcl2LtujG%2BBZ1XMfwIhAPRYie2GDf1AhB9%2BI%2FTfPrwU%2BFEKdtAK7q1oMsA%2B7HvRKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5ViRh3K2UjuuMCxQq3AOnm8ILFTZAiCtd7YFQ23thV7FPkz4yvpjHenYMYZThliF3gzIbWiShP5s3AcOZfx3yezxPXl%2BW9EfwCXrtm0Lv%2FvEmBzd7JdldblVjX7bLR003NMFgeZ8G3vfrlHpADcDfTyBA0qrL%2B4x2g7arBFD5hOzOcBFRzpxQl6oE6iUHhAEy0BTBu%2Br0E5M6OcUH752yvBfkP%2Fhr2TpjfKmR0ISSmBLDy19zihxL3Pw0TZIUX2x1NEvlGSci90EWewfh8gFrg6BOp3laO1YthwYgaqba61O6xRUo2K%2F3WW13GBRz0d37k07BpHYgj0BpHJJ64Pq4%2BidW9TlXBz72rKqGyBudrPzJqIe6tL1GPn2y3f18wdvT2C2tOc8pCah2O2Hv8ZNO8CwMKxZVyBLsfA%2FC1FyeYJhWFtd0wVzXJ43ncacpr8O9FUKA9%2BlBZMooug0Naa%2BeYYsFMg%2BxzAhUTzYPqIHSSKmrA30EMI5UbE%2F%2BRUTRDL0l1Sp7sU9623wZkKSe7L1dco%2B51xaPP3U3Ae8YdzLOfe5%2FqJ0FFHgyrkWlN17IOqW9rAVJb%2FnF%2BFOdb3KG7j9elwzTinrkBGzgOeI%2BFrVfv%2FYCusLQcpakT0hQknS03h8%2BoGsohJ6wrNKIBjD1ocPBBjqkAYBKnZZkaxP%2FOrYTTAbpddLRvWtwfpuRTzI6HVg2L1XoYp%2Fa1Ozmvt%2BGDJQg1Kjj75KaAiX8vUVCVoQGzmH0vhfpf5sQs8uMDPiQSULzp2PMLJ%2BPx4o9s5AbW4LbCeFVHJPdNNNJjZv8q4AEYJaWvjYflMjOBVUt3C2Kk6Ks8RD214PEwc5Uwdqw3fTVh%2BvbeVG9VRSW0RsV2X2I%2B4rve4X5FW0o&X-Amz-Signature=b9b954cc2a0d1539116053535999f5ae120064a4298ea80f6ff4a3cac919307e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP7XBAPP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDWx8uuNVXpvsCyrTXCnzLPIQNTBDcl2LtujG%2BBZ1XMfwIhAPRYie2GDf1AhB9%2BI%2FTfPrwU%2BFEKdtAK7q1oMsA%2B7HvRKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5ViRh3K2UjuuMCxQq3AOnm8ILFTZAiCtd7YFQ23thV7FPkz4yvpjHenYMYZThliF3gzIbWiShP5s3AcOZfx3yezxPXl%2BW9EfwCXrtm0Lv%2FvEmBzd7JdldblVjX7bLR003NMFgeZ8G3vfrlHpADcDfTyBA0qrL%2B4x2g7arBFD5hOzOcBFRzpxQl6oE6iUHhAEy0BTBu%2Br0E5M6OcUH752yvBfkP%2Fhr2TpjfKmR0ISSmBLDy19zihxL3Pw0TZIUX2x1NEvlGSci90EWewfh8gFrg6BOp3laO1YthwYgaqba61O6xRUo2K%2F3WW13GBRz0d37k07BpHYgj0BpHJJ64Pq4%2BidW9TlXBz72rKqGyBudrPzJqIe6tL1GPn2y3f18wdvT2C2tOc8pCah2O2Hv8ZNO8CwMKxZVyBLsfA%2FC1FyeYJhWFtd0wVzXJ43ncacpr8O9FUKA9%2BlBZMooug0Naa%2BeYYsFMg%2BxzAhUTzYPqIHSSKmrA30EMI5UbE%2F%2BRUTRDL0l1Sp7sU9623wZkKSe7L1dco%2B51xaPP3U3Ae8YdzLOfe5%2FqJ0FFHgyrkWlN17IOqW9rAVJb%2FnF%2BFOdb3KG7j9elwzTinrkBGzgOeI%2BFrVfv%2FYCusLQcpakT0hQknS03h8%2BoGsohJ6wrNKIBjD1ocPBBjqkAYBKnZZkaxP%2FOrYTTAbpddLRvWtwfpuRTzI6HVg2L1XoYp%2Fa1Ozmvt%2BGDJQg1Kjj75KaAiX8vUVCVoQGzmH0vhfpf5sQs8uMDPiQSULzp2PMLJ%2BPx4o9s5AbW4LbCeFVHJPdNNNJjZv8q4AEYJaWvjYflMjOBVUt3C2Kk6Ks8RD214PEwc5Uwdqw3fTVh%2BvbeVG9VRSW0RsV2X2I%2B4rve4X5FW0o&X-Amz-Signature=622953d914bdd1758c2a3c8cc2aa6264ee8b037795a1ede1c88471d7bbe3789d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
