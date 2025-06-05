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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4P25JIW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEHMR2eG2NqPPKjF58xZnG0XcoCGhKOAqbYFIddH%2FryTAiBaw8BkTsBCb0u33KW%2FtuUVBlJ8xoRWxdwlOm4iCWt%2F2Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaoZtqBkaLVYAbwHTKtwDznPDyZVarR4%2BB%2FnMRGTEVcAwQQQzFqONrj2V3nZ2BlnpLXxHhazwjryzhJSODujzhfQYjalFWuVMNEAzVSGbLfI9dNp3xXNTiMciOwU%2FVT7VN96QsCOHNMUbkMGO3LARZT0MKGWUkdr9Yh3xYkVLngRca8%2B72M4cJTyj8bmOah8fuQIkNhUGgprtTKrnsNmuvv00dRnsUR07okp6UCaSqN%2F%2Fd%2Fi5%2BEAW%2BK2RhJhWC%2FUzTDq9I0MGJsP14ggye4VSAcjF%2BwN2rVSqviSpPsoH1lph%2FmDzi36ASrjmlQg0iRJshvJOPzQEJU06kIyOeIIBdO%2BT4D7YePkWbBV8rch47aqChit2Snis8LGFzuA4v5b5PhZ7lNaxzzhrXlQyjhQKFJJz6CdyVxAZVendjJziJHs1fcpBWqm4cdEuEApkU1yyXMotSemJaytZFinSHyG6pPHfkSxDoULNB22DCqf%2Bv6mM5MmuMrnl3YW%2Fm5lBuz%2F7GJ%2BXg7ulOnDJluO1ydY419p1UHWxBWzEVZbqt6CowSqaIlr2HTWYQaEYJPd5lHEZT1viBq3o0%2Fg%2BYGxqC2u1In1%2F97Ecaj%2Fp%2B%2B738JqyrgRMQPUfd%2BHdxvEkDr5vTHjOWWtMj3VjDMx2VScw4OqDwgY6pgGO4NMBsPD1Daq2myVzJJrL4%2F6hpGS861Tbv5HL7H4ntrQANv4YdRSIKuMjUWR5TUEr5JHtahIV6Dehz2gv5e3R%2FLN9XmYSqpiK%2BggP64NGv%2FHqf0KeRg5RdEqAyKVUEYtPtYjiTMUFgdXWkrkWfKjs7FNHThiQROeT0qDVzdRcXKdA0KVAAQepv%2FFwLOkR1MhYwxIpMKSrYJEpSMHh8BarnOv6fxTB&X-Amz-Signature=226d57a47a22c76cf472af10a2d726c35f1c91e8358544688f33df501f406497&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4P25JIW%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEHMR2eG2NqPPKjF58xZnG0XcoCGhKOAqbYFIddH%2FryTAiBaw8BkTsBCb0u33KW%2FtuUVBlJ8xoRWxdwlOm4iCWt%2F2Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaoZtqBkaLVYAbwHTKtwDznPDyZVarR4%2BB%2FnMRGTEVcAwQQQzFqONrj2V3nZ2BlnpLXxHhazwjryzhJSODujzhfQYjalFWuVMNEAzVSGbLfI9dNp3xXNTiMciOwU%2FVT7VN96QsCOHNMUbkMGO3LARZT0MKGWUkdr9Yh3xYkVLngRca8%2B72M4cJTyj8bmOah8fuQIkNhUGgprtTKrnsNmuvv00dRnsUR07okp6UCaSqN%2F%2Fd%2Fi5%2BEAW%2BK2RhJhWC%2FUzTDq9I0MGJsP14ggye4VSAcjF%2BwN2rVSqviSpPsoH1lph%2FmDzi36ASrjmlQg0iRJshvJOPzQEJU06kIyOeIIBdO%2BT4D7YePkWbBV8rch47aqChit2Snis8LGFzuA4v5b5PhZ7lNaxzzhrXlQyjhQKFJJz6CdyVxAZVendjJziJHs1fcpBWqm4cdEuEApkU1yyXMotSemJaytZFinSHyG6pPHfkSxDoULNB22DCqf%2Bv6mM5MmuMrnl3YW%2Fm5lBuz%2F7GJ%2BXg7ulOnDJluO1ydY419p1UHWxBWzEVZbqt6CowSqaIlr2HTWYQaEYJPd5lHEZT1viBq3o0%2Fg%2BYGxqC2u1In1%2F97Ecaj%2Fp%2B%2B738JqyrgRMQPUfd%2BHdxvEkDr5vTHjOWWtMj3VjDMx2VScw4OqDwgY6pgGO4NMBsPD1Daq2myVzJJrL4%2F6hpGS861Tbv5HL7H4ntrQANv4YdRSIKuMjUWR5TUEr5JHtahIV6Dehz2gv5e3R%2FLN9XmYSqpiK%2BggP64NGv%2FHqf0KeRg5RdEqAyKVUEYtPtYjiTMUFgdXWkrkWfKjs7FNHThiQROeT0qDVzdRcXKdA0KVAAQepv%2FFwLOkR1MhYwxIpMKSrYJEpSMHh8BarnOv6fxTB&X-Amz-Signature=35b4b5569e94b07087022e78355ac20f15ae34ad1216c33cc288f7599d30ef39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
