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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ST66JPW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCQub9wcV3UMOwQSo6LQrbLAYizqvJtk%2FrWCOnY8BZz6QIhAMcPBkqieaud3udAQu9ozLWpWF2UZK94P7fpJANWUAMWKv8DCGIQABoMNjM3NDIzMTgzODA1Igw7%2BozTU%2BHuduhoODQq3AOH1wKtUWBNHs6SNJNwBWpFtt4riKE%2Ffw5vafUpP1IwwSDQSfMhDCDWQwctN%2BwISMV7yH2qTVEHddyCDdsinZotuxYOrgFrDwF1taaYV5xIGfL%2Bciq4jIKQ8h1OUC%2FrM12x9b7r8dbCE1CnItJid9GQW0QBpalaVJdjFBWcUGV2Z8%2BDNqWA5xNK91qsS9n1xoywRYBgMcXxjogVF%2B5wKDOJHrXU043TRF731VvvIv%2BytiaivSwoCJiR3AWpsb127O5z8mp56Bnw%2FngqA%2BSx%2Bt2fqUQw1esOuGbDhTaISkcA9EVT1Su0eCRtdGDV%2FyXaSm6Q14JtJNuttx1h8tHHCts7tbHft%2BZF6KU4B%2BLE2682BV1nIW4p2HH4vr9PIuK7bjX%2BP8d%2BX7Xe%2Bha0PoLHauW174vQQ6wdujdTLqwSGR2exPnkmr54XcYkWaqHVCtwnGrSyU7TvW8wm4WIdHWFeeKWRfdviCmCTYSEIv%2FfaUiCTvOxa%2FAfpWXpyCByCTDSBtUNsluxnO5IslpAzbYhzZ2PJAr0NDnstjT68o3Vjmp2rxkMmouX8LXOVZvOfY%2FQIyB1CKO47QrKDQ0t52%2BVORmMxIgQG4kKGmXT3qvwkX6ETZVnnhpXSFLKS7lUOjCutN%2FDBjqkAcbqzIOhbmooZnolMN5TWLB%2F%2FYXiM0NO33hC3hzbC1hwUyu9fkiR%2FtYuK%2Brt58%2FXdoEWZqI0y5deetDdbmMY%2FM9iXORqYKx1Jy1V%2BmfdeP%2Bh5vYa0bQu0u6YV04T8UjtZYYW1wE1%2BMokEF0QL2wForkG9u28fHSASLYi%2FbLOMbQ1DEys3oHmASRnFHIbRy9rFT4yxWISToMNSMy4LGlWih8x4slv&X-Amz-Signature=374d47e960ad6d0ce76cfbb21e9cbfad66eacd2f7e931ac7800757f5c6bf47db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ST66JPW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCQub9wcV3UMOwQSo6LQrbLAYizqvJtk%2FrWCOnY8BZz6QIhAMcPBkqieaud3udAQu9ozLWpWF2UZK94P7fpJANWUAMWKv8DCGIQABoMNjM3NDIzMTgzODA1Igw7%2BozTU%2BHuduhoODQq3AOH1wKtUWBNHs6SNJNwBWpFtt4riKE%2Ffw5vafUpP1IwwSDQSfMhDCDWQwctN%2BwISMV7yH2qTVEHddyCDdsinZotuxYOrgFrDwF1taaYV5xIGfL%2Bciq4jIKQ8h1OUC%2FrM12x9b7r8dbCE1CnItJid9GQW0QBpalaVJdjFBWcUGV2Z8%2BDNqWA5xNK91qsS9n1xoywRYBgMcXxjogVF%2B5wKDOJHrXU043TRF731VvvIv%2BytiaivSwoCJiR3AWpsb127O5z8mp56Bnw%2FngqA%2BSx%2Bt2fqUQw1esOuGbDhTaISkcA9EVT1Su0eCRtdGDV%2FyXaSm6Q14JtJNuttx1h8tHHCts7tbHft%2BZF6KU4B%2BLE2682BV1nIW4p2HH4vr9PIuK7bjX%2BP8d%2BX7Xe%2Bha0PoLHauW174vQQ6wdujdTLqwSGR2exPnkmr54XcYkWaqHVCtwnGrSyU7TvW8wm4WIdHWFeeKWRfdviCmCTYSEIv%2FfaUiCTvOxa%2FAfpWXpyCByCTDSBtUNsluxnO5IslpAzbYhzZ2PJAr0NDnstjT68o3Vjmp2rxkMmouX8LXOVZvOfY%2FQIyB1CKO47QrKDQ0t52%2BVORmMxIgQG4kKGmXT3qvwkX6ETZVnnhpXSFLKS7lUOjCutN%2FDBjqkAcbqzIOhbmooZnolMN5TWLB%2F%2FYXiM0NO33hC3hzbC1hwUyu9fkiR%2FtYuK%2Brt58%2FXdoEWZqI0y5deetDdbmMY%2FM9iXORqYKx1Jy1V%2BmfdeP%2Bh5vYa0bQu0u6YV04T8UjtZYYW1wE1%2BMokEF0QL2wForkG9u28fHSASLYi%2FbLOMbQ1DEys3oHmASRnFHIbRy9rFT4yxWISToMNSMy4LGlWih8x4slv&X-Amz-Signature=af2f56223f687060a516146de0497b6c3aa15e28b760de028d7dd702fd7a6fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
