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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3XNHIL5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBaQpwItL0UKBzraSDQk4mq6oIkrJW%2FNaIsBFV2NV%2BCfAiAv%2BFiBXYm0Yi1FNi83p5%2BOMDKAyUUPLcJcpTUqBSrQZSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMmhEhgBx%2Bd2SdK3XyKtwDTrhV218KJ5xGzgU1fxKW2%2F4UhOmN38mmuC45kyBhwZU5HCryZEjkO%2FS17bBmy36FqkNLYh229S0yiWmBS%2BJerkYwuSzMvApz2ycFcQ7Ip1BiOpKVAf8%2B%2F1tbTeiR%2BvezgTgfW%2Br%2BHM0EXn8EsDiyKElJrl3n4Gjmplo1o1kTw20j22uGrW7NSs7qobZ7MvnFthIIhSV%2B%2F2Z%2BBCmlsZzWHOL1wEVYFUczGO9ZgR8KU%2FUk1U%2FmvgRNp7FFtTVx5qa3acG7OJpPe3pEEtlGhtEXmQTwxBhyOTK3hh9nSLIEoZW1MfRhnoTCCOaal7JgtKDx6zqYQ0afkVXbWHm2oXx1%2FG6SZHC0loWi23bLA1voFnCiQnX8lf9PEBTsLARa3DlFjC4zCXhLdL%2B8AcnRGp7jhHv4nosEzFzsZofZZ2pYJF3waq1C2xaelrrzPUR4eLZ%2BA%2Bl3soak1gKPxjIEXe2d%2FmIUksz7ndPBb4qdGhFyCDh5vSzUVcj2zWORcoo7GIA1EjrItQK9GEsTh0hB6vJMZIHrd1%2FYVYF9C%2BMR%2FBpGUwBg6w0tgySR9E4qJxRuCp%2B1kFpGqwAMNbwt7ma0mfXjPAuOv2K70G6wdUc8qHT5mCSIyItH4ERUxBS6SVYw1IP2wgY6pgG%2FwuNWf6Bwgd541pfzRFezbE%2FcYC4MXR8ciQ%2BB%2FiSCDtnHtkbwcC65vXGw645FNMTltvTi0hYsXCAs9ebwun12cHLbv93BT6ilVI9YnWXtAvvljaCFQGJJkIuGSYa%2BE9%2FRGKj3Nhup5065xfZrY64TUw%2FEQbS358EUv5QhQHu1QEM%2BcIjBB6hjcqNA23U7Ha9rI11jhzDx8R2iiU0cVJEwVqZ4PoKU&X-Amz-Signature=e604190d1027d62bd187c83c6f3c2982419219061de068125ba93093ee7cdd60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3XNHIL5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBaQpwItL0UKBzraSDQk4mq6oIkrJW%2FNaIsBFV2NV%2BCfAiAv%2BFiBXYm0Yi1FNi83p5%2BOMDKAyUUPLcJcpTUqBSrQZSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMmhEhgBx%2Bd2SdK3XyKtwDTrhV218KJ5xGzgU1fxKW2%2F4UhOmN38mmuC45kyBhwZU5HCryZEjkO%2FS17bBmy36FqkNLYh229S0yiWmBS%2BJerkYwuSzMvApz2ycFcQ7Ip1BiOpKVAf8%2B%2F1tbTeiR%2BvezgTgfW%2Br%2BHM0EXn8EsDiyKElJrl3n4Gjmplo1o1kTw20j22uGrW7NSs7qobZ7MvnFthIIhSV%2B%2F2Z%2BBCmlsZzWHOL1wEVYFUczGO9ZgR8KU%2FUk1U%2FmvgRNp7FFtTVx5qa3acG7OJpPe3pEEtlGhtEXmQTwxBhyOTK3hh9nSLIEoZW1MfRhnoTCCOaal7JgtKDx6zqYQ0afkVXbWHm2oXx1%2FG6SZHC0loWi23bLA1voFnCiQnX8lf9PEBTsLARa3DlFjC4zCXhLdL%2B8AcnRGp7jhHv4nosEzFzsZofZZ2pYJF3waq1C2xaelrrzPUR4eLZ%2BA%2Bl3soak1gKPxjIEXe2d%2FmIUksz7ndPBb4qdGhFyCDh5vSzUVcj2zWORcoo7GIA1EjrItQK9GEsTh0hB6vJMZIHrd1%2FYVYF9C%2BMR%2FBpGUwBg6w0tgySR9E4qJxRuCp%2B1kFpGqwAMNbwt7ma0mfXjPAuOv2K70G6wdUc8qHT5mCSIyItH4ERUxBS6SVYw1IP2wgY6pgG%2FwuNWf6Bwgd541pfzRFezbE%2FcYC4MXR8ciQ%2BB%2FiSCDtnHtkbwcC65vXGw645FNMTltvTi0hYsXCAs9ebwun12cHLbv93BT6ilVI9YnWXtAvvljaCFQGJJkIuGSYa%2BE9%2FRGKj3Nhup5065xfZrY64TUw%2FEQbS358EUv5QhQHu1QEM%2BcIjBB6hjcqNA23U7Ha9rI11jhzDx8R2iiU0cVJEwVqZ4PoKU&X-Amz-Signature=727c0f57a50ff3e6ac50134d392a2319764a976b2c79b87e22ae191d0a75f86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
