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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCD5U7W%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIE794LaYOd8tALpySvPJ%2Fr20KH1NniBOQ1OeV27WNBmnAiBq%2Bs2SUt2iQ3dDbm8%2F3yAxRHsLzr%2BGeRrkoPsJ5FJ3pSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMx%2FkiATMpzAjXuw9BKtwDvVuGU%2Frm6NbCZE6NH52BrH9%2BBdRixiAFJg8VeSz%2BxYdoRwhgEFU7cXRplcxNlIFhltsuosZKgH8L1kvx49ewK0KdvYsR%2FwqUSaOTjPXDoTZk7bhYcG2n5kb%2FVp39Dx4K%2BZ8zQXcpL6rC5DS1GBFAeibqoJlJNdLPABE7Tc%2FGqWhY%2BKxzkTVu24OjiL%2FQ%2FzrWD0zMD6KXywlUXcr4cPUggFmC0PMRn2h%2BE6GaeL%2BgP%2B61Sl6I5Kdh5re5vOG8yj4Fo%2Bw19jXjLEsIyzfooO%2BeJ%2B0TYynFDxAxbOqx25OSFGhR8HCgzR%2F4O8eQ5GQJJ6X1Uy7H6dBumN%2F4ZNXtOnZPhX54vW18K0mC3m9LyeNS4IMD7h1b%2B%2FHvzbNwM79jV1pVOTDoEKO1ZIuhlbOGrO07m2ukQzI2cekN8OSbP5n1eZHk2KZiEVJWKtaPTRJEsJWFdN6ok4V1pKaZzvK8mw91afXLiwpB4Wb7lL%2Fahr%2FZ%2Bsfc%2FNxNYfqoaegMobhuhN9e1INNtb7XMVfawBRjnnP4ek%2BHLmk2pCsy8DCnzEuQFXBhMY7Bmkd2ZI6RMugVW5deTlMp8wr%2BuFZZwohHKKiStjta%2FcrYZ5L0tNGBrDUQ6%2Bpo7tgJIGhb4kqI8Hkw2oCBwgY6pgGEhyYRQqZY6EMeEUXebKRp2N8btmSE%2FXCgiaL6FqpcBAAaABXGn11nxciBHX3gY6XjdVLQsS1o5QTo%2FNwWTP%2B3y4rrZD60B82OfASXZvbleBYp4q4FRs8SZDBkh6yBRifDMGrdZtn%2BJR9XE2td%2FpIS4oG0dAsIXEKgjfbVUmC9iCFG5SPR%2BHYB0GvN0HS8B1OY8C1enREGVIttJRzGA4AD7dqkZHLQ&X-Amz-Signature=86d7056422a5a4d0aa4bcca2f6e2ca2cedf590e3e2286c725e27f16f7620440b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCD5U7W%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIE794LaYOd8tALpySvPJ%2Fr20KH1NniBOQ1OeV27WNBmnAiBq%2Bs2SUt2iQ3dDbm8%2F3yAxRHsLzr%2BGeRrkoPsJ5FJ3pSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMx%2FkiATMpzAjXuw9BKtwDvVuGU%2Frm6NbCZE6NH52BrH9%2BBdRixiAFJg8VeSz%2BxYdoRwhgEFU7cXRplcxNlIFhltsuosZKgH8L1kvx49ewK0KdvYsR%2FwqUSaOTjPXDoTZk7bhYcG2n5kb%2FVp39Dx4K%2BZ8zQXcpL6rC5DS1GBFAeibqoJlJNdLPABE7Tc%2FGqWhY%2BKxzkTVu24OjiL%2FQ%2FzrWD0zMD6KXywlUXcr4cPUggFmC0PMRn2h%2BE6GaeL%2BgP%2B61Sl6I5Kdh5re5vOG8yj4Fo%2Bw19jXjLEsIyzfooO%2BeJ%2B0TYynFDxAxbOqx25OSFGhR8HCgzR%2F4O8eQ5GQJJ6X1Uy7H6dBumN%2F4ZNXtOnZPhX54vW18K0mC3m9LyeNS4IMD7h1b%2B%2FHvzbNwM79jV1pVOTDoEKO1ZIuhlbOGrO07m2ukQzI2cekN8OSbP5n1eZHk2KZiEVJWKtaPTRJEsJWFdN6ok4V1pKaZzvK8mw91afXLiwpB4Wb7lL%2Fahr%2FZ%2Bsfc%2FNxNYfqoaegMobhuhN9e1INNtb7XMVfawBRjnnP4ek%2BHLmk2pCsy8DCnzEuQFXBhMY7Bmkd2ZI6RMugVW5deTlMp8wr%2BuFZZwohHKKiStjta%2FcrYZ5L0tNGBrDUQ6%2Bpo7tgJIGhb4kqI8Hkw2oCBwgY6pgGEhyYRQqZY6EMeEUXebKRp2N8btmSE%2FXCgiaL6FqpcBAAaABXGn11nxciBHX3gY6XjdVLQsS1o5QTo%2FNwWTP%2B3y4rrZD60B82OfASXZvbleBYp4q4FRs8SZDBkh6yBRifDMGrdZtn%2BJR9XE2td%2FpIS4oG0dAsIXEKgjfbVUmC9iCFG5SPR%2BHYB0GvN0HS8B1OY8C1enREGVIttJRzGA4AD7dqkZHLQ&X-Amz-Signature=00e16a54566e3e0194206a57578f140da7ab62527a9e585172a085b758d0a8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
