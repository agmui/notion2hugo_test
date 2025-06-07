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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R275PRQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyQuZJ6cpHkzFDCXrra2TnuXZZPHfJA%2Fu5PsdktAuDgQIhANR6Is4FLXeDQjoOc8ktc71ehsa1VVDvXMPCV0qXnVGbKv8DCH4QABoMNjM3NDIzMTgzODA1IgybxS18FeGL6NMe2nUq3APt7G9VWnsvAq27yGxcTlV%2BGuA1BneFaFDe%2F%2FDT5Djqf0fuDpVi94%2B1rZO6PMGp7fgLInwH%2BXIguMkKulcXLthpMTRn7zouDAHQozGGbTVxyYQ6ibv7DA9vuJYAxBNdwIb0%2FozXvdhggS1EVhzsVxrweyZ2C29Ebg3DYOy96WH4CNYYJ60MJDYc9x8ANnCPhFarXbSvzhVLbxUOXGVpONJjPj012ei4DAWcJ1MoZF3nTA%2BYYTWdCio%2BL%2BOlCdcO7JlnzCF9TlK6VhM8RhxV%2B%2BWbF4HFcGTKxTpRc2jf9Fql3Y2VOZns0ozN4Vskk2opJBn58OTTBakfPLzL8odrNdn6czQU9Q09Ic0A5SWX%2B62jG5bBK90x%2Bkw9CGVtL23wpjz4%2ByqPjPN9006OkbXkI2TquED%2FEgaptIHY4paNmZxQk3WYSGR4WOpHyZfaACKBgAc2RitjUAfgDsPF12SNSOzTFp1LprTTQlA4tId4kYHmbQbOm8M77xBwFMcyhZ0Cl19MebV3hF3svX6FOHcP9n5sXvM5BULPnHSjtgCHX6XVyXmSuQ8okLs8x1XKTljbmW7C4AMmKwgjC2PuNBGYYmKvdmj932IooiUYm6iyZNenWV4eRknyFRUyxevtmDDJ05LCBjqkAWAkvIcIP4pOQc1D9F4yrdxN48UkGPC95%2FbhnxWKc%2Fu5Dq0y61oiufKHEYBeKIGso2kH8QIeO8Jg1ppZ3OysKkR2i0QzPmcXVEfk2KOsuvxZtkjXIQ%2F%2FwYfxTvNGd2s3gz1WBuXdiVIfy9JimAlPORArMZlyERlPs0TI7BoWv4NIZoBG4UGnnrq1rnRG4edfiyh%2FirL4mBBK52BiyvcE00nGL2os&X-Amz-Signature=281e734c34a2d12841b3550f235aa3af67d34f555621096c3ff51924525d57af&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R275PRQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyQuZJ6cpHkzFDCXrra2TnuXZZPHfJA%2Fu5PsdktAuDgQIhANR6Is4FLXeDQjoOc8ktc71ehsa1VVDvXMPCV0qXnVGbKv8DCH4QABoMNjM3NDIzMTgzODA1IgybxS18FeGL6NMe2nUq3APt7G9VWnsvAq27yGxcTlV%2BGuA1BneFaFDe%2F%2FDT5Djqf0fuDpVi94%2B1rZO6PMGp7fgLInwH%2BXIguMkKulcXLthpMTRn7zouDAHQozGGbTVxyYQ6ibv7DA9vuJYAxBNdwIb0%2FozXvdhggS1EVhzsVxrweyZ2C29Ebg3DYOy96WH4CNYYJ60MJDYc9x8ANnCPhFarXbSvzhVLbxUOXGVpONJjPj012ei4DAWcJ1MoZF3nTA%2BYYTWdCio%2BL%2BOlCdcO7JlnzCF9TlK6VhM8RhxV%2B%2BWbF4HFcGTKxTpRc2jf9Fql3Y2VOZns0ozN4Vskk2opJBn58OTTBakfPLzL8odrNdn6czQU9Q09Ic0A5SWX%2B62jG5bBK90x%2Bkw9CGVtL23wpjz4%2ByqPjPN9006OkbXkI2TquED%2FEgaptIHY4paNmZxQk3WYSGR4WOpHyZfaACKBgAc2RitjUAfgDsPF12SNSOzTFp1LprTTQlA4tId4kYHmbQbOm8M77xBwFMcyhZ0Cl19MebV3hF3svX6FOHcP9n5sXvM5BULPnHSjtgCHX6XVyXmSuQ8okLs8x1XKTljbmW7C4AMmKwgjC2PuNBGYYmKvdmj932IooiUYm6iyZNenWV4eRknyFRUyxevtmDDJ05LCBjqkAWAkvIcIP4pOQc1D9F4yrdxN48UkGPC95%2FbhnxWKc%2Fu5Dq0y61oiufKHEYBeKIGso2kH8QIeO8Jg1ppZ3OysKkR2i0QzPmcXVEfk2KOsuvxZtkjXIQ%2F%2FwYfxTvNGd2s3gz1WBuXdiVIfy9JimAlPORArMZlyERlPs0TI7BoWv4NIZoBG4UGnnrq1rnRG4edfiyh%2FirL4mBBK52BiyvcE00nGL2os&X-Amz-Signature=72dab8b5ce8a6405c9da3dec29a4fe70eb15524d1bd47512a700bde1067df87c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
