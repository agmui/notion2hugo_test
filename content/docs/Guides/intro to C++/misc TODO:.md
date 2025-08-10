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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNMUPKK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgwpD7K4dqsO90NUSSvWsAE%2F6bVyg%2F7ODvAg4aHHLLWAiEA5xhducX%2BRyQVPK6abFbZCZkrSWgPX58tWSyt7lfSH2IqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVOKQJ1ec0F%2FEyUGCrcA9sXTOHwQOOpsxtuCEAZcTFVUpXusoMAT4AWSP1ctuB%2FIgw0rSw248Un9D3955eQxYBV37OidiCmjwirAzvm5imQ1IyhaM2YwkZMtbs8OBJMzYDSKeKhGIcduK298dpuZG2KcRx9noii4Vcb3ZI0BvvKsqEH5YqotAXFkO0y203TzqC0kU084OX2LvqglQujljPXiL9KowK4UkAGRgeEyd7QDnCBP%2FzsuR8%2F1Q6ManBnDHN1dCqTqenCW%2B5XygtB0TKjt9tyP2uIKCBTWUGJUnlKLOHvHLoo4WRFujmw2TJ7ErGSFG%2Biml%2FpBfxXKTf0IYdyVT2jPotTANs5U5nqtZRcF53ocuLAwkN9fqw8aWZg4Fwcbi9vvZNo96Rycz1Y%2Fz2EvbEQ1QQzc5F5%2Fckwi4bTd5vEB8sOlP%2BgAJC9XFzUbEr0pmQh3OoIFliXFVsicd%2BIEywVUY93jxViZFCD7MkyuL%2FTD5uUUf4UA3O1%2FHK8qJ3VbnhA8IvdT5Ci0QXdlhuubqf6GNB5jHIzvgEVEb0ocGxBZBSjwfV7Z7DIcc8DzQF4umwEEc1d82qexPr6syl%2FaS6IcRaYSNr1DzK7UT6FT9qys52JXebceVW1%2BKtPDGzxvQxseRZm4Uo8MKvv4cQGOqUBt3XMplIhR79Wrigp95Uyyq%2BWBMk512457B0%2Br9wQdGCTbmd%2BS5qoW6tt8YO%2BIewi2BRJzVYwjOdtX4ls1GDX8g0xxVxF1bOsfZXIhrMB6TmtgjZCTvNhnDBET%2F5G3rLWertU5d8AkaG%2BBp3%2B%2BREaiyrBotiLiXdoHKQBE3ntesfNRLE7KGtr90yn0%2Fb%2BEYaCVgmNS5ms87%2FTtY6i7jbYyCOTqWP3&X-Amz-Signature=3f09cd6ba9a1e07bd0def885e9e501cec218ad71e7b7365650478c7053f3ef44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNMUPKK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgwpD7K4dqsO90NUSSvWsAE%2F6bVyg%2F7ODvAg4aHHLLWAiEA5xhducX%2BRyQVPK6abFbZCZkrSWgPX58tWSyt7lfSH2IqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVOKQJ1ec0F%2FEyUGCrcA9sXTOHwQOOpsxtuCEAZcTFVUpXusoMAT4AWSP1ctuB%2FIgw0rSw248Un9D3955eQxYBV37OidiCmjwirAzvm5imQ1IyhaM2YwkZMtbs8OBJMzYDSKeKhGIcduK298dpuZG2KcRx9noii4Vcb3ZI0BvvKsqEH5YqotAXFkO0y203TzqC0kU084OX2LvqglQujljPXiL9KowK4UkAGRgeEyd7QDnCBP%2FzsuR8%2F1Q6ManBnDHN1dCqTqenCW%2B5XygtB0TKjt9tyP2uIKCBTWUGJUnlKLOHvHLoo4WRFujmw2TJ7ErGSFG%2Biml%2FpBfxXKTf0IYdyVT2jPotTANs5U5nqtZRcF53ocuLAwkN9fqw8aWZg4Fwcbi9vvZNo96Rycz1Y%2Fz2EvbEQ1QQzc5F5%2Fckwi4bTd5vEB8sOlP%2BgAJC9XFzUbEr0pmQh3OoIFliXFVsicd%2BIEywVUY93jxViZFCD7MkyuL%2FTD5uUUf4UA3O1%2FHK8qJ3VbnhA8IvdT5Ci0QXdlhuubqf6GNB5jHIzvgEVEb0ocGxBZBSjwfV7Z7DIcc8DzQF4umwEEc1d82qexPr6syl%2FaS6IcRaYSNr1DzK7UT6FT9qys52JXebceVW1%2BKtPDGzxvQxseRZm4Uo8MKvv4cQGOqUBt3XMplIhR79Wrigp95Uyyq%2BWBMk512457B0%2Br9wQdGCTbmd%2BS5qoW6tt8YO%2BIewi2BRJzVYwjOdtX4ls1GDX8g0xxVxF1bOsfZXIhrMB6TmtgjZCTvNhnDBET%2F5G3rLWertU5d8AkaG%2BBp3%2B%2BREaiyrBotiLiXdoHKQBE3ntesfNRLE7KGtr90yn0%2Fb%2BEYaCVgmNS5ms87%2FTtY6i7jbYyCOTqWP3&X-Amz-Signature=26a6a2f113eadd1cb183c795bfa89a794aabcf952226867fcee9d44d34dc1467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
