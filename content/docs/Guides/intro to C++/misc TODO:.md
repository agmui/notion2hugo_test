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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TCVNTDK%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD3DkI38MoCaZrIaW2%2BaKKWMRH9mrrRUG%2BfrhQ3aNYTTAIhAI2Nk6E898ewSJA0otrgSRYSjC9ZAv0BcJ6sGCojPxtkKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4lHG1EGkEzyJYkBgq3AMac7c2FHCyHkIC7cSzCwBTsHwBcJM%2B50HWN2OY2yJBLYcMSbTDA06CCQE3Ta8sEqxSSJJm%2Bd4Gs0Fn%2FwS6jX6RN0mXortqT6lCIympIx5FbXBbqrQFbVhPzuhbP3WulMcmnwlXKrOlm7wlPP9PUNUjTBKyM2IqSUXFEYmmyH87raOG89okZPtW4AW6nhK0iUSW55%2Fingx338%2Bbxhd3hukEWiyIJKxijaicuij8%2FVO2oVrel46ijgPdNADNVlR0JIy%2Fch2KUDUqFyOlIbs5lXE00IIEc%2F6aVqte5kGl9vhYneF%2BQ9xEuusta8BqOaRFQGz%2BpUbUgWvwUyFxMYKToDUvbvL80PTskI5cC794rxxVGInStbSzAAREm4KuU5U%2Bs9o9vud3vzAdeeb0L8bBahME8tzZoYWK8gqBbLOMQzdHbH0M5xA83iOIH2Vsi0UNfFgR66ayqOLHmflevo9FnGp0sJWwNAV991VisNV64wEV8tWliXVPIib2PS%2FFuhkDz4XSKrN%2BhPzGvXAH%2FDm%2BiNb5l5V5rB%2BwVifv49qsJkOPjxgXRNEpuP%2B60aWQT3glc2h5RDFSZmZc0e3FgtKVUbogC8e%2F%2Fp71LjfkLB7LNL8dehlgbvUWbiSnSVYLVzCns%2BW8BjqkAZlhMmoxCw8RRdghmxLilmtKas5ojV4W%2FsDq8YCWUgev81BjG0ub5PLyyBzUirMjES0nSbT7bmJjbM7IK6%2BZ%2FsCT70Gs76MhenrLzjhSwXoWD%2FdElL964JHMHliq1JKwFsTiV%2BE4x2jCDTnMnb6qcMc0bCPIvzgipeRhKsbrGSWCHltAGZJKyQSS3bjqGNpQ4073hZvDqn47LAShnv%2F1ltudm13D&X-Amz-Signature=bd8ffe0b3394469022a14181f2beae463f4ed005b8742cbfd986e7eaef963d03&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TCVNTDK%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD3DkI38MoCaZrIaW2%2BaKKWMRH9mrrRUG%2BfrhQ3aNYTTAIhAI2Nk6E898ewSJA0otrgSRYSjC9ZAv0BcJ6sGCojPxtkKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4lHG1EGkEzyJYkBgq3AMac7c2FHCyHkIC7cSzCwBTsHwBcJM%2B50HWN2OY2yJBLYcMSbTDA06CCQE3Ta8sEqxSSJJm%2Bd4Gs0Fn%2FwS6jX6RN0mXortqT6lCIympIx5FbXBbqrQFbVhPzuhbP3WulMcmnwlXKrOlm7wlPP9PUNUjTBKyM2IqSUXFEYmmyH87raOG89okZPtW4AW6nhK0iUSW55%2Fingx338%2Bbxhd3hukEWiyIJKxijaicuij8%2FVO2oVrel46ijgPdNADNVlR0JIy%2Fch2KUDUqFyOlIbs5lXE00IIEc%2F6aVqte5kGl9vhYneF%2BQ9xEuusta8BqOaRFQGz%2BpUbUgWvwUyFxMYKToDUvbvL80PTskI5cC794rxxVGInStbSzAAREm4KuU5U%2Bs9o9vud3vzAdeeb0L8bBahME8tzZoYWK8gqBbLOMQzdHbH0M5xA83iOIH2Vsi0UNfFgR66ayqOLHmflevo9FnGp0sJWwNAV991VisNV64wEV8tWliXVPIib2PS%2FFuhkDz4XSKrN%2BhPzGvXAH%2FDm%2BiNb5l5V5rB%2BwVifv49qsJkOPjxgXRNEpuP%2B60aWQT3glc2h5RDFSZmZc0e3FgtKVUbogC8e%2F%2Fp71LjfkLB7LNL8dehlgbvUWbiSnSVYLVzCns%2BW8BjqkAZlhMmoxCw8RRdghmxLilmtKas5ojV4W%2FsDq8YCWUgev81BjG0ub5PLyyBzUirMjES0nSbT7bmJjbM7IK6%2BZ%2FsCT70Gs76MhenrLzjhSwXoWD%2FdElL964JHMHliq1JKwFsTiV%2BE4x2jCDTnMnb6qcMc0bCPIvzgipeRhKsbrGSWCHltAGZJKyQSS3bjqGNpQ4073hZvDqn47LAShnv%2F1ltudm13D&X-Amz-Signature=0b0434cae7537a3b7334e17742ea987047acce1f541e54247400993e4bc3d7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
