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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2BS3N7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIE7DOVCCqXb%2B%2BFIubdNETZ912mYCKhJgzSiZACuvbgR2AiEA7Le5s3Xw0gzIrWOneJi5kOcXSa4UM3bhCxQSirFphkEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoXOYQkIIbzGpoddircA2RdMCQw4bw9RlukHUS%2FWWlcVutnqdVv86muWD%2FTbFywRzh1ty96v%2BwbZf3cqI%2B1H0%2BIcatMCQyR1me6rmr6ijm1K2DGMVy2TAbxivwsjItkwVXeEqgLzJYnfrsZ62H53lurU7cP%2FUlReR6hFP%2BER6kz%2B%2B9fxIG9dgiv8Osn5cE%2F4J2y8ccuG22NPwG%2FRdcF9OSE7l6XSQJ1NvS5EuYHtBkpdQ%2Fr%2FhG3SdQJCvH0ddiwFoX4%2BykUhh9WgdvtVgG6HOi6n%2FWk1n2646xBRhT9ZGgLDvG%2BYiceUI%2BgQAsjWuEiflQ3bB7W9pREPYw4DW%2FqCQGHyrSQaLAu82i%2BR4pyojuEMVkR9sEQa7V7JTRBrt4tNfMeBGq8qJW6SAZmPEmoKoKMoX0jWrI6WpIOcuTIjVP35OuRmff9eYdVJbFXtVVxvjw%2BEe%2BSTEXzcQz8kbsKE%2FTR7pB3aVElfBXd9dUmdeqrswZMx7%2BQBUv6mjm97Q7db%2B2RVG%2BMBH1CZs09BuWZzd%2FUaKM378lT%2F2JJHpqAbFb3XO0t168d92goeDhthgDjUj1%2BgC2HbA9gNTses7GRGY%2BNm47UwfbHbZ4x1RDpTmCdm88ETiCScFQ3NQ4U5ggTQWMVrQVafcMpjwDrMNux478GOqUBeCo6iIxCUMWg0WhxtTD9FOmoyKEP%2BBa9YBBLz4kK6MIq290wnppIBVHw36nsXrUu%2FOSMwoF%2Fgqj4Ps%2B6oG5rurdZbJy4WUUZtijhHPDNsClsGHNLMxv5DAqN6mGYhAyivnd184wfc5TeZJ95QcdhLn8XFHp2BZZDqlg9EmTnHKaRrQdPdx1o7WWnCzw3RTqeLPF3k8UtzvFpM0aDGTfyj3OZK5U3&X-Amz-Signature=d8090c168b9b66dddcd657b9dd878514791045f5f68a2dde1c22215622154a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2BS3N7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIE7DOVCCqXb%2B%2BFIubdNETZ912mYCKhJgzSiZACuvbgR2AiEA7Le5s3Xw0gzIrWOneJi5kOcXSa4UM3bhCxQSirFphkEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoXOYQkIIbzGpoddircA2RdMCQw4bw9RlukHUS%2FWWlcVutnqdVv86muWD%2FTbFywRzh1ty96v%2BwbZf3cqI%2B1H0%2BIcatMCQyR1me6rmr6ijm1K2DGMVy2TAbxivwsjItkwVXeEqgLzJYnfrsZ62H53lurU7cP%2FUlReR6hFP%2BER6kz%2B%2B9fxIG9dgiv8Osn5cE%2F4J2y8ccuG22NPwG%2FRdcF9OSE7l6XSQJ1NvS5EuYHtBkpdQ%2Fr%2FhG3SdQJCvH0ddiwFoX4%2BykUhh9WgdvtVgG6HOi6n%2FWk1n2646xBRhT9ZGgLDvG%2BYiceUI%2BgQAsjWuEiflQ3bB7W9pREPYw4DW%2FqCQGHyrSQaLAu82i%2BR4pyojuEMVkR9sEQa7V7JTRBrt4tNfMeBGq8qJW6SAZmPEmoKoKMoX0jWrI6WpIOcuTIjVP35OuRmff9eYdVJbFXtVVxvjw%2BEe%2BSTEXzcQz8kbsKE%2FTR7pB3aVElfBXd9dUmdeqrswZMx7%2BQBUv6mjm97Q7db%2B2RVG%2BMBH1CZs09BuWZzd%2FUaKM378lT%2F2JJHpqAbFb3XO0t168d92goeDhthgDjUj1%2BgC2HbA9gNTses7GRGY%2BNm47UwfbHbZ4x1RDpTmCdm88ETiCScFQ3NQ4U5ggTQWMVrQVafcMpjwDrMNux478GOqUBeCo6iIxCUMWg0WhxtTD9FOmoyKEP%2BBa9YBBLz4kK6MIq290wnppIBVHw36nsXrUu%2FOSMwoF%2Fgqj4Ps%2B6oG5rurdZbJy4WUUZtijhHPDNsClsGHNLMxv5DAqN6mGYhAyivnd184wfc5TeZJ95QcdhLn8XFHp2BZZDqlg9EmTnHKaRrQdPdx1o7WWnCzw3RTqeLPF3k8UtzvFpM0aDGTfyj3OZK5U3&X-Amz-Signature=67635ea5d6157d08662436a1f1c83d5e4395823a81376f44ad6e9c2ed75068ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
