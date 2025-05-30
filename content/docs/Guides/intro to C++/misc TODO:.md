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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636W47CNZ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXEta3IN1iF6x7YohiXXuUpfEf0bkql9ui6UdMl%2B2g6AiA%2BSWUboagYyKZjFMLamxSkHriw2LCliPMqfs2P78Z%2BKSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0DF0R65lZlyrIQScKtwDmrHdgd1dSHMwu806griO6oEkm%2BroAAZS2K1aBzFKJ7N5FS6OLPcck1VDf1fl6YTeaF9Iv0%2FKJJKHLAJRTivP%2FaNLm7GIBSBbQoI%2FkqkpwDTa%2FVP%2FA7mJQ1cU6KrIlidunf2SWXT9fibbSb7ksj4fvZPlPg4pI5SKoMURnpqqRvH8WwkmcLZ4FE7AGN9JA92vJaZo7g16cKadPMy53gNHbO5XV9lsEJhR7qvvXku5YR%2B150gJyMXnZVfQvTelWmlvMDTwItEXkGoNDL1s7sc%2F3ilOpV4o%2BHEwpbhzdkFQDKM2gWMEihAL5YWiSBl%2BF2Ogp7oCIeE3Idac%2FWIrKbKXGzU0S7DzP9XTsQhAGklE8L29XjvJtpQCgxdsEfxNvv1R66Q3T3Oo%2F55r5hSI7OWwMaUKUic0LYGIbu%2F9ncCtaJ%2B4wSndTxJGH0GXPbBLHGcIOV8XjOglUaEH3aNC2MKEMOHlEshQV2bGAeiM843FEkt11CoHQnfigc%2BSGVuCWu6ZHDo23n%2F%2FuEFfJJWL0S%2FOZRz6GVsamNFjWCX%2BFzr%2Fzk7EQqHFwjZvYOUND37tZNxOjILQCTBVw9sObAa7wsG2Z9Toaukx2nJeFJQPWynxaHeXw6iySkZ%2Bhh6T15wwpY7mwQY6pgFXLqN%2FpawQgQP7qLcwi4i%2Bz24oEX%2Fqu5xZViynitNWyqTFcV5%2BBM%2FXWxjO%2FevV%2FKarbjZ7Nrmxuqb%2FrhXCdBaWdLT2KMfL1jydjmEsNqLbHtMAASkg500klP0KVe4LGU6%2FdAg2MjhckqJ5a%2Bflhf5s%2FDZyb0%2BZDn5X162i0z1Q9AzVcHwG2ANzYvdA6NALqeUwmy9kV7VkYRnVBqtybHYy%2Fmcwno%2FU&X-Amz-Signature=946bc1530aa1e7eb9c2c82ac57a6e336087627eeb59d7c59cdcbff44f8df3e43&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636W47CNZ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXEta3IN1iF6x7YohiXXuUpfEf0bkql9ui6UdMl%2B2g6AiA%2BSWUboagYyKZjFMLamxSkHriw2LCliPMqfs2P78Z%2BKSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0DF0R65lZlyrIQScKtwDmrHdgd1dSHMwu806griO6oEkm%2BroAAZS2K1aBzFKJ7N5FS6OLPcck1VDf1fl6YTeaF9Iv0%2FKJJKHLAJRTivP%2FaNLm7GIBSBbQoI%2FkqkpwDTa%2FVP%2FA7mJQ1cU6KrIlidunf2SWXT9fibbSb7ksj4fvZPlPg4pI5SKoMURnpqqRvH8WwkmcLZ4FE7AGN9JA92vJaZo7g16cKadPMy53gNHbO5XV9lsEJhR7qvvXku5YR%2B150gJyMXnZVfQvTelWmlvMDTwItEXkGoNDL1s7sc%2F3ilOpV4o%2BHEwpbhzdkFQDKM2gWMEihAL5YWiSBl%2BF2Ogp7oCIeE3Idac%2FWIrKbKXGzU0S7DzP9XTsQhAGklE8L29XjvJtpQCgxdsEfxNvv1R66Q3T3Oo%2F55r5hSI7OWwMaUKUic0LYGIbu%2F9ncCtaJ%2B4wSndTxJGH0GXPbBLHGcIOV8XjOglUaEH3aNC2MKEMOHlEshQV2bGAeiM843FEkt11CoHQnfigc%2BSGVuCWu6ZHDo23n%2F%2FuEFfJJWL0S%2FOZRz6GVsamNFjWCX%2BFzr%2Fzk7EQqHFwjZvYOUND37tZNxOjILQCTBVw9sObAa7wsG2Z9Toaukx2nJeFJQPWynxaHeXw6iySkZ%2Bhh6T15wwpY7mwQY6pgFXLqN%2FpawQgQP7qLcwi4i%2Bz24oEX%2Fqu5xZViynitNWyqTFcV5%2BBM%2FXWxjO%2FevV%2FKarbjZ7Nrmxuqb%2FrhXCdBaWdLT2KMfL1jydjmEsNqLbHtMAASkg500klP0KVe4LGU6%2FdAg2MjhckqJ5a%2Bflhf5s%2FDZyb0%2BZDn5X162i0z1Q9AzVcHwG2ANzYvdA6NALqeUwmy9kV7VkYRnVBqtybHYy%2Fmcwno%2FU&X-Amz-Signature=ddabf9251cdd18903b052ad140ee071e4c9fbc00298ec782ca816ac25db7c25a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
