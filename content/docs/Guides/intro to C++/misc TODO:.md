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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BIVMLSF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVXHXp5znmFiCKHE%2B4L2uDtmUYRPsZvMGKrCSTuRn1tQIhAKnC785sg9P1e7uSurJhYJoo2yvihNKLIxqCDHI1xmGaKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2B%2Fsnv6%2BmOYnSsZIq3AMh0xTR%2BWW4jQdbwS0yfHLP1iA7IoPcSl%2BAgreYQUdIPAflqMxrHm3mL8dq1Pci075WUbUkNJuv3CQDfZgvHkNjruUNYfv3At3zu7s1awfrdpJECCGqz46leP8olrJcp3eGsnlkxQogb11gI5ef27TtMGpjYfjVXGSUdoA0owPOQwKdVE1Uom38I6DyxCS1sFi%2BTH1KZPGJYITD5FH8bWaQfwvXqQ0gJ7uxMKp%2FObVj6YWWrBl6zuLYt6KWV9Vvh6Nvpz5ZqXoVCc46tM9U1ipOE5SPVew1ItFc9wUO2wq3HgpHkLyzHy%2F1pGU7RXYk21%2ByBzH4c0HRIAGQ3dBRXsoyLPXUZ%2Fa8Lzw%2BCt%2FjhPVbIu02nLRwKiAn9xkQdQemFr8Cz%2B6R2t%2FE%2FnKwYgYEumNWuOf41S158ch8F8aXlpl49BzTO%2F0Z2YxJhLcAR66ltwevZcsg63zesTIgKaQqoQhRsk1a7%2Bt59sdYYRkS6DfLWC4DZQmOdlnxt752DN7RAAWEeqKCcUvAqcV%2BXogUJlko6kgC%2FmOJGcCG0iZtu7pjkp7QPlsXGF%2F%2Bk9GFFe2wnK8KptPoTaeCvWuc%2FXDp0UgsZQQR48UMb1St2gt5WGZyHcWmXKgZImcZOXC01jDH1djCBjqkAc5izkll4MrB0T01lCBIQRMeuQjM3zFYbaajTuo2%2B4m1NMqJD3kpBpE%2FQ27XLGBXgvf5aDSY%2BSKv5CLJTJ%2F4zQh2YfFLLPdbHQ1Frm1AZnxCT2bj0Lr%2FMaWKzQGiPvNuP9Leelaa76R4a2VVc4rKCs5ZoJgTCkj2n3hcXbouwYzqo%2BB7OzOuccwOnesNl9YpAi63H%2Bz4mVgxOY%2B070ld7qjotyJR&X-Amz-Signature=bbbce9a9cbf66b400d90d5df1f98b0aa5c550fb52528e6d51b6089c4d9b2bd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BIVMLSF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVXHXp5znmFiCKHE%2B4L2uDtmUYRPsZvMGKrCSTuRn1tQIhAKnC785sg9P1e7uSurJhYJoo2yvihNKLIxqCDHI1xmGaKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE%2B%2Fsnv6%2BmOYnSsZIq3AMh0xTR%2BWW4jQdbwS0yfHLP1iA7IoPcSl%2BAgreYQUdIPAflqMxrHm3mL8dq1Pci075WUbUkNJuv3CQDfZgvHkNjruUNYfv3At3zu7s1awfrdpJECCGqz46leP8olrJcp3eGsnlkxQogb11gI5ef27TtMGpjYfjVXGSUdoA0owPOQwKdVE1Uom38I6DyxCS1sFi%2BTH1KZPGJYITD5FH8bWaQfwvXqQ0gJ7uxMKp%2FObVj6YWWrBl6zuLYt6KWV9Vvh6Nvpz5ZqXoVCc46tM9U1ipOE5SPVew1ItFc9wUO2wq3HgpHkLyzHy%2F1pGU7RXYk21%2ByBzH4c0HRIAGQ3dBRXsoyLPXUZ%2Fa8Lzw%2BCt%2FjhPVbIu02nLRwKiAn9xkQdQemFr8Cz%2B6R2t%2FE%2FnKwYgYEumNWuOf41S158ch8F8aXlpl49BzTO%2F0Z2YxJhLcAR66ltwevZcsg63zesTIgKaQqoQhRsk1a7%2Bt59sdYYRkS6DfLWC4DZQmOdlnxt752DN7RAAWEeqKCcUvAqcV%2BXogUJlko6kgC%2FmOJGcCG0iZtu7pjkp7QPlsXGF%2F%2Bk9GFFe2wnK8KptPoTaeCvWuc%2FXDp0UgsZQQR48UMb1St2gt5WGZyHcWmXKgZImcZOXC01jDH1djCBjqkAc5izkll4MrB0T01lCBIQRMeuQjM3zFYbaajTuo2%2B4m1NMqJD3kpBpE%2FQ27XLGBXgvf5aDSY%2BSKv5CLJTJ%2F4zQh2YfFLLPdbHQ1Frm1AZnxCT2bj0Lr%2FMaWKzQGiPvNuP9Leelaa76R4a2VVc4rKCs5ZoJgTCkj2n3hcXbouwYzqo%2BB7OzOuccwOnesNl9YpAi63H%2Bz4mVgxOY%2B070ld7qjotyJR&X-Amz-Signature=c7d7ce47b1d13fc338a29296429bbd67acf8431cf595b1679e886b9aeb180d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
