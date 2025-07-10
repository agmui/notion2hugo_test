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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64NW3QB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy2L9xIwqLIkw%2BjrjlTTOgCrx88XCUeZrbYC1VdMTq2AiEA7N%2F4ZcvIqbhyXnFA3OFcHPDp6ju5vKmwHPD13PDj2ZMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAikFRuWHcQaRILSircA3KHKr64PUxJjWb57ncWj4T8qqm2jFIR%2BdeNx6GOwCGO0ZfYqN96SZ9x1hQULboe86hgRu%2Bh88%2FKLirvncrRSo6PpUWSbFGG4p9axa2oWAXTnuod1GX1yC6wifKMZObcMzodMvZZ0%2Bz0t81PhLW1t%2BCasQnsOG3sj03X%2BVp8kuH8ybpoIxzRq6DPmqNqtLKjwVlcRoU%2BIYdp1Kyr972hy6Txa0kD5XaMmkFj%2FWNAhuvrx1%2FVcplCB3n74AW60MV2ZnS2gbZ%2BIoDaDe7EZAl4Np2JiGO9D30nqsBxCv%2BL%2FzgiNrThhStqRI5103nPORNrRmrtnFgg0ch0eXTbk8lnxA7P7mUkBTgOokWvjdv%2B8i3fOrLXC5pct1FV%2FreDpIPSd%2FlBd7pGdtYMRquPxzkiWka5imnn3cNMcY3yeDfYjGEAgBcP58e5FCDFmX46AaCJ0WTE6tKy79f29A4W32HtOsuh39kAwn8ryBWpB%2FjmKPQxayfjQmGLK1j6X8K6SZ61x802SIGS8z5XI0yvzzzHJ8a5TlFRVkNPhgO34DGqfn6bJgluT2khsr5Oo18siHehjQkm%2F4DlGKu8KEf4dW9oDEk6lB%2F16fAshPO4mJXh2zfcywVsf2DR1coSjGFLMKirvsMGOqUB9Pj5np%2Bm1t2liLq2uYmq4WD%2FSxs9XneZNPx0IAio06lwAAzVRQoXxkyVsKMnC6jwoc%2B4bVlv0%2BOE8yq2madcRFvfYC34OVTrz7dRh9dEDL6ytfyHUm1NlFj13bM1muFvXOvNCl2MNqZ7R4zttR4CkyXZ%2Fh0wsIDEMC6g9rTlMgrvHcUnhyDFcJ2%2B%2B3jDRY%2F%2Fjur3GNm5%2BVoe59HUn%2FOvrIoUBGax&X-Amz-Signature=51f1f90035c4ad8d23764d49b01494b6f770032ea0b8caae88b28239f0228625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64NW3QB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy2L9xIwqLIkw%2BjrjlTTOgCrx88XCUeZrbYC1VdMTq2AiEA7N%2F4ZcvIqbhyXnFA3OFcHPDp6ju5vKmwHPD13PDj2ZMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAikFRuWHcQaRILSircA3KHKr64PUxJjWb57ncWj4T8qqm2jFIR%2BdeNx6GOwCGO0ZfYqN96SZ9x1hQULboe86hgRu%2Bh88%2FKLirvncrRSo6PpUWSbFGG4p9axa2oWAXTnuod1GX1yC6wifKMZObcMzodMvZZ0%2Bz0t81PhLW1t%2BCasQnsOG3sj03X%2BVp8kuH8ybpoIxzRq6DPmqNqtLKjwVlcRoU%2BIYdp1Kyr972hy6Txa0kD5XaMmkFj%2FWNAhuvrx1%2FVcplCB3n74AW60MV2ZnS2gbZ%2BIoDaDe7EZAl4Np2JiGO9D30nqsBxCv%2BL%2FzgiNrThhStqRI5103nPORNrRmrtnFgg0ch0eXTbk8lnxA7P7mUkBTgOokWvjdv%2B8i3fOrLXC5pct1FV%2FreDpIPSd%2FlBd7pGdtYMRquPxzkiWka5imnn3cNMcY3yeDfYjGEAgBcP58e5FCDFmX46AaCJ0WTE6tKy79f29A4W32HtOsuh39kAwn8ryBWpB%2FjmKPQxayfjQmGLK1j6X8K6SZ61x802SIGS8z5XI0yvzzzHJ8a5TlFRVkNPhgO34DGqfn6bJgluT2khsr5Oo18siHehjQkm%2F4DlGKu8KEf4dW9oDEk6lB%2F16fAshPO4mJXh2zfcywVsf2DR1coSjGFLMKirvsMGOqUB9Pj5np%2Bm1t2liLq2uYmq4WD%2FSxs9XneZNPx0IAio06lwAAzVRQoXxkyVsKMnC6jwoc%2B4bVlv0%2BOE8yq2madcRFvfYC34OVTrz7dRh9dEDL6ytfyHUm1NlFj13bM1muFvXOvNCl2MNqZ7R4zttR4CkyXZ%2Fh0wsIDEMC6g9rTlMgrvHcUnhyDFcJ2%2B%2B3jDRY%2F%2Fjur3GNm5%2BVoe59HUn%2FOvrIoUBGax&X-Amz-Signature=b06e0abbb755f14cac40bef153d25aab87f17bf0fd8f869b257166d375d92788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
