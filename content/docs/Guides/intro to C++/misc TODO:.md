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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=fbb500d4ebe5e17bd4152caf329f126ae6baca4255d65f87a2975b7fc7bcbbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=728ff6310b67ea7a6d25c633d5eabeaaed78375cd88e94dd0217f9899bce0c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
