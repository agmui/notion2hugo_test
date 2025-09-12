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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRJ5QBR%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCFFoXd3WVv%2FzDMN02SKZzrA6ndcYa8YoZqH7TeseWZAiB5bBvTn6WSlDFsi5dOTGm6L0EyhSqRd7ps0idnGW%2F9Uir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMevBmvAG3IgQNnkPoKtwDSY8EK%2By8o7N%2BHwFVPfyUduz8CtawOh4Jk5k%2Bels7aPFIfKP%2BARzwpIW%2F3s49%2BZgHAodo6lz56d0GObpWDJJ1kBIKGOx8aC%2FNjnciRLntXeI%2FV3t0Jm3BVdKPPdhgtZ9Npldt7b3RBK0LZNNquXClan2GSHHsjvY6cNudX8H%2BxhkSiua9nuIlTWHrTsGszvBJcWR1X2iooB2jmDQP79YfgWdHnzxeNr7W%2B1qatE3W4sAriexd%2BVW3ZNck1EhD14DD67cteoMGA7SPnUJq8fBig4gpZttlSszL9jRp8IKfGHLj83MLh1oLaex6rAEY9SSSCDBQ8OhuGSdk0t%2Bxs1H2lGLicY4pEUWhEUTKj24DkrGlSzAJiaIX9NkSC6RN%2FYCe1FfpNmIO2CoxIeiSv%2B%2BubldsCtukPxE2GZqeiBMaZRTi9qTXcnozOxQztYUd0wTZ7Owv0JzKsuOaiahnz1TxGS9r7z%2BPmK0o6WrfVZf4AR0VSKr1tAXA5AgeW4hsDcTOak0Ghq%2BCYUX%2BQ9naOTauCiUAgwhxEQyDAClreEjBco0B3xL3oO8GEt4%2Bbd2JN0K8kDuHy6C8aaE3r4i%2Ba8ZrSlurK0z1aan44clzQ7gVj0p0QIJnV7f2NyfguIowi9GNxgY6pgGiZc%2F1f%2B6PZpYqJbXlf9UjvoleR%2B0XqSWFjM9Q%2FHTPe5jPsyMS3wUzGiP6c62MmNsO16GI6WNGBdfMwLE3OEGF1OgD2neudiS%2Buqef%2Fu9wSIqoIt5JSV8SO8vyYsdJMkwkHe8nFMd99uCiYZwhUcUUawu5gipAP81F8KdgmpKyKoUbfBeUcW86UvXWtv9v%2B3u5piN5zLX3xKHIrG%2BXhFCbyWPfX2AA&X-Amz-Signature=9163f1b3760c15ba6133156c81f75dff9c1347d46a6e6ca60d8a9e0c6c0cbbc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRJ5QBR%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCFFoXd3WVv%2FzDMN02SKZzrA6ndcYa8YoZqH7TeseWZAiB5bBvTn6WSlDFsi5dOTGm6L0EyhSqRd7ps0idnGW%2F9Uir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMevBmvAG3IgQNnkPoKtwDSY8EK%2By8o7N%2BHwFVPfyUduz8CtawOh4Jk5k%2Bels7aPFIfKP%2BARzwpIW%2F3s49%2BZgHAodo6lz56d0GObpWDJJ1kBIKGOx8aC%2FNjnciRLntXeI%2FV3t0Jm3BVdKPPdhgtZ9Npldt7b3RBK0LZNNquXClan2GSHHsjvY6cNudX8H%2BxhkSiua9nuIlTWHrTsGszvBJcWR1X2iooB2jmDQP79YfgWdHnzxeNr7W%2B1qatE3W4sAriexd%2BVW3ZNck1EhD14DD67cteoMGA7SPnUJq8fBig4gpZttlSszL9jRp8IKfGHLj83MLh1oLaex6rAEY9SSSCDBQ8OhuGSdk0t%2Bxs1H2lGLicY4pEUWhEUTKj24DkrGlSzAJiaIX9NkSC6RN%2FYCe1FfpNmIO2CoxIeiSv%2B%2BubldsCtukPxE2GZqeiBMaZRTi9qTXcnozOxQztYUd0wTZ7Owv0JzKsuOaiahnz1TxGS9r7z%2BPmK0o6WrfVZf4AR0VSKr1tAXA5AgeW4hsDcTOak0Ghq%2BCYUX%2BQ9naOTauCiUAgwhxEQyDAClreEjBco0B3xL3oO8GEt4%2Bbd2JN0K8kDuHy6C8aaE3r4i%2Ba8ZrSlurK0z1aan44clzQ7gVj0p0QIJnV7f2NyfguIowi9GNxgY6pgGiZc%2F1f%2B6PZpYqJbXlf9UjvoleR%2B0XqSWFjM9Q%2FHTPe5jPsyMS3wUzGiP6c62MmNsO16GI6WNGBdfMwLE3OEGF1OgD2neudiS%2Buqef%2Fu9wSIqoIt5JSV8SO8vyYsdJMkwkHe8nFMd99uCiYZwhUcUUawu5gipAP81F8KdgmpKyKoUbfBeUcW86UvXWtv9v%2B3u5piN5zLX3xKHIrG%2BXhFCbyWPfX2AA&X-Amz-Signature=1b41c8212717f2dccdb37039dbe6a72f935627503651d3727501a79d5255d70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
