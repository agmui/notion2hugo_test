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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOMC3QM4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUjcyBGXKfH8Kc45qc2nlgKIUQhyNL0A5mfw010wwbgAiEAphx%2Ff8ueEw717kyIpKPdrlkonaUE30HyhjfwycYj6OEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNr%2BLayFCN%2FgtXnjyrcA6jMcqYENnNuLgQAK%2Fga0invduYUF7PM3tF6csb1AV9SBCSAAQig1bJBlNHph4hBWiv7zzM7QaAZUv4xDVsp2y6jdFz3CtLnh%2Bb1tH8JF0bQ2qNLQKo0B%2FVXUXSqeADVNczaDxMRWOY3OcvYDoUAS7pQF76dU2afC3KmHIEncbTNqwk4M896KRLNZ4MoEtbqW2dHdEU7pfExlHZIgF26l11HQ4PN8C%2FdgNWr%2F1nzNCQqmQG%2B1PoODfTOodiKdGMLCBWYmaItnhsKgJK33bk8rz4w4QLNPOGO72hskNe2T%2B9gPfm0blqxAOXLnn7ZIS5%2FdlA86k8B60TGRV%2BnWDS%2FKKpivtGBxrBojap3mcV%2FKtYSvLlqo0746jFyY7Ewnzel%2FppFHYQ1XM4jzlBRBClj78%2FRbqoCspSA9D8jffoZq6NcGATavXbc3hcO5L%2FBncOipBRcKqePZqFVsZqiQMTrbWEJvDWRWyYww0zD%2B9wShPE3WlMGIgemP5L9qC%2FwtSkfuweZbT4SEjP7VsL%2B%2FUIDwdRWW2FwMzBLHnw6ycb2gik%2BQxQz%2FG9AMbR6wse728%2FXmQB5ejQlQBpdynak1itYiBQF4tJrH4yun6vbZVLJpkIjF%2BuF5O2JeFtGf%2BJKMKzmpcIGOqUB8yejHuBTGeuzfpbrUj4aQgqj81OWklFTyLVClhl8868zys%2BK%2B%2BHPVYoLvpmQl2AJwuuNYt1Ei5s74qf2vN%2BIOi%2BjqZimHUxzKeVFZzdclay4kcjOvb1UljEZ4%2BR%2B%2BIxqEhN9pIsMiq56uUCkwfrfbw6Dk0FfktUpXdBPtn8MgBbnG8pvlxuu2LTe3DTu18beMwtScPeLippd323hFxBASQ%2F4AQuA&X-Amz-Signature=ee2ed699c59e9f639b301fd0053a69bfba50140753cb8b55f0b1e319a3436cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOMC3QM4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUjcyBGXKfH8Kc45qc2nlgKIUQhyNL0A5mfw010wwbgAiEAphx%2Ff8ueEw717kyIpKPdrlkonaUE30HyhjfwycYj6OEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNr%2BLayFCN%2FgtXnjyrcA6jMcqYENnNuLgQAK%2Fga0invduYUF7PM3tF6csb1AV9SBCSAAQig1bJBlNHph4hBWiv7zzM7QaAZUv4xDVsp2y6jdFz3CtLnh%2Bb1tH8JF0bQ2qNLQKo0B%2FVXUXSqeADVNczaDxMRWOY3OcvYDoUAS7pQF76dU2afC3KmHIEncbTNqwk4M896KRLNZ4MoEtbqW2dHdEU7pfExlHZIgF26l11HQ4PN8C%2FdgNWr%2F1nzNCQqmQG%2B1PoODfTOodiKdGMLCBWYmaItnhsKgJK33bk8rz4w4QLNPOGO72hskNe2T%2B9gPfm0blqxAOXLnn7ZIS5%2FdlA86k8B60TGRV%2BnWDS%2FKKpivtGBxrBojap3mcV%2FKtYSvLlqo0746jFyY7Ewnzel%2FppFHYQ1XM4jzlBRBClj78%2FRbqoCspSA9D8jffoZq6NcGATavXbc3hcO5L%2FBncOipBRcKqePZqFVsZqiQMTrbWEJvDWRWyYww0zD%2B9wShPE3WlMGIgemP5L9qC%2FwtSkfuweZbT4SEjP7VsL%2B%2FUIDwdRWW2FwMzBLHnw6ycb2gik%2BQxQz%2FG9AMbR6wse728%2FXmQB5ejQlQBpdynak1itYiBQF4tJrH4yun6vbZVLJpkIjF%2BuF5O2JeFtGf%2BJKMKzmpcIGOqUB8yejHuBTGeuzfpbrUj4aQgqj81OWklFTyLVClhl8868zys%2BK%2B%2BHPVYoLvpmQl2AJwuuNYt1Ei5s74qf2vN%2BIOi%2BjqZimHUxzKeVFZzdclay4kcjOvb1UljEZ4%2BR%2B%2BIxqEhN9pIsMiq56uUCkwfrfbw6Dk0FfktUpXdBPtn8MgBbnG8pvlxuu2LTe3DTu18beMwtScPeLippd323hFxBASQ%2F4AQuA&X-Amz-Signature=cabcff51d7f8a5bb88847d06b5c6b6f3944bce7c71e3353fc90cbf386329e1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
