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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPI64DV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEYAWSYUWOB2ZFFv8t22BLRhpVrFFM%2F4Lzgw1iB9nwgrAiEAtIrlg442JX6Z5AlxAyHc6AiKdyOewDsRJlUorcEceq8qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJXzflDXN9BFf9EKyrcA%2BzkIJdK4pH2BelVYxz94zhWidUL0%2BW9rl1NJ6YeAwwkUEjuLqFeWG%2FV8UTVvM9wUmndCm3G1r%2B5DEdDWx%2FukAuHkkdudgvtp%2F57OsEPqW6oTCYcKleQcyGtOt2FYuXcKMXwxpGZ5uFHDtuV4LhbD%2FBkRpdJzmhXzo8ULx3jC2L4PnetAIsjjoefERIax%2Bbyfwr2x%2FDXAuU51IojgVC%2B%2FsOjXM5rtnIXSolBP0xk1KZzbNQQQYmA6toB2cqR3S1luY9NCDxHM%2FiEiKId3KY1LRBtkyvwABAW6O%2BS%2Bej%2BF9QM82h3qBGqVbMnBjw%2F6AyA4mlsHq%2FmXjJd%2FuLUZapoc%2FWX9%2Fl5ysAu8Vgf%2BjGaIrlbD5Fyc2yrvlaxJ72JrP7X%2FaXJv3kFAK225o%2FVhd6dnOQ7SLUZKX0UboCPnScQzPXN9lkrcCDcqXuCWT78e9nw0%2BzN1UI3qxHla5QkeohHRHru5NPaEl5g1zXv50D3TrhS1LX7lNIOtO9%2FHc7m11tSwh1l%2F9249LCzSM7i%2B1qNOrQC6fpP2O%2ByWyronA3DrY9qIS7VyWSLfphvUyc%2BCCJyJl1DuyIKBxwpDkPHctxsQOma%2Bn79VI4xZytXeskdadf%2FU4aWbuRduV1pLkqEMKXOx8AGOqUBX8zLF3%2BTZAqMIF16MiBhXNeYPFzz2QiExSB0co%2B%2FIBTALiZTNtledCqWDJXtZMn8gmhGsMU%2BwQXrajlIooYvZBCfuJfhGjgksm0BL5bxAvHV2TGr39esx0xQT4%2Bma47BN2Utg6xgTrZR00uLCvbBe1S8HCLdtqq0n5g5pPL4eUODeg5gWa2uOmFwnKnUaare8hCuWyIP1Bre0AzTUVen%2B9vD69Qh&X-Amz-Signature=485f979ba7ccb605be1eea93f5453b15dd9e43972306f53d50fd7cacfcbce395&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPI64DV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEYAWSYUWOB2ZFFv8t22BLRhpVrFFM%2F4Lzgw1iB9nwgrAiEAtIrlg442JX6Z5AlxAyHc6AiKdyOewDsRJlUorcEceq8qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJXzflDXN9BFf9EKyrcA%2BzkIJdK4pH2BelVYxz94zhWidUL0%2BW9rl1NJ6YeAwwkUEjuLqFeWG%2FV8UTVvM9wUmndCm3G1r%2B5DEdDWx%2FukAuHkkdudgvtp%2F57OsEPqW6oTCYcKleQcyGtOt2FYuXcKMXwxpGZ5uFHDtuV4LhbD%2FBkRpdJzmhXzo8ULx3jC2L4PnetAIsjjoefERIax%2Bbyfwr2x%2FDXAuU51IojgVC%2B%2FsOjXM5rtnIXSolBP0xk1KZzbNQQQYmA6toB2cqR3S1luY9NCDxHM%2FiEiKId3KY1LRBtkyvwABAW6O%2BS%2Bej%2BF9QM82h3qBGqVbMnBjw%2F6AyA4mlsHq%2FmXjJd%2FuLUZapoc%2FWX9%2Fl5ysAu8Vgf%2BjGaIrlbD5Fyc2yrvlaxJ72JrP7X%2FaXJv3kFAK225o%2FVhd6dnOQ7SLUZKX0UboCPnScQzPXN9lkrcCDcqXuCWT78e9nw0%2BzN1UI3qxHla5QkeohHRHru5NPaEl5g1zXv50D3TrhS1LX7lNIOtO9%2FHc7m11tSwh1l%2F9249LCzSM7i%2B1qNOrQC6fpP2O%2ByWyronA3DrY9qIS7VyWSLfphvUyc%2BCCJyJl1DuyIKBxwpDkPHctxsQOma%2Bn79VI4xZytXeskdadf%2FU4aWbuRduV1pLkqEMKXOx8AGOqUBX8zLF3%2BTZAqMIF16MiBhXNeYPFzz2QiExSB0co%2B%2FIBTALiZTNtledCqWDJXtZMn8gmhGsMU%2BwQXrajlIooYvZBCfuJfhGjgksm0BL5bxAvHV2TGr39esx0xQT4%2Bma47BN2Utg6xgTrZR00uLCvbBe1S8HCLdtqq0n5g5pPL4eUODeg5gWa2uOmFwnKnUaare8hCuWyIP1Bre0AzTUVen%2B9vD69Qh&X-Amz-Signature=b73074f75b22bf071bd8361ebc73a656bdb9c317c75b8523eb124d031dd96251&X-Amz-SignedHeaders=host&x-id=GetObject)

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
