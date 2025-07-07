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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BMQRFPG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD8xJMYnsG1aIq7cslt2wdNgigViFjR3eHNbvbZiDCz9AIhALvc%2FqlZJIlbou%2Brbw6wdYIIGFmhYV5C%2FYf7WBpp7U%2BoKv8DCHYQABoMNjM3NDIzMTgzODA1Igw9bTqM%2BEQqzWYrM0oq3AN7NcLVJ5CS%2Fo7EBHlaG9AHQXO9MMizHXuANTIb9Nc5ePdaei8ZBBtUyC%2Bals7zyXY48KzpniQxlgKwCxZ7ct1pDdfINlyHN5o7AALl0lsOpeLmSasbdwDdAtrwrJlSKzZSzmIrbFleAYDbVheNMu9iWUjTElkuSwFpVnPK%2FVvxEDsftIKw5Px6ofLcfZSc%2FCIiZmeIh3jjoP1Nj%2FNZUkmY8xw1sNRqFQfRfvaMfgp7hSMuhjqIpNYTymSG1FfOMveivHnuXHtqb7h13sa0xHQCTsqSIco%2FnPLHSY4DlG3Mg8ZFocprCxxY%2BremZP42AhRmrpq7vrZQedU1FQMt6XvwcZTLCMCtS9UHwUDhvae1YQ8wQ0on8Jp84c35FetiRszkH2Xd%2BHq5a7%2BsQre6sRKeDH7rFncDztRkfU8j3Eo6Usc2KdndU7g8Y%2B36MTjV4FGpB7D4uLL6wNiU%2Fk%2FLjiLPQ59PC%2FandC7Xv%2BnOABory%2FDcEmRkubmkLhDfJSPkecLU2nNgmn%2FMiS2g2uRpc7rHdHUSU8By%2BUdepE4wcRutLoUbXXrXnYI1ukd8uhlhbqZjJqSegaaWYXAq36DH5Xtqs7pfpoTPq9Mw4mNqW%2BKquVUfR6IKJUtPOKkQbDCni6%2FDBjqkAeB0B0TkGu3sbP99wB6P6uHi94O5nEDv67qzQm9ISOjuiYOSb1URE50aW9Qgm6BxqyPQnK1YruZbjM6OvEGiI7PHmTyVVeWzAjCTbaVqQTbp6S%2B3RDnPRDDyp8%2BLY%2FYRbIKRY6t1DZ47xt4crZmLZimIxnh9Q5lh0py7CBD%2BLrY92KasvXdyqRh6QhgZKUZv5FN%2BjQDopKOV8%2FsZT2%2FtaT1jCagK&X-Amz-Signature=660e21a64b817b66fc255d17aebd698b3941baeedca7c9110159747699306bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BMQRFPG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD8xJMYnsG1aIq7cslt2wdNgigViFjR3eHNbvbZiDCz9AIhALvc%2FqlZJIlbou%2Brbw6wdYIIGFmhYV5C%2FYf7WBpp7U%2BoKv8DCHYQABoMNjM3NDIzMTgzODA1Igw9bTqM%2BEQqzWYrM0oq3AN7NcLVJ5CS%2Fo7EBHlaG9AHQXO9MMizHXuANTIb9Nc5ePdaei8ZBBtUyC%2Bals7zyXY48KzpniQxlgKwCxZ7ct1pDdfINlyHN5o7AALl0lsOpeLmSasbdwDdAtrwrJlSKzZSzmIrbFleAYDbVheNMu9iWUjTElkuSwFpVnPK%2FVvxEDsftIKw5Px6ofLcfZSc%2FCIiZmeIh3jjoP1Nj%2FNZUkmY8xw1sNRqFQfRfvaMfgp7hSMuhjqIpNYTymSG1FfOMveivHnuXHtqb7h13sa0xHQCTsqSIco%2FnPLHSY4DlG3Mg8ZFocprCxxY%2BremZP42AhRmrpq7vrZQedU1FQMt6XvwcZTLCMCtS9UHwUDhvae1YQ8wQ0on8Jp84c35FetiRszkH2Xd%2BHq5a7%2BsQre6sRKeDH7rFncDztRkfU8j3Eo6Usc2KdndU7g8Y%2B36MTjV4FGpB7D4uLL6wNiU%2Fk%2FLjiLPQ59PC%2FandC7Xv%2BnOABory%2FDcEmRkubmkLhDfJSPkecLU2nNgmn%2FMiS2g2uRpc7rHdHUSU8By%2BUdepE4wcRutLoUbXXrXnYI1ukd8uhlhbqZjJqSegaaWYXAq36DH5Xtqs7pfpoTPq9Mw4mNqW%2BKquVUfR6IKJUtPOKkQbDCni6%2FDBjqkAeB0B0TkGu3sbP99wB6P6uHi94O5nEDv67qzQm9ISOjuiYOSb1URE50aW9Qgm6BxqyPQnK1YruZbjM6OvEGiI7PHmTyVVeWzAjCTbaVqQTbp6S%2B3RDnPRDDyp8%2BLY%2FYRbIKRY6t1DZ47xt4crZmLZimIxnh9Q5lh0py7CBD%2BLrY92KasvXdyqRh6QhgZKUZv5FN%2BjQDopKOV8%2FsZT2%2FtaT1jCagK&X-Amz-Signature=9b490a339487506cd1e52d344da15b355d360f3e6ce4125d99821e11e6ab8405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
