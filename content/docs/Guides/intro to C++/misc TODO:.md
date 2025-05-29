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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ4DHUMC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyX4qHQkF%2FvlFmoEtsdyvuu34BYkKiyxky8jhhR5K%2FEgIhAPVV%2BoC7DTx9EdCGz7nRdOs5RQn8cZq9Y%2BNrbYGsTs2jKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJZGy44XVls1E%2BcsIq3APMOAapxuxMBmankFoBqCdzYq7TKAfm34hJyG0SUQ3613PX1HtCRbfdDDkXa60D0v5cM5HZLUe0spFWcpTzn2cO%2FFUSTZ9A30FTfBNyPsqZinDZi0aSw9W0W0UAIWbipLxvqygV0PC%2FXcHdNeLHhMlaH0jQFaAtFFd6uSrE%2FdUz8RVWKI1%2F8iZaqn4YJHDv6QmFdKnQrsnON9dK2D30tz0TRiJikCRu8HuhrRZkm5JaNC4HpkFRi3s%2F8KE0TYY9Q3%2BQLthSubSFnJRrwbmfI%2FjfA11Cf%2FlEasPTlZ8VrNbpjObrVAU%2BBKJwlGPh7YqAr8cILzjj87FMyl%2FiG8ja3qVLfziuQoOSEKbRPtm1iiLJBGi%2FfIJVeoZuV02FsDynvLzgGHx3Jf%2FwCZzv6bThKMyNtje1TOnFcTVNJmhTvzSOL9XCsxXyv4%2Bya3TkEcCkBXssAEqFu1CZJ227uOnvdeVrmfj79pDO7pdvDjyc%2BPspM%2Bs7pCLrAsOibgZKtz1fJrTFg60ZVJyxoUXmUOjujRnn8cLNGGy6sPDhKS9PQDExTLKM%2BMYSALVTN1wJXIBE4phq8EJCgB8sTDLghpDIZOOHEXoQVEP8jTQKQFA3SZb0kxnlt%2BSSZcFKOJKCIzCRtOLBBjqkAaE4NCopTJwHcN%2BB5afddDlkoDZGjhKX8c4qSTD%2FDaXJcmxB0Z2JKmdnigyqe5dn6G8DBN%2Bc9U7ic7yKwluSbpk4JGKYWIjKrtgemsSaLlOLu2GDlKrvn%2BSyHdOzQsvhj5FTsf8VotCjUkLYZxbgc0A%2BtNQ%2FXnNTqNE%2FzV7h%2B4l4hOFSquyN23wveh5JPrBCCJYS5HKV%2BiGIY9VRhjjLYGvmkr1n&X-Amz-Signature=38d80d8def89b37a76e7cbed7afade8339c47bb90fc2e253adb11ab07206bd60&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ4DHUMC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyX4qHQkF%2FvlFmoEtsdyvuu34BYkKiyxky8jhhR5K%2FEgIhAPVV%2BoC7DTx9EdCGz7nRdOs5RQn8cZq9Y%2BNrbYGsTs2jKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJZGy44XVls1E%2BcsIq3APMOAapxuxMBmankFoBqCdzYq7TKAfm34hJyG0SUQ3613PX1HtCRbfdDDkXa60D0v5cM5HZLUe0spFWcpTzn2cO%2FFUSTZ9A30FTfBNyPsqZinDZi0aSw9W0W0UAIWbipLxvqygV0PC%2FXcHdNeLHhMlaH0jQFaAtFFd6uSrE%2FdUz8RVWKI1%2F8iZaqn4YJHDv6QmFdKnQrsnON9dK2D30tz0TRiJikCRu8HuhrRZkm5JaNC4HpkFRi3s%2F8KE0TYY9Q3%2BQLthSubSFnJRrwbmfI%2FjfA11Cf%2FlEasPTlZ8VrNbpjObrVAU%2BBKJwlGPh7YqAr8cILzjj87FMyl%2FiG8ja3qVLfziuQoOSEKbRPtm1iiLJBGi%2FfIJVeoZuV02FsDynvLzgGHx3Jf%2FwCZzv6bThKMyNtje1TOnFcTVNJmhTvzSOL9XCsxXyv4%2Bya3TkEcCkBXssAEqFu1CZJ227uOnvdeVrmfj79pDO7pdvDjyc%2BPspM%2Bs7pCLrAsOibgZKtz1fJrTFg60ZVJyxoUXmUOjujRnn8cLNGGy6sPDhKS9PQDExTLKM%2BMYSALVTN1wJXIBE4phq8EJCgB8sTDLghpDIZOOHEXoQVEP8jTQKQFA3SZb0kxnlt%2BSSZcFKOJKCIzCRtOLBBjqkAaE4NCopTJwHcN%2BB5afddDlkoDZGjhKX8c4qSTD%2FDaXJcmxB0Z2JKmdnigyqe5dn6G8DBN%2Bc9U7ic7yKwluSbpk4JGKYWIjKrtgemsSaLlOLu2GDlKrvn%2BSyHdOzQsvhj5FTsf8VotCjUkLYZxbgc0A%2BtNQ%2FXnNTqNE%2FzV7h%2B4l4hOFSquyN23wveh5JPrBCCJYS5HKV%2BiGIY9VRhjjLYGvmkr1n&X-Amz-Signature=a5ea8676979ea4968db2517ff358bfe45f86586b81ea19b97d64bfddcf8e2b20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
