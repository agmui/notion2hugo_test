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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VCCJLR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAIU3E3l8CVpzIZRRcyGwblDJ1jJCGg07bUL87aJ7KUpAiEA6dZPgL7UJ%2FacXhRGwcsv%2BxTmssaR9%2BE1t5kTjBu55%2FQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKiOVReiBkfkd3VHtCrcAxzM3tOC%2BqSkS0ncjLl%2Fi5%2F53txfqXFv0nkmipM265w%2FK25ZckcrUw9Qd0T%2FF8VT7l%2BsCe%2BonExQr8Ux4XA84O4te%2BEn1XoH1ipqRTS%2Bsb%2B3GI2puAw5ByBh5YZrFPJDwGeqxdkph5oHsQISSYnvpBW%2B%2FwxQXGMwX9I02VYfuH5gXXwJAHLCIueYxeEHbVv8JdOPAaundFgLidF7Maz%2FzrDxuILKMhThyz4d8DzaTGk5071TDlOuY3RPCkYeXle22w3%2BRngb5HjD%2FRGKzNVSo2e85aBrK4mxTehdC8fVSzCq5yM3xEzw4uxTxrPdJ8WAfBPDBHMn2Iy4TDkBHvX15q55p6CZdWbmY%2Bk40rdY26fUt1dr8Rb2AkTEOjESJz1eFynclrtUWDlcW7pom3uisMDEW1%2BKb5hiInRKIv8OjH29nHxLeMzzrlia%2BMf4e2%2FmPurYjINjQ%2FzHTngI2Y%2BBr49aaZDQzKm2o%2BrQdVGqkpqmfMIxLNwAPG9FvWgpsBuDedYn93RL2dIGYjvdWkXajZo4cTCUxJ6QI5Ae4T%2FNvoTeDhiU8zfzdqn70IUdM14dnjTlqb56u4QiKUjtI6GVPJLcn2Qt8zYrKoHQb4bBJRCQk3NI%2FzsaDnceezVeMLKSw8QGOqUBXwIX5Hwt2GUZtufD0YnIusy1J1VR5vMXGt5E6IIOG3dod31z6vzwo%2Bn2MzIY7%2BPKT2I7PCHeNvr78KbJAPYaiWgl9S8c8jHbbKX9p4KTvCh74pZU6Q%2FgzE1dTGy7VfPctHi4mgToI8BRUCvsY%2BUu058WoaygnQLC2K84THoqBFcqDOChK2T0DuEXZDban4MA%2F3DmHmyynLHH4PUh%2B4U7AQme1o2L&X-Amz-Signature=6d1e24bc3622fc11774adc78bf060cf35fb5b98854e278696b3b33f0d3354fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VCCJLR%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAIU3E3l8CVpzIZRRcyGwblDJ1jJCGg07bUL87aJ7KUpAiEA6dZPgL7UJ%2FacXhRGwcsv%2BxTmssaR9%2BE1t5kTjBu55%2FQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKiOVReiBkfkd3VHtCrcAxzM3tOC%2BqSkS0ncjLl%2Fi5%2F53txfqXFv0nkmipM265w%2FK25ZckcrUw9Qd0T%2FF8VT7l%2BsCe%2BonExQr8Ux4XA84O4te%2BEn1XoH1ipqRTS%2Bsb%2B3GI2puAw5ByBh5YZrFPJDwGeqxdkph5oHsQISSYnvpBW%2B%2FwxQXGMwX9I02VYfuH5gXXwJAHLCIueYxeEHbVv8JdOPAaundFgLidF7Maz%2FzrDxuILKMhThyz4d8DzaTGk5071TDlOuY3RPCkYeXle22w3%2BRngb5HjD%2FRGKzNVSo2e85aBrK4mxTehdC8fVSzCq5yM3xEzw4uxTxrPdJ8WAfBPDBHMn2Iy4TDkBHvX15q55p6CZdWbmY%2Bk40rdY26fUt1dr8Rb2AkTEOjESJz1eFynclrtUWDlcW7pom3uisMDEW1%2BKb5hiInRKIv8OjH29nHxLeMzzrlia%2BMf4e2%2FmPurYjINjQ%2FzHTngI2Y%2BBr49aaZDQzKm2o%2BrQdVGqkpqmfMIxLNwAPG9FvWgpsBuDedYn93RL2dIGYjvdWkXajZo4cTCUxJ6QI5Ae4T%2FNvoTeDhiU8zfzdqn70IUdM14dnjTlqb56u4QiKUjtI6GVPJLcn2Qt8zYrKoHQb4bBJRCQk3NI%2FzsaDnceezVeMLKSw8QGOqUBXwIX5Hwt2GUZtufD0YnIusy1J1VR5vMXGt5E6IIOG3dod31z6vzwo%2Bn2MzIY7%2BPKT2I7PCHeNvr78KbJAPYaiWgl9S8c8jHbbKX9p4KTvCh74pZU6Q%2FgzE1dTGy7VfPctHi4mgToI8BRUCvsY%2BUu058WoaygnQLC2K84THoqBFcqDOChK2T0DuEXZDban4MA%2F3DmHmyynLHH4PUh%2B4U7AQme1o2L&X-Amz-Signature=b537d7cf5c632bed92a4989bf62774ea1e0f72ea597efd92e5a46ba1bff12ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
