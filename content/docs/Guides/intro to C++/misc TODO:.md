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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXIFF2IS%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt3V3u2ndHSEM5Isy87QArsmUe2fSCgY2HFnPG4CLS2gIgRpAlhsVP6UXWhBaaVgUH%2B2%2FWyo8JAhWcnAYiwSwHXVIq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDPyFi8w%2Fe%2FlMi4EQWCrcA7woR7edsfll2OJUXYkZg61XmnmcwtyGH1UZBOaHyXBZBQ1Hyw6Xw1MTnnhh5lJC0MYO8jXS0oXSl8SZgNpCjBeEsVesomJfGfMvADXCecpVId0GC4r%2Be2fDUW9HifeBBsVnCm6Xf48McQwS3M%2Ff9RnuE1QRhMjPluEZlRSq8Uk6Fo%2Fx2LIk7L9uY5MU8VLjkPhVR%2F6jDS33Wa0lLGKyCLZBRkl3ezfDGc1qoQ%2F5nj%2BIUhj7JQuE4RQz2PXOnJljRQaRmJd%2BUXhijfTdmjDUajDMqMYD8uIS%2FAaX3dkGxE5yWSKS08ORlVEZWqCoN%2BhAJgPVKvtjZxXgfIRoMTtHl%2Fw4KYWcZXnQKa3c0vk4Co%2BKPXN9F8XdMP17Nx4s9z6DAKaB8DB1VJZsbwa%2FTY6zmpQJbjq2GKaIcKoVuTtMZcZ%2F3YVJ9zIQ9w28Nh2R2ZJ2AYu8qS8Cdx42ZgOdtYLKXj8Z9%2ByVqrjdldCqDeWC9H%2Bgn657brkXk5zwQyJ7iFb510GbDZxwVvu%2B80V77ZIVH3BeV0AbHSrcNG5304L%2BoENsbMv1VFjRl0WvB7EoZ5zLnQNlwtkYYF1zaN9uA9mEBvrrhOR2UqjN8WB73wvU9ezmcQXvlX5EdB6WRv6yMLXQydQGOqUBcmezOAheorujcfRA%2FulEUw4VWDBt8F2v8P9hVNlemdy1ii0ZyqpBZHKKJZPcvqCuUptDkoX00KYmhlJPXn15W%2FWvnw7r2TnnU9%2FUZU06GkxPvAhSEdvDUyLJaBmxBREuTCmKKCPD5O2nb0tiyjotHJeQBrtBmU79a3IJP9%2F4Bia8rPe%2BX9ZqWA6zBS%2Fb3SP6mUhE676%2BCGOzYIWnWF2TG5%2FWZNha&X-Amz-Signature=33c62a375251ca055eaf204ff5657544993a5bc63dab729a81e964d60a65c9ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXIFF2IS%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt3V3u2ndHSEM5Isy87QArsmUe2fSCgY2HFnPG4CLS2gIgRpAlhsVP6UXWhBaaVgUH%2B2%2FWyo8JAhWcnAYiwSwHXVIq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDPyFi8w%2Fe%2FlMi4EQWCrcA7woR7edsfll2OJUXYkZg61XmnmcwtyGH1UZBOaHyXBZBQ1Hyw6Xw1MTnnhh5lJC0MYO8jXS0oXSl8SZgNpCjBeEsVesomJfGfMvADXCecpVId0GC4r%2Be2fDUW9HifeBBsVnCm6Xf48McQwS3M%2Ff9RnuE1QRhMjPluEZlRSq8Uk6Fo%2Fx2LIk7L9uY5MU8VLjkPhVR%2F6jDS33Wa0lLGKyCLZBRkl3ezfDGc1qoQ%2F5nj%2BIUhj7JQuE4RQz2PXOnJljRQaRmJd%2BUXhijfTdmjDUajDMqMYD8uIS%2FAaX3dkGxE5yWSKS08ORlVEZWqCoN%2BhAJgPVKvtjZxXgfIRoMTtHl%2Fw4KYWcZXnQKa3c0vk4Co%2BKPXN9F8XdMP17Nx4s9z6DAKaB8DB1VJZsbwa%2FTY6zmpQJbjq2GKaIcKoVuTtMZcZ%2F3YVJ9zIQ9w28Nh2R2ZJ2AYu8qS8Cdx42ZgOdtYLKXj8Z9%2ByVqrjdldCqDeWC9H%2Bgn657brkXk5zwQyJ7iFb510GbDZxwVvu%2B80V77ZIVH3BeV0AbHSrcNG5304L%2BoENsbMv1VFjRl0WvB7EoZ5zLnQNlwtkYYF1zaN9uA9mEBvrrhOR2UqjN8WB73wvU9ezmcQXvlX5EdB6WRv6yMLXQydQGOqUBcmezOAheorujcfRA%2FulEUw4VWDBt8F2v8P9hVNlemdy1ii0ZyqpBZHKKJZPcvqCuUptDkoX00KYmhlJPXn15W%2FWvnw7r2TnnU9%2FUZU06GkxPvAhSEdvDUyLJaBmxBREuTCmKKCPD5O2nb0tiyjotHJeQBrtBmU79a3IJP9%2F4Bia8rPe%2BX9ZqWA6zBS%2Fb3SP6mUhE676%2BCGOzYIWnWF2TG5%2FWZNha&X-Amz-Signature=ef795fab58dbe50fc70f40d27af5fbe0973cade7233ebf14cb6655a107f6a0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
