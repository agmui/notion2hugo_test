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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIH46MO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTWblYFm6vSZMH9KqX4GxqiNyV2x2NtOAWxf61kONOUAiAJEDu%2BR8%2BnPnh3WWO2etUr0sxbeqPNWQRViJKVj9qNaCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEYYXRnwA%2FieMxzAHKtwDyGA6RKzCk%2BkmFerGCdR1tnSScKlDwPMGrV3HoyM6v0th00vKZCsBq9pdwiE3Ko089YvmmBqm9M3OHqvqPJ81O681%2BBb%2B%2FyhM3K%2FDYmB6qcvqoy4qXr%2BtcalWNirGjFLnfm54pqwCrgRc%2FHrSJted3Ri%2BBermD3ci4Ro3%2FpsPHZ8EDlN2i4%2FVD5LdXzU4nm5fdcgqbJWxWvwVFKOK5d7dpt7ufTRIo5xONMhvguAzvWszjmFV3AI4zY5nU%2B%2F%2BErjzayw4ZYzB1VI0QfJqIVhsg7Olb5EmmQ8MXpoGRLNHZm5aMbXfFrK6hnS9XbBG0jATPXpqLfUGcXNo0qt1ScxE0fuq1edxLzJe3Cg9uH8Ma6WCvju%2BWGMbWmcbGEYuky1UlnYxOtDLnmTi1rUdNHYHKyMJrROkA3wCPZ4tdShyW8AMV%2FOleWLFZDtoUKgtTiGCQY4sSy2eKWwIOqGqikZRQTSTjyLDPci3QwZgpnka%2BAlwggJtMVcKxUfrZpRnFpJ1xxc%2BK2uZE9BzCOEHxgUXNEJY3YYZiAlwCQLIykAFizkQvig5Aei%2FvkOA5rT9hrGA5zhirZkuiMujn9TAFcxuXlbiWryp5CrSNvxFGBblm4%2F6v2vDXiBz3YAU8eUw8qjEwwY6pgE1%2Fjc7AhLrMSGVvfH2xKymA%2FlJnTbCVnfFDoUASKJk8S8XTJDcvDR1eN4PV51%2Bxx%2BZ1PlHnEKHixV2EvonrCM%2FZW9oBcUIIbCkxiLaQiwwnLP4JWN4o4tcKBsq4jc1AbvzJ1Od8MUs4XUN%2BVZO815lqGodfZLpomuG09sr%2BpQfexQLuvHXFE2KYERiALmjVz2DCslwkhZCzAXBXteCW7j0LmzbcAiu&X-Amz-Signature=d756a6cc429dc0ea38625ee200e168d11c51a9afaa3a1183946595f8daf8360b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIH46MO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTWblYFm6vSZMH9KqX4GxqiNyV2x2NtOAWxf61kONOUAiAJEDu%2BR8%2BnPnh3WWO2etUr0sxbeqPNWQRViJKVj9qNaCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEYYXRnwA%2FieMxzAHKtwDyGA6RKzCk%2BkmFerGCdR1tnSScKlDwPMGrV3HoyM6v0th00vKZCsBq9pdwiE3Ko089YvmmBqm9M3OHqvqPJ81O681%2BBb%2B%2FyhM3K%2FDYmB6qcvqoy4qXr%2BtcalWNirGjFLnfm54pqwCrgRc%2FHrSJted3Ri%2BBermD3ci4Ro3%2FpsPHZ8EDlN2i4%2FVD5LdXzU4nm5fdcgqbJWxWvwVFKOK5d7dpt7ufTRIo5xONMhvguAzvWszjmFV3AI4zY5nU%2B%2F%2BErjzayw4ZYzB1VI0QfJqIVhsg7Olb5EmmQ8MXpoGRLNHZm5aMbXfFrK6hnS9XbBG0jATPXpqLfUGcXNo0qt1ScxE0fuq1edxLzJe3Cg9uH8Ma6WCvju%2BWGMbWmcbGEYuky1UlnYxOtDLnmTi1rUdNHYHKyMJrROkA3wCPZ4tdShyW8AMV%2FOleWLFZDtoUKgtTiGCQY4sSy2eKWwIOqGqikZRQTSTjyLDPci3QwZgpnka%2BAlwggJtMVcKxUfrZpRnFpJ1xxc%2BK2uZE9BzCOEHxgUXNEJY3YYZiAlwCQLIykAFizkQvig5Aei%2FvkOA5rT9hrGA5zhirZkuiMujn9TAFcxuXlbiWryp5CrSNvxFGBblm4%2F6v2vDXiBz3YAU8eUw8qjEwwY6pgE1%2Fjc7AhLrMSGVvfH2xKymA%2FlJnTbCVnfFDoUASKJk8S8XTJDcvDR1eN4PV51%2Bxx%2BZ1PlHnEKHixV2EvonrCM%2FZW9oBcUIIbCkxiLaQiwwnLP4JWN4o4tcKBsq4jc1AbvzJ1Od8MUs4XUN%2BVZO815lqGodfZLpomuG09sr%2BpQfexQLuvHXFE2KYERiALmjVz2DCslwkhZCzAXBXteCW7j0LmzbcAiu&X-Amz-Signature=9f634b16640576d9cdd952982b3e6c22331e45f4bf865c92a12937205c640db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
