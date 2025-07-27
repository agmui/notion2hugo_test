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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGIBORN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFrFZdiLk69%2B5SeVr6NtxeJa9fXke7NUgNZZuCG3tDGWAiEA0239QK29QnT2rJCAzg6EFhrqhW5ThpFq7Vk8u5lfVyQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOWVgssAYqFipkxSxircA4N2yq%2B%2BTswxzd8iDPP6i3vK%2FRlhz2tpb6ilfDHIuGEp%2B%2Fi3NiT7H22Xd0z0iTHvHAvGPnJlwXRYDJFWtuuiCgvU%2BG2lR5twfQIvaOc7XusGRHdfCsxNEECQnAHSHkt50iONm2UlB9NV03pwcC7ea4f%2BMDBvnXKctIa9J9IQzeIRN3YLCCHMCDzC%2BzuhencJzbYpIDtTilOXpF1sJ69dW2sYMhlMruuVKe4wBSOL69ijBbQdGJ6o86fscJ3Lv3E2FgLZJrcP2CWXBHRr8dN8A7pQIgisd9AIsMxJCS19iL4a8vlrcPzLMGfpoTNElfPtif%2B1KOhhXPnKxeJmDfxltScjwD%2Bc%2F%2FOaAPps4tCgfzZd3TSXX%2FsPWUa0vS7DyAKWA9byWIg1KX%2B2Dv3uc1I7Iq5BifC2RCtF%2BhAU2E7Ahy8wfqTL291bquPLeYsP6xwrGdOIcityZDCw7mMk54GcNlitBi3Y8S%2FS%2FllcOCjmcpkrkX3ll949221WsIxcR%2B11QbxIU961O4C277b6jkIWgU8cpDgxShHJ4EGCa2Gkup0HkeMnbOEYc%2Fw0gSJBPNIlC5s2lmHhNreXKAIISpOmIKeT5dBA8WnJjWTKqh8NqLn17yY8PwLvjakw9leOMP6jmsQGOqUBUADrU0p5fVcX7W6rgDrqI%2Bn2ntMZ1AHEGOoj8o%2FN6XoFeHqtaCcd2IbnM5V%2BmhNFqlbGQ1XhczCtUqDqvYw3rwV5cH91fNKgQbt3skd%2BLvFhVEj4Sh3F3azaGiwV2h%2FbIj542xMk5HXtkHdQjIZoE88IwHuXzyCRlulVmv3dTgRGNl%2BgGdpk2ydrYJIONX5N2SqkPlZpZvB%2FZMS9bnztikjYZza4&X-Amz-Signature=e27f95bd0a3b12f2fd67aa0c434fb50657c6005936989db8484865d3c2bab82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGIBORN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFrFZdiLk69%2B5SeVr6NtxeJa9fXke7NUgNZZuCG3tDGWAiEA0239QK29QnT2rJCAzg6EFhrqhW5ThpFq7Vk8u5lfVyQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOWVgssAYqFipkxSxircA4N2yq%2B%2BTswxzd8iDPP6i3vK%2FRlhz2tpb6ilfDHIuGEp%2B%2Fi3NiT7H22Xd0z0iTHvHAvGPnJlwXRYDJFWtuuiCgvU%2BG2lR5twfQIvaOc7XusGRHdfCsxNEECQnAHSHkt50iONm2UlB9NV03pwcC7ea4f%2BMDBvnXKctIa9J9IQzeIRN3YLCCHMCDzC%2BzuhencJzbYpIDtTilOXpF1sJ69dW2sYMhlMruuVKe4wBSOL69ijBbQdGJ6o86fscJ3Lv3E2FgLZJrcP2CWXBHRr8dN8A7pQIgisd9AIsMxJCS19iL4a8vlrcPzLMGfpoTNElfPtif%2B1KOhhXPnKxeJmDfxltScjwD%2Bc%2F%2FOaAPps4tCgfzZd3TSXX%2FsPWUa0vS7DyAKWA9byWIg1KX%2B2Dv3uc1I7Iq5BifC2RCtF%2BhAU2E7Ahy8wfqTL291bquPLeYsP6xwrGdOIcityZDCw7mMk54GcNlitBi3Y8S%2FS%2FllcOCjmcpkrkX3ll949221WsIxcR%2B11QbxIU961O4C277b6jkIWgU8cpDgxShHJ4EGCa2Gkup0HkeMnbOEYc%2Fw0gSJBPNIlC5s2lmHhNreXKAIISpOmIKeT5dBA8WnJjWTKqh8NqLn17yY8PwLvjakw9leOMP6jmsQGOqUBUADrU0p5fVcX7W6rgDrqI%2Bn2ntMZ1AHEGOoj8o%2FN6XoFeHqtaCcd2IbnM5V%2BmhNFqlbGQ1XhczCtUqDqvYw3rwV5cH91fNKgQbt3skd%2BLvFhVEj4Sh3F3azaGiwV2h%2FbIj542xMk5HXtkHdQjIZoE88IwHuXzyCRlulVmv3dTgRGNl%2BgGdpk2ydrYJIONX5N2SqkPlZpZvB%2FZMS9bnztikjYZza4&X-Amz-Signature=e02294e9813e0b2e85f19f76e2df370055084e2b8f7b78e5cb961eac3e97a9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
