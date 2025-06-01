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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HT56RR3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCKp%2FYVYrsYAm47Ca5HORxe4ABivK%2FuTSw481Lj5kNdXgIhAJ31c0pDsTlvjaaDYZC%2FXT6BzJd0jRzs9UMnVhYSKclzKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ8yvebDda8SEGN1sq3ANoep4y18TYjRgIdlgcGGxbDB4ECdPloU9UK3UrVGPllq8ymYQG%2FRrP8q6iwSLRh%2BlyUTP79J43F2XyCU8q87x9tuAL2%2FUTIa7bSk0Y1WsgFMcedv1qOyX9eV2ObRumm%2BB2BsgW7Pdhe%2BgPmm5nPzxYw0HVbyyG71I3cnPUyNyiOyE670D4RNaTnI9OByfHYgI0vNpzYS6h8J2893WIO88LSYHgZ5bHRK0%2FSHbTNWMZQIkzW0yZYzfv7tr8fEk37NHhMnsU6QfIrewHrmFV7U0PBUCRSfgBJRTFMoHN5g5mbhInxUKsKuLgAAsFa3NwKE%2BiEpQcnFD1cLyGrWhqdLHzcNLYoKm%2BF2MkyXa1IK1dvHU5TsA9p%2Bonn6nyZq%2FXi%2F1AIyASbSHboADjops1S%2FhxsETOJaM%2FvV0SQFMHqKuAfVpuw1SCgzNFpkHNp%2F8f9sUjFOTw8L%2BaYon5lzi5M3AaUPMkHFPYvsa31m9i6wprfFV2VHvk6vDBHgNAuEv9DlEd3LYzMzrxutfpn9I1rN0vIrEYZc0W%2FJ56Z2GRc%2BoK0t40Yt56kp6rv7wQJOSGGUKQuDysue1sL%2Bs6z37zO%2F03Y1J16kpiE4xMVXrWjBs%2FSdmfDDut1kSdCK76wDCN3O7BBjqkAcHsH12rwKnri2xyHNdjswTu9x9sC05ZYqWbZMOJwJj%2Bac3jj4w0TbrDlB8idKAKzsJkPfeXh6eZPSl2Gr3CEBVQFf5NkIVMn78CItDyYrRNu4acFVDpkKoOXAmPygCePBdtppBMRj4ezxUxiPilgCK%2BnukyMVYBe1%2BC6pX8i7HNFo37W%2FA5%2FBcCmYzOFUmxtR1UOG8ySrG2CUHm5oImKdD5XwHw&X-Amz-Signature=123e80f62e469f0b28934a451cbf18c7a89c16e586b26d2910261301289bd6c7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HT56RR3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCKp%2FYVYrsYAm47Ca5HORxe4ABivK%2FuTSw481Lj5kNdXgIhAJ31c0pDsTlvjaaDYZC%2FXT6BzJd0jRzs9UMnVhYSKclzKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ8yvebDda8SEGN1sq3ANoep4y18TYjRgIdlgcGGxbDB4ECdPloU9UK3UrVGPllq8ymYQG%2FRrP8q6iwSLRh%2BlyUTP79J43F2XyCU8q87x9tuAL2%2FUTIa7bSk0Y1WsgFMcedv1qOyX9eV2ObRumm%2BB2BsgW7Pdhe%2BgPmm5nPzxYw0HVbyyG71I3cnPUyNyiOyE670D4RNaTnI9OByfHYgI0vNpzYS6h8J2893WIO88LSYHgZ5bHRK0%2FSHbTNWMZQIkzW0yZYzfv7tr8fEk37NHhMnsU6QfIrewHrmFV7U0PBUCRSfgBJRTFMoHN5g5mbhInxUKsKuLgAAsFa3NwKE%2BiEpQcnFD1cLyGrWhqdLHzcNLYoKm%2BF2MkyXa1IK1dvHU5TsA9p%2Bonn6nyZq%2FXi%2F1AIyASbSHboADjops1S%2FhxsETOJaM%2FvV0SQFMHqKuAfVpuw1SCgzNFpkHNp%2F8f9sUjFOTw8L%2BaYon5lzi5M3AaUPMkHFPYvsa31m9i6wprfFV2VHvk6vDBHgNAuEv9DlEd3LYzMzrxutfpn9I1rN0vIrEYZc0W%2FJ56Z2GRc%2BoK0t40Yt56kp6rv7wQJOSGGUKQuDysue1sL%2Bs6z37zO%2F03Y1J16kpiE4xMVXrWjBs%2FSdmfDDut1kSdCK76wDCN3O7BBjqkAcHsH12rwKnri2xyHNdjswTu9x9sC05ZYqWbZMOJwJj%2Bac3jj4w0TbrDlB8idKAKzsJkPfeXh6eZPSl2Gr3CEBVQFf5NkIVMn78CItDyYrRNu4acFVDpkKoOXAmPygCePBdtppBMRj4ezxUxiPilgCK%2BnukyMVYBe1%2BC6pX8i7HNFo37W%2FA5%2FBcCmYzOFUmxtR1UOG8ySrG2CUHm5oImKdD5XwHw&X-Amz-Signature=b04f11524b02466607050307001d12201c72eb6a9b7dcb458d2ec3d39c9a5443&X-Amz-SignedHeaders=host&x-id=GetObject)

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
