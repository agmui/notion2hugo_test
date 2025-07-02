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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRQ3U4CJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA18%2FoKpsp6SnfUorVqFFF99quoXcaukcwikWiABF%2FbTAiEAgH%2FRyrz2CuG9U9X7tv8uXTOwqe4JJ%2BPxQsNamWt6nSoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7ghL9LtOPs3YzbdyrcA8DE1d0qXMpA4D%2B%2B%2FXJTfM8KI%2B0GsxLgT%2BucgiRCBzAk%2B3asDJMPWcZrdc3uaJQpSl0zhOjChALLQgfvyES%2BLY01OTMwpm6Mm4on72hT1x8Kcsv45%2FxS5McSj2vus5xobjUmTsXEcwjVTCEIZtn%2Fnri0ESCH1sj%2FY%2BqWI0tKjp%2FVLbDK%2BXojGXL%2BEdnBCixfTdnSLaSaebUsuOYJjQ29ma5MNOHWbWTElWjDhFXq5l8vBOWdh%2BDlpH34Bx7tDG5KxB1XMnn1h2zNnYSXPs%2BYDkE3pOBWdzMLxx%2Fw7U6kPhNQVsOj5bM511rPmLGEbbdcHvrcpsUWFez14DuXJNrV%2B1axLxyrJ573cgPb6LSV49IusnGjdSd%2BYHJI2gdgtTqvdQfidEdpe17UgZGH0mXws0WbMlgOz2p7o090Kc0Q00eXxiLDjMfY0oQijT%2FTyg8ireqn1Th%2BGlbOyPC3M4GfKsYH%2FYHelrE7Su2AlRrTO5HDskj3%2F4BZ2kYgmDLVS6m0KW69PMkoPqMEeD%2BqGsARDs%2Bt59X9RuK1McrbjxkkdriyiEaKZV2KXWRuXxzsj59w2vIyD25IGcwKijOtX%2BaAQtD2GWAjcZEhwTW3%2Bma2grrWmO43QRXpF3R%2BVJWuMJ%2B0k8MGOqUBnWeTSyHyEwxUqy7R%2B7L9V4wvkIgbd9E0VediqrjZDnM0Jww2Sw1O%2FbvN332snbt%2BlrQn7s8ktRHYA7t7YCyF7LV9ErkFFgC3Yu5nQ57Fwm7kroM%2BuIdVT1WhSgN4qgqcuhJaRJFfF2izrTFiVqlDpbbO1Izjyxx%2FPKtR5vaFLdxUI666EVeC3jXhNRKuRmT7tiGW5abxlyzJ3Z3gqURx%2BMH6Ao4j&X-Amz-Signature=dc395934aa5ff4525b9802599ba92f32e2f4bc550fc58c2cad5287bd62885369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRQ3U4CJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA18%2FoKpsp6SnfUorVqFFF99quoXcaukcwikWiABF%2FbTAiEAgH%2FRyrz2CuG9U9X7tv8uXTOwqe4JJ%2BPxQsNamWt6nSoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7ghL9LtOPs3YzbdyrcA8DE1d0qXMpA4D%2B%2B%2FXJTfM8KI%2B0GsxLgT%2BucgiRCBzAk%2B3asDJMPWcZrdc3uaJQpSl0zhOjChALLQgfvyES%2BLY01OTMwpm6Mm4on72hT1x8Kcsv45%2FxS5McSj2vus5xobjUmTsXEcwjVTCEIZtn%2Fnri0ESCH1sj%2FY%2BqWI0tKjp%2FVLbDK%2BXojGXL%2BEdnBCixfTdnSLaSaebUsuOYJjQ29ma5MNOHWbWTElWjDhFXq5l8vBOWdh%2BDlpH34Bx7tDG5KxB1XMnn1h2zNnYSXPs%2BYDkE3pOBWdzMLxx%2Fw7U6kPhNQVsOj5bM511rPmLGEbbdcHvrcpsUWFez14DuXJNrV%2B1axLxyrJ573cgPb6LSV49IusnGjdSd%2BYHJI2gdgtTqvdQfidEdpe17UgZGH0mXws0WbMlgOz2p7o090Kc0Q00eXxiLDjMfY0oQijT%2FTyg8ireqn1Th%2BGlbOyPC3M4GfKsYH%2FYHelrE7Su2AlRrTO5HDskj3%2F4BZ2kYgmDLVS6m0KW69PMkoPqMEeD%2BqGsARDs%2Bt59X9RuK1McrbjxkkdriyiEaKZV2KXWRuXxzsj59w2vIyD25IGcwKijOtX%2BaAQtD2GWAjcZEhwTW3%2Bma2grrWmO43QRXpF3R%2BVJWuMJ%2B0k8MGOqUBnWeTSyHyEwxUqy7R%2B7L9V4wvkIgbd9E0VediqrjZDnM0Jww2Sw1O%2FbvN332snbt%2BlrQn7s8ktRHYA7t7YCyF7LV9ErkFFgC3Yu5nQ57Fwm7kroM%2BuIdVT1WhSgN4qgqcuhJaRJFfF2izrTFiVqlDpbbO1Izjyxx%2FPKtR5vaFLdxUI666EVeC3jXhNRKuRmT7tiGW5abxlyzJ3Z3gqURx%2BMH6Ao4j&X-Amz-Signature=552a6abadbf4aeb2448b96fc6eb18f98dd4a02647ed3d58c6e3c59ecf181bdff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
