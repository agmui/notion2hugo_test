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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPALDDA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDefND7WwXm89HY8LmpOqwZaE88DE12L%2FnHQEHJgGoURwIhAOTQsT3yOaQ63wdM4NoxUOHHDnOD%2FjEhudUT5xQ%2FVPvIKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BUWdWmNu3jTS%2FpT0q3ANgoCMy%2BskwWBhnjJmzymEwkiIOsWipcE%2BVVBz1il54rGzSdh2X3T%2F8RjMgqUIOnOyOPqZXgWyIz9ANxELZgJPUtuV7%2FIqZpNj1raq8aHxqMnkweTGMFoL8WHiCjCwfiQClpydxEmp8dhLoxnAsp9sTgrbdeZbn0JWUWGt4awBnziiPrA5e8VRERGRPvhm27V%2B%2B%2BwGXy%2BMPSoaaszdwbpuIsm98cp8HsYG7NFo%2B2JMiIk5x99K46ZtbQaBtXwuniFFc5YPzgTG6Gkj%2FOqESxPiz%2B0Eyl9436QsVG%2BgQaX2kbzOqLnapd3%2B3KngR96%2BsqFBY2c3UZZSDl%2BIP7kO0p1o82dk7UP7oEc5XPaBg8j1xpAUK0biIVPVoiPsJ1bP7rPb55x93IQHilwi%2FM170YbVJCM00VQ5eewZk7x3L%2BqAE7sdRsTGZJEBBCc2mOQD%2FM7UoJhjOtHST%2BzivQwmeipxim6KpwZvaddLzUcEMNOU%2BCGvI9aDSUj8etHDvDC%2FvsQ1n%2BVf5rZ0smJKnd6FGwR3s%2FXhtDEekwgTS4urSxooqoUXhwY6LlLFCKVdPhwIiK%2Fcx5hxDQ3gCi7Jyxx7ptDCmZdn9RNLVO%2B8y8mtw6xPImplbuobYf%2FTf369SajDqvdPCBjqkAYdLljnuY9GRhjzHbeU1dPBBnQ1eUXZAOeTNcF819MENchjKdTeKvq%2BosMMqAcm%2FvhIRg9kOo4HKtKYdxJeaNklWozsspYCAUhVEz9JpwzK9RPHSWIXuUh%2FsDX6s%2B271di4hqtWZZ8Kr5WoScvAYrnO6RoijHfh3j4nmN8CQREgVu6d7qt7dDhyBfCMJ13RJh2M7B7ButLtpVwKlTgiR4YLAhBgo&X-Amz-Signature=00d33b84eac64f71f5ca19c6f7a343a76efbe0436e0982f8b4646f2bfe0a1635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPALDDA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDefND7WwXm89HY8LmpOqwZaE88DE12L%2FnHQEHJgGoURwIhAOTQsT3yOaQ63wdM4NoxUOHHDnOD%2FjEhudUT5xQ%2FVPvIKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BUWdWmNu3jTS%2FpT0q3ANgoCMy%2BskwWBhnjJmzymEwkiIOsWipcE%2BVVBz1il54rGzSdh2X3T%2F8RjMgqUIOnOyOPqZXgWyIz9ANxELZgJPUtuV7%2FIqZpNj1raq8aHxqMnkweTGMFoL8WHiCjCwfiQClpydxEmp8dhLoxnAsp9sTgrbdeZbn0JWUWGt4awBnziiPrA5e8VRERGRPvhm27V%2B%2B%2BwGXy%2BMPSoaaszdwbpuIsm98cp8HsYG7NFo%2B2JMiIk5x99K46ZtbQaBtXwuniFFc5YPzgTG6Gkj%2FOqESxPiz%2B0Eyl9436QsVG%2BgQaX2kbzOqLnapd3%2B3KngR96%2BsqFBY2c3UZZSDl%2BIP7kO0p1o82dk7UP7oEc5XPaBg8j1xpAUK0biIVPVoiPsJ1bP7rPb55x93IQHilwi%2FM170YbVJCM00VQ5eewZk7x3L%2BqAE7sdRsTGZJEBBCc2mOQD%2FM7UoJhjOtHST%2BzivQwmeipxim6KpwZvaddLzUcEMNOU%2BCGvI9aDSUj8etHDvDC%2FvsQ1n%2BVf5rZ0smJKnd6FGwR3s%2FXhtDEekwgTS4urSxooqoUXhwY6LlLFCKVdPhwIiK%2Fcx5hxDQ3gCi7Jyxx7ptDCmZdn9RNLVO%2B8y8mtw6xPImplbuobYf%2FTf369SajDqvdPCBjqkAYdLljnuY9GRhjzHbeU1dPBBnQ1eUXZAOeTNcF819MENchjKdTeKvq%2BosMMqAcm%2FvhIRg9kOo4HKtKYdxJeaNklWozsspYCAUhVEz9JpwzK9RPHSWIXuUh%2FsDX6s%2B271di4hqtWZZ8Kr5WoScvAYrnO6RoijHfh3j4nmN8CQREgVu6d7qt7dDhyBfCMJ13RJh2M7B7ButLtpVwKlTgiR4YLAhBgo&X-Amz-Signature=c26be0bea51481548e962aa5524756618b7cae02d562a4f08f961fc3acb3970b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
