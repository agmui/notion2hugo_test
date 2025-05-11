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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2ZMWO7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICVWM4v4ftsjnRaubLBtYJjQtHFuyMOsqVeIeD1RYW8vAiBqM5i8UNvlnG7xTYBA2sf9A0aZ4avEds%2FPv3c3As9O%2ByqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7NoM75yklAdY0jDwKtwDjvSRjU2BKNOz9IkZaXR5%2BoXzYJUhi9rZ6cuCxmoGQE9x69B8cHjjRvMHab2oipGOs9hqvyoBswRf9GeAefN%2F00ubamGA7U4s%2FvD59GkGTdqgTgX4fC13PfMKJzPS1BQEqSluUOqgscVd5iW2gE6dm3z31qZiZ8Q5O1Le2tOdqsmwo0jMGJOfNJv7ujt2R3Znh0FHH9QHO3aoMlUTkZ3CNeC5R3srdVFHwRcEVa9U03MVA9hqYjECe2qDNZCzb2eOfsyT1BgGsCEpY30CtyPJ%2FmWxnm1CKaQMDCiYIVvtImbjrP66XDwtNkE18RrnekCzmXZBAb5JmLbS6oC0eHSlGFNjpHQ5P99h%2FjlQvBwiHDSb7HXwYYxGFaF9eL6bMVRSM7X%2FqMSuNfeqG09FJkuUgzfp0UXvi%2BEhK%2FEhzFR1ncTJaxaesnrwLYFGxFRDX7F2XO272k8UHduATiluKOgGy3r%2FEdumw0qMqKTEd9VSOxhlAxUXrGccZE92OFn46LBgMvQG1j%2FDC%2BBsPDnL%2B1BrAj6aOjEkUwz2frTX4EmZb3axuvA2RVnW8wqo0f4NPRShxx%2B5G6nOsxS91uTuQe4JdhpBKUla%2BqGCgrkqD6h1sAYOm%2FPphl6HztL4vjYwlp2CwQY6pgEtID8v0lpUFaue7kRh9v44Qo9r8tfyuvyFzqJs915%2F%2BP8MNjF7D0%2F7zSU8bXxW85FggGe%2B4stBuJ2emfZYVLFG0G9kN0mTVavWVNasvEAc%2BHPwmqRRB3XvCDy07MqTo49mdeu0Cmv45XXBW9zQsjgPNsWpYwhP1CzCy4Sp9xeHYvKxt%2FO9M0Oiu1qLsrlacO3PdhYl2perAcoLERHXtCnIZJ0Xp2Yq&X-Amz-Signature=9cc60cd856e874d22b6659f705ce2e62950546ee22dca8bdb0986cc6807f4d35&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2ZMWO7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICVWM4v4ftsjnRaubLBtYJjQtHFuyMOsqVeIeD1RYW8vAiBqM5i8UNvlnG7xTYBA2sf9A0aZ4avEds%2FPv3c3As9O%2ByqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7NoM75yklAdY0jDwKtwDjvSRjU2BKNOz9IkZaXR5%2BoXzYJUhi9rZ6cuCxmoGQE9x69B8cHjjRvMHab2oipGOs9hqvyoBswRf9GeAefN%2F00ubamGA7U4s%2FvD59GkGTdqgTgX4fC13PfMKJzPS1BQEqSluUOqgscVd5iW2gE6dm3z31qZiZ8Q5O1Le2tOdqsmwo0jMGJOfNJv7ujt2R3Znh0FHH9QHO3aoMlUTkZ3CNeC5R3srdVFHwRcEVa9U03MVA9hqYjECe2qDNZCzb2eOfsyT1BgGsCEpY30CtyPJ%2FmWxnm1CKaQMDCiYIVvtImbjrP66XDwtNkE18RrnekCzmXZBAb5JmLbS6oC0eHSlGFNjpHQ5P99h%2FjlQvBwiHDSb7HXwYYxGFaF9eL6bMVRSM7X%2FqMSuNfeqG09FJkuUgzfp0UXvi%2BEhK%2FEhzFR1ncTJaxaesnrwLYFGxFRDX7F2XO272k8UHduATiluKOgGy3r%2FEdumw0qMqKTEd9VSOxhlAxUXrGccZE92OFn46LBgMvQG1j%2FDC%2BBsPDnL%2B1BrAj6aOjEkUwz2frTX4EmZb3axuvA2RVnW8wqo0f4NPRShxx%2B5G6nOsxS91uTuQe4JdhpBKUla%2BqGCgrkqD6h1sAYOm%2FPphl6HztL4vjYwlp2CwQY6pgEtID8v0lpUFaue7kRh9v44Qo9r8tfyuvyFzqJs915%2F%2BP8MNjF7D0%2F7zSU8bXxW85FggGe%2B4stBuJ2emfZYVLFG0G9kN0mTVavWVNasvEAc%2BHPwmqRRB3XvCDy07MqTo49mdeu0Cmv45XXBW9zQsjgPNsWpYwhP1CzCy4Sp9xeHYvKxt%2FO9M0Oiu1qLsrlacO3PdhYl2perAcoLERHXtCnIZJ0Xp2Yq&X-Amz-Signature=780f19a9a2152b93347c4f16ad8694a153ec68e34c0f60660fa48a74927d790a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
