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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWXTPYRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAykyoSIkunFfwDOpMRprnVPyU39ur67dGSrAEgUaJLaAiAZwA0kcGSial%2FRWvibjh5zi4ZM9ClAATck8SYfzcpkFyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGX9Oy4pF22nrYcwZKtwD9%2FlQ7uns18uylXyD1t4ZCHlyB1IZoZTWBW3nBF6EFjiE%2BQ45O95t9Hca0wmXr%2BTZ5TqxIHdco0Jbdds094Tn5k6Hj5c2jYJ1Twl07SxXrZ1WwMFbW%2FODY96eIH7rgc8IdR%2BbHXhXwotNcyBerqhsFjGXb0%2FE8YbT15kQedBoNQjJf7Jc%2FlCIud1HC5ZmQs2igpM6NkiNfmBjX9QmpKD4ExfkB1EQ37MZOU74J7eS%2FM%2BIxp0ZqJwk85V4W3tevyEg5ntsCqHV7E0uQI2PU24Txgv5a%2F8xuYYH9K6X0mmeczYW8Nzrll%2FfuRuuoKNxW9WbnpHnfogAF9r7Gd9nDKwA45HUsLa2YPCWBblZixS8Whr%2BQ%2B3zJY%2FCE87x074fj%2B1gLzq8oN3VKi8XN%2FqVt%2BqYHfqqCRMtdsIxT%2Fgoo9k4hzEcjKHbVM%2FCufUEZkz587%2FzrSrvnTOvQGI1tiynxr1cyz%2FC4JyqKQU1rer7c1LckPa8R%2BDLmf4Nhr0bQgsNm5GWGtk9tQ2u6W8uMgnAiDgLNZrmz3nIDcTagQF4iteTHSnrgkUAoxTXT5UxstRu0h5VTxidLBc7mCMmEB1PCHX828bLy8mMcaUrefKWu%2FQ1k4zCePODf%2FTbhsjuaoAwt4SAwQY6pgE4xUkMdJGZCd02p5AoDOuLIpKtUyVDn1ElCeqRqu5qF7la3PpYTflJpX5w2mzUU9OiwGZ%2FCOI3077aCuZnmHkudzp1O%2Bb%2BUXOIjvZndrQa7OzXX96ZpmUkxHJzs8dBu3RDDLt59xHVaFH4PjA%2FSUPzp5AZ9Z8LzdXaXNLrHyXehQZTwloFuWKWGN3qi7%2B5myVYOF4apdvtgSfglWj7b%2ByrrqbaUA9e&X-Amz-Signature=948a2d3996a48f8921a61cdd9af1d0e7577de32f51c259691f732569920e9a96&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWXTPYRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAykyoSIkunFfwDOpMRprnVPyU39ur67dGSrAEgUaJLaAiAZwA0kcGSial%2FRWvibjh5zi4ZM9ClAATck8SYfzcpkFyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGX9Oy4pF22nrYcwZKtwD9%2FlQ7uns18uylXyD1t4ZCHlyB1IZoZTWBW3nBF6EFjiE%2BQ45O95t9Hca0wmXr%2BTZ5TqxIHdco0Jbdds094Tn5k6Hj5c2jYJ1Twl07SxXrZ1WwMFbW%2FODY96eIH7rgc8IdR%2BbHXhXwotNcyBerqhsFjGXb0%2FE8YbT15kQedBoNQjJf7Jc%2FlCIud1HC5ZmQs2igpM6NkiNfmBjX9QmpKD4ExfkB1EQ37MZOU74J7eS%2FM%2BIxp0ZqJwk85V4W3tevyEg5ntsCqHV7E0uQI2PU24Txgv5a%2F8xuYYH9K6X0mmeczYW8Nzrll%2FfuRuuoKNxW9WbnpHnfogAF9r7Gd9nDKwA45HUsLa2YPCWBblZixS8Whr%2BQ%2B3zJY%2FCE87x074fj%2B1gLzq8oN3VKi8XN%2FqVt%2BqYHfqqCRMtdsIxT%2Fgoo9k4hzEcjKHbVM%2FCufUEZkz587%2FzrSrvnTOvQGI1tiynxr1cyz%2FC4JyqKQU1rer7c1LckPa8R%2BDLmf4Nhr0bQgsNm5GWGtk9tQ2u6W8uMgnAiDgLNZrmz3nIDcTagQF4iteTHSnrgkUAoxTXT5UxstRu0h5VTxidLBc7mCMmEB1PCHX828bLy8mMcaUrefKWu%2FQ1k4zCePODf%2FTbhsjuaoAwt4SAwQY6pgE4xUkMdJGZCd02p5AoDOuLIpKtUyVDn1ElCeqRqu5qF7la3PpYTflJpX5w2mzUU9OiwGZ%2FCOI3077aCuZnmHkudzp1O%2Bb%2BUXOIjvZndrQa7OzXX96ZpmUkxHJzs8dBu3RDDLt59xHVaFH4PjA%2FSUPzp5AZ9Z8LzdXaXNLrHyXehQZTwloFuWKWGN3qi7%2B5myVYOF4apdvtgSfglWj7b%2ByrrqbaUA9e&X-Amz-Signature=c1ad6b66cce31aa990cf6e4a123c0ce1b7b215700ff7bba62b044bf04e3ec7fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
