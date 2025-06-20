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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642FOBBUB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUbul9GhDrh8ONSSC%2BOeir2K2XYNtH7SJeQiuJ0MIlgwIhAJlUlmNMmdcdHfjMEULgKVEJSGHIuyqJAF0f%2FZs%2Bm6zXKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVjePo%2B8PsXTYxgesq3ANKuppos%2BUh5WEuaj5HfwVumcoTrYvubhll6he10u5Y0rj2MmNrJtoVJSCp%2F5Zzgjwpuz9jqw%2FgSCnUlEp4Gvn63GDQED%2BiqoAQ97GVJA%2FbKR%2Ff1y%2BfGUfaid0sV8cSxSr1%2FTzVXnIR%2BUyrVV6ZBwyMwhvG%2FMD8Ix31OcxIa793Bv1jIXgIRB0vf615T5IkPF7ke5Fs%2F5FZ4KvZcTlti1852JWSra4jmWAnNfj6wEQtdhO8STn4PdF9H5Zr3j1Ff4NWVSRhzofef510dmvAyzbd%2F6Cs2vzWNS18gzYyXvfpjd%2F%2BCf8hbrNwRz9CSgHiZbz4vm%2BHD35oI5wjLwcw0WoN7rPf4TmCM9vWZukEF1VhoztJY%2FQ7S3I5kGwjvVTuYXxRQoLakzJmdzPjCWWg8JXwAVXhsolorfQ4IGjFPyM8BcaEIJv3zTf8zqDfM6x7pnnxa4Jiyf6GSV7M3SRGdGbAKPEistOXPsWl7I8RcOWoopg9sL06zUrfg7p37ZuhtpkADLoyYrh%2FO%2B5wO48lbMT2OEfTivyBKBgdLM4sMmMzF3hjcEr2TKzlwh3u8%2FyTVzzZqkIXI6cJtlJwwKocK0OUHOCeYvc%2BYtyg6NV1dBcza0hn6MU4VHHAk5D98DDjwNTCBjqkAX%2Fc8NoCs94l%2BH%2BlBiIHMIQTfCfnCyrKfeZruvaop5MSWwxK4Olh4KlGYLZkw7wzHWtsaXn29AxHn7N63Y4Njfi3klvRCFwWqI4SvMt4pbpL6vXdlAi83DZEcTXIuDeihlqYv5lInPVFiFnQ5sMNLVnT1WhKYLiu%2BvfA6WTMRbJyUHgSrXGQJqKTwQYqfN46XmFpFyLhaDfZJ7LbO582hvSpfrLY&X-Amz-Signature=65b7e7211e26ca73b2e157e6adeeef41ebee00ae66126d6e4ea740592cb34239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642FOBBUB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUbul9GhDrh8ONSSC%2BOeir2K2XYNtH7SJeQiuJ0MIlgwIhAJlUlmNMmdcdHfjMEULgKVEJSGHIuyqJAF0f%2FZs%2Bm6zXKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVjePo%2B8PsXTYxgesq3ANKuppos%2BUh5WEuaj5HfwVumcoTrYvubhll6he10u5Y0rj2MmNrJtoVJSCp%2F5Zzgjwpuz9jqw%2FgSCnUlEp4Gvn63GDQED%2BiqoAQ97GVJA%2FbKR%2Ff1y%2BfGUfaid0sV8cSxSr1%2FTzVXnIR%2BUyrVV6ZBwyMwhvG%2FMD8Ix31OcxIa793Bv1jIXgIRB0vf615T5IkPF7ke5Fs%2F5FZ4KvZcTlti1852JWSra4jmWAnNfj6wEQtdhO8STn4PdF9H5Zr3j1Ff4NWVSRhzofef510dmvAyzbd%2F6Cs2vzWNS18gzYyXvfpjd%2F%2BCf8hbrNwRz9CSgHiZbz4vm%2BHD35oI5wjLwcw0WoN7rPf4TmCM9vWZukEF1VhoztJY%2FQ7S3I5kGwjvVTuYXxRQoLakzJmdzPjCWWg8JXwAVXhsolorfQ4IGjFPyM8BcaEIJv3zTf8zqDfM6x7pnnxa4Jiyf6GSV7M3SRGdGbAKPEistOXPsWl7I8RcOWoopg9sL06zUrfg7p37ZuhtpkADLoyYrh%2FO%2B5wO48lbMT2OEfTivyBKBgdLM4sMmMzF3hjcEr2TKzlwh3u8%2FyTVzzZqkIXI6cJtlJwwKocK0OUHOCeYvc%2BYtyg6NV1dBcza0hn6MU4VHHAk5D98DDjwNTCBjqkAX%2Fc8NoCs94l%2BH%2BlBiIHMIQTfCfnCyrKfeZruvaop5MSWwxK4Olh4KlGYLZkw7wzHWtsaXn29AxHn7N63Y4Njfi3klvRCFwWqI4SvMt4pbpL6vXdlAi83DZEcTXIuDeihlqYv5lInPVFiFnQ5sMNLVnT1WhKYLiu%2BvfA6WTMRbJyUHgSrXGQJqKTwQYqfN46XmFpFyLhaDfZJ7LbO582hvSpfrLY&X-Amz-Signature=495234e488a93f70661358ea45c684069c5dd41a539bb4dfe7b2a88b550b410f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
