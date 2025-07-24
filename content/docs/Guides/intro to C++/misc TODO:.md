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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526KOYJP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCB9grTa8%2FQD2rsxRU7LsEJwLkFp8weXSfaTSVCG%2FxuUQIgEStHuVhHCsAZoZE3u5TjVER2Kco6d8Kxnd7vXudyz0cq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJvfkSNXqzLuXPT7jCrcAzMYrGCQ4YeBLuba%2BOkzpBjp%2BPda5Viyu2Qbr1PZoHJaAsQ0zAt%2Ff5%2F1cu8jU8j5XhwXUn0JeougtViRFRv8fH7AsuWI%2Fkq5YHZdH33eVPJ3MkjQxCeHZQ9MLppPJScwX7E6zZ5gJUPp18wbIY%2F56hXYa%2FekOEcSNkg3aIuwi9nP42Ckb4V%2BXyeHdL7RaB5h%2FelByUrloI4yHZxrkUP0Ugsn0bw67RCBYOe6SnsTNOSh%2BbUM%2FTdi85l7iv9dugeCSTyzg9YUzIegth%2FY9Of0IvNfilyYyHFdOIUhmHFhRQla%2BBE8k%2FrQX8cccYvM6i2D4SY6uBBbwySU2oKrXOXeU1jIVSNEGf6RS1grWm8hZu%2BuDkVDAkAdxCN0gn4aiGbryp%2Bmx06qe5URfxERUfcRfryY9glv5hReyvV%2BOwz9zSM8z%2B21xuLrcP%2F5xbYCw8YNJpBPAq5SBSiTVCyxmO%2BdeKrZIJLnKu%2FhVvdgPHvyBLlkij49EYCd219txoc%2BsB0z0n4iKvoyPsZkIVz%2BBazXY1dcQExqK1MilXvswNBA7gON4jkbgv%2B%2BHEGsE9HKfurv5qw7ZXAeCsQMEQUZKytGQZRJbYGv0u9jO7Q9z4feTb7mHW7IpP4%2F8aiMt5y2MJWxicQGOqUBsxN5EtQWbRZYIMIE0%2FtqEotUt21f1wo7%2FslRnNFIqHrYf1D2pzjpnkQ49sVOKr0yH3eiu%2BqNKxTAnWJ3qfy3kBI%2BdUNtnWHoOoajJvt6aBWJmeyF5UVSOHsB978T3IDMb1hJ3gYUGCStpzXO8DufUF8WitKzmU5eivq76FIN5Ea8BMWNPaKf6fGqPkDvaw8sTHGshpshTkoIBA0IZwSuGnTtONn%2F&X-Amz-Signature=ab9cbc8a7f51f5a76fe48c4beca4a89f6937f6ae6a4376d9f84dd18b15d36efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526KOYJP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCB9grTa8%2FQD2rsxRU7LsEJwLkFp8weXSfaTSVCG%2FxuUQIgEStHuVhHCsAZoZE3u5TjVER2Kco6d8Kxnd7vXudyz0cq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJvfkSNXqzLuXPT7jCrcAzMYrGCQ4YeBLuba%2BOkzpBjp%2BPda5Viyu2Qbr1PZoHJaAsQ0zAt%2Ff5%2F1cu8jU8j5XhwXUn0JeougtViRFRv8fH7AsuWI%2Fkq5YHZdH33eVPJ3MkjQxCeHZQ9MLppPJScwX7E6zZ5gJUPp18wbIY%2F56hXYa%2FekOEcSNkg3aIuwi9nP42Ckb4V%2BXyeHdL7RaB5h%2FelByUrloI4yHZxrkUP0Ugsn0bw67RCBYOe6SnsTNOSh%2BbUM%2FTdi85l7iv9dugeCSTyzg9YUzIegth%2FY9Of0IvNfilyYyHFdOIUhmHFhRQla%2BBE8k%2FrQX8cccYvM6i2D4SY6uBBbwySU2oKrXOXeU1jIVSNEGf6RS1grWm8hZu%2BuDkVDAkAdxCN0gn4aiGbryp%2Bmx06qe5URfxERUfcRfryY9glv5hReyvV%2BOwz9zSM8z%2B21xuLrcP%2F5xbYCw8YNJpBPAq5SBSiTVCyxmO%2BdeKrZIJLnKu%2FhVvdgPHvyBLlkij49EYCd219txoc%2BsB0z0n4iKvoyPsZkIVz%2BBazXY1dcQExqK1MilXvswNBA7gON4jkbgv%2B%2BHEGsE9HKfurv5qw7ZXAeCsQMEQUZKytGQZRJbYGv0u9jO7Q9z4feTb7mHW7IpP4%2F8aiMt5y2MJWxicQGOqUBsxN5EtQWbRZYIMIE0%2FtqEotUt21f1wo7%2FslRnNFIqHrYf1D2pzjpnkQ49sVOKr0yH3eiu%2BqNKxTAnWJ3qfy3kBI%2BdUNtnWHoOoajJvt6aBWJmeyF5UVSOHsB978T3IDMb1hJ3gYUGCStpzXO8DufUF8WitKzmU5eivq76FIN5Ea8BMWNPaKf6fGqPkDvaw8sTHGshpshTkoIBA0IZwSuGnTtONn%2F&X-Amz-Signature=f6dfdda6f4f923d77fac30291993bee51b9700548d4ea2d1310574e26aba93c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
