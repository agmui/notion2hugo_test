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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFA3JM4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyAEcimmAcKAm%2BpRVIZtfIfnhbnOSKUee17VQxXb9KGgIhAJy8bccfQ9J8jr36JKZOnhcBzEiAinLiQ%2FVX4zHynt2CKv8DCEAQABoMNjM3NDIzMTgzODA1IgzShDsR3qZnogrr6mUq3AOjlneQVbeWo%2BNohNckrvTGHAGJgHUuISHARw8F0h6ZTPVmxyxEoZXCFzqbvyj6qCjUcePu9jH%2FQWVYvp2AfiwubEMhdvqFU7zSYDvpspfnuIbYibqHJWCAM9sKcCbKa3ImSFJtWwHSo1ctoQnL5vrMvvTGjjE91T%2FYUvtWUW6pFAxNKWaYsuctjd2ZW4RCUiXdCZ679bo8yRibUfaGxEDdNL3E10xT0Q1VMU82pwmHvyHe2YJROQHmp4CgoXgAgXnETu50jZK6d8tT4YvdJXnxqJ0VFHzjS%2F5GB0anu4Fz5Lzg4lPMOIukHObZ1kFKKI6AviyGygP3emUE6wbq5ZQekRrm4PU65eSHpUE%2FMEduXQDlP1el5ec8Xfx9t%2Bf%2BP6UnxZ%2B4EBEB4boaA0KkgIUvMFNXNr%2BpYe9NThE3gYfWOv2u%2FFlk3wzpNJvNpd9kR4jKuUkUNgMFdX8gFEXsqjKatGMDm1cH6AGnIDtw82SHT8%2B4Hwcn196NBD3gedBm1FMEuz4ggl7kCl%2Fe6%2FOylLPUw23QZnb4w6fHv3cVn3r0ON0mVcjuZOM0coBQIBJ%2B9%2BrUsXzb5YJcKXUhjaCVhTBjFCNMBD1iaDeXypaURApZMuJlse1O6e6LCXCW7jC0hLLABjqkAUZDewcTkxulJ9oryvo%2Bp01nMpt9HElUWjD3VXcozsuolOue3HGxKGxXBo5TGRJ567Fv7N2HkiD1HXxnQSP7oOgri6mkWfNwuIfeI5xkn4JdLPfoZKDBQ2y8fo%2FCuPVZr%2FWMTXFttW2sfgND4K8JWHwOLOgMM6STJ75EoEvdET%2BIXzZOecADSsjpGw26A1X3KR09IXDDYfdTFUjHxpT%2B0Txyk5yF&X-Amz-Signature=17b7ec2a56eb161f51fb5e2dbc39965120b6b4e2d685fb6167ba55ddc61a320a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFA3JM4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyAEcimmAcKAm%2BpRVIZtfIfnhbnOSKUee17VQxXb9KGgIhAJy8bccfQ9J8jr36JKZOnhcBzEiAinLiQ%2FVX4zHynt2CKv8DCEAQABoMNjM3NDIzMTgzODA1IgzShDsR3qZnogrr6mUq3AOjlneQVbeWo%2BNohNckrvTGHAGJgHUuISHARw8F0h6ZTPVmxyxEoZXCFzqbvyj6qCjUcePu9jH%2FQWVYvp2AfiwubEMhdvqFU7zSYDvpspfnuIbYibqHJWCAM9sKcCbKa3ImSFJtWwHSo1ctoQnL5vrMvvTGjjE91T%2FYUvtWUW6pFAxNKWaYsuctjd2ZW4RCUiXdCZ679bo8yRibUfaGxEDdNL3E10xT0Q1VMU82pwmHvyHe2YJROQHmp4CgoXgAgXnETu50jZK6d8tT4YvdJXnxqJ0VFHzjS%2F5GB0anu4Fz5Lzg4lPMOIukHObZ1kFKKI6AviyGygP3emUE6wbq5ZQekRrm4PU65eSHpUE%2FMEduXQDlP1el5ec8Xfx9t%2Bf%2BP6UnxZ%2B4EBEB4boaA0KkgIUvMFNXNr%2BpYe9NThE3gYfWOv2u%2FFlk3wzpNJvNpd9kR4jKuUkUNgMFdX8gFEXsqjKatGMDm1cH6AGnIDtw82SHT8%2B4Hwcn196NBD3gedBm1FMEuz4ggl7kCl%2Fe6%2FOylLPUw23QZnb4w6fHv3cVn3r0ON0mVcjuZOM0coBQIBJ%2B9%2BrUsXzb5YJcKXUhjaCVhTBjFCNMBD1iaDeXypaURApZMuJlse1O6e6LCXCW7jC0hLLABjqkAUZDewcTkxulJ9oryvo%2Bp01nMpt9HElUWjD3VXcozsuolOue3HGxKGxXBo5TGRJ567Fv7N2HkiD1HXxnQSP7oOgri6mkWfNwuIfeI5xkn4JdLPfoZKDBQ2y8fo%2FCuPVZr%2FWMTXFttW2sfgND4K8JWHwOLOgMM6STJ75EoEvdET%2BIXzZOecADSsjpGw26A1X3KR09IXDDYfdTFUjHxpT%2B0Txyk5yF&X-Amz-Signature=d14c2778fb3cdf04e4b86d9c9e31d4da5f049580cb00bd7e3c3eb93a4971aca2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
