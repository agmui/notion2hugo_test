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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTAPKIEW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqStxcMFmuAT3k3S4wPdS%2F0Z5av2W%2B5vHf0JNfYvo6iAiEAyMeyZCMwmDVCW9iExdRsi%2Fu%2FBrlBpVuBs0xxffnSWsQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbgNED3lke3iDaCtCrcA5E%2FbdY7qG4As3u2mYGuh0YEfg3cHZgp3GvMMqS62Aeiu%2BTHYxwxqRuLAiJkksuY93aa%2BvElHOXREEMWJmeqreQTMBhVQsRk99NSfuWJA%2F%2Fuo5TRBn%2FNXT1DphWUsY8QHQmWdTeZ1PFPL4fV8MABTNuTLThgsL%2FUcG2R8fOfG5YzKnPcBrbsGXbHrGLbOo6Zcy7N%2FfexFKUmHXzniIndRhtqygNkz8o1ebo4JAwVGFslGd25qWpTgqjK0RCpOkGJwk7FwlUV5snpg6jY%2FUzH0fh2y%2BtVfcjjdGvjsnOTFtR5ZxCUi%2BqRwOaRZ8PE1EXb2tBGC%2B8Hjn5z1%2BpTU%2FWhrRwzKsHAwom0qIv8Si7CnjszEFbheGQHTjOrP%2FUH5lXTDclLg5FzE%2Bihfcjex337vng0ewcbIXC0GX7HJ%2B%2FSEYez%2FkgE9QxGZUzQJIdPBEowLAfbr6Uenu%2B7FQL3Z4tjgJZOCMu%2BZ51uCkKkkKyGk6%2BmMqGozHZSGkB6XTyZSnD3Bm%2FTRq4iFqkngXBYv6Jp9tf8XKSNvcP3GIxuHYVr2Rt6Ac%2Fdald%2BVXV%2FRSbOZPZiFFzrGIH%2FdqDaanIwATmMlCeixucacJzq%2Bv8SBl0tP5d7c14fQLRvNmLHfWWoMJaEzsIGOqUBydijCquv7hedZJW2k1bWVvEZ6ZTWUPh1cafvLqBsUrRUKZiRXxIkNXosN7%2BkFoFovMDRVkw5epdfOcXBOo%2BvP4O7ORu%2Fc%2BhXvl4MhIKQvMnQGrWUTsto4vaXqZGQgCW2ixuKLLOI7wzoFww3xcDg44AAEk0pRzMAfLwyVrDwAAsHDODm2yPEHp33jGx1wXzgd45OenzivIvSGEVYXDh8OhI%2B76gC&X-Amz-Signature=c4c89130aaf90b02ecc99302f876e709a0d2e77f1754f403eb4974b61f768eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTAPKIEW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqStxcMFmuAT3k3S4wPdS%2F0Z5av2W%2B5vHf0JNfYvo6iAiEAyMeyZCMwmDVCW9iExdRsi%2Fu%2FBrlBpVuBs0xxffnSWsQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbgNED3lke3iDaCtCrcA5E%2FbdY7qG4As3u2mYGuh0YEfg3cHZgp3GvMMqS62Aeiu%2BTHYxwxqRuLAiJkksuY93aa%2BvElHOXREEMWJmeqreQTMBhVQsRk99NSfuWJA%2F%2Fuo5TRBn%2FNXT1DphWUsY8QHQmWdTeZ1PFPL4fV8MABTNuTLThgsL%2FUcG2R8fOfG5YzKnPcBrbsGXbHrGLbOo6Zcy7N%2FfexFKUmHXzniIndRhtqygNkz8o1ebo4JAwVGFslGd25qWpTgqjK0RCpOkGJwk7FwlUV5snpg6jY%2FUzH0fh2y%2BtVfcjjdGvjsnOTFtR5ZxCUi%2BqRwOaRZ8PE1EXb2tBGC%2B8Hjn5z1%2BpTU%2FWhrRwzKsHAwom0qIv8Si7CnjszEFbheGQHTjOrP%2FUH5lXTDclLg5FzE%2Bihfcjex337vng0ewcbIXC0GX7HJ%2B%2FSEYez%2FkgE9QxGZUzQJIdPBEowLAfbr6Uenu%2B7FQL3Z4tjgJZOCMu%2BZ51uCkKkkKyGk6%2BmMqGozHZSGkB6XTyZSnD3Bm%2FTRq4iFqkngXBYv6Jp9tf8XKSNvcP3GIxuHYVr2Rt6Ac%2Fdald%2BVXV%2FRSbOZPZiFFzrGIH%2FdqDaanIwATmMlCeixucacJzq%2Bv8SBl0tP5d7c14fQLRvNmLHfWWoMJaEzsIGOqUBydijCquv7hedZJW2k1bWVvEZ6ZTWUPh1cafvLqBsUrRUKZiRXxIkNXosN7%2BkFoFovMDRVkw5epdfOcXBOo%2BvP4O7ORu%2Fc%2BhXvl4MhIKQvMnQGrWUTsto4vaXqZGQgCW2ixuKLLOI7wzoFww3xcDg44AAEk0pRzMAfLwyVrDwAAsHDODm2yPEHp33jGx1wXzgd45OenzivIvSGEVYXDh8OhI%2B76gC&X-Amz-Signature=1e0ed64e75388b5d2d45a04d66f793ed4792367bc2fad929a3f42ecb01837865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
