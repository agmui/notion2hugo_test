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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQTO7ZH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICH3YD5OG%2FNvaoV%2FDtnP5%2FPnrk9iE%2B3KXkKcWYcuEvABAiEAwAxi%2BiHWD9ZhJzKz11v3gpajQNSRfv2vhXGrACbAm%2Bkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOE6FI2Nh9UEpK0lhircA%2BDeLmEK3pndELNv%2Fb7zvUupLoY2bqXc967kL2HZDihx4ePKQOQavsJ9v7E37uAyyLlSGXeFRVEgFl7MpqDGX5b14n3MAG0B68sKLaiLEow1UWQAlDgA5JKqhaPMmvpVwlWpyH5qiMQfCewGFCDSa97z1EdX%2FevLO2UzP4SrJOI6%2BUHYwOB2AFsq%2FMMbxUVg4oE8v3gou2vkS2e%2FWnikSVjtZSO2FxsEyvx1GZzjQ3DfVFs9JuGlDqAeFwxdEahnXeanQr6yBJC6MhCKgfAijMUAgpBBnuA%2BxHZqGWSnoY0lc0cfE2lg8GLQqIQzmNNvHomFR2i7eG4JS0WrzxQ8Z4U4cdRCu%2BJ%2B4aMf9ugHYATwg%2BlQAfK2cqv8fPH4GGZqfO1g7Up9ycLpmaMnBLC7YpfFNf1UMHmkyarVZRCIhdgrH3X1xRLgYf9kVdj%2FrYzSzbL1V%2BsSlEslOz2isvLmw21qdzwMgbRaslOESriquZjmwQzXpezzyTkOAModyvletiHgzS2o6%2FUnRf5M%2BDjp5MemEPeuNwPYpDsU94Kmozp5%2FbgoueMzUPHbQU01Nz82IjkU8V7MMR4TNWupCG9NqIdkR58%2BYnBHvdzfdiNIhyhFoKkFIPyKCLpio%2BRHMNjL9sIGOqUBM0fJ9R0uu4%2FTJKfIt15E99hKvIrTFi2tVmnzb4fzJ6E0UwOTjYlbWO9tzvLnmGrQnRFq2sWLilkjWRi4NxYtpYkRt9FgsZTQOEZ3Xi8sFQzcSNL8xxDz%2FRe%2BtnQElOdooxTD8FA7o1kxjni3SG9meaYB7aGQGtTLZVfkx%2B3cHkYz8fUtdf3Lv42sG2JHieE%2FY%2BBlRn33SXiwytnjLsxGIrqN%2B5Q5&X-Amz-Signature=24f49ba38ed7407edd4159b23e1f8aa98a76f4e4bf146c0d0c52beb004792b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQTO7ZH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICH3YD5OG%2FNvaoV%2FDtnP5%2FPnrk9iE%2B3KXkKcWYcuEvABAiEAwAxi%2BiHWD9ZhJzKz11v3gpajQNSRfv2vhXGrACbAm%2Bkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOE6FI2Nh9UEpK0lhircA%2BDeLmEK3pndELNv%2Fb7zvUupLoY2bqXc967kL2HZDihx4ePKQOQavsJ9v7E37uAyyLlSGXeFRVEgFl7MpqDGX5b14n3MAG0B68sKLaiLEow1UWQAlDgA5JKqhaPMmvpVwlWpyH5qiMQfCewGFCDSa97z1EdX%2FevLO2UzP4SrJOI6%2BUHYwOB2AFsq%2FMMbxUVg4oE8v3gou2vkS2e%2FWnikSVjtZSO2FxsEyvx1GZzjQ3DfVFs9JuGlDqAeFwxdEahnXeanQr6yBJC6MhCKgfAijMUAgpBBnuA%2BxHZqGWSnoY0lc0cfE2lg8GLQqIQzmNNvHomFR2i7eG4JS0WrzxQ8Z4U4cdRCu%2BJ%2B4aMf9ugHYATwg%2BlQAfK2cqv8fPH4GGZqfO1g7Up9ycLpmaMnBLC7YpfFNf1UMHmkyarVZRCIhdgrH3X1xRLgYf9kVdj%2FrYzSzbL1V%2BsSlEslOz2isvLmw21qdzwMgbRaslOESriquZjmwQzXpezzyTkOAModyvletiHgzS2o6%2FUnRf5M%2BDjp5MemEPeuNwPYpDsU94Kmozp5%2FbgoueMzUPHbQU01Nz82IjkU8V7MMR4TNWupCG9NqIdkR58%2BYnBHvdzfdiNIhyhFoKkFIPyKCLpio%2BRHMNjL9sIGOqUBM0fJ9R0uu4%2FTJKfIt15E99hKvIrTFi2tVmnzb4fzJ6E0UwOTjYlbWO9tzvLnmGrQnRFq2sWLilkjWRi4NxYtpYkRt9FgsZTQOEZ3Xi8sFQzcSNL8xxDz%2FRe%2BtnQElOdooxTD8FA7o1kxjni3SG9meaYB7aGQGtTLZVfkx%2B3cHkYz8fUtdf3Lv42sG2JHieE%2FY%2BBlRn33SXiwytnjLsxGIrqN%2B5Q5&X-Amz-Signature=44f89fce8401e6a7dd1b8aa0e59977a601441c65c9365c08d6e1cdeea12fb785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
