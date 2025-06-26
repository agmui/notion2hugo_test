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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKIA5JD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDbXtgmy8mSTISp%2Bet%2BOaWuRME10p%2Fw3vWs3bpTd4%2FE3AiBJogeb3Pzl%2BkpXDZhbyqaXJHpxTjxiFIjMfh528d7X3yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMOvCq1%2F45Jy5IhPOSKtwDAtB5z121RWpSMlsWnWnOpaVaqGlmhlVIlOeL2xHlE34VacKfa76BOmumfQBmcFYiMhZUVWL91SYO7lUJcFZwmexAvM2rCSjoZWtZbVJKLmdTP%2BpJyzGs%2FfkAXWmKI5Dz2LV22WZpVftYUy8ZKdNQ7fv%2BLMnrfIlNTEhE1cOMDh7QP80wdaTzea2v9YnoZO%2FzjTwNwB%2BMTCgJ3Kmh7VJ5OD%2FUoDZxqKMXXbZBHEeF8Z8Irh%2FvGjwiLSqGJYCcn2KVrK1W%2Fyo0SB7eKXcVipgpoLSaGLTV%2FaVyzXsnyhg7Nxs1UZJnK6uD548G2TzuixdQn75ZVJ5MxFFEYv3U%2FnWWW3159%2F7AgWH0M3FsmBI2N6XLEAg6BR6fcYh9Ohs1U1s87Z0TsTcdqFEuoFQ8WGgYML%2Bh5z9WgmLRgcHvZH0OWU9lXxt2LcJsQFdLJqqx%2Btl1oI81rnh4W1Lw52c%2F2xVi%2Bau5OysTEyBh4VQ10Zfqz7HH6Jz%2BUVq%2FhMIaRIXNkA%2BOcCyCDrsTwRW0GrBqkRAbrV16FENty1acj6nTWTE8wSWgiLwIMAsWjQMhhk24b9sGLpF8vRYfiaFGsqEmvAgUEIk9bZuLxlM6vt8qmw2VqGBftrsURQEA397DABMwopb0wgY6pgGAxOkAg6aV0eD23ogfDMp6tXwqmQRQXdJjnFO5dD9ZU2f5sUFfMHaikwLcDy491THnhAAYid9NgYjN6PvXQW3TubW%2FgjtAz5drEohdL%2B9yn%2FkxTQFMmrlGpK5xcmp00B2S%2FMrL1PCU1FtZx%2FUUasu9%2BDcrRxEt0yb1qPO44DN1W0nnX9SCrr3FAIV5ZJMovTcnbMCgKLKMZymk0SDzMqb7gY2KkqDV&X-Amz-Signature=b19f39310179c2cc23a6fb52e436e059257d270380085b88a687386f3f4e57ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKIA5JD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDbXtgmy8mSTISp%2Bet%2BOaWuRME10p%2Fw3vWs3bpTd4%2FE3AiBJogeb3Pzl%2BkpXDZhbyqaXJHpxTjxiFIjMfh528d7X3yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMOvCq1%2F45Jy5IhPOSKtwDAtB5z121RWpSMlsWnWnOpaVaqGlmhlVIlOeL2xHlE34VacKfa76BOmumfQBmcFYiMhZUVWL91SYO7lUJcFZwmexAvM2rCSjoZWtZbVJKLmdTP%2BpJyzGs%2FfkAXWmKI5Dz2LV22WZpVftYUy8ZKdNQ7fv%2BLMnrfIlNTEhE1cOMDh7QP80wdaTzea2v9YnoZO%2FzjTwNwB%2BMTCgJ3Kmh7VJ5OD%2FUoDZxqKMXXbZBHEeF8Z8Irh%2FvGjwiLSqGJYCcn2KVrK1W%2Fyo0SB7eKXcVipgpoLSaGLTV%2FaVyzXsnyhg7Nxs1UZJnK6uD548G2TzuixdQn75ZVJ5MxFFEYv3U%2FnWWW3159%2F7AgWH0M3FsmBI2N6XLEAg6BR6fcYh9Ohs1U1s87Z0TsTcdqFEuoFQ8WGgYML%2Bh5z9WgmLRgcHvZH0OWU9lXxt2LcJsQFdLJqqx%2Btl1oI81rnh4W1Lw52c%2F2xVi%2Bau5OysTEyBh4VQ10Zfqz7HH6Jz%2BUVq%2FhMIaRIXNkA%2BOcCyCDrsTwRW0GrBqkRAbrV16FENty1acj6nTWTE8wSWgiLwIMAsWjQMhhk24b9sGLpF8vRYfiaFGsqEmvAgUEIk9bZuLxlM6vt8qmw2VqGBftrsURQEA397DABMwopb0wgY6pgGAxOkAg6aV0eD23ogfDMp6tXwqmQRQXdJjnFO5dD9ZU2f5sUFfMHaikwLcDy491THnhAAYid9NgYjN6PvXQW3TubW%2FgjtAz5drEohdL%2B9yn%2FkxTQFMmrlGpK5xcmp00B2S%2FMrL1PCU1FtZx%2FUUasu9%2BDcrRxEt0yb1qPO44DN1W0nnX9SCrr3FAIV5ZJMovTcnbMCgKLKMZymk0SDzMqb7gY2KkqDV&X-Amz-Signature=2c5756eb0ff50a52d668670d1ec6e092a7e63aea00aacf87c05de955028b3095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
