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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELIMSXZ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4zY2dHv5%2BnTPd%2BjmiX4OGZ6bbXq4Mw0q8TBcfx0uhZAiEAwYLCOKO1KKexlJpGnwRoxEpl1ndMSBe9J21kGBmc2xEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIg7eTZaJNH0Zg6MCrcAyDYlm5tIZBXO4wQoes5zg4upedlK6QpbeHEhHBcwJG9Tny7DQjCUrT%2Fhx6rR%2BySjFMCojYJYcFpDH5PzokH2rbkgIwXHnkE8fhnWahYKvj%2BKs9%2B7y392eJ0VtJcnk5sKVqRkaIkvyXZIQWZB9Kkmn9Ew9GpSoIhhHNB12Wa4GCgJU6Og5noSwW2e5PTbyznhfOY%2FbAxav5sVHEYXc8FhX8SQ04Sxltwkla9xkA662GYGlrKGkclrMQh0xWakotb7arg7NpsY%2BKmLgCARv8Q7vW7jB3ZPIdBnH6I9qbrb4UmyhL5brny2eXGWx0ZTjALVqCdM%2FEN4ncaleqt7%2BcY9rxFP27i14jLDGn48OuH1VYksdg9iOKnxn6jNY5CfBNAY9xBZsGYyrm7TNbZf4c5x3YSMn2%2FDJCrUoXSRLHl5BwNnrbCzOV16mBoVG0LEc2Y3Lxl9t7SkXRh%2BimJowaJ1PNqIWOcbazoys99bxCHhS%2BEjiOKio2a9EyxYiccLuE3sOFTT2HE93hcK9dRFYiN%2BocnuhoipTFpebtoER9cVhtX7HerA74TpFvM4FpokxNNuth0y81wSbC%2FKOs%2BrBqLUXBMamoXv66dxYKFpNtegvUtcLEOtRziWqZ5dWYsMJ6z1sIGOqUBLhT8j9Ju%2FxL7dcMQTbBuX2yZ%2F3LwW%2B3495XklmRxMG4Aa%2F31RvYt1ShiFGj%2BMy%2BZM66zAqvXN7GAm76jZO8WUXG62PBza8YqA8FaqyF1s%2Ff%2BchQlZmYwfBcqyAJhxz3IuNb979T%2FtzZT2vFL8Z6SlMn2Cbsr9Os5uAvfRIB5XbSe3IWfiAPFjtSuuBY7JgmROQCJo5yexldsbCl8QuXcQV4atpUV&X-Amz-Signature=22d65831bebfcd3cfd6465824e8e40f05bf4726bd6a2322348be13bad9535912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELIMSXZ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4zY2dHv5%2BnTPd%2BjmiX4OGZ6bbXq4Mw0q8TBcfx0uhZAiEAwYLCOKO1KKexlJpGnwRoxEpl1ndMSBe9J21kGBmc2xEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIg7eTZaJNH0Zg6MCrcAyDYlm5tIZBXO4wQoes5zg4upedlK6QpbeHEhHBcwJG9Tny7DQjCUrT%2Fhx6rR%2BySjFMCojYJYcFpDH5PzokH2rbkgIwXHnkE8fhnWahYKvj%2BKs9%2B7y392eJ0VtJcnk5sKVqRkaIkvyXZIQWZB9Kkmn9Ew9GpSoIhhHNB12Wa4GCgJU6Og5noSwW2e5PTbyznhfOY%2FbAxav5sVHEYXc8FhX8SQ04Sxltwkla9xkA662GYGlrKGkclrMQh0xWakotb7arg7NpsY%2BKmLgCARv8Q7vW7jB3ZPIdBnH6I9qbrb4UmyhL5brny2eXGWx0ZTjALVqCdM%2FEN4ncaleqt7%2BcY9rxFP27i14jLDGn48OuH1VYksdg9iOKnxn6jNY5CfBNAY9xBZsGYyrm7TNbZf4c5x3YSMn2%2FDJCrUoXSRLHl5BwNnrbCzOV16mBoVG0LEc2Y3Lxl9t7SkXRh%2BimJowaJ1PNqIWOcbazoys99bxCHhS%2BEjiOKio2a9EyxYiccLuE3sOFTT2HE93hcK9dRFYiN%2BocnuhoipTFpebtoER9cVhtX7HerA74TpFvM4FpokxNNuth0y81wSbC%2FKOs%2BrBqLUXBMamoXv66dxYKFpNtegvUtcLEOtRziWqZ5dWYsMJ6z1sIGOqUBLhT8j9Ju%2FxL7dcMQTbBuX2yZ%2F3LwW%2B3495XklmRxMG4Aa%2F31RvYt1ShiFGj%2BMy%2BZM66zAqvXN7GAm76jZO8WUXG62PBza8YqA8FaqyF1s%2Ff%2BchQlZmYwfBcqyAJhxz3IuNb979T%2FtzZT2vFL8Z6SlMn2Cbsr9Os5uAvfRIB5XbSe3IWfiAPFjtSuuBY7JgmROQCJo5yexldsbCl8QuXcQV4atpUV&X-Amz-Signature=7c56a76a49cd8b9f67ad36185f5c8e2dabcc5fbcca8834ef3bda3653a0a2393f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
