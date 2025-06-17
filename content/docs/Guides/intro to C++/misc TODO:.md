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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIHM7ZWC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwCh0XOxRvsqKVYcKLnXxVTHC3AggJicy4JZj8Nz8GqAiAiQpxrLuaXh5FPhaVnAmu5dxS1VFDp91KQrW4MoYOPeyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMnPFve6mL6k%2FGrx5SKtwDc6DieeYjMW9YwJEt8YxPYdfqQJ%2FeSOOsVDVTlwkM8%2Feu4%2BiSW4juexLHZHEmfyuquzg%2FbI3y%2FtUcC%2FJOnfPwNsPu7h69J9B8ELh1wCib%2FisyM07d35MbWNVGeQGOwEakb7bSRx4WEqehysWatDTVJkPhg5bzL04Q%2BXWZg2ZNLF2IubBhk9IPiaFe3vpUqmu6Q%2FFtIvVBI8APXV8O9J940nTTxTenyVdmeCVFjl%2FlosfOITnv1N1D4thp%2FP8oHzDXF4VqQLgzxj0jGR8Wa1BlgCm%2B5I84ijeeeYl%2BQ%2BWRd0PZk2kSQk0z3KEXMFf7oiT4jaBkyZClxAQOHDqcPhd70u4Z99PPqlSx%2F9rsSlhXZQsX13KGgCScF48XLt1G3TMWYTVNrs5iJxiB9PqFEbPbm3K%2BGawSovf7BTIaEHtFaB5TbXsYTI%2F0IVwbVCtAghBr6X%2Fzyn3ztR24MnNCf7joBVnRig7DDP1ltn6G5%2F5QlZPmzNe0oSbbREz4VMeH4C%2Bi3mP1rrLdll1cBbns%2FArkGdokGzzWwNKMw9%2FthYq7hQUoub2S10sXkIym7ukVzvBe%2BeVLMl70bMCLzMPDfGFxwLR8GeswlBtHWHCkVz%2BXN3VI7hhneU3UOMGkUYMw3KbFwgY6pgEk1J0S%2BUBx6fAAbgiMF78m7EmFjCKlI55Zd5dw5Jip0J9RCRADOaeTrXLGgmq3q9g5lpxWxi4j73umfVRXGqKylg84apBqS21sAwaQsCrrBxb77ZawBqEA3xQFO0cUB51gWkPOpxMAOPV7%2B3WSnp2TCritA7GeybTupE1m4fsDfX8IsbFmQrRM1FDIBq5Om2yjZMb8xIlNwG%2FwS634NdY0YCEMFfSM&X-Amz-Signature=3ac24069d269c54ba2aa28705a2574afa165ae173cedfbb5c5b9ff38511fcdfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIHM7ZWC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwCh0XOxRvsqKVYcKLnXxVTHC3AggJicy4JZj8Nz8GqAiAiQpxrLuaXh5FPhaVnAmu5dxS1VFDp91KQrW4MoYOPeyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMnPFve6mL6k%2FGrx5SKtwDc6DieeYjMW9YwJEt8YxPYdfqQJ%2FeSOOsVDVTlwkM8%2Feu4%2BiSW4juexLHZHEmfyuquzg%2FbI3y%2FtUcC%2FJOnfPwNsPu7h69J9B8ELh1wCib%2FisyM07d35MbWNVGeQGOwEakb7bSRx4WEqehysWatDTVJkPhg5bzL04Q%2BXWZg2ZNLF2IubBhk9IPiaFe3vpUqmu6Q%2FFtIvVBI8APXV8O9J940nTTxTenyVdmeCVFjl%2FlosfOITnv1N1D4thp%2FP8oHzDXF4VqQLgzxj0jGR8Wa1BlgCm%2B5I84ijeeeYl%2BQ%2BWRd0PZk2kSQk0z3KEXMFf7oiT4jaBkyZClxAQOHDqcPhd70u4Z99PPqlSx%2F9rsSlhXZQsX13KGgCScF48XLt1G3TMWYTVNrs5iJxiB9PqFEbPbm3K%2BGawSovf7BTIaEHtFaB5TbXsYTI%2F0IVwbVCtAghBr6X%2Fzyn3ztR24MnNCf7joBVnRig7DDP1ltn6G5%2F5QlZPmzNe0oSbbREz4VMeH4C%2Bi3mP1rrLdll1cBbns%2FArkGdokGzzWwNKMw9%2FthYq7hQUoub2S10sXkIym7ukVzvBe%2BeVLMl70bMCLzMPDfGFxwLR8GeswlBtHWHCkVz%2BXN3VI7hhneU3UOMGkUYMw3KbFwgY6pgEk1J0S%2BUBx6fAAbgiMF78m7EmFjCKlI55Zd5dw5Jip0J9RCRADOaeTrXLGgmq3q9g5lpxWxi4j73umfVRXGqKylg84apBqS21sAwaQsCrrBxb77ZawBqEA3xQFO0cUB51gWkPOpxMAOPV7%2B3WSnp2TCritA7GeybTupE1m4fsDfX8IsbFmQrRM1FDIBq5Om2yjZMb8xIlNwG%2FwS634NdY0YCEMFfSM&X-Amz-Signature=bce59a73f57eb9ed35d6ef19bf94c20e03dad7ee05bc7f36fd485d02ac00e8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
