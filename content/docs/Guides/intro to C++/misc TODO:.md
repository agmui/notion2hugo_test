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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQTXAUD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAb6Oyl%2FsyI4f4OvpLFb%2FlXljm22THkMsD%2FCoe%2FMkXsYAiEA1%2FrA4Yk8b4XkJNm3uBvzwRrnWwaxtxMrPvNDRw%2FgfzMqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXGUDSk0%2FRvkXDeYyrcA8P7uc66H%2FPPlWOAtq4QpV6EU4h6c08Lqrlg2b%2F1oIRuAeXHmBE1%2F9ungvCLkMpsvEFe4ELORcecNkZYT%2FHIjaBk1O1Z8Tcrce%2B0eGOSiaJJg0844zC4lRTH2au2tHnVFvRzO4vboL5tufEBk%2FZGhLUf58qnnDdmuuoSIaDYDrGR26VQm7P4WQQks2qTYjldnroUCMlSWCClU%2FkbCto%2FMH4DeGiwBECzeO3x00qhpub2zXKVf1hQ%2F7%2FNqWbcekPlaLZanMEu2v7%2FYB7L1nCjox4aewGCTTONRJQas1S41zzAXccgxGDokNrbLaEld7%2FWFpOiNvAQMoaDYR5%2B9sQ7CHH2KLEiJJq9kbz40P%2FYo54NJaDEmAvt1JhCpXsSDsEYKSjw7I%2Fp%2FMGDlbdA6wPCKJQl7R6IsoWWdaT%2B5fU8fAJQ7ibYCdNwhsoIjIYDDi2oSSULIJoKlS7p11Z3oEGnCtinKzVaRjf6EpJzhE1YfVSz5Jy3Wert8C%2BrA7wN3ZWQM1hpFpsuuyhZ%2BZ41M5uF4QyME6i99HPDxnW8a6M767lfb0IFV2zyiqRClJSmCvnPh857%2FT74QIP9qx1OV%2FwSTNEzoCJUk%2FnRGexf0dXi30UJ9jJGbB0u70oM3nJ8MI%2FGnMQGOqUBOS9j29qToV5HvDmdWlu5%2Bs6abn63FBvk270KN19p2qSCGgTph0MLBRluEwFfPIAlfr%2FV%2Fe86ByOIbQ5r0lefgaC49gNEsiGc2G8ka1rgOSuh1YRV14Eok2x1EeCJH8sne5rYacn5R8axU%2FSiI7pBmOP9nZvuoTps2ONiUxHz0Zgh2t0vHAIBNTCdHMnB9QchoxPYhjqgZEa4K8BY4QjM%2FoCXyzLA&X-Amz-Signature=1646a3c0c9f417b319a249e93e5970ec1ba070ae6a1235bf1401040eb5ffb1c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQTXAUD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAb6Oyl%2FsyI4f4OvpLFb%2FlXljm22THkMsD%2FCoe%2FMkXsYAiEA1%2FrA4Yk8b4XkJNm3uBvzwRrnWwaxtxMrPvNDRw%2FgfzMqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXGUDSk0%2FRvkXDeYyrcA8P7uc66H%2FPPlWOAtq4QpV6EU4h6c08Lqrlg2b%2F1oIRuAeXHmBE1%2F9ungvCLkMpsvEFe4ELORcecNkZYT%2FHIjaBk1O1Z8Tcrce%2B0eGOSiaJJg0844zC4lRTH2au2tHnVFvRzO4vboL5tufEBk%2FZGhLUf58qnnDdmuuoSIaDYDrGR26VQm7P4WQQks2qTYjldnroUCMlSWCClU%2FkbCto%2FMH4DeGiwBECzeO3x00qhpub2zXKVf1hQ%2F7%2FNqWbcekPlaLZanMEu2v7%2FYB7L1nCjox4aewGCTTONRJQas1S41zzAXccgxGDokNrbLaEld7%2FWFpOiNvAQMoaDYR5%2B9sQ7CHH2KLEiJJq9kbz40P%2FYo54NJaDEmAvt1JhCpXsSDsEYKSjw7I%2Fp%2FMGDlbdA6wPCKJQl7R6IsoWWdaT%2B5fU8fAJQ7ibYCdNwhsoIjIYDDi2oSSULIJoKlS7p11Z3oEGnCtinKzVaRjf6EpJzhE1YfVSz5Jy3Wert8C%2BrA7wN3ZWQM1hpFpsuuyhZ%2BZ41M5uF4QyME6i99HPDxnW8a6M767lfb0IFV2zyiqRClJSmCvnPh857%2FT74QIP9qx1OV%2FwSTNEzoCJUk%2FnRGexf0dXi30UJ9jJGbB0u70oM3nJ8MI%2FGnMQGOqUBOS9j29qToV5HvDmdWlu5%2Bs6abn63FBvk270KN19p2qSCGgTph0MLBRluEwFfPIAlfr%2FV%2Fe86ByOIbQ5r0lefgaC49gNEsiGc2G8ka1rgOSuh1YRV14Eok2x1EeCJH8sne5rYacn5R8axU%2FSiI7pBmOP9nZvuoTps2ONiUxHz0Zgh2t0vHAIBNTCdHMnB9QchoxPYhjqgZEa4K8BY4QjM%2FoCXyzLA&X-Amz-Signature=d0c714927f2288f4d048407b271ae708d996590aa4ade2966231105e55b74ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
