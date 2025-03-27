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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIRZCQQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDC0xU6oTH0KstOIxukSi70cO5kgrrnFB4Ethp0xx5LxAiEAq36b8DCXd1h8f0C4CK4QsNqhF2bEe3icj0zY2RS0oFQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDNZgM%2FzBZWCIl5J4myrcA%2BY4xtGZYqyMD9LeHGPma6gb0SBtrM%2B16UgDERx8QwC9UF2apF7kv9qIjSw7VpckoT46Oef%2FCXxrpBbN0E%2B5UmIJxqIv1AVfnMBEgyCNFab%2B6EnjSjiwc4Rrc%2BeAEDaOSmT6orSt12HT%2FD3YKDitsxDSJMQwFq42EZrNJ%2FTXytd1ts8inHXtZsr3bCy0SVsJUMWasBqLXrO0m2b9TeAiDMhf08xRdmFQr%2F9QMX79hxFvcYjPPtJ2zyQKIrY%2F0dEQmgTwbqcAVCkg4ruwI9XuKbeLRqWG4NSfI%2FYQYUAnq01mngAimGcdWBCRh%2FzCd%2FizPC59md8fecZTPiTjZgezRH0Oi9XUZPqQfPySHPMNOxyHlG5vvMtRhPfdoc4Jg0oH182M967ugf5WOL0pAmlUrnPkeiXrazNlBrK4ni3wql2JvcGCpJ9TZWoAjf3%2F36trcIw7xlGrhPgz2I8gsAgu4rmJZnfqnk%2FYWEgbQIeuFfyuPLcdIOoxJUgSjEu7WF%2Ba8%2FNlz7DS1je%2B%2Bdfu39%2FD%2BpN0K81OLhBMr7uwRq%2FZ4%2FLYK2HoGkh9JFQKeH7X6hSACkxUPjC6MpCJ2vDuiWobK8nUeQhxcoMwPKBQ9eXM2YJeFSFfPVP3zQWR9zqfMJ6hlL8GOqUBfLxARKC3TIvABqjsNZNl%2BWvLBF3KeYJ3ICtPt5ZFNZHh9Toeq7pEXox9dOgbwmB7B2WbLFrHXStOqKflKGVsvw3so2Q3FaAyxnuvewV8dnJfOaUjaUGTmnwHzf7M6Js5LNtAKW%2FYSO48FtAu9IGzlas32rc3Nj8OjWu1d7MBqAn1gQXUtOx6HdaDMd1RW0MashIeTR9tE23Um2rhPb5xLHp8qjEU&X-Amz-Signature=79085410fa112bbbfb56a7d38f1420299edd702cc4e76bf5f2386a0a5894f9d9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIRZCQQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDC0xU6oTH0KstOIxukSi70cO5kgrrnFB4Ethp0xx5LxAiEAq36b8DCXd1h8f0C4CK4QsNqhF2bEe3icj0zY2RS0oFQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDNZgM%2FzBZWCIl5J4myrcA%2BY4xtGZYqyMD9LeHGPma6gb0SBtrM%2B16UgDERx8QwC9UF2apF7kv9qIjSw7VpckoT46Oef%2FCXxrpBbN0E%2B5UmIJxqIv1AVfnMBEgyCNFab%2B6EnjSjiwc4Rrc%2BeAEDaOSmT6orSt12HT%2FD3YKDitsxDSJMQwFq42EZrNJ%2FTXytd1ts8inHXtZsr3bCy0SVsJUMWasBqLXrO0m2b9TeAiDMhf08xRdmFQr%2F9QMX79hxFvcYjPPtJ2zyQKIrY%2F0dEQmgTwbqcAVCkg4ruwI9XuKbeLRqWG4NSfI%2FYQYUAnq01mngAimGcdWBCRh%2FzCd%2FizPC59md8fecZTPiTjZgezRH0Oi9XUZPqQfPySHPMNOxyHlG5vvMtRhPfdoc4Jg0oH182M967ugf5WOL0pAmlUrnPkeiXrazNlBrK4ni3wql2JvcGCpJ9TZWoAjf3%2F36trcIw7xlGrhPgz2I8gsAgu4rmJZnfqnk%2FYWEgbQIeuFfyuPLcdIOoxJUgSjEu7WF%2Ba8%2FNlz7DS1je%2B%2Bdfu39%2FD%2BpN0K81OLhBMr7uwRq%2FZ4%2FLYK2HoGkh9JFQKeH7X6hSACkxUPjC6MpCJ2vDuiWobK8nUeQhxcoMwPKBQ9eXM2YJeFSFfPVP3zQWR9zqfMJ6hlL8GOqUBfLxARKC3TIvABqjsNZNl%2BWvLBF3KeYJ3ICtPt5ZFNZHh9Toeq7pEXox9dOgbwmB7B2WbLFrHXStOqKflKGVsvw3so2Q3FaAyxnuvewV8dnJfOaUjaUGTmnwHzf7M6Js5LNtAKW%2FYSO48FtAu9IGzlas32rc3Nj8OjWu1d7MBqAn1gQXUtOx6HdaDMd1RW0MashIeTR9tE23Um2rhPb5xLHp8qjEU&X-Amz-Signature=bd4fd116cab8db1a71723079f30e9035ecd5b1a34bd0d3a40c31c9084c04cfd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
