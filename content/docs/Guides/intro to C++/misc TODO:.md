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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZEPN4A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFpQGQ2a4nc8gIQC3ntrXM8V5NP0NI0H95tkt%2B%2BahLbNAiEAg6icnAKEBBaBoIBNFLQey%2BSDMmzNxTW4qRUc403Z1%2FcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNvfiLG6yFsZAMLwCrcA3jG6PvagyCZ%2FarTrh1iAONbolQF5wYIiEtKIhBMfLatQE9brVpXE8bPHSvCPPIhq4Oe2z5IXmN8APHcK7ga5GgyRAmLP1ji4Aa53gYreeC%2B88IT7gAC96aeLHW4xd0W%2FwLX0WP%2F%2FJJ11VzFu2pKT%2FGoO7TdGsdWQCgO8z3AviWP8OxVttPDsrr8ZSL%2Fq1UF2bOZloF9t71IZqL0ORopopOOF0x%2FcUUo9Ytp3YpTe3DH1AMv8Upq%2ByAtxlTWIhqFgagiulug0oClSHpClQqIL3ojMCGm5gSR0JIbjAW0aNzQAgMCrJnVNpOLVH06Nw6AFmKel1xXTQxD5aHJL3X9WOxPRS6H%2FpahuvW0btlEMFDqTue59PukYFAYXODrf93Rr0%2F8CnKts64It0KkDE75k1mm%2BV5QWmiU0dEQn4Enh%2BxbjoHRFXfTvOqx6Q0pTfd%2Bf1eGA%2F4eyaRYrj2spv%2B5z7pVozjJrcmwUuWhn0lJM9QB6PiiqfTN4pkYCHF%2FCIHEVHD26sZGK7vBprsONuBNGgK%2BiuBTW6H%2BwoeIvTT26v0Z7qqaUAxHYQOuGpXmB8aR0FsHPiwdgCpVvVruXHgSv6jn6dC6g0asXM14gqxqHPNhmAv9XjvKc%2BEY7zSOMKOEosQGOqUBHl4vixQUZZb1XhppJ7a8rXs%2FeahWhSNl4CR%2FouerjefcHUIxBz2iicG3COWJgjrmcVUSlHItR47YMSiJ4BKccpLDiThUCgyS7uLbX3nmKq7piwnlOuIIDCL%2BfQsCeMS1fCAdPYUt8nuuqJmLgD%2Bpsy%2FpghEEooGA%2FuqA23TBqt6KvHhMWM3ccItvCfii8y%2FqF%2B3cRDDd675ygfiQtnqHX38gsqP3&X-Amz-Signature=aeebf0b95aa7f06c61fd92ca895ff9b2a28bd03aced522101282a3e80abed783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZEPN4A%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFpQGQ2a4nc8gIQC3ntrXM8V5NP0NI0H95tkt%2B%2BahLbNAiEAg6icnAKEBBaBoIBNFLQey%2BSDMmzNxTW4qRUc403Z1%2FcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNvfiLG6yFsZAMLwCrcA3jG6PvagyCZ%2FarTrh1iAONbolQF5wYIiEtKIhBMfLatQE9brVpXE8bPHSvCPPIhq4Oe2z5IXmN8APHcK7ga5GgyRAmLP1ji4Aa53gYreeC%2B88IT7gAC96aeLHW4xd0W%2FwLX0WP%2F%2FJJ11VzFu2pKT%2FGoO7TdGsdWQCgO8z3AviWP8OxVttPDsrr8ZSL%2Fq1UF2bOZloF9t71IZqL0ORopopOOF0x%2FcUUo9Ytp3YpTe3DH1AMv8Upq%2ByAtxlTWIhqFgagiulug0oClSHpClQqIL3ojMCGm5gSR0JIbjAW0aNzQAgMCrJnVNpOLVH06Nw6AFmKel1xXTQxD5aHJL3X9WOxPRS6H%2FpahuvW0btlEMFDqTue59PukYFAYXODrf93Rr0%2F8CnKts64It0KkDE75k1mm%2BV5QWmiU0dEQn4Enh%2BxbjoHRFXfTvOqx6Q0pTfd%2Bf1eGA%2F4eyaRYrj2spv%2B5z7pVozjJrcmwUuWhn0lJM9QB6PiiqfTN4pkYCHF%2FCIHEVHD26sZGK7vBprsONuBNGgK%2BiuBTW6H%2BwoeIvTT26v0Z7qqaUAxHYQOuGpXmB8aR0FsHPiwdgCpVvVruXHgSv6jn6dC6g0asXM14gqxqHPNhmAv9XjvKc%2BEY7zSOMKOEosQGOqUBHl4vixQUZZb1XhppJ7a8rXs%2FeahWhSNl4CR%2FouerjefcHUIxBz2iicG3COWJgjrmcVUSlHItR47YMSiJ4BKccpLDiThUCgyS7uLbX3nmKq7piwnlOuIIDCL%2BfQsCeMS1fCAdPYUt8nuuqJmLgD%2Bpsy%2FpghEEooGA%2FuqA23TBqt6KvHhMWM3ccItvCfii8y%2FqF%2B3cRDDd675ygfiQtnqHX38gsqP3&X-Amz-Signature=56ba11a6dbfeba4de56651bc07f85dbb33124d781be19e343df523c1ba727862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
