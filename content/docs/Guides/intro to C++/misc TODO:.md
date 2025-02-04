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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTZH2L2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIAYM7ERTQ9Fk%2BbCAmOhhfTojPMBw8DTHz6GpxaVe3crGAiBDWkAqZ9FfWdCgUFzbaEZfCQZMZiS5z%2FSzp1vZ2rheYCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMqXIHsYPuCH%2BaNaEsKtwDQXEMtJWtv4glJnK0qPGd7z6kHfR71RYisQN8jO4leVekH1P%2BCSv1H%2BWZsJT60IJy8tg2qA7j1qVqSQ4mJl8zvIs618s79BODsl5Q0%2B1Ea6rwHZuHfPOmReloBrXioWCJxoSp4ZMRusCmwQL6JfsaEBa56s3Ajnxjdb0kEr3PisoF%2BBgU9ADR%2B8UdIKAy%2F%2BX2jamQ%2Fz9StjS7Dxc20Koo%2BiMtF81CUlu1pHtH8JWodqoQN1OsyFojfuZu%2B8MKmwENzlwUwwc4oOasF5K%2F1RffGWUpTkB6tsZwo%2BsrOhepUz3Fk1rxA5%2FZkoKik6eskG%2BugRr5ylgmQcNB4ComU9%2BJvWYBPK5xk%2Fh839JCjIdlqJl%2BfMgaxgKGQ3nu4zCj6sVl22YfBExoUhKpO9zkuZNmIVrjPqVjtFxNkLw6EPbUNXr%2BPSP%2FDlMGh34bG5MWbljlQoOiaciHTHF54%2BKTMxvHThucmrilDZAgVNe1DbjQZ1j20JtVQSYth%2FZar5Y%2BTmTUrEqeiiQlCLEIV5%2B6DciYOk1ZJ5lOpHiTfMLrBiku2gouNmogVDsvcgXcLzuU2pdbXvkNTBHxRKgsmSIWjS54u543Qga3CtiHOSs2WXL6D8My5jPx8PK0iqpYj7EwjMyHvQY6pgEagYBT1weTWr5TwWBQ17nhjDM9r5iqeLjGa0bS2Lrlls0JdAxecXGlNFEBAWGJrlNGV3c6nkZDwv12DMTta80WhtQEs88FTtpk9dpcUUh3SYG6GaD4zxDUenAje7uig7muayzYV6AKqdy7oyPg%2BcECstC%2FeqgXk%2FFsm2Dveg6%2B%2F93r3XtWYzqM9xfxN1P0EbILaGClpfvmipPMjv6tBTp1MpRqaUR1&X-Amz-Signature=251a97f01c08f0544216d1d52fc95f2c43b792529c330929d8b50af9a5dd8ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTZH2L2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIAYM7ERTQ9Fk%2BbCAmOhhfTojPMBw8DTHz6GpxaVe3crGAiBDWkAqZ9FfWdCgUFzbaEZfCQZMZiS5z%2FSzp1vZ2rheYCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMqXIHsYPuCH%2BaNaEsKtwDQXEMtJWtv4glJnK0qPGd7z6kHfR71RYisQN8jO4leVekH1P%2BCSv1H%2BWZsJT60IJy8tg2qA7j1qVqSQ4mJl8zvIs618s79BODsl5Q0%2B1Ea6rwHZuHfPOmReloBrXioWCJxoSp4ZMRusCmwQL6JfsaEBa56s3Ajnxjdb0kEr3PisoF%2BBgU9ADR%2B8UdIKAy%2F%2BX2jamQ%2Fz9StjS7Dxc20Koo%2BiMtF81CUlu1pHtH8JWodqoQN1OsyFojfuZu%2B8MKmwENzlwUwwc4oOasF5K%2F1RffGWUpTkB6tsZwo%2BsrOhepUz3Fk1rxA5%2FZkoKik6eskG%2BugRr5ylgmQcNB4ComU9%2BJvWYBPK5xk%2Fh839JCjIdlqJl%2BfMgaxgKGQ3nu4zCj6sVl22YfBExoUhKpO9zkuZNmIVrjPqVjtFxNkLw6EPbUNXr%2BPSP%2FDlMGh34bG5MWbljlQoOiaciHTHF54%2BKTMxvHThucmrilDZAgVNe1DbjQZ1j20JtVQSYth%2FZar5Y%2BTmTUrEqeiiQlCLEIV5%2B6DciYOk1ZJ5lOpHiTfMLrBiku2gouNmogVDsvcgXcLzuU2pdbXvkNTBHxRKgsmSIWjS54u543Qga3CtiHOSs2WXL6D8My5jPx8PK0iqpYj7EwjMyHvQY6pgEagYBT1weTWr5TwWBQ17nhjDM9r5iqeLjGa0bS2Lrlls0JdAxecXGlNFEBAWGJrlNGV3c6nkZDwv12DMTta80WhtQEs88FTtpk9dpcUUh3SYG6GaD4zxDUenAje7uig7muayzYV6AKqdy7oyPg%2BcECstC%2FeqgXk%2FFsm2Dveg6%2B%2F93r3XtWYzqM9xfxN1P0EbILaGClpfvmipPMjv6tBTp1MpRqaUR1&X-Amz-Signature=483163069a79887332d4a9db6edd1c7ef8431ea2384cd56eb517ff94b6ac7bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
