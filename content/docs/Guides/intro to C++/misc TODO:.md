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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTG5GSJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIA0V1vCQcLJU4GHPzanwVoIeSYd9sxh8JU0xkl1xVvsBAiEAhdzPIHVct6WyECdOgmyCAze5OBS263WThS97L0oO8Gcq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDL%2FuFvb5d78w0bY4LyrcAz6EpMBLSmHnfYjXzOXNsBp0KRWGdIbnoDQKZBmEbYHlwm2b2Tj0arSAAq7Kpn64OqhYfgOq1Mrv1cilG2w%2FqKrgJfLtIPTQ9ITE3yjrap9w4Uuo8fw0VxT5D8y7%2BWdddlPWDQz7I5D64NLug4Tnt%2FrYU2cUqI9vlIEfZaP2Q6eurP85oa3BubM7oeuAh%2BRKjzdWj50mkYU908lUItFQ2bXburo36L8%2BnrLOpO547lYUB%2BcgrSyQj5dQ%2F%2BZKgUyLGK4CIbHDjQGQ1vtBSdmwI%2F2KQ%2FD2ltliuTk5j%2FCgyzgMxU%2B1saaWMKTmsPU3j7qLuh0D36pp3wzD5AHcEGrwi8Gp%2BT9FrH8aYrW%2Fa5OHev%2FWVyeZAjIFYQiJ%2B%2BdGYjPDEYoULIQgJ%2B4q2%2BYtf6zUcJk9OXHT%2Fivz3FgqRhE4la%2F2BGOVSylM7hZdUIk0vccRgs%2By6fR5pQ8hNAOCyXqrnA1GrbV3ZX0kIBj9OBJfs2RHrKB2u75a25vpRXoSjwOQcIUuVfp9Ke4p4LhVUstLDl6X4bHKVtRqqSqyDRXDpgw2WU9aTo5K9zzWO9o8MDUbQqgQC6yTxHYrH2edEG%2BK7UGF%2FX9pthODNEew9C%2FbfDKZfpPo4%2Fx1WL6uDpE0MLDNx8EGOqUBblkwroEsszTSVAsVOZjIpn%2Bfl7hSqNTizaa2p7G5fxjkZyh1NlA8xavQ7KL5cKJM4jUA4PRuFnJ8DsjgL%2F3qbOIbKeNfq7xzbb100QzgHq069gG6e7RLUX%2B6drKqBKlk6sXpk1Cp5nmF9liNDHTmQb%2FvtEYVZ%2B4fF8a3hylgmqmS1xrrZE5%2BbcMtzIXWWHqQjVjUyrOTiQFze81%2F2%2B%2BZKZmiwXHn&X-Amz-Signature=24aa358d0968fcb0f9a5711747a97faf9c34595d76b0ccbaba27ec728656ff2e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTG5GSJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIA0V1vCQcLJU4GHPzanwVoIeSYd9sxh8JU0xkl1xVvsBAiEAhdzPIHVct6WyECdOgmyCAze5OBS263WThS97L0oO8Gcq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDL%2FuFvb5d78w0bY4LyrcAz6EpMBLSmHnfYjXzOXNsBp0KRWGdIbnoDQKZBmEbYHlwm2b2Tj0arSAAq7Kpn64OqhYfgOq1Mrv1cilG2w%2FqKrgJfLtIPTQ9ITE3yjrap9w4Uuo8fw0VxT5D8y7%2BWdddlPWDQz7I5D64NLug4Tnt%2FrYU2cUqI9vlIEfZaP2Q6eurP85oa3BubM7oeuAh%2BRKjzdWj50mkYU908lUItFQ2bXburo36L8%2BnrLOpO547lYUB%2BcgrSyQj5dQ%2F%2BZKgUyLGK4CIbHDjQGQ1vtBSdmwI%2F2KQ%2FD2ltliuTk5j%2FCgyzgMxU%2B1saaWMKTmsPU3j7qLuh0D36pp3wzD5AHcEGrwi8Gp%2BT9FrH8aYrW%2Fa5OHev%2FWVyeZAjIFYQiJ%2B%2BdGYjPDEYoULIQgJ%2B4q2%2BYtf6zUcJk9OXHT%2Fivz3FgqRhE4la%2F2BGOVSylM7hZdUIk0vccRgs%2By6fR5pQ8hNAOCyXqrnA1GrbV3ZX0kIBj9OBJfs2RHrKB2u75a25vpRXoSjwOQcIUuVfp9Ke4p4LhVUstLDl6X4bHKVtRqqSqyDRXDpgw2WU9aTo5K9zzWO9o8MDUbQqgQC6yTxHYrH2edEG%2BK7UGF%2FX9pthODNEew9C%2FbfDKZfpPo4%2Fx1WL6uDpE0MLDNx8EGOqUBblkwroEsszTSVAsVOZjIpn%2Bfl7hSqNTizaa2p7G5fxjkZyh1NlA8xavQ7KL5cKJM4jUA4PRuFnJ8DsjgL%2F3qbOIbKeNfq7xzbb100QzgHq069gG6e7RLUX%2B6drKqBKlk6sXpk1Cp5nmF9liNDHTmQb%2FvtEYVZ%2B4fF8a3hylgmqmS1xrrZE5%2BbcMtzIXWWHqQjVjUyrOTiQFze81%2F2%2B%2BZKZmiwXHn&X-Amz-Signature=1c8ba4630da5b0f3930c893ca31dab26407bd8235ad10bf011c0f0700ea2765c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
