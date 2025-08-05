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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LI42YOU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQC7Nd6HxK9vxUwdE19q8BEZKoBu%2F56sEORF%2BC73pr4BnQIgMUM1zubcTjJFncOWqLBKI3L%2BojgZlDBTp7u8mfm%2F9mgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAVy1qCbF4fHsHJ6NCrcA5znR0ariOOdPeFSPPVgdbaWeF5FaHP93AWhFs0kXElJwupkLsl3S3vp16BKjQof8UBugOxtHYwKKIf5%2FFaqpeeCuzKPsruMT3gVwV0CGwyxZwiR548gkIRSYsIZYAMj09vADkWhSAQUQPOkhJmq0L9ECAB6MBc0o%2Bv0Pt1FjVVauzksJinI80K1z2T6VwBZkqsWJijlZKe15fZ28BXJczT5u9SeY%2BbvZ5Do5KwwGqxhqudV9lqkZaqXTERkgpQl1AtuL1oIvulw9k5cebU17jSgiLd37nZE6Dq%2Bl7hpbFgI7FuxF93cMnVxgHXUFpweplR9xsgCUBsuKNqEBOgqgeOab0qTVsrmMue%2FX5OnpXXmQs%2FTHYFP6Bk2%2FXM5N0LSJ6dipOmGAJjviIIyTUGWAAkI7XoKU3%2BQN%2F5rMtuHCeDXmn3sQ1ryzfr6J%2F8VqXaKdAkEy378vCXpdMwOsN7zN181Id%2F2NGQW7GPgk6a2NufQVpZKb6kZGanoO1TdmIUBbyqElBaz1%2BJW59NTdKvXtZWW6YSvhAcc1TwvJCt4MZLTzWW2qlQjZecXBbgFTLs4aTW1luxFKJqMcTbEEc1XsnZtwAcMiQ7Py7Ipc438yKdUqPMFXjJnNr1gXYLvMOaMxsQGOqUBR7JeAhWltBbFp1OQdDAwWE2kg4KAEP1wzTQswKrxEgBUo%2FINka4Y%2BK3C3%2B%2BegS83nLnELiw95iWuFtKKnpNfq0SYy%2FI5J6sLBKhtXh%2BXe%2BnDtXCsrTxy2hgOOiBYflN%2F%2BH0vaDM%2B4sTsyUFf4WY%2BQtcbYw0yc6iOKZVveW0PILy6%2B3oVSqbWkRCZz9GIsMH95kP0b9NR7X87NAERAIjeaQkL1Ypg&X-Amz-Signature=a9b1045831b5c368c086443b5d701c6626f06f768a18a32230171070a464d181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LI42YOU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQC7Nd6HxK9vxUwdE19q8BEZKoBu%2F56sEORF%2BC73pr4BnQIgMUM1zubcTjJFncOWqLBKI3L%2BojgZlDBTp7u8mfm%2F9mgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAVy1qCbF4fHsHJ6NCrcA5znR0ariOOdPeFSPPVgdbaWeF5FaHP93AWhFs0kXElJwupkLsl3S3vp16BKjQof8UBugOxtHYwKKIf5%2FFaqpeeCuzKPsruMT3gVwV0CGwyxZwiR548gkIRSYsIZYAMj09vADkWhSAQUQPOkhJmq0L9ECAB6MBc0o%2Bv0Pt1FjVVauzksJinI80K1z2T6VwBZkqsWJijlZKe15fZ28BXJczT5u9SeY%2BbvZ5Do5KwwGqxhqudV9lqkZaqXTERkgpQl1AtuL1oIvulw9k5cebU17jSgiLd37nZE6Dq%2Bl7hpbFgI7FuxF93cMnVxgHXUFpweplR9xsgCUBsuKNqEBOgqgeOab0qTVsrmMue%2FX5OnpXXmQs%2FTHYFP6Bk2%2FXM5N0LSJ6dipOmGAJjviIIyTUGWAAkI7XoKU3%2BQN%2F5rMtuHCeDXmn3sQ1ryzfr6J%2F8VqXaKdAkEy378vCXpdMwOsN7zN181Id%2F2NGQW7GPgk6a2NufQVpZKb6kZGanoO1TdmIUBbyqElBaz1%2BJW59NTdKvXtZWW6YSvhAcc1TwvJCt4MZLTzWW2qlQjZecXBbgFTLs4aTW1luxFKJqMcTbEEc1XsnZtwAcMiQ7Py7Ipc438yKdUqPMFXjJnNr1gXYLvMOaMxsQGOqUBR7JeAhWltBbFp1OQdDAwWE2kg4KAEP1wzTQswKrxEgBUo%2FINka4Y%2BK3C3%2B%2BegS83nLnELiw95iWuFtKKnpNfq0SYy%2FI5J6sLBKhtXh%2BXe%2BnDtXCsrTxy2hgOOiBYflN%2F%2BH0vaDM%2B4sTsyUFf4WY%2BQtcbYw0yc6iOKZVveW0PILy6%2B3oVSqbWkRCZz9GIsMH95kP0b9NR7X87NAERAIjeaQkL1Ypg&X-Amz-Signature=2c6c9d72ee6257c67fdfbe757825ec8c61b2c7b1de37fd9890413c67e4c64ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
