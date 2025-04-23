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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZNTMJA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC7KQ75ruJw70e4YzbCQsmkex1TtbMQwzCi0Qb1LstKRAIgIw4kSNFvjxIPrMOKnhf7fS8uRQo2YmmNW4FE3CkEHEYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbLjok5D30Td1PnqyrcA75nbtP8vnMU14wDpMKLWhVKxYjpxgxveaA94JyBX6IhdMtCwSzS2qx94q6aBn%2FaZIsSySyXuONadgIfEZWSiHrE1bKqDGeJJZ2E59MIzp6jjB7kfORPSdjVhiyNLUbp%2BeRj%2BhKY6Ex6Evp5%2BDD3sCdJ%2FDMlzCqPibdbBerf5xK5C7WtmgmI5g7e3S5UH%2F70r4pUO1%2FYroc3iTcUjno3%2FH2pSAaf%2FOHgIWSBRbYbbAmNdhcjQrCQF6Rsr8VK2%2FqKA0q0pNouR%2BceQTLnS8LgWJHDUP97BtQO9ba2NKuG8e0lHRgjHbe5HjENOcmJ9KAYsJpSLoJ2qw7oIJEVpqRUyeganQvuPT8xcWhwovWsewRA64KkCLOXZkXJH%2BIUJ6PGcyZgoUvlPHs8NaNBsLN4%2BN%2BlfHRyDvp9pdJqBqIt6PnZRTM41NqdwU7KqN00V8CAbNo3Dhn9XU7wIti0K3j9rl3NoahkldQkdDNcL8WFlOGuKV00XzC0KH%2FpViljE%2FgxG4Rl2%2FBjLl4rNB9ldxMOgdrIteh9MxaoVjRpSl4Kiy4ANi1Al85U3fVboJrFNfRtAlWA%2FQ51ySt2KO6XTRxVf6Uii%2BVkzDw7LlkPE4d9h2%2FuzZVM0V9Xv%2Bk3lkXJMOnyoMAGOqUB4WgbURkSPNUA92P7jcH13vvZCikqLcXhF%2FFq1vcQsrMIqNljvrhy7%2F%2BxoODPC2dgBuV0CmAcqn%2FJq6LKpyAtFnIF%2BffF%2BgtFmE4Nwx8kZR33PDtMu1D7KBnkQvm579WsrmA%2BzYytSDErKyfp%2BLYspqbtKp%2FN9MKhT2UppWk6qZMzJB82OKqShGMwQNCZWiGcaebqCvco7etIzc35P%2FKCvPs2b3P0&X-Amz-Signature=c0deae94fc0e34b43bc1932ff7135d50e4e360fafcc29aa87531ad030ff76efd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZNTMJA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC7KQ75ruJw70e4YzbCQsmkex1TtbMQwzCi0Qb1LstKRAIgIw4kSNFvjxIPrMOKnhf7fS8uRQo2YmmNW4FE3CkEHEYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbLjok5D30Td1PnqyrcA75nbtP8vnMU14wDpMKLWhVKxYjpxgxveaA94JyBX6IhdMtCwSzS2qx94q6aBn%2FaZIsSySyXuONadgIfEZWSiHrE1bKqDGeJJZ2E59MIzp6jjB7kfORPSdjVhiyNLUbp%2BeRj%2BhKY6Ex6Evp5%2BDD3sCdJ%2FDMlzCqPibdbBerf5xK5C7WtmgmI5g7e3S5UH%2F70r4pUO1%2FYroc3iTcUjno3%2FH2pSAaf%2FOHgIWSBRbYbbAmNdhcjQrCQF6Rsr8VK2%2FqKA0q0pNouR%2BceQTLnS8LgWJHDUP97BtQO9ba2NKuG8e0lHRgjHbe5HjENOcmJ9KAYsJpSLoJ2qw7oIJEVpqRUyeganQvuPT8xcWhwovWsewRA64KkCLOXZkXJH%2BIUJ6PGcyZgoUvlPHs8NaNBsLN4%2BN%2BlfHRyDvp9pdJqBqIt6PnZRTM41NqdwU7KqN00V8CAbNo3Dhn9XU7wIti0K3j9rl3NoahkldQkdDNcL8WFlOGuKV00XzC0KH%2FpViljE%2FgxG4Rl2%2FBjLl4rNB9ldxMOgdrIteh9MxaoVjRpSl4Kiy4ANi1Al85U3fVboJrFNfRtAlWA%2FQ51ySt2KO6XTRxVf6Uii%2BVkzDw7LlkPE4d9h2%2FuzZVM0V9Xv%2Bk3lkXJMOnyoMAGOqUB4WgbURkSPNUA92P7jcH13vvZCikqLcXhF%2FFq1vcQsrMIqNljvrhy7%2F%2BxoODPC2dgBuV0CmAcqn%2FJq6LKpyAtFnIF%2BffF%2BgtFmE4Nwx8kZR33PDtMu1D7KBnkQvm579WsrmA%2BzYytSDErKyfp%2BLYspqbtKp%2FN9MKhT2UppWk6qZMzJB82OKqShGMwQNCZWiGcaebqCvco7etIzc35P%2FKCvPs2b3P0&X-Amz-Signature=e6558dc9dc9486cd1cee5ee61cf91c055ff7e535a2e5f20b7a16b3bd42092395&X-Amz-SignedHeaders=host&x-id=GetObject)

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
