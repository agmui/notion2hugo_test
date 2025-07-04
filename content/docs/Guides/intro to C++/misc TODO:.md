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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCZF5FZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAGcC0eC63by5MmKiLA%2BR6870cAoovhnfF448qWWEp8GAiEAgNCs2tiIEfPRrjOot%2FzzPhyiw79%2Fqj8SZO0X3s1OfpEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCMibPrBpe%2Fqi1GohSrcAwlHaTA1%2BR0Jw%2BikmkV5q9xFrkF%2Bfr34W4k%2F1Ba%2B1FFdnpqxQ%2F87He7ZmgirECLTUSSWVtWhvBPyDtmiw7NyqaH6lS0GAuvOWIEIB14fugf7c2lxQOjBaZeW81n%2FF%2FAFDF4f4FwNZFNu%2FsfHRSnsiqdabp3ETLIAfWs6Cv6NiL0gVoGUqqYIe3Qd%2FPaMFOO%2BMRb2Kk9%2FoZYpSkM2BpBPE0dkYMlmd7qfy5jdewJ4nevAXlFk9LHlrEonw2Kpr1t%2F7xjcG3Y2B1%2Ft243XUggrZYWqVGz4F8sU07hphO3o6H62dV%2BMQXE1pQzwGFGNCO%2FKGcwlcqv9Cti9wzNj9KiKADnH4iyYr5jHRw9gqGtagLkrEyxGzlvLv17Iqk8y%2BQFQeZ2ZLoIFYGEZjcHGpjFkiXhm1pgTmdalTYBiPwbtA7QnuYFQbnES60KSVg53IBRs58tegyjDN7ZQUIrgQDJVhExQ5SEB2lSIZFRqn84SSVpGLHGYL5EvZkG3ai9M37uDr%2FkRX7SkR%2FKH3LOliFBCPm%2BPxeojzg3KF9MUrMlzfc%2BbH0QFrc%2BxQ4Vm9jiu6y8gVBtQbESTqPE6kQA%2FC4VIoAluEqgXED45kTu8V3w383KjU9%2BfcadzHiO21HfUMM%2BOncMGOqUBiSr4CCpIjWLCAsNmxc3kks7wNH6N5HEenwtOOgDXQI2J06uWjDzZUcLAFKLzUvkMiILWJnmzNtT9Y8Yfjwa8eU75TW11QWWR%2Ffo95e%2BjlLNI9aZsPrloKUkvubMFcyc4U773eOcQ5ECl5K%2BgA41afdd4ZpC2OydcH1L6nqmPDIN0KENRwfC7RF5UydtEaDLi08l8fmo9jySYrHwHEz9V8Ft9PEMi&X-Amz-Signature=2891a7bac2085ecc83eb52715b3fc6df4d25f024e838c07ca1e7296357a8fc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCZF5FZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAGcC0eC63by5MmKiLA%2BR6870cAoovhnfF448qWWEp8GAiEAgNCs2tiIEfPRrjOot%2FzzPhyiw79%2Fqj8SZO0X3s1OfpEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCMibPrBpe%2Fqi1GohSrcAwlHaTA1%2BR0Jw%2BikmkV5q9xFrkF%2Bfr34W4k%2F1Ba%2B1FFdnpqxQ%2F87He7ZmgirECLTUSSWVtWhvBPyDtmiw7NyqaH6lS0GAuvOWIEIB14fugf7c2lxQOjBaZeW81n%2FF%2FAFDF4f4FwNZFNu%2FsfHRSnsiqdabp3ETLIAfWs6Cv6NiL0gVoGUqqYIe3Qd%2FPaMFOO%2BMRb2Kk9%2FoZYpSkM2BpBPE0dkYMlmd7qfy5jdewJ4nevAXlFk9LHlrEonw2Kpr1t%2F7xjcG3Y2B1%2Ft243XUggrZYWqVGz4F8sU07hphO3o6H62dV%2BMQXE1pQzwGFGNCO%2FKGcwlcqv9Cti9wzNj9KiKADnH4iyYr5jHRw9gqGtagLkrEyxGzlvLv17Iqk8y%2BQFQeZ2ZLoIFYGEZjcHGpjFkiXhm1pgTmdalTYBiPwbtA7QnuYFQbnES60KSVg53IBRs58tegyjDN7ZQUIrgQDJVhExQ5SEB2lSIZFRqn84SSVpGLHGYL5EvZkG3ai9M37uDr%2FkRX7SkR%2FKH3LOliFBCPm%2BPxeojzg3KF9MUrMlzfc%2BbH0QFrc%2BxQ4Vm9jiu6y8gVBtQbESTqPE6kQA%2FC4VIoAluEqgXED45kTu8V3w383KjU9%2BfcadzHiO21HfUMM%2BOncMGOqUBiSr4CCpIjWLCAsNmxc3kks7wNH6N5HEenwtOOgDXQI2J06uWjDzZUcLAFKLzUvkMiILWJnmzNtT9Y8Yfjwa8eU75TW11QWWR%2Ffo95e%2BjlLNI9aZsPrloKUkvubMFcyc4U773eOcQ5ECl5K%2BgA41afdd4ZpC2OydcH1L6nqmPDIN0KENRwfC7RF5UydtEaDLi08l8fmo9jySYrHwHEz9V8Ft9PEMi&X-Amz-Signature=7d96744ee3543df695df1bdfae97ceee16ba60038a7ea776d76b553417b9a558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
