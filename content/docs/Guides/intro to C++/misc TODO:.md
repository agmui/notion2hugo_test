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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N4Z26JW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGY31rB8dqgxRkH%2F7mJfn%2F6qXlUb9CalutsKV2UMfqHaAiEAhA%2F2w1yMzeOTsBNfDdTjXWASVJdezUlzA%2FdC6N%2FyA7cqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALYfnL225A0Dp3i0CrcA%2FQu%2FisOLRJ9A%2FPeETed1ji7vaBoKOsQePxMEL2PrHqlmXPu84lXg9qZr2XWrmfXAai1lFgDNqDraKeL3bCi77uSUn1mIZQPQ1w32KmgLARXNT8XZ59nPd6lpM8Vr8jZj4RniP%2BQvYHLYrmhh%2BHVjHruajBsNfQQ9pacboiY%2BtyVppZ4GAf%2Bz2yV%2F2PAdOSmUGKs33HkblUL4Yma0JsP9URIYKl%2B6QfRocurQyOQixQQhyyXUOXlW8yk%2F7ewAKRCH2mfiQvJosefCq1nGygJBg2MZ9XEWu3oBuLfMqqQDhoOLGmBHKrmZ6siwT9Ueyu3tEX2co3d1aDJGBaaBruzs%2BDtgLgaanF9rLsm%2F7FwcXffVONkWYZ4VibqiWdY3tGdp%2B19XG8H5TW0NNpz1GPcOcj71najMjdk9X2zqYsS6xOBZrl3Wr1Txx69W9rqALMc8vnfpnsUa1PsOqqNmokBiBNYBYj5o9hlg5GsFTdrTd6lWjY%2Bym3p5pk1BH%2FBdXbxYG1n1pcqqmOz8zqFk%2Fn6yVoH958u2UeTwoOspe%2B1VfBMe%2BuVReLbQB3urmCtcCwCL8FS2a%2BYwJenZkZDkpajGESGg9oVb%2Bqn%2BswUjksD2BEzOCOavg7ADSddih9KMOnz3b8GOqUBuSNUjHrbFR7ng4F2HKnk1MSyLuXXA%2BUO1yJF5WVn2VUx96b4K9oYn%2Fm50UxUrDB8HE2CxfnscxtUZi5kzp58licjuZ3negBD%2F1bYgyg1o%2BAUzpAflOhvgzwOtVu0%2BhxLEtvHOBUBe7ABzJ1QPStFSj5%2FhgIgetrra87Wg3xydev6jd%2B1E104nwdL0Qou1%2BbWBEW72gT7wOuwQXNr6zlp%2FUpkvyQE&X-Amz-Signature=cde7963b3e920cc6c9fc109f06b14bc46080b4979ff7236d4249d891ead05fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N4Z26JW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGY31rB8dqgxRkH%2F7mJfn%2F6qXlUb9CalutsKV2UMfqHaAiEAhA%2F2w1yMzeOTsBNfDdTjXWASVJdezUlzA%2FdC6N%2FyA7cqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALYfnL225A0Dp3i0CrcA%2FQu%2FisOLRJ9A%2FPeETed1ji7vaBoKOsQePxMEL2PrHqlmXPu84lXg9qZr2XWrmfXAai1lFgDNqDraKeL3bCi77uSUn1mIZQPQ1w32KmgLARXNT8XZ59nPd6lpM8Vr8jZj4RniP%2BQvYHLYrmhh%2BHVjHruajBsNfQQ9pacboiY%2BtyVppZ4GAf%2Bz2yV%2F2PAdOSmUGKs33HkblUL4Yma0JsP9URIYKl%2B6QfRocurQyOQixQQhyyXUOXlW8yk%2F7ewAKRCH2mfiQvJosefCq1nGygJBg2MZ9XEWu3oBuLfMqqQDhoOLGmBHKrmZ6siwT9Ueyu3tEX2co3d1aDJGBaaBruzs%2BDtgLgaanF9rLsm%2F7FwcXffVONkWYZ4VibqiWdY3tGdp%2B19XG8H5TW0NNpz1GPcOcj71najMjdk9X2zqYsS6xOBZrl3Wr1Txx69W9rqALMc8vnfpnsUa1PsOqqNmokBiBNYBYj5o9hlg5GsFTdrTd6lWjY%2Bym3p5pk1BH%2FBdXbxYG1n1pcqqmOz8zqFk%2Fn6yVoH958u2UeTwoOspe%2B1VfBMe%2BuVReLbQB3urmCtcCwCL8FS2a%2BYwJenZkZDkpajGESGg9oVb%2Bqn%2BswUjksD2BEzOCOavg7ADSddih9KMOnz3b8GOqUBuSNUjHrbFR7ng4F2HKnk1MSyLuXXA%2BUO1yJF5WVn2VUx96b4K9oYn%2Fm50UxUrDB8HE2CxfnscxtUZi5kzp58licjuZ3negBD%2F1bYgyg1o%2BAUzpAflOhvgzwOtVu0%2BhxLEtvHOBUBe7ABzJ1QPStFSj5%2FhgIgetrra87Wg3xydev6jd%2B1E104nwdL0Qou1%2BbWBEW72gT7wOuwQXNr6zlp%2FUpkvyQE&X-Amz-Signature=a11ddc939eb42fd4c8b1fd0e86207e92854f5644897a9877937da8decd6fffed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
