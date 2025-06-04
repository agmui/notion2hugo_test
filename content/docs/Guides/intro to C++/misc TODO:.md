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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DM3QDOD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEs4iLQNDOkgHVkHXrV1yzvBO2Cxfwa3gD5o%2BBubR%2F8uAiA1ER7hS40RCM2RhVuT7BlxIVdlfgJ9%2FdVqO4MnBhwY6Sr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM8MXqgdFZ91sumU3oKtwDkAbHL5v8Mz91q6tSmDvWh5bzu2vu2fYd72WL5X6rUAdR4vKRpNbWUCe3ZLw6nz6RzMdfMoB46Q%2FqAoM80Im5HRQp5B%2Fm5m2cz%2FlZgHJg%2FTQ9HRVbCUYy%2BLVeTeY%2Bc9Av0khD%2BVx0g4v56ditfqxEEAcGw%2FQ2FLzYWuQWJPBT4QbOVDOmGks2%2BUunH%2Bt9iLXWSk%2FwiedKXfbSJuRLmW5ZlYkmFw4RtLcWaX4RcRvGn8OXDJwhfXy83TND8GUsLmpjpcMs3ma%2BBF6%2BZiT04ktoMUmnjnQoRpzOhNtvWOpZM8T4HkL0B50vs%2FiZPaJSQ5%2F2jzeUAA4V1vZxynk8o%2Ffyu%2FA9K81VgViC4vbjHgcbw93vRWDSr13DVkf%2F0%2FFsyZV1gz4im6Gyi3ma4jqmQKzgozzYb5ojhxHu7UXC5uMX6n3fE1SSJy1OyAR822AHC8dBpTT0C3ZMYNjF0ygbobtfAoj2MXQADF9JT55IgbOs3Db69n5XbRiLu2dWnjIL%2BHtyyRC4TIWizPes6FDaWA1PUTbwQ00v6jmOw%2BDIt%2FaBLq12%2FKqCh8zIE6RBrbllQiIZQ6Ls7s1Nuqx837sOcfGgr3bqHP%2BRBy%2FFd3A%2B8ktk3K6eJJl%2FYE5RqWLgx4wwyIn%2FwQY6pgGJshhKpdSYe%2FfOpv0LN8ybg6zFGJ%2FHvEqdjACPpoVtN5%2F0tToBjPQbPzLhE5XKjIg69GkUHiGEMN9ryZpRai7DMiAJmpViSk5vfXXe9A1U6hrCwjBBTu%2Bl6%2FV81kRF0xMVQxtwtS4M4Jc1n2exIpnVpwivqyOHpgtaKGp74mZVd6GP8v8qRV6RBFx2IC%2BSdGI5Uub4aHZEsrd5%2FVfinqVNugJeg3VO&X-Amz-Signature=f0ac880005c0a84caf2f1341c7964b34473b1e416b1aa5c691fc2b42fa1f547b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DM3QDOD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIEs4iLQNDOkgHVkHXrV1yzvBO2Cxfwa3gD5o%2BBubR%2F8uAiA1ER7hS40RCM2RhVuT7BlxIVdlfgJ9%2FdVqO4MnBhwY6Sr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM8MXqgdFZ91sumU3oKtwDkAbHL5v8Mz91q6tSmDvWh5bzu2vu2fYd72WL5X6rUAdR4vKRpNbWUCe3ZLw6nz6RzMdfMoB46Q%2FqAoM80Im5HRQp5B%2Fm5m2cz%2FlZgHJg%2FTQ9HRVbCUYy%2BLVeTeY%2Bc9Av0khD%2BVx0g4v56ditfqxEEAcGw%2FQ2FLzYWuQWJPBT4QbOVDOmGks2%2BUunH%2Bt9iLXWSk%2FwiedKXfbSJuRLmW5ZlYkmFw4RtLcWaX4RcRvGn8OXDJwhfXy83TND8GUsLmpjpcMs3ma%2BBF6%2BZiT04ktoMUmnjnQoRpzOhNtvWOpZM8T4HkL0B50vs%2FiZPaJSQ5%2F2jzeUAA4V1vZxynk8o%2Ffyu%2FA9K81VgViC4vbjHgcbw93vRWDSr13DVkf%2F0%2FFsyZV1gz4im6Gyi3ma4jqmQKzgozzYb5ojhxHu7UXC5uMX6n3fE1SSJy1OyAR822AHC8dBpTT0C3ZMYNjF0ygbobtfAoj2MXQADF9JT55IgbOs3Db69n5XbRiLu2dWnjIL%2BHtyyRC4TIWizPes6FDaWA1PUTbwQ00v6jmOw%2BDIt%2FaBLq12%2FKqCh8zIE6RBrbllQiIZQ6Ls7s1Nuqx837sOcfGgr3bqHP%2BRBy%2FFd3A%2B8ktk3K6eJJl%2FYE5RqWLgx4wwyIn%2FwQY6pgGJshhKpdSYe%2FfOpv0LN8ybg6zFGJ%2FHvEqdjACPpoVtN5%2F0tToBjPQbPzLhE5XKjIg69GkUHiGEMN9ryZpRai7DMiAJmpViSk5vfXXe9A1U6hrCwjBBTu%2Bl6%2FV81kRF0xMVQxtwtS4M4Jc1n2exIpnVpwivqyOHpgtaKGp74mZVd6GP8v8qRV6RBFx2IC%2BSdGI5Uub4aHZEsrd5%2FVfinqVNugJeg3VO&X-Amz-Signature=3cf387f27f315f03db723b130571c216f6d37a513b460adc0514c3c271be6a09&X-Amz-SignedHeaders=host&x-id=GetObject)

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
