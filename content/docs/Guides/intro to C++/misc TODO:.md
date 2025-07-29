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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TMQUQGB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDc5ssD6YVdl8t7Jz3AQjNN1agbSYiyx6gntyz9nC0GmQIhAJsG%2FKBNOaHuwYePD2CrpDznB3Zj%2FfTXIsh17mFzc%2Bg7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxESISA7Q5UlE0zDUkq3AMoovKnDg5EuOemfJRpvB1WefngktfLrji5uV8P%2FIjGtg9GiK1vmK4%2BRYQ%2FsNE1Hgod3S7lgAj%2B64O6TrEsSSQv%2BzWL5%2BKNeYUBeNFRx8fzPwZGg8460dWgb6FVGxYTIwiszpoWcNsjLrcuzRVva%2B619Itd4kGi7STjO%2Bhoan3nMG7KoThzReG%2F7GKLaS02VnVGhVe7hhz%2F%2B0wLdtgH%2FbbwYwzi4x8oAQHeApLG%2FoHfLAZLzpzbsN2oJN%2BptzoJlqr94%2FGF9F4oIkebqKh7cibJNNjuvD%2FXTZ30N%2F6IaoDaAYZSWn2W59SKsCC8vMC5XwEnZWVPXrdKrvUh504P4r32oEScG4B0iAOIcX6f9Pl%2F2iZaP3KLt2xijhiymR1I3Bt2cYP3P3ZyD1lGGIlyCyLc%2FWhOxec738GleZm%2BOltGhUhyFh2VB4VpiByfS%2BokwwDabzXs8cA09WmMwaaJfeKYu3DsIWHR6WpQcJenbV4GMHiP81%2FMJZl3yHr7Kz7VjKwjVTQn58Zc6jMEY3yU%2FweXyGVyz%2BGWFLKZOyq%2FUBsxaJeNKsQNiuQ7taEqql8v1CR4tqFkFrdrJcZOFaVtEy%2BMbC6V%2Fl9EYBZ6cmfuwqcgzUna1mnG9Q3DId3TLDDly6DEBjqkAVBdnUUxzx%2FSS5flM1VauDTOW%2B27zezNLF4dxd%2Bm5voWRKfb9UlXwWteFQVjufSkssMd1v%2F0mRiea9aMvo5CGctgpceQ%2BLOIgHdz8VGvJNogG8p%2FftnKKaSUMNJIZzKrfKNICae5EwyUJALYPheVlJr%2Fv6kLwqGYgsIKVORuSq%2BeVmFUC3JBjt7hN6GBQu04yu645Qp%2FONBjIKaLj21BrfJIFAG3&X-Amz-Signature=b40fff26029219a736a55a0cd1f1ebbb585a230f95747b5d7f0894d68996db74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TMQUQGB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDc5ssD6YVdl8t7Jz3AQjNN1agbSYiyx6gntyz9nC0GmQIhAJsG%2FKBNOaHuwYePD2CrpDznB3Zj%2FfTXIsh17mFzc%2Bg7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxESISA7Q5UlE0zDUkq3AMoovKnDg5EuOemfJRpvB1WefngktfLrji5uV8P%2FIjGtg9GiK1vmK4%2BRYQ%2FsNE1Hgod3S7lgAj%2B64O6TrEsSSQv%2BzWL5%2BKNeYUBeNFRx8fzPwZGg8460dWgb6FVGxYTIwiszpoWcNsjLrcuzRVva%2B619Itd4kGi7STjO%2Bhoan3nMG7KoThzReG%2F7GKLaS02VnVGhVe7hhz%2F%2B0wLdtgH%2FbbwYwzi4x8oAQHeApLG%2FoHfLAZLzpzbsN2oJN%2BptzoJlqr94%2FGF9F4oIkebqKh7cibJNNjuvD%2FXTZ30N%2F6IaoDaAYZSWn2W59SKsCC8vMC5XwEnZWVPXrdKrvUh504P4r32oEScG4B0iAOIcX6f9Pl%2F2iZaP3KLt2xijhiymR1I3Bt2cYP3P3ZyD1lGGIlyCyLc%2FWhOxec738GleZm%2BOltGhUhyFh2VB4VpiByfS%2BokwwDabzXs8cA09WmMwaaJfeKYu3DsIWHR6WpQcJenbV4GMHiP81%2FMJZl3yHr7Kz7VjKwjVTQn58Zc6jMEY3yU%2FweXyGVyz%2BGWFLKZOyq%2FUBsxaJeNKsQNiuQ7taEqql8v1CR4tqFkFrdrJcZOFaVtEy%2BMbC6V%2Fl9EYBZ6cmfuwqcgzUna1mnG9Q3DId3TLDDly6DEBjqkAVBdnUUxzx%2FSS5flM1VauDTOW%2B27zezNLF4dxd%2Bm5voWRKfb9UlXwWteFQVjufSkssMd1v%2F0mRiea9aMvo5CGctgpceQ%2BLOIgHdz8VGvJNogG8p%2FftnKKaSUMNJIZzKrfKNICae5EwyUJALYPheVlJr%2Fv6kLwqGYgsIKVORuSq%2BeVmFUC3JBjt7hN6GBQu04yu645Qp%2FONBjIKaLj21BrfJIFAG3&X-Amz-Signature=f8feb2a6bab475937ce4fadad202e9d5321e927b59d419c5a92fe89a1a83c76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
