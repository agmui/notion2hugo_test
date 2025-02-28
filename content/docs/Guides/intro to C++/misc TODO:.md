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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4V5RWRV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIAlcTcj%2BibKCC%2Bj0z7gMFDZRaVA00OQ4e7gOUfhJWPIeAiB2Utttt5NIqQGTSHraHRFIoXdXi%2BXbd9lQ4fANCOQ3GSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BPDY6w8AyJM08jXwKtwD5MpTF7ai1AeQLS5t3EK%2BAHAxPfK6y%2FueA1Pefa0lfDWl1VUlFCqMJ15kgEYza0WwoOYfGRGh%2FLIaPVSRWQM0H61rItUOGRXiLLVmEVBToC4wTp0VkFOP1Fr50QXAh1Uougw2d2nj4MvXPbdbu2fZNJChgW8iof9FYve4weSccqcX9%2FypW6o9Xc0hasnp3AgZ8zwMyb6oDlX3BU9mZO984JsjS3kxF9YrqLUhzw8S1dz3YVO7iI5kVU9uN1fNEsAYFxT9MCrTHZEjuoU5J1n058NxV0GTQPDMEvNEmb%2BQWUL5UzbzKOVazOwu0maeT%2FU1ckn4%2FX3FRn3aHO%2FjWf%2B6qt88JSUo98Z7yyUfmnD%2BZ7mFm7RK5jRn9VWK2n3almQ2r6cgPM0y3yJBEWk9145MLXviVdQ9NLKaNRF0o0CSOkN2bNInB0nSbtY9Ba%2B6DsEGNJ0pypT9aRHbenDc57MZk294wEH9H2iqEYjl7O7dNQt3QDtFTANN94nvcoAbv4tgPZtB9oZE%2FFeeXx8S8vHr9vhe9NG0HuXtFdm5uob7359jEhE6%2BrqQZJv9IS8a0L82cSq5%2FF7PB2MAfXg4GHgz2Oa0Y4FEgcWAfaU0oATjqZeO6%2BXBQ73mnHrt4o8w3o%2BFvgY6pgGWP2UWW6CdHVlPdE9AauN5nD6wEJww9IMvIfd%2Bmi3%2Fj4AnLsH5OCf1OqQ6zK3zEIUnztiyRSosj79CAeDmDHMl%2FnZBEm2Wla9UmZncQ%2BcOmQKZEK6fdYmffWRWoNGlNZMcrMHB5%2FYTAltL8rz20Of4Vz1%2FQD%2F5FbDuPeqnZstB%2BpHDlROGhDSn415%2FgnCw6lFYCY85XmG3Hddkh4rEXcfytp17s2kz&X-Amz-Signature=c8913723131b7857bb52d5a551c566e70bf6841d8bc335cfbda34d4ea3fdbd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4V5RWRV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIAlcTcj%2BibKCC%2Bj0z7gMFDZRaVA00OQ4e7gOUfhJWPIeAiB2Utttt5NIqQGTSHraHRFIoXdXi%2BXbd9lQ4fANCOQ3GSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BPDY6w8AyJM08jXwKtwD5MpTF7ai1AeQLS5t3EK%2BAHAxPfK6y%2FueA1Pefa0lfDWl1VUlFCqMJ15kgEYza0WwoOYfGRGh%2FLIaPVSRWQM0H61rItUOGRXiLLVmEVBToC4wTp0VkFOP1Fr50QXAh1Uougw2d2nj4MvXPbdbu2fZNJChgW8iof9FYve4weSccqcX9%2FypW6o9Xc0hasnp3AgZ8zwMyb6oDlX3BU9mZO984JsjS3kxF9YrqLUhzw8S1dz3YVO7iI5kVU9uN1fNEsAYFxT9MCrTHZEjuoU5J1n058NxV0GTQPDMEvNEmb%2BQWUL5UzbzKOVazOwu0maeT%2FU1ckn4%2FX3FRn3aHO%2FjWf%2B6qt88JSUo98Z7yyUfmnD%2BZ7mFm7RK5jRn9VWK2n3almQ2r6cgPM0y3yJBEWk9145MLXviVdQ9NLKaNRF0o0CSOkN2bNInB0nSbtY9Ba%2B6DsEGNJ0pypT9aRHbenDc57MZk294wEH9H2iqEYjl7O7dNQt3QDtFTANN94nvcoAbv4tgPZtB9oZE%2FFeeXx8S8vHr9vhe9NG0HuXtFdm5uob7359jEhE6%2BrqQZJv9IS8a0L82cSq5%2FF7PB2MAfXg4GHgz2Oa0Y4FEgcWAfaU0oATjqZeO6%2BXBQ73mnHrt4o8w3o%2BFvgY6pgGWP2UWW6CdHVlPdE9AauN5nD6wEJww9IMvIfd%2Bmi3%2Fj4AnLsH5OCf1OqQ6zK3zEIUnztiyRSosj79CAeDmDHMl%2FnZBEm2Wla9UmZncQ%2BcOmQKZEK6fdYmffWRWoNGlNZMcrMHB5%2FYTAltL8rz20Of4Vz1%2FQD%2F5FbDuPeqnZstB%2BpHDlROGhDSn415%2FgnCw6lFYCY85XmG3Hddkh4rEXcfytp17s2kz&X-Amz-Signature=baccae152f6a9fb58b6eb18397d0d68e836419a7b5ec5b8444cd7d5d20eaf14d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
