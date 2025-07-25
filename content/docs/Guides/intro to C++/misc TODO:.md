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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5I3IFS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFAj%2FZypzipXsiJmQeSTpM4x271247iWn%2Bd1Wj26lTiJAiBsW8tZKXpFefJR51vlC5S31dr67npfaPELmAP%2BfkTanCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMTHJvwenFZKhP6pv6KtwD40aVX%2FudKviaQHDF3yti5dR3N3p1oddR6HnXTaRaldSEu5nuMuzjuydcHzPBwwptZOPKBDDpzhFh%2B5CWsJtTZ98G1d%2F39Lro92svN10v845A9cuKCCnuho1vIvIRlfgx9jryr6drqGz3xG670bxJj6D2z38CgC%2FB63oIAF4%2BjgDv9MjcG2iYUvUYxfeyX0T9aCN1g%2FcP31dCfbmZ9ZkbEXZmtIBuChpEd5dPQkABsR7OPzID2QXETg3CRMRl9c7HHV3kyuta%2FcEWVw2%2F9l6Mrp2M38bPy8r0%2FBI13JvEe12GCyr3LKlofv5KHg8%2Bv9FBPtfhCAH4k4W8WncCIJDz3kBCYUKxHfQF1GAZepZepDG1TEXrU8uVK9%2FvInskPHKhAPfOROW9FgHZSeNPeNu8LTyN9450Xl1sNWkmyeWKp5%2F763J78jWDh939w3LH468UXDG32%2Bew0k2bWktELlI8V%2FVx6c7SaRBA9eOjH1KvRrM8pVDT2yNGbF9GEi%2Fqg%2BNVFUUuNeWNy1A%2FMgYllhFzQ7Ia%2FtoZ6kForS%2BOyTA0lLyi01W2z68vZEUMxt1lRoTjfyjpiDOZfmWOtipxaYpSjbJUR3zyzNMOhC3tKOZd48JM3evjjl1Oz08ImFwwhLyOxAY6pgGZYmn7N6Er%2F49%2FChwMok2BBdTFDgcRCVkJHJf%2FHwnfgtCh7LutRPn%2B04q9%2BVPVhqymTbGLeGsM5LRYb7Etajr%2Bkv84RxiiNFPmTGnJrZRwY%2Fce7KNypmIfC9hZY%2FiJpE1BF4Kfc82%2F2HCCpWRMNPWwR4xHJ3nlkgp5d90%2FbICEO%2Fx0uxuZ4xq1p353p1jmyJuLt%2Fs6hQjckf08vxNM%2F0YlvUGokTtu&X-Amz-Signature=c3781bb446259a6422154833f0a98a403582d3c7c83d2d908ee98727a7b1d266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5I3IFS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFAj%2FZypzipXsiJmQeSTpM4x271247iWn%2Bd1Wj26lTiJAiBsW8tZKXpFefJR51vlC5S31dr67npfaPELmAP%2BfkTanCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMTHJvwenFZKhP6pv6KtwD40aVX%2FudKviaQHDF3yti5dR3N3p1oddR6HnXTaRaldSEu5nuMuzjuydcHzPBwwptZOPKBDDpzhFh%2B5CWsJtTZ98G1d%2F39Lro92svN10v845A9cuKCCnuho1vIvIRlfgx9jryr6drqGz3xG670bxJj6D2z38CgC%2FB63oIAF4%2BjgDv9MjcG2iYUvUYxfeyX0T9aCN1g%2FcP31dCfbmZ9ZkbEXZmtIBuChpEd5dPQkABsR7OPzID2QXETg3CRMRl9c7HHV3kyuta%2FcEWVw2%2F9l6Mrp2M38bPy8r0%2FBI13JvEe12GCyr3LKlofv5KHg8%2Bv9FBPtfhCAH4k4W8WncCIJDz3kBCYUKxHfQF1GAZepZepDG1TEXrU8uVK9%2FvInskPHKhAPfOROW9FgHZSeNPeNu8LTyN9450Xl1sNWkmyeWKp5%2F763J78jWDh939w3LH468UXDG32%2Bew0k2bWktELlI8V%2FVx6c7SaRBA9eOjH1KvRrM8pVDT2yNGbF9GEi%2Fqg%2BNVFUUuNeWNy1A%2FMgYllhFzQ7Ia%2FtoZ6kForS%2BOyTA0lLyi01W2z68vZEUMxt1lRoTjfyjpiDOZfmWOtipxaYpSjbJUR3zyzNMOhC3tKOZd48JM3evjjl1Oz08ImFwwhLyOxAY6pgGZYmn7N6Er%2F49%2FChwMok2BBdTFDgcRCVkJHJf%2FHwnfgtCh7LutRPn%2B04q9%2BVPVhqymTbGLeGsM5LRYb7Etajr%2Bkv84RxiiNFPmTGnJrZRwY%2Fce7KNypmIfC9hZY%2FiJpE1BF4Kfc82%2F2HCCpWRMNPWwR4xHJ3nlkgp5d90%2FbICEO%2Fx0uxuZ4xq1p353p1jmyJuLt%2Fs6hQjckf08vxNM%2F0YlvUGokTtu&X-Amz-Signature=77fc5c8de2fe87d6545e863a9356763e8fbc76c2234eb53f2eaaf1e8ac0011c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
