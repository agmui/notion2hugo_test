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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767FDRN2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH1oWIlc11aKZzxdv2k0%2BlLQc5My%2FrNFTmaYhqDnnq4DAiEAgGQN2Q0AA9EPmvMipB3BzgU5TyYIW5aF%2FMKB9cJQ5PMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKqyB2dhrhIArF0v3SrcA8BZccQiXH%2B%2Bkh1x4WGPR%2F%2FMWYWB0vludzznNrlsvNO6msGCJuZGbii1iHp%2B4%2FmgI2TSrP4XIA5OcvM%2BBEgi76FjjEZZ7VWa1RoscKyu0AiRGAMxOorSfWNSEUAKzfTX%2BAHAkVqdS4lCfnfgBR2NqpewhmkbH6Ly%2Frw%2FWYwJiv9pHsb9rPA1iWhvF876CkkehkQOLdhgQ2jDIcZZIOM3ZQTbvtdRvK6JzlaQjSunBcNqT%2Bd0%2FEeDHeSxqhqlJDAjDdFCmsEetAm1btuDCE%2B1tiaD7eSZdtDNzxCwSdPHvhnZtTEEMNorryrr1TnFeMnr3TZZHnXEjrgKKYjdcaZM1I6VPxnkz5W6QRgvepBd64s7AaR1gxgBWYHweJeIGQicWz9MivKhZIsU8WISkU6CkZcHJD3ll4lkPfE5Z2VQQ%2Byjf9xQ29Qhq6HOsVhYSEAZxd7yx9UgezPS2GjP0buVSwE47wdBfA6gzyKrvU58CV%2Fx%2BTm55B62ZT6yjFDhZT1MoqXZgOy91Dx5wkCuHVqumm8WOIiTuavsZ50r126tQ3cpsbKUIaXTNM6oNqmQp0Ja8jUNG4FhUmDLvNcfwRkWTMsoEtd%2BAJAyYa%2BXvONwIP2NqK92%2FMWdoWqhyL%2BuMK3ZiMQGOqUBZSbM0%2FHjucXcvUhQBqN5mEwo5q828ya1JocKi8iw150tl9dgsYSsNbgDrHE48SDSmZLsO0nLBi0hABq4BWPvsJQhujc8j6YJLyhstmryZYT9DQ9R7e7SBvPcGcltoF%2FHOmYKIpxq2%2BVGGp3TIVZRCNRtpxCEN%2F51HJ4nftLHDZWnQs8ARNlVtS43TS3Vn7Ct1jujxA8eiWyR7%2Bwsy2vpcDWt9MVQ&X-Amz-Signature=67e93afd529c9e0c49315cb37aaab8d8a6149487c23bb098666a4028337a333d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767FDRN2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH1oWIlc11aKZzxdv2k0%2BlLQc5My%2FrNFTmaYhqDnnq4DAiEAgGQN2Q0AA9EPmvMipB3BzgU5TyYIW5aF%2FMKB9cJQ5PMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKqyB2dhrhIArF0v3SrcA8BZccQiXH%2B%2Bkh1x4WGPR%2F%2FMWYWB0vludzznNrlsvNO6msGCJuZGbii1iHp%2B4%2FmgI2TSrP4XIA5OcvM%2BBEgi76FjjEZZ7VWa1RoscKyu0AiRGAMxOorSfWNSEUAKzfTX%2BAHAkVqdS4lCfnfgBR2NqpewhmkbH6Ly%2Frw%2FWYwJiv9pHsb9rPA1iWhvF876CkkehkQOLdhgQ2jDIcZZIOM3ZQTbvtdRvK6JzlaQjSunBcNqT%2Bd0%2FEeDHeSxqhqlJDAjDdFCmsEetAm1btuDCE%2B1tiaD7eSZdtDNzxCwSdPHvhnZtTEEMNorryrr1TnFeMnr3TZZHnXEjrgKKYjdcaZM1I6VPxnkz5W6QRgvepBd64s7AaR1gxgBWYHweJeIGQicWz9MivKhZIsU8WISkU6CkZcHJD3ll4lkPfE5Z2VQQ%2Byjf9xQ29Qhq6HOsVhYSEAZxd7yx9UgezPS2GjP0buVSwE47wdBfA6gzyKrvU58CV%2Fx%2BTm55B62ZT6yjFDhZT1MoqXZgOy91Dx5wkCuHVqumm8WOIiTuavsZ50r126tQ3cpsbKUIaXTNM6oNqmQp0Ja8jUNG4FhUmDLvNcfwRkWTMsoEtd%2BAJAyYa%2BXvONwIP2NqK92%2FMWdoWqhyL%2BuMK3ZiMQGOqUBZSbM0%2FHjucXcvUhQBqN5mEwo5q828ya1JocKi8iw150tl9dgsYSsNbgDrHE48SDSmZLsO0nLBi0hABq4BWPvsJQhujc8j6YJLyhstmryZYT9DQ9R7e7SBvPcGcltoF%2FHOmYKIpxq2%2BVGGp3TIVZRCNRtpxCEN%2F51HJ4nftLHDZWnQs8ARNlVtS43TS3Vn7Ct1jujxA8eiWyR7%2Bwsy2vpcDWt9MVQ&X-Amz-Signature=49f14cda1b09a4608859801fae6a0d23c9f199ee0fcc065e21cb7caaf4e55dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
