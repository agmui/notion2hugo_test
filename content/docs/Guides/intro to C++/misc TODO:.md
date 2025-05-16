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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5ZBW6R%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuMDFNHCvIbX7SFEsOUbKHr45AY9ysQqJ9uxa%2F6SE2PgIgAUuz%2F0B28RG4TKXe0Qs%2F%2BGdAZ6zbbuCW7QkNZ37GRE0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDB5NwDEzl1Bb5NRaMSrcA4dnQs9ZyP7YyVHkStotqQ6NdMOeM8E6DnKEynd3oUxuTyv6U4xOrh9%2FsFBArPCN6qwc8d5OXx6zcXeFz7btblMJEB6UwYqsc1Pw3TtEry1zvsEUK6ssjoMVInyDgAEowvFJ7GCzZObtLMWjA%2FmDNDBMQYYRN0QTDDW123p40VoiEsEKsdTtB9FkWGLFFLx1gYALf9DcEC4lshKcp7n3fdX144%2Bb%2BRzm7Zaf%2BHCMOd%2FN%2BJWabvecqPARfRrXq7%2BKl1IACdwhQEObC6xnC67QWzwOx1VYxLJMr09g%2BSfIgiOSSYyunJarqppr%2F6ny%2BQACDcmVtZJI0Wpk61HVH9LY5kMxgAXdC0lRmm1hd1sOJpp95fLBaqXUSZOUdegpgu68Nzjnfp3xzncbKHNhviNpbydCh0yonnP7r3HD%2BlSCvDdx%2F%2FWJLHuHIjBNgHi%2FUzxEbYBZ1QnJreublEb6COwMmU4vJRKv3jt%2F4iD4ilUi7WG7QLOiy8stE7CKgw7jeHtHjTMWtd6w9Sbk3Jrg%2FFKMuNHSH21ghKI4bvIr74q7dld%2BtKosAXmguIkfoceq6zAZS8XR0O4xxdNLR7iiBRDXKBCsCqeFyZPdzjlR%2F8sMHFFInQWuVvWlDlwCWG1BMM39mcEGOqUBFb0lIKVb6qZYtc1qwoEJcHV5zOnf%2ByxzVSfhMXFZaMEIqlF%2FH4v0GROPJN2mz5WpeRGIFf2xSIBnyBfWvOQB4pQSiGtWKCrijXP67gTRcWJy3sF5zcjO1b8JgBmKGRLUfXNdRlKNEHHOxA60dbJ6m3i37VcY%2B7uK0AFatRGW4nn1XSVZ8UU43YPUizeIdQ2UG87K0Fjjm7JdUae6QM%2FImFkGlwge&X-Amz-Signature=158dedee20f7dbfd3ef0a8367b4d6969de268688d8e4a92c4ee4b68dbdf234ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5ZBW6R%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuMDFNHCvIbX7SFEsOUbKHr45AY9ysQqJ9uxa%2F6SE2PgIgAUuz%2F0B28RG4TKXe0Qs%2F%2BGdAZ6zbbuCW7QkNZ37GRE0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDB5NwDEzl1Bb5NRaMSrcA4dnQs9ZyP7YyVHkStotqQ6NdMOeM8E6DnKEynd3oUxuTyv6U4xOrh9%2FsFBArPCN6qwc8d5OXx6zcXeFz7btblMJEB6UwYqsc1Pw3TtEry1zvsEUK6ssjoMVInyDgAEowvFJ7GCzZObtLMWjA%2FmDNDBMQYYRN0QTDDW123p40VoiEsEKsdTtB9FkWGLFFLx1gYALf9DcEC4lshKcp7n3fdX144%2Bb%2BRzm7Zaf%2BHCMOd%2FN%2BJWabvecqPARfRrXq7%2BKl1IACdwhQEObC6xnC67QWzwOx1VYxLJMr09g%2BSfIgiOSSYyunJarqppr%2F6ny%2BQACDcmVtZJI0Wpk61HVH9LY5kMxgAXdC0lRmm1hd1sOJpp95fLBaqXUSZOUdegpgu68Nzjnfp3xzncbKHNhviNpbydCh0yonnP7r3HD%2BlSCvDdx%2F%2FWJLHuHIjBNgHi%2FUzxEbYBZ1QnJreublEb6COwMmU4vJRKv3jt%2F4iD4ilUi7WG7QLOiy8stE7CKgw7jeHtHjTMWtd6w9Sbk3Jrg%2FFKMuNHSH21ghKI4bvIr74q7dld%2BtKosAXmguIkfoceq6zAZS8XR0O4xxdNLR7iiBRDXKBCsCqeFyZPdzjlR%2F8sMHFFInQWuVvWlDlwCWG1BMM39mcEGOqUBFb0lIKVb6qZYtc1qwoEJcHV5zOnf%2ByxzVSfhMXFZaMEIqlF%2FH4v0GROPJN2mz5WpeRGIFf2xSIBnyBfWvOQB4pQSiGtWKCrijXP67gTRcWJy3sF5zcjO1b8JgBmKGRLUfXNdRlKNEHHOxA60dbJ6m3i37VcY%2B7uK0AFatRGW4nn1XSVZ8UU43YPUizeIdQ2UG87K0Fjjm7JdUae6QM%2FImFkGlwge&X-Amz-Signature=81f5358e1043dc554201bac98b54d213d467df6502ef185ef94513af26e1dc12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
