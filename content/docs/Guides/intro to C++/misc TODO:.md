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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSN5L7W%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoN9YwMSMuWkH%2BZQrTQwxoDTkAJKCUKOvSxO1JwCZO5AiBDvIALjD7FAhgCsrh%2Bd39l600sclcGig6iFBr6o9mvoyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS2kHY%2FOLbez3dGucKtwDTmcehkML5fUZ43nx99avrv4oYThMeiS4DY3d%2FX4eeofaUdONm%2BdMKJKlfgdOypvOqpUt2gPEQfMq54n9aspyXhj5ng8UqAQmXjR2WY%2BxMHrA995o%2FUc81KM77vAVI1DZmwoviu0nym8WZ67cP6OxQw%2BSZmGfQXgN3Umb88IRX%2BvN3XCa%2BTAQjaKSnAu476F1%2BoSiZSfV2mSqCHgGQSth9XYn8No%2BG93ECmMOtH3ZCymMibkS7b3iAMlpE%2B4U6vaocfqsNTER0T6%2BGzGT503OmVSKwJuM7Ge7k45ebj8Vll4Y38UBlBfl%2FqnUTOhF6tMZDWjX4c5Ot1UzIDWgzplDzwIG4ACRGSIrMF3Hr6RmwxvwjlG4heHvNxgQRRMvvOlbnu98A2ITZVMPg%2FHXIGqOvCVUayexYcR3GDlVogBTmAD5YwMtRRxOpU69V0rL%2FWuyjJqJZ%2BsPGiN4zAotPqQ0wHCFVd0gDbczHeXbmYiaJNZaXO468rDiXtZ7GGujzH6%2BLEraeyDu3edZLfQrlWGnFLOCtfJZksmYQ%2F08qpZUJdB80oI4FkAMaL7R05Cd3aa6bmi1KDtcIi%2F8MSiM7cvqQqIYEm4fzdh8AblBhnT8W87CHNGbwIKzxxFhoxkwxL79vAY6pgGfrgS4jKLnUush69xsLHOw26586KYMG21gnb0qhu2UixFAbehzdc4G6tNFnHHfXXEw5tJ67vLXhNFdodt%2FtcpAys6%2Fa6tvAeK5DbzVcKDhTudX0K%2B9fxxvuxWWukSTbNWaPUC2%2BdEdpUxFTv17%2FcQvjNQo9awy5nhpx7CtgaNtjxBlUB5l33CKLrprY1kOFzI2NlxWVNeUxBFRqruOybX1BOVqBn8F&X-Amz-Signature=fb766a4d6aab275b5e57931a2f2107b3d766aca2408414e178083b6e9e03a641&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSN5L7W%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoN9YwMSMuWkH%2BZQrTQwxoDTkAJKCUKOvSxO1JwCZO5AiBDvIALjD7FAhgCsrh%2Bd39l600sclcGig6iFBr6o9mvoyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS2kHY%2FOLbez3dGucKtwDTmcehkML5fUZ43nx99avrv4oYThMeiS4DY3d%2FX4eeofaUdONm%2BdMKJKlfgdOypvOqpUt2gPEQfMq54n9aspyXhj5ng8UqAQmXjR2WY%2BxMHrA995o%2FUc81KM77vAVI1DZmwoviu0nym8WZ67cP6OxQw%2BSZmGfQXgN3Umb88IRX%2BvN3XCa%2BTAQjaKSnAu476F1%2BoSiZSfV2mSqCHgGQSth9XYn8No%2BG93ECmMOtH3ZCymMibkS7b3iAMlpE%2B4U6vaocfqsNTER0T6%2BGzGT503OmVSKwJuM7Ge7k45ebj8Vll4Y38UBlBfl%2FqnUTOhF6tMZDWjX4c5Ot1UzIDWgzplDzwIG4ACRGSIrMF3Hr6RmwxvwjlG4heHvNxgQRRMvvOlbnu98A2ITZVMPg%2FHXIGqOvCVUayexYcR3GDlVogBTmAD5YwMtRRxOpU69V0rL%2FWuyjJqJZ%2BsPGiN4zAotPqQ0wHCFVd0gDbczHeXbmYiaJNZaXO468rDiXtZ7GGujzH6%2BLEraeyDu3edZLfQrlWGnFLOCtfJZksmYQ%2F08qpZUJdB80oI4FkAMaL7R05Cd3aa6bmi1KDtcIi%2F8MSiM7cvqQqIYEm4fzdh8AblBhnT8W87CHNGbwIKzxxFhoxkwxL79vAY6pgGfrgS4jKLnUush69xsLHOw26586KYMG21gnb0qhu2UixFAbehzdc4G6tNFnHHfXXEw5tJ67vLXhNFdodt%2FtcpAys6%2Fa6tvAeK5DbzVcKDhTudX0K%2B9fxxvuxWWukSTbNWaPUC2%2BdEdpUxFTv17%2FcQvjNQo9awy5nhpx7CtgaNtjxBlUB5l33CKLrprY1kOFzI2NlxWVNeUxBFRqruOybX1BOVqBn8F&X-Amz-Signature=525ede98b86ef790930c44385da1273c6adcba2b1ee1bce92f4e755fea8d47ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
