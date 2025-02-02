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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6DHGEDR%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwyAMh8OXXgRsSk8uKAVdLpJOtPGbGCiNgwXfjHALmnAiEA%2FxQD7HfNhOVH7l2AI6A3trADjNg8yZuBQ17D4TQTp68qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTgeE3If1ojRRQnHSrcA4A8Uhy0BsngDoWxar0vg9BFpcni2E8bBNM9ABSGGLbKDdcibrmCDNQEUlT31PEtRUfLlO3pCAKoTZHhF0MJRli3aZ3mdn9pNL%2F2FRliseJHbfH92mZlMqzwH5oQDR8t%2B55aBuQHndFmZNTnDTtfxvnB9lXB7T5BabSN8VRR%2FcRZGaRBZ%2FutARji8al2cyBE1lY5ZJPFAfuUcbEYlcx148H5BHzxsLtxeHV7hn%2B4CXEtlEtvRFJvhdAlW0yK57W59cYBesO3VvDSpIRxAbHU3gzRARxOzGO2QMF5NAsY2ATF32X4gxHLet52HCTsBcyvlxvNoLv7RchGmd%2BbBoIBywEfl3CAPADUISPXcQdb5Yy2uOruimQFLMl9BnDbX3EK8p6wvngLuPbbZ9os1VH7BzqlrKbvEIgSvwxHApNQ88Cl2stJ7sD4sqtXOpX6RbBLFyQ8uC%2FXuOVKgzMasS0RJ6mham7L91dVNplARR6MDiDKIVV4AZ2T9m40ZeQZde8ifZN%2Fexr6zxoAI0qHaZ8txXzDv5yhzySBA0%2B9JQ%2FKnZECTnIDEmxrCaY9Nzfyovb9FKiZ75COonZgPlu6MiNPyhVS9dguUKnmYN5hBM2PQkpbi46FN7%2FFEDr1UBOjMJ7i%2FrwGOqUBL%2BcbtZVgxFNDQJI2O%2FGpA%2FEdVBNVbxa4krC3oZrNIOJ5HqK1jDAcELkny98rfSzUdr2oeUkGdH5MJKoSW1WAK86Z427WfdgV12u6KlCgpnHa%2F7OVUxy9aMjNYew3im6ojDRRupBh1Pxs64baIqlG2a9RWd8g8VwXZ9MT4fWhBPrevS3k4URtaL3D%2FBhsY6NKM6Umdil%2FnMpa6uuYkTlz%2BOEJRDZi&X-Amz-Signature=e354414f42e90d048aff121793c81c8520252187390a8770e831bdac7a682ade&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6DHGEDR%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwyAMh8OXXgRsSk8uKAVdLpJOtPGbGCiNgwXfjHALmnAiEA%2FxQD7HfNhOVH7l2AI6A3trADjNg8yZuBQ17D4TQTp68qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTgeE3If1ojRRQnHSrcA4A8Uhy0BsngDoWxar0vg9BFpcni2E8bBNM9ABSGGLbKDdcibrmCDNQEUlT31PEtRUfLlO3pCAKoTZHhF0MJRli3aZ3mdn9pNL%2F2FRliseJHbfH92mZlMqzwH5oQDR8t%2B55aBuQHndFmZNTnDTtfxvnB9lXB7T5BabSN8VRR%2FcRZGaRBZ%2FutARji8al2cyBE1lY5ZJPFAfuUcbEYlcx148H5BHzxsLtxeHV7hn%2B4CXEtlEtvRFJvhdAlW0yK57W59cYBesO3VvDSpIRxAbHU3gzRARxOzGO2QMF5NAsY2ATF32X4gxHLet52HCTsBcyvlxvNoLv7RchGmd%2BbBoIBywEfl3CAPADUISPXcQdb5Yy2uOruimQFLMl9BnDbX3EK8p6wvngLuPbbZ9os1VH7BzqlrKbvEIgSvwxHApNQ88Cl2stJ7sD4sqtXOpX6RbBLFyQ8uC%2FXuOVKgzMasS0RJ6mham7L91dVNplARR6MDiDKIVV4AZ2T9m40ZeQZde8ifZN%2Fexr6zxoAI0qHaZ8txXzDv5yhzySBA0%2B9JQ%2FKnZECTnIDEmxrCaY9Nzfyovb9FKiZ75COonZgPlu6MiNPyhVS9dguUKnmYN5hBM2PQkpbi46FN7%2FFEDr1UBOjMJ7i%2FrwGOqUBL%2BcbtZVgxFNDQJI2O%2FGpA%2FEdVBNVbxa4krC3oZrNIOJ5HqK1jDAcELkny98rfSzUdr2oeUkGdH5MJKoSW1WAK86Z427WfdgV12u6KlCgpnHa%2F7OVUxy9aMjNYew3im6ojDRRupBh1Pxs64baIqlG2a9RWd8g8VwXZ9MT4fWhBPrevS3k4URtaL3D%2FBhsY6NKM6Umdil%2FnMpa6uuYkTlz%2BOEJRDZi&X-Amz-Signature=b863de887f4633fd8db1bc5a491addf0d476b29f80667e28d47704aacc5a08bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
