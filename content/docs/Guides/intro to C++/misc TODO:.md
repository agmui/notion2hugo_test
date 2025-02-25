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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXVX5LI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCgTHiroN8PnptvhCyV7L6Yhdgbln3XCUP2GMwdC77yWAIgMp7o5pHpap4WCLfOMoYm3%2FwrjSSPSmez4pXe9IFFTlAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIrTGleGgnwP%2BiboWSrcA2JNs0LXqTfU%2BZl29scykDvtwPQD5%2FHRmdg38d%2BFuF98ItVyF8b2RkAk3DrdqUcr8lAPtov6x%2FJA1%2Fu6MKkeDNk5MTpDoPUl0YZwlxoMSUH8IE4fDZaoj8dLpQs2SQRFrPaZcI%2BBzUFcq1%2BUWlQRzGg3BjnVLWvEdr8paEvsrch0EAfjvwJbTAOzNPrZ0JtkFEZndUfhkl%2FMtIlPpEdHOzKqM%2FWE01sau2QphqgAKz0KY5TgOQ3oGHUlSDZ1AHje19IaDIm40UgHOZZr2JDhDUsVCWGE4dG6cL85kmDQ1e6KXN1VqCzJJGNo%2B58kq6DKUOdzbFWo2Br4b4G0W2JlQW63IgmWLznS0GGIBp8c6qYfEpq4ESBO4plwDwn0EtaePm0r0lMvQy0P0v0y6A1XhqmGIRNLBGbXuxDHSCIUL6T9udJeenk8KP8%2BG2RYwcJbQ%2FoKKwiYzd8ecNgvKmtqphDRcFaDCO7QIxd5J39XknJtXGJSG24AuryM7bo%2B8NhoxY7xArzUxucFYxwiYawJXQAXrZ39GhT6xoi3pK%2BVEdm%2B5pNnYA3RXHxl09r2tWm46O%2FEDpAn%2BUYAKmld%2Bk7xxpkaCnMq%2FOgKtqBqQK8lktUoQOz62dge66b7VUNhMP%2BB%2Bb0GOqUBQ1VfOwpd3%2BiKiotrriCeH5MHsS1DqAnQYMhw%2Fr39SOxoXjFWbi50E%2F5KpWmj9OwoU4cNwJ0JwJ6sOIl9lZGXXwBx7rrBt6RSQ0cdSE1tkgAym5nZrB1vCvjrtQLElvL9EX8o%2Bmu8miswUavJ3w8zTmhfNpGLDGPeU5FYk1qqjbNgLFdbmZYTlzxvtngAXDkaCQzoiRXiOVyTqTCQMoIBOdLNLln4&X-Amz-Signature=bc2c426d68b732f0bf2e48169a77656acd9b52c2a8c83284c6f0a57bfcb8c387&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXVX5LI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCgTHiroN8PnptvhCyV7L6Yhdgbln3XCUP2GMwdC77yWAIgMp7o5pHpap4WCLfOMoYm3%2FwrjSSPSmez4pXe9IFFTlAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIrTGleGgnwP%2BiboWSrcA2JNs0LXqTfU%2BZl29scykDvtwPQD5%2FHRmdg38d%2BFuF98ItVyF8b2RkAk3DrdqUcr8lAPtov6x%2FJA1%2Fu6MKkeDNk5MTpDoPUl0YZwlxoMSUH8IE4fDZaoj8dLpQs2SQRFrPaZcI%2BBzUFcq1%2BUWlQRzGg3BjnVLWvEdr8paEvsrch0EAfjvwJbTAOzNPrZ0JtkFEZndUfhkl%2FMtIlPpEdHOzKqM%2FWE01sau2QphqgAKz0KY5TgOQ3oGHUlSDZ1AHje19IaDIm40UgHOZZr2JDhDUsVCWGE4dG6cL85kmDQ1e6KXN1VqCzJJGNo%2B58kq6DKUOdzbFWo2Br4b4G0W2JlQW63IgmWLznS0GGIBp8c6qYfEpq4ESBO4plwDwn0EtaePm0r0lMvQy0P0v0y6A1XhqmGIRNLBGbXuxDHSCIUL6T9udJeenk8KP8%2BG2RYwcJbQ%2FoKKwiYzd8ecNgvKmtqphDRcFaDCO7QIxd5J39XknJtXGJSG24AuryM7bo%2B8NhoxY7xArzUxucFYxwiYawJXQAXrZ39GhT6xoi3pK%2BVEdm%2B5pNnYA3RXHxl09r2tWm46O%2FEDpAn%2BUYAKmld%2Bk7xxpkaCnMq%2FOgKtqBqQK8lktUoQOz62dge66b7VUNhMP%2BB%2Bb0GOqUBQ1VfOwpd3%2BiKiotrriCeH5MHsS1DqAnQYMhw%2Fr39SOxoXjFWbi50E%2F5KpWmj9OwoU4cNwJ0JwJ6sOIl9lZGXXwBx7rrBt6RSQ0cdSE1tkgAym5nZrB1vCvjrtQLElvL9EX8o%2Bmu8miswUavJ3w8zTmhfNpGLDGPeU5FYk1qqjbNgLFdbmZYTlzxvtngAXDkaCQzoiRXiOVyTqTCQMoIBOdLNLln4&X-Amz-Signature=5e258c9e732fd69a9124484fa3f1cdafe27267753925ce66fbd1725d189f3528&X-Amz-SignedHeaders=host&x-id=GetObject)

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
