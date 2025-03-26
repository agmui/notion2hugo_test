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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2EPR7K%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8BuJ7iHqiVw6RXT%2BEvXDxKbslYdPP%2FdNWIUngXJAvjAiAFDslfARA4mcT3tjbrfds%2BZ%2FPR8EOewnKt8Hqq6Uzv2ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMp%2B1WkusoZsbb9hecKtwDeUnF3zTqachZn2IScbrUaaD0uatN1EwEe0eovwQDg5SBJYlOBfXTsw6cKZGMKmOEroWgQZtzAvLtruIatd5POvIQW2gmHiNcZ4%2BT%2FxBQA3bKwehWjY2HAuJhleEkx06c0va9bh6Zb1gevAyCPdOU6ollrgZAJkhxdOeHDFiR1nQpnZhmdeHhgRu5qhAQyacBbEsv%2F9D3ZqtgirVWR9ur5hw6QOG5tkR6wUwP%2B5FJh2ZpERppRi%2B0gIq5yavQbVWFxnEjdOiaWMTxxJOTr8RZ2pFwu4GJLRlFS02San1cS%2F%2B4E%2FA6S2uQfsAYUN%2BoVN0KwvqQzIB5uTEgh80cL%2Byqs7D38LrOJ7hTynk77b7QIj5nCkjXxd%2FfNTz2ECiLtaAuCtbS7pLeMuVtYua27mmez%2FK4VRzdnSNfVKnQpVjqH4nLNkQvoKe63%2By6FPDd8kSaKuez3yG%2Bj79N0UgkYR4hD6GZNiLVlmNDSgVBNpRs7ZYIwVbVx7yXmEmmAaUdK5j5sATvqdLFHZDPF4FGfw%2BAiSKq9bVtScGC%2BsHAw1r3WSgNLitCPDyG3RVbmY7MZehcWm%2FHAWXAJp%2F28ylNaT8z0kuaUnqPGvdLzGCKcmD%2FXatx%2FgfI1zQIzL3ITYgw19eQvwY6pgGx8PcWEDJRCWdHhvwzo%2FWRI6Uk%2F31A8HpK2Apvpq8tbP%2BWfq8mJVexur%2FPcMx0c4aUGvwvaC9OF8x%2BWw3ymlN%2FfgklpnnRuJz95qZgseeIxGkERNfAiS0sXQhUAWwM3pwMQfRe%2F%2F2FCsh4ElruXjwWtAw95OcIYKl3IKKeuJX3u%2B47l4jvTctX%2FJ5ENl2EAmjpMAoFjUAKXd5i%2BQXIsauRAg5%2B1wB0&X-Amz-Signature=af84ade3eb03ece8432ec8ade18676fec827a34a89edcf3dfc4bd9bec4c472d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2EPR7K%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8BuJ7iHqiVw6RXT%2BEvXDxKbslYdPP%2FdNWIUngXJAvjAiAFDslfARA4mcT3tjbrfds%2BZ%2FPR8EOewnKt8Hqq6Uzv2ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMp%2B1WkusoZsbb9hecKtwDeUnF3zTqachZn2IScbrUaaD0uatN1EwEe0eovwQDg5SBJYlOBfXTsw6cKZGMKmOEroWgQZtzAvLtruIatd5POvIQW2gmHiNcZ4%2BT%2FxBQA3bKwehWjY2HAuJhleEkx06c0va9bh6Zb1gevAyCPdOU6ollrgZAJkhxdOeHDFiR1nQpnZhmdeHhgRu5qhAQyacBbEsv%2F9D3ZqtgirVWR9ur5hw6QOG5tkR6wUwP%2B5FJh2ZpERppRi%2B0gIq5yavQbVWFxnEjdOiaWMTxxJOTr8RZ2pFwu4GJLRlFS02San1cS%2F%2B4E%2FA6S2uQfsAYUN%2BoVN0KwvqQzIB5uTEgh80cL%2Byqs7D38LrOJ7hTynk77b7QIj5nCkjXxd%2FfNTz2ECiLtaAuCtbS7pLeMuVtYua27mmez%2FK4VRzdnSNfVKnQpVjqH4nLNkQvoKe63%2By6FPDd8kSaKuez3yG%2Bj79N0UgkYR4hD6GZNiLVlmNDSgVBNpRs7ZYIwVbVx7yXmEmmAaUdK5j5sATvqdLFHZDPF4FGfw%2BAiSKq9bVtScGC%2BsHAw1r3WSgNLitCPDyG3RVbmY7MZehcWm%2FHAWXAJp%2F28ylNaT8z0kuaUnqPGvdLzGCKcmD%2FXatx%2FgfI1zQIzL3ITYgw19eQvwY6pgGx8PcWEDJRCWdHhvwzo%2FWRI6Uk%2F31A8HpK2Apvpq8tbP%2BWfq8mJVexur%2FPcMx0c4aUGvwvaC9OF8x%2BWw3ymlN%2FfgklpnnRuJz95qZgseeIxGkERNfAiS0sXQhUAWwM3pwMQfRe%2F%2F2FCsh4ElruXjwWtAw95OcIYKl3IKKeuJX3u%2B47l4jvTctX%2FJ5ENl2EAmjpMAoFjUAKXd5i%2BQXIsauRAg5%2B1wB0&X-Amz-Signature=8f7fa45deba5459fd595c9265724876d40d05860f81e51bf3cabef651d54079a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
