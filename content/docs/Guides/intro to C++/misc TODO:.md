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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AHOEEI7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpWozmvZN%2BqZPfXM8wIrFaKBvraVBN6K%2B5YSgZmippQgIhAKMRJinAOjOcg1bLhtJgA%2BQk5454NklkKzASsENQWZtFKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTmdRhIALKB2ibqFoq3ANEix%2B2S5pmNJKQt3WpuqyP4Cz5LArDVz3Ysc1JDx4n4mm3WY77RZMuM%2Fh7ZkI6tsOi7h5UGAZlQhBKfhbd%2BykR9Q0YMfCzhINKxNRz%2FlW94A7HlY5oVeK7zGCoiDMO16A4V0xhoA0gey30ZuX84tAwnTP6FXF8%2BwZriPZUqUl1IKwjBmQEiVesbsphEj3CKm336NleVWgaQBobPIqwT3rzNiTUPG1sKbzoHnBJtEeGFXTRfmOiRXdA5LLuohcXNAebClj9j2TLdpi31H1p8W20OUvlHE%2Fi4gg0ih1ucMyV3407LUwAmtc3TnnIUCo1ZHGCh91qe1IZDixAv9GlkboTxqtxS29097EbRl11VYQjo0ztZlwFxxcejigQ%2FHwmgo58Q1hP3O%2Bb1FOF3TUb8IKRL9COLbdRGqgbDMQCGs5MsTz1dUZ8cPxMqoGe%2BWl8lHGtmgyN9fmWq%2Fssp%2BWOpC20vN8GkJy%2BFsfdj0B90RMK%2FnJPaKyna6L1ZSJ11zLh9%2F4H41%2F%2By5aJby3mHqUUWXmiB15W2Hdfu024AQH3VabU9N8pA7kksmAa2oNy%2F1Wdu5xOFP9z1ydPaX4F9I4kXLY%2BSALnMDPUgbS71P6cxXyConmJDKxcU87qgs5eMDCgubK%2FBjqkAS2BaY3sGZyk5IcqY04w8tqhrb1GQWuGNOFBNsgkDtVe%2BGx0ypZdZQsq9nrXjBay7bGHElhswf%2BoXGkeWxSuZfF5p%2FtRhdm6ic9MLscI7JzrQSgdvyRgcEQBunpP%2BLJOpjNzcwmyc3eJ5fJi%2BfJ1h7qBQJ8yr710QS1%2BS9pY%2BkNGXgraq8hNZoV1vz65ioXc6toth6TrGXt6aH2zrrer6Ybf%2B%2BsA&X-Amz-Signature=51d66548477be492908f57686ebecba82f9db9d00f1116a5f9ab1cc336999ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AHOEEI7%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCpWozmvZN%2BqZPfXM8wIrFaKBvraVBN6K%2B5YSgZmippQgIhAKMRJinAOjOcg1bLhtJgA%2BQk5454NklkKzASsENQWZtFKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTmdRhIALKB2ibqFoq3ANEix%2B2S5pmNJKQt3WpuqyP4Cz5LArDVz3Ysc1JDx4n4mm3WY77RZMuM%2Fh7ZkI6tsOi7h5UGAZlQhBKfhbd%2BykR9Q0YMfCzhINKxNRz%2FlW94A7HlY5oVeK7zGCoiDMO16A4V0xhoA0gey30ZuX84tAwnTP6FXF8%2BwZriPZUqUl1IKwjBmQEiVesbsphEj3CKm336NleVWgaQBobPIqwT3rzNiTUPG1sKbzoHnBJtEeGFXTRfmOiRXdA5LLuohcXNAebClj9j2TLdpi31H1p8W20OUvlHE%2Fi4gg0ih1ucMyV3407LUwAmtc3TnnIUCo1ZHGCh91qe1IZDixAv9GlkboTxqtxS29097EbRl11VYQjo0ztZlwFxxcejigQ%2FHwmgo58Q1hP3O%2Bb1FOF3TUb8IKRL9COLbdRGqgbDMQCGs5MsTz1dUZ8cPxMqoGe%2BWl8lHGtmgyN9fmWq%2Fssp%2BWOpC20vN8GkJy%2BFsfdj0B90RMK%2FnJPaKyna6L1ZSJ11zLh9%2F4H41%2F%2By5aJby3mHqUUWXmiB15W2Hdfu024AQH3VabU9N8pA7kksmAa2oNy%2F1Wdu5xOFP9z1ydPaX4F9I4kXLY%2BSALnMDPUgbS71P6cxXyConmJDKxcU87qgs5eMDCgubK%2FBjqkAS2BaY3sGZyk5IcqY04w8tqhrb1GQWuGNOFBNsgkDtVe%2BGx0ypZdZQsq9nrXjBay7bGHElhswf%2BoXGkeWxSuZfF5p%2FtRhdm6ic9MLscI7JzrQSgdvyRgcEQBunpP%2BLJOpjNzcwmyc3eJ5fJi%2BfJ1h7qBQJ8yr710QS1%2BS9pY%2BkNGXgraq8hNZoV1vz65ioXc6toth6TrGXt6aH2zrrer6Ybf%2B%2BsA&X-Amz-Signature=5738f137b137c813f3d0469a292db260111b551fec1791e633d6c2b93fee3a37&X-Amz-SignedHeaders=host&x-id=GetObject)

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
