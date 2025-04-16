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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLTHITP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpoUv0c82EO1L%2FQzV8DuVUCigkJnj6Cp13UStev1cvkAiAPYhMQufV3dWK%2FItUpqI4HX74eKGMiruiZJQe9K6CueCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMQOXRzPR8foEZuvwZKtwDRxtR66DBWNPDu0zuSeZZqg%2FGSUWyFv9Xx94aNLMRvekyKgneLRtKyWbg04H9pxONjuKPoEcdqap6plJwSzVHxg9S%2B7T2IcIhOftZHzDoy5YGBkJ6zvUwkGbMR6hjIwNTP2qcGeFkVWnAYezl4hWdviy1z9lsEKyAOfJaVtEBOwMmLYbxK%2FxGoEPFIoktJf8VW1f%2BE7xARLXHWUkPpsCp3dtFPu%2FzSYgdfwssH2%2FTZW63fwpSuv%2Ffy4q3EByPzAygVRdbMkrnQvmloKITxqjgKJ%2FDk0Hue2BIBst8pfiXDCLwR3xHb6vrMMDJzcl%2FQGaaWn9D%2Bk8wT88j7Cda1JYk1Cmxbum58U2xxi%2F0V2rZJXP06DcuiIN6nkvEQ%2B1BufWA4MSGjey6%2FB2eh2gkYyy%2BTr1qcDHAnAEqNlJBs%2By%2B9kYqhMDaA709YZi9TW4HUt6V6wgBG2fxKnHlf%2Fsv%2FOq840J0T2LL201Ow6M93uHGKZT9aug636OB5y7sYawyCOXIoWhu71EXK2UO5%2Fx0P7%2BKjzKGcyL%2Fq2XcPw59JWVkmvIwcmY8ia2Mt1SK5Rnf3Wp1tAFvAeKsYZvzvG0z6nxgUnnoV083ip5ZqsQVRPCKeExPBbWxfuusYoGAA6owsd%2BAwAY6pgEX7rSS2WPCnRJZcx5DVDKJpL89xn3DlMbcSyv3XmVMfAcIWEJA1hbZyo5nRmvYcod3Qv1q7AQiQXZaZB2xlPXuWpn%2Fhrc%2FwdBxsmI2UCRVdrkMIG28k1cTm5BZRsWjYMCLvLvMKWJgQMRKKFUcjfrP%2Fu8jAHeQr9Lo1%2BxHzO0RCdYRFWIAW0oF%2Fqn6zM4gR2CzprWxYh55MWYMOb6X2FNkHe7hCVJU&X-Amz-Signature=8957ddc9c1c5c3bbeb0b73db7976bf80a7b687a4227ac978d2a30d9dcd45776d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLTHITP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpoUv0c82EO1L%2FQzV8DuVUCigkJnj6Cp13UStev1cvkAiAPYhMQufV3dWK%2FItUpqI4HX74eKGMiruiZJQe9K6CueCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMQOXRzPR8foEZuvwZKtwDRxtR66DBWNPDu0zuSeZZqg%2FGSUWyFv9Xx94aNLMRvekyKgneLRtKyWbg04H9pxONjuKPoEcdqap6plJwSzVHxg9S%2B7T2IcIhOftZHzDoy5YGBkJ6zvUwkGbMR6hjIwNTP2qcGeFkVWnAYezl4hWdviy1z9lsEKyAOfJaVtEBOwMmLYbxK%2FxGoEPFIoktJf8VW1f%2BE7xARLXHWUkPpsCp3dtFPu%2FzSYgdfwssH2%2FTZW63fwpSuv%2Ffy4q3EByPzAygVRdbMkrnQvmloKITxqjgKJ%2FDk0Hue2BIBst8pfiXDCLwR3xHb6vrMMDJzcl%2FQGaaWn9D%2Bk8wT88j7Cda1JYk1Cmxbum58U2xxi%2F0V2rZJXP06DcuiIN6nkvEQ%2B1BufWA4MSGjey6%2FB2eh2gkYyy%2BTr1qcDHAnAEqNlJBs%2By%2B9kYqhMDaA709YZi9TW4HUt6V6wgBG2fxKnHlf%2Fsv%2FOq840J0T2LL201Ow6M93uHGKZT9aug636OB5y7sYawyCOXIoWhu71EXK2UO5%2Fx0P7%2BKjzKGcyL%2Fq2XcPw59JWVkmvIwcmY8ia2Mt1SK5Rnf3Wp1tAFvAeKsYZvzvG0z6nxgUnnoV083ip5ZqsQVRPCKeExPBbWxfuusYoGAA6owsd%2BAwAY6pgEX7rSS2WPCnRJZcx5DVDKJpL89xn3DlMbcSyv3XmVMfAcIWEJA1hbZyo5nRmvYcod3Qv1q7AQiQXZaZB2xlPXuWpn%2Fhrc%2FwdBxsmI2UCRVdrkMIG28k1cTm5BZRsWjYMCLvLvMKWJgQMRKKFUcjfrP%2Fu8jAHeQr9Lo1%2BxHzO0RCdYRFWIAW0oF%2Fqn6zM4gR2CzprWxYh55MWYMOb6X2FNkHe7hCVJU&X-Amz-Signature=f332a31d0062f0e1a07c88cff889a73b3beee6bb58bc11c82f4e2beca7509154&X-Amz-SignedHeaders=host&x-id=GetObject)

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
