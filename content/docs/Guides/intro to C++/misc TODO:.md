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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QITREX5F%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcTmIb86%2F8n%2FQclK5ehkGJQNBmfdBU%2Fl4SiM1PJ%2FAnfAiA9r8B39Q0pkVFFM9tr7GOv2phuoXnzoCLNC%2FR%2Ft6QmXCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZha0YLoZEbApVIVlKtwD9mVhaGxsG5b93UcEHITWouMYq%2FYL5C59praQlfslOIwRCu9BINjSkZIOJe4KIiiFJAulOh%2F7kO6sNr2WZ%2F5ijoJIuyjNYLYpdZOB62a53abMK1vQ98wtv9uL4Razis8eCCYafFUZ%2F5qDnudBkg2xY87mEGY6d22iJoEbEdcLcI3IyYRAbIO6H8rsCM%2FUr1aTMjjvYyG7OUVHo6us6ujVBRqLQdJ5YBfZtZYcVCTAgKDggf8c4PGu6tV%2FQdl4p4znNkJYQ%2FvhW2xOD9UmFCJUNy0aqQA%2BQ6GqwP53VMyKekxTkYl9pfrvLanycwyeH5RvI%2BVHZRjj5oMur5McS4He4m3SAP716lSZ%2FttW9lCaRqVaqXb%2FYScysEafj704F7TCWutnBgG0nwjvrgBClRDQhvUy7u%2BEtSJLrgfxpDb9S6YYJp1z96mJ19RV4%2BbnssgAACyH7ChLk2bjMYiEPV2yY9xe6INV4Vn8My8a58G7wbo%2FbHYiEvhlGfmbiKtWqMgY60R4FPeqMw18sw9PLb7Skin1%2Fb3FNE4lIoto3fZzMkh1G%2FOKLNUmkkOaC86iuTpu0arx4OKOi2fyhjjtvNIW5QVnZQ34X%2BGX8YLoRgRQjAObhhZjDPxHiof3a4sw7bDywAY6pgEn8hSADzh%2Ff2JrX9CoPMlUndf4eXk6xbm%2Ft3yfTVYEQWsiBwUr9tQqd%2ByBxWLitjVKMj91yjAAunIHTFel%2Byx300ooJYNx4P5zTnl1MhOKg7lOxVeaCbB5Cb%2FMncGSiqlu%2FquLyO%2Fkwb35Qol3chOqGqM8Zb%2BVSz7B1kp31Aw3DkvF5jYk1acuyYL1AgYlHR01xVSSN%2ByRilOgfeo5DYC3gJdHd04X&X-Amz-Signature=9df40c259634132ab5d83db6cd859485d89fdd586b030c80b594ddc22cac391b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QITREX5F%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcTmIb86%2F8n%2FQclK5ehkGJQNBmfdBU%2Fl4SiM1PJ%2FAnfAiA9r8B39Q0pkVFFM9tr7GOv2phuoXnzoCLNC%2FR%2Ft6QmXCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZha0YLoZEbApVIVlKtwD9mVhaGxsG5b93UcEHITWouMYq%2FYL5C59praQlfslOIwRCu9BINjSkZIOJe4KIiiFJAulOh%2F7kO6sNr2WZ%2F5ijoJIuyjNYLYpdZOB62a53abMK1vQ98wtv9uL4Razis8eCCYafFUZ%2F5qDnudBkg2xY87mEGY6d22iJoEbEdcLcI3IyYRAbIO6H8rsCM%2FUr1aTMjjvYyG7OUVHo6us6ujVBRqLQdJ5YBfZtZYcVCTAgKDggf8c4PGu6tV%2FQdl4p4znNkJYQ%2FvhW2xOD9UmFCJUNy0aqQA%2BQ6GqwP53VMyKekxTkYl9pfrvLanycwyeH5RvI%2BVHZRjj5oMur5McS4He4m3SAP716lSZ%2FttW9lCaRqVaqXb%2FYScysEafj704F7TCWutnBgG0nwjvrgBClRDQhvUy7u%2BEtSJLrgfxpDb9S6YYJp1z96mJ19RV4%2BbnssgAACyH7ChLk2bjMYiEPV2yY9xe6INV4Vn8My8a58G7wbo%2FbHYiEvhlGfmbiKtWqMgY60R4FPeqMw18sw9PLb7Skin1%2Fb3FNE4lIoto3fZzMkh1G%2FOKLNUmkkOaC86iuTpu0arx4OKOi2fyhjjtvNIW5QVnZQ34X%2BGX8YLoRgRQjAObhhZjDPxHiof3a4sw7bDywAY6pgEn8hSADzh%2Ff2JrX9CoPMlUndf4eXk6xbm%2Ft3yfTVYEQWsiBwUr9tQqd%2ByBxWLitjVKMj91yjAAunIHTFel%2Byx300ooJYNx4P5zTnl1MhOKg7lOxVeaCbB5Cb%2FMncGSiqlu%2FquLyO%2Fkwb35Qol3chOqGqM8Zb%2BVSz7B1kp31Aw3DkvF5jYk1acuyYL1AgYlHR01xVSSN%2ByRilOgfeo5DYC3gJdHd04X&X-Amz-Signature=3233265a5a195a2f09da06556b7acbff81dfae22157881e6a32746b4a7171df2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
