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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCHVU2N%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8ETQCNImwCp1nDy2CsXI0s%2FquDu2lMmaFUHyxn4mBVAiASapJ1E0NQUrpYkQXFRdONYRH%2BpXIGKYxMfPXgD5UCbyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAcGHmg81PIqXD0LeKtwDruKtuMUzMC5cmOqBzXaAUNwcBqa1fTNHsV1zqaxYoJIRjTYzEr8NK9CFAuLRqh1eUqnYYiF3xglPgpxSHCP2u1vxe8YNy92AVwiLdgfzTKLqUrjhxPTjj41Q5FtdMzQPs95M2PvcwhFCHI1gNnJXeVgBj9dVOtWZKvHktLkUUR%2FKyCkF2mY%2FQoepeQanlFL2Wt4wgFKdE1JFat6wQXWWcMzAuTAgoZtic%2Fvug%2BDYLRzdGReRzZp9TemEIfewAWE9TX6qAODpBPXrL3PHlYlh4Hij9ueZTQuIGkKgFhLHJkrFhHH68w%2FkhAuYXSyY%2BrMidm%2BibPYOMBMQPOxht9UF2tObK0vvchU6sbFzqb%2B0eMG8vXE2wvj6ebey5OzL56IxIJv1ymx6pgrQrFQS7FKygDgT4FcY4WPV%2BXlEOqqp5zjMUInyk7ap14AFWXA%2F7GM%2B6831ZDXRuFTFCWdCISIX1jAvMz358DAVUGy50rnPgijJ23jag0iEPgD30R4Hag7Ucm5iUmGKHk9nrrRoJks7fA6O0JxOVAY%2FloD3CDFnikkTg5ANTyO7dkKN%2BFFnR0Ihu7YSldBvKwIvfNULGfyerN6%2BvDxjPs9%2B%2BIceg%2BjqAXG8QW9f5p2%2BuW2cMmEwuYbOvwY6pgGKtpvZnuj%2BgKThBDdh%2Fe74wb0CQ9rapwK9CTGCP4lwl%2FIS0YjD%2FAd%2B6ejcrLee941%2FNq2BAV%2FVNQXaxhiTEAB9wsT6VNQxC3s5PFB7FVLWkKtb8KL29ptGFc5YR5KiIDCV09VOat1MHt1c%2BbMK1qKgq%2BYfUEhZmDcp8k5sl9nlXBqqVDUGHPA86cXQoJ5%2BknmQQMikjd5lbB6vZztEbLCGiVltLY%2FP&X-Amz-Signature=5d66f7206a07c3b3ea5b9f293398c1bb191c23e7a9f0f49a58a5c59cd9aefc40&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCHVU2N%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8ETQCNImwCp1nDy2CsXI0s%2FquDu2lMmaFUHyxn4mBVAiASapJ1E0NQUrpYkQXFRdONYRH%2BpXIGKYxMfPXgD5UCbyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAcGHmg81PIqXD0LeKtwDruKtuMUzMC5cmOqBzXaAUNwcBqa1fTNHsV1zqaxYoJIRjTYzEr8NK9CFAuLRqh1eUqnYYiF3xglPgpxSHCP2u1vxe8YNy92AVwiLdgfzTKLqUrjhxPTjj41Q5FtdMzQPs95M2PvcwhFCHI1gNnJXeVgBj9dVOtWZKvHktLkUUR%2FKyCkF2mY%2FQoepeQanlFL2Wt4wgFKdE1JFat6wQXWWcMzAuTAgoZtic%2Fvug%2BDYLRzdGReRzZp9TemEIfewAWE9TX6qAODpBPXrL3PHlYlh4Hij9ueZTQuIGkKgFhLHJkrFhHH68w%2FkhAuYXSyY%2BrMidm%2BibPYOMBMQPOxht9UF2tObK0vvchU6sbFzqb%2B0eMG8vXE2wvj6ebey5OzL56IxIJv1ymx6pgrQrFQS7FKygDgT4FcY4WPV%2BXlEOqqp5zjMUInyk7ap14AFWXA%2F7GM%2B6831ZDXRuFTFCWdCISIX1jAvMz358DAVUGy50rnPgijJ23jag0iEPgD30R4Hag7Ucm5iUmGKHk9nrrRoJks7fA6O0JxOVAY%2FloD3CDFnikkTg5ANTyO7dkKN%2BFFnR0Ihu7YSldBvKwIvfNULGfyerN6%2BvDxjPs9%2B%2BIceg%2BjqAXG8QW9f5p2%2BuW2cMmEwuYbOvwY6pgGKtpvZnuj%2BgKThBDdh%2Fe74wb0CQ9rapwK9CTGCP4lwl%2FIS0YjD%2FAd%2B6ejcrLee941%2FNq2BAV%2FVNQXaxhiTEAB9wsT6VNQxC3s5PFB7FVLWkKtb8KL29ptGFc5YR5KiIDCV09VOat1MHt1c%2BbMK1qKgq%2BYfUEhZmDcp8k5sl9nlXBqqVDUGHPA86cXQoJ5%2BknmQQMikjd5lbB6vZztEbLCGiVltLY%2FP&X-Amz-Signature=13eeafd3bc54154febf7a383156cd4a21116c9559a9c8a614e9a917ff5fad0af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
