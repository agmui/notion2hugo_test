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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226KCK32%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIb4L%2BRoMIThD5dwcuu2Zb9idv8RCo98ogz6ZQy09cyAiEApTG0KVwjBk24GahDDb21xKLmaUm4RXa7jPNswtwz6egq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHLjUt4vLKQ1kv9EMCrcA2gSgEe4TvnuijV9DW%2FHnxWWBTg1M4POO1aGjqAmNN2NpTLDlnyMrGoo6tXMybtQbHUunfVl4BsDuPNF7W6JpU0nd1bCCbcUVXDvq3zYRqB3c2LX5DCrQZi6W%2BYi%2FOO2%2BINd3JCLSCB96XbnSqPEFJIPxzrCsv8X6%2B80zPcurdsf%2BFUbfXPFiabmP%2Fm1%2BMlLTx20AK9NbnRdi7pDxSozQTzinxlrJp0C9a6dnzlezMTr8hpkYNvrwtttWjBFs5%2Felqd0w4uoidYxeUfdqgCKsXtueWII7WXnWLvf34exAD7gOr1lSlPifMbO7a9zTIC3WwQHs7m2mHTo1mDLJZ8y%2FbgTF2d7KQAFbIpr%2Bl%2F7zmsLnKW65R4aURp3yNINmxJvrqXQ7t2QACHYXXgT61vQza3Y29JzNKy59%2FkevkHQ0CNZOqijtKLSEZvQ7AGjI%2FrATvKSAWtkngcLPTKXhMHiGO%2BbCtcuDpjAnMGBWNYz3aXKD1RrCEfTjN7z5OmolSbwJ0aCslWNR4HT%2FlgFRa9gCrB%2Fjq%2Fb59qVtxHxmTSdm6SPIDLh%2FbBiH9l3IVowHoIjt4OKbUnxEHOIvfIsEhKdSBzZs8wZHrwJPFYFZNMNsZEfHjDrxlSqk1R926N7MIXk28EGOqUBCp3ttVYezv9Gm%2FTffsSmwkUSVETnHVM7%2FwnRGbvUP8MOBrfRULNFGGJZj4Gb4Ap81sLyLWS2U1eAhQPeZ79PhS6%2BEQc6%2Fl1s21AncM4XHtKCpRz23zQtjOC%2BmpSk8tZAh95GDRVpFuSHeeBEbEAOo20AFI%2Fk27ys0u%2B8UcRnxtGwQHwgkId%2F21N5WvaF2f28ZrpKro6Zw%2BHYcedaAOyasvrfWV1I&X-Amz-Signature=d7ccc7c09d0d3c4a182b72519f310fded0d583797a6ea999cef5a62738f77559&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226KCK32%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIb4L%2BRoMIThD5dwcuu2Zb9idv8RCo98ogz6ZQy09cyAiEApTG0KVwjBk24GahDDb21xKLmaUm4RXa7jPNswtwz6egq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHLjUt4vLKQ1kv9EMCrcA2gSgEe4TvnuijV9DW%2FHnxWWBTg1M4POO1aGjqAmNN2NpTLDlnyMrGoo6tXMybtQbHUunfVl4BsDuPNF7W6JpU0nd1bCCbcUVXDvq3zYRqB3c2LX5DCrQZi6W%2BYi%2FOO2%2BINd3JCLSCB96XbnSqPEFJIPxzrCsv8X6%2B80zPcurdsf%2BFUbfXPFiabmP%2Fm1%2BMlLTx20AK9NbnRdi7pDxSozQTzinxlrJp0C9a6dnzlezMTr8hpkYNvrwtttWjBFs5%2Felqd0w4uoidYxeUfdqgCKsXtueWII7WXnWLvf34exAD7gOr1lSlPifMbO7a9zTIC3WwQHs7m2mHTo1mDLJZ8y%2FbgTF2d7KQAFbIpr%2Bl%2F7zmsLnKW65R4aURp3yNINmxJvrqXQ7t2QACHYXXgT61vQza3Y29JzNKy59%2FkevkHQ0CNZOqijtKLSEZvQ7AGjI%2FrATvKSAWtkngcLPTKXhMHiGO%2BbCtcuDpjAnMGBWNYz3aXKD1RrCEfTjN7z5OmolSbwJ0aCslWNR4HT%2FlgFRa9gCrB%2Fjq%2Fb59qVtxHxmTSdm6SPIDLh%2FbBiH9l3IVowHoIjt4OKbUnxEHOIvfIsEhKdSBzZs8wZHrwJPFYFZNMNsZEfHjDrxlSqk1R926N7MIXk28EGOqUBCp3ttVYezv9Gm%2FTffsSmwkUSVETnHVM7%2FwnRGbvUP8MOBrfRULNFGGJZj4Gb4Ap81sLyLWS2U1eAhQPeZ79PhS6%2BEQc6%2Fl1s21AncM4XHtKCpRz23zQtjOC%2BmpSk8tZAh95GDRVpFuSHeeBEbEAOo20AFI%2Fk27ys0u%2B8UcRnxtGwQHwgkId%2F21N5WvaF2f28ZrpKro6Zw%2BHYcedaAOyasvrfWV1I&X-Amz-Signature=8e7598e79057985d03ef39b224f0b1fe916f85dd221db8dda5c610194e003ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
