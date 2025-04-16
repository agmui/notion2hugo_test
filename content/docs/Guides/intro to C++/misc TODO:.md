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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINPTMP3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvAgos%2FUVMt%2Fh8BZ8AvRAfDU5sxBDfhkb%2BCKKp6nOBBAiEA3mpj7nb0Bzr7%2BMZLzJXgdTPJuN9F3cs8MtyVM2KfozMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLPI7zkDD2HmMwLiTSrcA7FCz4THPMP6Stin7UMaB29Vn4N63nxnPLxrrs86pXinqS40UluU0fHhtOmp7AN%2F0ZYksD%2BzDN6oT7yldy2WJ00z9MtDXYXPALz%2BrtXbzNn5Swl3dlQu3rrK%2FHtAbKzxT%2Bqjfue9BDnyjp34OsSnc%2FrH5bLRS8LUxAOwFGa0mVD4BnNkKPaUiJqBXtKz5ilaorjCKpU%2FiZOdc47sOWu%2BH4KwCwOWxQ2AZXQCyQKTSDScOM8KdR%2Bu82ZP4r%2BJaSpJJ4TyEQ818XJXm2SlOjWRdSlRHBezfWHDyiQwTlyUYGEO7AR5yJ6%2FV1NrnX8U2MH%2BAzQdxady0v8%2B8CUrPJ%2BXNUYV5Bz75By7LfwyxmEI7KcyvHjL0zQkz7IqYkUqFFdKK9TowHnq7Vjevr7By1ISevNtFBAyZ7QoDVzedwiN6N1zu7kNccwCr0ghNbrYKS4hNVO6Tf1wY2yxSBKj6AXH8WFX96YpGvKSuixvxIR6FzT6NB2lWibx3sTS83591uH64jQ9FjXcGOAf7%2BbT4HCecCJQPIjf8EDEcwNiiHjV7jrp%2Fbc6Bar7cFytDEtLWc%2FpS5xGyzl2NivrQ7XDqXCi8d%2BxfP1lxk5m2X%2FXbuMIWa8hzHgwVr5YO7uJRVkCMIfx%2FL8GOqUBWoEEBks%2B38X5%2B0QO4%2BFuu1b1UgZIi6KAb7FioZW0mXodwStSe8dktej0ifzyH3Fos6CSrSPtsmL5zI0j9QAShDv93PvZhWPavkNmTgwOTfi2ifMtlJV09gSdbPvPw4%2BJ7khsJaYRB8e5Wib5Scn%2B%2FuGaVKiL269hAuchzaYh99uGCcZTKrFzFeWtQ%2By9GsaFfwnQnb1xF6POF9a%2FSpNlJEwiRjJb&X-Amz-Signature=1c704b72446ac78bee3e6e26f2414297901816147f32b02973512da09729d978&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINPTMP3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvAgos%2FUVMt%2Fh8BZ8AvRAfDU5sxBDfhkb%2BCKKp6nOBBAiEA3mpj7nb0Bzr7%2BMZLzJXgdTPJuN9F3cs8MtyVM2KfozMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLPI7zkDD2HmMwLiTSrcA7FCz4THPMP6Stin7UMaB29Vn4N63nxnPLxrrs86pXinqS40UluU0fHhtOmp7AN%2F0ZYksD%2BzDN6oT7yldy2WJ00z9MtDXYXPALz%2BrtXbzNn5Swl3dlQu3rrK%2FHtAbKzxT%2Bqjfue9BDnyjp34OsSnc%2FrH5bLRS8LUxAOwFGa0mVD4BnNkKPaUiJqBXtKz5ilaorjCKpU%2FiZOdc47sOWu%2BH4KwCwOWxQ2AZXQCyQKTSDScOM8KdR%2Bu82ZP4r%2BJaSpJJ4TyEQ818XJXm2SlOjWRdSlRHBezfWHDyiQwTlyUYGEO7AR5yJ6%2FV1NrnX8U2MH%2BAzQdxady0v8%2B8CUrPJ%2BXNUYV5Bz75By7LfwyxmEI7KcyvHjL0zQkz7IqYkUqFFdKK9TowHnq7Vjevr7By1ISevNtFBAyZ7QoDVzedwiN6N1zu7kNccwCr0ghNbrYKS4hNVO6Tf1wY2yxSBKj6AXH8WFX96YpGvKSuixvxIR6FzT6NB2lWibx3sTS83591uH64jQ9FjXcGOAf7%2BbT4HCecCJQPIjf8EDEcwNiiHjV7jrp%2Fbc6Bar7cFytDEtLWc%2FpS5xGyzl2NivrQ7XDqXCi8d%2BxfP1lxk5m2X%2FXbuMIWa8hzHgwVr5YO7uJRVkCMIfx%2FL8GOqUBWoEEBks%2B38X5%2B0QO4%2BFuu1b1UgZIi6KAb7FioZW0mXodwStSe8dktej0ifzyH3Fos6CSrSPtsmL5zI0j9QAShDv93PvZhWPavkNmTgwOTfi2ifMtlJV09gSdbPvPw4%2BJ7khsJaYRB8e5Wib5Scn%2B%2FuGaVKiL269hAuchzaYh99uGCcZTKrFzFeWtQ%2By9GsaFfwnQnb1xF6POF9a%2FSpNlJEwiRjJb&X-Amz-Signature=c3d2420a6e6c2b72f59613a48028b78fe60ba428c30c0a8506042cd0a0356be4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
