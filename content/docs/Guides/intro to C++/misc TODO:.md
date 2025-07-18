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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5WGFKQK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCu8q1iWlggaVSx1o%2FuWRfXm3sSg8OC16fKrL9s7Fl5%2FQIhAMbW0GbuVnd5bhAN3vEyYQHZ%2FDUYYMwQrtwSsMjRhQhOKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT7fBMkktHCZLo3DAq3ANpDH45nP6GCoC9ocAj0sPVQ5hySq8tc7V7CFApv1q3e8z18YF1IMR5wdBfpIPPZ27q9%2FS6IOofJ7rngJTBPCA%2B5lBTsAJmBcCE%2Fs8ku1pnFI3NAt5MRslfrzZaeHyuZvZOdVTjr0RxIAG9A9%2FUZ82U%2FjJX%2FCLD1lzOZgQV7fJ9WMr9kbi2XHeV2IRheofZGzVSuiDlQXax37xCHIHnGyvcWjyof9N%2Bbj3lN6NQJBu%2BWgps50EGd%2FI9vm7rpSsLgV%2BwB43mgritwNpzdPGC0rsRIdk9dvMpQLEPE6iEaZWs0mVHNcqilafKlxlgDIrgnqoFIK5NkXxx%2FnLbv8Now%2BOpzPQ28lBfNMgvCZbcbX974IDeUeWZTB4jBHxr1LMix9%2BaX2ixpJmT%2BMk8jYqOOWZxdLhAdsPI8e61CvbXaMkjbq7HQBbTmWfx4Zd%2BFUnWXy5VMd6PkjOwG3y8eLAf%2FaVHZyQ7hIdLzbnnuP09vIkT75YvYduJpYo0LJ4FM0%2F5LeLzkiqkubPp25KT94ZS129shjqg8dLPtZY%2FmsHfmpG%2BFMyxj9XXH7hW2eXI2hIIU4FK%2FT6QPVhMgZvj8mTaepDqP4t1O2%2FAVRvUCU1xW%2BWehRnBnHleWzvNjgQ6CzCk%2FefDBjqkAT4l0Xfo6mWRDT7PnheOEthuAxOHhPB4Jpy4mQxrED7lD6vHreb3qEhGHnworL0ctasWW31UaiYmb9PIBAL0QJ6VoPEFw8Ii%2BFG%2BYkNiglqxWUORWUiiCCO82IwuwwaNz6iziLv9tjE70sZSPNLdnsVWOTFudweBLQRQIa30AhFN1p144JAJtbeANwyVrLwg1nQ6VuQCzGSXqR88OZUEr5cclWP3&X-Amz-Signature=fe9007e859e88515253b809f19a26172c3ba8a2aaa7f03e5b35625e550196af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5WGFKQK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCu8q1iWlggaVSx1o%2FuWRfXm3sSg8OC16fKrL9s7Fl5%2FQIhAMbW0GbuVnd5bhAN3vEyYQHZ%2FDUYYMwQrtwSsMjRhQhOKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT7fBMkktHCZLo3DAq3ANpDH45nP6GCoC9ocAj0sPVQ5hySq8tc7V7CFApv1q3e8z18YF1IMR5wdBfpIPPZ27q9%2FS6IOofJ7rngJTBPCA%2B5lBTsAJmBcCE%2Fs8ku1pnFI3NAt5MRslfrzZaeHyuZvZOdVTjr0RxIAG9A9%2FUZ82U%2FjJX%2FCLD1lzOZgQV7fJ9WMr9kbi2XHeV2IRheofZGzVSuiDlQXax37xCHIHnGyvcWjyof9N%2Bbj3lN6NQJBu%2BWgps50EGd%2FI9vm7rpSsLgV%2BwB43mgritwNpzdPGC0rsRIdk9dvMpQLEPE6iEaZWs0mVHNcqilafKlxlgDIrgnqoFIK5NkXxx%2FnLbv8Now%2BOpzPQ28lBfNMgvCZbcbX974IDeUeWZTB4jBHxr1LMix9%2BaX2ixpJmT%2BMk8jYqOOWZxdLhAdsPI8e61CvbXaMkjbq7HQBbTmWfx4Zd%2BFUnWXy5VMd6PkjOwG3y8eLAf%2FaVHZyQ7hIdLzbnnuP09vIkT75YvYduJpYo0LJ4FM0%2F5LeLzkiqkubPp25KT94ZS129shjqg8dLPtZY%2FmsHfmpG%2BFMyxj9XXH7hW2eXI2hIIU4FK%2FT6QPVhMgZvj8mTaepDqP4t1O2%2FAVRvUCU1xW%2BWehRnBnHleWzvNjgQ6CzCk%2FefDBjqkAT4l0Xfo6mWRDT7PnheOEthuAxOHhPB4Jpy4mQxrED7lD6vHreb3qEhGHnworL0ctasWW31UaiYmb9PIBAL0QJ6VoPEFw8Ii%2BFG%2BYkNiglqxWUORWUiiCCO82IwuwwaNz6iziLv9tjE70sZSPNLdnsVWOTFudweBLQRQIa30AhFN1p144JAJtbeANwyVrLwg1nQ6VuQCzGSXqR88OZUEr5cclWP3&X-Amz-Signature=f2b2ba6f5febd1f8a0a0bab136ed9ff95ea987d83b90a6d8753d46dd70c2216c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
