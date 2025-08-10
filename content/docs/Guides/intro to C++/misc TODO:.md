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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6FX2X4U%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFlefFwx%2FbDs7njY9ynyo2KcwFmqxyAY7YhnOepdoXngIhAJg9dtCr0nb%2Fm%2FFbKJkPlrutoxFSoJ27KQthKmmpjn2TKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7G6ecIENa9N%2BN8lMq3AN6fyaXH23cHhTlq57wGA5pXXIUb%2F8GzcrFu4oUNVocOYjNImGM69IxrRAYcMI6LV%2FazfZLGz%2BAtkx9Fqyus0LemWwYy62q2b9XcoJSgWaunV8P1hYelOGDJJQtZqQUqM47GFhxmGtxB%2Fwt542eVjLpgr1Spdnukn22bpjNjQdH%2Bw0%2FWUCoVxi9rzOietJZmP%2BPzahYItlx25JFfVq6PPbnsuYsh9fTRNFHN67l3khqJ3hNp8buzb%2FLCUBKYC%2FzVlZmV55LsENA6bJdw5STxfkzd6Eai2BLiI%2F1UXT68NoviVG4VNFSf2kogUUUaSENLAeYtNi5ThZblnNu5P9cabysJ1WkdTkp46l73zg8dugrIaTdITL%2BhEWgqBpqP8rSa2bekOs5w7aXfiAWKIYo4g0ny3RUBmpsNlsKh7GoOhTQpVdLWOPA1ZF35afc3%2Bstd9u9g6ppthyBtI7ArdWe7VZnhSVUi1LYXMi6BGg0gjKD1Ptb%2BQulgmfpXTHZfJvoMud8j0aFt663yDWE6uT4hSYWavOg366aaq9%2BkDvdJr4oVA7Bf5fLXp7a850vEHhLx1nnmkm%2FxIYm90RfsJDcgHxDrL1E0hFWp8T%2BMxJ0vnSj8c4BGbCcp3kTtDUFfjCPmOLEBjqkAbdHnlqvlB2mAH7r8sBjnQyjFyaKaX%2FPRZg%2FrqdfTKzPHZXavKKADo1TyEH89yrBpn4kWF%2FkmPHrgxOyyn52GZBNtdS1qblyjpQruzojZilwHBwbNMagdSwzg0wflYH2OyYiP2%2F3X1slgXYCu3mDzhdC1Q7OiyYjXJrJF99GL6NL9KnCe1MB6FxLgeX267jxjBpeEgoGOLkxNmZQxITaP1dd6doJ&X-Amz-Signature=05805304e1594b0707ae18b90954f427930a6f301695128961aefe22845f91e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6FX2X4U%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFlefFwx%2FbDs7njY9ynyo2KcwFmqxyAY7YhnOepdoXngIhAJg9dtCr0nb%2Fm%2FFbKJkPlrutoxFSoJ27KQthKmmpjn2TKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7G6ecIENa9N%2BN8lMq3AN6fyaXH23cHhTlq57wGA5pXXIUb%2F8GzcrFu4oUNVocOYjNImGM69IxrRAYcMI6LV%2FazfZLGz%2BAtkx9Fqyus0LemWwYy62q2b9XcoJSgWaunV8P1hYelOGDJJQtZqQUqM47GFhxmGtxB%2Fwt542eVjLpgr1Spdnukn22bpjNjQdH%2Bw0%2FWUCoVxi9rzOietJZmP%2BPzahYItlx25JFfVq6PPbnsuYsh9fTRNFHN67l3khqJ3hNp8buzb%2FLCUBKYC%2FzVlZmV55LsENA6bJdw5STxfkzd6Eai2BLiI%2F1UXT68NoviVG4VNFSf2kogUUUaSENLAeYtNi5ThZblnNu5P9cabysJ1WkdTkp46l73zg8dugrIaTdITL%2BhEWgqBpqP8rSa2bekOs5w7aXfiAWKIYo4g0ny3RUBmpsNlsKh7GoOhTQpVdLWOPA1ZF35afc3%2Bstd9u9g6ppthyBtI7ArdWe7VZnhSVUi1LYXMi6BGg0gjKD1Ptb%2BQulgmfpXTHZfJvoMud8j0aFt663yDWE6uT4hSYWavOg366aaq9%2BkDvdJr4oVA7Bf5fLXp7a850vEHhLx1nnmkm%2FxIYm90RfsJDcgHxDrL1E0hFWp8T%2BMxJ0vnSj8c4BGbCcp3kTtDUFfjCPmOLEBjqkAbdHnlqvlB2mAH7r8sBjnQyjFyaKaX%2FPRZg%2FrqdfTKzPHZXavKKADo1TyEH89yrBpn4kWF%2FkmPHrgxOyyn52GZBNtdS1qblyjpQruzojZilwHBwbNMagdSwzg0wflYH2OyYiP2%2F3X1slgXYCu3mDzhdC1Q7OiyYjXJrJF99GL6NL9KnCe1MB6FxLgeX267jxjBpeEgoGOLkxNmZQxITaP1dd6doJ&X-Amz-Signature=4242ad3cad0a68557dd6f365950c18ae5956cf09cc8775bb67635aa06c3b08a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
