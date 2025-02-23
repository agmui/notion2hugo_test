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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXOHASX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHD0r0jvIcK2dVCaD1qgZeJiJHrY%2BkeZxbGYlSwRaShAiBJsXhM17TtwoqYNyo%2FlMEQwP%2FrEO6wyMybxIm9LT6%2FeSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtLqEooXSNw6a2nvBKtwDeRiWiGu64D489mX9fvib7czAPvAyYZAAg%2BId5Gjhn37j6QMA5PqGN%2BwhBCNqKFkd2LKnoSUBdpa13XhuREHlUJ%2FPk%2BTMRChjMVWZMdhclkJfiLqJr6zVjasOfBmznZVOMXkw0sQZyVuq9zvRrDFzAWidHveP%2F32KcJKcBXfwWD9WULs%2BESokFWwWtd8xznZLSJPrQI0kThSTjt%2BY%2BzOfwCGEPSYxTAzCIB3nCa63XNYzQkQJGpTmWEt72jzhxcJEaE8eOMtzMJPsisecBnGCV7chygqofXXxcF4IPi1uirVeXhfVXVfUOGairqi3CHE7QvNViN89CaM6KaljQe19PBaN%2F3lBPU7%2B6h0rbbgUlR1JYMfhc9NzzgZMF%2BZVx5Y9zhw6I1dYlQxUUZW6BLRwSBS7fwyUEkQ87RG5iBB07LK5zmxy9hwV3CuSUQLAH3rN7KuFvWWAs97SLDd6CBsgDkExraZvQVAyGtrgtO%2BJhdTWiadW0k%2FHcn0vF6e2vRRhXo1o8KEOGhOGOXPZtLV9B9f%2BtBTvq9TfLyrQS4mg5MleIJkQarhVYwqYaM4KnPSHIeZDqB9s%2BiNOxkEWt%2Bu4ZmKtPiULmkU2lMxv6trQuVCOPFHdu66gbV20TuQwuKHqvQY6pgEO8pQ7FNeGNhBJ5kSRKil%2BROsYJLI%2BuWYvAHpVISoVp6WDgXaiGRNRc1g1nvwpKKbBmMwooOy7sV65OmNa3cyVI1oG4pKoOKyRT1dbGJ%2Fjiy6u2pwyEH%2Bwg7JzMSD1SnuE1ZOjKnmPYoNTptimxwsG7KozdkTOG2oc5%2BC3rxwFMCpR0mqD11DGQmUIXd7v5xrwdydu%2B%2BxcDs%2F57MS3yh5kejIkDlUE&X-Amz-Signature=f4e65349a064fdc801b1ef5af794c461c89cbd2333efb02347fb9548c6618453&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXOHASX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHD0r0jvIcK2dVCaD1qgZeJiJHrY%2BkeZxbGYlSwRaShAiBJsXhM17TtwoqYNyo%2FlMEQwP%2FrEO6wyMybxIm9LT6%2FeSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtLqEooXSNw6a2nvBKtwDeRiWiGu64D489mX9fvib7czAPvAyYZAAg%2BId5Gjhn37j6QMA5PqGN%2BwhBCNqKFkd2LKnoSUBdpa13XhuREHlUJ%2FPk%2BTMRChjMVWZMdhclkJfiLqJr6zVjasOfBmznZVOMXkw0sQZyVuq9zvRrDFzAWidHveP%2F32KcJKcBXfwWD9WULs%2BESokFWwWtd8xznZLSJPrQI0kThSTjt%2BY%2BzOfwCGEPSYxTAzCIB3nCa63XNYzQkQJGpTmWEt72jzhxcJEaE8eOMtzMJPsisecBnGCV7chygqofXXxcF4IPi1uirVeXhfVXVfUOGairqi3CHE7QvNViN89CaM6KaljQe19PBaN%2F3lBPU7%2B6h0rbbgUlR1JYMfhc9NzzgZMF%2BZVx5Y9zhw6I1dYlQxUUZW6BLRwSBS7fwyUEkQ87RG5iBB07LK5zmxy9hwV3CuSUQLAH3rN7KuFvWWAs97SLDd6CBsgDkExraZvQVAyGtrgtO%2BJhdTWiadW0k%2FHcn0vF6e2vRRhXo1o8KEOGhOGOXPZtLV9B9f%2BtBTvq9TfLyrQS4mg5MleIJkQarhVYwqYaM4KnPSHIeZDqB9s%2BiNOxkEWt%2Bu4ZmKtPiULmkU2lMxv6trQuVCOPFHdu66gbV20TuQwuKHqvQY6pgEO8pQ7FNeGNhBJ5kSRKil%2BROsYJLI%2BuWYvAHpVISoVp6WDgXaiGRNRc1g1nvwpKKbBmMwooOy7sV65OmNa3cyVI1oG4pKoOKyRT1dbGJ%2Fjiy6u2pwyEH%2Bwg7JzMSD1SnuE1ZOjKnmPYoNTptimxwsG7KozdkTOG2oc5%2BC3rxwFMCpR0mqD11DGQmUIXd7v5xrwdydu%2B%2BxcDs%2F57MS3yh5kejIkDlUE&X-Amz-Signature=a2571cc7067b75cae4b71d676028ff867839a83f9934613e70b39a9525913131&X-Amz-SignedHeaders=host&x-id=GetObject)

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
