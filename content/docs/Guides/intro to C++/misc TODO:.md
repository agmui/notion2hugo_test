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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466553BSUUV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDu8nMbBQ1emy2w8h6Q7%2BK0VGU28fn6jgvsG9EiIE2vAwIhAMVmoL3pnBM4J7prXMlwpwTIlGZTjCv9I4B3%2B51fi%2BYuKv8DCG8QABoMNjM3NDIzMTgzODA1IgwGGrkKeEUcvJvEjvkq3ANV1etHZNMlGN1as8J74YMX6SINBcVFoMeysnTEFBD9AhSZ5jIlbqCEZ%2F3SS79lRnAHcfSb0Cp7gr4QujjUOJ%2Buv0%2BPnDgykTMNOxBggx%2BtvWbHzhFxPl%2BAfOC2etH%2FsPvUet95IRKyRS5UNPF6WKxOat0%2Bt3v9lJoRawcUgDXRtiS4q0bHDhy6uw29H9ma%2FMtJ1S83R8XS02sa27LP34fbVrxxqkqk6XhGqTh9bncLapvyizn81Wjp9px1DscHOr%2BdNQupH431OCZqQSIUksBbwwqVy95tZQBf0T%2Bb%2FzbtRBVMxLy%2FS32Zt7h7PoS02djskp2Jw4qWu%2BJorcbYEUzXaybuIEU5fvgYxYzXTJ4ITeAL613r58mL5T270z1udJpe2P2hbJnomlGTG0RaLRA2F8nxZy%2FMLPVzPbmFh6QbWNT0Jvq%2Bb4BumHqD6TtcgAUg4agDSlIYTuReJxQPzAedPz0PgDMeH%2FimfPa%2BgvOR581jECVaYHf%2BPe5%2BSh58lERlPp%2FpoG7WX8lQimx%2BNq4zcjCgLGQQH6rkOZd5jMzPhLABZapjUzRAutIPcHqx89eR84o73QoXwNYFQ5nmMrtdI%2FeFiEoRZr2FDV9rR6X1Dh5zB2iF8BUYEg0%2FpzCQxOm%2BBjqkAQP%2F4F6PPXEyoKNm8hu0m%2B%2FqOdUKCtl1QDkC%2BqdA99xwTqpKdO4HZiC3%2BQYzBMOoDLR7Yi8Ovaw5MQlhBjeUJvMVh1m5Xwb4GNio9%2B9nBYkRQi%2BT%2FgK497eg7OPC4Dutyhf%2BOg%2FhlqNMF6V7iaW7EJUTsrlnRyOYf%2FGns9ub1Wv4knCk%2FManconfjz2siVtN8%2B5GtIjrlXCr7OvEJBq2T%2F0A4w7G&X-Amz-Signature=f633d5b7993937844b43383a3477a1c463202b68f3d09f7470dba1d2ceee80c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466553BSUUV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDu8nMbBQ1emy2w8h6Q7%2BK0VGU28fn6jgvsG9EiIE2vAwIhAMVmoL3pnBM4J7prXMlwpwTIlGZTjCv9I4B3%2B51fi%2BYuKv8DCG8QABoMNjM3NDIzMTgzODA1IgwGGrkKeEUcvJvEjvkq3ANV1etHZNMlGN1as8J74YMX6SINBcVFoMeysnTEFBD9AhSZ5jIlbqCEZ%2F3SS79lRnAHcfSb0Cp7gr4QujjUOJ%2Buv0%2BPnDgykTMNOxBggx%2BtvWbHzhFxPl%2BAfOC2etH%2FsPvUet95IRKyRS5UNPF6WKxOat0%2Bt3v9lJoRawcUgDXRtiS4q0bHDhy6uw29H9ma%2FMtJ1S83R8XS02sa27LP34fbVrxxqkqk6XhGqTh9bncLapvyizn81Wjp9px1DscHOr%2BdNQupH431OCZqQSIUksBbwwqVy95tZQBf0T%2Bb%2FzbtRBVMxLy%2FS32Zt7h7PoS02djskp2Jw4qWu%2BJorcbYEUzXaybuIEU5fvgYxYzXTJ4ITeAL613r58mL5T270z1udJpe2P2hbJnomlGTG0RaLRA2F8nxZy%2FMLPVzPbmFh6QbWNT0Jvq%2Bb4BumHqD6TtcgAUg4agDSlIYTuReJxQPzAedPz0PgDMeH%2FimfPa%2BgvOR581jECVaYHf%2BPe5%2BSh58lERlPp%2FpoG7WX8lQimx%2BNq4zcjCgLGQQH6rkOZd5jMzPhLABZapjUzRAutIPcHqx89eR84o73QoXwNYFQ5nmMrtdI%2FeFiEoRZr2FDV9rR6X1Dh5zB2iF8BUYEg0%2FpzCQxOm%2BBjqkAQP%2F4F6PPXEyoKNm8hu0m%2B%2FqOdUKCtl1QDkC%2BqdA99xwTqpKdO4HZiC3%2BQYzBMOoDLR7Yi8Ovaw5MQlhBjeUJvMVh1m5Xwb4GNio9%2B9nBYkRQi%2BT%2FgK497eg7OPC4Dutyhf%2BOg%2FhlqNMF6V7iaW7EJUTsrlnRyOYf%2FGns9ub1Wv4knCk%2FManconfjz2siVtN8%2B5GtIjrlXCr7OvEJBq2T%2F0A4w7G&X-Amz-Signature=6f1adb041507de1b1afbbda522ed29e135d7f2c81e3bfca2440fdf1d0989bc96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
