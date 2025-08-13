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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UNAN5J%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25k8m1Rk3xYvAK%2F1YGehWlQnGefyiFilD0rYqbXaZDAIgafhPj6TzOxZ%2B2FPnVsGr1zOv1wHmEUwXwsciYq7PSQ4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAJIBEpyJC8JWEKXZSrcA3oqbNFR84tcUeZJwbmPBLRyeGTl6W75QNwU0QfeWA2SSXsDQM%2FcmMUQz7x9bebmEcL8P%2FMUqTmQ5%2B4m0PCQb%2B2fLeWkjfOsC5F2Swva4Z0G8Gzrmj91qhfN6R%2BT%2Bucxtyc09pJ24BkPMLFE3JmpWJ7Jm8iFsLzlNJqEVZj3mppb4BvgGA0QaW%2FrkjIBdo1dtrGoNl4JS6uIw6bOb4SZpXok6%2BhHIQ8uD%2BIaIxhRTLOb4ko7SLW3KzxhJ5i0%2BBP%2BffkrrUPqOc4VRd9gDv2PAl0GKfymUkjIpqTIvb3YmZTFpT8b3%2BrV7T6%2BIUDHdrssQRFl7WLhYKnmsofmlJnpz5rMjEGkKXu7gXRmc%2BPhehCj1mSS9vUxJhYPqUduMSs6VkT7AN3k0It3XuuJzNPZSKXZ7GJ0iY42Hs2mANIWfQ9LWMfwmKLItWC0%2F6P%2Fc%2BATB%2F53B3o8WXnigY%2BVhnhzZLMiUi9XBsj2FTLG4KV%2FhZUGfAS7dJVG%2FzyFv2Hc1sRSzZsdRpV%2BgmFShR4bbm7J81iMeX6XOapKAHl7JCrtjefKbBdKwiKuHzUOlFoU87wpM3wX3dp8sYd51Buf8wHo6IEOP57333jXKjftIm0DbgixUYeHWTw806K8VVA7MOef88QGOqUBKb%2FFnioFh%2BqUyQ8rE%2B7v%2FYjhxZDC4c3%2FF2usHYMQVUKKympkdBR52AzpbHTai9yMKaBE9axZJkJmyPZVpITYDI5XF%2FMnH%2FK17FYRSCJ6gh7%2FuiWLrnFIenbEtPqCA4QiCWAVIInWUwgD%2BY45JOj%2Fr3aNkYyB2rCNuiL986tAEWuTWZFPFsdpQfsncaOkQ1p9N6X666%2FJMMfruhEf%2Fa4370cEz5Uk&X-Amz-Signature=ff4d38225106384169a48f2d245aae7c8d7e76646745f5f2f84d2ca186bd5436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UNAN5J%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25k8m1Rk3xYvAK%2F1YGehWlQnGefyiFilD0rYqbXaZDAIgafhPj6TzOxZ%2B2FPnVsGr1zOv1wHmEUwXwsciYq7PSQ4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAJIBEpyJC8JWEKXZSrcA3oqbNFR84tcUeZJwbmPBLRyeGTl6W75QNwU0QfeWA2SSXsDQM%2FcmMUQz7x9bebmEcL8P%2FMUqTmQ5%2B4m0PCQb%2B2fLeWkjfOsC5F2Swva4Z0G8Gzrmj91qhfN6R%2BT%2Bucxtyc09pJ24BkPMLFE3JmpWJ7Jm8iFsLzlNJqEVZj3mppb4BvgGA0QaW%2FrkjIBdo1dtrGoNl4JS6uIw6bOb4SZpXok6%2BhHIQ8uD%2BIaIxhRTLOb4ko7SLW3KzxhJ5i0%2BBP%2BffkrrUPqOc4VRd9gDv2PAl0GKfymUkjIpqTIvb3YmZTFpT8b3%2BrV7T6%2BIUDHdrssQRFl7WLhYKnmsofmlJnpz5rMjEGkKXu7gXRmc%2BPhehCj1mSS9vUxJhYPqUduMSs6VkT7AN3k0It3XuuJzNPZSKXZ7GJ0iY42Hs2mANIWfQ9LWMfwmKLItWC0%2F6P%2Fc%2BATB%2F53B3o8WXnigY%2BVhnhzZLMiUi9XBsj2FTLG4KV%2FhZUGfAS7dJVG%2FzyFv2Hc1sRSzZsdRpV%2BgmFShR4bbm7J81iMeX6XOapKAHl7JCrtjefKbBdKwiKuHzUOlFoU87wpM3wX3dp8sYd51Buf8wHo6IEOP57333jXKjftIm0DbgixUYeHWTw806K8VVA7MOef88QGOqUBKb%2FFnioFh%2BqUyQ8rE%2B7v%2FYjhxZDC4c3%2FF2usHYMQVUKKympkdBR52AzpbHTai9yMKaBE9axZJkJmyPZVpITYDI5XF%2FMnH%2FK17FYRSCJ6gh7%2FuiWLrnFIenbEtPqCA4QiCWAVIInWUwgD%2BY45JOj%2Fr3aNkYyB2rCNuiL986tAEWuTWZFPFsdpQfsncaOkQ1p9N6X666%2FJMMfruhEf%2Fa4370cEz5Uk&X-Amz-Signature=3671e286141c58aaa19270a814c007cb8be02b2e8d9f928a758a4db902cc6482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
