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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3RJ34Z%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQRtbjLutJ6uA6oXFhri0DLWhy3BdAw9tNuD926zNsLwIgWW0agy1nphl6yzke9DlPwF1XxPHnGJL2RysvDeGUg20qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJZEOIeaHezfPHvcCrcA2gT8Hrq8BstR3BUuBDIDrgnxQQhUQdHRRIKyCyusOb2UdNMmihgjs4op6xDIJrLk74RzgBU7qBjEKhD8ZcPzscrCFFUXOhTpL2rE6PW0pfiFTuCtZc8TgssUhfIp88%2FyaUCozNZHxhhWr9UD07Nb2SzFw73JNd%2BnvHYV4eqylqw4TUEpPKDLBrfjQ6BEdao52mJlmcfaofzukv%2BBas3LQe5RowyoZl7a1dPxJvm6lAeK57o9VPK6BgrEPU65bzxM9DeFolVCHsbpsFEeemOSgMaCfBOZekMVsycZhdDUJMj0AbBft0hSRtzRLidhmpdiEaNPX7FdIa0IpRX66aeZKMixt9fqQWOD3n771O8fK%2FnwYQDZD3HWIYrxRbTwrtOFjKKF%2BcylhGf7tZYNR%2B%2BqL%2FTISVqOs%2BysVPzxH35zC%2F7OCk15hNN45Dm5OiiuxhrEEbJNs5XcnF2z30v9V0dwNtCy5YpXLVWq2OtNxsDVetOUplV2VngX2m88OfQJES%2Bo2jwuaWrbNVN%2BQZqm291s1fN9MRnVXk3xBb5hCpNX5UBJoN9b95r%2BtoYi1nekGjvwS9QpAzxfIUXsTD7bOQuBcCEEcLGUlJgNur6dYtXjfGmGw45ogGP44gwiHJ%2FMPiVnMIGOqUBqNE4H4NrIuNRorC8duVHUmEomXy2nCtAzFs9oClqI%2BN6CBD0b04oT3Kj0TDNvep2i1YZt36a%2BEFogLo0YfRDTBKFA3TaFV%2FTB6e%2FyqYMaRDy5JAeLWYtypDyT083%2BG9nCwZw6%2B89CE733prbtimcrLg6qTL1SVtqEPXkHLu4KWcz9VFUksV5D%2BAAE9ukBqkCP%2BLbYvaxhsplkavjEJF70VhtUhJU&X-Amz-Signature=feb01e5e5c53be53060d13594d057f2a768a6b1b24ea544f0b666ffbffd7b52b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3RJ34Z%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQRtbjLutJ6uA6oXFhri0DLWhy3BdAw9tNuD926zNsLwIgWW0agy1nphl6yzke9DlPwF1XxPHnGJL2RysvDeGUg20qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJZEOIeaHezfPHvcCrcA2gT8Hrq8BstR3BUuBDIDrgnxQQhUQdHRRIKyCyusOb2UdNMmihgjs4op6xDIJrLk74RzgBU7qBjEKhD8ZcPzscrCFFUXOhTpL2rE6PW0pfiFTuCtZc8TgssUhfIp88%2FyaUCozNZHxhhWr9UD07Nb2SzFw73JNd%2BnvHYV4eqylqw4TUEpPKDLBrfjQ6BEdao52mJlmcfaofzukv%2BBas3LQe5RowyoZl7a1dPxJvm6lAeK57o9VPK6BgrEPU65bzxM9DeFolVCHsbpsFEeemOSgMaCfBOZekMVsycZhdDUJMj0AbBft0hSRtzRLidhmpdiEaNPX7FdIa0IpRX66aeZKMixt9fqQWOD3n771O8fK%2FnwYQDZD3HWIYrxRbTwrtOFjKKF%2BcylhGf7tZYNR%2B%2BqL%2FTISVqOs%2BysVPzxH35zC%2F7OCk15hNN45Dm5OiiuxhrEEbJNs5XcnF2z30v9V0dwNtCy5YpXLVWq2OtNxsDVetOUplV2VngX2m88OfQJES%2Bo2jwuaWrbNVN%2BQZqm291s1fN9MRnVXk3xBb5hCpNX5UBJoN9b95r%2BtoYi1nekGjvwS9QpAzxfIUXsTD7bOQuBcCEEcLGUlJgNur6dYtXjfGmGw45ogGP44gwiHJ%2FMPiVnMIGOqUBqNE4H4NrIuNRorC8duVHUmEomXy2nCtAzFs9oClqI%2BN6CBD0b04oT3Kj0TDNvep2i1YZt36a%2BEFogLo0YfRDTBKFA3TaFV%2FTB6e%2FyqYMaRDy5JAeLWYtypDyT083%2BG9nCwZw6%2B89CE733prbtimcrLg6qTL1SVtqEPXkHLu4KWcz9VFUksV5D%2BAAE9ukBqkCP%2BLbYvaxhsplkavjEJF70VhtUhJU&X-Amz-Signature=a98825d9d8f634544918528da9450dce88babbfb6fbb9e05a6c4b7ef4a3f92b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
