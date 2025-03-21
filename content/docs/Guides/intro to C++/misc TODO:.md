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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2DTPRO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIBdsHB%2BgD1pHAtpFi%2BQuoVzHhnDpORTTLxpd5GkWxiVfAiA%2B3FmXlIbk7PGk68RK5bGzfPD4RfQMj42CJdaLWCjjNyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9AfRBcVDumgG68CRKtwD6zKp%2BH8cLwOrdJr8ZLOr0n5nyWgVSWUA0pl7zalSZFx03E%2BnIVAhMfkRq8GkRkLCRYyv9cCjnR0xhxiuwmp%2Fe7qnMMpeH3hk2C2kMhlMWmUI2Khg8vA%2F%2Bw%2BOywAKupzvfPc%2FjRL4cfDXK99J2BvPXBHYdqu0lgVcnVqOawAMymJLHkzaOdfuPTEwZtTguAPmj%2B%2FoGam0NFedthQWBpza1XOlWm62sDMYONFeILBGY3PpSjycF5OwzChBQz5gyo1CX8ffR0%2F3erMF%2FbG8cJPOKSZAXACmcURm8BhjgdLRgWTwQ9UsRsjNLPa5a9MAl0bigbkRyfQURC3hC0NOVqyFIGi%2BtfD59AIQ%2BscLeXhOG5M9IslGmzNzW6l%2BBP5BSGqxiHoH3Wf77hDu7AGB4gu%2BXOl8K5eOIhwJOR0iHdrunc6UsNVsy%2BVGnng751zReiiuQCGzcFycMkwBOsOz7SI9QGtqWUtWuviBsrUs%2Ba9MnlDzHcpk4dlivm%2BzuHYk3gOFhq0JAAH76CD753OdyJeJYTNs581O8ityiyZgycKgyvf8hkup7FRNi6ymmOG9RIWjt8jMxHfA2nnyqkHDTCm9CJfe%2FBgDDExfciH42bHprnI5NbpmIGlDmhn%2FGucwwLr2vgY6pgHzlG9PWfa76FKufbzLKf0s0UBFuLBE5jry%2BK00Z9zVEq%2BoJyUGmJURAEnrJvynEBme69K%2B38mU%2B77W5aBgO9TWa7VFV2xryEQ3%2BeB4zhlQWAsPdwNM1P7zL2oZ%2F55fOu8Lpal%2FlvhEIyapJFE5VtvdhQQ%2BFHDDmnpdHWS8D49qI3g21SCHsHd9YkepB47426yGx0nfRzlk4IBbiPkKtBpsWRUpprUW&X-Amz-Signature=22bf6adb1a70e423c243f5bdeffc4f63d6f1bc95e58ecd9a788706e8195282a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2DTPRO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIBdsHB%2BgD1pHAtpFi%2BQuoVzHhnDpORTTLxpd5GkWxiVfAiA%2B3FmXlIbk7PGk68RK5bGzfPD4RfQMj42CJdaLWCjjNyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9AfRBcVDumgG68CRKtwD6zKp%2BH8cLwOrdJr8ZLOr0n5nyWgVSWUA0pl7zalSZFx03E%2BnIVAhMfkRq8GkRkLCRYyv9cCjnR0xhxiuwmp%2Fe7qnMMpeH3hk2C2kMhlMWmUI2Khg8vA%2F%2Bw%2BOywAKupzvfPc%2FjRL4cfDXK99J2BvPXBHYdqu0lgVcnVqOawAMymJLHkzaOdfuPTEwZtTguAPmj%2B%2FoGam0NFedthQWBpza1XOlWm62sDMYONFeILBGY3PpSjycF5OwzChBQz5gyo1CX8ffR0%2F3erMF%2FbG8cJPOKSZAXACmcURm8BhjgdLRgWTwQ9UsRsjNLPa5a9MAl0bigbkRyfQURC3hC0NOVqyFIGi%2BtfD59AIQ%2BscLeXhOG5M9IslGmzNzW6l%2BBP5BSGqxiHoH3Wf77hDu7AGB4gu%2BXOl8K5eOIhwJOR0iHdrunc6UsNVsy%2BVGnng751zReiiuQCGzcFycMkwBOsOz7SI9QGtqWUtWuviBsrUs%2Ba9MnlDzHcpk4dlivm%2BzuHYk3gOFhq0JAAH76CD753OdyJeJYTNs581O8ityiyZgycKgyvf8hkup7FRNi6ymmOG9RIWjt8jMxHfA2nnyqkHDTCm9CJfe%2FBgDDExfciH42bHprnI5NbpmIGlDmhn%2FGucwwLr2vgY6pgHzlG9PWfa76FKufbzLKf0s0UBFuLBE5jry%2BK00Z9zVEq%2BoJyUGmJURAEnrJvynEBme69K%2B38mU%2B77W5aBgO9TWa7VFV2xryEQ3%2BeB4zhlQWAsPdwNM1P7zL2oZ%2F55fOu8Lpal%2FlvhEIyapJFE5VtvdhQQ%2BFHDDmnpdHWS8D49qI3g21SCHsHd9YkepB47426yGx0nfRzlk4IBbiPkKtBpsWRUpprUW&X-Amz-Signature=dc5f691323c710e4335759d37957102c4835baf1b285caf656c7bf01b7700442&X-Amz-SignedHeaders=host&x-id=GetObject)

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
