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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IOI6FNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDrCBkEy63DJNOITQ%2ByBiWmifTSNFfnc19VkPQ14orAMQIgHhxX44k4L%2F%2FhrHXzvQ39V1Ipg4rMlsmk3ayS6mZDOOEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7G9TJXWe77%2Bd8lsyrcA1ncZpZVvBVEpukaod9%2FpZ%2BZXdIKnHTz8Lc3LHWZ3BM7nsMeDPEMGemLM9%2BkCS0AioqO2B%2BilQ3GeqDKTQUsHykQ7EEi%2FXd7RczpwMW9WitoGZHGljhT0UgUR%2FRMD5Fl%2FjPTZqDuMkF9B73fLBgjq3qaFeS5%2FZxkloSBkBuLNbD9veKpqAkBUcAtxpIjYyqweOCfgyAIL6bGR5jTkKeWKgm2ubEtAmK1xkU2E8%2FUMLWyOWyh7SekBAZSLApCrpisFnJTHPUW6XYiLvNoNm8NUwAtOmUD9sATUXkPrTL8WT%2F58CnovbMLoX0OACnPgQD5SL3PMp4IU1jQsDevgwJg4Q9GMqQjhGUcre%2FpJCWr3pAbQkrJ0ZE1tZx6VRH97ClVh24%2BeKs2BerZjOMSh3PkRsbu2iqfinnf%2BjscptPxsrmfHHRWgeFCo295qRPBH9rDSi3%2B4vfTgTkm2vizmz9GcdcAQOpKQqOItTA07j26Fsr%2Fr08cU68IlqUJOjQsYW2Fcuw%2FHbsqeMeXNBt131km38W%2F%2B2q3PMdBl6AW%2FpDhEftqumY4IlNuutq9poLOSxUB8%2FTZYg6OWxQvuL%2BryVeYgrQAjX8jB8q6O3DIKV5pP07N%2BCb5a0d6SuKLd5hDMOyi0MQGOqUBb5G343VH9DWG31618ZaD2fBrGFveyyI34Sp%2BqqfEAlpNvgUsPuxSFk4IKygQGVZdnWfvnmP6XZMyYYA%2FilXGJ0W9kniQ%2FFKqgzMtZV6gjhpQdexE2g89jvVufHQG%2B6%2FpbTJrvUSJRPDf9an4W0FGjVOu6Ew1uxqZi%2FVs0Uks3aBRMvmeLaL3eKY6947A43i3HhJN81gKk2danQSFKRjupgkV1eAL&X-Amz-Signature=083cd3348258ff6a5aa12ae9945a190d3985f43812da3e08379f243e4c090d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IOI6FNN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDrCBkEy63DJNOITQ%2ByBiWmifTSNFfnc19VkPQ14orAMQIgHhxX44k4L%2F%2FhrHXzvQ39V1Ipg4rMlsmk3ayS6mZDOOEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7G9TJXWe77%2Bd8lsyrcA1ncZpZVvBVEpukaod9%2FpZ%2BZXdIKnHTz8Lc3LHWZ3BM7nsMeDPEMGemLM9%2BkCS0AioqO2B%2BilQ3GeqDKTQUsHykQ7EEi%2FXd7RczpwMW9WitoGZHGljhT0UgUR%2FRMD5Fl%2FjPTZqDuMkF9B73fLBgjq3qaFeS5%2FZxkloSBkBuLNbD9veKpqAkBUcAtxpIjYyqweOCfgyAIL6bGR5jTkKeWKgm2ubEtAmK1xkU2E8%2FUMLWyOWyh7SekBAZSLApCrpisFnJTHPUW6XYiLvNoNm8NUwAtOmUD9sATUXkPrTL8WT%2F58CnovbMLoX0OACnPgQD5SL3PMp4IU1jQsDevgwJg4Q9GMqQjhGUcre%2FpJCWr3pAbQkrJ0ZE1tZx6VRH97ClVh24%2BeKs2BerZjOMSh3PkRsbu2iqfinnf%2BjscptPxsrmfHHRWgeFCo295qRPBH9rDSi3%2B4vfTgTkm2vizmz9GcdcAQOpKQqOItTA07j26Fsr%2Fr08cU68IlqUJOjQsYW2Fcuw%2FHbsqeMeXNBt131km38W%2F%2B2q3PMdBl6AW%2FpDhEftqumY4IlNuutq9poLOSxUB8%2FTZYg6OWxQvuL%2BryVeYgrQAjX8jB8q6O3DIKV5pP07N%2BCb5a0d6SuKLd5hDMOyi0MQGOqUBb5G343VH9DWG31618ZaD2fBrGFveyyI34Sp%2BqqfEAlpNvgUsPuxSFk4IKygQGVZdnWfvnmP6XZMyYYA%2FilXGJ0W9kniQ%2FFKqgzMtZV6gjhpQdexE2g89jvVufHQG%2B6%2FpbTJrvUSJRPDf9an4W0FGjVOu6Ew1uxqZi%2FVs0Uks3aBRMvmeLaL3eKY6947A43i3HhJN81gKk2danQSFKRjupgkV1eAL&X-Amz-Signature=db6c5e03bf74d883c8daca6633316156a73c4cb8771de25517de3b4d40338683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
