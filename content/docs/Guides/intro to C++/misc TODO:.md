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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5RYCSV%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIEKwEBJgfVMTdy8dKbTvKdHi3IZIo4jglbpDwigiTsIRAiBS0ZXXIlKW2ET7gL0p%2Bxi2dXA03glZpRx4ydZxbVWBzyr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMeEL6R1BvjRYsiFJuKtwD7F3o3XJuhByxsgmsMrHik4T5sMXiSos0lQ99uZumwCy98Ik0Fe9KJ0cv8FdjK7WwmPaMZd60WC8Rd4acXMpAvzRvJJaBDW0lnmZ86C6LplSmLt%2FoDZCXF0KBELk4MV52V%2BKNL8iS6FDp2BurvLgPLYInuYX4NCut4lmNYuoSlhAtH%2FAMM1l1ftAKuSIYm%2F33R31FR5mA0RIdmP9rrz2Ub1%2BE760DVdPKNDy8wFEyVDFSMOacGWI84WNAr%2FLqRNlrTOCnWrsu7F9Pe6M9F9r8gMw3Z4Nvz2B%2BiMYV9%2B07Q5Wthb4ki9SML9a6WWjcVUKP5pUtbBttMkpAZ8Ew9pWXLHIhGKxhe1vcxu7SbI2kDNfc38hT1FlXf5U8siMfCDNRsUxcIsw4XCwf0nXM6jmEI1vf6LkUboxJB3jvvM5Qgd3%2BQIKAk9nO7%2F7Ymoy3iqFnI%2F78rOsvI%2B5QWNyk94io6k%2BsE%2FEoU3ByES%2FeCJ8HmErHvOZD9e%2FCaOWwtzxKDm%2B5mm4y4uVv7wKcnWq%2FRlv6Lg83KEzdUptE7KI1oE6jexs4nXjnNNM4oVZ9CiW61NwX2SqFaWJP%2F%2F85zonTlwy%2F4kwTKNsbH4r1MlpY%2B0UOxvMboYd3vnjA5MqtHQ0wu52zzQY6pgEnB1jrTJkel6BehJfm4nFTHajwdsFIAyQgAhxJyXRSSE4rEQnOUNWImh%2FQ6YNn8UxRjGr1a5k9yJfVlyEz39BzCGuUTDNHyABRDL2FylYOtw%2Bgv527yCRNGAnvDG8uyDoDIe28xci%2FMYaf38h8azagt426exv4xXNt8b3MrpZDNzvjc%2BUSCiBrGUC6oIMBSCxZtUxyFzZFNrtYqGAzlvBukleAiwHL&X-Amz-Signature=ec728fa91c0c35af589609ea5b955be3508c29e7c0edac30de372a8b2098f4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5RYCSV%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIEKwEBJgfVMTdy8dKbTvKdHi3IZIo4jglbpDwigiTsIRAiBS0ZXXIlKW2ET7gL0p%2Bxi2dXA03glZpRx4ydZxbVWBzyr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMeEL6R1BvjRYsiFJuKtwD7F3o3XJuhByxsgmsMrHik4T5sMXiSos0lQ99uZumwCy98Ik0Fe9KJ0cv8FdjK7WwmPaMZd60WC8Rd4acXMpAvzRvJJaBDW0lnmZ86C6LplSmLt%2FoDZCXF0KBELk4MV52V%2BKNL8iS6FDp2BurvLgPLYInuYX4NCut4lmNYuoSlhAtH%2FAMM1l1ftAKuSIYm%2F33R31FR5mA0RIdmP9rrz2Ub1%2BE760DVdPKNDy8wFEyVDFSMOacGWI84WNAr%2FLqRNlrTOCnWrsu7F9Pe6M9F9r8gMw3Z4Nvz2B%2BiMYV9%2B07Q5Wthb4ki9SML9a6WWjcVUKP5pUtbBttMkpAZ8Ew9pWXLHIhGKxhe1vcxu7SbI2kDNfc38hT1FlXf5U8siMfCDNRsUxcIsw4XCwf0nXM6jmEI1vf6LkUboxJB3jvvM5Qgd3%2BQIKAk9nO7%2F7Ymoy3iqFnI%2F78rOsvI%2B5QWNyk94io6k%2BsE%2FEoU3ByES%2FeCJ8HmErHvOZD9e%2FCaOWwtzxKDm%2B5mm4y4uVv7wKcnWq%2FRlv6Lg83KEzdUptE7KI1oE6jexs4nXjnNNM4oVZ9CiW61NwX2SqFaWJP%2F%2F85zonTlwy%2F4kwTKNsbH4r1MlpY%2B0UOxvMboYd3vnjA5MqtHQ0wu52zzQY6pgEnB1jrTJkel6BehJfm4nFTHajwdsFIAyQgAhxJyXRSSE4rEQnOUNWImh%2FQ6YNn8UxRjGr1a5k9yJfVlyEz39BzCGuUTDNHyABRDL2FylYOtw%2Bgv527yCRNGAnvDG8uyDoDIe28xci%2FMYaf38h8azagt426exv4xXNt8b3MrpZDNzvjc%2BUSCiBrGUC6oIMBSCxZtUxyFzZFNrtYqGAzlvBukleAiwHL&X-Amz-Signature=dfff02dc6572f9eed973c69744152712b1123fa52f21de1b78645b94b329be16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
