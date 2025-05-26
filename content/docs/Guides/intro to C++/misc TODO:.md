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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K77OZIN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDkpioj7Fea%2BLvYBBPYx1AVc%2B6%2BNnFJ41iW4rQ%2Bj8ZLzAIgC7wl9iogcCxmDbokhmVK32q65vf34reNo4n0lKQkNScq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCwKQCgmRupY%2FuhLXircA3N%2Blv7pueApEkOn60b7%2B1vm2kAbUTC6uVWd5eVdLqaFYtTdVq65B88Z8B%2F0l6nScEG%2FCsr51oEA56kJb7UpjLEgz%2Bs9qXQsHnaWnnCAfwNzxaTXzB%2F%2BtD6%2Fk3z8AfUvwyumS3GXgVq0YT1Mqn2WqU%2B7KDyHras%2Bwa%2FNRLMEpuHn6bmW9IoejDzhnIBnfZoCT0AjgJNbp3RdgZFCfYdrgMXgbR21QRd7dbNhIA2GSuA%2BatXMGarg3MkyMxkIiUKOAFk00FMSDMxhZqS0%2FCKeBvYC9sDapEMr1jIXTQqKKdqMa8%2BzfU9gQ8Zo%2Bzx3WHQcGEBAqcijIt85ZhjUbyUAvhitlGWv6xjAsgjlToputM3s7MkB3XMQlGPD%2FJsv1Up2Vb4ld59kRodYUVfSenmCgQl3i55FQ3JyBr1nyZaoyttdX%2BlELmHS9DiMNl8GhL%2BheMqUj48s27rb7skIBGIN9WuGlNAnjQP6wild51DH5TWiaVLNCyBZmXJ3PhzIHCgrHZbcYFW1eG4K0dxCPQfQNVoAdQ5vsXxrZ1GVfn23o3DpcdwXIbJ72qzGCl72CIvkh8mVyz5OQgC7hwdiTTfJwbHvJP70AO3voWf6dPjyPUU%2B1Odped1rMtyC5e2JMOj8z8EGOqUB5%2BWuKCKseyUnlp1TENqUV%2Bf2dzd214%2FTMOVfLkJrN0JDMb4ONvI1EwrymJQIgEsg1ckAfM6Z5%2BxPB%2BzfvsYPZVCP5u4b%2BaYWOQcFURiNHZtrpejVXRrSOyxrFZcT2DfFcmafLZp7m4eFRxUu6OT9BtPCjjkwP%2BwdJc%2F4ZVzvDXwbC5Mg5gSd94%2B8jdLij1WeO9DUxWfA72UaBvvqZOlxDwpRNAMD&X-Amz-Signature=c8070d4ca17a52fef631fb28628e89030358d7ba39afe059eeab00c7f574061a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K77OZIN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDkpioj7Fea%2BLvYBBPYx1AVc%2B6%2BNnFJ41iW4rQ%2Bj8ZLzAIgC7wl9iogcCxmDbokhmVK32q65vf34reNo4n0lKQkNScq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCwKQCgmRupY%2FuhLXircA3N%2Blv7pueApEkOn60b7%2B1vm2kAbUTC6uVWd5eVdLqaFYtTdVq65B88Z8B%2F0l6nScEG%2FCsr51oEA56kJb7UpjLEgz%2Bs9qXQsHnaWnnCAfwNzxaTXzB%2F%2BtD6%2Fk3z8AfUvwyumS3GXgVq0YT1Mqn2WqU%2B7KDyHras%2Bwa%2FNRLMEpuHn6bmW9IoejDzhnIBnfZoCT0AjgJNbp3RdgZFCfYdrgMXgbR21QRd7dbNhIA2GSuA%2BatXMGarg3MkyMxkIiUKOAFk00FMSDMxhZqS0%2FCKeBvYC9sDapEMr1jIXTQqKKdqMa8%2BzfU9gQ8Zo%2Bzx3WHQcGEBAqcijIt85ZhjUbyUAvhitlGWv6xjAsgjlToputM3s7MkB3XMQlGPD%2FJsv1Up2Vb4ld59kRodYUVfSenmCgQl3i55FQ3JyBr1nyZaoyttdX%2BlELmHS9DiMNl8GhL%2BheMqUj48s27rb7skIBGIN9WuGlNAnjQP6wild51DH5TWiaVLNCyBZmXJ3PhzIHCgrHZbcYFW1eG4K0dxCPQfQNVoAdQ5vsXxrZ1GVfn23o3DpcdwXIbJ72qzGCl72CIvkh8mVyz5OQgC7hwdiTTfJwbHvJP70AO3voWf6dPjyPUU%2B1Odped1rMtyC5e2JMOj8z8EGOqUB5%2BWuKCKseyUnlp1TENqUV%2Bf2dzd214%2FTMOVfLkJrN0JDMb4ONvI1EwrymJQIgEsg1ckAfM6Z5%2BxPB%2BzfvsYPZVCP5u4b%2BaYWOQcFURiNHZtrpejVXRrSOyxrFZcT2DfFcmafLZp7m4eFRxUu6OT9BtPCjjkwP%2BwdJc%2F4ZVzvDXwbC5Mg5gSd94%2B8jdLij1WeO9DUxWfA72UaBvvqZOlxDwpRNAMD&X-Amz-Signature=8814bbae0a54f008ef0303912244836015832aa3aae2ed348503fbd81c9366bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
