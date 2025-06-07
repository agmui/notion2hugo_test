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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFODTWNT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIvazgtbB%2BaoZwNcKV2RH4HH%2B9ZEthiM1nuwFqVsTeKAiEAm51%2FNcN9GWwsqOeWuoXZqMd8YMgT2sbT2mEtZtqURBsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDXyVT%2FvGd5sR%2FN2QyrcAxHIrhvhwFlaMpcn8bzEHdWYas3tgNk85iUBtxRjEzBWohtF3dcnqBVqAHgNF14DXDSZIGwBxa9KDlURlfrq2f4exIG5ilibr1nQuSZG68Kqwd3wvdlpfyx%2FXBzoo6bsVKX%2FHGPRCNvWnnfCBZxtGcqxzPJB7BSYrA8d6OH%2FBhEf259jakLNpI2CsGwhu6VnbRYjXjwlRMvIIN818gsTCw3QiiYWSj8OB2uee2GAYX%2BORWFLKAET4GGnyxlPb7U66uynPHhLjr%2FQPr6jwumKtCPQ5kR3U%2FtbCoExs%2FoH9sPirtur4Nep%2F%2BQ4ox3IIKN9YQSq2crQUyPXTnJFpXEkRABQQiCakhrnTTMyey404U%2BPCB5wuSjwLPsgr%2F6G0%2FCdQ5zxH7T1HqURuYlog%2F8%2BV3in%2Bh4CtdIO8pZNdiVdw7CT6HYavE1%2FVSMS%2FaRkC3EoPPa7%2FLbGZzJK9BEkEm7fV2DPMq1Rmz124ly7p%2BCikCrJN5tvz%2FRppgsxVsjiWl7SZ06tOj1Ne4LECe7vSj%2Bfc8eVtukD6aNZpYMkHfgS0zLacrJpNXbbxSLXYlHie96DbY8%2FiZtAg1nF1dpMxZZ7iK6FKDIyZmVG7wQWfFapGU2SkzMLiSN0KQAvZQrLML3AjsIGOqUBQeVjyeZ44BcnOrbHtoxp8525FgliRKi85FvN%2FPP0%2F%2BZe6%2BjCaN2XZvNmnuyzaoyP2y5UTqgKVmCh3Y8KkjlNT4jfnty7543nTXaCfyf9tGIHxUYJxKMwQ%2BynaIIOFzN4g%2BJdx5ykolrv6X%2BW%2BJ1cyPeAchhC41sZq2vVmsnJT5fpOXcb6f%2FjbZAE3StOJu5n3EKMBzt8LexaMbDmLU%2FlmYjfhdlw&X-Amz-Signature=b814b67e3ca461f2e99ca96f868b831e2b601738b5c5cee295608ac59883cf7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFODTWNT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIvazgtbB%2BaoZwNcKV2RH4HH%2B9ZEthiM1nuwFqVsTeKAiEAm51%2FNcN9GWwsqOeWuoXZqMd8YMgT2sbT2mEtZtqURBsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDXyVT%2FvGd5sR%2FN2QyrcAxHIrhvhwFlaMpcn8bzEHdWYas3tgNk85iUBtxRjEzBWohtF3dcnqBVqAHgNF14DXDSZIGwBxa9KDlURlfrq2f4exIG5ilibr1nQuSZG68Kqwd3wvdlpfyx%2FXBzoo6bsVKX%2FHGPRCNvWnnfCBZxtGcqxzPJB7BSYrA8d6OH%2FBhEf259jakLNpI2CsGwhu6VnbRYjXjwlRMvIIN818gsTCw3QiiYWSj8OB2uee2GAYX%2BORWFLKAET4GGnyxlPb7U66uynPHhLjr%2FQPr6jwumKtCPQ5kR3U%2FtbCoExs%2FoH9sPirtur4Nep%2F%2BQ4ox3IIKN9YQSq2crQUyPXTnJFpXEkRABQQiCakhrnTTMyey404U%2BPCB5wuSjwLPsgr%2F6G0%2FCdQ5zxH7T1HqURuYlog%2F8%2BV3in%2Bh4CtdIO8pZNdiVdw7CT6HYavE1%2FVSMS%2FaRkC3EoPPa7%2FLbGZzJK9BEkEm7fV2DPMq1Rmz124ly7p%2BCikCrJN5tvz%2FRppgsxVsjiWl7SZ06tOj1Ne4LECe7vSj%2Bfc8eVtukD6aNZpYMkHfgS0zLacrJpNXbbxSLXYlHie96DbY8%2FiZtAg1nF1dpMxZZ7iK6FKDIyZmVG7wQWfFapGU2SkzMLiSN0KQAvZQrLML3AjsIGOqUBQeVjyeZ44BcnOrbHtoxp8525FgliRKi85FvN%2FPP0%2F%2BZe6%2BjCaN2XZvNmnuyzaoyP2y5UTqgKVmCh3Y8KkjlNT4jfnty7543nTXaCfyf9tGIHxUYJxKMwQ%2BynaIIOFzN4g%2BJdx5ykolrv6X%2BW%2BJ1cyPeAchhC41sZq2vVmsnJT5fpOXcb6f%2FjbZAE3StOJu5n3EKMBzt8LexaMbDmLU%2FlmYjfhdlw&X-Amz-Signature=122b05bf7f22510d54ea337ae8172f1655f87d3ea9ece040244c58e02fb52279&X-Amz-SignedHeaders=host&x-id=GetObject)

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
