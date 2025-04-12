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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XBD4IKO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGhOnQSYQc99hAJPt8IposMxqCihQZG4%2BEqcTVhbRt%2FiAiAGYhACNMT%2BtGvcggwEciLzLAQIJ%2FziuykZZkqIQqiXzSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZorAnlzMBF3RzVbgKtwDfAx2Nt1TLpzf1KhtcO1eVImyTMvSiCl73FYxSRk2E%2B7NrnmNs20chKFDbILEej4SgkupFtPHNN%2BP5Dd2lelu6EPqdIhOLnHhHFRkClYHyi1DPdXmLXaPDcU3b3Fio4VShmts7ihVnE8SLOoCDG2Sswiv2cFrCT510gyiWS%2FyUGk1isDTWZfe83OVHn6GsLeUCY0wwyAZgS3CBCoElboZEVTFmvvKmUWgaRGUEziXTYca7Yaj21om68IXKPi004DhWj0e5%2F603rdVno6pjDYfqKl5BkoVXOgABLvDQ8aks%2BKWqRuQjrD5pwCItqmi4ZvXhKAryLqtkWrliCS3SudoLWO%2BF6hSxaLSr2pY9i%2FsYFLAA1XEGeDPTa%2FUaUNX1PT7NAzLGDqyRDmZ9vtpLuheihLR3zIn9HkDLZGS%2BDX11mmsEE%2BoKx4oul7PDMaUaFh1E0DJh0EowSu4eyi2nx5x%2FIce7hdoPOIVLWe%2Fk6l15FIvEJlH7d2qTAs0z2mcHHfMUUaeAWnBkdfGIDrv8oVv4BWz1ku%2B7wTwsJEUiQezNnHQqnQV%2BYeZKpaffwxsx0ZW5fo4B8f5AhFjOYPOSrwfuWfN91ttoThzWA%2FENfXWag5wDfvYUBe1SYcb3eIwzrfnvwY6pgGmeSg3b8Nfi4dBWfxPb0jvoMkn5T2MipDd8SaIz9cKFjb%2BgWtLo%2FEw9j%2FP%2F4iRNCOSqIiJEwxA4GEckd9A1wp1pAWAREJRuDwjfse6piWCRP%2FuJyhoxCV9EOpWn1OKAa%2BIZLB8rHNDEBguAzMMW2KqMT%2FuFsBoB1H5ogEn59jwpuQLN7QE3FNL3GOKNJ7gxFYvccnbU%2BpSBoK4P7hFL2fZOZwZBQjz&X-Amz-Signature=9df46b589051ad1eea4f2fadf63a695e7783422b6b7b3df00d6084c0aaab7837&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XBD4IKO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGhOnQSYQc99hAJPt8IposMxqCihQZG4%2BEqcTVhbRt%2FiAiAGYhACNMT%2BtGvcggwEciLzLAQIJ%2FziuykZZkqIQqiXzSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZorAnlzMBF3RzVbgKtwDfAx2Nt1TLpzf1KhtcO1eVImyTMvSiCl73FYxSRk2E%2B7NrnmNs20chKFDbILEej4SgkupFtPHNN%2BP5Dd2lelu6EPqdIhOLnHhHFRkClYHyi1DPdXmLXaPDcU3b3Fio4VShmts7ihVnE8SLOoCDG2Sswiv2cFrCT510gyiWS%2FyUGk1isDTWZfe83OVHn6GsLeUCY0wwyAZgS3CBCoElboZEVTFmvvKmUWgaRGUEziXTYca7Yaj21om68IXKPi004DhWj0e5%2F603rdVno6pjDYfqKl5BkoVXOgABLvDQ8aks%2BKWqRuQjrD5pwCItqmi4ZvXhKAryLqtkWrliCS3SudoLWO%2BF6hSxaLSr2pY9i%2FsYFLAA1XEGeDPTa%2FUaUNX1PT7NAzLGDqyRDmZ9vtpLuheihLR3zIn9HkDLZGS%2BDX11mmsEE%2BoKx4oul7PDMaUaFh1E0DJh0EowSu4eyi2nx5x%2FIce7hdoPOIVLWe%2Fk6l15FIvEJlH7d2qTAs0z2mcHHfMUUaeAWnBkdfGIDrv8oVv4BWz1ku%2B7wTwsJEUiQezNnHQqnQV%2BYeZKpaffwxsx0ZW5fo4B8f5AhFjOYPOSrwfuWfN91ttoThzWA%2FENfXWag5wDfvYUBe1SYcb3eIwzrfnvwY6pgGmeSg3b8Nfi4dBWfxPb0jvoMkn5T2MipDd8SaIz9cKFjb%2BgWtLo%2FEw9j%2FP%2F4iRNCOSqIiJEwxA4GEckd9A1wp1pAWAREJRuDwjfse6piWCRP%2FuJyhoxCV9EOpWn1OKAa%2BIZLB8rHNDEBguAzMMW2KqMT%2FuFsBoB1H5ogEn59jwpuQLN7QE3FNL3GOKNJ7gxFYvccnbU%2BpSBoK4P7hFL2fZOZwZBQjz&X-Amz-Signature=4b4f338a501a6d08b2f19c1c75e51eb0685d9a00fe2c85906d3e29ffe8025042&X-Amz-SignedHeaders=host&x-id=GetObject)

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
