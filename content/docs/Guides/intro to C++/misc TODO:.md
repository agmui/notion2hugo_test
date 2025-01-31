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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SCYKCIJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIKSQflH26OKnrxOBlfANW4OwyDIMXT3ZIeReHMiWNBAiEAhDFVGUHUOPE8vsisdBo20Imyu49nBJctQakqQ9W6ZcEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwM4YOOk0fIZdGiCrcAxQezs2D4GveKM688%2FFKA0scrUSZuceKBCeO83u6JeFlTohAr%2BNoAwpj1Zr7HkxaSfvV3utGge%2BsITPIzP5VA2sySCdraDQf8gnnv8P9uR0vUYIqSIcwV3dCLB3TdrCIVF%2BFYEEU1PIbNdj7eq133ulIpqhiFe%2BN%2BbpLZNoBfCIh8IhvlVuOm1iSjVeajLYxnY87mU9citBnsoQnPO0f6oB5ylnTR1C8fYWnOiAcj4m4oKQVjgxVdbR0LXe4tcYBEfNQGIYkrkD28nHljHX1EqDs1%2FZxOQx6wivFNVgglG0VdpX4aPfiHwuxleDVCY3UoP%2FPAb8ExukhBHeXsh%2BYPr2ST2cUKnBJXnV0uys2To9Wt0loyTO0uu%2Fto8TArVI%2BLLH13JJ42sHtlY4bEUHvPPRU2VukS7%2FU8SweBRAcENsnvIFEnldwzq3bHOskiMuO7ORyVPeVcsJNBYfbZ6qb1r1XwfSLBSNCc78jHyQ1sM5mzEp6SeCiGtHb%2FGu4OG7wZlFUYFJIzV6VbSSSjqnnr%2BAovdPNsBY8V8q3tiXQqyThN2uYfP%2Bfidqe12HPL%2BbkL3SeOZd8WLj7rv6tO7wQRU%2B%2FSK1O0xpHpRO9FSWRupfjBHQR%2Brg62vcRXkEEMIf38rwGOqUBNLGmgg2Jiz%2BbhQT563NxDFpgF6Y68Bul0FuVluJfPODKpLrM5GKXN6%2Fg%2Bqk8KA3KdNSQb4QL5At9SdEOJA2jSt8r%2Fu0jvd%2FkyzfGRwINNOzZzGMoLmBpSG726NjFxd9bttaPwrFf9sDgFTgF9hzSx66SPCcDkcStVj7CUmNr8agVU2ZF3cVAznmlYiZ2eeM9Vdrb77C%2BPq4Y2H1BxX%2BRV40uxjBE&X-Amz-Signature=f91d7096b75c7159cd2b748e030151ac6e08224d9636cc4a0b00b42d6daaf0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SCYKCIJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIKSQflH26OKnrxOBlfANW4OwyDIMXT3ZIeReHMiWNBAiEAhDFVGUHUOPE8vsisdBo20Imyu49nBJctQakqQ9W6ZcEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqwM4YOOk0fIZdGiCrcAxQezs2D4GveKM688%2FFKA0scrUSZuceKBCeO83u6JeFlTohAr%2BNoAwpj1Zr7HkxaSfvV3utGge%2BsITPIzP5VA2sySCdraDQf8gnnv8P9uR0vUYIqSIcwV3dCLB3TdrCIVF%2BFYEEU1PIbNdj7eq133ulIpqhiFe%2BN%2BbpLZNoBfCIh8IhvlVuOm1iSjVeajLYxnY87mU9citBnsoQnPO0f6oB5ylnTR1C8fYWnOiAcj4m4oKQVjgxVdbR0LXe4tcYBEfNQGIYkrkD28nHljHX1EqDs1%2FZxOQx6wivFNVgglG0VdpX4aPfiHwuxleDVCY3UoP%2FPAb8ExukhBHeXsh%2BYPr2ST2cUKnBJXnV0uys2To9Wt0loyTO0uu%2Fto8TArVI%2BLLH13JJ42sHtlY4bEUHvPPRU2VukS7%2FU8SweBRAcENsnvIFEnldwzq3bHOskiMuO7ORyVPeVcsJNBYfbZ6qb1r1XwfSLBSNCc78jHyQ1sM5mzEp6SeCiGtHb%2FGu4OG7wZlFUYFJIzV6VbSSSjqnnr%2BAovdPNsBY8V8q3tiXQqyThN2uYfP%2Bfidqe12HPL%2BbkL3SeOZd8WLj7rv6tO7wQRU%2B%2FSK1O0xpHpRO9FSWRupfjBHQR%2Brg62vcRXkEEMIf38rwGOqUBNLGmgg2Jiz%2BbhQT563NxDFpgF6Y68Bul0FuVluJfPODKpLrM5GKXN6%2Fg%2Bqk8KA3KdNSQb4QL5At9SdEOJA2jSt8r%2Fu0jvd%2FkyzfGRwINNOzZzGMoLmBpSG726NjFxd9bttaPwrFf9sDgFTgF9hzSx66SPCcDkcStVj7CUmNr8agVU2ZF3cVAznmlYiZ2eeM9Vdrb77C%2BPq4Y2H1BxX%2BRV40uxjBE&X-Amz-Signature=d1b8ba03fb4d172369d77be645e1e4d77817c502bbbff2b83404404fce0f3f43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
