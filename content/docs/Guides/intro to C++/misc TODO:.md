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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36HKGGE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCeAJgtJXHKc6MUQwruUDXzf64VgNi3Q9Z%2FEGURJPp7YgIhAICp7PnqEiH%2BgJEiGsOYOiOg34Mjvk5qKegG9dd2YeUDKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw00P74koCSmFKQMyAq3ANE3wbEPhy3%2BbhFd38np9BmENMbfgDg9DGjitZM28BgZ1QKpCzxsNwuP3QfFuCgUs9FBq%2FgsFTVqGcYR3Z2ImNncNNzHh%2BCymA%2BZXGloSmE9S7Vnjy%2FGFbEhueS6dvlYrmPQwef4Ak4FLU6JgCiAdxz2TmyvwYLBchvJ6KrvDdFr7oVUvx%2FKBg45aI%2FU%2FOozy7N%2FxfLryoH6ysudFucQNlA0nJnbH1N1nmWQ%2BxCUwFAdXeOxWs5n0YC42m%2FTjkmclzpz5LS6jcJkZvXDmpLutkAuhuPowIrv%2FGllW7%2Bnqh2P%2B51jdIST1AfmglUs8ImLPdavkoNe70f9Dx28RAcWRyuu0S5zMlG%2Fr2vfy5DnhLzvCD93kEC6Dh0aMaPpao5IP8vdBwyeo1jctCe9kyUWldaQVo4ceGdR5J20IvLT5ZgwYsK8jV0p4%2FGIzm9z4aHXC4R1bwvFGzFwMJKx9eKMyQcwRuoYxUFAblur%2BXKcHO3Rdf9XJzpjM2Xxmjv6WjuAiN98El6g%2Ffx9nW%2FdLwFKeDpFRimrvA3RKs7i1AWp%2FE2XkUp%2FErHMc45%2BunerBiiHys77oI6qxzalmZPrSur%2BuvYSaX7xLj65mEDjUANrgIzPYfprknm64Tavb3FIzDMuou%2BBjqkAXfrUbQfFEwfGLGZTnJoW3tBVCwnF1TYKEtWM2xUAkJljkELuDQBjekUiFELobzbLeefSQZpve6XSg2gvS32T14QdzK0L1FsOBU%2Fu2NV2LZ6uXZb2hKbqCzcSB%2FGP6FlRU7Li4DkxMLhnqLyelcAB5rvACRA9iJp8nRAE%2F6Qqs0LgLFRp11j3Vl%2BFaKbKH29MI9I04UrEZPdMQZwiNRspGG7ftMv&X-Amz-Signature=87840defb25a118de9d50ad4d7751455f6cc0ab9fb4253024afab1029431a123&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36HKGGE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCeAJgtJXHKc6MUQwruUDXzf64VgNi3Q9Z%2FEGURJPp7YgIhAICp7PnqEiH%2BgJEiGsOYOiOg34Mjvk5qKegG9dd2YeUDKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw00P74koCSmFKQMyAq3ANE3wbEPhy3%2BbhFd38np9BmENMbfgDg9DGjitZM28BgZ1QKpCzxsNwuP3QfFuCgUs9FBq%2FgsFTVqGcYR3Z2ImNncNNzHh%2BCymA%2BZXGloSmE9S7Vnjy%2FGFbEhueS6dvlYrmPQwef4Ak4FLU6JgCiAdxz2TmyvwYLBchvJ6KrvDdFr7oVUvx%2FKBg45aI%2FU%2FOozy7N%2FxfLryoH6ysudFucQNlA0nJnbH1N1nmWQ%2BxCUwFAdXeOxWs5n0YC42m%2FTjkmclzpz5LS6jcJkZvXDmpLutkAuhuPowIrv%2FGllW7%2Bnqh2P%2B51jdIST1AfmglUs8ImLPdavkoNe70f9Dx28RAcWRyuu0S5zMlG%2Fr2vfy5DnhLzvCD93kEC6Dh0aMaPpao5IP8vdBwyeo1jctCe9kyUWldaQVo4ceGdR5J20IvLT5ZgwYsK8jV0p4%2FGIzm9z4aHXC4R1bwvFGzFwMJKx9eKMyQcwRuoYxUFAblur%2BXKcHO3Rdf9XJzpjM2Xxmjv6WjuAiN98El6g%2Ffx9nW%2FdLwFKeDpFRimrvA3RKs7i1AWp%2FE2XkUp%2FErHMc45%2BunerBiiHys77oI6qxzalmZPrSur%2BuvYSaX7xLj65mEDjUANrgIzPYfprknm64Tavb3FIzDMuou%2BBjqkAXfrUbQfFEwfGLGZTnJoW3tBVCwnF1TYKEtWM2xUAkJljkELuDQBjekUiFELobzbLeefSQZpve6XSg2gvS32T14QdzK0L1FsOBU%2Fu2NV2LZ6uXZb2hKbqCzcSB%2FGP6FlRU7Li4DkxMLhnqLyelcAB5rvACRA9iJp8nRAE%2F6Qqs0LgLFRp11j3Vl%2BFaKbKH29MI9I04UrEZPdMQZwiNRspGG7ftMv&X-Amz-Signature=cb9c0cc703dfc199e8170746c3f07226183b2a5be458bc7a5a0328c3018d9f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
