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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEAHQ24%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHHqtVYU1yf2BE0vwGnat2Znozpb%2BFrYl%2BQLFyRvyjklAiB9oioBb4LvZyMh%2BhPWXlWGNBqfPmN%2Bgewj6RzfF3iSmyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMz2rxpE37cn5gIGHDKtwDmaOPLDq07quyyAbjijVk9dYCnIAhDoW9eaQesmK4FBUDcGFgPxCZTZ%2FBfFkgbEa3W6qG51zg16kL0xCJvYLtssYpLPK9OSASOryBlLIh8E2tXB56nOA5uhUzI4GjrG1coBYZYbx7HWssqIOTQnYT4L5nuGK63htKyd2ZeQzjQZfzEgwxb6pQg%2FFp70j0sCxy1sMtsY8J7tHY%2FRTFR%2FwoWmYDrxg1sxa5AFyPBKm%2FK4VNMD30Bt3eMzFfp1ek2M70Dm7cmxjThbJLVle0hQoOiwgjq5uuT%2FX9HMMsH%2B4%2BQGue9kJ29ZKv3ZB2vHvYt44YbJWWbYWAr7POHK3G%2FtKGZmkxCb2yqM3KhsqXw7%2BN6JSuCG4nP%2BGweQ71vx%2F%2Fz89b1V91z%2BQqK0MHAbuYFLqLduPXXQEUBDmoAhQxxvrmnkqNdsvmG5LFbGP9OBZp7%2BfWTpBg58j%2FRAo%2FjkL4uOHWRjaQIcQNwLZgfpH3Xxd8mDQNSYCPZqj56IxK92E4kfgLFiDG%2FGa%2FE0yldFTgx80uEwYpzArpp9%2FCm2nDj%2BcMReN8HyqPDVJlxHkSgwpzr1VgsyS0dRDL9HXKUju8dJN7HhSdOH8GIiHWz5Lv46w52SZDNbaOuGOphkOGVysw4%2ByRwQY6pgGom2j%2FNzvhMGQn5MiGVt511noZSft9y%2F%2B%2FXqgDJgRrPp4ars2%2BgMK%2F48zD0i63LS2HsasmB1bPjdrQXFTAnqdqnU4Ex6s%2FIsv7ZDw3os6uT8qjmawJ3cbX0sHQ%2FDDBzT39mbM3490w92%2Fv39sZRaw122cTF%2FEcrwasiK0Rxm03iROxpwE66uF9QXSJtxRQWJOPK6t%2B3orewxfpyEtoc%2Bw1TAdNUnzS&X-Amz-Signature=d453907997c4e6553df86cf89e3c1ffbf72927cd0ed29b5c2bb06d91e6ca5857&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEAHQ24%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHHqtVYU1yf2BE0vwGnat2Znozpb%2BFrYl%2BQLFyRvyjklAiB9oioBb4LvZyMh%2BhPWXlWGNBqfPmN%2Bgewj6RzfF3iSmyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMz2rxpE37cn5gIGHDKtwDmaOPLDq07quyyAbjijVk9dYCnIAhDoW9eaQesmK4FBUDcGFgPxCZTZ%2FBfFkgbEa3W6qG51zg16kL0xCJvYLtssYpLPK9OSASOryBlLIh8E2tXB56nOA5uhUzI4GjrG1coBYZYbx7HWssqIOTQnYT4L5nuGK63htKyd2ZeQzjQZfzEgwxb6pQg%2FFp70j0sCxy1sMtsY8J7tHY%2FRTFR%2FwoWmYDrxg1sxa5AFyPBKm%2FK4VNMD30Bt3eMzFfp1ek2M70Dm7cmxjThbJLVle0hQoOiwgjq5uuT%2FX9HMMsH%2B4%2BQGue9kJ29ZKv3ZB2vHvYt44YbJWWbYWAr7POHK3G%2FtKGZmkxCb2yqM3KhsqXw7%2BN6JSuCG4nP%2BGweQ71vx%2F%2Fz89b1V91z%2BQqK0MHAbuYFLqLduPXXQEUBDmoAhQxxvrmnkqNdsvmG5LFbGP9OBZp7%2BfWTpBg58j%2FRAo%2FjkL4uOHWRjaQIcQNwLZgfpH3Xxd8mDQNSYCPZqj56IxK92E4kfgLFiDG%2FGa%2FE0yldFTgx80uEwYpzArpp9%2FCm2nDj%2BcMReN8HyqPDVJlxHkSgwpzr1VgsyS0dRDL9HXKUju8dJN7HhSdOH8GIiHWz5Lv46w52SZDNbaOuGOphkOGVysw4%2ByRwQY6pgGom2j%2FNzvhMGQn5MiGVt511noZSft9y%2F%2B%2FXqgDJgRrPp4ars2%2BgMK%2F48zD0i63LS2HsasmB1bPjdrQXFTAnqdqnU4Ex6s%2FIsv7ZDw3os6uT8qjmawJ3cbX0sHQ%2FDDBzT39mbM3490w92%2Fv39sZRaw122cTF%2FEcrwasiK0Rxm03iROxpwE66uF9QXSJtxRQWJOPK6t%2B3orewxfpyEtoc%2Bw1TAdNUnzS&X-Amz-Signature=ddaec0d84da03f2374682dc3af9b780f6a80d249183569fc9083dcbd8d1b4793&X-Amz-SignedHeaders=host&x-id=GetObject)

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
