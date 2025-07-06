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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7K234F%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDyZ9yq%2BFg%2FmL8is%2F7RGL109kkTIEO0tZvjWMpJaP8jNAiAcjllHXwkNvpe3iBTgp9wxESFwmRabnmXGcWaGITijmir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMrpJlFSLRCMc73WbvKtwD2qebC1HPvaN82rxD6uyW%2B2Yf96Vm9V0HETt0QECCp4ahZ4dBk1IMrPa47ZYLgcp%2BHbssNh8oTpQHQ6H8M0G6yGD5QzYqvGSticeR3kAPYmmNy9pHNopLed%2BOdPysnXXxSMcRrmk5LFtKfiX23Ewcvil80cWod4qQvCktPGnbpTGZzQ9Nfapu3qCOxOAK0HMUbe5xssmeGT%2Fu5W2NEIkE%2BUC2kIY0yzCzzUu9dyByZAeqjX4qePKkr58NBxifPCSwUxd7DQp7NlBjoYRAv4whlGmZsJcNk2CNp70vkyBiXYLBJ%2BOH1vhAR4IFXSG3aaXz7hIWAQ49cuO0Y5Mr738rCnEp1WTX5lWDuIN%2FmzejK9wNKf2wOG2a8pvgtOiyECTjWGS0kVHkFMSHFMnYypWvxaWmkn%2B75WVZWF8MObZsssVnkiCYr7g87ZlbjU%2BmNypt2brH4ZS8GAKUjNgJj2dFYTVM20wjvfu8PuCkXDzlZe5g9WhNET%2FWybJSxlgISMEMqMtOsbOaOHIBR92A%2FawdfzM5uxI13MLG05YrCKFrOa6jJhDH29RB9k5%2FUT0MaeL2dLT3c4EsOn%2BXNGpyR8KzwBkcOcgcaQhLX2O0lRfIlSBm4%2FG%2BzOY9JIbwd3wwyq%2BowwY6pgFuvv6SxFX4ZsEWLwolr6rrlhF05g9TkdDz8LuDz8ISgq6sD6nCPzqAWBQcMpseazN5Yhbss0btg5MJ72H7zlrF5SetECxxc7T0M5UtScrnG0FAiwybPXVtpQvN1yK172jJBG3PjRwRUEGMU65b2u1P0z8aBA%2BAKn438UxYA6pEafJTYOgKES8VN3AGrzzfUSlj%2BKXoUVbzKwQLj0T%2B9QEF7uAVm7wR&X-Amz-Signature=0d176f25fec7760da7d900e77d4d09713683ed3703ee71ae88201127fea3ca0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7K234F%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDyZ9yq%2BFg%2FmL8is%2F7RGL109kkTIEO0tZvjWMpJaP8jNAiAcjllHXwkNvpe3iBTgp9wxESFwmRabnmXGcWaGITijmir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMrpJlFSLRCMc73WbvKtwD2qebC1HPvaN82rxD6uyW%2B2Yf96Vm9V0HETt0QECCp4ahZ4dBk1IMrPa47ZYLgcp%2BHbssNh8oTpQHQ6H8M0G6yGD5QzYqvGSticeR3kAPYmmNy9pHNopLed%2BOdPysnXXxSMcRrmk5LFtKfiX23Ewcvil80cWod4qQvCktPGnbpTGZzQ9Nfapu3qCOxOAK0HMUbe5xssmeGT%2Fu5W2NEIkE%2BUC2kIY0yzCzzUu9dyByZAeqjX4qePKkr58NBxifPCSwUxd7DQp7NlBjoYRAv4whlGmZsJcNk2CNp70vkyBiXYLBJ%2BOH1vhAR4IFXSG3aaXz7hIWAQ49cuO0Y5Mr738rCnEp1WTX5lWDuIN%2FmzejK9wNKf2wOG2a8pvgtOiyECTjWGS0kVHkFMSHFMnYypWvxaWmkn%2B75WVZWF8MObZsssVnkiCYr7g87ZlbjU%2BmNypt2brH4ZS8GAKUjNgJj2dFYTVM20wjvfu8PuCkXDzlZe5g9WhNET%2FWybJSxlgISMEMqMtOsbOaOHIBR92A%2FawdfzM5uxI13MLG05YrCKFrOa6jJhDH29RB9k5%2FUT0MaeL2dLT3c4EsOn%2BXNGpyR8KzwBkcOcgcaQhLX2O0lRfIlSBm4%2FG%2BzOY9JIbwd3wwyq%2BowwY6pgFuvv6SxFX4ZsEWLwolr6rrlhF05g9TkdDz8LuDz8ISgq6sD6nCPzqAWBQcMpseazN5Yhbss0btg5MJ72H7zlrF5SetECxxc7T0M5UtScrnG0FAiwybPXVtpQvN1yK172jJBG3PjRwRUEGMU65b2u1P0z8aBA%2BAKn438UxYA6pEafJTYOgKES8VN3AGrzzfUSlj%2BKXoUVbzKwQLj0T%2B9QEF7uAVm7wR&X-Amz-Signature=82841a96bdf776c20059d65f1f15efadcba6608babd0a3d659e64a7aeeefea33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
