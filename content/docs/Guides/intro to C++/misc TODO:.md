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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3I7YDF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDGh5BJ2%2BCVN5tJOoEF867WCAX3I4Vy8mFjTkp16hzrOwIgAmmEANXHtki%2BX5cRvQwoL65l7VV6KND8gG8K2SttUKsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHG1H8TmH7gCrnb3WyrcA%2BqTB6ghEl5AnyzKs6OwnVHx%2BLDICDV6w0KuDQAfFxrBvSLMVImWO86aA0zzN3BM7dy7pA9eSM1M%2Fwp%2Bp5CtbuYw77eKo6Lhbb5UDnsYpb3V%2BmgFQf8f4Cb8W6PrAx3r5g9q5rpGsQoqrII0%2BVpQ8y%2FW0xiIaPB81wu9exh0So1es07nkfxujNxTQgQcXeEBoEJVGRMT9tTbhSCXGAPevO%2Bmtk%2FEfnEGfVwJiyQgSf%2F0ezQroUbj47UoDukBg1sVWpkW%2FcP7lLi64T9bO6WdUAdh6RCFhchpV6KHxUZ9gEGqvFUXH6kc0rOyVLpYlI%2FZZVprd31vFXbQzb9NY8LyWJDNyFZjgPKGNvcTsVtjfYNWUwHoO0PiNZ31DbGGwhkHYl57OcXtplFtKDJmpvW2Z3B%2BH49M%2Fj8xd0nDNU0vlDWVuGL%2BiL0pCgKKJ6362nbJgNRdVHqjrhwvhaRyXcGdBOZKOOUmaOkKh36AMA1OizxH%2FfnIb861HIqjZBCPHUMTO2QV9IGo4G1IV%2ByaevL0pPKilhJJS4snBdxUvSiloB%2B%2BGhHqbr%2BN20S6%2FSAcPCrJ6%2FKx4inJ9gG%2F8ttNoU%2B%2Fj09yAQfCBRp6WUccKpAkHGq69LMoTdU0fDyzjXOjMLOWjsAGOqUBf1rwdqWtkAouCM8mwcCQDwtZEtyz4RFblBBnVVDusjXMT%2Bi1VgDfoe0kw1FplwAUwPbz42Gg76X7uegd%2BnlBmm7bnqon7%2FQQWs5FgzRFeX3SKbMrsWE3PEYfuMGqAHWBl9fsaWOJnJ0MfrJfls60cVU8eyoPPq9NmypLNaGFQp9i2%2FsiFi%2Bomsf6%2FIfbSRAE6GETpwWRNfJaEXNDfpXpq96KVjUo&X-Amz-Signature=bfef0ae1a9309fedf0abe18d1e419ba57ad31912d9963a2e226a9d090a50d8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ3I7YDF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDGh5BJ2%2BCVN5tJOoEF867WCAX3I4Vy8mFjTkp16hzrOwIgAmmEANXHtki%2BX5cRvQwoL65l7VV6KND8gG8K2SttUKsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHG1H8TmH7gCrnb3WyrcA%2BqTB6ghEl5AnyzKs6OwnVHx%2BLDICDV6w0KuDQAfFxrBvSLMVImWO86aA0zzN3BM7dy7pA9eSM1M%2Fwp%2Bp5CtbuYw77eKo6Lhbb5UDnsYpb3V%2BmgFQf8f4Cb8W6PrAx3r5g9q5rpGsQoqrII0%2BVpQ8y%2FW0xiIaPB81wu9exh0So1es07nkfxujNxTQgQcXeEBoEJVGRMT9tTbhSCXGAPevO%2Bmtk%2FEfnEGfVwJiyQgSf%2F0ezQroUbj47UoDukBg1sVWpkW%2FcP7lLi64T9bO6WdUAdh6RCFhchpV6KHxUZ9gEGqvFUXH6kc0rOyVLpYlI%2FZZVprd31vFXbQzb9NY8LyWJDNyFZjgPKGNvcTsVtjfYNWUwHoO0PiNZ31DbGGwhkHYl57OcXtplFtKDJmpvW2Z3B%2BH49M%2Fj8xd0nDNU0vlDWVuGL%2BiL0pCgKKJ6362nbJgNRdVHqjrhwvhaRyXcGdBOZKOOUmaOkKh36AMA1OizxH%2FfnIb861HIqjZBCPHUMTO2QV9IGo4G1IV%2ByaevL0pPKilhJJS4snBdxUvSiloB%2B%2BGhHqbr%2BN20S6%2FSAcPCrJ6%2FKx4inJ9gG%2F8ttNoU%2B%2Fj09yAQfCBRp6WUccKpAkHGq69LMoTdU0fDyzjXOjMLOWjsAGOqUBf1rwdqWtkAouCM8mwcCQDwtZEtyz4RFblBBnVVDusjXMT%2Bi1VgDfoe0kw1FplwAUwPbz42Gg76X7uegd%2BnlBmm7bnqon7%2FQQWs5FgzRFeX3SKbMrsWE3PEYfuMGqAHWBl9fsaWOJnJ0MfrJfls60cVU8eyoPPq9NmypLNaGFQp9i2%2FsiFi%2Bomsf6%2FIfbSRAE6GETpwWRNfJaEXNDfpXpq96KVjUo&X-Amz-Signature=b0d9f4ec4ea3352b8ad757049273190bf1b5d8a89c1b73b8f5ebafd31dfab9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
