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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOH5DUT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWGBaMBy6kfvOF0m5e6N8YxJMU0WxohkDe1iHenrGsvQIhAM7uR37rAlY0dPhGboI0ATMgotDOrGrSsifdiIw6cN4nKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgAfvvCfUMBamioloq3AMhR%2Fx8SlXzvPIiEhGJPTammNGWbmPgmxYB66A9BEtlc6s1LcwGGprI8TaL%2FkS%2BGGkF%2FVlS%2FLIvyGzT9aIC0%2BHJ%2BWW7%2FCw7gVRFT6zmeOpkAjb9GI%2FNzlnD%2B%2Fca9cSFrTENHd%2BGBlA3iQV1gwlulJLUHbO2d7qbfPJQgdeB8PvfWhHFCRzHAKFBG5ffhveoiYQlJgFOG7zhUAqro822%2FbFiKCkrrRFjdWHbSS0bqIp9a9wfwmG%2BuNb7RJXnSrtH1iTZGGW%2BN%2BPh3xEBt0mwxBCORXqFBn7JXq%2B5Idf4Xk%2BQZw0T%2F2lQ4Hejl24E6ua%2FqQp9xxU6I0BWBMucvuD1oPQB%2Bmy0eAJF2gVUNK%2BzYrCiOyw8FdI88Y40VtPtKeUlhVTXztrpkIt2ViDL2b%2Baa%2F1rF1JC6Y3qQ%2FSXW1bCpMSTeaCkoJ3aSAa2YXC3%2FpY9H64JtmMbrwhKBGJhnqvDCb5h2GdZaGPtIcjQPrw5Df24WtABqRb7PKmzNbCJ0yp44h7J7ZDA9mKdt1OZpD35Hy0qHwjuxPQo%2BsZ5p61s1wPWV7yR9i9ciNxwYEJpdYOn1tMFMzn%2BfNy8xWG1tcqBPJRAXJDPj7H0Rp6HkeKRQN2O59RTzobMEQR5negJizC9xJDDBjqkAWOReu2QLXbwnpc88JGneh3fOrE%2BBDM2x%2FU3ONSf9icSjkdTocggkzehILwMK5U1y1IzI3aINOcHv7SGq2EAUwzTaT28uGMZf2bEvVZZbVN484UnEUMNihdqNOGjUjjgANHG4AWk2rQfTSdLgLG014s42xlbw5CGdKvbCcwrtzxO92XmopJwFSvU6JkoON%2FdiuwzlqRjtW7FCee6Xu5Q0O85G832&X-Amz-Signature=c328627e925cb09abfe27ca9c00b9479282e5bca762f08b88a49b69c699e19a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOH5DUT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWGBaMBy6kfvOF0m5e6N8YxJMU0WxohkDe1iHenrGsvQIhAM7uR37rAlY0dPhGboI0ATMgotDOrGrSsifdiIw6cN4nKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgAfvvCfUMBamioloq3AMhR%2Fx8SlXzvPIiEhGJPTammNGWbmPgmxYB66A9BEtlc6s1LcwGGprI8TaL%2FkS%2BGGkF%2FVlS%2FLIvyGzT9aIC0%2BHJ%2BWW7%2FCw7gVRFT6zmeOpkAjb9GI%2FNzlnD%2B%2Fca9cSFrTENHd%2BGBlA3iQV1gwlulJLUHbO2d7qbfPJQgdeB8PvfWhHFCRzHAKFBG5ffhveoiYQlJgFOG7zhUAqro822%2FbFiKCkrrRFjdWHbSS0bqIp9a9wfwmG%2BuNb7RJXnSrtH1iTZGGW%2BN%2BPh3xEBt0mwxBCORXqFBn7JXq%2B5Idf4Xk%2BQZw0T%2F2lQ4Hejl24E6ua%2FqQp9xxU6I0BWBMucvuD1oPQB%2Bmy0eAJF2gVUNK%2BzYrCiOyw8FdI88Y40VtPtKeUlhVTXztrpkIt2ViDL2b%2Baa%2F1rF1JC6Y3qQ%2FSXW1bCpMSTeaCkoJ3aSAa2YXC3%2FpY9H64JtmMbrwhKBGJhnqvDCb5h2GdZaGPtIcjQPrw5Df24WtABqRb7PKmzNbCJ0yp44h7J7ZDA9mKdt1OZpD35Hy0qHwjuxPQo%2BsZ5p61s1wPWV7yR9i9ciNxwYEJpdYOn1tMFMzn%2BfNy8xWG1tcqBPJRAXJDPj7H0Rp6HkeKRQN2O59RTzobMEQR5negJizC9xJDDBjqkAWOReu2QLXbwnpc88JGneh3fOrE%2BBDM2x%2FU3ONSf9icSjkdTocggkzehILwMK5U1y1IzI3aINOcHv7SGq2EAUwzTaT28uGMZf2bEvVZZbVN484UnEUMNihdqNOGjUjjgANHG4AWk2rQfTSdLgLG014s42xlbw5CGdKvbCcwrtzxO92XmopJwFSvU6JkoON%2FdiuwzlqRjtW7FCee6Xu5Q0O85G832&X-Amz-Signature=440237760bbdf707142a55e44f6f0ae58895e6815a6e6acadefb39f2b3a6ac88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
