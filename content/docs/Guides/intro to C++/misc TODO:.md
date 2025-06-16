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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SCYABLL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICF1Kmi2gEUVnocT42YmSCrxizYrcQ3KI6VpPNhCCNn9AiAAn5OpfVSNEKfqp%2FWmFp5xjEle9rH5wpejSZBC%2F7xhIir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMXc%2F46CkPg8qZ3i00KtwDMCLpm6LUdeYtN1zz2JKZWWUzIfax0Xv3t3cL%2FGLV89r2JhBotmibXNPbGsNgYQJVp9CqiVrgJGQw0FvM2PGlfbJviP%2BnJ9h3Y8eQQ6H0KGdfVTQea3U4Drk%2BlgOV3SOwr6GSGrsQzvczEdaqaFmPBESTOQ%2FTyxmlgXmoeBHH1mgbr9DwD0vPPUIJnCdJznrLm7Lxw4gDYo6XvluRDcESUhJCWSyvhtxQ%2BQyUR0DOejTiqJYIp8o8TrcP9Y%2FAVAcGax70Y99zYuVl8Pxm1Zqht1oZ0tyZk82dCFWJcEao%2BJQBlOmRL%2B39eJccT1haZiJoGJhXKw5dHENlBhkZxFQBHuSnnxcLJIJ67NQ7xNn6%2FPRk%2B3vx3ds4NBrlszl4Fdwl84PPYegmUXRYImqp7ie5PbxTK5PBXXqrrtn8fEUNCkFzdlXuc%2F0JjH0ueI9E8ns6eXa5S2Pt%2BEBUeQWC%2FPayp7%2B26EOYhfCSU99Yq9LZW4pfuVQI21Vsnh14NI7Q9qmeObANY0Hl0rDZ0aiNQyG18tFT3FR6vcSI8UKD41mo1eFN6xpQanH%2FAAodW3wexEmWR04yLJ1qUyd1i0JQ3uCm5yW%2ByTZ5wyMd9s1yzRW4UXEAnrmPHBDKaA3bhZ4wqq%2FBwgY6pgHsNtDNo6sJyAKno3S2xpteTy7kfICsrMqTJRIfu5TG%2BKEkD%2F7OOkHEjfSkNw3J5ZX4df6lALQFczFKplp6OMcwd0j99veuXKuihWw0fdrVHDR14JeWRhkQVXzJM%2FhV0lBMKYD8Ha2lI6cutQkHnfOJBBAZWj1iU0QsgoDqD3A4NtTkXsGGjt0Dhd1CYma%2BW3kd9Ru3NjUtxt7UZhZoYrzAscYqhtxd&X-Amz-Signature=bcb944f4da14acc5bb561d056413d4279802e5fc8c1fa1e66f6a7ae4577740df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SCYABLL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICF1Kmi2gEUVnocT42YmSCrxizYrcQ3KI6VpPNhCCNn9AiAAn5OpfVSNEKfqp%2FWmFp5xjEle9rH5wpejSZBC%2F7xhIir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMXc%2F46CkPg8qZ3i00KtwDMCLpm6LUdeYtN1zz2JKZWWUzIfax0Xv3t3cL%2FGLV89r2JhBotmibXNPbGsNgYQJVp9CqiVrgJGQw0FvM2PGlfbJviP%2BnJ9h3Y8eQQ6H0KGdfVTQea3U4Drk%2BlgOV3SOwr6GSGrsQzvczEdaqaFmPBESTOQ%2FTyxmlgXmoeBHH1mgbr9DwD0vPPUIJnCdJznrLm7Lxw4gDYo6XvluRDcESUhJCWSyvhtxQ%2BQyUR0DOejTiqJYIp8o8TrcP9Y%2FAVAcGax70Y99zYuVl8Pxm1Zqht1oZ0tyZk82dCFWJcEao%2BJQBlOmRL%2B39eJccT1haZiJoGJhXKw5dHENlBhkZxFQBHuSnnxcLJIJ67NQ7xNn6%2FPRk%2B3vx3ds4NBrlszl4Fdwl84PPYegmUXRYImqp7ie5PbxTK5PBXXqrrtn8fEUNCkFzdlXuc%2F0JjH0ueI9E8ns6eXa5S2Pt%2BEBUeQWC%2FPayp7%2B26EOYhfCSU99Yq9LZW4pfuVQI21Vsnh14NI7Q9qmeObANY0Hl0rDZ0aiNQyG18tFT3FR6vcSI8UKD41mo1eFN6xpQanH%2FAAodW3wexEmWR04yLJ1qUyd1i0JQ3uCm5yW%2ByTZ5wyMd9s1yzRW4UXEAnrmPHBDKaA3bhZ4wqq%2FBwgY6pgHsNtDNo6sJyAKno3S2xpteTy7kfICsrMqTJRIfu5TG%2BKEkD%2F7OOkHEjfSkNw3J5ZX4df6lALQFczFKplp6OMcwd0j99veuXKuihWw0fdrVHDR14JeWRhkQVXzJM%2FhV0lBMKYD8Ha2lI6cutQkHnfOJBBAZWj1iU0QsgoDqD3A4NtTkXsGGjt0Dhd1CYma%2BW3kd9Ru3NjUtxt7UZhZoYrzAscYqhtxd&X-Amz-Signature=6048dc44a5dfbb04a4da6e8c9c447fd07e3100d4d09ae349838e6c5b3d191749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
