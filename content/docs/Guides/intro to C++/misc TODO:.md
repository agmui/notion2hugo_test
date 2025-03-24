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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXS2QXQH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYGLy8Dol69tDRMjsGrWA4gJCR1wzxiB%2BjdtFBQ8y%2BMAiANQa2P%2Bm4ztUjyu6CEakAKkFqxg0fLiwDF5jLvtXOoqiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1CVBTHaEU9s5nvK6KtwDOdygRBhZYXl0Yuxe7HXijIULNiNq46yXfbhZ8p3itnH5hhFYHL106Vq1rEZ6UBb6t0DMG8JO2ufEqfb%2F%2BUo4yx4%2BSPnk%2FP4s3AdyFc3wW19YswC%2By4RirGQIA%2BRB9HcYuOcZrIxEST%2BjPF%2FTF4EHXNkyY8S%2FMrXyuzScMvaKGC0R6f%2FmPsG9QoeUcTp%2Bx0Bem6e%2BaHJwi%2Fw9UprzlEJAMeju40vKYbhPvYsyBe52yidzNfAgsPkaTBZVsIEI5lo%2FrO%2Byt2WNUtbBqar2qwWvxdG9zB89RWgZVtBxE5LNFPYsTkI%2BTJYjMXfBmN6fFNslTAU2MaHek17D5cjZKQWatvLDR0VZ8riZ98gwL7%2BDjxkztZupoqZpMr1MahlccA3G2T6LcJ%2FnzNJKNZZw9KFLdHVtLO%2BjDMa66qpglDPXMZlatlxz%2BSv8y5aq1h3DoBNl0TKtRGSfkUTqpJcmEZL0XqOhWZLU%2Bst0%2FvioYNbqTJpZvULBpuz3Did75F8E%2BtcvASrTRAM1DiN3ubcodr7T8c%2BAS3iO%2FjuTx1ldXA8qGz2VPwaFNFXXnCFzgLEE8mHbYN6AkyhQs8N%2FDeaDKU0DvY3Hj0LQX4Xu36yd2i%2FL1pzFvfy0bH6YZu0PdfUwhKCEvwY6pgHyc%2Ba0Ebm%2B9%2B53I0uByPgcuzmu2wPPyOlR2TRFUa9zg8A51z9HjF%2Ff4pBDMJ7h6db1arHBhIezBU%2FIVtG%2BHuDRYO4Cnvd5mzHXzgK5FGwfLIXosos%2Brx28ZMPE26zRXzEU9BPYjBiRoo%2B9fhcmQNkw3ysKgkaH%2FI37Pw%2FC86x6a82xjVbyMoshPEYVVNAep%2FIdw49uy4%2FikIpxmUxEIym4GlBEjTvt&X-Amz-Signature=2f4d7ead8edb5bfd5049fb671a5039cc9f88f35c059d081847bfc3f519a80a05&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXS2QXQH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYGLy8Dol69tDRMjsGrWA4gJCR1wzxiB%2BjdtFBQ8y%2BMAiANQa2P%2Bm4ztUjyu6CEakAKkFqxg0fLiwDF5jLvtXOoqiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1CVBTHaEU9s5nvK6KtwDOdygRBhZYXl0Yuxe7HXijIULNiNq46yXfbhZ8p3itnH5hhFYHL106Vq1rEZ6UBb6t0DMG8JO2ufEqfb%2F%2BUo4yx4%2BSPnk%2FP4s3AdyFc3wW19YswC%2By4RirGQIA%2BRB9HcYuOcZrIxEST%2BjPF%2FTF4EHXNkyY8S%2FMrXyuzScMvaKGC0R6f%2FmPsG9QoeUcTp%2Bx0Bem6e%2BaHJwi%2Fw9UprzlEJAMeju40vKYbhPvYsyBe52yidzNfAgsPkaTBZVsIEI5lo%2FrO%2Byt2WNUtbBqar2qwWvxdG9zB89RWgZVtBxE5LNFPYsTkI%2BTJYjMXfBmN6fFNslTAU2MaHek17D5cjZKQWatvLDR0VZ8riZ98gwL7%2BDjxkztZupoqZpMr1MahlccA3G2T6LcJ%2FnzNJKNZZw9KFLdHVtLO%2BjDMa66qpglDPXMZlatlxz%2BSv8y5aq1h3DoBNl0TKtRGSfkUTqpJcmEZL0XqOhWZLU%2Bst0%2FvioYNbqTJpZvULBpuz3Did75F8E%2BtcvASrTRAM1DiN3ubcodr7T8c%2BAS3iO%2FjuTx1ldXA8qGz2VPwaFNFXXnCFzgLEE8mHbYN6AkyhQs8N%2FDeaDKU0DvY3Hj0LQX4Xu36yd2i%2FL1pzFvfy0bH6YZu0PdfUwhKCEvwY6pgHyc%2Ba0Ebm%2B9%2B53I0uByPgcuzmu2wPPyOlR2TRFUa9zg8A51z9HjF%2Ff4pBDMJ7h6db1arHBhIezBU%2FIVtG%2BHuDRYO4Cnvd5mzHXzgK5FGwfLIXosos%2Brx28ZMPE26zRXzEU9BPYjBiRoo%2B9fhcmQNkw3ysKgkaH%2FI37Pw%2FC86x6a82xjVbyMoshPEYVVNAep%2FIdw49uy4%2FikIpxmUxEIym4GlBEjTvt&X-Amz-Signature=800d8f0b308b505f0cf55c424990399fe05d860dbbb4a1bd10b82744601a1489&X-Amz-SignedHeaders=host&x-id=GetObject)

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
