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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KV7VEVZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEK%2B8kagcLlk0PPQA0Lj3k2NHM99bhkD6lLFdI2imFSzAiBMP0SpJb%2FZKb9DHJS%2FoPI7jnW656Ko7kGV%2BEZ5m1wviSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMerFt2%2FGMWm3ow%2BRiKtwD8jR3%2FvHCSZO7xGbrmlYFZC%2F68PWiXiJmHiyhgIq38MyTGEiZtv8S0EAYNL2yxHQGRquQOLAZB8c1AWK1cu2UbCSOtoY5Axxwg0vzCcDJ1r3e9NLcrt4ar3xk%2BV9utdQPkzOJR7JJaZydPbhoA8oUT49USJeCefON7PSWbiGvGgt2Pjq0G8f2G5OpQkswlsQ2uXAFAhh8xFAB7rhn7GZ3trjiG%2BWUnKInSR1RLjpaX5uOHYLjc5E%2FkYjR0%2FSXb9L5rgdPFH3x%2BqfyAQFm7JK3cGkoPWtyBt9qCI0xzNfhCoguh%2Bul0Bb0x6raZKKCkVUVb%2B1VBHAv%2BQag%2FskrczRC3w1qGdTL9a2cfsd5IhcydzkiZbnGbsaUcPv%2FnIXd23WNrFplaN7DtGoxASGTI1EQlJ8dT%2F6Yh0dhgUSlEYJ5PyIXAWh4cPGCPqwl1nhnIJLE0CKaeDHFWuxauOCrgJf5rkQPSTZVMeK%2FOEIVbFH5cFnLIjTojp8QsNCeGaBXLxF%2BDposZY2rSxCQ3MetliY9P2qMC%2Fxby6uyVu%2BZR%2FJTNBhGfySHYoaJ1iRRbgXKUf5wY%2BK14QnRkotf4Pw%2FFDQ5B4V2hwkw132%2F4d1OjfeHwli54BBmmw6%2FXjDgRCQwgN3hvwY6pgHrmlcI54NTvEYc8%2FxyzmfLLcMskHSd6sGTwZOEC%2BhRE1dw817SrYZyzzR5%2Fhw0p3ZN3LF1xphrKtcsrOMv9LnE7haguxWrMBMqWYh5PbtrsmWMCz1Chgv%2FSyyalICqrvMB74tJ4BZh5nrA4OjwkVIXxiM9lwyWdpQTx5EMId5j93RvvAT%2Fk0l6EtDUEh3Ke4IPydmZxfunig2YLBl%2BqP3uJWcHu8eo&X-Amz-Signature=8f2ff3aeaf73a77d8069ea5a5704ac611c9748268e3a8fe8b4d5a8524512da9e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KV7VEVZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEK%2B8kagcLlk0PPQA0Lj3k2NHM99bhkD6lLFdI2imFSzAiBMP0SpJb%2FZKb9DHJS%2FoPI7jnW656Ko7kGV%2BEZ5m1wviSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMerFt2%2FGMWm3ow%2BRiKtwD8jR3%2FvHCSZO7xGbrmlYFZC%2F68PWiXiJmHiyhgIq38MyTGEiZtv8S0EAYNL2yxHQGRquQOLAZB8c1AWK1cu2UbCSOtoY5Axxwg0vzCcDJ1r3e9NLcrt4ar3xk%2BV9utdQPkzOJR7JJaZydPbhoA8oUT49USJeCefON7PSWbiGvGgt2Pjq0G8f2G5OpQkswlsQ2uXAFAhh8xFAB7rhn7GZ3trjiG%2BWUnKInSR1RLjpaX5uOHYLjc5E%2FkYjR0%2FSXb9L5rgdPFH3x%2BqfyAQFm7JK3cGkoPWtyBt9qCI0xzNfhCoguh%2Bul0Bb0x6raZKKCkVUVb%2B1VBHAv%2BQag%2FskrczRC3w1qGdTL9a2cfsd5IhcydzkiZbnGbsaUcPv%2FnIXd23WNrFplaN7DtGoxASGTI1EQlJ8dT%2F6Yh0dhgUSlEYJ5PyIXAWh4cPGCPqwl1nhnIJLE0CKaeDHFWuxauOCrgJf5rkQPSTZVMeK%2FOEIVbFH5cFnLIjTojp8QsNCeGaBXLxF%2BDposZY2rSxCQ3MetliY9P2qMC%2Fxby6uyVu%2BZR%2FJTNBhGfySHYoaJ1iRRbgXKUf5wY%2BK14QnRkotf4Pw%2FFDQ5B4V2hwkw132%2F4d1OjfeHwli54BBmmw6%2FXjDgRCQwgN3hvwY6pgHrmlcI54NTvEYc8%2FxyzmfLLcMskHSd6sGTwZOEC%2BhRE1dw817SrYZyzzR5%2Fhw0p3ZN3LF1xphrKtcsrOMv9LnE7haguxWrMBMqWYh5PbtrsmWMCz1Chgv%2FSyyalICqrvMB74tJ4BZh5nrA4OjwkVIXxiM9lwyWdpQTx5EMId5j93RvvAT%2Fk0l6EtDUEh3Ke4IPydmZxfunig2YLBl%2BqP3uJWcHu8eo&X-Amz-Signature=f3c8b9d9d20f31cfc6a775e600b60275d1741971502f3242183a4a53b3dfd890&X-Amz-SignedHeaders=host&x-id=GetObject)

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
