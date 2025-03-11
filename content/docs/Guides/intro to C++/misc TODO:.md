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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSVPGBIY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC8W398xdzBYX8NMGB2UHIZBEDp%2FV2SPTjKil%2FjdmSBeQIgaS68xdNQ8EI1JbaJ6reUo7wiP%2FKbZp1qucKi8Im84wEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRAqdaeXammGChhuyrcA7REyqK8zvqVgPgmK1vOUWmh7emqho3pyBsGG7WPYBTVCVWdQY9dfw5pE7uFlw%2B8LHiaWPvYNwhCUpqbPfwhJ%2FVpwiiRxukbuq4aCa32Lb1vS3vd5GtPG%2FtJzq2L1g8aJRSqwAm8E6Jc6Avuo7omZeN6tafpgil7i8TrhFc7BWNgd360tcznCyy8MnPGxfeBSZAGNev0Oox%2Bm87EC0YISIJb7sQ6mf5E8okk417Mnovi3nwgk7cMaW%2Bq3HCskpweNQeDX0Kux9dSX5OFGFTix5JK6%2BJgiz1Ki2sOpcy9Sx7MJlcOUclAHtF37gLtszI0pG2Aah8qDNxuGrfROd%2Bc2vhX3JTbTARdyztsMO7bseq1WLP4mKccBXxTkQgEThyh6BxYQ4Q5qhim3sAKhJtHO5KzYvG1RJM0XauevGX%2FjWqWMOODoJy26pdk8n6yan3ra2%2BRno7BYS%2F0dh0bGKuqzIZkPKyNcRa6Apaj5WjsTakyZUy0SYZR6PL7ntbD6QCsBB7SCbPgVqreN9zO5GzL606nXS5jf8RPZREpK5UltbqRbLloWS0H7J7c3XE8u1T0jm2%2FW69%2BFtEe7sRoRYzwo76FqM9BRVQJtO17YKYNpbx6HYnaZxIXRSoYVr4KMJrxv74GOqUB3WZ3Ppb8Oevg9ydPetCHyGpcFiLecytqZ3hdBaVPNPA3kBk%2BpV5yTuKsUEQxHoeso0AngyuQJXQeKN7KkhcJbkwybDaCxt1fO2nX2OF3FyA7WCUUhxmXFx7HL4naBHf667QYsbsZZs9qsmlkvVI5GK6UmF9eQ9da21tYhNDlWOo%2Bp6tdMl3O7frIW38QQ%2F2O%2BOM9YqOk7o3mR5eL8AwwVKjNkS8Z&X-Amz-Signature=960411692f3c1a7ebc50d821f28595c966b409f5cd30076c4476d5850485dfa8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSVPGBIY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC8W398xdzBYX8NMGB2UHIZBEDp%2FV2SPTjKil%2FjdmSBeQIgaS68xdNQ8EI1JbaJ6reUo7wiP%2FKbZp1qucKi8Im84wEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRAqdaeXammGChhuyrcA7REyqK8zvqVgPgmK1vOUWmh7emqho3pyBsGG7WPYBTVCVWdQY9dfw5pE7uFlw%2B8LHiaWPvYNwhCUpqbPfwhJ%2FVpwiiRxukbuq4aCa32Lb1vS3vd5GtPG%2FtJzq2L1g8aJRSqwAm8E6Jc6Avuo7omZeN6tafpgil7i8TrhFc7BWNgd360tcznCyy8MnPGxfeBSZAGNev0Oox%2Bm87EC0YISIJb7sQ6mf5E8okk417Mnovi3nwgk7cMaW%2Bq3HCskpweNQeDX0Kux9dSX5OFGFTix5JK6%2BJgiz1Ki2sOpcy9Sx7MJlcOUclAHtF37gLtszI0pG2Aah8qDNxuGrfROd%2Bc2vhX3JTbTARdyztsMO7bseq1WLP4mKccBXxTkQgEThyh6BxYQ4Q5qhim3sAKhJtHO5KzYvG1RJM0XauevGX%2FjWqWMOODoJy26pdk8n6yan3ra2%2BRno7BYS%2F0dh0bGKuqzIZkPKyNcRa6Apaj5WjsTakyZUy0SYZR6PL7ntbD6QCsBB7SCbPgVqreN9zO5GzL606nXS5jf8RPZREpK5UltbqRbLloWS0H7J7c3XE8u1T0jm2%2FW69%2BFtEe7sRoRYzwo76FqM9BRVQJtO17YKYNpbx6HYnaZxIXRSoYVr4KMJrxv74GOqUB3WZ3Ppb8Oevg9ydPetCHyGpcFiLecytqZ3hdBaVPNPA3kBk%2BpV5yTuKsUEQxHoeso0AngyuQJXQeKN7KkhcJbkwybDaCxt1fO2nX2OF3FyA7WCUUhxmXFx7HL4naBHf667QYsbsZZs9qsmlkvVI5GK6UmF9eQ9da21tYhNDlWOo%2Bp6tdMl3O7frIW38QQ%2F2O%2BOM9YqOk7o3mR5eL8AwwVKjNkS8Z&X-Amz-Signature=7c2e4ca5156d8494ecd5147afa1ea71c88d731d31915fe09742ac203ac13ebd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
