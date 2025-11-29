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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQNKSXL%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFi4apv3k3QavbMXeg7glb9b%2BHKzC94qFzB9JCppW83AiEAxvjCNuchnECKFZGyOuKj8MqMdibK5UFNBZcE%2B%2FxkP7wqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8%2BRhgqR5M7wzf1%2BSrcAwZufDZWamwmI4XO9bdINKuHKUD%2F9oN4YUwKvkNvLaKeYNm2qCutjNwI5k8I1I%2Fm62dWpwZs8iVHkhCytmTdsHPoAvjv7UImhTUZNNBsqzvMWBrfl01mgPhON62l6jD5lyLsmq2CFqyUx81f31h0ABGS8FWiUM4kE%2FBRs7TG2sZcd%2BKSQYHFHpuJEiz5aGhEDPVhdgyxot5UMycddUgsKNS%2B6cZ1Xsa5uAkMRoP%2FoY1Kd%2BV5zxxBPFAHV645fp9dpnz5eA5bwoUExY6DLbTif1%2BA0Gac3M6lwtma4ZsvkftKEmHYa%2FRwgRo9W8qCMnvtsU8UjwYATcBp3ZHAr9EaS1gM5AGivpKhW2m0zQaSjfn%2FadDabPLdCEMwL6AuVRlElDfWHLunxVc1d60W37DNaUahoDyqYPEtq5dRNAWr9sSFl%2Bb8VDvIelvCe2R2vHc5yoyOLdMfbAWvgNyLv7jnbVIZAMnQjtyNjJnm3RQgEdWAzIBnulNULLtckl%2FlMx2qAryZzCB7jEhjGfgFr8RFUZ87oRZUuT2ZB2igw3fLVbyG1rykmnLE9dMH9QSk%2FRXeSNLrit%2ByrrFiAWnSswziyHEs4d60UvQFHzIi9DiM7AKKS%2BdbFX%2BoYf9C46n9ML74p8kGOqUBNYpkJ9QBALjRkuSssLc8pg9J%2Bi4TE2fI8TLs1PDvjqv3NgkenM9JGb3%2BSrKsluhnfGPzZRo1ZSsNZM3zrOLJAq8CB%2FLfMWOlgdAuJwPdZszAWIbiX0aVNKSN6FXlefd0qz2pS%2BcgKyAQ8Vq6bPgnkkjmyKEXk40uwX%2FV9cC2eudTSANHcAsSFx%2BstXup396AOxs%2Bkz0%2FleCMHvEqhynBxlzmto9D&X-Amz-Signature=331b177250ab1f7def636d6fb70eee20487eef0e95bdd2a01f1676d2ca07e2f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQNKSXL%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFi4apv3k3QavbMXeg7glb9b%2BHKzC94qFzB9JCppW83AiEAxvjCNuchnECKFZGyOuKj8MqMdibK5UFNBZcE%2B%2FxkP7wqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8%2BRhgqR5M7wzf1%2BSrcAwZufDZWamwmI4XO9bdINKuHKUD%2F9oN4YUwKvkNvLaKeYNm2qCutjNwI5k8I1I%2Fm62dWpwZs8iVHkhCytmTdsHPoAvjv7UImhTUZNNBsqzvMWBrfl01mgPhON62l6jD5lyLsmq2CFqyUx81f31h0ABGS8FWiUM4kE%2FBRs7TG2sZcd%2BKSQYHFHpuJEiz5aGhEDPVhdgyxot5UMycddUgsKNS%2B6cZ1Xsa5uAkMRoP%2FoY1Kd%2BV5zxxBPFAHV645fp9dpnz5eA5bwoUExY6DLbTif1%2BA0Gac3M6lwtma4ZsvkftKEmHYa%2FRwgRo9W8qCMnvtsU8UjwYATcBp3ZHAr9EaS1gM5AGivpKhW2m0zQaSjfn%2FadDabPLdCEMwL6AuVRlElDfWHLunxVc1d60W37DNaUahoDyqYPEtq5dRNAWr9sSFl%2Bb8VDvIelvCe2R2vHc5yoyOLdMfbAWvgNyLv7jnbVIZAMnQjtyNjJnm3RQgEdWAzIBnulNULLtckl%2FlMx2qAryZzCB7jEhjGfgFr8RFUZ87oRZUuT2ZB2igw3fLVbyG1rykmnLE9dMH9QSk%2FRXeSNLrit%2ByrrFiAWnSswziyHEs4d60UvQFHzIi9DiM7AKKS%2BdbFX%2BoYf9C46n9ML74p8kGOqUBNYpkJ9QBALjRkuSssLc8pg9J%2Bi4TE2fI8TLs1PDvjqv3NgkenM9JGb3%2BSrKsluhnfGPzZRo1ZSsNZM3zrOLJAq8CB%2FLfMWOlgdAuJwPdZszAWIbiX0aVNKSN6FXlefd0qz2pS%2BcgKyAQ8Vq6bPgnkkjmyKEXk40uwX%2FV9cC2eudTSANHcAsSFx%2BstXup396AOxs%2Bkz0%2FleCMHvEqhynBxlzmto9D&X-Amz-Signature=945ea6956072cad6c70a878b838ba8bb3d1b23f1fdf22fd9a73fdd5e4b0c63be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
