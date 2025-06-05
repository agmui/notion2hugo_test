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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTXN7T2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCv8NPZfUJjJ5N8EFcBFPB8B1AgDBzaAd8Ec11H1BSPMgIgf10zSbDb%2BueZHZqUf6o0D9pv%2BE0hRuKDfTuF5KDvH30q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIszSAXlPFR53h9L7ircA%2BFAVG2X5DyzgsNwstzUu%2FS33gPPPh1jUf3BfseS2ZRNKSFAUMw38v1enHtDgrUpmF%2FhWbw%2B0fAzsk59p8%2FMdo0orwBSel%2FBMxWi6SGyIbb8hg9NslA0dHRB0D6iYwciqMOMy3gPSuHE2P%2Bet7A76%2FMZv4IJPVcPGdOWZBrqfukpiqj20gY9JkZs7pHv7MkASm2TtJNgfNcJh3wFhD8rkS%2BEE3kR3MyCuckIo0yTAbEZ6EcuH5XmMZMfQDaVgelxH4gy9ge40HFI5fJoiIej1Alx00P3h00%2BQlVKrpPh5oNEk9XpVGzXqVsaFEKRMt%2FRhmBUxdAlU%2FbudtXBbKXK0bYlCDQsIF7ABly7OFsbLykmiegZd4NflNL1bh%2FVCvo4lQ5KwBWjlBINk5TNwkleL68NW1Ru2JXgWNCyGq%2BmYMQP6QDMGAsrEJlApbzevbc%2Faw5Tl7LNNJMaO1yXxqhhRqe4vyF7s0qLPC6fYOTUzd%2Bo0x2Qq85JN8rzjkdV9gGM33NoqC3IV8GTMupBzm3ZfXpwasvOgpi%2F7%2FBAS2CZr8caSH0wgxhz27%2B%2F9PdPuuHz9LNC%2FGYt97kyPKxM1tfpffhVjzR8jfeD6Ep%2BhGfCHNYG5AAR6liANNI6y4kbMPHYh8IGOqUBCYp3LuN7Wshp7ZRscBvtyV%2FD%2BeoHNwTVGxoEPf2lb5yH0hCHnWIPRNwJ2UMUitwzg0e24sBPNo2zF7Koy4ANZ3jquxR2ZIvg3h3SjVBMtV3sHHN5sec3VzWQxCQeIQN3o1O1CEBO0BUaT7GD9FaMpyXiIkfyTRe5v7Fd8uw9osWZQEcyXRgMnWMsSp5AaXRJ%2F1aETUfAwzEXmzVa8dYYnK8Qw0%2BG&X-Amz-Signature=700b07f4942f46b1f1073aab09001f6d96ddf2ada06896df2035992f9362696e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTXN7T2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCv8NPZfUJjJ5N8EFcBFPB8B1AgDBzaAd8Ec11H1BSPMgIgf10zSbDb%2BueZHZqUf6o0D9pv%2BE0hRuKDfTuF5KDvH30q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIszSAXlPFR53h9L7ircA%2BFAVG2X5DyzgsNwstzUu%2FS33gPPPh1jUf3BfseS2ZRNKSFAUMw38v1enHtDgrUpmF%2FhWbw%2B0fAzsk59p8%2FMdo0orwBSel%2FBMxWi6SGyIbb8hg9NslA0dHRB0D6iYwciqMOMy3gPSuHE2P%2Bet7A76%2FMZv4IJPVcPGdOWZBrqfukpiqj20gY9JkZs7pHv7MkASm2TtJNgfNcJh3wFhD8rkS%2BEE3kR3MyCuckIo0yTAbEZ6EcuH5XmMZMfQDaVgelxH4gy9ge40HFI5fJoiIej1Alx00P3h00%2BQlVKrpPh5oNEk9XpVGzXqVsaFEKRMt%2FRhmBUxdAlU%2FbudtXBbKXK0bYlCDQsIF7ABly7OFsbLykmiegZd4NflNL1bh%2FVCvo4lQ5KwBWjlBINk5TNwkleL68NW1Ru2JXgWNCyGq%2BmYMQP6QDMGAsrEJlApbzevbc%2Faw5Tl7LNNJMaO1yXxqhhRqe4vyF7s0qLPC6fYOTUzd%2Bo0x2Qq85JN8rzjkdV9gGM33NoqC3IV8GTMupBzm3ZfXpwasvOgpi%2F7%2FBAS2CZr8caSH0wgxhz27%2B%2F9PdPuuHz9LNC%2FGYt97kyPKxM1tfpffhVjzR8jfeD6Ep%2BhGfCHNYG5AAR6liANNI6y4kbMPHYh8IGOqUBCYp3LuN7Wshp7ZRscBvtyV%2FD%2BeoHNwTVGxoEPf2lb5yH0hCHnWIPRNwJ2UMUitwzg0e24sBPNo2zF7Koy4ANZ3jquxR2ZIvg3h3SjVBMtV3sHHN5sec3VzWQxCQeIQN3o1O1CEBO0BUaT7GD9FaMpyXiIkfyTRe5v7Fd8uw9osWZQEcyXRgMnWMsSp5AaXRJ%2F1aETUfAwzEXmzVa8dYYnK8Qw0%2BG&X-Amz-Signature=69efbac145e9fd2fad3d3ddad1ad11481006be493985ba360a662e9983ee6a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
