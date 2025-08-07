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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CHU7FI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCmael%2FRp7ofyH2sLQHh4i0A%2B0AEQkDhCGYrXINmT4uVwIhAIbEPucg1XgClrgNgOGg3SUtmd42i5Sub3Rsw8c7RsdEKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypltcudA6THs%2BSqckq3ANiuv6vd8LcB%2F27ENeDuDK3zU4lEajFE3wOvKrmmhcjnCsYE1dsmjnsbM1lS%2BIPPbpXUnXlT12O8ygP2m%2F68C7V48wnR%2FXKVUgau7%2BTMV1lJoKVNt0Ci6pjM%2FghyIfRznb1XWl90uIClojW4EO0zBJLtu3ZMyMqxazw7Yai8MDXxttCTvzDHuAtd9VaGxORCM7MsKgMliC8md44XzyQ76nfJnkJuKeu3OxikULfSithpMDaswTJyj%2Fj%2FAq7moZwuksbDoJJfrP%2FT9sVzah2XpZg%2BDsAR2n4RhVCzml8NomUER8t%2Bi%2B7xQD6i%2BWiN%2F7wZZYEyQMIoAD6zMWz1PkCz1zCpHa2l%2FQfJTv33lt3ey0ooOgWj3rI%2BHEWZ7kz1gyeTJaRP34OdgQBmk1s4n8b%2FnG6%2BKkTgR4UgQGCTPwFn4Ks8IQZMOzlqTY1ORVJQ1IxCzY%2BvEJpA4cMsVJmAO%2BarqvkyGFMObVbo59LBj8XAEtAh2z9S%2BSyqtjJophZrgln2KtemV5v6B3tx1wo1j6nYQtWMmJPXE4qFK7iTpFqN2O8RUuTwAV3Yoln8qnMQn%2FwdGvoiPc9UtBrO%2BLhOJAo7OhYi0y6SQrEUlNhjaFsjCM159m%2BCOAjEEoUEl3FpTDA%2BtLEBjqkAQQWZ4ZWWCZlFCkcLtiljDvyDZbBZm6y5bF1%2B%2FoJ1SGGg1tXke5KB9vjN%2B1A4bTeW4%2FLhCYv3WDNT7kAhcELnsjIg8auWHWzkDCqrg2ojKkDOVPWPk6CZKwtxcPM8OMrH6alH4vnPZUCJr90lxeqKeA7WWh71RdXTjrp6wU5fwsZ3iYTqhk%2FnUsqk84DCD2nhOcsTNJhGCl9FcddAGL%2FEBA0MHim&X-Amz-Signature=aca907e3e921b098047fcdd82dddd98ceb3b3edf0b800f47113b216710e69ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CHU7FI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCmael%2FRp7ofyH2sLQHh4i0A%2B0AEQkDhCGYrXINmT4uVwIhAIbEPucg1XgClrgNgOGg3SUtmd42i5Sub3Rsw8c7RsdEKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypltcudA6THs%2BSqckq3ANiuv6vd8LcB%2F27ENeDuDK3zU4lEajFE3wOvKrmmhcjnCsYE1dsmjnsbM1lS%2BIPPbpXUnXlT12O8ygP2m%2F68C7V48wnR%2FXKVUgau7%2BTMV1lJoKVNt0Ci6pjM%2FghyIfRznb1XWl90uIClojW4EO0zBJLtu3ZMyMqxazw7Yai8MDXxttCTvzDHuAtd9VaGxORCM7MsKgMliC8md44XzyQ76nfJnkJuKeu3OxikULfSithpMDaswTJyj%2Fj%2FAq7moZwuksbDoJJfrP%2FT9sVzah2XpZg%2BDsAR2n4RhVCzml8NomUER8t%2Bi%2B7xQD6i%2BWiN%2F7wZZYEyQMIoAD6zMWz1PkCz1zCpHa2l%2FQfJTv33lt3ey0ooOgWj3rI%2BHEWZ7kz1gyeTJaRP34OdgQBmk1s4n8b%2FnG6%2BKkTgR4UgQGCTPwFn4Ks8IQZMOzlqTY1ORVJQ1IxCzY%2BvEJpA4cMsVJmAO%2BarqvkyGFMObVbo59LBj8XAEtAh2z9S%2BSyqtjJophZrgln2KtemV5v6B3tx1wo1j6nYQtWMmJPXE4qFK7iTpFqN2O8RUuTwAV3Yoln8qnMQn%2FwdGvoiPc9UtBrO%2BLhOJAo7OhYi0y6SQrEUlNhjaFsjCM159m%2BCOAjEEoUEl3FpTDA%2BtLEBjqkAQQWZ4ZWWCZlFCkcLtiljDvyDZbBZm6y5bF1%2B%2FoJ1SGGg1tXke5KB9vjN%2B1A4bTeW4%2FLhCYv3WDNT7kAhcELnsjIg8auWHWzkDCqrg2ojKkDOVPWPk6CZKwtxcPM8OMrH6alH4vnPZUCJr90lxeqKeA7WWh71RdXTjrp6wU5fwsZ3iYTqhk%2FnUsqk84DCD2nhOcsTNJhGCl9FcddAGL%2FEBA0MHim&X-Amz-Signature=f2df83719d449f80aa73ff58c389499bff3a26b3cedb74a04c347506a647622d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
