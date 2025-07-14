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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTC6D4ZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD5WMox6XBgxrUeUcXvVafpQIt4UCBspHgoigHb7yxUIAIgQRwfyyQxT3f4zpu0kq6v98kmpnZoSTOYUZN4kdyomyQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEciBO48rPg%2F9o%2FlfyrcAxTPsA7qcD3ykSu2gk%2F8txWOczs3JLmVwF3%2BufsQVoXfY1JfXWv5XiaqxBh2EUgqKoHQ8jiu3Lv64%2F%2BOgeaT6O80z%2FVCS1srI0VUnBriQNsYJRy46BTZtzcHtbBIXiphNdVz4nEwgJ97BNDitbRA11J3xg9ammghwfVoliu5yKHChgL9hdtCFqxsXsxSu5nIcTQOF%2BSC6t0ktJF5Oia8gi4P1FD29mgIEuxZdeqpbhgbNFCQygZCvc%2BxMFmf2fe4URtXjjd1ybUl9kejOaiqvTCyrls33JNN6bauv9puLVWPg08Yp0JyaY3s%2FkcGehpFbtWHxuRUs6QocMyvRdjTAVcwj7W%2Bg0aSaLy6h%2FSzCOeK6HUqQdtlUc8ZSdB%2FYys330VYzBvVtsVcemVeIeJRcotzTeRxFa4GtuTG5FrBCDVsyhapVO4HLs9V6w%2FuNTeKAf5McJlmKp6%2FJj4V5IrwvZGEeNEjRIsFEn%2BkwnuVz89pDD4MiGzYX%2F3KRp0HXafQi85Q7qg4lCPncdaz75d2Ha5yRA73U0JIlVJmcnfSe0spZsS259oVeJK5%2BsCygK%2BX2sTGlkRC%2BXMfX7kTf1brTBpk7CSt6mo%2FN1gOuw0HyXe%2BzrWFdAZJG8kWVtT%2FMP%2BF1MMGOqUBTRhDWOIpzDo133Jm8g3HAOvyQKoabCJpKkDFq7HCb1nDEpouNYc%2Bsm7oYLc7npPi2UmQtUGqmW7QxFxe8Tk2rsPHhK2TNTNX%2FT%2FkjECcQxCGxj9lozcxCuT3xTyJWLrr410h%2BHgi%2FbysUrIdBsXeHM8vvJ1cG9cXnnLFvCBI1Hq2uLBgxwJ9%2FQhUofZf4qI8sN%2Bn8%2FcA6ebL%2Fp0YLVqFlBvFM6IJ&X-Amz-Signature=3b3aa869e33ae62f4d39c8ebe0dc8e1563e950f5e7393933a8a5d19b6d1370ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTC6D4ZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD5WMox6XBgxrUeUcXvVafpQIt4UCBspHgoigHb7yxUIAIgQRwfyyQxT3f4zpu0kq6v98kmpnZoSTOYUZN4kdyomyQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEciBO48rPg%2F9o%2FlfyrcAxTPsA7qcD3ykSu2gk%2F8txWOczs3JLmVwF3%2BufsQVoXfY1JfXWv5XiaqxBh2EUgqKoHQ8jiu3Lv64%2F%2BOgeaT6O80z%2FVCS1srI0VUnBriQNsYJRy46BTZtzcHtbBIXiphNdVz4nEwgJ97BNDitbRA11J3xg9ammghwfVoliu5yKHChgL9hdtCFqxsXsxSu5nIcTQOF%2BSC6t0ktJF5Oia8gi4P1FD29mgIEuxZdeqpbhgbNFCQygZCvc%2BxMFmf2fe4URtXjjd1ybUl9kejOaiqvTCyrls33JNN6bauv9puLVWPg08Yp0JyaY3s%2FkcGehpFbtWHxuRUs6QocMyvRdjTAVcwj7W%2Bg0aSaLy6h%2FSzCOeK6HUqQdtlUc8ZSdB%2FYys330VYzBvVtsVcemVeIeJRcotzTeRxFa4GtuTG5FrBCDVsyhapVO4HLs9V6w%2FuNTeKAf5McJlmKp6%2FJj4V5IrwvZGEeNEjRIsFEn%2BkwnuVz89pDD4MiGzYX%2F3KRp0HXafQi85Q7qg4lCPncdaz75d2Ha5yRA73U0JIlVJmcnfSe0spZsS259oVeJK5%2BsCygK%2BX2sTGlkRC%2BXMfX7kTf1brTBpk7CSt6mo%2FN1gOuw0HyXe%2BzrWFdAZJG8kWVtT%2FMP%2BF1MMGOqUBTRhDWOIpzDo133Jm8g3HAOvyQKoabCJpKkDFq7HCb1nDEpouNYc%2Bsm7oYLc7npPi2UmQtUGqmW7QxFxe8Tk2rsPHhK2TNTNX%2FT%2FkjECcQxCGxj9lozcxCuT3xTyJWLrr410h%2BHgi%2FbysUrIdBsXeHM8vvJ1cG9cXnnLFvCBI1Hq2uLBgxwJ9%2FQhUofZf4qI8sN%2Bn8%2FcA6ebL%2Fp0YLVqFlBvFM6IJ&X-Amz-Signature=7b726c2ae2328484d878ce2392a980765426d825eb298daf0659d3ee2f21187f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
