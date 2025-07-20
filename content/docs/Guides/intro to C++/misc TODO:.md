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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPMYMTJY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkh9BSj%2FR7cOHUGMGK4JACXeCDpCK3TKwaOUqPCcDesgIhALUURwcVRiMF559xCk90CyzW9coTYxMs5Bi5jK7PxsilKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhH1n%2BwE0%2FltK4KQwq3AODgEZaxmjat4MACwjQyFU%2BWl0wEmD09izBl4l14NTMm7LTEioYL6Smx7YRY30RwEaudT%2FDuFo05X9H%2F%2BZMK4pXdSJNy2NQ3KBveUxtPGbFAKIvFvLsT%2B09n4fWUbOmNeiGrWB%2BSZhgqnPYBPaYCNAjypwgt%2FHT6QeqKU2C5pX7SNp6qkv43csZXrwVPCVRnYguHN1yX1w5bqBx%2FlV7TzseEx3AONXTe1kLx%2FZdTpRdRiSzLxtLqL64teKL%2Fim8428fB04wivKrc4bcAx9L8kd7kg9ILXCP3Y0UJFQk4W1WXcx%2F2laQcz5qYdd%2FJqR2AGmkPTgoxmd7tpkWk0fmq3oWxii2V6kdbmzUzzV4onUk%2FavLNz9nHwNhbe9BEezlKbWjGlzjb%2FymGGVinF4obJpHqt7qxCeEsBkfHEGjUmzsaFcvIu7CluQOVJKeVHuu6LHoOQ4kD5fy1bh05umYQxJNVmNUWJ9JI77rTySI30sLssCtbBfOpvjHJzyXQ41dWoCuriZNfHvKD%2BXoLmGWcD28X51Tp8JWwEj7NRe4IDUjJOl7NdRfn9BwbmR%2BHbZrLYtcEEIkegi0HRRjE6F%2FV7o20qs5dy2y6YE%2BaFsOzAf%2B%2F8Bzadm24MlfT2uMOzC9uPLDBjqkAWLYzOxFNpKDPGIZFKBUZXTlE4LalXU53pH6t%2BbLnUZqL73ipiZrNbSl8dPVioyZ1PPmXMA2%2FQYwmHfHiuh%2FAKiC7uoKC93v%2B3A%2FbPQawhbzuE7qlS1xJDWN4%2Bf7xJEfIpz0AKX9BEqQEaBAgzeMgl6FsuSsXVssfDKAP9yQnNRHXAuXGdbgHAtrW7KAqM%2Fhk34pb2BjGWB3s0POFvJFOpEoAzxe&X-Amz-Signature=449cd553411a73062697762beb85ac26e6824075d67992e40f5422bc0b0a4faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPMYMTJY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkh9BSj%2FR7cOHUGMGK4JACXeCDpCK3TKwaOUqPCcDesgIhALUURwcVRiMF559xCk90CyzW9coTYxMs5Bi5jK7PxsilKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhH1n%2BwE0%2FltK4KQwq3AODgEZaxmjat4MACwjQyFU%2BWl0wEmD09izBl4l14NTMm7LTEioYL6Smx7YRY30RwEaudT%2FDuFo05X9H%2F%2BZMK4pXdSJNy2NQ3KBveUxtPGbFAKIvFvLsT%2B09n4fWUbOmNeiGrWB%2BSZhgqnPYBPaYCNAjypwgt%2FHT6QeqKU2C5pX7SNp6qkv43csZXrwVPCVRnYguHN1yX1w5bqBx%2FlV7TzseEx3AONXTe1kLx%2FZdTpRdRiSzLxtLqL64teKL%2Fim8428fB04wivKrc4bcAx9L8kd7kg9ILXCP3Y0UJFQk4W1WXcx%2F2laQcz5qYdd%2FJqR2AGmkPTgoxmd7tpkWk0fmq3oWxii2V6kdbmzUzzV4onUk%2FavLNz9nHwNhbe9BEezlKbWjGlzjb%2FymGGVinF4obJpHqt7qxCeEsBkfHEGjUmzsaFcvIu7CluQOVJKeVHuu6LHoOQ4kD5fy1bh05umYQxJNVmNUWJ9JI77rTySI30sLssCtbBfOpvjHJzyXQ41dWoCuriZNfHvKD%2BXoLmGWcD28X51Tp8JWwEj7NRe4IDUjJOl7NdRfn9BwbmR%2BHbZrLYtcEEIkegi0HRRjE6F%2FV7o20qs5dy2y6YE%2BaFsOzAf%2B%2F8Bzadm24MlfT2uMOzC9uPLDBjqkAWLYzOxFNpKDPGIZFKBUZXTlE4LalXU53pH6t%2BbLnUZqL73ipiZrNbSl8dPVioyZ1PPmXMA2%2FQYwmHfHiuh%2FAKiC7uoKC93v%2B3A%2FbPQawhbzuE7qlS1xJDWN4%2Bf7xJEfIpz0AKX9BEqQEaBAgzeMgl6FsuSsXVssfDKAP9yQnNRHXAuXGdbgHAtrW7KAqM%2Fhk34pb2BjGWB3s0POFvJFOpEoAzxe&X-Amz-Signature=66b31fc7403ecbeca795204983138c4ce1f9b19d0dcce13171a88b8245871c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
