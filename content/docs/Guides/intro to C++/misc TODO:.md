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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWUG2GV%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHTe3eaggnWFZL8RiIPdCOgACXcm6PlBPBiNtu7D3KMAiB0XAX0ZLeIZopYifSO5QT9FROYW7rhRN71NsQ7TtzGziqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNc9Hee0hjrP4hnHKtwDwf36no3v4RTH5R5BDbr3cUBKKtI%2FGa3wb%2BnuduNTtxfQcPF7pp8kbVeI3G5By7YHWWeWIFCEyPuqR9P7XANS9tGkqxWFlyQpoLh4NrkDMVVpF79GDKxULrxwAYSuIZeiKTnpRbHTOI61tWLgWztRU2i6PLjRIabh4zDwex0CyxwAyPg3gHDeBGRrfPQdxe1J37tegntW0kdjg6V%2FZWr3U2sB6FIe7Tj577hy25tPKSYW23z%2FORdqkZlsc45u3vJAHDWeyZe5mjhHAY92iAGx%2FlQ4Goz2arapRu%2FhCZGNakr6sahe3XYvQGw5kNBBIBzFea1BoD1UiHL1vD%2FuiZOg%2BrtZeh5j%2FcKldgdHeFkZfmjlpTn%2Be5v0sbm8P1Z04QYNDg8jr9L5tgP8%2FXtpuiiBEMCyhi3m1TIyJPRn4cfyCl0N3grCuGRrT4FD4svrhluk5ihKdix%2BNfZuZaWHJqiiNN6vEhvM%2BW4f2lTK%2BJo7iEZI8cLrdorWzub07%2B8ktVnQ3oMRzuv9F7Jclgf18HfxpHVbWTffgaZGR0S8P3GB9KdhxA50E7FmOdfvy6ebjksegu7NKEJ0h%2BvDxch%2FJOHxgIz5SlzvYMKDPm43i%2BW58PehoUiSK3jhT57ZShcwmOrRygY6pgH12IVV14V9KXpDFDrHWEpzEbN5mXOPTwgiacXZrMsoHtogTilITCybKkoL%2F2TN%2BIriyXrp6NSsiPuEDGIJ7IjJeIMf0SiOX65VJHOO8%2B9R8ap8eALs19P%2BG%2FBKh5ZawfCZYJ47k707bxD9kmHyDwhsA7%2BjVs%2BGCHUEsQvuZvfWVvvwRpyfzeM%2BhBLzmFneuz4cUmD%2BlaEShIwItU2oG%2FkFPFT6K%2F1q&X-Amz-Signature=3941a15d1fecaff0764b417223ab79afe5ec64c950688e778ba3cd50f87c97e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWUG2GV%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHTe3eaggnWFZL8RiIPdCOgACXcm6PlBPBiNtu7D3KMAiB0XAX0ZLeIZopYifSO5QT9FROYW7rhRN71NsQ7TtzGziqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNc9Hee0hjrP4hnHKtwDwf36no3v4RTH5R5BDbr3cUBKKtI%2FGa3wb%2BnuduNTtxfQcPF7pp8kbVeI3G5By7YHWWeWIFCEyPuqR9P7XANS9tGkqxWFlyQpoLh4NrkDMVVpF79GDKxULrxwAYSuIZeiKTnpRbHTOI61tWLgWztRU2i6PLjRIabh4zDwex0CyxwAyPg3gHDeBGRrfPQdxe1J37tegntW0kdjg6V%2FZWr3U2sB6FIe7Tj577hy25tPKSYW23z%2FORdqkZlsc45u3vJAHDWeyZe5mjhHAY92iAGx%2FlQ4Goz2arapRu%2FhCZGNakr6sahe3XYvQGw5kNBBIBzFea1BoD1UiHL1vD%2FuiZOg%2BrtZeh5j%2FcKldgdHeFkZfmjlpTn%2Be5v0sbm8P1Z04QYNDg8jr9L5tgP8%2FXtpuiiBEMCyhi3m1TIyJPRn4cfyCl0N3grCuGRrT4FD4svrhluk5ihKdix%2BNfZuZaWHJqiiNN6vEhvM%2BW4f2lTK%2BJo7iEZI8cLrdorWzub07%2B8ktVnQ3oMRzuv9F7Jclgf18HfxpHVbWTffgaZGR0S8P3GB9KdhxA50E7FmOdfvy6ebjksegu7NKEJ0h%2BvDxch%2FJOHxgIz5SlzvYMKDPm43i%2BW58PehoUiSK3jhT57ZShcwmOrRygY6pgH12IVV14V9KXpDFDrHWEpzEbN5mXOPTwgiacXZrMsoHtogTilITCybKkoL%2F2TN%2BIriyXrp6NSsiPuEDGIJ7IjJeIMf0SiOX65VJHOO8%2B9R8ap8eALs19P%2BG%2FBKh5ZawfCZYJ47k707bxD9kmHyDwhsA7%2BjVs%2BGCHUEsQvuZvfWVvvwRpyfzeM%2BhBLzmFneuz4cUmD%2BlaEShIwItU2oG%2FkFPFT6K%2F1q&X-Amz-Signature=6baa39fac446bf8c77fbfdfd55de0caafa6809c14a95d975e2438cf783fa8175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
