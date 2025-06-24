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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIHSVF6D%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEx48%2FHGKXEaTMn8QvTqlt8pTXdpBl6w00Ss%2BYA45NuVAiAzlzGdSSrwMl4CCqVJnC5tbTLqiDWkt5IkOX8iN1POnyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMGEpetEmArBeVv%2F6vKtwDJH9WHl0e%2Bh%2B6DELBP7TEC%2BSaTpjVMW738jChXT6bZLsl%2FkC%2FBKkqzcKBAhiKt5ZCns%2B2DMCPktrgMXaAMahgS3hsL8PvpjhwKFO20Yn4dxxrePMOSc69LzXjTtCmxrrqBiKuGk9jAK%2Fi6HfIosJmz6Y1krgfY%2BP4xpV2zbXJqNL6BZHqVuGKpPbO3J0ow1fmwfq%2F%2BwHOZFj%2FcW%2F9ANV5n2TvIx3eUFAc0SCl43jDSPsfj2W3i1SjHoO1LiA%2FJwI0YlaMXmATryKTtsLuAyTcJ2h7tOSqXoP1Lrl%2BFVlEZVJBVcsulEPSAGaLdRVpY9e79k9XzTt7aQ4I1R3lNvur%2Bhm%2B0s%2FduXTMt5G4yLTqvd7L6ETSgoH77NlSR3AyO%2FBplFcYU17LZynDElDQ1hpH4HAmIIL0cp03mUXSbvLMiUBFxhkKGaITLUpUsnO4DCBj01NEMjuRI7e0bu9qEjB31sGHgQ4oFy5IrfW%2FfDdnCfU%2BuF1WCb2mnMDZqmwRzomSjC3ulKUf1NcSGayLca20q1doLsY%2B7V8mJeS%2FwK3%2BCP%2Bk5jlm4sIk6RmLfBRn%2BsZw%2ByBEvDDbMRCgvRh6rSQP2jGU3UXBxv8odd%2FOa8Gf5zlNKrwrYmUtG2GWUtswhbLpwgY6pgFBQrfW8R0G7LlibttW7G7i3DPMZdF2nuTzQwVo5hgpnPfFzwmqqNkFeLl0RHTboDpgAAT2xMUR9NnlxG5l8cGNjBt3hkpTl5eHoTEhbRiGAknwSK%2F7u5IRFG%2FdP3FEaDAfZSGTtwYht8Rf0ulo81noa%2F7pOgPH6ViWo7aPABO7gCTiCKlAMrpMulL0Yo9mJEPIpzDjKtKCAb7ZiWbzTABMFKqopPrm&X-Amz-Signature=e5511a7d79dfabf4d84d9ba1c376d8ef7981d3d90d8bf0597eb10868009643a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIHSVF6D%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEx48%2FHGKXEaTMn8QvTqlt8pTXdpBl6w00Ss%2BYA45NuVAiAzlzGdSSrwMl4CCqVJnC5tbTLqiDWkt5IkOX8iN1POnyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMGEpetEmArBeVv%2F6vKtwDJH9WHl0e%2Bh%2B6DELBP7TEC%2BSaTpjVMW738jChXT6bZLsl%2FkC%2FBKkqzcKBAhiKt5ZCns%2B2DMCPktrgMXaAMahgS3hsL8PvpjhwKFO20Yn4dxxrePMOSc69LzXjTtCmxrrqBiKuGk9jAK%2Fi6HfIosJmz6Y1krgfY%2BP4xpV2zbXJqNL6BZHqVuGKpPbO3J0ow1fmwfq%2F%2BwHOZFj%2FcW%2F9ANV5n2TvIx3eUFAc0SCl43jDSPsfj2W3i1SjHoO1LiA%2FJwI0YlaMXmATryKTtsLuAyTcJ2h7tOSqXoP1Lrl%2BFVlEZVJBVcsulEPSAGaLdRVpY9e79k9XzTt7aQ4I1R3lNvur%2Bhm%2B0s%2FduXTMt5G4yLTqvd7L6ETSgoH77NlSR3AyO%2FBplFcYU17LZynDElDQ1hpH4HAmIIL0cp03mUXSbvLMiUBFxhkKGaITLUpUsnO4DCBj01NEMjuRI7e0bu9qEjB31sGHgQ4oFy5IrfW%2FfDdnCfU%2BuF1WCb2mnMDZqmwRzomSjC3ulKUf1NcSGayLca20q1doLsY%2B7V8mJeS%2FwK3%2BCP%2Bk5jlm4sIk6RmLfBRn%2BsZw%2ByBEvDDbMRCgvRh6rSQP2jGU3UXBxv8odd%2FOa8Gf5zlNKrwrYmUtG2GWUtswhbLpwgY6pgFBQrfW8R0G7LlibttW7G7i3DPMZdF2nuTzQwVo5hgpnPfFzwmqqNkFeLl0RHTboDpgAAT2xMUR9NnlxG5l8cGNjBt3hkpTl5eHoTEhbRiGAknwSK%2F7u5IRFG%2FdP3FEaDAfZSGTtwYht8Rf0ulo81noa%2F7pOgPH6ViWo7aPABO7gCTiCKlAMrpMulL0Yo9mJEPIpzDjKtKCAb7ZiWbzTABMFKqopPrm&X-Amz-Signature=a73579d9eb55bfb4ee4817563e6f1d59dd9841fd875dc5bac86a37c11252297b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
