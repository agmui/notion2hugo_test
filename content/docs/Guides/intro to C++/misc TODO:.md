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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPFPSUZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUueWwHa%2FADF1dsxwc74BORAkBMTzu3gsiBlDcGVzq%2BAiAEo8BQBTjZU%2BobDloeGtHUaUpD%2FpHTgYyaHYoDVXvbtyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvwXIMkvfYd1pgPa5KtwDuXCBYlU1fMa2FWIe0EYgGlnjn%2Fg7jBWWhAu8Cj3VXiP2XruiP7XG%2Fk%2BzR%2Blts2GYFZxrZ3VgHk%2Fxw6njI%2FY8fqKvPXpLCG8Z6eeYFkBOyt53isC14m3CAIedo28PbqsAHlyQf%2F3qBLPjIduagRYIhjho2anjUNW0qJEqpbJExUI9MzEnSGqUhW4VrmIMGHdBv%2F3kpjl86UjF05mRNF%2FtYG4mByXhi6lSQgRzv5p8BXiH9Sf3f5Wgfi3BPPvTNgWUqiSz4fZVHUsi%2Fc2HlTa9e96FXL16whNc4aQ6M29NV3ddhhOlSSLuqdbXMgltHghHosrk%2FrZ%2FPAn%2F7jL80ccwOndjJu9njE5YrfaKRVkQ0Hu8DEkjI1FhIYszfQgozd3M%2FDc7KifBQoz44RKLPcEV4yc80TIUgY0VPswvATFU0KTJAUVJU8nZA84Qs3IHWI0hVKnoqK3eyFKePzLd5DgtYK9RI1m3vXkajaqnyVHTqfYPKgMECkNIRC6AYd2V8Wv%2FjBUlI%2BxZeusdzFnGhIn2A%2Fr24%2BYtbSrpqiB7YznVuFga%2BUEQRR4RMVzBbV7GSnfNsaeweN1jwdDVMuvA0B1i5Fy1n8rcNmjKpgGRj3SEI36epnyBN%2Bap%2FdpT5YUwo%2B%2BYwgY6pgE9W38AaEwdw6xf4EfOJsgKZ6HlQlAnGLLROhtEKqqsGrvjLeER1cgUUJtFVvh%2BddkgsFoqIJXfLs8Lc%2FlHyQNzO%2BKo0yz%2B42W1vNBiiLX95A9yo1xy%2BPcx8gptWb3CPoOZCygsTEtTzR7WoF7JFWgUG23z1imr%2BKasKqUYT%2F%2BcToOhBjlNWYFhf37kmNB4E7u4%2FAHSvaZR5KaEt5ORCKeDKH%2BhajX3&X-Amz-Signature=70bb8a6b9c7df3122d678d0b3f6afb58aac8e0cd15bbd8ca352e0543210bd5ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPFPSUZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUueWwHa%2FADF1dsxwc74BORAkBMTzu3gsiBlDcGVzq%2BAiAEo8BQBTjZU%2BobDloeGtHUaUpD%2FpHTgYyaHYoDVXvbtyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvwXIMkvfYd1pgPa5KtwDuXCBYlU1fMa2FWIe0EYgGlnjn%2Fg7jBWWhAu8Cj3VXiP2XruiP7XG%2Fk%2BzR%2Blts2GYFZxrZ3VgHk%2Fxw6njI%2FY8fqKvPXpLCG8Z6eeYFkBOyt53isC14m3CAIedo28PbqsAHlyQf%2F3qBLPjIduagRYIhjho2anjUNW0qJEqpbJExUI9MzEnSGqUhW4VrmIMGHdBv%2F3kpjl86UjF05mRNF%2FtYG4mByXhi6lSQgRzv5p8BXiH9Sf3f5Wgfi3BPPvTNgWUqiSz4fZVHUsi%2Fc2HlTa9e96FXL16whNc4aQ6M29NV3ddhhOlSSLuqdbXMgltHghHosrk%2FrZ%2FPAn%2F7jL80ccwOndjJu9njE5YrfaKRVkQ0Hu8DEkjI1FhIYszfQgozd3M%2FDc7KifBQoz44RKLPcEV4yc80TIUgY0VPswvATFU0KTJAUVJU8nZA84Qs3IHWI0hVKnoqK3eyFKePzLd5DgtYK9RI1m3vXkajaqnyVHTqfYPKgMECkNIRC6AYd2V8Wv%2FjBUlI%2BxZeusdzFnGhIn2A%2Fr24%2BYtbSrpqiB7YznVuFga%2BUEQRR4RMVzBbV7GSnfNsaeweN1jwdDVMuvA0B1i5Fy1n8rcNmjKpgGRj3SEI36epnyBN%2Bap%2FdpT5YUwo%2B%2BYwgY6pgE9W38AaEwdw6xf4EfOJsgKZ6HlQlAnGLLROhtEKqqsGrvjLeER1cgUUJtFVvh%2BddkgsFoqIJXfLs8Lc%2FlHyQNzO%2BKo0yz%2B42W1vNBiiLX95A9yo1xy%2BPcx8gptWb3CPoOZCygsTEtTzR7WoF7JFWgUG23z1imr%2BKasKqUYT%2F%2BcToOhBjlNWYFhf37kmNB4E7u4%2FAHSvaZR5KaEt5ORCKeDKH%2BhajX3&X-Amz-Signature=93c7a14b0c4a14b18048e9d42e345ad3254730726bf9b97aff9a5ea0c1639aec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
