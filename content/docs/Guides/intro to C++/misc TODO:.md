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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5RSTRC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQdLqKARbK2C0zC%2B0JKl%2BanSfg8nNZ13dNj05i0EVgnQIhAPqFy4qedb69m6e3ej%2B6RkuCr0lf1NlfcIl4wDFQRWXLKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA%2BznuCqgE6ibwAKIq3AN4Ku7MzOvF82S3jsoE5IAXp2SDh%2F2b00ZdCbk9tYXmo%2BFzsPkENvcBmraHHmw5UQYkcoA7NfsG%2BxzdXOn2i9jx%2Fe2V7CdgX4d4xygB1KEJiAObgIxQm9WCkCoJK61ykjRZe1EEBETw9cO7uW0lOazKRMMFI7oLQ%2F%2F2hR2P9TJSTM2Yfl6oJs9wFtP%2B6O%2BO%2BXNUnOElt30ige9iS3jt8uaP%2BX87SCOusVQHEJ4j%2B2yS0Gfsc2KjlJczv1mXmtkkI25Gi55EpuBJ8%2FrtZNhYV7CTg1%2FgCy9DQaWwibFxb2nqCdaUK2Z9HeGqBSTmpp%2F2vXyphU10fJ2ieqT0vh607Oz%2BhQW7qrQFwHbHRCvlwoKrsnhtItJly0ev3Tztb%2Bkz7AprQP%2BkGK1IKyR3QKwn%2FtRG5aRvv56SG9AmT1ZYWqql4jnAD7hHP0VMN3QU3NqAByiszdnOIwbdxTEtGbHQqu1AkDRAgPaff5cCYLFMf5s8ntLzmJDhcmfGKo3rXsohwBTtAUbWGrYqiw151Q23krtj%2BDP5RF%2BaHXprGpcUdpKGWvOvuwut%2BYtWN740g19%2FgWkxSIE9IpcAksR21w9Gi3h6XIxstPATn1IHBwTPpdkKgrzSRGccRbl%2B0YKstjC91ffABjqkAYn9p%2FtjnrLVflMwfjvqty234vqaPnfrnUx66OC5IHzDvlFXXo9iokgwA2J3G2IYvjcHcnIgthbwskm73qX6LIBdP4P1qRleO9qd40qdxAi4hwskazf60ow27qW88FFWKkvnK9eQu06jEXllBTK57KW2xOGL%2F%2F%2BsFB0LCnmU58gsoO6juQziHikhq7W0g3%2Fgy1B8sL0%2B8%2BBkyQzqsJa79DmYqfaw&X-Amz-Signature=02389642c57dd839bb0764fce8ef8309e60c1f0d7b97f9febbbd12f79c029645&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5RSTRC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQdLqKARbK2C0zC%2B0JKl%2BanSfg8nNZ13dNj05i0EVgnQIhAPqFy4qedb69m6e3ej%2B6RkuCr0lf1NlfcIl4wDFQRWXLKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA%2BznuCqgE6ibwAKIq3AN4Ku7MzOvF82S3jsoE5IAXp2SDh%2F2b00ZdCbk9tYXmo%2BFzsPkENvcBmraHHmw5UQYkcoA7NfsG%2BxzdXOn2i9jx%2Fe2V7CdgX4d4xygB1KEJiAObgIxQm9WCkCoJK61ykjRZe1EEBETw9cO7uW0lOazKRMMFI7oLQ%2F%2F2hR2P9TJSTM2Yfl6oJs9wFtP%2B6O%2BO%2BXNUnOElt30ige9iS3jt8uaP%2BX87SCOusVQHEJ4j%2B2yS0Gfsc2KjlJczv1mXmtkkI25Gi55EpuBJ8%2FrtZNhYV7CTg1%2FgCy9DQaWwibFxb2nqCdaUK2Z9HeGqBSTmpp%2F2vXyphU10fJ2ieqT0vh607Oz%2BhQW7qrQFwHbHRCvlwoKrsnhtItJly0ev3Tztb%2Bkz7AprQP%2BkGK1IKyR3QKwn%2FtRG5aRvv56SG9AmT1ZYWqql4jnAD7hHP0VMN3QU3NqAByiszdnOIwbdxTEtGbHQqu1AkDRAgPaff5cCYLFMf5s8ntLzmJDhcmfGKo3rXsohwBTtAUbWGrYqiw151Q23krtj%2BDP5RF%2BaHXprGpcUdpKGWvOvuwut%2BYtWN740g19%2FgWkxSIE9IpcAksR21w9Gi3h6XIxstPATn1IHBwTPpdkKgrzSRGccRbl%2B0YKstjC91ffABjqkAYn9p%2FtjnrLVflMwfjvqty234vqaPnfrnUx66OC5IHzDvlFXXo9iokgwA2J3G2IYvjcHcnIgthbwskm73qX6LIBdP4P1qRleO9qd40qdxAi4hwskazf60ow27qW88FFWKkvnK9eQu06jEXllBTK57KW2xOGL%2F%2F%2BsFB0LCnmU58gsoO6juQziHikhq7W0g3%2Fgy1B8sL0%2B8%2BBkyQzqsJa79DmYqfaw&X-Amz-Signature=7f6c1049a00fba06a2d6ab3cb2536811a5dc51b9899e4356cb05df6acb5a0dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
