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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZJ6PEP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGf1TDjvJpMsftmTc1BGjtTwNBAPU82lwhWBpsMQISrAIgNODNLNmJE0Goq1dsCeuFeFCrBJTyc9pK2Ocx8ZXFfmgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BsXcADrMwXDHsueircAxpR93JC7U80jAxp2ndiil2HagZdOaSxHLqv3DzN5c6NmZWdFXDD5PjGjS9FiDijCBiB3UgCrVs11apPmZ64zpPXf%2BsGcxWip9DvOjcE5MkvMF0PqQfHOiBBhkyxmr5jDfG%2BzN2NQt3wC0hncsqapn4tTBArRr8D9Mjx10S1sbLOJDgWdHX8ydXzdbqESyBDqj1iPcmNzzqBGKIKc50Ow2FIza7gyRITWxFrQY1vVNb%2BoI%2F5qaT2mFw4mM6BaI08qMmuCrXWvnoUC0BvPIlun8gREB7rXD2VsWDVsQvec6NOvCdKRtL8KZEwF2cxYyr7FA4wTGvzSwCsX%2FWXGYtNI3UJRDhhRdXzMtbPzGJVLF5pu3%2B1yOz9vlFPKdB1bKbzqAAYJWBemRwze11clivWn5fsZJPg4dXRfLYJrkWYIYDv6TGC2Hg5XBpkLwjFFs3Zn7Vu5bahBOS6VuKTq1694N2h34FDS6vyKRfUEJIDpM9ANg%2FkE%2FM%2BPuNIQM2151Xjjei5YagsRPqjzCIEPoPWOUiS2WxpxnBNZ4OBiiduM8IuwVnmiphPuKqxYHJ3%2FIAwmUqNcsJ%2Bu42IKLNZWYvGMOwhNBbuN5HW3b9dnpJY3UKA44l9iO5veHntmSpRMMLbhcMGOqUBLwGfz1bOk3OYfm60H0YJ3R7nWKOGFwnOR%2BXWv4naKVIbnJZB3tN1%2F2rCNDYkogGi5m9pZMPBC%2FK78dN6YR1Onu5agdyCPalwWA%2FMt4niBKWr9Ux8Sfxckc9Bnaw4AAz8gaH1c5oWfGgN5cvE37hwNFq%2FxFQTFfUhiMGZFgdgUq%2Bnes4AXeK9gB5rR3aAF59JyRzgkeTCZqckBTWrlFGpa2tNV6MZ&X-Amz-Signature=3d2f5942f3b0ff4ebe70b517707b39d5731b6a92be89f7473991077d1b42cf5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZJ6PEP%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGf1TDjvJpMsftmTc1BGjtTwNBAPU82lwhWBpsMQISrAIgNODNLNmJE0Goq1dsCeuFeFCrBJTyc9pK2Ocx8ZXFfmgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BsXcADrMwXDHsueircAxpR93JC7U80jAxp2ndiil2HagZdOaSxHLqv3DzN5c6NmZWdFXDD5PjGjS9FiDijCBiB3UgCrVs11apPmZ64zpPXf%2BsGcxWip9DvOjcE5MkvMF0PqQfHOiBBhkyxmr5jDfG%2BzN2NQt3wC0hncsqapn4tTBArRr8D9Mjx10S1sbLOJDgWdHX8ydXzdbqESyBDqj1iPcmNzzqBGKIKc50Ow2FIza7gyRITWxFrQY1vVNb%2BoI%2F5qaT2mFw4mM6BaI08qMmuCrXWvnoUC0BvPIlun8gREB7rXD2VsWDVsQvec6NOvCdKRtL8KZEwF2cxYyr7FA4wTGvzSwCsX%2FWXGYtNI3UJRDhhRdXzMtbPzGJVLF5pu3%2B1yOz9vlFPKdB1bKbzqAAYJWBemRwze11clivWn5fsZJPg4dXRfLYJrkWYIYDv6TGC2Hg5XBpkLwjFFs3Zn7Vu5bahBOS6VuKTq1694N2h34FDS6vyKRfUEJIDpM9ANg%2FkE%2FM%2BPuNIQM2151Xjjei5YagsRPqjzCIEPoPWOUiS2WxpxnBNZ4OBiiduM8IuwVnmiphPuKqxYHJ3%2FIAwmUqNcsJ%2Bu42IKLNZWYvGMOwhNBbuN5HW3b9dnpJY3UKA44l9iO5veHntmSpRMMLbhcMGOqUBLwGfz1bOk3OYfm60H0YJ3R7nWKOGFwnOR%2BXWv4naKVIbnJZB3tN1%2F2rCNDYkogGi5m9pZMPBC%2FK78dN6YR1Onu5agdyCPalwWA%2FMt4niBKWr9Ux8Sfxckc9Bnaw4AAz8gaH1c5oWfGgN5cvE37hwNFq%2FxFQTFfUhiMGZFgdgUq%2Bnes4AXeK9gB5rR3aAF59JyRzgkeTCZqckBTWrlFGpa2tNV6MZ&X-Amz-Signature=a637166f6a8eb466cba4de5a67ed856ebe831a467a4c56035b59b67017d13cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
