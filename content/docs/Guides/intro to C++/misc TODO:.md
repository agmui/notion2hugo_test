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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4KFH66%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDPx%2FR7a3Q%2BcqbpWyZtOzacCjw3qW0C9bSDUgW9bw1LogIgUmjEoqujrrSG9gHIoy10unj3DUJO7IKvlGzZT6wHaXIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOc60vGicf%2FkqByteSrcA8kOSqGtYKcSCvPRECR91h8W03XLHMhfeUdxzHPRwVYNQTtbEP0HMn0XMLNz0PTfX0y7r9rLUEIB9xTpUU3PKmxXMOor2GWf8tpkrk8n8iqy3SXPhT4Ym97c1GAdMkLUFZY7rzw63N6ORpCfhcXIlg6HOhnpsypj3Qh3Gr297kvQXKfqnpBXa%2FdkBW%2BDVvuPHWmCszEk0N70ouk%2FSlC7upmB6bnF3Xuby8k120%2FkiG5MvNBQNvHnX5N%2BUPJ1BBT3T9tvV3HHucGuWf17Vty3r6MAYXdsHhipkwuF0MuNaBUEXYxBUZFdPalO5ctDf3X1UPR%2FHv09ACGCHYCDhvOeRPO0CtOifIhcuc4YI9CvPCSn5bnETZDdcnPz3IuZtYA5sSmKP7dsrFn%2BDWc%2BnhMPR4vDznqOb1CEuW03uAsGcHwItcAMCjifWU%2Fu8OWeb3AZr6SW2%2F38wixuVtwa7BZvjJooAV%2FSwU%2F214gMyv7cKZk4h2eL3jgIZz0jbN4IhhEWRILq%2B5HH1zLP7PNVxYb3HM9%2BPJTjibQWaRRcj%2BcG%2FYDOxK8KqBknswKRv2vzCBRvvLKU3tsqxfI0mYJp8qrcRVrRpnbxhK0VL15fs4bv%2BUNPt5YSlv%2BrZ%2Btmla6bMMzQ28MGOqUB571HVl3WD6LWpYsgKZT02hA030daIPaM6jWKGldQMUnQPv6gwv%2F2yaZVMTeJxBNdE0k3Htw4UzQC1pGTF0ZIckd1KMonDClIxQ4%2FYiTbl8u%2FmyCAA77BQzlXuT8fZK28gEjK%2BUKA4D%2FPu7pbQCVEhrXKpUs5rCTRtVVJNJhL7pH73yasgEp%2FTK2DVuVotkng%2F4yjYsy2v%2B8h5yBQFzZtOz1U19Eu&X-Amz-Signature=559a94d1f0636a135cc27b669ffc3a036131ddf8064b9bd321fc544a34e3cebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4KFH66%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDPx%2FR7a3Q%2BcqbpWyZtOzacCjw3qW0C9bSDUgW9bw1LogIgUmjEoqujrrSG9gHIoy10unj3DUJO7IKvlGzZT6wHaXIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOc60vGicf%2FkqByteSrcA8kOSqGtYKcSCvPRECR91h8W03XLHMhfeUdxzHPRwVYNQTtbEP0HMn0XMLNz0PTfX0y7r9rLUEIB9xTpUU3PKmxXMOor2GWf8tpkrk8n8iqy3SXPhT4Ym97c1GAdMkLUFZY7rzw63N6ORpCfhcXIlg6HOhnpsypj3Qh3Gr297kvQXKfqnpBXa%2FdkBW%2BDVvuPHWmCszEk0N70ouk%2FSlC7upmB6bnF3Xuby8k120%2FkiG5MvNBQNvHnX5N%2BUPJ1BBT3T9tvV3HHucGuWf17Vty3r6MAYXdsHhipkwuF0MuNaBUEXYxBUZFdPalO5ctDf3X1UPR%2FHv09ACGCHYCDhvOeRPO0CtOifIhcuc4YI9CvPCSn5bnETZDdcnPz3IuZtYA5sSmKP7dsrFn%2BDWc%2BnhMPR4vDznqOb1CEuW03uAsGcHwItcAMCjifWU%2Fu8OWeb3AZr6SW2%2F38wixuVtwa7BZvjJooAV%2FSwU%2F214gMyv7cKZk4h2eL3jgIZz0jbN4IhhEWRILq%2B5HH1zLP7PNVxYb3HM9%2BPJTjibQWaRRcj%2BcG%2FYDOxK8KqBknswKRv2vzCBRvvLKU3tsqxfI0mYJp8qrcRVrRpnbxhK0VL15fs4bv%2BUNPt5YSlv%2BrZ%2Btmla6bMMzQ28MGOqUB571HVl3WD6LWpYsgKZT02hA030daIPaM6jWKGldQMUnQPv6gwv%2F2yaZVMTeJxBNdE0k3Htw4UzQC1pGTF0ZIckd1KMonDClIxQ4%2FYiTbl8u%2FmyCAA77BQzlXuT8fZK28gEjK%2BUKA4D%2FPu7pbQCVEhrXKpUs5rCTRtVVJNJhL7pH73yasgEp%2FTK2DVuVotkng%2F4yjYsy2v%2B8h5yBQFzZtOz1U19Eu&X-Amz-Signature=ba9c4165c218519baa8c9677163ea27730ee32118c502454c60e33710c540715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
