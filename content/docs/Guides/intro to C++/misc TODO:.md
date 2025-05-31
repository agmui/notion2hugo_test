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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYPIEGH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCchc5VGQXUSBmScXea1wLxzR%2BJFcQaTdGCMe9%2FO4%2FtgwIhAP6G1veq9nFsNzUeY9uS8aTISnBIub0Xi%2Btzz75LvHZEKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyByt5UaAfnM1Vk5WIq3AOInr7%2FKiZvDAq%2BkSUoPIyOWDCbqWiGlUj%2BsugRLYMOXppO47XrQgH%2FlOJ23AM8QzTSRu%2BUM3IKlmhpGuAkU25Lf0Dr2pGBIroUaAJTr6QqPX1bLuWPSwheJieRo2evWrHLOikCfFkZ4RThNaFwQKftq5eVAsNsAupCb40X6QL2YNbSaMJBf%2B8XCsB%2FwpP%2BvLGBPf8SJ3oy0J4NzbHO4zvUJJQ6VtqyG3XP2rgQbjZvcJeOkuDNly1fPLirXTLAhRLZzgCBYkSl4o0Jbm8caAjFw2UGx9iCsoGcz6F0r8f5yD3ivic5Yt%2BVQRcmv7UqAwrHgAuNoRG7QqET9mTFRM%2FfaNN0Nhu7dsebz5V2Yu8CcaV7LfQXMeKgg4TcThpzLmF6N7UaL45p%2BW7gTGDVrEYly1aRcbbGk5wagc5sh7CNiocuskwkgEU3rLB1SY4eDJPerLj%2BzSGzwjXctk7fWXAFVRwUSw%2Fgr934qeUBuhtJ43cbC3UBEKxQ7n4n5lRJ7lXRKlUIs%2FutOhNvcPLOnJgt7o59%2FtWIxtExCovdiUMmQhqBoXuKfiBkET8rL7vCgZvGqhvECHgSjOh7j9IMJnbrQJsiKTROLzkiFBY8xdmcLYPTHggGhX%2BVcy1EgzDxkO3BBjqkAUZxxyN9XNDmAWMnAv0SDa2Jy5LBNOEQ0wLbfZcooeOBQFXrYfm2qIMOUh5YBwa6BmBk%2BsoMS1AY3MaBP%2F0EozJ%2BC9uocgA6Sr%2Bu%2B4Yy2eM6JphRD3SKftrgHdUC3md10l%2B%2FBx7OOM3gpTdPOsIbjxR8t8WwCB2PC%2FagQJXEg0kxnDJFZu4FV6rM2vjwgyV4M5CC6ptSDigJ1JDFn1MSWyWEfMjg&X-Amz-Signature=29b9c7d23372ad6dbc7dd86ec4fb1d191f02b1acd7a793d929349f92f56f6d32&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYPIEGH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCchc5VGQXUSBmScXea1wLxzR%2BJFcQaTdGCMe9%2FO4%2FtgwIhAP6G1veq9nFsNzUeY9uS8aTISnBIub0Xi%2Btzz75LvHZEKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyByt5UaAfnM1Vk5WIq3AOInr7%2FKiZvDAq%2BkSUoPIyOWDCbqWiGlUj%2BsugRLYMOXppO47XrQgH%2FlOJ23AM8QzTSRu%2BUM3IKlmhpGuAkU25Lf0Dr2pGBIroUaAJTr6QqPX1bLuWPSwheJieRo2evWrHLOikCfFkZ4RThNaFwQKftq5eVAsNsAupCb40X6QL2YNbSaMJBf%2B8XCsB%2FwpP%2BvLGBPf8SJ3oy0J4NzbHO4zvUJJQ6VtqyG3XP2rgQbjZvcJeOkuDNly1fPLirXTLAhRLZzgCBYkSl4o0Jbm8caAjFw2UGx9iCsoGcz6F0r8f5yD3ivic5Yt%2BVQRcmv7UqAwrHgAuNoRG7QqET9mTFRM%2FfaNN0Nhu7dsebz5V2Yu8CcaV7LfQXMeKgg4TcThpzLmF6N7UaL45p%2BW7gTGDVrEYly1aRcbbGk5wagc5sh7CNiocuskwkgEU3rLB1SY4eDJPerLj%2BzSGzwjXctk7fWXAFVRwUSw%2Fgr934qeUBuhtJ43cbC3UBEKxQ7n4n5lRJ7lXRKlUIs%2FutOhNvcPLOnJgt7o59%2FtWIxtExCovdiUMmQhqBoXuKfiBkET8rL7vCgZvGqhvECHgSjOh7j9IMJnbrQJsiKTROLzkiFBY8xdmcLYPTHggGhX%2BVcy1EgzDxkO3BBjqkAUZxxyN9XNDmAWMnAv0SDa2Jy5LBNOEQ0wLbfZcooeOBQFXrYfm2qIMOUh5YBwa6BmBk%2BsoMS1AY3MaBP%2F0EozJ%2BC9uocgA6Sr%2Bu%2B4Yy2eM6JphRD3SKftrgHdUC3md10l%2B%2FBx7OOM3gpTdPOsIbjxR8t8WwCB2PC%2FagQJXEg0kxnDJFZu4FV6rM2vjwgyV4M5CC6ptSDigJ1JDFn1MSWyWEfMjg&X-Amz-Signature=3e96648165bbf5c94cfb9ab63c9da040000ad97af1e92d61fd1dba3c5823bca1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
