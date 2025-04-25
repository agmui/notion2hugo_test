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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LBG3NRJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7z%2F1sJvW480PFibyH6K0YBuRHsPCocU6t7FewxVDpJAIgNJ2Ijh5SqY0NN93ldP7JSTPgfh5RTjD3Pc0xjIS7hWwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFbE4J2%2BmI%2F%2FkctcPSrcA15ykK42cjZxns6XV5gU6ig9m8bW4r6jKFki5PWxvG2qUq6Tk3PXPMawZir4m2S5OdpZZqHyva3AvQNrCoKHe8MStUseE%2FX51oSmbQYYq5GqT0%2FBsF7fAv3LMbX%2FJmLjt2pcFCZLRdBVE9drC6oF62rL2gP9%2FvGGa1xc%2FSSgCXjX42GqFHsCvHxL7GPttj%2B4sQC%2BfC3BTTUhb%2FeLib2fBFq9erMoeG%2F6dqSQHna2lwU%2BBFk7EtZhSnFigJO%2FLyeMmfJ6B%2FBb3lE5tw2SSQ11QvPjj1ArG5OFbwtme6HiI4QnuS5WKU%2BFbTOPl47Odi0gMkXAJAmv7IvN6YU0Co66%2FD4Eu35TEYJTzqQ9n14kFLtWxle7uu0Raa7VYRpJ%2B6kdZsnO4BCXRrMUrRGaRLu9al0l2ThoVr6mJCQOBDJYQ%2BTGeu%2F%2BeOVaeEafCoTSukZlIQMq6SLcRNl6H05thkwlgIpz6UXdEx%2F2KKbiBttm7HRj7yTy%2B2EjJjpyYSJx0xse9gobcj05Gq4pJZNeM%2Bin5BwtyC5esZmMC4t2TbDjT8EszDbG74WaP%2FVvZr%2Fs1GcTEBR5wtIQYR7k%2F0tUYZhiVSgXIZW3hLlYUryxqVLg%2Ba9RDrCeUssmGDlpbo%2B5MOOisMAGOqUBarsqdX6ZuByYRcp4kLphNNBm4x3H5o696ihS0tCRtNHvuPe7GYW%2BuHgknr%2FNSs%2F%2F004wfgI7KlNYrP6Gbwj%2Fb%2FaJebAE%2F9RBZI0PkS%2BNPZ%2BuUAOxtjjMjMQHcK5vzzJLMyW18QljDDTxW0tqQTRu%2Bmo6UCvzTxMY0WbrIz2r%2BMQQCsJfI%2Bs0Bqz3EFxd2%2Bh2ljrtL7epHhcp6wOdvqAa9XQuilkY&X-Amz-Signature=257c3851908de932638a553567555207e8eb0429ae47e077fd15b5c63c18f992&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LBG3NRJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7z%2F1sJvW480PFibyH6K0YBuRHsPCocU6t7FewxVDpJAIgNJ2Ijh5SqY0NN93ldP7JSTPgfh5RTjD3Pc0xjIS7hWwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFbE4J2%2BmI%2F%2FkctcPSrcA15ykK42cjZxns6XV5gU6ig9m8bW4r6jKFki5PWxvG2qUq6Tk3PXPMawZir4m2S5OdpZZqHyva3AvQNrCoKHe8MStUseE%2FX51oSmbQYYq5GqT0%2FBsF7fAv3LMbX%2FJmLjt2pcFCZLRdBVE9drC6oF62rL2gP9%2FvGGa1xc%2FSSgCXjX42GqFHsCvHxL7GPttj%2B4sQC%2BfC3BTTUhb%2FeLib2fBFq9erMoeG%2F6dqSQHna2lwU%2BBFk7EtZhSnFigJO%2FLyeMmfJ6B%2FBb3lE5tw2SSQ11QvPjj1ArG5OFbwtme6HiI4QnuS5WKU%2BFbTOPl47Odi0gMkXAJAmv7IvN6YU0Co66%2FD4Eu35TEYJTzqQ9n14kFLtWxle7uu0Raa7VYRpJ%2B6kdZsnO4BCXRrMUrRGaRLu9al0l2ThoVr6mJCQOBDJYQ%2BTGeu%2F%2BeOVaeEafCoTSukZlIQMq6SLcRNl6H05thkwlgIpz6UXdEx%2F2KKbiBttm7HRj7yTy%2B2EjJjpyYSJx0xse9gobcj05Gq4pJZNeM%2Bin5BwtyC5esZmMC4t2TbDjT8EszDbG74WaP%2FVvZr%2Fs1GcTEBR5wtIQYR7k%2F0tUYZhiVSgXIZW3hLlYUryxqVLg%2Ba9RDrCeUssmGDlpbo%2B5MOOisMAGOqUBarsqdX6ZuByYRcp4kLphNNBm4x3H5o696ihS0tCRtNHvuPe7GYW%2BuHgknr%2FNSs%2F%2F004wfgI7KlNYrP6Gbwj%2Fb%2FaJebAE%2F9RBZI0PkS%2BNPZ%2BuUAOxtjjMjMQHcK5vzzJLMyW18QljDDTxW0tqQTRu%2Bmo6UCvzTxMY0WbrIz2r%2BMQQCsJfI%2Bs0Bqz3EFxd2%2Bh2ljrtL7epHhcp6wOdvqAa9XQuilkY&X-Amz-Signature=fef016b017f441bcb46f20209aa57b730811cdb2244e4abe1522fcca3defa98f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
