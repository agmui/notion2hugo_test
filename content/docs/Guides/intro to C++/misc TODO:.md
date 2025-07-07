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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664X3T7TN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDNyhqBCwORg33Vs60tsTpQ4mCeLZZYOVbd%2FXZBBp07HAiBdbjS8ygiFS42QgMa1JHgWLilzKMxFIXmYShEoY98vFyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM5AiFV7dTQSyu0jEJKtwDNO%2FvI1XhcZTGb1TX3vh8JA5IKlf0%2FclgzGOy6ck8lEWLSwRtKu8NjgYoM87L3RizYJvqPCo4Y7OYH5lRLD9y6punK1nRXiQWyVNT1lnuz4LvLdQDsrWTR1154Mvlg9NDelfweKsxzOtTCySW9Eh4v35SRhzGF2lguUfi6JbmoFuwrzke7qhr2U3x4mxF%2F8a6ZKt%2BKpy7dR22T5ZoLD4ty2TTZPX3cu0kdzPS4NLUYB21GbVJUIUECarjIqXKE6nw7QAQhyPr4hA3yjdXYgILq3GR18S4q%2FzxQRkZtXRpQyqdOVGOmsqo%2BwZhm%2B%2FlO%2Bk5KX67NJO8QXz5lsVq51I0CeRJTgYjH8eb3mdWkS8%2FtqhAP8fVS5CFX%2BmHtzYTJzOm1GYnRbG2kuEvcpCFW%2F2ZPPEOPiPLk19l2OigFNJ2aBZGP3%2BiXUUdzogzIml1qHYKfnz9wc7shd7P0ljkpT9V88GlDEciovL%2FieHD1d6Yk%2FtOLFyS6xzGnyh4hsdQx4LfQOjFqqN2n74Aqu5x6Hn9xfSXNzYf%2BTf2Cz9nxzxFvmjVAawmRUZvDgaSfot%2BrzkC2vfGgO%2Bpa3aUote4p46tlZuUd8ZK38nv5zJELXJqYFQ4MGr3c6h%2B0YNqKnkw1Z%2BswwY6pgGtGxOEMXJ4dMVz64rS2pfRX9v7DzPiV%2Fvx78rPy79iYFkG8RFBH2%2B%2BQyXkc%2BLXy%2Fe0hLzXLdiowkaCpZccn6elz56QG9e%2Bs25Nz%2B05IT793q5vVbxEv5lo70Sh%2BTz2pPPNrQcAXWkqTTznXgmHB8FEJPsbgJQseexjhKJPoBC7K9L%2F1pevv5Dfcn8XDv5z5Kz51mx%2B9tdpzVHZpnWlJCH5jttnULnP&X-Amz-Signature=3ac8cdd42797199a4b48ab9c5f0f4a31efb1a95b949cccbb0deecdcb692f2eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664X3T7TN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDNyhqBCwORg33Vs60tsTpQ4mCeLZZYOVbd%2FXZBBp07HAiBdbjS8ygiFS42QgMa1JHgWLilzKMxFIXmYShEoY98vFyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM5AiFV7dTQSyu0jEJKtwDNO%2FvI1XhcZTGb1TX3vh8JA5IKlf0%2FclgzGOy6ck8lEWLSwRtKu8NjgYoM87L3RizYJvqPCo4Y7OYH5lRLD9y6punK1nRXiQWyVNT1lnuz4LvLdQDsrWTR1154Mvlg9NDelfweKsxzOtTCySW9Eh4v35SRhzGF2lguUfi6JbmoFuwrzke7qhr2U3x4mxF%2F8a6ZKt%2BKpy7dR22T5ZoLD4ty2TTZPX3cu0kdzPS4NLUYB21GbVJUIUECarjIqXKE6nw7QAQhyPr4hA3yjdXYgILq3GR18S4q%2FzxQRkZtXRpQyqdOVGOmsqo%2BwZhm%2B%2FlO%2Bk5KX67NJO8QXz5lsVq51I0CeRJTgYjH8eb3mdWkS8%2FtqhAP8fVS5CFX%2BmHtzYTJzOm1GYnRbG2kuEvcpCFW%2F2ZPPEOPiPLk19l2OigFNJ2aBZGP3%2BiXUUdzogzIml1qHYKfnz9wc7shd7P0ljkpT9V88GlDEciovL%2FieHD1d6Yk%2FtOLFyS6xzGnyh4hsdQx4LfQOjFqqN2n74Aqu5x6Hn9xfSXNzYf%2BTf2Cz9nxzxFvmjVAawmRUZvDgaSfot%2BrzkC2vfGgO%2Bpa3aUote4p46tlZuUd8ZK38nv5zJELXJqYFQ4MGr3c6h%2B0YNqKnkw1Z%2BswwY6pgGtGxOEMXJ4dMVz64rS2pfRX9v7DzPiV%2Fvx78rPy79iYFkG8RFBH2%2B%2BQyXkc%2BLXy%2Fe0hLzXLdiowkaCpZccn6elz56QG9e%2Bs25Nz%2B05IT793q5vVbxEv5lo70Sh%2BTz2pPPNrQcAXWkqTTznXgmHB8FEJPsbgJQseexjhKJPoBC7K9L%2F1pevv5Dfcn8XDv5z5Kz51mx%2B9tdpzVHZpnWlJCH5jttnULnP&X-Amz-Signature=87779db673940e1f71a32c5885de365080144b5ac8b90d5feb214983171db601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
