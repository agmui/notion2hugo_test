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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656MBLCVM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmN6WW7l8qRueZP6b5YT4xfGmUQP04%2FU7shj0yE0pfqAiEAuryYKHQmHOzCRyPAC%2F20EJMh8khWPcLIQ3lt3ahdEyYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIdU6RdmZz0AY6Dn%2FSrcA0Hsw%2F3ghXnWpRXZtwky04U7dEgv%2BdyYYQWX8dJna2ZsMbw0%2BN97dpeDJ%2BHBOY6yyeCTvaInn0PdW%2FLiYW%2BtHI7sKJsDvuINSgqnzW6lw9GWQeSURNi4fQ90cdXggJWzvgIG1gkqMujAVsIASlV2CACpMEoI3mEVXWqrWr7uKJFX0D6G7wACjrF2Ouy0oAMDgURwxDheGrru8egvPPD5M4D7KVk6pn9aHKNjJJPzblHMOkq%2BpcxS%2B3uT5AdQVwKBp%2BC%2BKElgvTWRwPlzrTnlnWNvZAJCuFNR%2FHwz1ZpBke6KsiJKrF3UsuaUdgPow1V18JT%2FoHYDvKNwY8Me20U7p5tvoBZck5QcdGUGr%2BXX661XWJKyo6fUPVtWi2ocO4pW%2FFFfEN3xCgjPn9nRemwb3SlQukcExTmNr9HRyqPvR20aaqsqIXEfsQS3jZRPgAfki0xrPmtMJ2PnhSUas1XxmcLDrR2oKov0F26aAmgbfJbkScYreHDz8Ipeqcw%2BPCNNgTGwZS4IbLNGJ%2BTTHTnO1RDLIgPMJg%2B7bRPIJDImNVVONNALC4XwdqOOgS%2FbfGjdlJn4e1FXXxrWbPa%2Fc74UgZRMdTiUz5TgwbHCR%2BTa0f9VxqXil26UIgUIqrcvMOTzsMAGOqUB8YoEhsC0ztKCkDks2RfuYejRnwQs3WEsD1JOJM2bEmmsdSWtRRr%2F%2Bf%2B51TnOcyY9OPkar5n435c2cRXTzMqRJ%2FP9O22irXE4iy5rkG%2Br3bvPl41d%2B0ZuZnxTjBAZLeM%2FWuSFZ3oQUPvPN0iEtymEoF%2F0ztTpj86gB9zpnA2InGmmwQW5%2FG%2FCmQMisT43LHaGHA6M8aogX3C%2Bovq7gT7yu2akDB%2BW&X-Amz-Signature=d6b9650df70559cd0a97ce3d1b25431f96461c3eae21c70884d881f6c1580974&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656MBLCVM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmN6WW7l8qRueZP6b5YT4xfGmUQP04%2FU7shj0yE0pfqAiEAuryYKHQmHOzCRyPAC%2F20EJMh8khWPcLIQ3lt3ahdEyYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIdU6RdmZz0AY6Dn%2FSrcA0Hsw%2F3ghXnWpRXZtwky04U7dEgv%2BdyYYQWX8dJna2ZsMbw0%2BN97dpeDJ%2BHBOY6yyeCTvaInn0PdW%2FLiYW%2BtHI7sKJsDvuINSgqnzW6lw9GWQeSURNi4fQ90cdXggJWzvgIG1gkqMujAVsIASlV2CACpMEoI3mEVXWqrWr7uKJFX0D6G7wACjrF2Ouy0oAMDgURwxDheGrru8egvPPD5M4D7KVk6pn9aHKNjJJPzblHMOkq%2BpcxS%2B3uT5AdQVwKBp%2BC%2BKElgvTWRwPlzrTnlnWNvZAJCuFNR%2FHwz1ZpBke6KsiJKrF3UsuaUdgPow1V18JT%2FoHYDvKNwY8Me20U7p5tvoBZck5QcdGUGr%2BXX661XWJKyo6fUPVtWi2ocO4pW%2FFFfEN3xCgjPn9nRemwb3SlQukcExTmNr9HRyqPvR20aaqsqIXEfsQS3jZRPgAfki0xrPmtMJ2PnhSUas1XxmcLDrR2oKov0F26aAmgbfJbkScYreHDz8Ipeqcw%2BPCNNgTGwZS4IbLNGJ%2BTTHTnO1RDLIgPMJg%2B7bRPIJDImNVVONNALC4XwdqOOgS%2FbfGjdlJn4e1FXXxrWbPa%2Fc74UgZRMdTiUz5TgwbHCR%2BTa0f9VxqXil26UIgUIqrcvMOTzsMAGOqUB8YoEhsC0ztKCkDks2RfuYejRnwQs3WEsD1JOJM2bEmmsdSWtRRr%2F%2Bf%2B51TnOcyY9OPkar5n435c2cRXTzMqRJ%2FP9O22irXE4iy5rkG%2Br3bvPl41d%2B0ZuZnxTjBAZLeM%2FWuSFZ3oQUPvPN0iEtymEoF%2F0ztTpj86gB9zpnA2InGmmwQW5%2FG%2FCmQMisT43LHaGHA6M8aogX3C%2Bovq7gT7yu2akDB%2BW&X-Amz-Signature=cdc7a741a531650495782b88a2a5cd386c2267efa4c7af051285d91aa1992986&X-Amz-SignedHeaders=host&x-id=GetObject)

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
