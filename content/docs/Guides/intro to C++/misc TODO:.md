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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62GCNSX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCPpL4Bzt52Oxrtc5FQ%2B5n8JdR28Y1T6iPVkzmGnzLEPAIhAPLuJ2la8YcaGAYceDY5bgKABWmFbKq2EUj%2FTea5WAkfKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygbp1Tq%2FYSEYhixuwq3APc3khznHW%2FhYTTBsuykET9AnzJwVFmrUkrnUMOh2dFusijTX%2BX9jtzJRkTucVfBpVNCpPh%2FjMt16IUQEqTm30lzqWpx8diZiDBs4EfM5yMVnL0NlXrzcQVunxUQfM20r6FZsNbpdrbu3eF9dPcvnPPbn7aLAiOxwsZWL0ggVsEAHDxYZmAqq9XxrzWqqBtPJxF0EbCAhiaPQl31nuOqdBlrq2ybCcOQ1z1LdcMDuQNuUZGAa4C6sM%2FhJOTZ9y4ZlwtZdA7fdIrKT3b%2B8xoCHYf8zF1LSmC%2BsfsxT8h4k4MXjwoT1oQfLNjlHjk%2F08yp2tIGfYgxlHJB4JRbtMRs%2FkTgQQOkwEl2ZgaH%2FMSfv0mZq1GAaz47Mk8G9oHbsw7PHaY%2F2WkrEkLGvYCdHqUJIzOYfZd6c%2BBUaOkMQnzzonUjMmnCabn6hwlhdYQOH%2Fa640%2FxNGUPMIMdBGZs%2Fr2IymtrE%2FMbEsfsS9Rbtj8gsKdBYsutGkJ9coIY2p6jMuhzozwqhN12YhQKWs3i9hnjG%2FC9g880JafEyKNhT4eYUGlbBxFaLMuiONCo%2BmR%2FJOAmb9hwgdDHjkmZp6runL7mj%2BLaAmenoi4GgOtEhyo4Pgj1U21CMkjgMMKqoyMSTCFmurDBjqkAZs4JGSmmnWE5GY0yA9AkCa9PkqYfxoDDE11KQPEifChAOV3BmDCWrhaGSVnKm25Wfr3HadBtKZPQAqav9qdyySVCLMjEBd0mPtFrCevtjIDulHgCOG0l%2Fl3FITemjteA2Gw82gVonPo7Y9gq16xLMbCwGqyAQIf3FzDZtbFbC4DhXPTW0p%2BuvGf4L6FYOFSyvvsi6Z%2FnQfH6kJ9JsOZ43Y91dxP&X-Amz-Signature=d194fd80e1bd09b29b7e3b0fdebfbdcc1411d0308ad8bbe1fede664c2692688e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62GCNSX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCPpL4Bzt52Oxrtc5FQ%2B5n8JdR28Y1T6iPVkzmGnzLEPAIhAPLuJ2la8YcaGAYceDY5bgKABWmFbKq2EUj%2FTea5WAkfKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygbp1Tq%2FYSEYhixuwq3APc3khznHW%2FhYTTBsuykET9AnzJwVFmrUkrnUMOh2dFusijTX%2BX9jtzJRkTucVfBpVNCpPh%2FjMt16IUQEqTm30lzqWpx8diZiDBs4EfM5yMVnL0NlXrzcQVunxUQfM20r6FZsNbpdrbu3eF9dPcvnPPbn7aLAiOxwsZWL0ggVsEAHDxYZmAqq9XxrzWqqBtPJxF0EbCAhiaPQl31nuOqdBlrq2ybCcOQ1z1LdcMDuQNuUZGAa4C6sM%2FhJOTZ9y4ZlwtZdA7fdIrKT3b%2B8xoCHYf8zF1LSmC%2BsfsxT8h4k4MXjwoT1oQfLNjlHjk%2F08yp2tIGfYgxlHJB4JRbtMRs%2FkTgQQOkwEl2ZgaH%2FMSfv0mZq1GAaz47Mk8G9oHbsw7PHaY%2F2WkrEkLGvYCdHqUJIzOYfZd6c%2BBUaOkMQnzzonUjMmnCabn6hwlhdYQOH%2Fa640%2FxNGUPMIMdBGZs%2Fr2IymtrE%2FMbEsfsS9Rbtj8gsKdBYsutGkJ9coIY2p6jMuhzozwqhN12YhQKWs3i9hnjG%2FC9g880JafEyKNhT4eYUGlbBxFaLMuiONCo%2BmR%2FJOAmb9hwgdDHjkmZp6runL7mj%2BLaAmenoi4GgOtEhyo4Pgj1U21CMkjgMMKqoyMSTCFmurDBjqkAZs4JGSmmnWE5GY0yA9AkCa9PkqYfxoDDE11KQPEifChAOV3BmDCWrhaGSVnKm25Wfr3HadBtKZPQAqav9qdyySVCLMjEBd0mPtFrCevtjIDulHgCOG0l%2Fl3FITemjteA2Gw82gVonPo7Y9gq16xLMbCwGqyAQIf3FzDZtbFbC4DhXPTW0p%2BuvGf4L6FYOFSyvvsi6Z%2FnQfH6kJ9JsOZ43Y91dxP&X-Amz-Signature=960f5323da248b25a4e774edc7910baebc2fcf26f59e904408a428a75a9337da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
