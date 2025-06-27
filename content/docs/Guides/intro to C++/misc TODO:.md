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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDF4GXAJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsroXxBeBBh11kez4dubNbTu65YY97nOLsjmAuVQ5kKgIhAI4bMlJ0MGSWaEd0NPVn38uagsCGzaIQ%2F3WZuCwNNogYKv8DCHwQABoMNjM3NDIzMTgzODA1IgwPw9abJcIeq16EdMYq3AM7d45SwSsbHIc%2BrryEHEJhga%2BeBXh1KEziAfGOaSfxJ4EKKxSIPvuEvI3oINfhhc1kXmRi8OTtGk2PajxwRBGbevjgXv5Sl8gmVH3mOFukeJDSQhHHQzNdDpHtGz3xCsl6eSVaUBfkP3tKEn9yi2ehimYXCf%2FzUSXhRvSHTM7qk1Z1ys98bNVLuFMDREtzhkr11Yo4II5i7is4iXvaoECahPR68fo2bq%2Bzzx6yLWta4Ilz4jA7zLiU%2B6TwViApgLDNWNX32npVS0YTOzUIm2MVnbh2IgEIjJcsV%2FhXPcmlrKWy%2FOQGULXcNuGRIHAiwROzpmLiyyjARqrPVV1SgHlUmZ4GsApPOzP2IS5obTRyw46BfZkDwgnep1fuyHylbjS%2BZnGqzZZog0vL%2Bsu8%2FUSx2mTITcRwPOms4liqMA8PRDOmvdSCJ0R%2F68TRTwCCVg2ilQNeWmg%2F4jRpn%2FUnVcN9EeQL6UTCsONAftxZuapt6PNKhDpQ2c8cDNcyApSRQkeH7n685a0IjcPtU2B%2BG55taEmEG5hSyGr4tdx2td5mruoHOfv294NwgVmAQQo%2B5EOIaVcKOJaX%2FhYSuMDpGJJtCaP%2BuVJzAMStkk27xsD27ue%2BfGs2jqJtZ7OeGTClyvvCBjqkAQXe30fNzS0YlBK%2BZ7CSVSY991eU5Em61jZwktzNUvbsKr4iRWAiMsHz5ttWeeLxPKWTRIWW9w0ucG27icDE4pa4WkULLwRoXDSIPQe0jHJ2McUDrYDiQkJO4h2ztemYxnAM8hPny1mJPY0GAjQPXM%2B1G3i9oaZ1N9wOMarGRPvMR2o9pMdp%2B9pDuzw7QvvtHELshuAfcbcEvbImmTJ%2FE4Ebf2Sg&X-Amz-Signature=737d08d18ac482a15278eca99129945d92a3a41ef490994cd0abd9d401e33180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDF4GXAJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsroXxBeBBh11kez4dubNbTu65YY97nOLsjmAuVQ5kKgIhAI4bMlJ0MGSWaEd0NPVn38uagsCGzaIQ%2F3WZuCwNNogYKv8DCHwQABoMNjM3NDIzMTgzODA1IgwPw9abJcIeq16EdMYq3AM7d45SwSsbHIc%2BrryEHEJhga%2BeBXh1KEziAfGOaSfxJ4EKKxSIPvuEvI3oINfhhc1kXmRi8OTtGk2PajxwRBGbevjgXv5Sl8gmVH3mOFukeJDSQhHHQzNdDpHtGz3xCsl6eSVaUBfkP3tKEn9yi2ehimYXCf%2FzUSXhRvSHTM7qk1Z1ys98bNVLuFMDREtzhkr11Yo4II5i7is4iXvaoECahPR68fo2bq%2Bzzx6yLWta4Ilz4jA7zLiU%2B6TwViApgLDNWNX32npVS0YTOzUIm2MVnbh2IgEIjJcsV%2FhXPcmlrKWy%2FOQGULXcNuGRIHAiwROzpmLiyyjARqrPVV1SgHlUmZ4GsApPOzP2IS5obTRyw46BfZkDwgnep1fuyHylbjS%2BZnGqzZZog0vL%2Bsu8%2FUSx2mTITcRwPOms4liqMA8PRDOmvdSCJ0R%2F68TRTwCCVg2ilQNeWmg%2F4jRpn%2FUnVcN9EeQL6UTCsONAftxZuapt6PNKhDpQ2c8cDNcyApSRQkeH7n685a0IjcPtU2B%2BG55taEmEG5hSyGr4tdx2td5mruoHOfv294NwgVmAQQo%2B5EOIaVcKOJaX%2FhYSuMDpGJJtCaP%2BuVJzAMStkk27xsD27ue%2BfGs2jqJtZ7OeGTClyvvCBjqkAQXe30fNzS0YlBK%2BZ7CSVSY991eU5Em61jZwktzNUvbsKr4iRWAiMsHz5ttWeeLxPKWTRIWW9w0ucG27icDE4pa4WkULLwRoXDSIPQe0jHJ2McUDrYDiQkJO4h2ztemYxnAM8hPny1mJPY0GAjQPXM%2B1G3i9oaZ1N9wOMarGRPvMR2o9pMdp%2B9pDuzw7QvvtHELshuAfcbcEvbImmTJ%2FE4Ebf2Sg&X-Amz-Signature=253d68b9985b2dfede06a8f9aecd680ec52d77ccc97cb1c18627e5da1fc333bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
