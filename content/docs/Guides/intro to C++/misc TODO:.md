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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUKRJJL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC92sOHuYBtScwZDBkXSmbLSSyL5fw7888OtdU6vva8TAIgENzm4oIYU41LlWsfQozXc1eoaanwi6AkVvoJatuG5hUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9ItYyqYOfjqKU7QircAwYGgXI7h2pMye4PnduVIzjuIkKul2fb8sCC2IhQWRyfLNymCye%2FpaIi7ApftbtV5qXQfNAIRwx%2F0Kky6gMeZPzoIXNq185v2RbdsKSQWNnTTROLCKLxo9xr7m3xXhByhKQaCldlYBxLvu3475QrWQw9lbPggcOS8ddf2dFuV%2FZiy5CR7k9Q%2FvbCUnQIZZ7%2BWqrUhsh9oHLqLB%2FWBbojva0p751sBknyxfek%2FIAQo2iiQEy0mbXcTyLx7bf8EN7KwP6zmVN1WM9Y3Pc8zrjonUvh10IUIbZjAaYBVyWj77PFqtOpFyRX9D%2FSlPqS54WaknpgTjsJFqQn9%2BbEiXh2QbBO9qV0OraCm70Fk1uYfW8sO%2BQrr5GHIbrVp9w8Cx1T0DSynptNECUQSzo2kmE4wSTxhKmlG1j6%2B1lKtIYYRS6DMlKCOGp390iJAkpYIfsx3UFY9De3v%2F%2FQqfW8%2Br1BMbDVld2rjS47oh7R66PzRMgPB48MwJMxd4aXa2eRVqxFbdsDwT0VcIn0AedbQymTcxWuX4C4tDcuLoUDNP7GhhGRxKikcVYtuvjrq1OGE5e4HAg6pMH8Gon9weJ7naXP98gZLSYddX2SqcjPyQ13%2BNSORk7RtUI%2BuSfTX2mDMJDlosIGOqUBPc6Xo3HHWgKXBB2PN%2Bx2Bz3oUTpiC7qCDBrzu4f3VsM28lWbM3KTi98hDdN%2BF8ZrkK6DgQLJ8A8ObT7NtiMaHMkUH%2BJR6fUx8geBAyQjOSFisRXpmdsf1E7KR0CkfAVF6rs75HNvr%2FwPDUydaKNZz%2FCB0g%2FSnFB%2BTXbL9arjkLlXH96BaBM688UhQP9PoLAVsxmkLI%2F1kdTaoSXw0laA%2BPAk1Clo&X-Amz-Signature=ba0b2b4c9cdbd56300571ba73a6c567c771dd37fed8a76adc02f212aefd7a00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUKRJJL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC92sOHuYBtScwZDBkXSmbLSSyL5fw7888OtdU6vva8TAIgENzm4oIYU41LlWsfQozXc1eoaanwi6AkVvoJatuG5hUqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9ItYyqYOfjqKU7QircAwYGgXI7h2pMye4PnduVIzjuIkKul2fb8sCC2IhQWRyfLNymCye%2FpaIi7ApftbtV5qXQfNAIRwx%2F0Kky6gMeZPzoIXNq185v2RbdsKSQWNnTTROLCKLxo9xr7m3xXhByhKQaCldlYBxLvu3475QrWQw9lbPggcOS8ddf2dFuV%2FZiy5CR7k9Q%2FvbCUnQIZZ7%2BWqrUhsh9oHLqLB%2FWBbojva0p751sBknyxfek%2FIAQo2iiQEy0mbXcTyLx7bf8EN7KwP6zmVN1WM9Y3Pc8zrjonUvh10IUIbZjAaYBVyWj77PFqtOpFyRX9D%2FSlPqS54WaknpgTjsJFqQn9%2BbEiXh2QbBO9qV0OraCm70Fk1uYfW8sO%2BQrr5GHIbrVp9w8Cx1T0DSynptNECUQSzo2kmE4wSTxhKmlG1j6%2B1lKtIYYRS6DMlKCOGp390iJAkpYIfsx3UFY9De3v%2F%2FQqfW8%2Br1BMbDVld2rjS47oh7R66PzRMgPB48MwJMxd4aXa2eRVqxFbdsDwT0VcIn0AedbQymTcxWuX4C4tDcuLoUDNP7GhhGRxKikcVYtuvjrq1OGE5e4HAg6pMH8Gon9weJ7naXP98gZLSYddX2SqcjPyQ13%2BNSORk7RtUI%2BuSfTX2mDMJDlosIGOqUBPc6Xo3HHWgKXBB2PN%2Bx2Bz3oUTpiC7qCDBrzu4f3VsM28lWbM3KTi98hDdN%2BF8ZrkK6DgQLJ8A8ObT7NtiMaHMkUH%2BJR6fUx8geBAyQjOSFisRXpmdsf1E7KR0CkfAVF6rs75HNvr%2FwPDUydaKNZz%2FCB0g%2FSnFB%2BTXbL9arjkLlXH96BaBM688UhQP9PoLAVsxmkLI%2F1kdTaoSXw0laA%2BPAk1Clo&X-Amz-Signature=851ac80d8e944e3c3d7cfbfc013f0be87d27d81d10f66e9181a83b4ee925741e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
