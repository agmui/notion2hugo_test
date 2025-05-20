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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643QQJDET%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI%2Fg2ToVXpg3wLtS9PNP%2FHY6q35Pio%2F0ewPZXTMu7S0gIhAOO6iXfOwHMJPrihzxGvUYBpwksl7PSalqo%2FjbvdMSFSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Mq3OinxjGQ0ay0Eq3AMwPsFUToffsF%2FAVjO9h2MiC9BdI%2FbyfU4lpCxJWJUHypsBQZTWVwbOFNjfXFctLdNGACyWsccHxFZ44Y6V9Nt4d8m%2FQTm4KVKIMQn315YLcoTY75KwrlYl%2Fw%2F8HA1eB62XRkJ28vmZXybti0BhFGnp9tuoga12CAeL8vFwCCAZ9hGoqV%2FziYYPwvgTE%2B0db0WKREgbfEYd8O7D1I8BWfE9SCeX%2FC03x8dECKdHRIy6RaUatup0soUIzery7CPNbZoaOzbvJSGgNfQP08FNpwOFFTrLB41lvqemdxJrJXwmYeAoVxKH%2FvKbH9TtaELJ%2FXmXVEpJIsl4JD48Us74BliKyisxnUbJQ%2FM%2BbuxWHk3UhNJyqylgrgIFKfLlkrpAsYJl4F%2B3mfJ4pgnvbJxWAU2iYDTzxZE8rmQTywX1T074GtGWm6F9OYG1NtVlf8EODrjEmuD6ahu5p%2BLdW5%2FTBbBWNUkXTNIc%2FLMgcvrJws2HdfZDlW8aDNMxaVUkSfnvUxPDLJ7Zs61qexwmwfacd8qzvkgMxn4a7b2DV3dVZoLFsBA9v1pIb6B1ZWted3v57OgdqhfE%2F6dbOSdO7muEXGX%2Fc7OLrZIZXtRG2IK1lTNpwfB8570NYxVzeZS8MDCBmLPBBjqkAbi49ExSOQLxbyztt66b8v8uj3pFv5CQukcnc78bBbweF1MhsSpCR7jAqE10iKjkZey%2FIKBCLCpA8wlnjop%2BVUBofG6hhQwgdOW1TttR%2F8ZRTJCit1kVvem4XH%2FC9%2FON1AJ7n4sI3AOurpC%2B8oCFqChWSsM34m%2B0uSNqapBnl%2F2K5THrdL%2FfL1GNtI3A7PW3D%2BJt625uj339OWuQiP3arD4PJd92&X-Amz-Signature=f6386150e6b22c46ea3662f582c9cffdb5a9cb2e05b1d041da9e5650159f7a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643QQJDET%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI%2Fg2ToVXpg3wLtS9PNP%2FHY6q35Pio%2F0ewPZXTMu7S0gIhAOO6iXfOwHMJPrihzxGvUYBpwksl7PSalqo%2FjbvdMSFSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Mq3OinxjGQ0ay0Eq3AMwPsFUToffsF%2FAVjO9h2MiC9BdI%2FbyfU4lpCxJWJUHypsBQZTWVwbOFNjfXFctLdNGACyWsccHxFZ44Y6V9Nt4d8m%2FQTm4KVKIMQn315YLcoTY75KwrlYl%2Fw%2F8HA1eB62XRkJ28vmZXybti0BhFGnp9tuoga12CAeL8vFwCCAZ9hGoqV%2FziYYPwvgTE%2B0db0WKREgbfEYd8O7D1I8BWfE9SCeX%2FC03x8dECKdHRIy6RaUatup0soUIzery7CPNbZoaOzbvJSGgNfQP08FNpwOFFTrLB41lvqemdxJrJXwmYeAoVxKH%2FvKbH9TtaELJ%2FXmXVEpJIsl4JD48Us74BliKyisxnUbJQ%2FM%2BbuxWHk3UhNJyqylgrgIFKfLlkrpAsYJl4F%2B3mfJ4pgnvbJxWAU2iYDTzxZE8rmQTywX1T074GtGWm6F9OYG1NtVlf8EODrjEmuD6ahu5p%2BLdW5%2FTBbBWNUkXTNIc%2FLMgcvrJws2HdfZDlW8aDNMxaVUkSfnvUxPDLJ7Zs61qexwmwfacd8qzvkgMxn4a7b2DV3dVZoLFsBA9v1pIb6B1ZWted3v57OgdqhfE%2F6dbOSdO7muEXGX%2Fc7OLrZIZXtRG2IK1lTNpwfB8570NYxVzeZS8MDCBmLPBBjqkAbi49ExSOQLxbyztt66b8v8uj3pFv5CQukcnc78bBbweF1MhsSpCR7jAqE10iKjkZey%2FIKBCLCpA8wlnjop%2BVUBofG6hhQwgdOW1TttR%2F8ZRTJCit1kVvem4XH%2FC9%2FON1AJ7n4sI3AOurpC%2B8oCFqChWSsM34m%2B0uSNqapBnl%2F2K5THrdL%2FfL1GNtI3A7PW3D%2BJt625uj339OWuQiP3arD4PJd92&X-Amz-Signature=ba6d224abf05879b47e909841f21a65e5e4660efcb3050325c55f5b1b58a5873&X-Amz-SignedHeaders=host&x-id=GetObject)

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
