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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666H2VRI6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDezvTbPd7uaDflpqZkwo25H9ydYkdwHZ8vfzvC9YN5pQIgGkDkh4jL49ST6n0PVEVjWj%2Fx7WbS9ZR%2BLJFS8bi0UxoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIqkfM9aH1O9t1lDSrcA1syHMP3W4Oh5eKClJ53btV1Ld6CwCNNcW3IPTK%2FiaVngq7MQop6Utg7Ac8dxThUv1y7q%2F8VRXkNoHQ0SZK4PbKxFwdevg4yuX6TEYx79bZ0nvUyqFnScolSfDN7Bg6TrZo5npkIb4K28%2BKKNgz3VM36o4dxRj27aFVrJ3U1zhTMkGQFD21COIArdjHBi9Tj6nbM3sqkcQU9cwdMfb5mKRtMn%2FO4OFwBokzlMh1R%2F%2BBukKC6ofqxvgYya%2BzWiUvkBjPkrP2INVzs86leW5x3EMDjPj16eILAaC8j5Z2gLECclGW8TnyfXZk1jVKQGEjcZrmjFSTPrybgIf%2FQr6Q%2B9nLTKFbtqQcbS3rLpEkAb3cY3UaOOaXvnAdtd55UxdahmzLJyK3jwCmevGhtix2b40N9NQaA1p5xTVR0i1RVvDmHR%2F6Zo25Ffje7d9q9moO3Z6W9oK5woasqSxp3XWwyKCWEWESmTy6FftztMe7jnNwRbUApmhGcmBN0gMMJlGQRRJaZdA2JFfi8O7QNlk1Zhz83i8mNZdo%2Fom0GNBXUnE4PEtLzoCSYRdVQX8fzZfdhqjK4BRYUN3Lac5AKYxjT5ymUkMSBCwGuEKfxb9H%2Fe2DKfAsgQwrbxoogUltaMP7risMGOqUBTZhJFz%2Bmu6eixaSrqANKTOluLQHxU5luSK97m2RtoABbDT8lVbcLlBLVS7o7QmUzhgMckOy8Ody%2BjjqdLjXOfYMZEB61L5FuA6Bu3OefqFQqtYrUPg38Er5f9hYlmIvPa2jd0UNYcFU2ib58XZi%2FXQIKQ6e0WjYRPNL168zqKUp4CZVShdA%2BxiEseVBRZmOorxZXpRZ2amf3bRvr9h0pKaXhvnlO&X-Amz-Signature=ea3d8ffde130a1c197eaa84b7e016d2f5f03dbaab421168209e6cbc88ee5bccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666H2VRI6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDezvTbPd7uaDflpqZkwo25H9ydYkdwHZ8vfzvC9YN5pQIgGkDkh4jL49ST6n0PVEVjWj%2Fx7WbS9ZR%2BLJFS8bi0UxoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIqkfM9aH1O9t1lDSrcA1syHMP3W4Oh5eKClJ53btV1Ld6CwCNNcW3IPTK%2FiaVngq7MQop6Utg7Ac8dxThUv1y7q%2F8VRXkNoHQ0SZK4PbKxFwdevg4yuX6TEYx79bZ0nvUyqFnScolSfDN7Bg6TrZo5npkIb4K28%2BKKNgz3VM36o4dxRj27aFVrJ3U1zhTMkGQFD21COIArdjHBi9Tj6nbM3sqkcQU9cwdMfb5mKRtMn%2FO4OFwBokzlMh1R%2F%2BBukKC6ofqxvgYya%2BzWiUvkBjPkrP2INVzs86leW5x3EMDjPj16eILAaC8j5Z2gLECclGW8TnyfXZk1jVKQGEjcZrmjFSTPrybgIf%2FQr6Q%2B9nLTKFbtqQcbS3rLpEkAb3cY3UaOOaXvnAdtd55UxdahmzLJyK3jwCmevGhtix2b40N9NQaA1p5xTVR0i1RVvDmHR%2F6Zo25Ffje7d9q9moO3Z6W9oK5woasqSxp3XWwyKCWEWESmTy6FftztMe7jnNwRbUApmhGcmBN0gMMJlGQRRJaZdA2JFfi8O7QNlk1Zhz83i8mNZdo%2Fom0GNBXUnE4PEtLzoCSYRdVQX8fzZfdhqjK4BRYUN3Lac5AKYxjT5ymUkMSBCwGuEKfxb9H%2Fe2DKfAsgQwrbxoogUltaMP7risMGOqUBTZhJFz%2Bmu6eixaSrqANKTOluLQHxU5luSK97m2RtoABbDT8lVbcLlBLVS7o7QmUzhgMckOy8Ody%2BjjqdLjXOfYMZEB61L5FuA6Bu3OefqFQqtYrUPg38Er5f9hYlmIvPa2jd0UNYcFU2ib58XZi%2FXQIKQ6e0WjYRPNL168zqKUp4CZVShdA%2BxiEseVBRZmOorxZXpRZ2amf3bRvr9h0pKaXhvnlO&X-Amz-Signature=dbd5ba396bdab1c90954611527dd334545a8da06725260b48844971d4fc8c22e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
