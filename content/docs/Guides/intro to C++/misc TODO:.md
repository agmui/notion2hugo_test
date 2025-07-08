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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OFPZWC%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmYFBUmo5LDAu8Ha4OCNDFq%2Bat%2F9QIYNpqVmtAzzvOZAiEA3UG%2BIPMNQOOml6hucoTtqNrwX4DrQHfiUvFfqlRkotwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFG0PQyxC7U6ddjYeircA%2FxqVPHojH7N%2FDB45mZlCDFnQJiKAf74hUq8TmCGwlkeBfIAwo0sMHzAI7REh9m3vD2evImDWPiTPHUR09baCC9ZiJ3ZxHKzDIEHIP7LVN3w6XRryGuAfJbPusgdzMeCZ%2Bvm6GuJcHslFAICrWWqymN5SJ2UCYPlRvDnoHYrvJ71a5Om63Y093vLwl2ljVq7Zalx7tzfmwcfM%2FZKqvORQ3%2FhsmXrFZf2B7lvI4%2FLqtwmHwn%2FErpMcGCTFN1SCGGs844N23dxaaV2snJbpc%2BtC%2Fs2HhCqj%2BPBhTwtUoAfCNZEtIvxxZc4zrQSXEvoKArWrbEm%2BmstTvXXSaLuVL6WsdlCI%2FS1kt2qYMGv9LcmqTB6HwnCFMgH4IebFUBtFEnGHaosa7R%2F36rDM7a6W8lIITo7fRK19YqbaSONnph1Mdb4nN4OWRDOYubyChg7bePLF8Xg1msK1%2BEx8D4FUfWOUMpF2B292VYnPq0FmvpplPbgOcNghhV5bdfMjYTQ0LnidCMgoSoP9LqrhRZRjzzuWUz5C%2BeRXZNb38JwNeyWxc9RfEO8u2ZKLJMyt0hkLfbhwAgZVlDuJMjhjOIY%2F2YnWGFYYMuBBLyTki4GpQL2RT5EEEhhJc4rSHyCZ3f4MNqztsMGOqUBqoKY16VAcAr0AQ07O%2FRWN93%2BI9YKkAM%2BOzpFBMLUxe6TggMyQT8NCgzlue8YjXm5TROm3N2VCSiEbbBbF01perWg1xwrHe3MKN93gdM9Gc2wvTxZoqSV5wo10GTY47HyBA6zNfTdZ8GRHOITbdNEaGcMgwEoqwj0aSjjYP0Uk9q28y1oE07oODt9IF3GdcYpZ8qVoPwwqK7T4jXD8VgLN2TaIWPF&X-Amz-Signature=2a9a78d682fb07b03a009a364e8a09ac62cd18c0a9cdc53ab58db9914010e140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OFPZWC%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmYFBUmo5LDAu8Ha4OCNDFq%2Bat%2F9QIYNpqVmtAzzvOZAiEA3UG%2BIPMNQOOml6hucoTtqNrwX4DrQHfiUvFfqlRkotwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFG0PQyxC7U6ddjYeircA%2FxqVPHojH7N%2FDB45mZlCDFnQJiKAf74hUq8TmCGwlkeBfIAwo0sMHzAI7REh9m3vD2evImDWPiTPHUR09baCC9ZiJ3ZxHKzDIEHIP7LVN3w6XRryGuAfJbPusgdzMeCZ%2Bvm6GuJcHslFAICrWWqymN5SJ2UCYPlRvDnoHYrvJ71a5Om63Y093vLwl2ljVq7Zalx7tzfmwcfM%2FZKqvORQ3%2FhsmXrFZf2B7lvI4%2FLqtwmHwn%2FErpMcGCTFN1SCGGs844N23dxaaV2snJbpc%2BtC%2Fs2HhCqj%2BPBhTwtUoAfCNZEtIvxxZc4zrQSXEvoKArWrbEm%2BmstTvXXSaLuVL6WsdlCI%2FS1kt2qYMGv9LcmqTB6HwnCFMgH4IebFUBtFEnGHaosa7R%2F36rDM7a6W8lIITo7fRK19YqbaSONnph1Mdb4nN4OWRDOYubyChg7bePLF8Xg1msK1%2BEx8D4FUfWOUMpF2B292VYnPq0FmvpplPbgOcNghhV5bdfMjYTQ0LnidCMgoSoP9LqrhRZRjzzuWUz5C%2BeRXZNb38JwNeyWxc9RfEO8u2ZKLJMyt0hkLfbhwAgZVlDuJMjhjOIY%2F2YnWGFYYMuBBLyTki4GpQL2RT5EEEhhJc4rSHyCZ3f4MNqztsMGOqUBqoKY16VAcAr0AQ07O%2FRWN93%2BI9YKkAM%2BOzpFBMLUxe6TggMyQT8NCgzlue8YjXm5TROm3N2VCSiEbbBbF01perWg1xwrHe3MKN93gdM9Gc2wvTxZoqSV5wo10GTY47HyBA6zNfTdZ8GRHOITbdNEaGcMgwEoqwj0aSjjYP0Uk9q28y1oE07oODt9IF3GdcYpZ8qVoPwwqK7T4jXD8VgLN2TaIWPF&X-Amz-Signature=80a42384b5b671648e527c092f3bdafcf3515293c2cc9020733fad743d1f135e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
