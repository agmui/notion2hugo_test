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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHJ4V72%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDJ2JP47oDykfXbWdue4cE4fbRzgGU9oK63TOvOcTZ%2FGAIgR6f4lyNGZaN7QeiYHG%2BFTI4FNh1bjFU8r7m%2FVs341vUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbh4%2FPxT0qpgCb%2BHircAwJGeqEvY3Gw6OzJ1ISBsr4UJPkv%2Ba0GQrOrX5XsJuiKcU8WxE%2B8hqMLpcVUaVlN8I5gQfGYZHzTqFIMkYJs1HFgVEY%2B5ZtR1dURD4WetRSAqe0StnWKhd%2BSwGfuf2JPAYU8%2FeqvBddFPh73oSTCfM8k6NBM1sbRJMcJLZcy8ZubFRAStqZRRzhI3ecI8gIJ7Mrjzi0xnaa%2FHQJ%2FUR4jw0%2F1%2B%2BQZrb0luHDWGcleGTrxmd0AuSOn1djVPLOaI28k9LDOJUIxC6xx4ZeZrl7LEc%2BvA%2B50ugCVumkzEONiX8UfYFsVw%2FiJZXl5VyU1s54vThE%2F9LZbY%2FRIVhvKY5yymN%2BFckNBx24hBYcCl8fq0of9PbxeiAUqmOEnhPxnfdbH1ezLb1ai3GIdoJetGWVR65ttDbHN4%2FJhSa1qHtDet2IditISacEgu7fbqXY6vAnD%2BaP8O%2F8obzkzugt6kEIqetlMPzZ9AKR7QB423dfSSWNccLtXdivmIq%2FGNHoUbdd8KZUSi300hYwtiz16xaYvb8Q4et9WNwmIqUOXHGHj7dCcrzWlw21CKz692CjspDlTEx4rNZ7DM%2FSxkp6hnNDX5wpWrm47cuKHqz9l2m26cBfi8WpjaaIjOb2%2FNhQvMMqap8IGOqUBbc%2BXmx%2BgfacNSX9xSTapbCsBNg%2BOciYUP2lZJhr%2F7dqxhtLg9n4vgw0BDrZALaGsZuMSUzRzVz512Va8AcUMqPtKMHZl9eIrT1yW0BfkO3tR9SywhL0grZ9yGhCB7hy4Eoma2OhrZXlWiW%2BmdTr3c%2F%2BD48p9agDxkMoUXm7g7CDABYbCNagN6SM2hM4OLYPX512Bj7gdOs6bez%2FQQveFU%2FySx1xG&X-Amz-Signature=ba382cbb050151552e23b46f9e37edefbadc5de720c3175d1dc4a4a4c561598d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHJ4V72%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDJ2JP47oDykfXbWdue4cE4fbRzgGU9oK63TOvOcTZ%2FGAIgR6f4lyNGZaN7QeiYHG%2BFTI4FNh1bjFU8r7m%2FVs341vUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbh4%2FPxT0qpgCb%2BHircAwJGeqEvY3Gw6OzJ1ISBsr4UJPkv%2Ba0GQrOrX5XsJuiKcU8WxE%2B8hqMLpcVUaVlN8I5gQfGYZHzTqFIMkYJs1HFgVEY%2B5ZtR1dURD4WetRSAqe0StnWKhd%2BSwGfuf2JPAYU8%2FeqvBddFPh73oSTCfM8k6NBM1sbRJMcJLZcy8ZubFRAStqZRRzhI3ecI8gIJ7Mrjzi0xnaa%2FHQJ%2FUR4jw0%2F1%2B%2BQZrb0luHDWGcleGTrxmd0AuSOn1djVPLOaI28k9LDOJUIxC6xx4ZeZrl7LEc%2BvA%2B50ugCVumkzEONiX8UfYFsVw%2FiJZXl5VyU1s54vThE%2F9LZbY%2FRIVhvKY5yymN%2BFckNBx24hBYcCl8fq0of9PbxeiAUqmOEnhPxnfdbH1ezLb1ai3GIdoJetGWVR65ttDbHN4%2FJhSa1qHtDet2IditISacEgu7fbqXY6vAnD%2BaP8O%2F8obzkzugt6kEIqetlMPzZ9AKR7QB423dfSSWNccLtXdivmIq%2FGNHoUbdd8KZUSi300hYwtiz16xaYvb8Q4et9WNwmIqUOXHGHj7dCcrzWlw21CKz692CjspDlTEx4rNZ7DM%2FSxkp6hnNDX5wpWrm47cuKHqz9l2m26cBfi8WpjaaIjOb2%2FNhQvMMqap8IGOqUBbc%2BXmx%2BgfacNSX9xSTapbCsBNg%2BOciYUP2lZJhr%2F7dqxhtLg9n4vgw0BDrZALaGsZuMSUzRzVz512Va8AcUMqPtKMHZl9eIrT1yW0BfkO3tR9SywhL0grZ9yGhCB7hy4Eoma2OhrZXlWiW%2BmdTr3c%2F%2BD48p9agDxkMoUXm7g7CDABYbCNagN6SM2hM4OLYPX512Bj7gdOs6bez%2FQQveFU%2FySx1xG&X-Amz-Signature=eb8e76cc2dce767dd11cf2e2825788759a4db05ef8b85d2e638cc651e7dc6c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
