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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6RINKW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALq5WyabZg83pNOxYDMXSNr5qfzzOAwYymB7rpKKnX%2BAiAJk2U7j7mAPodXE%2BYQjIuxYrK%2FQYHmQgRklChWrMAefCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyqrO8x5mO1hX396CKtwDAOzvvCcm3COIGTP85ybXwpPJo%2FDzMADVYol3n98fH0qXvdFLyoK49mJcp8syr0opuhFwOnUPZTYM7UUmjCD64OOR3XKgZTuzWcaCW25j0%2BI%2FzG7j3fU%2FVIU4TINNLe8GZ0BlQ5jLCUMfw6t1kdRSuR%2BYkAsh5jHPESwJ9ZxZv%2B9AM4BG6JCHHYLYAqJg6QgrglYLjSBgnFmmm3Ss%2BmPLQCCLYzvuCgsQvF2S5HpNlYEmEHYXTddQ8R74oOCSVtRhJLFjLU9dnyS8JTsDs3DBWbOWuq5bvjPBIRxXV4HaxQsqwGizkWVq9QPM7Y6xiptbteOOdSpXzV%2FibX5M7CkfvxB1XbnC%2FCAq9dzBxtgPDgd0iPe%2Fnxupb2MHqe%2B2PHNDstpgOT4t6hkxMa4Cz4RvX1frhFeAiuAe1%2FaxsBK8hhg78FWvzSKmIBOv5KyaJQrNzUpVniOs7XeeXs6qO2PI44RQ%2BRepykAnQgyuzXksiDXhPlhlvGoYKjB04EE9jQTIsf%2BgcTRVeIlOjdw7EofguCdMEPeTPYUrh5QUBYFHfRNDOn8K1yBGl5yNpAP2%2FCqWrvCWZsy%2FCMPzgLKcYh6N67D6Hl2HpzIJ%2Fdfqy2EAygYgvW0N5J3dGrhkRBQwrdifvQY6pgFQN15BoHc1dVH719NZ7g1m245N0ukZ%2BzDFZDgUq40DYv9MFkNdFvUfHJGQ3n9Z%2FenPAK7FYBNWGqkjiE%2Bur9brAL%2BlXalfTLIYpiBCnflxvsUJYgm0ilaO%2FpE%2BqIeEFB9QH%2FJ4pBpLerA6UU%2Fw6xAoY2SvRfV%2BlxuDcg0PbhOQa%2FL4DkylyZefawm2TjZNdIDi2L43KYtYsjnb%2BlciPG2GqrEioXNU&X-Amz-Signature=d52f96a50078d5ecfbe0c43d8957b93db26ef3e3c1475cc31bb3d10ded77920e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6RINKW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALq5WyabZg83pNOxYDMXSNr5qfzzOAwYymB7rpKKnX%2BAiAJk2U7j7mAPodXE%2BYQjIuxYrK%2FQYHmQgRklChWrMAefCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyqrO8x5mO1hX396CKtwDAOzvvCcm3COIGTP85ybXwpPJo%2FDzMADVYol3n98fH0qXvdFLyoK49mJcp8syr0opuhFwOnUPZTYM7UUmjCD64OOR3XKgZTuzWcaCW25j0%2BI%2FzG7j3fU%2FVIU4TINNLe8GZ0BlQ5jLCUMfw6t1kdRSuR%2BYkAsh5jHPESwJ9ZxZv%2B9AM4BG6JCHHYLYAqJg6QgrglYLjSBgnFmmm3Ss%2BmPLQCCLYzvuCgsQvF2S5HpNlYEmEHYXTddQ8R74oOCSVtRhJLFjLU9dnyS8JTsDs3DBWbOWuq5bvjPBIRxXV4HaxQsqwGizkWVq9QPM7Y6xiptbteOOdSpXzV%2FibX5M7CkfvxB1XbnC%2FCAq9dzBxtgPDgd0iPe%2Fnxupb2MHqe%2B2PHNDstpgOT4t6hkxMa4Cz4RvX1frhFeAiuAe1%2FaxsBK8hhg78FWvzSKmIBOv5KyaJQrNzUpVniOs7XeeXs6qO2PI44RQ%2BRepykAnQgyuzXksiDXhPlhlvGoYKjB04EE9jQTIsf%2BgcTRVeIlOjdw7EofguCdMEPeTPYUrh5QUBYFHfRNDOn8K1yBGl5yNpAP2%2FCqWrvCWZsy%2FCMPzgLKcYh6N67D6Hl2HpzIJ%2Fdfqy2EAygYgvW0N5J3dGrhkRBQwrdifvQY6pgFQN15BoHc1dVH719NZ7g1m245N0ukZ%2BzDFZDgUq40DYv9MFkNdFvUfHJGQ3n9Z%2FenPAK7FYBNWGqkjiE%2Bur9brAL%2BlXalfTLIYpiBCnflxvsUJYgm0ilaO%2FpE%2BqIeEFB9QH%2FJ4pBpLerA6UU%2Fw6xAoY2SvRfV%2BlxuDcg0PbhOQa%2FL4DkylyZefawm2TjZNdIDi2L43KYtYsjnb%2BlciPG2GqrEioXNU&X-Amz-Signature=a1ab3fffcfeebd50c4d49317a1cfb389849e642ee28624e5357aeeb4ce7009a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
