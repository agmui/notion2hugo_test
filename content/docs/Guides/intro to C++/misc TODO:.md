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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KN65W4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDDgbgHGh%2FymzRb1gokJEJ5pZbFGMuKR7qIPtrYF6fS1AiAVas4o1iCnq9HIVIeMjj2xiZoDgCYpWv0Yu98FLgqNnSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA5NPfV5UdEXzb5Y3KtwDtrXpmh05O%2FUpCdkA44Ir02RF44uuAQFWrHv1GugG455QKV%2FO0EP0nQUqWVtoy1dAWCGgWWgWcmdc9l4eyPRD2ZoMyMYJgnMHtr0A9FCMmHlH2gY9WE28yYMQZH%2BNr9qHiriJuCP3jJoOWP6tAV1uNzHrwQlSHyQiHrrwrsQwTiZZ2YmRW2AGCMc1EjShrJ%2FA%2BLWgjjIlxjyb%2BvAiyaVu%2FLFq93g7VjG9YKHek%2B%2B7ftZ8fQFVrShL1Bystmh2tT4YdIhLczW%2BP6QKvpy5m4PxNzk5r8oImKoRsmDkV0USEF%2FwkELz1NacCseG8ytxgJ8K%2FTcBaPUctt1ZksBTHjhrO7ygTEzfMJpoqsvahD3fzVmbKj8Ghw3%2Blc1Mi7y8Kg8LJLWjWlkUltRagAT4PxLfeybndLs%2Bm0sHRrl4VNwFhRDbkQxa45PAildy%2Fvnge5dnltVoftPTdby7FUH%2FSzOtQJDMfFYJwSKSJc%2B4H5i4L9Xgjjf49gw2vTM79LJobS%2BMm6Dcc073lOWvFXMWb0z50odTwbwnFUHrV4ymHs9PrdhEjlGGC%2B3Fhq%2FWwcJIVR0dkkNX4wkVozddSKeJ%2FxWhI5Sx2%2FjN5HpXDxrsGVQAGrc0jwDjCslFf91PRjUw%2B9ePvgY6pgGVLnbGhVNIqdZYPYHLAWiFiRUBr2y9Un6We5ODDd4bpgodij%2F0IGJl1uT727G684kvcHUtjbjRCcjb55unxIyk7KQ1Myquz3SuVHUi%2BlEpPI%2FJic8tcMvaLA8wXi6kl9yAaqzAvaCwn%2FAoKwVBT1hVs%2Faj3cw5TOr676G4ck%2F8rzak%2BqHS7xFBsSHJ%2FdmwHtPTq0DFCdiCrGtWA9P4qynH6PVrLJYB&X-Amz-Signature=2ebe6377ec1af1cb94aa41747da1a1c4e5f8ffb96bd8efe66ec6eae59118960f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KN65W4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDDgbgHGh%2FymzRb1gokJEJ5pZbFGMuKR7qIPtrYF6fS1AiAVas4o1iCnq9HIVIeMjj2xiZoDgCYpWv0Yu98FLgqNnSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA5NPfV5UdEXzb5Y3KtwDtrXpmh05O%2FUpCdkA44Ir02RF44uuAQFWrHv1GugG455QKV%2FO0EP0nQUqWVtoy1dAWCGgWWgWcmdc9l4eyPRD2ZoMyMYJgnMHtr0A9FCMmHlH2gY9WE28yYMQZH%2BNr9qHiriJuCP3jJoOWP6tAV1uNzHrwQlSHyQiHrrwrsQwTiZZ2YmRW2AGCMc1EjShrJ%2FA%2BLWgjjIlxjyb%2BvAiyaVu%2FLFq93g7VjG9YKHek%2B%2B7ftZ8fQFVrShL1Bystmh2tT4YdIhLczW%2BP6QKvpy5m4PxNzk5r8oImKoRsmDkV0USEF%2FwkELz1NacCseG8ytxgJ8K%2FTcBaPUctt1ZksBTHjhrO7ygTEzfMJpoqsvahD3fzVmbKj8Ghw3%2Blc1Mi7y8Kg8LJLWjWlkUltRagAT4PxLfeybndLs%2Bm0sHRrl4VNwFhRDbkQxa45PAildy%2Fvnge5dnltVoftPTdby7FUH%2FSzOtQJDMfFYJwSKSJc%2B4H5i4L9Xgjjf49gw2vTM79LJobS%2BMm6Dcc073lOWvFXMWb0z50odTwbwnFUHrV4ymHs9PrdhEjlGGC%2B3Fhq%2FWwcJIVR0dkkNX4wkVozddSKeJ%2FxWhI5Sx2%2FjN5HpXDxrsGVQAGrc0jwDjCslFf91PRjUw%2B9ePvgY6pgGVLnbGhVNIqdZYPYHLAWiFiRUBr2y9Un6We5ODDd4bpgodij%2F0IGJl1uT727G684kvcHUtjbjRCcjb55unxIyk7KQ1Myquz3SuVHUi%2BlEpPI%2FJic8tcMvaLA8wXi6kl9yAaqzAvaCwn%2FAoKwVBT1hVs%2Faj3cw5TOr676G4ck%2F8rzak%2BqHS7xFBsSHJ%2FdmwHtPTq0DFCdiCrGtWA9P4qynH6PVrLJYB&X-Amz-Signature=c8a6201f4d7bcc412117f2e76aa6a89c96bf155cf2b48c21be37f3f6b760c260&X-Amz-SignedHeaders=host&x-id=GetObject)

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
