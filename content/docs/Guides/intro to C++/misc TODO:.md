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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665TKNZH7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMO4lkOPhO8HVb3U9%2B4Oqu8ZM%2FGWz%2FF341wQaFhWK%2FJgIhAP4j5cxPt1BCfDiDHVhY9MrC91zWcSAfmFtwND2aFDyiKv8DCBgQABoMNjM3NDIzMTgzODA1IgyAI0eO5te3N1axJs4q3APFB5nplwI9221vvzHJmqe6Udv%2FbwBKpxiLnv%2Bgqtf42rOVRCjLsY57182BEzQ1ORWFbSvU98%2BJ3VQqR6HsaR22j4xj7n2nK6lPO7BeGslejk851sIRggNEr2J7CnRAdDTUkd7C9dtDipdL1pb7%2FfTG26lsMLhG%2FgEnd97NkbvSGGW1ytgfG3YZ9ezCXhy1SReEKGM6kIsA%2BZDQEUsScfjWFgoexfBLMQwMs36leyB9r2x3eN9AA9ANnNurfNeCTdo%2BHtQcdCBET7rxuF7knumyxOq3RiUiRgbHj2C%2BHxNRCp%2Bqkii%2FrqDwUL8lZWg4euR%2FIMWKeek3SeFYHPxa1LrKpKFsW%2FXdbQLdz3fEdKOJco5eWy0NrjTHfgEBeGXHH2h%2B3LH1fP%2BpBdmrmJKfY3QBemly5%2Bry1HC5y2Q%2BbPEOiJjGkrwSbd4Rb1uhULsR2A1xikfgsvE2AmlulLoqHQCg12GlJ5FBblvQNBr5swfaUeiKVCcJgTAHN9Jnvb5HXYJcn%2F3sSoawybic71UUTrFEQqOn2%2FJ0CbgJjI7CVrioim0m6uE1V%2FxbiI%2F7W5Xzw95hNv5o3XDRufmT9mI2raomjj9A1fbfDO7EJYbgjR%2Fqx%2Bqi8tk3pLbFUqz4NDDKls%2FDBjqkAQHm8y3euXS3GMnzCxvBDG1y6Jbc0VVVh9mn%2BFj0E9TENwdlyinYMja%2FGM0vZT%2FMUiBP8fYjt0z6%2FIizNgc38PCF1vM1YkEU8e%2FaTNpf3qLAc6dXvkspCC3x10%2BrDdsSv%2BfUj31i6jwS5xSli0EdSy%2BBBBQ%2BFh4btyTMFP5uKCxX312EbhZ%2BIsWlSky6kqS0rfvWMWSvOUGS1XGaf5qcv0Gi0EC%2B&X-Amz-Signature=0628a97e0f8a7bdc46c91191630b9bb4b27034be35900f0f368ece55a0dc2871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665TKNZH7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMO4lkOPhO8HVb3U9%2B4Oqu8ZM%2FGWz%2FF341wQaFhWK%2FJgIhAP4j5cxPt1BCfDiDHVhY9MrC91zWcSAfmFtwND2aFDyiKv8DCBgQABoMNjM3NDIzMTgzODA1IgyAI0eO5te3N1axJs4q3APFB5nplwI9221vvzHJmqe6Udv%2FbwBKpxiLnv%2Bgqtf42rOVRCjLsY57182BEzQ1ORWFbSvU98%2BJ3VQqR6HsaR22j4xj7n2nK6lPO7BeGslejk851sIRggNEr2J7CnRAdDTUkd7C9dtDipdL1pb7%2FfTG26lsMLhG%2FgEnd97NkbvSGGW1ytgfG3YZ9ezCXhy1SReEKGM6kIsA%2BZDQEUsScfjWFgoexfBLMQwMs36leyB9r2x3eN9AA9ANnNurfNeCTdo%2BHtQcdCBET7rxuF7knumyxOq3RiUiRgbHj2C%2BHxNRCp%2Bqkii%2FrqDwUL8lZWg4euR%2FIMWKeek3SeFYHPxa1LrKpKFsW%2FXdbQLdz3fEdKOJco5eWy0NrjTHfgEBeGXHH2h%2B3LH1fP%2BpBdmrmJKfY3QBemly5%2Bry1HC5y2Q%2BbPEOiJjGkrwSbd4Rb1uhULsR2A1xikfgsvE2AmlulLoqHQCg12GlJ5FBblvQNBr5swfaUeiKVCcJgTAHN9Jnvb5HXYJcn%2F3sSoawybic71UUTrFEQqOn2%2FJ0CbgJjI7CVrioim0m6uE1V%2FxbiI%2F7W5Xzw95hNv5o3XDRufmT9mI2raomjj9A1fbfDO7EJYbgjR%2Fqx%2Bqi8tk3pLbFUqz4NDDKls%2FDBjqkAQHm8y3euXS3GMnzCxvBDG1y6Jbc0VVVh9mn%2BFj0E9TENwdlyinYMja%2FGM0vZT%2FMUiBP8fYjt0z6%2FIizNgc38PCF1vM1YkEU8e%2FaTNpf3qLAc6dXvkspCC3x10%2BrDdsSv%2BfUj31i6jwS5xSli0EdSy%2BBBBQ%2BFh4btyTMFP5uKCxX312EbhZ%2BIsWlSky6kqS0rfvWMWSvOUGS1XGaf5qcv0Gi0EC%2B&X-Amz-Signature=3fbde1a62a57042c0cbcec2e009d62ff5a1dc47fa4866b51f757096e76500b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
