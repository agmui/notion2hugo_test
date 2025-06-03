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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNZQEDOP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQC9%2FNihT52f%2FQoAtU7qKq5MTMmQCCbg2BFFUhj1C4F9igIgOQAY4%2BHtSYrNHya6Rgj1Tgqg33SjKb8ChcFQ1A3jMLoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDMZKzJI40lwBCuyP%2FSrcA7kodEjM8%2BrMMIH5i%2BorNXDTuMQAOCFCCjL66gmCKb8g%2BCmvfFsfjCWznsXoz2P6h8yCh%2Fyw%2BeOr2TCrpY9AkOVUJd8rpgAE881HKqnJ3HXhCenrCt09QedmrSeWHfyaw1pGjJCKyhCWcmoCIAkxrr9qnSe%2B9iTM8LRVNaRLM8ejN3%2FFYDqC9grXxG51le8ruBXJUY6%2BEt9fcWGWcBeTFtbrYk0XEsWWav4cDrHAMGat3xpKtI5muMLwB3KEwUbtqmCYzE2ZJFLnAVIbwm%2F0LrHLf9K761EmqQ1RsVQAaZhCnBcXXQHroeEylRgKaqe4ravBJ%2BwN28IyCAtpvEpdkuKUMVzAtZPhgMa1Vey00rPrHh2Gf2tbnGOvYH%2BY4fE206sHPa1q9JwOvMjYtFqkvQraglu15T0xosobeorB7bRup1ZZFkO5BAmH5gVUsWvAsE5Q2%2BK6KbLL883J8zN2%2BckLeXl6pIjxgLko1ZBuxYwSJcQSwntWgEc%2FZVG179%2FZ5mlzMxTTSTX4p1oSwKXNixz%2FX4Dl5DUoTDfxHmLP0uLdOsf4ooBhD1XdPacJwLMFUwavTGUWr%2BVh%2FPFUp78eQ0yljBdxrk4ppOkPMkeJh6AIG16PQdviaJkLMnbdMLyg%2FMEGOqUBasdDFtAcSHCmkc57trt9VLHUWoT2o3cAIiXCxW4SM%2BdRYnmO1KT2ggQYjyfDVRtmSYbIOsplI2pjd1Y6%2FwaR4f7k%2F8L9trnx%2BR4Oj3S%2F3BCYnrS5xy0w8WluduAUhdgb%2BJl8FbY9voDg4YQHFWEkVffMZW6ov8QJltTbtbhoPppEi9IeaFm1kiLXOC1h99QK41aDQccwOmdzqd7g4O3p6YuI18UV&X-Amz-Signature=2ae0c05e96e31bdf296204bc52b3a1650fd8855d84337fe306fa7868c23f8e02&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNZQEDOP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQC9%2FNihT52f%2FQoAtU7qKq5MTMmQCCbg2BFFUhj1C4F9igIgOQAY4%2BHtSYrNHya6Rgj1Tgqg33SjKb8ChcFQ1A3jMLoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDMZKzJI40lwBCuyP%2FSrcA7kodEjM8%2BrMMIH5i%2BorNXDTuMQAOCFCCjL66gmCKb8g%2BCmvfFsfjCWznsXoz2P6h8yCh%2Fyw%2BeOr2TCrpY9AkOVUJd8rpgAE881HKqnJ3HXhCenrCt09QedmrSeWHfyaw1pGjJCKyhCWcmoCIAkxrr9qnSe%2B9iTM8LRVNaRLM8ejN3%2FFYDqC9grXxG51le8ruBXJUY6%2BEt9fcWGWcBeTFtbrYk0XEsWWav4cDrHAMGat3xpKtI5muMLwB3KEwUbtqmCYzE2ZJFLnAVIbwm%2F0LrHLf9K761EmqQ1RsVQAaZhCnBcXXQHroeEylRgKaqe4ravBJ%2BwN28IyCAtpvEpdkuKUMVzAtZPhgMa1Vey00rPrHh2Gf2tbnGOvYH%2BY4fE206sHPa1q9JwOvMjYtFqkvQraglu15T0xosobeorB7bRup1ZZFkO5BAmH5gVUsWvAsE5Q2%2BK6KbLL883J8zN2%2BckLeXl6pIjxgLko1ZBuxYwSJcQSwntWgEc%2FZVG179%2FZ5mlzMxTTSTX4p1oSwKXNixz%2FX4Dl5DUoTDfxHmLP0uLdOsf4ooBhD1XdPacJwLMFUwavTGUWr%2BVh%2FPFUp78eQ0yljBdxrk4ppOkPMkeJh6AIG16PQdviaJkLMnbdMLyg%2FMEGOqUBasdDFtAcSHCmkc57trt9VLHUWoT2o3cAIiXCxW4SM%2BdRYnmO1KT2ggQYjyfDVRtmSYbIOsplI2pjd1Y6%2FwaR4f7k%2F8L9trnx%2BR4Oj3S%2F3BCYnrS5xy0w8WluduAUhdgb%2BJl8FbY9voDg4YQHFWEkVffMZW6ov8QJltTbtbhoPppEi9IeaFm1kiLXOC1h99QK41aDQccwOmdzqd7g4O3p6YuI18UV&X-Amz-Signature=764a30b6a48385d0b9dcc8f2d04613464fc2524febee6b4374fab5064f117bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
