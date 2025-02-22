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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWEVWPP2%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN70DQQKtygAgwxNVjzw9nZlE3SE6V%2Bn7V3byeJ0dnjAiA5Og8GEl%2Fdr%2FZuVetA13EdYZOgcNRGVCNdnK8Pmu5D9iqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrVYALPnGhlog7jJ6KtwDOZknc6LzbMwr8B02w23GhG7GfQLjIK1mY3Io4KxuyE4dBvbMjBDlnYu3ngQ%2BdnUAGj9IMsEm2RSKcVnZyeFtyUXr1LxPdEXaNfIzPXjbabQyMMhEf9HblhUgd5EUsoWktHrWpsI8niNLqB45TtmPE%2BUe%2Fh0FKdH6vDGcLBA2VpcB5uCcAvLhLrS1VxMLJ%2BbXLr8tB5OstoEbf8AL58JzD1RVOB%2BFefcNOkv8pyjvhmZ1qQk67J6k8%2FqCjE7WSdH0NkhM9RQvs2X3YFSe4Pt7nifkoC2pL5OvAxMnZwHOs16DOj1eaAOCccTKG245iGk%2Bd5xbNbp0Csl4IILPwbecrrzmN%2FlPeow8VxXF4OvwFB3CZd9klgMwqYjJWGQ9xEC6lz1YCOZ4sNYNZ15AOqKuHsqdsLA1VqFk8%2FGMgdHwDGK%2B0Aw4me8h7mlMEwYMiY9eEEEo%2FnGoKI6Va8ExAYwINmZZv0q2whKqlg2pEBi1%2FjzDzj4ItJkVgimrsoZ9qatCLoCp6BSL2mPT1mQyb84zyuGUn8Ym0TsmA04pk%2BxwzrLzWBivf%2BTXzYmopv7kHMLjRWM0HwWs%2FHum%2BLagn%2Bgq2DbiWigNkz2lLSlDzEKTNObjwTfl%2BlpTBMD%2Bek8wienmvQY6pgHy71IqVFuAfSxrhLEXoas2Vw7xlqd6HN63NMSXzEvy2caVDhsB%2BN%2BvhJUOqx2LCqoiE63hr7VvxD%2BVw92g7hqzAKEew98xUWZYxgQe%2FL5A1YPFBstZ4adaZ%2B0MaWTQdMbuC7%2F7WKghmoRZKfa%2BoORT%2F5qYEY6TbMPwyZn5wSb5ixV1tTfmoPh3FXwADGvLZq%2BwcsTliDX5burhPMPBUdc3t9ahd%2BFV&X-Amz-Signature=7ce23f50c0b550b2cb35a2da0758ee32886a6320bac2cdff9ba9434e43ac2566&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWEVWPP2%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN70DQQKtygAgwxNVjzw9nZlE3SE6V%2Bn7V3byeJ0dnjAiA5Og8GEl%2Fdr%2FZuVetA13EdYZOgcNRGVCNdnK8Pmu5D9iqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrVYALPnGhlog7jJ6KtwDOZknc6LzbMwr8B02w23GhG7GfQLjIK1mY3Io4KxuyE4dBvbMjBDlnYu3ngQ%2BdnUAGj9IMsEm2RSKcVnZyeFtyUXr1LxPdEXaNfIzPXjbabQyMMhEf9HblhUgd5EUsoWktHrWpsI8niNLqB45TtmPE%2BUe%2Fh0FKdH6vDGcLBA2VpcB5uCcAvLhLrS1VxMLJ%2BbXLr8tB5OstoEbf8AL58JzD1RVOB%2BFefcNOkv8pyjvhmZ1qQk67J6k8%2FqCjE7WSdH0NkhM9RQvs2X3YFSe4Pt7nifkoC2pL5OvAxMnZwHOs16DOj1eaAOCccTKG245iGk%2Bd5xbNbp0Csl4IILPwbecrrzmN%2FlPeow8VxXF4OvwFB3CZd9klgMwqYjJWGQ9xEC6lz1YCOZ4sNYNZ15AOqKuHsqdsLA1VqFk8%2FGMgdHwDGK%2B0Aw4me8h7mlMEwYMiY9eEEEo%2FnGoKI6Va8ExAYwINmZZv0q2whKqlg2pEBi1%2FjzDzj4ItJkVgimrsoZ9qatCLoCp6BSL2mPT1mQyb84zyuGUn8Ym0TsmA04pk%2BxwzrLzWBivf%2BTXzYmopv7kHMLjRWM0HwWs%2FHum%2BLagn%2Bgq2DbiWigNkz2lLSlDzEKTNObjwTfl%2BlpTBMD%2Bek8wienmvQY6pgHy71IqVFuAfSxrhLEXoas2Vw7xlqd6HN63NMSXzEvy2caVDhsB%2BN%2BvhJUOqx2LCqoiE63hr7VvxD%2BVw92g7hqzAKEew98xUWZYxgQe%2FL5A1YPFBstZ4adaZ%2B0MaWTQdMbuC7%2F7WKghmoRZKfa%2BoORT%2F5qYEY6TbMPwyZn5wSb5ixV1tTfmoPh3FXwADGvLZq%2BwcsTliDX5burhPMPBUdc3t9ahd%2BFV&X-Amz-Signature=2cf570d0dbabfd6105f237b25fab157898bdf853043717c564b4c6fcdaeef046&X-Amz-SignedHeaders=host&x-id=GetObject)

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
