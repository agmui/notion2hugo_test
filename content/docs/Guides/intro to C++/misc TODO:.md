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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375HDEG4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDN%2FZVKDkeB2nTo9TYldN4p95NcDMFmbpKaFqltc1TqOAiEAyu%2F29qm2OcjDes%2FfgBVGT5ARlECdoTpEMXNCF5634yMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPMU8Lgx5ssTXShK3SrcA3TWZ2S2zHAJ0bR4A3ItAtxPas93TC%2BCjMdfSnEtEcRg12Sy%2F%2BSb1vsMQgItf7%2B0Dw6p6YmvY9becEBNx7TWjzt0nHQpOK7hP12LFiS5DT2YhhLjoow1ZI6XnwCLuQrwbkTZBHoB19v6P07DIeEsjFAR%2B1Kt4wK7l%2FBAtfaoRpr9srE1nOiC2x%2FJAtmA%2Fk1g%2FGbhdxvNfStnFo8wZx06WGqNxvq%2B2%2BPIlBAc6um7J5uwjoxeNYUpOOwfmEHibcZHcA0bVtwQD9ZHorgwsGSaaKlR9JOGauXG7GcTqVTcQx%2FgDuCXBaOL0qanM1ugh4f1Qc%2BXDYQAd%2Bl%2FYhxGBPmFDPPtnSa642MTf6QLxEdp5H7pIgyzDTVtTgW5VVw4wKZDiyHfBA87V16kI%2B2eXlHcwIXeagzzwXyhgp1DoUQimOu6jKPTxwWd6rE3CGtTFeo3r1R7%2BSfMWXHZjTTdAKR58VAk29IjUOqpiYj1ueubAwgD7XC6qfTnXfqcZPNGfJH%2BF9KSaOGWlFHKZkX%2FHYwblNwdB8wpFHtnqq6Mq77bXTuQFZCRac9cjd%2FQZ71f3jnFsz9cRRC8Mbbrw%2ByZZ7WsD5B4RjB%2BFnEPKi99fwf2MwMiBWjx2bF240%2FLEIxBMLykyr8GOqUBwuV8yOBK4nnw3Fh3MoRkyPZ9ZzJGopfSGsgu3rtfvw9Wg91I0yAJl4AUkB%2BEJ6%2FXrD3QO09XunN%2BpsbgcIPysRHt8XDI3kwDmAv0dOsWo%2FSWJHWYrCN82phyX9uK4LciihmS8QrYPJPkZ7fgyTA54gmwgAXehI07Nme6d8xz5oAZsfAZ0XHs7%2F8QMXpZDZ9OBrLf9G5LgD%2F00K3A2THoanY%2BkSwt&X-Amz-Signature=0bf8a84233c8196331fea3c02f96ac91d19113d04f76bc705b4e98bce1fa2320&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375HDEG4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDN%2FZVKDkeB2nTo9TYldN4p95NcDMFmbpKaFqltc1TqOAiEAyu%2F29qm2OcjDes%2FfgBVGT5ARlECdoTpEMXNCF5634yMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDPMU8Lgx5ssTXShK3SrcA3TWZ2S2zHAJ0bR4A3ItAtxPas93TC%2BCjMdfSnEtEcRg12Sy%2F%2BSb1vsMQgItf7%2B0Dw6p6YmvY9becEBNx7TWjzt0nHQpOK7hP12LFiS5DT2YhhLjoow1ZI6XnwCLuQrwbkTZBHoB19v6P07DIeEsjFAR%2B1Kt4wK7l%2FBAtfaoRpr9srE1nOiC2x%2FJAtmA%2Fk1g%2FGbhdxvNfStnFo8wZx06WGqNxvq%2B2%2BPIlBAc6um7J5uwjoxeNYUpOOwfmEHibcZHcA0bVtwQD9ZHorgwsGSaaKlR9JOGauXG7GcTqVTcQx%2FgDuCXBaOL0qanM1ugh4f1Qc%2BXDYQAd%2Bl%2FYhxGBPmFDPPtnSa642MTf6QLxEdp5H7pIgyzDTVtTgW5VVw4wKZDiyHfBA87V16kI%2B2eXlHcwIXeagzzwXyhgp1DoUQimOu6jKPTxwWd6rE3CGtTFeo3r1R7%2BSfMWXHZjTTdAKR58VAk29IjUOqpiYj1ueubAwgD7XC6qfTnXfqcZPNGfJH%2BF9KSaOGWlFHKZkX%2FHYwblNwdB8wpFHtnqq6Mq77bXTuQFZCRac9cjd%2FQZ71f3jnFsz9cRRC8Mbbrw%2ByZZ7WsD5B4RjB%2BFnEPKi99fwf2MwMiBWjx2bF240%2FLEIxBMLykyr8GOqUBwuV8yOBK4nnw3Fh3MoRkyPZ9ZzJGopfSGsgu3rtfvw9Wg91I0yAJl4AUkB%2BEJ6%2FXrD3QO09XunN%2BpsbgcIPysRHt8XDI3kwDmAv0dOsWo%2FSWJHWYrCN82phyX9uK4LciihmS8QrYPJPkZ7fgyTA54gmwgAXehI07Nme6d8xz5oAZsfAZ0XHs7%2F8QMXpZDZ9OBrLf9G5LgD%2F00K3A2THoanY%2BkSwt&X-Amz-Signature=be81cf0812d0760bd7f7a73ded197c3ea4f11f9c44f9f6456c8b77fdf31f0814&X-Amz-SignedHeaders=host&x-id=GetObject)

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
