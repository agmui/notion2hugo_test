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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647MSN5BM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDY0T3swc%2FZeduB1Kgy5tplY8szOCf76HglIs2EscTl3AiBNOCLro2vDVthIjWaGKhEG34DbGFigJDI8oaJaYxL%2FxSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtFeGfcBMOW1%2BON%2BhKtwDH0Vl126BX%2BQlZcnwTU2DEB1JMIx4fQTxK1vUCm1Sv5ZgM6pJRHkVouP4cFMXM6Q0PKQowP2%2Bn5I596MHUwU%2Bg4don4g8dQZX5ad%2BvN4Rd%2BX8q69mS7PlVi7Q8Cpw4JwE032VMgpIknzdUOeB1ETXv%2BqTieGbjR0Y7yV728N0IMRu83vKbB2VD1EJMonllEj%2BhA2NdWxsDrHRheZhVCLH3IQDQbadbyuWKy%2Bcj1d8vyOcN3k73iqMjvTVXw68ozQz881nN%2BiLQ7np2INkNav0Y9cMudndmINKPik9jZi2YtK8GcATjReljhgntXYdLCPouzMDAQYQGrJQysk0vUrvyqkBwiqEkFv4jW6pdSnuYJ0TjpriGKqNp4GmT12E3ZZ2E%2F%2BXc9GGO9qGaU3F40%2Bdgv4pNoKonl1YXOf0z9BhJ3CzDVOpvKW4nfIHOu5MgEEnNY%2BHNjSr1gFfWQGX834Q5CKUBhAuVyIb38QSaRnjdT20CuGtqWYB3nNx5tfAvbFjWMjUdoOJ9sQZVLOBJUf6RtENT9uVUjshwyKfEcvAgIYbjSp4sqp3vWmdvRULhmLUVGYAc95pkg38R3MXlLXUht4acef3qfPC8fkqShKyuHJpKw2eo86WY1BD0Iww66GexAY6pgFkVjnRmOYXYgi1s1xvOCEgApxbkWe0iSmCEkCNWDXe7jrY6210xH8Dp7LVc%2B2SZSEKVVzGuM%2FI8Ozrh7O5nkokQV78JHL2wwgdPnJjVnc5sgdl1evpOqtzqD1Stvm4T6iWBQr%2BQR%2B%2FOY63RxWhnL5z%2FTwShlBySpeuOB8HPKrjd6t8mpGVPdPnEKizdjvPbm7EfUWw1MvecXr01ZdDQ8KmWNnt07q3&X-Amz-Signature=5c03c0937f931005c24b50ae03f4f3507361d0b58f02ff2821ee56969d6f7a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647MSN5BM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDY0T3swc%2FZeduB1Kgy5tplY8szOCf76HglIs2EscTl3AiBNOCLro2vDVthIjWaGKhEG34DbGFigJDI8oaJaYxL%2FxSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtFeGfcBMOW1%2BON%2BhKtwDH0Vl126BX%2BQlZcnwTU2DEB1JMIx4fQTxK1vUCm1Sv5ZgM6pJRHkVouP4cFMXM6Q0PKQowP2%2Bn5I596MHUwU%2Bg4don4g8dQZX5ad%2BvN4Rd%2BX8q69mS7PlVi7Q8Cpw4JwE032VMgpIknzdUOeB1ETXv%2BqTieGbjR0Y7yV728N0IMRu83vKbB2VD1EJMonllEj%2BhA2NdWxsDrHRheZhVCLH3IQDQbadbyuWKy%2Bcj1d8vyOcN3k73iqMjvTVXw68ozQz881nN%2BiLQ7np2INkNav0Y9cMudndmINKPik9jZi2YtK8GcATjReljhgntXYdLCPouzMDAQYQGrJQysk0vUrvyqkBwiqEkFv4jW6pdSnuYJ0TjpriGKqNp4GmT12E3ZZ2E%2F%2BXc9GGO9qGaU3F40%2Bdgv4pNoKonl1YXOf0z9BhJ3CzDVOpvKW4nfIHOu5MgEEnNY%2BHNjSr1gFfWQGX834Q5CKUBhAuVyIb38QSaRnjdT20CuGtqWYB3nNx5tfAvbFjWMjUdoOJ9sQZVLOBJUf6RtENT9uVUjshwyKfEcvAgIYbjSp4sqp3vWmdvRULhmLUVGYAc95pkg38R3MXlLXUht4acef3qfPC8fkqShKyuHJpKw2eo86WY1BD0Iww66GexAY6pgFkVjnRmOYXYgi1s1xvOCEgApxbkWe0iSmCEkCNWDXe7jrY6210xH8Dp7LVc%2B2SZSEKVVzGuM%2FI8Ozrh7O5nkokQV78JHL2wwgdPnJjVnc5sgdl1evpOqtzqD1Stvm4T6iWBQr%2BQR%2B%2FOY63RxWhnL5z%2FTwShlBySpeuOB8HPKrjd6t8mpGVPdPnEKizdjvPbm7EfUWw1MvecXr01ZdDQ8KmWNnt07q3&X-Amz-Signature=87f4f1f0b0641ee3d759ff957722e039664e09ae3dbe659a4ea5f5b37a512767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
