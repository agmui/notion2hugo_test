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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6FNLY2O%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBerLfR0YrnZzGxQltCdRedP4Hill%2B98%2FJ0Zx9UPbrZTAiEA62JjpBC3146O8Oypxo7pa3GvMh8Y%2BBKSwoiwRwbHmbAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNpw%2FFyQ1qlYDeGBgCrcA02MqS7bsur5U87pGgRp4TFkQUk6FZ1JJEe2P039F%2BQo9R9dllPhe1Xy2baJaK%2BMS0Ma%2FW0Vir5YODI8fSJcEgmagEUjfhK8p%2BJMaIC4Vme4vKcM5igOtn1CCXLHIFpiUYBwMX5EEoFxQNzqtHs1HgQqJBD%2BV%2BqqEnHRTXn8tgsF3gOI0jyzs2KYelnwWmbiuu8XeNfFq3xwxEDvjjc6h%2FJxOP4lwJOGZOdK%2FxCJuGyHUxYM%2Bg7UGirJeatycTAT6eecAlTq2uBpfx2ofjMVBhs2HD2ls4Rs%2FobabxXn8oFg4mcZoyDyf%2Bj5WTmMAQvXHYw7k6H83ftjdzxnQ%2B6JjkUaIKoQnO41o9lLYvazxGg4IqfAUuQd%2BydKbfB1JsowbnAs%2BWbr%2FounbWFrN4PxaIzF9FASF0JpPS982csQmi%2BA%2Fiow7ajEaBYQPvr%2BXHV%2FOA6Ca0tUGv7x27xXKhJXQGGzAEXKGLramhth6aG8UZ5QjNwAEmE%2B9vREq0m1XERbMews4wb0hLYjwyzDvdMnTA%2B8%2B8KG%2BqbqqdF6yiwj09HV4Swvqmjgvudj9GCFGC1nv66x6u%2B7DjK3f%2BnzBaKNqq9C7W27%2Bbd%2FggMEDevPPCIFWq44Ky1E0nemCcN1MK3skr8GOqUBvdp3RaG%2FEzZ4CqWJ1qHdiEuydRItj%2BZMu9NtVI2KseEvI%2B0b2M%2F%2BzuShlseLsRmJOBLf4sR2WC4qgVJvpVaTxg9%2Fkk3mSc31H0dbM7o4XlqH4hM7bYebwk6BeSOwg6VNznPo0fSHr1nvjlum8eHmA6Yzhn649HFVTjPOV2AlGpvl%2FWw1cYWfjaA%2FhupfH0F2X68hIvv%2FFW3Pq2%2FdxO2ji1BxkHwW&X-Amz-Signature=be9122dd47a36cd742e190d69d541c7994edfc315574d5c3be848200d17c3970&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6FNLY2O%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBerLfR0YrnZzGxQltCdRedP4Hill%2B98%2FJ0Zx9UPbrZTAiEA62JjpBC3146O8Oypxo7pa3GvMh8Y%2BBKSwoiwRwbHmbAq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNpw%2FFyQ1qlYDeGBgCrcA02MqS7bsur5U87pGgRp4TFkQUk6FZ1JJEe2P039F%2BQo9R9dllPhe1Xy2baJaK%2BMS0Ma%2FW0Vir5YODI8fSJcEgmagEUjfhK8p%2BJMaIC4Vme4vKcM5igOtn1CCXLHIFpiUYBwMX5EEoFxQNzqtHs1HgQqJBD%2BV%2BqqEnHRTXn8tgsF3gOI0jyzs2KYelnwWmbiuu8XeNfFq3xwxEDvjjc6h%2FJxOP4lwJOGZOdK%2FxCJuGyHUxYM%2Bg7UGirJeatycTAT6eecAlTq2uBpfx2ofjMVBhs2HD2ls4Rs%2FobabxXn8oFg4mcZoyDyf%2Bj5WTmMAQvXHYw7k6H83ftjdzxnQ%2B6JjkUaIKoQnO41o9lLYvazxGg4IqfAUuQd%2BydKbfB1JsowbnAs%2BWbr%2FounbWFrN4PxaIzF9FASF0JpPS982csQmi%2BA%2Fiow7ajEaBYQPvr%2BXHV%2FOA6Ca0tUGv7x27xXKhJXQGGzAEXKGLramhth6aG8UZ5QjNwAEmE%2B9vREq0m1XERbMews4wb0hLYjwyzDvdMnTA%2B8%2B8KG%2BqbqqdF6yiwj09HV4Swvqmjgvudj9GCFGC1nv66x6u%2B7DjK3f%2BnzBaKNqq9C7W27%2Bbd%2FggMEDevPPCIFWq44Ky1E0nemCcN1MK3skr8GOqUBvdp3RaG%2FEzZ4CqWJ1qHdiEuydRItj%2BZMu9NtVI2KseEvI%2B0b2M%2F%2BzuShlseLsRmJOBLf4sR2WC4qgVJvpVaTxg9%2Fkk3mSc31H0dbM7o4XlqH4hM7bYebwk6BeSOwg6VNznPo0fSHr1nvjlum8eHmA6Yzhn649HFVTjPOV2AlGpvl%2FWw1cYWfjaA%2FhupfH0F2X68hIvv%2FFW3Pq2%2FdxO2ji1BxkHwW&X-Amz-Signature=d8e2eb6ca83b9f19fa6f4dd73af8b7f220713bc6b95cab22089042e8d6fc4eae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
