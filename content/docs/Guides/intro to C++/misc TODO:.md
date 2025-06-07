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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UALOMAM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLY8tgAU5U%2Ba9c%2F%2F28zVhtLp7Swgval1KC8NbRXUWEZAiBpkHANhQQQdBrfLuxElR%2FwXZ5YG0Guu3eCUoBUDfLEiyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMETXN13XWq%2B992dvbKtwDoh%2FMDfIJhytXWJ%2FuxcCE1xow6Ax%2BP%2Bf%2BSPHA%2FZL5OcJWYs4U%2BgRUyGyZpdRQLY9Bc1JPGEiptmwtrwv4GpDjyILo1svXfWeyde3qZUumeZLjXuSThsMy%2FE7LXy8YXdKpRp9VfacWAG%2BKCHFhGSB7Z8Tnx%2BPQ%2BZ1znohVjDk%2Ff0pjAbqRU0TnwL8w%2BVY1Vd7xK9Luy%2BkyRyWoC%2F7gQgupuZ81mMCtoWmbbsUB3Pd2iRycynhHWaZ5I%2FTzure3t7U7hy7cQizklFkOZrp5ZOw2HDOapRD2RLKa7oxuGaQpM6vnOCsMomA5xf2B7Mg7C6vKgsdtXImsEb6fOg6cK8vsAMmdB7qbdHc0cEljIGzK0LUHmbA0gSN7eirDC4CYsF1Z0%2BYpKaiGpZ5syd%2BI6E3R%2BvvqAz3lToJ766fjE5%2BkrWODkIZTO1Nz0vYSJQaX%2BL6A066eoKjWkRXRXqyhDwpRpopHARE%2FY%2B5GR5OLeXDnDQLd%2BniFQ%2Bo3JOvxX7nPmWTxE4Le22znCDpEgCmemhkEU%2FElB9JCOl%2FMQrPGDhMClKTi%2FXn9pHu0OiUSY0MgslQz2OK6XtCIlSE7%2F%2BtXtPJ9ga13bsfDYSXShqO1Hl9n%2B%2FGVeRrFGyQWm%2FSci2gw84CRwgY6pgFrnRHEr8lYF6EzGdZXc5eZXUogj3MAlfYuPDrQYY1LYgWMR7awODF5s%2F8xixGZk8xm%2FSB8PmAIsFVg61diuysMKToQRl42eJ4tZ2MHDvKjTuxqi3nZx3YLuT73TljVll8jzqBzbBDssSZNXiqO1ntqrKBLdhUMuNTB74LWVh79MuDRU7niiwgQqnFcCTwOHscG4Yh2Xv7%2BRQ%2BS%2BlwIApIlAEt50o21&X-Amz-Signature=814f7d0d3c124cdc842838df84be2854c7cda8f1f045725f47df034c1e7d64ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UALOMAM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLY8tgAU5U%2Ba9c%2F%2F28zVhtLp7Swgval1KC8NbRXUWEZAiBpkHANhQQQdBrfLuxElR%2FwXZ5YG0Guu3eCUoBUDfLEiyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMETXN13XWq%2B992dvbKtwDoh%2FMDfIJhytXWJ%2FuxcCE1xow6Ax%2BP%2Bf%2BSPHA%2FZL5OcJWYs4U%2BgRUyGyZpdRQLY9Bc1JPGEiptmwtrwv4GpDjyILo1svXfWeyde3qZUumeZLjXuSThsMy%2FE7LXy8YXdKpRp9VfacWAG%2BKCHFhGSB7Z8Tnx%2BPQ%2BZ1znohVjDk%2Ff0pjAbqRU0TnwL8w%2BVY1Vd7xK9Luy%2BkyRyWoC%2F7gQgupuZ81mMCtoWmbbsUB3Pd2iRycynhHWaZ5I%2FTzure3t7U7hy7cQizklFkOZrp5ZOw2HDOapRD2RLKa7oxuGaQpM6vnOCsMomA5xf2B7Mg7C6vKgsdtXImsEb6fOg6cK8vsAMmdB7qbdHc0cEljIGzK0LUHmbA0gSN7eirDC4CYsF1Z0%2BYpKaiGpZ5syd%2BI6E3R%2BvvqAz3lToJ766fjE5%2BkrWODkIZTO1Nz0vYSJQaX%2BL6A066eoKjWkRXRXqyhDwpRpopHARE%2FY%2B5GR5OLeXDnDQLd%2BniFQ%2Bo3JOvxX7nPmWTxE4Le22znCDpEgCmemhkEU%2FElB9JCOl%2FMQrPGDhMClKTi%2FXn9pHu0OiUSY0MgslQz2OK6XtCIlSE7%2F%2BtXtPJ9ga13bsfDYSXShqO1Hl9n%2B%2FGVeRrFGyQWm%2FSci2gw84CRwgY6pgFrnRHEr8lYF6EzGdZXc5eZXUogj3MAlfYuPDrQYY1LYgWMR7awODF5s%2F8xixGZk8xm%2FSB8PmAIsFVg61diuysMKToQRl42eJ4tZ2MHDvKjTuxqi3nZx3YLuT73TljVll8jzqBzbBDssSZNXiqO1ntqrKBLdhUMuNTB74LWVh79MuDRU7niiwgQqnFcCTwOHscG4Yh2Xv7%2BRQ%2BS%2BlwIApIlAEt50o21&X-Amz-Signature=4f8de0d8b16548219249cdc84bf4c21d1575eb9eaef3aefcc50fa0032e0babc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
