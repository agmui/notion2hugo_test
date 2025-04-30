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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBX5OTEB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICbjCcJR5w7WYdoPgLZ417pZacSvNtV3sCtQpPoGBiy3AiA8ruBSBhM7dvICUwYJZqa%2BTZryXp8mc4ojwaqypagyoiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGysVYbWqVENZ8bTcKtwDPGzRF8NDzrAguh6vMJjJVex3RhsUJniGSpo%2B73vR69HF7cgRlbm%2BeSkOM76CqDBHOTvuHWACcSyg4pHgGgYBKyH%2FQzvlUTNg5zKKCkpIelVZ6hItMIeEJy66pCZjUszP5OGSCpAw%2B1cnJsonKjZX6BgnqDsm2YWCSo95XLxoboAkK%2B2tWjB7AoIS6HbZZwTTBH%2BSDThIxL0EuGJcVu3nE6PF6eg0saY3sHuzubwSFQiEyissSj2acAHXBdMyXceFn9AUrjcUaOzgqogrNVSpondhqJ5Zdc6Nn6QehOLv%2BtLaf3CGPM0lhQI8Ks88WVioUsAw6fBujNeCKrZhjyoysG1S%2BESScqvUT2iaj0%2BXMOn4j3GGdufJBvDps9mgI%2FAe8XkPInNTJWnkat3bCP%2Fkxdpu95H6oMWfNTdIGGGEQtlIN%2Fd8tISSmpXOkKcfjUiPocOMNSr0LGEIUQg4QshxlTvEvpxorFRPs%2BDO3fnJK9G%2FxESVavhtIKDzySbAJF8xtYtc30ebTB8JMsRuyWVjt4xGjf4zHb%2BMM%2BUCckG2lion%2FoaAzbCZIKAOg85z8yUJW0p09FN%2Fj6c2B1oAcfIANe8OlIOCRFtIB2%2FppA5hzXEjW6Sc36qvvIrjuVsw0OrHwAY6pgGrc1eVFNQ0yKQODHSYijiZYhnv6ELoYEmAeCJLKNZzIsxnRPVO3PqLFuXToCTxthxoN%2BxIj5vBQ2Ssj%2Fi50ujAM9zS%2FZ3Eht%2BdtzomaV%2F8KbQwJ%2BHS7rmn0VMBoS7cyrwEESSkssyzJLVavGpa%2FEf3tUzfWVhZ%2FUKPe8SKnAeS7We7T8019xDqyluapKYnTJzttwV5fqCt%2F3kBylRrnSgQwIIHhCWR&X-Amz-Signature=99e1acd5ea1f5d232d6e04c28a80f879ca0a42abdedad61048f348b7b455baac&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBX5OTEB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICbjCcJR5w7WYdoPgLZ417pZacSvNtV3sCtQpPoGBiy3AiA8ruBSBhM7dvICUwYJZqa%2BTZryXp8mc4ojwaqypagyoiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGysVYbWqVENZ8bTcKtwDPGzRF8NDzrAguh6vMJjJVex3RhsUJniGSpo%2B73vR69HF7cgRlbm%2BeSkOM76CqDBHOTvuHWACcSyg4pHgGgYBKyH%2FQzvlUTNg5zKKCkpIelVZ6hItMIeEJy66pCZjUszP5OGSCpAw%2B1cnJsonKjZX6BgnqDsm2YWCSo95XLxoboAkK%2B2tWjB7AoIS6HbZZwTTBH%2BSDThIxL0EuGJcVu3nE6PF6eg0saY3sHuzubwSFQiEyissSj2acAHXBdMyXceFn9AUrjcUaOzgqogrNVSpondhqJ5Zdc6Nn6QehOLv%2BtLaf3CGPM0lhQI8Ks88WVioUsAw6fBujNeCKrZhjyoysG1S%2BESScqvUT2iaj0%2BXMOn4j3GGdufJBvDps9mgI%2FAe8XkPInNTJWnkat3bCP%2Fkxdpu95H6oMWfNTdIGGGEQtlIN%2Fd8tISSmpXOkKcfjUiPocOMNSr0LGEIUQg4QshxlTvEvpxorFRPs%2BDO3fnJK9G%2FxESVavhtIKDzySbAJF8xtYtc30ebTB8JMsRuyWVjt4xGjf4zHb%2BMM%2BUCckG2lion%2FoaAzbCZIKAOg85z8yUJW0p09FN%2Fj6c2B1oAcfIANe8OlIOCRFtIB2%2FppA5hzXEjW6Sc36qvvIrjuVsw0OrHwAY6pgGrc1eVFNQ0yKQODHSYijiZYhnv6ELoYEmAeCJLKNZzIsxnRPVO3PqLFuXToCTxthxoN%2BxIj5vBQ2Ssj%2Fi50ujAM9zS%2FZ3Eht%2BdtzomaV%2F8KbQwJ%2BHS7rmn0VMBoS7cyrwEESSkssyzJLVavGpa%2FEf3tUzfWVhZ%2FUKPe8SKnAeS7We7T8019xDqyluapKYnTJzttwV5fqCt%2F3kBylRrnSgQwIIHhCWR&X-Amz-Signature=cee41e4e39bac62704f41434088f180ff83a4ed485894fa4774525adbd44b234&X-Amz-SignedHeaders=host&x-id=GetObject)

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
