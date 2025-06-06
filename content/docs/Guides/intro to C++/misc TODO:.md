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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYGJH2F%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD02NH5FF4NrTPdoH0IUuIy5IT%2BTka%2FV351le6PrY4hbwIgeHLbY%2FuJhODz8ow8DnN1hliNTyel50JiNdwo2uMvREoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOWAKbem0HS1DEqnQSrcA054Q9XMki1YdvRhC%2Fqdcesiqk6UJkSNSeKX%2FEsb2Ra4MT%2BZELChWKm4DAjyLrhbqW%2Fg5gR1ETdUq5pEAcuMRbYP5V0ue0ryCdCbQru7L4CZvrPkRWesgR6E7mpA7FQHCGs4Ne5qkMz43NHNAoGSec7yL88y%2FLXRk2wjaN1UDkMN2KUnZXeI3yUrpf6bWsUrh40DDVSUeGhGEtVz%2BF%2FWCoX3sq9W5NMJaw0k189JM51vBeErM6e72H5ZTBh9QWMuph7UK%2FWfuuqqNe2nfAz%2BM1%2BuJduQY8q2FVp0T7hziKtYsQtpAH4oPlSZ8vT7Y%2FvDMIR7pXKBCGsWrYuekIfbVCjUNoIKdmyNq56p8XYSXt0UlDNeNldd2MhMcsSLdon9tVvYbBEXH8q35LkPRLs5cdyQhMVnVFxZMuMN%2Fl8BQ9bJe8IXgZu7%2FzYosr12hIbmvmHX8ByxYy0jdfT%2FiiSVMoyd0Guk7FDhFbVq%2B4IZEpMDM0Hi41qgVDJ9x3yBOW8F7XJ%2FTDMEADjHtvbylgp8jx1HGlXx5qF3Fd35G0rKvp8Wa3QZxsTsfEEuvyxntO73uUOr%2BQZukQ0An9wLZZcUrwa1v3gUjP43RApASANv2fIlslIwylRlsWX3T9gbMK6Hi8IGOqUBhlYoEnO%2BvxpBvsV%2FtReNCUe8pBwV%2FNWLLV5Qkz648D747bV9cH8E9qKoSvylsOTO8M%2F3QyvRGofQWxO6yxJzAsh5zRFpWqZ7FrSP%2FD6gdahYah%2F8LB2FpzIKa1GKD80TUqoZKQ9JDrlrZrZOIKaC3c2eBCYjKyXKsDAdDRhg0Oq9qWK2fH9%2FaPM7Cf9y6PL%2BEDr87VGPChXSfLOJ62pBFVdlSTqW&X-Amz-Signature=052c96e2d4b50989169d3ef2b3f7438af4814344f690c5d145e3eac6088a01d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYGJH2F%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD02NH5FF4NrTPdoH0IUuIy5IT%2BTka%2FV351le6PrY4hbwIgeHLbY%2FuJhODz8ow8DnN1hliNTyel50JiNdwo2uMvREoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOWAKbem0HS1DEqnQSrcA054Q9XMki1YdvRhC%2Fqdcesiqk6UJkSNSeKX%2FEsb2Ra4MT%2BZELChWKm4DAjyLrhbqW%2Fg5gR1ETdUq5pEAcuMRbYP5V0ue0ryCdCbQru7L4CZvrPkRWesgR6E7mpA7FQHCGs4Ne5qkMz43NHNAoGSec7yL88y%2FLXRk2wjaN1UDkMN2KUnZXeI3yUrpf6bWsUrh40DDVSUeGhGEtVz%2BF%2FWCoX3sq9W5NMJaw0k189JM51vBeErM6e72H5ZTBh9QWMuph7UK%2FWfuuqqNe2nfAz%2BM1%2BuJduQY8q2FVp0T7hziKtYsQtpAH4oPlSZ8vT7Y%2FvDMIR7pXKBCGsWrYuekIfbVCjUNoIKdmyNq56p8XYSXt0UlDNeNldd2MhMcsSLdon9tVvYbBEXH8q35LkPRLs5cdyQhMVnVFxZMuMN%2Fl8BQ9bJe8IXgZu7%2FzYosr12hIbmvmHX8ByxYy0jdfT%2FiiSVMoyd0Guk7FDhFbVq%2B4IZEpMDM0Hi41qgVDJ9x3yBOW8F7XJ%2FTDMEADjHtvbylgp8jx1HGlXx5qF3Fd35G0rKvp8Wa3QZxsTsfEEuvyxntO73uUOr%2BQZukQ0An9wLZZcUrwa1v3gUjP43RApASANv2fIlslIwylRlsWX3T9gbMK6Hi8IGOqUBhlYoEnO%2BvxpBvsV%2FtReNCUe8pBwV%2FNWLLV5Qkz648D747bV9cH8E9qKoSvylsOTO8M%2F3QyvRGofQWxO6yxJzAsh5zRFpWqZ7FrSP%2FD6gdahYah%2F8LB2FpzIKa1GKD80TUqoZKQ9JDrlrZrZOIKaC3c2eBCYjKyXKsDAdDRhg0Oq9qWK2fH9%2FaPM7Cf9y6PL%2BEDr87VGPChXSfLOJ62pBFVdlSTqW&X-Amz-Signature=719f4be5046fae6df24b91fbfe466368e374c564b968bfbeeca65b5714d64ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
