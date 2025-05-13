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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFNWFXCR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCnW5hI1iLVWORLhJq6nFHnwIoe7qAfIlwKrGTtbTg7VwIgAamkEBhPv4PcM%2Bfe87cwGi7T5gfi%2Fdx%2F3IrOQVDPv70qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvx1hSEjZR55yz6gSrcAz1FWvYI0UMgX1xAosEMpCC2%2BVFP89Fg%2F4TiGnYu%2FTj17UhaeaWtdeIkNh%2FgWuLLYELJ57GcJUfOZM%2FtX5XzfvNK5KcI%2BhnaZxtndvWoeA9OQsGj1Q5nRrTq95xddGYjxWpDFI3XcvaxcZFgw103Ob80ehMu2UsxWlUeCnxxsizg1QLC8POQeSFWM%2FuhO%2FFWTFe4vDC1qzXpykDlSZZf%2B3HHM%2FcqGm3AJom7UjwfH1KyvLDUC%2B0DflTlMqcJwwDisz5Z2N1r%2BFw3Qs7S%2BY5nf9bUjtIL9c4QklR%2Ff1j5c2yFbhTc6rR2cjh2uHGqQYwri7iFRSY7fPLzow1vcW%2B1ZoM8x1wnYPyh4uiRHHfedpcHBymGq0VmW5VF%2B8D2PlszK2gYnFydbISKciit87upyP39GHH9WVfs%2BQzDCoSD3RWijGIXSmFkrqgyQE3XxSJc8wgiv6aiPQtznMi99e0fnzdL1UYxE1j5nI6CRqzuACj7QYgDN%2B6CAO8%2BV%2B10pBWv85hRpJ4rjrWiknL0NiOBxxGl5nqCNq36LcpZRn6wtI18cpVmUhuX8JpmB1YywPdgsMF6tUqUpS5gmTL30nZsXXMMvO%2BefBeLYp5Os2q8fzC81S%2Frj22h%2Bx9kFXeeMJaOjcEGOqUB6Lt5Z7AqBUSfUQggR%2BlnH2bUbbCSWj6oCPejKEli89bgYJOw%2FTJP5P1GUHrxjsK9cIW3m6aHEmEbDCaSeU4prByqvIIsQs92PiKoQgWT47JwPVSwLVVuVYVCqXS4sEJm%2BB7I%2BMARtJiB%2F3f5W6NGtP4IKECdKmm%2FamCkoYBY2DM%2BZRjlTLXwGshadBi25am2o0gkdMKJA%2BzA%2Be8CcPMLiIudecf0&X-Amz-Signature=3eab560668fcaa235c0f3aaf31ea53b5adf83c8a44caa4d42dc5eec0cc02a0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFNWFXCR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCnW5hI1iLVWORLhJq6nFHnwIoe7qAfIlwKrGTtbTg7VwIgAamkEBhPv4PcM%2Bfe87cwGi7T5gfi%2Fdx%2F3IrOQVDPv70qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvx1hSEjZR55yz6gSrcAz1FWvYI0UMgX1xAosEMpCC2%2BVFP89Fg%2F4TiGnYu%2FTj17UhaeaWtdeIkNh%2FgWuLLYELJ57GcJUfOZM%2FtX5XzfvNK5KcI%2BhnaZxtndvWoeA9OQsGj1Q5nRrTq95xddGYjxWpDFI3XcvaxcZFgw103Ob80ehMu2UsxWlUeCnxxsizg1QLC8POQeSFWM%2FuhO%2FFWTFe4vDC1qzXpykDlSZZf%2B3HHM%2FcqGm3AJom7UjwfH1KyvLDUC%2B0DflTlMqcJwwDisz5Z2N1r%2BFw3Qs7S%2BY5nf9bUjtIL9c4QklR%2Ff1j5c2yFbhTc6rR2cjh2uHGqQYwri7iFRSY7fPLzow1vcW%2B1ZoM8x1wnYPyh4uiRHHfedpcHBymGq0VmW5VF%2B8D2PlszK2gYnFydbISKciit87upyP39GHH9WVfs%2BQzDCoSD3RWijGIXSmFkrqgyQE3XxSJc8wgiv6aiPQtznMi99e0fnzdL1UYxE1j5nI6CRqzuACj7QYgDN%2B6CAO8%2BV%2B10pBWv85hRpJ4rjrWiknL0NiOBxxGl5nqCNq36LcpZRn6wtI18cpVmUhuX8JpmB1YywPdgsMF6tUqUpS5gmTL30nZsXXMMvO%2BefBeLYp5Os2q8fzC81S%2Frj22h%2Bx9kFXeeMJaOjcEGOqUB6Lt5Z7AqBUSfUQggR%2BlnH2bUbbCSWj6oCPejKEli89bgYJOw%2FTJP5P1GUHrxjsK9cIW3m6aHEmEbDCaSeU4prByqvIIsQs92PiKoQgWT47JwPVSwLVVuVYVCqXS4sEJm%2BB7I%2BMARtJiB%2F3f5W6NGtP4IKECdKmm%2FamCkoYBY2DM%2BZRjlTLXwGshadBi25am2o0gkdMKJA%2BzA%2Be8CcPMLiIudecf0&X-Amz-Signature=ee707c9576a93919dcdc15730986a32b91233015d377e5ff51520957854b2332&X-Amz-SignedHeaders=host&x-id=GetObject)

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
