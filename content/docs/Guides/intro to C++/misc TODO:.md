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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRSUUK4C%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCHNcAUqJK2iSa2qpOAR20Xrj7KYxFpo8MKjl5xJeKV4QIhAOK1dCmorr%2B6vkixLUbI1keWv55YnTtw7VDqxkxUJyenKv8DCBcQABoMNjM3NDIzMTgzODA1IgznB3SC4iCyBw0GP0Eq3AMTGeP388oHsLkGzghxPdqFkOmZhcPB8rotDkqEsdLlzhUIb0fH4SAzTUin8dAACAJZ7IlcV0WYMKWrCldZyV6B4ROtUayvws45zCD3jjSVh0SISqIE4JSG23DXxRFq6z6ApNXN9CHkSapCS7mQuHRmfMPzODmVcYB5d5D4AkHPOnTxXFZma7HP49vZ1JEzr%2BYcbE2WAOlKlNusmuMVf6dKiHluPFCrQikAFdlLpCdUEYFi%2BA%2FtbtG9rqoHlgtEk73yfhZtlCs%2FwjGpEI8xTwHjwR8H3ldEv2J%2F0hD8ImI1t0eyTpIBqfyQbWOrMdUjEvpb9TNeFiUC7ZEoSlaXFk%2BQRZBiRIITyW8F7jE42Us7OS5HAM5uXPo0AuIqKZE6VkX448rec43Ot3TgOlr3fmbTmzUqBvJkDektC2WJYFzNOQCFLTxLZiMuVD05u7W6uFkqaroubGVBOHODfw9%2BWLo%2BKuvZ4CEKhQ3ThiLREn7WBaRSChbvMOYISYNkgi1Od2xxVijhISCNwNUfsesDDq3oNosPtlcBofl5jaiFJXNldZPriRHgOBMirm%2Fo5BgLYaDq3jtCSGxgwZM1vV4jWQps3hfjdVEVq9fwgMncdx5ex3ht1v99r2Zwpo4WRDDlhKnABjqkAUw3wC38FKaH0jXpsMuUVDIFrsAQw5cZT70SdXR%2FYbvpnBIiL5GkyiOEyzK9FQyTtF7VFNeyiq2h5wcxwGhnAovmPseELuOYjeqT21c1a4qih%2FF%2B6m17CjQCQjPiio5Bc7ssVGuKi2w%2FEmDhMfSMcQvWkm%2FrKIqNsLUEawQSjiphoSQd9MJSwuR8O%2BM%2BYt2u0V1zoKi%2B5wLqTNMwZxzQaiIhcg02&X-Amz-Signature=e210418b45e7e2fa8302a52832bba970e5d661e99355627507e460b35fe1428b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRSUUK4C%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCHNcAUqJK2iSa2qpOAR20Xrj7KYxFpo8MKjl5xJeKV4QIhAOK1dCmorr%2B6vkixLUbI1keWv55YnTtw7VDqxkxUJyenKv8DCBcQABoMNjM3NDIzMTgzODA1IgznB3SC4iCyBw0GP0Eq3AMTGeP388oHsLkGzghxPdqFkOmZhcPB8rotDkqEsdLlzhUIb0fH4SAzTUin8dAACAJZ7IlcV0WYMKWrCldZyV6B4ROtUayvws45zCD3jjSVh0SISqIE4JSG23DXxRFq6z6ApNXN9CHkSapCS7mQuHRmfMPzODmVcYB5d5D4AkHPOnTxXFZma7HP49vZ1JEzr%2BYcbE2WAOlKlNusmuMVf6dKiHluPFCrQikAFdlLpCdUEYFi%2BA%2FtbtG9rqoHlgtEk73yfhZtlCs%2FwjGpEI8xTwHjwR8H3ldEv2J%2F0hD8ImI1t0eyTpIBqfyQbWOrMdUjEvpb9TNeFiUC7ZEoSlaXFk%2BQRZBiRIITyW8F7jE42Us7OS5HAM5uXPo0AuIqKZE6VkX448rec43Ot3TgOlr3fmbTmzUqBvJkDektC2WJYFzNOQCFLTxLZiMuVD05u7W6uFkqaroubGVBOHODfw9%2BWLo%2BKuvZ4CEKhQ3ThiLREn7WBaRSChbvMOYISYNkgi1Od2xxVijhISCNwNUfsesDDq3oNosPtlcBofl5jaiFJXNldZPriRHgOBMirm%2Fo5BgLYaDq3jtCSGxgwZM1vV4jWQps3hfjdVEVq9fwgMncdx5ex3ht1v99r2Zwpo4WRDDlhKnABjqkAUw3wC38FKaH0jXpsMuUVDIFrsAQw5cZT70SdXR%2FYbvpnBIiL5GkyiOEyzK9FQyTtF7VFNeyiq2h5wcxwGhnAovmPseELuOYjeqT21c1a4qih%2FF%2B6m17CjQCQjPiio5Bc7ssVGuKi2w%2FEmDhMfSMcQvWkm%2FrKIqNsLUEawQSjiphoSQd9MJSwuR8O%2BM%2BYt2u0V1zoKi%2B5wLqTNMwZxzQaiIhcg02&X-Amz-Signature=0dfe222750f4a76bb5a905e6b1d8d521bb765c1f4ee3bb6c0633d76df7af7f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
