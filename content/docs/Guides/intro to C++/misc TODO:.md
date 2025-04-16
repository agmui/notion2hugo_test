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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYBZREGD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXVW771u3cLtKHAsALwU2DoJRpgbO3LzNnS%2Beve4wRHgIgPR4CuZRE3wpHPdDi%2FmGiBAHXassksuXP%2BpFa%2B6PvZZQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDC81crKgrcQQZtGekyrcA86zV7brddo8d%2B3sF08l759ZvbdbGoCmK4obqHbe6d%2BEQeyeU8eihupl6u6h53b6xA27pJWicxip5uadSp8txnW4NiHDGFw%2FB9oSE5%2BYpPjARHNePLb%2FRi4lBmp4zHOx0pOFyKfmv0jEr0y4aKZ3w0siNY6G3xDS3U8QGnx9htelEorHf8FGSGEfqygjGnsPjTkViGVYT2sqSPpr2EYG4mLvLq3MW%2BzsEpgxDVhBNTRCzSXF4m0IzuWbdcpD1YCQIcfgKrYPqeMWL4vaidSi7xI6%2Fdl3tQRREjUMKVQwDa0a43Qq8chr%2FY5bbil2tPLyG%2FvikheNECLwmCZto%2BcGvSCoPOfPqBphLmQVGSSY1XCzVpXydjhoolmFl6XieLXeB1fXLE0XEFGe%2B8fhiU4vfieBWohs9wSQWTVC3n1u8VlDq3s%2BfC%2BNwiPQBKQiaNqojf%2BM2VbnWQOQzXtsVW1hCgPtVV8dpiIBhdTNJPiMiIeBAiK3WAyQUY98%2BNYKl1zol2A9Y30fHnPiwm%2B95R3kPh220UdAt7TXlgehIRKJSKjL5RBDQ4HYjPPl6EubP5%2FzpndV6E73XnzImiYQvkm90wSrAL%2Bzr2T2aM5p2ele2ZHcc8XZxQO2ywPJb6iBMKP3%2F78GOqUBcfM0YFIghMDdta0LUZK97wX11eyrKCWoghVbcQRJ%2FICJ6EuJQC8DfCiLyLjweV%2BHFgIrB%2BlnHsur%2BWmTsCtkM6riWEoVJje%2B5fKNUWkFcRsUEv%2Be1ca4UuSbArPNmtuopqcexkJSIxPuzc0ZQSTM36hKyEJTtQQ2dSGv3ysHPKLXe9GZ%2Br1GzxfpDyo4ZnUNErkNhlPUP6LUtEfkOZo1bmQrszYj&X-Amz-Signature=2ffb4a0c167d634f55efccfdd7329118d5aabb52e4b21dd717a97ff0726ee81a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYBZREGD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXVW771u3cLtKHAsALwU2DoJRpgbO3LzNnS%2Beve4wRHgIgPR4CuZRE3wpHPdDi%2FmGiBAHXassksuXP%2BpFa%2B6PvZZQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDC81crKgrcQQZtGekyrcA86zV7brddo8d%2B3sF08l759ZvbdbGoCmK4obqHbe6d%2BEQeyeU8eihupl6u6h53b6xA27pJWicxip5uadSp8txnW4NiHDGFw%2FB9oSE5%2BYpPjARHNePLb%2FRi4lBmp4zHOx0pOFyKfmv0jEr0y4aKZ3w0siNY6G3xDS3U8QGnx9htelEorHf8FGSGEfqygjGnsPjTkViGVYT2sqSPpr2EYG4mLvLq3MW%2BzsEpgxDVhBNTRCzSXF4m0IzuWbdcpD1YCQIcfgKrYPqeMWL4vaidSi7xI6%2Fdl3tQRREjUMKVQwDa0a43Qq8chr%2FY5bbil2tPLyG%2FvikheNECLwmCZto%2BcGvSCoPOfPqBphLmQVGSSY1XCzVpXydjhoolmFl6XieLXeB1fXLE0XEFGe%2B8fhiU4vfieBWohs9wSQWTVC3n1u8VlDq3s%2BfC%2BNwiPQBKQiaNqojf%2BM2VbnWQOQzXtsVW1hCgPtVV8dpiIBhdTNJPiMiIeBAiK3WAyQUY98%2BNYKl1zol2A9Y30fHnPiwm%2B95R3kPh220UdAt7TXlgehIRKJSKjL5RBDQ4HYjPPl6EubP5%2FzpndV6E73XnzImiYQvkm90wSrAL%2Bzr2T2aM5p2ele2ZHcc8XZxQO2ywPJb6iBMKP3%2F78GOqUBcfM0YFIghMDdta0LUZK97wX11eyrKCWoghVbcQRJ%2FICJ6EuJQC8DfCiLyLjweV%2BHFgIrB%2BlnHsur%2BWmTsCtkM6riWEoVJje%2B5fKNUWkFcRsUEv%2Be1ca4UuSbArPNmtuopqcexkJSIxPuzc0ZQSTM36hKyEJTtQQ2dSGv3ysHPKLXe9GZ%2Br1GzxfpDyo4ZnUNErkNhlPUP6LUtEfkOZo1bmQrszYj&X-Amz-Signature=e0c9b88b3bbade29d074501944e4b693c60919ed0e99b5af5426c4f4e6865188&X-Amz-SignedHeaders=host&x-id=GetObject)

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
