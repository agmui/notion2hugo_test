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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM3DGWN4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGib%2B9bZ7pkznfQLR8AQvLdQ6r8z%2FTPT2tu7SaElFxLAAiBWOIgNexP1a1js%2B2lhMD3Yvw2gvkea441Snim8wisyHCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOAQBUiZiZ0J2D6GvKtwDB9LFabLKwF25k8PBqs7Q%2FvwwnNFZ6ZybmVqmf5jakJq0RiHs9FO5ZxBsFjlI43lASb4e0VpMbm2wms7LL4Zyt6AlQDNHJSgVWr%2FZTR7o31tIfKarsg8ROxkwiQmi%2BPQfRztmPdoJW5wSc%2BofAHa%2F9HxzLCwHHrQlEK2%2FoMfzxxlm9IdzXlzSdF%2BWFSqx%2BvTGbXKGex6CIqZ2AdQgLSWFALSi7TRW%2BMLf2oUxVIo33XyKAyPNzNC6MIHrGCb9fY1dTcYZ9BTDG1BusNPx4K0QOdDkH1ANGoIQ5YirrZk9oASFRNM2IbOEBwYc6pJQ37b8WSl3gh8dITc4%2Bo%2BexBzLdN8mhO%2BLSGwB8zzk3ptosd7CmgOBGD%2F01%2B3vLIfllvNukyfQQzsf2P7wiAgQgRcnu5LLZxBOzBUjKThowDq%2BObq1KKMt0O00CK0BFnJXLSmku1okalNd6wvNUCwNglnSzizpG87fSU8UGjn%2Bf4Ae4ARqb85ql4sKs6%2FxGtM3KM4%2FBILbXkXKJPB84UY0QMxrgPN4FBq1eygUS0OebQNe1KBk%2BeoD%2FqEv79eJgDLtQMTEptxHamCmFd5sBswPkRiIv7f9c0wPKJjdcJUVSnMXGWocl9klY8S2BTcYufAw14vfxAY6pgFBxw%2BeQmBowvC07ZTvxKJPNfBgPF9AqbXRScgs52iWSXJwwD6PJyzel35sor5A8ZlPndpAo2%2BM6MLkvikOfEv%2BNkjEcwfTpElhco3uN6OOYni4lquVYgHKaSMJ8hXhlRUdR8spbE2njYNP181IRCMxMcwuH%2F3SdpVsZG4Nb%2FFUtZ0yodrafVAmXFDRL4ZPKLAyUlaQh%2Ftsp3PBr%2BwJrp2Bdelk%2FUHx&X-Amz-Signature=02846d30d835a4aff1ba11c61128a3aa87758b6e359f9689509b56bd28712569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM3DGWN4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGib%2B9bZ7pkznfQLR8AQvLdQ6r8z%2FTPT2tu7SaElFxLAAiBWOIgNexP1a1js%2B2lhMD3Yvw2gvkea441Snim8wisyHCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOAQBUiZiZ0J2D6GvKtwDB9LFabLKwF25k8PBqs7Q%2FvwwnNFZ6ZybmVqmf5jakJq0RiHs9FO5ZxBsFjlI43lASb4e0VpMbm2wms7LL4Zyt6AlQDNHJSgVWr%2FZTR7o31tIfKarsg8ROxkwiQmi%2BPQfRztmPdoJW5wSc%2BofAHa%2F9HxzLCwHHrQlEK2%2FoMfzxxlm9IdzXlzSdF%2BWFSqx%2BvTGbXKGex6CIqZ2AdQgLSWFALSi7TRW%2BMLf2oUxVIo33XyKAyPNzNC6MIHrGCb9fY1dTcYZ9BTDG1BusNPx4K0QOdDkH1ANGoIQ5YirrZk9oASFRNM2IbOEBwYc6pJQ37b8WSl3gh8dITc4%2Bo%2BexBzLdN8mhO%2BLSGwB8zzk3ptosd7CmgOBGD%2F01%2B3vLIfllvNukyfQQzsf2P7wiAgQgRcnu5LLZxBOzBUjKThowDq%2BObq1KKMt0O00CK0BFnJXLSmku1okalNd6wvNUCwNglnSzizpG87fSU8UGjn%2Bf4Ae4ARqb85ql4sKs6%2FxGtM3KM4%2FBILbXkXKJPB84UY0QMxrgPN4FBq1eygUS0OebQNe1KBk%2BeoD%2FqEv79eJgDLtQMTEptxHamCmFd5sBswPkRiIv7f9c0wPKJjdcJUVSnMXGWocl9klY8S2BTcYufAw14vfxAY6pgFBxw%2BeQmBowvC07ZTvxKJPNfBgPF9AqbXRScgs52iWSXJwwD6PJyzel35sor5A8ZlPndpAo2%2BM6MLkvikOfEv%2BNkjEcwfTpElhco3uN6OOYni4lquVYgHKaSMJ8hXhlRUdR8spbE2njYNP181IRCMxMcwuH%2F3SdpVsZG4Nb%2FFUtZ0yodrafVAmXFDRL4ZPKLAyUlaQh%2Ftsp3PBr%2BwJrp2Bdelk%2FUHx&X-Amz-Signature=031f7dda0da8947d81fe1eda78ce9224b4fe40c6de327e74cb8d3ec1aa0154e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
