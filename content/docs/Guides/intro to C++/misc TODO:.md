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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZI2OWL5%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYigNoejVlJwHXhBx1I4DiP8yUjlW6uu2R6jnKF%2BjlAiEAhbg05iVS%2F3VtTt3zhbfpqJKngofUnIagPuWru5YTUbQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLZuLIEaija0rFg72yrcAxvQxX26ZKEBQLzqZQ6n9s%2FYQMQCaO4ozkUa00sCKm8Ib4UHtLSfLLzFWdaTnMeo%2FmEz3uMSjQJb4WN85gzVOXdS2y3UHsZ5YXqf2zJHWkxN2j%2BupLdXcXJKWWiYL6HbjqoxX54DD3vxU1Hn3L54IUqHAadt7uXX4njc4Cp9PGsTMVBMysWK87emgSO3EzH9yD5rs1VuYM0hsatBZf8I7odDaC7Ad3jWz7NMtuBxwCCvlvoEfMNqse7fiEiWRCW6nYU2kg7m5P4KiBYhw2qKDXYvZoDtE%2BAEl52VkOw1uoXjEFC0ckPPUpn7PB4wfDUfzGdugn5NJtnNRFETV4F6QECICPIpXiDJqGob5j5Nt7fRT5Pb%2FoLDjLh5B8it55V4ca7nTqohpiBO7p8vesflntBkxTpXXVH3ezdgrg2s9HA03MDtFdn%2Fspwzej41rQjzVRJndj%2FU7qYluAFrfpfO%2BEwKHyWRuU7PXiLEtb6w%2F09%2Bcac%2FiUF4ljUMQBLO1F5XI8yihMHI4Juzw%2F2dQfhM9GqAsomV5KEgvcbUr1tDh%2BvuWJ9xm4x1rNvWT7ewHmMgBfId9hgdNaDMTPdt1%2Fq66tGdl8OK28ka17ZiErDKxPdjp1Q4ypys3bYdV0okMPCCvsAGOqUB1I2D%2FC3XBTGihh5qsYfsmXOSjAOOwjq5BAvX%2FOSi00QYoWUDPvoRlPntkCpNj63xPlnOqD7DpY%2F4d5JB4MuBSUBVr4cp%2FMV7eB8nMXgWTM5SFG56hGjEgaI%2Fyu5X2Rj%2FqhcHZENPDkniHI%2Fqqat%2Fw15DtWXoxfMGtqhxLUP7dZCwlyoosjzKuwT2nrsxSLZTOvj3hvc%2BtyWyj46CdqvMkeiqdAaE&X-Amz-Signature=e31f291abd79f9e3cd0c67c9af263ea0db450bdd9e629728010f77e847597546&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZI2OWL5%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYigNoejVlJwHXhBx1I4DiP8yUjlW6uu2R6jnKF%2BjlAiEAhbg05iVS%2F3VtTt3zhbfpqJKngofUnIagPuWru5YTUbQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLZuLIEaija0rFg72yrcAxvQxX26ZKEBQLzqZQ6n9s%2FYQMQCaO4ozkUa00sCKm8Ib4UHtLSfLLzFWdaTnMeo%2FmEz3uMSjQJb4WN85gzVOXdS2y3UHsZ5YXqf2zJHWkxN2j%2BupLdXcXJKWWiYL6HbjqoxX54DD3vxU1Hn3L54IUqHAadt7uXX4njc4Cp9PGsTMVBMysWK87emgSO3EzH9yD5rs1VuYM0hsatBZf8I7odDaC7Ad3jWz7NMtuBxwCCvlvoEfMNqse7fiEiWRCW6nYU2kg7m5P4KiBYhw2qKDXYvZoDtE%2BAEl52VkOw1uoXjEFC0ckPPUpn7PB4wfDUfzGdugn5NJtnNRFETV4F6QECICPIpXiDJqGob5j5Nt7fRT5Pb%2FoLDjLh5B8it55V4ca7nTqohpiBO7p8vesflntBkxTpXXVH3ezdgrg2s9HA03MDtFdn%2Fspwzej41rQjzVRJndj%2FU7qYluAFrfpfO%2BEwKHyWRuU7PXiLEtb6w%2F09%2Bcac%2FiUF4ljUMQBLO1F5XI8yihMHI4Juzw%2F2dQfhM9GqAsomV5KEgvcbUr1tDh%2BvuWJ9xm4x1rNvWT7ewHmMgBfId9hgdNaDMTPdt1%2Fq66tGdl8OK28ka17ZiErDKxPdjp1Q4ypys3bYdV0okMPCCvsAGOqUB1I2D%2FC3XBTGihh5qsYfsmXOSjAOOwjq5BAvX%2FOSi00QYoWUDPvoRlPntkCpNj63xPlnOqD7DpY%2F4d5JB4MuBSUBVr4cp%2FMV7eB8nMXgWTM5SFG56hGjEgaI%2Fyu5X2Rj%2FqhcHZENPDkniHI%2Fqqat%2Fw15DtWXoxfMGtqhxLUP7dZCwlyoosjzKuwT2nrsxSLZTOvj3hvc%2BtyWyj46CdqvMkeiqdAaE&X-Amz-Signature=f354301ca306b2453d51fe98a8e87dff376d30a1afa4ab51db1099e3972130d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
