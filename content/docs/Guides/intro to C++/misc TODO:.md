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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RLL6QG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIGJ9TH2DUsScHMSFtx%2BeoMGdz5YMq6XWoKygq12LenwIhAJsf0A84HZYNfkRe0ZkJZwZQKjKlft%2FAY9WK%2FDoaCKQtKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb%2FypWJm89WimoryYq3ANAY5S73Ojr8epD3LSAd1zAMMbrQQRuZ1rgqDz8nqMfym%2F%2BdF8xNcaoMR5Kdvs5XJTwKFAFML1bSwOCobrXo7Fxm059NK2Vodet9c2cCON7DJ7%2FIgMpS%2BX8j7BWezy3lalvyO0pEz2zryIcXYySvChMtpfTo7ekxE%2B6GIeSBYQqQQMNeQLmtUynwAVbJemump7JsKfvGhXSmtuikv3bht7qhIp8TTGVmPTSuB8aZCcdxuGcJ7FyWbPnVDPcDn%2F048AIKEV80WWhvYqx6B47iuDm8S3tysQI4oNRZbzOl9cMsgkkmaIHIK7YYnQbWJiw2SWm8%2F3V21YTdOuss0zfTLNjcMKi1sEfWNeDX6cUEi8gR5ds92AGzYIpYZyP1BLpjM3b%2BEcdNqfBHn4n3D8Ix5DypySdJQs83Gz089la04YBNGy7airTwdid1hP9muqHyzyYblmld%2BhP2PgAsNOuMT2Z3eXCeQYSOYUDEj%2FaNne0TrlS8nbvQUpBKU3YFsmAqKDoQ4c%2BIIWlzdEOaQwSwsffsBLqN%2B7gJpSiiVxbsrV3h1%2BiDOmH%2Bpzn%2B6tqd%2BIdwot6RW4Elya40tQMiPZwudSG0swx7DVPUyyrA90OJKJSxYba0FLDKcat8x3%2FaTC86N%2B9BjqkAchPnpVdRRhtZlFPIF11tTi%2BCxh%2BkJqiN4xcazL0vmLYYgm0Ot4MJmQ%2Bai3%2BFS%2F4YR73qlp5oTI1lNbvnzG528sYy6c7thTS2eX1gg5DAV6D5E80hBh5yMb7%2FyfWb21a8N0cZ9l%2B3j%2FtU2RH86I7p7wmbwoIT%2F6MPh73OdAPYBn2L80If1lqiACqrkEIbfLOEC2mtgyHsLKXB2NsQwbpD2iCj%2BYe&X-Amz-Signature=e86e20f021a6d264032f44e51d0c31bd318f6dbddf7818201948c50431f96b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RLL6QG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIGJ9TH2DUsScHMSFtx%2BeoMGdz5YMq6XWoKygq12LenwIhAJsf0A84HZYNfkRe0ZkJZwZQKjKlft%2FAY9WK%2FDoaCKQtKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb%2FypWJm89WimoryYq3ANAY5S73Ojr8epD3LSAd1zAMMbrQQRuZ1rgqDz8nqMfym%2F%2BdF8xNcaoMR5Kdvs5XJTwKFAFML1bSwOCobrXo7Fxm059NK2Vodet9c2cCON7DJ7%2FIgMpS%2BX8j7BWezy3lalvyO0pEz2zryIcXYySvChMtpfTo7ekxE%2B6GIeSBYQqQQMNeQLmtUynwAVbJemump7JsKfvGhXSmtuikv3bht7qhIp8TTGVmPTSuB8aZCcdxuGcJ7FyWbPnVDPcDn%2F048AIKEV80WWhvYqx6B47iuDm8S3tysQI4oNRZbzOl9cMsgkkmaIHIK7YYnQbWJiw2SWm8%2F3V21YTdOuss0zfTLNjcMKi1sEfWNeDX6cUEi8gR5ds92AGzYIpYZyP1BLpjM3b%2BEcdNqfBHn4n3D8Ix5DypySdJQs83Gz089la04YBNGy7airTwdid1hP9muqHyzyYblmld%2BhP2PgAsNOuMT2Z3eXCeQYSOYUDEj%2FaNne0TrlS8nbvQUpBKU3YFsmAqKDoQ4c%2BIIWlzdEOaQwSwsffsBLqN%2B7gJpSiiVxbsrV3h1%2BiDOmH%2Bpzn%2B6tqd%2BIdwot6RW4Elya40tQMiPZwudSG0swx7DVPUyyrA90OJKJSxYba0FLDKcat8x3%2FaTC86N%2B9BjqkAchPnpVdRRhtZlFPIF11tTi%2BCxh%2BkJqiN4xcazL0vmLYYgm0Ot4MJmQ%2Bai3%2BFS%2F4YR73qlp5oTI1lNbvnzG528sYy6c7thTS2eX1gg5DAV6D5E80hBh5yMb7%2FyfWb21a8N0cZ9l%2B3j%2FtU2RH86I7p7wmbwoIT%2F6MPh73OdAPYBn2L80If1lqiACqrkEIbfLOEC2mtgyHsLKXB2NsQwbpD2iCj%2BYe&X-Amz-Signature=e857b6ada8b152cb3a5b633cf582d81cf7916c21c8e5b68600e4490dba60994e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
