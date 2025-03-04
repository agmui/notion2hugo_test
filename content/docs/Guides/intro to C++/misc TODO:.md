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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWYLVHQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3taORP61HV8XY72FFER%2FyWoetXIg%2F3dzP1%2FoyE3LfeQIhAOza7APsgVd%2B4VU8uGpV9nUH8RiSdY2Z1tzBCWn7e3cxKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzpzf18Gy6e5mLbmR0q3APOVCsE8KciRW34LfLxByaWW53wv0KG208wJp9oSENHFJZSlHEWrEOpsA%2FBKKWc33sBvRlAbxKz%2BjkCxWlYKqFb3pTZ0AORgc0qJWK3DNvDy6no%2FU3mGkJfXflXk%2BxZ8KUo3NDHlpWK%2BJbo3woYILC4wEL3UO2jjQUMNgAPSjkSLfPlHIigliQbvk2JCRDebqqW6NM%2Bv7dYmY3AmQe2sXrs2OaL%2F3a6K1tim2MaYBDV%2Fbc8YebKmHcaKQ8NthXGwac1iCOU3pTAxSQr58LYJ9AYM%2F42Rc9VWW6gxqQgK7JNQA1E7jTgrR9%2FYJtRXCl6OH3F%2BzyMpeZVrGeygJ3e5zoXqIzX24uFJa5g80b7%2B6TwoR4AfedtYma9jmFmJD0Ct0pd8JezAniVcwOJjQedXR93aha8vgDjx4OUacMaoSGSzjaAkls%2FAWRCa51p6u2KKRujk6SzVUpw9FPO8lkyel%2FzKjdY9%2FTzSRNTh%2BRGoUGSQeprr0AWIUjSo4DFC7%2BY81ZuRj0wdhWiY7zrU0VPYsqkWAL%2Fh5XkdDp%2BKFkLWmBUtpASXBgKWDlD3V5vKSTFRMr95QRdGRgkmAxP4gFpgDBPWemGJTNS5IUQSm10d0sicOLRn0VsGOm2%2FWokQjDY95y%2BBjqkAb9gHxF8Y7H%2Fcl8e7DF9yBkiAW%2Bo0iGq65W1PWpw4psQomim8%2BYnuhJWRbkx1F0FgdH8vEhujKOVIStDb3dyO9Q2DrYSaiuLubX9rI%2FGfYHLcPJkfWwFJJDb%2BbUmpzPVp6xKz8f%2Fm1G0Gmq2MbYVeJsHEF%2BK6m50pF5Vt8MZlwtxs31KOAhX1RnUd2nLh2MBhc9mQkaOjpgzg3DLgyUPXatrxvsx&X-Amz-Signature=a3f498da64d757e702e8e4d815441e4b077e5bb74de6bea11b4514aecc4148cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWYLVHQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3taORP61HV8XY72FFER%2FyWoetXIg%2F3dzP1%2FoyE3LfeQIhAOza7APsgVd%2B4VU8uGpV9nUH8RiSdY2Z1tzBCWn7e3cxKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzpzf18Gy6e5mLbmR0q3APOVCsE8KciRW34LfLxByaWW53wv0KG208wJp9oSENHFJZSlHEWrEOpsA%2FBKKWc33sBvRlAbxKz%2BjkCxWlYKqFb3pTZ0AORgc0qJWK3DNvDy6no%2FU3mGkJfXflXk%2BxZ8KUo3NDHlpWK%2BJbo3woYILC4wEL3UO2jjQUMNgAPSjkSLfPlHIigliQbvk2JCRDebqqW6NM%2Bv7dYmY3AmQe2sXrs2OaL%2F3a6K1tim2MaYBDV%2Fbc8YebKmHcaKQ8NthXGwac1iCOU3pTAxSQr58LYJ9AYM%2F42Rc9VWW6gxqQgK7JNQA1E7jTgrR9%2FYJtRXCl6OH3F%2BzyMpeZVrGeygJ3e5zoXqIzX24uFJa5g80b7%2B6TwoR4AfedtYma9jmFmJD0Ct0pd8JezAniVcwOJjQedXR93aha8vgDjx4OUacMaoSGSzjaAkls%2FAWRCa51p6u2KKRujk6SzVUpw9FPO8lkyel%2FzKjdY9%2FTzSRNTh%2BRGoUGSQeprr0AWIUjSo4DFC7%2BY81ZuRj0wdhWiY7zrU0VPYsqkWAL%2Fh5XkdDp%2BKFkLWmBUtpASXBgKWDlD3V5vKSTFRMr95QRdGRgkmAxP4gFpgDBPWemGJTNS5IUQSm10d0sicOLRn0VsGOm2%2FWokQjDY95y%2BBjqkAb9gHxF8Y7H%2Fcl8e7DF9yBkiAW%2Bo0iGq65W1PWpw4psQomim8%2BYnuhJWRbkx1F0FgdH8vEhujKOVIStDb3dyO9Q2DrYSaiuLubX9rI%2FGfYHLcPJkfWwFJJDb%2BbUmpzPVp6xKz8f%2Fm1G0Gmq2MbYVeJsHEF%2BK6m50pF5Vt8MZlwtxs31KOAhX1RnUd2nLh2MBhc9mQkaOjpgzg3DLgyUPXatrxvsx&X-Amz-Signature=71a5fbf072397c4012cfb10fc123e88d87bbd47a2ad7670a466450560de86456&X-Amz-SignedHeaders=host&x-id=GetObject)

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
