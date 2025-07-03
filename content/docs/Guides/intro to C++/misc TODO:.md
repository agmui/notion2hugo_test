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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQLDIMF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQD2YEpOHknuNjgQgFufO737K5CdSmM6xj2TiYoybrp0UQIgR6UtxDhWMdOG4jlMq7CxPOo00L1YRyOMnfCzcUa5clEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEwnaO3vbjAmLzW%2BJyrcA%2B3DGE4OMJUtfIe5zD8tzlvZzFGCQ4YBcYw9D%2BBksfcVyPrQYTdGz1oX%2FilTzXkKLm06nB8%2BGVQzx%2Fpt%2FRWh5VG%2BVUkRaT93zFKLPpLeikUMCxBCkbooGe1tKdOBYOtXcGsTl5HOXV8Z6D4Jke0%2F%2FGAYbZiXZ5WjxH3qdxTA1SeW8S%2F5SarPaBkPjaIvppxl0WP8ArwtDdt4QCQ4PyAoQ%2F1InMgecM839NimIpbjiJNkWDCg6FbwZQfZ0xqgnaeEyoR7TPafnrUGh%2FpA7E5ZzfiomHQ0imWPuxFdxkd3NrgX%2F%2BELlK8gSEOh0oQKUHOh%2FR9R4qA4DdedFHW4qhn8WKRnxmQwOITmGNtECQIMk7Ik1YtcoiAUqeLL6JB6oD22LXS9NWjyMSjj%2FguYvP%2BfrL5ccb5KVoy7xu8Gs8nJqU6%2FJvCPfoPulaYovXTsPoBtpFeBCblq6%2B048f2OumPN1jxm9CcdDk5QzEoFGURPNTfGDLc6oUPzJkjeQwKM%2FJfvOMCqpMvzujsmjsDYG14pTTogawXDeo3ClzBVB7vKvghnI8yGxja%2F4SVcP6HazHaWstYqcCGXtKxcaIN3Y%2BUlsNfuhkcpnmlCMEl5Ilw%2BhFTQRd8Hm2yujFa4mghkMMC6msMGOqUBOmqRXezA2SAA4mT5axyX2UEnqPDViD%2BxW3WnEPr%2B1wzuKnXxHkSM49TmY4bmS2OiKVHQpDbhZonCJ6JyV5SHwolJfm9yHi81tcmfoNJNq7KEYNCDHYlQVHB5TnP0jSDiHpPpwrUVbGgeUqdChDki6cyenPUq12DpshOpyFilEKQtjkroWbUEjvo1URI56Ugo%2BNqM60BVTTUH6A%2FLAkl89M0up%2F0%2F&X-Amz-Signature=1b43f9a6acf6355af4a60d3beecc648502c8045351b08cee5813c13be8a4956b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQLDIMF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQD2YEpOHknuNjgQgFufO737K5CdSmM6xj2TiYoybrp0UQIgR6UtxDhWMdOG4jlMq7CxPOo00L1YRyOMnfCzcUa5clEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEwnaO3vbjAmLzW%2BJyrcA%2B3DGE4OMJUtfIe5zD8tzlvZzFGCQ4YBcYw9D%2BBksfcVyPrQYTdGz1oX%2FilTzXkKLm06nB8%2BGVQzx%2Fpt%2FRWh5VG%2BVUkRaT93zFKLPpLeikUMCxBCkbooGe1tKdOBYOtXcGsTl5HOXV8Z6D4Jke0%2F%2FGAYbZiXZ5WjxH3qdxTA1SeW8S%2F5SarPaBkPjaIvppxl0WP8ArwtDdt4QCQ4PyAoQ%2F1InMgecM839NimIpbjiJNkWDCg6FbwZQfZ0xqgnaeEyoR7TPafnrUGh%2FpA7E5ZzfiomHQ0imWPuxFdxkd3NrgX%2F%2BELlK8gSEOh0oQKUHOh%2FR9R4qA4DdedFHW4qhn8WKRnxmQwOITmGNtECQIMk7Ik1YtcoiAUqeLL6JB6oD22LXS9NWjyMSjj%2FguYvP%2BfrL5ccb5KVoy7xu8Gs8nJqU6%2FJvCPfoPulaYovXTsPoBtpFeBCblq6%2B048f2OumPN1jxm9CcdDk5QzEoFGURPNTfGDLc6oUPzJkjeQwKM%2FJfvOMCqpMvzujsmjsDYG14pTTogawXDeo3ClzBVB7vKvghnI8yGxja%2F4SVcP6HazHaWstYqcCGXtKxcaIN3Y%2BUlsNfuhkcpnmlCMEl5Ilw%2BhFTQRd8Hm2yujFa4mghkMMC6msMGOqUBOmqRXezA2SAA4mT5axyX2UEnqPDViD%2BxW3WnEPr%2B1wzuKnXxHkSM49TmY4bmS2OiKVHQpDbhZonCJ6JyV5SHwolJfm9yHi81tcmfoNJNq7KEYNCDHYlQVHB5TnP0jSDiHpPpwrUVbGgeUqdChDki6cyenPUq12DpshOpyFilEKQtjkroWbUEjvo1URI56Ugo%2BNqM60BVTTUH6A%2FLAkl89M0up%2F0%2F&X-Amz-Signature=a894fc133b87791eef6c2ec0021b7884787ff51d7d64c18a27738440d21579f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
