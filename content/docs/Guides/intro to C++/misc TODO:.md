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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBKNJB4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUuEWyjW5YRqYPrM4gqL%2BqrCdJWSp4KYvyPT5bEeJ6AAiBuxHrzfh7R%2BlrG2wk33nJyIQigwEmO2tFwhDMHQB5KVCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM%2B719F%2BDGqT%2FWviFCKtwDNQbAnFMVAx0o7EfQreXPP8n%2FGiNpzzcBkMg7O9Z8iK3u4Nfda7nNT6FNwnGs%2Fi5a3WGZ4BprHVJ%2BjZGJnOs8X0V3SnwXsYB8oogz8m8QAoqqWBnQdvViVezjXdmIzUcXwLRTmcmqhvmSP3rHgMHbvLYiCOFo8V0FLzC%2BY1omLOx3941VscUfkLaXsp9Epg%2Bk7w0%2FS1mswNwuDKIeuCYOJxfMj2C%2Bfpih3AXVLrtZwk3nHML%2ByXl%2FBSdHvbMD0OcrVIlFgoT0PTeNa8pKBqds7nJOLjtT2n89KjMz19czJNQkG5iNh%2FsBzu4R5QWhRUW3wZvkhYAEeJ4gfn4CQKgacd2glFxQ%2BEhmX9flEoxvH1MdWtDSgkGCdD2KMXHyppzruELmeUMIUtBLhhBp6poJB40ZdrXoOjQJUQKAKUNybqpW6bmJ1yNUDhRbCb8fKwFm1s0%2FuYBwOSJGJelBzGwUY09C1BdJsOY9OIDTcDsnpU00tzZIj4sad9UUsefw2VQ4ZkQJELnhREPkPKfeOEteHjuYEyWYihi%2F6YW3mLsMlOT%2FrXg65UvpBQe%2BoepQcZmRa%2BsMNdRDqC%2FvdaNOZZHWKSXr3z2UIxUWWhohoDWjMUXheGQKPAckatN1m58w2KPFvwY6pgGPM2AcbHpso7BvcY9hV%2FYC%2BvWUYgRAObCn97eFg6RhJR8B2VPPLSyKJLnBCBWEDfcKakuTfR2NnIGzrT3nPRYlzJFuN8yEVRsw9d925ydFZQ9jL3GkqylE%2FJZqInc19s6wD7JJMLXRckPN1bTOWgpDAS%2FF6zVxQGA3BUZ91UNsgSuthu40dofIfAwPBF9SSPRyENQvPCBUtio4C2Qasi6jCBROa2Wt&X-Amz-Signature=0b18aecb7a353255d42ac83d9a90393f910e07239869be2e81501373cd231cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBKNJB4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUuEWyjW5YRqYPrM4gqL%2BqrCdJWSp4KYvyPT5bEeJ6AAiBuxHrzfh7R%2BlrG2wk33nJyIQigwEmO2tFwhDMHQB5KVCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM%2B719F%2BDGqT%2FWviFCKtwDNQbAnFMVAx0o7EfQreXPP8n%2FGiNpzzcBkMg7O9Z8iK3u4Nfda7nNT6FNwnGs%2Fi5a3WGZ4BprHVJ%2BjZGJnOs8X0V3SnwXsYB8oogz8m8QAoqqWBnQdvViVezjXdmIzUcXwLRTmcmqhvmSP3rHgMHbvLYiCOFo8V0FLzC%2BY1omLOx3941VscUfkLaXsp9Epg%2Bk7w0%2FS1mswNwuDKIeuCYOJxfMj2C%2Bfpih3AXVLrtZwk3nHML%2ByXl%2FBSdHvbMD0OcrVIlFgoT0PTeNa8pKBqds7nJOLjtT2n89KjMz19czJNQkG5iNh%2FsBzu4R5QWhRUW3wZvkhYAEeJ4gfn4CQKgacd2glFxQ%2BEhmX9flEoxvH1MdWtDSgkGCdD2KMXHyppzruELmeUMIUtBLhhBp6poJB40ZdrXoOjQJUQKAKUNybqpW6bmJ1yNUDhRbCb8fKwFm1s0%2FuYBwOSJGJelBzGwUY09C1BdJsOY9OIDTcDsnpU00tzZIj4sad9UUsefw2VQ4ZkQJELnhREPkPKfeOEteHjuYEyWYihi%2F6YW3mLsMlOT%2FrXg65UvpBQe%2BoepQcZmRa%2BsMNdRDqC%2FvdaNOZZHWKSXr3z2UIxUWWhohoDWjMUXheGQKPAckatN1m58w2KPFvwY6pgGPM2AcbHpso7BvcY9hV%2FYC%2BvWUYgRAObCn97eFg6RhJR8B2VPPLSyKJLnBCBWEDfcKakuTfR2NnIGzrT3nPRYlzJFuN8yEVRsw9d925ydFZQ9jL3GkqylE%2FJZqInc19s6wD7JJMLXRckPN1bTOWgpDAS%2FF6zVxQGA3BUZ91UNsgSuthu40dofIfAwPBF9SSPRyENQvPCBUtio4C2Qasi6jCBROa2Wt&X-Amz-Signature=5058f231459e07f21e831864fc8880287f8c7743d930a323ac5a15d84df4553b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
