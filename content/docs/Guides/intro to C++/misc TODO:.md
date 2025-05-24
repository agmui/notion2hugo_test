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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZLBABAC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIG4lT3tJpQ0RZKfeoxhuIVoNNBglkEJMxLvANYpCpnYBAiAtEqYWXA%2FwbSfi6FEfsiuxgVWgPROhKPKP1bstmirXcCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMwF9eMoebce0%2FIoj9KtwDsnX8rXi6WVe0zyg27YK19Ro5ercaiqLomQrrotebMijXdBCsD1Gw27mU%2Bgxro44HHJhGd3P3ZjOtAZPt3640k81VYr6JLZWgw3svU%2FP1JhqITWalTOJYnM%2FL0U00XBZKGzy07p%2F2SXJTYbeDyhrxWBYhQRSCQvLi%2BlX6mGrtZS%2BbiDDT%2FJgcyClWV0hyvqCyuk4XOTwPeHxWcV8vhXEBAnLzhTIDcp1hDChYGUY58bz8EvNQcQ94wtKvKozn8pmAFJ6f%2B3yQ%2BgVKf7fPlzsyda6dH90iMts6UAQm2QwDVOOsDxoqdOuiOJA6cnGucWa5EdDeYPZrCxjjyW88YsTuXY3JhCVM1EeL%2Fku57D8%2FzE%2BdzMlObbPg%2F4bpVHEwxfO%2F70n%2Bl0lliCR5IomtWFo2JLUnrJs65Txz3Mz9ImB3c%2FOuMIRH8pGSe0sCFh7w6d0OZC3iTONqqKj21y8KTTVZhjjbSn1TBLDWB7KAqYOtxEjPvWNggiNRf38ERJlbiJtI3G7ffcdV6cpJ%2FVEPNZLXumWguYDmZFATuIC2xV9zAzK1XWC1%2F%2BpGBc0unHfZnJn4tgz5v%2BCyv1zGVTsswN29x4cTTiwDg%2FmQk2EPHa3YXJE1MF6IhpbXyW%2Bhfhww5PXIwQY6pgE9LrVrSD7astkd3N%2B7jcxZ9NN9GduDSgUM%2F56KDcut%2FaKHEgFxywzxuni%2FW%2FGgfxYmZtUgvlJogXgQfu0tjLXdTJUjSr8qIb76BEHK7r3IThe71WDeTcVpCBzTCmqoRvV5bI5d1A3ApbX4RWlhGzojwlUyuUcp4w%2FHKK2Yiuryl9vScjt96Txjac5wD3r9QVRJlYFyUQlntXTLSnVafm%2F%2BYFY%2FIRYQ&X-Amz-Signature=a669f681c831d784f16f7f8619d83dbcfef900c55172253d937b6fea5066ef2d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZLBABAC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIG4lT3tJpQ0RZKfeoxhuIVoNNBglkEJMxLvANYpCpnYBAiAtEqYWXA%2FwbSfi6FEfsiuxgVWgPROhKPKP1bstmirXcCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMwF9eMoebce0%2FIoj9KtwDsnX8rXi6WVe0zyg27YK19Ro5ercaiqLomQrrotebMijXdBCsD1Gw27mU%2Bgxro44HHJhGd3P3ZjOtAZPt3640k81VYr6JLZWgw3svU%2FP1JhqITWalTOJYnM%2FL0U00XBZKGzy07p%2F2SXJTYbeDyhrxWBYhQRSCQvLi%2BlX6mGrtZS%2BbiDDT%2FJgcyClWV0hyvqCyuk4XOTwPeHxWcV8vhXEBAnLzhTIDcp1hDChYGUY58bz8EvNQcQ94wtKvKozn8pmAFJ6f%2B3yQ%2BgVKf7fPlzsyda6dH90iMts6UAQm2QwDVOOsDxoqdOuiOJA6cnGucWa5EdDeYPZrCxjjyW88YsTuXY3JhCVM1EeL%2Fku57D8%2FzE%2BdzMlObbPg%2F4bpVHEwxfO%2F70n%2Bl0lliCR5IomtWFo2JLUnrJs65Txz3Mz9ImB3c%2FOuMIRH8pGSe0sCFh7w6d0OZC3iTONqqKj21y8KTTVZhjjbSn1TBLDWB7KAqYOtxEjPvWNggiNRf38ERJlbiJtI3G7ffcdV6cpJ%2FVEPNZLXumWguYDmZFATuIC2xV9zAzK1XWC1%2F%2BpGBc0unHfZnJn4tgz5v%2BCyv1zGVTsswN29x4cTTiwDg%2FmQk2EPHa3YXJE1MF6IhpbXyW%2Bhfhww5PXIwQY6pgE9LrVrSD7astkd3N%2B7jcxZ9NN9GduDSgUM%2F56KDcut%2FaKHEgFxywzxuni%2FW%2FGgfxYmZtUgvlJogXgQfu0tjLXdTJUjSr8qIb76BEHK7r3IThe71WDeTcVpCBzTCmqoRvV5bI5d1A3ApbX4RWlhGzojwlUyuUcp4w%2FHKK2Yiuryl9vScjt96Txjac5wD3r9QVRJlYFyUQlntXTLSnVafm%2F%2BYFY%2FIRYQ&X-Amz-Signature=59fc206df16b17bf72edc3e7c880b62b942dc8b5b1da7cb96cb3ae958386092d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
