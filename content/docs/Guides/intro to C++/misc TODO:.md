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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU4TE6R%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBB7r%2B9PkOYpDD0mEx00OdvH9sHL1fvHyfq2tD9uRhgwIgelD%2BWLOGyhkC4uMpFYPHXIonqqD2Ph77hHSHKiFYxIsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH9WvZ4Ant93Aoz3BCrcA4MLxVhfu%2FdERlc%2FJK6M99aex%2BHA47pBF0oKTlzYmiE%2BLxrbSzmt4TssqeTDLGd26iiczQXNBMWBszWu58QJn%2B8uuuHB7lPSKR6xvXSI8B5CIAdcPpoG%2BGygM95ILkHU3tY63V3%2BcNDKTwbJ2qW6NOguYYC4%2BVD%2F%2BiD%2Fm1aNIs6QwqCa%2F72pBEehEBDGWdWgvD%2BZ5Vn8g1Hd2tBTw81IQ6Hh7oFP46oCbcUWZ4pB9uqSy0AD4KCY6Goz8VwD8dEGDPsz64Qj9zsQPOpfcq2EzstvdPaucXh4iScwV3fRkqS6VuTgIWBhuNxJBIVhk%2B8nVZpWd7Qz%2B5Lw6JOKxNYHd8r7SCpLWtHIkxHa50pFYklHzW9LRHrZ5iidw5RWFS1KbB%2B4988jI4Fwsv5LkjkVVOxwlS4bbiliUn%2B8a7mx%2FLszvbiMQVRCr6%2B1FbS8jw1JNGpv%2FnNHx07WUHJLwWMtYqGDgcLX79Gw%2BptUvNKnCvdU%2BYqMzmG5VYkdpw%2FWZIyQwoexrjKbnwo4r72%2BsgjdSWNO3Yh0fFwktGsaPbB0df9BrXyJHOnkt5oTm2P16A%2FiJBwIyHTNb9FBbRbSIZkYhoDYsoa5dUkakchHO3MnNvRvI4%2FzAVarPnulmCVTMLu%2FtcAGOqUBrs%2BK8C%2BGy4wmIjkhW2CmAuZ%2B9JkhG7FNoIqky%2FSFKotzV0XJKdJK3phlsAAbUhlsvno%2FTZlfOIIXqEWrsaHBuqpr3BKZpqRcYKrGKPVS8YbkhyTXVAV2LHuFhHkQJ%2BMOpM21r%2Fe7%2F97eDwhSV%2FW6HUFw5GNRGzr0%2BwE0JW9%2FtUKA431%2FymFEA3J9SMb9sXQzvX6YB0MAGyM3mr1KlcPeHf%2Br3NYZ&X-Amz-Signature=7ccc0c65dff70b44f648320680be3372f88d90a772a9dc7112967ca4bac50e28&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOU4TE6R%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBB7r%2B9PkOYpDD0mEx00OdvH9sHL1fvHyfq2tD9uRhgwIgelD%2BWLOGyhkC4uMpFYPHXIonqqD2Ph77hHSHKiFYxIsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH9WvZ4Ant93Aoz3BCrcA4MLxVhfu%2FdERlc%2FJK6M99aex%2BHA47pBF0oKTlzYmiE%2BLxrbSzmt4TssqeTDLGd26iiczQXNBMWBszWu58QJn%2B8uuuHB7lPSKR6xvXSI8B5CIAdcPpoG%2BGygM95ILkHU3tY63V3%2BcNDKTwbJ2qW6NOguYYC4%2BVD%2F%2BiD%2Fm1aNIs6QwqCa%2F72pBEehEBDGWdWgvD%2BZ5Vn8g1Hd2tBTw81IQ6Hh7oFP46oCbcUWZ4pB9uqSy0AD4KCY6Goz8VwD8dEGDPsz64Qj9zsQPOpfcq2EzstvdPaucXh4iScwV3fRkqS6VuTgIWBhuNxJBIVhk%2B8nVZpWd7Qz%2B5Lw6JOKxNYHd8r7SCpLWtHIkxHa50pFYklHzW9LRHrZ5iidw5RWFS1KbB%2B4988jI4Fwsv5LkjkVVOxwlS4bbiliUn%2B8a7mx%2FLszvbiMQVRCr6%2B1FbS8jw1JNGpv%2FnNHx07WUHJLwWMtYqGDgcLX79Gw%2BptUvNKnCvdU%2BYqMzmG5VYkdpw%2FWZIyQwoexrjKbnwo4r72%2BsgjdSWNO3Yh0fFwktGsaPbB0df9BrXyJHOnkt5oTm2P16A%2FiJBwIyHTNb9FBbRbSIZkYhoDYsoa5dUkakchHO3MnNvRvI4%2FzAVarPnulmCVTMLu%2FtcAGOqUBrs%2BK8C%2BGy4wmIjkhW2CmAuZ%2B9JkhG7FNoIqky%2FSFKotzV0XJKdJK3phlsAAbUhlsvno%2FTZlfOIIXqEWrsaHBuqpr3BKZpqRcYKrGKPVS8YbkhyTXVAV2LHuFhHkQJ%2BMOpM21r%2Fe7%2F97eDwhSV%2FW6HUFw5GNRGzr0%2BwE0JW9%2FtUKA431%2FymFEA3J9SMb9sXQzvX6YB0MAGyM3mr1KlcPeHf%2Br3NYZ&X-Amz-Signature=780b853aac038ea44a9f3101fecfd61f0fcef2752b24e3fbde0a5d7c71d491a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
