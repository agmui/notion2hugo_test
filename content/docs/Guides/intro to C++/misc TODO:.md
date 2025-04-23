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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625FXP6C4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDXBMHBf1k%2FOYSlH5YtXzfO9ZOywHavpkXMnhxaTCX5fAIgD%2FyEAlg%2BpFCMWyJUxI%2BTJEouthW8YrrjM6cl9MjeWJUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPl2gi2ISuMSXkKMnyrcA9Lz8gNmnqZK7BCTJjdDQRYnp8%2FfOwdhxs2FZZcrTL%2BxQbuOr8MaXvasVclM7GfgdGK4VGA88WREboz5C8DCEnZZ9SUEuK2%2BNHBJv3zPQ81DIiSgTXq00GWVe0C%2BM3zpTGKQK9gUYnP8kArO1VQ3Ts3qArLU1y7iBn6TKYNqd3a8PkhmJWY9ol8uyCVmdWDnRg9eVgIC%2BKjEU6xwb0lruU6liWGKEGzqL0j%2FxYF8zT0jhUmGDtEK978G%2FjHmvL93fva1iBVv2EYBBDGtT10JTIZsJE00sIgrK4glI0y9wMzJNP7ltkEH2okbRzNsmwg2k2h2LlXQFmN%2FPYj4qtwQMqiPkpJiWDJBkZkfu0i3mklZc%2FgWza%2B%2FKClNRLdpn5dmZI8SPPM%2FBLBHFhOrVgCv9osXMH94X%2B2nmFol9aHkNr6WMwkXh9ZwAl%2FU2BSN8KCRICe2tobVvwBFHxrHDanjBdu8fVQRIR3zFQiOfXvqfVvF2HGYXzCc2Ij3%2BB0DKkCethfxsDOBpftr1DMiMikA54O11tW%2Fyc%2FYsDcTcsaJnXZablpWoJjjpqstpc4fOAo1XJXV1rmvJYRxByYK4rgRfU6g6BZWe542j%2FT69jMhRTB2cBx9JDwlPPqAwLiVMM%2BNpcAGOqUBloJgMPI7Wzy7AlLKEGxeU8k%2Bf6kfgMOE1Twr2i6OOEjODIUA3VmrjM84DUqbbpsVjNwTQcUaY669L54o%2BTXsFpsTwbSOJXm9veKNMOq13m4JuHugcJPcC9iAWRUfy9VQ5TZtGL8eTrihd0XFL%2F2saWoYJ9C4ZA2dmZ5Z60xyrLnxh1aXzWrZ3n6fXycXgGPqQtS%2FoYlxXAtsShn5jC%2B3uAaYopMZ&X-Amz-Signature=ea69b5d88fa80c6ccf1888c53437a0b4836a3890237b6f25884348db5595b5d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625FXP6C4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDXBMHBf1k%2FOYSlH5YtXzfO9ZOywHavpkXMnhxaTCX5fAIgD%2FyEAlg%2BpFCMWyJUxI%2BTJEouthW8YrrjM6cl9MjeWJUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPl2gi2ISuMSXkKMnyrcA9Lz8gNmnqZK7BCTJjdDQRYnp8%2FfOwdhxs2FZZcrTL%2BxQbuOr8MaXvasVclM7GfgdGK4VGA88WREboz5C8DCEnZZ9SUEuK2%2BNHBJv3zPQ81DIiSgTXq00GWVe0C%2BM3zpTGKQK9gUYnP8kArO1VQ3Ts3qArLU1y7iBn6TKYNqd3a8PkhmJWY9ol8uyCVmdWDnRg9eVgIC%2BKjEU6xwb0lruU6liWGKEGzqL0j%2FxYF8zT0jhUmGDtEK978G%2FjHmvL93fva1iBVv2EYBBDGtT10JTIZsJE00sIgrK4glI0y9wMzJNP7ltkEH2okbRzNsmwg2k2h2LlXQFmN%2FPYj4qtwQMqiPkpJiWDJBkZkfu0i3mklZc%2FgWza%2B%2FKClNRLdpn5dmZI8SPPM%2FBLBHFhOrVgCv9osXMH94X%2B2nmFol9aHkNr6WMwkXh9ZwAl%2FU2BSN8KCRICe2tobVvwBFHxrHDanjBdu8fVQRIR3zFQiOfXvqfVvF2HGYXzCc2Ij3%2BB0DKkCethfxsDOBpftr1DMiMikA54O11tW%2Fyc%2FYsDcTcsaJnXZablpWoJjjpqstpc4fOAo1XJXV1rmvJYRxByYK4rgRfU6g6BZWe542j%2FT69jMhRTB2cBx9JDwlPPqAwLiVMM%2BNpcAGOqUBloJgMPI7Wzy7AlLKEGxeU8k%2Bf6kfgMOE1Twr2i6OOEjODIUA3VmrjM84DUqbbpsVjNwTQcUaY669L54o%2BTXsFpsTwbSOJXm9veKNMOq13m4JuHugcJPcC9iAWRUfy9VQ5TZtGL8eTrihd0XFL%2F2saWoYJ9C4ZA2dmZ5Z60xyrLnxh1aXzWrZ3n6fXycXgGPqQtS%2FoYlxXAtsShn5jC%2B3uAaYopMZ&X-Amz-Signature=a5322812c51eb0277932bb788bb2ed4aead8d2370db7b5e5b22859c435ce8add&X-Amz-SignedHeaders=host&x-id=GetObject)

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
