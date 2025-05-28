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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAQV6R%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcVU%2FVHtJYVDTHWm0xzX1rXXdB%2F87k%2BWrlFuZEXPosdAiAseXDpJK8RIkFYEEHUu46BswTKhe%2F4hSZgBAvX3yxXPyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMLWpYB9YkoBX6C%2BGRKtwDxqhg7Ver2PqhZR%2Bwkb8Ang7KqoiiQOGSI23YCZ6vgU6rJu98BTBG0JGMZ2wsrQ9hOQ1oBeHMsTOW2%2FMa29lkKdlfzzThRCYooH9EIHI92URymvHKbBy4yBmkJ2Dd6tStdCRL%2FIwb413dB2%2FA%2FZ%2BWrYgHI7ajU5Lkac82CHltJhpspY4DoWFA%2B3IK9DZ6hIH3R0DprrjR8KDH7CVIiikQIqUKpht28Z%2BcZQZmFcIV8l0d4960x0b5Yq5LFEQO58bSx8djIuRb5wE2QTAaUvZ%2BlK4%2BvpnRvUMwvuzIbsljOsnc51bg%2BH9OEShLxgiOH8r0Rr%2FzDpUxPbT3Y1deFwcZFBUq6L5sez%2FR3iwjawfdRH73aCLvUoIKUebl5X3c79F0qPPeIu5pK7z52yFVO1mpUFhMco%2B65TlnKEBQa0S80a%2FZTBhCXv5GzsqUe2H22OBSMgWdOV%2FOX7LiEpIQHio0udpDLWhhUjBZY4BdQWINuNVEr839Ec6YXxzXT1ganDgg%2FpuTBUKZzQbcLtz9%2Bg4QqZmH56xcSrDKE%2Fv6uAE6mEHJwZIxWHEzzEAYtJP4TEJIf98bCdL9kWCTcLyc2QYPaio5Yi9dhIctn69SVwxoprpo26j9nNItzblGI3cwufjcwQY6pgELXseSNCB%2FNadHnUa3Dbmr1nDJ%2BVYNWhxEF4GujpktPGXnPdU4dv4KRPLLlwM2dlohVUc8rMKQVkxaHDJYzi%2F%2FwR7b1EElkn41T%2BIzGwgLuPaM6F6RkWOuAcTXDowQJDAo3y6fCuGepj%2BGGQ0K9B8koCCkMtZ1cCR02AsdQK7gZyBUzz1m1M1x4bL4ZO7d%2B6HlvZAGzlf%2FE3lSWhkEauwwKn7dWt7a&X-Amz-Signature=20aa5d0a5a2282173ad2d3acf8c6d56531edd341c722948732ee0f147771fcd2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWAQV6R%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcVU%2FVHtJYVDTHWm0xzX1rXXdB%2F87k%2BWrlFuZEXPosdAiAseXDpJK8RIkFYEEHUu46BswTKhe%2F4hSZgBAvX3yxXPyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMLWpYB9YkoBX6C%2BGRKtwDxqhg7Ver2PqhZR%2Bwkb8Ang7KqoiiQOGSI23YCZ6vgU6rJu98BTBG0JGMZ2wsrQ9hOQ1oBeHMsTOW2%2FMa29lkKdlfzzThRCYooH9EIHI92URymvHKbBy4yBmkJ2Dd6tStdCRL%2FIwb413dB2%2FA%2FZ%2BWrYgHI7ajU5Lkac82CHltJhpspY4DoWFA%2B3IK9DZ6hIH3R0DprrjR8KDH7CVIiikQIqUKpht28Z%2BcZQZmFcIV8l0d4960x0b5Yq5LFEQO58bSx8djIuRb5wE2QTAaUvZ%2BlK4%2BvpnRvUMwvuzIbsljOsnc51bg%2BH9OEShLxgiOH8r0Rr%2FzDpUxPbT3Y1deFwcZFBUq6L5sez%2FR3iwjawfdRH73aCLvUoIKUebl5X3c79F0qPPeIu5pK7z52yFVO1mpUFhMco%2B65TlnKEBQa0S80a%2FZTBhCXv5GzsqUe2H22OBSMgWdOV%2FOX7LiEpIQHio0udpDLWhhUjBZY4BdQWINuNVEr839Ec6YXxzXT1ganDgg%2FpuTBUKZzQbcLtz9%2Bg4QqZmH56xcSrDKE%2Fv6uAE6mEHJwZIxWHEzzEAYtJP4TEJIf98bCdL9kWCTcLyc2QYPaio5Yi9dhIctn69SVwxoprpo26j9nNItzblGI3cwufjcwQY6pgELXseSNCB%2FNadHnUa3Dbmr1nDJ%2BVYNWhxEF4GujpktPGXnPdU4dv4KRPLLlwM2dlohVUc8rMKQVkxaHDJYzi%2F%2FwR7b1EElkn41T%2BIzGwgLuPaM6F6RkWOuAcTXDowQJDAo3y6fCuGepj%2BGGQ0K9B8koCCkMtZ1cCR02AsdQK7gZyBUzz1m1M1x4bL4ZO7d%2B6HlvZAGzlf%2FE3lSWhkEauwwKn7dWt7a&X-Amz-Signature=2a021e45f43f6f31037939076ad4f1030252782ac95504471246bb0a799e990e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
