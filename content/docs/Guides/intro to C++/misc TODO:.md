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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ46GVE4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3hQybsngfF2AxKxQgJLLV24xBWYS%2BEHz6niqVvSlF3AiArznX%2Fvy1tPVXkncxu0xY7XESrpbaQ3y4l85Tv5AtaiCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMJRIfpofD9HduQc3aKtwDMjxEhuaFJhQTJyGt9e1nxr2IuZwCsWk9GijVlF08dQg9s2eSgEqvIjfZHxBleZrzqvvFw5G8U9sock6df2%2BNpOZvlk8bH0UdPOYQuou7U%2BlEFt338rQNeXon6wREX5T4AyuKRy1xn81VJlSUXOcKaYgnDPnKz0XNa%2FMSEnskr%2B%2FyffMDBsW2q7DMSlK4cNDd0OLTdqck9CDz7xfogq%2FrGysfiu1VgK7cS946uRqhd8pI9pibIE037ze8KDgRfmJJqOtXzo64oO3liUyu%2FXfjKIOwHoxpOUOT5XA8OdsVg8aE4AqSX0y1NXiF2n6nrp4hlcQeN7G2IWrwCvyZ4pv3Q42PqIHmHuMLN2vAyZOXn65jSbSxaHPsznGclBdTVaTZYxEDP5AW0uspyUDcqxQRT1rVvVMnAfWnt%2FylbFwDwWNG0rx7%2FFkbR%2Bt%2FOZShVFBrBLLSV1acqANw7TOlmXEUP10RTe55PRM%2BDZM%2BVxOegqVHlV2PMfSUtsX3b9Dw%2FvgEuapgzL%2BYja%2B6bXojZzxshc%2FiX95P3ypGlaYsBysqacHJYJZNgeI32LMcscjph2tiEGRXqvDSP%2BrA17zGdQRqU8%2F3tfIhoyguVQj9%2FbtKBNGKp5XBADGuHudXF9ow5sHbwQY6pgHiQHm6x6SNrRGjj0%2BkzRLXj1N%2FOoJ8z5vcR3HwmhGyLyGAnFJMs%2FtI6Yipw%2FbucLHo0UmSPhU2ZyzExTGAoPWiM%2BUkoCMa2%2B43mReXBUIVWT%2FFrLflKSyTwbKdD5hNgk3aVNV1JxNQzuEP63UtUukDb8yOsPqlpZxSSP6LVpqgvpEn%2BWVw%2Ff02NCUReqogdmbaL8YreTba03CClL8Rp0ao8Xbr7Mfw&X-Amz-Signature=de5169b2c5753d02bf54c86651c3b814d3e2ccbb5283b2d5be019c9e590f5083&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ46GVE4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3hQybsngfF2AxKxQgJLLV24xBWYS%2BEHz6niqVvSlF3AiArznX%2Fvy1tPVXkncxu0xY7XESrpbaQ3y4l85Tv5AtaiCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMJRIfpofD9HduQc3aKtwDMjxEhuaFJhQTJyGt9e1nxr2IuZwCsWk9GijVlF08dQg9s2eSgEqvIjfZHxBleZrzqvvFw5G8U9sock6df2%2BNpOZvlk8bH0UdPOYQuou7U%2BlEFt338rQNeXon6wREX5T4AyuKRy1xn81VJlSUXOcKaYgnDPnKz0XNa%2FMSEnskr%2B%2FyffMDBsW2q7DMSlK4cNDd0OLTdqck9CDz7xfogq%2FrGysfiu1VgK7cS946uRqhd8pI9pibIE037ze8KDgRfmJJqOtXzo64oO3liUyu%2FXfjKIOwHoxpOUOT5XA8OdsVg8aE4AqSX0y1NXiF2n6nrp4hlcQeN7G2IWrwCvyZ4pv3Q42PqIHmHuMLN2vAyZOXn65jSbSxaHPsznGclBdTVaTZYxEDP5AW0uspyUDcqxQRT1rVvVMnAfWnt%2FylbFwDwWNG0rx7%2FFkbR%2Bt%2FOZShVFBrBLLSV1acqANw7TOlmXEUP10RTe55PRM%2BDZM%2BVxOegqVHlV2PMfSUtsX3b9Dw%2FvgEuapgzL%2BYja%2B6bXojZzxshc%2FiX95P3ypGlaYsBysqacHJYJZNgeI32LMcscjph2tiEGRXqvDSP%2BrA17zGdQRqU8%2F3tfIhoyguVQj9%2FbtKBNGKp5XBADGuHudXF9ow5sHbwQY6pgHiQHm6x6SNrRGjj0%2BkzRLXj1N%2FOoJ8z5vcR3HwmhGyLyGAnFJMs%2FtI6Yipw%2FbucLHo0UmSPhU2ZyzExTGAoPWiM%2BUkoCMa2%2B43mReXBUIVWT%2FFrLflKSyTwbKdD5hNgk3aVNV1JxNQzuEP63UtUukDb8yOsPqlpZxSSP6LVpqgvpEn%2BWVw%2Ff02NCUReqogdmbaL8YreTba03CClL8Rp0ao8Xbr7Mfw&X-Amz-Signature=bafb54cb2826d9ef9ffefdf2f227b8384bb417e9f1a7abdde7447c06b9c20964&X-Amz-SignedHeaders=host&x-id=GetObject)

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
