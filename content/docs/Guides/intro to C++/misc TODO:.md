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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIY2VHMN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICbjrXqVhMhTAMKI0y4OTDTjNJxVP4BnwvT5pl76mnZ8AiEA8UOkPMHkhX2g21oYARq7P82cRjBn4tz%2Bgc6F9lwAm5Qq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCRByMrIQY3Gff1cbircAyVZQTIDG9d9PmdIAQ%2B8cMzXCITGShFXRIlNChTC37qtl4%2Br8DQPYe%2FWiXNzVsYabwaWzUaaXrh02nOcpltKhosnepPNYyiXwz5qxN%2F2EHfoPvjiiNMKIwhqb2uYcIJrAxRU1IhY%2F2j5aZcnts4FIWattS8ffwbOzsaDQdZ5EVd6CBgupfzmFQMFf8sbbsFRW%2B0OxvTztJaG%2FPkVjfzASt8Y66uoyI7%2FUlgIa%2FZCrN2tdJDTT8FP5BOL4SCjfl7eu19Yb7v2MGXKla3yhDiTi%2FZSo0q9HZSymiHvKVKga4CK5XS7QVHHY%2BRZb8NwLv0g6hAc7QQCgIGewK1dmB5rDoBgVBVCGqCPMJOgfAXkvfSDlGMD8Mh0OXqEzC5ckOcWVO69y6gK7MJS6r5Q%2FDhWyPqp15CWYuh%2BavHwvcZwMCmaLs71RVru2WMFSWysmsm3qChAs4Jqc05kHjnAr7dGCfGGQzNxqwt6XxcoubYEKycNT%2FjQhuh8GnD1DpyBilcpeMOICOmQdfmxXyfay5g7V2Il%2FHg39y%2FEyVX2Qyj%2BKIzmOuPq%2BuT0wA3vwR%2Fva8%2FzVaNGJpEQijTTYEX8KsI07OkliXsgWrCt3JkDE5XuKMBot5vJeuhIEwIJmjl%2FMKPLqcMGOqUB7DbKKFhdAod4oulMK2EmMQyZOhTsfYJYvISJ9gk04l8wnO06%2FOOTgIavK4GkVLrLEjOFSCMk6Hc0MD6B159u%2Fw2%2BWlSHmDdIDm81ZnNY0aBpuVS4XJOhXDK8uc8sCfOt%2Fsmzw1E3CiAPn2Ht8ZkUIwkzWy1F9fmnI17MIpc5Fa5lilZSa9Gd%2FtrsSIBRspBFbO4mBtkcU1H7TDSRLyvs7hzpEHIo&X-Amz-Signature=3e1b2631e703c049ef6bfaea8bf9302a62651d672948ab51bd62cdb73ef9558d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIY2VHMN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICbjrXqVhMhTAMKI0y4OTDTjNJxVP4BnwvT5pl76mnZ8AiEA8UOkPMHkhX2g21oYARq7P82cRjBn4tz%2Bgc6F9lwAm5Qq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCRByMrIQY3Gff1cbircAyVZQTIDG9d9PmdIAQ%2B8cMzXCITGShFXRIlNChTC37qtl4%2Br8DQPYe%2FWiXNzVsYabwaWzUaaXrh02nOcpltKhosnepPNYyiXwz5qxN%2F2EHfoPvjiiNMKIwhqb2uYcIJrAxRU1IhY%2F2j5aZcnts4FIWattS8ffwbOzsaDQdZ5EVd6CBgupfzmFQMFf8sbbsFRW%2B0OxvTztJaG%2FPkVjfzASt8Y66uoyI7%2FUlgIa%2FZCrN2tdJDTT8FP5BOL4SCjfl7eu19Yb7v2MGXKla3yhDiTi%2FZSo0q9HZSymiHvKVKga4CK5XS7QVHHY%2BRZb8NwLv0g6hAc7QQCgIGewK1dmB5rDoBgVBVCGqCPMJOgfAXkvfSDlGMD8Mh0OXqEzC5ckOcWVO69y6gK7MJS6r5Q%2FDhWyPqp15CWYuh%2BavHwvcZwMCmaLs71RVru2WMFSWysmsm3qChAs4Jqc05kHjnAr7dGCfGGQzNxqwt6XxcoubYEKycNT%2FjQhuh8GnD1DpyBilcpeMOICOmQdfmxXyfay5g7V2Il%2FHg39y%2FEyVX2Qyj%2BKIzmOuPq%2BuT0wA3vwR%2Fva8%2FzVaNGJpEQijTTYEX8KsI07OkliXsgWrCt3JkDE5XuKMBot5vJeuhIEwIJmjl%2FMKPLqcMGOqUB7DbKKFhdAod4oulMK2EmMQyZOhTsfYJYvISJ9gk04l8wnO06%2FOOTgIavK4GkVLrLEjOFSCMk6Hc0MD6B159u%2Fw2%2BWlSHmDdIDm81ZnNY0aBpuVS4XJOhXDK8uc8sCfOt%2Fsmzw1E3CiAPn2Ht8ZkUIwkzWy1F9fmnI17MIpc5Fa5lilZSa9Gd%2FtrsSIBRspBFbO4mBtkcU1H7TDSRLyvs7hzpEHIo&X-Amz-Signature=20f0d1ece3e83723337fba388f7d896aaf97e1d8aa56d5b4730a94b192b7e068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
