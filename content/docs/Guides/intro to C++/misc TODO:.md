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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IC7WCR4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX69QZwwOoV%2FbFMvp8zKxpjjH9%2FW4Xvhvw2iRvnLZlvAiB02cTDZVlNSG4sCcauzigothA9TyZff38gNiJojAm2yCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl13HLeG4fMhcAlGmKtwDPdbCBsBPQNZFaSPLwXfbOJTrk7ShKCI1djOOTFcYXX6ojro%2BEzNMP%2BTzwerN%2Bgd7IawRFpaVEHUP9AAqnHQVjryFpPnrClCwljUm%2BNaiV7N6K31b3JfLO91BcLxE3Svev%2FkV2Deqtw3goEhn2rcrxttwLFg7W1KKPEtk709RJgHmNE1ws57Xbq%2Bfnt75V2%2BG2TRLgtB3SeT2bmaGAjt%2BD5RhsuycPK0MJAIwrMlYPrdPwNn36MI6%2F6h4NaXXtu7Lwdgv%2BgmAe%2FUnQ2SU5e6T%2FCv3dECi0uFe2eHCKdnFgFg8GG9NOsVP3uMXg9swRrKTXAZ6qK4XO9hTRLgXteSJ59YGDl9yelVLSZF%2BlB7F2Phpmjw1%2BwqzmPWm%2BX0DdMSWG15fDUBTP%2FX%2BMV975UcRFTPGh%2FW3ANN4UfBZNwFnLXUgMrZwSsfM8sAezm3B3Kg1Mkigev2pXRe4OcuMatd1UVL3dPjdMWRR%2FqCdpPsRnUEC3HyBtYmrbqJ6QPTeuzYfxF5yOfKpJ9xwzziiQWeFtchMzccj%2BdDnE0liTY7%2BeNHOmugA9u4OuuZURuahO2477%2FiOEu4NytkAds3vhWFqEfo9hwvBH64J20Qo3xCeDTDoPjr2NAMJYhppyK4whoqxvQY6pgE411%2F9vGkLbixdxrs7me0wTcOrSXz3NlOE2TRgLJ9u9KtsIJKS%2FZrzfvkEm7Oaf8NRPUBgyjfhQIPJgymAZVKUpztZmBdWn4cQqLhAb4sQxruilokte9XewOP4X0gYz5qrgVBYdNxF%2BlEiRSLjfu%2FznTmBFCm6PCL%2BW4Vo%2F%2B7o%2FcgXR6vqqZ0WRmMLg36eeNHUjRtCzZb9UJH8dqRH9vcJJH%2FcGeQ3&X-Amz-Signature=ab007dff26d1853452fd30aa16985da5771e4a7da05edbea0e56ed3ddba43764&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IC7WCR4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX69QZwwOoV%2FbFMvp8zKxpjjH9%2FW4Xvhvw2iRvnLZlvAiB02cTDZVlNSG4sCcauzigothA9TyZff38gNiJojAm2yCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl13HLeG4fMhcAlGmKtwDPdbCBsBPQNZFaSPLwXfbOJTrk7ShKCI1djOOTFcYXX6ojro%2BEzNMP%2BTzwerN%2Bgd7IawRFpaVEHUP9AAqnHQVjryFpPnrClCwljUm%2BNaiV7N6K31b3JfLO91BcLxE3Svev%2FkV2Deqtw3goEhn2rcrxttwLFg7W1KKPEtk709RJgHmNE1ws57Xbq%2Bfnt75V2%2BG2TRLgtB3SeT2bmaGAjt%2BD5RhsuycPK0MJAIwrMlYPrdPwNn36MI6%2F6h4NaXXtu7Lwdgv%2BgmAe%2FUnQ2SU5e6T%2FCv3dECi0uFe2eHCKdnFgFg8GG9NOsVP3uMXg9swRrKTXAZ6qK4XO9hTRLgXteSJ59YGDl9yelVLSZF%2BlB7F2Phpmjw1%2BwqzmPWm%2BX0DdMSWG15fDUBTP%2FX%2BMV975UcRFTPGh%2FW3ANN4UfBZNwFnLXUgMrZwSsfM8sAezm3B3Kg1Mkigev2pXRe4OcuMatd1UVL3dPjdMWRR%2FqCdpPsRnUEC3HyBtYmrbqJ6QPTeuzYfxF5yOfKpJ9xwzziiQWeFtchMzccj%2BdDnE0liTY7%2BeNHOmugA9u4OuuZURuahO2477%2FiOEu4NytkAds3vhWFqEfo9hwvBH64J20Qo3xCeDTDoPjr2NAMJYhppyK4whoqxvQY6pgE411%2F9vGkLbixdxrs7me0wTcOrSXz3NlOE2TRgLJ9u9KtsIJKS%2FZrzfvkEm7Oaf8NRPUBgyjfhQIPJgymAZVKUpztZmBdWn4cQqLhAb4sQxruilokte9XewOP4X0gYz5qrgVBYdNxF%2BlEiRSLjfu%2FznTmBFCm6PCL%2BW4Vo%2F%2B7o%2FcgXR6vqqZ0WRmMLg36eeNHUjRtCzZb9UJH8dqRH9vcJJH%2FcGeQ3&X-Amz-Signature=353b6edea770f18c124619f917be18999b0fedd6561cb082b8ce438e51d4028a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
