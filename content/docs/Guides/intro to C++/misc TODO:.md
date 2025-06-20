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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUX53MB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BRdZ456%2Bmve795iFoFtSR8dCykglAc9m3uExf3v8AmQIhANmav8R28%2BzLrbfHa2gDqvxpxqcSp7O3FsZ3XjD3S9v%2FKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FavNwL3v0WYuXzsq3AORJh4ecITbu%2BxkFfT6WH7F%2Fpcda3A0OBeiw%2FeNsgUcew%2FYb4QMUiosKf1CLzkqA8u0aVoUlv0HLC3JGtHpeenZdTuxyB%2BBfmeErzz9SsvJd%2FmTfE3gMl%2Fm%2BzkhLtFkluPmLgyve2Ntwwq%2Fymy2mhTHkGv1Cm2%2F6QsKKyNBukzMKLgDvwN5LmpyPsmEccK95NOKbNP89H2%2FdoD%2Bhx%2F2nwDaS4x%2Frdx3uIbJgcglk7QqSZkKpOxee%2BaVYBdd4%2FS5KHqEFCn0T3e1CiAspxtF%2BBbUVS7Cm6cZkh4RgALqSH41mHIiVN9w%2FouKnZeJ1EPTSUIKlfUURShcF3ibkI32yGuanwlPvZtql9dqsvtNQXP021%2Bx5X7K2%2F06VS6NAsBDP7KO%2F9X5QRQ%2Fifx%2FvTowognB4bqMc31BmBEYi%2Ba6x2cM5iPangyMeYWpMTdVbCrzGVbCLn9T8vdB5w1pPGcZ6fJQhVqrgpdXtRE5gA0KztqyG3%2BxZOW9p0wRgIffgg33ZBTYrj7V%2BB%2FB7InDiZ840HHSRmLzrCTf6IsoJdeBaa8A1zMFxWbPh37BTgl7IC3TKHZEId89Z8XhLwaRVsDYH524IajnJBUJXM1cjiQsGiyjZ24%2BsL3DQ5NNMEr02TCTvdPCBjqkAR3AdvJlumJ4BPNNkZxv1lUHCGtnQg5XMqndHwn%2FZCmXMF5p6bbDTO5xZFAKqvInNJ6yKDxRhyhN9274ZfJsNJKQEwJR7SUdhx9FCw6Hkp%2FQ%2FeYnrvLeyMaXOQdefgTEzMzs7o5unwPK3FtO34jOygcURuCgSMxmWpnApefhujytFJ8ggOtDvKHrpjqItHiTljEA6%2BXYZSXwaeiYIP55cVvUz9La&X-Amz-Signature=7d6c9d0cc561d8dbae7f7453c88c7965641d75147edc608c2d11501988330413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUX53MB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BRdZ456%2Bmve795iFoFtSR8dCykglAc9m3uExf3v8AmQIhANmav8R28%2BzLrbfHa2gDqvxpxqcSp7O3FsZ3XjD3S9v%2FKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FavNwL3v0WYuXzsq3AORJh4ecITbu%2BxkFfT6WH7F%2Fpcda3A0OBeiw%2FeNsgUcew%2FYb4QMUiosKf1CLzkqA8u0aVoUlv0HLC3JGtHpeenZdTuxyB%2BBfmeErzz9SsvJd%2FmTfE3gMl%2Fm%2BzkhLtFkluPmLgyve2Ntwwq%2Fymy2mhTHkGv1Cm2%2F6QsKKyNBukzMKLgDvwN5LmpyPsmEccK95NOKbNP89H2%2FdoD%2Bhx%2F2nwDaS4x%2Frdx3uIbJgcglk7QqSZkKpOxee%2BaVYBdd4%2FS5KHqEFCn0T3e1CiAspxtF%2BBbUVS7Cm6cZkh4RgALqSH41mHIiVN9w%2FouKnZeJ1EPTSUIKlfUURShcF3ibkI32yGuanwlPvZtql9dqsvtNQXP021%2Bx5X7K2%2F06VS6NAsBDP7KO%2F9X5QRQ%2Fifx%2FvTowognB4bqMc31BmBEYi%2Ba6x2cM5iPangyMeYWpMTdVbCrzGVbCLn9T8vdB5w1pPGcZ6fJQhVqrgpdXtRE5gA0KztqyG3%2BxZOW9p0wRgIffgg33ZBTYrj7V%2BB%2FB7InDiZ840HHSRmLzrCTf6IsoJdeBaa8A1zMFxWbPh37BTgl7IC3TKHZEId89Z8XhLwaRVsDYH524IajnJBUJXM1cjiQsGiyjZ24%2BsL3DQ5NNMEr02TCTvdPCBjqkAR3AdvJlumJ4BPNNkZxv1lUHCGtnQg5XMqndHwn%2FZCmXMF5p6bbDTO5xZFAKqvInNJ6yKDxRhyhN9274ZfJsNJKQEwJR7SUdhx9FCw6Hkp%2FQ%2FeYnrvLeyMaXOQdefgTEzMzs7o5unwPK3FtO34jOygcURuCgSMxmWpnApefhujytFJ8ggOtDvKHrpjqItHiTljEA6%2BXYZSXwaeiYIP55cVvUz9La&X-Amz-Signature=b59822e51b4dcabcfb53d7fa882568e3fbda0ce20f2df8125d6b4e7fd4751a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
