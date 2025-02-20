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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSPUCOD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDATKPcIn4QJH%2FPP9AwHKDda8LaNVZBSL3WXJpeKZFolgIhAIxm4xIMuP7pTM%2FPWsmo%2B6PcOsaYlF9gjU31WBO8uUaeKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7Sa%2BSUAhYkaFWO3Aq3ANhL2yyAP%2Fgumr0IJhJB5licdpeaJJ6yvLdpjlYc4sj1S57qUnzmAt7rQKPjesR6989pNYucJgEAP9xThaiRI7kpiQtXSV2EfyWAhQrGPzHvJe7XP%2FrKPgqc%2FtVQ%2Fec29gYUnuvtiEM8RCknM9cEuIs0DQL7vgCSOYrXxz2CEu1pmsjyjX0UH6wzbUo%2FeXL2tmBFznVe3KnQzCdjNAaavorJoejpx6xZEVk410xz%2BJys%2BBjBxkyxW4f0qFn5cUbZ5m2fKYAWiqh1fBFrW8xIcIPI85Nn1mk2L6%2F2abLWMjqdWCU1ow1ELXwhHCX0BYnB1ad7nfsFjV3kcfluJXuzlG9Ojg6A7eX2nDMlw0%2FgySL%2Fu%2F5fsnYT8HgLxxKgYqnPzZZIdtE2dz4GUFZmK71ffzP%2FXDD1BCBBfs3cPoKcrhE%2FUf%2Bzm8uLV%2FwZoY9FiUCtE1VyAMx4cFJMFvw%2FqQNRquRXO1tz3PYv8yVhAVlIS4Y25fnrLypPhkD%2BVSROSqca0aqOtaVbIl3ZaRf4j1xTNn9Ma0SAQI9nqsUBERMNyqBUwUZ6QcYGXQnbbBkxkxbwQYd0XSKL1lSlEy8KugZ7KoD1A0xl9%2Fn1kRYyZmJy00WR%2FeYw91SJxxx%2FnOjhDDInNu9BjqkAR%2FeSZ6pbCW8W3pvD9mjFxv7%2Bn7MK4JLUsTGJJeucndXVcPpd%2B0gcu52kjHYR912uRilGVpHNLRVc7KBFDab3aH91c3WecmPBXcjs7wapCWyX0fatJKcuojtRjujhB7uJU%2FMGtALK3JSJXy913dNrz1HTZA9OzdCkozH%2Bj3DAlAynixQkOeKl4DHQen1hFarbVmGcu%2FTAumDvzx3U8K0hstfIJaj&X-Amz-Signature=3f066a08b45cbb32cfe0219354d2025a98f0a080cc1616935997c0368f128c44&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSPUCOD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDATKPcIn4QJH%2FPP9AwHKDda8LaNVZBSL3WXJpeKZFolgIhAIxm4xIMuP7pTM%2FPWsmo%2B6PcOsaYlF9gjU31WBO8uUaeKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7Sa%2BSUAhYkaFWO3Aq3ANhL2yyAP%2Fgumr0IJhJB5licdpeaJJ6yvLdpjlYc4sj1S57qUnzmAt7rQKPjesR6989pNYucJgEAP9xThaiRI7kpiQtXSV2EfyWAhQrGPzHvJe7XP%2FrKPgqc%2FtVQ%2Fec29gYUnuvtiEM8RCknM9cEuIs0DQL7vgCSOYrXxz2CEu1pmsjyjX0UH6wzbUo%2FeXL2tmBFznVe3KnQzCdjNAaavorJoejpx6xZEVk410xz%2BJys%2BBjBxkyxW4f0qFn5cUbZ5m2fKYAWiqh1fBFrW8xIcIPI85Nn1mk2L6%2F2abLWMjqdWCU1ow1ELXwhHCX0BYnB1ad7nfsFjV3kcfluJXuzlG9Ojg6A7eX2nDMlw0%2FgySL%2Fu%2F5fsnYT8HgLxxKgYqnPzZZIdtE2dz4GUFZmK71ffzP%2FXDD1BCBBfs3cPoKcrhE%2FUf%2Bzm8uLV%2FwZoY9FiUCtE1VyAMx4cFJMFvw%2FqQNRquRXO1tz3PYv8yVhAVlIS4Y25fnrLypPhkD%2BVSROSqca0aqOtaVbIl3ZaRf4j1xTNn9Ma0SAQI9nqsUBERMNyqBUwUZ6QcYGXQnbbBkxkxbwQYd0XSKL1lSlEy8KugZ7KoD1A0xl9%2Fn1kRYyZmJy00WR%2FeYw91SJxxx%2FnOjhDDInNu9BjqkAR%2FeSZ6pbCW8W3pvD9mjFxv7%2Bn7MK4JLUsTGJJeucndXVcPpd%2B0gcu52kjHYR912uRilGVpHNLRVc7KBFDab3aH91c3WecmPBXcjs7wapCWyX0fatJKcuojtRjujhB7uJU%2FMGtALK3JSJXy913dNrz1HTZA9OzdCkozH%2Bj3DAlAynixQkOeKl4DHQen1hFarbVmGcu%2FTAumDvzx3U8K0hstfIJaj&X-Amz-Signature=eafe96a6130fd77670b7918d92df9c16eaf7621b9102e9abb6a08781b6c3a842&X-Amz-SignedHeaders=host&x-id=GetObject)

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
