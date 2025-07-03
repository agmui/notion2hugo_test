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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NNP6TL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCMUY7bUge7MXBtJps85Jy14BCo9LFaE%2FIzOFlscM3VPAIgegZj5XCNwLrOA9Xv2JbiE%2BvNVStidcNCPxV8rs3Y3dMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDhELigUBr2BAVufpSrcA04UEvMjpIk%2BwTF59AXLILHRS0MoINZ56nhDfab0xZjz4JHqjpF5C6K8cqovuKxOYx%2BdiK4g6n8u2E9dScv1WJPJJhxdZC954MUM6N1ag9JXywD2V6Uhj70ymrL%2BAIjy8Ml%2F%2BrpW%2BpmjJ6ScbO0vhOQArXx8beGvfT4YaaBjVD8ohIt6L9rmaEaED2S4i9dHufbPcc3JFoz%2BeBA0%2FHmkUOAWVryNsYRxkpbgOGoQpsghOrTkKXVVrEcwIryMCDKkV13eactQURwyJ2n3lJ%2F1XAZBKuFFp1EXrQ7y3eSutPVrlbbeDgxYTbZstBxgtBEq97vEHS0HJr%2FxVHjFW5qEZrzLGpH3mbJoo8AA9hsgCJTtUX56UDIkS0JYl6W7wDIxOSUs6eTnHTnVGQlIJXAGV4DucSXCBWw06CiuQcRrsfwZhGawCFUsGvlllh1w7EgD4d4yIsvf2HF0F%2BreLHlg68YJNdALsBCqpDZuLnw4RYtbYDJEahW%2BTg%2Bj3GCnc8iwPuVynCR6mUD%2Fkab6G4MsXJBcOYQo7t3q4zq%2FqNdzNDhQG4NuJ6M2eePiGFQ6LZQKj9p0XbcE8K7dpIAYBq2OW12UGQ4QTpcLy7nMukozcfeinJXZbAEFj1WIK01ZMJfimcMGOqUBppWGQfw9jIqvUbLbcMSGdB0iXabwlWZef%2BUXCaanWGc3GGwY1%2F1QuEwiSNwtNhXetSmgd56gdcd%2BTat3Y8dy0GJ1ZQq2wpSq1qVBzxsYFeQrTtU6EP%2BPevISTHDuVqVeUqd5yiDwlfBYTVHth0wsOehOx%2BB4Fxj09%2BRIlsA28swSKX26aovvzdSXlCQRVb8gtgONLX5b9jd4xeOYVZs4PpFM9vZx&X-Amz-Signature=ddd21aa66da180a82484d13c31bb9557bb0da5c66d9fde247a804282baf0c3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NNP6TL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCMUY7bUge7MXBtJps85Jy14BCo9LFaE%2FIzOFlscM3VPAIgegZj5XCNwLrOA9Xv2JbiE%2BvNVStidcNCPxV8rs3Y3dMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDhELigUBr2BAVufpSrcA04UEvMjpIk%2BwTF59AXLILHRS0MoINZ56nhDfab0xZjz4JHqjpF5C6K8cqovuKxOYx%2BdiK4g6n8u2E9dScv1WJPJJhxdZC954MUM6N1ag9JXywD2V6Uhj70ymrL%2BAIjy8Ml%2F%2BrpW%2BpmjJ6ScbO0vhOQArXx8beGvfT4YaaBjVD8ohIt6L9rmaEaED2S4i9dHufbPcc3JFoz%2BeBA0%2FHmkUOAWVryNsYRxkpbgOGoQpsghOrTkKXVVrEcwIryMCDKkV13eactQURwyJ2n3lJ%2F1XAZBKuFFp1EXrQ7y3eSutPVrlbbeDgxYTbZstBxgtBEq97vEHS0HJr%2FxVHjFW5qEZrzLGpH3mbJoo8AA9hsgCJTtUX56UDIkS0JYl6W7wDIxOSUs6eTnHTnVGQlIJXAGV4DucSXCBWw06CiuQcRrsfwZhGawCFUsGvlllh1w7EgD4d4yIsvf2HF0F%2BreLHlg68YJNdALsBCqpDZuLnw4RYtbYDJEahW%2BTg%2Bj3GCnc8iwPuVynCR6mUD%2Fkab6G4MsXJBcOYQo7t3q4zq%2FqNdzNDhQG4NuJ6M2eePiGFQ6LZQKj9p0XbcE8K7dpIAYBq2OW12UGQ4QTpcLy7nMukozcfeinJXZbAEFj1WIK01ZMJfimcMGOqUBppWGQfw9jIqvUbLbcMSGdB0iXabwlWZef%2BUXCaanWGc3GGwY1%2F1QuEwiSNwtNhXetSmgd56gdcd%2BTat3Y8dy0GJ1ZQq2wpSq1qVBzxsYFeQrTtU6EP%2BPevISTHDuVqVeUqd5yiDwlfBYTVHth0wsOehOx%2BB4Fxj09%2BRIlsA28swSKX26aovvzdSXlCQRVb8gtgONLX5b9jd4xeOYVZs4PpFM9vZx&X-Amz-Signature=7a11b5d63ec6f9b7a13e7097e8ad4f88522c08e1baada54e885dc2c368e1524e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
