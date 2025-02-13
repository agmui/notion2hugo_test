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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQH7LWHF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC3h3HxENiEpNNe7fQ4EpEMRLUxv2fl%2BtMOvYid%2FEX3QIgf5JgxRy0vbv50xSt2Wbu%2Fy34tPEfflWZaenXxD5qd78q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLgGSSLCfKAM5%2FFlfSrcA27iejxsuG1dX00WSFbRpzmv7Tt5DcLfnltVTrqkrgqJa53z5kC676jHR2KGRrFd%2B1iTX0FXldzcRJvAcsEijA6Esw10frxx0OOisFdB55%2FM9wmrjGLeVGn9slr5s2W%2BbXTY4ylD1cZnPDYetoYIqrnstH5rCpc0FuRsuuJvg6tTS4arelJK1%2BMv7vgXKWXKtjmBme%2B8kNrrpLAjGD5WdhyOjPrdvhawZrNPOwCus%2Fw3%2BSpi5q3eK%2FPGS%2BLeeXb3nu%2FkvPt2DGx2PKzaFI%2BeQv26X6uTHEHrtZt9X6Wjyj93jIgKwv0M%2FYCdEvkBfuGk%2Bx6Ky%2FD44Pp%2FeQzs3cT%2BdzFwDgzSwAdRkdw%2FTrDO%2FNynyl3IFYH47eeW9I9pw9MALNYzE%2FKOM2E4y57mrO0bqIPYHFH%2Fg2%2B%2B1iq5%2FNmbP1DQMjNinx%2FHbKs872XgOSNXFLP0jHlGyZC%2BaudPjK1zgiEHPc%2Fz2%2Fivs6iXoCmSPs0eKQxd4vRwnOVy%2F4mBs%2BojhQRrcMbMXP%2F9voSNY2%2BzOaFb9pxdcwefsZqwmkM8pVCyOGB7I3mzUvTi1DHhkoLsw8jGoAm4c86iiQa1lpAov9dXD6NJglOv8f6RkOK1%2FEapFmszEwPuFPIv7lQlMN%2FBt70GOqUBqm7edxQutJpVi7JHSO25y9pqgIIKG2RNH1ot%2FnQHGzcXHBS%2B7MoUkoLbsFET8ZqhskTgj5bVk36hn1xaulHgN%2F6NzXwqlbInVjc6DN6iowKJtQ7FfhdZOZlupYXk5SsKJ0sINg0nHu8CfqaKQP1wLxddj%2FY5auWQMU0T1oEu9p%2Bz4zo1tGFphW6lBbY%2BZ6p3a2ZDhab67Q7yHQL5AyYmuCbqkCZ0&X-Amz-Signature=995eee64e7086cafaba3a3f67d0cfc4adaa274e3ad00c77d9019b61e295d2db5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQH7LWHF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC3h3HxENiEpNNe7fQ4EpEMRLUxv2fl%2BtMOvYid%2FEX3QIgf5JgxRy0vbv50xSt2Wbu%2Fy34tPEfflWZaenXxD5qd78q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLgGSSLCfKAM5%2FFlfSrcA27iejxsuG1dX00WSFbRpzmv7Tt5DcLfnltVTrqkrgqJa53z5kC676jHR2KGRrFd%2B1iTX0FXldzcRJvAcsEijA6Esw10frxx0OOisFdB55%2FM9wmrjGLeVGn9slr5s2W%2BbXTY4ylD1cZnPDYetoYIqrnstH5rCpc0FuRsuuJvg6tTS4arelJK1%2BMv7vgXKWXKtjmBme%2B8kNrrpLAjGD5WdhyOjPrdvhawZrNPOwCus%2Fw3%2BSpi5q3eK%2FPGS%2BLeeXb3nu%2FkvPt2DGx2PKzaFI%2BeQv26X6uTHEHrtZt9X6Wjyj93jIgKwv0M%2FYCdEvkBfuGk%2Bx6Ky%2FD44Pp%2FeQzs3cT%2BdzFwDgzSwAdRkdw%2FTrDO%2FNynyl3IFYH47eeW9I9pw9MALNYzE%2FKOM2E4y57mrO0bqIPYHFH%2Fg2%2B%2B1iq5%2FNmbP1DQMjNinx%2FHbKs872XgOSNXFLP0jHlGyZC%2BaudPjK1zgiEHPc%2Fz2%2Fivs6iXoCmSPs0eKQxd4vRwnOVy%2F4mBs%2BojhQRrcMbMXP%2F9voSNY2%2BzOaFb9pxdcwefsZqwmkM8pVCyOGB7I3mzUvTi1DHhkoLsw8jGoAm4c86iiQa1lpAov9dXD6NJglOv8f6RkOK1%2FEapFmszEwPuFPIv7lQlMN%2FBt70GOqUBqm7edxQutJpVi7JHSO25y9pqgIIKG2RNH1ot%2FnQHGzcXHBS%2B7MoUkoLbsFET8ZqhskTgj5bVk36hn1xaulHgN%2F6NzXwqlbInVjc6DN6iowKJtQ7FfhdZOZlupYXk5SsKJ0sINg0nHu8CfqaKQP1wLxddj%2FY5auWQMU0T1oEu9p%2Bz4zo1tGFphW6lBbY%2BZ6p3a2ZDhab67Q7yHQL5AyYmuCbqkCZ0&X-Amz-Signature=891174a07d094a5b234c333858a2541da0a6ba1ea891e8ede72504e518aeae87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
