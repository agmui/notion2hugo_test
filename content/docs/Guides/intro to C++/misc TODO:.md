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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627IQJIQK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcHKLsWkU8OjK%2FVaRyW3yq%2Bu%2FSrghJwfgSUhencIWSNgIgJpDz8y0zsA79Znx0jBU2wbGE%2FHcIRTrcpUDz%2BOARi0oqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfvjMVxXfEs5jr41CrcA1ldAMRe%2BHtLHj0myUiQixHqT4Tc8K10BxyyegHmAWh5m%2BYNVFnfRqKpVINQnc13Yb1sCHWhMOOOjJDP8ryAAOnyppABtxPmpZVCbDeLDTNw04DEQQJjbS8X%2F7GFoQisHrmIGffffJ0y%2FQs%2BVw28dLTrTJu7vnmYSZ9MpniPfz0s8BzeUD7PXXcVj8hVfu39sGkTQlqhLazyO71o%2B8xksEhe1KvrNQT7ycezp%2BatF1XWXRKCQ86PV%2FCEoch7ajLoKDCRL5b92l3xvB3pHKbty9pZjUKOp1kw7K6y2%2FVRFFix%2FbBFX7LPG7%2F9CZbeeKUoY7BXH4WH9MDNXBTgDIsLruv9WQY90nA4x9gZuZKg4hf2u0FK2UvWrRF0q3ZCFvIwl9ZDSPbJQB8qmpadiCfyUT%2BlyODU7gyCx8Kg2Y7jWKZzpKN20ycOJbVesQdTrElDnHsb1cX85MXmu3ZxCDZqD7S9mMDLaDXX2tfchUDLJQlP1FhHiYCo5wv92DQ5kc58Pp%2FjcgrTB8XWy43Axx5IPcdzPlpqhaF50OoVB59NtVmVTjaNpxJpVBH%2BVkPtUKrPo%2FBvEqlpwzF1F0bC5WBGzGP3pUnukgFGO%2Bk%2FYJDR1jp8E6J8esu%2FP%2BRaB5ifMMPM9cAGOqUBDkAkyy1vJ6RVfcqJVIIkp01osi2Qe5qWD%2BJ9btnLqHgwyDboYOr28caeB2Nhi7Mlouz1NIEKWKvTwNb3VbiTGOx3FZRGrKasr%2FWAOdE590eXRlne%2FGyF7cwfm0y40gi%2FZAsDFLwsHEZmhwl7YvCWaAShSYVbk3yge4CNFfubwQiyXCQQAFPG6YX%2FcFbIaID0N%2FbDfkmzGS8YQi%2FvgH9lnv39IQzT&X-Amz-Signature=25aadd70c54e833dda92166635b6a3363e6ca921e2699ddb74c4f30128098c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627IQJIQK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcHKLsWkU8OjK%2FVaRyW3yq%2Bu%2FSrghJwfgSUhencIWSNgIgJpDz8y0zsA79Znx0jBU2wbGE%2FHcIRTrcpUDz%2BOARi0oqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfvjMVxXfEs5jr41CrcA1ldAMRe%2BHtLHj0myUiQixHqT4Tc8K10BxyyegHmAWh5m%2BYNVFnfRqKpVINQnc13Yb1sCHWhMOOOjJDP8ryAAOnyppABtxPmpZVCbDeLDTNw04DEQQJjbS8X%2F7GFoQisHrmIGffffJ0y%2FQs%2BVw28dLTrTJu7vnmYSZ9MpniPfz0s8BzeUD7PXXcVj8hVfu39sGkTQlqhLazyO71o%2B8xksEhe1KvrNQT7ycezp%2BatF1XWXRKCQ86PV%2FCEoch7ajLoKDCRL5b92l3xvB3pHKbty9pZjUKOp1kw7K6y2%2FVRFFix%2FbBFX7LPG7%2F9CZbeeKUoY7BXH4WH9MDNXBTgDIsLruv9WQY90nA4x9gZuZKg4hf2u0FK2UvWrRF0q3ZCFvIwl9ZDSPbJQB8qmpadiCfyUT%2BlyODU7gyCx8Kg2Y7jWKZzpKN20ycOJbVesQdTrElDnHsb1cX85MXmu3ZxCDZqD7S9mMDLaDXX2tfchUDLJQlP1FhHiYCo5wv92DQ5kc58Pp%2FjcgrTB8XWy43Axx5IPcdzPlpqhaF50OoVB59NtVmVTjaNpxJpVBH%2BVkPtUKrPo%2FBvEqlpwzF1F0bC5WBGzGP3pUnukgFGO%2Bk%2FYJDR1jp8E6J8esu%2FP%2BRaB5ifMMPM9cAGOqUBDkAkyy1vJ6RVfcqJVIIkp01osi2Qe5qWD%2BJ9btnLqHgwyDboYOr28caeB2Nhi7Mlouz1NIEKWKvTwNb3VbiTGOx3FZRGrKasr%2FWAOdE590eXRlne%2FGyF7cwfm0y40gi%2FZAsDFLwsHEZmhwl7YvCWaAShSYVbk3yge4CNFfubwQiyXCQQAFPG6YX%2FcFbIaID0N%2FbDfkmzGS8YQi%2FvgH9lnv39IQzT&X-Amz-Signature=b1afbb690350275fc301ceb57fdc488cd4a683df478488ae86ef37b0cdca51d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
