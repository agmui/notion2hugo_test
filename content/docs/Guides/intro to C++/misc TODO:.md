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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUVB5D3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa0eEfLwYPpqiRZYr0gZC13M4CHFRN5CoHsTOyGheFtAiAUFQtl%2BeHWarrpK5vVUb6KxJsnPHZrqY9U3kFcNHG0ByqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWoNASkmSXzHNvi9AKtwD9udCGMP6wCBJVG44g7brSJgfFVCiGFWntVvEj3PD0JhOvB5ESgMJPIluuQYv1yEY0F27EjrXta2dsHGvp3cox1WltQ4Oa6uEXAj6gVrgbBls3ljwFfdDBcYPrGh0JPWM1YIyjCEVjigqZO5b6gdmPLKWoFH4OKwqYF2Gc1zjTB2Mp6H0cHNzOxrRmaWHBB9NXp8sbnyR8jwzoMKUpI28W3JkiVphkvDUepNSOS6%2BZOx5kJseLZOKLN6GEjBOtoBbE7%2Fv%2F85yj%2BCCj%2FxEhdbX5DAdHhjjyKDAWR3R0dmiRQC5GkpkjAcxDM0bWSpPDbwYA5Dfl7%2BdkYoEIfYXsa%2FbGSlYt7OPqhq4oTLDsAKtphkYYxt5jPmNJqBS7nyl31G6LBxsnk7CxgwWHXicJTBkPjHNnywHQWPMPxcY7BaOUZQ9JTufz6LoTWz%2BWp7sXgAudyGODs6ktuTjxTFFxDg8ECNE3nlUIZWAB2AE6BDmkvkAfO87Uj7p3td0v9ndkTLiXZCNjuzlT%2BgXuU%2FT2bsQsOI1hFL10U5paW9hRm8vAi5939rJjgk%2F6OozpIYUFN1c2UXIF7juli4x8NvUUI1KvZOeM06Y3jaoQSzfBrg%2BCr4NAYrbqqH6pof7OyYwy%2F68wwY6pgE27pQFFD4tNMXlysVYT62CuxDQiT8FpH2ZPz3jCncrP7gLZ6aRWRqej7HrbCh8X5SQQcNGBLGRvBNvhe6hqTUUTlSzGiUadarBoE8d8VNF08VN%2BoLqGYcc9hfuxiKJCR8qx7Zfaf%2FF60YnOrxn2E5tt71NXlQ7Iio8w3VHoS%2FbThTXrHja%2FQ1eBQ2ZB1Ep5ji%2FVA3sFh6BN3NGU1y35VwPH9xrcgau&X-Amz-Signature=1d9ac52f21a5eb82f92d1d890335cfb4e665291851abc540de913be3c00f03f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUVB5D3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa0eEfLwYPpqiRZYr0gZC13M4CHFRN5CoHsTOyGheFtAiAUFQtl%2BeHWarrpK5vVUb6KxJsnPHZrqY9U3kFcNHG0ByqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWoNASkmSXzHNvi9AKtwD9udCGMP6wCBJVG44g7brSJgfFVCiGFWntVvEj3PD0JhOvB5ESgMJPIluuQYv1yEY0F27EjrXta2dsHGvp3cox1WltQ4Oa6uEXAj6gVrgbBls3ljwFfdDBcYPrGh0JPWM1YIyjCEVjigqZO5b6gdmPLKWoFH4OKwqYF2Gc1zjTB2Mp6H0cHNzOxrRmaWHBB9NXp8sbnyR8jwzoMKUpI28W3JkiVphkvDUepNSOS6%2BZOx5kJseLZOKLN6GEjBOtoBbE7%2Fv%2F85yj%2BCCj%2FxEhdbX5DAdHhjjyKDAWR3R0dmiRQC5GkpkjAcxDM0bWSpPDbwYA5Dfl7%2BdkYoEIfYXsa%2FbGSlYt7OPqhq4oTLDsAKtphkYYxt5jPmNJqBS7nyl31G6LBxsnk7CxgwWHXicJTBkPjHNnywHQWPMPxcY7BaOUZQ9JTufz6LoTWz%2BWp7sXgAudyGODs6ktuTjxTFFxDg8ECNE3nlUIZWAB2AE6BDmkvkAfO87Uj7p3td0v9ndkTLiXZCNjuzlT%2BgXuU%2FT2bsQsOI1hFL10U5paW9hRm8vAi5939rJjgk%2F6OozpIYUFN1c2UXIF7juli4x8NvUUI1KvZOeM06Y3jaoQSzfBrg%2BCr4NAYrbqqH6pof7OyYwy%2F68wwY6pgE27pQFFD4tNMXlysVYT62CuxDQiT8FpH2ZPz3jCncrP7gLZ6aRWRqej7HrbCh8X5SQQcNGBLGRvBNvhe6hqTUUTlSzGiUadarBoE8d8VNF08VN%2BoLqGYcc9hfuxiKJCR8qx7Zfaf%2FF60YnOrxn2E5tt71NXlQ7Iio8w3VHoS%2FbThTXrHja%2FQ1eBQ2ZB1Ep5ji%2FVA3sFh6BN3NGU1y35VwPH9xrcgau&X-Amz-Signature=544f57c9b9493f6cf188bab5376064a9e31a78548414ad55a2a21f2a28a886fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
