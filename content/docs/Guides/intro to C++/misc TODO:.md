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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OURYNME%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH7wjyoJDfti1xonBuOxtfCBbT6uB21AL8w5aXVHRC2vAiAZE6B3gswF9l6OLeAZ%2B3XH9bCssx4Ugzxxm0uPXqaQ8yqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXVxAmUUxsmqGP%2B1cKtwDtyFW3G2FuL5SiMppxdDB11zZ1OQ4SjdYZsJnvvNQkV5Io0jawGuw0X5lZ2YAXImBePGNZmKE%2BKO8iSA9c%2F0zQYkg1zhy1u4OB6%2FhQ4ms7W59t578AuPMHYwObuloFk1qVNp7m9CLFGAjU%2F7Z9h1ZN%2BcNLo%2B1lsdsG25U92MiZq%2FFx05lEiY5nMl2Mk1K3boT0JFtRMgz6r7c6%2FSJyGByduIvmLG3VEmbMn4agBn0tt3YQjqQAH6GZiSZB3CbZgqJ%2FJAUTXSfyW8R5D1zqqkGo1QMxU4UIFEym54RHSWM04oDDlcgr48c2B8%2B2umkgAAa9B%2FcgaaILzp4thYs7b99ZqCI20UqNdmnw8t69QV5FfMyaGEhdfTsEjByGkV1OC8XtRXPi5t1o721xx0EgbV6wlsvcJor1OgOcWsOWxsF5tGrzWlAJKOx3U28%2FGteWqIbVsieEIGhWaL5f8QooYG7dGBeO9XrnTXFDjOG%2BrAgdZAU7nqTRclyKasQZiquq8Hm8cOM3nv9d3ZOX80MbzT2Yov8pyE%2BDfQpYgwlnr4Fm90LmNGsgMeN%2BV6up3u%2B1aKdZ1HDRx9XNRjfjj5IINaAzgjsiciLxMr0mJW%2BIIHc8JuvMOuVTFJwrip%2FwZ0w1qDXwAY6pgHZnjRpSRtcSPH5fsJ%2FBOXbZAw1EjT%2FgdJiEue71kAmdZHs0cvtH8UJYx6mMYoVDwfvsgWUDoEUGG0F8PdRc7Di8DrYqXjHsq7Uezbb9wb%2BVbQlKANaMj%2FbuzfshVFVtfumhJKecD67cBVmbTRjoFOdGTtjIaxuyuOwBcfSNkst9BHTgEIDFazQsX2JyEcqCUXTyEtBXfkTef7Oivm8LetIlEPmx5ok&X-Amz-Signature=892f0dc1f9b1fb2c78762fd195007c537878a681faed858275a2540f05292650&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OURYNME%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIH7wjyoJDfti1xonBuOxtfCBbT6uB21AL8w5aXVHRC2vAiAZE6B3gswF9l6OLeAZ%2B3XH9bCssx4Ugzxxm0uPXqaQ8yqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXVxAmUUxsmqGP%2B1cKtwDtyFW3G2FuL5SiMppxdDB11zZ1OQ4SjdYZsJnvvNQkV5Io0jawGuw0X5lZ2YAXImBePGNZmKE%2BKO8iSA9c%2F0zQYkg1zhy1u4OB6%2FhQ4ms7W59t578AuPMHYwObuloFk1qVNp7m9CLFGAjU%2F7Z9h1ZN%2BcNLo%2B1lsdsG25U92MiZq%2FFx05lEiY5nMl2Mk1K3boT0JFtRMgz6r7c6%2FSJyGByduIvmLG3VEmbMn4agBn0tt3YQjqQAH6GZiSZB3CbZgqJ%2FJAUTXSfyW8R5D1zqqkGo1QMxU4UIFEym54RHSWM04oDDlcgr48c2B8%2B2umkgAAa9B%2FcgaaILzp4thYs7b99ZqCI20UqNdmnw8t69QV5FfMyaGEhdfTsEjByGkV1OC8XtRXPi5t1o721xx0EgbV6wlsvcJor1OgOcWsOWxsF5tGrzWlAJKOx3U28%2FGteWqIbVsieEIGhWaL5f8QooYG7dGBeO9XrnTXFDjOG%2BrAgdZAU7nqTRclyKasQZiquq8Hm8cOM3nv9d3ZOX80MbzT2Yov8pyE%2BDfQpYgwlnr4Fm90LmNGsgMeN%2BV6up3u%2B1aKdZ1HDRx9XNRjfjj5IINaAzgjsiciLxMr0mJW%2BIIHc8JuvMOuVTFJwrip%2FwZ0w1qDXwAY6pgHZnjRpSRtcSPH5fsJ%2FBOXbZAw1EjT%2FgdJiEue71kAmdZHs0cvtH8UJYx6mMYoVDwfvsgWUDoEUGG0F8PdRc7Di8DrYqXjHsq7Uezbb9wb%2BVbQlKANaMj%2FbuzfshVFVtfumhJKecD67cBVmbTRjoFOdGTtjIaxuyuOwBcfSNkst9BHTgEIDFazQsX2JyEcqCUXTyEtBXfkTef7Oivm8LetIlEPmx5ok&X-Amz-Signature=6778e3e93456acb4e1ab0741e2c054c4f2cbe6b6a44d11c42102ebe6fc9d3c94&X-Amz-SignedHeaders=host&x-id=GetObject)

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
