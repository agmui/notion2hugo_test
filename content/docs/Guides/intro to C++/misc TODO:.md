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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHTQITE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwSdwbmX6HHu%2Br1IdQHmVEAD7D2cab67nee163zX6ArAiBRLFbDbqJ8aSrSvKCgWSuVkejyvjos0bVAfbXliyOrVCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaq8DjVnCCd8rxRvXKtwDGkElriPR3OE3RG8w1fTADIHKJC9bCReoSOdqVyy7zLjuS5VAFBkf1bmC9zLNtMdAKOmlTjRdX4DTBajfHEkwz4fI4pk6TKNGY%2B42tbKtwRGojUFQT8grVtRmt5KEwzKIziukEVftRjo%2BltEDumNki5o0BRt3nS%2Fj%2FSR5D1vggAWr7bXn16tDYQLYOrXhne4aFV7dKCRuqfa1jzI8sqLlA1ewYU4v7%2FOBK%2BwMdqkQKyfdmjX%2FEIcI5s2bC6Innn4%2B9Uwj3G8q%2FWRCCXnQLsjnItSyaq9wNSjtomYhGoidqiZTifmLjeRhcjfLTmkzODa3SnMHg4kx77cpJs6Lx9bRvY4dfsO%2B6q0A%2FqnAPNOUzJy3xXolsUDlVaVRloW8HGq%2FLVfAdtRUDFT6dJ6YRuQnvkfom5ldZJx3I41HmXc5V2TDUudi3mAir%2FLxwj%2FJRZ2VQbmhs2RzR52vBFMELVESHY%2BVjRwggwKWP9l0KbiDz2SP%2BqTRCMWDWnbtmnu5EPHwGRQRkzei7mvPttmjks3DEfof0Y%2BGPPMoAY226E1FCdT7dYlZHsY1MjISvJ8GqVCZkvdlpOpTlyC8dFB3ZP4wAqHwiHwesUODu98ZeZ0K9QOceWFaXHtR6mOfeKsw66L8vwY6pgH3l%2Fch7b4OyAk67KVvkfm0QVs96%2Bujvsu%2Fas2OVQoTwqznDZgwRx7NnHWqI%2BDO5ffyDImKqZxIH6ujUzG713OyE04VgVaGxGysjDRhJJZVpEE0wBaTDuktZ9Q2BFv1QmDyAdjmoBdt1KSqq8NMBwSGoa6Zdx1uGtiOFfhs%2F4b56xTeECvOfPCGz5%2BE1bVHGaZIPeOYSbAaE%2BGEPdBVMEPvqTc%2BqXfM&X-Amz-Signature=d6d0a55c41bbcd6a46ee24894a9b0db0e5eb6302fac467cb7ba7b15a0b9e8381&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHTQITE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwSdwbmX6HHu%2Br1IdQHmVEAD7D2cab67nee163zX6ArAiBRLFbDbqJ8aSrSvKCgWSuVkejyvjos0bVAfbXliyOrVCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaq8DjVnCCd8rxRvXKtwDGkElriPR3OE3RG8w1fTADIHKJC9bCReoSOdqVyy7zLjuS5VAFBkf1bmC9zLNtMdAKOmlTjRdX4DTBajfHEkwz4fI4pk6TKNGY%2B42tbKtwRGojUFQT8grVtRmt5KEwzKIziukEVftRjo%2BltEDumNki5o0BRt3nS%2Fj%2FSR5D1vggAWr7bXn16tDYQLYOrXhne4aFV7dKCRuqfa1jzI8sqLlA1ewYU4v7%2FOBK%2BwMdqkQKyfdmjX%2FEIcI5s2bC6Innn4%2B9Uwj3G8q%2FWRCCXnQLsjnItSyaq9wNSjtomYhGoidqiZTifmLjeRhcjfLTmkzODa3SnMHg4kx77cpJs6Lx9bRvY4dfsO%2B6q0A%2FqnAPNOUzJy3xXolsUDlVaVRloW8HGq%2FLVfAdtRUDFT6dJ6YRuQnvkfom5ldZJx3I41HmXc5V2TDUudi3mAir%2FLxwj%2FJRZ2VQbmhs2RzR52vBFMELVESHY%2BVjRwggwKWP9l0KbiDz2SP%2BqTRCMWDWnbtmnu5EPHwGRQRkzei7mvPttmjks3DEfof0Y%2BGPPMoAY226E1FCdT7dYlZHsY1MjISvJ8GqVCZkvdlpOpTlyC8dFB3ZP4wAqHwiHwesUODu98ZeZ0K9QOceWFaXHtR6mOfeKsw66L8vwY6pgH3l%2Fch7b4OyAk67KVvkfm0QVs96%2Bujvsu%2Fas2OVQoTwqznDZgwRx7NnHWqI%2BDO5ffyDImKqZxIH6ujUzG713OyE04VgVaGxGysjDRhJJZVpEE0wBaTDuktZ9Q2BFv1QmDyAdjmoBdt1KSqq8NMBwSGoa6Zdx1uGtiOFfhs%2F4b56xTeECvOfPCGz5%2BE1bVHGaZIPeOYSbAaE%2BGEPdBVMEPvqTc%2BqXfM&X-Amz-Signature=f14817b41a0fb0ca903ff8ee77ce936a538707dafe785ecd9a1260d6deb39a23&X-Amz-SignedHeaders=host&x-id=GetObject)

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
