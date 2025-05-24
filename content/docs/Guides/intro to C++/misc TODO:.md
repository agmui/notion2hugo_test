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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAAMHGM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCXiunTBWiNbfWnxAD3rM2U2KSsfBgSvBJWoL6%2B3XretQIgIy47DkFORHi7GHBnwy0UzBrT5lzFHNMJzgXFRzxTCTkqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZMS84obDgiWFYciSrcA2QO6eWOJpvfX8Yvv9XC66i%2FlkcCqGTcaMwGbinY5xQ6j%2BXJw2d5tuBXzaglxn66Yq9CrMAmtyo0rI1btbZL8qLoeqzQtPRrL5Zwuoe9VkBCxNHJPlodnsQg8bqtITyBMYFpPBDeUn8FEZ9F%2BTKCFJAKoJINfUexJHQFl1kl0SwtToC1lGd%2Fv79xsI76D5YcD7yPu4LLy6Rzl3O9eZ5b2qDShrb%2BNax2M6bPP0T7ej09j3yd1iXN90jlpAGVHQKQ6Z3Sq7z9wMgPuoBP%2BF3IbfucyHpd2ZrxjG9fVYbL9zPN3LLEawXiBWKFoq52QVwvSKmNkQHxOdJYMYgdoJZERA1qZLlRxERG6hchSgkcvkhBr1f8hGCY96xWk%2BN0RugT9wbn2IN%2BZRqw1BgTSXWyPSDHIWgEEjCVq0ZqZh6wU0vyIxSznuwzoqhumq30kvYar%2FPLSLFQuK%2FkQWkMDZpmX56W30f8t5tdWzHoa0ME1%2FSjVIpI6FparIUtUooO3VCc73UpH2MzielQzSbwu3rNBWEhbxIynvijdHqfrvbo%2FAuAllcpkfkUkAL3zXcrcswxnpGCou5cmwPaHVv1uwhhK4aSwiPM%2Bu4zv1i8ZmOC9PUeVSL1fonO05JkhTUKMK2dxcEGOqUB9i3CMF%2Bq%2B5Wy4zck1KgoiWvnVhsGQvOk5Of4omXy72Z%2B%2FyMm53U9tV%2FvEiKfu3l8x41SI7Gx6hDuk1l2Jv6tg69SCH9A8uo3vdWT1AnsAydO5ql31Lv4Trgw5jQdduRE4frsE8BpqcJElwT7lBvdG%2BPGZG4KjU%2FIbP1oVU%2F6ESzoOWbqcCVGtb%2BPQr%2F05VzmTsDMOOjxadlQ%2Fg9TEu4CRrEkOGaI&X-Amz-Signature=a43be6f8024d52202e125897b62b6faddcd6d87ee59792b6df2327963ad959cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAAMHGM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCXiunTBWiNbfWnxAD3rM2U2KSsfBgSvBJWoL6%2B3XretQIgIy47DkFORHi7GHBnwy0UzBrT5lzFHNMJzgXFRzxTCTkqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZMS84obDgiWFYciSrcA2QO6eWOJpvfX8Yvv9XC66i%2FlkcCqGTcaMwGbinY5xQ6j%2BXJw2d5tuBXzaglxn66Yq9CrMAmtyo0rI1btbZL8qLoeqzQtPRrL5Zwuoe9VkBCxNHJPlodnsQg8bqtITyBMYFpPBDeUn8FEZ9F%2BTKCFJAKoJINfUexJHQFl1kl0SwtToC1lGd%2Fv79xsI76D5YcD7yPu4LLy6Rzl3O9eZ5b2qDShrb%2BNax2M6bPP0T7ej09j3yd1iXN90jlpAGVHQKQ6Z3Sq7z9wMgPuoBP%2BF3IbfucyHpd2ZrxjG9fVYbL9zPN3LLEawXiBWKFoq52QVwvSKmNkQHxOdJYMYgdoJZERA1qZLlRxERG6hchSgkcvkhBr1f8hGCY96xWk%2BN0RugT9wbn2IN%2BZRqw1BgTSXWyPSDHIWgEEjCVq0ZqZh6wU0vyIxSznuwzoqhumq30kvYar%2FPLSLFQuK%2FkQWkMDZpmX56W30f8t5tdWzHoa0ME1%2FSjVIpI6FparIUtUooO3VCc73UpH2MzielQzSbwu3rNBWEhbxIynvijdHqfrvbo%2FAuAllcpkfkUkAL3zXcrcswxnpGCou5cmwPaHVv1uwhhK4aSwiPM%2Bu4zv1i8ZmOC9PUeVSL1fonO05JkhTUKMK2dxcEGOqUB9i3CMF%2Bq%2B5Wy4zck1KgoiWvnVhsGQvOk5Of4omXy72Z%2B%2FyMm53U9tV%2FvEiKfu3l8x41SI7Gx6hDuk1l2Jv6tg69SCH9A8uo3vdWT1AnsAydO5ql31Lv4Trgw5jQdduRE4frsE8BpqcJElwT7lBvdG%2BPGZG4KjU%2FIbP1oVU%2F6ESzoOWbqcCVGtb%2BPQr%2F05VzmTsDMOOjxadlQ%2Fg9TEu4CRrEkOGaI&X-Amz-Signature=a89cb153ec0c8c180840ea6063b5bc08272dd820eb395f52f915d0892c7beff7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
