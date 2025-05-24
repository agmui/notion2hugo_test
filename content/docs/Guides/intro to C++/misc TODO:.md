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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STX2XBZI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHF6CejmeFSnVqEbJPpIcZb41S7jcd2wUjimy0ZTsGx1AiEAk%2Fr3q0gG7Wv5DbEdKhkqWPJ531bNShXssTknEj6fwaQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGorfNjnW2rWHYzePyrcA26aZjf9rdDFjAZGd9tpi2TOBWPfZjMnu8yEjuRjUIkVHoRLy5THKXb9zuvQcrXrYnwudc4DodJfhUH%2B0Trtl1TY3H5Pko0XePyPjQdcRz%2FxpXtaqEeirQE9UG9va40TxjFzESrIMzDDvTZOqGM%2Fw73KJUlnsTSy79HbmiqW3snfbIDQQvqpOJvoHoUZ5u0m9Us3hG%2FZL1FPIEj72cEehBqTDT%2B3iBEMI92l74Azf%2F00qbUPMqXJNozVl3Hk%2BmAMSTsgwIimK2YPE0tzxr9vwAQr0PEAT48sQ45yxKnMOSUU4ks9WMmAQOeSCAm%2FFMmJSvJ2fec%2FUY3FS60FkfEqDyDW27LjZqgHpwc3LCSuV4qk4saGcqEbV5PkbPcolqbB8B9EX0uxkQycIsr50wgMTS9zJfrShZpsFuxiGjODclVv18urW9oQEsGM3U%2F5kQ5xfGm16r767yotWwQuq5T9Nz2nR8PF2mRPvp9BEWzGPzQdAZkfVM4Pj8Rjmuj%2FxlnctqGODj2Y03sRslh81O%2BnpnXHZj8QyEABEkVHbqE58f5jcX%2FKFcHyqeYXa%2Fpj0LoKyn9LwCsWsnmy7PUUIntb2rxeuQwmeirlrd4E67%2BQmBfPPoCb0lESxqqxx10sMN7gxcEGOqUBuR%2FXA2siKnU2r0mDrIcriMlnSHY2jIpFevLwel09%2FDiOCVpO9NOAzXfAPwkxEPOPXPH7vetGaX2YgOjJT5%2B3rt3ttaNMNrVus03lx7bj6N40BSACz4z0XChA8%2FHu7BZ0xvx%2FFSCbMW9EZJpGhtw%2BRNILEiwLDfNKibhFq90VG8%2BSgU9rIAFYGbLBRtokGCdQe9t7%2BhhQyi%2FVwqCRgOSAf28pvcRO&X-Amz-Signature=53203199d92471360702ea5448d72ba4275bf1b8d19f4a4d57fc9f2e431d3dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STX2XBZI%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHF6CejmeFSnVqEbJPpIcZb41S7jcd2wUjimy0ZTsGx1AiEAk%2Fr3q0gG7Wv5DbEdKhkqWPJ531bNShXssTknEj6fwaQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGorfNjnW2rWHYzePyrcA26aZjf9rdDFjAZGd9tpi2TOBWPfZjMnu8yEjuRjUIkVHoRLy5THKXb9zuvQcrXrYnwudc4DodJfhUH%2B0Trtl1TY3H5Pko0XePyPjQdcRz%2FxpXtaqEeirQE9UG9va40TxjFzESrIMzDDvTZOqGM%2Fw73KJUlnsTSy79HbmiqW3snfbIDQQvqpOJvoHoUZ5u0m9Us3hG%2FZL1FPIEj72cEehBqTDT%2B3iBEMI92l74Azf%2F00qbUPMqXJNozVl3Hk%2BmAMSTsgwIimK2YPE0tzxr9vwAQr0PEAT48sQ45yxKnMOSUU4ks9WMmAQOeSCAm%2FFMmJSvJ2fec%2FUY3FS60FkfEqDyDW27LjZqgHpwc3LCSuV4qk4saGcqEbV5PkbPcolqbB8B9EX0uxkQycIsr50wgMTS9zJfrShZpsFuxiGjODclVv18urW9oQEsGM3U%2F5kQ5xfGm16r767yotWwQuq5T9Nz2nR8PF2mRPvp9BEWzGPzQdAZkfVM4Pj8Rjmuj%2FxlnctqGODj2Y03sRslh81O%2BnpnXHZj8QyEABEkVHbqE58f5jcX%2FKFcHyqeYXa%2Fpj0LoKyn9LwCsWsnmy7PUUIntb2rxeuQwmeirlrd4E67%2BQmBfPPoCb0lESxqqxx10sMN7gxcEGOqUBuR%2FXA2siKnU2r0mDrIcriMlnSHY2jIpFevLwel09%2FDiOCVpO9NOAzXfAPwkxEPOPXPH7vetGaX2YgOjJT5%2B3rt3ttaNMNrVus03lx7bj6N40BSACz4z0XChA8%2FHu7BZ0xvx%2FFSCbMW9EZJpGhtw%2BRNILEiwLDfNKibhFq90VG8%2BSgU9rIAFYGbLBRtokGCdQe9t7%2BhhQyi%2FVwqCRgOSAf28pvcRO&X-Amz-Signature=4b7bdd08e81d3483849b55a19af5224f8a2b8f7cca6685eb5747ba206a91882b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
