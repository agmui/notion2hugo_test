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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVQ6RGU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDradddmEnWj1E4PifGPWBAsop2c4do7U27zdwsWtrVawIgZhzYMAbMTX6vT7NxPqip2VqEfNNjq6qeeervd1JCXjkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGeQTwfG7fDa9QnlyrcAxjN1dPaIyiX1Lky0T0rgOM9vvgdJXHsMwBSQsN5VaS3DKJ5sgzcBwLRoGUR3fBLxfGP%2Bj5ttZoch%2B2kZGOnbrJ5%2BYYLDfOgX%2BP8zoQBV%2BrDDHdbm0F1lu0sUV8Qr59aP0ie4rXJ5f3Y3YuE9Xjf%2FsG%2FXbhhpM6PJv1T2FMAWP4o%2B0bwpv2%2BjJNXwhSG2CztgWz96T9fDZGuD%2FnRFSAfzo4Y3aNewcN3HP2eyZ8p%2FVwhWw5lUrZeB55wSQTFTAz8CRjA46VVa0i5%2BtA1uPeymfx76a23E%2BlEnyLzph36J6nItAf8ElsOiD9Sb8OkIsdDIPEVhd9f0oBA75A5fmRUvzXo51d5RvMn93Voh3Sn3CuwvswjiBtQVhgLif09lOWm1vuMMpzXmcLSoHqVN7ddxh40Mr%2Fb4zEwwxEQTsWTz6HRNYmhNHclC46KVGpBwtzUqQbREjm7RzF2Fdzu4GmSP7ClPYvQqwYEfIs6W2csEuFJMpyil2k7SqJXPSufKgZ%2FdBEjKofP7gnAkbTEsTDcBW1j%2B8fCVawfq2g4pVfSqaZ9t%2F8zNuPAAKjRAcq5zeU%2BHZov1fWct13z0SGH7rGLBvJp%2FNujE8Kj6mOIIz4K2TTHtmGs6LYIdlfXlAxHMIiz38QGOqUBeKOplOgiAGv7kfWA6FBLhDOIRpthW2ZEZYUBrtdDIvdC9BMGP8GurIlyvt7go4zaEOP7iERmZiPC7L60R0mYThxBf7dM5bCdg%2Fz3xi%2Fi8%2FX%2FpsOiEZohZ%2Bc3djkebIJygyfaTttugcKLtEfgAmhyyINdnqeQap0VXyjrrqu1aORY%2FyBZvw7NYGH1EOIiSB912FFzNTBvEGKyOBwQWxftePIpxSVM&X-Amz-Signature=6bdb2581984e9ee3339ef261bfe97d47d2002d321d762c708d6325a7534c5670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVQ6RGU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDradddmEnWj1E4PifGPWBAsop2c4do7U27zdwsWtrVawIgZhzYMAbMTX6vT7NxPqip2VqEfNNjq6qeeervd1JCXjkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGeQTwfG7fDa9QnlyrcAxjN1dPaIyiX1Lky0T0rgOM9vvgdJXHsMwBSQsN5VaS3DKJ5sgzcBwLRoGUR3fBLxfGP%2Bj5ttZoch%2B2kZGOnbrJ5%2BYYLDfOgX%2BP8zoQBV%2BrDDHdbm0F1lu0sUV8Qr59aP0ie4rXJ5f3Y3YuE9Xjf%2FsG%2FXbhhpM6PJv1T2FMAWP4o%2B0bwpv2%2BjJNXwhSG2CztgWz96T9fDZGuD%2FnRFSAfzo4Y3aNewcN3HP2eyZ8p%2FVwhWw5lUrZeB55wSQTFTAz8CRjA46VVa0i5%2BtA1uPeymfx76a23E%2BlEnyLzph36J6nItAf8ElsOiD9Sb8OkIsdDIPEVhd9f0oBA75A5fmRUvzXo51d5RvMn93Voh3Sn3CuwvswjiBtQVhgLif09lOWm1vuMMpzXmcLSoHqVN7ddxh40Mr%2Fb4zEwwxEQTsWTz6HRNYmhNHclC46KVGpBwtzUqQbREjm7RzF2Fdzu4GmSP7ClPYvQqwYEfIs6W2csEuFJMpyil2k7SqJXPSufKgZ%2FdBEjKofP7gnAkbTEsTDcBW1j%2B8fCVawfq2g4pVfSqaZ9t%2F8zNuPAAKjRAcq5zeU%2BHZov1fWct13z0SGH7rGLBvJp%2FNujE8Kj6mOIIz4K2TTHtmGs6LYIdlfXlAxHMIiz38QGOqUBeKOplOgiAGv7kfWA6FBLhDOIRpthW2ZEZYUBrtdDIvdC9BMGP8GurIlyvt7go4zaEOP7iERmZiPC7L60R0mYThxBf7dM5bCdg%2Fz3xi%2Fi8%2FX%2FpsOiEZohZ%2Bc3djkebIJygyfaTttugcKLtEfgAmhyyINdnqeQap0VXyjrrqu1aORY%2FyBZvw7NYGH1EOIiSB912FFzNTBvEGKyOBwQWxftePIpxSVM&X-Amz-Signature=befd90e36d6a6117c78d843baedb7fbda9a3829b35cf293d54d851c8bde84ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
