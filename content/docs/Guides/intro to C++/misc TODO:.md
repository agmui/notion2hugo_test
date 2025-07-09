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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4T6UIDI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiqGz5kKAUkp5S2s%2FABDMj4PcLmWHq9IOfWEoinI9r9AiAZKTHUZ0oErHsmPSlViuz5u22Z9p5KRj19wcvNKSq9YyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbrVJyZcfMgJaJo23KtwDBupfgtrYhVxXRA9RFPmFm2N5Z0Id2vvbD6SxD4Xw0nycs4RAGKI2utdPNlWXwvaZfJ9P2gOdT2NWJ8yVslkQCKqx6VKjmZbcyfewSBAbfeEK%2FckmXN4QIeY%2FDR4QSW2L47Rm9lmELOMNUsp0DOu%2Bgk%2BgeBvRnvuJA0ILHBNrUaItNrBbB84tM2V%2BENVScdyFMhP4LfmokKvC6AnQXPim3ONVsoH00HjMuUKrNgxAohX1oZZGgJpaVROnHi2tSNgYMAdq6cJoYvOtRQpX7AeEKFMR0oLeqs1YW%2FfUVaLxSVuCiM3GZuCg3VUMvSwvY%2FgRcNDu4aCEkES1VF9%2BbJ3pmgEAnXKQPA%2FlKKhbD9p9b7WTl%2BERufijND3MJeEYX3fwEingA%2FjTbwRgIxRmfavCvkg%2Bvc62Pd3ovJVNUpzIVol4EH7X6jXiYT%2BsSNakhvm2cGVpotZrd0HL6PgJGzBUuHdnztRhRPZ%2BvhYnCG%2BFBG0roCVfDlG%2B3URqn2Tx0prKk9BRjGA8jvFaHVZk3Ge2WYVoQAu8IlFykjGPbQDk3R7ap26LLK7iBbwMoQcMe90JCmYbq6vhCxn8%2B4mUkKDv12Hdr33tCctaqo1JGrRqP3u%2BQYLuZfftpHeXLmUwlZi6wwY6pgErW9srbm068VBoJCDfrLE9usWdBiEd%2B%2B%2BpqWcZw83McxajF7ISHdXb%2B8DzNYmt3WY%2BGuly14aTJoSBlaJNZq%2FksVyzcClMQXTcOTk7tWYA6HQYNxd%2FCSRiMcGP9yzv76wI1JV7o0jB93urguH2W5OkgagFi45EpgtQPtXRCSD8PrH2DPpSSFvuOgNwyYna49R3rK27rTZHqgrZHWRiyrqmS24N6C%2FF&X-Amz-Signature=dde36e45e5bc530ea70797624842aa98415711348caee3a64549b33e463c7d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4T6UIDI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiqGz5kKAUkp5S2s%2FABDMj4PcLmWHq9IOfWEoinI9r9AiAZKTHUZ0oErHsmPSlViuz5u22Z9p5KRj19wcvNKSq9YyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbrVJyZcfMgJaJo23KtwDBupfgtrYhVxXRA9RFPmFm2N5Z0Id2vvbD6SxD4Xw0nycs4RAGKI2utdPNlWXwvaZfJ9P2gOdT2NWJ8yVslkQCKqx6VKjmZbcyfewSBAbfeEK%2FckmXN4QIeY%2FDR4QSW2L47Rm9lmELOMNUsp0DOu%2Bgk%2BgeBvRnvuJA0ILHBNrUaItNrBbB84tM2V%2BENVScdyFMhP4LfmokKvC6AnQXPim3ONVsoH00HjMuUKrNgxAohX1oZZGgJpaVROnHi2tSNgYMAdq6cJoYvOtRQpX7AeEKFMR0oLeqs1YW%2FfUVaLxSVuCiM3GZuCg3VUMvSwvY%2FgRcNDu4aCEkES1VF9%2BbJ3pmgEAnXKQPA%2FlKKhbD9p9b7WTl%2BERufijND3MJeEYX3fwEingA%2FjTbwRgIxRmfavCvkg%2Bvc62Pd3ovJVNUpzIVol4EH7X6jXiYT%2BsSNakhvm2cGVpotZrd0HL6PgJGzBUuHdnztRhRPZ%2BvhYnCG%2BFBG0roCVfDlG%2B3URqn2Tx0prKk9BRjGA8jvFaHVZk3Ge2WYVoQAu8IlFykjGPbQDk3R7ap26LLK7iBbwMoQcMe90JCmYbq6vhCxn8%2B4mUkKDv12Hdr33tCctaqo1JGrRqP3u%2BQYLuZfftpHeXLmUwlZi6wwY6pgErW9srbm068VBoJCDfrLE9usWdBiEd%2B%2B%2BpqWcZw83McxajF7ISHdXb%2B8DzNYmt3WY%2BGuly14aTJoSBlaJNZq%2FksVyzcClMQXTcOTk7tWYA6HQYNxd%2FCSRiMcGP9yzv76wI1JV7o0jB93urguH2W5OkgagFi45EpgtQPtXRCSD8PrH2DPpSSFvuOgNwyYna49R3rK27rTZHqgrZHWRiyrqmS24N6C%2FF&X-Amz-Signature=2fa9b5aaae1f02f81af4a0939f07e4c2d853d03ba4d189b9d7633e3f06cbd0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
