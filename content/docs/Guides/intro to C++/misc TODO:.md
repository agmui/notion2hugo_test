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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBRPLPZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjWKHa3sTZXoO5vQrYupX8TCrSsxpRiIPp6clNhwavCAIgTPbsNe2VkpcmAN8mizAn8tOSNI3Ny%2BISWSsdkbBQbysq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIYva1XDuQ%2Bl6pAGyyrcAyLQvvxJ4xJnpI%2BJgl1lQd5DzxvH3qdRbRSjNLxj91ZZlCx04MDalwiO1DVOdlRqxa%2BlfztGi89VeIi5RAHYE%2BlLslnrV%2BzR5s9fPwvY3ZHqA1Zt6IbwNW1KT5YI%2FtkYF7HKeIKaWHoWxocGJKjyRUf7hiXez5FI0Jp5%2Fuyu5HLXuDgIvmU%2B%2BqBNAIqfRcFRESA834zo2JP%2FXu80joK7h0Glt%2BRSXZtgL94Q2pF7cublchYXewygVCI19wl7iPqFZMBGi0XOjjrIN%2FPtkVG2nMqsUIEY4qd%2Beh5%2Bm1bizruOCE8W5NnY%2FdR8byc4w2pXbJ7%2BL3aB0ayJVwxocWPKXBR4TdPoNV%2FJ1Y2LmVCTAtXjV90r9pUMJLZJSnWsTrMX4YtR2VFXWCFSWCVE0y8kX0cOQfYp1u6kvb60lqhB%2BCVusSSKTM024Gm2eb%2FZDBIdQOj7kKaogFIK2p94uKaDzafAShXZG%2BQPIVMw9gsQO0J1Mm0XhWNnws%2Fnqtuwrk4FVXZdkTkN%2BaeF1UY7uthVkaCZH8MJFjkpWLVsIlgLZ4dYfyoGw4YQXWQDXThYm8C1Bnij3t2KlhoWQ59OEjjjdBCS3i1dKqJHJVZvt10F8%2BChMk%2FHHigMGDSCLwd6MJL98r0GOqUB6zCWSyC%2Bs1EwCM56B0g34zq4wepMhq81Ar6OBRq1QdsUE6W6KxSyP22npySb0FNb2L3bzWy45Mh2Ll1w0jQ%2Bi5VZ83ViPivjofFCpH80kqbN%2BgGKmfWeqnTQNlTPZczVcM56%2BMaMPFmc%2Br4IcaKayOeoNC6CaFGAeWBKYvjPLc7D%2BEAU%2Ba4YO75q1%2BNukpi7iYL42GaMi1laNuP8ULv6hlxPKmV7&X-Amz-Signature=18eadbb46d3658f86ac70fb79cde784176f3118170c57a81300312073e23681b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBRPLPZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjWKHa3sTZXoO5vQrYupX8TCrSsxpRiIPp6clNhwavCAIgTPbsNe2VkpcmAN8mizAn8tOSNI3Ny%2BISWSsdkbBQbysq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIYva1XDuQ%2Bl6pAGyyrcAyLQvvxJ4xJnpI%2BJgl1lQd5DzxvH3qdRbRSjNLxj91ZZlCx04MDalwiO1DVOdlRqxa%2BlfztGi89VeIi5RAHYE%2BlLslnrV%2BzR5s9fPwvY3ZHqA1Zt6IbwNW1KT5YI%2FtkYF7HKeIKaWHoWxocGJKjyRUf7hiXez5FI0Jp5%2Fuyu5HLXuDgIvmU%2B%2BqBNAIqfRcFRESA834zo2JP%2FXu80joK7h0Glt%2BRSXZtgL94Q2pF7cublchYXewygVCI19wl7iPqFZMBGi0XOjjrIN%2FPtkVG2nMqsUIEY4qd%2Beh5%2Bm1bizruOCE8W5NnY%2FdR8byc4w2pXbJ7%2BL3aB0ayJVwxocWPKXBR4TdPoNV%2FJ1Y2LmVCTAtXjV90r9pUMJLZJSnWsTrMX4YtR2VFXWCFSWCVE0y8kX0cOQfYp1u6kvb60lqhB%2BCVusSSKTM024Gm2eb%2FZDBIdQOj7kKaogFIK2p94uKaDzafAShXZG%2BQPIVMw9gsQO0J1Mm0XhWNnws%2Fnqtuwrk4FVXZdkTkN%2BaeF1UY7uthVkaCZH8MJFjkpWLVsIlgLZ4dYfyoGw4YQXWQDXThYm8C1Bnij3t2KlhoWQ59OEjjjdBCS3i1dKqJHJVZvt10F8%2BChMk%2FHHigMGDSCLwd6MJL98r0GOqUB6zCWSyC%2Bs1EwCM56B0g34zq4wepMhq81Ar6OBRq1QdsUE6W6KxSyP22npySb0FNb2L3bzWy45Mh2Ll1w0jQ%2Bi5VZ83ViPivjofFCpH80kqbN%2BgGKmfWeqnTQNlTPZczVcM56%2BMaMPFmc%2Br4IcaKayOeoNC6CaFGAeWBKYvjPLc7D%2BEAU%2Ba4YO75q1%2BNukpi7iYL42GaMi1laNuP8ULv6hlxPKmV7&X-Amz-Signature=48e9254d8ada583747b7a59503f596a973251c156e544d1f7d17cb7cd29c966e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
