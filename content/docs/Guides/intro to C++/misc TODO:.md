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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKW4GJWO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8mZ9kSWVgxaTTUIIygt1DbU0BufndYAZBi2TNIfn6awIhAKJngyHPNzOyNKpkt0DksxyTPgPiE9Jka6K9Idl42ZLYKv8DCEEQABoMNjM3NDIzMTgzODA1IgxSei3b8fdxQxDrfxIq3ANyn078%2FONF95RPNV7IBNzxXa4tmVuM66VD60f4%2BPp1TztCaI%2Brswds1GGNUDRSK4hMetSkObizCM9EYPmq0c1R1u1rcxFRZmioxqVAAwk6t8imac0%2FBp9TM%2FcvQRGpzEmJEYUZm6%2BbehBt%2F1a5IV4dC6vywzJovFUajHAJsWYYD1BvbJkhP75ebbpWsJyifRMwImqPnwwsqr7ESaTmcFBpRdwCyK%2FHMYTbJhvqvQNHej8yfyoNQDalZIZQS%2BKaStsfNkEqCrOavq0g%2BXl7QQbmhtMyDFCCmfqd6qmbUzuCj5UAoUq4pkInTpNT9O3%2BuhP79RPgS17dcG9GZ677uXBwSiKi2EPq%2FQnrRT7dzcr2SmerJfLE7dzks81UfI%2BGA%2BVHp0YJMjHhh2Ycz8tdcPpjGnV8zN8%2BrsFowX5o%2Bqf9BXh5Bz37ZpXYdcJMIb5NgZGULEiobWM48O1ubg1sGIc3k5%2FakRtT8cljxDk2CnLYRFbpgrPDDAVSbjFkK9Uua67hypodmE1gUPiUsM8ibBHFCuWJ19fA%2FTdVv5oP4gr%2FhDbiH8hIimG70o5f0k1Gg%2Fu%2Ffx6PjGPdP1WDI8n3lCq%2Bmda9G6PCunryzq%2B4INRpiPeahhrPKA5QrTnxKjCPsN%2B%2BBjqkAXQY0%2Bqo4lK7SuELg0b%2FhOySsZHsNFk9ldLDJurQCsKOHkmwDgut53Nw03E163TioMn%2FHq2XcC264Nv4AK2C0RDqxSNleDYkpP2XKnPqQ5knrNo1mbLSI3tkXWtlTokhM3tuL1w59gS34PVOE1A2TkcYIe5kJ%2FfqerOeIzT%2Btryo40fAIdolKQn%2BZ48F1ABgEnKxUXYZAK1mBda3tECEIXl4n4qO&X-Amz-Signature=0f98d7eae9c36983329bff79e17c08ac2c9f91ad7cbf0c0cf17eb21295725751&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKW4GJWO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8mZ9kSWVgxaTTUIIygt1DbU0BufndYAZBi2TNIfn6awIhAKJngyHPNzOyNKpkt0DksxyTPgPiE9Jka6K9Idl42ZLYKv8DCEEQABoMNjM3NDIzMTgzODA1IgxSei3b8fdxQxDrfxIq3ANyn078%2FONF95RPNV7IBNzxXa4tmVuM66VD60f4%2BPp1TztCaI%2Brswds1GGNUDRSK4hMetSkObizCM9EYPmq0c1R1u1rcxFRZmioxqVAAwk6t8imac0%2FBp9TM%2FcvQRGpzEmJEYUZm6%2BbehBt%2F1a5IV4dC6vywzJovFUajHAJsWYYD1BvbJkhP75ebbpWsJyifRMwImqPnwwsqr7ESaTmcFBpRdwCyK%2FHMYTbJhvqvQNHej8yfyoNQDalZIZQS%2BKaStsfNkEqCrOavq0g%2BXl7QQbmhtMyDFCCmfqd6qmbUzuCj5UAoUq4pkInTpNT9O3%2BuhP79RPgS17dcG9GZ677uXBwSiKi2EPq%2FQnrRT7dzcr2SmerJfLE7dzks81UfI%2BGA%2BVHp0YJMjHhh2Ycz8tdcPpjGnV8zN8%2BrsFowX5o%2Bqf9BXh5Bz37ZpXYdcJMIb5NgZGULEiobWM48O1ubg1sGIc3k5%2FakRtT8cljxDk2CnLYRFbpgrPDDAVSbjFkK9Uua67hypodmE1gUPiUsM8ibBHFCuWJ19fA%2FTdVv5oP4gr%2FhDbiH8hIimG70o5f0k1Gg%2Fu%2Ffx6PjGPdP1WDI8n3lCq%2Bmda9G6PCunryzq%2B4INRpiPeahhrPKA5QrTnxKjCPsN%2B%2BBjqkAXQY0%2Bqo4lK7SuELg0b%2FhOySsZHsNFk9ldLDJurQCsKOHkmwDgut53Nw03E163TioMn%2FHq2XcC264Nv4AK2C0RDqxSNleDYkpP2XKnPqQ5knrNo1mbLSI3tkXWtlTokhM3tuL1w59gS34PVOE1A2TkcYIe5kJ%2FfqerOeIzT%2Btryo40fAIdolKQn%2BZ48F1ABgEnKxUXYZAK1mBda3tECEIXl4n4qO&X-Amz-Signature=daa119d9dcdb65d2a8ac736a83510cc7a479fff96a7752cf46c8d767fe07a06b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
