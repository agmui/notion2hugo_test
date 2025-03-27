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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE26JQI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQXPibJlPvDzMF4F7h6x%2Ft99ZisogH%2F17mLysXHAd35wIhAMpQ9%2BmBF2fqPRgtWlAM%2BvxQ4c6dXW4DvfU9WBUBVUXIKv8DCEEQABoMNjM3NDIzMTgzODA1IgxPKXOGlSLq0rBxO64q3ANqSt8hbIpOXjOgVc0hBVaL8EanauwrNR%2FuACLknY%2BpfMw5yGoSdwfeRTCx6SvDuLsk9gtHrXUV38XO0hN2oGqVfSjmjet5EXvnwElgtFvCwGeXgjLcINL%2B1AFszFga0DhGkN1zolp4rLwTbABJ1um1i8qLhkujZLYfCHUv0qUm0p602V%2BB7%2BgzKU36jRIngcfYQz8witjznMbQpG2hPH4lnfzDAW2oRcoZuLvq7y7P4f2DgdFpSMBAw96n6U2P25k6IwAKKRLdu%2BLuUpMO8FlDTdIObQP9JGId15Sw14A3CLsTdmCWnFgg1W4Q%2BelkK1D3JOSaZpu0vAJi3nhBcqJ7TcrLk49csvCsNJU1JGSvvscTtWS6J2YhHRzBVsbgBDfZXdEuqZHNiFNb%2FrXVBzo0SHu2b3TwX2WyJLbmD23bhQtDfaXELZ7kGQcg7UD9%2F%2By0IsCcoix2wiG69AN7X5k4Y%2BTJlXuexl1VW8DaRFWLL3zvgeehoXWnl9eqdDd7J9oddi6dvA1s1KXmdCyE0Sy9oM2VH7TlUvnPqt3JcJFnP%2B5vxDEgt1ryVltGFC79CEtkrQXZlijDMLCOtQeMQz8Gu0qG16u4lyECihIiA16GNVkfIAb83B0hvoRXBjCzhpS%2FBjqkARbdBny5rQWvefcecDHdJPEr2U77kYzPFGQrYXJMnVS5gPuADG%2F59SnPvEpBdYIljE4uI4S03FlkW7ZKKUa5Po%2B%2FstDVtqSofx59Iwz8wI%2FbVUM46kLGyPF2f8Dx4abGQP5iw%2FHZavuUEL6uAH1FWHK453IZ468yhM7yn82RETsulzDGdNv%2FX6uCiD%2FCA5%2BQCkw1SgZTGXOztVjqieOtDHxIzjts&X-Amz-Signature=9ddd3329d9e43fa58cb636ecc9160f060c21ef1cd52daeb237f2bda97c401990&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYE26JQI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQXPibJlPvDzMF4F7h6x%2Ft99ZisogH%2F17mLysXHAd35wIhAMpQ9%2BmBF2fqPRgtWlAM%2BvxQ4c6dXW4DvfU9WBUBVUXIKv8DCEEQABoMNjM3NDIzMTgzODA1IgxPKXOGlSLq0rBxO64q3ANqSt8hbIpOXjOgVc0hBVaL8EanauwrNR%2FuACLknY%2BpfMw5yGoSdwfeRTCx6SvDuLsk9gtHrXUV38XO0hN2oGqVfSjmjet5EXvnwElgtFvCwGeXgjLcINL%2B1AFszFga0DhGkN1zolp4rLwTbABJ1um1i8qLhkujZLYfCHUv0qUm0p602V%2BB7%2BgzKU36jRIngcfYQz8witjznMbQpG2hPH4lnfzDAW2oRcoZuLvq7y7P4f2DgdFpSMBAw96n6U2P25k6IwAKKRLdu%2BLuUpMO8FlDTdIObQP9JGId15Sw14A3CLsTdmCWnFgg1W4Q%2BelkK1D3JOSaZpu0vAJi3nhBcqJ7TcrLk49csvCsNJU1JGSvvscTtWS6J2YhHRzBVsbgBDfZXdEuqZHNiFNb%2FrXVBzo0SHu2b3TwX2WyJLbmD23bhQtDfaXELZ7kGQcg7UD9%2F%2By0IsCcoix2wiG69AN7X5k4Y%2BTJlXuexl1VW8DaRFWLL3zvgeehoXWnl9eqdDd7J9oddi6dvA1s1KXmdCyE0Sy9oM2VH7TlUvnPqt3JcJFnP%2B5vxDEgt1ryVltGFC79CEtkrQXZlijDMLCOtQeMQz8Gu0qG16u4lyECihIiA16GNVkfIAb83B0hvoRXBjCzhpS%2FBjqkARbdBny5rQWvefcecDHdJPEr2U77kYzPFGQrYXJMnVS5gPuADG%2F59SnPvEpBdYIljE4uI4S03FlkW7ZKKUa5Po%2B%2FstDVtqSofx59Iwz8wI%2FbVUM46kLGyPF2f8Dx4abGQP5iw%2FHZavuUEL6uAH1FWHK453IZ468yhM7yn82RETsulzDGdNv%2FX6uCiD%2FCA5%2BQCkw1SgZTGXOztVjqieOtDHxIzjts&X-Amz-Signature=fb88900397f9290323eb23653317aa564901759e01e2b5ca976aa074d517fc3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
