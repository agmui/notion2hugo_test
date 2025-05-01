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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B5QYCZX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIDAt4XuABV9iWC9bVTGZPrsQaDabnClrEfxs9lPiT%2FIsAiBpDtUaqi0K1NkbFpMdCC5Ccgqs3ORMp38fpF6x3QIsACqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YM46GSSAZrl6hOQKtwDvSdjdAP0xjwx3XkPUqWH8kgXcmHpErhqGZb3D5YwSWoBYJ6m0SuXRjtAdKZ4cZaDtJoVmQ6J9H0nsVVcGD%2FMDwTaMCeHnzGHLyKfgsSIElrjn8Kwu1%2FyTBEIJNpjhU16AxYzYu2Di70u046R3XMLgpL0BMKEbq1JltG9YMF8c%2BTzIMIaxhiBqmMdPvgxDmkDn1ISttSwG8D%2F8m%2BhbHafDnBbLudiTxeAKoTC9bml0PUke0DRIMOdH8Or4Tl81u%2FbKS9h1nZ7%2BhwBi69spKuLnNzgvFXsq2qqBZX0p36SrtgaT3P8kI4uU%2FbL%2BvmKw1CYs07T1qQI06doGl%2BRfQVcRzhyu6BOjQntgqa93JUOpAT9dJwtk8Qcs%2BA35rAhZQk08etvLJf82IYSeMgoVLBP0AjtvTgfm3W90gQrPJ7iA2kBadjCWANtQYhA%2BKTt0G25N7lQsMVjI9wBChwsU6OY8Uj2HNzlOu%2Ft7JJPTsbHyJ9lkVV%2Bvk1REBzki3wjERWPAfVNerb4MpXOiFlmw7L8EyUhoZmpPvh%2BGIOH87x52FW3bB5b%2F%2Fiem2WYFMmUlik0xiot0VQwCKiU%2F%2FpSmvT3tbohe16hJxbX%2BQqCux4Wi7k6%2FIn51n%2BN7wR5G6EwsenMwAY6pgEEuInfeye8HB7zDy6o0wnc7Kt2IWJOYVKtI5cBFv7jS5B9xWdAPAQo6E1ijNMdARVJj%2FFDnfrYFe7w4yaiMs2bvxbSNHNcgZRcVkCCVVqYevgs5y0CLV7izZND4PBrweLPZJ9ofPiOCUBVYPx05LpOJJS%2FyZwK%2FDLl%2BTT1%2FZOxouhVMK7bPpK20ZJrBierkezNqy5HT%2FTdsfgW0UHw%2Fw9%2FbEdkGyAM&X-Amz-Signature=a52300701bc4359bc65ae2fbc587acf30712c6c1e667d862ceec65b8f38a42fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B5QYCZX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIDAt4XuABV9iWC9bVTGZPrsQaDabnClrEfxs9lPiT%2FIsAiBpDtUaqi0K1NkbFpMdCC5Ccgqs3ORMp38fpF6x3QIsACqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YM46GSSAZrl6hOQKtwDvSdjdAP0xjwx3XkPUqWH8kgXcmHpErhqGZb3D5YwSWoBYJ6m0SuXRjtAdKZ4cZaDtJoVmQ6J9H0nsVVcGD%2FMDwTaMCeHnzGHLyKfgsSIElrjn8Kwu1%2FyTBEIJNpjhU16AxYzYu2Di70u046R3XMLgpL0BMKEbq1JltG9YMF8c%2BTzIMIaxhiBqmMdPvgxDmkDn1ISttSwG8D%2F8m%2BhbHafDnBbLudiTxeAKoTC9bml0PUke0DRIMOdH8Or4Tl81u%2FbKS9h1nZ7%2BhwBi69spKuLnNzgvFXsq2qqBZX0p36SrtgaT3P8kI4uU%2FbL%2BvmKw1CYs07T1qQI06doGl%2BRfQVcRzhyu6BOjQntgqa93JUOpAT9dJwtk8Qcs%2BA35rAhZQk08etvLJf82IYSeMgoVLBP0AjtvTgfm3W90gQrPJ7iA2kBadjCWANtQYhA%2BKTt0G25N7lQsMVjI9wBChwsU6OY8Uj2HNzlOu%2Ft7JJPTsbHyJ9lkVV%2Bvk1REBzki3wjERWPAfVNerb4MpXOiFlmw7L8EyUhoZmpPvh%2BGIOH87x52FW3bB5b%2F%2Fiem2WYFMmUlik0xiot0VQwCKiU%2F%2FpSmvT3tbohe16hJxbX%2BQqCux4Wi7k6%2FIn51n%2BN7wR5G6EwsenMwAY6pgEEuInfeye8HB7zDy6o0wnc7Kt2IWJOYVKtI5cBFv7jS5B9xWdAPAQo6E1ijNMdARVJj%2FFDnfrYFe7w4yaiMs2bvxbSNHNcgZRcVkCCVVqYevgs5y0CLV7izZND4PBrweLPZJ9ofPiOCUBVYPx05LpOJJS%2FyZwK%2FDLl%2BTT1%2FZOxouhVMK7bPpK20ZJrBierkezNqy5HT%2FTdsfgW0UHw%2Fw9%2FbEdkGyAM&X-Amz-Signature=c5d595fcfb7c1f8d51adca3bb5a78fb67d73947c966551c1397c8d1aca22bcd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
