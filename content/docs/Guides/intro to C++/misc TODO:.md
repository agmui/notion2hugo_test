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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FS2L5HR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDeD5MfZ3ZrfOUo8OloCL7smAAVa6712K8MqrQfcIlznQIhAK2EyPYPDT3z88vUhEHZN%2FdJ1ZcitcDRIkw5EwJo1iRbKv8DCEAQABoMNjM3NDIzMTgzODA1Igy3FPMF0mCKL%2FQPcCUq3ANIQD%2BlGawrAvkQY%2BazwO7y%2BoEj1rWbwplbYNNN5WASV28XYvVS7C5n8lj95lkOETGwhrVlu2uWeRc5nfU5FhvMJSD8TNUWP1uekKdlZZl9WU7vt8uhDN7RxPRYBveHln%2BohaNfDa6e3eu0XX6Qk6lKIl91gsJjOlD5YP%2B6cO8qdbV1b8rHg%2FOT3Xqud5zSEn5zxXT13BUgsnrA8qm0PSaiHjXU0JqacA%2BLwbBMtUX8MAbQTpo4GyhTNIX94BLMYDCQcR3QKcDr0HADxVIa%2B0qAysWtGdypumdE6LA16leKfJaDkkTKyk0jHtaCyzJWdTJtA0Vw8HeqcjS54mDwCA9SdS8zRG18rMstzD%2FKVJN7C8j2ll9sPPmvMMgO6q%2FKUEFGdFYxD9ehwsGjkxUtTjBXlkScPsDBw5hxv4KyTreiguttAEvMdqc1b%2Bxtc7p%2BOH%2BFkLfZPnfdrG46k0f%2BFH4ivTu0V6Sn3kKn69DzTSErUNV2EwvrD%2FPb0JS4weJQL3iHXADW0D2OvdJF0oZyJAmx8g%2Fa%2BHgJQQYAcl0PBpkmu84ICiz3rqAM%2B0GmYYleRqjC5%2FY%2B6CBqzZ%2BQwLz1Nn3B%2ByKCBvjl6%2FpUBVM2GZuoWss9%2BJ4Jp3CBHbCCcjD2gdjDBjqkAb3DQQzQIcr0U%2FSI4N%2B2cGO8vvTi%2FLuJQ2j3Mal4EW8lL%2BqXRrmrgPElcYWLqLCqN%2FOaVgzRsf5gmLqFticK0y1%2FVztVYWIivgUjfUKnRoWcEqDvYrYqzf1tzsDL%2FDe12RiW5P9LpYzmicOuFqbwVTs1xCKlbvaJwEPjJTe7p2PwoFPkWp6FP2Twse92QrpmqTaI9EbVkzOH1RNWQQKX3SeS380Y&X-Amz-Signature=b4b639b54a03cba9b4255d0586ef5939613c064166bc4cc45ea5228da2d324c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FS2L5HR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDeD5MfZ3ZrfOUo8OloCL7smAAVa6712K8MqrQfcIlznQIhAK2EyPYPDT3z88vUhEHZN%2FdJ1ZcitcDRIkw5EwJo1iRbKv8DCEAQABoMNjM3NDIzMTgzODA1Igy3FPMF0mCKL%2FQPcCUq3ANIQD%2BlGawrAvkQY%2BazwO7y%2BoEj1rWbwplbYNNN5WASV28XYvVS7C5n8lj95lkOETGwhrVlu2uWeRc5nfU5FhvMJSD8TNUWP1uekKdlZZl9WU7vt8uhDN7RxPRYBveHln%2BohaNfDa6e3eu0XX6Qk6lKIl91gsJjOlD5YP%2B6cO8qdbV1b8rHg%2FOT3Xqud5zSEn5zxXT13BUgsnrA8qm0PSaiHjXU0JqacA%2BLwbBMtUX8MAbQTpo4GyhTNIX94BLMYDCQcR3QKcDr0HADxVIa%2B0qAysWtGdypumdE6LA16leKfJaDkkTKyk0jHtaCyzJWdTJtA0Vw8HeqcjS54mDwCA9SdS8zRG18rMstzD%2FKVJN7C8j2ll9sPPmvMMgO6q%2FKUEFGdFYxD9ehwsGjkxUtTjBXlkScPsDBw5hxv4KyTreiguttAEvMdqc1b%2Bxtc7p%2BOH%2BFkLfZPnfdrG46k0f%2BFH4ivTu0V6Sn3kKn69DzTSErUNV2EwvrD%2FPb0JS4weJQL3iHXADW0D2OvdJF0oZyJAmx8g%2Fa%2BHgJQQYAcl0PBpkmu84ICiz3rqAM%2B0GmYYleRqjC5%2FY%2B6CBqzZ%2BQwLz1Nn3B%2ByKCBvjl6%2FpUBVM2GZuoWss9%2BJ4Jp3CBHbCCcjD2gdjDBjqkAb3DQQzQIcr0U%2FSI4N%2B2cGO8vvTi%2FLuJQ2j3Mal4EW8lL%2BqXRrmrgPElcYWLqLCqN%2FOaVgzRsf5gmLqFticK0y1%2FVztVYWIivgUjfUKnRoWcEqDvYrYqzf1tzsDL%2FDe12RiW5P9LpYzmicOuFqbwVTs1xCKlbvaJwEPjJTe7p2PwoFPkWp6FP2Twse92QrpmqTaI9EbVkzOH1RNWQQKX3SeS380Y&X-Amz-Signature=5fe2fd2286d824df67533d7c6fccc21e8eb6eeb659905774773d2d2dbfdd1fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
