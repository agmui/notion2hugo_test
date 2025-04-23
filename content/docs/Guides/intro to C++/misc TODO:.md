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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HPT4TNC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICstxTkgX0vspwNgQfhR4CFTz4hNBMTa8cHxQcs4AT02AiB1XHTQfnsikIhbWruTpcDB5cW1lgHPlDs%2B5NkXd41wJSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa3Pj3%2BtP5I8zLVtiKtwDFZMCm1n9qcYKryg4WR27xsj5TEigg3eac6VoC7Iw4iaqbqxiEBhlMPE%2FTBd%2B005LB%2BMOaAHOQXqWdeJOIH%2FHdeLp4bjdt032aT72KHFnlfysMiCo%2Faspx0w4CIxQsRRjU%2BVkyH7ehzUBvAkZjzlRYlXTc2JzqaEuWfhzReJ9IPU9hKZkwj2e8yDU%2BTgcsISHt6RQ9iqM4L5LoJ42r%2Bae43AbdcF%2BAb%2F5CM2fosp0pW7vyCvfRdpJBE776P6ZTvfnsE%2BX4o%2FAtKtvmeQdGrQCDarG5DuH%2BzuV4q%2BDqf637A1q3ZQjLTp2qEC8eOZNO0Fe8NFvATbFT%2BfAQWdJf7jYj1uEsMPT19vo95yM23kWm91eyBmw2w%2BbIiHoxGQFjAV06kYIZXcSZso2rbnek6HLzqLeBIOBkNc3vIcuUPBGHhpPkDv9SP988W3aCwQ42DKYyuliC3V0rBIHL00yZqzINjhk0F2aCQSALWgC89BtdcYVP3p2tEDxKXxtUWkmuV90j8bUNF337cDBZMIp567fUI2G22RvLHuFSENQkzsvpMKlAVJ5lD9NlqvFvHkbC6fhmjr7NyeljJpXsWMDxBEYjUBS0Ci7lf99pJW4xwzGvyTaU0kQO9aZjSymJxkwhISjwAY6pgGAT7G2g2uNJvQI01alf9od5wrFdtJ7KzwS2MqvfgSY6UiYJQ%2ByvPRBwKuJrsTpka2TEfx4PJbME1PrsBAYpLJxeba8vD1IUzMo3dSAIOS3D%2BWzInlDf7f6s0zGtlqk%2FZS%2FNhEcC1xDg6ByT7nhxcTSsdH3SVu%2BNDFhaTj0cz9sEpjyP0li4HwLkCaA32nG08H1sbsNjPfOhkPo5K1N7fAw9C7zj4dT&X-Amz-Signature=e55e44d8dbc1d875aaac829aa89d399676f682a3af635bdce662482abd5c62e2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HPT4TNC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICstxTkgX0vspwNgQfhR4CFTz4hNBMTa8cHxQcs4AT02AiB1XHTQfnsikIhbWruTpcDB5cW1lgHPlDs%2B5NkXd41wJSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa3Pj3%2BtP5I8zLVtiKtwDFZMCm1n9qcYKryg4WR27xsj5TEigg3eac6VoC7Iw4iaqbqxiEBhlMPE%2FTBd%2B005LB%2BMOaAHOQXqWdeJOIH%2FHdeLp4bjdt032aT72KHFnlfysMiCo%2Faspx0w4CIxQsRRjU%2BVkyH7ehzUBvAkZjzlRYlXTc2JzqaEuWfhzReJ9IPU9hKZkwj2e8yDU%2BTgcsISHt6RQ9iqM4L5LoJ42r%2Bae43AbdcF%2BAb%2F5CM2fosp0pW7vyCvfRdpJBE776P6ZTvfnsE%2BX4o%2FAtKtvmeQdGrQCDarG5DuH%2BzuV4q%2BDqf637A1q3ZQjLTp2qEC8eOZNO0Fe8NFvATbFT%2BfAQWdJf7jYj1uEsMPT19vo95yM23kWm91eyBmw2w%2BbIiHoxGQFjAV06kYIZXcSZso2rbnek6HLzqLeBIOBkNc3vIcuUPBGHhpPkDv9SP988W3aCwQ42DKYyuliC3V0rBIHL00yZqzINjhk0F2aCQSALWgC89BtdcYVP3p2tEDxKXxtUWkmuV90j8bUNF337cDBZMIp567fUI2G22RvLHuFSENQkzsvpMKlAVJ5lD9NlqvFvHkbC6fhmjr7NyeljJpXsWMDxBEYjUBS0Ci7lf99pJW4xwzGvyTaU0kQO9aZjSymJxkwhISjwAY6pgGAT7G2g2uNJvQI01alf9od5wrFdtJ7KzwS2MqvfgSY6UiYJQ%2ByvPRBwKuJrsTpka2TEfx4PJbME1PrsBAYpLJxeba8vD1IUzMo3dSAIOS3D%2BWzInlDf7f6s0zGtlqk%2FZS%2FNhEcC1xDg6ByT7nhxcTSsdH3SVu%2BNDFhaTj0cz9sEpjyP0li4HwLkCaA32nG08H1sbsNjPfOhkPo5K1N7fAw9C7zj4dT&X-Amz-Signature=3b9427e850f7094585bb1769c927dcdebb653fd2059574ab601046cb040048be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
