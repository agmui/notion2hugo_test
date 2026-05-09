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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN5WFUUL%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIH%2Frq91x7hbXlKl5ieVYfaZ1v7wbI9k4zXGPbcdPmkGCAiEAwTxBJlVWAJ8uIlP%2FfMx%2FkXjmi5wsN%2F8WUUIDJSKqmBsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzrZrVG%2By3OcYySQCrcAzlFav2UBfu8VrLBS0OlbpgV1WRUd2HGWkUOuEh%2BMcTZIrlKpFATF%2Ba83QEaVZ9T9Ze0qzMwl%2BTUEIOlRf9SRmLSdkpE5S8MfgHhpyazSDMMkpqkizzLieMEoMw84GBBqXiViTQkTUYoK2sYDCGC5X0C0O88b1aqrqDxXyLk5gtgqTHaaRYrkdAO5n56DDdvBB9nodS8%2BZ1DCoaLYthZqfGia6lgSxlJ5mOxf9shHEsKpYbJr5b0TBlok1qt1lhPLI%2BdMN1mihvOfbtGVuXzh%2FcYrqAt6C9UUfDGYe2mgsgD9F7ZX%2BRlOzU2Sux%2FJBl0BnGnzWphr5nI0u%2F5ZnrIoAqR2KRiPdpZLGDFbNXSV3s3BupnLSIunITwN7SUWBxS1R0EM4GUhgJKVoHxUjgSgRsbnErlPps2hUAqTYiVejrik1mlOWizcHS8OUYjeePDP4nBhyF822VjOVuCPF8X9vzHS8pqUF8rXikcoUqOTyhLYOCli1z8NHEyX3DX31Ed9yc6eWdQ9EbzM59aFFDuxdWS43AXahbPTRj4zZdMzt8b%2BEbEdJQGhOW%2FE5wkTxtYOfxHqG10CBx2g7gJybOa8QCz2r7bkKjpPHzUo7eZaR3S87bhWQnB%2FOKv7WyJMJq0%2Bs8GOqUBgmvi4b8668r7TtFqNUTYwSpW09Ct60dwPJLdZMIMgxUBqOHTDweL2XoiThx1uRh0RRWpxr858H%2FlEfVtwEkBoEFo%2F9PpWim3vT7Z1t1y%2BE4g2wxXlsmo4ObIkACVSCRPeSUdmf0SSQXvh5Y3s%2B3bD5MtcLZqivtQnIcBDQxg2ixiEmijI3IXoGvLXPGDOSeAn7dIcd0UDdUHjxeXvphUssh4n%2FG1&X-Amz-Signature=dab6753c4c544e45f8515282301a44e242c473f4a61b7932e05a5e2921d853d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN5WFUUL%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIH%2Frq91x7hbXlKl5ieVYfaZ1v7wbI9k4zXGPbcdPmkGCAiEAwTxBJlVWAJ8uIlP%2FfMx%2FkXjmi5wsN%2F8WUUIDJSKqmBsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzrZrVG%2By3OcYySQCrcAzlFav2UBfu8VrLBS0OlbpgV1WRUd2HGWkUOuEh%2BMcTZIrlKpFATF%2Ba83QEaVZ9T9Ze0qzMwl%2BTUEIOlRf9SRmLSdkpE5S8MfgHhpyazSDMMkpqkizzLieMEoMw84GBBqXiViTQkTUYoK2sYDCGC5X0C0O88b1aqrqDxXyLk5gtgqTHaaRYrkdAO5n56DDdvBB9nodS8%2BZ1DCoaLYthZqfGia6lgSxlJ5mOxf9shHEsKpYbJr5b0TBlok1qt1lhPLI%2BdMN1mihvOfbtGVuXzh%2FcYrqAt6C9UUfDGYe2mgsgD9F7ZX%2BRlOzU2Sux%2FJBl0BnGnzWphr5nI0u%2F5ZnrIoAqR2KRiPdpZLGDFbNXSV3s3BupnLSIunITwN7SUWBxS1R0EM4GUhgJKVoHxUjgSgRsbnErlPps2hUAqTYiVejrik1mlOWizcHS8OUYjeePDP4nBhyF822VjOVuCPF8X9vzHS8pqUF8rXikcoUqOTyhLYOCli1z8NHEyX3DX31Ed9yc6eWdQ9EbzM59aFFDuxdWS43AXahbPTRj4zZdMzt8b%2BEbEdJQGhOW%2FE5wkTxtYOfxHqG10CBx2g7gJybOa8QCz2r7bkKjpPHzUo7eZaR3S87bhWQnB%2FOKv7WyJMJq0%2Bs8GOqUBgmvi4b8668r7TtFqNUTYwSpW09Ct60dwPJLdZMIMgxUBqOHTDweL2XoiThx1uRh0RRWpxr858H%2FlEfVtwEkBoEFo%2F9PpWim3vT7Z1t1y%2BE4g2wxXlsmo4ObIkACVSCRPeSUdmf0SSQXvh5Y3s%2B3bD5MtcLZqivtQnIcBDQxg2ixiEmijI3IXoGvLXPGDOSeAn7dIcd0UDdUHjxeXvphUssh4n%2FG1&X-Amz-Signature=f6a2412a91253f8a2bfb0dabc6266b4d5be7e913f08b08bff5f0d452aaa50f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
