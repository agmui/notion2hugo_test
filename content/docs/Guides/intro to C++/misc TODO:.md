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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUR367S5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD1eprkBNJ88VanJzt377Q2s79%2F0NA2NvqkCBs7vUZN3AIgG7ZUQo1CAd2HvDDGkqZOzg8O2qtWW1ebLptwRKDF0Wkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDGADWEnKxVaGMG0C2yrcA%2BED8FxERcMry2YmQJzcHs3I44AM%2B3xMLp4yzDGVBKW9vALwc0VjD61%2F1SXc9yTgk5hPA8MbzUyMBpBy5V43WpQjAeWesW01k9t%2BWncNpmS0E4BQjyJZv5JfQNF8LIv6%2F08AmlFRK03yltFjJMhaoi%2FuDICvj5MEO%2F6B8uX8ym8EJj7NarD5YHtjL86lu%2F8nIW0ThLEvm5GhdROl8XzpW4j876QSmwng5NIowTfqXg3e4cgepkn2J0yAKXaS5vdijreY5oM4TCobms%2BZrKlnSJJuV60JURIZXuvDZQ1JQ%2FwJcjarQxX2LeWcpL2Q3OP5CJLse7LGNRcEflws8fyEikr%2F3ruQcM0KnfpW4E4wlQMDb6dpGZvt%2F4%2Bjn5noUO8WYGI8wJukmn3AcnjasANVWGXyFYKcS058VR3NcJS3BWDcOKrqpEtH4tTgNywn23T3RYQqpr%2B7ImnIL8I6G5gPsBKV7Ze40ClRAKqEsD0j%2FaeMw6N30dcmkuH1muI8WrcWOMoBo7PiJuFOUUw0D0h8oCuTecdmVaEUAd6mu6HRLnqTaSXc3sBoebn7W0esqVshsX0jkOB%2F5Gs6j6URjpEnJsBcEvZkKOnVvt%2F8E%2BtV5vtlpeNss9C6Eb%2FO0shwMPnp88IGOqUBIR9vhnjoomBoVDE9cTWABWxjcUIaD9uPsysOH049EZ8TL1q%2BUBuGNYoIgft9%2FcS9apFqBYdvtKOCXT99U4G5y%2Boqh6EW38hrhlJ5Fdm62jvmUvKJ5K5NT7WAlmlTm7Hzx0i8bp8MV0jRm6Jjmh2%2BxZFWeTPuvzglPSQf4z%2Bbf%2FG%2FnBLafSsMvpltuB3fcRT9F9gPSx%2Ffsh7ejftCrpow9v1iVOg%2F&X-Amz-Signature=7100f8f5c3e8b7a6d93fe85e55f3bb525fa5d1cb3f95d25ef9d0bf6d0b654e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUR367S5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD1eprkBNJ88VanJzt377Q2s79%2F0NA2NvqkCBs7vUZN3AIgG7ZUQo1CAd2HvDDGkqZOzg8O2qtWW1ebLptwRKDF0Wkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDGADWEnKxVaGMG0C2yrcA%2BED8FxERcMry2YmQJzcHs3I44AM%2B3xMLp4yzDGVBKW9vALwc0VjD61%2F1SXc9yTgk5hPA8MbzUyMBpBy5V43WpQjAeWesW01k9t%2BWncNpmS0E4BQjyJZv5JfQNF8LIv6%2F08AmlFRK03yltFjJMhaoi%2FuDICvj5MEO%2F6B8uX8ym8EJj7NarD5YHtjL86lu%2F8nIW0ThLEvm5GhdROl8XzpW4j876QSmwng5NIowTfqXg3e4cgepkn2J0yAKXaS5vdijreY5oM4TCobms%2BZrKlnSJJuV60JURIZXuvDZQ1JQ%2FwJcjarQxX2LeWcpL2Q3OP5CJLse7LGNRcEflws8fyEikr%2F3ruQcM0KnfpW4E4wlQMDb6dpGZvt%2F4%2Bjn5noUO8WYGI8wJukmn3AcnjasANVWGXyFYKcS058VR3NcJS3BWDcOKrqpEtH4tTgNywn23T3RYQqpr%2B7ImnIL8I6G5gPsBKV7Ze40ClRAKqEsD0j%2FaeMw6N30dcmkuH1muI8WrcWOMoBo7PiJuFOUUw0D0h8oCuTecdmVaEUAd6mu6HRLnqTaSXc3sBoebn7W0esqVshsX0jkOB%2F5Gs6j6URjpEnJsBcEvZkKOnVvt%2F8E%2BtV5vtlpeNss9C6Eb%2FO0shwMPnp88IGOqUBIR9vhnjoomBoVDE9cTWABWxjcUIaD9uPsysOH049EZ8TL1q%2BUBuGNYoIgft9%2FcS9apFqBYdvtKOCXT99U4G5y%2Boqh6EW38hrhlJ5Fdm62jvmUvKJ5K5NT7WAlmlTm7Hzx0i8bp8MV0jRm6Jjmh2%2BxZFWeTPuvzglPSQf4z%2Bbf%2FG%2FnBLafSsMvpltuB3fcRT9F9gPSx%2Ffsh7ejftCrpow9v1iVOg%2F&X-Amz-Signature=8fa7f565fff463f54e32591c99e95704b858aec98a3b084f07af93c35fd1a7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
