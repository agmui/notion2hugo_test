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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYLNTNSQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtUvH9w5rSK%2BPWHGwb5%2Bnwz28Qr0Uh2ma5IjxC3HpDPAiAO2nwPuiPOSy5m5SCGCc%2FZbc8QxjLd9VAhhzF46FtCoSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG%2ByP6Ck6RCG3WrQmKtwDasmMPY6nj%2BtVjsnp07McEirn9U00iypVCroJEpVSzgtpkR%2BGazHdNg%2B11HnprIiig6WsvE%2BD3ZrZWVI%2BAvnrLydPOBWPx9E4vXLwrvKoRUVR2SJ3Zmluo2kQqeijNA0nhrddiEvuYcJrKf%2B0%2FdAAUw5m9TRJG83zn%2FJJFthusC9wYZkJLIf8GoOfWi3f3JyBFOA7pEfDpJojaAXSmMDqPP1h6coic7acDdLhsDF8lSNdePXCn7nr%2BDChWMLn4Nc%2BQt0CirsvzPqKenEe%2BFuMLLpPNxD%2BUiu10p4yzK0PAJWVrcaGyYVA7snxBiXhh05H2q1Bx6%2Bqk7DlY60fbF62WkLcaqboLCPH2vNPsbJjcHUA6XUbtYVDA59uXHc9LyXpzyllSPN%2Bxu9ekxjNGo2vUmNR0HwBkkQn8A2M7LCTS1FAzQLP6BAPjF5epRSRuIj5dP9qAcXEfMNFGuNvXVh0BSmJhfOb27nxlNLNTOjMdk2K3nb4UtW2%2Be2%2FzkyZu4LiE%2FbRcSGhUe6vNNXBlO4xd0CsikaHh7V4rN%2FrEslEtfKY46bru3gET0nRJrSyjCOIbz5qYp28akpM3NPx3UI9Di%2FycIEQYVeukHi7%2FKrQCrNk3E8%2Blx81pga%2FiL4w46%2FYwgY6pgGiV6uxj4pkQeuKJ0y4ezV2h3PLE%2FGJl8PtfVn%2FDpfj25X86bTonmV7TN7RZ25ug6ViXpTedvaeyPSyQw90%2BdMZqSDAfagRrBiv3qrHGBj%2BTg9Fj8MooZGNQ67e9S%2BL2QONlaHCrQkU7ICL0MuyZNtYs02Fexq4eMgGjL2lYRSv0amj6s%2B%2BpN%2BdGF1sQGOwYwlJ8qa%2B%2BDOY1ZpgVKpw6P9CwDHjkrmN&X-Amz-Signature=1effade1f892e189398120f740bcefd6fb3f6a7b54d4571259e7b3fa47332962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYLNTNSQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtUvH9w5rSK%2BPWHGwb5%2Bnwz28Qr0Uh2ma5IjxC3HpDPAiAO2nwPuiPOSy5m5SCGCc%2FZbc8QxjLd9VAhhzF46FtCoSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG%2ByP6Ck6RCG3WrQmKtwDasmMPY6nj%2BtVjsnp07McEirn9U00iypVCroJEpVSzgtpkR%2BGazHdNg%2B11HnprIiig6WsvE%2BD3ZrZWVI%2BAvnrLydPOBWPx9E4vXLwrvKoRUVR2SJ3Zmluo2kQqeijNA0nhrddiEvuYcJrKf%2B0%2FdAAUw5m9TRJG83zn%2FJJFthusC9wYZkJLIf8GoOfWi3f3JyBFOA7pEfDpJojaAXSmMDqPP1h6coic7acDdLhsDF8lSNdePXCn7nr%2BDChWMLn4Nc%2BQt0CirsvzPqKenEe%2BFuMLLpPNxD%2BUiu10p4yzK0PAJWVrcaGyYVA7snxBiXhh05H2q1Bx6%2Bqk7DlY60fbF62WkLcaqboLCPH2vNPsbJjcHUA6XUbtYVDA59uXHc9LyXpzyllSPN%2Bxu9ekxjNGo2vUmNR0HwBkkQn8A2M7LCTS1FAzQLP6BAPjF5epRSRuIj5dP9qAcXEfMNFGuNvXVh0BSmJhfOb27nxlNLNTOjMdk2K3nb4UtW2%2Be2%2FzkyZu4LiE%2FbRcSGhUe6vNNXBlO4xd0CsikaHh7V4rN%2FrEslEtfKY46bru3gET0nRJrSyjCOIbz5qYp28akpM3NPx3UI9Di%2FycIEQYVeukHi7%2FKrQCrNk3E8%2Blx81pga%2FiL4w46%2FYwgY6pgGiV6uxj4pkQeuKJ0y4ezV2h3PLE%2FGJl8PtfVn%2FDpfj25X86bTonmV7TN7RZ25ug6ViXpTedvaeyPSyQw90%2BdMZqSDAfagRrBiv3qrHGBj%2BTg9Fj8MooZGNQ67e9S%2BL2QONlaHCrQkU7ICL0MuyZNtYs02Fexq4eMgGjL2lYRSv0amj6s%2B%2BpN%2BdGF1sQGOwYwlJ8qa%2B%2BDOY1ZpgVKpw6P9CwDHjkrmN&X-Amz-Signature=96ccd969decfe7a9853789f44eb773d6ea35b2d36a263406afba46f7c6972fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
