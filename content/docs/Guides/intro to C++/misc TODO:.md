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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQIZULE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCUjx5Ud9AysG5WQWDYC09Gsf7S4MyGSCJ8WVCnTExDRwIgOMU10uSwI2ukXqot%2FJCvdKX3Bk8jq6rwDrj7KwoYJUMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLhbfGrQrCLwCk4p5yrcA45SEt%2Fhu6RgQMvqiraQY6knu6KOo0CzXbgI2ZMYSkqpkpduzbTwA6%2Fd6pR9cqhIGanlAyCkysYOwYbl2pqiiU%2B4nyB8mVB5IzjdgiMpu7mK7Yl46lHbeclO%2BmyF3ZiaBS1Iznmp5Ff%2BPYaBcF5YEDu9CPESuLGb760GtxvETTjJnu2CZoPQj33C3RtJLY74lD9fzmw4FqDjhqfHPTW3a5M9n351xhY6qJkpVJQG4LBkgbPeYXeMAW3CBChGKIjOO30tTyGEDwo85DKEiroXEc2BFU307GP0OnqWSYdecmOgA%2FW9wTZpczlj3N6xiXdTpXhNGPfwxW22zJIkJliTja63nhfnFygFzR60ZppbvopCSVQq0tPP9lR11E2FIXwnlDCCnsMUlI9Br48UfizQsD6AAPt1cPJJQBtwxuQzgY1me03RKLByltZ4iBZAnD078JmGCQwfNpZ7ShGRdud%2BcXE%2FgDgGbfVc2K412avsi0T45LWM6BiRW%2BbrlKSaZCJS4%2Fmu0TCdpPU36kbLh4ocVodz0LXWJ8Bp4n5qUcYa2%2BOHzwzA2fCH%2Bkj%2BP%2BSXIt3Y3xJPOs5eU9OThWtEQj150tzrtIZ7A1Tt3MnTGUWMKluUDneKLPEXWkTJIP3cMLfEqsMGOqUBwiaDyIuX4xlfRVjECMMzYi2rohUCYL5yVFsRXKFlj8Tkjo0Q04GXZgHBBPhyo6yHQpci4Dh29IUqZuwjgDd%2FGvSOuU27K3lwNy3yUfLbtEttmjbXFFxeUJZZAzc60u2Ifjix9JUjLrH89uzdNBdwUdqIrtgztx5ns6vqKqHsuVL1hRtkAQK8sSp%2FCU2Kpubprd9PNeJtCrxSPjKtcCZsfh9rC8a3&X-Amz-Signature=465b015fdab884e898cfd0d3cc83ee455c87cc2a6e3acd090e3729f53e2916a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQIZULE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCUjx5Ud9AysG5WQWDYC09Gsf7S4MyGSCJ8WVCnTExDRwIgOMU10uSwI2ukXqot%2FJCvdKX3Bk8jq6rwDrj7KwoYJUMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLhbfGrQrCLwCk4p5yrcA45SEt%2Fhu6RgQMvqiraQY6knu6KOo0CzXbgI2ZMYSkqpkpduzbTwA6%2Fd6pR9cqhIGanlAyCkysYOwYbl2pqiiU%2B4nyB8mVB5IzjdgiMpu7mK7Yl46lHbeclO%2BmyF3ZiaBS1Iznmp5Ff%2BPYaBcF5YEDu9CPESuLGb760GtxvETTjJnu2CZoPQj33C3RtJLY74lD9fzmw4FqDjhqfHPTW3a5M9n351xhY6qJkpVJQG4LBkgbPeYXeMAW3CBChGKIjOO30tTyGEDwo85DKEiroXEc2BFU307GP0OnqWSYdecmOgA%2FW9wTZpczlj3N6xiXdTpXhNGPfwxW22zJIkJliTja63nhfnFygFzR60ZppbvopCSVQq0tPP9lR11E2FIXwnlDCCnsMUlI9Br48UfizQsD6AAPt1cPJJQBtwxuQzgY1me03RKLByltZ4iBZAnD078JmGCQwfNpZ7ShGRdud%2BcXE%2FgDgGbfVc2K412avsi0T45LWM6BiRW%2BbrlKSaZCJS4%2Fmu0TCdpPU36kbLh4ocVodz0LXWJ8Bp4n5qUcYa2%2BOHzwzA2fCH%2Bkj%2BP%2BSXIt3Y3xJPOs5eU9OThWtEQj150tzrtIZ7A1Tt3MnTGUWMKluUDneKLPEXWkTJIP3cMLfEqsMGOqUBwiaDyIuX4xlfRVjECMMzYi2rohUCYL5yVFsRXKFlj8Tkjo0Q04GXZgHBBPhyo6yHQpci4Dh29IUqZuwjgDd%2FGvSOuU27K3lwNy3yUfLbtEttmjbXFFxeUJZZAzc60u2Ifjix9JUjLrH89uzdNBdwUdqIrtgztx5ns6vqKqHsuVL1hRtkAQK8sSp%2FCU2Kpubprd9PNeJtCrxSPjKtcCZsfh9rC8a3&X-Amz-Signature=9d9ed57f5ec361d45dd24b75b408b4e9a88143c56fe965263c43de614b046ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
