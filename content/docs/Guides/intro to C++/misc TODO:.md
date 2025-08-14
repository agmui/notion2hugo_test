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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKJT4IY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6eX7KsBYCCsDzfyev%2F855HdYLh8RSJMBI6FZL2MQbFAiAcHp0pGaM%2FtJZnvY1P1l5iRHDdaY%2BoeOxjgMBSESGnIyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMDdzS9PT9JilvaHusKtwDdz1A1lFiddi3tMKMKiY0AeUkVhBZ%2F3JnGoQzoLeilHrLGEz2q4dNgIlUqgIF%2BPx%2B7h%2Fj3r3vPxTilh7CI%2B4GanhbJ0l6e0%2B68N1qpmcE%2F2E7Aq4dQYBXM6YrJY1%2BFMuVmvXRT%2FGWJTLiXoJudr1tEBzidxnM9OQOaTYSqVsVxMMvCaQ2LCyXgtjQSQj4J%2Bn69F3NusMCn9LDiGPBOf2P%2BDEkKOKpHPC3WbRHseDT9nSWMdxKTBHlsO%2BTE2otOHCFPgzepBH%2BMnbWBHMpg%2BD1fYk82FUVbyAuT2ECaub%2B4bop4vtpabFxK3sUxKWyU7mqxN6eZzyVSOJ54YOtjTBURNr7PEqzveOQNNmGh6C%2BYas5RA7P3mJM9Tu8iFtZi6JQq%2FUgmkzAH39D%2FYUT4f9wnYCrZPHZb9wRy0S2sxnCUUAwcP79MckOenouCt9fhUlNsE8Q55jWVgfb85U0Q2lyompJt6yeHXhqOpMpN15axbEUVBbva3X50vQiWvy164tSy8ykh7HAfE4D0tiOn5qmIxcSbxI6RxzqNSEJCc7DLl%2FeIgZqD50dFPexNiWAMMBLviVROc0rqEnMthnZPJ91mZgtMX%2FFDw8at9gNtoOWzMpQw99lrl1nB%2Fw3gtMw2IT3xAY6pgGjOF9XBbAdn%2FRQ1GD3hTmCDeM7zD1xGjPM6HojjaEaRp4ICIny4greKySkq5iKJdvfViUGHgWt7xIrgqDvwG7eLCALgTmGXyL%2FoFdo%2F6%2BFP84OA2xN%2BHOwRdvMSmfpbglHFKM2KZMZFPm%2BNrcofYc3oO1az0r4MQLkFb1NMWTx4YAXyHCSg8ISDKB2ZEJoTePaCc%2ByFX3ebPi41%2BiX5sCFaCedcFsh&X-Amz-Signature=f56b895eebb88a99586938648be79df014057b1c4d6e7b14c4688d538bd841b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKJT4IY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6eX7KsBYCCsDzfyev%2F855HdYLh8RSJMBI6FZL2MQbFAiAcHp0pGaM%2FtJZnvY1P1l5iRHDdaY%2BoeOxjgMBSESGnIyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMDdzS9PT9JilvaHusKtwDdz1A1lFiddi3tMKMKiY0AeUkVhBZ%2F3JnGoQzoLeilHrLGEz2q4dNgIlUqgIF%2BPx%2B7h%2Fj3r3vPxTilh7CI%2B4GanhbJ0l6e0%2B68N1qpmcE%2F2E7Aq4dQYBXM6YrJY1%2BFMuVmvXRT%2FGWJTLiXoJudr1tEBzidxnM9OQOaTYSqVsVxMMvCaQ2LCyXgtjQSQj4J%2Bn69F3NusMCn9LDiGPBOf2P%2BDEkKOKpHPC3WbRHseDT9nSWMdxKTBHlsO%2BTE2otOHCFPgzepBH%2BMnbWBHMpg%2BD1fYk82FUVbyAuT2ECaub%2B4bop4vtpabFxK3sUxKWyU7mqxN6eZzyVSOJ54YOtjTBURNr7PEqzveOQNNmGh6C%2BYas5RA7P3mJM9Tu8iFtZi6JQq%2FUgmkzAH39D%2FYUT4f9wnYCrZPHZb9wRy0S2sxnCUUAwcP79MckOenouCt9fhUlNsE8Q55jWVgfb85U0Q2lyompJt6yeHXhqOpMpN15axbEUVBbva3X50vQiWvy164tSy8ykh7HAfE4D0tiOn5qmIxcSbxI6RxzqNSEJCc7DLl%2FeIgZqD50dFPexNiWAMMBLviVROc0rqEnMthnZPJ91mZgtMX%2FFDw8at9gNtoOWzMpQw99lrl1nB%2Fw3gtMw2IT3xAY6pgGjOF9XBbAdn%2FRQ1GD3hTmCDeM7zD1xGjPM6HojjaEaRp4ICIny4greKySkq5iKJdvfViUGHgWt7xIrgqDvwG7eLCALgTmGXyL%2FoFdo%2F6%2BFP84OA2xN%2BHOwRdvMSmfpbglHFKM2KZMZFPm%2BNrcofYc3oO1az0r4MQLkFb1NMWTx4YAXyHCSg8ISDKB2ZEJoTePaCc%2ByFX3ebPi41%2BiX5sCFaCedcFsh&X-Amz-Signature=df5487cb8213b7f5cecae8a27cd33036321d8904bbc9c962fd09d96318d43f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
