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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35CDHCC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICrDpd5hXyvmJQn5rv4Gsj7ftPHDFkWtxfcC2Kqic92DAiB%2F0%2FXV7ate1MCyrFoh%2F3BubBvcxYztH2H19L4h4RbpvyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMafOXNuLxLAQ9Oh6GKtwDvVR1Xco0yhpGK9VwlX0NGM1B7o9HaETHB2x6h1wElB6juWpZHPvoy2sIBtV4Z%2Fmqf4CW9ds9Kh5dPUOt0tGej8UbLpa%2FEbh3BWlHOwkN9yNmwZaboW294IbhwyFu9fIxYwOSLIUqbARXciWxea9fGTOO%2FsveaTVJRX%2Fh8H5RGj4FEjzXt2oEM7KcE4B9xqRU4B09nJiGDgTXqID2Da%2BdLNZSjEo4rgzYi1h9sGmuJMPsiAt%2FkzchajxV8e9r91DhiEfXWwf4rfLv%2FZAjNskhmAkx64kQDW6lxRfs4fw%2BU72avTtmXG%2BEGmg8RivFZt%2Bkhc%2F0ouhXkJGlSpZPPIX0yIVFpa9H7Cmmz0UGrlQAUErpckknWF2C9YAN13Y7hltJdTNthjJNmTn5qaZ8gUeci9f1y5v0BW4Q5iGvsgj7FZ01bKEPHoXDGGh1fPM%2BoMetaFWrgcvs%2BL14MYZsrYHMegic0LncxJkzmYoomaLMYNRqa%2BQ9AgtfGviXRCFz0oY%2FewaBwtBMPQBplu6UkSR%2BwTDjxy9CQ6FucHzoeU%2Fgis55oI1g1QgpW68sogYNVp4TEAU80llHSZ4CwnZzorwEo0SkBwY6OZYBW8hJctJo%2Fk28TpPoGGH8xZmM8XMw%2BcygxAY6pgHHklGDRjLJD%2FrmNVNks6A9iQ87epL4mvIWcPMsZg3pyTGltNWrgz49KHXVhIkFVI5QFCU5r44RrpI6PHaG2DrSQRJizLIeHplDPTmhtby4xt4HLdT%2BlS7wgari8fA60diEez%2BrQoNjKCvHnfya94MRcXctVpZFjN%2F7cpi0dxYZOrX9X%2Fypz3tKgvurFbErWFER%2Fmb14pAKBCKAqihZlBRZRC4zqqHo&X-Amz-Signature=8ef95bf7630ab91afd2e0e07bf6e79493fcf6ce9181592d08028effde1ec6fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35CDHCC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICrDpd5hXyvmJQn5rv4Gsj7ftPHDFkWtxfcC2Kqic92DAiB%2F0%2FXV7ate1MCyrFoh%2F3BubBvcxYztH2H19L4h4RbpvyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMafOXNuLxLAQ9Oh6GKtwDvVR1Xco0yhpGK9VwlX0NGM1B7o9HaETHB2x6h1wElB6juWpZHPvoy2sIBtV4Z%2Fmqf4CW9ds9Kh5dPUOt0tGej8UbLpa%2FEbh3BWlHOwkN9yNmwZaboW294IbhwyFu9fIxYwOSLIUqbARXciWxea9fGTOO%2FsveaTVJRX%2Fh8H5RGj4FEjzXt2oEM7KcE4B9xqRU4B09nJiGDgTXqID2Da%2BdLNZSjEo4rgzYi1h9sGmuJMPsiAt%2FkzchajxV8e9r91DhiEfXWwf4rfLv%2FZAjNskhmAkx64kQDW6lxRfs4fw%2BU72avTtmXG%2BEGmg8RivFZt%2Bkhc%2F0ouhXkJGlSpZPPIX0yIVFpa9H7Cmmz0UGrlQAUErpckknWF2C9YAN13Y7hltJdTNthjJNmTn5qaZ8gUeci9f1y5v0BW4Q5iGvsgj7FZ01bKEPHoXDGGh1fPM%2BoMetaFWrgcvs%2BL14MYZsrYHMegic0LncxJkzmYoomaLMYNRqa%2BQ9AgtfGviXRCFz0oY%2FewaBwtBMPQBplu6UkSR%2BwTDjxy9CQ6FucHzoeU%2Fgis55oI1g1QgpW68sogYNVp4TEAU80llHSZ4CwnZzorwEo0SkBwY6OZYBW8hJctJo%2Fk28TpPoGGH8xZmM8XMw%2BcygxAY6pgHHklGDRjLJD%2FrmNVNks6A9iQ87epL4mvIWcPMsZg3pyTGltNWrgz49KHXVhIkFVI5QFCU5r44RrpI6PHaG2DrSQRJizLIeHplDPTmhtby4xt4HLdT%2BlS7wgari8fA60diEez%2BrQoNjKCvHnfya94MRcXctVpZFjN%2F7cpi0dxYZOrX9X%2Fypz3tKgvurFbErWFER%2Fmb14pAKBCKAqihZlBRZRC4zqqHo&X-Amz-Signature=7b6b0051388470a51f70a23db8526c7c568eb40074a1dab07c1a95f917b1efb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
