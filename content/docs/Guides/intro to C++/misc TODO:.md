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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDDLZKP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDKV0nnVoIdv2RxC8Fw3cFZKLukulZkKXQuZ1BzaGYhAiBrl2rg91hFn%2Bn64e8giVJc7rsMpTfYUEh5cMpB%2Bef7XSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMch%2FpgwULpZaFr%2FEKKtwDKoBwYZEeab64ETQk06RZ1ADZcBG1hAbthlfY7smebFcbZuwfYxfnjtmn6xeDKUTT%2BIQ8CvVSbn3TW%2Bgb1psTpqeBGIiYjGLuuHJ7iRuUQ4v0tw4zZiLjpd2HjPLVLEbbIYrlt%2Fzc8wTsiCRxWV1bqSMvnmccRiOx5NzAkxU7wD2oL0FP%2B5EKCkQUDJiyml9QWS%2BducItETexrwDJwXJDtYAp75pHRJOvzABFfquDpyqzishi17%2BkfsAYUgFXe%2Bub6qIP%2B5lbS4RVXBc38oYO1Jk4I7G8jc0GBVVjDfO5c6rwoNhVoXZ80birNxeWewAdifMme5l7skPKU8vN0KlEP4RESZh%2BWMn2WCfzHajDZvCbfl0SngLeW3XZRPor8S%2B%2BV3qQ2QT9G4TndsGWJQ0%2FsiQNcjNZJofAcouJD1WoJVOGCPJo6cvW%2FIDIus7qlBYakVvBh4Un7Rq63462%2FQmZGRi7sI7jB5X1sHMi%2FodY%2BBUjP9TDQ9hLTKmLLclYfmhNIIfncVfEF4x7A7oXIidEGnzH4E2l4jxZrah05UypNO1Nyo5BJCEiopm1WUMktl2dqsqUKb3xmkHBlhOrDgvJU5eCy%2FKEdeCIsLQ5PpO1A9zT14A7rsGH9d0xrPkw46PnxAY6pgGtfxbt4ySjL0qlK9dvfFITUx42EgGH7UMoB9NVejoRyVThmxktcxUYR8c4Z92EpUXVfOeDcWGoOJttxX5%2B7nZWpKVzG2YHYwjDlVq7S68N7sGeIIzf0F7ROvUgY2bbUI0LipusZGAX5KLr10A3%2Fjj3zk64E0NIyH1grAihAS4sdfDrsbNgqW6%2Bi36wZ1Mj%2FIIHRsLCQFeXp0tSfEQIUFgCDo9z8ljL&X-Amz-Signature=0c869efd5ba0f283cdd5d128d309c746a9e480c602c8da61702325e6e278accc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDDLZKP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDKV0nnVoIdv2RxC8Fw3cFZKLukulZkKXQuZ1BzaGYhAiBrl2rg91hFn%2Bn64e8giVJc7rsMpTfYUEh5cMpB%2Bef7XSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMch%2FpgwULpZaFr%2FEKKtwDKoBwYZEeab64ETQk06RZ1ADZcBG1hAbthlfY7smebFcbZuwfYxfnjtmn6xeDKUTT%2BIQ8CvVSbn3TW%2Bgb1psTpqeBGIiYjGLuuHJ7iRuUQ4v0tw4zZiLjpd2HjPLVLEbbIYrlt%2Fzc8wTsiCRxWV1bqSMvnmccRiOx5NzAkxU7wD2oL0FP%2B5EKCkQUDJiyml9QWS%2BducItETexrwDJwXJDtYAp75pHRJOvzABFfquDpyqzishi17%2BkfsAYUgFXe%2Bub6qIP%2B5lbS4RVXBc38oYO1Jk4I7G8jc0GBVVjDfO5c6rwoNhVoXZ80birNxeWewAdifMme5l7skPKU8vN0KlEP4RESZh%2BWMn2WCfzHajDZvCbfl0SngLeW3XZRPor8S%2B%2BV3qQ2QT9G4TndsGWJQ0%2FsiQNcjNZJofAcouJD1WoJVOGCPJo6cvW%2FIDIus7qlBYakVvBh4Un7Rq63462%2FQmZGRi7sI7jB5X1sHMi%2FodY%2BBUjP9TDQ9hLTKmLLclYfmhNIIfncVfEF4x7A7oXIidEGnzH4E2l4jxZrah05UypNO1Nyo5BJCEiopm1WUMktl2dqsqUKb3xmkHBlhOrDgvJU5eCy%2FKEdeCIsLQ5PpO1A9zT14A7rsGH9d0xrPkw46PnxAY6pgGtfxbt4ySjL0qlK9dvfFITUx42EgGH7UMoB9NVejoRyVThmxktcxUYR8c4Z92EpUXVfOeDcWGoOJttxX5%2B7nZWpKVzG2YHYwjDlVq7S68N7sGeIIzf0F7ROvUgY2bbUI0LipusZGAX5KLr10A3%2Fjj3zk64E0NIyH1grAihAS4sdfDrsbNgqW6%2Bi36wZ1Mj%2FIIHRsLCQFeXp0tSfEQIUFgCDo9z8ljL&X-Amz-Signature=19faf3f05044f16bf30de43f7999aa0da25f28a72475b79b5d1521d5cd218928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
