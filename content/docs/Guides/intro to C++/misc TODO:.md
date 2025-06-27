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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXRPG2N%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2Ke52TwKPPEYEIWkUJzL1Mm7u%2F7atYggI1FRjjjpOUAiEApACuhHvuUc7QLMWFI%2FFmTcJibVumqlY2n0jDm32mWoIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD0lPX1FI9qJIqtXoircA%2BonUCSwa2pGygIs9FAf%2Bt1W13UGYjLUCRQ0lRO5rHgYZfK7s%2FOP4CDyreVJC96t%2F2j3ShQQYNzWAxoJT1k3ArPDWUJt2q5SCHmzcUN2yxjxV%2BBfdtdsPyZFPHghMhaTbQ98qoWUYXtzAYUZ8JAdxrlw34wh2CuZXakMavtsdW8ioAdT2F%2BUCpqOd%2F%2BXkpQ6vDoPzyw39GF8DSdQ3FZK8EpZ1fc1racmFL0hAVl4YTm7Chzhbbr2m3MJxe0TvMRLVWma1Q8QIdglSt7l1DdPaJ%2B5%2FWU%2Bz89ll2xU8rW8yocVH7ZiCT09mnCyk7DDhWqT6OuFYJarkFT2sc4oat8weOzLQCi0cdfdjew9VybGQAPlzOi2f%2F3rgtZRd5Lfh49qcTgnMjl4Elebn%2FwhRKFAjlkYBy1nKJ7EO5ZQV%2BFkMKHOpN%2BUU4Wd3juwBQmfdsQdO6nwDZoIijaP3mqhTlSaxM7olcpHnl%2FwtSnSvPE9nKIIr%2FWKTuwZlSj429rdNRyd%2BdaqfxCmy4oAVVtN930NxQIVKm38IMaXXJXNWsOBx7t0yyuTu5zZ1mGxAtahBERXeUbMceFqogwEfAE86MNauQaSO6RTqodJEV%2BNmgqpoy4LE96OURJqzO8aG3n%2BMKTK%2B8IGOqUBf%2BA3GjR4%2BA79CwRQC9mkfpgw9UMi7zlWau%2F%2B5P%2FeKbrKk4llO0l2AfoG47w3ZsoLtKiiWVJ%2F%2FNBKNOR76ZxP9Wqc5x%2FtbeIuw4jkbbgD%2B3h%2F9xYkiskkq0xgAQ2BYTIkQnEH5yz80cKasgSyTXpYm%2Fg5UlBpICVE1r0X7DtiyVQXZtjH%2FI4tkkAAKxG658N7Y22XcGFUY6xjs%2By3oNUAc0y6I2L4&X-Amz-Signature=a18db50e23d9e2523137e63d6fa53d58fc948d134440a10ebd96640aaddc60d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXRPG2N%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2Ke52TwKPPEYEIWkUJzL1Mm7u%2F7atYggI1FRjjjpOUAiEApACuhHvuUc7QLMWFI%2FFmTcJibVumqlY2n0jDm32mWoIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD0lPX1FI9qJIqtXoircA%2BonUCSwa2pGygIs9FAf%2Bt1W13UGYjLUCRQ0lRO5rHgYZfK7s%2FOP4CDyreVJC96t%2F2j3ShQQYNzWAxoJT1k3ArPDWUJt2q5SCHmzcUN2yxjxV%2BBfdtdsPyZFPHghMhaTbQ98qoWUYXtzAYUZ8JAdxrlw34wh2CuZXakMavtsdW8ioAdT2F%2BUCpqOd%2F%2BXkpQ6vDoPzyw39GF8DSdQ3FZK8EpZ1fc1racmFL0hAVl4YTm7Chzhbbr2m3MJxe0TvMRLVWma1Q8QIdglSt7l1DdPaJ%2B5%2FWU%2Bz89ll2xU8rW8yocVH7ZiCT09mnCyk7DDhWqT6OuFYJarkFT2sc4oat8weOzLQCi0cdfdjew9VybGQAPlzOi2f%2F3rgtZRd5Lfh49qcTgnMjl4Elebn%2FwhRKFAjlkYBy1nKJ7EO5ZQV%2BFkMKHOpN%2BUU4Wd3juwBQmfdsQdO6nwDZoIijaP3mqhTlSaxM7olcpHnl%2FwtSnSvPE9nKIIr%2FWKTuwZlSj429rdNRyd%2BdaqfxCmy4oAVVtN930NxQIVKm38IMaXXJXNWsOBx7t0yyuTu5zZ1mGxAtahBERXeUbMceFqogwEfAE86MNauQaSO6RTqodJEV%2BNmgqpoy4LE96OURJqzO8aG3n%2BMKTK%2B8IGOqUBf%2BA3GjR4%2BA79CwRQC9mkfpgw9UMi7zlWau%2F%2B5P%2FeKbrKk4llO0l2AfoG47w3ZsoLtKiiWVJ%2F%2FNBKNOR76ZxP9Wqc5x%2FtbeIuw4jkbbgD%2B3h%2F9xYkiskkq0xgAQ2BYTIkQnEH5yz80cKasgSyTXpYm%2Fg5UlBpICVE1r0X7DtiyVQXZtjH%2FI4tkkAAKxG658N7Y22XcGFUY6xjs%2By3oNUAc0y6I2L4&X-Amz-Signature=c6e9915672ba5200df847a385b79b72792c8e3ef844af2147418e2561fadbe07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
