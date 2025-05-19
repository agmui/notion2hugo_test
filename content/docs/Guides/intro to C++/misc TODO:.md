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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEL7VBKH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYPz%2BR%2F84yj2Af9ISSgTyI4aZR4qJYY3gMjIRAvYG3jAiBQ%2BrOx6D8xOkQOUWpV6%2BzeSLAtR%2Bv9U%2B%2FpCj7uDxxcQiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwvba8HL2EIQui6RmKtwDwUAZYGzx2wozm9baAEHETPhs1wVCEJpSzqwuB1muuL32WpjvCWsQ7rcYqLqCAdE3xEDTjRHEpoPfm3oUPdrBAC74IotLbsE3dp10grz2HMriSSaVJ5FEPm28SJk9nmnYI6t9kRPLWOnYqZwrC4QnqXuf3grKUBDz8%2FkQMMsn110O%2F4nCroZyNC%2FehekqEcWDCAQNDnsaZXsfFoh4kYTEFfTrWBsMoCtYPv%2F5EirwXxE%2FUTp5Ckne3eu0OwPMFqDItvaq4LRpVrvWkBVqtGxWCFFNyaS6PkiRmS1M2Vv18ohsggM6a5ODASr7dxJtwBUVKR5mSEtHfxGUX3WUaQvMj%2Bj0AkzuPGPsQTIxQwrzHpi3e7DpDuC9%2FW4MqpBuVqy0qd7wBLvUrrbwzEYrXoBBiNo0cWTCyfsCGf23zMiSm7NvXgGetWYg36DEdacFApjrra9kOKmrFJeguEEaH8jwtPHuFXGdbSs7hr1ttyagaVPxBWSJedrmBuuoI9bakrjqvu667najMen4u9eNstqTWNPcLqCdDeUCw80JpQPxiaWGLZfu7L%2BFoL9uXMzY6jpQZYKE1Y2I3EIIAK6cwyuzMD0qxpHpYOuga%2B2Eg9Mc8qODnj2dfKhBVhLznHUw156rwQY6pgGRCaccAsG5xhlogmGPduUO4yCMWU8s%2BlcRqQqlgRawai2hQWDk7S1RAFPw2B1gkXsXlk%2F719JS6iS2hr1vmxP7MAdJQsGg%2FwQa51sm3tVQ%2Fw6mypYc%2BghNHztNG5DPFR3n02TPWkcdEs9UViohHFUHdddXKmPDhECrgJur%2FfJO2jYR88esxM%2Fr5XfkaHZHKWIvp9aYjQrZKqhUaGs4gZ%2BT56Wqe02h&X-Amz-Signature=7623f77c235088f8bb667e2a3e28aff3e4c331ff9cd77a3f7e0068abc6cba46d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEL7VBKH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYPz%2BR%2F84yj2Af9ISSgTyI4aZR4qJYY3gMjIRAvYG3jAiBQ%2BrOx6D8xOkQOUWpV6%2BzeSLAtR%2Bv9U%2B%2FpCj7uDxxcQiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwvba8HL2EIQui6RmKtwDwUAZYGzx2wozm9baAEHETPhs1wVCEJpSzqwuB1muuL32WpjvCWsQ7rcYqLqCAdE3xEDTjRHEpoPfm3oUPdrBAC74IotLbsE3dp10grz2HMriSSaVJ5FEPm28SJk9nmnYI6t9kRPLWOnYqZwrC4QnqXuf3grKUBDz8%2FkQMMsn110O%2F4nCroZyNC%2FehekqEcWDCAQNDnsaZXsfFoh4kYTEFfTrWBsMoCtYPv%2F5EirwXxE%2FUTp5Ckne3eu0OwPMFqDItvaq4LRpVrvWkBVqtGxWCFFNyaS6PkiRmS1M2Vv18ohsggM6a5ODASr7dxJtwBUVKR5mSEtHfxGUX3WUaQvMj%2Bj0AkzuPGPsQTIxQwrzHpi3e7DpDuC9%2FW4MqpBuVqy0qd7wBLvUrrbwzEYrXoBBiNo0cWTCyfsCGf23zMiSm7NvXgGetWYg36DEdacFApjrra9kOKmrFJeguEEaH8jwtPHuFXGdbSs7hr1ttyagaVPxBWSJedrmBuuoI9bakrjqvu667najMen4u9eNstqTWNPcLqCdDeUCw80JpQPxiaWGLZfu7L%2BFoL9uXMzY6jpQZYKE1Y2I3EIIAK6cwyuzMD0qxpHpYOuga%2B2Eg9Mc8qODnj2dfKhBVhLznHUw156rwQY6pgGRCaccAsG5xhlogmGPduUO4yCMWU8s%2BlcRqQqlgRawai2hQWDk7S1RAFPw2B1gkXsXlk%2F719JS6iS2hr1vmxP7MAdJQsGg%2FwQa51sm3tVQ%2Fw6mypYc%2BghNHztNG5DPFR3n02TPWkcdEs9UViohHFUHdddXKmPDhECrgJur%2FfJO2jYR88esxM%2Fr5XfkaHZHKWIvp9aYjQrZKqhUaGs4gZ%2BT56Wqe02h&X-Amz-Signature=90f0e5ece98558e0a549835642b411fc4d0ea1d6c39355adbec57761cd56df42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
