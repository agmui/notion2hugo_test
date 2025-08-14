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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INY2H5W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJoBmzUAgmzQv7sTKPv774E8yo2Rh7kYXYb4P5GIiyJAiBaE77pccgj9K9a%2BgCovrguR0TjelgpzGZdZA73K56IHSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMmyowAFt3Ph2Poj7VKtwDMPFgGP4vBTMox6Mabd8UcezwHs1PfG%2F%2BEtc8vG9FlDEmhBm8vdsWn5EMpoU1%2B4ZW0eUWp3V1GQXSQELbJaPyLaPhyasAv%2BcFXNz8ISnYCg5PV4gNjvFOwFoWPB7jGK%2Bj%2BgmEXkaZ2m1Q5SC4VkKld9G3K%2FZ4vNst1%2FrAboduJLOR5jFNHc2tgXWnqEaPfTjp3Fp81En7w6SX2PMVuT0gBl6ZtYdxRnkFrPCi3iUc4F2AQfVH49%2BJQOkQb5ZyE%2Fb05xlfT%2BIW9AL7nyQ6BEuQuq0%2B2z7WHgiOkD4nY1xA8fT48Gi%2BFtBvuzGybMw6PkRZcD3frAB0JFZa0Z5X45huHeKN5d3qaQmOD377mt1mN3N0p5mhHSBfV8BpiO8cHgvoLyDIf8BoTbG8Xtic0%2BZiTcbXuD7V7bD0SWN4SiBWNzlLZY4QXq2ZyOcS2ZyQPHabcseUVxddlT8wcSz69vb5ehiSv%2Fekb1j9zkftOwc12fSzQ2f6LVjSGJnQhCff4q1p1Q8TLgaV5YKAJ2%2BTNA3YgX1eiqsJGjk500KWAP1ci8ckEwx8pBPU6GeDsmq8PqLYL8jIrmTQhuBLOJD8tqDD9RxBL26YtWvgCLjvrElKdUmWnueBb8gXR2aOrZow%2B4v1xAY6pgGQkWrc%2FKdaS3v8Ze%2BACvTzqZjOrwEpZfjWEKSqmxPB2C8PbEUT8RrlXYOqi2l95Cga6G%2Fl%2FXOrDhev6gS1p5GufVngobC63on3JZ%2Ftc8%2B1JO7D79tGI20Ee%2Beo9lCrraYO8iKm6K9vz2KHx534oftx7cJ7gZqRRg8%2BkervZo%2FTTNGnOx97qUMvup9WROW%2FKUfEc4JVUZf%2BRj%2FjcGtYgMK%2FNT3RuYEm&X-Amz-Signature=126afe537268f6f9da6e44a7043d67e1918de3a91cd25ac811bf0439bde17ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INY2H5W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJoBmzUAgmzQv7sTKPv774E8yo2Rh7kYXYb4P5GIiyJAiBaE77pccgj9K9a%2BgCovrguR0TjelgpzGZdZA73K56IHSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMmyowAFt3Ph2Poj7VKtwDMPFgGP4vBTMox6Mabd8UcezwHs1PfG%2F%2BEtc8vG9FlDEmhBm8vdsWn5EMpoU1%2B4ZW0eUWp3V1GQXSQELbJaPyLaPhyasAv%2BcFXNz8ISnYCg5PV4gNjvFOwFoWPB7jGK%2Bj%2BgmEXkaZ2m1Q5SC4VkKld9G3K%2FZ4vNst1%2FrAboduJLOR5jFNHc2tgXWnqEaPfTjp3Fp81En7w6SX2PMVuT0gBl6ZtYdxRnkFrPCi3iUc4F2AQfVH49%2BJQOkQb5ZyE%2Fb05xlfT%2BIW9AL7nyQ6BEuQuq0%2B2z7WHgiOkD4nY1xA8fT48Gi%2BFtBvuzGybMw6PkRZcD3frAB0JFZa0Z5X45huHeKN5d3qaQmOD377mt1mN3N0p5mhHSBfV8BpiO8cHgvoLyDIf8BoTbG8Xtic0%2BZiTcbXuD7V7bD0SWN4SiBWNzlLZY4QXq2ZyOcS2ZyQPHabcseUVxddlT8wcSz69vb5ehiSv%2Fekb1j9zkftOwc12fSzQ2f6LVjSGJnQhCff4q1p1Q8TLgaV5YKAJ2%2BTNA3YgX1eiqsJGjk500KWAP1ci8ckEwx8pBPU6GeDsmq8PqLYL8jIrmTQhuBLOJD8tqDD9RxBL26YtWvgCLjvrElKdUmWnueBb8gXR2aOrZow%2B4v1xAY6pgGQkWrc%2FKdaS3v8Ze%2BACvTzqZjOrwEpZfjWEKSqmxPB2C8PbEUT8RrlXYOqi2l95Cga6G%2Fl%2FXOrDhev6gS1p5GufVngobC63on3JZ%2Ftc8%2B1JO7D79tGI20Ee%2Beo9lCrraYO8iKm6K9vz2KHx534oftx7cJ7gZqRRg8%2BkervZo%2FTTNGnOx97qUMvup9WROW%2FKUfEc4JVUZf%2BRj%2FjcGtYgMK%2FNT3RuYEm&X-Amz-Signature=a9ae216567177fc02a9cdd3646f07d2c315e75502cb01001b0a7764cfc91703a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
