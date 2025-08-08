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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVOG6EJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFNVn5RQW6twH22M5kXd8Jwehe5DPEtrSR%2BfGOf9Yl%2FuAiEArAlyhGC9xZKZiswwxjW0927%2B9FdVoSoK%2B8kc0YTXZ6cqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBqFp9jDgfWQh5jpSrcA57mXMNy8hguoL%2F1lzZUEpefYDI0T9U%2FL9oKsk82cFMNROfbHApuZPk1dmzs%2BjcVk3Za37PI5Bl0JSYIkAnbHV2OSmj0wpp5mLcBQkwTxiaquZibdo0nFXvDcddSW9mlGDQLBOxlJYY%2FlgTgoPJoLxlzjr6x4EExAJ%2FRIXUtuH08LM2NOHhTvOUSTMaslvnh6Ahmb92B6cNHjEfKRdXN9Nzg%2BLNyUfmdELaTXdnlCvEiZISslHEWk4rdCguw5LJyOfRHIdSakPMu0MOCrNLTqrFcFy6KKJWcSt9LNY1B6ntBL4EpuZhLsYykXoBHto%2F8iDD6yxqSe3PCCmy8cm5bx3l7UzmEBpP%2FShjHorHFpC%2FTWGodF%2F6zVU32CfY1eZ4J4sR2zKaOV4nDLAFeX1Uf2O%2FooT9jFGuA3tO6%2FFJVheMOzrBoyW047JHTLsS3NuAd1en%2BFgxjje%2FxOaeV3BkquC%2FbM5VJ5cBP81Ra%2FguYSWf3PZNZyG0SUbeyJS8A1UF1fh3D4RtUjzjS7oV7vCv3nK85QL0vsuobJp1hiuTQL5Y2iHSYkUEI28y%2FJLPLbPHr1ZJENDxxfw%2Bcz0vWvFgxh1duouaZIdV1EqJ6jNSVYIRKPkzrW7clPwVZApNWMImv1cQGOqUBXTGqbEMv0%2B%2FCPzaR6%2BfYniv3VDjXHbyUknCMAkKAUC8jiVn78xtnkdv0b7JmBCT5E3aGwa1%2B93H5Xrh32WSuenen5zkJT%2FskE%2FVEXU98ddfCLKjqoeXv%2B4wFz2uL4WEacxeCKWmNT1PwH3SRU0OzTCrUfm5BzvNDgeDluxbg9xRknskN7%2ByKxQ%2Fj17A1RmqcmGEO2NKCdG0JBJD3KUcG3UYHsPQ7&X-Amz-Signature=c9c41826eb94fe4e71320e505e6e76b3e51e6560ec465db0db859f23f5bed89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVOG6EJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFNVn5RQW6twH22M5kXd8Jwehe5DPEtrSR%2BfGOf9Yl%2FuAiEArAlyhGC9xZKZiswwxjW0927%2B9FdVoSoK%2B8kc0YTXZ6cqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBqFp9jDgfWQh5jpSrcA57mXMNy8hguoL%2F1lzZUEpefYDI0T9U%2FL9oKsk82cFMNROfbHApuZPk1dmzs%2BjcVk3Za37PI5Bl0JSYIkAnbHV2OSmj0wpp5mLcBQkwTxiaquZibdo0nFXvDcddSW9mlGDQLBOxlJYY%2FlgTgoPJoLxlzjr6x4EExAJ%2FRIXUtuH08LM2NOHhTvOUSTMaslvnh6Ahmb92B6cNHjEfKRdXN9Nzg%2BLNyUfmdELaTXdnlCvEiZISslHEWk4rdCguw5LJyOfRHIdSakPMu0MOCrNLTqrFcFy6KKJWcSt9LNY1B6ntBL4EpuZhLsYykXoBHto%2F8iDD6yxqSe3PCCmy8cm5bx3l7UzmEBpP%2FShjHorHFpC%2FTWGodF%2F6zVU32CfY1eZ4J4sR2zKaOV4nDLAFeX1Uf2O%2FooT9jFGuA3tO6%2FFJVheMOzrBoyW047JHTLsS3NuAd1en%2BFgxjje%2FxOaeV3BkquC%2FbM5VJ5cBP81Ra%2FguYSWf3PZNZyG0SUbeyJS8A1UF1fh3D4RtUjzjS7oV7vCv3nK85QL0vsuobJp1hiuTQL5Y2iHSYkUEI28y%2FJLPLbPHr1ZJENDxxfw%2Bcz0vWvFgxh1duouaZIdV1EqJ6jNSVYIRKPkzrW7clPwVZApNWMImv1cQGOqUBXTGqbEMv0%2B%2FCPzaR6%2BfYniv3VDjXHbyUknCMAkKAUC8jiVn78xtnkdv0b7JmBCT5E3aGwa1%2B93H5Xrh32WSuenen5zkJT%2FskE%2FVEXU98ddfCLKjqoeXv%2B4wFz2uL4WEacxeCKWmNT1PwH3SRU0OzTCrUfm5BzvNDgeDluxbg9xRknskN7%2ByKxQ%2Fj17A1RmqcmGEO2NKCdG0JBJD3KUcG3UYHsPQ7&X-Amz-Signature=2672b48156c3da4bb0d50cb38c65de9db44c00bec05142b3a14225d4fcdbf66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
