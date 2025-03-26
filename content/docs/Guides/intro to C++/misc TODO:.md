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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625SNARXJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnH6cgtoj7VOI0CnoL%2Bcf11KI6SwbpBG92KinHizKxkAiEA60DDYWMbuKd1azWbeQX4HlUozqczOUPZslrmECRlm3Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKQZcYfaOTpqjb4SPSrcA%2BcISGVF8fqXAdJMj4RCojqDWF825i8OLHUyZbdo09xrOIdHLy7GjTUryHWHf3Lop6fiQQKJUsGn4ui2T5%2FbF%2BVuLj6fOB6146DC8yP1MuYApxvxSUbA7P62xVI%2BzndfEW8Ni4LFwVmiVRs3PphBQkH3rOQyAIfChjmjYpkBdEylU%2BPSNl5JPYFU0WayFGOb%2BDLigT2oWZpLD65Q80y44pK8oc9XOlBjwCIn18fJXFDXOs%2FPr8LqvraBGu7HlG7MA2ak2yfjf%2F%2Bjulo6FZcFV6XLiH4envBm4Acy3grDTpqK7mbvxcq69StaFq4seUsQRV%2B13c0Pbdc%2Bee%2FP8hDjleRcTRdCQIj4vEmAU7VveqztkOAYLwNv1dI53U6eOvspKTV7aNcMLdwi8GTI0ROfyspQLVTpm1iyR2%2BgsynFvDBkpya%2F%2FxdF6A%2BXS410CViVKFWQjENNBdVHNLIM7ECsWYgDS%2FFW2N2IaZMRqI2i9UVRkyUgYiGfaAduu%2FJSaf108AjrKnNDUVokgA9gVVirldItJoA0zOX3dQywl7HG54kDXFK686e1JBKOtnHrBV0rDoj22oip4DflodPZSrpHe90ynW%2F6QThAZOQHcJEqhXtjqu0pVkrVyiYtTweRMOCakL8GOqUByfcYKfdvOXwCg5Nm8v5tY0yxGSGSKEO0bF5xKwJwrL4n8qVb1dt0%2BO5GCaWutJ%2BwEgx2RMIt4dOpxPBhPf%2FVDs5hPAMV9ZhjxibKRs8gn%2FXNjaKLZ6IMktTVwdjd8iuO61nIfDJ7RjQLD6OIkih2cD50LRD%2B51K7gbhiVkDRtS2cv3D33T%2BRpQJ0RYsO%2Fk2PU8sYZxzOSOBwnT1Fh5D%2Bi7qyTsOM&X-Amz-Signature=3428b7c702b71b5150c6512faea34eccfe214f67fc3d69cce42cadf7d0d6e165&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625SNARXJ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnH6cgtoj7VOI0CnoL%2Bcf11KI6SwbpBG92KinHizKxkAiEA60DDYWMbuKd1azWbeQX4HlUozqczOUPZslrmECRlm3Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKQZcYfaOTpqjb4SPSrcA%2BcISGVF8fqXAdJMj4RCojqDWF825i8OLHUyZbdo09xrOIdHLy7GjTUryHWHf3Lop6fiQQKJUsGn4ui2T5%2FbF%2BVuLj6fOB6146DC8yP1MuYApxvxSUbA7P62xVI%2BzndfEW8Ni4LFwVmiVRs3PphBQkH3rOQyAIfChjmjYpkBdEylU%2BPSNl5JPYFU0WayFGOb%2BDLigT2oWZpLD65Q80y44pK8oc9XOlBjwCIn18fJXFDXOs%2FPr8LqvraBGu7HlG7MA2ak2yfjf%2F%2Bjulo6FZcFV6XLiH4envBm4Acy3grDTpqK7mbvxcq69StaFq4seUsQRV%2B13c0Pbdc%2Bee%2FP8hDjleRcTRdCQIj4vEmAU7VveqztkOAYLwNv1dI53U6eOvspKTV7aNcMLdwi8GTI0ROfyspQLVTpm1iyR2%2BgsynFvDBkpya%2F%2FxdF6A%2BXS410CViVKFWQjENNBdVHNLIM7ECsWYgDS%2FFW2N2IaZMRqI2i9UVRkyUgYiGfaAduu%2FJSaf108AjrKnNDUVokgA9gVVirldItJoA0zOX3dQywl7HG54kDXFK686e1JBKOtnHrBV0rDoj22oip4DflodPZSrpHe90ynW%2F6QThAZOQHcJEqhXtjqu0pVkrVyiYtTweRMOCakL8GOqUByfcYKfdvOXwCg5Nm8v5tY0yxGSGSKEO0bF5xKwJwrL4n8qVb1dt0%2BO5GCaWutJ%2BwEgx2RMIt4dOpxPBhPf%2FVDs5hPAMV9ZhjxibKRs8gn%2FXNjaKLZ6IMktTVwdjd8iuO61nIfDJ7RjQLD6OIkih2cD50LRD%2B51K7gbhiVkDRtS2cv3D33T%2BRpQJ0RYsO%2Fk2PU8sYZxzOSOBwnT1Fh5D%2Bi7qyTsOM&X-Amz-Signature=5d090219a50508629bffdc3ac2e07f459a73a2bf3ad024053d2a4a9cf9d11e58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
